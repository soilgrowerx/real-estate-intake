#!/bin/bash

# Molt Toggle Script (Wayland Friendly)
# Bind this to any key in your Linux Keyboard Settings

TEMP_AUDIO="/tmp/spore_toggle.wav"
LOCK_FILE="/tmp/molt_recording.lock"
WHISPER_URL="http://127.0.0.1:8001/transcribe"
INGEST_URL="http://127.0.0.1:3000/api/ingest"
API_TOKEN="GARDEN_HARVEST_TOKEN_2026"

if [ -f "$LOCK_FILE" ]; then
    # STOP RECORDING
    PID=$(cat "$LOCK_FILE")
    kill $PID
    rm "$LOCK_FILE"
    echo "[Molt] Stopping..."
    
    # Send notification if notify-send is available
    command -v notify-send >/dev/null && notify-send "Molt" "Transcribing Spore..."
    
    # Transcribe
    RESPONSE=$(curl -s -F "file=@$TEMP_AUDIO" "$WHISPER_URL")
    TEXT=$(echo $RESPONSE | python3 -c "import sys, json; print(json.load(sys.stdin).get('text', ''))")
    
    if [ ! -z "$TEXT" ]; then
        echo "[Molt] Captured: $TEXT"
        # Plant in Garden
        curl -s -X POST -H "Content-Type: application/json" -H "X-Garden-Token: $API_TOKEN" \
             -d "{\"source\":\"Molt-Toggle\",\"type\":\"voice\",\"content\":\"$TEXT\",\"tags\":[\"#GlobalCapture\",\"#Pi\"]}" \
             "$INGEST_URL"
        
    # CLIPBOARD
    command -v wl-copy >/dev/null && echo -n "$TEXT" | wl-copy
    command -v xclip >/dev/null && echo -n "$TEXT" | xclip -selection clipboard
    
    # NEW: Update the Reader Buffer
    # Commenting this out so it doesn't overwrite Pi's responses
    # echo "You said: $TEXT" > /tmp/last_pi_reply.txt
    
    command -v notify-send >/dev/null && notify-send "Molt" "Spore Planted: $TEXT"
        
        # Try to type it (works in XWayland)
        command -v xdotool >/dev/null && xdotool type --clearmodifiers "$TEXT"
    else
        echo "[Molt] Transcription failed or empty."
        command -v notify-send >/dev/null && notify-send "Molt" "Transcription Failed."
    fi
    rm "$TEMP_AUDIO"
else
    # START RECORDING
    echo "[Molt] Recording..."
    command -v notify-send >/dev/null && notify-send "Molt" "Listening..."
    
    # Use pw-record for better PipeWire support
    # Recording from the default source (PipeWire should handle the switch)
    pw-record --format s16 --rate 44100 --channels 2 "$TEMP_AUDIO" &
    PID=$!
    echo $PID > "$LOCK_FILE"
    echo "[Molt] Started PID $PID"
fi

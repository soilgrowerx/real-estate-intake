# Insanely-Fast-Whisper Integration Design

## Project: Audio Ingestion Pipeline for Arboracle Ecosystem
**Date:** 2026-03-26
**Status:** Draft

---

## Overview

Integrate `insanely-fast-whisper` CLI into the OpenClaw/Arboracle ecosystem to enable automatic audio-to-text transcription for the Open Arbor, Open Sanctuary, and Open Nursery applications.

---

## Hardware Requirements

| Machine | Status |
|---|---|
| arboracle (Linux laptop) | ❌ No GPU — not suitable |
| Future GPU nodes | ✅ CUDA/MPS capable |
| Local Mac (M-series) | ✅ Tested and ready |

**Note:** Requires NVIDIA GPU (CUDA) OR Apple Silicon (MPS). CPU-only transcription is too slow for this tool's purpose.

---

## Architecture

```
┌─────────────────┐     ┌─────────────────────┐     ┌─────────────────┐
│ Audio Sources   │────▶│ Insanely-Fast-Whisper│────▶│ Open Brain MCP  │
│ (YouTube, Mic, │     │ (Transcription)     │     │ (Ingestion)    │
│  Files, URLs)  │     └─────────────────────┘     └─────────────────┘
└─────────────────┘                                       │
                    ┌─────────────────────┐              │
                    │ Open Arbor App      │◀─────────────┤
                    │ Open Sanctuary App  │              │
                    │ Open Nursery App    │              │
                    └─────────────────────┘
```

---

## Integration Points

### 1. Open Brain MCP (Current)

**Enhancement:** Add `.mp3`, `.wav`, `.m4a` detection to `ingest.py`

```python
# Pseudocode addition to ingest.py
SUPPORTED_AUDIO = {'.mp3', '.wav', '.m4a', '.flac', '.ogg'}

def is_audio_file(path: Path) -> bool:
    return path.suffix.lower() in SUPPORTED_AUDIO
```

**Flow:**
1. Scan directory for audio files
2. Run `insanely-fast-whisper --file-name <path> --transcript-path <temp>.json`
3. Parse JSON output → chunk by timestamps or speaker segments
4. Feed text chunks to `save_thought()` alongside original tags + ["transcription", "audio"]

---

### 2. Open Arbor App

| Feature | Whisper Integration |
|---|---|
| Field Notes | Ranger records voice memo → transcribed to structured notes |
| Species ID Audio | Upload audio of bird/bug calls → transcribe for search index |
| Property Surveys | Audio walkthroughs → searchable text database |

---

### 3. Open Sanctuary App

| Feature | Whisper Integration |
|---|---|
| Land Visit Journals | Voice notes from site visits → searchable text |
| Workshop Recordings | Community calls → transcribed for knowledge base |
| Indigenous Knowledge | Elder audio recordings → preserved as text + embeddings |

---

### 4. Open Nursery App

| Feature | Whisper Integration |
|---|---|
| Grow Logs | Voice-entry grow logs → text for trend analysis |
| Time-lapse Annotations | Audio narration synced with visual records |
| Customer Support | Call recordings → training data for AI support |

---

## CLI Installation & Verification

```bash
# Install
pipx install insanely-fast-whisper --force

# Verify
insanely-fast-whisper --help
```

**Requirements:**
- NVIDIA GPU (CUDA) OR Apple Silicon (MPS)
- Python environment with transformers, optimum, accelerate

---

## Implementation Roadmap

| Phase | Task | Status |
|---|---|---|
| 1 | Verify CLI runs on arboracle host | ❌ Failed — no GPU |
| 2 | Test on M-series Mac | ⬜ Pending |
| 3 | Create wrapper script `transcribe_audio.py` | ⬜ |
| 4 | Modify `ingest.py` to detect + process audio | ⬜ |
| 5 | Test with kidZen audio files | ⬜ |
| 6 | Document in Second Brain | ✅ Done |

**Current constraint:** Linux laptop lacks GPU. Best run on local Mac or future GPU node.

---

## Next Steps

1. **Test locally on M-series Mac** — Run the CLI on your local machine
2. **Create wrapper** — Simple Python wrapper that outputs JSON, handles errors gracefully
3. **Extend ingest.py** — Add audio file detection and transcription step
4. **Document** — Add to Open Arbor / Arboracle design docs in Second Brain

---

*Roots are deep and the signals are clear.*
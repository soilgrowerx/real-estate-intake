import requests
import json
import time

# --- CONFIGURATION ---
API_ENDPOINT = "http://localhost:3000/api/ingest"
GARDEN_TOKEN = "GARDEN_HARVEST_TOKEN_2026"

def ingest_spore(content, source="slack", tags=["Harvested"]):
    """Sends a payload to the Neocambrian Garden Ingestion API."""
    payload = {
        "content": content,
        "source": source,
        "type": "text",
        "tags": tags + ["PythonBridge"]
    }
    
    headers = {
        "Content-Type": "application/json",
        "X-Garden-Token": GARDEN_TOKEN
    }
    
    try:
        response = requests.post(API_ENDPOINT, json=payload, headers=headers)
        if response.status_code == 200:
            print(f"✅ Successfully harvested to Garden: {content[:30]}...")
        else:
            print(f"❌ Failed to ingest (Status: {response.status_code}): {response.text}")
    except Exception as e:
        print(f"❌ Connection Error: {e}")

if __name__ == "__main__":
    print("🌿 Neocambrian Garden - Slack Bridge Reference")
    print("---------------------------------------------")
    
    # Example simulated harvest from a chat
    mock_messages = [
        "Thinking about the intersection of mycelial networks and decentralised storage.",
        "Resource: 'The Overstory' by Richard Powers. Great for garden metaphors.",
        "Idea: Every spore should have a 'half-life' where it fades if not myceliated."
    ]
    
    for msg in mock_messages:
        ingest_spore(msg, source="slack", tags=["Philosophy", "Research"])
        time.sleep(1) # Slight delay
        
    print("\n[DONE] Check your Harvest Panel in the Edgeless Garden.")

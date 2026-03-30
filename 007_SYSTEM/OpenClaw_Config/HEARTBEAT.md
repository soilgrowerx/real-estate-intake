# HEARTBEAT.md

# Keep this file empty (or with only comments) to skip heartbeat API calls.
# Add tasks below when you want the agent to check something periodically.

## Weekly Chatbot History Scraper
**Frequency:** Every week.
**Task:** 
1. Use the `browser` tool (profile: "openclaw") to check:
   - **Gemini (Primary):** `https://gemini.google.com/app` (Select Deep Research if available)
   - **Perplexity:** `https://www.perplexity.ai/library` (Select Pro/Deep Research if available)
   - **Claude:** `https://claude.ai/chats`
2. Identify new deep research or extensive threads. *Note: Keep in mind that some threads are ongoing (e.g. "OSU Winter 2026 Week 8" in Perplexity spanning multiple courses, or "weeks 1-*" threads in Gemini tied to specific courses but spanning multiple weeks due to large context windows). These ongoing threads must be re-scanned and updated.*
3. Extract context, synthesize core findings (Neocambrian format), and save to `/home/george/Documents/Compost_Pile/` for review.
4. Ensures zero token/history loss to external silos. Note: Use the `local-light` agent (Llama 3.2 3B) for this extraction and synthesis to preserve Gemini credits. Stagger runs to avoid CPU spikes.

## Daily Open Brain Ingestion
**Frequency:** Every day at a convenient low-activity time (e.g., 2:00 AM).
**Task:**
1. Sweep `/home/george/Documents/Compost_Pile` for any new un-processed `*.md` files.
2. Run the bulk ingestion script: `/home/george/.openclaw/workspace-dev/venv/bin/python /home/george/.openclaw/workspace-dev/open-brain-mcp/ingest.py /home/george/Documents/Compost_Pile`
3. Ensure it runs smoothly without cluttering the Garden. Move processed raw files to `/home/george/Documents/Recycled_Pile` if not already handled by the ingestion script.
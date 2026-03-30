# Checkpoint Protocol: The Mycelial Anchor

To prevent credit leaks and cognitive bleed, Pi will follow these "Out-breath" rules for George:

1. **Aggressive Durability:** Before any context clearing (compaction or `/clear`), Pi must ensure all critical project state (fingerprints, URLs, logic decisions, build fixes) is written to `memory/*.md`.
2. **The 10-Turn Sweep:** Every 10 messages, Pi will perform a "Biome Sync" (manual summary written to a restoration file) to ensure no token is lost to the void.
3. **Flash First:** Pi will prioritize Gemini Flash for all routine coordination to keep the budget healthy.
4. **The Anchor Alert:** If the context window exceeds 500k tokens, Pi will proactively provide a "Recovery Seed" (the manual anchor) and request a **Session Renewal**.
5. **The Cycle of Renewal:** To truly zero the context (which `/clear` in the TUI does not do for the AI's server-side memory), we must migrate to a fresh session once the Anchor is set. Pi will signal when it is time to close this thread and start a new "Clean Breath" session.

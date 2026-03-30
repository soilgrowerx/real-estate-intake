# Lesson Ledger: Neocambrian restoration

## System Restoration (2026-03-29)
- **VibeVoice Withdrawal:** Do not attempt VibeVoice-ASR 7B on `arboracle` (Ryzen 7 7735U) without external GPU. The model shards consume >30GB of system RAM, causing OOM kills and gateway instability.
- **GOG Auth Stability:** Integrity check failures on Google tokens require a `gog auth remove [email] --force` followed by a fresh `gog auth add [email] --verbose`.
- **Memory Integrity:** Aggregate all session context into `/home/george/Documents/Second_Brain/memory/YYYY-MM-DD.md` and index via `MEMORY.md`. 
- **Lossless Claw Pattern:** Use `[[wiki-links]]` in the index to ensure immediate context recovery after any future "biome collapse."

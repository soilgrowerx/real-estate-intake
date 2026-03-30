# Lesson Ledger: Neocambrian restoration

## System Restoration (2026-03-29)
- **VibeVoice Withdrawal:** Do not attempt VibeVoice-ASR 7B on `arboracle` (Ryzen 7 7735U) without external GPU. The model shards consume >30GB of system RAM, causing OOM kills and gateway instability.
- **GOG Auth Stability:** 
    - **Issue:** Google Auth prompts repeatedly even after successful handshake. 
    - **Cause:** Duplicate token files in the keyring (`token:default:[email]` vs `token:[email]`) and incorrect scope matching.
    - **Fix:** Purge ALL tokens for the specific email first: `rm /home/george/.config/gogcli/keyring/*[email]*`. Then run a single full-scope auth: `gog auth add [email] --services all --verbose`.
- **Memory Integrity:** Aggregate all session context into `/home/george/Documents/Second_Brain/memory/YYYY-MM-DD.md` and index via `MEMORY.md`. 
- **Lossless Claw Pattern:** Use `[[wiki-links]]` in the index to ensure immediate context recovery after any future "biome collapse."

## Security & Sync (2026-03-30)
- **API Exposure Mitigation:** Large databases like `.smtcmp_json_db` must NEVER be synced to GitHub. They contain raw chat logs which may include plaintext API keys. I have purged this folder from the repository.
- **Large File Handling:** Exclude `.pptx` and other binary study materials from GitHub sync using `.gitignore`. These should stay in the `compost_pile` for extraction, not version control.
- **Project Structure:** Use `007_SYSTEM/Skills/` for localized skill logic to ensure they are backed up in the Garden but not reliant on external registries.

# High-Fidelity Synthesis Protocol (Neocambrian Standard)

**Objective:** Transform raw extractions (PDF dumps, ChatGPT history, spores) into structured, academically sound Neocambrian assets.

## 🛠 Tooling
- **Engine:** GLM-4 (Local Workhorse) via OpenClaw `local-heavy` agent.
- **Remote Access:** `rclone` mapping to:
  - Shared Drive (Restoration): `googledrive:Inputs/`
  - My Drive (Actual): `googledrive: --drive-root-folder-id 0AN7WKtIMr9jUUk9PVA`
- **Environment:** Ubuntu Linux (arboracle) + Second Brain (Obsidian).

## 📋 Methodology
1. **Source Validation:** Identify the origin (Shared Drive PDF, My Drive root, Chat History, etc.).
2. **High-Fidelity Extraction:**
   - Retain full citations and academic context.
   - Remove "AI filler" (delve, tapestry, crucial).
   - Structure with PIPR-compatible headers.
3. **Synthesis & Categorization:**
   - Consolidate similar topics into sub-folders within `004_RESOURCES`.
   - Never leave files at the root level of a major PIPR category.
4. **The "Grandchild Test":** Will this be understandable and valuable in 2076?

## 🚀 Execution Strategy
- Use sub-agents to process files in batches of 10.
- Log completion in `007_SYSTEM/Karma_Log.md`.

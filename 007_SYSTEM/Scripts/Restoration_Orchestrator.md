# Restoration Orchestrator (Goose + GLM-4)

**Role:** High-Fidelity Data Extraction & Synthesis.
**Tools:** `rclone`, `glm4:latest`, `pdftotext`.

## 📍 Target Sources
- **Google Drive Remote:** `googledrive:`
- **Current Focus:** `Inputs/` hex-named directories.

## ⚙️ Operating Procedures
1. **Discovery:** Use `rclone lsf` to map the hex-named project folders.
2. **Extraction:** Download PDFs locally to `~/.openclaw/tmp/restoration/`.
3. **Reasoning:** Use `glm4` sub-agent to:
   - Identify the project theme.
   - Extract core Neocambrian wisdom.
   - Propose a human-readable folder name.
4. **Synthesis:** Commit structured markdown files to `004_RESOURCES/Forestry_Ecology_Synthesis/`.
5. **Rename:** Perform `rclone move` to stabilize the Drive hierarchy.

## 🚦 Status
- **Google Drive Link:** Active via `googledrive:`.
- **GLM-4 Agent:** Active as `local-heavy`.

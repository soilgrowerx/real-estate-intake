# SKILL.md - OpenCLI-RS Scraper (Local Mycelial Implementation)

## Purpose
Directly utilize the `opencli-rs` binary to fetch real-time data from 55+ sites (X, Reddit, YouTube, Bilibili) using local session cookies from Chrome. This bypasses the need for official APIs and ensures data sovereignty for the Neocambrian Garden.

## Prerequisites
- `opencli-rs` binary installed in `~/bin/`.
- OpenCLI Chrome Extension installed and active on the host.
- Chrome window must be open for session bridge connectivity.

## Instructions
1.  **Direct Execution:** Use the `exec` tool to call `opencli-rs [site] [keyword/url]`.
2.  **Authentication:** The tool automatically reuses the existing Chrome login session on the `arboracle` host.
3.  **Output Processing:** Capture the raw text or JSON and promote high-signal findings to `MEMORY.md`.
4.  **Format Preference:** Always use `-f md` or `-f json` for structured parsing.

## Tool Command Examples
- Search X (Twitter): `opencli-rs x search "regenerative agriculture" -f md`
- Fetch Reddit: `opencli-rs reddit sub "solarpunk" -f md`
- YouTube Extract: `opencli-rs youtube video [url] -f md && opencli-rs youtube transcript [url] -f md`

# SKILL.md - Lossless Claw Pattern

## Purpose
Ensure zero context loss across session resets by aggressively indexing and summarizing session history into the Second Brain.

## Instructions
1.  **Index First:** Before starting complex work, check `MEMORY.md` and the `memory/` directory for prior context.
2.  **Continuous Flush:** Every 10-15 messages, summarize key decisions and system states.
3.  **Cross-Linking:** Use `[[wiki-links]]` to connect session summaries to specific project files.
4.  **Verification:** Always verify that a memory file was written successfully before concluding a high-context session.

## Storage Schema
- Index: `/home/george/Documents/Second_Brain/MEMORY.md`
- Durable Logs: `/home/george/Documents/Second_Brain/memory/YYYY-MM-DD.md`

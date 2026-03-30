# TOKEN_STRATEGY.md - The 97% Reduction Protocol

Based on **OpenClaw Token Optimization Guide.docx**.
**Goal:** Reduce monthly burn from ~$1500 to ~$50 while increasing capabilities.

## 1. Session Initialization (✅ Active)
**The Rule:** Stop loading 50KB of history on every message.
- **Implemented in:** `SOUL.md` -> `Protocol: Session Initialization`
- **Action:** Only load `SOUL.md`, `USER.md`, `AGENTS.md`. Use `memory_search()` for history.
- **Savings:** ~80% context reduction per session start.

## 2. Solo Orchestrator Protocol (✅ Active)
**The Rule:** Manage the intelligence supply chain, not just the code.
- **Spec Quality Audit:** Pi audits every complex task spec before execution to prevent token waste from hallucination.
- **Outcome Specification:** Focus on defining the outcome, not the line-by-line logic.

## 3. Model Routing (✅ Active)
**The Rule:** Don't use a tank to deliver a pizza.
- **Implemented in:** `AGENTS.md` -> `The Council Members`
- **Tier 1 (Routine):** `google/gemini-2.0-flash` (Audit, file checks, summaries).
- **Tier 2 (Reasoning):** `google-gemini-cli/gemini-3-flash-preview` (Planning, complex tasks).
- **Tier 3 (Strategic):** `google-gemini-cli/gemini-3-pro-preview` (Architecture, deep research).
- **Savings:** ~90% cost reduction on routine tasks.

## 3. Rate Limits & Batches (✅ Active)
**The Rule:** Prevent runaway automation.
- **Implemented in:** `SOUL.md` -> `Protocol: Rate Limits`
- **Action:** 5s delay between API calls. Max 5 searches/batch.
- **Savings:** Prevents accidental $20 loops.

## 4. Sovereign Heartbeat (⚠️ Pending Manual Config)
**The Rule:** Don't pay for "Are you there?" pings.
- **Current:** Using Main Model (Paid).
- **Target:** `ollama/llama3.2:3b` (Free, Local).
- **Implementation:**
  Update `~/.openclaw/openclaw.json`:
  ```json
  "heartbeat": {
    "every": "1h",
    "model": "ollama/llama3.2:3b",
    "session": "main",
    "prompt": "Check: Any blockers or updates needed?"
  }
  ```
- **Savings:** $15-30/month (eliminates idle costs).

## 5. Prompt Caching (⚠️ Pending Config)
**The Rule:** Don't pay full price for static context.
- **Target:** Enable caching for `SOUL.md`, `USER.md`, `AGENTS.md`.
- **Implementation:**
  Update `~/.openclaw/openclaw.json`:
  ```json
  "cache": {
    "enabled": true,
    "ttl": "5m"
  }
  ```
- **Savings:** ~90% discount on repeated context.

---

## Daily Budget Cap
- **Soft Limit:** $5/day
- **Hard Limit:** $200/month

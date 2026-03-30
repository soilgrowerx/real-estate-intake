# TurboQuant & Anthropic Dispatch — Tech Brief (2026-03-28)

**Date:** 2026-03-28
**Tags:** #ai-infra #inference #anthropic #google #kv-cache
**MOC:** [[004_RESOURCES]]
**Source:** Gemini Chat Extraction

## TurboQuant (Google Research)

Target: KV cache compression for inference (Gemini, Claude, etc.).

**Two-step mechanism:**
1. **Polar Quant** — Converts data to polar coordinates, making patterns predictable, eliminating correction footnotes.
2. **Quantized Johnson-Lindenstrauss (QJL)** — Reduces leftover error to single bit (+/-), zero memory overhead.

**Benchmarks:** 6x less memory, 8x faster key operations, zero accuracy loss. Needle-in-haystack: 100% retrieval at 4x compression up to 104K tokens. Verified at ICLR 2026.

**Key insight:** No retraining needed. Purely inference-time. A developer implemented the equations in days and ran Gemma 3 on an RTX 4090 at 2-bit precision with character-identical output.

> Industry bottleneck shifts from training massive models to optimizing inference plumbing.

## Anthropic Dispatch & Computer Use

Three primitives for remote AI work:

1. **Scheduled Tasks** — Controlled cloud environment with configurable network/setup. Use case: auto-syncing Go/Python libraries.
2. **Dispatch (Phone/Desktop pairing)** — Phone = command surface, desktop = execution surface. Spawn multiple parallel co-work sessions. Limitations: desktop must stay powered, folder approval per subtask, ~50% success on complex multi-app tasks.
3. **Computer Use (MCP fallback)** — Raw keyboard/mouse for legacy systems without API access. MCP is the "universal USB of the AI age" but can't cover everything.

## Garden Relevance
- TurboQuant could reduce inference costs for any local AI deployment
- Dispatch pattern mirrors our OpenClaw architecture (phone command + desktop execution)
- Computer Use is relevant to legacy system integration in land management workflows

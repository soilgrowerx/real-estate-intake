# Protocol: Neocambrian Logger

## Role
The Logger agent transforms raw structured or unstructured messages into "curriculum-grade" documentation within the Neocambrian Ledger.

## Inputs
Messages starting with `Log:` or clearly intended for capture.
Example: `Log: Evyn, 2026-02-20, 40 minutes outside, oak ID, soil texture test, friction: mud meltdown at end`

## Processing Rules
1. **Timestamp**: Use provided date or current date.
2. **Categorization**: Map activity to domains (Physical, Cognitive, Emotional, Ecological).
3. **Artifact Detection**: Tag as `#portfolio` if it captures a milestone or significant "mastery moment."
4. **Constitutional Alignment**: Reference a Constitutional Axiom if applicable.

## Output Format
Create or append to `001_PROJECTS/Neocambrian-Academy/[Child]/02_Education_and_Development/Daily-Logs/YYYY-MM-DD.md` within the Second Brain.

### Template:
---
date: YYYY-MM-DD
child: [Name]
tags: #daily-log #academy
---

## Summary
[Brief description of activity]

## Domains
- **Physical**: [e.g. Climbing, walking]
- **Cognitive**: [e.g. Tree ID, counting]
- **Emotional**: [e.g. Responding to frustration]
- **Ecological**: [e.g. Soil testing]

## Constitutional Note
[Reference Axiom]

## Raw Entry
> [Original Message]

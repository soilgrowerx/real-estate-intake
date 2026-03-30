# Protocol: Neocambrian Planner

## Role
The Planner agent generates daily/weekly "Instructional Work Cycles" and "Nature Blocks" for Bodie and Evyn, aligning them with the current seasonal theme and individual competency goals.

## Inputs
- **Yesterday's Logs**: From child folders.
- **Current Theme**: (e.g. Earth & Soil).
- **Competency Goals**: (e.g. Knot Tying for Evyn, Water Pouring for Bodie).

## Processing Rules
1. **Balance**: Ensure 2-hour instructional work vs. 90-minute nature play.
2. **Context**: Transmute generic concepts into land-based exercises.
3. **Materials**: List required loose parts (stones, logs, ropes).
4. **Socratic Provocation**: Generate 1-2 questions for the adult guide.

## Output Format
Create or update `001_PROJECTS/Neocambrian-Academy/[Child]/02_Education_and_Development/Plan-YYYY-MM-DD.md` within the Second Brain.

### Template:
---
date: YYYY-MM-DD
child: [Name]
theme: [Theme]
tags: #daily-plan #academy
---

## Instructional Work (2 hrs)
- **Activity**: [e.g. Pouring work with soil samples]
- **Goal**: [e.g. Precision and sensory discrimination]
- **Socratic Question**: [e.g. "What do you notice about how the dry soil moves?"]

## Nature/Play/Fun (90 mins)
- **Zone**: [e.g. Mud Kitchen / Climbing Grove]
- **Provocation**: [e.g. A new set of measuring cups placed in the mud]

## Material Checklist
- [ ] [Item 1]
- [ ] [Item 2]

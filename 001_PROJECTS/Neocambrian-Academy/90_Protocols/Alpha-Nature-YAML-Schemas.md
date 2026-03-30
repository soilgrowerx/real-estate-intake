# Alpha-Nature Hybrid Model: YAML Schemas

These schemas allow OpenClaw agents to autonomously parse, link, and generate curriculum.

## Schema 1: Activity_Node
Use for files in `Curriculum_Nodes/`.

```yaml
---
type: activity_node
title: "[Activity Name]"
paradigm: [[Montessori|Waldorf|Forest School|Alpha]]
target_milestones: 
  - [[Milestone Name]]
prerequisites: 
  - [[Prerequisite Name]]
rhythm_state: "Contraction|Expansion" # Waldorf pacing (In-breath vs Out-breath)
materials_required:
  - Material 1
location: "Indoor|Outdoor"
risk_assessment: "Low|Medium|High - [Note]"
duration_minutes: 15
weather_dependency: "Clear|Rain|Any"
---
# Description
[Detailed description]

# Adult Guide Socratic Prompts
- "Prompt 1"
```

## Schema 2: Milestone_Node
Use for files in `Milestone_Database/`.

```yaml
---
type: milestone_node
title: "[Milestone Name]"
domain: "Fine Motor|Gross Motor|Cognitive|Emotional"
age_baseline_months: 18_to_24
current_status: "Unintroduced|Practicing|Mastered"
mastery_criteria: "[Specific observable criteria]"
linked_activities:
  - [[Activity Name]]
progression_pathway:
  previous_node: [[Previous Milestone]]
  next_node: [[Next Milestone]]
---
# Observation Metrics
[What to look for]
```

## Schema 3: Daily_Log
Use for files in `Child_Logs/`.

```yaml
---
type: daily_log
date: YYYY-MM-DD
child_energy_level: "High|Medium|Low"
predominant_mood: "[Description]"
activities_attempted:
  - activity: [[Activity Name]]
    duration: 15
    engagement_level: "High|Medium|Low"
    mastery_observed: "[Notes]"
milestones_demonstrated:
  - [[Milestone Name]]
environmental_factors: "[Weather, Noise, etc.]
parent_notes: "[Observations]"
---
# Daily Narrative
[Summary]
```

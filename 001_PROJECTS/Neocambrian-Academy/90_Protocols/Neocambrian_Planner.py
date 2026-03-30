#!/usr/bin/env python3

import os
from datetime import datetime

# Neocambrian Academy Path Configuration
ACADEMY_DIR = "/home/george/Documents/Second_Brain/001_PROJECTS/Neocambrian-Academy"
EVYN_LOGS_DIR = os.path.join(ACADEMY_DIR, "10_Evyn/02_Education_and_Development/Daily-Logs")
BODIE_LOGS_DIR = os.path.join(ACADEMY_DIR, "20_Bodie/02_Education_and_Development/Daily-Logs")
PLANS_OUT_DIR = os.path.join(ACADEMY_DIR, "02_PLANS")
OUTBOX_DIR = os.path.join(ACADEMY_DIR, "Print-Outbox")

def get_seasonal_theme():
    # Placeholder for dynamic theme determination
    return "Trees & Wood (Focus: Bark and Branch Scavenger Hunt)"

def get_latest_log_content(child_name):
    log_dir = EVYN_LOGS_DIR if child_name == "Evyn" else BODIE_LOGS_DIR
    if not os.path.exists(log_dir):
        return "No log directory found."
    
    log_files = sorted([f for f in os.listdir(log_dir) if f.endswith(".md")], reverse=True)
    if not log_files:
        return "No prior logs found."
    
    with open(os.path.join(log_dir, log_files[0]), 'r') as f:
        return f.read()

def generate_plan(child_name, theme, context):
    today = datetime.now().strftime("%Y-%m-%d")
    return f"""---
date: {today}
child: {child_name}
theme: "{theme}"
tags: ["daily-plan", "academy"]
---

# Neocambrian Academy: Daily Plan for {child_name}

**Date:** {today}
**Theme:** {theme}

## 1. Instructional Work Cycle (2 Hours)
*   **Focus**: Sensorial and Practical Life.
*   **Activity**: { "Knot tying and leaf identification" if child_name == "Evyn" else "Water pouring and texture sorting" }.
*   **Socratic Provocation**: "How many different textures can you find on that branch?"

## 2. Nature Block (90 Minutes)
*   **Location**: The Climbing Grove & Mud Kitchen.
*   **Mission**: Find three fallen branches of different lengths. Compare their bark.

## 3. Materials Needed
*   [ ] Field Guide
*   [ ] Collection Bag
*   [ ] Magnifying Glass

---
### Context from Prior Log:
{context}
"""

def main():
    os.makedirs(PLANS_OUT_DIR, exist_ok=True)
    
    theme = get_seasonal_theme()
    for child in ["Evyn", "Bodie"]:
        context = get_latest_log_content(child)
        plan = generate_plan(child, theme, context)
        
        today = datetime.now().strftime("%Y-%m-%d")
        filename = f"Plan-{today}-{child}.md"
        
        # Save to Plans folder
        with open(os.path.join(PLANS_OUT_DIR, filename), "w") as f:
            f.write(plan)
            
        print(f"Plan generated for {child}: {filename}")

if __name__ == "__main__":
    main()

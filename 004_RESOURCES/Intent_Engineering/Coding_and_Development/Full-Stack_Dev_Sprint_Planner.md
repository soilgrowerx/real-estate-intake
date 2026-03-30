# Full-Stack Development Sprint Planner

> **Use Case:** To synthesize a high-level product vision, user feedback (from video walkthroughs, transcripts), and previous sprint notes into a single, comprehensive, and actionable development brief for an AI-powered development team.

```markdown
# [PROMPT-ROLE: Principal AI Product Manager & Systems Architect]

Your task is to analyze all provided context—including the project's grand vision, transcripts of recent user feedback, and previous development briefs—to generate a master development plan for the upcoming sprint. This plan must be unquestionably straightforward, prioritizing critical bug fixes and stability while architecting for the long-term vision.

## PROJECT: [PROJECT NAME, e.g., Arboracle Genesis]

## SPRINT THEME: [SPRINT THEME, e.g., The Professional Baseline & Agent-Ready Architecture]

## PART 1: THE VISION - ARCHITECTING FOR THE FUTURE

Before addressing any specific tasks, internalize these guiding architectural principles. Every line of code must serve this long-term vision of [LONG-TERM VISION, e.g., a decentralized swarm of intelligent, voice-first AI agents].

*   **Principle of Agent-Ready APIs:** All data points must be accessible and modifiable via clean, stateless, granular API endpoints. An AI agent must be able to update a single field without fetching an entire form state. (e.g., `PUT /api/v1/trees/{id}/dbh`)
*   **Principle of Voice-First Data Structures:** Data models must be structured for conversational updates. The backend must be designed to parse natural language intent (e.g., "Note moderate soil compaction") and map it to structured data.
*   **Principle of Asynchronous Operations:** Resource-intensive tasks (e.g., PDF generation, external API pushes, AI transcription) must be background jobs, queued and executed independently with the UI updated upon completion.
*   **Principle of Extensible Identity:** AI Personas (e.g., Bodhi, Sequoia) must be built as modular, swappable components. Adding a new agent should be a configuration change, not a code change.

## PART 2: THE SPRINT - ACTIONABLE TASK ROADMAP

Based on detailed analysis of user feedback from [SOURCE OF FEEDBACK, e.g., the latest video walkthroughs], here are the concrete tasks to achieve a stable and professional product.

### Phase 0: Critical Stability & UX Polish (P0 - Highest Priority)
**Objective:** Eliminate all known critical bugs and user experience frustrations.

1.  **[FEATURE MODULE 1, e.g., Map Module]**
    *   **User Story:** "As a [USER PERSONA], I need [USER NEED], so that [USER GOAL]."
    *   **Implementation Details:**
        *   **CRITICAL FIX:** [Describe the critical bug, e.g., Resolve the client-side exception that occurs when clicking the Map button].
        *   **ENHANCEMENT:** [Describe a necessary enhancement, e.g., Implement both Street and Satellite layer toggles].
        *   **UX IMPROVEMENT:** [Describe a UX fix, e.g., The map needs a full-screen mode for the 'Pick on Map' feature].

2.  **[FEATURE MODULE 2, e.g., UI/UX Inconsistencies]**
    *   **User Story:** "As a user, I need the application to behave consistently and predictably, without [PAIN POINT, e.g., non-scrolling panes or confusing navigation]."
    *   **Implementation Details:**
        *   **BUG FIX:** [Describe the bug, e.g., Fix the non-scrolling panes in the tree details view on mobile].
        *   **BUG FIX:** [Describe another bug, e.g., The 'Edit' button on the list view does not work; make the edit flow consistent].

3.  **[FEATURE MODULE 3, e.g., Data Integrity]**
    *   **User Story:** "As a user, when I add data like a [DATA TYPE, e.g., photo or measurement], I expect it to be saved correctly and displayed accurately every time."
    *   **Implementation Details:**
        *   **FULL-STACK IMPLEMENTATION:** [Describe the end-to-end task, e.g., Implement the full backend logic to store uploaded images (e.g., in S3) and associate them permanently with the correct tree_id].
        *   **BUG FIX:** [Describe data display bug, e.g., Fix the 'Planted: Invalid Date' and 'Age: NaN days old' bugs on the tree list view].

### Phase 1: Professional Module Refinement (P1 - High Priority)
**Objective:** To build out the specialized, professional-grade features that provide core value.

1.  **[PROFESSIONAL MODULE, e.g., Construction Monitoring Module]**
    *   **User Story:** "As a [PROFESSIONAL PERSONA, e.g., construction site arborist], I need a dedicated form template for my specific, recurring monitoring tasks, and I want to organize all reports under a single 'Project'."
    *   **Implementation Details:**
        *   **DATA MODEL:** [Describe the necessary data model changes, e.g., Create a 'Projects' entity and an 'Assessments' table with a foreign key to a tree_id].
        *   **UI/FORM BUILD:** [Describe the form to be built, e.g., Build the dedicated 'Construction Monitoring' form with specific dropdowns for TPZ Fencing, TPZ Incursions, CRZ Impacts, etc.].
        *   **FUNCTIONALITY:** [Describe key functionality, e.g., Create a printable PDF report function for these assessments].

This is more than a sprint; it's a declaration of intent. Let's build a platform so solid and a vision so clear that it becomes the undeniable standard-bearer for the future of [INDUSTRY, e.g., arboriculture and forestry].

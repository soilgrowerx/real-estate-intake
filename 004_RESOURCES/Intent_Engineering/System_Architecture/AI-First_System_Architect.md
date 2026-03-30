# AI-First System Architect

> **Use Case:** To translate a high-level product concept and long-term vision into a comprehensive, phased technical implementation plan. This includes defining architectural principles, recommending a full tech stack, and structuring the development process for a team of AI agents.

```markdown
# [PROMPT-ROLE: Chief AI Architect & Engineering Lead]

Your mission is to devise a complete, actionable, and phased implementation plan to build and deploy the [PRODUCT_NAME, e.g., Arboracle Web Application] MVP. This plan must transform the high-level concepts from the provided vision documents into a structured development strategy for a team of specialized agents, starting from the foundation of a forked open-source platform.

## PROJECT DIRECTIVE: [PROJECT_CODENAME, e.g., Operation Arboracle Genesis]

### 1. Mission Statement & Guiding Principles
Our mission is to adapt the forked [BASE_PLATFORM, e.g., Terraware] open-source software to create the Minimum Lovable Product (MLP). This is a fundamental transformation of the platform's focus from [ORIGINAL_FOCUS, e.g., nursery-centric reforestation] to [NEW_FOCUS, e.g., individual and community-based tree stewardship].

*   **Biomimicry First:** The app's structure and user flow should mirror natural systems—interconnected, resilient, and regenerative.
*   **User as Steward:** Our primary user is a [USER_PERSONA, e.g., "Soil Grower"]. The app must empower them to care for their assets, track their impact, and connect with a community.
*   **Extensible by Design:** The architecture must be modular. The core backend will be the foundation upon which we layer the unique UI, GIS capabilities, and the AI personality framework.

### 2. Agent Team Structure & Roles
*   **Agent Terra (Backend & Infrastructure):** Manages server-side logic, database architecture (PostgreSQL), and cloud infrastructure (e.g., Google Cloud, Firebase).
*   **Agent Silva (Frontend & UI/UX):** Implements the brand identity and builds the user-facing components (e.g., using React/Next.js).
*   **Agent Bodhi (AI & Data Science):** Architects and integrates the AI personalities, manages LLM interactions (e.g., Gemini API), and develops data-driven insights.
*   **Agent Myco (QA & Testing):** Ensures resilience through testing all features, data integrity, and application stability (e.g., using Cypress, Jest).

### 3. Phased Implementation Plan

#### Phase 1: Foundation & Core Adaptation (Weeks 1-3)
**Goal:** Adapt the core data model from tracking [OLD_DATA_MODEL, e.g., batches of seedlings] to tracking [NEW_DATA_MODEL, e.g., individual Trees].

*   **Agent Terra (Backend):**
    *   **Task:** Audit the Terraware backend and design a new primary database schema for an individual `[OBJECT]` (e.g., Tree). It must include fields for: `id`, `species`, `gps_location`, `date_planted`, `health_status`, `owner_user_id`, and a JSONB field for `notes`.
    *   **Task:** Develop new RESTful API endpoints (`POST`, `GET`, `PUT /api/v1/[objects]`) for CRUD operations on the new object.
*   **Agent Silva (Frontend):**
    *   **Task:** Set up the frontend environment (e.g., `npx create-next-app`). Create static mock-ups of the main Dashboard.
*   **Agent Bodhi (AI):**
    *   **Task:** Research and document API specifications for [EXTERNAL_AI_SERVICE, e.g., iNaturalist for species identification]. Design the data model for AI Personalities (e.g., a `personalities.json` config file).
*   **Agent Myco (QA):**
    *   **Task:** Set up a testing framework (e.g., Cypress). Develop an initial test plan for the new API endpoints.

#### Phase 2: The Core Interface (Weeks 4-6)
**Goal:** Implement the core branding and build the basic functionality for users to add and view their assets.

*   **Agent Silva (Frontend):**
    *   **Task:** Implement the full brand identity (logos, color palette, typography). Build the "Add New [OBJECT]" form and the main dashboard to fetch and display a list of the user's assets.
    *   **Task:** Implement a basic map view (using a library like `react-leaflet` or `@vis.gl/react-google-maps`) that displays pins for each asset.
*   **Agent Terra (Backend):**
    *   **Task:** Implement server-side validation for all form data.

#### Phase 3: Bringing the AI to Life (Weeks 7-9)
**Goal:** Integrate the first version of the AI personalities and user profiles.

*   **Agent Bodhi (AI):**
    *   **Task:** Activate the "Ask [AI_NAME]" feature. Connect it to a backend service that routes user queries to an LLM (e.g., Gemini via Google AI Studio API). Implement a personality switcher UI element.
    *   **Task:** Engineer the system prompts for the LLM. The prompt must instruct the LLM to respond in the selected persona, using the context of the specific asset the user is viewing. (e.g., `"You are Quercus, the Knowledge Authority. A user is asking about their Oak tree. Answer: [user question]"`).
*   **Agent Silva (Frontend):**
    *   **Task:** Build the chat-style UI for AI interaction. Build the public user profile page.
*   **Agent Terra (Backend):**
    *   **Task:** Create the backend logic to support the AI interaction, passing requests securely to the LLM and returning the response. This should be a cloud function (e.g., Firebase Functions or Google Cloud Functions).

#### Phase 4 & Beyond: Ecosystem Integration & MVP Launch
**Goal:** Prepare for launch by integrating placeholders for future ecosystem features, polishing the UX, and deploying.

*   **Tasks:**
    *   Add UI placeholders for future modules like [FEATURE_1, e.g., Soil Bank] and [FEATURE_2, e.g., Tiaki Forests].
    *   Implement the gamified user classification system (e.g., user moves from "Seedling Steward" to "Forest Architect" after registering 10 assets).
    *   Conduct comprehensive security audit, performance optimization, and final deployment to a cloud host (e.g., Firebase Hosting, Vercel, Fly.io).

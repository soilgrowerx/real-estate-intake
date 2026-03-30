# ARBORACLE BRIDGE PROTOCOL
## The Seamless Sync (Local <-> Cloud)

**Objective:** Allow arborists to use a sovereign, local OpenClaw agent (Local Bodhi) to capture field data ('Spores') which are then injected into the centralized Arboracle Platform (Cloud Bodhi) for execution.

### 1. The Architecture
*   **Local Node (The Spore Capture):**
    *   **Agent:** Local Bodhi (OpenClaw).
    *   **Interface:** WhatsApp, Signal, Voice (Molt).
    *   **Action:** Captures raw audio/text, parses intent (e.g., 'New Client: Tree Mann Solutions'), and stores as a JSON Spore.
    *   **Sovereignty:** Data lives locally first. User owns the 'Draft'.

*   **The Bridge (The Sync Layer):**
    *   **Mechanism:** API Injection.
    *   **Endpoint:** `https://api.arboracle.app/v1/bridge/inject`
    *   **Auth:** User API Token (generated in Arboracle.app settings).
    *   **Payload:** The parsed JSON Spore.

*   **Cloud Node (The Execution):**
    *   **Agent:** Cloud Bodhi (Platform AI).
    *   **Action:** Receives injected Spore. Executes CRUD (Create Client, Invoice, Job).
    *   **Feedback:** Sends success/failure webhook back to Local Node.

### 2. The Workflow
1.  **Arborist:** Speaks to Local Bodhi: "Create a job for Mark Mann at 123 Oak St for soil invigoration."
2.  **Local Bodhi:** Transcribes, structures JSON: `{ type: 'job', client: 'Mark Mann', service: 'Soil Invigoration' }`.
3.  **Bridge:** Sends JSON to Cloud API.
4.  **Cloud Bodhi:** Executes DB write. Generates Invoice #1001.
5.  **Bridge:** Returns "Job #1001 Created" to Local Bodhi.
6.  **Local Bodhi:** Texts Arborist: "Job created. Invoice #1001 ready."

### 3. Implementation Steps
*   [ ] Define JSON Schema for Spore Injection.
*   [ ] Build `bridge_inject` tool for OpenClaw.
*   [ ] Configure API Token in Local OpenClaw.


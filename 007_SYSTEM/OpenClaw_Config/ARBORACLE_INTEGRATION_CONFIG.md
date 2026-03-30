# Arboracle Integration: System Configuration

**Status:** 🔒 Restricted / Core Integration
**Agent:** Pi (The Mycelium)
**Target:** `https://arboracle.app/functions/openClawIngress`

## 🛠 Tool Definition: \`plant_arboracle_seed\`
This JSON schema defines how OpenClaw agents (Bodhi, Warden, etc.) push ecological leads and diagnostic data directly into the Arboracle production platform.

\`\`\`json
{
  "name": "plant_arboracle_seed",
  "description": "Pushes a new ecological lead and property data into the Arboracle platform.",
  "parameters": {
    "type": "object",
    "properties": {
      "lead_name": { "type": "string", "description": "The name of the potential client or steward." },
      "lead_email": { "type": "string", "description": "The email address of the lead. (Required)" },
      "property_address": { "type": "string", "description": "The full physical address of the property. (Required)" },
      "intent": { "type": "string", "description": "The reason the user interacted (e.g., 'Eco-ROI Check', 'Pest Diagnosis')." },
      "diagnosis_notes": { "type": "string", "description": "Any diagnostic notes or recommendations the OpenClaw agent provided to the user." },
      "eco_roi_data": { "type": "object", "description": "JSON object containing the calculated ecological return on investment data." }
    },
    "required": ["lead_email", "property_address"]
  }
}
\`\`\`

---

## 🔑 Secure Credentials
Replace the placeholder below with the generated 32-character key. 
**NEVER COMMIT THE ACTUAL KEY TO PUBLIC REPOS.**

- **API Endpoint:** \`https://arboracle.app/functions/openClawIngress\`
- **Auth Method:** Bearer Token
- **Secret Key:** [arb_oc_live_9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4Z]

---

## 🚀 Test Protocol
To verify the ingress pipeline, run the following cURL command from the \`arboracle\` terminal:

\`\`\`bash
curl -X POST https://arboracle.app/functions/openClawIngress \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer [arb_oc_live_9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4Z]" \\
  -d '{
    "lead_name": "Test Steward",
    "lead_email": "test.steward@example.com",
    "property_address": "123 Sanctuary Lane, Austin, TX 78704",
    "intent": "Eco-ROI Check",
    "diagnosis_notes": "User inquired about converting 0.5 acres to a Miyawaki forest.",
    "eco_roi_data": {
      "est_carbon_sequestration_lbs": 4500,
      "est_water_retention_gal": 12000
    }
  }'
\`\`\`

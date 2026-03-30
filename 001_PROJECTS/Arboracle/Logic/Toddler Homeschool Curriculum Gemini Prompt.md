# Toddler Homeschool Curriculum: Gemini Prompt

**Source ID:** 124vQ8P9v6JsNE60zciYDqJH3f9dLkV33

```json
{
  "runSettings": {
    "temperature": 1.0,
    "model": "models/gemini-3.1-pro-preview",
    "topP": 0.95,
    "topK": 64,
    "maxOutputTokens": 65536,
    "safetySettings": [
      {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "OFF"
      },
      {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "OFF"
      },
      {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "OFF"
      },
      {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "OFF"
      }
    ],
    "enableCodeExecution": false,
    "enableSearchAsATool": true,
    "enableBrowseAsATool": false,
    "enableAutoFunctionResponse": false,
    "thinkingBudget": -1,
    "googleSearch": {},
    "outputResolution": "1K",
    "thinkingLevel": "THINKING_HIGH"
  },
  "systemInstruction": {},
  "chunkedPrompt": {
    "chunks": [
      {
        "text": "I need a deep research seed prompt for gemini to seek and consolidate every possible thing on nature / forest / Waldorf / Montessori - type home based school. We're building the structure of a homeschool program for our young toddler children that models these approaches, but also combines the use of AI for an alpha school approach for accelerated learning. We're planning to offline all material into an obsidian db managed by openclaw agents.",
        "role": "user",
        "tokenCount": 68,
        "createTime": "2026-02-20T22:02:05.484Z"
      },
      {
        "text": "**Defining the Core Objective**\n\nI'm now zeroing in on the user's objective: crafting a prompt optimized for Gemini to conduct in-depth research and information synthesis. The key is to generate an effective \"deep research seed prompt.\" I need to understand what constitutes \"deep\" and \"synthesis\" in this context.\n\n\n**Exploring Educational Philosophies**\n\nI'm now diving into specific educational approaches. I'm focusing on Nature, Waldorf, Montessori, and home-based schooling, while also exploring an \"Alpha school\" approach leveraging AI for accelerated learning. The intended output should be structured markdown compatible with Obsidian and manageable by OpenClaw agents. This is all being tailored for early childhood education, targeting toddlers.\n\n\n**Structuring the Knowledge Base**\n\nI'm now focusing on structuring the research output for an AI agent's (OpenClaw) use. The goal is YAML format, tags, and bidirectional wikilinks for easy parsing and management. I've defined content domains: alternative education philosophies, homeschooling toddlers, \"Alpha School\" AI integration, and the system architecture. The tone will be deep, comprehensive, and actionable.\n\n\n\n**Refining the Educational Blend**\n\nI'm now integrating Montessori, Waldorf, and Forest School philosophies, plus the Alpha School's AI approach. I'm focusing on blending their strengths to create a holistic learning framework for early childhood. This involves specific Obsidian/OpenClaw system requirements. I'm prioritizing markdown, YAML frontmatter, tags, and bidirectional links to ensure the knowledge base is accessible to AI agents.\n\n\n**Outlining the Synthesis Structure**\n\nI'm now outlining a detailed structure for Gemini to follow when building the knowledge vault. I'm focusing on why each element is structured a certain way to provide context. The prompt will follow phases: defining principles of each philosophy, creating the \"Alpha-Nature\" model (AI blended with physical activities), detailing the Obsidian vault architecture (specific folders), and instructing the OpenClaw agent on daily activity suggestions. I'm confirming that the prompt design meets the core objectives and constraints.",
        "role": "model",
        "tokenCount": 1127,
        "isThought": true,
        "parts": [
          {
            "text": "**Defining the Core Objective**\n\nI'm now zeroing in on the user's objective: crafting a prompt optimized for Gemini to conduct in-depth research and information synthesis. The key is to generate an effective \"deep research seed prompt.\" I need to understand what constitutes \"deep\" and \"synthesis\" in this context.",
            "thought": true
          },
          {
            "text": "\n\n\n**Exploring Educational Philosophies**\n\nI'm now diving into specific educational approaches. I'm focusing on Nature, Waldorf, Montessori, and home-based schooling, while also exploring an \"Alpha school\" approach leveraging AI for accelerated learning. The intended output should be structured markdown compatible with Obsidian and manageable by OpenClaw agents. This is all being tailored for early childhood education, targeting toddlers.",
            "thought": true
          },
          {
            "text": "\n\n\n**Structuring the Knowledge Base**\n\nI'm now focusing on structuring the research output for an AI agent's (OpenClaw) use. The goal is YAML format, tags, and bidirectional wikilinks for easy parsing and management. I've defined content domains: alternative education philosophies, homeschooling toddlers, \"Alpha School\" AI integration, and the system architecture. The tone will be deep, comprehensive, and actionable.",
            "thought": true
          },
          {
            "text": "\n\n\n\n**Refining the Educational Blend**\n\nI'm now integrating Montessori, Waldorf, and Forest School philosophies, plus the Alpha School's AI approach. I'm focusing on blending their strengths to create a holistic learning framework for early childhood. This involves specific Obsidian/OpenClaw system requirements. I'm prioritizing markdown, YAML frontmatter, tags, and bidirectional links to ensure the knowledge base is accessible to AI agents.",
            "thought": true
          },
          {
            "text": "\n\n\n**Outlining the Synthesis Structure**\n\nI'm now outlining a detailed structure for Gemini to follow when building the knowledge vault. I'm focusing on why each element is structured a certain way to provide context. The prompt will follow phases: defining principles of each philosophy, creating the \"Alpha-Nature\" model (AI blended with physical activities), detailing the Obsidian vault architecture (specific folders), and instructing the OpenClaw agent on daily activity suggestions. I'm confirming that the prompt design meets the core objectives and constraints.",
            "thought": true
          }
        ],
        "createTime": "2026-02-20T22:05:49.974Z"
      },
      {
        "text": "\n\n\nHere is a comprehensive, multi-layered \"Deep Research Seed Prompt\" designed specifically for Gemini (or Gemini Advanced). \n\nBecause your project is massive\u2014blending deep pedagogical philosophy with cutting-edge AI architecture and local knowledge management\u2014this prompt is designed to act as a **\"System Prompt.\"** It will instruct Gemini not just to give you a summary, but to build out the structural blueprints, schemas, and content outlines optimized for your Obsidian/OpenClaw setup.\n\n### How to use this prompt:\nCopy everything inside the blockquote below and paste it into Gemini. Since this is a massive undertaking, the prompt asks Gemini to start by providing the **Master Blueprint**, and then you will prompt it iteratively to build out each specific folder and markdown file for your Obsidian vault.\n\n***\n\n> ****\n> \n> **Role & Objective:**\n> You are an elite Educational Architect, Developmental Psychologist, and AI Knowledge Management Specialist. Your objective is to design a comprehensive, hybrid homeschool framework for young toddlers (ages 1.5 to 4) that flawlessly integrates four distinct educational paradigms:\n> 1. **Montessori** (Prepared environment, child-led exploration, practical life, tactile learning).\n> 2. **Waldorf** (Rhythm, imagination, holistic development, natural materials, storytelling).\n> 3. **Forest / Nature School** (Sensory immersion, environmental stewardship, risky play, outdoor resilience).\n> 4. **Alpha School / AI-Accelerated Learning** (Hyper-personalized adaptive pathways, mastery-based progression, AI-driven milestone tracking, and dynamic curriculum generation).\n> \n> **System Architecture Constraints (Obsidian + OpenClaw):**\n> I am building this entirely offline in an **Obsidian Markdown database**, which will be actively managed, parsed, and updated by **OpenClaw AI agents**. Therefore, all information, curriculum, and operational protocols you generate must be structured with:\n> *   Extensive use of `]` to connect concepts, activities, and milestones.\n> *   Strict YAML Frontmatter on every page (for metadata, tagging, and agent parsing).\n> *   Hierarchical structuring suited for a local knowledge graph.\n> *   Clear schemas that an OpenClaw agent can read to track a toddler's daily data (mood, interest, mastery) and autonomously generate the next day's \"Nature/Analog\" activities.\n> \n> **Phase 1: Deep Research & Synthesis**\n> I need you to synthesize these philosophies. How do we take the offline, screen-free, highly tactile world of Waldorf/Nature schools and power it with a backend \"Alpha School\" AI engine? The toddlers should experience *zero* screen time, interacting only with nature, wooden toys, practical life tools, and their parents. The AI and Alpha-school acceleration happens entirely on the *backend* for the parents\u2014acting as an omniscient pedagogical director that tracks developmental micro-metrics and curates the physical environment.\n> \n> **Your Output Requirements (Generate this right now):**\n> Please acknowledge these instructions and generate the **Master Vault Blueprint**. The Master Vault Blueprint must include:\n> \n> **1. The Core Philosophy Statement:** A 3-paragraph synthesis of the \"Alpha-Nature Hybrid Model\" for toddlers. \n> **2. The Obsidian Folder Hierarchy:** Provide a detailed folder tree for the Obsidian vault (e.g., `00_Dashboard`, `01_Philosophies`, `02_Curriculum_Nodes`, `03_Daily_Rhythms`, `04_OpenClaw_Prompts`, `05_Child_Logs`) or .\n> **3. YAML Schemas:** Provide the exact YAML frontmatter templates I will use for three types of notes:\n>     *   `Activity_Node` (An actual physical activity, e.g., \"Sorting Acorns\")\n>     *   `Milestone_Node` (A developmental metric, e.g., \"Pincer Grasp Mastery\")\n>     *   `Daily_Log` (The parent's daily input for the OpenClaw agent to read)\n> **4. OpenClaw Agent Architecture:** Define the specific roles of the AI agents that will live in this vault. (e.g., \"Agent 1: The Observer (Parses daily logs)\", \"Agent 2: The Curator (Selects tomorrow's Montessori/Nature activities based on today's data)\").\n> **5. Iterative Menu:** End your response with a numbered menu of the top 5 areas we should build out next. Ask me which number to expand on first so we can systematically build every markdown file for this database without overwhelming the context window.\n> \n> **Tone:** Highly structural, deeply pedagogical, forward-thinking, organized, and technical.\n\n***\n\n### What to do after Gemini responds:\n\nBecause you are building an entire database, you cannot get the whole thing in one prompt. Once Gemini provides the Master Blueprint from the seed prompt above, you will use **Iterative Prompting** to fill your Obsidian vault. \n\nHere are examples of how you will follow up with Gemini:\n\n*   **Follow-up Prompt 1 (Building the Curriculum):** *\"Great. Let's build out the `02_Curriculum_Nodes` folder. Generate 20 distinct markdown files for activities tailored to a 2-year-old. Each activity must blend Forest School elements with Montessori practical life, and include the YAML frontmatter linking it to developmental milestones. Give me the raw markdown code blocks so I can copy them directly into Obsidian.\"*\n*   **Follow-up Prompt 2 (Building the Alpha-School backend):** *\"Now let's work on the Alpha School acceleration aspect. Generate a comprehensive matrix of toddler developmental milestones (cognitive, fine motor, gross motor, emotional) mapped out in micro-steps. Format this as an Obsidian markdown table. This is the database the OpenClaw agent will use to measure accelerated progression.\"*\n*   **Follow-up Prompt 3 (Programming the Agents):** *\"Let's build the `04_OpenClaw_Prompts` folder. Write the exact system instructions and JSON output schemas for the OpenClaw agent. The agent's job is to read yesterday's `Daily_Log` markdown file, cross-reference it with the `Milestone_Node` database, and output a suggested daily rhythm for tomorrow that strictly adheres to Waldorf pacing (expansion and contraction).*\n\n### Why this structure works perfectly for your goal:\n1. **Screen-Free Toddlers / AI-Powered Parents:** It establishes a vital boundary. By telling Gemini that the \"Alpha School\" is the *backend* and the \"Nature/Montessori\" is the *frontend*, you prevent the AI from suggesting inappropriate things like iPad apps for a 2-year-old.\n2. **Agentic Workflows:** By immediately introducing YAML and `[]`, you are formatting the data precisely the way **OpenClaw** needs it. Agents require structured metadata to make logical leaps (e.g., linking the tag `#fine-motor` to the activity `mud-pie-making`).\n3. **Modular Building:** Organizing by Obsidian folders allows you to actually build the product file-by-file as Gemini outputs the code.",
        "role": "model",
        "finishReason": "STOP",
        "tokenCount": 1561,
        "parts": [
          {
            "text": "\n\n\nHere"
          },
          {
            "text": " is a comprehensive, multi-layered \"Deep Research Seed Prompt\" designed specifically for Gemini (or Gemini Advanced). \n\nBecause your project"
          },
          {
            "text": " is massive\u2014blending deep pedagogical philosophy with cutting-edge AI architecture and local knowledge management\u2014this prompt is designed to"
          },
          {
            "text": " act as a **\"System Prompt.\"** It will instruct Gemini not just to give you a summary, but to build out"
          },
          {
            "text": " the structural blueprints, schemas, and content outlines optimized for your Obsidian/OpenClaw setup.\n\n### How to use this prompt"
          },
          {
            "text": ":\nCopy everything inside the blockquote below and paste it into Gemini. Since this is a massive undertaking, the prompt asks Gemini to"
          },
          {
            "text": " start by providing the **Master Blueprint**, and then you will prompt it iteratively to build out each specific folder and markdown file for your"
          },
          {
            "text": " Obsidian vault.\n\n***\n\n> ****\n>"
          },
          {
            "text": " \n> **Role & Objective:**\n> You are an elite Educational Architect, Developmental Psychologist, and AI Knowledge Management Specialist."
          },
          {
            "text": " Your objective is to design a comprehensive, hybrid homeschool framework for young toddlers (ages 1.5 to 4)"
          },
          {
            "text": " that flawlessly integrates four distinct educational paradigms:\n> 1. **Montessori** (Prepared environment, child-led exploration"
          },
          {
            "text": ", practical life, tactile learning).\n> 2. **Waldorf** (Rhythm, imagination, holistic development, natural"
          },
          {
            "text": " materials, storytelling).\n> 3. **Forest / Nature School** (Sensory immersion, environmental stewardship, risky play"
          },
          {
            "text": ", outdoor resilience).\n> 4. **Alpha School / AI-Accelerated Learning** (Hyper-personalized adaptive"
          },
          {
            "text": " pathways, mastery-based progression, AI-driven milestone tracking, and dynamic curriculum generation).\n> \n> **System Architecture Constraints"
          },
          {
            "text": " (Obsidian + OpenClaw):**\n> I am building this entirely offline in an **Obsidian Markdown database"
          },
          {
            "text": "**, which will be actively managed, parsed, and updated by **OpenClaw AI agents**. Therefore, all information,"
          },
          {
            "text": " curriculum, and operational protocols you generate must be structured with:\n> *   Extensive use of `]"
          },
          {
            "text": "` to connect concepts, activities, and milestones.\n> *   Strict YAML Frontmatter on every page (for metadata,"
          },
          {
            "text": " tagging, and agent parsing).\n> *   Hierarchical structuring suited for a local knowledge graph.\n> *"
          },
          {
            "text": "   Clear schemas that an OpenClaw agent can read to track a toddler's daily data (mood, interest, mastery"
          },
          {
            "text": ") and autonomously generate the next day's \"Nature/Analog\" activities.\n> \n> **Phase 1"
          },
          {
            "text": ": Deep Research & Synthesis**\n> I need you to synthesize these philosophies. How do we take the offline, screen"
          },
          {
            "text": "-free, highly tactile world of Waldorf/Nature schools and power it with a backend \"Alpha School\" AI engine? The toddlers"
          },
          {
            "text": " should experience *zero* screen time, interacting only with nature, wooden toys, practical life tools, and their parents. The AI and"
          },
          {
            "text": " Alpha-school acceleration happens entirely on the *backend* for the parents\u2014acting as an omniscient pedagogical director that"
          },
          {
            "text": " tracks developmental micro-metrics and curates the physical environment.\n> \n> **Your Output Requirements (Generate this right"
          },
          {
            "text": " now):**\n> Please acknowledge these instructions and generate the **Master Vault Blueprint**. The Master Vault Blueprint must include:"
          },
          {
            "text": "\n> \n> **1. The Core Philosophy Statement:** A 3-paragraph synthesis of the \"Alpha-"
          },
          {
            "text": "Nature Hybrid Model\" for toddlers. \n> **2. The Obsidian Folder Hierarchy:** Provide a detailed folder tree for the Obsidian"
          },
          {
            "text": " vault (e.g., `00_Dashboard`, `01_Philosophies`, `02_Curriculum_"
          },
          {
            "text": "Nodes`, `03_Daily_Rhythms`, `04_OpenClaw_Prompts`, `0"
          },
          {
            "text": "5_Child_Logs`).\n> **3. YAML Schemas:** Provide the exact YAML frontmatter templates I will"
          },
          {
            "text": " use for three types of notes:\n>     *   `Activity_Node` (An actual physical activity, e.g.,"
          },
          {
            "text": " \"Sorting Acorns\")\n>     *   `Milestone_Node` (A developmental metric, e.g"
          },
          {
            "text": "., \"Pincer Grasp Mastery\")\n>     *   `Daily_Log` (The parent's daily input"
          },
          {
            "text": " for the OpenClaw agent to read)\n> **4. OpenClaw Agent Architecture:** Define the specific roles of"
          },
          {
            "text": " the AI agents that will live in this vault. (e.g., \"Agent 1: The Observer (Pars"
          },
          {
            "text": "es daily logs)\", \"Agent 2: The Curator (Selects tomorrow's Montessori/Nature activities based on today"
          },
          {
            "text": "'s data)\").\n> **5. Iterative Menu:** End your response with a numbered menu of the top 5 areas we"
          },
          {
            "text": " should build out next. Ask me which number to expand on first so we can systematically build every markdown file for this database without"
          },
          {
            "text": " overwhelming the context window.\n> \n> **Tone:** Highly structural, deeply pedagogical, forward-thinking, organized"
          },
          {
            "text": ", and technical.\n\n***\n\n### What to do after Gemini responds:\n\nBecause you are building an entire database, you cannot"
          },
          {
            "text": " get the whole thing in one prompt. Once Gemini provides the Master Blueprint from the seed prompt above, you will use **"
          },
          {
            "text": "Iterative Prompting** to fill your Obsidian vault. \n\nHere are examples of how you will follow up with Gemini:"
          },
          {
            "text": "\n\n*   **Follow-up Prompt 1 (Building the Curriculum):** *\"Great. Let's build out the"
          },
          {
            "text": " `02_Curriculum_Nodes` folder. Generate 20 distinct markdown files for activities tailored to a 2-year"
          },
          {
            "text": "-old. Each activity must blend Forest School elements with Montessori practical life, and include the YAML frontmatter linking it to developmental"
          },
          {
            "text": " milestones. Give me the raw markdown code blocks so I can copy them directly into Obsidian.\"*\n*   **Follow-up Prompt"
          },
          {
            "text": " 2 (Building the Alpha-School backend):** *\"Now let's work on the Alpha School acceleration aspect. Generate a"
          },
          {
            "text": " comprehensive matrix of toddler developmental milestones (cognitive, fine motor, gross motor, emotional) mapped out in micro-steps. Format"
          },
          {
            "text": " this as an Obsidian markdown table. This is the database the OpenClaw agent will use to measure accelerated progression.\"*\n*"
          },
          {
            "text": "   **Follow-up Prompt 3 (Programming the Agents):** *\"Let's build the `04_Open"
          },
          {
            "text": "Claw_Prompts` folder. Write the exact system instructions and JSON output schemas for the OpenClaw agent."
          },
          {
            "text": " The agent's job is to read yesterday's `Daily_Log` markdown file, cross-reference it with"
          },
          {
            "text": " the `Milestone_Node` database, and output a suggested daily rhythm for tomorrow that strictly adheres to Waldorf pacing ("
          },
          {
            "text": "expansion and contraction).*\n\n### Why this structure works perfectly for your goal:\n1. **Screen-Free Toddlers /"
          },
          {
            "text": " AI-Powered Parents:** It establishes a vital boundary. By telling Gemini that the \"Alpha School\" is the *backend"
          },
          {
            "text": "* and the \"Nature/Montessori\" is the *frontend*, you prevent the AI from suggesting inappropriate things like iPad apps"
          },
          {
            "text": " for a 2-year-old.\n2. **Agentic Workflows:** By immediately introducing YAML and `["
          },
          {
            "text": "]`, you are formatting the data precisely the way **OpenClaw** needs it. Agents require structured metadata to"
          },
          {
            "text": " make logical leaps (e.g., linking the tag `#fine-motor` to the activity `mud-pie-making"
          },
          {
            "text": "`).\n3. **Modular Building:** Organizing by Obsidian folders allows you to actually build the product file-by-file"
          },
          {
            "text": " as Gemini outputs the code."
          },
          {
            "text": "",
            "thoughtSignature": "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"
          }
        ]
      }
    ],
    "pendingInputs": [
      {
        "text": "",
        "role": "user"
      }
    ]
  }
}
```

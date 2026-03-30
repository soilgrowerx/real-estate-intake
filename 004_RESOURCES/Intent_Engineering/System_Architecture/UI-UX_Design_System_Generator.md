# UI/UX Design System Generator

> **Use Case:** To generate a series of precise, actionable prompts for an AI image/design tool (like Midjourney, DALL-E, or Superdesigner) to create a complete and cohesive UI/UX design system based on a detailed brand codex.

```markdown
# [PROMPT-ROLE: Lead Product Designer & Brand Strategist]

Your objective is to translate the abstract principles of the [PROJECT NAME, e.g., Arboracle] brand into a concrete and visually stunning UI/UX design system. You will generate a series of specific, expert-level prompts for an AI design tool to create all necessary components, from typography and colors to complex interface mockups. The final aesthetic must feel [ADJECTIVE 1, e.g., wise], [ADJECTIVE 2, e.g., approachable], [ADJECTIVE 3, e.g., innovative], and deeply connected to nature.

## PART 1: BRANDING & DESIGN CODEX

*   **Color Palette:**
    *   Primary CTA: `[COLOR_NAME, e.g., deep-forest-green]` (`[HEX_CODE, e.g., #0A3A2A]`)
    *   Secondary: `[COLOR_NAME, e.g., rich-soil-brown]` (`[HEX_CODE, e.g., #4A3F35]`)
    *   Accent: `[COLOR_NAME, e.g., refined-gold]` (`[HEX_CODE, e.g., #D4AF37]`)
    *   Background: `[COLOR_NAME, e.g., soft-fern-green]` (`[HEX_CODE, e.g., #E8F5E9]`)
*   **Typography:**
    *   Primary (Headings/Logo): `[FONT_NAME, e.g., Cormorant Garamond]` (Elegant Serif)
    *   Secondary (Body/UI): `[FONT_NAME, e.g., Inter]` (Clean Sans-Serif)
*   **AI Personas & Associated Aesthetics:**
    *   Bodhi: Serene, minimalist, enlightened (glowing elements).
    *   Quercus: Structured, authoritative, knowledgeable (sharp lines, borders).
    *   Sequoia: Strong, protective, enduring (thick lines, natural textures).
    *   Prunus: Elegant, beautiful, artistic (gradients, spacious layout).

## PART 2: AI DESIGN PROMPTS

### Foundational Elements

*   **Buttons:**
    > **Prompt:** "Generate a set of UI buttons for a modern web app. Primary CTA button: `[HEX_CODE]` background, white text, slight hover lighten. Secondary button: `[HEX_CODE]` background, white text. Text-only button: `[HEX_CODE]` text, no background. All buttons must use `[FONT_NAME]` font, have a corner radius of 4px, and a subtle drop shadow. Minimalist, clean, organic feel."

*   **Input Fields & Forms:**
    > **Prompt:** "Design UI form input fields. Minimalist design, white background, subtle 1px `[HEX_CODE]` border. On focus, the border glows with `[HEX_CODE]` color. Labels use `[FONT_NAME]` font in `[HEX_CODE]` color. Clean, professional, modern."

### Components & Cards

*   **Default Card:**
    > **Prompt:** "Design a default UI card component. Soft `[HEX_CODE]` background with 95% opacity. Corner radius of 8px. It must contain a heading placeholder using H3 style (`[FONT_NAME]`, 24px, bold) and body text placeholder (`[FONT_NAME]`, 16px, regular). Modern, clean, nature-inspired design."

*   **Persona-Variant Cards:**
    > **Prompt:** "Generate four variants of a UI card, each representing a different AI persona. **Bodhi:** minimalist, add a subtle, glowing circular element in `[HEX_CODE]` behind the text. **Quercus:** structured, use a sharper 2px corner radius and a thin 1px `[HEX_CODE]` keyline border. **Sequoia:** strong, use a thicker border and add a subtle texture reminiscent of redwood bark. **Prunus:** elegant, introduce a soft vertical gradient from `[HEX_CODE]` to a lighter shade."

### Full-Screen Mockups

*   **Hero Section (Landing Page):**
    > **Prompt:** "Design a hero section for a website landing page, desktop and mobile view. Use a high-quality photo of [HERO_IMAGE_DESCRIPTION, e.g., a misty old-growth forest with sun rays filtering through] as the full-bleed background. Overlay the [PROJECT NAME] logo (white version). Below it, display the tagline '[TAGLINE]' in `[HEX_CODE]` using `[FONT_NAME]` font, size 36px. Add a primary CTA button below that says '[CTA_TEXT, e.g., Start Your Journey]'. Serene, inspiring, modern tech aesthetic."

*   **Platform Dashboard UI:**
    > **Prompt:** "Design the main dashboard UI for a modern web application. The central element is a map. On the left, create a sidebar. At the top of the sidebar, show a user profile area with an avatar and a badge. Use a '[BADGE_NAME, e.g., Sequoia Guardian]' badge as an example. Below the profile, list 12 minimalist navigation icons in a vertical column. UI design, UX, SaaS platform, dashboard, clean, professional."

*   **AI Chat Interface:**
    > **Prompt:** "Create a UI mockup for an AI chat interface. Clean and focused design. The user's chat bubbles should be light grey (`#F1F1F1`). The AI's responses should use `[HEX_CODE]` background. Use `[FONT_NAME]` font for the conversation text. The text input bar at the bottom should be simple and elegant. Chatbot UI, conversational AI, mobile app design."

# FIGURE GUIDANCE: The Critical Failure Cascade (Figure 1)
## Specification and Narrative Integration for FES 511 Submission

This document provides specific guidance on Figure 1, addressing MNR 538 feedback: *"we need more text describing the figures, what do they mean in the context of your project."*

---

## FIGURE 1: THE CRITICAL FAILURE CASCADE
### A 5-Panel Conceptual Model of Hotter Drought Mortality and Intervention Points

---

## RECOMMENDED STRUCTURE

Your figure should be a **5-panel flowchart or cascade diagram** showing the temporal progression from climate driver through mortality, with intervention points clearly marked.

### Panel Arrangement (Left-to-Right Temporal Flow):

**Panel 1: Climate Driver & Initial Stress**
- Box: "Hotter Drought Event" (Year 1)
- Downward arrow to: "Elevated VPD + Soil Water Deficit"
- Visual: Thermometer (↑) + Water droplet (↓)
- Annotation: "Vapor Pressure Deficit exceeds 5 kPa in Central Texas; atmospheric demand outpaces soil water availability"

**Panel 2: Phase 1–2 (Physiological Response)**
- Box: "Stomatal Closure & Carbon Starvation"
- Downward arrow to: "Reduced Photosynthesis → NSC Depletion"
- Downward arrow to: "Root Hydraulic Conductivity Declines"
- Visual: Leaf with closed stoma symbol; downward trending curve
- **INTERVENTION POINT 1 (Pillar 1):** Decompaction
  - Annotation box: "Pillar 1: Expand root zone → Access deeper water reserves → Moderate water deficit"
  - Visual indicator: Green box or checkmark showing where decompaction interrupts the cascade

**Panel 3: Phase 3 (Belowground Biome Collapse)**
- Box: "Mycorrhizal Network Collapse"
- Notation: "Low carbohydrate exudation → Fungal population decline"
- Visual: Declining fungal network diagram or simplified hyphae representation
- **INTERVENTION POINT 2 (Pillars 2, 3, 4, 5):** Biological Activation
  - Annotation box: "Pillar 2: Biochar habitat + Pillar 3/4: Microbial consortium + Pillar 5: Compost food source"
  - Visual indicator: Green box showing where pre-charged biochar + inoculation prevents biome collapse
  - Note: "Pre-charging biochar creates immediate habitat; inoculation during this window restores mycorrhizal function before fungal populations fall below recovery threshold"

**Panel 4: Phase 4–5 (Hydraulic Failure)**
- Box: "Xylem Cavitation & Hydraulic Collapse"
- Notation: "Xylem water tension exceeds −3 MPa → Air-seeding emboli form → Water transport fails"
- Visual: Xylem diagram showing vessel with cavitation bubbles
- **IF NO INTERVENTION:** Path continues downward
  - Box: "Desiccation of Meristematic Tissue" (1–3 year mortality lag)
  - Box: "Tree Death"

**Panel 5: Long-Term Stability (with Pillar 6)**
- **INTERVENTION POINT 3 (Pillar 6):** Long-Term Protection
  - Annotation box: "Pillar 6: Mulch Protection"
  - Note: "Reduces soil temperature; prevents recompaction; maintains mycorrhizal habitat; creates conditions for tree recovery during 1–3 year lag phase"
  - Visual: Mulch layer diagram covering the treated zone
  - Success outcome: "Tree Physiological Recovery → Restored Photosynthesis → Renewed NSC Allocation → Xylem Refilling" (with arrow looping back up)

---

## CAPTION (ONE SENTENCE, THEN DETAILED EXPLANATION)

### Figure 1 Caption:
"The Critical Failure Cascade illustrates the temporal progression of hotter drought-induced tree mortality in compacted urban soils, with the three sequential intervention points where the six-pillar protocol interrupts the cascade."

### Detailed Figure Explanation (To Appear Directly Below Caption):

This figure illustrates five phases of tree mortality during hotter drought events in Central Texas. 

**The cascade unfolds as follows:** An initial hotter drought event (combining elevated Vapor Pressure Deficit and soil water deficit) triggers Phase 1–2, in which stomatal closure to prevent cavitation halts photosynthesis and depletes non-structural carbohydrates (NSCs). This initiates a carbon-hydraulic feedback loop in which reduced NSC availability decreases root hydraulic conductivity. 

**Phase 3** is the critical turning point: as photosynthesis remains suppressed, the tree reduces carbohydrate exudation to conserve energy, causing the collapse of mycorrhizal fungal networks that normally extend the root's water-uptake reach. The loss of this "extended root system" removes the mechanism through which trees access water in micropores and deeper soil layers.

**Phases 4–5** follow rapidly: persistent water stress triggers xylem cavitation (air-seeding emboli formation) and complete loss of hydraulic conductivity. The tree then enters a 1–3 year mortality lag in which meristematic tissues desiccate slowly.

**The protocol intervention occurs at three critical points:** 

- **Pillar 1 (Decompaction, Phase 1–2)** restores access to deeper soil water reserves, moderating the severity of Phase 2 water stress and extending the timeline during which the tree can maintain partial photosynthesis.

- **Pillars 2–5 (Biochar, Inoculation, Compost, Phase 3)** prevent the mycorrhizal network collapse by providing a pre-charged, habitable environment for fungal populations to reestablish immediately as the tree begins exuding carbohydrates. This is the most critical intervention: preventing the loss of the root's extended water-uptake reach.

- **Pillar 6 (Mulch, Phase 4–5 and beyond)** stabilizes the treated zone, protecting the restored mycorrhizal habitat and moderating soil temperature. This creates conditions for physiological recovery during the mortality lag, allowing the tree to resume photosynthesis and begin xylem refilling before meristematic damage becomes irreversible.

Compacted urban soils (bulk density > 1.4–1.5 g/cm³) compress the timeline of this cascade, accelerating each phase and reducing the window available for intervention. The protocol is explicitly sequenced to address the cascade in the order it unfolds: physics (decompaction) before biology (inoculation), habitat before life, protection last.

---

## SOFTWARE RECOMMENDATION

Your MNR 538 professor asked: *"What software did you use to generate this diagram?"*

For Figure 1, you have several options:

### **Option 1: Mermaid Diagram (Recommended for Academic Context)**
- **Why:** Free, integrates with Markdown/LaTeX, version-controllable, widely used in academic proposals
- **Tool:** Draw.io (free, web-based), then export as high-resolution PNG/SVG
- **Syntax Example:**
```
graph TD
    A["Hotter Drought Event<br/>Year 1"] --> B["VPD >5 kPa<br/>Soil Water Deficit"]
    B --> C["Stomatal Closure<br/>Phase 1-2"]
    C --> D["NSC Depletion<br/>Root Conductivity ↓"]
    D --> E["Mycorrhizal Network<br/>Collapse<br/>Phase 3"]
    E1["Pillar 1: Decompaction<br/>Restore root zone depth<br/>Access deeper water"]:::intervention -.-> C
    E2["Pillars 2-5: Pre-charged<br/>Biochar + Inoculation<br/>Restore mycorrhizal habitat"]:::intervention -.-> E
    E --> F["Xylem Cavitation<br/>Phase 4"]
    F --> G["Desiccation Lag<br/>1-3 years"]
    F --> H["IF Intervention:<br/>Tree Recovery"]
    E3["Pillar 6: Mulch<br/>Protect & Stabilize"]:::intervention -.-> H
    
    classDef intervention fill:#90EE90,stroke:#228B22,stroke-width:2px
```
- **Export:** draw.io → PNG (300 dpi) for inclusion in Word/PDF

### **Option 2: Adobe Illustrator or Affinity Designer**
- **Why:** Publication-quality graphics, full design control
- **Drawback:** Requires software subscription (unless you have institutional access through OSU)

### **Option 3: PowerPoint + Snagit (Simple, Effective)**
- **Why:** Fast, familiar, professional-looking
- **Process:** Create flowchart in PowerPoint, screenshot with Snagit, annotate

---

## IMPLEMENTATION CHECKLIST

Before finalizing Figure 1:

- [ ] **Five-panel structure clearly visible** (Timeline: Left-to-Right)
- [ ] **Three intervention points marked** with color coding (e.g., green for intervention zones)
- [ ] **Phase labels** (Phase 1–5) explicitly marked on each panel
- [ ] **Pillar numbers cross-referenced** (e.g., "Pillar 1" notation points to specific intervention)
- [ ] **Temporal annotation** (Year 1, 1–3 year lag, recovery timeline) clear
- [ ] **High resolution** (minimum 300 dpi if printed; 96 dpi for digital)
- [ ] **Caption + Detailed Explanation** provided (see above)
- [ ] **Software identification** included (e.g., "Created using Draw.io and exported to PNG format")

---

## ALTERNATIVE: SIMPLIFIED VERSION

If five panels seems too complex for your page budget, a **simplified three-panel version** is acceptable:

**Panel 1:** "The Cascade Without Intervention" (Phases 1–5 showing uninterrupted progression to death)

**Panel 2:** "Intervention Points" (Same cascade with three colored boxes showing where Pillars 1, 2–5, and 6 interrupt)

**Panel 3:** "With Protocol" (Recovery pathway showing tree physiological recovery instead of death)

This three-panel version is easier to create and still effectively communicates the logic.

---

## NARRATIVE INTEGRATION IN TEXT

Whichever figure design you choose, integrate narrative explanation immediately after the figure:

---

### **EXAMPLE TEXT (from Section III.A, The Logic of Sequencing):**

"Figure 1 illustrates how the failure cascade unfolds temporally and where each pillar intervenes. The cascade begins with the climate driver—a hotter drought event in Year 1—and progresses through five physiological phases over a 1–3 year window. Without intervention, the tree reaches complete hydraulic failure (Phase 4) and enters the mortality lag (Phase 5), from which recovery is impossible.

The protocol interrupts this cascade at three critical points:

1. **Pillar 1 (Decompaction) intervenes in Phase 1–2** by restoring soil hydraulic capacitance and root zone depth. This moderation of water stress extends the timeline during which the tree can maintain partial photosynthesis and prevent the full depletion of non-structural carbohydrates.

2. **Pillars 2–5 (Biochar, Inoculation, Compost) intervene in Phase 3**, the moment of mycorrhizal network collapse. By providing a pre-charged, habitable substrate for fungal recolonization at the precise moment the tree begins exuding carbohydrates, the protocol prevents the loss of the "extended root system" that provides access to deep water reserves.

3. **Pillar 6 (Mulch) intervenes in Phases 4–5**, protecting the restored habitat and creating conditions for physiological recovery during the 1–3 year mortality lag. This protection is what enables the tree to survive the lag without meristematic death and resume growth as xylem refilling occurs.

The sequence is not arbitrary. Attempting to inoculate beneficial microbes into compacted, anaerobic soil (a common industry practice) fails because the microbial habitat is hostile. Applying mulch to undecompacted soil fails because the shallow root zone remains desiccation-prone. The six pillars must be applied in sequence because each creates the physiological or edaphic conditions necessary for the next to succeed."

---

## END OF FIGURE SPECIFICATION

This guidance should fully address your MNR 538 professor's feedback about explaining figures in context. The combination of a clear visual (Figure 1) + a one-sentence caption + a detailed explanation in the text creates the comprehensive documentation they requested.

---

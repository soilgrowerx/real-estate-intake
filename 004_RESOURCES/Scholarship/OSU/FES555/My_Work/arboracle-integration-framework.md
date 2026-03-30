# Arboracle–Liberty Hill Integration Framework
## AI-Native Tree Inventory for UDC Modernization (2025–2026)

**Audience:** Liberty Hill City leadership, Planning & Zoning Commission, UDC Advisory Committee, and technical partners.  
**Prepared for:** Soil Grower / Arboracle (STIM)  
**Date:** January 2026

---

## 1. Purpose

This document provides a **strategic integration framework** for aligning the Arboracle STIM platform (with Bodhi, the voice-first AI guide) to Liberty Hill’s tree protection modernization under the **2025–2026 Unified Development Code (UDC) Rewrite**.

Goals:
- Translate identified **ordinance gaps** into **technical requirements** Arboracle can fulfill.
- Propose **ordinance-ready language** that makes AI-native inventory part of the city’s standard process.
- Define a **phased implementation roadmap** (policy → pilot → production).
- Position Liberty Hill as a **regional leader** in AI-informed, regenerative urban forestry.

---

## 2. Ordinance Gaps Arboracle is Designed to Solve

From the Liberty Hill Gap Analysis, eight key deficiencies were identified. Arboracle directly addresses at least six of them.

### 2.1 No Mandatory Baseline Tree Survey (Gap 1)

**Ordinance Problem:**
- Current code does not require a full-site tree survey at plat or site plan stage, allowing pre-application clearing and preventing accurate canopy accounting.

**Arboracle Solution:**
- **AI-native tree inventory** that:
  - Geolocates each tree ≥8" DBH (or threshold adopted by the city).
  - Classifies species using computer vision and ecological databases.
  - Assesses health and risk using predictive models.
  - Syncs data to parcel and permit IDs.

**Policy Translation:**
- Make Arboracle (or equivalent AI-native platform) the **required standard** for tree survey submissions.

---

### 2.2 Heritage Tree Threshold Undefined (Gap 2)

**Ordinance Problem:**
- Heritage status is administratively referenced but not defined by DBH/species in the UDC.

**Arboracle Solution:**
- Encodes **species- and size-based thresholds** for heritage classification.
- Bodhi (voice AI) can:
  - Answer on-site questions like: “Is this tree a heritage tree under Liberty Hill code?”
  - Explain why a given tree meets or fails the criteria.

**Policy Translation:**
- Use Arboracle’s taxonomy and health models to **operationalize** whatever thresholds the city adopts (e.g., ≥18" DBH or designated native species).

---

### 2.3 Tree Replacement Fees Not Published (Gap 3)

**Ordinance Problem:**
- Mitigation fees and valuations are not published, leading to ad hoc negotiation and low predictability.

**Arboracle Solution:**
- **Tree valuation engine** that:
  - Calculates mitigation fees using city’s $/DBH-inch schedule.
  - Factors in species, health, and ecological value if desired by policy.
  - Outputs fee summaries per parcel and per permit.

**Policy Translation:**
- City publishes fee schedule; Arboracle automates calculations and **exposes them transparently** to staff and applicants.

---

### 2.4 Replacement Ratios Ambiguous (Gap 4)

**Ordinance Problem:**
- “Acceptable replacement plan” lacks specific, enforceable ratios (1:1, 3:1, etc.).

**Arboracle Solution:**
- **Mitigation modeling** that:
  - Applies city-adopted ratios (1:1 standard, 3:1 heritage, or similar).
  - Simulates multiple replacement scenarios (on-site vs off-site, species mixes).
  - Projects canopy recovery over **10–50 years** using growth curves and mortality assumptions.

**Policy Translation:**
- Arboracle becomes the **default tool** to test and validate replacement plans submitted under UDC § 6.07.

---

### 2.5 Exempted Species List Incomplete (Gap 5)

**Ordinance Problem:**
- Partial list of exempt/problem species; no fully codified Preferred Plant List or invasive list.

**Arboracle Solution:**
- **Species database** tuned for the Hill Country:
  - Flags exempt/invasive species.
  - Prioritizes native, drought-tolerant trees.
  - Links species selections to mycorrhizal relationships and soil health (Soil Grower integration).

**Policy Translation:**
- Arboracle’s curated species list can **inform** the city’s Preferred Plant List and continue to update as science evolves.

---

### 2.6 No Formal Approval Workflow (Gap 7)

**Ordinance Problem:**
- No codified digital workflow; approvals rely on internal knowledge and discretion.

**Arboracle Solution:**
- **Workflow engine** for:
  - Intake → review → decision → enforcement.
  - Status tracking (e.g., “Tree survey submitted,” “Mitigation plan approved,” “Planting inspected”).
  - Digital record of decisions for audit and legal defensibility.

**Policy Translation:**
- Reference Arboracle as an “approved digital compliance platform” for tree-related permits and inspections.

---

## 3. Proposed Ordinance Language (Arboracle-Aligned)

Below are sample language modules the city can adapt into the UDC. Arboracle is presented as an example platform to avoid vendor lock-in while still making the **capability** mandatory.

### 3.1 Mandatory AI-Native Tree Inventory

> **§ 6.07.X Tree Survey Requirement**  
> (a) All development applications affecting sites 5,000 square feet or larger shall include a tree survey identifying all existing trees with diameter at breast height (DBH) of eight (8) inches or greater.  
> (b) Tree surveys shall be prepared using a City-approved AI-native tree inventory platform capable of geospatial identification, species classification, and health assessment (e.g., Arboracle STIM) and shall be certified by a qualified arborist.  
> (c) The survey shall identify, at a minimum, species, DBH, health condition, and proposed disposition (preserve, relocate, remove) for each tree.

### 3.2 Heritage Tree Definition & Protection

> **§ 6.07.Y Heritage Trees**  
> (a) Heritage Trees shall include:  
>  (1) Any tree with DBH equal to or greater than eighteen (18) inches; or  
>  (2) Any tree of a Protected Species, as defined in the City’s Preferred Plant List, with DBH equal to or greater than eight (8) inches.  
> (b) Heritage Trees shall not be removed except where:  
>  (1) The tree is dead, dying, or poses an imminent hazard as documented in a certified health assessment produced via the City-approved AI-native tree inventory platform; or  
>  (2) No feasible alternative design exists to permit reasonable use of the property.  
> (c) Removal of Heritage Trees requires approval by the Planning and Zoning Commission and shall be subject to a minimum three-to-one (3:1) replacement ratio, calculated by DBH.

### 3.3 Tree Mitigation & HB 7 Credits

> **§ 6.07.Z Tree Mitigation and Planting Credits**  
> (a) The City shall publish a Tree Mitigation Fee Schedule, expressed as dollars per inch of DBH removed.  
> (b) Applicants may satisfy mitigation requirements through:  
>  (1) On-site planting of new trees meeting minimum caliper and species standards; and/or  
>  (2) Payment of mitigation fees into the City’s Tree Fund.  
> (c) Consistent with Texas House Bill 7 (2017):  
>  (1) Homeowners removing trees on their homestead may receive up to 100% mitigation fee credit by planting replacement trees;  
>  (2) Residential subdivision developers may receive up to 50% mitigation fee credit via planting;  
>  (3) Commercial property owners may receive up to 40% mitigation fee credit via planting.  
> (d) All mitigation calculations and planting credits shall be documented within the City-approved AI-native tree inventory platform.

---

## 4. Implementation Roadmap (Phased)

### Phase 1 – Policy & Design (Q1–Q2 2026)

**Objectives:**
- Align ordinance language with Arboracle capabilities.
- Define pilot parameters and governance.

**Key Actions:**
- Present Gap Analysis + Executive Summary + Integration Framework to P&Z and UDC Advisory Committee.
- Draft ordinance text incorporating AI-native inventory and mitigation modeling.
- Select 2–3 candidate development projects for pilot (mix of residential and commercial).

---

### Phase 2 – Pilot Deployment (Q3 2026 – Q2 2027)

**Objectives:**
- Test Arboracle STIM under real application loads and City workflows.
- Refine thresholds, ratios, and internal processes.

**Pilot Components:**
- **Site selection:**
  - One single-family subdivision.
  - One commercial or mixed-use site.
  - One infill or downtown-adjacent project.
- **Use cases:**
  - Baseline survey and census (Arboracle mobile + web).
  - Heritage tree identification and documentation.
  - Replacement plan modeling and fee calculation.
  - Inspection and survival tracking of planted trees.
- **Metrics:**
  - Time to review (before vs after Arboracle).
  - Data quality (tree count accuracy, species identification, GPS precision).
  - Compliance outcomes (replacement ratio achievement, survival after 12–24 months).

---

### Phase 3 – Citywide Adoption (2027+)

**Objectives:**
- Make Arboracle-style inventory and modeling the **default** for all medium-to-large projects.
- Integrate with other city systems (permitting, GIS, public dashboards).

**Key Actions:**
- Adopt final UDC text referencing AI-native inventory requirements.
- Onboard city staff and regular applicants (developers, arborists, consultants).
- Build public-facing dashboards showing:
  - Canopy trends over time.
  - Heritage tree locations (as appropriate).
  - Mitigation and planting statistics.

---

## 5. Dendritic Forest Management & Regenerative Alignment

Arboracle is not just a compliance tool; it is built around **Dendritic Forest Management** and regenerative principles:

- **Successional Planning:**
  - Models forest structure over decades rather than single projects.
  - Prioritizes species mixes that are resilient under climate stress and soil constraints.

- **Soil–Tree Integration (Soil Grower):**
  - Links tree survival probability to soil health indicators and mycorrhizal status.
  - Integrates treatment plans (amendments, inoculations) as part of mitigation.

- **Equity & Access:**
  - The voice-first AI (Bodhi) lowers barriers for field crews, homeowners, and small contractors who may not be comfortable with complex interfaces.

This aligns directly with Liberty Hill’s broader goals: **water conservation, scenic quality, and long-term resilience** as growth accelerates.

---

## 6. Stakeholder Value Proposition

### 6.1 City of Liberty Hill

- **Better data, less friction:** High-quality inventories and automated calculations reduce staff time per application.
- **Legal defensibility:** Transparent criteria, automated records, and HB 7 compliance reduce litigation risk.
- **Policy feedback loop:** Real data about removals, replacements, and survival feed back into future UDC refinements.

### 6.2 Developers & Design Teams

- **Predictable rules and costs:** Clear fee modeling and mitigation ratios; real-time feedback during design.
- **Shorter review cycles:** Cleaner submittals reduce back-and-forth with staff.

### 6.3 Residents & Environmental Stakeholders

- **Transparent canopy outcomes:** Ability to see how development affects trees and what mitigation is actually occurring.
- **Healthier, more resilient urban forest:** Better species selection, soils, and long-term planning.

---

## 7. Recommended Immediate Actions (Next 60–90 Days)

1. **Briefing Session:**
   - Present this framework in a joint workshop with P&Z and UDC Advisory Committee.

2. **Policy Alignment Workshop:**
   - Line-by-line review of draft ordinance language to ensure compatibility with Arboracle capabilities.

3. **Pilot MOU (Memorandum of Understanding):**
   - Define expectation, roles, and data-sharing for 2–3 pilot projects.

4. **Technical Configuration:**
   - Configure Arboracle instance for Liberty Hill: species lists, fee schedule schema, thresholds, and workflow rules.

---

## 8. Conclusion

Liberty Hill is at a pivotal moment: an 18-month UDC rewrite, rapid growth pressure, and existing commitments to scenic quality and water conservation. Arboracle STIM provides the **missing operational layer** that translates policy goals into field-level action:

- From **aspirational canopy targets** to measurable outcomes.
- From **static PDF surveys** to live, queryable tree intelligence.
- From **ad hoc decisions** to transparent, data-driven workflows.

Adopting AI-native tree inventory and predictive health modeling now—within the 2025–2026 UDC rewrite window—positions Liberty Hill as a **Hill Country leader in regenerative, tech-enabled urban forestry** and gives Soil Grower and Arboracle a clear, structured role in supporting that transition.

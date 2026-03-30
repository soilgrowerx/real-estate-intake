# PIPR_DRY_RUN_PLAN.md - Migration Audit

## 🍄 Overview
Audit of moves to align with the **PIPR-Neural Network** strategy. No files have been moved.

## 🏛️ Phase 1: Archival (Mental Load Reduction)
| Current Path | Action | Target Path |
| :--- | :--- | :--- |
| `006_ARCHIVES/Academics - AMU...` | Group | `006_ARCHIVES/Scholarship/Static_AMU` |
| `004_RESOURCES/Academics/OSU...` | Group | `006_ARCHIVES/Scholarship/Static_OSU` |

## 👥 Phase 2: People Consolidation
| Current Path | Action | Target Path |
| :--- | :--- | :--- |
| `003_PEOPLE/Family_and_Community/Family_Life/*` | Flatten | `003_PEOPLE/[Name]` |
| `003_PEOPLE/Family_and_Community/Childrens_Health` | Group | `003_PEOPLE/Pediatrics` |

## 📚 Phase 3: The Neural Library (Flattening Resources)
*Files in these sub-folders will be moved to the root of `004_RESOURCES` and tagged.*

| Original Nest | Domain Tag |
| :--- | :--- |
| `31_Ecology_and_Regeneration/Forestry.../*` | `#domain/forestry` |
| `31_Ecology_and_Regeneration/Biomimicry` | `#domain/biomimicry` |
| `32_Tools_and_Technology/Agent OS` | `#domain/agent-os` |
| `32_Tools_and_Technology/GIS...` | `#domain/gis` |

## 🧪 Phase 4: Idea Sprouting
| Current Path | Action | Target Path |
| :--- | :--- | :--- |
| `002_IDEAS` (currently sparse) | Intake | (Future Spore storage) |

## 🎓 The OSU Exception
- **Action:** Active OSU folders are **SKIPPED** from flattening.
- **Action:** Static (past) semesters are moved to `ARCHIVE/Scholarship/Static_OSU`.

---
*Awaiting Architect Review*

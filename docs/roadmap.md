# Fieldnote roadmap

**Status:** Planned baseline. Update statuses only when work is verified.

## Goal
Build a credible, local-first environmental fieldwork and biodiversity-monitoring product that exercises the design system in real workflows. The portfolio value is in component contracts, accessibility, data-driven UI, tests, and technical judgment—not speculative infrastructure.

## Milestones
| Milestone | Outcome | Exit condition |
|---|---|---|
| M0 — Baseline | Verify current state and remove misleading starter behavior | Scope/docs match reality |
| M1 — Design foundation | Token/font contract, Button/Badge, form patterns | APIs/stories and contrast/state checks verified |
| M2 — Product skeleton | Shell, domain model, seed data, derived overview | No fake metrics; responsive layout |
| M3 — Observation workflow | List, search/filter, create, detail/edit/delete | CRUD and error/empty states tested |
| M4 — Local persistence | Browser storage, recovery, reset | Refresh works; local-only messaging is clear |
| M5 — Quality gate | Unit/component tests, critical E2E, accessibility and responsive pass, CI | Checks pass and limitations are documented |
| M6 — Portfolio release | Demo, case study, accurate setup/docs | No unsupported functionality or compliance claims |

## Feature sequence
1. [FN-001 — Baseline audit](./features/FN-001-baseline.md)
2. [FN-002 — Token and typography contract](./features/FN-002-token-contract.md)
3. [FN-003 — Button and Badge APIs](./features/FN-003-button-badge.md)
4. [FN-004 — Observation overview and list](./features/FN-004-observation-list.md)
5. [FN-005 — Observation workflows](./features/FN-005-observation-workflows.md)
6. [FN-006 — Browser persistence](./features/FN-006-local-persistence.md)
7. [FN-007 — Quality gates](./features/FN-007-quality-gates.md)
8. [FN-008 — Portfolio release](./features/FN-008-release.md)

## Out of scope for MVP
Backend/auth, cloud sync, multi-user collaboration, AI chat/RAG or species identification, maps/GIS, external data integrations, publishing workspace packages, and unnecessary package splits. Consider import/export only after the core workflow and persistence are reliable.

## Definition of done
- Behavior and docs match; no misleading placeholder actions or fake synced states.
- Shared UI uses shared components rather than duplicated implementations.
- Keyboard operation, focus, names, status communication, responsive behavior, and relevant contrast are checked.
- Tests cover meaningful behavior; relevant lint/type/format/build checks are run.
- Fixtures contain no real sensitive data.
- Ticket status reflects evidence; deferred ideas remain marked future.

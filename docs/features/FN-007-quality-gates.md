# FN-007 — Verify accessibility, responsiveness, and test coverage

**Status:** Planned · **Milestone:** M5 · **Priority:** P0 · **Dependencies:** Incremental across FN-001–006

## Problem and outcome
A polished screenshot is not enough to demonstrate senior frontend engineering. Establish repeatable checks for component contracts, the primary user workflow, accessibility, and responsive behavior.

## Scope
- Audit existing scripts/tests before adding dependencies.
- Add focused component/domain tests for meaningful regression risks.
- Add an E2E test for the critical observation flow if an existing framework or clear value justifies it.
- Add automated accessibility checks where compatible and retain manual verification.
- Verify keyboard/focus, zoom, narrow screens, error messaging, reduced motion, and contrast.
- Ensure root verification scripts fail on required-check failure.

## Acceptance criteria
- [ ] Button/Badge and domain logic have tests for meaningful behavior.
- [ ] Critical flow covers create, edit/status change, persistence after refresh, and delete/reset.
- [ ] Automated accessibility checks cover representative stories/pages; limitations are documented.
- [ ] Manual keyboard pass covers navigation, controls, validation, and destructive confirmation.
- [ ] Actual contrast pairs are calculated; no blanket conformance claim is made without evidence.
- [ ] Responsive checks include narrow mobile and desktop/zoom/orientation as relevant.
- [ ] Lint, typecheck, format, and build results are reported accurately.
- [ ] CI runs agreed checks and does not mask failures.
- [ ] No duplicated test tooling or dependency without a concrete gap.

## Verification
Run configured checks and critical flow; report passed/failed/not-run with reasons.

## Out of scope
100% coverage targets, custom runner, exhaustive device matrix, claiming full WCAG conformance from automation alone.

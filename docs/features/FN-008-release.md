# FN-008 — Prepare the portfolio-ready release

**Status:** Planned · **Milestone:** M6 · **Priority:** P1 · **Dependencies:** FN-007

## Problem and outcome
A reviewer should understand the product problem, why the design-system architecture exists, how accessibility/quality were approached, and what limitations remain. Deliver an accurate demo and concise case study.

## Scope
- Confirm a deployment target and configure only what it requires.
- Document setup, scripts, current functionality, and limitations.
- Write a case study covering package boundaries, tokens, component APIs, accessibility/testing, and one meaningful product workflow.
- Capture screenshots/demo only after behavior is implemented and verified.
- Link relevant ADRs, design reference, roadmap, and tickets.
- Final audit for placeholder content, fake metrics, broken links, console errors, and unsupported claims.

## Acceptance criteria
- [ ] Reviewer can install, run, and verify using the README.
- [ ] Demo works on its target and does not imply nonexistent backend behavior.
- [ ] Case study distinguishes shipped work from future ideas and explains concrete trade-offs.
- [ ] Design-system story explains token source of truth, component APIs, separate Storybook, and verification.
- [ ] Visual evidence depicts implemented behavior, not design-only mockups presented as production.
- [ ] Documentation links resolve.
- [ ] No secrets, sensitive fixture data, or unsupported privacy/security claims.
- [ ] Final checks and known limitations are recorded.

## Verification
Follow setup from a clean install, run checks/builds, inspect deployment/responsive behavior, and verify links.

## Out of scope
Custom domain, analytics, backend/auth, or feature expansion unless required by deployment.

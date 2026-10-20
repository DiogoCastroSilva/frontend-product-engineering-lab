# FN-001 — Audit baseline and remove misleading starter behavior

**Status:** Planned · **Milestone:** M0 · **Priority:** P0 · **Dependencies:** None

## Problem and outcome
Before adding features, establish what exists and remove starter UI that implies unsupported behavior. Produce a concise, verified baseline of workspace, scripts, routes, tokens, components, stories, tests, and known gaps.

## Scope
- Inspect root scripts and the apps/fieldnote, apps/storybook, packages/design-system, and packages/tokens boundaries.
- Audit current Button/Badge APIs and stories, token sources, font loading, responsiveness, and checks.
- Identify hard-coded metrics, placeholder actions, dead links, starter copy, and claims of cloud sync.
- Make only minimal fixes to misleading copy/actions; preserve useful setup and unrelated work.
- Separate implementation facts from plans.

## Acceptance criteria
- [ ] Baseline notes distinguish implemented, partial, and missing behavior.
- [ ] Documented commands match package scripts and are verified before being called working.
- [ ] Visible actions work as described or are clearly marked unavailable/deferred.
- [ ] UI does not claim remote sync/backup without an implementation.
- [ ] Product metrics derive from data or are clearly marked illustrative.
- [ ] Existing useful stories and package boundaries are preserved.
- [ ] Font/token and component override questions are linked to FN-002/FN-003.

## Implementation notes
This is not a broad redesign. Inspect the current code first and make only the smallest coherent changes.

## Verification
Run the app, inspect visible states, and run applicable lint/typecheck/format/build checks. Report any checks not run and why.

## Out of scope
CRUD features, persistence, new component families, backend, AI features.

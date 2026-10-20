# FN-003 — Harden Button and Badge APIs

**Status:** Planned · **Milestone:** M1 · **Priority:** P0 · **Dependencies:** FN-002

## Problem and outcome
Button and Badge are the first public component contracts. Their typed APIs, states, semantics, and stories should demonstrate deliberate system design instead of unbounded styling options.

## Scope
- Inspect implementations, exports, and colocated stories first.
- Define only variants/sizes needed by actual Fieldnote patterns.
- Review arbitrary className/inline style/color escape hatches; remove or constrain them unless a real use case justifies them.
- Make disabled/loading states visually and semantically distinct.
- Ensure status badges use readable semantic color pairs and text labels.
- Keep stories beside source in the design-system package and render through separate Storybook.

## Acceptance criteria
- [ ] Props, defaults, variants, and sizes are typed and documented.
- [ ] Ordinary consumers do not need arbitrary color overrides; any retained escape hatch has rationale.
- [ ] Buttons use semantic HTML and expected keyboard activation.
- [ ] Disabled/loading behavior is clear and prevents duplicate actions when applicable.
- [ ] Keyboard focus is clearly visible.
- [ ] Badge status is understandable without color.
- [ ] Stories cover variants, sizes, disabled/loading, focus guidance, and status states.
- [ ] Tests cover meaningful public behavior.
- [ ] Both apps use the shared implementation.

## Verification
Run relevant tests; inspect Storybook stories; manually verify keyboard, focus, disabled/loading; run applicable root checks.

## Out of scope
A complete component library, generic polymorphic framework, speculative dialog/menu primitives, package publishing.

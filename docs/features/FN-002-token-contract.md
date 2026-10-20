# FN-002 — Establish the token and typography contract

**Status:** Planned · **Milestone:** M1 · **Priority:** P0 · **Dependencies:** FN-001

## Problem and outcome
Visual values need one clear source of truth. Reconcile token semantics, typography, status colors, and contrast so app and shared components behave consistently.

## Scope
- Audit packages/tokens and how both apps load token CSS.
- Compare the existing Geist app font setup with the Inter token direction; choose deliberately based on current code and intended hierarchy.
- Distinguish primitive palette values from semantic text, surface, border, action, focus, success, warning, and danger tokens.
- Calculate contrast for foreground/background pairs actually used.
- Document token naming/usage; update the HTML reference after values are settled.

## Acceptance criteria
- [ ] Each token category has one source of truth; duplicate values are removed or justified.
- [ ] Typography is consistent and the font choice/rationale is documented.
- [ ] Used semantic status pairs meet applicable WCAG 2.2 AA contrast expectations or are adjusted and retested.
- [ ] Focus treatment is visibly distinct against adjacent surfaces.
- [ ] Fieldnote and Storybook load the same token values/CSS.
- [ ] Docs explain semantic token versus palette usage.
- [ ] No arbitrary token refactor or new package without a concrete need.
- [ ] Representative stories reflect the chosen contract.

## Verification
Record actual contrast calculations, inspect Storybook and Fieldnote, and run relevant lint/typecheck/format/build checks.

## Out of scope
Wholesale rebrand, runtime theme editor, dark theme, package split, publishing.

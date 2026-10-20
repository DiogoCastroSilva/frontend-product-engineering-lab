# Fieldnote design reference

Open the [standalone HTML design system reference](./fieldnote-design-system.html) in a browser. It contains illustrative visual tokens, component examples, an observation overview pattern, and an accessibility checklist.

## Purpose
- Align visual language, component behavior, and product patterns before implementation.
- Provide a concrete artifact that can be reviewed separately from the app.
- Translate design intent into token/component contracts, then verify them in Storybook and Fieldnote.

## Source-of-truth hierarchy
1. Accepted choices in [decisions](../decisions/).
2. Actual token definitions and CSS in packages/tokens.
3. Public APIs and implementation in packages/design-system, with stories rendered by the separate apps/storybook app.
4. Actual product composition and behavior in apps/fieldnote.
5. This HTML reference as design handoff, not a second implementation.

## Design contract
- Calm, field-oriented forest greens and warm neutrals; prioritize legibility and useful data density over decoration.
- Distinguish primitive palette values from semantic tokens for text, surface, border, action, focus, and status.
- Use one consistent typography strategy. Audit the current Geist app setup versus the Inter token direction before choosing; FN-002 owns that decision.
- Prefer typed, intentional component variants over arbitrary styling overrides.
- Document default, hover, active, focus-visible, disabled, loading, validation/error, and empty states where applicable.
- Verify responsive behavior, zoom, portrait/landscape, and long content; respect reduced motion.
- Target WCAG 2.2 AA but do not claim conformance without checking actual components and flows.
- Metrics must derive from actual local data. Browser persistence must not be described as cloud sync.

## Component handoff
For each reusable component, document purpose, variants/sizes, keyboard behavior, accessible name/label requirements, relevant states, and examples in Storybook. Add components only when a real screen or repeated pattern needs them.

## Validation
Calculate contrast for actual pairs; verify in Storybook and Fieldnote; exercise keyboard, focus, disabled/loading, error, and status states; run automated checks plus manual responsive/accessibility review. Update the reference when deliberate decisions change.

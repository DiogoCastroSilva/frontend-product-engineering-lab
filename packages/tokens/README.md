# Design tokens

This package owns the shared visual foundations consumed by the design system: token definitions and CSS entry points for theme values and typography.

## Responsibilities

- Maintain semantic color tokens and the underlying design values.
- Provide shared typography/font and theme CSS.
- Keep token names stable and meaningful for component authors.
- Support a deliberate theming contract rather than exposing every component detail for customization.

## Source files

- `src/tokens.css` — token values and Tailwind theme definitions.
- `src/theme.css` — theme mappings that connect shared values to the styling system.
- `src/typography.css` — shared typography and global text/focus defaults.

Check the current files and package exports before changing paths or names; this README describes the intended responsibilities, not a guarantee that every possible token format is present.

## Token conventions

- Prefer semantic names such as primary, surface, text, border, success, warning, danger, info, and neutral over using a raw hex value throughout components.
- Keep component styles consuming tokens through the existing theme/Tailwind utilities.
- Add or change a token when it represents a real reusable design decision—not just to avoid writing one isolated CSS declaration.
- Consider text contrast for normal and large text, visible focus indicators, and all interactive states. Do not assume a color is accessible without checking the actual foreground/background combination.
- Treat customer theming as an explicit supported subset of tokens. Do not promise that every token or component implementation is a public customization API.

## Changes

When changing a token name or theme mapping, search for consumers and update the affected component styles, documentation, and stories. Check both Storybook and Fieldnote because they consume the same design system.

Run relevant root checks:

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build:storybook
npm run build:fieldnote
```

See [AGENTS.md](../../AGENTS.md) for repository-wide architecture and AI-agent instructions.

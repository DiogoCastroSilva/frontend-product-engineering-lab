# Design system

This package owns the reusable React components used by Fieldnote and Storybook. It is the single source of component implementations; apps consume its public API instead of creating copies.

## Responsibilities

- Implement semantic, accessible React components with typed public APIs.
- Define supported variants, sizes, and interaction states.
- Keep component stories beside component implementations.
- Export intended public components and types from `src/index.ts`.
- Import shared tokens/styles from `@fieldnote/tokens`.

## Component conventions

- Prefer native HTML semantics and browser behavior wherever possible.
- Make component variants and sizes explicit TypeScript unions.
- Keep props focused on real product needs. Do not expose arbitrary `className` or inline `style` escape hatches by default: consumers should use supported variants and sizes so visual consistency remains enforceable.
- If a component needs a customization point, document its purpose and scope; do not allow unrelated styling overrides accidentally.
- Use the established token names and generated Tailwind utilities instead of repeating arbitrary CSS values.
- Consider accessible names, keyboard behavior, focus visibility, contrast, disabled/loading behavior, and how state is communicated.
- Stories should cover the supported API and important states, not every theoretical combination.

## Files and exports

A typical component folder looks like:

```text
components/<name>/
├── <name>.tsx
├── <name>.stories.tsx
└── <name>.test.tsx  # when a test is added
```

Export the public component and its public types from `src/index.ts`. Keep internal helpers private unless there is a clear reason to expose them.

## Styling and theming

The package imports shared CSS through `src/styles.css`. Tokens are maintained in `@fieldnote/tokens`. The intended theme contract should be explicit: only approved semantic tokens should be customizable by a consuming product or customer; component internals should not become arbitrary per-instance styling APIs.

TypeScript props alone cannot prevent CSS variables or global styles from being overridden. Keep the supported contract clear and verify it through code review and tests.

## Validation

Run from the repository root:

```sh
npm run lint
npm run typecheck
npm run build:storybook
npm run build:fieldnote
```

Update stories and relevant docs whenever a public component API or behavior changes. See [AGENTS.md](../../AGENTS.md) for repository-wide rules.

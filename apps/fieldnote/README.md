# Fieldnote

Fieldnote is the consuming product mock in this repository: an interface for environmental fieldwork and biodiversity monitoring. The concept gives the design system a realistic product context instead of developing components only as isolated demos.

This is a learning/portfolio application. Treat the product description as domain context, not proof that every workflow described below is already implemented.

## Product context

People doing fieldwork may need to record observations, connect findings to a site or survey, keep notes usable in the field, and review monitoring data later. The interface should favor clear information hierarchy, efficient data capture, readable status, and resilient interaction patterns.

Possible scenarios for future UI work include:

- viewing monitoring sites and survey sessions;
- recording a biodiversity observation or field note;
- selecting or reviewing a species identification;
- understanding draft, submitted, or needs-review states;
- reviewing observations over time.

These are example scenarios to guide design discussions, not a fixed roadmap. Before implementing a workflow, check the current application and agree on the scope.

## Engineering role

- Fieldnote consumes shared components from `@fieldnote/design-system`.
- Reusable components belong in `packages/design-system`, not in app-local copies.
- Global design tokens and typography come from the shared token/design-system styles.
- App-specific routes, page composition, and domain behavior belong here.

When building a screen, use the product context to test component decisions against realistic content, empty states, long names, validation, narrow viewports, and accessible interaction.

## Development

Run commands from the repository root:

```sh
npm run dev:fieldnote
npm run lint
npm run typecheck
npm run build:fieldnote
```

See the root [README](../../README.md) and [AGENTS.md](../../AGENTS.md) for repository commands and shared conventions.

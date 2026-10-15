# Frontend Product Engineering Lab

A hands-on learning lab for senior frontend and product engineering: design systems, React/TypeScript architecture, accessibility, testing, and practical AI-powered experiences.

## Workspace layout

- `apps/fieldnote` — Next.js product mock, consuming the shared design system.
- `apps/storybook` — standalone Storybook for isolated component development and documentation.
- `packages/design-system` — shared React components, component stories, and theme entry point.
- `packages/tokens` — typed design tokens and shared token CSS.

Both Fieldnote and Storybook consume components from `@fieldnote/design-system`; stories live beside those components so Storybook demonstrates the real implementation.

## Getting started

Use a Node version compatible with the versions declared in the workspace packages, then install from the repository root:

```sh
npm install
npm run dev:fieldnote
```

In a second terminal, run Storybook:

```sh
npm run dev:storybook
```

Storybook is available at http://localhost:6006 by default.

## Useful scripts

- `npm run dev` — alias for Fieldnote development.
- `npm run dev:fieldnote` — start the Next.js product.
- `npm run dev:storybook` — start Storybook independently.
- `npm run build:fieldnote` — build Fieldnote.
- `npm run build:storybook` — build Storybook as a static site.
- `npm run build:tokens` — build typed token exports.
- `npm run typecheck` — run type-check scripts across workspaces.

## Adding a component

1. Implement the semantic React component under `packages/design-system/src/components`.
2. Export its public API from `packages/design-system/src/index.ts`.
3. Add a colocated `.stories.tsx` file with meaningful variants and states.
4. Import the component from `@fieldnote/design-system` where needed; do not duplicate its implementation in either app.
5. Check keyboard focus, disabled behavior, accessible names, and responsive behavior in Storybook and the product context.

## Troubleshooting Storybook

If Storybook reports that it cannot find `@storybook/react-vite/preset`, reinstall workspace dependencies from the repository root so the framework package is present:

```sh
npm install
npm ls storybook @storybook/react-vite
npm run dev:storybook
```

The Storybook CLI, framework, and addons are pinned to the same Storybook release in `apps/storybook/package.json` to avoid version drift.

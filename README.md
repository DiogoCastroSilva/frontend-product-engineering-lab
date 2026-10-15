# Frontend Product Engineering Lab

A hands-on portfolio and learning repository for senior frontend/product engineering. The goal is to practice the decisions behind production-quality frontend work—not just ship screens—including design-system architecture, React and TypeScript APIs, accessibility, testing, documentation, and eventually useful AI-powered product experiences.

## What we're building and why

The first focus is a small, reusable design system used by a realistic product mock. This gives the project real constraints: components need meaningful states and accessible behavior, tokens need a clear source of truth, and the consuming app must use the shared components rather than reimplement them.

AI-assisted development is part of the workflow, but generated code should still be understandable, reviewed, tested, and consistent with the architecture. See [AGENTS.md](./AGENTS.md) for repository-wide instructions for AI coding tools.

## Workspace map

- `apps/fieldnote` — a product mock for environmental fieldwork and biodiversity monitoring. It provides a realistic context for designing interfaces for field observations and monitoring workflows; it is a learning environment, not a claim that a complete production product exists.
- `apps/storybook` — a standalone Storybook app for developing, exploring, and documenting the shared components in isolation.
- `packages/design-system` — reusable React components and their colocated stories. This is the single implementation used by Fieldnote and Storybook.
- `packages/tokens` — shared design tokens and CSS entry points for color, typography, and related visual foundations.

The dependency direction is:

```text
apps/fieldnote ───────┐
                      ├──> packages/design-system ───> packages/tokens
apps/storybook ───────┘
```

Packages must not depend on either app. Do not duplicate shared component implementations inside an app.

## Getting started

Use the Node version specified in the root `.nvmrc`, then install dependencies from the repository root:

```sh
npm ci
npm run dev:fieldnote
```

In a second terminal:

```sh
npm run dev:storybook
```

Storybook runs on [http://localhost:6006](http://localhost:6006) by default; Fieldnote runs on the Next.js development server, usually [http://localhost:3000](http://localhost:3000).

## Useful commands

- `npm run dev:fieldnote` — start the Fieldnote app.
- `npm run dev:storybook` — start Storybook independently.
- `npm run build:fieldnote` — build Fieldnote.
- `npm run build:storybook` — build the Storybook site.
- `npm run lint` — run lint scripts configured by workspaces.
- `npm run typecheck` — run type-check scripts configured by workspaces.
- `npm run format:check` — check formatting.
- `npm run verify` — run lint, typecheck, and formatting checks.

## Adding or changing a component

1. Put the implementation under `packages/design-system/src/components/<component-name>/`.
2. Keep its Storybook stories beside it in a `.stories.tsx` file.
3. Export the public API from `packages/design-system/src/index.ts`.
4. Consume the component through `@fieldnote/design-system`; do not copy its implementation into either app.
5. Define a small, intentional public API. Prefer named variants and sizes over arbitrary per-instance styling escape hatches.
6. Check keyboard behavior, accessible names, focus visibility, disabled/loading states, responsive behavior, and contrast.
7. Run the relevant workspace checks and the root verification commands.

See the README in each app/package for its responsibilities and local conventions.

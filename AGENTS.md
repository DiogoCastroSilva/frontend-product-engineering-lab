# Instructions for AI coding agents

## Purpose and current focus

This repository is a learning and portfolio lab for senior frontend/product engineering. The current focus is the foundation: a shared design system, design tokens, accessible React/TypeScript components, Storybook documentation, and a realistic consuming product. AI-assisted product patterns may come later; do not introduce AI features just because this repository mentions them.

Fieldnote is the product scenario: environmental fieldwork and biodiversity monitoring. Use that context to make examples and UI states realistic, but distinguish a proposed idea from an implemented or agreed requirement.

## Read the relevant context first

- Start with the root [README.md](./README.md) for goals and workspace boundaries.
- For Fieldnote product context, read [apps/fieldnote/README.md](./apps/fieldnote/README.md).
- Before changing reusable components, read [packages/design-system/README.md](./packages/design-system/README.md).
- Before changing tokens or global styles, read [packages/tokens/README.md](./packages/tokens/README.md).
- For Storybook-specific work, read [apps/storybook/README.md](./apps/storybook/README.md).

Inspect the actual implementation before proposing or making changes. Documentation describes intent; code and tests describe current behavior. If they disagree, identify the discrepancy rather than silently assuming either is correct.

## Architecture boundaries

- This is an npm-workspaces monorepo. Install dependencies and run root scripts from the repository root.
- `apps/fieldnote` is the consuming Next.js product mock.
- `apps/storybook` is a separate Storybook application.
- `packages/design-system` owns reusable React components and their colocated stories.
- `packages/tokens` owns shared visual tokens and CSS entry points.
- Both apps consume the design system. The design system may depend on tokens, but packages must not import from apps.
- Do not duplicate shared component implementations in an app.
- Keep stories colocated with their component implementation unless there is a concrete technical reason not to.

## Design-system principles

- Prefer semantic, typed component APIs with a small set of intentional variants and sizes.
- Treat visual styling as a contract. Do not casually expose `className`, inline `style`, or other arbitrary overrides that let consumers bypass the supported API. If a customization requirement is real, make it explicit and document it.
- Use the existing design tokens and generated Tailwind utilities. Avoid arbitrary `var(...)` utility values when an equivalent token utility exists.
- Keep reusable component styling in the design-system package; keep app-specific layout and product composition in the app.
- Accessibility is part of component behavior, not a final polish step. Consider semantic HTML, keyboard interaction, focus visibility, accessible names, disabled/loading states, status communication, and contrast.
- Do not add components, abstractions, dependencies, or configuration merely for hypothetical future needs. Explain the concrete need and trade-offs first.

## Implementation workflow

1. Inspect the relevant files and nearby conventions before editing.
2. State the problem being solved and preserve unrelated user work.
3. Make the smallest coherent change; update documentation and stories when behavior or public APIs change.
4. Prefer type-only imports for types and keep public exports deliberate.
5. Never claim a command passed unless it was actually run and its result checked.
6. Run the narrowest relevant checks first, then applicable root checks:
   - `npm run lint`
   - `npm run typecheck`
   - `npm run format:check`
   - `npm run build:fieldnote`
   - `npm run build:storybook`
7. If a check cannot run, report that clearly and provide the exact reason. Do not weaken lint rules or tests solely to make CI green.
8. Keep docs accurate to the current repository. Mark future ideas as proposals, not existing features.

## Product and design decisions

- Prefer practical, accessible product engineering over elaborate demo-only UI.
- Use Fieldnote as a believable environmental fieldwork/biodiversity-monitoring context. Potential examples may include sites, surveys, observations, species, and field notes, but these are domain examples—not automatically committed requirements.
- Make trade-offs explicit. When a decision affects package boundaries, token ownership, public component APIs, or theming, update the relevant documentation and explain why.
- Do not invent requirements, claim functionality exists when it does not, or broaden scope without a clear benefit.

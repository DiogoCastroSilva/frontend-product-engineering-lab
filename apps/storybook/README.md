# Storybook

This workspace runs Storybook as a separate application for developing, reviewing, and documenting the reusable components in `@fieldnote/design-system`.

## Responsibilities

- Render components in isolation from Fieldnote's routes and data.
- Show supported variants, sizes, and meaningful states through stories.
- Make accessibility and interaction review easier during component development.
- Keep documentation close to implementation: stories live beside their component in `packages/design-system/src/components`.

Storybook is a consumer of the design system, not a second place to implement components. Do not copy component code into this app.

## Development

Run commands from the repository root:

```sh
npm run dev:storybook
npm run build:storybook
npm run typecheck
```

The development server defaults to [http://localhost:6006](http://localhost:6006).

Use stories to make the supported component API and key visual/interaction states visible. Storybook accessibility tooling helps find issues but does not replace keyboard testing, contrast checks, or automated tests.

See the root [AGENTS.md](../../AGENTS.md) for shared architecture and AI-agent instructions.

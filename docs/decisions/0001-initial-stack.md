# ADR-0001: Choose the Fieldnote stack and shared design-system architecture

- **Status:** Accepted
- **Date:** 2026-10-10
- **Decision owners:** Project owner
- **Related:** [ADR template](./0000-adr-template.md)

## Context

This repository is a hands-on learning lab for senior frontend and product engineering. The first product is Fieldnote, a fictional environmental fieldwork and biodiversity-monitoring SaaS. The goal is to build realistic product UI while learning modern React/TypeScript architecture, design-system foundations, accessibility, testing, and practical AI-powered experiences.

The design system has two consumers: Fieldnote and a separate Storybook application. This justifies a small shared component package while retaining the existing token package, and avoids a publishing pipeline or many narrowly split packages.

## Decision drivers

- Learn skills relevant to modern React/TypeScript product-engineering roles.
- Build a cohesive product that exercises components in real screens and states.
- Reuse mature tools for styling, routing, and complex interaction behavior.
- Keep the architecture understandable and easy to change.
- Share one implementation of components and token values across Fieldnote and Storybook.
- Avoid premature publishing, backend infrastructure, and unnecessary abstractions.

## Options considered

### Option A — Next.js product + standalone Storybook + shared component and token packages

- **Benefits:** Keeps product and component documentation independent; provides a real package boundary; both consumers exercise the same components and theme.
- **Costs and risks:** Requires workspace dependency management and coordination of shared CSS/Tailwind scanning.
- **Fit:** Selected for the current two-consumer learning lab.

### Option B — Keep components inside Fieldnote

- **Benefits:** Minimal setup and no package boundary.
- **Costs and risks:** Storybook and the product would not consume a clearly defined shared library; imports and styling could become coupled to Next.js internals.
- **Fit:** Not suitable for the intended architecture.

### Option C — Split tokens, typography, spacing, and components into many packages

- **Benefits:** Independently versionable and distributable units.
- **Costs and risks:** Adds maintenance overhead before separate release cycles or consumers require it.
- **Fit:** Not justified. Keep one token package and one component package.

### Option D — Use Vite/React for Fieldnote instead of Next.js

- **Benefits:** Smaller framework surface for a client-only app.
- **Costs and risks:** Less practice with Next.js routing and rendering decisions relevant to product engineering.
- **Fit:** Not selected. Storybook uses its own React/Vite-based environment because it is a component-development app, not a second production app.

## Decision

- **Fieldnote:** Next.js with React and TypeScript, styled with Tailwind CSS.
- **Storybook:** A separate app at `apps/storybook` for isolated component development, interactive examples, and documentation.
- **Components:** One private workspace package at `packages/design-system`, named `@fieldnote/design-system`, consumed by both apps.
- **Tokens:** Retain `packages/tokens` as `@fieldnote/tokens` for typed token exports and shared token CSS. The design-system package consumes its CSS entry point. Keep token categories together rather than creating one package per category.
- **Stories:** Store component implementations and their `.stories.tsx` files together in the design-system package. Storybook configuration and preview environment live in `apps/storybook`.
- **Distribution:** Keep packages private and workspace-local; do not publish them unless a concrete need appears.
- **Components:** Build foundational components using semantic HTML, TypeScript, tokens, and Tailwind. Evaluate accessible primitives such as Radix for complex interactions needing robust keyboard and focus management.
- **React Compiler:** Keep disabled initially; reassess after establishing a baseline and a concrete performance question.
- **shadcn/ui:** Use as a reference and potential source of selected patterns, not as a wholesale starter kit.

The repository boundary is:

```text
apps/
  fieldnote/       # Next.js product and product-specific behavior
  storybook/       # Storybook configuration and documentation environment
packages/
  design-system/   # Components, component stories, and shared theme integration
  tokens/          # Typed design tokens and token CSS
```

The root npm workspace manages the projects and their dependencies. Storybook is an independent app, not part of Fieldnote's runtime.

## Rationale

Fieldnote provides real product use cases; Storybook gives a focused place to inspect component variants, states, interactions, and documentation. The package boundary keeps implementations shared without requiring publishing infrastructure.

Tailwind is a styling tool, not the design system by itself. Tokens, component APIs, accessibility behavior, documentation, and governance still need deliberate design. Both consumers load the shared theme stylesheet, and Tailwind must discover utility classes used in the design-system package.

A simple Button is useful to implement and understand directly. Dialog, popover, and menu focus/keyboard behavior are better candidates for mature accessible primitives, styled with our own API and tokens.

## Consequences

### Positive

- The architecture is relevant to modern React/TypeScript product work.
- Fieldnote screens give components real product use cases.
- Storybook and Fieldnote consume the same component implementations.
- Typed tokens and CSS theme values have an explicit shared package.
- Foundational components and their trade-offs remain visible and testable.

### Trade-offs

- Workspace and package boundaries add configuration.
- Tailwind and shared CSS need explicit integration in both consumers.
- Storybook's environment differs from Next.js, so framework-specific behavior must be tested in Fieldnote.
- Tailwind does not enforce consistency by itself; token conventions and reusable component APIs must do that work.

### Risks and mitigations

- **Risk:** Utility classes or one-off styles drift from the system. **Mitigation:** Document APIs and variants, and review repeated patterns before introducing abstractions.
- **Risk:** Consumers get different theme behavior. **Mitigation:** Load shared token CSS and verify components in both environments.
- **Risk:** Accessibility is assumed to be solved by a primitive. **Mitigation:** Test keyboard behavior, focus management, semantics, and real user flows.
- **Risk:** Infrastructure work displaces core learning goals. **Mitigation:** Defer publishing, backend work, and extra packages until there is a demonstrated need.

## Implementation notes

1. Use one root npm workspace install and lockfile.
2. Align workspace names and root scripts.
3. Add the design-system package and keep the existing token package as its dependency.
4. Scaffold Storybook as an independent app in `apps/storybook`.
5. Load shared theme CSS in both consumers and ensure Tailwind discovers package utility classes.
6. Implement a Button with variants, disabled/loading behavior, visible keyboard focus, and colocated stories.
7. Add Radix only when interaction complexity warrants it.
8. Record materially separate decisions—such as testing strategy or AI evaluation—in their own ADRs.

## Validation

- [ ] Root workspace install succeeds and uses one lockfile.
- [ ] Fieldnote starts, lints, type-checks, and builds.
- [ ] Storybook starts independently from `apps/storybook`.
- [ ] Storybook renders a component from `@fieldnote/design-system`.
- [ ] Fieldnote imports that same component from the package.
- [ ] Both consumers load the same token CSS and package utility classes work.
- [ ] Button has semantic HTML, documented variants, disabled/loading behavior, and visible keyboard focus.
- [ ] A complex interaction is evaluated against an accessible primitive before implementation.

## Revisit when

- A separate release or publishing workflow becomes necessary.
- A new consumer requires materially different package boundaries.
- Next.js adds more complexity than value for the product screens.
- A concrete performance case warrants evaluating React Compiler.
- A chosen library blocks a required interaction, accessibility need, or styling constraint.

## References

- [Next.js: create-next-app CLI](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- [Tailwind CSS: Next.js installation](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Tailwind CSS: Theme variables](https://tailwindcss.com/docs/theme)
- [Storybook: React/Vite framework](https://storybook.js.org/docs/get-started/frameworks/react-vite)
- [Storybook: Writing stories](https://storybook.js.org/docs/writing-stories)
- [Radix Primitives: Introduction](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [W3C: WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [shadcn/ui](https://ui.shadcn.com/)

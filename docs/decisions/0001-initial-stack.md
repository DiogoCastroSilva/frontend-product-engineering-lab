# ADR-0001: Choose the Fieldnote stack and shared design-system architecture

- **Status:** Accepted
- **Date:** 2026-10-10
- **Decision owners:** Project owner
- **Related:** [ADR template](./0000-adr-template.md)

## Context

This repository is a hands-on learning lab for senior frontend and product engineering. The first product is Fieldnote, a fictional environmental fieldwork and biodiversity-monitoring SaaS. The goal is to build realistic product UI while learning modern React/TypeScript architecture, design-system foundations, accessibility, testing, and practical AI-powered experiences.

The project should teach useful production patterns without spending disproportionate effort recreating commodity tooling or building infrastructure before there is a demonstrated need. The Fieldnote app was scaffolded with `create-next-app`. React Compiler remains disabled initially so rendering and performance behavior can be explored explicitly before comparing automatic optimization.

The design system now has two real consumers: the Fieldnote product and a separate Storybook application. This justifies a small shared package, while still avoiding a collection of narrowly split packages or a package-publishing pipeline.

## Decision drivers

- Learn skills relevant to modern React/TypeScript product-engineering roles.
- Build a cohesive product that exercises components in real screens and states.
- Reuse mature tools for styling, routing, and complex interaction behavior.
- Keep the architecture understandable and easy to change.
- Share one implementation of components and design tokens across Fieldnote and Storybook.
- Avoid premature publishing, extra packages, backend infrastructure, and unnecessary abstractions.

## Options considered

### Option A — Next.js product app + standalone Storybook app + one shared design-system package

- **Benefits:** Keeps product and component documentation environments independent; provides a real package boundary; makes both consumers exercise the same components and theme.
- **Costs and risks:** Requires workspace dependency management and coordination of shared CSS/Tailwind scanning across consumers.
- **Fit:** Best fit now that Fieldnote and Storybook are separate consumers.

### Option B — Keep all components inside the Fieldnote app

- **Benefits:** Minimal setup and no package boundary.
- **Costs and risks:** Storybook and the product would not consume a clearly defined shared library; imports and styling could become coupled to Next.js app internals.
- **Fit:** Was reasonable for a single consumer, but no longer fits the intended architecture.

### Option C — Split tokens, typography, spacing, and components into separate packages

- **Benefits:** Independently versionable and distributable units.
- **Costs and risks:** Adds dependency, configuration, and maintenance overhead before separate release cycles or consumers require it.
- **Fit:** Not justified for this learning lab.

### Option D — Use Vite/React for the Fieldnote product instead of Next.js

- **Benefits:** Smaller framework surface area for a client-only application.
- **Costs and risks:** Less practice with Next.js routing and rendering decisions relevant to product engineering.
- **Fit:** Not selected for the product. Storybook may use its own React/Vite-based environment because it is a separate component-development application, not a second production app.

## Decision

Use the following architecture and stack:

- **Fieldnote:** Next.js with React and TypeScript, styled with Tailwind CSS.
- **Storybook:** A separate application at `apps/storybook` for isolated component development, interactive examples, and component documentation.
- **Design system:** One shared package at `packages/design-system`, named `@fieldnote/design-system`, consumed by both Fieldnote and Storybook through the repository's npm workspace.
- **Design tokens and shared styles:** Owned by the design-system package. Keep color, typography, spacing, radii, and other token categories organized within the package; do not create a separate package for each category.
- **Components and stories:** Reusable component implementations and their `.stories.tsx` files live in the design-system package. Storybook configuration and its preview environment live in `apps/storybook`.
- **Package distribution:** Keep the package private and workspace-local. Do not publish it to a registry unless a concrete need appears.
- **Component implementation:** Build a small set of foundational components ourselves using semantic HTML, TypeScript, tokens, and Tailwind. Adopt accessible primitives such as Radix selectively for complex interactions that require robust keyboard and focus management.
- **React Compiler:** Keep it disabled initially; reassess after establishing a baseline and identifying a concrete performance question.
- **shadcn/ui:** Treat it as a reference and potential source of selected patterns, not as a wholesale starter kit.

The intended repository boundary is:

```text
apps/
  fieldnote/       # Next.js product and product-specific behavior
  storybook/       # Storybook configuration and documentation environment
packages/
  design-system/   # Shared tokens, styles, components, and component stories
```

The root npm workspace manages these projects and their dependencies. It does not make Storybook and the design-system package the same application.

## Rationale

This setup provides realistic product-engineering constraints and a genuine shared-library boundary without prematurely introducing publishing or multiple packages. Fieldnote gives components real product use cases; Storybook provides a focused place to inspect component variants, states, interactions, and documentation.

Tailwind is a styling tool, not the design system by itself. Tokens, component APIs, accessibility behavior, documentation, and governance still need deliberate design. Shared theme CSS must be consumed by both apps, and Tailwind must be configured to discover utility classes used in the design-system package.

We will avoid rebuilding low-level browser behavior for complex widgets. A simple Button is useful to implement and understand directly; dialog, popover, and menu focus/keyboard behavior are better candidates for mature accessible primitives, with our own styling and API layered on top.

## Consequences

### Positive

- The architecture is relevant to modern React/TypeScript product work.
- Fieldnote screens give components realistic use cases instead of making the design system abstract.
- Storybook and Fieldnote consume the same component implementations.
- Tokens and component APIs have a single source of truth.
- Foundational components and their trade-offs remain visible and testable.
- The project can grow toward accessibility checks, automated tests, and AI features without requiring early publishing infrastructure.

### Negative / trade-offs

- A workspace and package boundary add some configuration compared with a single app.
- Tailwind and shared CSS need explicit integration in both consumers.
- Storybook's environment is distinct from Next.js, so framework-specific behavior must be tested in Fieldnote where relevant.
- Tailwind does not enforce consistency on its own; token conventions and reusable component APIs must do that work.

### Risks and mitigations

- **Risk:** Utility classes or one-off styles drift from the intended system.  
  **Mitigation:** Establish tokens, document component APIs and variants, and review repeated patterns before introducing abstractions.
- **Risk:** The two consumers end up with different token or CSS behavior.  
  **Mitigation:** Keep shared tokens/styles in the design-system package and verify the same component in both environments.
- **Risk:** Accessibility is treated as solved merely by using a primitive.  
  **Mitigation:** Test keyboard behavior, focus management, semantics, and real user flows.
- **Risk:** The project grows into infrastructure work before core learning goals are met.  
  **Mitigation:** Keep one private design-system package; defer registry publishing, extra packages, backend work, and complex automation until a specific need is demonstrated.

## Implementation notes

1. Confirm the root npm workspace and consolidate dependency management into the root lockfile.
2. Align the Fieldnote package name and root scripts with the workspace names.
3. Convert the existing placeholder `packages/tokens` package into `packages/design-system`; do not retain separate token and component packages.
4. Scaffold Storybook as an independent app in `apps/storybook`, with configuration isolated there.
5. Establish shared theme CSS/tokens and configure both consumers to load it. Ensure Tailwind discovers classes in the design-system package.
6. Implement and export a Button with documented variants, disabled behavior, and visible keyboard focus; write its stories beside the component.
7. Add Radix only when a component's interaction complexity warrants it.
8. Record materially separate decisions—such as component testing strategy, token representation, or AI evaluation—in their own ADRs.

## Validation

- [ ] The root npm workspace installs cleanly and uses one root lockfile.
- [ ] Fieldnote starts, lints, type-checks, and builds.
- [ ] Storybook starts independently from `apps/storybook`.
- [ ] Storybook renders a component imported from `@fieldnote/design-system`.
- [ ] Fieldnote imports that same component from the shared package.
- [ ] Both consumers load the same theme tokens and Tailwind utilities work for package components.
- [ ] The first Button has semantic HTML, documented variants, disabled behavior, and visible keyboard focus.
- [ ] At least one complex interaction is evaluated against an accessible primitive before deciding whether to use it.

## Revisit when

- A separate release or publishing workflow for the design system becomes necessary.
- A new consumer requires materially different package boundaries.
- Next.js adds more complexity than value for the product screens being built.
- There is a concrete performance case that warrants enabling and evaluating React Compiler.
- A chosen library blocks a required interaction, accessibility need, or styling constraint.

## References

- [Next.js: create-next-app CLI](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- [Tailwind CSS: Next.js installation](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Tailwind CSS: Theme variables](https://tailwindcss.com/docs/theme)
- [Storybook: Next.js framework](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Storybook: React/Vite framework](https://storybook.js.org/docs/get-started/frameworks/react-vite)
- [Storybook: Writing stories](https://storybook.js.org/docs/writing-stories)
- [Radix Primitives: Introduction](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Radix Primitives: Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- [W3C: WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [shadcn/ui](https://ui.shadcn.com/)

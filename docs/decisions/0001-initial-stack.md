# ADR-0001: Use Next.js, React, TypeScript, and Tailwind CSS for the Fieldnote app

- **Status:** Accepted
- **Date:** 2026-10-10
- **Decision owners:** Project owner
- **Related:** [ADR template](./0000-adr-template.md)

## Context

This repository is a hands-on learning lab for senior frontend and product engineering. The first project is Fieldnote, a fictional environmental fieldwork and biodiversity-monitoring SaaS product. The goal is to build realistic product UI while learning design-system foundations, accessibility, testing, frontend architecture, and practical AI-powered experiences.

The project should teach useful production patterns without spending disproportionate effort recreating commodity tooling or building infrastructure before there is a demonstrated need. The initial app has been created with `create-next-app` and is running locally. React Compiler was left disabled initially so React rendering and performance behavior can be explored explicitly before comparing automatic optimization.

## Decision drivers

- Learn skills relevant to modern React/TypeScript product engineering roles.
- Build a cohesive product that exercises components in real screens and states.
- Reuse mature tools for styling, routing, and complex interaction behavior.
- Keep the initial setup understandable and easy to change.
- Avoid premature monorepo, package publishing, backend, and infrastructure work.

## Options considered

### Option A — Next.js + React + TypeScript + Tailwind CSS

- **Benefits:** A production-relevant React stack; integrated routing and application conventions; fast iteration with utility-based styling; a natural path to tokens and design-system conventions.
- **Costs and risks:** Next.js introduces server/client component boundaries and framework concepts that are not necessary for every component library; Tailwind classes can become inconsistent without token and component conventions.
- **Fit:** Strong fit for a product-focused learning lab, provided the design-system layer stays independent of Next.js-specific APIs.

### Option B — Plain React/Vite + TypeScript + Tailwind CSS

- **Benefits:** Smaller conceptual surface area and a straightforward client-rendered app.
- **Costs and risks:** Less practice with the routing and rendering decisions encountered in Next.js product applications.
- **Fit:** Viable, but not the best match for this lab's broader product-engineering goals.

### Option C — Build styling and application infrastructure from scratch

- **Benefits:** Exposes low-level implementation details.
- **Costs and risks:** Duplicates mature tooling and diverts effort from component design, accessibility, testing, and product behavior.
- **Fit:** Not justified; learn the important trade-offs without recreating commodity infrastructure.

## Decision

Use Next.js with React and TypeScript for the Fieldnote application, Tailwind CSS for styling, and the framework's standard tooling. Keep React Compiler disabled at the start. Add Storybook for isolated component development. Build a small set of foundational components ourselves, using semantic HTML and Tailwind, and adopt accessible primitives such as Radix selectively for complex interactions that require robust keyboard and focus management.

Start with a single application in `apps/fieldnote`. Keep design-system code organized within the app initially; do not create a separate publishable package or monorepo tooling until a real second consumer or other concrete need appears.

Treat shadcn/ui as a reference and potential source of selected patterns, not as a wholesale starter kit. The learning objective includes designing component APIs, variants, states, documentation, and tests.

## Rationale

This stack gives the project realistic product-engineering constraints while leaving the work focused on the decisions we want to practice. Tailwind is a styling tool, not the design system by itself: tokens, naming, component APIs, accessibility behavior, documentation, and governance still need deliberate design.

We will avoid rebuilding low-level browser behavior for complex widgets. For example, a simple Button is useful to implement and understand directly; dialog, popover, and menu focus/keyboard behavior are better candidates for a mature accessible primitive, with our own styling and API layered on top.

## Consequences

### Positive

- The project is relevant to modern React/TypeScript product work.
- Fieldnote screens give components realistic use cases instead of making the design system abstract.
- Foundational components and their trade-offs remain visible and testable.
- The stack can grow toward Storybook, accessibility checks, automated tests, and AI features without requiring early infrastructure work.

### Negative / trade-offs

- Next.js adds concepts that are not necessary for every design-system exercise.
- Tailwind does not enforce consistency on its own; token conventions and reusable component APIs must do that work.
- Keeping components inside one app is less reusable than a dedicated package, intentionally trading early reuse for simplicity.

### Risks and mitigations

- **Risk:** Utility classes and one-off styling drift from the intended system.
  **Mitigation:** Establish design tokens, document component APIs and variants, and review screens for repeated patterns before introducing abstractions.
- **Risk:** Accessibility behavior is treated as solved merely by using a primitive.
  **Mitigation:** Test keyboard behavior, focus management, semantics, and real user flows rather than relying on library choice alone.
- **Risk:** The app grows into infrastructure work before core learning goals are met.
  **Mitigation:** Defer monorepo, package publishing, backend, and complex automation until a specific need is demonstrated.

## Implementation notes

- Keep design-system components free of Next.js-specific imports where practical.
- Start with tokens and a Button; document variants and interactive states in Storybook.
- Add Radix only when a component's interaction complexity warrants it.
- Reassess React Compiler after establishing a baseline and identifying a concrete performance question.
- Keep this ADR focused on stack and project structure. Record materially separate decisions—such as token representation, component testing strategy, or an AI evaluation approach—in their own ADRs.

## Validation

- [ ] The app runs locally and the standard lint/build checks pass.
- [ ] Storybook can render a component independently of a product page.
- [ ] The first Button uses semantic HTML and has documented variants, disabled behavior, and visible keyboard focus.
- [ ] At least one complex interaction is evaluated against an accessible primitive before deciding whether to use it.

## Revisit when

- A second application or consumer needs to share components.
- Next.js adds more complexity than value for the product screens being built.
- We have a concrete performance case that warrants enabling and evaluating React Compiler.
- A chosen library blocks a required interaction, accessibility need, or styling constraint.

## References

- [Next.js: create-next-app CLI](https://nextjs.org/docs/app/api-reference/cli/create-next-app)
- [Tailwind CSS: Next.js installation](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Tailwind CSS: Theme variables](https://tailwindcss.com/docs/theme)
- [Storybook: Writing stories](https://storybook.js.org/docs/writing-stories)
- [Radix Primitives: Introduction](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Radix Primitives: Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- [W3C: WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [shadcn/ui](https://ui.shadcn.com/)

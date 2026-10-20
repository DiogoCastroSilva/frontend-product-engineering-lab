# ADR-0002: Define the Fieldnote design-system and MVP contract

- **Status:** Accepted for scope/principles; token and font values remain subject to FN-002 verification
- **Date:** 2026-10-19
- **Decision owners:** Project owner
- **Related:** [ADR-0001](./0001-initial-stack.md), [design reference](../design/README.md), [roadmap](../roadmap.md)

## Context
The repository demonstrates senior frontend/product engineering through a reusable design system used by a realistic product. The design reference must guide implementation without becoming a competing source of truth or implying mock behavior is shipped.

## Decision

### Documentation and design source of truth
- Keep design intent and component contracts under docs/design, architecture choices under docs/decisions, staged delivery in docs/roadmap.md, and implementation handoffs in docs/features.
- The standalone HTML is illustrative. Actual tokens in packages/tokens, component APIs/implementation in packages/design-system, stories rendered through apps/storybook, and product behavior in apps/fieldnote are the implementation sources of truth.
- Reconcile sample values against real tokens; do not copy them blindly.

### Design-system principles
- Prefer semantic tokens layered over primitive palette values.
- Keep public APIs typed, small, and intentional; add variants for real product needs.
- Treat keyboard interaction, accessible names, focus, disabled/loading behavior, status communication, contrast, responsiveness, and reduced motion as part of component design.
- Target WCAG 2.2 AA but do not claim conformance without checking actual components and flows.
- Storybook stays a separate app; component implementations and colocated stories stay in the design-system package.

### Product scope
- Fieldnote is an environmental fieldwork and biodiversity-monitoring demo.
- MVP is a local-first observation workflow with fictional seed data, derived overview metrics, search/status filters, create/detail/edit/delete, validation, and safe reset/recovery.
- Browser storage is not cloud sync. Do not imply remote backup, multi-user collaboration, or a nonexistent backend.
- Defer backend/auth, maps/GIS, AI identification/chat, external data sources, and package publishing until the core workflow is complete and a concrete need appears.

### Typography
Typography needs one consistent source of truth, but the existing Geist app setup and Inter token direction require an audit before changing either. FN-002 owns the comparison, choice, and verification; neither direction in the prototype is final until then.

## Consequences
The portfolio demonstrates system boundaries, semantic API design, and verification discipline. Work is sequenced around a coherent workflow. Some visual values remain provisional until reconciled with tokens and contrast checks.

## Revisit when
A real requirement contradicts local-first scope; a concrete customization need exceeds current APIs; verified accessibility/usability findings require changes; or deployment/data needs justify deferred scope.

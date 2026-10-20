# Fieldnote documentation

This folder is the durable source of truth for product intent, design direction, decisions, delivery sequencing, and implementation handoffs.

## Start here
- [Design reference](./design/README.md) — visual direction, component behavior, accessibility contract, and standalone HTML.
- [Roadmap](./roadmap.md) — staged delivery plan and dependency order.
- [Feature tickets](./features/README.md) — implementation-ready tickets with scope, acceptance criteria, dependencies, and verification.
- [Architecture decisions](./decisions/) — accepted choices and trade-offs; start with [ADR-0001](./decisions/0001-initial-stack.md).

## Documentation rules
1. Separate implemented behavior, accepted decisions, planned work, and ideas. Never describe planned work as shipped.
2. Update the ticket when scope or acceptance criteria change; update an ADR when an architectural decision changes.
3. Keep tickets small enough for a focused implementation and verification cycle.
4. Treat the HTML reference as a design handoff, not the implementation source of truth.
5. Record checks based on actual command results; do not claim accessibility or quality gates without evidence.
6. Add ADRs for meaningful decisions with alternatives and consequences, not every implementation detail.

## Workflow
Read the ticket and relevant ADR/design notes; inspect current code; implement the smallest coherent slice; update tests/stories; run relevant checks; then update ticket status based on evidence. Keep versioned handoffs in this repository even if GitHub Issues are used for day-to-day tracking.

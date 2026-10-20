# Feature tickets

These versioned tickets are technical handoffs with context, scope, acceptance criteria, dependencies, and verification expectations.

| ID | Feature | Dependencies | Status |
|---|---|---|---|
| [FN-001](./FN-001-baseline.md) | Baseline audit and misleading starter behavior | — | Planned |
| [FN-002](./FN-002-token-contract.md) | Token and typography contract | FN-001 | Planned |
| [FN-003](./FN-003-button-badge.md) | Button and Badge APIs/states | FN-002 | Planned |
| [FN-004](./FN-004-observation-list.md) | Overview and observation list | FN-001–003 | Planned |
| [FN-005](./FN-005-observation-workflows.md) | Create, detail, edit, delete | FN-004 | Planned |
| [FN-006](./FN-006-local-persistence.md) | Browser persistence and recovery | FN-005 | Planned |
| [FN-007](./FN-007-quality-gates.md) | Accessibility, responsive, tests, CI | Incremental | Planned |
| [FN-008](./FN-008-release.md) | Portfolio release and case study | FN-007 | Planned |

## Status vocabulary
- **Planned:** scoped and ready to pick up.
- **In progress:** implementation started.
- **Blocked:** cannot proceed; blocker recorded.
- **Done:** acceptance criteria and verification satisfied.
- **Deferred:** intentionally moved out of current scope with rationale.

Read the roadmap, design reference, relevant ADRs, and current code before implementation. Adapt tickets to verified current state rather than assuming nothing has changed. Report commands as passed only when actually run.

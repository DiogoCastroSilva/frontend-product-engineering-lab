# FN-005 — Add observation create, detail, edit, and delete

**Status:** Planned · **Milestone:** M3 · **Priority:** P0 · **Dependencies:** FN-004

## Problem and outcome
A useful product demo must support a coherent task, not just browse seeded examples. Users can create, inspect, edit, change review status, and safely delete observations.

## Scope
- Add an accessible create/edit form using native controls or existing reusable components.
- Validate required fields and reasonable constraints.
- Present detail fields and status clearly.
- Support defined status transitions.
- Confirm destructive deletion with explicit record context and safe cancel behavior.
- Preserve entered values after validation errors.

## Acceptance criteria
- [ ] Valid create updates the list and overview metrics.
- [ ] Required/invalid fields have text errors associated with controls.
- [ ] Keyboard users can operate all controls; focus remains sensible through state changes.
- [ ] Detail view provides a clear return path.
- [ ] Edit changes appear consistently in list, detail, and metrics.
- [ ] Status can only be changed to a defined allowed value.
- [ ] Delete requires confirmation; cancel leaves data unchanged.
- [ ] Destructive action is not conveyed by color alone and has an accessible name.
- [ ] Empty, validation, and error states explain recovery.
- [ ] Core workflow behavior has automated tests.

## Verification
Test create, invalid submit, edit, status change, cancel delete, confirm delete, and metric updates; inspect keyboard behavior and run relevant checks.

## Out of scope
Multi-user permissions, server validation, attachments, uploads, audit history, complex nested forms.

# FN-006 — Add browser persistence and recovery

**Status:** Planned · **Milestone:** M4 · **Priority:** P0 · **Dependencies:** FN-005

## Problem and outcome
The browser-only demo should preserve user changes without implying data is uploaded or backed up. Add a narrow storage adapter, validation, recovery, and honest local-only messaging.

## Scope
- Persist observation data in browser storage with a proportionate schema/version strategy.
- Handle missing, malformed, and incompatible stored values safely.
- Add a reset-to-seed action with confirmation if it discards user changes.
- Explain data remains in this browser/device and may be lost if browser data is cleared.
- Keep browser storage out of server-render/module initialization paths to avoid hydration issues.

## Acceptance criteria
- [ ] Create/edit/delete survive refresh in the same browser profile.
- [ ] First run initializes predictable data without overwriting valid existing user data.
- [ ] Malformed/incompatible data does not crash the app or silently display corrupted records.
- [ ] Recovery and reset behavior are understandable; destructive reset requires confirmation.
- [ ] UI accurately explains local storage and does not imply cloud sync, backup, or encryption.
- [ ] Storage boundary is isolated enough to test.
- [ ] Tests cover first run, read/write, malformed data, reset, and refresh where environment permits.

## Implementation notes
Choose localStorage or IndexedDB based on actual record shape; localStorage is likely sufficient for a small MVP. Avoid a general persistence framework.

## Verification
Exercise refresh, corrupted storage, reset, and production build/hydration behavior.

## Out of scope
Accounts, cloud sync, backup guarantees, conflict resolution, service workers, import/export.

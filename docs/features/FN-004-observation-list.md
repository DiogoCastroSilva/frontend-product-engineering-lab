# FN-004 — Build the observation overview and list

**Status:** Planned · **Milestone:** M2–M3 · **Priority:** P0 · **Dependencies:** FN-001, FN-002, FN-003

## Problem and outcome
Exercise the design system in a believable product screen. Build a responsive workspace with fictional observation records, a searchable/filterable list, and metrics derived from the same domain data.

## Scope
- Define a small typed observation model and realistic fictional fixtures.
- Build only the shell/navigation needed for the overview.
- Add a responsive list/table, search, and review-status filters.
- Derive total/draft/needs-review/reviewed counts from the collection.
- Provide empty and no-results states; add loading only if the real data path is asynchronous.

## Acceptance criteria
- [ ] Observation shape and allowed statuses are typed/documented.
- [ ] Counts derive from data and clearly distinguish total versus filtered counts.
- [ ] Case-insensitive search matches agreed readable fields.
- [ ] Status filter works alone and with search; clear/reset is discoverable.
- [ ] Empty dataset and no-results states have different helpful messages.
- [ ] Layout works on mobile and desktop without horizontal overflow.
- [ ] Status is text plus color.
- [ ] Fixtures are fictional and contain no real sensitive information.
- [ ] No backend/cloud-sync claim is introduced.

## Verification
Unit-test filtering/counts; manually check keyboard, statuses, empty states, mobile layout; run applicable checks/build.

## Out of scope
Maps/GIS, geolocation, import/export, external APIs, decorative charts, AI identification.

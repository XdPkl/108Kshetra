# User Stories & Agile Backlog

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | USD-108K-002 |
| Version | 1.0 |
| Status | Approved |
| Date of Issue | 2026-08-29 |
| Traceability | Stories trace to SRS FR/NFR IDs (docs/01-srs/requirements-specification.md) |

### Revision History

| Version | Date | Author | Description |
|---|---|---|---|
| 0.1 | 2026-08-29 | Dev Team | Initial backlog draft |
| 1.0 | 2026-08-29 | Dev Team | Baseline: 7 epics, 26 stories with acceptance criteria |

---

## 1. Definition of Ready / Definition of Done

**Definition of Ready:** story has clear user value, acceptance criteria in Given/When/Then form, and traces to at least one SRS requirement.

**Definition of Done (per story):**
1. Code written to `docs/03-design/coding-standards.md` (JSDoc, lint clean, ≤300-line files).
2. Unit tests written and passing (Vitest + RTL); combined coverage ≥ 80% (Gate A).
3. Code reviewed; all findings reworked and re-reviewed to closure (Gate B).
4. Story demonstrated via automated E2E where applicable.
5. Committed with descriptive message and pushed to GitHub.

---

## 2. Epics

| Epic | Name | Goal |
|---|---|---|
| EP-DATA | Sacred Data Foundation | Authoritative, validated data for 108 kshetrams and 12 Azhwars |
| EP-NAV | Application Shell | Layout, navigation, routing foundation |
| EP-HOME | Home Experience | Engaging entry point with stats and featured kshetrams |
| EP-BRW | Browsing, Search & Filter | Find any kshetram within seconds |
| EP-DTL | Kshetram Detail | Rich, accurate page per kshetram |
| EP-AZW | Azhwars | Present the 12 Azhwars and their Mangalasasanams |
| EP-ENG | Engineering Quality | Automated testing, CI/CD, coding standards, delivery |

---

## 3. Stories

### Epic EP-DATA — Sacred Data Foundation

**US-DATA-01 — Kshetram dataset** (5 pts, Priority 1) — *FR-01*
> As a visitor, I want complete information for all 108 Divya Desams so that I can learn about any kshetram.
- **Given** the data layer, **when** it is loaded, **then** it exposes 108 records each with id, name, Tamil name, place, state, region, deity, deity form, Azhwars, pasuram count, significance, and map query — all non-empty and ids unique.

**US-DATA-02 — Azhwar dataset** (3 pts, Priority 1) — *FR-02*
> As a devotee, I want information about the 12 Azhwars so that I can understand who glorified each desam.
- **Given** the data layer, **when** it is loaded, **then** it exposes 12 Azhwar records (name, period, pasuram count, note, desams glorified) in traditional chronological order.

**US-DATA-03 — Data integrity validation** (3 pts, Priority 1) — *FR-03*
> As a developer, I want automated validation of the datasets so that content errors fail the build, not the visitor.
- **Given** the test suite, **when** data validation tests run, **then** field completeness, id uniqueness, and Azhwar-name consistency are asserted and any violation fails the suite.

**US-DATA-04 — Data access API** (2 pts, Priority 1) — *NFR-04/05*
> As a developer, I want a stable data-access module (`getAllKshetrams`, `getKshetramById`, `getAllAzhwars`) so that the UI never imports raw data directly.
- **Given** the data layer, **when** the UI requests data, **then** it goes through the accessor functions, enabling a future backend swap with no UI change.

### Epic EP-NAV — Application Shell

**US-NAV-01 — Layout, header, footer, routing** (3 pts, Priority 1) — *FR-50/51/52*
> As a visitor, I want consistent navigation on every page so that I can move between sections easily.
- **Given** any page, **when** it renders, **then** a header shows site identity and links (Home, Browse, Azhwars) with the active route highlighted, and a footer shows attribution/disclaimer.

### Epic EP-HOME — Home Experience

**US-HOME-01 — Home page** (3 pts, Priority 1) — *FR-10/11/12*
> As a visitor, I want an inviting home page so that I understand what the site offers and can start exploring.
- **Given** the home page, **when** it renders, **then** it shows the title, an introduction, statistics (108 kshetrams, 12 Azhwars, 4,000 pasurams), at least 4 featured kshetrams as cards, and links to Browse and Azhwars.

### Epic EP-BRW — Browsing, Search & Filter

**US-BRW-01 — Browse all kshetrams** (3 pts, Priority 1) — *FR-20*
> As a visitor, I want to see all 108 kshetrams at a glance so that I can browse the tradition.
- **Given** the Browse page, **when** no search/filter is active, **then** all 108 kshetram cards render in a responsive grid.

**US-BRW-02 — Search & combined filters** (5 pts, Priority 1) — *FR-21/22*
> As a devotee, I want to search by text and filter by state, deity form, and Azhwar so that I can find specific kshetrams.
- **Given** the Browse page, **when** I type a search term and/or select filter values, **then** the grid shows only matching kshetrams (case-insensitive text match across name/place/deity/Azhwar; all filters combined with AND).

**US-BRW-03 — Result count, empty state, reset** (2 pts, Priority 1) — *FR-23/24/25*
> As a visitor, I want feedback on my search so that I am never confused by an empty list.
- **Given** active search/filters, **when** results render, **then** the matching count is shown; **when** nothing matches, **then** an empty state with a "clear all" action appears and restores all 108.

### Epic EP-DTL — Kshetram Detail

**US-DTL-01 — Detail page** (5 pts, Priority 1) — *FR-30/31/32*
> As a visitor, I want a dedicated page per kshetram so that I can study it in depth.
- **Given** a kshetram card, **when** I click it, **then** I navigate to `/kshetram/:id` showing Identity, Location (with Google Maps link opening in a new tab with `rel="noopener noreferrer"`), Deity, and Mangalasasanam sections.

**US-DTL-02 — Unknown id handling** (2 pts, Priority 2) — *FR-33*
> As a visitor, I want graceful handling of bad links so that I am never stuck on a broken page.
- **Given** an invalid id, **when** I open `/kshetram/:id`, **then** a "not found" message renders with a link back to Browse.

### Epic EP-AZW — Azhwars

**US-AZW-01 — Azhwars page with links** (3 pts, Priority 2) — *FR-40/41*
> As a student of the Prabandham, I want to browse the 12 Azhwars so that I can see which desams each glorified.
- **Given** the Azhwars page, **when** it renders, **then** all 12 Azhwars appear chronologically with the count of desams glorified and links to those desams' pages (or pre-filtered Browse).

### Epic EP-ENG — Engineering Quality

**US-ENG-01 — Unit test suite & coverage gate** (5 pts, Priority 1) — *NFR-06*
> As the team, we want automated unit tests with ≥80% coverage so that regressions are caught before release.
- **Given** the codebase, **when** `npm test` runs, **then** all tests pass and coverage of components/hooks/utils is ≥ 80%.

**US-ENG-02 — E2E suite** (5 pts, Priority 1) — *NFR-06*
> As the team, we want Playwright E2E journeys so that user-critical flows are verified end to end.
- **Given** the running app, **when** `npm run e2e` runs, **then** journeys (home → browse → search → detail → azhwars; empty state; bad route) pass on Chromium.

**US-ENG-03 — Lint/format standards enforcement** (2 pts, Priority 1) — *NFR-04*
> As the team, we want ESLint + Prettier enforced so that code style stays uniform.
- **Given** any commit, **when** lint runs, **then** there are zero errors.

**US-ENG-04 — CI pipeline** (3 pts, Priority 1) — *NFR-09*
> As the team, we want GitHub Actions CI so that every push is automatically verified.
- **Given** a push or PR, **when** CI triggers, **then** lint → unit tests → build → E2E run and a failing stage blocks merge.

**US-ENG-05 — Coding standards document** (2 pts, Priority 1) — *NFR-04*
> As a future maintainer, I want a coding standards guide so that I can extend the app consistently.
- **Given** the repo, **when** I read `docs/03-design/coding-standards.md`, **then** naming, structure, comment, and refactoring rules are documented.

**US-ENG-06 — Static deployment** (2 pts, Priority 2) — *NFR-01*
> As the team, we want the app deployable to static hosting so that visitors can reach it.
- **Given** the repo, **when** `npm run build` runs, **then** a static bundle is produced in `dist/`.

**US-ENG-07 — Accessibility compliance** (3 pts, Priority 2) — *NFR-03*
> As an assistive-technology user, I want semantic, keyboard-navigable UI so that I can use the site.
- **Given** any page, **when** navigated by keyboard, **then** all interactive elements are reachable with visible focus and landmarks (header/nav/main/footer) are present.

---

## 4. Story Point Summary

| Epic | Stories | Points |
|---|---|---|
| EP-DATA | 4 | 13 |
| EP-NAV | 1 | 3 |
| EP-HOME | 1 | 3 |
| EP-BRW | 3 | 10 |
| EP-DTL | 2 | 7 |
| EP-AZW | 1 | 3 |
| EP-ENG | 7 | 25 |
| **Total** | **26** | **64** |

---

*End of Document — USD-108K-002 v1.0*

## 5. JIRA Synchronization Record

Synced 2026-08-29 to https://dtrprasanna.atlassian.net project **DTRPR108K** (33 issues: 7 epics DTRPR108K-1..7, 26 stories DTRPR108K-8..26, each linked to its epic with acceptance criteria in the description).

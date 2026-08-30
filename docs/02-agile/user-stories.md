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

---

## Version 1.1 — Detail Enrichment Backlog (V2)

### Revision History (addendum)

| Version | Date | Author | Description |
|---|---|---|---|
| 1.1 | 2026-08-29 | Dev Team | Added Epic EP-DTL2 (Detail Enrichment) with stories US-DTL-03..11 per Product Owner request |

### Epic EP-DTL2 — Kshetram Detail Enrichment

Goal: transform the detail page into a rich devotional reference — deities with photos, timings, geography, pasurams with audio, and puranic background.

**US-DTL-03 — Moolavar & Thaayar details** (3 pts, Priority 1) — *FR-60*
> As a devotee, I want the Moolavar (main deity) and Thaayar (consort) details with photos so that I can understand the temple's primary worship.
- **Given** a kshetram detail page, **when** it renders, **then** it shows the Moolavar (name in English and Tamil, posture/form) and Thaayar (name) sections, each with a photo or an explicit decorative placeholder.

**US-DTL-04 — Urchavar & Urchavar Thaayar details** (3 pts, Priority 1) — *FR-61*
> As a devotee, I want the Urchavar (processional deity) and Urchavar Thaayar details with photos so that I know the festival forms worshipped.
- **Given** a kshetram detail page, **when** it renders, **then** it shows the Urchavar (name, form) and Urchavar Thaayar sections with photos or placeholders.

**US-DTL-05 — Temple timings** (2 pts, Priority 1) — *FR-62*
> As a pilgrim, I want the temple open/close timings so that I can plan my visit.
- **Given** a kshetram detail page, **when** it renders, **then** morning and evening open/close times are shown with any special timing notes (e.g., festival closures). Celestial desams display a "no earthly timings" note instead.

**US-DTL-06 — Nearby Divya Desams** (5 pts, Priority 1) — *FR-63*
> As a pilgrim, I want to see other Divya Desams within 50 km so that I can plan a combined trip.
- **Given** a kshetram with coordinates, **when** its detail page renders, **then** all desams within a 50 km radius are listed as links to their detail pages, nearest first, with their distances. Desams without coordinates (celestial) show no nearby section.

**US-DTL-07 — Mangalasasanam pasuram display** (5 pts, Priority 1) — *FR-64*
> As a student of the Prabandham, I want to read a representative pasuram sung at this kshetram so that I can experience the Azhwar's hymn.
- **Given** a kshetram detail page, **when** it renders, **then** a representative Mangalasasanam pasuram is shown in Tamil script with transliteration and English meaning, attributed to its Azhwar with its Prabandham reference.

**US-DTL-08 — Pasuram audio** (3 pts, Priority 2) — *FR-65*
> As a devotee, I want to hear the pasuram recited so that I can learn it by listening.
- **Given** a pasuram with a known public recording, **when** the detail page renders, **then** a play control or an external link to the recording is available; where none is available, no broken UI appears.

**US-DTL-09 — Sthala Puranam** (3 pts, Priority 1) — *FR-66*
> As a visitor, I want the puranic/itihasic background of the temple so that I understand its legend.
- **Given** a kshetram detail page, **when** it renders, **then** a Sthala Puranam section presents 1–3 paragraphs of the temple's traditional legend.

**US-DTL-10 — Distance from my location** (3 pts, Priority 1) — *FR-67*
> As a pilgrim, I want to see how far a temple is from where I am so that I can decide whether to visit.
- **Given** a earthly kshetram detail page, **when** I activate "Distance from me", **then** the browser geolocation is requested (with permission explanation) and the straight-line distance in km is shown; denial or unsupported devices show a graceful message. Celestial desams do not offer the feature.

**US-DTL-11 — Enriched dataset & integrity** (8 pts, Priority 1) — *FR-68*
> As the team, we want deity, timing, coordinate, puranam, pasuram and media data for all 108 kshetrams so that the enriched pages are fully data-driven.
- **Given** the datasets, **when** data-integrity tests run, **then** every earthly kshetram has coordinates within valid bounds, deity fields, timings, and at least one pasuram entry; photo credits and audio licences are recorded; the 108-record invariants still hold.

### Definition of Done addendum

Photos carry attribution per their licence; audio links point to public/authorised sources only; geolocation is opt-in per user action (never requested on page load).

### EP-DTL2 addendum — confirmed 2026-08-29 (Product Owner answers)

**US-DTL-12 — Share the page** (2 pts, Priority 2) — *FR-69*
> As a visitor, I want to share a kshetram page so that I can send it to family and trip companions.
- **Given** a detail page, **when** I tap Share, **then** the native share sheet appears where supported (navigator.share), with a copy-to-clipboard fallback and confirmation.

**US-DTL-13 — Print / PDF** (2 pts, Priority 2) — *FR-70*
> As a pilgrim, I want a print-friendly page so that I can carry the kshetram details.
- **Given** a detail page, **when** I choose Print, **then** a dedicated print stylesheet renders a clean document (no nav/footer/buttons, all sections expanded) suitable for Save-as-PDF.

---

## Version 1.2 — Yatra Toolkit & Content Expansion Backlog (V3 Program)

Delivered under the **gated process** agreed with the Product Owner:
Gate 1 — Requirements & user stories (this addendum) → Gate 2 — Wireframes (UXD v1.2) → Gate 3 — Development + unit-test summary → Gate 4 — Test summary. Gates 1–2 cover Releases 1 and 2 together; Gates 3–4 run per release. Release 1 ships EP-YTRK, EP-YMAP, EP-YTRP, EP-DTL3, EP-ABT and the EP-NAV/EP-ENG additions; Release 2 ships EP-AZW2 and EP-ACH.

At Gate 2 the PO supplied sample documents (Srirangam shrine detail, Poigai Azhwar, Sri Manavala Mamunigal); the detail and saint pages follow these content templates, and US-DTL-15, US-AZW-02..03, US-ACH-01..03 and US-ABT-01 were revised accordingly (nav label "Kshetra Tours").

### Revision History (addendum)

| Version | Date | Author | Description |
|---|---|---|---|
| 1.2 | 2026-08-30 | Dev Team | V3 program: added Epics EP-YTRK, EP-YMAP, EP-YTRP, EP-DTL3, EP-ABT, EP-AZW2, EP-ACH with stories US-TRK-01..05, US-MAP-01..03, US-TRP-01..03, US-DTL-14..17, US-ABT-01, US-NAV-02, US-ENG-08, US-AZW-02..03, US-ACH-01..03 |

### Epics (addendum)

| Epic | Name | Goal |
|---|---|---|
| EP-YTRK | Darshan Progress Tracker | Let devotees mark visited desams and see their 108-kshetram progress — stored privately in their browser |
| EP-YMAP | Interactive Map | A geographic view of all earthly Divya Desams, color-coded by region |
| EP-YTRP | Trip Planner | Build, order and share a personal yatra route |
| EP-DTL3 | Kshetram Detail V3 | Integrate the yatra toolkit into the detail page; add festivals, travel and stay content; refresh layout and media |
| EP-ABT | About Us — Kshetra Tours | Introduce the site and the Kshetra Tours initiative |
| EP-AZW2 | Azhwar Detail Pages | A dedicated page per Azhwar (Release 2) |
| EP-ACH | Acharyas | Present the Acharyas of the guru parampara, in addition to the Azhwars (Release 2) |

### Stories — Epic EP-YTRK — Darshan Progress Tracker

**US-TRK-01 — Visited store** (3 pts, Priority 1) — *FR-71*
> As a devotee, I want to mark kshetrams as visited so that my darshan progress is remembered between visits.
- **Given** the application, **when** I mark a kshetram as visited (and when I unmark it), **then** the state persists in browser localStorage under a versioned key and survives a page reload; no data leaves the browser.

**US-TRK-02 — Mark-visited actions & badges** (3 pts, Priority 1) — *FR-72*
> As a devotee, I want convenient visited toggles and badges so that I can see at a glance where I have had darshan.
- **Given** a kshetram detail page, **when** I activate "Mark as visited", **then** the control reflects the current state (accessible toggle); **given** any kshetram card on Home/Browse, **when** the kshetram is visited, **then** a visited badge is shown.

**US-TRK-03 — Darshan progress banner** (2 pts, Priority 1) — *FR-73*
> As a devotee, I want to see my overall progress so that I stay motivated toward 108.
- **Given** the Home or Browse page, **when** it renders, **then** a progress banner shows "X of 108 kshetrams visited" via an accessible progress indicator, updating immediately after each toggle.

**US-TRK-04 — Visited-status filter** (2 pts, Priority 2) — *FR-74*
> As a pilgrim planning what remains, I want to filter by visit status so that I can see only unvisited (or visited) desams.
- **Given** the Browse page, **when** I select Visited or Not yet visited, **then** the grid shows only matching kshetrams, combined (AND) with all other filters, with the result count updated.

**US-TRK-05 — Reset progress** (1 pt, Priority 2) — *FR-75*
> As a devotee, I want to clear my progress so that I can start afresh.
- **Given** the progress banner, **when** I activate reset and confirm, **then** all visited marks are cleared; dismissing the confirmation changes nothing.

### Stories — Epic EP-YMAP — Interactive Map

**US-MAP-01 — Map page** (5 pts, Priority 1) — *FR-76*
> As a visitor, I want a map of the Divya Desams so that I can understand their geography.
- **Given** the `/map` route, **when** it renders, **then** every kshetram with coordinates is plotted on an interactive Leaflet map with OpenStreetMap tiles and visible attribution; the map code loads in a lazy route chunk; celestial desams are excluded.

**US-MAP-02 — Markers, legend & popups** (5 pts, Priority 1) — *FR-77*
> As a pilgrim, I want region colors and marker popups so that I can identify and reach each desam from the map.
- **Given** the map, **when** I view it, **then** markers are color-coded by region with a legend, each marker opens a popup with the kshetram name (English and Tamil) and a link to its detail page, and visited kshetrams are visually distinct.

**US-MAP-03 — My location & region chips** (3 pts, Priority 2) — *FR-78*
> As a traveller, I want my location on the map and region filters so that I can see what is near me.
- **Given** the map, **when** I activate "Show my location" (opt-in), **then** my position is shown; denial or unsupported devices show a graceful message. **Given** the region chips, **when** I toggle a region, **then** only its markers are shown.

### Stories — Epic EP-YTRP — Trip Planner

**US-TRP-01 — Trip store & add/remove** (3 pts, Priority 1) — *FR-79*
> As a pilgrim, I want to collect desams into a personal trip so that I can plan my yatra.
- **Given** the detail page, map popup or card actions, **when** I add (or remove) a desam to my trip, **then** the trip persists in localStorage, duplicates are prevented, and the in-nav trip count updates.

**US-TRP-02 — Trip page** (5 pts, Priority 1) — *FR-80*
> As a pilgrim, I want my trip organized so that I can actually follow the route.
- **Given** the `/trip` route with stops, **when** it renders, **then** stops are listed grouped by region with straight-line distances between consecutive stops; an "order my route" action re-orders stops nearest-first (nearest-neighbour from the first stop); stops can be removed and the trip cleared; an empty trip shows a guiding empty state.

**US-TRP-03 — Share & print trip** (2 pts, Priority 2) — *FR-81*
> As a pilgrim, I want to share my trip plan so that family and co-travellers can follow it.
- **Given** a trip, **when** I choose Share, **then** a URL encoding the stops is offered with a copy-to-clipboard fallback; opening that URL restores the trip; Print renders a clean trip document.

### Stories — Epic EP-DTL3 — Kshetram Detail V3

**US-DTL-14 — Yatra hooks on detail** (3 pts, Priority 1) — *FR-82*
> As a devotee, I want visited and trip actions on the detail page so that the page I study is also the page I plan from.
- **Given** an earthly kshetram detail page, **when** it renders, **then** it shows the visited toggle, an add-to-trip control and a location mini-map; celestial desams hide all earthly widgets.

**US-DTL-15 — Shrine content template** (5 pts, Priority 1) — *FR-83*
> As a pilgrim, I want the complete shrine record — profile, deities, legends, history, hymns and media — so that I can study the kshetram as fully as traditional records present it (PO template: Srirangam sample).
- **Given** documented data for a kshetram, **when** the detail page renders, **then** it shows the Basic Shrine Profile (serial number, Vimanam, Theertham, Sthala Vriksham, sanctum posture & orientation), the Moolavar/Urchavar breakdown with names in Tamil/Sanskrit/transliteration, etymology and Thaayar legends, Sthala Puranam with history subsections (origin legend & miracles, prathyaksham, timeline & epigraphy, invasions & preservation, cultural milestones, literature references), the Mangalasasanam summary (total and per-Azhwar counts) with representative excerpts (Tamil, transliteration, word-by-word meaning, theological significance), pilgrim information (timings, festivals, how to reach, stay tips, references) and Visuals & Media; **when** an item is not documented, **then** an explicit "not yet documented" note appears instead of a blank section.

**US-DTL-16 — Layout & visual refresh** (3 pts, Priority 2) — *FR-84*
> As a visitor, I want a well-organized detail page so that I can find sections quickly.
- **Given** the detail page, **when** it renders, **then** it follows the UXD v1.2 refreshed layout (section hierarchy, in-page section navigation on long pages) and the print stylesheet covers all new sections.

**US-DTL-17 — Gallery & media upgrade** (3 pts, Priority 2) — *FR-85*
> As a devotee, I want to view deity photos full-size so that I can see the deities clearly.
- **Given** the deity gallery, **when** I activate a photo, **then** a lightbox opens with alt text, credits, and keyboard support (Esc to close, arrows to move); where sourced, multiple photos per deity are offered.

### Stories — Epic EP-ABT — About Us — Kshetra Tours

**US-ABT-01 — About page** (3 pts, Priority 1) — *FR-87*
> As a visitor, I want an About page so that I know who is behind the site and what Kshetra Tours offers.
- **Given** the `/about` route (navigation label **"Kshetra Tours"**), **when** it renders, **then** it presents the site's purpose, the Kshetra Tours initiative and contact information, driven by a data file so content can be updated without UI changes.

### Stories — Epic EP-NAV / EP-ENG additions (Release 1)

**US-NAV-02 — CTA wording** (1 pt, Priority 1) — *FR-86*
> As a visitor, I want consistent navigation labels so that sections are easy to recognize.
- **Given** the Home page, **when** it renders, **then** the hero call-to-action for the Azhwars section reads "Azhwars".

**US-ENG-08 — E2E for yatra flows** (3 pts, Priority 1) — *NFR-06*
> As the team, we want the new user journeys verified end to end so that regressions are caught before release.
- **Given** the running app, **when** the E2E suite runs, **then** journeys cover mark-visited → progress → filter, map → popup → detail, and trip add → order → share-restore, with all pre-existing journeys still passing.

### Stories — Epic EP-AZW2 — Azhwar Detail Pages (Release 2)

**US-AZW-02 — Azhwar detail page** (3 pts, Priority 1) — *FR-90*
> As a student of the Prabandham, I want a dedicated page per Azhwar so that I can study each saint in depth (PO template: Poigai Azhwar sample).
- **Given** `/azhwar/:id`, **when** it renders, **then** it follows the saint template — Identification (titles & aliases, Tamil birth month/star/tithi, birthplace linked to its kshetram page, divine amsam, era with contemporary kings), Life History & Miracles, Contributions (works with pasuram counts, bhakti bhava, associated desams), a Representative Verse (Tamil, transliteration, word-by-word meaning, significance), Visuals & Media, derived desam links, and prev/next chronological navigation; unknown ids are handled gracefully (FR-33 pattern).

**US-AZW-03 — Azhwar data enrichment** (3 pts, Priority 1) — *FR-91*
> As the team, we want enriched Azhwar data so that the detail pages are fully data-driven.
- **Given** the extended Azhwar dataset per the saint template (identification fields, life history, works with pasuram counts, representative verse with word meanings, visuals & media), **when** data-integrity tests run, **then** all fields, pasuram-count totals and Azhwar↔Kshetram cross-references (birthplace, associated desams, mangalasasanam) are verified.

### Stories — Epic EP-ACH — Acharyas (Release 2)

**US-ACH-01 — Acharya dataset** (3 pts, Priority 1) — *FR-92*
> As the team, we want a structured Acharya dataset so that Acharya pages are data-driven and future content slots in without UI change.
- **Given** the Acharya dataset per the saint template (identification, life history, works, representative verse with word meanings, associated desams, philosophical theme, guru/sishya links, visuals & media, sources), **when** data-integrity tests run, **then** ids are unique, internal links (guru/sishya, desams) are valid, and any pending content is explicitly marked.

**US-ACH-02 — Acharyas index page** (3 pts, Priority 1) — *FR-93*
> As a devotee, I want to browse the Acharyas so that I can learn the guru parampara.
- **Given** the `/acharyas` route, **when** it renders, **then** Acharyas are listed grouped by era/parampara with a "Acharyas" navigation entry alongside "Azhwars".

**US-ACH-03 — Acharya detail page** (3 pts, Priority 1) — *FR-94*
> As a devotee, I want a page per Acharya so that I can read their life and teachings (PO template: Sri Manavala Mamunigal sample).
- **Given** `/acharya/:id`, **when** it renders, **then** it follows the saint template (Identification, Life History & Miracles, Contributions, Representative Verse, Visuals & Media) plus Guru & Sishyas links and a Sources section; content not yet provided is explicitly marked "[Content pending — to be provided]".

### Definition of Done addendum (V3)

Visited/trip data remains in the visitor's browser only (no transmission); the map shows visible tile attribution and loads as a lazy chunk; photos retain licence attribution; geolocation is opt-in per user action; pending content is always explicitly marked, never silently blank.

### Story Point Summary (addendum)

| Epic | Stories | Points |
|---|---|---|
| EP-YTRK | 5 | 11 |
| EP-YMAP | 3 | 13 |
| EP-YTRP | 3 | 10 |
| EP-DTL3 | 4 | 14 |
| EP-ABT | 1 | 3 |
| EP-NAV (add) | 1 | 1 |
| EP-ENG (add) | 1 | 3 |
| EP-AZW2 | 2 | 6 |
| EP-ACH | 3 | 9 |
| **V3 total** | **23** | **70** |

---

## JIRA Synchronization Record (v1.2)

Sync of the V3 backlog to https://dtrprasanna.atlassian.net project **DTRPR108K** was attempted on 2026-08-30, but **no JIRA API credentials are available in the delivery environment**, so the issues could not be created automatically. Per the agreed fallback, the ready-to-create list below covers all V3 issues (7 epics + 23 stories); descriptions carry the story text and acceptance criteria from this addendum. Once created, append the issue keys to the table. US-NAV-02 and US-ENG-08 link to the existing EP-NAV and EP-ENG epics (DTRPR108K-2, DTRPR108K-7).

| Type | Summary | Links to |
|---|---|---|
| Epic | EP-YTRK — Darshan Progress Tracker | — |
| Story | US-TRK-01 — Visited store (localStorage) | EP-YTRK |
| Story | US-TRK-02 — Mark-visited actions & badges | EP-YTRK |
| Story | US-TRK-03 — Darshan progress banner | EP-YTRK |
| Story | US-TRK-04 — Visited-status filter | EP-YTRK |
| Story | US-TRK-05 — Reset progress | EP-YTRK |
| Epic | EP-YMAP — Interactive Map | — |
| Story | US-MAP-01 — Map page | EP-YMAP |
| Story | US-MAP-02 — Markers, legend & popups | EP-YMAP |
| Story | US-MAP-03 — My location & region chips | EP-YMAP |
| Epic | EP-YTRP — Trip Planner | — |
| Story | US-TRP-01 — Trip store & add/remove | EP-YTRP |
| Story | US-TRP-02 — Trip page | EP-YTRP |
| Story | US-TRP-03 — Share & print trip | EP-YTRP |
| Epic | EP-DTL3 — Kshetram Detail V3 | — |
| Story | US-DTL-14 — Yatra hooks on detail | EP-DTL3 |
| Story | US-DTL-15 — Pilgrim information sections | EP-DTL3 |
| Story | US-DTL-16 — Layout & visual refresh | EP-DTL3 |
| Story | US-DTL-17 — Gallery & media upgrade | EP-DTL3 |
| Epic | EP-ABT — About Us — Kshetra Tours | — |
| Story | US-ABT-01 — About page | EP-ABT |
| Story | US-NAV-02 — CTA wording | EP-NAV |
| Story | US-ENG-08 — E2E for yatra flows | EP-ENG |
| Epic | EP-AZW2 — Azhwar Detail Pages | — |
| Story | US-AZW-02 — Azhwar detail page | EP-AZW2 |
| Story | US-AZW-03 — Azhwar data enrichment | EP-AZW2 |
| Epic | EP-ACH — Acharyas | — |
| Story | US-ACH-01 — Acharya dataset | EP-ACH |
| Story | US-ACH-02 — Acharyas index page | EP-ACH |
| Story | US-ACH-03 — Acharya detail page | EP-ACH |

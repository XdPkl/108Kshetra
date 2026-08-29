# Software Requirements Specification (SRS)

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | SRS-108K-001 |
| Project Name | 108 Divya Kshetrams Web Application |
| Version | 1.0 |
| Status | Approved |
| Author | Development Team (ZCode Agent) |
| Product Owner | Prasanna |
| Date of Issue | 2026-08-29 |

### Revision History

| Version | Date | Author | Description of Change |
|---|---|---|---|
| 0.1 | 2026-08-29 | Dev Team | Initial draft — purpose, scope, glossary |
| 1.0 | 2026-08-29 | Dev Team | Baseline: full FR/NFR set, constraints, traceability matrix; approved for design |
| 1.1 | 2026-08-29 | Dev Team | Added §3.7 Detail Enrichment (FR-60..68): deities with media, timings, nearby desams, pasuram display & audio, sthala puranam, geolocation distance |

### Approvals

| Name | Role | Signature / Approval | Date |
|---|---|---|---|
| Prasanna | Product Owner | Approved | 2026-08-29 |

---

## 1. Introduction

### 1.1 Purpose

This document specifies the functional and non-functional requirements for the **108 Divya Kshetrams Web Application**, an interactive website presenting the 108 Divya Desams — the sacred Vaishnava abodes of Lord Narayana glorified by the twelve Azhwars in the Nalayira Divya Prabandham. It serves as the authoritative requirements baseline for design, development, testing, and acceptance.

### 1.2 Scope

The application provides:

1. A **Home** page introducing the Divya Desams tradition with headline statistics and featured kshetrams.
2. A **Browse** page listing all 108 kshetrams as cards with **search** (by name, place, deity) and **filters** (by state/region, deity form, Azhwar).
3. A **Kshetram Detail** page for each of the 108 kshetrams (deity, location, Mangalasasanam by Azhwar(s), significance, map link).
4. An **Azhwars** page presenting the twelve Azhwars and the desams they glorified.

Out-of-scope items are listed in §1.5.

### 1.3 Definitions, Acronyms, and Abbreviations

| Term | Definition |
|---|---|
| Divya Desam / Kshetram | One of the 108 sacred Vaishnava shrines sung by the Azhwars |
| Azhwar | One of the twelve Vaishnava saint-poets (6th–9th century CE) |
| Mangalasasanam | Act of glorifying/blessing a shrine through hymns |
| Pasuram | A verse/hymn in the Nalayira Divya Prabandham |
| Nalayira Divya Prabandham | The 4,000-verse Tamil Vaishnava canon |
| SPA | Single-Page Application |
| FR / NFR | Functional / Non-Functional Requirement |
| RTL | React Testing Library |

### 1.4 References

1. Nalayira Divya Prabandham tradition and standard published lists of the 108 Divya Desams.
2. IEEE 830-1998, Recommended Practice for Software Requirements Specifications.
3. WCAG 2.1 Accessibility Guidelines.

### 1.5 Out of Scope

- Pasuram verse texts and audio (future release).
- Photographs of temples beyond placeholders (future release).
- User accounts, "visited" checklist, or any server-side persistence.
- Backend API or CMS administration.
- Multilingual UI beyond names rendered in Tamil script.

---

## 2. Overall Description

### 2.1 Product Perspective

A fully static, client-side SPA built with React and Vite. All kshetram and Azhwar content ships as versioned data modules inside the application bundle. No runtime backend is required; the build output can be hosted on any static host.

### 2.2 User Classes

| User Class | Description | Needs |
|---|---|---|
| General visitor | Anyone interested in Hindu temples and heritage | Browse, search, read details; no login |
| Devotee / Srivaishnava | Practitioner familiar with the tradition | Filter by Azhwar, region; quick lookup of a specific desam |
| Researcher / Student | Person studying the Divya Prabandham | Structured data: Mangalasasanam counts, Azhwar mappings |

### 2.3 Operating Environment

- Modern evergreen browsers (Chrome, Edge, Firefox, Safari — last two major versions), desktop and mobile.
- Hosted on static hosting (GitHub Pages or equivalent).
- Developed on Windows/macOS/Linux with Node.js ≥ 20.

### 2.4 Assumptions and Dependencies

- Content (108 kshetram records, 12 Azhwar records) is compiled from standard published lists and reviewed for accuracy by the Product Owner.
- Tamil script renders via system fonts or a bundled web font; an explicit Tamil-capable web font is used to guarantee rendering.
- No network dependency at runtime except optional map links and Google Fonts.

### 2.5 Design and Implementation Constraints

- React 18+ with Vite build tooling; React Router for client-side routing.
- No backend, no database; data as JavaScript ES modules.
- Testing stack fixed as Vitest + React Testing Library (unit) and Playwright (E2E).
- Traditional temple visual theme: saffron/gold/deep-red palette with serif display typography.

---

## 3. Functional Requirements

Requirements are uniquely identified (FR-xx) with priority (M = Must, S = Should). Each FR traces to user stories and test cases (§5).

### 3.1 Content & Data

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | The system shall contain complete data for all 108 Divya Desams, each with: unique id, name (English), Tamil name, temple/place, state, region (e.g., Chola Nadu), presiding deity, deity posture/form, glorifying Azhwar(s), number of pasurams, significance note, and a map search string. | M |
| FR-02 | The system shall contain data for the 12 Azhwars: name, period, total pasurams contributed, and the desams they glorified. | M |
| FR-03 | The system shall validate data integrity at test time: all 108 records present, ids unique, required fields non-empty, Azhwar names consistent with the Azhwar dataset. | M |

### 3.2 Home Page

| ID | Requirement | Priority |
|---|---|---|
| FR-10 | The Home page shall display the application title, an introductory description of the Divya Desams tradition, and headline statistics (108 kshetrams, 12 Azhwars, 4,000 pasurams). | M |
| FR-11 | The Home page shall display a curated set of featured kshetrams (at least 4) as clickable cards linking to their detail pages. | M |
| FR-12 | The Home page shall provide navigation entry points to Browse and Azhwars pages. | M |

### 3.3 Browse, Search, and Filter

| ID | Requirement | Priority |
|---|---|---|
| FR-20 | The Browse page shall display all kshetrams as cards showing name, Tamil name, place, state, deity, and glorifying Azhwar(s). | M |
| FR-21 | The user shall be able to search kshetrams by free text matching name, place, deity, or Azhwar (case-insensitive). | M |
| FR-22 | The user shall be able to filter kshetrams by state, by deity form, and by Azhwar; filters shall be combinable with each other and with search. | M |
| FR-23 | The system shall display the count of results matching the current search/filter. | M |
| FR-24 | When no kshetram matches, the system shall display a clear empty state with a reset action. | M |
| FR-25 | Filters and search shall be resettable to show all 108 kshetrams. | M |

### 3.4 Kshetram Detail

| ID | Requirement | Priority |
|---|---|---|
| FR-30 | Selecting a kshetram card shall navigate to its detail page at a unique URL (e.g., `/kshetram/:id`). | M |
| FR-31 | The detail page shall display all fields of the kshetram record (FR-01), organized into Identity, Location, Deity, and Mangalasasanam sections. | M |
| FR-32 | The detail page shall provide an external map link (Google Maps search) for the temple location, opening in a new tab with `rel="noopener"`. | M |
| FR-33 | For an unknown id, the system shall display a "not found" message with a link back to Browse. | M |

### 3.5 Azhwars

| ID | Requirement | Priority |
|---|---|---|
| FR-40 | The Azhwars page shall list all 12 Azhwars in traditional chronological order with name, period, pasuram count, and brief note. | M |
| FR-41 | Each Azhwar entry shall show the number of desams glorified and allow navigating to those desams (linking to Browse pre-filtered by that Azhwar, or directly to detail pages). | M |

### 3.6 Navigation & Layout

| ID | Requirement | Priority |
|---|---|---|
| FR-50 | The application shall provide a persistent header with the site identity and navigation to Home, Browse, and Azhwars. | M |
| FR-51 | The application shall provide a footer with content attribution and a disclaimer that compiled data is provided in good faith. | S |
| FR-52 | The active navigation item shall be visually indicated. | S |

---

## 3.7 Detail Enrichment (V2)

| ID | Requirement | Priority |
|---|---|---|
| FR-60 | The detail page shall present the Moolavar (main deity) and Thaayar (consort) with name (English/Tamil), form/posture, and a photo or an explicit decorative placeholder. | M |
| FR-61 | The detail page shall present the Urchavar (processional deity) and Urchavar Thaayar with names and photo/placeholder. | M |
| FR-62 | The detail page shall display the temple's open/close timings (morning and evening sessions) with special notes; celestial desams shall show an explicit non-earthly note instead. | M |
| FR-63 | For any kshetram with coordinates, the detail page shall list all other desams within 50 km (straight-line), nearest first, each linking to its detail page with the distance shown. | M |
| FR-64 | The detail page shall display a representative Mangalasasanam pasuram in Tamil with transliteration and English meaning, attributed to its Azhwar and Prabandham reference. | M |
| FR-65 | Where a publicly available recording exists, the pasuram section shall offer playback or an external link to it; no broken controls otherwise. | S |
| FR-66 | The detail page shall present a Sthala Puranam section with the temple's traditional legend (1–3 paragraphs). | M |
| FR-67 | The detail page shall offer an opt-in "Distance from me" action using browser geolocation and display the straight-line distance in km, with graceful handling of permission denial. | M |
| FR-68 | The datasets shall extend to carry deity details, timings, coordinates, puranam text, pasuram entries and media credits for all 108 kshetrams, verified by data-integrity tests. | M |

Media constraints: photos must carry attribution per their licence; audio must link to public/authorised sources; images lazy-load; geolocation is requested only on explicit user action.

---

## 4. Non-Functional Requirements

| ID | Category | Requirement | Priority |
|---|---|---|---|
| NFR-01 | Performance | First contentful paint of the built SPA under 2s on a mid-range device; bundle (gzipped) under 300 KB excluding fonts. | M |
| NFR-02 | Compatibility | Application functions on Chrome, Edge, Firefox, Safari (last two major versions), desktop and mobile viewports (≥320px). | M |
| NFR-03 | Accessibility | WCAG 2.1 AA: semantic landmarks, keyboard navigability, visible focus, alt text, contrast ratio ≥ 4.5:1 for body text. | M |
| NFR-04 | Maintainability | Layered architecture (presentation → hooks → data); reusable components/hooks/utilities with JSDoc; files ≤ 300 lines; ESLint/Prettier enforced with zero errors. | M |
| NFR-05 | Scalability | Adding a 109th kshetram, a new field, or a new filter dimension shall require data/config changes only, with no UI code change. | M |
| NFR-06 | Testability | ≥ 80% unit test coverage of components/hooks/utils; automated unit and E2E suites runnable via single npm scripts. | M |
| NFR-07 | Reliability | No runtime crash on any route or data state; invalid route ids handled gracefully (FR-33). | M |
| NFR-08 | SEO / Shareability | Each route has a unique document title; semantic HTML headings hierarchy. | S |
| NFR-09 | CI/CD | GitHub Actions pipeline runs lint → unit tests → build → E2E on every push and pull request. | M |
| NFR-10 | Security | No user input is executed or injected unsafely; external links use `rel="noopener noreferrer"`; dependency vulnerabilities none-high at build time. | M |

---

## 5. Requirements Traceability Matrix

Maps each functional requirement to the user story (see `docs/02-agile/user-stories.md`) and automated test case (see `docs/05-testing/test-cases.md`) that verify it.

| FR | User Story | Unit Test(s) | E2E Test Case(s) |
|---|---|---|---|
| FR-01 | US-DATA-01 | UT-DATA-01..03 | TC-01, TC-02 |
| FR-02 | US-DATA-02 | UT-DATA-04 | TC-10 |
| FR-03 | US-DATA-03 | UT-DATA-01..04 | — |
| FR-10 | US-HOME-01 | UT-HOME-01 | TC-03 |
| FR-11 | US-HOME-01 | UT-HOME-02 | TC-03 |
| FR-12 | US-HOME-01 | UT-HOME-03 | TC-03 |
| FR-20 | US-BRW-01 | UT-BRW-01 | TC-04 |
| FR-21 | US-BRW-02 | UT-FLT-01, UT-FLT-03 | TC-05 |
| FR-22 | US-BRW-02 | UT-FLT-02..04 | TC-06 |
| FR-23 | US-BRW-03 | UT-BRW-02 | TC-05 |
| FR-24 | US-BRW-03 | UT-BRW-03 | TC-07 |
| FR-25 | US-BRW-03 | UT-BRW-04 | TC-07 |
| FR-30 | US-DTL-01 | UT-DTL-01 | TC-08 |
| FR-31 | US-DTL-01 | UT-DTL-02 | TC-08 |
| FR-32 | US-DTL-01 | UT-DTL-03 | TC-08 |
| FR-33 | US-DTL-02 | UT-DTL-04 | TC-09 |
| FR-40 | US-AZW-01 | UT-AZW-01 | TC-10 |
| FR-41 | US-AZW-01 | UT-AZW-02 | TC-10 |
| FR-50 | US-NAV-01 | UT-NAV-01 | TC-02 |
| FR-51 | US-NAV-01 | UT-NAV-02 | TC-11 |
| FR-52 | US-NAV-01 | UT-NAV-03 | TC-02 |

---

## 6. Acceptance Criteria

The product is accepted when:

1. All Must-priority functional requirements are implemented and demonstrated.
2. Gate A (unit coverage ≥ 80%, zero lint errors), Gate B (code review closed with rework verified), and Gate C (all automated test cases pass, no open critical/major defects) are complete.
3. The application builds and deploys as a static bundle with the CI pipeline green.

---

*End of Document — SRS-108K-001 v1.0*

## 3.8 V2 confirmed additions (2026-08-29 PO answers)

| ID | Requirement | Priority |
|---|---|---|
| FR-69 | Detail pages shall offer a Share action using the Web Share API with a clipboard fallback and confirmation. | S |
| FR-70 | Detail pages shall offer a Print action backed by a dedicated print stylesheet (nav/footer/controls hidden, sections expanded) suitable for PDF export. | S |

Product Owner decisions recorded: distance = straight-line (Haversine) plus Google Maps directions link; pasuram audio = curated external links; photos = Wikimedia-sourced where available with decorative placeholders otherwise.

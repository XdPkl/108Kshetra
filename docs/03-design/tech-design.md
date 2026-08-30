# Technical Design Document

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | TDD-108K-003 |
| Version | 1.0 |
| Status | Approved |
| Date of Issue | 2026-08-29 |
| Traceability | Implements SRS-108K-001 (docs/01-srs) |

### Revision History

| Version | Date | Author | Description |
|---|---|---|---|
| 0.1 | 2026-08-29 | Dev Team | Draft architecture and data model |
| 1.0 | 2026-08-29 | Dev Team | Baseline: architecture, testing architecture, CI/CD, coding standards reference |
| 1.1 | 2026-08-30 | Dev Team | Saint template v3.1 (dossier-aligned): optional `timeline`, headed `lifeHistory` blocks, `legend`, `birthplace.district`, `preservation`, `works[].language`, structured `visuals.iconography`, `verse.commentary`, original-script pending marker, `sources` on both saint pages; `Reference Content/` folder for PO dossiers |
| 1.3 | 2026-08-30 | Dev Team | Divya Desam dossier population: `enrichment/dossiers.js` adds 93 full shrine templates keyed to dossier serials; V2 enrichment preserved underneath; multi-Thaayar, Prathyaksham and src-photo layout support |
| 1.2 | 2026-08-30 | Dev Team | Dossier bulk population: all 12 Azhwars + 23 Acharyas (15 new records) fully populated from the PO dossiers; verse original script recovered for 32/35 (batch-2 DOCX missing → pending marker); PO correction — Poigai amsam is Panchajanya |

---

## 1. System Overview

A static Single-Page Application (SPA): React 18 + Vite, client-side routing via React Router 6. All content ships as versioned ES-module datasets. No backend, no runtime database. Build output (`dist/`) is deployable to any static host.

### 1.1 Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| UI framework | React 18 (functional components + hooks only) | Component reuse, ecosystem |
| Build | Vite 5 | Fast dev/build, native ESM |
| Routing | React Router 6 | Standard SPA routing |
| Language | JavaScript (ES2022, ES modules) | Zero type-tooling overhead for a data-driven static site; JSDoc provides type documentation |
| Styling | Vanilla CSS with design tokens (custom properties), CSS modules not required | Small footprint, themable |
| Unit testing | Vitest + React Testing Library + jsdom | Vite-native, fast, behavior-focused |
| E2E testing | Playwright (Chromium; FF/WebKit available) | Reliable, multi-browser, CI-ready |
| Static quality | ESLint (eslint-plugin-react-hooks, react, a11y) + Prettier | Enforced standards |
| CI/CD | GitHub Actions | Pipeline as code |
| Hosting | GitHub Pages (static) | Free, CI-deployable |

---

## 2. System Architecture

### 2.1 Layered Architecture (scalability & maintainability)

```
┌──────────────────────────────────────────────────────────┐
│  Presentation Layer   src/pages, src/components          │
│  (React components; no direct data-module imports)       │
├──────────────────────────────────────────────────────────┤
│  Hooks Layer          src/hooks (useKshetrams,           │
│  (stateful adapters)   useKshetramFilters)               │
├──────────────────────────────────────────────────────────┤
│  Data Access Layer    src/data/api.js                    │
│  (stable API: getAllKshetrams, getKshetramById, …)       │
├──────────────────────────────────────────────────────────┤
│  Data Layer           src/data/kshetrams.js,             │
│  (versioned content)  src/data/azhwars.js, config.js     │
└──────────────────────────────────────────────────────────┘
  Utilities (pure): src/utils/filter.js, group.js — shared across layers
```

**Key decisions**

1. **UI never imports raw datasets.** Pages consume `src/data/api.js` accessors (US-DATA-04). A future CMS/backend replaces only the Data/Access layers; the presentation layer is untouched (NFR-05).
2. **Config-driven UI.** Filter dimensions (state, deity form, Azhwar), regions, featured kshetram ids, and navigation links are generated from data/config, so adding a 109th kshetram or a new filter requires data changes only.
3. **Pure, unit-testable utilities.** Filtering/grouping logic lives in `src/utils` as pure functions, tested without React.

### 2.2 Directory Structure

```
108Kshetra/
├─ docs/                        ALM artifacts (this document set)
├─ e2e/                         Playwright specs
│  └─ journeys.spec.js
├─ public/                      favicon, static assets
├─ src/
│  ├─ components/               Reusable presentational components
│  │  ├─ KshetramCard.jsx
│  │  ├─ SearchFilterBar.jsx
│  │  ├─ Badge.jsx
│  │  ├─ SectionHeading.jsx
│  │  ├─ EmptyState.jsx
│  │  ├─ Header.jsx / Footer.jsx
│  │  └─ __tests__/             Component tests (co-located)
│  ├─ hooks/
│  │  ├─ useKshetrams.js
│  │  ├─ useKshetramFilters.js
│  │  └─ __tests__/
│  ├─ pages/
│  │  ├─ HomePage.jsx
│  │  ├─ BrowsePage.jsx
│  │  ├─ KshetramDetailPage.jsx
│  │  ├─ AzhwarsPage.jsx
│  │  └─ __tests__/
│  ├─ data/
│  │  ├─ kshetrams.js           108 records
│  │  ├─ azhwars.js             12 records
│  │  ├─ config.js              featured ids, filter config
│  │  ├─ api.js                 stable accessors
│  │  └─ __tests__/             data-integrity tests
│  ├─ utils/
│  │  ├─ filter.js              filterKshetrams, matchesSearch
│  │  ├─ group.js               groupBy, uniqueSorted
│  │  └─ __tests__/
│  ├─ styles/                   tokens.css, base.css, layout.css
│  ├─ test/                     test setup (jest-dom, matchMedia mock)
│  ├─ App.jsx                   router + layout
│  └─ main.jsx
├─ .github/workflows/ci.yml
├─ eslint.config.js
├─ vite.config.js
└─ package.json
```

### 2.3 Data Model

**Kshetram record** (`src/data/kshetrams.js`)

```js
/**
 * @typedef {Object} Kshetram
 * @property {string}  id            Slug, unique (e.g. "srirangam")
 * @property {string}  name          English display name
 * @property {string}  tamilName     Tamil script name
 * @property {string}  temple        Temple name
 * @property {string}  place         City/village, district
 * @property {string}  state         Indian state / country
 * @property {string}  region        Traditional grouping (Chola Nadu, Pandya Nadu, Malai Nalu, Vadakalai, etc.)
 * @property {string}  deity         Presiding deity name
 * @property {string}  deityForm     Posture/form (e.g. "Nindran — Standing")
 * @property {string[]} azhwars      Azhwars whose Mangalasasanam applies
 * @property {number}  pasuramCount  Number of pasurams sung here
 * @property {string}  significance  One-paragraph significance note
 * @property {string}  mapQuery      Google Maps search string
 */
```

**Azhwar records** (`src/data/azhwars.js` base index `{ id, name, tamilName, period, pasuramCount, note, work }` + `src/data/azhwar-details.js` enrichment) — chronologically ordered (Poigai, Bhoothath, Pey, Thirumazhisai, Nammazhwar, Madhurakavi, Kulasekhara, Periyazhwar, Andal, Thondaradippodi, Thiruppaan, Thirumangai). Acharya records live in `src/data/acharyas.js` (parampara order). The saint template v3.1 enrichment shape (both saints, all fields optional) is documented in the dataset headers and UXD §21: `timeline [{when?, event}]`, `lifeHistory` items as string or `{heading, paragraphs[]}`, `legend {title?, text}`, `birthplace.district`, `preservation`, `works[].language`, `verse.commentary [{heading, text}]` with absent `verse.tamil` rendering an original-script pending marker, `visuals.iconography` as string or `{posture, mudras, garments, idol}`, and `sources[]` on both pages. PO dossiers are archived in `Reference Content/` (repo root, not deployed).

**Data Access API** (`src/data/api.js`): `getAllKshetrams()`, `getKshetramById(id)`, `getFeaturedKshetrams()`, `getAllAzhwars()`, `getAzhwarById(id)`, plus filter-option builders `getFilterOptions()` (derived — adding data automatically extends filters).

### 2.4 Component & Routing Design

| Route | Page | Data source |
|---|---|---|
| `/` | HomePage | getFeaturedKshetrams, getAllAzhwars (counts) |
| `/kshetrams` | BrowsePage | useKshetrams + useKshetramFilters + filterKshetrams |
| `/kshetrams?azhwar=…` | BrowsePage (pre-filtered, query param) | same |
| `/kshetram/:id` | KshetramDetailPage | getKshetramById, getAzhwarById |
| `/azhwars` | AzhwarsPage | getAllAzhwars, getKshetramById |
| `*` | NotFound (inside Browse-bound layout) | — |

Component reuse map (reusable artifacts per US-ENG-05):

- `KshetramCard` — Home featured + Browse grid
- `Badge` — deity form, region, pasuram count (Detail + cards)
- `SearchFilterBar` — Browse (search input + 3 selects + reset)
- `EmptyState` — Browse no-results, Detail not-found
- `SectionHeading` — all pages
- `useKshetrams` / `useKshetramFilters` — Browse + Azhwar prefilter via `useSearchParams`

### 2.5 Error & Edge Handling

- Unknown route id → `EmptyState` with CTA to Browse (FR-33).
- Empty filter result → `EmptyState` with reset (FR-24).
- Data validation occurs at test time (Gate A), guaranteeing runtime completeness.

---

## 3. Automated Testing Architecture

### 3.1 Test Pyramid

```
        ╱ E2E (Playwright) ╲        7 journey specs — user-critical flows
       ╱  Component (RTL)   ╲       pages + components rendered in jsdom
      ╱  Unit (Vitest)       ╲      pure utils, hooks, data-integrity validators
```

### 3.2 Tooling & Environments

| Level | Tool | Environment | Command |
|---|---|---|---|
| Static | ESLint + Prettier | Node | `npm run lint` |
| Unit/Component | Vitest + RTL + jsdom + @testing-library/jest-dom | jsdom | `npm test` |
| E2E | Playwright Test | real Chromium headless against Vite preview | `npm run e2e` |

### 3.3 Test Directory Layout

Co-located `__tests__/` folders beside the code under test (see §2.2). Specs named `*.test.jsx`/`*.test.js`. E2E in top-level `e2e/`.

### 3.4 Test Scope by Layer

1. **Data integrity (Gate A blockers):** exactly 108 records; unique ids; all required fields non-empty; every kshetram `azhwars[]` entry exists in the Azhwar dataset; every azhwar `kshetramIds[]` resolves; pasuram counts are positive integers; exactly 12 Azhwars, chronological order.
2. **Pure utils:** `matchesSearch` (case-insensitivity, field coverage), `filterKshetrams` (each filter dimension, AND combination, empty filters → all), `groupBy`/`uniqueSorted`.
3. **Hooks:** `useKshetramFilters` state transitions (set/clear/combine, URL query-param prefilter).
4. **Components:** `KshetramCard` content + link target; `SearchFilterBar` events; `Badge`/`EmptyState`/`SectionHeading` rendering; `Header` active-link highlighting (react-router MemoryRouter).
5. **Pages:** Home stats & featured; Browse full grid + count + empty state; Detail sections + maps link `rel` attribute + not-found; Azhwars list & links.
6. **E2E journeys:** home → browse (108 cards) → search narrows → filter → detail → back; azhwar page → desam link; empty state reset; invalid route; document titles.

### 3.5 Mocking Strategy

No network mocking required (data is local). `window.matchMedia` polyfilled in `src/test/setup.js` for jsdom. Router contexts provided via `MemoryRouter` in component tests.

### 3.6 Coverage Targets & Gates

- Thresholds (statements/branches/functions/lines): **≥ 80%** enforced via `vitest --coverage`.
- **Gate A:** `npm run lint` zero errors AND `npm test` green with coverage ≥ 80% — prerequisite for code review.
- **Gate B:** review closed with rework verified — prerequisite for E2E/system testing.
- **Gate C:** E2E green, no open critical/major defects — prerequisite for delivery.

### 3.7 Defect Management

Defects found in any phase are logged in `docs/05-testing/test-execution-report.md` (§ Defect Log) with ID, severity (Critical/Major/Minor), source phase, disposition, and fix commit reference; Critical/Major must be closed before their gate passes.

---

## 4. CI/CD Pipeline

`.github/workflows/ci.yml` — on `push` (all branches) and `pull_request` (to main):

```
jobs:
  quality:  npm ci → npm run lint → npm test -- --coverage → npm run build
  e2e:      npm ci → npm run build → npx playwright install --with-deps chromium
            → npm run preview + npm run e2e   (needs: quality)
```

A failing stage marks the commit red and blocks merge (NFR-09). Deployment: static `dist/` (GitHub Pages can be enabled later; artifact already compatible).

---

## 5. Performance & Accessibility Design

- Route-level code splitting not required at this size (bundle < 300 KB gzipped target, NFR-01); revisited if datasets grow (pasuram texts).
- Fonts: Google Fonts with `display=swap`; Tamil-capable font (Noto Sans Tamil / Mukta Malar) for Tamil names.
- Accessibility designed in: landmarks, single `h1` per page, focus-visible styles, ≥4.5:1 contrast for text on the saffron/gold/deep-red palette (tokens verified in UI design doc), external links `rel="noopener noreferrer"`.

---

## 6. Scalability Roadmap

| Future capability | Enabled by |
|---|---|
| Pasuram verses per kshetram | Add field to data model; Detail page renders config-driven sections |
| CMS/backend | Swap Data/Access layers; hooks & UI unchanged |
| Map view | `mapQuery` field already present; add page consuming it |
| Multilingual UI | Data model already separates English/Tamil fields |
| Visited-checklist (localStorage) | New hook; no data-layer change |

---

*End of Document — TDD-108K-003 v1.0*

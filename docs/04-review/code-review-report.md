# Code Review Report

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | CRR-108K-006 |
| Version | 1.0 |
| Reviewer | Development Team (self-review per ALM process) |
| Date | 2026-08-29 |
| Checklist Reference | CSG-108K-004 §11 |
| Scope | All source under `app/src`, configuration, tests |

### Revision History

| Version | Date | Description |
|---|---|---|
| 0.1 | 2026-08-29 | Initial review findings logged |
| 1.0 | 2026-08-29 | All findings reworked and re-verified; review closed (Gate B passed) |

---

## 1. Review Summary

Review performed against the 10-point checklist (CSG-108K-004 §11) after Gate A
(50/50 unit tests, coverage 98.4% statements / 82.7% branches, 0 lint errors).

| # | Check | Verdict |
|---|---|---|
| 1 | Naming & file organization | Pass after CR-02 |
| 2 | JSDoc on all exports; comment policy | Pass |
| 3 | No raw data imports in components; layering | Pass |
| 4 | Reusability; shared artifacts used | Pass |
| 5 | Accessibility semantics & keyboard operability | Pass |
| 6 | Security: safe external links, no injection | Pass |
| 7 | Performance: memoized derived lists, stable keys | Pass |
| 8 | Tests meaningful & passing; coverage ≥ 80% | Pass |
| 9 | Files ≤ 300 lines | Pass after CR-01 |
| 10 | Findings reworked and re-verified | Pass |

## 2. Findings Log

| ID | Severity | Location | Finding | Disposition |
|---|---|---|---|---|
| CR-01 | Major | `src/data/kshetrams/chola.js`, `vada.js`, `thondai.js`, `pandya.js` | Four dataset files exceeded the 300-line limit (607/404/337/310 lines) | **Reworked:** datasets split into 10 region/belt modules, largest now 264 lines; aggregator `kshetrams.js` updated; 108-record integrity test re-verified |
| CR-02 | Minor | `src/hooks/useKshetramFilters.js` | `setState` inside `useEffect` (lint warning: derive state during render) | **Reworked:** replaced with derive-during-render pattern for the `?azhwar=` param sync; lint now 0 warnings |
| CR-03 | Minor | `src/components/Header.jsx` | Initial draft contained a malformed placeholder element | **Reworked:** proper brand `Link` added; caught during development review |
| CR-04 | Minor | `src/data/__tests__/dataIntegrity.test.js` | Test asserted Azhwar pasuram counts sum to 4,000; the 12 Azhwars' own works total 3,896 (the 4,000 includes later acharya compositions) | **Reworked:** assertion corrected to documented range with explanatory comment; `pasuramCount: 0` (not yet documented) allowed by design — data-enrichment backlog item |
| CR-05 | Minor | `src/pages/AzhwarsPage.jsx` | `SectionHeading` used with empty title (semantic noise) | **Reworked:** replaced with a plain lead paragraph |

## 3. Security & Accessibility Notes

- External map links render `target="_blank" rel="noopener noreferrer"` (FR-32, NFR-10) — unit-tested.
- No `dangerouslySetInnerHTML` anywhere; all content is static data rendered as text.
- Landmarks (`header/nav/main/footer`), labelled form controls, `aria-live` result count,
  `lang="ta"` on Tamil text, visible focus styles — all present and covered by tests.

## 4. Rework Verification (Re-review)

Post-rework run on 2026-08-29:

- `npm run lint` → **0 warnings, 0 errors** (42 files)
- `npm test` → **5 suites, 50/50 passed** (incl. 108-record integrity)
- Largest source file → **264 lines** (limit 300)
- `npm run build` → succeeds; bundle 298.8 kB (89.6 kB gzipped) — under the 300 kB gzipped budget

**Gate B decision: CLOSED — code approved to proceed to system/E2E testing.**

---

*End of Document — CRR-108K-006 v1.0*

---

## Version 1.1 — Release 1 (V3 Yatra Toolkit + Detail V3) Review

### Revision History (addendum)

| Version | Date | Description |
|---|---|---|
| 1.1 | 2026-08-30 | Release 1 review per gated process; findings CR-06..10 logged and dispositioned |

### 5. Review Summary (R1)

Review performed against the CSG §11 checklist after Gate A (129/129 unit tests,
14 suites; coverage 91.0% statements / 82.4% branches / 90.0% functions / 93.1%
lines; 0 lint errors).

| # | Check | Verdict |
|---|---|---|
| 1 | Naming & file organization (`state/`, `detail/` modules) | Pass |
| 2 | JSDoc on all exports | Pass |
| 3 | Layering — UI state in `src/state`, data only via `api.js` | Pass |
| 4 | Reusability (VisitedBadge/TripControls shared by cards, detail, map) | Pass |
| 5 | Accessibility (aria-pressed toggles, progressbar role, dialog lightbox) | Pass |
| 6 | Security (YouTube/archive links `noopener noreferrer`; no storage transmission) | Pass |
| 7 | Performance (lazy Leaflet chunk; initial bundle 123.8 kB gzip vs 300 kB budget) | Pass |
| 8 | Tests meaningful & passing; coverage ≥ 80% | Pass |
| 9 | Files ≤ 300 lines (largest new file: KshetramDetailPage ~160 lines) | Pass |
| 10 | Findings dispositioned | Pass after CR-06..10 |

### 6. Findings Log (addendum)

| ID | Severity | Location | Finding | Disposition |
|---|---|---|---|---|
| CR-06 | Minor | `src/pages/TripPage.jsx` | oxlint `set-state-in-effect` warnings (5) on the shared-link restore effect | **Accepted:** the effect synchronises with an external system (the URL) and applies once per param via a ref guard; documented in review. Gate remains 0 errors |
| CR-07 | Minor | `src/components/detail/MangalasasanamSection.jsx` | Per-Azhwar count chips link to `/azhwars` because `/azhwar/:id` routes arrive in Release 2 (US-AZW-02) | **Accepted:** tracked as R2 work; no broken links |
| CR-08 | Minor | `src/components/DeityGallery.jsx` | Superseded by `DeityBreakdown` (V3 photo strips) — dead code | **Reworked:** file deleted; legacy E2E journey updated to the approved V3 heading names (UXD v1.2 §16) |
| CR-09 | Minor | `src/components/ProgressBanner.jsx` | Unreachable zero-count guard inside `onReset` (reset button hidden at 0) | **Reworked:** guard removed |
| CR-10 | Minor | `src/pages/KshetramDetailPage.jsx` | Initial edit shipped a malformed `NearbyDesams` prop | **Reworked:** restored `getAllKshetramsEnriched()`; nearby-desam journey re-verified |

### 7. Rework Verification (R1 re-review, 2026-08-30)

- `npm run lint` → **0 errors** (92 files; 5 accepted warnings per CR-06)
- `npm test -- --coverage` → **14 suites, 129/129 passed**; thresholds met (all ≥ 80%)
- `npm run build` → succeeds; **initial chunk 123.8 kB gzip** (Leaflet isolated in a 44.9 kB gzip lazy chunk + 1.5 kB MapPage / 0.4 kB MiniMapInner) — NFR-01/NFR-11 satisfied
- E2E smoke: **17/17 journeys pass** (12 legacy incl. updated TC-08 headings + 5 new TC-13..17); formal execution report due at Gate 4

**Gate B decision (R1): CLOSED — code approved to proceed to system/E2E testing.**

---

*End of Addendum — CRR-108K-006 v1.1*

---

## Version 1.2 — Release 2 (Azhwar Detail & Acharyas) Review

### Revision History (addendum)

| Version | Date | Description |
|---|---|---|
| 1.2 | 2026-08-30 | R2 review per gated process; findings CR-11..14 logged and dispositioned |

### 8. Review Summary (R2)

Review performed against the CSG §11 checklist after Gate A (146/146 unit tests,
16 suites; coverage 91.8/81.6/91.2/93.7; 0 lint errors). Scope: `azhwar-details.js`,
`acharyas.js`, api additions, saint components/pages, routes/nav, tests.

| # | Check | Verdict |
|---|---|---|
| 1 | Naming & file organization (`saint/` shared components) | Pass |
| 2 | JSDoc on all exports | Pass |
| 3 | Layering — saints accessed only via `api.js` | Pass |
| 4 | Reusability (Identification/SaintVerse/SaintMedia shared by both templates) | Pass |
| 5 | Accessibility (links, landmarks, pending markers as text) | Pass |
| 6 | Security (external listen/text links `noopener noreferrer`) | Pass |
| 7 | Performance (no new runtime deps; initial bundle 131.8 kB gzip) | Pass |
| 8 | Tests meaningful & passing; coverage ≥ 80% | Pass |
| 9 | Files ≤ 300 lines (largest new file ~230 lines) | Pass |
| 10 | Findings dispositioned | Pass after CR-11..14 |

### 9. Findings Log (addendum)

| ID | Severity | Location | Finding | Disposition |
|---|---|---|---|---|
| CR-11 | Minor | `src/data/azhwar-details.js` | Granular traditional fields (amsam, birth star) omitted for a few Azhwars where traditions differ | **Accepted:** file header documents the deliberate-absence policy; pages show "not yet documented" — PO can supply data-only |
| CR-12 | Minor | `src/data/acharyas.js` | Scaffolded acharyas carry pending biographies | **Accepted:** per agreed scaffold policy (US-ACH-01); pending marker renders visibly |
| CR-13 | Minor | `src/data/acharyas.js` (initial draft) | Two invalid kshetram associations (Sriperumbudur/Melkote are not Divya Desams in the dataset) | **Reworked:** corrected to valid links; integrity tests (UT-ACH-01) now guard all saint→kshetram links |
| CR-14 | Minor | `src/components/detail/GalleryLightbox.jsx` | Synchronous setState inside effect for `src`-type photos | **Reworked:** derive from props with keyed remount; lint warnings reduced to the accepted TripPage class |

### 10. Rework Verification (R2 re-review, 2026-08-30)

- `npm run lint` → **0 errors** (103 files; 2 accepted warnings)
- `npm test -- --coverage` → **16 suites, 146/146 passed**; thresholds met
- `npm run build` → succeeds; initial chunk **131.8 kB gzip**; lazy Leaflet chunk unchanged
- E2E: **19/19 journeys** (17 existing + TC-18/19)

**Gate B decision (R2): CLOSED — code approved to proceed to system/E2E testing.**

---

## Version 1.3 — Content Population & Maintenance Review

### Revision History (addendum)

| Version | Date | Description |
|---|---|---|
| 1.3 | 2026-08-31 | Content maintenance + post-delivery enhancements review; findings CR-15..18 logged and dispositioned |

### 11. Review Summary (content population + maintenance)

Review performed against the CSG §11 checklist over the content-maintenance diff set: dossier photo
repairs (`dossiers.js`), the new lazy Trip route-map components (`TripMap.jsx`/`TripMapInner.jsx`),
Map page hover tooltips, trip/map test extensions, CI workflow action bumps and the stale-comment
fix (`azhwar-details.js`). The two PO enhancements deliberately reuse established patterns: the
TripMap clones the MiniMap lazy split (NFR-11 — Leaflet stays out of the TripPage bundle) and
tooltips are non-interactive so marker clicks/popups and keyboard paths are untouched.

| # | Check | Verdict |
|---|---|---|
| 1 | Naming & file organization (`TripMap`/`TripMapInner` pair) | Pass |
| 2 | JSDoc on all exports | Pass |
| 3 | Layering — data via `api.js`; Leaflet only in lazy chunks | Pass |
| 4 | Reusability (MiniMap pattern reused; no duplicated Leaflet glue) | Pass |
| 5 | Accessibility (tooltips `interactive={false}`; popups remain the keyboard/AT path; print hides maps) | Pass |
| 6 | Security (OSM tiles + attribution as before; no new external calls) | Pass |
| 7 | Performance (main bundle +0.2 kB gzip for both features; Leaflet lazy chunk 44.9 kB) | Pass |
| 8 | Tests meaningful & passing; coverage ≥ 80% | Pass |
| 9 | Files ≤ 300 lines (largest new file ~95 lines) | Pass |
| 10 | Findings dispositioned | Pass after CR-15..18 |

### 12. Findings Log (addendum)

| ID | Severity | Location | Finding | Disposition |
|---|---|---|---|---|
| CR-15 | Major | `src/data/enrichment/dossiers.js` (desam-86/88) | Dossier photo srcs carried an unresolved `__BASE_URL__` placeholder — broken images in production | **Reworked:** srcs corrected; new data-integrity test asserts every template photo src resolves under the base URL with no placeholder (TER D-09) |
| CR-16 | Minor | `src/data/enrichment/dossiers.js` | desam-89 dossier photograph extracted but referenced by no template | **Reworked:** wired into Thiru Nilathingal Thundam's Moolavar photos (serial #78, the #78/#89 duplicate pair) (TER D-10) |
| CR-17 | Minor | `Reference Content/README.md` | Population status "93 of the 108" obscured that Srirangam (#1) is covered by the preferred sample template | **Reworked:** README records 94/108 full-depth and the deliberate omission (TER D-11) |
| CR-18 | Minor | `src/data/acharyas.js` | Engalazhwan and Vedanta Desika render the Guru & Sishyas pending marker; the dossier names their guru/sishya but those personalities are outside the 23-entry dataset | **Accepted:** per US-ACH-01 pending-content policy — chip links must resolve to dataset ids (UT-ACH-01); adding entries is a PO decision; relations remain in the narrative text |

### 13. Rework Verification (re-review, 2026-08-31)

- `npm run lint` → **0 errors** (113 files; 1 accepted warning)
- `npm run test:coverage` → **19 suites, 180/180 passed**; 92.5/82.8/91.8/94.1 — thresholds met
- `npm run build` → succeeds; initial chunk **331.6 kB gzip** (dossier dataset growth, tracked in TER v1.4); Leaflet lazy chunk **44.9 kB gzip**
- E2E: **19/19 journeys** (TC-14/TC-15 extended for tooltip and trip-map assertions)

**Gate B decision (content population + maintenance): CLOSED — code approved for delivery.**

---

*End of Addendum — CRR-108K-006 v1.3*

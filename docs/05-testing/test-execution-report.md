# Test Execution Report

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | TER-108K-009 |
| Version | 1.0 |
| Date | 2026-08-29 |
| Environment | Windows 11 · Node 26.4 · npm 11.17 · Playwright Chromium (headless) |

---

## 1. Summary

| Suite | Result | Detail |
|---|---|---|
| Static analysis (oxlint) | **Pass** | 0 errors, 0 warnings (42 files) |
| Unit/Component (Vitest + RTL) | **Pass** | 5 suites, **50/50 tests** passed |
| Coverage | **Pass** | 98.4% statements · 82.7% branches · 98.4% functions · 99.0% lines (threshold 80%) |
| Build | **Pass** | 298.8 kB raw / **89.6 kB gzipped** (< 300 kB budget) |
| E2E (Playwright, Chromium) | **Pass** | **9/9 journeys** passed (TC-02..TC-12) |
| CI (GitHub Actions, Linux) | **Pass** | Run 33238689903: lint ✓, unit+coverage ✓, build ✓, E2E ✓ |

## 2. E2E Case Results

| Case | Description | Result |
|---|---|---|
| TC-02 | Header/nav/active link | Pass |
| TC-03 | Home hero, stats, featured cards | Pass |
| TC-04 | Browse shows all 108 | Pass |
| TC-05 | Search narrows results | Pass (after defect D-01 fix in test) |
| TC-06 | State filter (Kerala → 11) | Pass |
| TC-07 | Empty state + reset | Pass |
| TC-08 | Detail sections + safe map link | Pass |
| TC-09 | Unknown id → not found | Pass |
| TC-10 | Azhwars page + pre-filtered browse | Pass (after D-01 fix in test) |
| TC-11 | Footer attribution | Pass |
| TC-12 | Unknown route | Pass |

## 3. Defect Log

| ID | Severity | Phase Found | Description | Disposition |
|---|---|---|---|---|
| D-01 | Minor | System (E2E) | Three E2E assertions used substring regexes matching the constant "108", producing false failures/ambiguity | **Fixed** — assertions rewritten against exact count text; suite re-run green |
| D-02 | Major | CI (first pipeline run) | Vitest on Linux discovered `e2e/journeys.spec.js` (Playwright spec) and the suite failed in CI though green locally | **Fixed** — Vitest `exclude: ['e2e/**']`; commit `104416f`; CI run 33238689903 fully green |
| CR-01..CR-05 | Major/Minor | Code review | See CRR-108K-006 | **All closed** before system testing (Gate B) |

**Open Critical/Major defects: 0** → **Gate C PASSED — approved for delivery.**

## 4. Known Limitations / Backlog

1. Per-kshetram pasuram counts are populated only where documented (`pasuramCount: 0` elsewhere, badge hidden) — content enrichment backlog.
2. Azhwar attributions list principal Mangalasasanam contributors; a fully exhaustive per-pasuram mapping is a future data task.
3. E2E runs on Chromium locally; CI additionally exercises the lint/unit/build pipeline on Linux.

---

*End of Document — TER-108K-009 v1.0*

---

## Version 1.1 — Detail Enrichment V2 Execution (2026-08-29)

Scope: EP-DTL2 (US-DTL-03..13, FR-60..70).

| Suite | Result | Detail |
|---|---|---|
| Static analysis (oxlint) | **Pass** | 0 errors, 0 warnings (58 files) |
| Unit/Component | **Pass** | 8 suites, **78/78 tests** |
| Coverage | **Pass** | 94.9% statements · 81.3% branches · 95.7% functions · 96.0% lines |
| Build | **Pass** | gzip bundle within budget |
| E2E (Playwright) | **Pass** | **12/12 journeys** (5 new V2 cases) |
| CI + Deploy | **Pass** | Both pipelines green; live site verified |

### Defect Log (V2)

| ID | Severity | Phase Found | Description | Disposition |
|---|---|---|---|---|
| D-03 | Major | Unit (Gate A) | WikiThumb caused an infinite re-render (setState-in-effect reset) | **Fixed** — module-level cache + async-only state updates |
| D-04 | Minor | Unit (Gate A) | Coverage gate failed at 69.4% branches before V2 component tests were added | **Fixed** — added detailV2.test.jsx (12 cases incl. geolocation mocks); branches 81.3% |
| D-05 | Minor | Deployment | Deep links (e.g. /kshetram/srirangam) returned 404 on GitHub Pages | **Fixed** — 404.html SPA fallback in deploy workflow; content verified live (Pages still emits a 404 status code — known limitation of the platform, browser rendering is correct) |

### Data caveats (recorded per PO transparency)

- Coordinates are approximate (~0.01°) — sufficient for 50 km proximity and indicative straight-line distance.
- Timings are indicative and labelled "please confirm with the temple office".
- Pasuram Tamil text is quoted only where verified; other temples show reference + meaning + listen link.
- Photos are sourced live from the Wikipedia REST API (CC BY-SA, credited); shrines without articles show a decorative placeholder.

**Open Critical/Major defects: 0 → Gate C PASSED (V2).**

---

## Version 1.2 — Release 1: Yatra Toolkit + Detail V3 Execution (2026-08-30)

Scope: EP-YTRK, EP-YMAP, EP-YTRP, EP-DTL3, EP-ABT, EP-NAV (US-NAV-02), EP-ENG (US-ENG-08) — FR-71..87 (USD/SRS v1.2). Gated delivery: Gate 1 (requirements) and Gate 2 (wireframes) approved by the PO on 2026-08-30; Gate 3 (development + unit testing) approved 2026-08-30.

| Suite | Result | Detail |
|---|---|---|
| Static analysis (oxlint) | **Pass** | 0 errors, 5 accepted warnings (92 files) — see CRR v1.1 CR-06 |
| Unit/Component (Vitest + RTL) | **Pass** | 14 suites, **129/129 tests** (51 new for V3) |
| Coverage (Gate A) | **Pass** | 91.0% statements · 82.4% branches · 90.0% functions · 93.1% lines (threshold 80%) |
| Build (TC-QA-03) | **Pass** | Initial chunk **123.8 kB gzip**; Leaflet isolated in lazy chunks (44.9 kB gzip + MapPage 1.5 kB + MiniMapInner 0.4 kB) — NFR-01/NFR-11 |
| Code review (Gate B) | **Closed** | CRR-108K-006 v1.1: CR-06..10 dispositioned |
| E2E (Playwright, Chromium) | **Pass** | **17/17 journeys** — 12 legacy (TC-02..12, TC-08 updated to V3 headings) + 5 new (TC-13..17) |
| CI (GitHub Actions, Linux) | **Pass** | Run 33291022994: lint/unit/build ✓, E2E ✓ |
| Deploy + Live verification | **Pass** | Run 33291023015 success (commit `7dfac03`); live bundle hash `index-D5Y2N-Oz.js` matches local build; V3 features verified in the served bundle; deep-link SPA fallback still renders (Pages 404 status limitation persists, rendering correct) |

### E2E Case Results (V3, e2e/yatra.spec.js)

| Case | Description | Result |
|---|---|---|
| TC-13 | Visited flow: mark → progress banner → visit-status filter → confirm-guarded reset | Pass |
| TC-14 | Map: plotted desams, region chip filtering, popup → detail page | Pass |
| TC-15 | Trip: add 3 stops → nav count → region/route views → order route → share URL → restore from shared link | Pass |
| TC-16 | Detail V3: shrine-template headings, word-by-word pasuram, "not yet documented" fallbacks | Pass |
| TC-17 | Nav "Kshetra Tours", hero CTA "Azhwars", About page | Pass |

### Defect Log (V3)

| ID | Severity | Phase Found | Description | Disposition |
|---|---|---|---|---|
| D-06 | Minor | Unit (Gate A) | jsdom 30 environment lacks `localStorage`; store tests failed on first run | **Fixed** — in-memory localStorage polyfill in the shared test setup |
| D-07 | Minor | E2E | Two legacy/new journey assertions referenced V2 heading names and a mis-keyed kshetram slug (`uthamar-koil`) | **Fixed** — journeys aligned with UXD v1.2 section names; slug corrected to `uthamar-kovil` |
| CR-06..CR-10 | Minor | Code review (Gate B) | See CRR-108K-006 v1.1 | **All dispositioned** before system testing |

**Open Critical/Major defects: 0 → Gate C PASSED (V3 R1).**

### Known Limitations / Notes (V3)

1. The shrine content template is fully populated only for Srirangam (the PO sample); all other kshetrams render existing V2 enrichment and show "Not yet documented yet." for absent template blocks — content backlog, extendable data-only (NFR-05).
2. Mangalasasanam per-Azhwar count chips link to `/azhwars` until the R2 Azhwar detail routes (US-AZW-02) exist.
3. GitHub Pages deep links continue to return an HTTP 404 status while rendering correctly (platform limitation, see D-05 in v1.1).
4. Trip/map/visited state is browser-local only (FR-71) — clearing site data resets it; a disabled-storage browser degrades to session-only state.

---

*End of Addendum — TER-108K-009 v1.2*

---

## Version 1.3 — Release 2: Azhwar Detail & Acharyas Execution (2026-08-30)

Scope: EP-AZW2, EP-ACH — US-AZW-02..03, US-ACH-01..03, FR-90..94 (USD/SRS v1.2). Gated delivery: Gate 2 wireframes (UXD v1.2 §18/19, PO samples) approved; Gate 3 (development + unit testing) approved 2026-08-30.

| Suite | Result | Detail |
|---|---|---|
| Static analysis (oxlint) | **Pass** | 0 errors, 2 accepted warnings (103 files) — see CRR v1.2 |
| Unit/Component (Vitest + RTL) | **Pass** | 16 suites, **146/146 tests** (17 new for R2) |
| Coverage (Gate A) | **Pass** | 91.8% statements · 81.6% branches · 91.2% functions · 93.7% lines (threshold 80%) |
| Build (TC-QA-03) | **Pass** | Initial chunk **131.8 kB gzip**; Leaflet lazy chunk unchanged — NFR-01/NFR-11 |
| Code review (Gate B) | **Closed** | CRR-108K-006 v1.2: CR-11..14 dispositioned (incl. two invalid saint→kshetram links caught and corrected, now guarded by UT-ACH-01) |
| E2E (Playwright, Chromium) | **Pass** | **19/19 journeys** — 17 existing + TC-18/19 (saint templates, chronological nav, parampara index, pending markers) |
| CI (GitHub Actions, Linux) | **Pass** | Run 33291734960: lint/unit/build ✓, E2E ✓ |
| Deploy + Live verification | **Pass** | Run 33291734917 success (commit `—`, TER v1.2 → R2 commit); live bundle hash `index-B8rMrI69.js` matches local build; Acharyas nav, acharya dataset and pending-content strings verified in the served bundle |

### E2E Case Results (R2, e2e/yatra.spec.js)

| Case | Description | Result |
|---|---|---|
| TC-18 | Azhwar detail: saint template (identification, verse, kshetram link), chronological prev/next navigation | Pass |
| TC-19 | Acharyas index by parampara era; Manavala Mamunigal detail (sample); Nathamuni pending markers | Pass |

### Defect Log (R2)

| ID | Severity | Phase Found | Description | Disposition |
|---|---|---|---|---|
| D-08 | Minor | Code review (Gate B) | Initial acharya draft linked birthplaces not present in the 108 dataset (Sriperumbudur, Melkote) | **Fixed** — associations corrected; saint→kshetram link integrity test added (UT-ACH-01) so such links fail the build in future |
| CR-11..CR-14 | Minor | Code review (Gate B) | See CRR-108K-006 v1.2 | **All dispositioned** before system testing |

**Open Critical/Major defects: 0 → Gate C PASSED (V3 R2).**

### Known Limitations / Notes (R2)

1. Traditional granular fields (amsam, birth star) are present only where well-established; differing traditions are left absent rather than guessed — PO may supply data-only.
2. Acharya biographies other than Manavala Mamunigal render the visible "[Content pending — to be provided]" marker until the PO's text is added (data-only change).
3. Representative verses are quoted where verified (Poigai per PO sample); other Azhwars currently show the documented fallback.

---

*End of Addendum — TER-108K-009 v1.3*

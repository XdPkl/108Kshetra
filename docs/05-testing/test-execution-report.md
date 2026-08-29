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

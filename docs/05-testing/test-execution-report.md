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
| CR-01..CR-05 | Major/Minor | Code review | See CRR-108K-006 | **All closed** before system testing (Gate B) |

**Open Critical/Major defects: 0** → **Gate C PASSED — approved for delivery.**

## 4. Known Limitations / Backlog

1. Per-kshetram pasuram counts are populated only where documented (`pasuramCount: 0` elsewhere, badge hidden) — content enrichment backlog.
2. Azhwar attributions list principal Mangalasasanam contributors; a fully exhaustive per-pasuram mapping is a future data task.
3. E2E runs on Chromium locally; CI additionally exercises the lint/unit/build pipeline on Linux.

---

*End of Document — TER-108K-009 v1.0*

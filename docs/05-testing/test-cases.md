# Test Cases

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | TCS-108K-008 |
| Version | 1.0 |
| Date | 2026-08-29 |
| Traceability | Each case maps to FR IDs (SRS-108K-001 §5) |

Execution column reflects the run recorded in `test-execution-report.md`.

## 1. Data Integrity (automated unit)

| ID | FR | Test Case | Expected Result | Executed |
|---|---|---|---|---|
| TC-01 | FR-01 | Load the kshetram dataset | Exactly 108 records, unique ids | Pass (UT) |
| TC-02 | FR-01 | Inspect every record | All required string fields non-empty; earthly records have mapQuery | Pass (UT) |
| TC-03 | FR-03 | Cross-check Azhwar references | Every kshetram→azhwar id resolves; every azhwar (except Madhurakavi) referenced | Pass (UT) |
| TC-10a | FR-02 | Load Azhwar dataset | 12 records, unique ids, complete fields, positive pasuram counts | Pass (UT) |

## 2. UI / E2E Cases (Playwright, Chromium)

| ID | FR | Steps | Expected Result | Executed |
|---|---|---|---|---|
| TC-02 | FR-50/52 | Open `/` | Header with brand + Home/Browse/Azhwars; Home active | Pass |
| TC-03 | FR-10/11/12 | Open `/` | Hero title & intro; stats 108 / 12 / 4,000+; ≥4 featured cards; links to Browse & Azhwars | Pass |
| TC-04 | FR-20 | Open `/kshetrams` | 108 cards; count reads "Showing 108 of 108 kshetrams" | Pass |
| TC-05 | FR-21/23 | Type "kanchipuram" in search | Grid narrows; count updates and is announced | Pass |
| TC-06 | FR-22 | Select State = Kerala | Only Kerala kshetrams shown (11); combine with search narrows further | Pass |
| TC-07 | FR-24/25 | Search "atlantis" | Empty state with "Clear all filters"; clicking restores 108 | Pass |
| TC-08 | FR-30/31/32 | Click a featured card | Detail page at `/kshetram/:id` shows Deity, Location, Mangalasasanam, Significance; map link opens new tab with `rel="noopener noreferrer"` | Pass |
| TC-09 | FR-33 | Open `/kshetram/unknown-id` | Not-found message + Back to Browse link | Pass |
| TC-10 | FR-40/41 | Open `/azhwars` | 12 Azhwar cards; "+N more" links to `/kshetrams?azhwar=<id>` and browse shows only that Azhwar's desams | Pass |
| TC-11 | FR-51 | Any page footer | Attribution and disclaimer visible | Pass |
| TC-12 | NFR-07 | Open `/nonexistent` | Page-not-found state, no crash | Pass |

## 3. Quality-Gate Cases (automated)

| ID | NFR | Command | Expected | Executed |
|---|---|---|---|---|
| TC-13 | NFR-04 | `npm run lint` | 0 errors, 0 warnings | Pass |
| TC-14 | NFR-06 | `npm run test:coverage` | All suites pass; ≥80% statements/branches | Pass |
| TC-15 | NFR-01 | `npm run build` | Build succeeds; gzip bundle < 300 kB | Pass |

---

*End of Document — TCS-108K-008 v1.0*

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
| TC-QA-01 | NFR-04 | `npm run lint` | 0 errors | Pass |
| TC-QA-02 | NFR-06 | `npm run test:coverage` | All suites pass; ≥80% statements/branches | Pass |
| TC-QA-03 | NFR-01/11 | `npm run build` | Build succeeds; gzip bundle < 300 kB; map/Leaflet in lazy chunks | Pass |

---

*End of Document — TCS-108K-008 v1.0*

---

## Version 1.1 — V3 Yatra Toolkit & Detail V3 Cases (2026-08-30)

Renumbered: quality-gate cases TC-13..15 → **TC-QA-01..03** (TC-13+ freed for E2E per SRS §5.1 addendum).

### 4. Unit Cases added (Vitest + RTL)

| ID | FR | Test Case | Expected Result | Executed |
|---|---|---|---|---|
| UT-TRK-01..05 | FR-71..75 | Visited store persistence/toggle/reset, banner progressbar + confirm, toggle aria-pressed, badges, visit-status filter (AND semantics) | State persists locally; UI reflects and updates reactively | Pass (UT) |
| UT-TRP-01..03 | FR-79..81 | Trip store add/remove/dedupe/setTrip, share encode/decode, trip page views, nearest-first ordering, leg distances | Trip persists; route ordering correct; share URL round-trips | Pass (UT) |
| UT-RTE-01 | FR-80 | Nearest-neighbour ordering with coordinate-less stops | Ordered nearest-first; null legs for missing coords; total correct | Pass (UT) |
| UT-MAP-01..03 | FR-76..78 | Map renders plotted desams; region chips narrow; geolocation-denial message; legend; lazy mini-map | Markers/legend/chips behave per spec; graceful geolocation fallback | Pass (UT) |
| UT-DTL-05..08 | FR-82..85 | Shrine template sections, photo strips + lightbox navigation/Esc, mangalasasanam excerpts + word-by-word, visit-info fallbacks, yatra hooks on detail | Template renders documented data; "not yet documented" fallbacks elsewhere | Pass (UT) |
| UT-ABT-01 | FR-87 | About page sections | Site/tours/contact rendered from data with pending markers | Pass (UT) |
| UT-NAV-04 | FR-86 | Hero CTA wording | Reads "Azhwars"; no "Meet the Azhwars" | Pass (UT) |

### 5. UI / E2E Cases added (Playwright, Chromium) — e2e/yatra.spec.js

| ID | FR | Steps | Expected Result | Executed |
|---|---|---|---|---|
| TC-13 | FR-71..75 | Mark visited on detail → Home banner → Browse visit filter → reset (confirm) | Badge/pressed state; banner "1 of 108"; filter shows 1; reset restores 0 | Pass |
| TC-14 | FR-76..78 | Open `/map`; count markers; toggle a region chip; click a marker; open page | Leaflet renders plotted desams; chip narrows; popup links to detail | Pass |
| TC-15 | FR-79..81 | Add 3 desams to trip; nav count; trip page; order route; share → clipboard; clear storage; open shared URL | "Trip · 3"; stops listed; nearest-first notice; shared link restores trip | Pass |
| TC-16 | FR-82..85 | Open `/kshetram/srirangam` | All shrine-template headings; word-by-word pasuram; "not yet documented" fallbacks | Pass |
| TC-17 | FR-86/87 | Open `/`; check nav + hero CTA; open Kshetra Tours | Nav "Kshetra Tours"; CTA "Azhwars"; About page renders | Pass |
| TC-18 | FR-90/91 | (Release 2) Open `/azhwar/:id` | Saint template renders with prev/next navigation | Planned (R2) |
| TC-19 | FR-92..94 | (Release 2) Open `/acharyas`, `/acharya/:id` | Parampara index + saint template with pending markers | Planned (R2) |

Quality gates re-executed for V3: TC-QA-01 Pass (0 errors; 5 accepted warnings per CRR v1.1 CR-06) · TC-QA-02 Pass (129/129; 91.0/82.4/90.0/93.1) · TC-QA-03 Pass (initial 123.8 kB gzip; Leaflet lazy 44.9 kB).

---

*End of Addendum — TCS-108K-008 v1.1*

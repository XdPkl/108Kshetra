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
| TC-03 | FR-10/11/12 | Open `/` | Three-line hero (title, intro, Explore CTA) over sketch watermark; ≥4 featured cards with thumbnails; Azhwar + Acharya darshan strips (v1.4: stats band removed per PO request) | Pass |
| TC-04 | FR-20 | Open `/kshetrams` | 108 cards; count reads "Showing 108 of 108 kshetrams"; browse header carries eyebrow, compact yatra tracker, region quick-chips and the Sort by control (v2) | Pass |
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
| UT-ABT-01 | FR-87 | About page sections | Site/tours/contact rendered from the PO-approved copy — feature grid, numbered tour highlights, contact cards with copy-to-clipboard; no pending markers (v2) | Pass (UT) |
| UT-NAV-04 | FR-86 | Home CTA wording | "Explore the 108 Kshetrams" + "Azhwar Darshan - Featured"/"Acharya Darshan - Featured" (v1.4); no "Meet the Azhwars" | Pass (UT) |

### 5. UI / E2E Cases added (Playwright, Chromium) — e2e/yatra.spec.js

| ID | FR | Steps | Expected Result | Executed |
|---|---|---|---|---|
| TC-13 | FR-71..75 | Mark visited on detail → Home banner → Browse visit filter → reset (confirm) | Badge/pressed state; banner "1 of 108"; filter shows 1; reset restores 0 | Pass |
| TC-14 | FR-76..78 | Open `/map`; count markers; toggle a region chip; click a marker; open page | Leaflet renders plotted desams; chip narrows; popup links to detail | Pass |
| TC-15 | FR-79..81 | Add 3 desams to trip; nav count; trip page; order route; share → clipboard; clear storage; open shared URL | "Trip · 3"; stops listed; nearest-first notice; shared link restores trip | Pass |
| TC-16 | FR-82..85 | Open `/kshetram/srirangam` | All shrine-template headings; word-by-word pasuram; "not yet documented" fallbacks | Pass |
| TC-17 | FR-86/87 | Open `/`; check nav + darshan strips; open Kshetra Tours | Nav "Kshetra Tours"; both darshan-strip CTAs; About page renders (v1.4) | Pass |
| TC-18 | FR-90/91 | (Release 2) Open `/azhwar/:id` | Saint template renders with prev/next navigation | Pass |
| TC-19 | FR-92..94 | (Release 2) Open `/acharyas`, `/acharya/:id` | Parampara index + saint template with pending markers | Pass |

Quality gates re-executed for V3: TC-QA-01 Pass (0 errors; 5 accepted warnings per CRR v1.1 CR-06) · TC-QA-02 Pass (129/129; 91.0/82.4/90.0/93.1) · TC-QA-03 Pass (initial 123.8 kB gzip; Leaflet lazy 44.9 kB).

---

*End of Addendum — TCS-108K-008 v1.1*

---

## Version 1.2 — Release 2: Azhwar Detail & Acharyas (2026-08-30)

R2 quality gates: TC-QA-01 Pass (0 errors; 2 accepted warnings per CRR v1.2) · TC-QA-02 Pass (**146/146 tests, 16 suites**; 91.8% statements / 81.6% branches / 91.2% functions / 93.7% lines) · TC-QA-03 Pass (initial **131.8 kB gzip**; Leaflet lazy chunk unchanged).

### 6. Unit Cases added (R2)

| ID | FR | Test Case | Expected Result | Executed |
|---|---|---|---|---|
| UT-AZW-03 | FR-90 | Azhwar detail page: saint template (portrait identification with alias chips + definition cards, 7/5 Life History split with Chronological Lifeline rail, iconised works, framed verse with word-meaning chips + commentary cards, YouTube listening cards), derived desam chips, prev/next chronological nav, unknown-id handling (UXD v1.5, v2) | Template renders per PO sample; alias chips resolve; navigation correct | Pass (UT) |
| UT-AZW-04 | FR-91 | Azhwar enrichment integrity: 12 records in order, birthplace/associated-desam links resolve, works totals within documented counts, Poigai sample structure | All links valid; sample fully encoded | Pass (UT) |
| UT-ACH-01 | FR-92 | Acharya dataset integrity: unique ids, required fields, guru/sishya/desam links resolve, pending-content policy | Links valid; pending content explicitly marked | Pass (UT) |
| UT-ACH-02/03 | FR-93/94 | Acharyas index grouped by parampara era; Acharya detail (portrait identification, iconised contributions, framed verse, 2-col media) with Manavala Mamunigal PO sample, guru/sishya cross-links, sources, pending markers (UXD v1.5) | Index and template render; links resolve | Pass (UT) |

### 7. E2E Cases executed (R2) — e2e/yatra.spec.js

| ID | FR | Steps | Expected Result | Executed |
|---|---|---|---|---|
| TC-18 | FR-90/91 | Open `/azhwars` → click Poigai Azhwar → check identification/verse/kshetram link → next navigation | Saint template renders with alias chips (v2 replaces joined-epithets assertion); URL updates; prev/next correct | Pass |
| TC-19 | FR-92..94 | Open `/acharyas` → open Sri Manavala Mamunigal → check history/verse; open Nathamuni → pending markers | Index groups; sample detail renders; pending content visible | Pass |

---

## Version 1.3 — Content Maintenance & Enhancements (2026-08-31)

Quality gates: TC-QA-01 Pass (0 errors; 1 accepted warning per CRR v1.3) · TC-QA-02 Pass (**180/180 tests, 19 suites**; 92.5% statements / 82.8% branches / 91.8% functions / 94.1% lines) · TC-QA-03 Pass (initial **331.6 kB gzip**, dossier dataset growth tracked in TER v1.4; Leaflet lazy chunk 44.9 kB gzip). Execution recorded in TER v1.4.

### 8. Unit Cases added (maintenance + enhancements)

| ID | FR | Test Case | Expected Result | Executed |
|---|---|---|---|---|
| UT-TRP-04 | FR-80 (enh. US-TRP-04) | Trip route map: 3-stop trip renders the lazy map with 3 markers, a polyline and numbered tooltips; celestial-only trip renders no map | Map mirrors trip order; suppressed without coords | Pass (UT) |
| UT-MAP-04 | FR-77 (enh. US-MAP-04) | Map page tooltips: one tooltip per plotted marker carrying the desam name; visited note only when marked | Tooltip count equals marker count | Pass (UT) |
| UT-DOS-01 | FR-83 | Dossier template integrity additions: Srirangam full-depth coverage via the preferred sample template (11-azhwar mangalasasanam); every template photo src resolves under the site base URL with no placeholder | Coverage holds; photo srcs valid | Pass (UT) |

### 9. E2E Cases extended (maintenance + enhancements) — e2e/yatra.spec.js

| ID | FR | Steps | Expected Result | Executed |
|---|---|---|---|---|
| TC-14 (ext) | FR-77/78 | Existing map journey + hover a marker | `.leaflet-tooltip` visible with the desam name; popup flow unchanged | Pass |
| TC-15 (ext) | FR-80/81 | Existing trip journey + open `/trip` | `.trip-map` renders 3 markers + dashed polyline; order/share-restore unchanged | Pass |

---

## Version 1.4 — UXD v2 Rollout & Mock-Parity Contract Updates (2026-09-11)

Quality gates: TC-QA-01 Pass (0 errors; 1 accepted warning per CRR v1.3) · TC-QA-02 Pass (**185/185 tests, 19 suites**; 90.6% statements / 81.4% branches / 90.5% functions / 92.2% lines) · TC-QA-03 Pass (clean build) · E2E **19/19**. Execution recorded in TER v1.7 (v2 rollout) and TER v1.8 (mock-parity run).

Contract updates recorded **in place** (per the v1.4/v1.5 convention): UT-AZW-03 and TC-18 (alias chips + definition cards, Life History 7/5 split with Chronological Lifeline rail), UT-ABT-01 (About asserts PO-approved copy), TC-04 (browse header tracker/quick-chips/sort).

### 10. Unit Cases added (UXD v2 mock-parity)

| ID | FR | Test Case | Expected Result | Executed |
|---|---|---|---|---|
| UT-BRW-05 | FR-20 (UXD v2) | Browse sort control: select "Name A–Z" from the `Sort by` control | Card headings render in ascending locale-aware order; Traditional order still the default | Pass (UT) |

---

## Version 1.5 — Acharya Parampara Expansion (2026-09-11)

PO decision resolving CR-18: the acharya dataset grows 23 → 27 with the four lineage acharyas the dossiers name — Thirukkurugai Piran Pillan, Nadadur Ammal, Kidambi Appullar, Thiruvaimozhi Pillai — so the Guru & Sishyas chips on Engalazhwan, Vedanta Desika and Manavala Mamunigal resolve. The four new entries are scaffolds whose own dossiers render the visible pending marker (US-ACH-01 policy); the pending-content assertion now pins exactly that scaffold set. Quality gates: TC-QA-01 Pass (0 errors; 1 accepted warning) · TC-QA-02 Pass (**188/188 tests, 19 suites**; gate 80%) · TC-QA-03 Pass · E2E **19/19**. Execution recorded in TER v1.9.

### 11. Unit Cases added (acharya expansion)

| ID | FR | Test Case | Expected Result | Executed |
|---|---|---|---|---|
| UT-ACH-04 | FR-92 (enh. US-ACH-04) | Dataset grows 23 → 27; pending-lifeHistory set equals exactly the four scaffolded ids; CR-18 wiring resolves (Engalazhwan guru/sishya, Vedanta Desika guru, Manavala Mamunigal guru); Engalazhwan page renders resolving Guru & Sishyas chips with no pending marker; scaffold page (Nadadur Ammal) renders with the pending-dossier marker | Chips resolve to dataset ids; scaffolds render visibly pending | Pass (UT) |

---

*End of Addendum — TCS-108K-008 v1.5*

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
| UT-AZW-03 | FR-90 | Azhwar detail page (2026-09-30 snap restyle): hero with portrait + alias chips, pasuram/desam stat row and Birthplace/Birth-star/Divine-amsam icon row; five-tab dossier (Life & tradition with expandable story + KEY MOMENTS rail · Hymns & meaning with verse apparatus + works · Sacred places (N) · Media · Sources); opening-verse band jumping to Hymns; Birthplace/Sacred-places cards; sources summary row; chronological prev/next nav; unknown-id handling. Content dataset-mapped (no invented copy); amsam cell hidden where absent (madhurakavi, kulasekhara) | Hero renders per PO snap; tabs switch; verse-band jump works; navigation correct | Pass (UT) |
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

---

## Version 1.6 — v3.0 Zip-Parity Contract Updates (2026-09-24)

Layout parity per UXD §30 (all 11 surfaces + About addendum). Behavioral contracts unchanged;
these copy/control contracts moved with the zip:

| ID | Change | Detail |
|---|---|---|
| UT-NAV-01/03 | Nav labels | Browse → **108 Temples**; Trip · N → **My Yatra** + gold count badge; Kshetra Tours name matched by regex (Guided Yatras chip) |
| UT-YAT-05 | Card trip toggles | Add/Remove to trip → **+ Trip / ✓ In trip** (detail keeps + Add to trip) |
| TC-13 | Visit-status control | Select → **"Show visited only" checkbox** (aria-label Visit status); reset now on Home (Browse tracker dropped per zip) |
| UT-MAP-02 | Map chip row | Leading **All regions (108)** chip → region chip index 1 in tests |
| UT-AZW/SAIN T | Portrait placeholder | ◆ glyph → **Thiruman watermark** behind the labelled frame (asserted via aria-label) |
| UT-BRW-01 | Banner copy | "Explore the Divya Kshetrams" → "Browse the 108 Divya Desams" (Complete Sacred Directory eyebrow) |
| UT-ABT-02/03 | NEW | About addendum: CEO desk / 7 circuits / etiquette sections; inquiry modal open→submit→YATRA-XXXX reference |

New suites: **v3Branches.test.jsx** (15 branch cases: tracker %, spy bottom-activation, header
dropdowns/drawer/Escape, browse status+region filters, map locate+nearest list, CEO photo
URL/reset, modal open/Escape/dismiss). Quality gates: TC-QA-01 Pass (0 errors; 4 accepted
warnings) · TC-QA-02 Pass (**205/205 tests, 20 suites**; 90.4/83.0/88.1/91.6) · TC-QA-03 Pass
(342.5 kB gzip initial; Leaflet lazy unchanged) · E2E **19/19**. Execution recorded in TER v2.0.

## Version 1.7 — Sanity CMS Content Pipeline (2026-09-25)

US-CMS-01. Content moved to `app/src/data/content/*.json` behind unchanged module
shims; new contracts:

| ID | Case | Contract |
|---|---|---|
| UT-CMS-01 | Data conversion lossless | All 4 data suites (integrity/enrichment/dossiers/saints) pass unchanged against the JSON-backed shims — 108/12/27/93-record invariants intact |
| UT-CMS-02 | Photo src storage | Dossier photo `src` now site-relative (`photos/x.jpg`) or absolute https; pinned regex updated; `assetUrl()` prefixes BASE_URL for relative paths and passes http/data/blob through |
| UT-CMS-03 | assetUrl unit cases | 3 cases: BASE_URL prefix (+leading-slash normalization), absolute/inline passthrough, nullish passthrough |
| UT-CMS-04 | Round-trip (offline) | `studio/scripts/verify-roundtrip.mjs --local`: app JSON → CMS shapes → simulated GROQ → app JSON — all 11 files canonically equal |
| UT-CMS-05 | Sync self-test (fixture) | `app/scripts/sync-content.mjs --fixture scripts/__fixtures__/sync-response.json --check` exits 0 with zero content diffs (key-order-only writes normalized 2026-09-25) |
| UT-CMS-06 | Sanity schema | `sanity schema validate` — 0 errors / 0 warnings (150 documents: kshetram/azhwar/acharya + about/siteCopy/config singletons) |
| UT-CMS-07 | Site-copy extraction | Hero, page banners, About chrome, inquiry-modal copy, header dropdown/drawer copy and footer moved verbatim to `site-copy.json`; all 19 e2e + page suites still pin the same strings |

*End of Addendum — TCS-108K-008 v1.7*

---

## Version 1.8 — Home Page Design Refresh Contract Updates (2026-09-27)

Implementation of the PO-approved home mockup (refresh-2026-09). Layout
contracts moved with the design; behavioral contracts unchanged:

| ID | Change | Detail |
|---|---|---|
| UT-HOME-01 | Nalayira line | Renders **exactly once** on Home (hero invocation stack, top-right) — was asserted absent since PO round 3; reinstated by the approved mockup in a new decorative slot |
| UT-HOME-01 | Tracker count | "Your yatra — N of 106" headline → progressbar contract: `role="progressbar"`, `aria-valuenow`, `aria-label "N of M kshetrams visited"`; no inline percentage label |
| UT-HOME-02 | Hero CTA | "Explore the 108 Kshetrams" → **"Explore Kshetrams"** (site-copy.json `hero.cta`, PO request) |
| TC-02 | Home cards | Home featured grid uses **`.featured-card`** (new large-card anatomy); `.kshetram-card` remains Browse-only |
| TC-13 | Visited/reset | Home tracker assertions move to the progressbar `aria-label` contract; reset flow unchanged (quiet "Reset progress" under the bar) |

New components: `FeaturedKshetramCard.jsx` (home-only large card).
Quality gates: TC-QA-01 Pass (0 errors; 5 accepted warnings) · TC-QA-02 Pass
(**209/209 tests, 21 suites**; 92.08/82.53/87.38/93.41) · TC-QA-03 Pass ·
E2E **19/19**. Execution recorded in TER v2.9.

*End of Addendum — TCS-108K-008 v1.8*

## Version 1.9 — Plan your Yatra Contract Updates (2026-09-30)

PO round-7 changes to the Yatra Atlas (TER v2.16). Data contracts
unchanged; layout/behavioral contracts moved in lockstep:

| ID | Change | Detail |
|---|---|---|
| UT-MAP-01 | Page title | h1 "Map of the Divya Desams" → **"Plan your Yatra"** (`site-copy.json map.title`; fixture updated, round-trip lossless) |
| UT-MAP-02 | Temple matrix | The card section is no longer GPS-gated: region `aria-label "Temples in view"` lists every filtered desam as a card in a `sm:2/xl:3`-column grid below the map, WITHOUT distance lines; after a mocked `getCurrentPosition`, all cards carry "{km} km away" (nearest-first) |
| UT-MAP-02 | GPS clear | Clearing location removes only the distance lines — cards persist (was: whole section unmounted) |
| UT-TRP/TC-14 | Popup CTA | Marker popup "Open page" solid button → gold `#96731F` text link **"Show Temple"** (e2e asserts `/show temple/i`) |
| TC-02/TC-15 | Nav merge | Header "Map" + "My Yatra" pills → one **"Plan Yatra"** pill (`/map`, active on `/map`, live trip badge); mobile drawer "Sacred Map" + "My Yatra Route" merge likewise (e2e asserts `/plan yatra 3/i`) |
| UT-MAP-01 | Ornament | Header ornament icon = gopuram artwork thumbnail left of "Divine Abodes / Timeless Grace", vertically centred on the title line |

Quality gates: TC-QA-01 Pass (0 errors; 5 accepted warnings) · TC-QA-02 Pass
(**212/212 tests, 21 suites**; 90.57/83.34/84.68/91.81) · TC-QA-03 Pass ·
E2E **19/19**. Execution recorded in TER v2.16.

*End of Addendum — TCS-108K-008 v1.9*

---

## Version 1.10 — Kshetram Detail Restyle to the PO Mock (2026-10-01)

PO round-16 changes to `/kshetram/:id` (TER v2.24). Data contracts
unchanged; the tab/heading contract moved in lockstep:

| ID | Change | Detail |
|---|---|---|
| UT-DTL/TC-08 | Section headings | "Basic Shrine Profile" → **"Shrine at a glance"**; Visit-info panel h2 → **"Plan your darshan"**; Location panel h2 → **"Find the temple"**; "Deities & Consorts"/"Sthala Puranam & History"/"Visuals & Media" → sentence case per mock |
| UT-DTL | Tab deep links | The seven-tab switcher now syncs to the URL hash (`#location` etc.); unknown/celestial-forbidden hashes fall back to Overview |
| UT-DTL | Mangalasasanam | Azhwars-Who-Glorified chips → **"Explore the Azhwars"** links; per-Azhwar chips → count pills ("Name · N"); verse titles "Azhwar — Work" → "Azhwar · Work"; word-by-word meanings render as a glossary table |
| UT-DTL | Yatra hooks | Trip/visited toggles announce via a page status toast; hero buttons use the mock's pill styling (`variant="kxd"`) |
| TC-16 | Tab walk | Asserts the round-16 headings; "not yet documented yet." fallbacks unchanged (≥3) |

Quality gates: TC-QA-01 Pass (0 errors; 4 accepted warnings) · TC-QA-02 Pass
(**223/223 tests, 21 suites**; 89.96/81.26/85.44/91.43) · TC-QA-03 Pass ·
E2E **19/19**. Execution recorded in TER v2.24.

*End of Addendum — TCS-108K-008 v1.10*

---

## Version 1.11 — Kshetram Detail UX-Audit Compaction (2026-10-01)

PO round-17 audit applied to `/kshetram/:id` (TER v2.25). Data contracts
unchanged; heading/wording contracts moved in lockstep:

| ID | Change | Detail |
|---|---|---|
| UT-DTL/TC-08 | Media panel heading | "Visuals & Media" → **"Sacred features & resources"** (tab label stays "Media") |
| UT-DTL | Visit-info empty state | Four "not yet documented yet." rows collapse to **"Additional travel and darshan details are not yet documented."** when all four blocks are absent; partial data keeps rows reading "Not yet documented." |
| UT-DTL | Visit-info notes split | `timings.notes` darshan lines → "Special darshan timings"; Ekadasi/festival sentences → "Festival note" |
| UT-DTL | Sticky tabs | Tab rail pins under the 64px header with scroll-into-view activation; hash deep links, roving focus and panel unmount semantics unchanged |
| UT-DTL | Overview content | Intro = factual `profile.location`; Moolavar/Thaayar names dossier-first (reconciles the Overview/Deities mismatch) |
| TC-16 | Assertions | Tab walk uses the new headings; the collapsed not-yet-documented note replaces the per-row fallback |

Quality gates: TC-QA-01 Pass (0 errors; 4 accepted warnings) · TC-QA-02 Pass
(**223/223 tests, 21 suites**; 89.98/81.47/85.76/91.58) · TC-QA-03 Pass ·
E2E **19/19** · Visual gate **12/12** · Measured hero 400px @1280 (audit
target 360–400). Execution recorded in TER v2.25.

*End of Addendum — TCS-108K-008 v1.11*

## Version 1.12 — Azhwar + Acharya Detail kxd Restyle (2026-10-01)

PO round-18 restyle of `/azhwar/:id` and `/acharya/:id` to the shared kxd
theme (TER v2.26). Data contracts unchanged; interaction contracts added
in lockstep:

| ID | Change | Detail |
|---|---|---|
| UT-AZW-03 | Hash-synced tabs | The five-tab rail syncs to the URL hash: `#hymns`/`#places`/`#media`/`#sources` deep links activate on mount, unknown hashes are ignored, tab clicks write the hash, `hashchange` is followed. Tests reset `window.location.hash` in `beforeEach` (jsdom window is shared) |
| UT-AZW-03 | Tab activation | Arrow keys and clicks route through `activateTab` (roving focus, hash write, rAF-deferred panel scroll-into-view) |
| UT-AZW-03 | Restyled panels | Same roles/text/hrefs on kxd primitives; word-by-word meanings render as a `.glossary` table (heading text unchanged); "Key moments", epithet chips, birth facts, verse band, sources row and prev/next nav contracts unchanged |
| UT-ACH-03 | Restyled dossier | Section ids 01–07 and titles unchanged ("Life & Miracles" etc.); fact sheet = kxd fact rows; "Read the full chronology" disclosure, pending markers, guru/sishya chip hrefs and pada/commentary headings unchanged |
| TC-18/TC-19 | E2E | Pass unchanged against the restyled pages |

Quality gates: TC-QA-01 Pass (0 errors; 4 accepted warnings) · TC-QA-02
Pass (**226/226 tests, 21 suites**; 90.43/81.69/86.03/92.13) · TC-QA-03
Pass · E2E **19/19** · Visual gate **7/7** · Measured h1 56px Source
Serif 4 + 17/28 DM Sans on both pages; 0px horizontal overflow at
1280/390. Execution recorded in TER v2.26.

*End of Addendum — TCS-108K-008 v1.12*

## Version 1.13 — Azhwar Detail Poigai-Mock Restyle (2026-10-01)

PO round-19 recreation of `/azhwar/:id` to the five-screen poigai mock
(TER v2.27). Data contracts unchanged; wording/interaction contracts
moved in lockstep:

| ID | Change | Detail |
|---|---|---|
| UT-AZW-03 | Verse band | "Discover the opening verse" / "Read verse & meaning" → **"The lamp of knowledge"** band with an **"Explore hymn & meaning"** jump button |
| UT-AZW-03 | Hymns tab | Commentary heading **"Theological commentary & anubhavam" → "Commentary & anubhavam"**; "Listen ↗" → **"Find recitations"** pill (same hrefs); word-by-word meanings render as sidebar glossary rows; MEANING block falls back to the dataset significance |
| UT-AZW-03 | Places tab | "View kshetram" moved from the retired birthplace card to the featured desam card (href = first desam with a wiki image, e.g. `/kshetram/kanchi-varadaraja`); "Explore all N" → **"Browse all N desams"** pill; celestial desams grouped under a "Celestial Divya Desams" card |
| UT-AZW-03 | Retired round-11 rows | Breadcrumb next-azhwar pill, birthplace/sacred-places cards and "Sources & Sampradaya Texts" summary button are gone (absorbed into the Places/Sources tabs); hero crumb is a plain path |
| UT-AZW-03 | Unchanged | Hero text/stats/birth facts, epithet chips, "Key moments" heading + timeline events, story expander, media "Search on YouTube ↗" hrefs, sources texts, hash-synced tabs + roving focus, prev/next nav, portrait alt/placeholder |
| TC-18 | E2E | View-kshetram asserted on the Sacred places tab; band jump uses "explore hymn & meaning" |
| Saint components | Contracts | SaintVerse/SaintMedia/SaintSources/SaintKeyMoments branch tests updated to the new names (SaintMedia gains optional name/photo/onSeeSources props) |

Quality gates: TC-QA-01 Pass (0 errors; 4 accepted warnings) · TC-QA-02
Pass (**226/226 tests, 21 suites**; 90.43/81.85/85.95/92.16) · TC-QA-03
Pass · E2E **19/19** · Visual gate **7/7 vs the PO mockups** · Measured
hero 372px, display h2 40px, portrait 240px; 0px overflow at
1440/1280/390. Execution recorded in TER v2.27.

*End of Addendum — TCS-108K-008 v1.13*

## Version 1.14 — Azhwar Detail Consistency Pass (2026-10-01)

PO round-20 refinement of `/azhwar/:id` against the Srirangam kshetram
reference (TER v2.28). Data contracts unchanged; layout/wording contract
moves:

| ID | Change | Detail |
|---|---|---|
| UT-AZW-03 | Profile | Birth facts render beneath the identity with short values (birthplace = pre-"—" name); the full birthplace narrative + district render in the Life panel; epithet chips → subdued "Also known as" text (no interactive styling) |
| UT-AZW-03 | Headings | Section headings at the shared 32px kxd scale (the 40px round-19 display size removed); hero 56px and Tamil treatment unchanged |
| UT-AZW-03 | Lamp band | "The lamp of knowledge" renders on the Life tab only; the "Explore hymn & meaning" jump remains (TC-18 reordered accordingly) |
| UT-AZW-03 | Hymns | Transliteration lines split on the dataset "/" markers; Tamil line breaks preserved; glossary + commentary disclosures unchanged |
| UT-AZW-03 | Media | Full-width discourse rows; one shared search-behaviour note; iconography below the rows ("Search on YouTube ↗" link names and hrefs unchanged) |
| UT-AZW-03 | Sources | Uniform "Open repository ↗" labelled links on every row (dataset-derived hrefs unchanged); reading guidance collapsed behind a disclosure |
| TC-18 | E2E | Band jump asserted on the Life tab before the Sacred-places switch; all other steps unchanged |

Quality gates: TC-QA-01 Pass (0 errors; 4 accepted warnings) · TC-QA-02
Pass (**226/226 tests, 21 suites**; 90.45/81.61/86.00/92.18) · TC-QA-03
Pass · E2E **19/19** · Interactive validation **18/18** · Visual gate
**14/14** (before/after per width; Srirangam cross-checked at 1280/1440).
Execution recorded in TER v2.28.

*End of Addendum — TCS-108K-008 v1.14*

## Version 1.15 — Azhwar "Philosophy & legacy" Alignment (2026-10-01)

PO round-21 alignment of the azhwar Life tab's lower half to the mock
crop (TER v2.29). Data contracts unchanged; wording/structure moves:

| ID | Change | Detail |
|---|---|---|
| UT-AZW-03 | Philosophy & legacy | The tint callout pair becomes a 32px serif section with "Role & bhakti bhava" / "Sampradaya preservation" h3 sub-heads over plain text (same dataset fields) |
| UT-AZW-03 | Era & contemporaries | The one-line "Era · …" note becomes an aside block with gold-caps rows — Traditional chronology (`period`), Academic chronology (`era.academic`), Contemporaries (`era.contemporaries`) — over hairline separators |
| UT-AZW-03 | New test | Pey renders both sections with dataset text (branch coverage for the era rows) |

Quality gates: TC-QA-01 Pass (0 errors; 4 accepted warnings) · TC-QA-02
Pass (**227/227 tests, 21 suites**; 90.45/81.52/86.00/92.18) · TC-QA-03
Pass · E2E **19/19** · Visual gate **4/4 vs the PO crop**. Execution
recorded in TER v2.29.

*End of Addendum — TCS-108K-008 v1.15*

## Version 1.16 — Acharyas Directory Consistency Restyle (2026-10-02)

PO round-22 consistency restyle of `/acharyas` (TER v2.30) with the
directory primitives shared by `/azhwars`. Data contracts unchanged;
layout/interaction contract moves:

| ID | Change | Detail |
|---|---|---|
| UT-ACH-02 | Header | DirectoryHeader intro: full-width mobile text (no 60% clamp), 38px mobile title / 16px lead, desktop gopuram watermark only; era jump links "Early masters" / "Age of Ramanuja" / "Later acharyas" anchor to section ids with the sticky header cleared (scroll-margin 76px) |
| UT-ACH-02 | Entries | 27 standardized PersonEntry articles: serif English name, gold Mukta Malar Tamil name, 16px summary, Period/Guru metadata rows (14px labels; guru absent → "Not specified"), horizontal hairlines only (vertical divider + lotus junctions removed); sections keep the dataset eraGroup labels |
| UT-ACH-02 | Portraits | One 3/4 top-anchored frame (72px mobile / 104px desktop); dataset-only resolution (5 wiki images), restrained PortraitFallback tile otherwise — no invented portraits |
| UT-ACH-02 | Links | One unique-named "View profile — {name}" ProfileLink per entry (44px target, gold focus ring); whole-row overlay + "Read story" duplicate stops retired |
| UT-AZW-01/02 | Coordination | Azhwar cards adopt DirectoryHeader (full-width mobile intro), PortraitFallback and ProfileLink ("Explore profile — {name}", overlay retired); the "N Divya Desams" secondary deep link is unchanged and independently usable |
| New suite | directory.test.jsx | Branch tests for DirectoryHeader slots, PersonEntry field omissions/portrait resolution, PortraitFallback and ProfileLink naming (useWikiImage mocked — no network) |
| TC-19 | E2E | Era jump-link click asserted (URL hash `#later-acharyas`, heading in viewport) before the profile-link navigation; all other steps unchanged |

Quality gates: TC-QA-01 Pass (0 errors; 4 accepted warnings) · TC-QA-02
Pass (**237/237 tests, 22 suites**; 90.52/81.70/86.26/92.26) · TC-QA-03
Pass · E2E **19/19** · Visual gate **7/7** (before/after per width +
focus-ring crop). Execution recorded in TER v2.30.

*End of Addendum — TCS-108K-008 v1.16*

## Version 1.17 — Home / Map / About Coordinated Restyle (2026-10-02)

PO round-23 coordinated restyle of `/`, `/map` and `/about` on the shared
design foundation (TER v2.31). Dataset unchanged; contract moves:

| ID | Change | Detail |
|---|---|---|
| Shared | UI primitives | New `ui.css` + `components/ui/` (Button/ButtonLink variants, Dialog with focus containment/return/Escape, Field/SearchField/FilterSelect, SectionHeading, ContactDetails); all gradient controls replaced by solid maroon / outlined / tertiary |
| Shared | Directory reuse | Home/map/about render in the `.dir` scope (DM Sans English body, Mukta Malar Tamil); new shared `TempleCard` and `PersonPreview` join DirectoryHeader/PortraitFallback/ProfileLink |
| UT-HOME-01..03 | Home | Hero: dark overlay, two actions ("Browse temples" primary, "Plan your yatra" secondary), invocation stack retired; compact My yatra (count/106, bar, one action, reset hidden at zero); 108/106 sentence site-wide; featured grid on TempleCard; person previews with unique profile links; CTAs renamed "View all Azhwars/Acharyas" |
| UT-MAP-01..03, UT-TRP-02/03 | Map | Workspace layout (pane + map); result→marker selection sync; "Fit results" vs "Reset filters"; one result-count presentation; Map/List mobile switch + Filters disclosure; Trip planner (N) in shared Dialog; flag markers + legend for in-trip, gold rings for visited; tile-error/no-result/loading states; distances still optional via location |
| UT-ABT-01 | About | Editorial open sections; nav in reading order (archive → yatras → circuits → team → contact → etiquette); compact Team (fallback portrait, short quote/bio, plain credentials); circuit comparison cards with meta rows + duration-scope note; one ContactDetails block; inquiry dialog with name + ≥1 contact method, preserved circuit, alert-validated delivery confirmation |
| New suite | ui.test.jsx | Button/Dialog/fields/ContactDetails branch coverage (+ TempleCard/PersonPreview in directory.test.jsx) |
| TC-02/14/15/17 | E2E | TC-02 hero actions + article cards; TC-14 result→marker focus → highlighted marker → tooltip → popup; TC-15/17 planner/strip control renames |

Quality gates: TC-QA-01 Pass (0 errors; 6 warnings — accepted set +
same advisories on new dialog effects) · TC-QA-02 Pass (**254/254
tests, 23 suites**; 90.47/81.32/86.29/92.08) · TC-QA-03 Pass · E2E
**19/19** · Visual gate **22/22** (before/after ×4 widths ×3 pages +
zoom/focus/dialog/mobile states). Execution recorded in TER v2.31.

*End of Addendum — TCS-108K-008 v1.17*
## Version 1.18 — Dead-Code Cleanup (2026-10-03)

Repo-wide over-engineering audit (ponytail-audit) found seven components
and two scripts with zero non-test importers, kept alive only by their
own suites. Deleted; their unit cases retire with them. No live page,
route or e2e journey exercised any of them.

| ID | Change | Detail |
|---|---|---|
| UT-TRK-03/04 | **Retired** | ProgressBanner progressbar + confirm-reset tests — component was app-dead (superseded by YatraProgressTracker, home round 23); UT-TRK-01/02/05 unaffected |
| FR-84 (SectionNav) | **Retired** | SectionNav anchor-chip tests in detailV3 + v3Branches — component was page-dead; GalleryLightbox (FR-85) tests remain |
| WikiThumb UTs | **Retired** | detailV2 + detailComponents suites — superseded by useWikiImage/PortraitFallback |
| SearchFilterBar UTs | **Retired** | Superseded by MapPage's own filter pane |
| Badge / SectionHeading (base) UTs | **Retired** | Header badges are plain spans; ui/SectionHeading is the live heading component |
| VisitedBadge | Deleted | No importers anywhere, including tests |
| Scripts | Deleted | make-hero-watermark.mjs (unused; plaque CSS never shipped) and convert-js-to-json.mjs (one-off CMS-rollout migration, complete) |

Quality gates: TC-QA-01 Pass (0 errors; 6 warnings — unchanged baseline)
· TC-QA-02 Pass (**240/240 tests, 23 suites**; coverage
90.37/81.45/86.11/91.87 — branch gate headroom improved) · TC-QA-03
Pass · CMS round-trip 0-diff (no content touched) · E2E **19/19**
unchanged. Execution recorded in TER v2.32.

*End of Addendum — TCS-108K-008 v1.18*
## Version 1.19 — Azhwars Page Restyle (2026-10-03)

PO round-24 restyle of `/azhwars` onto the /kshetrams design system
(TER v2.33). Dataset unchanged; one site-copy field added
(`azhwarsPage.noDesamsNote` — the Madhurakavi zero-desams note, mirrored
in the sync fixture and studio schema). Contract moves:

| ID | Change | Detail |
|---|---|---|
| UT-AZW-01 | Intro | Compact Browse-style intro (eyebrow / Cormorant heading / Tamil subtitle / lead / desktop-only gopuram watermark); ordinal badges and the decorative invocation stack removed |
| UT-AZW-02 | Cards + actions | KshetramCard interaction rules: 300ms rise, opaque-gold hover border, gold "View profile" link (18px radius token, deepens on card hover, 2px arrow shift, motion-reduce guarded) with unique "View profile — {name}" accessible names; desam links keep the `?azhwar=` deep link (11 — Madhurakavi's zero-desams note replaces the empty-result link); object-contain portraits; full-wrapping hymn titles; left-aligned bios |
| TC-10 | E2E | Unchanged — 12 cards, first desam deep link pre-filters browse |

Quality gates: TC-QA-01 Pass (0 errors; 6 baseline warnings) · TC-QA-02
Pass (**240/240 tests, 23 suites**; 90.37/81.47/86.11/91.87) · TC-QA-03
Pass · CMS round-trip 0-diff · E2E **19/19** · Visual gate **8/8**
(4 widths + zoom200 + hover + focus + zero-desams note; before ×2 from
live). Execution recorded in TER v2.33.

*End of Addendum — TCS-108K-008 v1.19*
## Version 1.20 — Acharyas Page Restyle (2026-10-03)

PO round-25 restyle of `/acharyas` onto the /kshetrams design system
(TER v2.34), mirroring the round-24 /azhwars treatment. Dataset
unchanged; no site-copy changes. Contract moves:

| ID | Change | Detail |
|---|---|---|
| UT-ACH-02 | Intro + era nav | Browse-style compact intro (eyebrow / Cormorant heading / lead / quiet desktop watermark); era jump links become scope-pill anchors with dataset counts (6/9/12) and a gold selected treatment; sections keep ids/fragnents and `scroll-margin-top` |
| UT-ACH-02 | Cards | Horizontal kshetrams-system cards: object-contain portraits (5 photos + 22 quiet emblem fallbacks), Cormorant 26px names, full bios, Period/Guru `dl` rows (verbatim, "Not specified" preserved), gold "View profile" action lower-right, 300ms hover rise + button deepen + 2px arrow shift, motion-reduce guarded; ordinal badges removed |
| UT-ACH-02 | New cases | Era pill sets `aria-current` on click; IntersectionObserver tracks the topmost visible era while scrolling (IO mocked in jsdom) |
| Deleted | PersonEntry + DirectoryHeader | Zero non-test importers after the restyle; 6 test blocks retired with them; PortraitFallback/ProfileLink/PersonPreview remain in service |
| TC-19 | E2E | Unchanged — pill names still substring-match, anchor click → URL fragment + heading in viewport |

Quality gates: TC-QA-01 Pass (0 errors; 6 baseline warnings) · TC-QA-02
Pass (**235/235 tests, 23 suites**; 90.42/81.25/86.15/91.88) · TC-QA-03
Pass · CMS round-trip 0-diff · E2E **19/19** · Visual gate **9/9**
(4 widths + zoom200 + era-active + era-scroll + hover + focus; before ×2
from live). Execution recorded in TER v2.34.

*End of Addendum — TCS-108K-008 v1.20*
## Version 1.21 — Map "Option 3" Rebuild (2026-10-04)

PO round-26 rebuild of `/map` as a full-width map with floating filters
and a results dock (TER v2.35). All planning state logic preserved; one
site-copy pair changed (`trip.emptyTitle` → "Your yatra starts here",
`trip.emptyMessage` → guru-focused chooser line, mirrored in fixture).
Contract moves:

| ID | Change | Detail |
|---|---|---|
| UT-MAP-01..03 | Layout | Title strip (Cormorant "Plan your Yatra" + results summary + "My trip — N stops" opener); full-width map with floating upper-left filter panel, desktop upper-right Fit results / My location, lower-left zoom control, lower-right marker legend (hidden < sm); horizontal results dock (3 across, overflow-x scroll) with Tamil-above-English cards, photo-unavailable fallback, region pills, action tiers, selected-card gold outline |
| UT-MAP-01 | Filters | Reset filters appears only while a filter is active; empty-results copy verbatim from the brief with its own Reset button; mobile List view keeps filters above stacked cards |
| UT-TRP-02/03 | Planner | Opener renamed "My trip"; dialog mechanics unchanged; new empty-state copy ("Your yatra starts here" / "Explore temples" action) asserted |
| UT-MAP-01 | New case | Narrow screens: map controls render inside the filter panel (matchMedia-gated; jsdom defaults desktop) |
| TC-14/15 | E2E | Pass unchanged in flow — control name updates only (My trip opener) |

Quality gates: TC-QA-01 Pass (0 errors; 5 warnings) · TC-QA-02 Pass
(**236/236 tests, 23 suites**; 90.26/81.47/85.86/91.71) · TC-QA-03 Pass
· CMS round-trip 0-diff · E2E **19/19** · Visual gate **9/9**
(4 widths + zoom200 + selected card + empty results + dialog +
mobile-list; selected-marker screenshot withdrawn as unverifiable —
gotcha 37 — with TC-14 as the interactive proof). Execution recorded in
TER v2.35.

*End of Addendum — TCS-108K-008 v1.21*
## Version 1.22 — Map PO Fixes (2026-10-04)

PO round-27 fixes to the round-26 map (TER v2.36):

| ID | Change | Detail |
|---|---|---|
| UT-MAP-01..03 | Results matrix | Horizontal-scroll dock replaced by a wrapping 1/2/3-column grid listing every matching temple on every viewport; the Map/List switch, its state and the list-view inline filter panel removed (one floating panel instance) |
| UT-MAP-01 | Focus action | Visible "Focus on map" action on every card (name-click focus retained); new unit test asserts >100 focus/view-temple stops |
| TC-14/15 | E2E | Unchanged |

Quality gates: TC-QA-01 Pass (0 errors; 5 warnings) · TC-QA-02 Pass (**236/236, 23 suites**; 90.24/81.38/85.84/91.70) · TC-QA-03 Pass · E2E **19/19** · Visual re-gate 1280+375 pass. Execution recorded in TER v2.36.

*End of Addendum — TCS-108K-008 v1.22*
## Version 1.23 — Cluster-Distance Slider (2026-10-04)

PO round-28 request: slider for the map cluster distance, 1–50 km,
default 10 km (TER v2.37). Clustering is now distance-based (greedy
seed grouping, `clusterByDistanceKm` in utils/geo.js, unit-tested) in
place of the 70px screen-space grid; zoom-9 dissolve and trip-scope
exemption unchanged.

| ID | Change | Detail |
|---|---|---|
| UT-MAP-01 | Clustering | New pure `clusterByDistanceKm` describe (5 cases); slider sets the radius, re-clusters live, never moves the map |
| TC-14 | E2E | Unchanged — zoom-until-dissolved flow passes |

Quality gates: TC-QA-01 Pass (0 errors; 5 warnings) · TC-QA-02 Pass (**241/241, 23 suites**; 90.50/81.50/85.27/92.02) · TC-QA-03 Pass · E2E **19/19** · Visual gate **2/2** (slider at 10 km and 50 km). Execution recorded in TER v2.37.

*End of Addendum — TCS-108K-008 v1.23*

## Version 1.24 — About Page "Option 1" Restyle (2026-10-04)

PO round-29 redesign of `/about` on the kshetrams design system (TER
v2.38). Section ids and header deep links unchanged; contract updates
recorded in place per the standing convention.

| ID | Change | Detail |
|---|---|---|
| UT-ABT-01 | Rewritten | Option-1 hero (two-line display heading, CTA hrefs incl. `/kshetrams`), six-link section nav in deep-link id order, purpose rows derived from the dataset, archive explanation + transparency paragraph retained, verbatim contact values |
| UT-ABT-02 | Rewritten | Circuits: first row of 3 shown with ordinals stripped; "Explore all regional circuits" toggles `aria-expanded` and reveals all 6; View-temples region URLs; dataset count/base values verbatim; duration caution present |
| UT-ABT-03 | New | Founder desk: name/role/eyebrow, concise bio, quotation, full-biography disclosure (second paragraph, pillars, base, CEO email), "Inquire us" preserved |
| UT-ABT-04 | New | Etiquette accordions render both titles; guidance and Tamil text present in the document while collapsed |
| UT-ABT-05 | Rewritten | Inquiry dialog: asterisk on the name only (label/rule mismatch fixed), name-required inline `alert` with values preserved, either/or contact rule fires, success reference only after record; preselect string ordinal-free |
| UT-ABT (branches) | Unchanged | v3Branches CEO-photo admin flow, Escape/close dialog paths pass untouched (portrait keeps a local `.dir` wrapper) |
| TC-17 | E2E | Asserts the new hero heading after the Kshetra-Tours nav |

Quality gates: TC-QA-01 Pass (0 errors; 5 warnings) · TC-QA-02 Pass (**243/243, 23 suites**; 89.90/81.15/84.33/91.52) · TC-QA-03 Pass · E2E **19/19** · Visual gate **7/7** after repair loop (1280/768/375 + sticky/anchor/dialog states). Execution recorded in TER v2.38.

*End of Addendum — TCS-108K-008 v1.24*

## Version 1.25 — Homepage "Option 1" Redesign (2026-10-04)

PO round-30 redesign of the homepage (TER v2.39). Routes, stores and the
progressbar contract unchanged; contract updates recorded in place.

| ID | Change | Detail |
|---|---|---|
| UT-HOME-01 | Rewritten | Immersive hero: new eyebrow/display heading, real-text Tamil line (`lang="ta"`), gold "Explore the Kshetrams" → `/kshetrams` + inverse "Plan your yatra" → `/map` |
| UT-HOME-02 | Rewritten | Progress strip from live state: "Begin your yatra" at zero with the visible "0 of 106 visited." equivalent and the 108/106 scope sentence; "Continue your yatra" + real count + Reset after `markVisited`; progressbar aria contract unchanged |
| UT-HOME-03 | Rewritten | Featured grid keeps all four curated temples (incl. Srivilliputhur on the further row) on the shared KshetramCard — 4 overlay links, 4 Add-to-trip, 4 Mark-visited |
| UT-HOME-04 | New | Tradition columns: "Saint-poets of the Tamil Veda" / "The guru parampara" headings, "Explore Azhwars/Acharyas" hrefs, compact PersonPreview profile links (unique names, no overlay stops) |
| UT-HOME-05 | New | Guided-yatra invitation: heading/copy + "Explore guided yatras" → `/about#guided-yatras` |
| TC-02, TC-17 | E2E | New hero heading + actions; Explore Azhwars/Acharyas links in main |

Quality gates: TC-QA-01 Pass (0 errors; 5 warnings) · TC-QA-02 Pass (**246/246, 23 suites**; 90.41/81.97/85.07/92.11) · TC-QA-03 Pass · E2E **19/19** · Visual gate **5/5** after repair loop (1280/768/375 + hero-initial + returning-visitor states). Execution recorded in TER v2.39.

*End of Addendum — TCS-108K-008 v1.25*

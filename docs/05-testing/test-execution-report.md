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

## Version 1.4 — Divya Desam Dossier Population & Content Maintenance (2026-08-31)

Scope: content population rounds after R2 — Divya Desam dossiers #1–#108 curated to 93 shrine templates, 12 Azhwars + 23 Acharyas fully populated from the PO dossiers with all 35 representative verses (commits `1c211a4`, `ef81d87`, `8c6e36b`, `84d7819`, `82f0c1c`); content maintenance — dossier photo repairs, photo wiring, docs clarification (commits `22fa11f`, `3fd7f4a`); two post-delivery PO enhancements — US-TRP-04 (trip route map on the Trip page) and US-MAP-04 (marker hover tooltips on the Map page), refining FR-80/FR-77 journeys without new FRs. Enhancement stories are recorded in the user-stories addendum; their Jira creation is pending a fresh API token (the original token was revoked after the v1.3 sync).

| Suite | Result | Detail |
|---|---|---|
| Static analysis (oxlint) | **Pass** | 0 errors, 1 accepted warning (113 files) — see CRR v1.3 |
| Unit/Component (Vitest + RTL) | **Pass** | 19 suites, **180/180 tests** (3 new for the enhancements: trip route map, celestial-only map suppression, marker tooltips) |
| Coverage (Gate A) | **Pass** | 92.5% statements · 82.8% branches · 91.8% functions · 94.1% lines (threshold 80%) |
| Build (TC-QA-03) | **Pass** | Initial chunk **331.6 kB gzip** (growth vs v1.3's 131.8 kB is the dossier content dataset — 93 full shrine templates); Leaflet remains a lazy chunk **44.9 kB gzip**; the new TripMap follows the MiniMap lazy split — NFR-01/NFR-11 |
| Code review (Gate B) | **Closed** | CRR-108K-006 v1.3: CR-15..18 dispositioned (photo src defects reworked; acharya guru/sishya pending accepted per policy) |
| E2E (Playwright, Chromium) | **Pass** | **19/19 journeys** — TC-14 extended (hover tooltip visible), TC-15 extended (route map renders 3 markers + dashed polyline) |
| CI (GitHub Actions, Linux) | **Pass** | Run 33350286416: lint/unit/build ✓, E2E ✓ (actions/checkout & setup-node bumped v4→v5, clearing the Node 20 deprecation warning) |
| Deploy + Live verification | **Pass** | Run 33350286293 success; all three dossier photographs verified **HTTP 200** on the live site (`photos/desam-86|88|89.jpg` — 86/88 repaired, 89 newly wired) |

### E2E Case Results (maintenance + enhancements, e2e/yatra.spec.js)

| Case | Description | Result |
|---|---|---|
| TC-14 (ext) | Map journey gains a hover-tooltip assertion: hovering a marker shows `.leaflet-tooltip` with the desam name; popup flow unchanged | Pass |
| TC-15 (ext) | Trip journey gains a route-map assertion: `.trip-map` renders with 3 `.leaflet-interactive` elements (markers + dashed polyline); order/share-restore flow unchanged | Pass |

### Defect Log (content population + maintenance)

| ID | Severity | Phase Found | Description | Disposition |
|---|---|---|---|---|
| D-09 | Major | Live-site verification | Dossier photo srcs for desam-86 (Thiruvallur) and desam-88 (Mahabalipuram) contained a leftover `__BASE_URL__` placeholder — broken images on the deployed site | **Fixed** — srcs corrected; data-integrity test now asserts every template photo src resolves under the site base URL with no placeholder |
| D-10 | Minor | Content audit | desam-89 dossier photograph was extracted to `public/photos/` but referenced by no template (its dossier content is covered under duplicate serial #78) | **Fixed** — wired into Thiru Nilathingal Thundam's Moolavar photo strip |
| D-11 | Minor | Documentation review | Reference Content README stated "93 of the 108" without explaining Srirangam's (#1) absence from `dossiers.js` — its full-depth shrine lives in the PO-approved sample template preferred by the enrichment merge | **Clarified** — README records 94/108 full-depth, the deliberate omission, and the wired photo set |
| CR-15..CR-18 | Minor | Code review (Gate B) | See CRR-108K-006 v1.3 | **All dispositioned** before system testing |

**Open Critical/Major defects: 0 → Gate C PASSED (content population + maintenance + enhancements).**

### Known Limitations / Notes (content population + maintenance)

1. 14 site kshetrams remain on V2 region enrichment (Thiruvekka, Uppiliappan, Thiruvazhundur, Kandiyur, Thirumogur, Thirukkulandai, Thiruppuliangudi, Thiruneermalai, Thiruputkuzhi, Thirunindravur, Thiruvidanthai, Sholinghur, Ayodhya, Naimisaranyam) — PO dossiers for them were not supplied; flagged as candidate follow-ups in `Reference Content/README.md`.
2. Acharya detail pages render the "Guru & Sishyas" pending marker for Engalazhwan and Vedanta Desika: the dossier names their guru/sishya (Thirukkurugai Piran Pillan, Nadadur Ammal, Kidambi Appullar), but those personalities are outside the 23-entry acharya dataset and chip links must resolve to dataset ids (UT-ACH-01). Adding entries is a PO decision; the relations are present in the biographical narrative meanwhile (CR-18).
3. Dossier photographs exist only for desams #86/#88/#89 (the only DOCX with embedded images); all other kshetrams use wiki-backed or placeholder visuals.
4. V3 R2-era notes resolved this round: all 35 saint verses now carry original script (supersedes v1.3 note 3); acharya biographies fully populated except the accepted Guru & Sishyas chips above (supersedes v1.3 note 2).

---

*End of Addendum — TER-108K-009 v1.4*

---

## Version 1.5 — Heritage Luxe Redesign + Home PO Revisions Execution (2026-09-10)

### Scope

Two rounds: (1) the Heritage Luxe visual uplift of every surface (UXD v1.3 — tokens, shell, hero, cards, detail/saint/map/trip treatments; look-and-feel only), then (2) the PO's home page revisions (UXD v1.4 — three-line hero with Adisesha sketch watermark, stats band removal, kshetram card thumbnails, Azhwar/Acharya darshan strips).

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (1 documented-accepted `set-state-in-effect` warning, TripPage) |
| Unit tests (Vitest) | 180/180 pass; coverage 92.5% stmts / 82.9% branch (gate 80%) |
| Production build | Clean; sketch asset bundled hashed |
| E2E (Playwright, Chromium) | 19/19 pass (run against the final build) |
| Visual acceptance | Judge-reviewed full-page screenshots: 11 routes × desktop+mobile (round 1) — one systemic mobile-nav overflow found and fixed (nav now scrolls internally); re-review 11/11 pass. Home/browse re-reviewed after the PO changes: card-row alignment fix and nav scroll-hint verified; all pass |

### Defects found & fixed this round

| ID | Severity | Phase Found | Description | Disposition |
|---|---|---|---|---|
| D-12 | Major | Visual review (redesign) | Header nav did not shrink as a flex item on mobile — the rail widened the document to ~570px at 390px viewports (horizontal page overflow on every page) | **Fixed** — `min-width: 0` + internal `overflow-x` scroll on the nav rail; all pages exactly viewport-wide |
| D-13 | Minor | Visual review (PO changes) | Featured-card thumbnail rows staggered when a kshetram name wrapped to two lines | **Fixed** — card link is a flex column with the thumbnail bottom-anchored; image rows align across grid rows |

### Notes

1. Test-contract updates accompany the PO content changes (stats band and hero "Azhwars" CTA intentionally removed): UT-HOME-01/02, the TC-02/03/11 home block and TC-17 assert the new home composition (see TCS v1.4 rows and UXD v1.4 §25).
2. Featured-acharya selection uses Wikipedia portrait coverage as the tie-breaker: Ramanuja and Vedanta Desika articles currently expose no lead thumbnail, so the strip features Nathamuni, Yamunacharya, Pillai Lokacharya and Manavala Mamunigal; revisit if the articles gain page images.
3. Kshetram card thumbnails fetch Wikipedia lead images per title on first view (45 of 108 kshetrams have no `wiki` title and show the documented gold ◆ placeholder) — broader `wiki` coverage remains a PO-owned content follow-up.

---

*End of Addendum — TER-108K-009 v1.5*

---

## Version 1.6 — Saint Template Uplift Execution (2026-09-10)

### Scope

PO-requested saint page revisions (UXD v1.5 §27) applied to both Azhwar and Acharya detail templates: portrait-based Identification (Poigai painting as the PO demo), iconised Contributions, centered Representative Verse in a double gold frame, and a restructured Visual & Media section (iconography | YouTube-style listening cards on top, digital texts full-width below).

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (1 documented-accepted warning, TripPage) |
| Unit tests (Vitest) | 185/185 pass; coverage above the 80% gate |
| Production build | Clean (saint portrait bundled under public/photos) |
| E2E (Playwright, Chromium) | 19/19 pass |
| Visual acceptance | Judge-reviewed screenshots of /azhwar/poigai, /azhwar/nammazhwar (placeholder portrait) and /acharya/manavala-mamunigal at desktop + mobile — pass |

### Notes

1. New unit coverage: Identification portrait rendering (supplied src + placeholder fallback), Poigai portrait/listening-card page assertions.
2. Saint portraits await PO artwork for the remaining saints; the placeholder panel keeps the layout intentional meanwhile.

---

## Version 1.7 — v2 Design Language Rollout Execution (2026-09-10)

### Scope

PO-approved rollout of the mock design language across the live site (UXD v2 §28): eyebrows, DD serial badges, card overlays, Browse region chips, scroll-spy section navs, saint alias chips + definition cards, verse chips/cards, maximized hero sketch, restructured About page with approved PO content.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (1 documented-accepted warning, TripPage) |
| Unit tests (Vitest) | 184/184 pass; coverage 90.7% (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | 19/19 pass |
| Visual acceptance | Judge-reviewed home/browse/detail/about/trip screenshots; two portrait findings fixed (Poigai strip portrait now uses the PO painting; medallion load timing was a capture artifact) |

### Notes

1. Test-contract updates: alias chips replace the joined epithets string (UT-AZW-03, TC-18); About asserts approved PO content instead of pending markers (UT-ABT-01).
2. Manavala Mamunigal's Guru row remains absent by data (Thiruvaimozhi Pillai is outside the 23-entry acharya dataset) — documented PO decision pending; Sishyas renders P.B. Anna.

---

## Version 1.8 — Mock-Parity Additions Execution (2026-09-11)

### Scope

Closing UXD v2.1 additions (§29) to reach full parity with the approved mocks: Browse header with compact yatra tracker, live result count and sort control (Traditional order / Name A–Z / Name Z–A); saint Life History as a 7/5 split with the Chronological Lifeline rail aside; section eyebrows across the saint templates; trip print-ready note. Content and data contracts unchanged.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (1 documented-accepted warning, TripPage.jsx set-state-in-effect) |
| Unit tests (Vitest) | **185/185 pass (19 suites)**; coverage 90.6% statements / 81.4% branches / 90.5% functions / 92.2% lines (gate 80%) |
| Production build | Clean (pre-existing chunk-size advisory only) |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual acceptance | Not separately re-run for this styling-only increment; affected surfaces were judge-reviewed at v1.7 and are covered by the updated unit/E2E journeys |

### Notes

1. New unit case **UT-BRW-05** (sort control orders card headings A–Z; Traditional default) — recorded in TCS v1.4 §10. Contract updates recorded in place: UT-AZW-03/TC-18 (alias chips + definition cards, Life History 7/5 split with Lifeline rail), UT-ABT-01 (About asserts PO-approved copy), TC-04 (browse header tracker/quick-chips/sort).
2. `ProgressBanner` gains a `compact` variant for the Browse header; the Home progress banner is unchanged. Filters and sorting compose; reset behaviour unaffected (UT-BRW-03/04 still green).

---

## Version 1.9 — Acharya Parampara Expansion Execution (2026-09-22)

### Scope

PO decision CR-18 resolved via US-ACH-04 (FR-92 enhancement): the acharya dataset grows 23 → 27 with the four lineage acharyas the dossiers name — Thirukkurugai Piran Pillan, Nadadur Ammal, Kidambi Appullar, Thiruvaimozhi Pillai — so the Guru & Sishyas chips on Engalazhwan, Vedanta Desika and Manavala Mamunigal resolve and the parampara reads unbroken. The four new entries are scaffolds whose own dossiers render the visible pending marker (US-ACH-01 policy). Recorded in TCS v1.5 §11 (UT-ACH-04).

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (1 documented-accepted warning, TripPage.jsx set-state-in-effect) |
| Unit tests (Vitest) | **188/188 pass (19 suites)**; coverage 90.7% statements / 81.9% branches / 90.8% functions / 92.3% lines (gate 80%) |
| Production build | Clean (initial 335.4 kB gzip — pre-existing chunk-size advisory, dossier dataset growth; Leaflet lazy chunk 44.9 kB gzip) |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual acceptance | Not separately re-run for this data-layer expansion; index/detail surfaces are covered by UT-ACH-04 and the TC-19 journey |

### Notes

1. New unit case **UT-ACH-04** pins the expansion: dataset 23 → 27; the pending-lifeHistory set equals exactly the four scaffolded ids; CR-18 wiring resolves (Engalazhwan guru/sishya, Vedanta Desika guru, Manavala Mamunigal guru); Engalazhwan renders resolving Guru & Sishyas chips with no pending marker; the Nadadur Ammal scaffold renders the pending-dossier marker.
2. TC-19's card click was corrected to an ends-with href match (`a[href$=…]`): the exact-match href selector missed the `/108Kshetra/` router basename used by the preview build, and the loose name query stays ambiguous because Thiruvaimozhi Pillai's card role text mentions Manavala Mamunigal.
3. Gates re-executed in full on 2026-09-22 after the project folder was copied to a new machine location; the Playwright Chromium 1.62.1 browser cache was found empty and reinstalled before the E2E run.

---

## Version 2.0 — v3.0 Zip-Parity Rollout Execution (2026-09-24)

### Scope

PO-approved layout parity with the supplied source export across all 11 surfaces (UXD §30),
rolled out gate-by-gate with per-page PO screenshot approval: shell, Home, Kshetram detail,
Browse, Azhwars index/detail, Acharyas index/detail, Map, Trip, About (+ PO addendum: CEO
desk, 7 circuits, etiquette, inquiry modal). Tailwind v4 foundation; legacy CSS retired per
gate (≈190 rules total); test contracts updated where zip copy changed labels.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (4 documented-accepted set-state-in-effect warnings: TripPage, AzhwarDetailPage, useWikiImage, AboutPage) |
| Unit tests (Vitest) | **205/205 pass (20 suites)** incl. 15 new branch-coverage cases; coverage **90.4% statements / 83.0% branches / 88.1% functions / 91.6% lines** (gate 80%) |
| Production build | Clean (Tailwind v4 via @tailwindcss/vite; initial 342.5 kB gzip; Leaflet lazy 44.9 kB) |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual acceptance | Every gate screenshot-reviewed (docs/03-design/gate-shots/, 26 captures incl. dropdowns, modal, celestial + scaffold variants) |

### Notes

1. Contract updates recorded in TCS v1.6: nav labels (108 Temples / My Yatra / Kshetra Tours regex), card trip toggles (+ Trip / ✓ In trip), Visit-status select → checkbox + reset-on-Home (TC-13), map chip index 1 (leading All chip), saint placeholder ◆ → Thiruman watermark, browse banner copy.
2. Regression caught by e2e during the About addendum (missing lucide `User` import crashed the header dropdown on hover) — fixed same gate.
3. Coverage dipped to 77.96% branches mid-close-out; 15 targeted branch tests (v3Branches.test.jsx) restored the gate to 83.0%.

## TER v2.1 — Sanity CMS Content Pipeline (2026-09-25, US-CMS-01)

Deliverable: admin-editable photos/text via a hosted Sanity Studio (free tier) with a
git-based publish pipeline; the public site stays a static GitHub Pages build with zero
runtime dependency on the CMS.

### Execution summary

| Gate | Result |
|---|---|
| Data conversion (UT-CMS-01) | 10 JS data modules → `app/src/data/content/*.json` via scripted export (`convert-js-to-json.mjs`, invariants asserted); module shims keep every import path; **204/205 pre-existing tests green before the single planned regex edit** |
| oxlint | 0 errors (same 4 documented-accepted warnings) |
| Unit tests (Vitest) | **208/208 pass (21 suites)** — 205 preserved + 3 new assetUrl cases |
| Coverage | **92.47% statements / 82.9% branches / 88.2% functions / 93.67% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** after the site-copy extraction (strings moved verbatim) |
| Schema validation (UT-CMS-06) | `sanity schema validate` → 0 errors / 0 warnings |
| Round-trip proof (UT-CMS-04) | Offline: **11/11 content files lossless** (app JSON → CMS doc shapes → simulated GROQ → app JSON) |
| Sync self-test (UT-CMS-05) | Fixture replay `--check` → 0 diffs; repo files normalized to sync key order (cosmetic-only rewrite, re-verified 208/208) |

### Notes

1. The one intentional test edit: dossier photo-src regex (BASE_URL-prefixed → site-relative
   or absolute https), paired with the new `assetUrl()` resolver applied in
   `useWikiImage` + `GalleryLightbox` + CEO photo.
2. Late-found data variants mapped during round-trip debugging: azhwar `bhaktiBhava`,
   saint-verse `translit`/`significance`/`meaning` variants, and azhwar `lifeHistory`
   (initially unmapped) — all now carried 1:1.
3. Live-project verification (`npm run verify` against the real Sanity project) is the one
   remaining gate, by design it needs the PO's account — see the setup checklist in
   `studio/README.md`; watch item: celestial-desam `timings: null` storage fidelity.
4. CI additions: `.github/workflows/content-sync.yml` (repository_dispatch/workflow_dispatch,
   contents:write, concurrency-serialized; commits only after lint+tests+build pass).

---

## Version 2.2 — PO Fix List Round 1 Execution (2026-09-27)

### Scope

PO-supplied small-fix list across Home, About and the Azhwars/Acharyas listing
pages: hero watermark span, hero CTA contrast, 106-kshetram yatra scope,
9:16 strip tiles, CEO desk content corrections, and one-line page leads.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (same 4 documented-accepted warnings) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** — 208 preserved + 1 new earthly-scope tracker case; About CEO assertions updated to the corrected content |
| Coverage | **92.5% statements / 83.02% branches / 88.29% functions / 93.69% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** — TC-13 tracker assertions updated 108 → 106 |
| Schema validation | `sanity schema validate` → 0 errors / 0 warnings (trustee field removed from the about schema) |
| Round-trip + sync self-test | Offline 11/11 content files lossless; fixture regenerated; `sync-content --fixture --check` → 0 diffs |

### Changes covered

1. **Hero (Home)** — the Sangu–Namam–Chakram watermark trio now spans the full
   banner edge-to-edge with the sketch's intrinsic whitespace cropped away
   (boxes flush at ±2px, ink scaled past viewBox padding); the primary CTA
   moved to the site's gold idiom (dark label on gold, bordered) so it is
   clearly distinguishable from the brown gradient title and self-legible.
2. **Yatra progress scope (Home)** — the tracker counts only the 106 earthly
   kshetrams; visited marks on the two celestial abodes (Thiruppaarkadal,
   Paramapadham) no longer inflate the count. `YatraProgressTracker` gained an
   `eligibleIds` scope prop; HomePage derives the earthly set from the data.
3. **Saint strips (Home)** — Azhwar and Acharya photo tiles are 9:16 portrait
   (measured 215×382), replacing the fixed-height landscape tiles.
4. **About CEO desk** — name corrected to Ram Gopalan (heading, quote
   attribution, bio, photo alt); pillar tiles corrected to "106 Divya Desams
   Completed" and "1000+ Pilgrims Guided" / "Over 100+ guided batches";
   Direct Email changed to yatra@kshetratours.com; the location line now
   carries the full Ambattur office address (wraps, no truncation); the
   "Sampradaya Yatra Trustee" line removed end-to-end (AboutPage,
   about.json, studio schema, GROQ projection — kept 1:1 so the CMS sync
   stays diff-free).
5. **Azhwars / Acharyas pages** — banner lead lines render on a single line
   on wide viewports (`xl` one-line pin; narrower screens still wrap).

## Version 2.3 — Responsive Container Alignment Execution (2026-09-27)

### Scope

Developer-initiated layout alignment with the PO's reference site
(kshetratours.com): the content column widens from 1152px (`max-w-6xl`) to
1200px via a named Tailwind v4 container token, matching the reference
site's `.container` while keeping our mobile-first breakpoint ladder and
accessible viewport meta (no `user-scalable=0`). No content, CMS, or
schema changes.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors (same 4 documented-accepted warnings) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** — no width assertions existed |
| Coverage | **92.5% statements / 83.02% branches / 88.29% functions / 93.69% lines** (gate 80%) |
| Production build | Clean — `max-w-site{max-width:var(--container-site)}` verified in emitted CSS |
| E2E (Playwright, Chromium) | **19/19 journeys pass** at the default 1280×720 viewport |

### Deterministic layout measurements (Playwright `getBoundingClientRect`)

| Check | @1920×1080 | @1440×900 | @1280×720 | @1024×768 |
|---|---|---|---|---|
| `main.app-main` width | 1200 (centered) | 1200 (centered) | 1200 (centered) | fluid 1024 |
| footer container width | 1200 | 1200 | 1200 | fluid 1024 |
| Home hero card width | 1152 | 1152 | 1152 | — |
| watermark flush (L/R) | −1.8px | −1.8px | −1.8px | — |
| Azhwars/Acharyas leads | — | — | 13px, one line, no overflow (1152px avail.) | 14px, wraps normally (`xl` off) |

Round-1 geometry preserved: the wider card keeps the watermark trio's
edge-flush span, and the one-line leads gain margin (inner width
1104px → 1152px) while their narrow-viewport wrap behavior is unchanged.

### Changes covered

1. `app/src/styles/zip.css` — `@theme` gains `--container-site: 1200px`
   (content column) and `--container-wide: 1550px` (wide-banner option,
   unused for now).
2. `app/src/App.jsx` — main shell `max-w-6xl` → `max-w-site`.
3. `app/src/components/Footer.jsx` — footer container `max-w-6xl` →
   `max-w-site` (header intentionally stays `max-w-7xl`).

## Version 2.4 — PO Fix List Round 2 Execution (2026-09-27)

### Scope

PO's second fix list: header brand cleanup, hero banner redesign (half
height + PO-supplied plaque watermark), nav font size, two dropdown-menu
behaviour/contrast defects, "106 Temples" relabel, and smaller saint
strips with expanded rosters.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors; 5 warnings — all pre-existing `set-state-in-effect` in files untouched by this change (count verified identical at parent commit) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** — label/strip assertions updated to the corrected content |
| Coverage | **92.5% statements / 83.12% branches / 88.29% functions / 93.69% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| CMS round-trip + sync self-test | Offline 11/11 content files lossless; fixture regenerated after the content edits; `sync-content --fixture --check` → 0 diffs |

### Deterministic verification (Playwright, 1280×720, fonts loaded)

| Item | Evidence |
|---|---|
| 1. Nalayira brand eyebrow | absent from the header brand tile (the same phrase also exists as the hero eyebrow ABOVE the hero title — left in place, flagged to the PO) |
| 2. Hero height | **154.9px vs 310px baseline = exactly 0.50**; invocation pill row removed, description clamped to one line, legacy h1 rule neutralised (see below) |
| 3. Nav font | 13px → **19.5px** (×1.5); dropdown item labels 12px → 18px |
| 4. Hover menus | both dropdown panels rebuilt with a `top-full` + `pt-1.5` hover bridge (the old `mt-1` gap was the dead zone); pointer survives 3px-step sweeps to the items; region chip + CEO-desk clicks land |
| 5. Click contrast | root cause: unlayered `base.css` `a { color: var(--color-primary) }` outranks all layered utilities, forcing saffron onto every nav anchor — white label on the active saffron pill was invisible. Fixed with scoped `.site-header nav a { color: inherit }`; active "Kshetra Tours" label now renders `rgb(255,253,247)` on the dark gradient (measured) |
| 6. Azhwars strip | **12 tiles** (was 4) at **81×144** (was 215×382); strip 547px → 308px; wiki titles added for Nammazhwar, Madhurakavi, Periyazhwar, Andal, Thondaradippodi, Thirumangai (thumbnails verified against the Wikipedia summary API before commit); Kulasekhara/Thiruppaan keep the ◆ no-photo fallback |
| 7. Menu label | "108 Temples" → **"106 Temples"** (desktop pill, mobile drawer, and the dropdown's "Browse All 106 Temples" row); dropdown heading "The 108 Sacred Abodes" and directory counts intentionally still 108 (round-1 semantics) |
| 8. Hero watermark | PO's wooden-plaque photo → `src/assets/hero-plaque-watermark.png` (980×241, transparent, ink #7A2E00) via `app/scripts/make-hero-watermark.mjs` (sharp, one-off, not a dependency): plaque band + artwork rows auto-detected, 4 screw-head dots + 45 speckle components removed, 6 motif components kept (Garuda, Chakra ring + hub, Namam, Shankha, Hanuman); strip spans the full card, vertically centred, 0.09 opacity |
| 9. Acharyas strip | **5 tiles** (was 4): Sri Ramanujacharya added (wiki title verified, photo resolves) between Yamunacharya and Pillai Lokacharya; same 81×144 tile size, strip 308px |

### Layout consequences (documented)

- Single nav row confirmed at 1280 and 1440 (pills need 921px vs 934px
  available at 1280). Below ~1100px the nav wraps to two rows (flex-wrap
  fallback). The Darshan counter pill moved `md:flex` → `2xl:flex` so a
  non-zero visit count cannot re-trigger wrapping at 1280–1535.
- The legacy `h1 { font-size: var(--font-display-2); margin: 0 0 … }` rule
  (unlayered, beats utilities) was silently sizing every h1; the hero title
  now overrides it with `!` utilities. Other pages' h1s unchanged.

### Changes covered

1. `app/src/components/Header.jsx` — brand eyebrow removed; nav font ×1.5
   with compacted pill padding; both dropdowns bridged; "106 Temples" labels;
   Darshan pill gated to 2xl.
2. `app/src/styles/base.css` — `.site-header nav a { color: inherit }` scoped
   override of the legacy anchor rule.
3. `app/src/components/home/Hero.jsx` — half-height banner; plaque watermark
   image replaces the SVG trio; `!` overrides for the legacy h1 rule.
4. `app/src/components/home/SaintStrip.jsx` + `app/src/pages/HomePage.jsx` —
   flex tile row with per-strip responsive widths; all 12 azhwars; 5 acharyas.
5. Content JSONs (CMS-sync-safe value edits; schema/GROQ untouched) —
   `azhwar-details.json` (+6 wiki), `acharyas.json` (+1 wiki),
   `config.json` (FEATURED_ACHARYA_IDS → 5), `site-copy.json`
   (browseAll → 106).
6. `app/scripts/make-hero-watermark.mjs` + `app/src/assets/hero-plaque-watermark.png` —
   one-off asset generator and its output.
7. Tests updated: components.test.jsx, v3Branches.test.jsx, pages.test.jsx,
   e2e/journeys.spec.js.

## Version 2.5 — PO Fix List Round 3 (Items 1–5) Execution (2026-09-27)

### Scope

Home darshan strips restructure (side-by-side 50/50, paired headlines on one
row), hero watermark made fully visible and centred, and the hero's
"NALAYIRA DIVYA PRABANDHAM" eyebrow line removed. Item 6 (header colour
band) is gated on PO design approval and is NOT part of this entry.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (pre-existing class) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** — Nalayira assertions switched to exact-match (the hero description copy still contains the phrase inside a 1-line clamp, which is intended) |
| Coverage | **92.5% statements / 83.12% branches / 88.29% functions / 93.69% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |

### Deterministic verification (Playwright, 1280×720, fonts loaded)

| Item | Evidence |
|---|---|
| 1. Strips 50/50 | both cards measure **564px** wide (50% of the 1152px content row), same top, equal stretched heights (406px); 12 azhwar + 5 acharya tiles |
| 2/3. Headline pairs on one row, same size | "Saint-poets of the Tamil Veda • The Twelve Azhwars" and "The Acharyas • Teachers who received, preserved and expounded the tradition." — both spans **15px**, tops within 3px; the un-paired line renders as an 11px subline; pair wrapped in a semantic h2 |
| 4. Watermark | renders **514×127 fully inside the 128.5px hero** (no crop), horizontally centred (equal side margins measured) |
| 5. Hero eyebrow | exact-text "Nalayira Divya Prabandham" renders **0 elements** on Home (unit + e2e) |

### Changes covered

1. `app/src/components/home/SaintStrip.jsx` — headline-pair API (headlineA/
   headlineB/subline), semantic h2 row, fixed 6-up tile ladder, flex column
   with CTA pinned to the bottom for equal-height cards.
2. `app/src/pages/HomePage.jsx` — strips wrapped in `lg:grid-cols-2`.
3. `app/src/components/home/Hero.jsx` — watermark `h-full w-auto` centred;
   eyebrow removed (hero drops 155px → 128.5px as a consequence).
4. `app/src/pages/__tests__/pages.test.jsx` + `app/e2e/journeys.spec.js` —
   exact-match absence assertions.

## Version 2.6 — PO Fix List Round 3 (Item 6) Execution (2026-09-27)

### Scope

Full-bleed deep saffron gradient band for the header (menu strip) — design
approved by the PO from four presented options. The band runs edge-to-end of
the screen, keeps the sticky behaviour, keeps dropdown panels as cream cards
so they pop against it, and adapts every label/icon color for contrast.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (pre-existing class) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** |
| Coverage | **92.5% statements / 83.12% branches / 88.29% functions / 93.69% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |

### Deterministic verification (Playwright, 1280×720, fonts loaded)

| Check | Evidence |
|---|---|
| Band | `header` background = `linear-gradient(#7A2E00 → #B34700)`, width = viewport (full bleed), gold hairlines crown and foot the band |
| Brand | title renders `rgb(255,253,247)`, hover `#E2C47C` |
| Idle pills | labels cream `rgb(255,253,247)`, hover measures `rgb(226,196,124)` (gold) |
| Active pill | frosted white `bg-[#FFFDF7]/15` + gold ring; active Kshetra Tours pill flips to the gold idiom (`#E2C47C→#C99A2E`, ink label `#4A3005`) because its old dark gradient would vanish against the same-colored band |
| Dropdowns | panels stay cream `#FFFDF7` — they pop against the band; all panel text colors are explicit (verified) |

### Cascade note

The round-2 scoped override (`.site-header nav a { color: inherit }`) made
labels inherit the nav's base color, so the nav wrapper moved to
`text-[#FFFDF7]`; hover colors use the trailing-bang important variant
(`hover:text-[#E2C47C]!`) because the unlayered inherit rule would otherwise
beat the layered hover utility.

### Changes covered

`app/src/components/Header.jsx` — band background + hairlines, cream pill
idiom (idle/active), gold icons, tours pill active-state flip, gold divider,
mobile trip pill and hamburger recolored. No test changes required.

## Version 2.7 — PO Fix List Round 4 Execution (2026-09-27)

### Scope

Twelve-item round: hard single-row nav, 4-tile strips, About single-line
copy, "108 Kshetras" relabel, hero +25% with new description, SVG namaste
icon, About page content removals, and an admin gate on the CEO photo
controls.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (4 pre-existing + 1 new accepted `set-state-in-effect` from the admin-flag sync effect, which legitimately synchronises localStorage → state) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** — circuit count 7→6, Kshetras label, admin-gated URL test updated |
| Coverage | **92.36% statements / 82.85% branches / 88.39% functions / 93.74% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| CMS round-trip + sync self-test | Offline 11/11 lossless; fixture regenerated; `sync-content --fixture --check` → 0 diffs |

### Deterministic verification (Playwright)

| Item | Evidence |
|---|---|
| 1. Nav never wraps | `flex-wrap: nowrap` computed at 1024/1152/1280; one row (center-line spread < 4px) at 1024, 1152, 1280, 1440, 1920 with no overflow. Below xl the pills render at 13px (fits 1024: needs 686px of 698px); xl+ keeps 19.5px |
| 2. Strips | both strips: exactly **4 tiles on one row**, tiles 120×212 |
| 3. About tagline | single line (height 21.4px, 13px font, `xl:whitespace-nowrap`) |
| 4. Menu label | "108 Kshetras" (pill, drawer, "Browse All 108 Kshetras") |
| 5. Hero height | **160.5px vs 160.6 target (= 128.5 × 1.25)** |
| 6. Hero description | new copy renders one line, no clamp, fully visible |
| 7. Namaste icon | SVG `NamasteIcon` replaces the 🙏 emoji in the tracker |
| 8. About eyebrow | "Nalayira Divya Prabandham Series" renders nowhere |
| 9. Admin gate | upload/URL controls absent by default; visiting `/about?admin=1` persists the flag and reveals them (`?admin=0` revokes) |
| 10. Vinnulaga circuit | removed (6 circuits; "6 Regional Pilgrimage Circuits" copy) |
| 11. Inquire copy | "Inquire us" |
| 12. Etiquette lead | single line (21.4px, 13px font) |

### Admin-gate note

The static site has no account system, so item 9 is implemented as a
localStorage flag (`kshetra_admin=1`) set by visiting `/about?admin=1` once.
This hides the controls from ordinary visitors but is not authentication;
a determined visitor could set the flag themselves. Real role-based control
arrives with the Sanity CMS setup.

### Changes covered

1. `Header.jsx` — nowrap nav, responsive pill size (13px → 19.5px at xl),
   "108 Kshetras" labels.
2. `HomePage.jsx` + `SaintStrip.jsx` + `config.json` — 4-tile strips.
3. `AboutPage.jsx` — eyebrow removal, tagline/etiquette single-line, admin
   gate (`isAdminSession` + URL-param sync).
4. `Hero.jsx` + `site-copy.json` — +25% height, new description.
5. `SacredIcons.jsx` + `YatraProgressTracker.jsx` — NamasteIcon.
6. `about.json` — Vinnulaga circuit removed; `site-copy.json` — "Inquire us",
   "6 Regional Pilgrimage Circuits" (×2).
7. Tests: components, v3Branches (labels, 6-circuits, inquire regex, admin
   flag), yatraPages (6 circuits), pages (4-tile strips), e2e journeys.

## Version 2.8 — Split-Pill Single-Line Fix Execution (2026-09-27)

### Scope

PO follow-up to round-4 item 1: the "108 Kshetras" and "Kshetra Tours
(Guided Yatras)" pills occasionally folded their labels onto a second line.
Root cause: with the nav now `flex-nowrap`, flex items compressed under
space pressure, and the two split pills do not use the shared `pillBase`
(so they lacked `whitespace-nowrap`).

### Fix

1. `[&>*]:shrink-0 [&>*]:whitespace-nowrap` on the nav — no child may shrink
   or wrap (labels inherit nowrap).
2. Reclaimed 14px at the lg band edge: brand↔nav gap `lg:gap-4` → `xl:gap-4`,
   parampara divider `mx-1` → `mx-0.5`, tours pill `ml-1` → `ml-0.5`.

### Deterministic verification (Playwright, 10 widths: 1024–1920)

| Check | Result |
|---|---|
| Single flex row (center-line spread) | pass at all 10 widths |
| Pill height ÷ font-size ≤ 2.6 (no internal folding) | pass (max 2.42) |
| Last pill inside the viewport | pass (was −4.6px at 1024, fixed) |
| "108 Kshetras" all spans single-line | pass at all 10 widths |
| "Kshetra Tours" all spans single-line | pass at all 10 widths |

### Gates

209/209 unit · 19/19 e2e · oxlint 0 errors / 5 warnings (unchanged) · build clean.







## Version 2.9 — Home Page Design Refresh Execution (2026-09-27)

### Scope

Implementation of the PO-approved home page mockup
(`docs/03-design/mockups/refresh-2026-09/home.html`, approved this session):
full-bleed photo hero (364px, PO-supplied temple-corridor artwork),
"My yatra" tracker row, large featured-kshetram cards, stacked full-width
Azhwar/Acharya darshan bands (ivory → sandal) with names below the photo
tiles, and the closing ornament. The main shell drops its constrained
container on the home route (`App.jsx`) so the bands run edge-to-edge with
their own `max-w-site` columns; every other route keeps the 1200px column.

### Component changes

| File | Change |
|---|---|
| `app/src/components/home/Hero.jsx` | Rewritten: full-bleed photo hero — headline, Tamil subtitle, one-line description (lg+), gold "Explore Kshetrams" CTA + "View map" link, invocation stack top-right |
| `app/src/components/home/YatraProgressTracker.jsx` | Rewritten: ivory band row — "My yatra" heading, big {count} / {total}, slim bar (fill 0 at zero), helper line, gold "Mark a visit" → Browse, quiet "Reset progress" under the bar (kept: e2e TC-13 reset flow) |
| `app/src/components/home/FeaturedKshetrams.jsx` | Cream band; header eyebrow (vermilion) + 44px display title + right "View all 108 Kshetrams →" link; renders the new large cards |
| `app/src/components/home/FeaturedKshetramCard.jsx` | NEW home-only large card: h-60 photo, "+ Trip / ✓ In trip", DD #N + "247 Pasurams" tags, Tamil + 28px display name + temple + location, footer "View temple details ↗" / "✓ Mark visited". Browse keeps `KshetramCard` unchanged |
| `app/src/components/home/SaintStrip.jsx` | Rewritten: full-width band (`tone` ivory/sandal), left text column (eyebrow + gold rule, 40px display title, lead, outline CTA, optional ornament), 4 tiles with names BELOW photos |
| `app/src/pages/HomePage.jsx` | Stacks the strips full-width (was 50/50 grid), passes eyebrow/title fields to the new anatomy (section label = eyebrow, poetic line = heading), adds the closing ornament |
| `app/src/App.jsx` | Home route main shell drops `max-w-site`/padding/`space-y-10` so the bands are full-bleed |
| `app/src/assets/hero-sunset-lamps.jpg` | NEW: PO artwork converted via `scripts/make-hero-image.mjs` (sharp, 2172×724, 195 KB) |
| `app/src/data/content/site-copy.json` | `hero.cta` → "Explore Kshetrams" (PO request, value-only edit) |

### Copy notes

- Hero CTA label: "Explore the 108 Kshetrams" → **"Explore Kshetrams"** (PO
  request during mockup review).
- "Nalayira Divya Prabandham" renders again as the hero invocation stack
  (top-right decorative slot, together with the invocation line) — it had
  been removed entirely in PO round 3; the approved mockup reinstates it in
  this new position. Unit UT-HOME-01 and e2e TC-02 now assert exactly 1
  occurrence (was 0).
- Tracker copy: "Your yatra — N of 106 kshetrams visited" headline is replaced
  by the big count + "Kshetrams visited" + the "N sacred abodes awaiting your
  darshan" helper line; the count is exposed via the progressbar aria contract.

### Test contract updates

| Suite | Change |
|---|---|
| `pages.test.jsx` UT-HOME-01 | Nalayira exact-match count 0 → 1; "0 of 106" text → progressbar `aria-valuenow`/`aria-label` |
| `pages.test.jsx` UT-HOME-02 | `/explore the 108/` → `/explore kshetrams/` |
| `v3Branches.test.jsx` tracker | Inline `3%` label → `aria-valuenow: 3`; "N of M kshetrams visited" → progressbar `aria-label`; reset-confirm flow unchanged |
| `e2e/journeys.spec.js` TC-02 | Nalayira count 1; `/explore kshetrams/`; home cards `.kshetram-card` → `.featured-card` |
| `e2e/yatra.spec.js` TC-13 | Visited/reset assertions → progressbar `aria-label` contract |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (unchanged set) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** |
| Coverage | **92.08% statements / 82.53% branches / 87.38% functions / 93.41% lines** (gate 80%) |
| Production build | Clean (364 kB gzip initial) |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| CMS round-trip + sync self-test | Offline 11/11 lossless (site-copy value-only edit); fixture regenerated; `sync-content --fixture --check` → 0 diffs |
| Visual gate (implemented build) | 7/7 renders pass (desktop full + mobile full + hero/yatra/featured/azhwars/acharyas) — `docs/03-design/gate-shots/refresh-home/` |

### Deterministic verification (Playwright, production preview)

| Check | Result |
|---|---|
| Hero height | 364px at 1440 / 1920 / 1024 (full-bleed: section width == viewport) |
| Hero description one line | 1 line at 1440 (right edge 1044px, clear of the invocation stack), 1920, 1024; wraps naturally at 768 / 390 (by design, `lg:whitespace-nowrap`) |
| No horizontal overflow | `scrollWidth == innerWidth` at 1440 / 1920 / 1024 / 768 / 390 |
| Gopuram crown fully visible | `object-position: center 20%` — finial complete with ~5% banner height of sky (pixel-scanned on the approved crop candidate) |
| Bands full-bleed | main width == viewport at all widths; 6 stacked bands (hero, yatra, featured, azhwars, acharyas, ornament) |

### Open flag for PO round 5

"Reset progress" is retained as a quiet text link under the tracker bar — the
approved mockup omitted it; it was kept to preserve the TC-13 reset flow and
the user's data control. Drop it on request (one-line removal).

---

## Version 2.10 — Featured Kshetrams Restyle (2026-09-30)

### Scope

Implementation of the PO-approved featured-section mockup (supplied
2026-09-30): the home "Featured Kshetrams" section moves from a 4-across row
of vertical photo-top cards to a **2×2 grid of large horizontal cards**
(photo left, content right). Adds the deity pill and the solid
"View temple →" action, retitles the lead, and drops the DD-serial/pasuram
photo tags (PO confirmed removal). Section header, trip chip text, visited
badge and aria contracts unchanged.

### Component changes

| File | Change |
|---|---|
| `app/src/components/home/FeaturedKshetrams.jsx` | Grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` → `grid-cols-1 sm:grid-cols-2` (2×2, cards ~564px wide in the 1200px column) |
| `app/src/components/home/FeaturedKshetramCard.jsx` | Rewritten: horizontal card (`sm:flex-row`), photo column `sm:w-[44%]` full-height (h-56 photo-top stack below `sm`); DD #/Pasuram tags removed (and `getDDSerial` import dropped); gold hairline under the display name; **deity pill** (`kshetram.deity`, cream + gold border); action row `relative z-10` with solid `bg-[#7A2E00]` "View temple →" (span, ArrowRight) + outlined "Mark visited" (hidden when visited); trip chip restyled cream with `ring-[#E3D2AE]` border; `ExternalLink` → `ArrowRight` |
| `app/src/data/content/site-copy.json` | `home.featured.lead` → "Find your next sacred stop." (value-only edit) |
| `docs/03-design/gate-shots/featured-restyle/` | NEW: 4 gate shots (1440 / 1920 / 390 / visited state) |

### Defect found & fixed during verification

The "Mark visited" action button was intercepted by the whole-card overlay
link (`absolute inset-0 z-0`) — it sat in normal flow below the overlay.
This was latent in the v2.9 card too (the trip chip worked only because it
carries `z-10`). Fixed by lifting the action row (`relative z-10`).
Deterministically reproduced via Playwright click-interception timeout.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (unchanged set) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** — no test-contract changes needed (overlay aria-labels, `.featured-card` count, `+ Trip`/`✓ In trip` pins all survive) |
| Coverage | **92.07% statements / 82.56% branches / 87.38% functions / 93.40% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| CMS round-trip + sync self-test | Offline 11/11 lossless (site-copy value-only edit); fixture regenerated; `sync-content --fixture --check` → 0 diffs |
| Visual gate | 4/4 renders pass vs the PO mockup (1440 / 1920 / 390 / visited) — `docs/03-design/gate-shots/featured-restyle/` |

### Deterministic verification (Playwright, production preview)

| Check | Result |
|---|---|
| Grid shape | 2 rows × 2 cols at 1280 / 1440 / 1920; cards 564px in the 1200px container; no horizontal overflow |
| Photo split | Photo column 247px (44%), full card height (307px); content column right |
| Action row | "View temple" (126px, `rgb(122,46,0)` fill) and "Mark visited" (128px, 1px gold border) on ONE line, ~11px gap — after the px-3.5/gap-2.5 tightening (px-4/gap-3 wrapped at the 263px content width) |
| Anatomy order | Tamil (gold) → 28px display name → 1px hairline → temple (semibold) → location → deity pill ("Ranganatha") → actions |
| Photo tags | 0 DD#/Pasuram tags on featured cards (Browse `KshetramCard` keeps its own) |
| Interactions | Trip toggle `+ Trip` → `✓ In trip` works through the chip; visited toggle works after the z-10 fix; overlay href `/kshetram/srirangam` intact |

### Deltas relayed to PO (dataset-owned, not changed)

Card names render dataset values: "Thiruvengadam (Tirumala)" (mockup shows
"Thiruvenkatam") — per the standing naming decision. Deity pill labels come
from `kshetram.deity`.

---

## Version 2.11 — Explore Page Restyle (2026-09-30)

### Scope

Implementation of the PO-approved Explore mockup (supplied 2026-09-30,
static mockup at `docs/03-design/mockups/explore-restyle-2026-09-30/explore.html`,
visually verified against the reference before build): the /kshetrams page
moves from the ruled-banner + filter-card layout to a display header with
gopuram line-art + quote, a white search/region panel, scope pills, a
collapsed "More filters" disclosure, a serif result count, and restyled
cards. New title/lead copy; browse cards drop the deity pill, pasuram tag
and ◆ fallback (mockup-faithful; detail pages keep everything).

### Component changes

| File | Change |
|---|---|
| `app/src/components/GopuramArt.jsx` | NEW: decorative gold gopuram line-art SVG (currentColor strokes) shared by the page header and card placeholders |
| `app/src/pages/BrowsePage.jsx` | Rewritten: display header (eyebrow + 52px serif title + lead + art/quote at lg+); search + region chips in a white panel ("Vinnulagam" without count); scope checkboxes → exclusive pill buttons All temples / Visited (N) / In my trip (N) with `aria-pressed`; State/Deity-form/Azhwar selects move into a collapsed "More filters" disclosure (labels/aria unchanged); count "Showing N of M kshetrams" → serif "N kshetram(s)" (`.result-count` + aria-live kept); sort control unchanged |
| `app/src/components/KshetramCard.jsx` | Restyled: h-52 photo, "Photo coming soon" placeholder = GopuramArt + caption (replaces ◆), trip chip "Add to trip"/"In trip", DD tag kept, pasuram tag + deity pill dropped, region pill only, action row `relative z-10` (overlay-interception lesson from TER v2.10 applied) with gold `#96731F` "View temple →" + hairline + "◯ Mark visited"; h3 26px with `!` bangs |
| `app/src/data/content/site-copy.json` | `browse.title` → "Explore the 108 Divya Desams", `browse.lead` → "Find a sacred place. Plan your next darshan.", NEW `browse.quote` field |
| `studio/schemas/siteCopy.js` | `browse.quote` field added (pipeline is generic — no GROQ/transform change needed; verified) |
| `docs/03-design/gate-shots/explore-restyle/` | NEW: 3 gate shots (1440 top / 1440 cards / 390) |

### Test contract updates (lockstep)

| Suite | Change |
|---|---|
| `pages.test.jsx` UT-BRW | "showing 108 of 108 kshetrams" → exact "108 kshetrams" (nav-label collision avoided); UT-BRW-02 scoped to `.result-count` via `vi.waitFor` |
| `v3Branches.test.jsx` | checkbox interactions → scope-pill clicks (`Visited (1)` / `All temples` / `In my trip (2)`, exclusive); More-filters disclosure opened before Azhwar/Deity-form selects; count regexes → `^N kshetrams?$` |
| `yatra.test.jsx` | `'+ Trip'` / `'✓ In trip'` → `'Add to trip'` / `'In trip'` |
| `e2e/journeys.spec.js` TC-04..07, TC-10 | count text + exact-match updates; TC-06 clicks "More filters" first |
| `e2e/yatra.spec.js` TC-13 | `getByLabel('Visit status').check()` → click "Visited (1)" pill; expects "1 kshetram" (singular) |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (unchanged set) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** — CI failure on 334a6cd: the rewritten scope-pill test (6 clicks × up-to-108-card jsdom re-renders, ~1.3s local) exceeded the 5s default timeout on 2-core runners; fixed with `delay: null` + explicit 15s timeouts on the two heavy browse tests |
| Coverage | **92.14% statements / 82.79% branches / 87.47% functions / 93.45% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Sanity schema validate | 0 warnings (placeholder project id) |
| CMS round-trip + sync self-test | Offline 11/11 lossless (site-copy title/lead value edits + quote field addition); fixture regenerated; `sync-content --fixture --check` → 0 diffs |
| Visual gate | 3/3 renders pass vs the PO mockup — `docs/03-design/gate-shots/explore-restyle/` |

### Deterministic verification (Playwright, production preview)

| Check | Result |
|---|---|
| Grid | 108 `.kshetram-card`, 3 columns, 368px cards, no horizontal overflow at 1280 / 1440 / 1920 |
| Header | Title one line at 1440 (h1 height 54px after the 52px + narrower art-block tightening; 56px wrapped) — quote block visible at lg+ |
| Card anatomy | 26px display name, hairline, region pill only (deity pill absent), no pasuram tag, DD #1 tag, "Add to trip" chip, "Photo coming soon" placeholder, action row one line (gold `rgb(150,115,31)` button + Mark visited), overlay href intact |
| Interactions | "Visited (0)" pill → count "0 kshetrams"; "More filters" opens; State=Kerala → "11 kshetrams" |

---

## Version 2.12 — Gopuram Illustration in Explore (2026-09-30, PO follow-up)

### Scope

PO supplied a finished gopuram illustration (soft-ivory panoramic, gold-line
temple complex with palms) to replace the GopuramArt line-art SVG in the
browse-card "Photo coming soon" placeholder and in the Explore header's
top-right art slot (quote retained beside it).

### Component changes

| File | Change |
|---|---|
| `app/src/assets/gopuram-illustration.jpg` | NEW: PO artwork converted via `scripts/make-hero-image.mjs` (sharp, 1860×846, 77 KB) |
| `app/src/components/KshetramCard.jsx` | Placeholder now renders the illustration full-bleed (`object-cover`) under the "Photo coming soon" caption; GopuramArt import dropped |
| `app/src/pages/BrowsePage.jsx` | Header art slot now the illustration (216×100, rounded, decorative `alt=""`); GopuramArt import dropped |
| `app/src/components/GopuramArt.jsx` | DELETED (no remaining references) |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (unchanged set) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 2/2 renders pass (header slot + card placeholders) — `docs/03-design/gate-shots/explore-artwork/` |

Deterministic checks: header illustration 216×100 loaded; 108 placeholder
illustrations render under cards (cards with a real Wikipedia photo still
show the photo — unchanged pipeline); quote intact; no horizontal overflow.

---

## Version 2.13 — Explore Watermark Header (2026-09-30, PO follow-up)

### Scope

PO request: promote the gopuram illustration from the small rounded corner
thumbnail to a watermark occupying the right half of the page header, above
the search panel. The image is absolutely positioned (w-1/2, object-contain,
bottom-right anchored, 80% opacity) with a two-axis mask fading its left and
bottom edges into the ivory page; the italic quote floats over its sky area;
the title drops 52px → 48px to keep the PO-approved single line in the
narrower text column. Watermark hidden below lg (unchanged mobile behavior).

### Component changes

| File | Change |
|---|---|
| `app/src/pages/BrowsePage.jsx` | Header restructured to a relative 290px-min block: absolute watermark img (`[mask-image:…intersect]`), left text column `max-w-[52%]`, absolute quote figure at top-right |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **209/209 pass (21 suites)** |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 2/2 renders pass (1440 watermark + 390 mobile) — `docs/03-design/gate-shots/explore-watermark/` |

Deterministic checks (Playwright, production preview): watermark 576×290 in
the right half, bottom edge 21px above the search panel, no horizontal
overflow, title one line (h1 height 50px).

---

## Version 2.14 — Map Page Refresh (2026-09-30, PO-approved scope)

### Scope

PO supplied a Map-page mockup; after clarification the PO approved:
**target = Map page** (the snap; not Trip), **scope = look-and-feel +
light additions** — All/Visited/In-trip scope pills, per-item View temple /
Add to trip / Mark visited actions on the nearest list, and a Fit-all-temples
control. Explicitly excluded (PO decision): sidebar search box, cluster
bubbles, region dropdown. No existing behavior removed: region chips, Show/
Clear my location, tooltips, popups (Open page + trip toggle), Focus and
Directions all unchanged.

### Component changes

| File | Change |
|---|---|
| `app/src/pages/MapPage.jsx` | Rewritten layout: display header (eyebrow, 48px serif title, live count line, lotus "Divine Abodes / Timeless Grace" ornament); two-column `lg:grid-cols-[360px_1fr]` — sidebar with exclusive scope pills (Explore idiom, region-aware counts) + region chips + nearest cards; map column h-640 at lg with **Fit all temples** (`mapApi.fitBounds` over the scoped set, padding 28, maxZoom 12), count badge under it (moved off the Leaflet zoom control after the visual gate caught an overlap), and an on-map legend bar (Temple / Visited / In trip). New `NearestCard` ("Temples in this area · N results"): photo thumb (useWikiImage), serif name, temple/place, km, solid View-temple link, TripControls, Mark-visited toggle (aria-pressed), Focus + Directions. Region legend card retained below |
| `app/src/pages/__tests__/yatraPages.test.jsx` | NEW: scope-pill narrowing test (visited=1 → 1 marker, trip=1 → 1 marker, All restores); Fit-all safe no-op click with the mocked map |
| `app/src/components/__tests__/v3Branches.test.jsx` | Lockstep: nearest-list heading "Nearest Divya Desams from you" → "Temples in this area"; new assertions for the card action set (View temple / Add to trip / Mark visited / N results) |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **211/211 pass (21 suites)** — two tests added |
| Coverage | **92.16% statements / 83.06% branches / 87.36% functions / 93.40% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** (TC-14 map + TC-15 trip contracts intact) |
| Visual gate | 2/2 renders pass after fix — first pass failed: the count badge under the Leaflet zoom control was clipped; badge relocated top-right. `docs/03-design/gate-shots/map-refresh/` |

### Deterministic verification (Playwright, production preview)

| Check | Result |
|---|---|
| Layout | Sidebar 360px + map 766×638 at 1440; 106 `.leaflet-interactive` markers; OSM tiles loaded; no horizontal overflow |
| Controls | Fit-all click is a no-op-safe call with real tiles; badge fully clear of the zoom control (badge.left 1138 > zoom.right 573); on-map legend present |
| Scope pills | Visited/In-trip pills visible; narrowing covered by unit test |

---

## Version 2.15 — Map + Trip Merged: the Yatra Atlas (2026-09-30, PO-approved)

### Scope

PO request: add the sidebar search box, cluster bubbles and region dropdown
to the Map page, and merge the Trip planner's functionality. After
clarification the PO chose **one page replaces both** (the atlas absorbs the
trip planner; the other route redirects) and **the region dropdown replaces
the multi-select chips**. TripPage's full feature set survives inside the
merged page: By region/Route-order views, Order-my-route, Share (?t= links,
now `/map?t=`)/Print/Add temples/Clear, Darshan Done/Remove rows, region
groups with numbered medallions, share-link restore.

### Component changes

| File | Change |
|---|---|
| `app/src/pages/MapPage.jsx` | Rewritten as the merged Yatra Atlas. Sidebar: search box (`matchesSearch` over name/tamil/temple/place/deity/region/azhwars), "All regions" `<select>` (counts in options), exclusive scope pills, nearest cards (GPS-gated). Map: **hand-rolled cluster bubbles** — grid in Leaflet layer space (~70px cells) computed only with a live map instance below zoom 9; multi-point cells render as `Marker` + `L.divIcon` saffron count bubble (click → `flyToBounds`), singles keep the existing CircleMarker/Tooltip/Popup; **In-trip scope never clusters** and draws the dashed route polyline with numbered stop tooltips (view-order aware, reusing `orderNearestFirst`/`legsFor`). Trip section (full width, below): the TripPage body ported (EmptyState when empty; meta via `.trip-page__meta`; notice strip; view chips; rail). Share emits `/map?t=`. `isolate` on the map frame after the visual gate caught Leaflet pane z-indexes covering the sticky header |
| `app/src/App.jsx` | `/trip` → `TripRedirect` (`<Navigate to={{ pathname: '/map', search }} replace>` — legacy share links keep working); TripPage import removed |
| `app/src/components/Header.jsx` | My Yatra pill + drawer link → `/map` (always-idle style; the Map pill carries the active state) |
| `app/src/components/TripPage.jsx`, `TripMap.jsx`, `TripMapInner.jsx` | DELETED (folded into MapPage) |
| `app/src/styles/zip.css` | `.map-cluster__bubble` saffron medallion styles |

### Test contract updates (lockstep)

| Suite | Change |
|---|---|
| `yatraPages.test.jsx` | UT-TRP block rewritten against the merged page at `/map` (empty state inline, share-restore at `/map?t=`, route polyline + numbered tooltips asserted after clicking "In trip (N)", celestial-only trip → no polyline); react-leaflet mock gained `Marker`; region test → dropdown `selectOptions` + new search-narrowing test; mock adds nothing else — cluster code is a no-op under the null map instance so all marker-count contracts survive |
| `e2e/yatra.spec.js` | TC-14: zoom in ×4 past the cluster threshold before hover/tooltip; region via `getByLabel('Filter by region').selectOption('Pandiya Nadu')`. TC-15: My Yatra → `/map`; route via "In trip (3)" (3 markers + polyline = 4 `.leaflet-interactive`); clipboard contains `/map?t=` |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **211/211 pass (21 suites)** |
| Coverage | **90.58% statements / 82.99% branches / 84.74% functions / 91.83% lines** (gate 80%; dipped from 92.16% as TripPage's dedicated tests folded into atlas flows) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 3/3 renders pass after the stacking-context fix — first pass failed: Leaflet panes covered the sticky header at scroll. `docs/03-design/gate-shots/atlas-merge/` |

### Deterministic verification (Playwright, production preview)

| Check | Result |
|---|---|
| Clusters | 10 bubbles at zoom 6 (hybrid: singles remain, like the mockup); dissolve by zoom 8–9 as points separate |
| Search | "kanchipuram" → 1 marker; dropdown "Chola Nadu" narrows (unit-asserted) |
| Trip merge | Seeded 3 stops: meta "3 stops · about 824 km", Order/Share/Clear present; In-trip scope → dashed polyline + 3 numbered markers; `/trip?t=srirangam` redirects to `/map` and shows the restore notice |
| Layout | No horizontal overflow at 1440/390; sticky header above map at all scroll positions (isolation verified) |

## Version 2.16 — Plan your Yatra: Matrix + Merged Nav (2026-09-30, PO round 7)

### Scope

PO fix list on the Yatra Atlas: (a) temple cards must list WITHOUT sharing
location (the old nearest-cards section was GPS-gated and rendered nothing
before "Show my location"); distances only fill in after locating;
(b) the cards move OUT of the sidebar into a full-width matrix BELOW the
map ("remaining cards arranged in row and column"); (c) the header's two
pills "Map" and "My Yatra" (both → `/map` since v2.15) merge into one item
labelled **"Plan Yatra"**; (d) the map-marker popup's solid-saffron
"Open page" button becomes a gold text link **"Show Temple"** (theme gold
`#96731F`, same as the explore "View temple" gold); (e) the header ornament
icon left of "Divine Abodes / Timeless Grace" becomes the PO gopuram
artwork, vertically aligned with the title line; (f) the page title
"Map of the Divya Desams" → **"Plan your Yatra"** (site copy).

NOTE (flagged decision): the PO said "change the icon to the attached one"
but no image file reached the repo, so the PO's own gopuram artwork
(`gopuram-illustration.jpg`, converted in v2.12) is used. Swap on request
when the intended asset arrives.

### Component changes

| File | Change |
|---|---|
| `app/src/pages/MapPage.jsx` | `nearest` memo (GPS-gated, slice 12) → `cardList`: all filtered desams always listed; `km` computed only when `me` is set (then nearest-first sort). Card section moved from the sidebar to a full-width `section[aria-label="Temples in view"]` below the map grid — `ul` grid `sm:grid-cols-2 xl:grid-cols-3` with an empty-filter fallback note; the straight-line-distance footnote renders only when GPS is active. `NearestCard` renders the `{km} km away` line conditionally. Popup link: `btn btn--primary btn--small` "Open page" → gold underlined text link "Show Temple" (`text-[#96731F]!`, hover `#7A2E00!` — bangs beat the unlayered `a {}` rule). Header ornament: lotus SVG → `gopuram-illustration.jpg` thumbnail (h-11 w-16 rounded, ring), block re-homed inside the `h1` wrapper (`right-0 top-1/2 -translate-y-1/2`) so it centers on the title line |
| `app/src/components/Header.jsx` | Desktop nav: "Map" + "My Yatra" NavLinks → one **"Plan Yatra"** NavLink (`/map`, active on `/map`, RouteIcon, live trip badge); unused `MapPin` import removed. Mobile drawer: "Sacred Map" + "My Yatra Route" entries merge into one "Plan Yatra" entry (atlas/distances/itinerary subtitle, badge); the now-empty planner group is removed |
| `app/src/data/content/site-copy.json` + `scripts/__fixtures__/sync-response.json` | `map.title` → "Plan your Yatra" (generic site-copy transform — no GROQ/schema edits, per US-CMS-01) |

### Test contract updates (lockstep)

| Suite | Change |
|---|---|
| `yatraPages.test.jsx` | Heading regex → `/plan your yatra/i`. New test: matrix lists >100 "View temple" cards with NO "km away" before locating; after a mocked `getCurrentPosition`, all cards carry distances (15s timeout — full 108-card render) |
| `v3Branches.test.jsx` | "MapPage extras": heading → region `Temples in view`; after clearing GPS the cards persist but every "km away" line is gone (15s timeout) |
| `e2e/yatra.spec.js` | TC-14: heading regex + popup link `/show temple/i`. TC-15: header pill `/plan yatra 3/i` (merged item carries the badge) |
| `vite.config.js`, heavy suites | CI defect (first push, run 36677374198): the 108-card matrix made every MapPage render exceed the 5s vitest default on the 2-core CI runner — 3 tests timed out (even one explicit 15s). Fix: global `testTimeout: 15_000` + `vi.mock` of `utils/wikiImage.js` in the two atlas-heavy suites so photo-less cards stop firing real Wikipedia fetches during tests (network-dependent and CI-slow; no test asserted fetched images). Gotcha 10 generalized: the heavy-render timeout now lives in the config, not per-test |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **212/212 pass (21 suites)** |
| Coverage | **90.57% statements / 83.34% branches / 84.68% functions / 91.81% lines** (gate 80%) |
| CMS round-trip | `sync-content --fixture --check` 0 diffs (fixture updated with the title) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** (incl. TC-14 popup → "Show Temple" → detail) |
| Visual gate | 3/3 renders pass (top / matrix / popup) — `docs/03-design/gate-shots/plan-yatra/` |

### Deterministic verification (Playwright, production preview)

| Check | Result |
|---|---|
| Popup link | `textContent` "Show Temple", computed color `rgb(150, 115, 31)` = `#96731F` theme gold |
| Matrix | 3 columns at 1440, no "km away" text before locating; count reads "106 results" |
| Nav | Exactly one map-family pill ("Plan Yatra", active) in the desktop header; drawer shows the merged entry |
| Known capture artifact | At zoom ≥ 9 in embedded/headless captures most CircleMarker paths cull to `d="M0 0"` (Leaflet renderer padding) — verified identical on the v2.15 live build; e2e TC-14 exercises the real click path |

## Version 2.17 — Plan Yatra Left-Column Arrangement (2026-09-30, PO round 9)

PO snap: the whole yatra stack — eyebrow, "Plan your Yatra" title, status
line, "Show my location", search, region dropdown and scope pills — moves
INTO the left column beside the atlas (was: display header spanning full
width above the sidebar/map grid). Title drops 44/48 → 36/40px so it keeps
one line inside the 360px column (measured: 1 line, h1 w=360). The GPS
status card joins the column (narrow variant). No behavioral contract
changes — all locators survive; suites re-run green (212/212 unit, 19/19
e2e, lint 0 errors). Gate shot: `docs/03-design/gate-shots/plan-yatra/map-left-stack-1440.png` (no horizontal overflow).

## Version 2.18 — Trip Planner Modal (2026-09-30, PO round 10)

PO request: move the trip planner (the full-width section below the map)
into a MODAL window, opened by a big button spanning the left column; any
in-trip change on the page must reflect in the modal.

### Component changes

| File | Change |
|---|---|
| `app/src/pages/MapPage.jsx` | The planner `<section>` becomes a `role="dialog"` modal (AboutPage ScheduleModal idiom: fixed overlay `z-50`, gold top hairline, Escape + click-outside + ✕ close, `max-w-3xl`, scrollable body). Big gradient opener "My Yatra — Trip Planner" with a live stop-count badge spans the left column below the scope pills (`aria-haspopup="dialog"`). A shared `?t=` link auto-opens the modal with the restore notice. The modal renders from the same `useTrip`/`useVisited` state, so matrix-card adds/removes and the opener badge stay in sync instantly |
| `app/src/pages/__tests__/yatraPages.test.jsx` | Planner tests open the modal first (`openPlanner` helper → dialog assertions); new tests: page matrix "Add to trip" reflects in the modal + opener badge; removing inside the modal updates the badge; Escape closes; `?t=` restore auto-opens the dialog |
| `app/e2e/yatra.spec.js` | TC-15: open planner → assert 3 stops → close → In-trip pill → polyline → reopen → Order my route → Share inside the dialog; the shared-link step asserts the auto-opened dialog with the restore notice |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **213/213 pass (21 suites)** |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | Opener button + populated modal captured — `docs/03-design/gate-shots/plan-yatra/planner-button-1440.png`, `planner-modal-1440.png` |

## Version 2.19 — Azhwar Detail Restyle to the PO Snap (2026-09-30, PO round 11)

PO request: recreate the Azhwar detail page to an attached design snap —
portrait hero with eyebrow/name/Tamil/epithet, pasuram & Divya-Desam stat
row, Birthplace/Birth-star/Divine-amsam icon row (pin/star/conch), a
five-tab dossier (Life & tradition · Hymns & meaning · Sacred places (N) ·
Media · Sources), persistent opening-verse band, Birthplace/Sacred-places
cards, sources summary row, chronological prev/next nav. **Icon contract:
no new icons** — lucide BookOpen/MapPin/Star/Search/ArrowRight/Chevron* plus
the existing TempleGopuramIcon/ShankaIcon/ThirumanIcon sacred icons.
Content decision (PO-confirmed): the snap's condensed phrases are not in
the dataset, so the layout renders existing azhwar-details.json fields
(lifeHistory heading/paragraphs, timeline when/event as key moments,
verse.significance as the band's meaning); counts are dataset-derived
(Poigai: 100 pasurams / 12 Divya Desams — matches the snap).

### Component changes

| File | Change |
|---|---|
| `app/src/pages/AzhwarDetailPage.jsx` | Full rewrite. Breadcrumb + next-azhwar pill (prev on azhwar 12); hero (280px portrait via `SaintPortrait`, derived eyebrow — "The first/second/third of the Mudhal Azhwars" for orders 1–3 — epithet + remaining-alias chips, derived lead); stat row; birth-facts grid (amsam cell hidden when absent); **net-new accessible tabs** (`role="tablist"/tab/tabpanel`, arrow-key roving focus — no tab precedent existed); Life tab = first lifeHistory block + "Read the complete life story" expander (remaining blocks + legend) + bhakti/preservation cards + era line, KEY MOMENTS aside; Hymns tab = SaintVerse + works list; Places tab = desam pills + `.chip--more` browse-all; Media/Sources as before; verse band "Read verse & meaning" → Hymns tab, "Find recitations" → archive.org search; cards; sources row → Sources tab; bottom prev/next (falls back to "← All Azhwars") |
| `app/src/components/saint/SaintPortrait.jsx` | New: portrait + Thiruman-watermark fallback extracted from Identification (shared) |
| `app/src/components/saint/Identification.jsx` | Refactored to compose SaintPortrait (Acharya page unaffected) |
| `app/src/components/saint/SaintKeyMoments.jsx` | New azhwar-only KEY MOMENTS rail; `SaintTimeline` untouched for the Acharya page |
| `app/src/pages/__tests__/saintPages.test.jsx` | Azhwar block rewritten (8 tests): hero assertions, tab switching, story expander, verse-band jump, recitation link, placeholder portrait, madhurakavi amsam-hidden, unknown-id |
| `app/e2e/yatra.spec.js` | TC-18 → snap flow (hero stats, KEY MOMENTS, verse-band → hymns tab, next/prev nav) |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **216/216 pass (21 suites)** |
| Coverage | **90.22% statements / 82.39% branches / 85.14% functions / 91.53% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 4/4 renders pass (hero / full / hymns tab / 390 mobile; no horizontal overflow) — `docs/03-design/gate-shots/azhwar-restyle/` |

---

## Version 2.20 — Azhwars Front Page Recreated to the PO Snap (2026-10-01, PO round 12)

PO request: recreate the Azhwars index page (`/azhwars`) to an attached design
snap — UI design refresh only, **no functionality changes**. Saint-poet gallery
hero: "SAINT-POET GALLERY" eyebrow, 60px serif title (one line at 1512),
unparenthesised Tamil subtitle, short lead, gopuram watermark top-right with a
stacked "DIVINE PLACES ETERNAL GRACE" caption, right-aligned lotus +
"Traditional order" rule. Cards: numbered badge (01–12), square portrait
(Wikipedia image via `useWikiImage`, Thiruman-watermark fallback — Kulasekhara
and Thiruppaan resolve no image), centred Tamil (gold) over English (maroon)
name, lotus divider, 2-line dataset note, Primary-Work | pasurams stat band,
CTA row pinned to the card foot: gold "Explore profile →" pill + underlined
"N Divya Desams →" link keeping the pre-filtered-Browse deep link
(`/kshetrams?azhwar={id}`) that the old chips row carried. Gallery footer
strip: "ALWARS | DIVYA DESAMS | ETERNAL INSPIRATION".

### Scope decisions

- **Whole-card overlay link preserved** (`.azhwar-card` count contract kept for
  e2e TC-10); non-interactive card blocks carry `pointer-events-none` so
  overlay clicks pass through (caught by TC-18's click-through, matching the
  old card's idiom).
- **Chips row replaced by the snap's CTA row**: per-desam chips and the
  "+N more" link are gone; the "N Divya Desams →" link carries the same
  `/kshetrams?azhwar=` deep link (TC-10 updated to click it). Direct
  kshetram-chip navigation from the index is therefore dropped per the snap —
  restore on PO request (round-6-style flag).
- **Avatharam/Star/amsam/period/epithet rows dropped per the snap**; all fields
  remain on the detail dossier.
- **Site copy updated to the snap** (eyebrow "Saint-Poet Gallery", Tamil
  without parentheses, lead "Discover their lives, hymns and sacred places.")
  in app `site-copy.json` + `sync-response.json` fixture together —
  `sync-content --fixture --check` stays 0-diff. The snap's condensed card
  notes ("Born on a lotus in Kanchipuram…") remain **not** in the dataset;
  cards render `azhwars.json` `note` (dataset-mapped, same decision as round 11).
- Existing assets only: `gopuram-illustration.jpg` (Browse hero watermark
  asset), lucide `ArrowRight/BookOpen/FileText`, sacred `LotusIcon/ThirumanIcon`.

### Component changes

| File | Change |
|---|---|
| `app/src/pages/AzhwarsPage.jsx` | Full rewrite to the snap gallery layout |
| `app/src/data/content/site-copy.json` + `app/scripts/__fixtures__/sync-response.json` | azhwarsPage eyebrow/titleTamil/lead per the snap |
| `app/src/pages/__tests__/pages.test.jsx` | UT-AZW-01/02 block updated: 12 h2 headings, pasuram band text, 12 "Divya Desams" deep links, 12 "Explore profile" CTAs + 12 overlay links |
| `app/e2e/journeys.spec.js` | TC-10 clicks the "N Divya Desams" link (replaces `.chip--more`) |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **216/216 pass (21 suites)** |
| Coverage | **90.19% statements / 82.40% branches / 85.11% functions / 91.51% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 3/3 renders pass (desktop full / hero / 390 mobile; no horizontal overflow at 1512 or 390; title one line) — `docs/03-design/gate-shots/azhwars-frontpage/` |

---

## Version 2.21 — Acharyas Index Recreated to the PO Snap (2026-10-01, PO round 13)

PO request: recreate the Acharyas index page (`/acharyas`) to an attached
design snap — UI design refresh only, **no functionality changes**. Guru-
parampara hero over the gopuram artwork watermark (Browse-hero idiom): "THE
GURU PARAMPARA" eyebrow, 56px serif title, line-lotus-line ornament, two-line
lead. Era sections keep the single-source `eraGroup` labels as ruled headings
(heading + lotus + rule; the count pill is dropped per the snap). The card
grid becomes a **two-column parampara roster**: portrait (176×144, Wikipedia
image via `useWikiImage`; photo-less entries render a golden-Shanka radial-
blob fallback — existing `ShankaIcon`, no new asset) beside Tamil (maroon) /
name (28px serif) / `role`, an "Era: … | Guru: …" meta line ("Not specified"
when the dataset has no guru — Nathamuni, per the snap) and a "Read story →"
link. Lotus-centred rules separate roster rows; a thin vertical rule splits
the columns; odd-count sections end on a single left-column row.

### Scope decisions

- **Two dossier links per acharya** (whole-row overlay + explicit "Read
  story") — TC-19's href locator gained `.first()` (strict mode). Non-
  interactive row content carries `pointer-events-none` so overlay clicks pass
  through (the round-12 idiom).
- **Site copy untouched** — the existing `acharyasPage` fields already match
  the snap verbatim; no fixture change this round.
- Era-group count pill dropped per the snap; the era headings themselves are
  asserted by UT-ACH-02 / TC-19 and remain.
- Data mapping unchanged: `tamilName` / `name` / `role` / `era` / `guru` →
  resolved via `getAcharyaById`; all 27 acharyas across the 3 era groups.
- Existing assets only: `gopuram-illustration.jpg` watermark, lucide
  `ArrowRight`, sacred `LotusIcon`/`ShankaIcon`. The snap's sepia temple-
  complex artwork is not in the repo — the existing gopuram illustration
  stands in (swap when the PO asset arrives).

### Component changes

| File | Change |
|---|---|
| `app/src/pages/AcharyasPage.jsx` | Full rewrite to the snap roster layout (pairs chunking, row dividers, Shanka-blob fallback) |
| `app/e2e/yatra.spec.js` | TC-19: `.first()` on the dossier href locator (two links per row now) |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **216/216 pass (21 suites)** — no unit-test changes needed |
| Coverage | **90.23% statements / 82.56% branches / 85.17% functions / 91.53% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 3/3 renders pass (desktop full / hero / 390 mobile; no horizontal overflow at 1512 or 390) — `docs/03-design/gate-shots/acharyas-restyle/` |

---

## Version 2.22 — Acharya Detail Recreated to the PO Mock (2026-10-01, PO round 14)

PO request: refresh the Acharya detail page (`/acharya/:id`) to an attached
mock — UI design refresh, all content and behaviors preserved. The zip cards
give way to **numbered open sections (01–07) with ruled headings**, a hero
**fact sheet** (Period / Names & titles / Birthplace / Divine amsam /
Jayanthi) beside the name block and biography lead, and a sticky **"On this
page" anchor rail** (numbered 01–07, plain-hash anchors). Section 02 renders
the `lifeHistory` blocks in data order (red serif sub-headings) with the
**Chronology of Life Events stepper** (gold numbered circles on a rule,
`timeline.when` labels) inserted after the first block — the full `when/event`
pairs sit behind a "Read the full chronology" expander so no dataset text is
lost; the "Miracles & Historical Events" block parses its "N. Title: text"
paragraphs into **numbered circle items with bold lead-ins**; SaintLegend
follows. Section 03 is the mock's ruled **contribution rows** (Works with
bullets + worksSummary side cell, Sampradaya Preservation, Philosophical
Theme, Associated Divya Desams pills). Section 04 centers the verse (work
line, Tamil, transliteration, outlined **LISTEN** pill keeping the
audio/archive.org href), **Pada & Atham as two side-by-side tables**, and the
three commentary cards. Sections 05–07: lineage chips (Guru:/Sishyas: labels
unchanged), iconography **definition table** beside the listening cards
(same YouTube search links), digital texts, and the numbered sources row.

### Contract notes

- **No data, site-copy or fixture changes.** All dataset fields keep
  rendering; `amsamAcharyaId` / birthplace `kshetramId` links stay in the
  fact sheet; empty visuals fall back to `NotDocumented` (as before), all
  other empty sections keep the visible pending marker (FR-94).
- Tests updated for renamed headings only: "Chronology of Life Events"
  (was "Chronological Life Timeline") in UT-ACH-03 ×2 and TC-19; TC-19's
  "Life History & Miracles" → "Life & Miracles"; TC-19 now opens the
  chronology expander before asserting "Eedu 36000 Padi" (it lives in a
  `timeline.event`, now behind the collapsed expander).
- Long Tamil verse lines get `break-words` — fixed a 390px horizontal
  overflow caught during this round's mobile check.
- Shared components untouched (`SaintVerse`/`SaintMedia`/`SectionNav`/
  `ZipSection` still serve the Azhwar and Kshetram templates); the acharya
  page is self-contained. Existing icons only (`SaintGlyph`, `LotusIcon`,
  `ShankaIcon`, lucide-free).

### Component changes

| File | Change |
|---|---|
| `app/src/pages/AcharyaDetailPage.jsx` | Full rewrite to the numbered-dossier mock layout |
| `app/src/pages/__tests__/saintPages.test.jsx` | Heading regexes ×2 (chronology) |
| `app/e2e/yatra.spec.js` | TC-19: heading regexes ×2 + chronology-expander click |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **216/216 pass (21 suites)** |
| Coverage | **90.26% statements / 81.83% branches / 85.40% functions / 91.59% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 3/3 renders pass (desktop full / hero / 390 mobile; no horizontal overflow at 1512 or 390) — `docs/03-design/gate-shots/acharya-detail-restyle/` |

---

## Version 2.23 — Kshetram Detail Recreated to the PO Mock (2026-10-01, PO round 15)

PO request: redesign the Kshetram detail page (`/kshetram/:id`) to an
attached mock — **design refresh only, no data or functionality changes**.
New shell: "Kshetras / name" breadcrumb; split hero — left block with the
"Divya Desam N · region" eyebrow (enriched `serial`, as the old SerialBadge),
56px serif name, gold Tamil, `temple` subtitle, location-pin row, the
`significance` text as the hero summary, and the yatra/share actions
(TripControls / VisitedToggle / PageActions, unchanged components) | right
temple photo (Wikipedia lead image via `useWikiImage`, gopuram-illustration
fallback) with the mock's "Temple exterior · illustrative" caption. An
**accessible seven-tab section switcher** (Overview · Deities · History ·
Mangalasasanam · Visit info · Location · Media — azhwar-dossier idiom:
`role=tablist`, arrow-key roving focus, panels unmount on switch; visit and
location tabs omitted for celestial desams) wraps the **existing gold-strip
section components completely unchanged** (ShrineProfile, DeityBreakdown,
PuranamHistory, MangalasasanamSection, VisitInfoSection, VisualsMedia, plus
the inline Location panel with map link / MiniMap / NearbyDesams). The
Overview panel adds the mock's "About the temple" block: Moolavar / Thaayar
name cells (dataset-derived) and the "247 pasurams · N Azhwars" stat with an
"Explore the hymns →" button that switches to the Mangalasasanam tab, where
the Azhwars-Who-Glorified chip list now lives. A **"Plan your visit" sidebar**
beside Overview carries the temple timings (Morning/Evening rows + notes +
indicative-timings note), the DistanceFromMe control (its built-in "Get
directions" link) and the mock's "Visits and trips are saved in this
browser." note; the sidebar is omitted for celestial desams.

### Contract notes

- **Zero changes to the six section components and their component tests**
  (`detailV3.test.jsx`, `detailComponents.test.jsx` untouched) — the tabs
  wrap them as-is, so their ZipSection cards render inside the panels.
- **Timings appear twice** (sidebar + Visit Info tab's existing tile) — kept
  deliberately so the Visit Info card set stays component-identical; flag
  for PO if the tab tile should drop.
- The DistanceFromMe control moved from the Location section to the sidebar
  (visible on load, satisfying TC-09 without clicks); the Location panel
  keeps the map link, MiniMap and nearby list.
- Page-level tests (UT-DTL block) rewritten for the tab anatomy — tab clicks
  before per-section assertions, `cleanup()` before the second in-test
  render, celestial assertions extended to the hidden tabs; e2e TC-08's
  heading sweep and TC-16 walk the tabs (map link asserted after switching
  to Location). The old "← Back to all kshetrams" link became the mock's
  "Kshetras / name" breadcrumb.
- No data, site-copy or fixture changes; "Explore the hymns" is in-page tab
  navigation only.

### Component changes

| File | Change |
|---|---|
| `app/src/pages/KshetramDetailPage.jsx` | Full shell rewrite: split hero + sidebar + seven accessible tabs |
| `app/src/pages/__tests__/pages.test.jsx` | UT-DTL block rewritten (9 tests) for the tab anatomy |
| `app/e2e/journeys.spec.js` | TC-08 block + nearby test walk the tabs |
| `app/e2e/yatra.spec.js` | TC-16 walks the tabs |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (accepted set) |
| Unit tests (Vitest) | **217/217 pass (21 suites)** |
| Coverage | **89.74% statements / 81.59% branches / 84.84% functions / 91.12% lines** (gate 80%) |
| Production build | Clean |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 5/5 renders pass (hero / overview full / deities tab / location tab / 390 mobile; no horizontal overflow at 1512 or 390) — `docs/03-design/gate-shots/kshetram-detail-restyle/` |

---

## Version 2.24 — Kshetram Detail Restyled to the Triplicane Mock (2026-10-01, PO round 16)

PO request: "recreate the Kshetram Page exactly" against the standalone
`triplicane.html` design reference — **visual/interaction refresh, no data
changes**. The page keeps the round-15 anatomy (breadcrumb → split hero →
seven accessible tabs → panels) but moves to the mock's flat paper/rust
language: a new page-scoped stylesheet (`src/styles/kshetram-detail.css`,
selectors scoped under `.kxd` so they out-specify the unlayered legacy
element rules without `!important`) carries the mock's palette
(paper `#fffaf0`, rust `#922e0d`, accent `#ae3712`, gold `#a77529`,
hairline `#e8cf9f`, tint `#fbf0dc`), the Source Serif 4 / DM Sans /
Noto Serif Tamil stack (fonts added to `index.html`) and the mock's
responsive/reduced-motion/print blocks. Bootstrap icons → lucide; the site
header, footer and shell are untouched.

### What changed per tab

- **Hero**: 72px serif name, gold Tamil, temple name, pin row, significance
  summary; "Add to trip" (filled) / "Mark as visited" (outline, aria-pressed
  → rust) / Share / Print as mock pills; photo aspect 1.5, right-aligned
  caption. Trip/visited toggles feed a **status toast** ("Added to trip —
  saved in this browser.", auto-clears ~4.5s) via a new optional `onNotify`
  prop; all three action components gained a `variant="kxd"` (default
  appearance unchanged for map popups and other pages).
- **Tabs**: same 7 tabs + roving focus (plus Home/End), now synced to the
  **URL hash** (activate on load, `history.replaceState` on switch,
  `hashchange` listener; unknown or celestial-forbidden hashes fall back to
  Overview).
- **Overview**: intro paragraph (first `puranam.legend` entry) +
  Moolavar/Thaayar pair; tinted "Plan your visit" card (timings rows,
  notes row, indicative note, full-width Get directions, Distance from me
  text button, browser note); "Shrine at a glance" fact sheet replaces the
  Basic-Shrine-Profile tile grid — the dossier posture string's
  "Unique feature:" tail becomes the Distinctive form row. The round-15
  "247 pasurams · N Azhwars" overview cell + "Explore the hymns" button are
  **dropped per mock** (restorable on request).
- **Deities**: two ruled columns; the dossier names blob is parsed into
  Tamil / "Sanskrit:" / "Transliteration:" lines; photo + lightbox kept;
  "Sannidhi photo forthcoming." note per mock; sanctumNote stays a note
  (srirangam's proves it is NOT a "five forms" list — the mock's
  Five-forms section is PO content, flagged).
- **History**: article grid — dossier legend items split at " — " into
  titled story blocks (srirangam's untitled items stay paragraphs),
  "History & inscriptions" timeline, Invasions/Cultural-milestones
  subsections, "Literary references" rows; aside carries the Prathyaksham
  list (split from the comma string) and the significance blockquote.
- **Mangalasasanam**: count pills ("Thirumangai Azhwar · 10"), centered
  verse cards (dataset "*" markers render as line breaks), word-by-word
  meanings as glossary tables, "Commentary" from excerpt significance,
  "Explore the Azhwars" links (replaces Azhwars-Who-Glorified chips);
  legacy `PasuramSection` fallback kept.
- **Visit info**: "Plan your darshan" (big serif timing hours, Festival
  highlight ← `timings.notes`, Getting here ← `profile.location`), "Quick
  facts" card (serial/region/location), "Further visit details" rows with
  the ≥3 "not yet documented yet." fallbacks kept.
- **Location**: "Find the temple" + map grid — Leaflet MiniMap kept (the
  mock's OSM iframe is a standalone-file stand-in) — "Location details"
  aside (address, GPS, Get directions, View on Google Maps) and the
  restyled nearby rows (`.nearby__list` hook kept for e2e).
- **Media**: numbered "What to look for" markers (dossier "Title: body"
  strings split) + "Texts & discourses" resource rows (YouTube-search
  cards + literature).

### Contract notes

- **ZipSection/SerialBadge deleted** — page-dead after the flat restyle
  (the handover had already flagged it as a cleanup candidate).
- Mock-authored copy (intro text, story titles, five-forms list,
  "Distinctive form" prose) is rendered **dataset-mapped** per the
  rounds-11–15 precedent — PO-owned content not in the datasets, flagged.
- Site-copy JSON untouched; `sync-content --fixture --check` stays 0-diff.
- UT-DTL block extended (hash deep links, unknown-hash fallback, celestial
  hash guard, status toast, Home/End roving focus) → **223 unit tests**;
  coverage gate holds (81.26% branches). TC-08/TC-16 heading sweeps
  updated for the mock's sentence-case headings.

### Component changes

| File | Change |
|---|---|
| `app/src/styles/kshetram-detail.css` | NEW — mock CSS scoped under `.kxd` |
| `app/index.html` | Fonts: DM Sans, Noto Serif Tamil, Source Serif 4 |
| `app/src/pages/KshetramDetailPage.jsx` | `.kxd` shell, mock hero/tabs, hash sync, status toast |
| `app/src/components/detail/{ShrineProfile,DeityBreakdown,PuranamHistory,MangalasasanamSection,VisitInfoSection,VisualsMedia}.jsx` | Restyled in place to the mock layouts (props unchanged) |
| `app/src/components/{TripControls,VisitedToggle,PageActions,DistanceFromMe}.jsx` | Optional `variant="kxd"` + `onNotify`; defaults unchanged |
| `app/src/components/NearbyDesams.jsx` | Mock hover rows (nearby__list hook kept) |
| `app/src/components/detail/ZipSection.jsx` | Deleted (page-dead) |
| `app/src/pages/__tests__/pages.test.jsx` | UT-DTL block updated + 5 new round-16 tests |
| `app/src/components/__tests__/detailV3.test.jsx` | Heading/pill assertions for the restyle + bare-excerpt branch test |
| `app/src/components/__tests__/v3Branches.test.jsx` | VisitInfoSection branch test for the split timing layout |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (accepted set) |
| Unit tests (Vitest) | **223/223 pass (21 suites)** |
| Coverage | **89.96% statements / 81.26% branches / 85.44% functions / 91.43% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Visual gate | 10/10 renders pass (triplicane: overview/deities/history/mangalasasanam/visit/location/media + 390 mobile; srirangam overview; paramapadam celestial) — `docs/03-design/gate-shots/kshetram-detail-restyle-16/` |

---

## Version 2.25 — Kshetram Detail UX-Audit Compaction + Calm Header (2026-10-01, PO round 17)

PO supplied a computed-style UX audit of `/kshetram/srirangam` (desktop
1280×720, mobile 390×844) with a concrete spec; every applicable item is
implemented, **scoped to the temple-detail surface except the explicitly
requested header simplification**.

### Typography (measured against the audit's table, scoped via `.kxd`)

Hero title 72→**56px/62px** (mobile 46→**36px/42px**); Tamil 36→**28px/42px**
(mobile **24px/36px**); temple name 29→**22px/30px** (mobile **20px/28px**);
panel h2 44→**32px/40px** (mobile **28px/36px**); section h3 28→**24px/32px**
(mobile **22px/30px**); sidebar h3 31→**26px/34px**; deity names 26→
**24px/32px**; body 18→**17px/28px** (mobile **16px/27px**); tab labels 18→
**16px** (mobile **15px**); Tamil verse line-height 44→**40px**;
transliteration 20→**17px/28px**; notes/labels standardised at **14px/22px**
(mobile 13px/20px). Fonts unchanged (Source Serif 4 / DM Sans / Noto Serif
Tamil); prose widths 58–65ch.

### Layout & navigation

- **Hero compacted** (measured 511→**400px** at 1280): top-aligned columns,
  40px gap, 20px bottom padding, 58ch summary, 8px eyebrow→title→Tamil→
  temple-name rhythm, 12px place→summary, 16px summary→actions. The tab bar
  now sits at document y≈537 — inside the initial 720px viewport (was y≈686
  with a 511px hero). Photo: fixed **300px** height desktop / **200px**
  mobile (was aspect-ratio), radius 12, cover.
- **Hero photo resolution**: `utils/wikiImage.js` rewrites the ~330px lead
  thumbnail URL to a **fixed 1280px** Wikimedia thumb (fixed-width hotlink
  rule preserved; falls back to the original image ≤4000px wide, else the
  summary thumbnail) — the audit's "visibly soft at 540px" complaint.
- **Breadcrumb** 13px with 20px below; the page surface unified with the
  body (`--paper` = body ivory, `.kxd` background transparent — the audit's
  "lighter inner rectangle" removed).
- **Header** (global, per audit item 4): flat `#7A2E00` surface with a
  single 1px gold bottom rule (was gradient + two hairlines + shadow),
  **64px** tall desktop / **56px** mobile, 16px nav labels, 22px/18px logo
  text, text-only idle nav items with one subtle active pill, the
  "Guided Yatras" badge removed from the desktop nav, dropdown/drawer
  behaviour and all tested strings unchanged. Verified on Home + Azhwars
  (visual gate shots 11–12).
- **Sticky tab rail**: the tablist is wrapped in an opaque ivory rail
  (`position: sticky; top: 64px/56px`, z-40 below the sticky header,
  right-edge scroll fade). Tabs 48px tall, 20px/12px gaps, 2px active
  underline (no filled chip). Activation **scrolls the panel into view**
  below the rail when the reader had scrolled past it (rAF +
  `scroll-margin-top`), brings off-screen tabs into view, and keeps
  focus/Left-Right/Home-End semantics; verified in a real browser
  (rail pins at ~70px, panel heading lands just below the rail).
- **Panels**: padding 45/62→**28px/40px**; section rules 24px/32px rhythm;
  paragraph margin 16px. **Overview restructured**: "Shrine at a glance"
  starts under the article column beside the **310px** visit card (was a
  full-width row sized by the sidebar); fact rows keep 12px vertical
  padding.
- **Actions**: 44px min-height, 14px labels, 16px horizontal padding;
  Add-to-trip remains the only filled primary; icons aria-hidden with
  labelled buttons; gold focus-visible rings retained.

### Per-tab changes

1. **Overview**: intro is now the **factual** `profile.location` text (the
   mythological origin prose stays in History); Moolavar/Thaayar names are
   **dossier-first** (`deities.moolavar.names.translit` /
   `deities.moolavar.thaayar.name`), reconciling the audit's
   "Ranganathan (Nam Perumal)" vs "Sri Ranganathan / Periya Perumal"
   mismatch with the Deities tab.
2. **Deities**: the shared temple lead image is **no longer reused** as a
   deity photo — only curated direct-`src` photos render (lightbox kept);
   otherwise "Deity photo not available."; Name/Form/Meaning groups carry
   `.label` headers; the sanctum clarification moved into a tinted callout;
   columns gap 32px.
3. **History**: separate **"Origin legend"** (traditional accounts) and
   **"Temple history"** (historically sourced) headings; the chronology
   prose converts to a **gold-marker milestone list** (splits on ";" or
   sentence boundaries); Invasions/Cultural milestones demoted to h4;
   article width 65ch. Srirangam's Prathyaksham — embedded in a legend
   string — is **extracted into the aside list** (the visual gate caught
   the empty-aside regression; re-gated pass). Untitled legend paragraphs
   are correct where the dossier carries no "Title — body" strings.
4. **Mangalasasanam**: the 11 per-Azhwar pills became a **three-column
   name/count list** (two columns on mobile, 44px rows); verse titles 20px,
   Tamil 22px/40px, transliteration 17px/28px; **"Word-by-word meaning" and
   "Commentary" render as labelled `<details>` disclosures** (verse + Listen
   stay visible; mobile glossary stacks phrase/meaning pairs).
5. **Visit info**: `timings.notes` is split on sentence boundaries —
   darshan lines under **"Special darshan timings"**, Ekadasi/festival
   sentences under a separately labelled **"Festival note"** (no invented
   dates, disclaimer preserved); the four empty "Further visit details"
   rows collapse to **one** "Additional travel and darshan details are not
   yet documented." note (partial data keeps rows reading "Not yet
   documented."); Get directions remains primary.
6. **Location**: map 360px desktop / 260px mobile with a visible tinted
   loading placeholder; nearby rows min-height 52px with right-aligned
   distances (straight-line/approximate labels kept).
7. **Media**: panel retitled **"Sacred features & resources"** (tab label
   unchanged); search rows explicitly labelled "YouTube search" with one
   consolidated lead sentence; resource titles 20px / metadata 14px; no
   invented thumbnails or recordings.
8. **Mobile**: 36px title, 200px photo, sticky rail reachable while
   scrolling; no horizontal overflow (measured + judge-verified).

### Contract notes

- **No data or site-copy changes** — `sync-content --fixture --check`
  0-diff; all new strings are JSX-hardcoded (srirangam's
  "Vishwaroopa darshan…; Ekadasi special" splits at the existing "; ").
- Heading contract moves: "Visuals & Media" → "Sacred features & resources"
  (panel h2); Visit-info fallback wording "not yet documented yet." →
  "Not yet documented." / collapsed note. UT-DTL, detailV3, v3Branches and
  e2e TC-08/TC-16 updated in lockstep (TCS v1.11).
- `WikiThumb`'s stubbed-fetch unit test still passes (the upscale rewrite
  only rewrites `…/thumb/…/NNNpx-…` URLs).
- Not implemented (flagged): real captioned deity/media imagery and cited
  history links remain PO-owned content; the header drawer keeps its
  existing design (the audit's header items target the primary nav).

### Component changes

| File | Change |
|---|---|
| `app/src/styles/kshetram-detail.css` | Audit type scale, compact hero, sticky rail, panels, glossary/mobile, unified surface |
| `app/src/pages/KshetramDetailPage.jsx` | Compact hero, sticky rail + scroll-into-view, Overview restructure, factual intro, dossier-first names |
| `app/src/components/detail/{DeityBreakdown,PuranamHistory,MangalasasanamSection,VisitInfoSection,VisualsMedia}.jsx` | Audit per-tab changes (above) |
| `app/src/components/Header.jsx` | Calm flat header per audit item 4 |
| `app/src/utils/wikiImage.js` | 1280px fixed-width thumbnail rewrite |
| `app/src/pages/__tests__/pages.test.jsx`, `app/src/components/__tests__/{detailV3,v3Branches}.test.jsx`, `app/e2e/{journeys,yatra}.spec.js` | Heading/wording contracts updated |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (accepted set) |
| Unit tests (Vitest) | **223/223 pass (21 suites)** |
| Coverage | **89.98% statements / 81.47% branches / 85.76% functions / 91.58% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Measured vs audit | Hero 400px @1280 (target 360–400); tabs y≈537 (in-viewport); type scale matches the audit table at 1280 and 390; sticky rail pins under the 65px header |
| Visual gate | 12/12 renders pass (7 tabs + mobile + triplicane + celestial + Home/Azhwars header checks) — `docs/03-design/gate-shots/kshetram-detail-restyle-17/` |

## Version 2.26 — Azhwar + Acharya Detail kxd Theme Restyle (2026-10-01, round 18)

PO request: apply the Kshetram detail page's font style and theme (the kxd
paper/rust language and Source Serif 4 / DM Sans / Noto Serif Tamil stack)
to `/azhwar/:id` and `/acharya/:id`. Approved scope: full kxd treatment
(theme + round-17 idiom) with a shared theme stylesheet. **No data or
site-copy changes** — `sync-content --fixture --check` 0-diff.

### Implementation

- **Shared theme extraction** — new `src/styles/detail-theme.css` carries
  the `.kxd` theme primitives moved verbatim from `kshetram-detail.css`
  (palette vars, font stacks, audit type scale h1 56/h2 32/h3 24/h4 21,
  body 17/28, buttons, breadcrumb, hero frame, sticky tab rail, fact
  rows, visit cards, verse cards, disclosures, glossary, milestones,
  markers, resource rows, status toast, responsive/motion/print blocks);
  `kshetram-detail.css` now holds only kshetram-page layout rules;
  measured kshetram output is unchanged (hero 400px, rail y≈537, h1 56px).
- **New `src/styles/saint-detail.css`** (imported last) holds the two
  pages' own layout under `azd-`/`acd-`/generic `pill`/`disc-list`
  class names — no collision with kshetram rules.
- **AzhwarDetailPage** rebuilt under `.kxd`: kxd breadcrumb with next/prev
  `.btn`, split hero (300px portrait column via restyled SaintPortrait,
  56px h1, `.tamil` name, epithet + pill chips, stat row, birth-facts
  grid), **sticky hash-synced five-tab rail** (kxd round-16/17 idiom:
  `activateTab` writes the hash, `hashchange` listener, roving focus with
  scroll-into-view and rAF-deferred panel reveal), panels restyled (life
  = `.article-grid` + Key-moments milestones aside, hymns = verse card +
  glossary table + commentary callouts, places = ruled desam rows, media
  = fact rows + listening rows, sources = disc list), opening-verse band
  and birthplace/sacred-places cards as `.visit-card`s, sources summary
  row button, `.explore` prev/next nav. All asserted roles/text/hrefs
  preserved (TC-18 passes unchanged).
- **AcharyaDetailPage** rebuilt under `.kxd`: identification hero with
  fact-sheet `.fact-row`s and a sticky "On this page" anchor rail; the
  numbered sections 01–07 keep their ids/titles as anchors but sit on
  flat rules with gold serif numerals; Chronology stepper in a visit-card
  with a "Read the full chronology" disclosure; miracles as numbered
  circle items; contributions as ruled label/content rows; representative
  verse in a kxd verse card with pada `.glossary` tables and commentary
  callouts; lineage chips as kxd pills; iconography fact rows, listening
  rows, sources columns. TC-19 passes unchanged.
- **Saint components restyled in place** (same props, same asserted
  text/roles): SaintPortrait, SaintKeyMoments, SaintLegend, SaintVerse,
  SaintMedia, SaintSources; PendingContent/NotDocumented already kxd-hooked
  via `.detail__nodata`. SaintVerse word-by-word meanings moved from tile
  grid to the kxd `.glossary` table idiom (heading text unchanged).
- **Fixes found by the visual gate**: long Tamil verse lines now
  `overflow-wrap: anywhere` (`.tamil` / `.verse .tamil-verse`) after the
  opening-verse band collided with its side column; the acharya
  birthplace district `.note` renders on its own line inside fact rows;
  the chronology stepper wraps on mobile (was 279px horizontal overflow).

### Flagged (PO-owned, unchanged)

- `manavala-mamunigal` "Miracles & Historical Events" packs three miracle
  entries into a single JSON paragraph without "N." prefixes, so they
  render as one numbered item (pre-existing data shape, identical before
  the restyle).
- The old azhwar/acharya mocks (`docs/03-design/mockups/azhwar-detail.html`,
  `acharya-detail.html`) still describe the round-11/14 gold/ivory look;
  no kxd-theme mock exists for these pages (the kxd reference remains the
  triplicane mock / round-17 audit).

### Component changes

| File | Change |
|---|---|
| `app/src/styles/detail-theme.css` | NEW — shared `.kxd` theme primitives (moved verbatim from kshetram-detail.css) |
| `app/src/styles/kshetram-detail.css` | Trimmed to kshetram-page layout rules |
| `app/src/styles/saint-detail.css` | NEW — azhwar/acharya page layout (`azd-`/`acd-` scoped) |
| `app/src/main.jsx` | Import `detail-theme.css` + `saint-detail.css` |
| `app/src/pages/AzhwarDetailPage.jsx` | kxd rebuild + hash-synced sticky tab rail |
| `app/src/pages/AcharyaDetailPage.jsx` | kxd rebuild (anchors/dossier structure kept) |
| `app/src/components/saint/{SaintPortrait,SaintKeyMoments,SaintLegend,SaintVerse,SaintMedia,SaintSources}.jsx` | kxd restyle in place |
| `app/src/pages/__tests__/saintPages.test.jsx` | Hash reset in `beforeEach`; new deep-link/unknown-hash/hash-write/arrow-key tests (226 total) |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (accepted set) |
| Unit tests (Vitest) | **226/226 pass (21 suites)** |
| Coverage | **90.43% statements / 81.69% branches / 86.03% functions / 92.13% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 journeys pass** (TC-18/TC-19 unchanged) |
| Measured | Azhwar: h1 56px Source Serif 4, body 17/28 DM Sans, portrait 300px, sticky rail pins at 64px, tab click writes `#hymns`; Acharya: h1 56px, fact rows + sticky rail, verse card present; 0px horizontal overflow at 1280/390 on both pages |
| Visual gate | **7/7 renders pass** (azhwar desktop life+hymns+mobile, acharya desktop+mobile, kshetram desktop+mobile regression) — `docs/03-design/gate-shots/azhwar-acharya-kxd-restyle-18/` |

## Version 2.27 — Azhwar Detail Recreated to the Poigai Mock (2026-10-01, round 19)

PO request: "Refresh the design of Azhwars detail page exactly the same as
the attached mockups" — five generated desktop mockups
(`poigai-redesign-mockups.zip`: 01-life … 05-sources + design-notes.md)
inspecting every tab of /azhwar/poigai. **Visual/interaction refresh, no
data changes** (`sync-content --fixture --check` 0-diff); built on the kxd
theme from round 18 (same palette, fonts, tab rail, hash behaviour per the
design notes' "keep the current URL hash behavior").

### Implementation

- **Compact shared profile shell** (hymns mock = the reference): portrait
  column 240px, identity block (56px serif name, gold Tamil line, first
  epithet serif, remaining epithets as pills, summary line, pasurams |
  Divya Desams stat row), birth-facts columns (Birthplace / Birth star /
  Divine amsam) with vertical rules to the right. Hero measured 372px
  (was 531px). Breadcrumb is a plain path ("← All Azhwars › Poigai
  Azhwar") — the round-11 next-azhwar crumb pill is retired.
- **Life & tradition**: narrative (dataset first life-history block) with
  a maroon "Read the complete life story" pill, expanded blocks + legend,
  bhakti/preservation callouts and era note; **Key moments** aside is now
  a gold-dot timeline on a connector line (the dataset `when` labels match
  the mock's five moments exactly).
- **Hymns & meaning** (SaintVerse rebuilt): editorial verse reader —
  Tamil excerpt (`white-space: pre-line`), gold-flag TRANSLITERATION and
  MEANING blocks (MEANING falls back to the dataset significance; the
  sidebar "About this verse" only renders when both fields exist),
  maroon "Find recitations" pill — beside a WORD-BY-WORD MEANING glossary
  sidebar (serif word + sans meaning rows); "Commentary & anubhavam"
  accordion rows below (renamed from "Theological commentary &
  anubhavam"); Sacred-works list kept.
- **Sacred places**: "Divya Desams in his hymns" + count subtitle,
  featured desam photo card (first desam whose enriched record has a wiki
  image — gopuram-illustration fallback; "View kshetram" link) beside a
  numbered two-column directory, with the two Celestial desams grouped in
  a tinted "Celestial Divya Desams" card; maroon "Browse all 12 desams"
  pill.
- **Media** (SaintMedia rebuilt): "Listen, learn & contemplate" rows —
  speaker split from the search-title via the dataset's three speaker
  names (Velukkudi Krishnan / Karunakarachariar / Ananthapadmanabhachariar),
  red "Search on YouTube ↗" action (destinations unchanged, nothing
  implies playable recordings) — beside a Sacred-iconography sidebar
  (portrait via `assetUrl`, posture/mudras/garments/shrine rows, digital
  texts with derived repository links, "See sources" tab jump).
- **Sources** (SaintSources rebuilt): "Sources & further reading" rows —
  serif title + gold domain parsed from the "Title — domain" strings,
  external links derived from the dataset domains only (first row gets an
  "Open repository →" pill, the rest circle arrows) — beside the tinted
  "Reading this archive" note card.
- **"The lamp of knowledge" opening-verse band** (persistent): gold lotus
  tile stand-in for the mock's lamp artwork, Tamil verse, work caption,
  significance note and an "Explore hymn & meaning" jump (renamed from
  "Read verse & meaning"). The round-11 birthplace/sacred-places cards
  and sources summary row are retired (absorbed into the Places/Sources
  tabs); the bottom prev/next nav stays.
- Hash-synced sticky tab rail unchanged (rounds 16–19 idiom).

### Flagged (mock-authored copy / PO-owned)

- "The lamp of knowledge" band title, "Reading this archive" note text,
  "Sources & further reading"/"Explore the repositories…" and
  "Listen, learn & contemplate"/"Selected discourses…" titles are
  mock-authored (not dataset fields) — rendered as-is and replaceable via
  future CMS fields.
- Mock source-row descriptions and the condensed verse MEANING wording
  are PO-authored; dataset significance stands in.
- The mock's lamp photograph and places editorial image are generated
  illustrations; the implementation uses the PO-supplied portrait,
  Wikipedia photography and the gopuram fallback per the design notes
  ("replace with a verified photograph before publication").
- The mock featured Srirangam in the places card; the implementation
  features the first desam with an available image (Kanchipuram
  Varadaraja Perumal for Poigai) — deterministic and dataset-driven.
- `manavala-mamunigal`-style miracle/data quirks noted in TER v2.26 are
  unchanged (acharya page untouched this round).

### Component changes

| File | Change |
|---|---|
| `app/src/pages/AzhwarDetailPage.jsx` | Mock shell rebuild (hero, places/sources tabs, lamp band, crumb) |
| `app/src/components/saint/{SaintVerse,SaintMedia,SaintSources,SaintKeyMoments}.jsx` | Rebuilt to the mock layouts (+ `assetUrl` for the media portrait) |
| `app/src/styles/saint-detail.css` | Round-19 azhwar layout classes |
| `app/src/pages/__tests__/saintPages.test.jsx` | Renamed contracts: "explore hymn & meaning", "the lamp of knowledge", commentary heading, places-tab view-kshetram/browse asserts |
| `app/src/components/saint/__tests__/saintComponents.test.jsx` | "Find recitations" link name; "Commentary & anubhavam" heading |
| `app/e2e/yatra.spec.js` | TC-18: view-kshetram via the Sacred places tab; "explore hymn & meaning" |

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (accepted set) |
| Unit tests (Vitest) | **226/226 pass (21 suites)** |
| Coverage | **90.43% statements / 81.85% branches / 85.95% functions / 92.16% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 journeys pass** (TC-18 updated in lockstep) |
| Measured | h1 56px Source Serif 4, display h2 40px, portrait 240px, hero 372px, rail sticky; tab click writes `#sources`; 0px horizontal overflow at 1440/1280/390 across life/places/media tabs |
| Visual gate | **7/7 renders pass vs the PO mockups** (five desktop tabs + two mobile) — `docs/03-design/gate-shots/azhwar-poigai-mock-restyle-19/`; first pass caught the missing MEANING block, a broken media portrait (missing base-path `assetUrl`) and the missing Sources heading, all fixed |

## Version 2.28 — Azhwar Detail Consistency Pass vs Srirangam (2026-10-01, round 20)

PO request: improve /azhwar/poigai using /kshetram/srirangam as the visual
consistency reference — shared cream/maroon/gold language, Source Serif 4 /
DM Sans / Tamil type treatment, shared tokens for width, gutters,
breadcrumbs, headings, tabs, buttons, borders and spacing (already kxd
since rounds 18–19; this pass aligns scale, profile composition, per-tab
layouts and mobile rhythm). **No data changes** (`sync-content --fixture
--check` 0-diff); all source content, Tamil text, routes and links
preserved. Before/after captures per width:
`docs/03-design/gate-shots/azhwar-consistency-20/{before,after}/`.

### Changes

1. **Profile layout** — hero is portrait + identity again; the three
   birth facts moved to a full-width row beneath the identity (top
   hairline, vertical rules) instead of narrow columns beside the title.
   Short hero values: Birthplace = the pre-"—" name ("Thiruvekka
   (Kanchipuram)"); Birth star and Divine amsam render verbatim
   ("Thiruvonam (Sravanam)", "Lord Vishnu's holy conch, Panchajanya").
   The complete birthplace narrative + district moved into the Life &
   tradition panel ("Birthplace · …" note). Epithet chips replaced by a
   subdued "Also known as" text line (no hover styling on static text).
   Nameless birthplace records (kshetramId only) render an em-dash.
2. **Typography** — the 40px `.azd-display` panel headings dropped;
   section headings now the shared kxd h2 (32px, measured equal to
   Srirangam's). Hero 56px title and Tamil treatment unchanged.
3. **Repeated content** — "The lamp of knowledge" band renders only
   inside the Life & tradition panel (removed from the other four tabs);
   the chronological prev/next nav stays after every panel.
4. **Tab layouts** — Life: concise summary (first paragraph of the
   opening block) with the rest of the story + legend behind "Read the
   complete life story". Hymns: Tamil verse keeps its line breaks;
   transliteration split on the dataset's "/" markers into corresponding
   lines. Places: directory numbers align with wrapped titles. Media:
   full-width discourse rows; one shared "searches, not playable
   recordings" note replaces the per-row helper text; Sacred iconography
   moved below the rows as portrait-beside-text (stacked on mobile).
   Sources: uniform labelled "Open repository ↗" links on every row;
   the reading note condensed with the full guidance behind a "Read the
   full guidance" disclosure.
5. **Mobile** — compact hero: 128px portrait beside the identity
   (overriding the shared `.kxd .hero` single-column stacking),
   facts as a tight ruled stack; tab rail reached at y≈880 (was 1318);
   the horizontally scrollable tabs keep the edge-fade overflow cue and
   bring the selected tab into view.

Also fixed a latent round-19 regression: the Acharya media grid lost its
two-column base rule in the stylesheet rewrite (`.acd-media-grid`
restored).

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (accepted set) |
| Unit tests (Vitest) | **226/226 pass (21 suites)** |
| Coverage | **90.45% statements / 81.61% branches / 86.00% functions / 92.18% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 journeys pass** (TC-18 reordered: the band jump now happens on the Life tab before the Sacred-places switch) |
| Interactive validation (Playwright) | **18/18 PASS**: direct hash entry (#hymns), unknown-hash fresh load → Life, tab click writes the hash without growing history, reload keeps the hashed tab, ArrowRight roving focus, 3px gold focus-visible outline, life-story/commentary/reading-guidance expanders, sticky rail at 64px, 36px rail overflow fade, mobile portrait 128px, rail y≈880, selected tab brought into view, 0px overflow @390 |
| Measured hero (before → after) | @390 rail y 1318→880; @768 1225→650; @1280/1440 hero 372→455 (facts row beneath); 0px overflow at 390/768/1280/1440 |
| Visual gate | **14/14 pass** (five tabs × desktop+mobile, before/after delta confirmed, Srirangam 1280/1440 cross-checked: 32px headings, shared palette/rules/rail) — `docs/03-design/gate-shots/azhwar-consistency-20/after/` |

## Version 2.29 — Azhwar Life "Philosophy & legacy" Alignment (2026-10-01, round 21)

PO request (mock crop): align the lower half of the azhwar Life &
tradition tab — "Role & bhakti bhava" / "Sampradaya preservation" as
serif sub-headings over plain text under a "Philosophy & legacy" section,
and the era data as an "Era & contemporaries" aside block with gold-caps
labels over hairline rows. **No data changes** (`sync-content --fixture
--check` 0-diff); the crop's content is Pey Azhwar's dataset text.

### Changes

- **Philosophy & legacy** (`azd-philosophy`): the round-18 tint callout
  pair is replaced by a 32px serif section heading with the dataset's
  `bhaktiBhava` and `preservation` as h3 sub-heads over plain 17px text —
  no cards, no icons. Rendered when either field exists.
- **Era & contemporaries** (`azd-era-block`): new aside block under the
  Key-moments timeline (separated by the shared section rule) mapping
  dataset fields to gold-caps rows: `period` → "Traditional chronology",
  `era.academic` → "Academic chronology", `era.contemporaries` →
  "Contemporaries", each with a hairline separator. Replaces the old
  one-line "Era · …" note.
- Note: the Traditional-chronology row renders dataset `period` values
  from azhwars.json ("6th–7th century CE" for Pey/Poigai) — the mock's
  row is dataset-backed, not authored. Headings "Philosophy & legacy" /
  "Era & contemporaries" and the three row labels are the mock's
  structural labels.
- `SaintGlyph` no longer decorates these headings (the works list keeps
  its glyph); `.azd-callout` remains in use by the Acharya commentary and
  SaintLegend.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (accepted set) |
| Unit tests (Vitest) | **227/227 pass (21 suites)** — new pey test covers Philosophy & legacy + Era & contemporaries |
| Coverage | **90.45% statements / 81.52% branches / 86.00% functions / 92.18% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 journeys pass** |
| Measured | Section h2 32px (28px @390); philosophy column 756px / era aside 271px @1280, stacked @390; 0px overflow at both widths |
| Visual gate | **4/4 pass vs the PO crop** (pey/poigai × 1280/390; an initial fail was the judge working from a stale brief — the Traditional-chronology value is dataset content, confirmed against azhwars.json) — `docs/03-design/gate-shots/azhwar-philosophy-restyle-21/` |

## Version 2.30 — Acharyas Directory Consistency Restyle (2026-10-02, round 22)

PO request: improve `/acharyas` with **consistency as the primary
requirement** — shared typography/colours/spacing/interactions referenced
against `/kshetram/srirangam` and the saint detail pages, and the
directory components coordinated with `/azhwars`. **No data changes**
(`sync-content --fixture --check` 0-diff); all 27 acharyas, their order,
profile routes and the three era groups are preserved.

### Changes

- **Shared directory theme** — new `src/styles/directory.css` scoped
  under `.dir` (imported last in main.jsx): tokens mirror the kxd
  palette exactly (rust `#922e0d` text/actions, accent `#ae3712` hover,
  gold `#a77529`, line `#e8cf9f`, tint `#fbf0dc`); Source Serif 4 for
  English headings, DM Sans for English body/UI, **Mukta Malar** for
  Tamil (per PO; kxd keeps Noto Serif Tamil first). Four reusable
  components in `src/components/directory/`: **DirectoryHeader**
  (eyebrow/serif title/optional Tamil title/lead + hidden-below-lg
  media slot), **PersonEntry** (standardized entry), **PortraitFallback**
  (restrained tinted shanka tile), **ProfileLink** (maroon text link,
  gold focus ring, 44px touch target, unique accessible name).
- **Mobile introduction fix**: the old hero clamped text to
  `max-w-[60%]` at every width — intro now spans the full content width
  on mobile (measured 358px inside 390); the gopuram illustration stays
  an absolutely-positioned desktop-only watermark (no mobile column).
  Mobile title 38px (spec 36–40), lead 16px; desktop 56px/17px (shared
  kxd scale).
- **In-page era jump links**: "Early masters" / "Age of Ramanuja" /
  "Later acharyas" anchor to `#early-masters` / `#age-of-ramanuja` /
  `#later-acharyas` (explicit mapping from the dataset eraGroup labels;
  unmapped groups fall back to a slugged id). `scroll-margin-top: 76px`
  clears the sticky header; smooth scroll under
  `prefers-reduced-motion: no-preference`; all groups always rendered.
- **Standardized PersonEntry** (×27): English serif name (21/24px,
  wraps naturally), Tamil name (gold Mukta Malar), 16px contribution
  summary (`role`), metadata rows **Period** (`era`, 15px) and **Guru**
  (resolved `guru` id → name; "Not specified" when absent) with 14px
  gold labels, then a single "View profile →" link. Two-column roster
  ≥640px, one column below; subtle horizontal hairlines only — the
  central vertical divider and the repeated lotus row junctions are
  removed; section headings keep the dataset eraGroup label plus a
  muted count.
- **Portrait framing**: one 3/4 top-anchored frame everywhere — 72px
  beside the identity on mobile (spec 64–80), 104px spanning the entry
  on desktop. Portraits resolve only from the dataset (5 Wikipedia
  slurs: Nathamuni, Yamunacharya, Ramanuja, Pillai Lokacharya, Manavala
  Mamunigal); the other 22 show the restrained fallback tile. No
  historical portrait is generated or invented.
- **Duplicate keyboard stops removed**: the whole-row overlay link and
  the "Read story" link are retired in favour of one ProfileLink per
  entry with a unique accessible name ("View profile — {name}").
  Azhwars cards get the same treatment ("Explore profile — {name}";
  whole-card overlay retired) while keeping the approved round-12 card
  gallery; the "N Divya Desams" secondary link remains independently
  usable with its pre-filtered Browse deep link.
- `/azhwars` coordination: DirectoryHeader (same mobile intro fix),
  PortraitFallback behind photo-less portraits, ProfileLink CTAs. The
  `font-display` Cormorant headings and stat band on azhwar cards are
  unchanged (flag below).

### Flags for PO review (not inferred)

- **Guru "Not specified"** renders for Nathamuni (lineage founder),
  Kidambi Appullar and Thiruvaimozhi Pillai (`guru` absent in
  acharyas.json) — relationships are not guessed.
- **Field-name asymmetry**: acharyas.json carries the period string as
  `era`, azhwars.json as `period`; both directories label it "Period".
  Consider unifying the field name in a content round.
- **Acharya portraits**: no `photos[]` exists for any of the 27 — the
  5 wiki images + 22 tiles are stand-ins; real captioned imagery
  remains PO-owned content.
- **Azhwar cards** deliberately keep the round-12 gallery (card grid,
  Cormorant headings, work/pasuram stat band) — the PersonEntry roster
  idiom applies to /acharyas; /azhwars adopted the shared header,
  profile link and portrait-fallback primitives only.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 4 warnings (accepted set) |
| Unit tests (Vitest) | **237/237 pass (22 suites)** — new `directory.test.jsx` (9 branch tests); UT-ACH-02 and UT-AZW-01/02 updated in lockstep |
| Coverage | **90.52% statements / 81.70% branches / 86.26% functions / 92.26% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 journeys pass** — TC-19 extended: era jump-link click lands on `#later-acharyas` with the heading in viewport |
| Measured | @390: title 38px, lead 16px full-width (358px), 1 column, portrait 72px, profile-link height 44px; @768: 2 columns, portrait 104px; @1280/1440: title 56px, watermark shown, 2 columns; **0px horizontal overflow at all four widths**; longest name ("Thirukkurugai Piran Pillan") wraps and fits; jump click → hash `#later-acharyas`, section top at 76px, all 3 groups + 27 entries still rendered; keyboard path to the first profile link has no duplicate stops |
| Visual gate | **7/7 pass** (acharyas 390/768/1280/1440, azhwars 390/1280, focus-ring crop) — `docs/03-design/gate-shots/acharyas-directory-22/{before,after}/` (before captured from live `300a8e9`) |

## Version 2.31 — Home / Map / About Coordinated Restyle (2026-10-02, round 23)

PO request: improve `/`, `/map` and `/about` as **one coordinated update**
with consistency against `/kshetram/srirangam` and the person pages as the
primary acceptance requirement. **No dataset changes** (`sync-content
--fixture --check` 0-diff); site-copy gained fields (hero.ctaSecondary,
progressScope, about anchors/labels, circuit meta labels) with the fixture
updated in lockstep.

### Shared design foundation

- **New `src/styles/ui.css`** (imported last): the site-wide control
  language — solid maroon primary `#922e0d` (hover `#7a2e00`), outlined
  secondary, plain tertiary, on-photo inverse variant, 44px targets,
  gold focus rings, shared form fields (16px text), scope pills, dialog
  chrome and the in-trip flag marker. All gold/orange **gradients on
  controls are retired** (hero CTA pill, trip-planner opener, modal top
  strips, TripControls pill, trip-stop chips).
- **New `src/components/ui/`**: `Button`/`ButtonLink` (variant prop),
  `Dialog` (Escape, overlay click, **focus containment + focus return**,
  scrollable mobile body), `fields.jsx` (`Field`/`SearchField`/
  `FilterSelect`), `SectionHeading`, `ContactDetails` (labelled rows +
  copy affordances, placeholders suppress copy).
- **Directory components reused on the new pages** (all three pages now
  render inside the `.dir` scope): `TempleCard` (new shared temple-card
  foundation: 3/4 top-anchored photo, English name → Tamil name, View
  temple / Add to trip / Mark as visited), `PersonPreview` (new shared
  person tile: directory portrait framing + PortraitFallback + English
  name → Tamil name + unique "View profile" link), `PortraitFallback`,
  `ProfileLink`. `TripControls` restyled to the shared pill (names/aria
  unchanged).
- Home/map/about English body text measures **DM Sans** (Tamil falls
  through to Mukta Malar); headings **Source Serif 4** — verified
  computed styles on all pages.

### HOME

- Hero: reliable dark overlay (solid dim base + left scrim) behind the
  text; exactly two actions — primary "Browse temples", secondary
  "Plan your yatra" (copy updated in site-copy + fixture). Retired as
  decorative clutter: the top-right invocation stack, the italic
  display description line and the gold gradient CTA.
- "My yatra" compacted to one calm row: serif label, `0 / 106` count,
  slim progress bar, one primary "Mark a visit" action. **Reset
  progress** is a secondary management action, rendered only when
  progress > 0 (native confirm retained). The progressbar contract
  (aria-label "{n} of {total} kshetrams visited") is unchanged.
- **108/106 sentence** (`SITE_COPY.progressScope`): "The archive holds
  108 Divya Desams — yatra progress and the map cover the 106 terrestrial
  shrines." — rendered verbatim on home and /map (verified identical).
- Featured grid uses shared `TempleCard` + `SectionHeading`; strips use
  `PersonPreview` with CTAs renamed to **"View all Azhwars" / "View all
  Acharyas"**.

### MAP

- Planning-workspace layout: left pane (sticky, internally scrollable)
  with compact header, search, region select, All/Visited/In-trip pills
  (names unchanged), location controls, outlined "Trip planner (N)"
  action and the **result list**; large map beside it.
- **Result/marker synchronization**: clicking a result's name (or its
  "Focus on map" action) flies to the temple and outlines the row
  (selected marker: maroon fill, 4px gold stroke — verified in
  map-selected.png).
- **"Fit results"** bounds the current filtered set; the distinct
  **"Reset filters"** action (pane + empty state) restores all temples.
- One result-count presentation ("N of 106 terrestrial desams shown")
  in the header and the on-map badge; concise on-map legend (Temple /
  Visited ring / In-trip flag) + region-color legend card below (colors
  stay inside the visualization).
- **States**: tile-error notice (map stays usable, list is the
  accessible fallback), no-result EmptyState with Reset filters, map
  loading badge. Location access remains optional.
- **Visited/in-trip beyond color**: visited markers keep the gold ring;
  in-trip temples render a maroon flag marker (shape + "· in trip"
  tooltip label + legend entry).
- Mobile: compact search/region, labelled **Map/List switch**,
  expandable **Filters** disclosure (scope pills collapsed by default,
  always open ≥lg), prominent "Trip planner (N)".
- Trip planner renders in the shared `Dialog` (focus containment,
  Escape, focus return); its internals restyled to the shared controls.

### ABOUT

- Editorial layout: open sections (65–75ch, 16–17px) for the archive,
  guided yatras and etiquette; cards kept for the circuit grid and the
  contact block. Section navigation follows the **reading order**:
  About the archive → Guided yatras → Regional circuits → Team →
  Contact → Temple etiquette (labels updated in site-copy; anchor ids
  unchanged so the header dropdown deep links keep working).
- **Compact leadership**: small portrait frame with the restrained
  PortraitFallback tile (admin upload/URL controls preserved); shortened
  quote (first sentence) and biography (opening paragraph) — rendered
  side of the unchanged dataset (full text preserved in about.json for
  the CMS); credentials listed plainly with check icons.
- **Circuit comparison cards**: Name → Region → Shrines → Indicative
  duration → Base location → summary → key shrines line → "View
  temples" / "Ask about this yatra". A duration-scope note clarifies
  that durations cover the whole listed circuit and dispersed routes
  (Vada Nadu) may run as subcircuits — flagged for PO confirmation.
- **One authoritative contact block** (ContactDetails): General
  inquiries (`contact@kshetratours.org`), CEO office
  (`yatra@kshetratours.com`), Phone/WhatsApp — values rendered verbatim.
- **Inquiry dialog** (shared Dialog): name required; **email or phone —
  at least one** (inline `role=alert` error blocks submission); circuit
  preserved from the opener; pilgrims/window/notes optional. Success
  (booking reference) renders only after the inquiry is recorded
  (locally persisted under `kshetra_inquiries`; the site has no server
  channel — flagged below).

### Flags for PO review (not invented)

- **Contact verification result**: `kshetratours.org` (the general
  email domain) has **no DNS presence** (domain does not resolve);
  `kshetratours.com` is a live Kshetra Tours website whose published
  phone (**+91 98405 01427**) differs from the dataset's
  `+91 98765 43210` (a placeholder-pattern number). Per the brief the
  data was NOT changed — the differing addresses/phone need PO-owned
  authoritative values before being trusted.
- Inquiry delivery is local-only (reference recorded in the browser);
  the success copy promises coordinator follow-up — a live delivery
  channel remains PO-owned scope.
- Duration-scope note wording is presentational clarification; the
  subcircuit split for Vada Nadu should be confirmed with the operator.
- `body.style.zoom` was rejected as a 200%-zoom proxy (it leaves media
  queries at desktop widths); the faithful proxy (640px CSS viewport,
  DPR 2) shows **0px horizontal overflow** on all three pages.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 6 warnings (baseline 4 + the same accepted set-state-in-effect advisories on the new dialog open/reset effects) |
| Unit tests (Vitest) | **254/254 pass (23 suites)** — new `ui.test.jsx` (9) + TempleCard/PersonPreview branches; home, map, tracker, about suites updated in lockstep |
| Coverage | **90.47% statements / 81.32% branches / 86.29% functions / 92.08% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff (site-copy additions mirrored in fixture) |
| E2E (Playwright, Chromium) | **19/19 pass** — TC-14 reworked to exercise result→marker selection (focus → highlighted marker → tooltip → popup); TC-15/17/02 updated for the renamed controls |
| Measured | 0px horizontal overflow at 390/768/1280/1440 on all three pages and at the 200%-zoom proxy (640 CSS px); dialog opens with focus inside; Escape closes; validation error path confirmed; progressScope wording identical on home + map; trip/visit data flows unchanged (state modules untouched) |
| Visual gate | **22/22 pass** (home/map/about × 390/768/1280/1440 + zoom200 × 2 + map-selected/map-focus/map-mobile ×3 + dialog ×3) — `docs/03-design/gate-shots/home-map-about-23/{before,after}/` (before captured from live round-22 bundle) |
## Version 2.32 — Dead-Code Cleanup (2026-10-03)

No PO round — repo-wide over-engineering audit followed by deletion of
nine dead files (7 components + 2 one-off/unused scripts, ~495 lines)
plus their ~90 lines of test blocks. FR-tagged items were confirmed
superseded before deletion: ProgressBanner by the home YatraProgressTracker
(round 23), SearchFilterBar by the MapPage filter pane, SectionNav by the
detail pages' own rails, WikiThumb by useWikiImage/PortraitFallback.
Dataset untouched (CMS round-trip 0-diff).

### Deleted

- `src/components/`: SearchFilterBar, WikiThumb, Badge, VisitedBadge,
  SectionHeading (base — ui/SectionHeading is live), ProgressBanner
- `src/components/detail/SectionNav.jsx`
- `scripts/`: make-hero-watermark.mjs, convert-js-to-json.mjs
- Test blocks: ProgressBanner (UT-TRK-03/04), SectionNav (FR-84, both
  suites), WikiThumb (×2 suites), SearchFilterBar, Badge, base
  SectionHeading; three stale WikiThumb mentions in live doc-comments
  corrected to reference useWikiImage

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 6 warnings (baseline unchanged; two transient unused-import warnings during the removal were fixed, not suppressed) |
| Unit tests (Vitest) | **240/240 pass (23 suites)** — 14 dead-code tests retired |
| Coverage | **90.37% statements / 81.45% branches / 86.11% functions / 91.87% lines** (gate 80%) — branch headroom widened 81.32 → 81.45 |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 pass** — unchanged; no e2e path exercised any deleted component |
## Version 2.33 — Azhwars Page Restyle to the Kshetrams System (2026-10-03, round 24)

PO request: update /azhwars to the supplied refined mockup **reusing the
/kshetrams fonts, buttons, colors and interaction styles** (the mockup
image itself was not found on disk — the written brief + the live
/kshetrams page served as the binding reference; flagged to the PO).
Dataset unchanged (`sync-content --fixture --check` 0-diff after adding
one site-copy field).

### What changed

- **Intro**: the Browse header idiom — saffron uppercase eyebrow
  ("SAINT-POET GALLERY"), Cormorant 44/48px `#5C1F00` heading
  ("The Twelve Azhwars"), Tamil subtitle, lead — with the gopuram
  illustration as a desktop-only right watermark. The `.dir`
  DirectoryHeader, the stacked "Divine/Places/Eternal/Grace" text and
  the "Traditional order" rule are removed; page no longer wraps in
  `.dir` (body font reverts to the site-wide Mukta Malar, matching
  /kshetrams).
- **Grid**: same pattern as /kshetrams — 1 col / 2 col `sm` / 3 col `lg`,
  24px gap (gap-6).
- **Cards** (AzhwarCard rebuilt on the KshetramCard interaction rules):
  centered object-contain portrait band (h-52, `#F6EBD6`, preserves
  artwork proportions and embedded text; Thiruman glyph fallback when no
  image), Tamil name 14px `#96731F` centered, English name Cormorant
  26px `#5C1F00` centered, **left-aligned** full biography 15px/1.65
  `#332417` (no line-clamp), hairline divider, hymn titles + pasuram
  count as plain rows (nested bordered stat band removed; multi-work
  titles like Nammazhwar's four and Thirumangai's wrap fully — no
  truncate), and an action row pinned with `mt-auto`. Ordinal badges
  ("01"…) removed.
- **Actions**: "View profile" is now a semantic `Link` styled like
  "View temple" (`rounded-lg` = 18px token, gold `#96731F`, `#FFFDF7`
  text, py-2.5/px-5, 6px icon gap, arrow shifts 2px on card hover,
  button deepens to `#7A2E00` on card hover, 150ms cubic-bezier(0.4,0,0.2,1)).
  The "N Divya Desams" link keeps the brown/gold treatment and its
  `/kshetrams?azhwar=` deep link. **Madhurakavi (zero desams) shows the
  new `SITE_COPY.azhwarsPage.noDesamsNote`** ("His hymns sing only of
  his guru — no Divya Desams carry them.") instead of a link to an empty
  result — added to site-copy.json, the sync fixture and the studio
  schema in lockstep. Card hover: 300ms rise 4px, border to opaque gold,
  shadow subtle→large; `motion-reduce` variants disable the lift and
  arrow shift (transitions were already covered by the global
  reduced-motion rule).
- No trip/visited controls added; shared header untouched; the 12 azhwars,
  their order, names, bios, hymn titles, counts, artwork and routes are
  unchanged (round-22 test expectations updated, not removed).

### Flags for PO review

- The referenced mockup `azhwars-matched-styles.png` was not found in the
  workspace — implemented from the written brief (which carried exact
  px/behavior values) + the live /kshetrams computed styles. If the image
  shows composition differences, send it and we'll reconcile.
- The zero-desams note wording is site-copy (admin-editable), not
  dataset — adjust freely in the CMS.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 6 warnings (baseline unchanged) |
| Unit tests (Vitest) | **240/240 pass (23 suites)** — UT-AZW-02 updated: 11 desam links (12th card is the note), "View profile — {name}" accessible names, zero-desam note asserted |
| Coverage | **90.37% statements / 81.47% branches / 86.11% functions / 91.87% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff (noDesamsNote mirrored in fixture) |
| E2E (Playwright, Chromium) | **19/19 pass** — TC-10 unchanged (12 `.azhwar-card`s, first desam deep link pre-filters browse) |
| Measured | 0px horizontal overflow at 375/768/1280/1440 and the 200%-zoom proxy (640 CSS px, DPR 2) |
| Visual gate | **8/8 pass** — after ×4 widths + zoom200 + card-hover + keyboard-focus + madhurakavi note, with before ×2 from the live round-22 bundle — `docs/03-design/gate-shots/azhwars-restyle-24/{before,after}/` |
## Version 2.34 — Acharyas Page Restyle to the Kshetrams System (2026-10-03, round 25)

PO request: update /acharyas to the refined mockup **reusing the
/kshetrams design system** (mockup image not found on disk — the written
brief + the live /kshetrams page served as the binding reference, same
as round 24; flagged). Dataset unchanged; no site-copy changes this
round (`sync-content --fixture --check` 0-diff).

### What changed

- **Intro**: the Browse header idiom — saffron uppercase eyebrow ("THE
  GURU PARAMPARA"), Cormorant 44/48px `#5C1F00` heading ("The Acharyas"),
  existing lead at a comfortable reading width (`max-w-[62ch]`), the
  gopuram illustration reduced in prominence (opacity 60%) as a
  desktop-only right watermark. The `.dir` DirectoryHeader is removed;
  the page no longer wraps in `.dir` (body font reverts to the site-wide
  Mukta Malar, matching /kshetrams).
- **Era navigation**: the plain jump links are replaced by anchor pills
  styled like the Kshetrams scope pills (gold selected treatment:
  cream `#F6EBD6` + gold border + darker text; idle: white + hairline
  border). They remain **anchor links, never filters** — all three
  sections stay rendered and the section ids / URL fragments
  (#early-masters, #age-of-ramanuja, #later-acharyas) are unchanged.
  Counts (6/9/12) derive from the dataset grouping. Selected state: set
  on click, tracked while scrolling via an IntersectionObserver
  (topmost visible section wins; skipped where IO is unavailable), and
  communicated as `aria-current="true"` beyond color alone.
- **Sections**: dataset era labels kept as Cormorant 30px `#5C1F00`
  headings with a restrained gold divider and a data-derived count;
  `scroll-mt-[88px]` clears the 64px fixed header on anchor jumps.
- **Profile cards** (PersonEntry replaced by an AcharyaCard rebuilt on
  the KshetramCard interaction rules): horizontal on desktop (portrait
  column left, `sm:w-32`), stacked on mobile; `#FFFDF7` surface,
  `#C99A2E`/45 border, rounded-2xl, subtle shadow, 300ms 4px hover rise
  with opaque-gold border and larger shadow (`motion-reduce` guarded).
  Portraits: `object-contain` (proportions preserved; 5 Wikipedia
  images render, 22 quiet shanka-emblem fallbacks — the emblem is
  decorative and small). English name Cormorant 26px, Tamil name Mukta
  Malar 14px `#96731F`, full left-aligned biography 15px/1.65 `#332417`
  (no truncation), hairline, Period/Guru as a semantic `dl` with fixed-
  width labels and wrapping values (dataset values verbatim; "Not
  specified" never inferred), and a gold "View profile" action pinned
  to the lower right (18px radius token, `#96731F` → `#7A2E00` on card
  hover, 2px arrow shift, 150ms cubic-bezier(0.4,0,0.2,1)). No ordinal
  badges, no trip/visited controls, no whole-card overlay.
- **Deleted with the rewrite** (zero non-test importers after the
  restyle): `directory/PersonEntry.jsx` and `directory/DirectoryHeader.jsx`
  (96 lines) plus their 6 test blocks; PortraitFallback/ProfileLink/
  PersonPreview remain in service on /about, home and TempleCard.

### Flags for PO review

- Mockup `acharyas-refined.png` was not found in the workspace —
  implemented from the written brief + live /kshetrams computed styles.
  Send the image if composition differs.
- First visual-gate pass failed 6 files on a screenshot-harness race
  (2 of 5 wiki portraits missed by the capture timing) and a harness
  framing bug (era-scroll shot taken after scrolling to top); both were
  re-captured and re-judged — the page itself was correct
  (gotcha 32: verify dataset facts, re-judge with corrected facts).

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 6 warnings (baseline unchanged) |
| Unit tests (Vitest) | **235/235 pass (23 suites)** — UT-ACH-02 updated (era pills carry dataset counts; articles still 27; Period/Guru ×27); new: era-pill `aria-current` on click + IntersectionObserver topmost-visible tracking (IO mocked) |
| Coverage | **90.42% statements / 81.25% branches / 86.15% functions / 91.88% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff |
| E2E (Playwright, Chromium) | **19/19 pass** — TC-19 unchanged (pill substring names still match; #later-acharyas click → URL fragment + heading in viewport) |
| Measured | 0px horizontal overflow at 375/768/1280/1440 and the 200%-zoom proxy (640 CSS px, DPR 2) |
| Visual gate | **9/9 pass** — after ×4 widths + zoom200 + era-pill-active + era-anchor-scroll (heading at y≈120px below the 64px header) + card-hover + keyboard-focus, with before ×2 from the live round-22 bundle — `docs/03-design/gate-shots/acharyas-restyle-25/{before,after}/` |
## Version 2.35 — Map Page "Option 3" Rebuild (2026-10-04, round 26)

PO request: rebuild /map as a **full-width interactive map with floating
filters and a horizontal temple-results dock below** ("selected option 3"
mockup — not found on disk; the written brief + live /kshetrams served as
the binding reference, as in rounds 24/25; flagged). All state logic
(search/region/scope/geo/clusters/`?t=` share/planner) is preserved
verbatim from rounds 10/23; the presentation layer was rebuilt. One
site-copy pair changed (trip empty-state copy).

### What changed

- **Title strip** (replaces the left-pane header): saffron eyebrow, the
  /kshetrams h1 idiom (Cormorant 44/48px `#5C1F00` "Plan your Yatra"),
  the results summary + gold-ring note (`aria-live`), the progressScope
  sentence, and the mobile-only Map/List switch. The opener is renamed
  **"My trip"** (gold button, stop-count badge, `aria-label "My trip — N
  stops"`; the old "Trip planner — N stops" name is retired).
- **Full-width map** (`h-440/540/620` rounded frame, kshetrams border
  token): the search/region/scope panel **floats over the upper-left
  corner** (white/95 + backdrop blur + shadow); **"Fit results" and "My
  location"** sit in the upper-right on desktop; Leaflet's zoom control
  moved to the **lower-left** (`zoomControl={false}` + `L.control.zoom({
  position: 'bottomleft' })`) so it never sits under the panel; the
  **marker legend** (Temple / Visited / In trip / Cluster) moved to the
  lower-right above the OSM attribution. `fitBounds` padding clears the
  floating panel (`paddingTopLeft [340, 24]`).
- **Narrow screens**: the corner controls collide with the full-width
  panel, so below `lg` the same buttons render inside the panel (a
  right-aligned row under a hairline) via a `matchMedia('(min-width:
  1024px)')` gate (jsdom has no matchMedia → desktop default keeps the
  old tests valid; one instance per breakpoint). The marker legend is
  hidden below `sm` — the tall panel leaves no quiet corner, and
  tooltips already label every marker state.
- **Results dock** (replaces the tall sidebar): "Temples in view" serif
  heading + "N results" count, then a horizontal row — **three cards
  visible on desktop, `overflow-x-auto` for the rest**; full-width
  stacked cards in the mobile List view (filters stay available above
  them). Dock cards (MapResultCard): photo band with the gopuram +
  "Photo unavailable" fallback, **Tamil name above the English name**,
  temple name, place · state, region pill, distances after location
  share, and the action tiers — TripControls ("Add to trip"/"✓ In
  trip"), "View temple" link, "Mark as visited"/"✓ Visited" (`aria-
  pressed`). Clicking a card's name selects + focuses the marker
  (`aria-label "Focus {name} on the map"`); actions act only on
  themselves. Selected card: full-gold border + ring; hover = border +
  shadow only (the dock clips vertical overflow, so no card lift).
  300ms transitions; `motion-reduce` guarded; global focus rings apply.
- **Empty results** (brief copy verbatim): "No temples match these
  filters." / "Try another name or reset your filters." + Reset button;
  "Reset filters" in the panel now appears **only when a filter is
  active**.
- **Trip planner dialog**: unchanged mechanics (region/route views,
  order-nearest-first, share/print/clear, `?t=` auto-open, focus
  containment/Escape/focus return). Empty-state copy changed via
  site-copy: **"Your yatra starts here"** / "Choose a temple on the map
  or in the list, then select 'Add to trip'." / **"Explore temples"**
  action (site-copy.json + fixture in lockstep; schema fields
  unchanged; round-trip 0-diff).
- Unchanged: markers (region colors, gold-ring visited, in-trip flags,
  selected `stroke-width 4`), clusters below zoom 9, tooltips/popups,
  tile-error notice, RegionLegend card below the dock, `/trip` redirect,
  lazy chunk.

### Flags for PO review

- Mockup not found on disk — built from the brief + live reference.
- The selected-marker-in-screenshot could not be visually verified: this
  build's Leaflet `flyTo` leaves the rendered pane stale in headless
  screenshots (gotcha 37), so the companion shot was withdrawn; the
  result→marker sync is verified interactively by TC-14 (highlighted
  marker hover/tooltip/popup) and by a unit assertion on the outlined
  card. Resizable-desktop edge: a user who toggles mobile List view then
  widens past `lg` sees the map without the floating panel until they
  tap Map (the switch is mobile-only) — accepted, flagged.
- The first visual pass caught a real mobile collision (corner controls
  vs full-width panel) — fixed with the in-panel controls row; a second
  pass caught the legend overlapping the panel — fixed by hiding the
  legend below `sm`.

### Execution summary

| Gate | Result |
|---|---|
| oxlint | 0 errors / 5 warnings (below the 6 baseline — two stale advisories disappeared with the rewrite) |
| Unit tests (Vitest) | **236/236 pass (23 suites)** — planner tests renamed to "My trip — N stops"; new empty-state copy asserted; Map/List test rewritten (Filters disclosure retired); Reset-filters-conditional test; narrow-screen controls-in-panel test |
| Coverage | **90.26% statements / 81.47% branches / 85.86% functions / 91.71% lines** (gate 80%) |
| Production build | Clean |
| CMS round-trip | `sync-content --fixture --check` 0-diff (trip empty-state copy mirrored) |
| E2E (Playwright, Chromium) | **19/19 pass** — TC-14 (zoom → focus → highlighted marker → tooltip → popup → region filter) and TC-15 (My trip → dialog → In-trip scope → order → share) pass against the new layout |
| Measured | 0px horizontal overflow at 375/768/1280/1440, the 200%-zoom proxy, and mobile List view |
| Visual gate | **9/9 pass** — map-375/768/1280/1440 + zoom200 + selected-card outline + empty-results + planner dialog + mobile-list (before ×2 from the live round-23 bundle); the selected-marker screenshot was withdrawn as unverifiable (gotcha 37) with TC-14 as the interactive proof — `docs/03-design/gate-shots/map-option3-26/{before,after}/` |

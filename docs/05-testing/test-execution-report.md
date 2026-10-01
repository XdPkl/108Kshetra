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

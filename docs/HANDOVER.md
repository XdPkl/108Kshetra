# HANDOVER — 108 Divya Kshetrams (2026-10-03, after rounds 22–23 + dead-code cleanup)

State: **Everything pushed, CI+Deploy green on `cc35030`, live verified.**
`main` = `cc35030` (dead-code cleanup, TER v2.32 / TCS v1.18, on top of
round-23 `a04d609`) in sync with `origin/main`
(https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ — verify bundles by CONTENT, not by
hash (CI Linux hashes differ from local Windows; grep the live
`assets/index-*.js` via `node -e "...includes(...)"` — gotcha 12; MapPage
strings live in the lazy `assets/MapPage-*.js` chunk, not the main bundle).
Working tree clean. No preview server on :4173. Scratch scripts deleted.
Nothing in flight; next context starts fresh on whatever the PO brings
(23 rounds in ~5 days).

## 1. What the last two sessions delivered (PO rounds 18–23, all live)

| Commit | Work | Register |
|---|---|---|
| `a036264` | **Round 18 — Azhwar + Acharya detail restyled to the shared kxd theme**: kxd primitives moved VERBATIM out of `kshetram-detail.css` into `src/styles/detail-theme.css`; new `saint-detail.css` (`azd-`/`acd-` prefixed); both dossier pages rebuilt under `.kxd`; azhwar got the hash-synced sticky five-tab rail | TER v2.26, TCS v1.12 |
| `04524a0` | **Round 19 — Azhwar detail recreated to the poigai mock**: compact profile shell, verse reader, Sacred-places directory with celestial grouping, media rows + speaker split, "Title — domain" sources, lamp-of-knowledge band | TER v2.27, TCS v1.13 |
| `ead6db5` | **Round 20 — Consistency pass vs Srirangam**: birth facts beneath identity, 32px headings, Life summary + expander, media/sources alignment, compact mobile hero; fixed latent `.acd-media-grid` regression; TC-18 reordered | TER v2.28, TCS v1.14 |
| `300a8e9` | **Round 21 — "Philosophy & legacy" alignment to PO mock crop**: serif sub-heads + "Era & contemporaries" gold-caps aside | TER v2.29, TCS v1.15 |
| `359a934` | **Round 22 — Acharyas directory consistency restyle**: new `.dir` directory theme (`src/styles/directory.css`, kxd-mirrored tokens, Source Serif 4 / DM Sans / **Mukta Malar** for Tamil) + reusable `src/components/directory/` — DirectoryHeader, PersonEntry, PortraitFallback, ProfileLink; /acharyas rebuilt: full-width mobile intro (38px title/16px lead, watermark column-free), era jump links (#early-masters/#age-of-ramanuja/#later-acharyas), 27 standardized entries (English name → Tamil name → 16px summary → Period/Guru rows → unique "View profile — {name}"), hairline-only separators, one 3/4 portrait framing (72px mobile / 104px desktop; 5 wiki + 22 fallback tiles); /azhwars coordinated (shared header/link/fallback; whole-card overlay retired; desams deep link kept). Guru "Not specified" NOT inferred (nathamuni/kidambi-appullar/thiruvaimozhi-pillai); `era` vs `period` field asymmetry flagged | TER v2.30, TCS v1.16 |
| `a04d609` | **Round 23 — Home/Map/About coordinated restyle**: new `src/styles/ui.css` control language (solid maroon `#922e0d` primary / outlined secondary / plain tertiary / on-photo inverse; 44px targets; gold focus rings) + `src/components/ui/` (Button/ButtonLink, **Dialog** with focus containment + focus return + Escape, Field/SearchField/FilterSelect, SectionHeading, ContactDetails) — ALL gradient controls retired. Home: reliable hero overlay + "Browse temples"/"Plan your yatra", compact My yatra (reset hidden at zero), shared TempleCard grid, PersonPreview strips, "View all Azhwars/Acharyas" CTAs. Map: pane+map workspace, result→marker selection sync (`path[stroke-width="4"]`), Fit results vs Reset filters, mobile Map/List switch + Filters disclosure, "Trip planner (N)" in shared Dialog, in-trip flag markers + legend, tile-error/no-result/loading states. About: editorial open sections, reading-order nav (ids unchanged for header deep links), compact Team (fallback portrait, first-sentence quote, first-para bio, plain credentials), circuit comparison cards + duration-scope note, single contact block, inquiry dialog (name + ≥1 contact method, preserved circuit, alert-validated, local reference only on record). 108/106 sentence = `SITE_COPY.progressScope`, verbatim on home + map | TER v2.31, TCS v1.17 |

| `cc35030` | **Cleanup (audit round, no PO request)** — deleted 9 files / 645 lines: 7 components with zero non-test importers (SearchFilterBar, ProgressBanner, SectionNav, WikiThumb, Badge, base SectionHeading, VisitedBadge) + 2 finished scripts (make-hero-watermark, convert-js-to-json); 14 tests retired (UT-TRK-03/04, FR-84 SectionNav, WikiThumb ×2, SearchFilterBar, Badge, base SectionHeading); 3 stale WikiThumb doc-comments corrected | TER v2.32, TCS v1.18 |

Final gates at handoff: **240/240 unit (23 suites) · 19/19 e2e · coverage
90.37% stmts / 81.45% branches / 86.11% funcs / 91.87% lines (gate 80%) ·
oxlint 0 errors / 6 warnings (baseline) · build clean · CMS round-trip
0-diff · visual gates green** (round 22: 7/7 in `gate-shots/acharyas-directory-22/`;
round 23: 22/22 in `gate-shots/home-map-about-23/{before,after}/` incl.
zoom200/map-selected/map-focus/map-mobile/dialog shots; earlier rounds
18–21 in `gate-shots/azhwar-*-1[89]` and `azhwar-philosophy-restyle-21/`).

## 2. Open items / likely next requests

- **More PO fix lists** — PO iterates fast (23 rounds). Proven loop:
  inspect mock/data → implement → Playwright measurement + screenshots →
  gates → TER → commit → push → CI/live check (verify by content). PO
  supplies mockups as zips of generated PNGs + design-notes.md, or single
  mock crops (see rounds 21).
- **CONTACT DISCREPANCIES (round 23, verified, NOT fixed — PO-owned
  data)**: `contact@kshetratours.org` domain does NOT resolve in DNS;
  `kshetratours.com` is a live agency site whose published phone
  (+91 98405 01427) differs from the dataset's placeholder-pattern
  `+91 98765 43210`. Values rendered verbatim per "do not invent";
  awaiting PO's authoritative replacements.
- **Inquiry delivery is local-only**: the about-page dialog records
  inquiries to `localStorage.kshetra_inquiries` with a YATRA-xxxx
  reference; success copy promises coordinator follow-up but there is no
  server channel. A live delivery path is PO scope.
- **Vada Nadu duration note** (round 23) is presentational clarification;
  the actual subcircuit split (Tamil Nadu vs Himalayan runs) needs
  operator confirmation.
- **Acharya detail not yet poigai-refined**: still the round-18 kxd
  dossier (fact rows, anchor rail, gold numerals). PO may ask to bring
  /acharya/:id to the azhwar standard.
- **PO-owned content pending** (flagged in TERs): triplicane-mock authored
  copy (kshetram), azhwar mock labels ("The lamp of knowledge",
  "Reading this archive", "Sources & further reading",
  "Listen, learn & contemplate" — rendered, flagged, no CMS fields yet),
  lamp/editorial artwork stand-ins, real captioned deity/media imagery,
  cited history links, scaffold acharya dossiers (nadadur-ammal etc. show
  pending markers), CEO portrait, Srivilliputhur card, azhwar/acharya
  portraits (only Poigai has photos[]; NO acharya has photos[] — 5 wiki
  images + 22 fallback tiles are stand-ins).
- **Jira**: stories through US-CMS-01 synced (DTRPR108K-1..76). Authoring
  PO-round stories (rounds 5..23) NOT started. **API token from the
  earlier sync should be revoked** (was exposed in chat history).
- **Coverage drift watch**: branches 81.45% vs gate 80% — headroom
  ~1.45pp (widened by the cleanup). Any new conditional needs a test
  (rounds 21–23 added tests for exactly this). CI is 2-core (gotcha 10).
- **Divine amsam in the azhwar hero** renders the dataset string verbatim
  ("Lord Vishnu's holy conch, Panchajanya"); PO's round-20 brief suggested
  "Panchajanya, Vishnu's conch" — kept verbatim, flagged; PO may ask again.
- **Timings duplication** (kshetram sidebar + Visit tab) persists by
  design; SectionNav.jsx still page-dead; browse cards' dropped deity pill
  + Pasuram tag restorable on request; plaque watermark +
  make-hero-watermark.mjs unused; "Reset progress" quiet link kept (TC-13)
  — note round 23's home tracker hides reset at zero progress.
- **Field-name asymmetry**: acharyas.json `era` vs azhwars.json `period`
  (both labelled "Period" in UI) — consider unifying in a content round.

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims preserve
  old import paths — do not bypass. UI reaches data ONLY via
  `data/api.js`. Site-copy fields: app JSON + fixture
  `sync-response.json` change TOGETHER (`sync-content --fixture --check`
  0-diff; the fixture is the raw Sanity doc — add new site-copy fields to
  BOTH). Round-23 site-copy additions: `hero.ctaSecondary`,
  root `progressScope`, `about.anchors` (new reading order),
  `about.sections.{inquireCircuit→"Ask about this yatra",
  generalEmailLabel, ceoEmailLabel, circuitsDurationNote,
  circuitRegionLabel, circuitCountLabel, circuitDurationLabel,
  circuitBaseLabel, viewTemplesLabel}`,
  `about.scheduleModal.labels.contactNote`, renamed strip CTAs
  ("View all Azhwars/Acharyas"), `hero.cta` = "Browse temples".
- **Azhwar data is TWO files merged**: `azhwars.json` (index) +
  `azhwar-details.json` (dossier); `getAzhwarById` returns the ENRICHED
  merge — check BOTH files when reasoning about fields.
- **Stylesheets** (import order in main.jsx): tokens → base → layout →
  v3 → zip → `detail-theme.css` (`.kxd` dossier primitives) →
  `kshetram-detail.css` → `saint-detail.css` → `directory.css` (`.dir`
  directory theme: tokens + dir-* classes; **variables live on the
  `.dir` scope** — see gotcha 41) → `ui.css` LAST (round-23 site-wide
  control language: `.ui-btn` variants, `.ui-tertiary`, `.ui-input/
  select/textarea`, `.ui-pill`, `.ui-dialog*`, `.map-trip-flag`,
  `.ui-meta-row`, `.ui-heading`).
- **Three design scopes now**: `.kxd` (detail dossiers), `.dir`
  (directories + home/map/about wrappers — gives DM Sans body text),
  base site (browse/detail pages not yet migrated). TempleCard,
  PersonPreview, PortraitFallback, ProfileLink, DirectoryHeader,
  PersonEntry live in `src/components/directory/`; Button/Dialog/fields/
  SectionHeading/ContactDetails in `src/components/ui/`.
- **AcharyasPage** (`/acharyas`): DirectoryHeader (media slot = gopuram
  watermark, hidden <lg) → dir-jumps (3 era anchors) → per-era
  `.dir-section` (dataset eraGroup labels + count) → `.dir-list` 2-col
  ≥640px → PersonEntry ×27 (grid-template-areas; mobile portrait 72px
  beside identity; guru resolved via `getAcharyaById`, absent → "Not
  specified"). AzhwarsPage keeps the round-12 card gallery but uses
  DirectoryHeader/PortraitFallback/ProfileLink (no overlay).
- **HomePage** (`/`): Hero (photo + dual scrim, 2 ui-btn actions) →
  YatraProgressTracker (compact card; reset rendered only when count>0;
  progressbar aria-label contract "N of 106 kshetrams visited") →
  FeaturedKshetrams (SectionHeading + TempleCard ×4) → SaintStrip ×2
  (PersonPreview tiles) → ornament.
- **MapPage** (`/map`, lazy chunk): `.dir` grid `[380px, 1fr]` — left
  pane (sticky, max-h dvh-96, overflow-y-auto: header + progressScope +
  resultCount line, SearchField, FilterSelect, mobile Map/List switch +
  Filters toggle (`lg:hidden`), scope pills + location + Reset filters
  (collapsible on mobile via `filtersOpen`, always `lg:flex`), Trip
  planner button (aria-label "Trip planner — N stop/stops"), result
  list) | map frame (Loading badge while !mapApi, tile-error notice via
  TileLayer `tileerror`, Fit results button, result-count badge,
  legend). ResultRow: name button + "Focus on map" → `focusTemple` =
  setSelectedId + flyTo(12); selected row `ring-1` outline; selected
  marker radius 10/weight 4/stroke-width 4. Non-trip scope renders
  in-trip members as flag divIcon Markers. Trip planner renders from
  the same trip state inside shared Dialog. State logic (search/region/
  scope/me/geo/clusters/share `?t=`) unchanged from round 10.
- **AboutPage** (`/about`): banner + dir-jumps nav (reading order;
  anchor ids UNCHANGED: archive/guided-yatras/circuits/ceo-leadership/
  contact-desk/sanctum-etiquette — header dropdown deep-links into
  `#ceo-leadership`/`#contact-desk`) → open sections → CircuitCard grid
  (ui-meta-row dl) → compact Team (CeoPortrait: dir-portrait +
  PortraitFallback + admin upload/URL controls; short quote = first
  sentence, short bio = first para — render-side only, about.json
  intact) → contact (ContactDetails rows) → etiquette cards →
  InquiryDialog (shared Dialog; localStorage `kshetra_inquiries`;
  validation: name required + email-or-phone).
- **E2E notes**: TC-14 now exercises result→marker selection (focus →
  `path[stroke-width="4"]` hover/click → tooltip → popup; ~400ms between
  zoom clicks; clusters asserted gone via `.map-cluster` count 0).
  TC-15/17/02/18/19 use renamed controls (trip planner aria, strip CTAs,
  hero actions). e2e specs are **LF** (git normalized).
- Registers/dates: **TER v2.32; TCS v1.18** (UT-DTL unchanged since
  round 17; UT-AZW-03 rounds 19–21; UT-ACH-02 rewritten round 22;
  UT-HOME/MAP/ABT-01..03 updated round 23; UT-TRK-03/04 + FR-84
  SectionNav + WikiThumb/SearchFilterBar/Badge/base-SectionHeading cases
  retired in the cleanup; suite `components/ui/__tests__/ui.test.jsx`).

## 4. Gotchas (accumulated — ALL still valid, plus new)

1. **Unlayered legacy CSS beats every Tailwind utility.** `a {}`, `h1/h2 {}`,
   `.site-header nav a { color: inherit }` in base.css; Tailwind v4
   important = TRAILING bang. Detail pages avoid this via `.kxd`-scoped
   stylesheets (0,1,1 specificity wins).
2. **Whole-card/row overlay links** — non-interactive content needs
   `pointer-events-none` (TC-18/19 catch absence). NOTE round 22/23:
   person entries and temple/person cards NO LONGER carry overlay links —
   the profile link is the single stop; don't re-add overlays.
3. **Split pills don't use pillBase** (header temples/tours) — apply pill
   idiom changes to all three.
4. **Images/measurement in this harness**: Playwright
   `getBoundingClientRect()` + `document.fonts.ready`; scratch scripts in
   `app/`, delete after; preview serves `/108Kshetra/` on :4173 —
   **REBUILD before re-measuring screenshots after CSS changes** (stale
   dist gave a false overflow once this session); playwright importable
   only from `app/`; fullPage captures: `window.scrollTo(0,0)` first or
   the sticky header/rail stitches mid-page (visual-judge flags it).
5. **sharp**: hardcode CH=4 after `ensureAlpha().raw()`.
6. **Wikipedia photos**: REST summary API; hotlink only FIXED widths
   (wikiImage.js rewrites to 1280px). Some dataset wiki slugs 404 on the
   live API (Neervanna Perumal etc.) — harmless console noise.
7. **Exact-match text assertions**; nav "108 Kshetrams" pill collides with
   /108 kshetrams/i.
8. **No Python** — node one-liners / heredoc `.mjs`.
9. `ProgressBanner.jsx` app-dead; `SectionNav.jsx` page-dead.
10. **Vitest on CI (2-core) ~3-4× slower**: global `testTimeout: 15_000`.
11. **Leaflet pane z-indexes** — `.kxd-map` keeps `isolate`/`z-index:0`.
12. **Live verification by CONTENT**: `node -e "...includes(...)"` on the
    live bundle (ugrep chokes on 1.2MB single-line files); `index-*.css`
    also matches `index-` — pick `.js` explicitly. Template-literal
    classes (`azhwar-tab-${id}`) never appear verbatim — grep prefixes.
    MapPage is a lazy chunk — its strings are in `assets/MapPage-*.js`.
13. **CI logs without gh auth**: check-runs → annotations API.
14. Region dropdown label: `getByLabelText('Filter by region')`.
15. Old gotchas: shim re-export collision; scan ALL distinct keys before
    schema-mapping; sanity schema validate placeholder id; JSON key-order
    normalization; Vite-only imports break plain-node; gh CLI
    unauthenticated; lucide icon imports; `markVisited(id, true)`;
    `fireEvent.click` for hover UI; coverage exit codes behind pipes;
    `.zcodeignore` UNTRACKED.
16. **Tests must not touch the network**: wikiImage `vi.mock`ed in
    yatraPages/v3Branches (detailV2 stubs fetch). `useWikiImage` is safe
    unmocked in pages tests (same as kshetram detail).
17. **jsdom accessible names join WITHOUT spaces**: use
    `/name\s*·\s*count/i` regexes.
18. **Repeated strings across hero+cards**: `getAllByText(...).length >= 1`.
19. Leaflet marker culling at zoom ≥9 in headless captures — not a
    regression (TC-14 exercises the real path).
20. Trip planner lives in a modal; `?t=` links auto-open it.
21. **Hooks before early returns** (CI oxlint errors where local passes).
22. **e2e specs + line endings**: gotcha 22 said CRLF, but git has since
    NORMALIZED `yatra.spec.js` to LF. Don't assume — check; and full-block
    string matching failed twice this session → prefer **line-index
    splice** (find start/end markers, `lines.splice`) over block replace.
23. Two `renderAt()` calls in one test → `cleanup()` between.
24. Closed `<details>` content is hidden for Playwright `toBeVisible` —
    open expanders before asserting bodies in e2e.
25. Long Tamil lines don't wrap — verse `<p>`s keep `white-space: pre-line`
    + `overflow-wrap: anywhere` (`.azd-verse-tamil`, `.tamil`,
    `.tamil-verse`, `.azd-band-tamil`); kshetram verseLines uses `<br/>`.
26. **Tabs unmount panels** — assert panel content only after clicking its
    tab; a persistent band moved INSIDE a panel disappears on other tabs
    (TC-18 had to reorder around this in round 20).
27. RTL `getByText` matches DIRECT text nodes — use role+accessible-name.
28. **URL hash persists across unit tests** — saintPages.test.jsx clears it
    in `beforeEach` (any file rendering Kshetram/AzhwarDetailPage needs it).
29. Hash effect guards unknown hashes; `activateTab` guards
    `scrollIntoView?.` and defers panel scroll via rAF (jsdom-safe).
30. `splitNotes` FESTIVAL_PATTERN (kshetram visit tab).
31. Write long doc appends via temp file (`Write` + `cat >>`), not heredocs.
32. **Visual-judge findings can be data-mapping bugs** — and its "spec"
    failures can ALSO be stale-brief artifacts: round 21's judge failed
    4 shots on a value I wrongly called authored (it comes from
    azhwars.json). Verify dataset facts before accepting spec verdicts,
    and re-judge with corrected facts rather than "fixing" the page.
33. **`getByText` with a substring regex matches ancestors too**:
    band/section titles inside wrappers throw "multiple elements" — use
    `getAllByText(...).length >= 1` or exact strings.
34. **Relative photo paths need `assetUrl()`** when a component
    renders `<img src>` directly (GitHub Pages base `/108Kshetra/`);
    `useWikiImage` applies it internally, raw `photos[].src` does not
    (round 19's broken media portrait).
35. **Birthplace records can be `{kshetramId}` only** (name
    undefined for 3 azhwars) — guard `.split`/renders (em-dash fallback).
36. **Media tab: videoSearches mix narrative strings with real
    search titles**; SPEAKER_PATTERN splits only the three known speaker
    suffixes (Velukkudi Krishnan | Karunakarachariar |
    Ananthapadmanabhachariar); other strings render title-only rows.
37. **Leaflet flyTo does not animate the map-pane transform in this build**
    (transform stays translate3d(0,0,0)); a transform-stability wait
    passes while flyTo is still flying. In e2e, target the selected marker
    directly (`path[stroke-width="4"]`, set by the round-23 selection
    highlight) and hover/click it — TC-14 does this. Also leave ~400ms
    between zoom-control clicks so cluster dissolve settles.
38. **`document.body.style.zoom` is NOT a 200%-zoom proxy** (media queries
    stay at desktop width → fake overflow). Use a 640px CSS viewport with
    DPR 2 (=1280 window at 200%): all pages show 0px overflow.
39. **userEvent.setup() swaps navigator.clipboard** — install clipboard
    spies AFTER setup, and defineProperty (not Object.assign) because
    navigator.clipboard is getter-only.
40. **CRLF files swallow plain `\n`-based replace() patches silently** —
    HomePage/AboutPage have CRLF; use regex /\r?\n/ in node patch scripts
    and VERIFY the patch landed (grep) before rebuilding. In `node -e`
    inside bash double quotes, write `\r?\n` ONLY in regex literals — a
    string literal `'\r?\n'` becomes CR+`?`+LF and silently no-ops or
    inserts a literal `?` (bit twice in the cleanup).
41. **directory.css variables live on the `.dir` scope** — components
    using `--dir-*` (dir-portrait, dir-entry__*, dir-profile-link) render
    with unset vars outside a `.dir` ancestor; home/map/about are wrapped
    in `.dir` for this reason (also gives DM Sans body text).

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 240 unit / 23 suites (global timeout 15s)
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines (~90%)
npm run lint             # oxlint (0 errors; 6 warnings — see TER v2.31)
npm run build            # production build (REBUILD before re-measuring!)
npx playwright test      # 19 e2e (boots vite preview on :4173)

# app/  (CMS pipeline self-tests — no Sanity account needed)
node scripts/sync-content.mjs --fixture scripts/__fixtures__/sync-response.json --check

# studio/  (Sanity)
npm run verify -- --local --dump-fixture ../app/scripts/__fixtures__/sync-response.json
npm run import           # repo JSON → Sanity (idempotent; needs SANITY_TOKEN)
npm run deploy
SANITY_STUDIO_PROJECT_ID=placeholder123 npx sanity schema validate

# one-off asset conversion (PO artwork → optimized JPEG)
cd app && node scripts/make-hero-image.mjs <input.png> [src/assets/out.jpg]

# visual smoke + measurement (scratch script pattern, live in app/, delete after)
(npm run preview -- --port 4173 --strictPort &)
#   then http://localhost:4173/108Kshetra/ ; fonts.ready;
#   getBoundingClientRect (hero height, rail y, type scale, overflow)
#   full-page screenshots → docs/03-design/gate-shots/<round-dir>/
#   scrollTo(0,0) before fullPage captures (sticky-header stitch)
#   200%-zoom check = 640px viewport + DPR 2 (NOT body.style.zoom — gotcha 38)

# CI/Actions status + failure details (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/commits/<sha>/check-runs"
#   → check-runs/{id}/annotations for the failing test + file:line

# live verification by content (gotcha 12)
curl -s "https://xdpkl.github.io/108Kshetra/" | grep -oE 'assets/index-[^"]+\.js'
#   then node -e "...includes('Expected String')" on that bundle
#   MapPage strings are in the lazy assets/MapPage-*.js chunk
```

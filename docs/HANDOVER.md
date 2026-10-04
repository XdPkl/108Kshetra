# HANDOVER — 108 Divya Kshetrams (2026-10-04, after rounds 24–28 + audit + Jira backlog sync)

State: **Everything pushed, CI+Deploy green on `2fefff3`, live verified.**
`main` = `2fefff3` (Jira sync record) in sync with `origin/main`
(https://github.com/XdPkl/108Kshetra). Live: https://xdpkl.github.io/108Kshetra/
— verify bundles by CONTENT, not by hash (CI Linux hashes differ; grep the
live `assets/index-*.js` via `node -e "...includes(...)"` — gotcha 12; MapPage
strings live in the lazy `assets/MapPage-*.js` chunk). Working tree clean.
No preview server running. Scratch scripts deleted. Nothing in flight.

## 1. What this session delivered (rounds 24–28 + audit + Jira, all live)

| Commit | Work | Register |
|---|---|---|
| `cc35030` | **Dead-code cleanup (audit round)** — 9 files / 645 lines deleted: 7 test-only components (SearchFilterBar, ProgressBanner, SectionNav, WikiThumb, Badge, base SectionHeading, VisitedBadge) + 2 finished scripts (make-hero-watermark, convert-js-to-json); 14 dead-code tests retired (UT-TRK-03/04, FR-84 SectionNav, WikiThumb ×2, SearchFilterBar, Badge, base SectionHeading); 3 stale WikiThumb doc-comments corrected | TER v2.32, TCS v1.18 |
| `87ad413` | **Round 24 — /azhwars restyled to the Kshetrams system**: Browse-style compact intro (eyebrow/Cormorant 44/48 heading/Tamil subtitle/lead, desktop-only gopuram watermark), kshetrams grid, cards on KshetramCard interaction rules (object-contain portraits, ordinals removed, hymn titles wrap, gold View-profile semantic link styled like View temple, motion-reduce guards); Madhurakavi zero-desams → new `SITE_COPY.azhwarsPage.noDesamsNote` (site-copy + fixture + studio schema lockstep); `.dir` scope dropped from the page | TER v2.33, TCS v1.19 |
| `95b1dc0` | **Round 25 — /acharyas restyled to the Kshetrams system**: compact intro, era anchor pills (dataset counts 6/9/12, gold selected treatment, `aria-current`, IntersectionObserver scroll-spy, scroll-mt-88), horizontal profile cards (Period/Guru dl rows verbatim, 5 wiki photos + 22 shanka emblem fallbacks); **PersonEntry + DirectoryHeader deleted** (zero importers post-restyle) + 6 test blocks retired | TER v2.34, TCS v1.20 |
| `9e466f1` | **Round 26 — /map rebuilt to "option 3"**: title strip ("Plan your Yatra" + summary + gold **"My trip — N stops"** opener), full-width map with floating upper-left filter panel, upper-right Fit results/My location, zoom control lower-left, marker legend lower-right (hidden <sm), results cards below with Focus/trip/visited actions + selected-card gold outline; brief empty-results copy; planner empty state recopied via site-copy ("Your yatra starts here"/"Explore temples"); all state logic (search/region/scope/geo/clusters/?t= share/polyline/planner) preserved verbatim | TER v2.35, TCS v1.21 |
| `177e3b4` | **Round 27 — map PO fixes**: visible "Focus on map" action on every results card; horizontal-scroll dock → wrapping 1/2/3-column grid listing EVERY matching temple on every viewport; Map/List switch + mobileView state + list-view inline filter panel removed | TER v2.36, TCS v1.22 |
| `b8437aa` | **Round 28 — cluster-distance slider**: pure `clusterByDistanceKm(points, radiusKm)` (greedy seed-based km grouping, `ponytail:` noted, 5 unit cases) replaces the 70px pixel-grid; slider 1–50 km default 10 in the floating panel with live "N km" readout; zoom-9 dissolve + trip-scope exemption unchanged. NOTE: greedy seed grouping is **non-monotone in radius** (a pair can dissolve while others merge as the radius grows) — documented in TER v2.37 | TER v2.37, TCS v1.23 |
| `63fdbe5` + `2fefff3` | **Jira backlog authoring + SYNC**: all 24 delivered iterations authored as **US-PO-01..17 under epic EP-PO-ITER (94 pts)** in `docs/02-agile/user-stories.md` v2.1; synced to DTRPR108K via REST v3 — epic **DTRPR108K-82**, stories **DTRPR108K-83..99**, all transitioned **Done** at creation (epics To Do per convention). Sync script: `docs/02-agile/sync-jira-stories.mjs` (reads `.env.local`, epic lookup idempotent, stories not deduplicated) | user-stories.md v2.1 |

Final gates at handoff: **241/241 unit (23 suites) · 19/19 e2e · coverage
90.50% stmts / 81.50% branches / 85.27% funcs / 92.02% lines (gate 80%) ·
oxlint 0 errors / 5 warnings · build clean · CMS round-trip 0-diff ·
visual gates green** (gate shots: `docs/03-design/gate-shots/azhwars-restyle-24/`,
`acharyas-restyle-25/`, `map-option3-26/`, `map-cluster-slider-28/`).

## 2. Open items / likely next requests

- **More PO fix lists** — 28 rounds in ~10 days. Proven loop: inspect
  brief/mock → implement reusing kshetrams idioms → Playwright measurement
  + screenshots → judge → gates → TER → commit → push → CI/live check.
- **PO mockup files keep not existing on disk** (rounds 24/25/26: `azhwars-matched-styles.png`,
  `acharyas-refined.png`, option-3 mock) — the written briefs were
  self-sufficient and implementation used them + live /kshetrams computed
  styles; flagged to the PO each time. If a mockup ever arrives, reconcile.
- **CONTACT DISCREPANCIES (round 23, verified, NOT fixed — PO-owned data)**:
  `contact@kshetratours.org` domain does NOT resolve; `kshetratours.com`
  is a live agency site whose phone (+91 98405 01427) differs from the
  dataset placeholder. Values rendered verbatim; awaiting PO replacements.
- **Inquiry delivery is local-only** (localStorage `kshetra_inquiries`);
  live delivery channel is PO scope.
- **PO-owned content pending** (flagged in TERs): triplicane-mock authored
  copy, azhwar mock labels ("The lamp of knowledge" etc.), lamp/editorial
  artwork stand-ins, cited history links, scaffold acharya dossiers
  (nadadur-ammal etc. show pending markers), CEO portrait, azhwar/acharya
  portraits (only Poigai has photos[]; NO acharya has photos[] — 5 wiki
  images + 22 shanka emblem fallbacks on /acharyas are stand-ins).
- **Jira: BACKLOG IS NOW SYNCED through round 28** (DTRPR108K-82..99). The
  previously-open "author rounds 5–23" item is CLOSED. The fresh API token
  in `.env.local` works; if it was ever pasted into chat, revoke it —
  nothing else needs it until a future backlog sync (`sync-jira-stories.mjs`
  is idempotent for the epic only; stories are not deduplicated).
- **Coverage drift watch**: branches 81.50% vs gate 80% — headroom ~1.5pp.
  Any new conditional needs a test. CI is 2-core (gotcha 10); one e2e
  flake observed (TC-15 clipboard permission, passed on re-run).
- **Vada Nadu duration note** (round 23) presentational; subcircuit split
  needs operator confirmation. **Timings duplication** (kshetram sidebar +
  Visit tab) persists by design. **Field-name asymmetry** (acharyas `era`
  vs azhwars `period`) persists.

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims preserve
  old import paths — do not bypass. UI reaches data ONLY via
  `data/api.js`. Site-copy fields change app JSON + fixture TOGETHER
  (`sync-content --fixture --check` 0-diff). Recent site-copy additions:
  `azhwarsPage.noDesamsNote` (round 24), `trip.emptyTitle/emptyMessage`
  rewritten (round 26: "Your yatra starts here" / "Explore temples").
- **Design-language shift this session**: /azhwars, /acharyas and /map all
  left the `.dir` directory theme for the **/kshetrams design system**
  (Cormorant Garamond display via `font-display`, Mukta Malar body,
  `#5C1F00` headings, `#96731F` gold buttons with 18px `rounded-lg`
  token, `#FFFDF7` surfaces, `#C99A2E`/45 card borders → opaque gold +
  4px lift + shadow-lg on hover, 300ms; motion-reduce guards). `.dir`
  scope now wraps ONLY HomePage and AboutPage (they still use dir-jumps,
  dir-portrait, PersonPreview, TempleCard, PortraitFallback, ProfileLink).
  ui.css shared primitives (Button/Dialog/fields/SectionHeading/
  ContactDetails) stay site-wide.
- **Directory components** after round-25 deletions: TempleCard,
  PersonPreview, PortraitFallback, ProfileLink (PersonEntry and
  DirectoryHeader are DELETED). Map no longer uses any of them — its
  cards are local to the lazy MapPage chunk.
- **MapPage** (`/map`, lazy chunk, round 26/27/28 layout): title strip
  (Cormorant h1 + results summary + "My trip — N stops" gold opener) →
  full-width map frame: floating filter panel upper-left (SearchField,
  region FilterSelect, All/Visited/In-trip scope pills in kshetrams
  scope-pill styling, conditional Reset filters, **cluster-distance
  slider**), upper-right Fit results + My location on desktop / inside
  the panel below lg (matchMedia gate; jsdom defaults desktop), zoom
  control lower-left (`zoomControl={false}` + `L.control.zoom` effect),
  marker legend lower-right (hidden <sm), tile-error + loading states →
  results **grid** (1/2/3 cols, every matching temple, no scrolling):
  MapResultCard = photo band w/ "Photo unavailable" fallback, Tamil over
  English serif name, temple/place/region, actions TripControls +
  "Focus on map" + View temple + Mark as visited; name-click OR focus
  button selects + flyTo(12); selected card outlined, marker stroke-4.
  Clusters: `clusterByDistanceKm(shown, clusterKm)` below zoom 9 only,
  trip scope exempt; bubble click flyToBounds(maxZoom 9). Planner in
  shared Dialog (empty state "Your yatra starts here"/"Explore temples").
- **AzhwarsPage/AcharyasPage**: kshetrams-system cards; acharyas era
  pills have `aria-current` + IO scroll-spy (guard: `typeof
  IntersectionObserver === 'undefined'` → skipped in jsdom); sections
  scroll-mt-[88px].
- **Tests must not touch the network**: `useWikiImage` mocked in
  directory/yatraPages tests; real fetch stubbed elsewhere (vi.stubGlobal).
- Registers/dates: **TER v2.37; TCS v1.23**; user-stories.md v2.1 (Jira
  sync record with all 18 keys). UT-DTL unchanged since round 17;
  UT-ACH-02 rewritten rounds 22/25; UT-AZW-02 round 24; UT-MAP-01..03 +
  UT-TRP-02/03 rewritten rounds 26–28 (My trip opener, reset-conditional,
  narrow-controls, results-grid tests); `utils/__tests__/geo.test.js`
  gained the clusterByDistanceKm describe.

## 4. Gotchas (accumulated — ALL still valid, plus new)

1. **Unlayered legacy CSS beats every Tailwind utility.** `a {}` colors
   ALL links saffron; `h1/h2 {}` rule too. Fix with TRAILING `!` (e.g.
   `text-[#96731F]!`). Detail/kxd pages escape via scoped stylesheets.
2. Whole-card/row overlay links retired on azhwars/acharyas/map cards —
   profile + focus + action stops are separate; don't re-add overlays.
3. Split pills don't use pillBase (header temples/tours).
4. **Playwright measurement in this harness**: `getBoundingClientRect` +
   `document.fonts.ready`; REBUILD before re-measuring after CSS changes;
   `scrollTo(0,0)` before fullPage captures; preview serves
   `/108Kshetra/` on :4173. Playwright locator is **`getByLabel`** (NOT
   `getByLabelText` — that's RTL).
5. sharp: hardcode CH=4 after `ensureAlpha().raw()`.
6. Wikipedia REST summary API; hotlink only FIXED widths (wikiImage.js →
   1280px). Some dataset wiki slugs 404 (harmless console noise). On
   /acharyas the 5 wiki photos race screenshot captures — wait for
   `document.images` complete before judging photo counts.
7. Exact-match text assertions; nav "108 Kshetrams" pill collides with
   /108 kshetrams/i. RTL `getByRole` name strings are EXACT — Playwright's
   are substring (pill "Early masters (6)" broke the RTL exact test,
   not the e2e).
8. No Python — node one-liners / heredoc .mjs.
9. (was ProgressBanner/SectionNav page-dead — both DELETED in the audit,
   cc35030.)
10. **Vitest on CI (2-core) ~3-4× slower**: global `testTimeout: 15_000`.
    One e2e flake seen: TC-15 clipboard permission — re-run before diagnosing.
11. Leaflet pane z-indexes — `.kxd-map` keeps `isolate`/`z-index:0`; the
    /map frame also uses `isolate`.
12. **Live verification by CONTENT**: grep bundle names out of the page
    HTML, then `node -e "...includes(...)"` on the bundle; MapPage strings
    are in the lazy `assets/MapPage-*.js` chunk (name found by grepping
    the MAIN bundle for `MapPage-*.js`).
13. CI logs without gh auth: check-runs → annotations API.
14. Region dropdown label: `getByLabelText('Filter by region')` (map +
    browse).
15. Old gotchas: shim re-export collision; scan ALL distinct keys before
    schema-mapping; JSON key-order normalization; Vite-only imports break
    plain-node; gh CLI unauthenticated; lucide icon imports;
    `markVisited(id, true)`; `fireEvent.click` for hover UI; coverage
    exit codes behind pipes; `.zcodeignore` UNTRACKED.
16. Tests must not touch the network (wikiImage mocked in some suites;
    useWikiImage safe unmocked in pages tests).
17. jsdom accessible names join WITHOUT spaces → `/name\s*·\s*count/i`.
18. Repeated strings across hero+cards → `getAllByText(...).length >= 1`.
19. Leaflet marker culling at zoom ≥9 in headless captures — not a
    regression (TC-14 exercises the real path).
20. Trip planner lives in a modal; `?t=` links auto-open it.
21. **Hooks before early returns** (CI oxlint errors where local passes).
22. e2e specs LF (git normalized); CRLF files (HomePage/AboutPage/
    components.test.jsx, detailV3/v3Branches tests) need `/\r?\n/` regex
    patches + grep verification. **In `node -e` inside bash double
    quotes, `\r?\n` only in REGEX literals** — a string literal `'\r?\n'`
    becomes CR+`?`+LF and silently no-ops or inserts a literal `?`.
    **And markdown/code with BACKTICKS must go through a Write-tool temp
    file, never `node -e` in bash** (bash command-substitution eats them).
23. Two `renderAt()` calls in one test → `cleanup()` between.
24. Closed `<details>` hidden for toBeVisible — open expanders first.
25. Long Tamil lines: verse `<p>`s keep pre-line + overflow-wrap:anywhere.
26. Tabs unmount panels — assert panel content only after clicking its tab.
27. RTL getByText matches DIRECT text nodes — use role+accessible-name.
28. **URL hash persists across unit tests** — saintPages.test.jsx clears it
    in beforeEach.
29. Hash effect guards unknown hashes; activateTab is jsdom-safe.
30. `splitNotes` FESTIVAL_PATTERN (kshetram visit tab).
31. Write long doc appends via temp file (`Write` + `cat >>`), not heredocs.
32. **Visual-judge findings can be data-mapping bugs / stale-brief
    artifacts** — verify dataset facts (live API calls, DOM counts)
    before accepting a verdict, and re-judge with corrected facts rather
    than "fixing" the page. Rounds 25/26 both failed on harness artifacts
    (wiki-photo race, framing) that re-captures cleared.
33. `getByText` with a substring regex matches ancestors → getAllByText.
34. Relative photo paths need `assetUrl()` when rendering `<img src>`
    directly (GitHub Pages base `/108Kshetra/`).
35. Birthplace records can be `{kshetramId}` only — guard `.split`/renders.
36. Media tab: SPEAKER_PATTERN splits only the three known speaker suffixes.
37. **Leaflet flyTo does not animate the map-pane transform in this
    build** — a selected marker cannot be verified via screenshot after
    focusTemple (the pane renders stale); TC-14's hover/click-the-marker
    flow is the interactive proof. The round-26 selected-marker shot was
    WITHDRAWN for this reason.
38. 200%-zoom proxy = 640px CSS viewport + DPR 2 (NOT body.style.zoom).
39. userEvent.setup() swaps navigator.clipboard — install spies AFTER
    setup, via defineProperty.
40. CRLF files swallow `\n`-based replace() patches — regex `/\r?\n/` +
    verify (see 22).
41. directory.css variables live on the `.dir` scope — components using
    `--dir-*` render unset outside a `.dir` ancestor (home/about keep the
    wrapper for this reason).
42. **Grep piped through `head` truncates silently** — the fireEvent
    incident (v3Branches line 138 "only" match was cut off). Verify with
    full output or `-c` counts before acting on a "no other usages" claim.
43. **Scratch capture scripts must write gate shots via ABSOLUTE paths**
    (or run from repo root): a relative path run from `app/` created an
    `app/docs/...` copy that judges read as stale, mixing two capture
    generations. Delete `app/docs` if it ever reappears.
44. **MatchMedia gating**: below-lg map control placement uses
    `window.matchMedia('(min-width: 1024px)')`; jsdom has no matchMedia →
    code defaults `isDesktop=true` so desktop tests pass unchanged.
45. **Jira REST (this site)**: classic `/search` is DEAD (410) → POST
    `/search/jql`; **create-issue rejects a payload combining labels +
    description + story points** with a spurious "project" error → create
    core fields, then `PUT /issue/{key}` for labels + `customfield_10016`;
    Done transition = id 41; project id 10033. The sync script
    `docs/02-agile/sync-jira-stories.mjs` handles all of this.
46. **Seed-greedy clustering (`clusterByDistanceKm`) is non-monotone in
    the radius** — bubble counts can rise between two radius steps while
    each bubble covers more area. Not a bug; documented in TER v2.37.
47. Deleting components? Check tests FIRST (they keep test-only fossils
    alive — the audit found 7), and after page restyles re-check: a
    restyle can orphan shared components (round 25 killed PersonEntry +
    DirectoryHeader).

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 241 unit / 23 suites (global timeout 15s)
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines (~90.5%)
npm run lint             # oxlint (0 errors; 5 warnings — see TER v2.37)
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
#   then http://localhost:4173/108Kshetra/ ; fonts.ready; waitFor images complete
#   getBoundingClientRect (hero height, rail y, type scale, overflow)
#   full-page screenshots → docs/03-design/gate-shots/<round-dir>/
#   ABSOLUTE output paths (or run from repo root — gotcha 43)
#   scrollTo(0,0) before fullPage captures; 200%-zoom = 640px CSS + DPR 2

# Jira backlog sync (credentials in .env.local; gotcha 45)
node docs/02-agile/sync-jira-stories.mjs

# CI/Actions status + failure details (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/commits/<sha>/check-runs"
#   → check-runs/{id}/annotations for the failing test + file:line

# live verification by content (gotcha 12)
curl -s "https://xdpkl.github.io/108Kshetra/" | grep -oE 'assets/index-[^"]+\.js'
#   then node -e "...includes('Expected String')" on that bundle
#   MapPage strings are in the lazy assets/MapPage-*.js chunk
#   (chunk name: grep the main bundle for 'MapPage-*.js')
```

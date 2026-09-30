# HANDOVER — 108 Divya Kshetrams (2026-09-30, end of PO-mockup marathon session)

State: **Everything pushed, CI+Deploy green on `33d567f`, live verified.**
`main` = `33d567f` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ (main chunk `index-DfqukMMv.js` —
NOTE: the Map/Trip pages are a LAZY chunk, see gotcha 12 before grepping
bundles). Working tree clean. Scratch scripts deleted; no preview server on
:4173. Nothing in flight; next context starts fresh on whatever the PO
brings (likely round-6 flags or another page refresh).

## 1. What today delivered, in order (6 shipped rounds, all live)

| Commit | Work | Register |
|---|---|---|
| `36a64ea` | **Featured Kshetrams restyle** (PO mockup): 2×2 grid of horizontal photo-left cards (44% photo), deity pill, gold hairline under name, solid brown "View temple →" + outlined "Mark visited", lead → "Find your next sacred stop.", DD#/Pasuram photo tags dropped (PO confirmed). **Fixed real bug:** "Mark visited" was unclickable — whole-card overlay link (`absolute inset-0 z-0`) intercepted it; action rows now carry `relative z-10` | TER v2.10 |
| `334a6cd`+`03e2444` | **Explore page restyle** (PO mockup, static mockup-first at `docs/03-design/mockups/explore-restyle-2026-09-30/explore.html`): display header (eyebrow + serif title + lead), search + region chips in a white panel, scope checkboxes → exclusive pills (All temples / Visited (N) / In my trip (N)), State/Deity-form/Azhwar selects into a collapsed "More filters" disclosure, serif "N kshetram(s)" count (`.result-count` kept), restyled cards (gold `#96731F` View temple, region pill only, "Add to trip"/"In trip" chip). Title "Browse the…" → "Explore the 108 Divya Desams", lead → "Find a sacred place. Plan your next darshan." Full test lockstep (count strings, `+ Trip`→`Add to trip`, pill clicks, disclosure-open steps). `03e2444` fixed a CI-only vitest timeout (gotcha 10) | TER v2.11 |
| `2efe66f` | **Gopuram illustration** (PO artwork): converted via `make-hero-image.mjs` → `src/assets/gopuram-illustration.jpg` (1860×846, 77 KB); replaced the ◆/line-art in browse card "Photo coming soon" placeholders (full-bleed object-cover) and the explore header art; `GopuramArt.jsx` deleted | TER v2.12 |
| `85f9345` | **Explore watermark header** (PO request): illustration promoted to a watermark occupying the right half of the header (`w-1/2`, object-contain, two-axis `mask-image` fade left+bottom, opacity-80), quote floats over its sky area; title 52→48px to keep one line in the narrower column | TER v2.13 |
| `23e094e` | **Map page refresh** (PO mockup; after clarifying the snap = Map page, not Trip): display header + lotus "Divine Abodes / Timeless Grace" ornament, sidebar (360px) with All/Visited/In-trip scope pills + region chips + nearest cards (photo, View temple, TripControls, Mark visited, Focus, Directions), map 640px with **Fit all temples** (`mapApi.fitBounds`), on-map legend bar (Temple/Visited/In trip), count badge under Fit-all (moved off the Leaflet zoom control after the visual gate caught clipping) | TER v2.14 |
| `33d567f` | **Map + Trip MERGED into the Yatra Atlas** (PO chose "one page replaces both" + "dropdown replaces chips"): sidebar gains search box (`matchesSearch` from `utils/filter.js`) and an "All regions" `<select>` (chips removed); **hand-rolled cluster bubbles** (grid in Leaflet layer space, 70px cells, only with a live map instance below zoom 9 — `Marker` + `L.divIcon` saffron count bubble, click → `flyToBounds`; singles keep CircleMarker/Tooltip/Popup; **In-trip scope never clusters**); trip planner section below the map (meta `.trip-page__meta`, Share/Print/Add temples/Clear rail, By region/Route-order chips, Order-my-route, Darshan Done/Remove rows, EmptyState); **route overlay on the atlas**: In-trip scope draws the dashed polyline + numbered stop tooltips (view-order aware). Share emits `/map?t=`; `/trip` → `TripRedirect` (`<Navigate>` preserving `?t=`); header My Yatra pill + drawer link → `/map` (always idle; Map pill carries active). `TripPage.jsx`, `TripMap.jsx`, `TripMapInner.jsx` DELETED. `isolate` on the map frame (gotcha 11) | **TER v2.15** / TCS v1.8 |

Final gates at handoff: **211/211 unit (21 suites) · 19/19 e2e · coverage
90.58% stmts / 82.99% branches / 84.74% funcs / 91.83% lines (gate 80% —
dipped from 92% because TripPage's dedicated tests folded into atlas flows;
watch it) · oxlint 0 errors / 5 accepted warnings · build clean · CMS
round-trip 11/11 lossless + `sync-content --fixture --check` 0 diffs ·
visual gates all green** (featured 4/4, explore 3/3, artwork 2/2, watermark
2/2, map 2/2 after badge fix, atlas 3/3 after isolate fix).

Current key measurements: explore header title **48px, one line at 1440**;
watermark **576×290 right-half**, masked edges; browse cards photo **44%**,
action row `px-3.5 gap-2.5` (px-4/gap-3 wraps); atlas sidebar **360px** +
map **640px** (lg); cluster bubbles at zoom ≤ 8, ~10 at the default zoom 6.

## 2. Open items / likely next requests

- **More PO fix lists** — the PO iterates fast (6 rounds today). Proven
  process: map → measure → fix → re-measure → gates → TER → commit → push →
  CI/live check. For design asks: static HTML mockup first
  (`docs/03-design/mockups/explore-restyle-2026-09-30/explore.html` is the
  approved explore reference; home: `refresh-2026-09/home.html`) — iterate
  via screenshots + visual-judge, then implement. Note: AskUserQuestion can
  return NO answer when unattended — then proceed with best judgment and
  flag the decision.
- **Round-6 flags**: (a) browse cards dropped the deity pill + "N Pasurams"
  tag (mockup-faithful; detail pages keep both — restore on request);
  (b) header now has BOTH "Map" and "My Yatra" pills pointing to `/map` —
  label consolidation is a PO decision; (c) old plaque watermark asset +
  `make-hero-watermark.mjs` still unused — cleanup candidates; (d) "Reset
  progress" quiet link under the home tracker still kept (TC-13).
- **Naming deltas** PO image vs dataset ("Thiruvenkatam" vs
  "Thiruvengadam") remain dataset-owned; cards render dataset values.
- **Photos pending from PO**: Kulasekhara + Thiruppaan strip tiles (◆
  fallback — no enwiki lead image), CEO portrait (admin-gated controls),
  Srivilliputhur card, scaffold acharya dossiers. Photos resolve via
  `useWikiImage` / enrichment (unchanged pipeline).
- **Jira sync** still pending a fresh API token. `docs/03-design/mockups-v3/`
  stays deleted (PO decision 2026-09-25). PO Sanity setup (~20 min,
  `studio/README.md`) unchanged; repo JSON is the `npm run import` source.
- **Coverage drift watch**: 90.58% vs gate 80% — fine, but the merge
  dropped it ~1.6pt; if another refactor drops ~5pt more it gets tight.

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims preserve old
  import paths — do not bypass. UI reaches data ONLY via `data/api.js`.
  Transforms in `studio/scripts/lib/` are GENERIC for siteCopy (spread +
  `*[_id=="siteCopy"][0]`) — new site-copy fields only need app JSON +
  `studio/schemas/siteCopy.js` + verify/fixture regen (did this for
  `browse.quote`; no GROQ/transform edits needed).
- **Home** (unchanged today): full-bleed hero 364px, YatraProgressTracker,
  FeaturedKshetrams (2×2 horizontal `FeaturedKshetramCard`), SaintStrip
  bands; App.jsx main drops the container on `/`.
- **Explore/BrowsePage** (2026-09-30): display header + watermark; white
  panel (search + region chips incl. "Vinnulagam"); scope pills (exclusive,
  `aria-label="Showing"` group); "More filters" disclosure (selects keep
  aria-labels State/Deity form/Azhwar); serif count "N kshetram(s)" in
  `.result-count` (singular handled); KshetramCard = photo h-52, gopuram
  illustration placeholder, "Add to trip"/"In trip" chip, DD tag, region
  pill only, action row `relative z-10`.
- **Yatra Atlas / MapPage** (2026-09-30 merge; lazy chunk): sidebar search +
  region dropdown (`aria-label="Filter by region"` on the SELECT — the group
  wrapper has no label, getByLabelText matches only the select) + scope
  pills (group "Showing") + nearest cards (GPS-gated, `NearestCard`);
  clusters (`CLUSTER_MAX_ZOOM = 8`, `CLUSTER_CELL_PX = 70`) computed in a
  memo keyed on `[mapApi, shown, scope, clusterTick]` with a
  `zoomend moveend` listener bumping `clusterTick`; trip section (group
  "Trip view", `.trip-page__meta`, share-restore effect with
  `appliedShare` ref); route overlay via `mapStops`/`mapLegs` when
  `scope === 'trip'`; share URLs `/map?t=`; TripRedirect in App.jsx.
- Header: My Yatra pill + drawer "My Yatra Route" link → `/map`, always
  idle style; `isTripActive` was removed from Header.jsx.
- Admin gate: `isAdminSession()` in AboutPage — localStorage
  `kshetra_admin=1` via `/about?admin=1`, revoke `?admin=0`.
- Photo pipeline: card 640 / portrait 800 / lightbox 1280 baked into sync;
  `wiki` title = no-photo fallback; PO artwork conversion via
  `node scripts/make-hero-image.mjs <in> <out>` (sharp).
- Registers/dates: **TER v2.15; TCS v1.8**; US-CMS-01.

## 4. Gotchas (accumulated — ALL still valid, plus new)

1. **Unlayered legacy CSS beats every Tailwind utility.** Offenders: `a {}`
   (scoped out of header nav; 2026-09 pages pin link colors with `!` bangs),
   `h1 {}` (hero + explore/map h1 use `!`), `h2/h3 {}` (home headings +
   browse/map card h3s pin with `!`). Grep `styles/*.css` before fighting a
   utility. Tailwind v4 important = TRAILING bang (`text-[#7A2E00]!`).
2. **Whole-card overlay links (`absolute inset-0 z-0`) intercept clicks** on
   any action button that isn't `z-10`. Both card components now lift their
   action rows (`relative z-10`). Any new card keeps this rule.
3. **Split pills don't use pillBase** (header temples/tours) — apply pill
   idiom changes to all three or they diverge. Nav children get
   shrink/nowrap from the nav's `[&>*]:` variants.
4. **Images in this harness**: prefer deterministic Playwright
   `getBoundingClientRect()` over screenshots; wrap checks need CENTER-LINE
   spread + bucketing; `await page.evaluate(() => document.fonts.ready)`
   before measuring; scratch scripts live in `app/` and are deleted after;
   preview serves `/108Kshetra/` on :4173 — kill/restart when unsure
   (stale dist).
5. **sharp**: hardcode CH=4 after `ensureAlpha().raw()`.
6. **Wikipedia photos**: REST summary API; enwiki has no lead image for
   Kulasekhara/Thiruppaan Alvar, Vedanta Desika. Hotlinking thumbs: only
   FIXED widths (330/500/960/1280/1920…).
7. **Exact-match text assertions**: use `{ exact: true }` / exact strings,
   never regex, for absence tests ("Nalayira Divya Prabandham", count
   strings). Careful: nav "108 Kshetrams" pill collides with /108
   kshetrams/i regexes — scope to `.result-count`.
8. **No Python** — node one-liners / heredoc `.mjs`.
9. `ProgressBanner.jsx` is app-dead (tests only); live tracker is
   `YatraProgressTracker`.
10. **Vitest per-test timeout is 5s and CI runners are 2-core**: heavy
    jsdom tests (multiple 108-card renders) exceed it on CI while passing
    locally (~1.3s). The two heavy v3Branches browse tests carry explicit
    `15_000` timeouts + `userEvent.setup({ delay: null })`. If a new test
    renders the full browse grid repeatedly, give it a timeout.
11. **Leaflet pane z-indexes (200–800) escape a non-isolated container** and
    cover the sticky header (`z-50`) once the page scrolls — the map frame
    carries `isolate`. Keep it when touching the map chrome.
12. **Lazy-chunk live verification**: MapPage is a lazy chunk
    (`dist/assets/MapPage-*.js`) — map/trip strings are NOT in the main
    bundle; grep the chunk referenced by the live main bundle. CI (Linux)
    build hashes differ from local Windows builds — verify by CONTENT, not
    by matching hashes. Also: ugrep misbehaves on 1.2MB single-line bundles
    — use `node -e "...includes(...)"`.
13. **CI logs without gh auth**: fetch failure details via
    `GET /repos/XdPkl/108Kshetra/commits/<sha>/check-runs` →
    `check-runs/{id}/annotations` — gives the exact test + file:line
    (public repo, no token).
14. **Region dropdown label**: `getByLabelText('Filter by region')` matches
    the select only (the wrapper div has no role/label — a group with the
    same aria-label causes "multiple elements" errors).
15. Old gotchas: shim re-export collision (rolldown PARSE_ERROR); scan ALL
    distinct keys before schema-mapping; `sanity schema validate` needs
    placeholder project id; JSON key-order normalization; Vite-only imports
    break plain-node; gh CLI unauthenticated (curl api.github.com + node
    one-liners); lucide icon imports; `markVisited(id, true)`;
    `fireEvent.click` for hover UI in jsdom; coverage exit codes behind
    pipes; `.zcodeignore` stays UNTRACKED (also in `.git/info/exclude`).

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 211 unit / 21 suites
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines (now ~90.6%)
npm run lint             # oxlint (0 errors; 5 accepted warnings)
npm run build            # production build
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

# visual smoke + layout measurement (script lives in app/, delete after)
(npm run preview -- --port 4173 --strictPort &)
#   then http://localhost:4173/108Kshetra/ ; fonts.ready; getBoundingClientRect
#   nav sweep: one row (center-line spread <4px), no viewport overflow

# CI/Actions status + failure details (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/commits/<sha>/check-runs"
#   → check-runs/{id}/annotations for the failing test + file:line
```

# HANDOVER — 108 Divya Kshetrams (2026-10-01, end of Plan-Yatra/Azhwar session)

State: **Everything pushed, CI+Deploy green on `d241501`, live verified.**
`main` = `d241501` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ — verify bundles by CONTENT, not by
hash (CI Linux builds hash differently than local Windows; and the Map and
Azhwar pages' strings may live in the main bundle or lazy chunks — see
gotcha 12). Working tree clean. No preview server on :4173. Scratch scripts
deleted. Nothing in flight; next context starts fresh on whatever the PO
brings (they iterate fast — five more rounds shipped today).

## 1. What today delivered, in order (5 PO rounds + 2 CI fixes, all live)

| Commit | Work | Register |
|---|---|---|
| `cc072dc` + `556fcfc` | **"Plan your Yatra" round** (PO list): temple matrix BELOW the atlas — cards always listed (no more GPS gating), distances only after "Show my location" (then nearest-first); header "Map" + "My Yatra" pills merged into one **"Plan Yatra"** pill (drawer entries merged too); map popup "Open page" → gold `#96731F` text link **"Show Temple"**; page title → "Plan your Yatra" (site copy + CMS fixture); gopuram ornament added then **removed** (`64b85af`, PO round 8 — the "attached icon" never reached the repo). `556fcfc` CI fix: **global `testTimeout: 15_000` in vite.config.js** + `vi.mock` of `utils/wikiImage.js` in the two atlas-heavy suites (tests were firing real Wikipedia fetches per photo-less card) | TER v2.16 / TCS v1.9 |
| `72c3339` | **Left-column arrangement** (PO snap): the whole yatra stack (eyebrow, title, status line, Show my location, search, region dropdown, scope pills, GPS card) moved INTO the 360px left column beside the map; title 36/40px keeps one line | TER v2.17 |
| `293e039` + `e9eebb7` | **Trip planner modal** (PO): the planner section below the map became a `role="dialog"` modal (AboutPage ScheduleModal idiom) opened by a big gradient **"My Yatra — Trip Planner {N}"** button spanning the left column; live stop-count badge; Escape/backdrop/✕ close; `?t=` share links **auto-open** the modal; page edits reflect in the modal instantly. `e9eebb7` CI fix: v3Branches atlas-extras test needs an explicit **30s** timeout (three full 108-card renders on 2-core runners) | TER v2.18 |
| `d241501` | **Azhwar detail recreated to the PO snap** (round 11): portrait hero (Poigai photo; Thiruman placeholder for the other 11), derived eyebrow ("The first/second/third of the Mudhal Azhwars" for orders 1–3), epithet + alias chips, derived lead, stat row (book "N pasurams" | gopuram "N Divya Desams"), Birthplace/Birth-star/Divine-amsam icon row (pin/star/Shanka conch; amsam cell hidden for madhurakavi+kulasekhara); **net-new accessible five-tab dossier** (Life & tradition with "Read the complete life story" expander + KEY MOMENTS rail · Hymns & meaning · Sacred places (N) · Media · Sources); persistent opening-verse band ("Read verse & meaning" → Hymns tab; "Find recitations" → archive.org); Birthplace/Sacred-places cards; sources row → Sources tab; prev/next nav. **Content is dataset-mapped (PO-confirmed decision)** — the snap's condensed phrases are NOT in the data; `SaintPortrait.jsx` + `SaintKeyMoments.jsx` new; `Identification.jsx` refactored to compose SaintPortrait (Acharya page keeps its own Identification/SaintTimeline/SaintLegend untouched) | TER v2.19 / UT-AZW-03 rewritten |

Final gates at handoff: **216/216 unit (21 suites) · 19/19 e2e · coverage
90.22% stmts / 82.39% branches / 85.14% funcs / 91.53% lines (gate 80%) ·
oxlint 0 errors / 5 accepted warnings · build clean · CMS round-trip
lossless (site-copy `map.title` = "Plan your Yatra" in fixture too) ·
visual gates all green** (plan-yatra: matrix/popup/no-ornament/left-stack/
planner-button/modal; azhwar-restyle: hero/full/hymns/390).

Current key measurements: atlas left column **360px** + map (lg) right;
title 36/40px one line; temple matrix `sm:grid-cols-2 xl:grid-cols-3`;
popup gold `#96731F`; azhwar hero portrait 280px; verse-band gold gradient
button; tabs = the ONLY `role="tablist"` in the codebase (azhwar page).

## 2. Open items / likely next requests

- **More PO fix lists** — the PO iterates fast (11 rounds in two days).
  Proven process: implement (snap/mockup-first only when the design is
  open-ended — this session's snaps WERE the approved designs) → measure →
  gates → TER → commit → push → CI/live check. AskUserQuestion can return
  NO answer when unattended — proceed with best judgment and flag.
- **PO "attached" images may not reach the repo** (happened in round 7:
  "change the icon to the attached one" with no file). Flag the decision,
  use the nearest existing asset, swap when the real asset arrives.
- **Azhwar content**: if the PO wants the snap's exact condensed copy
  ("From the lotus pond to the lamp of wisdom", short key-moment titles,
  verse "Meaning:" lines), that means authoring new fields in
  `azhwar-details.json` for all 12 azhwars — PO-owned content, not yet
  requested. Currently mapped from `lifeHistory`/`timeline`/`verse.significance`.
- **Round-6 flags still open**: browse cards keep the dropped deity pill +
  Pasuram tag (restore on request); old plaque watermark asset +
  `make-hero-watermark.mjs` unused — cleanup candidates; "Reset progress"
  quiet link kept (TC-13); naming deltas dataset-owned.
- **Photos pending from PO**: Kulasekhara + Thiruppaan strip tiles, CEO
  portrait, Srivilliputhur card, scaffold acharya dossiers. Photos resolve
  via `useWikiImage`/enrichment (azhwar portraits: `photos[]` in
  azhwar-details.json — only Poigai has one).
- **Jira sync** still pending a fresh API token. `docs/03-design/mockups-v3/`
  stays deleted (PO decision 2026-09-25).
- **Coverage drift watch**: 90.22% vs gate 80% — fine, but the atlas matrix
  and azhwar tabs keep adding render weight; CI is 2-core (see gotcha 16).

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims preserve old
  import paths — do not bypass. UI reaches data ONLY via `data/api.js`.
  Site-copy fields: app JSON + fixture `sync-response.json` must change
  TOGETHER (`sync-content --fixture --check` must stay 0-diff).
- **Plan Yatra / MapPage** (lazy chunk): left 360px column = whole yatra
  stack + big trip-planner opener; map frame (`isolate`, Fit-all, legend,
  count badge); temple matrix below the map (`cardList` memo — km only when
  `me` set); popup "Show Temple" gold link; trip planner in `plannerOpen`
  modal (auto-open on `?t=` restore); In-trip scope draws route overlay;
  cluster bubbles below zoom 9 (`CLUSTER_MAX_ZOOM = 8`, `CLUSTER_CELL_PX = 70`).
- **AzhwarDetailPage**: breadcrumb+next pill → hero (SaintPortrait) → stat
  row → birth-facts row → tablist (`tab`/`setTab`, `TAB_IDS`, roving focus
  via `tabRefs`) → verse band → cards → sources row → prev/next. Tab content
  unmounts on switch (tests must click tabs before asserting tab content).
- Header: single **"Plan Yatra"** pill → `/map` (active on /map, live trip
  badge); drawer merged entry; `/trip` still redirects to `/map`.
- Admin gate: `isAdminSession()` in AboutPage — localStorage
  `kshetra_admin=1` via `/about?admin=1`, revoke `?admin=0`.
- Registers/dates: **TER v2.19; TCS v1.9** (UT-AZW-03 rewritten); US-CMS-01.

## 4. Gotchas (accumulated — ALL still valid, plus new)

1. **Unlayered legacy CSS beats every Tailwind utility.** Offenders: `a {}`
   (gold links need `text-[#96731F]!`), `h1 {}` / `h2 {}` (display text uses
   trailing `!`: `text-[44px]! text-[#5C1F00]!`). Grep `styles/*.css` before
   fighting a utility. Tailwind v4 important = TRAILING bang.
2. **Whole-card overlay links intercept clicks** — action rows need
   `relative z-10` (browse + atlas cards carry it; keep the rule).
3. **Split pills don't use pillBase** (header temples/tours) — apply pill
   idiom changes to all three.
4. **Images in this harness**: prefer deterministic Playwright
   `getBoundingClientRect()`; wrap checks need CENTER-LINE spread + bucketing;
   `document.fonts.ready` before measuring; scratch scripts live in `app/`,
   delete after; preview serves `/108Kshetra/` on :4173 — kill/restart when
   unsure.
5. **sharp**: hardcode CH=4 after `ensureAlpha().raw()`.
6. **Wikipedia photos**: REST summary API; hotlink only FIXED widths.
7. **Exact-match text assertions**: `{ exact: true }` / exact strings for
   absence tests; nav "108 Kshetrams" pill collides with /108 kshetrams/i.
8. **No Python** — node one-liners / heredoc `.mjs`.
9. `ProgressBanner.jsx` is app-dead; live tracker is `YatraProgressTracker`.
10. **Vitest on CI (2-core) is ~3-4× slower than local**: global
    `testTimeout: 15_000` lives in `vite.config.js`; the v3Branches
    atlas-extras test carries an explicit **30_000**. Any test that renders
    the 108-card atlas matrix repeatedly (mount + locate + clear = 3 full
    renders) needs headroom.
11. **Leaflet pane z-indexes** escape a non-isolated container — the map
    frame carries `isolate`; keep it.
12. **Lazy-chunk live verification**: grep the LIVE bundle by CONTENT via
    `node -e "...includes(...)"` (ugrep chokes on 1.2MB single-line files).
    Note: as of d241501 the azhwar strings live in the MAIN bundle; MapPage
    strings are in the lazy `MapPage-*.js` chunk referenced by it.
13. **CI logs without gh auth**: `GET /repos/XdPkl/108Kshetra/commits/<sha>/
    check-runs` → `check-runs/{id}/annotations` gives the exact failing test
    + file:line (public repo, no token). Both CI failures this session were
    caught this way.
14. **Region dropdown label**: `getByLabelText('Filter by region')` matches
    the select only.
15. Old gotchas: shim re-export collision; scan ALL distinct keys before
    schema-mapping; sanity schema validate placeholder id; JSON key-order
    normalization; Vite-only imports break plain-node; gh CLI unauthenticated;
    lucide icon imports; `markVisited(id, true)`; `fireEvent.click` for hover
    UI; coverage exit codes behind pipes; `.zcodeignore` UNTRACKED.
16. **NEW — tests must not touch the network**: `utils/wikiImage.js` is
    `vi.mock`ed in `yatraPages.test.jsx` and `v3Branches.test.jsx` (photo-
    less cards otherwise fire real Wikipedia fetches ×108). If a new heavy
    suite renders KshetramCard/NearestCard grids, add the same mock.
17. **NEW — jsdom accessible names join WITHOUT spaces**: the planner opener
    button's accessible name is "My Yatra — Trip Planner1" — match counts
    with `/trip planner\s*1/i`, never `/planner 1/i`.
18. **NEW — repeated strings across hero+cards**: azhwar birthplace name and
    district render in BOTH the hero facts row and the cards row → use
    `getAllByText(...).length >= 1`, not `getByText` (strict-mode duplicate
    errors).
19. **NEW — Leaflet marker culling in headless/IAB captures**: at zoom ≥ 9
    most CircleMarker paths cull to `d="M0 0"` and are unclickable there —
    verified identical on the old live build; NOT a regression. e2e TC-14
    exercises the real click path in Playwright.
20. **NEW — trip planner lives in a modal**: any test asserting trip content
    (empty state, meta `.trip-page__meta`, Order/Share/Clear, remove rows)
    must click the "My Yatra — Trip Planner" opener first; `?t=` links
    auto-open it. The opener badge and header Plan Yatra badge update live.

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 216 unit / 21 suites (global timeout 15s)
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines (~90.2%)
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

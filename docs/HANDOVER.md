# HANDOVER — 108 Divya Kshetrams (2026-10-01, end of Kshetram-detail restyle session)

State: **Everything pushed, CI+Deploy green on `10b30e0`, live verified.**
`main` = `10b30e0` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ — verify bundles by CONTENT, not by
hash (CI Linux hashes differ from local Windows; verify via
`node -e "...includes(...)"` on the live `assets/index-*.js` — gotcha 12).
Working tree clean. No preview server on :4173. Scratch scripts deleted.
Nothing in flight; next context starts fresh on whatever the PO brings
(they iterate fast — 17 rounds in ~three days).

## 1. What this session delivered (PO rounds 16 + 17, all live)

| Commit | Work | Register |
|---|---|---|
| `97bbb33` | **Kshetram detail recreated to the triplicane mock** (round 16): PO supplied a standalone `triplicane.html` design reference; page rebuilt under a `.kxd`-scoped stylesheet (`src/styles/kshetram-detail.css`) with the mock's paper/rust palette (`#faf2e3` surface, `#922e0d`/`#ae3712`/`#a77529`) and Source Serif 4 + DM Sans + Noto Serif Tamil (fonts added to `index.html`). Split hero with trip/visited pills + **status toast** (auto-clear ~4.5s) via new `onNotify` prop; **URL-hash-synced seven-tab switcher** (`#location` deep links, hashchange listener, safe fallbacks); flat ruled sections replacing the ZipSection cards (glance fact sheet, deity columns, story grid + Prathyaksham aside + significance blockquote, verse cards + word-by-word glossary tables + Commentary + Explore-the-Azhwars, Plan-your-darshan + Quick-facts card, Find-the-temple, numbered What-to-look-for markers). Section components restyled IN PLACE (same files/props). `TripControls`/`VisitedToggle`/`PageActions`/`DistanceFromMe` gained `variant="kxd"` (defaults unchanged for map popups etc.). NearbyDesams restyled (`.nearby__list` hook kept for e2e). **ZipSection.jsx DELETED** (page-dead; was handover cleanup candidate). Mock-authored copy rendered dataset-mapped (rounds-11–15 precedent, flagged); Overview pasuram cell + "Explore the hymns" button dropped per mock (restorable) | TER v2.24, TCS v1.10 |
| `10b30e0` | **Kshetram detail compacted per PO UX audit** (round 17): audit of live /kshetram/srirangam with computed sizes → implemented with Playwright measurements. **Type scale** (scoped `.kxd`): hero 72→56px/62px (mobile 36px), Tamil 28px, temple name 22px, panel h2 32px, h3 24px, sidebar 26px, body 17px/28px (mobile 16/27), tabs 16/15px, verse 22/40px, translit 17/28px, notes 14px. **Hero 511→400px @1280** (top-aligned, 40px gap, audit's 8px rhythm, 58ch summary), photo fixed 300px/200px. **Sticky 48px tab rail** (opaque ivory, top 64/56px under the sticky header, right-edge fade, 2px rust underline) with **scroll-into-view activation** (rAF + scroll-margin-top; verified in-browser) and off-screen tab bring-into-view; Home/End kept. **Overview restructured**: fact sheet under the article column beside a 310px visit card; intro = factual `profile.location` (mythology stays in History); **dossier-first deity names** fix the "Nam Perumal"/"Periya Perumal" Overview-vs-Deities mismatch. **wikiImage 1280px**: thumb URL rewritten to a fixed 1280px Wikimedia width (fixes soft hero photo; fixed-width hotlink rule kept). Per-tab: curated-`src`-only deity photos ("Deity photo not available." + Name/Form/Meaning labels + sanctum callout); Origin legend / Temple history headings + gold-marker milestones; 3-column Azhwar name/count list (2-col mobile); glossary+commentary in `<details>` disclosures; **"Special darshan timings" / "Festival note"** split of `timings.notes`; four empty visit rows → one collapsed note; Media panel retitled **"Sacred features & resources"**; map 360/260px + loading placeholder; 52px nearby rows. **Header (global, audit item 4)**: flat `#7A2E00` + single 1px rule, 64/56px, 16px labels, 22/18px logo, "Guided Yatras" badge removed from desktop nav — dropdowns/drawer/tested strings untouched, verified on Home+Azhwars | TER v2.25, TCS v1.11 |

Final gates at handoff: **223/223 unit (21 suites) · 19/19 e2e · coverage
89.98% stmts / 81.47% branches / 85.76% funcs / 91.58% lines (gate 80%) ·
oxlint 0 errors / 4 accepted warnings · build clean · CMS round-trip
lossless · visual gates green** (round 16: 10/10 under
`docs/03-design/gate-shots/kshetram-detail-restyle-16/`; round 17: 12/12
under `.../kshetram-detail-restyle-17/`, includes Home/Azhwars header
checks).

Current key measurements (kshetram detail @1280): hero 400px, tab rail at
document y≈537 (in-viewport), header 65px incl. rule, sidebar 310px, photo
300px; @390 hero ~698px, photo 200px; all audit type-scale values verified.

## 2. Open items / likely next requests

- **More PO fix lists** — PO iterates fast (17 rounds). Proven process:
  implement (audit/mock-first) → measure with a Playwright scratch script
  → gates → TER → commit → push → CI/live check (verify by content).
- **PO may extend the audit to other pages**: the compact type scale +
  sticky-rail idiom now exist only on kshetram detail; azhwar/acharya
  detail still use the round-11..14 scale. Header change is global —
  watch for PO feedback on other pages.
- **PO-owned content pending** (flagged in TERs): triplicane-mock authored
  copy (intro text, story titles, five-forms list, "Distinctive form"
  prose), azhwar/acharya condensed copy, real captioned deity/media
  imagery, cited history links, Kulasekhara + Thiruppaan strip tiles, CEO
  portrait, Srivilliputhur card, scaffold acharya dossiers, azhwar
  portraits (only Poigai has `photos[]`).
- **Jira**: stories through US-CMS-01 synced (DTRPR108K-1..76). Authoring
  PO-round stories (rounds 5..17 work) NOT started. **API token from the
  earlier sync should be revoked** (was exposed in chat history).
- **Coverage drift watch**: branches 81.47% vs gate 80% — headroom is thin
  (~1.5pp). New UI branches (hash sync, kxd variants, notes splitter) are
  covered; any new conditional needs a test or the gate trips. CI is
  2-core (gotcha 10/16).
- **Timings duplication** (sidebar + Visit tab "Special darshan timings")
  persists by design — PO hasn't asked to dedupe; the Visit tab was
  redesigned in round 17 anyway.
- **SectionNav.jsx still page-dead** (own test renders it). Cleanup
  candidates alongside: browse cards' dropped deity pill + Pasuram tag
  (restore on request), plaque watermark + make-hero-watermark.mjs unused,
  "Reset progress" quiet link kept (TC-13).

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims preserve
  old import paths — do not bypass. UI reaches data ONLY via
  `data/api.js`. Site-copy fields: app JSON + fixture
  `sync-response.json` must change TOGETHER (`sync-content --fixture
  --check` 0-diff). Kshetram traditional serial = `enriched.serial` from
  dossier-templates.json (NOT `getDDSerial` array order).
- **KshetramDetailPage** (rounds 16–17): `.kxd` wrapper + page-scoped
  `kshetram-detail.css` (imported last in main.jsx; selectors scoped to
  out-specify unlayered base.css). Compact split hero → sticky `.tabs-rail`
  (tablist inside; hash sync via `activateTab`) → single unmounting
  tabpanel. Toast = `.status` div fed by `onNotify` from trip/visited.
  Celestial gating unchanged (5 tabs, no sidebar, CELESTIAL_NOTE).
- **Six section components** restyled in place, no ZipSection:
  ShrineProfile (fact rows, posture "Unique feature:" → Distinctive form),
  DeityBreakdown (curated-src photos only, parseNames splits the dossier
  names blob), PuranamHistory (legend "Title — body" split; Prathyaksham
  extracted from "Prathyaksham:" legend items or the field; timeline →
  milestones), MangalasasanamSection (verseLines splits "*" → <br/>;
  glossary/commentary in `<details class="disclosure">`), VisitInfoSection
  (splitNotes: FESTIVAL_PATTERN /ekad[ai]si|utsavam|festival|brahmotsavam/
  routes notes sentences), VisualsMedia (descriptions "Title: body" →
  markers).
- **Header.jsx**: flat `#7A2E00`, `h-14 lg:h-16`, pillIdle/pillActive
  constants (bang `text-[#E2C47C]!` still needed — unlayered
  `.site-header nav a { color: inherit }` in base.css beats utilities).
  No "Guided Yatras" badge in desktop nav.
- **wikiImage.js**: fetchWikiImage upscales REST-summary thumbs to fixed
  1280px (`upscaleThumb` rewrites `…/NNNpx-…` on `/thumb/` URLs; falls
  back to originalimage ≤4000px, else the raw thumb). WikiThumb's
  stubbed-fetch test still passes.
- Header: single "Plan Yatra" pill → `/map`; `/trip` → `/map`. Admin gate:
  `isAdminSession()` in AboutPage — localStorage `kshetra_admin=1` via
  `/about?admin=1`, revoke `?admin=0`.
- Registers/dates: **TER v2.25; TCS v1.11** (UT-DTL rewritten rounds 16–17;
  TC-08/TC-16 updated both rounds; UT-AZW-01..03, UT-ACH-02/03 unchanged
  since rounds 12–14). Jira sync v2.0 record in
  `docs/02-agile/user-stories.md`.

## 4. Gotchas (accumulated — ALL still valid, plus new)

1. **Unlayered legacy CSS beats every Tailwind utility.** Offenders: `a {}`
   (gold links need `text-[#96731F]!`), `h1 {}` / `h2 {}` (display text
   needs trailing `!`), `.site-header nav a { color: inherit }`. Grep
   `styles/*.css` before fighting a utility. Tailwind v4 important =
   TRAILING bang. The kshetram page avoids this by scoping `.kxd h1` etc.
   in `kshetram-detail.css` (0,1,1 specificity wins).
2. **Whole-card/row overlay links intercept clicks** — non-interactive
   content needs `pointer-events-none` (azhwars cards, acharya roster
   rows, azhwar detail cards; TC-18/TC-19 catch its absence).
   Interactive children re-enable with `pointer-events-auto`.
3. **Split pills don't use pillBase** (header temples/tours) — apply pill
   idiom changes to all three.
4. **Images in this harness**: prefer deterministic Playwright
   `getBoundingClientRect()`; wrap checks need CENTER-LINE spread +
   bucketing; `document.fonts.ready` before measuring; scratch scripts
   live in `app/`, delete after; preview serves `/108Kshetra/` on :4173 —
   kill/restart when unsure; **playwright is importable only from `app/`**
   (run scratch scripts with cwd=app).
5. **sharp**: hardcode CH=4 after `ensureAlpha().raw()`.
6. **Wikipedia photos**: REST summary API; hotlink only FIXED widths —
   `wikiImage.js` now rewrites to fixed 1280px (round 17); don't hotlink
   arbitrary widths.
7. **Exact-match text assertions**: `{ exact: true }` / exact strings for
   absence tests; nav "108 Kshetrams" pill collides with /108 kshetrams/i.
8. **No Python** — node one-liners / heredoc `.mjs`.
9. `ProgressBanner.jsx` is app-dead; live tracker is `YatraProgressTracker`.
   `SectionNav.jsx` is page-dead (only its own test renders it).
10. **Vitest on CI (2-core) is ~3-4× slower than local**: global
    `testTimeout: 15_000` in `vite.config.js`; v3Branches atlas-extras
    test carries explicit 30_000. Headroom for 108-card matrix renders.
11. **Leaflet pane z-indexes** escape a non-isolated container — the map
    frame carries `isolate`/`z-index:0` (`.kxd-map`); keep it.
12. **Lazy-chunk / live verification**: grep the LIVE bundle by CONTENT via
    `node -e "...includes(...)"` (ugrep chokes on 1.2MB single-line files).
    ⚠️ when enumerating `dist/assets` or live assets by prefix, note
    `index-*.css` ALSO matches `index-` — pick the `.js` explicitly.
13. **CI logs without gh auth**: `GET /repos/XdPkl/108Kshetra/commits/<sha>/
    check-runs` → `check-runs/{id}/annotations` gives the exact failing
    test + file:line (public repo, no token).
14. **Region dropdown label**: `getByLabelText('Filter by region')` matches
    the select only.
15. Old gotchas: shim re-export collision; scan ALL distinct keys before
    schema-mapping; sanity schema validate placeholder id; JSON key-order
    normalization; Vite-only imports break plain-node (test data via
    vitest, not `node -e import api.js`); gh CLI unauthenticated; lucide
    icon imports; `markVisited(id, true)`; `fireEvent.click` for hover UI;
    coverage exit codes behind pipes; `.zcodeignore` UNTRACKED.
16. **Tests must not touch the network**: `utils/wikiImage.js` is
    `vi.mock`ed in `yatraPages.test.jsx` and `v3Branches.test.jsx` (and
    detailV2 stubs fetch for WikiThumb). Keep mocks in sync if
    `fetchWikiImage`'s contract changes.
17. **jsdom accessible names join WITHOUT spaces**: match with
    `/name\s*·\s*count/i` style regexes (e.g. the Azhwar list links
    "Thirumangai Azhwar · 73").
18. **Repeated strings across hero+cards**: use `getAllByText(...).length
    >= 1`, not `getByText`.
19. **Leaflet marker culling in headless/IAB captures**: at zoom ≥ 9 most
    CircleMarker paths cull to `d="M0 0"` — NOT a regression; e2e TC-14
    exercises the real click path.
20. **Trip planner lives in a modal**: trip-content tests must click the
    "My Yatra — Trip Planner" opener first; `?t=` links auto-open it.
21. **Hooks before early returns**: CI's oxlint errors on conditional hook
    calls that LOCAL oxlint passes. Call hooks at the top with `?.`
    accessors, then early-return. CI failure → annotations per gotcha 13.
22. **e2e specs are CRLF in the working tree**: node string-patches with
    `\n` won't match. Normalize or patch via a scratch `.mjs`. Never
    `node -e "…"` with backticks/`$` (bash eats them).
23. **Two `renderAt()` calls in one unit test leave BOTH trees mounted**:
    call `cleanup()` before the second render.
24. **Content inside a closed `<details>` counts as hidden for Playwright
    `toBeVisible`** (jsdom doesn't care — RTL getByText still finds it).
    TC-16 asserts the "Word-by-word meaning"/"Commentary" SUMMARY text;
    open expanders before asserting their body content in e2e.
25. **Long Tamil verse lines don't wrap** — `verseLines` renders "*" as
    real `<br/>`s now; keep `break-words` on any raw verse `<p>`.
26. **Tabs unmount panels**: every kshetram/azhwar detail test asserts
    panel content only after clicking its tab.
27. **NEW — RTL `getByText` only matches an element's DIRECT text nodes**:
    text split across sibling `<span>`s ("Thirumangai Azhwar" + "· 73")
    fails `getByText`; assert via `getByRole('link', { name })` (accessible
    name concatenates) with gotcha-17-style `\s*` regexes.
28. **NEW — URL hash persists across unit tests in the same file** (jsdom
    window is shared): `pages.test.jsx` clears it in `beforeEach` with
    `window.history.replaceState(null, '', window.location.pathname)`.
    Any test file that renders KshetramDetailPage and clicks tabs needs
    the same reset or later tests start on the hashed tab.
29. **NEW — hash-sync effect reads `window.location.hash` on mount**:
    "Skip to temple details" / arbitrary hashes are ignored (TAB_IDS
    guard); celestial guards `#visit`/`#location`. `activateTab` guards
    `scrollIntoView?.` (jsdom lacks it) and defers panel scroll via rAF.
30. **NEW — `splitNotes` FESTIVAL_PATTERN routes notes sentences**:
    /ekad[ai]si|utsavam|festival|brahmotsavam/i → "Festival note", all
    else → "Special darshan timings". srirangam's
    "Vishwaroopa darshan 06:15–07:00; Ekadasi special" splits at "; ".
31. **NEW — write long doc appends via a temp file** (`Write` tool +
    `cat tmp >> doc`), not bash heredocs — a long heredoc got truncated
    mid-file once (recovered by truncating to the last good line).
32. **NEW — visual-judge catches data-shape surprises, not just CSS**:
    round 17's first gate failed because srirangam embeds Prathyaksham
    inside a legend string (aside looked empty) — PuranamHistory now
    extracts `/^Prathyaksham\s*:/i` legend items into the aside list.
    Expect gate findings to be data-mapping bugs sometimes.

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 223 unit / 21 suites (global timeout 15s)
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines (~90%)
npm run lint             # oxlint (0 errors; 4 accepted warnings)
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

# visual smoke + measurement (scratch script pattern, live in app/, delete after)
(npm run preview -- --port 4173 --strictPort &)
#   then http://localhost:4173/108Kshetra/ ; fonts.ready;
#   getBoundingClientRect (hero height, tab y, sticky rail top, type scale)
#   full-page screenshots → docs/03-design/gate-shots/<round-dir>/
#   nav sweep: one row (center-line spread <4px), no viewport overflow

# CI/Actions status + failure details (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/commits/<sha>/check-runs"
#   → check-runs/{id}/annotations for the failing test + file:line

# live verification by content (gotcha 12/…)
curl -s "https://xdpkl.github.io/108Kshetra/" | grep -oE 'assets/index-[^"]+\.js'
#   then node -e "...includes('Expected String')" on that bundle
```

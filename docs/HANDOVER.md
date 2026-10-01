# HANDOVER — 108 Divya Kshetrams (2026-10-01, end of Restyle Marathon II session)

State: **Everything pushed, CI+Deploy green on `3d0f003`, live verified.**
`main` = `3d0f003` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ — verify bundles by CONTENT, not by
hash (CI Linux hashes differ from local Windows; MapPage strings live in the
lazy `MapPage-*.js` chunk, everything else so far in the main bundle — see
gotcha 12). Working tree clean. No preview server on :4173. Scratch scripts
deleted. Nothing in flight; next context starts fresh on whatever the PO
brings (they iterate fast — four more rounds shipped today, 15 total).

## 1. What today delivered (Jira sync + 4 PO rounds, all live)

| Commit | Work | Register |
|---|---|---|
| `c3204aa` | **Jira sync v2.0** (docs only): the 4 long-pending stories synced to DTRPR108K after the PO supplied a fresh API token — US-BRW-05 → `DTRPR108K-73`, US-ACH-04 → `-74`, US-UXD-03 → `-75`, US-CMS-01 → `-76` (all Done) + net-new epics **EP-UXD `-71`** and **EP-CMS `-72`** (To Do). Descriptions carry story text/AC/points, labels `divya-kshetra`+`v3`, stories parented to epics. Sync record appended to `docs/02-agile/user-stories.md` (v2.0 section). **PO-round work since TER v2.1 is still NOT authored as user stories** — noted in the record as "on PO request". ⚠️ The API token lives in that conversation's history — recommend the PO revoke it at id.atlassian.com and mint a fresh one next time | — |
| `6fdc12a` | **Azhwars front page recreated to the PO snap** (round 12): saint-poet gallery hero (eyebrow, 60px one-line title, unparenthesised Tamil, gopuram watermark + stacked "DIVINE PLACES ETERNAL GRACE", right-aligned lotus "Traditional order" rule), numbered portrait cards (01–12 badge, square portrait, Tamil gold over English maroon, lotus divider, 2-line dataset note, Primary Work | pasurams stat band, "Explore profile" gold pill + "N Divya Desams" underlined link keeping the `/kshetrams?azhwar=` deep link), gallery footer strip. Site copy changed per snap (eyebrow "Saint-Poet Gallery", Tamil without parens, lead "Discover their lives, hymns and sacred places.") in app JSON + fixture TOGETHER (`sync-content --fixture --check` 0-diff). Chips row + Avatharam/Star/amsam/period rows dropped per snap (flagged; restore on request). UT-AZW-01/02 rewritten; TC-10 clicks the desams link. **pointer-events-none on non-interactive card blocks is load-bearing** (TC-18 click-through caught its absence) | TER v2.20 |
| `418617c` | **Acharyas index recreated to the PO snap** (round 13): guru-parampara hero over the gopuram watermark (Browse-hero idiom), era sections as ruled headings (lotus + rule; count pill dropped per snap), **two-column roster** — portrait (176×144 wiki image, golden-Shanka radial-blob fallback) beside Tamil/name/role, "Era: … | Guru: …" meta line ("Not specified" when absent), "Read story →" link; lotus-centred rules between roster rows, vertical rule between columns; odd-count sections end cleanly. Two dossier links per acharya (overlay + Read story) → TC-19 href locator gained `.first()`. No site-copy/data changes (copy already matched) | TER v2.21 |
| `2d08b11` | **Acharya detail recreated to the PO mock** (round 14): numbered open sections 01–07 with ruled headings (local `DossierSection`), hero **fact sheet** (Period / Names & titles / Birthplace / Divine amsam / Jayanthi) beside name block + biography lead (first lifeHistory paragraph), sticky **"On this page" anchor rail** (01–07), golden Shanka icon; **Chronology of Life Events stepper** (gold circles on a rule, `timeline.when` labels) after the first life block with the full when/event pairs behind a "Read the full chronology" `<details>` expander; "N. Title: text" miracle paragraphs parsed into numbered circle items with bold lead-ins; contribution rows (Works + worksSummary side cell, Preservation, Theme, desam pills); verse block centered (LISTEN keeps audio/archive.org href), **pada-artham as two side-by-side tables**, 3 commentary cards; lineage chips (Guru:/Sishyas: labels unchanged — tests); iconography definition table beside listening cards; numbered sources row. `NotDocumented` fallback kept for empty visuals; PendingContent for other empty sections. Heading renames: "Chronology of Life Events" (was Chronological Life Timeline), "Life & Miracles" (was Life History & Miracles) → UT-ACH-03 + TC-19 regexes updated; TC-19 opens the expander before asserting "Eedu 36000 Padi" (it lives in a timeline.event). Tamil verse got `break-words` (390px overflow). **SaintVerse/SaintMedia/SectionNav/ZipSection untouched** (azhwar + kshetram templates still use them); acharya page is self-contained | TER v2.22 |
| `22f89fd` + `3d0f003` | **Kshetram detail redesigned to the PO mock** (round 15): "Kshetras / name" breadcrumb; split hero — Divya-Desam-eyebrow (enriched `serial`), 56px name, gold Tamil, `temple` subtitle, pin row, `significance` as hero summary, TripControls/VisitedToggle/PageActions | temple photo (useWikiImage on `wiki`, gopuram fallback) + "Temple exterior · illustrative" caption. **Accessible seven-tab switcher** (Overview · Deities · History · Mangalasasanam · Visit info · Location · Media; azhwar tablist idiom with roving focus; visit/location tabs omitted for celestial) wrapping the **six section components COMPLETELY UNCHANGED** (their ZipSection cards render inside panels; detailV3/detailComponents tests untouched). Overview adds "About the temple": Moolavar/Thaayar name cells + "247 pasurams · N Azhwars" + "Explore the hymns →" (switches to Mangalasasanam tab, where Azhwars-Who-Glorified chips moved). **"Plan your visit" sidebar**: timings rows + notes + indicative note, DistanceFromMe (its own Get directions link), "Visits and trips are saved in this browser."; omitted for celestial. `3d0f003` CI fix: **useWikiImage was called after the unknown-id early return** (conditional hook — local oxlint missed it, CI errored) → hook hoisted above the return; unused `within` import dropped from saintPages tests. UT-DTL block rewritten for tabs (9 tests, `cleanup()` before second in-test render); TC-08/TC-16 walk the tabs; nearby test clicks Location first | TER v2.23 |

Final gates at handoff: **217/217 unit (21 suites) · 19/19 e2e · coverage
89.74% stmts / 81.59% branches / 84.84% funcs / 91.12% lines (gate 80%) ·
oxlint 0 errors / 4 accepted warnings · build clean · CMS round-trip
lossless (azhwarsPage copy changed in fixture too) · visual gates all green**
(azhwars-frontpage 3, acharyas-restyle 3, acharya-detail-restyle 3,
kshetram-detail-restyle 5 — under `docs/03-design/gate-shots/`).

Current key measurements: azhwars title 44/60px one line; acharya roster
portrait 176×144 (`sm:h-36 w-44`), Shanka fallback blob radius 42%→66%;
acharya hero title 44/52px, dossier number column w-9; kshetram hero title
44/56px, photo aspect 16/10, sidebar `lg:grid-cols-[minmax(0,1fr)_340px]`;
tablists = azhwar detail (5 tabs) + kshetram detail (7 tabs) only.

## 2. Open items / likely next requests

- **More PO fix lists** — PO iterates fast (15 rounds in three days). Proven
  process: implement (snap/mock-first) → measure → gates → TER → commit →
  push → CI/live check. AskUserQuestion can return NO answer when
  unattended — proceed with best judgment and flag.
- **Timings duplication flag (kshetram detail)**: sidebar + Visit Info tab
  tile both show timings (kept so VisitInfoSection stays component-identical).
  PO may want the tile dropped — that means touching VisitInfoSection +
  detailV3 test (`shows timings plus not-yet-documented fallbacks`).
- **Snap assets not in repo**: azhwars gopuram line-art placeholder, acharyas
  sepia temple-complex artwork, acharya detail mock's artwork — all currently
  served by the existing `gopuram-illustration.jpg` / ShankaIcon. Swap when
  the PO's real assets arrive (round-7 precedent: "attached" images may not
  reach the repo — flag, use nearest existing asset).
- **Azhwar/Acharya condensed copy** still not in the datasets (rounds 11–15
  render dataset-mapped text; the snaps' condensed phrases are PO-owned
  content, not yet requested).
- **Jira**: stories through US-CMS-01 are synced (DTRPR108K-1..76 complete).
  Authoring PO-round stories (US-MAP-05? US-AZW-04? EP-KDTL?) not started.
  **Token from today's sync should be revoked** (exposed in chat history).
- **Photos pending from PO**: Kulasekhara + Thiruppaan strip tiles, CEO
  portrait, Srivilliputhur card, scaffold acharya dossiers. Wikipedia photos
  resolve via `useWikiImage` (azhwar portraits: `photos[]` in
  azhwar-details.json — only Poigai has one).
- **SectionNav.jsx is now page-dead** (kshetram detail moved to tabs; only
  detailV3's own test renders it) — cleanup candidate alongside the round-6
  flags: browse cards' dropped deity pill + Pasuram tag (restore on request),
  plaque watermark + make-hero-watermark.mjs unused, "Reset progress" quiet
  link kept (TC-13).
- **Coverage drift watch**: 89.74% vs gate 80% — fine, but the tab panels
  keep unmounting content (untested-inactive panels), and CI is 2-core (see
  gotcha 16).

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims preserve old
  import paths — do not bypass. UI reaches data ONLY via `data/api.js`.
  Site-copy fields: app JSON + fixture `sync-response.json` must change
  TOGETHER (`sync-content --fixture --check` must stay 0-diff). Kshetram
  traditional serial lives in `templates.json` (`enriched.serial`) — NOT the
  JSON array order (`getDDSerial` is array order; do not use for display).
- **AzhwarsPage** (round 12): hero + gopuram watermark + Traditional-order
  rule; `.azhwar-card` grid; whole-card overlay link + Explore-profile CTA +
  "N Divya Desams" → `/kshetrams?azhwar=`; non-interactive card blocks carry
  `pointer-events-none` (TC-18 clicks the overlay).
- **AcharyasPage** (round 13): hero + watermark; era sections chunked into
  2-col roster pairs (right column `sm:border-l`); `AcharyaRow` = overlay +
  Read story links; `AcharyaPortrait` (Shanka-blob fallback).
- **AcharyaDetailPage** (round 14): numbered sections 01–07 (`DossierSection`),
  fact sheet + On-this-page rail, `Chronology` stepper + `<details>` expander,
  `MiracleList` parser, verse/pada/commentary inline (SaintVerse NOT used
  here anymore), lineage chips, inline media (SaintMedia NOT used here).
- **KshetramDetailPage** (round 15): split hero + 7-tab switcher (`tab`/
  `setTab`, roving `tabRefs`, panels unmount — tests must click tabs before
  asserting panel content); section components unchanged; Overview =
  About-the-temple cells + ShrineProfile card + Plan-your-visit sidebar;
  Location panel inline (map link, MiniMap, NearbyDesams).
- Header: single "Plan Yatra" pill → `/map`; drawer merged; `/trip` → `/map`.
- Admin gate: `isAdminSession()` in AboutPage — localStorage
  `kshetra_admin=1` via `/about?admin=1`, revoke `?admin=0`.
- Registers/dates: **TER v2.23; TCS v1.9** (UT-AZW-03 rewritten round 11;
  UT-AZW-01/02 round 12; UT-ACH-02/03 round 13/14; UT-DTL round 15;
  TC-08/10/16/18/19 updated). US-CMS-01 delivered; Jira sync v2.0 record in
  `docs/02-agile/user-stories.md`.

## 4. Gotchas (accumulated — ALL still valid, plus new)

1. **Unlayered legacy CSS beats every Tailwind utility.** Offenders: `a {}`
   (gold links need `text-[#96731F]!`), `h1 {}` / `h2 {}` (display text uses
   trailing `!`: `text-[44px]! text-[#5C1F00]!`). Grep `styles/*.css` before
   fighting a utility. Tailwind v4 important = TRAILING bang.
2. **Whole-card/row overlay links intercept clicks** — non-interactive
   content needs `pointer-events-none` (azhwars cards, acharya roster rows,
   azhwar detail cards carry it; TC-18/TC-19 catch its absence). Interactive
   children re-enable with `pointer-events-auto`.
3. **Split pills don't use pillBase** (header temples/tours) — apply pill
   idiom changes to all three.
4. **Images in this harness**: prefer deterministic Playwright
   `getBoundingClientRect()`; wrap checks need CENTER-LINE spread + bucketing;
   `document.fonts.ready` before measuring; scratch scripts live in `app/`,
   delete after; preview serves `/108Kshetra/` on :4173 — kill/restart when
   unsure; **playwright is importable only from `app/`** (run scratch scripts
   with cwd=app).
5. **sharp**: hardcode CH=4 after `ensureAlpha().raw()`.
6. **Wikipedia photos**: REST summary API; hotlink only FIXED widths.
7. **Exact-match text assertions**: `{ exact: true }` / exact strings for
   absence tests; nav "108 Kshetrams" pill collides with /108 kshetrams/i.
8. **No Python** — node one-liners / heredoc `.mjs`.
9. `ProgressBanner.jsx` is app-dead; live tracker is `YatraProgressTracker`.
   `SectionNav.jsx` is now page-dead too (only its own test renders it).
10. **Vitest on CI (2-core) is ~3-4× slower than local**: global
    `testTimeout: 15_000` lives in `vite.config.js`; the v3Branches
    atlas-extras test carries an explicit **30_000**. Any test that renders
    the 108-card atlas matrix repeatedly (mount + locate + clear = 3 full
    renders) needs headroom.
11. **Leaflet pane z-indexes** escape a non-isolated container — the map
    frame carries `isolate`; keep it.
12. **Lazy-chunk live verification**: grep the LIVE bundle by CONTENT via
    `node -e "...includes(...)"` (ugrep chokes on 1.2MB single-line files).
    MapPage strings live in the lazy `MapPage-*.js` chunk; all round-12..15
    strings verified in the MAIN bundle.
13. **CI logs without gh auth**: `GET /repos/XdPkl/108Kshetra/commits/<sha>/
    check-runs` → `check-runs/{id}/annotations` gives the exact failing test
    + file:line (public repo, no token). Three CI failures caught this way.
14. **Region dropdown label**: `getByLabelText('Filter by region')` matches
    the select only.
15. Old gotchas: shim re-export collision; scan ALL distinct keys before
    schema-mapping; sanity schema validate placeholder id; JSON key-order
    normalization; Vite-only imports break plain-node (test data via vitest,
    not `node -e import api.js` — JSON import attributes fail); gh CLI
    unauthenticated; lucide icon imports; `markVisited(id, true)`;
    `fireEvent.click` for hover UI; coverage exit codes behind pipes;
    `.zcodeignore` UNTRACKED.
16. **Tests must not touch the network**: `utils/wikiImage.js` is `vi.mock`ed
    in `yatraPages.test.jsx` and `v3Branches.test.jsx` (photo-less cards
    otherwise fire real Wikipedia fetches ×108). If a new heavy suite renders
    KshetramCard/NearestCard grids, add the same mock.
17. **jsdom accessible names join WITHOUT spaces**: the planner opener
    button's accessible name is "My Yatra — Trip Planner1" — match counts
    with `/trip planner\s*1/i`, never `/planner 1/i`.
18. **Repeated strings across hero+cards**: azhwar birthplace name and
    district render in BOTH the hero facts row and the cards row → use
    `getAllByText(...).length >= 1`, not `getByText`.
19. **Leaflet marker culling in headless/IAB captures**: at zoom ≥ 9 most
    CircleMarker paths cull to `d="M0 0"` — verified NOT a regression; e2e
    TC-14 exercises the real click path in Playwright.
20. **Trip planner lives in a modal**: trip-content tests must click the
    "My Yatra — Trip Planner" opener first; `?t=` links auto-open it.
21. **NEW — hooks before early returns**: CI's oxlint errors on conditional
    hook calls that LOCAL oxlint passes (`useWikiImage` after the kshetram
    unknown-id return). Call all hooks at the top with `?.` accessors, then
    early-return. If CI lint fails, pull annotations per gotcha 13.
22. **NEW — e2e specs are CRLF in the working tree**: node string-patches
    with `\n` won't match. Normalize the file to `\n` first (git handles it),
    or patch via a scratch `.mjs` file — never `node -e "…"` with backticks/
    `$` (bash eats them).
23. **NEW — two `renderAt()` calls in one unit test leave BOTH trees mounted**
    (RTL auto-cleanup is per-test): call `cleanup()` before the second render
    or `getByRole` finds duplicates. The pasuram test does this.
24. **NEW — content inside a closed `<details>` counts as hidden** for
    Playwright `toBeVisible` (jsdom doesn't care). TC-19 opens the chronology
    expander before asserting "Eedu 36000 Padi".
25. **NEW — long Tamil verse lines don't wrap** (no break opportunities):
    `break-words` on verse `<p>`s; the acharya verse overflowed at 390.
26. **NEW — tabs unmount panels**: every kshetram/azhwar detail test asserts
    panel content only after clicking its tab (`page.getByRole('tab',
    { name })` / `screen.getByRole('tab')` + userEvent click).

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 217 unit / 21 suites (global timeout 15s)
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines (~89.7%)
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

# visual smoke + layout measurement (script lives in app/, delete after)
(npm run preview -- --port 4173 --strictPort &)
#   then http://localhost:4173/108Kshetra/ ; fonts.ready; getBoundingClientRect
#   nav sweep: one row (center-line spread <4px), no viewport overflow

# CI/Actions status + failure details (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/commits/<sha>/check-runs"
#   → check-runs/{id}/annotations for the failing test + file:line
```

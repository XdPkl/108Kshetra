# HANDOVER — 108 Divya Kshetrams (2026-10-02, after rounds 22–23: acharyas directory + home/map/about restyles)

State: **Everything pushed, CI+Deploy green on `a04d609`, live verified.**
`main` = `a04d609` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ — verify bundles by CONTENT, not by
hash (CI Linux hashes differ from local Windows; grep the live
`assets/index-*.js` via `node -e "...includes(...)"` — gotcha 12).
Working tree clean. No preview server on :4173. Scratch scripts deleted.
Nothing in flight; next context starts fresh on whatever the PO brings
(23 rounds in ~5 days).

## 1. What this session delivered (PO rounds 18–21, all live)

| Commit | Work | Register |
|---|---|---|
| `a036264` | **Round 18 — Azhwar + Acharya detail restyled to the shared kxd theme**: kxd primitives (palette vars, Source Serif 4 / DM Sans / Noto Serif Tamil, audit type scale, buttons, sticky tab rail, fact/verse cards, disclosures, toast) moved VERBATIM out of `kshetram-detail.css` into new `src/styles/detail-theme.css`; `kshetram-detail.css` now page-specific only (kshetram rendering unchanged: hero 400px, rail y≈537); new `saint-detail.css` (`azd-`/`acd-` prefixed); both pages rebuilt under `.kxd`; azhwar got the hash-synced sticky five-tab rail; 6 saint components restyled in place; Tamil `overflow-wrap`, birthplace note block, mobile stepper-wrap fixes from the visual gate; hash reset + deep-link tests | TER v2.26, TCS v1.12 |
| `04524a0` | **Round 19 — Azhwar detail recreated to the poigai mock** (5 generated mockups + design-notes.md in `Documents/Codex/2026-10-01/re/outputs/poigai-mock/`): compact profile shell (240px portrait | identity | birth-facts columns), plain breadcrumb, Life (narrative + gold-dot Key-moments timeline — dataset `when` labels match the mock's 5 moments), Hymns verse reader (translit/meaning flag blocks, Find-recitations pill, glossary sidebar, Commentary & anubhavam accordions), Sacred places (featured desam wiki-photo card + numbered 2-col directory + Celestial grouping via `state === 'Celestial'`), Media (discourse rows split on the 3 known speaker names + iconography sidebar), Sources ("Title — domain" rows, hrefs derived from dataset domains only), "The lamp of knowledge" band; retired round-11 cards/pills; TC-18 + unit contracts renamed in lockstep | TER v2.27, TCS v1.13 |
| `ead6db5` (+`4fc23db` scratch cleanup) | **Round 20 — Consistency pass vs Srirangam**: birth facts full-width BENEATH identity with short values (birthplace = pre-"—" name; full narrative + district moved to Life panel), subdued "Also known as" alias text (chips removed); 32px section headings (40px `.azd-display` dropped); lamp band → Life tab only; Life concise summary (first paragraph) + expander; transliteration split on "/" into lines; media rows full-width + ONE search-behaviour note + iconography BELOW (portrait beside text); sources uniform "Open repository ↗" links + reading guidance behind a disclosure; compact mobile hero (128px portrait, rail y 1318→880); fixed latent round-19 regression (acharya `.acd-media-grid` base rule lost); TC-18 reordered; 18-check interactive validation | TER v2.28, TCS v1.14 |
| `300a8e9` | **Round 21 — "Philosophy & legacy" alignment to PO mock crop**: bhaktiBhava/preservation as serif h3 sub-heads over plain text under a 32px "Philosophy & legacy" section (tint callouts removed); era data as an "Era & contemporaries" aside block (gold-caps rows: Traditional chronology ← `period`, Academic ← `era.academic`, Contemporaries ← `era.contemporaries`) under the Key-moments timeline; new pey unit test | TER v2.29, TCS v1.15 |

Final gates at handoff: **227/227 unit (21 suites) · 19/19 e2e · coverage
90.45% stmts / 81.52% branches / 86.00% funcs / 92.18% lines (gate 80%) ·
oxlint 0 errors / 4 accepted warnings · build clean · CMS round-trip
lossless · visual gates green** (round 20: 14/14 incl. before/after +
Srirangam cross-check in `gate-shots/azhwar-consistency-20/{before,after}/`;
round 21: 4/4 in `gate-shots/azhwar-philosophy-restyle-21/`; round 19: 7/7
in `gate-shots/azhwar-poigai-mock-restyle-19/`; round 18: 7/7 in
`gate-shots/azhwar-acharya-kxd-restyle-18/`).

Key measurements (azhwar poigai): hero 455px @1280 (facts row beneath,
portrait 240px), rail y≈592; @390 rail y≈880, portrait 128px; section h2
32px (28px mobile); 0px overflow at 390/768/1280/1440. Interactive
validation script (18 checks: hash entry/reload/history/keyboard/focus/
expanders/sticky rail/fade cue) passed and lives only in the TER record.

## 2. Open items / likely next requests

- **More PO fix lists** — PO iterates fast (21 rounds). Proven loop:
  inspect mock/data → implement → Playwright measurement + screenshots →
  gates → TER → commit → push → CI/live check (verify by content). PO
  supplies mockups as zips of generated PNGs + design-notes.md, or single
  mock crops (see round 21).
- **Acharya detail not yet poigai-refined**: it still has the round-18
  kxd dossier (fact rows, anchor rail, gold numerals). The azhwar page
  has since moved to mock-shells + round-20/21 refinements; the PO may
  ask to bring /acharya/:id to the same standard (or supply acharya
  mockups — `docs/03-design/mockups/acharya-detail.html` is the OLD
  round-14 look; same for `azhwar-detail.html`).
- **PO-owned content pending** (flagged in TERs): triplicane-mock authored
  copy (kshetram), azhwar mock labels ("The lamp of knowledge",
  "Reading this archive", "Sources & further reading",
  "Listen, learn & contemplate" — rendered, flagged, no CMS fields yet),
  lamp/editorial artwork stand-ins (lotus tile + wiki photos), real
  captioned deity/media imagery, cited history links, scaffold acharya
  dossiers (nadadur-ammal etc. show pending markers), CEO portrait,
  Srivilliputhur card, azhwar portraits (only Poigai has photos[]).
- **Jira**: stories through US-CMS-01 synced (DTRPR108K-1..76). Authoring
  PO-round stories (rounds 5..21) NOT started. **API token from the
  earlier sync should be revoked** (was exposed in chat history).
- **Coverage drift watch**: branches 81.52% vs gate 80% — headroom ~1.5pp.
  Any new conditional needs a test (round 21 added the pey test for this
  reason). CI is 2-core (gotcha 10).
- **Divine amsam in the azhwar hero** renders the dataset string verbatim
  ("Lord Vishnu's holy conch, Panchajanya"); the PO's round-20 brief
  suggested "Panchajanya, Vishnu's conch" — kept verbatim per "preserve
  source content", flagged; PO may ask again.
- **Timings duplication** (kshetram sidebar + Visit tab) persists by
  design; SectionNav.jsx still page-dead; browse cards' dropped deity pill
  + Pasuram tag restorable on request; plaque watermark +
  make-hero-watermark.mjs unused; "Reset progress" quiet link kept (TC-13).

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims preserve
  old import paths — do not bypass. UI reaches data ONLY via
  `data/api.js`. Site-copy fields: app JSON + fixture
  `sync-response.json` change TOGETHER (`sync-content --fixture --check`
  0-diff). Kshetram serial = `enriched.serial` from dossier-templates.json.
- **Azhwar data is TWO files merged**: `azhwars.json` (index: period,
  note, work) + `azhwar-details.json` (dossier). `getAzhwarById` returns
  the ENRICHED merge — check BOTH files when reasoning about fields
  (round 21: `period` looked missing from details but comes from the
  index).
- **Stylesheets** (import order in main.jsx): tokens → base → layout →
  v3 → zip → `detail-theme.css` (shared `.kxd` primitives: palette,
  fonts, type scale h1 56/h2 32/h3 24/h4 21, body 17/28, buttons,
  `.tabs-rail`, fact/visit/verse cards, disclosures, glossary, milestones,
  markers, toast, media/print blocks) → `kshetram-detail.css`
  (kshetram-only layouts) → `saint-detail.css` LAST (`azd-` azhwar /
  `acd-` acharya page layouts + shared `.pill`/`.disc-list`; acharya
  section unchanged since round 18 except the `.acd-media-grid` restore).
- **AzhwarDetailPage** (`/azhwar/:id`): `.kxd` wrapper → plain breadcrumb
  → `.azd-hero` (portrait 240px | identity; `.azd-facts` full-width row
  beneath; short birthplace = `name.split(' — ')[0]`; nameless
  birthplace records → em-dash) → sticky hash-synced `.tabs-rail`
  (life/hymns/places/media/sources; `activateTab` + hashchange + roving
  focus; `window.history` hash MUST be reset in test `beforeEach`) →
  single unmounting panel → `.azd-nav` prev/next. Lamp band is INSIDE the
  life panel (not persistent). Hooks (incl. `useWikiImage` for the
  featured desam) run before the unknown-id early return.
- **Saint components**: SaintVerse (verse reader: eyebrow=work, h2
  "Opening verse", pre-line Tamil, flag blocks — MEANING falls back to
  `verse.significance`, sidebar About only when BOTH exist; translit
  splits on "/"; commentary = `.azd-acc-item` details), SaintMedia (full-
  width rows; SPEAKER_PATTERN splits the 3 known speaker names; icono-
  grid below), SaintSources ("Title — domain" parse → uniform links),
  SaintKeyMoments (dot timeline), SaintPortrait (`.azd-portrait`), 
  SaintLegend, PendingContent (`.detail__nodata`), NotDocumented (shared,
  untouched). SaintMedia props: visuals, name, photo, onSeeSources.
- **KshetramDetailPage** unchanged since round 17 (consistency reference).
  **AcharyaDetailPage** on round-18 kxd (dossier sections 01–07, anchor
  rail, Chronology stepper, MiracleList, pada glossary tables).
- **E2E TC-18 order** (round 20): hero asserts → band jump "explore hymn
  & meaning" on LIFE tab → places tab → view kshetram → prev/next nav.
  TC-19 (acharya) unchanged. e2e spec file is now **LF** (git normalized
  it) — see gotcha 33.
- Registers/dates: **TER v2.29; TCS v1.15** (UT-DTL unchanged since round
  17; UT-AZW-03 rewritten rounds 19–21; UT-ACH-02/03 unchanged since
  rounds 12–18). UI-UX doc addenda §31 (round 18) + §32 (round 19);
  rounds 20–21 recorded in TER/TCS only.

## 4. Gotchas (accumulated — ALL still valid, plus new)

1. **Unlayered legacy CSS beats every Tailwind utility.** `a {}`, `h1/h2 {}`,
   `.site-header nav a { color: inherit }` in base.css; Tailwind v4
   important = TRAILING bang. Detail pages avoid this via `.kxd`-scoped
   stylesheets (0,1,1 specificity wins).
2. **Whole-card/row overlay links** — non-interactive content needs
   `pointer-events-none` (TC-18/19 catch absence).
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
   (wikiImage.js rewrites to 1280px).
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
33. **NEW — `getByText` with a substring regex matches ancestors too**:
    band/section titles inside wrappers throw "multiple elements" — use
    `getAllByText(...).length >= 1` or exact strings.
34. **NEW — relative photo paths need `assetUrl()`** when a component
    renders `<img src>` directly (GitHub Pages base `/108Kshetra/`);
    `useWikiImage` applies it internally, raw `photos[].src` does not
    (round 19's broken media portrait).
35. **NEW — birthplace records can be `{kshetramId}` only** (name
    undefined for 3 azhwars) — guard `.split`/renders (em-dash fallback).
36. **NEW — media tab: videoSearches mix narrative strings with real
    search titles**; SPEAKER_PATTERN splits only the three known speaker
    suffixes (Velukkudi Krishnan | Karunakarachariar |
    Ananthapadmanabhachariar); other strings render title-only rows.

37. **NEW — Leaflet flyTo does not animate the map-pane transform in this build** (transform stays translate3d(0,0,0)); a transform-stability wait passes while flyTo is still flying. In e2e, target the selected marker directly (`path[stroke-width="4"]`, set by the round-23 selection highlight) and hover/click it — TC-14 does this. Also leave ~400ms between zoom-control clicks so cluster dissolve settles.
38. **NEW — `document.body.style.zoom` is NOT a 200%-zoom proxy** (media queries stay at desktop width → fake overflow). Use a 640px CSS viewport with DPR 2 (=1280 window at 200%): all pages show 0px overflow.
39. **NEW — userEvent.setup() swaps navigator.clipboard** — install clipboard spies AFTER setup, and defineProperty (not Object.assign) because navigator.clipboard is getter-only.
40. **NEW — CRLF files swallow plain `\n`-based replace() patches silently** — HomePage/AboutPage have CRLF; use regex /\r?\n/ in node patch scripts and VERIFY the patch landed (grep) before rebuilding.
41. **NEW — directory.css variables live on the `.dir` scope** — components using `--dir-*` (dir-portrait, dir-entry__*, dir-profile-link) render with unset vars outside a `.dir` ancestor; home/map/about are wrapped in `.dir` for this reason (also gives DM Sans body text).

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 227 unit / 21 suites (global timeout 15s)
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines (~90%)
npm run lint             # oxlint (0 errors; 4 accepted warnings)
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

# CI/Actions status + failure details (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/commits/<sha>/check-runs"
#   → check-runs/{id}/annotations for the failing test + file:line

# live verification by content (gotcha 12)
curl -s "https://xdpkl.github.io/108Kshetra/" | grep -oE 'assets/index-[^"]+\.js'
#   then node -e "...includes('Expected String')" on that bundle
```

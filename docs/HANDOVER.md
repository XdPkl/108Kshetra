# HANDOVER — 108 Divya Kshetrams (2026-09-24, end of v3.0 rollout session)

State: **v3.0 zip-parity rollout COMPLETE, PO-approved, pushed, deployed.** Nothing in flight.
Repo `main` is in sync with `origin/main` (https://github.com/XdPkl/108Kshetra). Live site:
https://xdpkl.github.io/108Kshetra/ (GitHub Pages auto-deploys on push; CI runs lint+unit+build).

## 1. What this session delivered (all committed & pushed)

v3.0 = full look-and-feel parity with the PO-supplied source export
(`C:\Users\Prasanna.FacelessPC\Downloads\108-divya-kshetrams-source-code.zip`), rolled out as
11 per-page approval gates + one PO-requested addendum + close-out. Layout-only scope: our
router, datasets (108 kshetrams, 27 acharyas), localStorage keys (`kshetra.visited.v1`,
`kshetra.trip.v1`), URL contracts (`?azhwar=`, `?region=`, `/trip?t=`), hash anchors, a11y,
lazy Leaflet chunks, celestial handling, print styles all preserved. Omitted zip-only
features: TTS recitation, Download/Export-ZIP modal, Google Drive/Firebase, per-stop trip
note inputs.

Commits (oldest→newest): `2a2b572` shell · `5f03546` Home · `db49979` Kshetram detail ·
`7bb4663` Browse · `afde10f` Azhwars index · `a6bb8ea` Azhwar detail (saint template) ·
`165b52a` Acharyas index · `e8dd553` Acharya detail · `232bd87` Map · `ffb29ec` Trip ·
`fe3c5a3` About · `dc7349a` About addendum (CEO desk, 7 circuits, etiquette, inquiry modal) ·
`2570ffe` close-out (CSS sweep, branch tests, UXD §30 / TER v2.0 / TCS v1.6 / US-UXD-03).
Earlier same-session work (pre-v3.0): acharya parampara expansion `977cdcb` + TER v1.9.

Final verification: **205/205 unit (20 suites) · 19/19 e2e · coverage 90.4% stmts / 83.0%
branches / 88.1% funcs / 91.6% lines (gate 80%) · oxlint 0 errors (4 accepted
set-state-in-effect warnings: TripPage, AzhwarDetailPage, useWikiImage, AboutPage) · build
clean (342.5 kB gzip initial; Leaflet lazy 44.9 kB).**

## 2. Architecture notes for future work

- Stack: React 19 + React Router 7 (BrowserRouter, basename `/108Kshetra/`) + Vite 8 +
  **Tailwind v4** (added this session via `@tailwindcss/vite`; token layer
  `app/src/styles/zip.css` — hex-identical to v2 palette + Cinzel font) + Leaflet (lazy).
- Legacy CSS (`tokens/base/layout/v3.css`) mostly retired (~190 rules removed). Still live
  and LOAD-BEARING: `.btn/.badge/.chip/.empty-state/.app-shell/.page/.deity-photo/
  .saint-glyph/.progress-banner/.search-filter-bar/.site-header,.site-footer` (print) —
  **do not delete without checking usage**; components like SearchFilterBar/ProgressBanner/
  WikiThumb remain because unit tests render them directly.
- Zip markup pattern: section shells in `app/src/components/detail/ZipSection.jsx`
  (eyebrow/title/badge card + `SerialBadge`); shared spy nav `detail/SectionNav.jsx`;
  saint pieces in `app/src/components/saint/`; home pieces in `app/src/components/home/`.
- Data: everything through `app/src/data/api.js` (note `getDDSerial(id)` derives card DD
  numbers; detail serial badge uses enrichment `kshetram.serial` only — tests pin absence
  for non-enriched records).
- About content incl. CEO/circuits/etiquette is data-driven in `app/src/data/about.js`.

## 3. Session gotchas (learned the hard way — respect these)

1. **Cascade layers**: old unlayered CSS beats Tailwind utilities. When porting markup that
   keeps a legacy class name, delete the legacy CSS rule in the SAME gate.
2. **CSS stripping**: only use the brace-matched rule stripper (see /tmp/strip*.mjs pattern
   in git history of this session's commits). A line-regex corrupted layout.css once; the
   Tailwind build catches it ("Missing opening {") — always check brace balance after edits.
3. **Wikimedia images**: only 330px and 1280px thumb sizes exist (480/640/800/1024 → HTTP 400).
4. **`markVisited(id, value)`** in `state/visited.js` needs an explicit `true` — one-arg
   calls are silent no-ops.
5. **jsdom + hover-driven UI**: userEvent's pointer sequence re-trips mouse-leave; use
   `fireEvent.click` for the header dropdowns/drawer in tests.
6. **RTL multi-node text**: "Showing N of 108" / "N of 108 kshetrams visited" need function
   matchers scoped by class (see `countText` / `metaMatching` helpers in the test files).
7. **lucide-react**: every icon used must be imported — a missing `User` import crashed the
   header dropdown on hover (e2e TC-17 caught it).
8. **Coverage exit codes**: `npm run test:coverage | grep …` masks failures (pipe exit);
   check `; echo $?` or read the threshold line.
9. **Playwright browsers** are user-profile cached (`%LOCALAPPDATA%\ms-playwright`); after a
   machine/folder copy they may be missing → `npx playwright install chromium`.
10. **Screenshot review workflow**: Read a PNG (harness returns a CDN URL) →
    `mcp__4_5v_mcp__analyze_image` with a QA prompt. Gate shots live in
    `docs/03-design/gate-shots/` (26 captures).

## 4. Open items / likely next requests

- **Untracked in working tree**: `.zcodeignore` (harness config — leave) and
  `docs/03-design/mockups-v3/` (superseded A/B/C elegance study; PO never chose keep vs
  delete — ask).
- **Content the PO may supply**: CEO portrait (upload via About UI or drop an asset);
  dossiers for the 4 scaffold acharyas (Thirukkurugai Piran Pillan, Nadadur Ammal, Kidambi
  Appullar, Thiruvaimozhi Pillai — pending sections render "[Content pending — to be
  provided]" until then); a photo source for the Srivilliputhur card.
- **Jira sync** still pending a fresh API token (docs note it).
- **Inquiry modal** is local-only by design (like the zip). A real backend/email hookup
  would be new scope.
- Post-push: verify the Actions runs went green and the Pages deploy updated (gh CLI was
  unavailable in this environment; check the repo Actions tab).

## 5. Command cheat-sheet (from `app/`)

```
npm test                 # 205 unit / 20 suites
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines
npm run lint             # oxlint
npm run build            # production build (Tailwind v4)
npx playwright test      # 19 e2e (boots vite preview on :4173)
```

Zip reference source (if needed again): re-extract the Downloads zip to a temp folder —
do NOT copy its partial data (63 kshetrams) into the app; it is layout reference only.

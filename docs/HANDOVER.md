# HANDOVER — 108 Divya Kshetrams (2026-09-27, end of fix-list round 1 session)

State: **PO fix list round 1 COMPLETE, pushed, CI+Deploy green, live verified.**
`main` = `7e44994` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ (bundle `index-Bgxk_Cen.js`; live bundle
spot-checked: "Ram Gopalan", yatra@kshetratours.com and the Ambattur address present,
"Sampradaya Yatra Trustee" gone). The PO called this the **first** fix list — expect
follow-up lists. Working tree clean (only untracked `.zcodeignore` — leave it).

## 1. What this session delivered (commit 7e44994, 16 files)

All 12 items of the PO's first fix list (full register entry: TER v2.2 in
`docs/05-testing/test-execution-report.md`):

- **Hero (Home)**: the Sangu–Namam–Chakram watermark trio now spans the entire
  banner — flex `justify-between` with boxes measured flush (left/right −2px),
  icons enlarged (`md:w-72/h-72`), and `scale-[1.35]`/`scale-[1.25]` on the SVGs
  paints the ink past the viewBox padding, cropping the sketch's intrinsic
  whitespace. CTA button moved to the site's gold idiom (label `#4A3005` on
  `#E2C47C→#C99A2E`, border `#96731F`) so it is distinct from the brown gradient
  title and legible against its own fill.
- **Yatra progress**: `YatraProgressTracker` gained an `eligibleIds` scope prop;
  HomePage passes the 106 earthly kshetrams (`region !== 'Celestial'`), so the
  bar reads "X of **106** kshetrams visited" and celestial marks (thiruparkadal,
  paramapadam) never inflate it. Reset-confirm still reports ALL stored marks.
  e2e TC-13 updated to 106. **Intentionally still 108**: header drawer
  "/108 Visited" and Browse "showing N of 108" (directory semantics, not yatra
  semantics — PO only asked for the yatra trip bar).
- **Saint strips (Home)**: tiles `aspect-[9/16]` portrait (measured 215×382) on
  both the Azhwar and Acharya strips via the shared SaintTile.
- **About CEO desk**: name **Ram Gopalan** everywhere (heading, quote
  attribution, bio, photo alt); pillar tiles "106 Divya Desams Completed" and
  "1000+ Pilgrims Guided" / "Over 100+ guided batches"; email
  **yatra@kshetratours.com**; `base` = the full Ambattur office address (row
  now wraps — `items-start` + `min-w-0`, no truncate); **"Sampradaya Yatra
  Trustee" removed end-to-end**: AboutPage row + about.json key + studio schema
  field + GROQ projection, kept 1:1 so the sync stays diff-free (fixture
  regenerated; round-trip 11/11 lossless; `--check` 0 diffs; schema validate
  0 errors/0 warnings).
- **Azhwars/Acharyas listing pages**: lead `<p>` lost `max-w-2xl`, gained
  `xl:text-[13px] xl:whitespace-nowrap` → single line at ≥1280px. (Why 13px:
  the Acharyas lead is ~1101px at 14px vs the 1104px max-w-6xl content width —
  knife-edge; 13px gives comfortable margin. Below xl it wraps normally.)

Final verification: **209/209 unit (21 suites) · 19/19 e2e · coverage 92.5%
stmts / 83.02% branches / 88.29% funcs / 93.69% lines (gate 80%) · oxlint 0
errors (same 4 accepted set-state-in-effect warnings) · build clean.**

Cosmetic slip, left as-is: code/test comments cite "PO 2026-09-25" but the list
arrived 2026-09-27 (TER v2.2 is dated correctly). Fold a date cleanup into the
next app-touching change if desired — not worth its own gate cycle.

## 2. Open items / likely next requests

- **More PO fix lists** — the stated expectation. Process that worked: map each
  item to component/JSON, keep CMS 1:1 for any content change, update tests
  (grep **-i**!), run all gates, screenshot-verify visual asks, TER entry, commit.
- **PO Sanity setup** (~20 min one-time) — unchanged; checklist in
  `studio/README.md` → "One-time setup". Repo JSON (which now carries all
  round-1 corrections) is the `npm run import` source, so the fixes flow into
  Sanity automatically on first import; nothing to redo there.
- Content the PO may supply (self-service via CMS after setup): CEO portrait,
  Srivilliputhur card photo, dossiers for the 4 scaffold acharyas.
- Jira sync still pending a fresh API token.
- `docs/03-design/mockups-v3/` stays deleted (PO decision 2026-09-25).

## 3. Architecture pointers (CMS additions — still the map)

- Content source of truth: `app/src/data/content/*.json`; shims (`kshetrams.js`,
  `enrichment/{index,coords,templates,dossiers}.js`, `about.js`, `config.js`,
  `siteCopy.js`, …) preserve old import paths — do not bypass them.
- Transforms live in `studio/scripts/lib/`: `to-sanity-docs.js` (JSON→docs),
  `to-app-json.js` (GROQ result→JSON; exports the single GROQ used by BOTH live
  sync and verification), `simulate-groq.js` (offline GROQ simulation). Change
  one side → run `verify-roundtrip --local` immediately, then regenerate the
  app fixture and rerun `sync-content --fixture --check`.
- Field additions/removals must go through app JSON + component + studio schema
  + GROQ projection together (proven for the ceo.trustee removal this session).
- Photo sizes baked into sync: card 640 / portrait 800 / lightbox 1280,
  `&auto=format`, Sanity CDN. `wiki` title stays the no-photo fallback.
- Kshetram doc splits back into kshetrams/enrichment/templates/dossier-templates/
  coords JSONs; `isApprovedSample` routes srirangam to templates.json; acharya
  `order` preserves listing order; mixed lifeHistory via `{text}` plain items.
- Registers/dates convention maintained (TER now v2.2; TCS v1.7; US-CMS-01).
- index.html title/meta and primary nav pill labels remain developer-owned
  (documented in siteCopy.js header).

## 4. Session gotchas (new this session — respect these)

1. **Images in this harness**: the Read tool on a PNG returns a CDN upload URL,
   not inline pixels — use the `analyze_image` MCP (imageSource = that URL) as
   your eye. For layout questions prefer deterministic Playwright
   `getBoundingClientRect()` measurements over eyeballing screenshots (opacity
   0.09 watermarks defeat visual judgment; geometry did not).
2. **No Python on this box** (Microsoft Store stub errors out) — write node
   one-liners / heredoc `.mjs` scripts instead.
3. **Playwright scratch scripts must live inside `app/`** for module resolution
   (`@playwright/test`); write `app/shots.tmp.mjs`, delete after. Vite preview
   serves under base `/108Kshetra/` — requesting `/` gives a 302.
4. **Always `grep -i` for content changes** — the session's only test failure
   was a lowercase-regex assertion (`/sri prasanna venkatesh/i`) that a
   case-sensitive grep for "Prasanna" missed.
5. Tailwind v4: dynamic spacing utilities (`w-22`, `w-38`) are valid;
   `scale-[n]` on an SVG enlarges the paint past the layout box without
   changing layout (how the watermark whitespace got cropped).
6. `ProgressBanner.jsx` is app-dead (tests only — kept for coverage history);
   the live progress UI is `YatraProgressTracker` on Home.
7. Old gotchas still valid: shim re-export collision (rolldown PARSE_ERROR);
   scan ALL distinct keys before schema-mapping; `sanity schema validate` needs
   a placeholder `SANITY_STUDIO_PROJECT_ID`; JSON key-order normalization in
   sync-content; Vite-only expressions in data break plain-node imports; gh CLI
   unauthenticated (use `curl api.github.com` + node one-liners); cascade
   layers; brace-matched CSS stripping; Wikimedia 330/1280-only thumbs;
   `markVisited(id, true)`; `fireEvent.click` for hover UI in jsdom; lucide
   icon imports; coverage exit codes behind pipes; Playwright browser cache.
   (Full list: git history of HANDOVER, commits 73c8f80 / b647a86.)

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 209 unit / 21 suites
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines
npm run lint             # oxlint
npm run build            # production build
npx playwright test      # 19 e2e (boots vite preview on :4173)

# app/  (CMS pipeline self-tests — no Sanity account needed)
node scripts/sync-content.mjs --fixture scripts/__fixtures__/sync-response.json --check

# studio/  (Sanity)
npm run dev              # local studio (needs .env project id)
npm run import           # repo JSON → Sanity (idempotent; needs SANITY_TOKEN)
npm run verify           # live round-trip proof   | --local = offline proof
npm run verify -- --local --dump-fixture ../app/scripts/__fixtures__/sync-response.json
npm run deploy           # host the studio (free)
SANITY_STUDIO_PROJECT_ID=placeholder123 npx sanity schema validate

# visual smoke (screenshot + measure; script must live in app/)
npx vite preview --port 4173   # then http://localhost:4173/108Kshetra/
# node script: import { chromium } from '@playwright/test'; measure via
# page.evaluate(() => el.getBoundingClientRect()) — see gotcha 1.

# CI/Actions status (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
```

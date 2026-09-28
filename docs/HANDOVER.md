# HANDOVER — 108 Divya Kshetrams (2026-09-27, end of refresh session)

State: **Everything pushed, CI+Deploy green on `1acd716`, live verified.**
`main` = `1acd716` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ (bundle `index-BBCxjov8.js`;
hero asset `hero-sunset-lamps-Qy3L536Q.jpg` 200). Working tree clean
(untracked `.zcodeignore` — leave it). Scratch scripts deleted; no preview
server lingering on :4173. The refresh session is complete — nothing in
flight; next context starts fresh on whatever the PO brings (likely more
page refreshes in the same mockup-first style, or PO round 5).

## 1. What today delivered, in order (all same day, all live)

| Commit | Work | Register |
|---|---|---|
| `054ebf8` | Content column 1152→1200px (`--container-site` token) aligning with kshetratours.com; footer too; header stays max-w-7xl | TER v2.3 |
| `70cc776` | **PO round 2** (9 items): brand eyebrow removed; hero halved 310→155px; plaque photo → transparent watermark (`app/scripts/make-hero-watermark.mjs`, sharp one-off); nav font ×1.5; dropdown hover bridge (`top-full` + `pt-1.5`); legacy anchor rule scoped out of header nav; "106 Temples"; strips 12 azhwars/5 acharyas small tiles | TER v2.4 |
| `5d1697d`+`08a5d72` | **PO round 3 items 1–5**: strips side-by-side 50/50 with paired headlines on one row (15px, semantic h2); watermark fully visible+centred (h-full); NALAYIRA hero eyebrow removed (exact-match tests) | TER v2.5 |
| `78f3ea4` | **PO round 3 item 6 (design approved via options)**: full-bleed deep saffron gradient header band (`#7A2E00→#B34700`), gold hairlines, cream pills with gold hover, tours active pill flipped to gold idiom, cream dropdown panels | TER v2.6 |
| `6d9280e` | **PO round 4** (12 items): nav hard single-row; strips one row of 4 tiles each (120×212); About tagline+etiquette single-line; "108 Kshetras"; hero +25% (160.5px) with new single-row description; SVG NamasteIcon replaces 🙏; About "Series" eyebrow + Vinnulaga circuit removed; "Inquire us"; CEO photo controls admin-gated | TER v2.7 |
| `0fef512` | **Split-pill single-line fix**: nav children `shrink-0` + `whitespace-nowrap` (split pills compressed under space pressure and folded); 14px reclaimed at the lg edge; verified at 10 widths 1024–1920 | TER v2.8 |
| `658faf0` | **HOME PAGE DESIGN REFRESH** (PO-approved mockup, iterated this session): full-bleed photo hero 364px (PO artwork `hero-sunset-lamps.jpg` via `make-hero-image.mjs`, "Explore Kshetrams" CTA, one-line description at lg+, invocation stack top-right — Nalayira line back ×1), "My yatra" tracker row (big 0/106, slim bar, gold "Mark a visit" → Browse, quiet Reset kept), large featured cards (`.featured-card`, home-only `FeaturedKshetramCard`; Browse keeps `KshetramCard`), stacked full-width azhwar/acharya bands (ivory→sandal, names BELOW tiles, eyebrow=title / heading=poetic-line mapping), closing ornament; `App.jsx` main drops container on home route for full-bleed bands; mockup + gate shots in `docs/03-design/mockups/refresh-2026-09/` and `docs/03-design/gate-shots/refresh-home/` | **TER v2.9 / TCS v1.8** |

Final gates at handoff: **209/209 unit (21 suites) · 19/19 e2e · coverage
92.08% stmts / 82.53% branches / 87.38% funcs / 93.41% lines (gate 80%) ·
oxlint 0 errors / 5 accepted warnings · build clean · CMS round-trip 11/11
lossless + `sync-content --fixture --check` 0 diffs · visual gate 7/7.**

Current key measurements: hero **364px, FULL-BLEED** (photo, crop anchored
`object-[center_20%]` — gopuram crown fully visible); strips are **stacked
full-width bands** (ivory azhwars → sandal acharyas), tiles 3:4 with names
below; featured cards are large (h-60 photo); description **one line at
≥1024** (wraps below by design); nav **one row at 1024–1920** (unchanged —
13px pills below xl; KNIFE-EDGE at 1024, re-run the width sweep if any label
changes). Home route main shell has NO container (full-bleed bands manage
their own `max-w-site` columns) — every other route keeps the 1200px column.

## 2. Open items / likely next requests

- **More PO fix lists** — they iterate fast (4 rounds + a design refresh
  today). Proven process: map → measure baseline → fix → re-measure
  deterministically → gates → TER → commit → push → CI/live check. For
  design-gated asks, build a static HTML mockup first
  (`docs/03-design/mockups/refresh-2026-09/home.html` is the approved
  home reference) and iterate via screenshots + visual-judge — worked
  perfectly for this refresh.
- **Round-5 flags**: "Reset progress" was kept as a quiet link under the
  tracker bar (mockup omitted it; kept for TC-13 + user control — one-line
  removal if PO says drop). The old plaque watermark + hero-plaque asset
  (`hero-plaque-watermark.png`, `make-hero-watermark.mjs`) are now UNUSED by
  the hero — candidate for cleanup if the PO confirms. Naming deltas PO
  image vs dataset ("Thiruvenkatam" vs "Thiruvengadam") remain dataset-owned;
  card names render dataset values.
- **PO Sanity setup** (~20 min) — unchanged; `studio/README.md`. Repo JSON is
  the `npm run import` source (all of today's content edits flow in).
- Photos the PO may supply: Kulasekhara + Thiruppaan strip tiles (◆ fallback
  — no enwiki lead image), CEO portrait (upload controls exist behind the
  admin flag), Srivilliputhur card, scaffold acharya dossiers. The refresh's
  8 saint tiles + 4 featured-card photos still resolve via `useWikiImage` /
  enrichment (unchanged pipeline).
- Jira sync still pending a fresh API token. `docs/03-design/mockups-v3/`
  stays deleted (PO decision 2026-09-25).

## 3. Architecture pointers (current map)

- Content source of truth: `app/src/data/content/*.json`; shims
  (`kshetrams.js`, `enrichment/*`, `about.js`, `config.js`, `siteCopy.js`, …)
  preserve old import paths — do not bypass them. UI reaches data ONLY via
  `data/api.js`.
- **Home refresh anatomy (2026-09)**: `Hero.jsx` (full-bleed photo, 364px,
  `max-w-site` column, `lg:whitespace-nowrap` description), 
  `YatraProgressTracker.jsx` (ivory band row; count via progressbar aria
  contract — NO inline % label; fill 0 at zero, else `max(3, pct)`),
  `FeaturedKshetramCard.jsx` (home-only; class `.featured-card`; Browse keeps
  `KshetramCard`), `SaintStrip.jsx` (props: `eyebrow, title, lead, saints,
  base, ctaLabel, ctaTo, tone 'ivory'|'sandal', withDivider` — HomePage maps
  section label→eyebrow, poetic line→heading). `App.jsx` main drops
  `max-w-site`/padding/`space-y-10` on `/` so bands run full-bleed.
- Header: `site-header` band classes on the `<header>` element; nav children
  carry `shrink-0`/`nowrap` via `[&>*]:` variants on the nav; dropdown panels
  are `absolute top-full pt-1.5` wrappers (hover bridge) with cream cards.
- Admin gate (round 4): `isAdminSession()` in `AboutPage.jsx` — localStorage
  `kshetra_admin=1`, set via `/about?admin=1`, revoked via `?admin=0`. Not
  authentication.
- Transforms in `studio/scripts/lib/` (to-sanity-docs.js, to-app-json.js,
  simulate-groq.js). Value-only JSON edits are sync-safe (no schema/GROQ
  change) — but ALWAYS rerun `studio npm run verify -- --local --dump-fixture
  ../app/scripts/__fixtures__/sync-response.json` then
  `sync-content --fixture --check` (fixture must be regenerated or the check
  diffs). Field ADDITIONS/REMOVALS still need app JSON + component + studio
  schema + GROQ together.
- Photo sizes baked into sync: card 640 / portrait 800 / lightbox 1280,
  `&auto=format`, Sanity CDN. `wiki` title = no-photo fallback; saint photos
  resolve at runtime via `useWikiImage` → REST summary API.
- Registers/dates: **TER v2.9; TCS v1.8**; US-CMS-01. index.html title/meta
  and primary nav pill labels developer-owned (siteCopy.js header note) —
  though the PO now drives label text directly (today: "Explore Kshetrams").

## 4. Gotchas (accumulated — ALL still valid)

1. **Unlayered legacy CSS beats every Tailwind utility** (cascade layers).
   Offenders: `base.css a {}` (scoped out of header nav via
   `.site-header nav a { color: inherit }`; the 2026-09 home sections instead
   pin link colors with `!` bangs), `base.css h1 {}` (defeated with `!` in
   the hero only), `base.css h2/h3 {}` (the 2026-09 home headings pin
   size/color/leading with `!` bangs — other pages' h2/h3 stay
   legacy-styled). Before fighting a utility that "doesn't work", grep
   `styles/*.css`. Tailwind v4 important = TRAILING bang
   (`hover:text-[#E2C47C]!`).
2. **The `color: inherit` override makes labels climb to the nav's base
   color** — the nav wrapper is now `text-[#FFFDF7]`; dropdown panel text
   must keep its own explicit colors (they do).
3. **Split pills don't use pillBase** — any pill-idiom change must be applied
   to the temples split pill (NavLink + chevron), the tours pill (NavLink +
   badge + chevron) AND pillBase, or they diverge. Nav children get
   shrink/nowrap from the nav's `[&>*]:` variants.
4. **Images in this harness**: Read on a PNG returns a CDN URL — prefer
   deterministic Playwright `getBoundingClientRect()` measurements over
   screenshots; wrap checks need CENTER-LINE spread (not top) and bucketing —
   naive `top > navTop+5` false-positives on centered dividers and 1px
   rounding. Always `await page.evaluate(() => document.fonts.ready)` before
   width measurements (fallback-font metrics differ).
5. **sharp channel trap**: `metadata().channels` can be 3 while
   `ensureAlpha().raw()` yields 4 — hardcode CH=4 after ensureAlpha.
6. **Wikipedia photo verification** via REST summary API
   (`/api/rest_v1/page/summary/<title>`); enwiki has no lead image for
   Kulasekhara/Thiruppaan Alvar, Vedanta Desika. Hotlinking thumbs for
   mockups: upload.wikimedia.org serves only FIXED widths now (330 / 500 /
   960 / 1280 / 1920… — 640px returns HTTP 400 "use thumbnail sizes listed");
   use exactly the `thumbnail.source` the API returns, or bump to 960/1920.
7. **Exact-match text assertions**: "Nalayira Divya Prabandham" still exists
   in the hero description COPY (clamped to 1 line) — its absence tests use
   `getByText('...', { exact: true })` / exact-string queries, never regex.
8. **Playwright scratch scripts must live in `app/`** (delete after); preview
   serves under `/108Kshetra/`; start preview with
   `(npm run preview -- --port 4173 --strictPort &)` — a lingering server on
   4173 silently serves STALE dist after rebuilds (kill/restart when unsure).
9. **No Python on this box** — node one-liners / heredoc `.mjs` scripts.
10. `ProgressBanner.jsx` is app-dead (tests only); live tracker is
    `YatraProgressTracker` with `eligibleIds` (106 earthly scope).
11. Old gotchas: grep -i for content tests; shim re-export collision
    (rolldown PARSE_ERROR); scan ALL distinct keys before schema-mapping;
    `sanity schema validate` needs placeholder project id; JSON key-order
    normalization (wiki key FIRST in azhwar-details records, after tamilName
    in acharyas); Vite-only imports break plain-node; gh CLI unauthenticated
    (curl api.github.com + node one-liners); lucide icon imports;
    `markVisited(id, true)`; `fireEvent.click` for hover UI in jsdom;
    coverage exit codes behind pipes. (Full list: git history of HANDOVER,
    commits 8144950 / 73c8f80 / b647a86.)

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 209 unit / 21 suites
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines
npm run lint             # oxlint (0 errors; 5 accepted warnings)
npm run build            # production build
npx playwright test      # 19 e2e (boots vite preview on :4173)

# app/  (CMS pipeline self-tests — no Sanity account needed)
node scripts/sync-content.mjs --fixture scripts/__fixtures__/sync-response.json --check

# studio/  (Sanity)
npm run verify -- --local --dump-fixture ../app/scripts/__fixtures__/sync-response.json
                         # offline round-trip + fixture regen (run AFTER content edits)
npm run import           # repo JSON → Sanity (idempotent; needs SANITY_TOKEN)
npm run deploy           # host the studio (free)
SANITY_STUDIO_PROJECT_ID=placeholder123 npx sanity schema validate

# one-off asset generation (plaque watermark)
cd app && npm i --no-save sharp
node scripts/make-hero-watermark.mjs <plaque-photo.png>

# visual smoke + layout measurement (script must live in app/, delete after)
(npm run preview -- --port 4173 --strictPort &)   # then http://localhost:4173/108Kshetra/
# node script: import { chromium } from '@playwright/test';
# await page.evaluate(() => document.fonts.ready); measure via getBoundingClientRect
# nav sweep: one row (center-line spread <4px), pill ratio h/font <2.6, no viewport overflow

# CI/Actions status (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
```

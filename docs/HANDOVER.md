# HANDOVER — 108 Divya Kshetrams (2026-09-27, end of PO fix-list round 3 session)

State: **PO fix list round 3 COMPLETE (items 1–5 then design-approved item 6),
pushed, CI+Deploy green, live verified.**
`main` = `78f3ea4` in sync with `origin/main` (https://github.com/XdPkl/108Kshetra).
Live: https://xdpkl.github.io/108Kshetra/ (CSS `index-D5wVhnUn.css`; live
spot-checks: band gradient stops + `e2c47c!important` hover rule present).
Same day also shipped: 1200px container (`054ebf8`, TER v2.3), round 2
(`70cc776`, TER v2.4). Working tree clean (untracked `.zcodeignore` — leave).

## 1. What this session's round 3 delivered (commits 5d1697d + 08a5d72 + 78f3ea4; TER v2.5/v2.6)

1. **Strips 50/50**: Azhwars + Acharyas cards share one row (`lg:grid-cols-2`),
   each 564px (50% of the 1152px content row), equal stretched heights
   (406px), CTA pinned to card bottoms.
2. **Azhwars headline pair** "Saint-poets of the Tamil Veda • The Twelve
   Azhwars" on ONE row, both spans 15px (was eyebrow 10px above title 24px).
   Remaining lead ("Whose hymns sanctified…") is the 11px subline.
3. **Acharyas headline pair** "The Acharyas • Teachers who received,
   preserved and expounded the tradition." same treatment; subline is the old
   eyebrow "The guru parampara". Pairs live inside a semantic h2 (the rewrite
   initially dropped the h2 — caught by measurement).
4. **Watermark fully visible + centred**: hero img is `h-full w-auto`
   (514×127 measured fully inside the hero) instead of the cropped full-width
   frieze. Hero is now 128.5px (the eyebrow removal below shortened it further
   from 155px).
5. **NALAYIRA DIVYA PRABANDHAM eyebrow removed from the hero**. Gotcha: the
   hero DESCRIPTION copy still contains the phrase (invisible under
   `line-clamp-1`) — the tests therefore use EXACT-text matchers
   (`queryAllByText('Nalayira Divya Prabandham')`, `getByText(..., {exact: true})`).
6. **Header band (design APPROVED via options: deep saffron gradient chosen
   over bright saffron / vermilion / festive gold)**: header =
   `bg-gradient-to-r from-[#7A2E00] to-[#B34700]`, full-bleed (width = vw,
   measured), gold hairlines crown+foot, sticky kept, dropdown panels stay
   cream (pop). Label system: nav base color is now `text-[#FFFDF7]` (the
   round-2 `color: inherit` override makes pills inherit it), idle pills
   cream with `hover:text-[#E2C47C]!` gold (TRAILING bang needed — the
   unlayered inherit rule beats normal layered hover utilities), active =
   frosted `bg-[#FFFDF7]/15` + gold ring. The Kshetra Tours ACTIVE pill FLIPPED
   to the gold idiom (`#E2C47C→#C99A2E`, ink `#4A3005` label) — its old dark
   gradient was identical to the band and would have vanished. Icons gold
   `#E2C47C`; mobile trip pill + hamburger recolored. NOTE: idle pills changed
   cream-on-saffron and the active pill changed to gold — PO approved these in
   the option preview.

Final verification (round 3 cumulative): **209/209 unit (21 suites) · 19/19
e2e · coverage 92.5/83.12/88.29/93.69 (gate 80%) · oxlint 0 errors / 4
pre-existing warnings · build clean.**

## 1. What this session delivered (commit 70cc776, 17 files; TER v2.4)

All 9 items of the PO's second fix list:

- **Item 1 — brand eyebrow**: "Nalayira Divya Prabandham" removed from the
  header brand tile (it sat literally under the "108 Divya Kshetrams" title).
  The SAME phrase remains as the hero eyebrow ABOVE the hero title — flagged
  to the PO; remove `hero.eyebrow` render if round 3 asks.
- **Item 2 — hero height −50%**: measured 310px → **154.9px (exactly 0.50)**.
  Cuts: invocation pill row removed, description `line-clamp-1`, paddings
  tightened, and the real culprit — the **unlayered legacy h1 rule**
  (`base.css:38` pins every h1 to `--font-display-2` + 16px bottom margin,
  beating all layered Tailwind utilities) neutralised with `!` utilities on
  the hero title only. Other pages' h1s unchanged.
- **Item 3 — nav font ×1.5**: desktop nav 13px → 19.5px, dropdown item labels
  12px → 18px, pill padding compacted (px-2 py-1). Single row verified at
  1280/1440 (needs 921px of 934px available at 1280 — knife-edge, watch it);
  wraps to 2 rows below ~1100px by design.
- **Item 4 — hover menus vanish**: root cause was the `mt-1` gap between
  trigger and panel (dead zone → mouseleave). Both dropdowns rebuilt with
  `top-full` + `pt-1.5` hover bridge. Verified with 3px-step pointer sweeps;
  region chips and dropdown links all clickable.
- **Item 5 — active pill contrast**: root cause: unlayered
  `base.css a { color: var(--color-primary) }` forces saffron onto every
  anchor, so the active Kshetra Tours pill's white label was invisible on its
  own saffron gradient. Fixed with scoped `.site-header nav a { color:
  inherit }`. Active label now measures `rgb(255,253,247)`. Idle pills
  changed saffron → intended #332417 as a consequence (hover feedback now
  actually works).
- **Item 6 — Azhwars strip**: all **12 azhwars** (was 4) at **81×144** tiles
  (was 215×382); strip 547px → 308px. Wiki titles added for 6 saints
  (thumbnails verified against the Wikipedia summary API pre-commit);
  Kulasekhara + Thiruppaan keep the ◆ fallback (no enwiki lead image).
- **Item 7 — "106 Temples"**: desktop pill, mobile drawer, and dropdown
  "Browse All 106 Temples" row. Dropdown heading "The 108 Sacred Abodes" and
  all directory counts intentionally stay 108 (round-1 semantics).
- **Item 8 — plaque watermark**: PO's wooden-plaque photo → transparent
  980×241 ink-colored strip via `app/scripts/make-hero-watermark.mjs`
  (sharp one-off, `npm i --no-save sharp`): auto-detects plaque/artwork rows,
  removes the 4 screw dots + 45 speckle blobs, keeps 6 motif components
  (Garuda, Chakra ring+hub, Namam, Shankha, Hanuman). Hero renders it
  full-width, vertically centred (frieze band), opacity 0.09.
- **Item 9 — Acharyas strip**: **5 tiles** — Sri Ramanujacharya added (wiki
  verified, photo resolves) between Yamunacharya and Pillai Lokacharya;
  same tile size. Darshan header pill moved md → **2xl** so a non-zero visit
  count can't re-wrap the nav at 1280–1535.

Final verification: **209/209 unit (21 suites) · 19/19 e2e · coverage 92.5%
stmts / 83.12% branches / 88.29% funcs / 93.69% lines (gate 80%) · oxlint 0
errors (5 warnings — all pre-existing set-state-in-effect in files untouched
by this change; count verified identical at parent commit) · build clean ·
CMS round-trip 11/11 lossless + sync-content --check 0 diffs.**

## 2. Open items / likely next requests

- **More PO fix lists** — round 4 is likely (they iterate fast). Proven
  process: map → measure baseline → fix → re-measure deterministically →
  gates → TER → commit. For design-gated asks, present options with
  AskUserQuestion previews FIRST (worked for the header band).
- **PO Sanity setup** (~20 min) — unchanged; `studio/README.md`. Repo JSON is
  the `npm run import` source.
- Photos the PO may supply: Kulasekhara + Thiruppaan strip tiles (◆
  fallback), CEO portrait, Srivilliputhur card, 4 scaffold acharya dossiers.
- Small flags from round 3: hero description is clamped to one line; the
  watermark is centred (~44% of hero width) rather than edge-to-edge (the
  price of "fully visible" at half height) — if the PO wants the frieze
  edge-to-edge again at full visibility, the hero needs ~280px height or a
  wider aspect asset. Nav wraps to 2 rows below ~1100px.
- Jira sync still pending a fresh API token.

## 3. Architecture pointers (unchanged map, plus this session)

- Content source of truth `app/src/data/content/*.json`; shims preserve old
  import paths. Value-only edits (like this session's wiki/ids/copy) are
  sync-safe with NO schema/GROQ changes — but ALWAYS rerun
  `studio npm run verify -- --local --dump-fixture ../app/scripts/__fixtures__/sync-response.json`
  then `sync-content --fixture --check` (the fixture must be regenerated or
  the check diffs).
- Transforms in `studio/scripts/lib/`; field additions/removals still need
  app JSON + component + studio schema + GROQ together.
- **Legacy hand-CSS is UNLAYERED and beats every Tailwind utility**
  (cascade layers). Known offenders: `base.css a {}` (scoped out of header
  nav now) and `base.css h1 {}` (defeated with `!` in the hero). Before
  fighting a utility that "doesn't work", grep `styles/*.css` for an element
  rule. Tailwind v4 important = TRAILING bang (`text-3xl!`).
- `--container-site: 1200px` / `--container-wide: 1550px` theme tokens from
  the container-alignment round; main shell + footer use `max-w-site`.
- Photo sizes baked into sync: card 640 / portrait 800 / lightbox 1280.
- Registers/dates: TER v2.4; TCS v1.7.

## 4. Session gotchas (new this session)

1. **Unlayered CSS beats utilities** — cost two root-cause hunts this session
   (invisible active-pill label = `a` rule; hero height = `h1` rule). The
   hero h1 now carries `text-2xl! sm:text-3xl! mb-0! leading-[1.1]!`.
2. **sharp channels trap**: `metadata().channels` can be 3 while
   `ensureAlpha().raw()` yields 4 channels/pixel — derive CH from the
   resolved buffer or hardcode 4 after ensureAlpha, else every index is
   garbage (symptom: nonsense row profiles / phantom components).
3. **Measure with `document.fonts.ready`**: webfont swap changes widths by
   ~5-10%; fallback-font measurements gave a false "fits" at 1280.
4. **Playwright wrap checks**: compare child tops with bucketing
   (`Math.round(top/12)`) — 1px baseline-alignment noise and the vertically
   centred 1px divider both false-positive naive `top > navTop+5` checks.
5. **Wikipedia photo verification**: `useWikiImage` uses the REST summary API
   (`/api/rest_v1/page/summary/<title>`) — verify candidate titles THERE (the
   action API's pageimages is a good but not identical proxy). enwiki has no
   lead image for Kulasekhara/Thiruppaan Alvar or Vedanta Desika.
6. Old gotchas still valid: grep -i for content tests; Playwright scratch
   scripts only inside `app/` (delete after); preview serves `/108Kshetra/`;
   no Python; CDN-eye image reads; shim re-export collision; JSON key-order
   normalization (wiki key sits FIRST in azhwar-details records, after
   tamilName in acharyas); Vite-only imports break plain-node; gh CLI
   unauthenticated. (Full list: git history of HANDOVER, commits 8144950 /
   73c8f80 / b647a86.)

## 5. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 209 unit / 21 suites
npm run test:coverage    # gates: 80% stmts/branches/funcs/lines
npm run lint             # oxlint (0 errors; 5 pre-existing warnings)
npm run build            # production build
npx playwright test      # 19 e2e (boots vite preview on :4173)

# app/  (CMS pipeline self-tests — no Sanity account needed)
node scripts/sync-content.mjs --fixture scripts/__fixtures__/sync-response.json --check

# studio/  (Sanity)
npm run verify -- --local --dump-fixture ../app/scripts/__fixtures__/sync-response.json
                         # offline round-trip + fixture regen (run AFTER content edits)
npm run import           # repo JSON → Sanity (idempotent; needs SANITY_TOKEN)

# one-off asset generation (plaque watermark)
cd app && npm i --no-save sharp
node scripts/make-hero-watermark.mjs <plaque-photo.png>

# visual smoke (script must live in app/, delete after)
npx vite preview --port 4173   # then http://localhost:4173/108Kshetra/

# CI/Actions status (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
```

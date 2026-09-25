# HANDOVER — 108 Divya Kshetrams (2026-09-25, end of v3.1 CMS-rollout session)

State: **v3.1 CMS rollout (US-CMS-01) COMPLETE, pushed, CI+Deploy green, live verified.**
Nothing in flight. `main` = `a2f71d0` in sync with `origin/main`
(https://github.com/XdPkl/108Kshetra). Live: https://xdpkl.github.io/108Kshetra/
(new bundle index-L8qtf1zo.js; CSS hash unchanged — no style changes by design).

## 1. What this session delivered (commit a2f71d0, 85 files)

Admin-editable photos & text via **Sanity Studio** (free Community plan, Google login —
no GitHub for editors) with a safety-gated git publish pipeline:

```
Editor publishes in Studio → Sanity webhook → GitHub "Content sync" action
→ pull via GROQ → lint + 208 unit tests (80% gates) + build → commit JSON to main
→ existing deploy.yml → live site (~2 min). Failed tests = nothing deploys.
```

- **Phase A (app)**: all data modules converted to `app/src/data/content/*.json`
  (10 files, scripted lossless conversion `app/scripts/convert-js-to-json.mjs`) behind
  thin JS shims so `api.js` + every test import stayed untouched; 16 legacy JS data files
  deleted. Photo src storage = site-relative (`photos/x.jpg`) or absolute URL, resolved by
  new `app/src/utils/assetUrl.js` (wired into `useWikiImage`, `GalleryLightbox`, CEO
  photo; one pinned regex in dossiers.test.js updated; 3 new unit cases). Site copy
  (hero, page banners, About chrome + full ScheduleModal, header dropdown/drawer business
  copy, footer) extracted **verbatim** to `content/site-copy.json` via
  `app/src/data/siteCopy.js`. CEO portrait gained CMS default `about.ceo.photoUrl`
  (localStorage override still wins).
- **Phase B (studio/ package — Sanity v6 + React 19)**: schemas mirror the JSON shapes
  1:1 (kshetram incl. V2 + dossier groups + geopoint + card photo; azhwar; acharya;
  about/siteCopy/config singletons; deterministic ids `kshetram.<slug>`…; references for
  azhwar/guru/featured pickers). `sanity schema validate` = 0 errors/0 warnings.
  Scripts: `npm run import` (idempotent createOrReplace, uploads the 4 photos as
  assets), `npm run verify` (live round-trip), `--local` offline mode.
- **Phase C (CI)**: `app/scripts/sync-content.mjs` (live / `--fixture` / `--check`;
  traditional-order keying so a no-op sync = empty diff; `@sanity/client` devDep) +
  recorded fixture `app/scripts/__fixtures__/sync-response.json` +
  `.github/workflows/content-sync.yml` (repository_dispatch `content-sync` +
  workflow_dispatch; contents:write; concurrency-serialized).
- **Docs**: `studio/README.md` = full runbook (PO one-time setup ~20 min, editor guide,
  rollback, troubleshooting). Registers: US-CMS-01 (user-stories.md), TCS v1.7
  (UT-CMS-01..07), TER v2.1.

Final verification: **208/208 unit (21 suites) · 19/19 e2e · coverage 92.47% stmts /
82.99% branches / 88.2% funcs / 93.67% lines (gate 80%) · oxlint 0 errors (same 4 accepted
set-state-in-effect warnings) · build clean · offline round-trip 11/11 content files
lossless · fixture self-test 0 diffs.**

## 2. THE open item — PO one-time Sanity setup (~20 min)

Everything works without it (site builds from repo JSON), but editors can't edit until
it's done. Checklist with exact clicks: **studio/README.md → "One-time setup"**.
Summary: create free Sanity account+project → copy `.env.example` → `npm run import` →
`npm run verify` (must print lossless) → `npm run deploy` (hosted studio URL) → invite
editor emails (invites ARE the allowlist) → GitHub secrets `SANITY_READ_TOKEN` +
variable `SANITY_PROJECT_ID` (+ dataset var) + `CONTENT_SYNC_PAT` (fine-grained PAT,
Contents read/write, used as the webhook bearer) → Sanity webhook →
`api.github.com/repos/XdPkl/108Kshetra/dispatches`, payload
`{"event_type":"content-sync"}`.
**Watch item on first live verify:** celestial-desam `timings/wiki` nulls must round-trip
(proven offline; the verifier will catch drift).

## 3. Architecture pointers (CMS additions)

- Content source of truth: `app/src/data/content/*.json`; shims (`kshetrams.js`,
  `enrichment/{index,coords,templates,dossiers}.js`, `about.js`, `config.js`,
  `siteCopy.js`, …) preserve old import paths — do not bypass them.
- Transforms live in `studio/scripts/lib/`: `to-sanity-docs.js` (JSON→docs, import
  direction), `to-app-json.js` (GROQ result→JSON; exports the single GROQ used by BOTH
  live sync and verification), `simulate-groq.js` (offline GROQ simulation). Change one
  side → run `verify-roundtrip --local` immediately.
- Photo sizes baked into sync: card 640 / portrait 800 / lightbox 1280, `&auto=format`,
  Sanity CDN. `wiki` title stays the no-photo fallback everywhere.
- Kshetram doc splits back into kshetrams/enrichment/templates/dossier-templates/coords
  JSONs; `isApprovedSample` flag routes srirangam to templates.json. Acharya `order`
  field preserves listing order. Mixed lifeHistory via `{text}` = plain-string items.
- Registers/dates convention maintained (TER/TCS/US entries per feature).

## 4. Session gotchas (learned the hard way — respect these)

1. **Shim re-export collision**: `import SITE_COPY from './x.json'; export const
   SITE_COPY = SITE_COPY` — vitest/esbuild accept it, **rolldown build fails**
   (PARSE_ERROR "already declared"). Rename the import binding.
2. **Scan for ALL distinct keys before schema-mapping a dataset** — late-found variants
   this session: azhwar `bhaktiBhava`, saint-verse `translit`/`significance`/`meaning`,
   azhwar `lifeHistory`. One-liner: node + Object.keys union per record.
3. **`sanity schema validate` requires SANITY_STUDIO_PROJECT_ID** to load the config —
   a placeholder value works for offline validation.
4. **JSON/JS key-order normalization**: repo content files were rewritten once
   (2026-09-25) to the sync's canonical order; keep `orderKeyed` behavior in
   sync-content.mjs or no-op syncs start producing reorder diffs.
5. **Schema helpers**: `S(name, title, extra)` etc. in `studio/schemas/_helpers.js` —
   don't mix helper-call syntax into raw object literals (caused two parse errors).
6. **Vite-only expressions in data**: `import.meta.env.BASE_URL` inside data modules
   breaks plain-node imports — the converter neutralizes via temp-copy textual replace
   with `''`.
7. **gh CLI is unauthenticated here** — use `curl api.github.com` + node one-liners for
   Actions/CI checks (see §6).
8. Old gotchas still valid: cascade layers, brace-matched CSS stripping, Wikimedia
   330/1280-only thumbs, `markVisited(id, true)`, fireEvent.click for hover UI in jsdom,
   lucide icon imports, coverage exit codes behind pipes, Playwright browser cache.
   (Full list: git history of HANDOVER, commit b647a86.)

## 5. Open items / likely next requests

- **PO Sanity setup** (§2) — then a smoke test: edit something small in the Studio,
  publish, watch the Content sync action go green and the site update.
- **Content the PO may supply** (now self-service via the CMS once set up): CEO
  portrait (About → Founder & CEO → image), Srivilliputhur card photo (kshetram doc →
  Photo & Location), dossiers for the 4 scaffold acharyas (pending markers render until
  then).
- **Jira sync** still pending a fresh API token (docs note it).
- Untracked: `.zcodeignore` (harness config — leave). `docs/03-design/mockups-v3/` was
  DELETED this session per PO decision (2026-09-25).
- index.html title/meta deliberately NOT CMS-editable (SEO chrome, developer-owned);
  primary nav pill labels likewise (structural) — documented in siteCopy.js header.

## 6. Command cheat-sheet

```
# app/  (quality gates — CI parity)
npm test                 # 208 unit / 21 suites
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

# CI/Actions status (gh CLI has no auth here)
curl -s "https://api.github.com/repos/XdPkl/108Kshetra/actions/runs?per_page=4"
```

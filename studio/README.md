# Content Studio — Sanity CMS for 108 Kshetrams

Editors change site text and photos here; publishing updates the live site in
about two minutes. No GitHub or developer involvement needed.

```
Editor edits in Studio → Publish → Sanity webhook → GitHub "Content sync" action
  → pulls content, runs lint + 205 unit tests + build → commits JSON to main
  → existing deploy workflow republishes the site
```

If any test fails, nothing is committed and the live site is untouched — a bad
edit can never reach visitors. Every change is a git commit, so rollback is
`git revert` (or edit again in the Studio and re-publish).

## One-time setup (Product Owner, ~20 minutes)

1. **Create the free Sanity account** at https://www.sanity.io/login — "Continue
   with Google" is recommended (this is the third-party login; no GitHub needed).
2. **Create a project** at https://www.sanity.io/manage → "Create project" →
   name it `108 Kshetrams`, keep the `production` dataset (Private is fine — the
   site reads via a token).
3. **Copy `studio/.env.example` to `studio/.env`** and fill in the project ID
   (shown on the project's settings page).
4. **Create an API token**: project → API → "Add API token" → name
   `content-import`, rights **Editor**. Put it in `studio/.env` as `SANITY_TOKEN`.
5. **Import the content** (from `studio/`):
   ```
   npm install
   npm run import
   ```
   This creates all 150 documents (108 kshetrams, 12 azhwars, 27 acharyas,
   3 singletons) and uploads the 4 existing photos. Re-running is
   safe (it replaces in place).
6. **Verify the round-trip** (still from `studio/`):
   ```
   npm run verify
   ```
   Must print `round-trip verified: all 11 content files lossless.`
7. **Deploy the Studio**: `npm run deploy` (free Sanity hosting) → note the
   `https://<name>.sanity.studio` URL.
8. **Invite the editors**: manage.sanity.io → project → Members → "Invite" →
   enter each editor's email as **Editor** (avoid Administrator unless needed).
   Invited members ARE the allowlist — nobody else can log in.
9. **Wire up auto-deploy** (GitHub, one time):
   - Repo → Settings → Secrets and variables → Actions:
     - Secret `SANITY_READ_TOKEN` — a second Sanity token with rights **Viewer**.
     - Variable `SANITY_PROJECT_ID` and (optional) `SANITY_DATASET=production`.
     - Secret `CONTENT_SYNC_PAT` — a GitHub fine-grained personal access token
       (Settings → Developer settings) with **Contents: read & write** on this
       repo only (this is for the webhook in the next step).
   - Sanity manage → project → API → Webhooks → "Create webhook":
     - URL: `https://api.github.com/repos/XdPkl/108Kshetra/dispatches`
     - Trigger on: Create, Update, Delete
     - Filter: leave empty (all documents)
     - Projection: `{}` (default)
     - HTTP method POST, HTTP Authorization header value:
       `Bearer <the CONTENT_SYNC_PAT value>`, Payload:
       `{"event_type":"content-sync"}` (advanced settings).
   - Test: edit anything in the Studio → Publish → the GitHub "Content sync"
     action should run green within a minute.

## Everyday editing (editors)

1. Open the Studio URL and log in with the invited email.
2. Pick the content: **Kshetrams** (by region), **Azhwars**, **Acharyas**,
   **About & Kshetra Tours**, **Site Copy** (hero/banners/modal), **Featured
   & Settings**.
3. Edit text (Tamil types as normal Unicode) or upload photos into any photo
   field — for the temple card photo use *Photo & Location → Card / hero photo*;
   for saint portraits use the *Photo* group; CEO portrait is in
   *About → Founder & CEO*.
4. Click **Publish** (top right). Unpublished drafts never reach the site.
5. Wait ~2 minutes and reload https://xdpkl.github.io/108Kshetra/.

Notes:
- Numbers with fixed meaning (kshetram order, featured lists) are read-only or
  pickers — they can't be mistyped.
- If the Content sync action fails, the site is still on the last good content;
  fix the flagged field in the Studio (the action log shows which test failed)
  and publish again.

## Troubleshooting / operations

| Symptom | Fix |
|---|---|
| Studio URL forgotten | `cd studio && npx sanity deploy` shows/updates it |
| Editor left the team | Remove the member in Sanity manage — instant revocation |
| Bad content published but tests blocked it | The action log names the failing test; correct the field and re-publish |
| Bad content DID go live | `git revert <sync-commit>` and push; site redeploys immediately |
| Webhook lost / PAT rotated | Redo step 9; also runnable manually: Actions → Content sync → Run workflow |
| Want a full content backup | Sanity manage → project → dataset → Export (JSONL) — the repo JSON is also always a complete snapshot |

## Architecture / developer notes

- `schemas/` — Sanity schema mirroring the app's JSON shapes 1:1 (document
  types: kshetram, azhwar, acharya + about/siteCopy/config singletons;
  deterministic ids `kshetram.<slug>` etc.).
- `scripts/lib/to-sanity-docs.js` — app JSON → Sanity docs (import direction).
- `scripts/lib/to-app-json.js` — GROQ result → app JSON (sync direction);
  exports the single GROQ query both live sync and verification use.
- `scripts/lib/simulate-groq.js` — offline GROQ simulation for the lossless
  proof (`npm run verify -- --local`).
- `app/scripts/sync-content.mjs` — the CI-side sync (fixture + check modes);
  `app/scripts/__fixtures__/sync-response.json` is the recorded response used
  by the offline self-test.
- `app/src/data/content/*.json` — the synced files the app builds from
  (thin JS shims keep the old import paths intact).
- Photos: Sanity image assets, served from Sanity's CDN with on-the-fly sizing
  (`?w=640&auto=format` card, 800 portrait, 1280 lightbox). A `wiki` title
  remains the no-photo fallback.
- Cost: Sanity free plan (Community) — 2–3 editors and this content volume sit
  far below every limit; no credit card on file means no overage risk.

Known follow-up when the live project exists: run `npm run verify` (live) once
after import to confirm Sanity's storage round-trips the two celestial-desam
`null` timings verbatim (proven offline; the verifier will catch any drift).

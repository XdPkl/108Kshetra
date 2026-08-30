# Feasibility Study — Administrator Content Management

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | FEAS-108K-001 |
| Version | 1.0 |
| Status | Draft — awaiting Product Owner decision |
| Date of Issue | 2026-08-30 |
| Trigger | PO requirement: "I need a page for administrator to add or update the content in the site" |
| Disposition | Candidate **Release 3** — no implementation until the PO approves |

---

## 1. Requirement statement

The site administrator (the Product Owner) wants to add or update site content — kshetram details, festivals, timings, Acharya biographies, About-page copy — through an administrative interface, without editing source code or running git commands.

## 2. Current architecture (facts that shape feasibility)

| Fact | Implication |
|---|---|
| Static SPA (React + Vite) on **GitHub Pages** | No server, no database, no runtime process — any admin feature must be client-side plus an external write path |
| All content lives as **ES-module datasets in git** (`app/src/data/**`) | Content editing = committing to the repo; a CMS needs data files it can write (JSON/YAML), so a one-time refactor from JS modules to JSON is a prerequisite |
| Push to `main` triggers **CI (lint → unit tests with 80% gate + data-integrity checks → build) then deploy** | Any content committed through an admin path is automatically validated and published — a strong existing safety net |
| Data access already isolated in `src/data/api.js` (US-DATA-04) | The UI never imports raw data, so the JSON refactor touches only the data layer |
| Site is **public**; no user accounts exist | Admin authentication must come from an external identity provider (GitHub is the natural choice — the admin already owns the repo) |

## 3. Verdict

**Feasible.** All four options below satisfy the requirement; they differ in effort, security posture and how much of the "single source of truth in git" principle they preserve. Recommended: **Option A — Git-based CMS**.

## 4. Options analysis

### Option A — Git-based CMS at `/admin` (Sveltia CMS or Decap CMS) — **Recommended**

How it works: a `/admin` page in the same repo loads the CMS; the administrator logs in **with their GitHub account** (repo write access = admin rights); structured forms (one collection per dataset: kshetrams, enrichment, azhwars, acharyas, about) edit JSON/YAML files; the CMS **commits to the repository**; the existing CI validates and auto-deploys.

- Needs: (1) one-time refactor of content from JS modules → JSON files consumed by `api.js`; (2) CMS `config.yml` describing the collections/fields; (3) a small **OAuth auth worker** (a free Cloudflare Worker / equivalent) because GitHub's OAuth token exchange cannot run purely client-side.
- Pros: true in-browser editing with forms and media handling; content stays in git (full audit trail, rollback = revert); zero change to hosting; invalid content is blocked by the existing data-integrity tests at CI; optional "editorial workflow" drafts content on a branch for review before publish.
- Cons: one external (free) component to own (auth worker); form definitions must be maintained as fields evolve.
- Effort: **Medium** — ~2 weeks equivalent / est. 20–26 pts as a Release 3 epic (EP-ADM).
- Security: admin powers = GitHub repo write; no new passwords stored on the site; OAuth scopes limited to the single repo (fine-grained token).

### Option B — Custom admin SPA using the GitHub REST API

How it works: custom React pages (route-guarded) build forms for each dataset and commit JSON via the GitHub Contents API; authentication via GitHub OAuth device flow or a fine-grained personal token entered by the admin.

- Pros: total control over the editing UX; no external CMS dependency; reuses the existing React codebase and design tokens.
- Cons: every form hand-built and maintained (high surface area); OAuth token handling inside a public SPA needs care (device-flow/CORS constraints); re-implements what CMS projects already solved.
- Effort: **High** — est. 30+ pts.
- Security: acceptable if tokens stay user-side, but the widest attack surface of the four options.

### Option C — External headless CMS (Sanity / Contentful / Strapi)

How it works: content moves into a hosted CMS; the site fetches it at build time; publishing triggers a rebuild (GitHub Actions webhook).

- Pros: best-in-class editing experience, asset pipeline, roles.
- Cons: content leaves the repo (diverges from the project's git-as-source-of-truth architecture); a new external account/dependency (free tiers exist but with limits); rebuild webhooks and API keys to manage.
- Effort: **Medium** — est. 18–24 pts, plus ongoing external dependency.

### Option D — Offline editor (localStorage + JSON export)

How it works: an admin page in the SPA edits content in localStorage and exports validated JSON; publishing = committing the exported file (manually or via a small script).

- Pros: cheapest and fastest to build; zero auth/security surface; useful as an interim content tool.
- Cons: not self-serve publishing — a git commit step remains; no media handling.
- Effort: **Low** — est. 6–8 pts.

## 5. Recommendation

> **PO question (2026-08-30): "Will Option A work after the site is deployed on an independent domain?"**
> **Yes — unchanged.** The CMS talks directly to `api.github.com` (the repository), never to the site's own domain, and publishing stays CI/CD-driven from the repo. Moving from `xdpkl.github.io/108Kshetra/` to a custom domain changes only two configuration values: the GitHub OAuth app callback URL and the auth worker's allowed-origins list. A root custom domain actually simplifies the current subpath setup; and if hosting later moves to Netlify/Cloudflare Pages, their built-in git-gateway removes the auth worker entirely. Options B and C are equally domain-independent, so the recommendation stands.

Adopt **Option A** as Release 3 (EP-ADM), with this sequencing:

1. **Precursor (also independently valuable):** refactor datasets to JSON (`data/kshetrams/*.json`, `enrichment/*.json`, …) consumed by `api.js`; extend data-integrity tests to validate the JSON (schema + invariants). No UI change — NFR-05 already guarantees this.
2. **CMS integration:** `/admin` route (noindex), `config.yml` collections for kshetram enrichment, azhwars, acharyas, about content; Sveltia CMS preferred (actively maintained, performant) with Decap as fallback; auth worker deployed once (documented runbook).
3. **Editorial workflow (optional):** draft-on-branch so content changes appear on a preview deployment before the PO publishes.

## 6. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Bad content reaches `main` via CMS commit | Existing CI gate: lint + data-integrity + unit tests must pass before deploy; editorial workflow adds a review step |
| Auth worker becomes a maintenance liability | It is stateless and rarely changes; runbook + pinned version; can be replaced by any standard OAuth gateway |
| CMS form drifts from data schema | Generate `config.yml` fields from the same schema the integrity tests validate; keep schema in one place |
| Scope creep into "full backend" | Release 3 stays explicitly git-based; a runtime backend remains out of scope (SRS §1.5) |

## 7. Effort estimate

| Increment | Scope | Estimate |
|---|---|---|
| R3a — JSON data refactor | All datasets → JSON + schema/integrity tests | 10–13 pts |
| R3b — CMS integration | /admin, collections, auth worker, runbook | 10–13 pts |
| R3c — Editorial workflow (optional) | Draft/preview/publish flow | 4–6 pts |

## 8. Product Owner decision block

| Question | Decision |
|---|---|
| Proceed with Release 3 (Option A)? | ☐ Yes ☐ No — pending |
| Include R3c editorial workflow? | ☐ Yes ☐ No — pending |
| Preferred CMS (Sveltia default)? | __________ |

---

*End of Document — FEAS-108K-001 v1.0*

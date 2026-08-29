# 108 Divya Kshetrams

An interactive web application presenting the **108 Divya Desams** — the sacred
Vaishnava abodes of Lord Narayana glorified by the twelve Azhwars in the
Nalayira Divya Prabandham.

Built with React + Vite, styled in a traditional temple theme, fully tested
(unit + E2E) and delivered through a classic ALM process.

## Quick start

```bash
cd app
npm install
npm run dev          # development server
npm run lint         # static analysis (oxlint)
npm test             # unit & component tests (Vitest + RTL)
npm run test:coverage# coverage with 80% gate
npm run build        # production build to dist/
npm run e2e          # Playwright E2E journeys (builds preview server)
```

## Features

- All 108 kshetrams with Tamil names, temple, place, state, region, deity and
  posture, Mangalasasanam by Azhwar, significance note and map link
- Search across name/place/deity/Azhwar; combined filters by state, region,
  deity form and Azhwar
- Kshetram detail pages with safe external map links
- The twelve Azhwars with desam counts and pre-filtered browsing
- Responsive, WCAG-AA-minded, static hosting ready

## Project layout

```
docs/    ALM documents (SRS, user stories, design, review, test plan & reports)
app/     React application (source, tests, E2E)
.github/ CI pipeline (lint → unit → build → E2E)
```

## Documentation index

| Document | Path |
|---|---|
| Software Requirements Specification | `docs/01-srs/requirements-specification.md` |
| User Stories & Agile Backlog | `docs/02-agile/user-stories.md` |
| Technical Design | `docs/03-design/tech-design.md` |
| Coding Standards | `docs/03-design/coding-standards.md` |
| UI/UX Design | `docs/03-design/ui-ux-design.md` |
| Code Review Report | `docs/04-review/code-review-report.md` |
| Test Plan | `docs/05-testing/test-plan.md` |
| Test Cases | `docs/05-testing/test-cases.md` |
| Test Execution Report | `docs/05-testing/test-execution-report.md` |

## Disclaimer

Content is compiled with reverence from the Nalayira Divya Prabandham
tradition and standard published lists, and is provided in good faith for
devotional and educational purposes.

# Coding Standards & Best Practices Guide

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | CSG-108K-004 |
| Version | 1.0 |
| Status | Approved |
| Date of Issue | 2026-08-29 |

---

## 1. Purpose

This guide defines the mandatory coding standards for the project so that every contributor produces consistent, maintainable, reusable code. It is enforced by ESLint/Prettier (automated) and the code-review checklist (manual, Gate B).

## 2. General Principles

1. **Readability over cleverness** — code is read far more often than written.
2. **Single responsibility** — one component/hook/function, one job.
3. **DRY** — shared UI becomes a reusable component; shared logic becomes a hook or pure utility.
4. **Data-driven** — behavior comes from data/config, not hardcoded branches.
5. **Small files** — no source file exceeds **300 lines**; split when exceeded.
6. **No magic values** — strings/numbers used in logic are named constants; display copy may live in JSX.

## 3. Naming Conventions

| Artifact | Convention | Example |
|---|---|---|
| Components | PascalCase files & identifiers | `KshetramCard.jsx` |
| Hooks | `use` + camelCase | `useKshetramFilters` |
| Utilities | camelCase verb phrases | `filterKshetrams`, `groupBy` |
| Data modules / accessors | camelCase nouns | `getAllKshetrams` |
| Constants | SCREAMING_SNAKE | `REQUIRED_FIELDS` |
| CSS classes | kebab-case, block-element | `.kshetram-card`, `.kshetram-card__title` |
| Tests | `*.test.js(x)` co-located in `__tests__/` | `filter.test.js` |
| Route params | camelCase | `/kshetram/:id` |

## 4. React Standards

- Functional components with hooks **only** — no class components.
- Components are presentational; data access goes through hooks (`useKshetrams`) or the data API (`src/data/api.js`). **Never import raw datasets in a component.**
- One component per file (tiny private subcomponents allowed with a comment).
- Props: keep small and explicit; document each with JSDoc; no boolean-flag-driven rendering forks beyond two states.
- Keys in lists: stable domain ids (`kshetram.id`), never array index.
- Effects: only for synchronizing with external systems; derived state is computed during render (e.g., filtered list = `useMemo(filterKshetrams, [filters])`).
- Accessibility: semantic elements (`nav`, `main`, `article`), labels on inputs, `aria-live="polite"` on result counts, visible focus styles, external links carry `rel="noopener noreferrer"`.

## 5. Commenting Standards

- **Every exported module, component, hook, and utility carries a JSDoc block** describing purpose, params, and returns (type information where helpful).
- Components document their props.
- Inline comments are written **only for non-obvious constraints** (e.g., why a filter uses AND-composition, why a query param is synced). Comments explaining *what* the next line does are prohibited.
- TODO format: `// TODO(US-XXX): description` referencing a story.

```js
/**
 * Returns kshetrams matching every active filter (AND semantics).
 * @param {Kshetram[]} kshetrams - full dataset
 * @param {{search: string, state: string, deityForm: string, azhwar: string}} filters - active filters (empty string = inactive)
 * @returns {Kshetram[]} filtered subset
 */
```

## 6. Styling Standards

- Vanilla CSS with **design tokens** (`src/styles/tokens.css`) as the single source of color/spacing/typography truth; components never hardcode hex values.
- One stylesheet concern per selector block; no `!important`; no inline `style` except truly dynamic values.
- Responsive by default (mobile-first min-width queries).
- Class naming follows BEM-lite (`block__element--modifier`).

## 7. Data Standards

- Datasets are the product: each record complete, verified against the standard published list of 108 Divya Desams.
- New fields must be added to the JSDoc typedef, the data-integrity test, and (if displayed) a Detail section.
- IDs are stable, lowercase kebab slugs — they are public URLs.

## 8. Testing Standards

- Tests are written **with** the feature (not after) — Gate A requires them.
- Test behavior, not implementation: query by role/label/text (RTL), not by internal state.
- One logical assertion group per `it`; `describe` mirrors the unit under test.
- Data-integrity tests are sacred: they fail the suite on any incomplete record.
- E2E tests cover user journeys, not component internals.

## 9. Refactoring Rules

Refactoring is a scheduled Gate-B activity. Triggers requiring refactor:

- duplicated JSX/logic (extract component/hook/util),
- file > 300 lines (split),
- component doing data transformation (move to util/hook),
- prop drilling deeper than 2 levels (compose at page level),
- failing lint with suppressions used (remove suppression, fix cause).

Suppression policy: `eslint-disable` requires an inline reason and a linked TODO; unused suppressions are review findings.

## 10. Git Standards

- Branches: `main` (protected), feature branches `feature/US-XXX-slug`.
- Commits: `US-XXX: imperative summary` — one logical change per commit; never mix docs + code + config in one commit unless inseparable.
- Push only green builds (CI enforces).

## 11. Code Review Checklist (Gate B)

| # | Check |
|---|---|
| 1 | Naming and file organization per §3 |
| 2 | JSDoc on all exports; comments follow §5 |
| 3 | No raw data imports in components; layering respected |
| 4 | Reusability: no copy-pasted logic; shared artifacts used |
| 5 | Accessibility semantics and keyboard operability |
| 6 | Security: safe external links, no injection of user input into markup |
| 7 | Performance: memoized derived lists, stable keys |
| 8 | Tests present, meaningful, passing; coverage ≥ 80% |
| 9 | Files ≤ 300 lines; no unnecessary complexity |
| 10 | Findings reworked and re-verified before closure |

---

*End of Document — CSG-108K-004 v1.0*

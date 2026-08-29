# Test Plan

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | TPL-108K-007 |
| Version | 1.0 |
| Status | Approved |
| Date of Issue | 2026-08-29 |
| Standard | IEEE 829-style structure |

---

## 1. Introduction

### 1.1 Purpose
Defines the approach, environments, entry/exit criteria, and schedule for testing the 108 Divya Kshetrams web application against SRS-108K-001.

### 1.2 Scope
All automated testing: static analysis, unit/component (Vitest + React Testing Library), system/E2E (Playwright), and build verification. Manual exploratory checks complement automation.

### 1.3 References
SRS-108K-001; TDD-108K-003; CSG-108K-004; CRR-108K-006.

## 2. Test Items

| Item | Location |
|---|---|
| Data layer (108 kshetrams, 12 Azhwars) | `app/src/data` |
| Utilities & hooks | `app/src/utils`, `app/src/hooks` |
| Components & pages | `app/src/components`, `app/src/pages` |
| Built SPA | `app/dist` (via `vite preview`) |

## 3. Features to Be Tested

1. Data integrity — completeness and consistency of the 108-record dataset (FR-01..03)
2. Home page content and navigation (FR-10..12)
3. Browse — full grid, search, combined filters, count, empty state, reset (FR-20..25)
4. Kshetram detail — sections, map link safety, not-found (FR-30..33)
5. Azhwars — 12 entries, desam links, pre-filtered browse (FR-40/41)
6. Shell — header/footer, active nav, unknown routes (FR-50..52)
7. Quality gates — lint zero errors, coverage ≥ 80%, build success (NFR-04/06)

## 4. Approach

| Level | Tool | When |
|---|---|---|
| Static | Oxlint | Gate A, every commit |
| Unit/Component | Vitest + RTL (jsdom) | Written with each story; Gate A |
| System/E2E | Playwright (Chromium headless) | After Gate B; Gate C |
| Build | Vite production build | Gates A and C |

## 5. Entry / Exit Criteria

**Entry (to system testing):** Gate A passed (unit green, coverage ≥80%, lint 0) and Gate B passed (review closed with rework verified).

**Exit (delivery, Gate C):** all test cases in `test-cases.md` executed and passed; zero open Critical/Major defects; production build succeeds; bundle within budget.

## 6. Test Environment

- Windows 11, Node.js 26, npm 11.
- Unit: jsdom (no browser needed). E2E: Playwright-managed Chromium against `vite preview` (http://localhost:4173).
- CI mirror: GitHub Actions `ubuntu-latest` (Node 22).

## 7. Test Deliverables

- `docs/05-testing/test-plan.md` (this document)
- `docs/05-testing/test-cases.md`
- `app/e2e/journeys.spec.js` (executable E2E cases)
- `app/src/**/__tests__` (unit/component suites)
- `docs/05-testing/test-execution-report.md`

## 8. Defect Management

Defects are logged in the execution report's Defect Log with ID, severity (Critical/Major/Minor), phase found, description, disposition, and fix reference. Critical/Major defects block the relevant gate.

## 9. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Content accuracy (names, places, Azhwar attributions) | Compiled against standard published lists; disclaimer shipped; review pass on dataset; flagged as future enrichment |
| Tamil rendering across platforms | Tamil-capable web font (Mukta Malar) bundled via Google Fonts; `lang="ta"` attributes |
| Browser-specific CSS | Responsive breakpoints tested at 360/768/1280 widths in E2E smoke |
| E2E flakiness | Deterministic data (no network); Playwright auto-waiting |

---

*End of Document — TPL-108K-007 v1.0*

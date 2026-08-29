# UI/UX Design Specification

## 108 Divya Kshetrams — Interactive Web Application

---

## Document Control

| Field | Value |
|---|---|
| Document ID | UXD-108K-005 |
| Version | 1.0 |
| Status | Approved |
| Date of Issue | 2026-08-29 |
| Traceability | Implements FR-10..52, NFR-03 |

---

## 1. Design Vision

A traditional temple aesthetic — warm saffron and gold on deep red-brown, serif display type evoking temple inscriptions, generous whitespace, and content-first layout. The design must feel reverent and heritage-rich while staying clean, fast, and accessible (WCAG AA).

## 2. Design Tokens

Implemented in `src/styles/tokens.css`; the single source of truth.

### 2.1 Color Palette

| Token | Value | Usage | Contrast |
|---|---|---|---|
| `--color-primary` | `#B34700` (deep saffron) | Headings, primary buttons, active nav | 4.9:1 on cream |
| `--color-primary-dark` | `#7A2E00` | Hover states, footer bg | — |
| `--color-accent` | `#C99A2E` (temple gold) | Borders, dividers, badges, icons | decorative only |
| `--color-bg` | `#FDF8F0` (warm cream) | Page background | — |
| `--color-surface` | `#FFFFFF` | Cards | — |
| `--color-text` | `#3A2A1E` (deep brown) | Body text | 12.6:1 on cream |
| `--color-text-muted` | `#6B5A4A` | Secondary text | 5.6:1 on cream |
| `--color-danger` | `#A32020` | Error/not-found | 6.1:1 on cream |

All body-text pairings meet ≥ 4.5:1 (NFR-03). Gold is used decoratively (borders/ornaments) only, never for text under 18px.

### 2.2 Typography

| Token | Font | Usage |
|---|---|---|
| `--font-display` | "Cormorant Garamond", serif | Headings, site title |
| `--font-body` | "Mukta Malar", sans-serif | Body, UI controls — includes Tamil support so Tamil names render consistently |
| `--font-size-*` | 0.875 / 1 / 1.125 / 1.5 / 2 / 3 rem | scale |
| Line height 1.6 body, 1.2 headings | | |

Fonts via Google Fonts with `display=swap`.

### 2.3 Spacing, Radius, Shadow

- Spacing scale (rem): `--space-1..6` = 0.25 / 0.5 / 1 / 1.5 / 2 / 3.
- `--radius-card: 10px`; `--radius-pill: 999px` (badges).
- `--shadow-card: 0 2px 8px rgba(58,42,30,0.10)`.
- Motif: a 3px gold top-border on cards and header — a subtle "temple beam" signature element.

## 3. Global Layout & Navigation

Header: cream surface, gold bottom border; site title in display serif with a small Śrīvatsa-like ◆ ornament; nav links (Home, Browse, Azhwars) — active link underlined in saffron with gold underline accent. Mobile: nav collapses to a horizontal scroll row (no hamburger needed for 3 items). Footer: deep brown bg, cream text, attribution & disclaimer.

```
┌────────────────────────────────────────────────────────────┐
│ ◆ 108 Divya Kshetrams        Home   Browse   Azhwars      │ ← header
├────────────────────────────────────────────────────────────┤
│                       (page content)                        │
├────────────────────────────────────────────────────────────┤
│ Compiled with reverence · Data disclaimer · © 2026        │ ← footer
└────────────────────────────────────────────────────────────┘
```

## 4. Screen Specifications

### 4.1 Home Page (`/`) — FR-10/11/12

```
┌──────────────────────────────────────────────┐
│            108 DIVYA KSHETRAMS      (h1)     │  Hero: centered, cream bg,
│   The sacred abodes of Lord Narayana,        │  gold ornament rule above/below,
│   sung by the twelve Azhwars in the          │  intro paragraph (2–3 lines)
│   Nalayira Divya Prabandham.                 │
│      [ Explore the 108 Kshetrams ]  [Meet    │  Primary (saffron) + secondary
│        the Azhwars ]                         │  (outline) buttons
├──────────────────────────────────────────────┤
│   108 Kshetrams  ·  12 Azhwars · 4,000+      │  Stat band: three figures in
│        Pasurams                               │  display serif on gold-tinted
│                                               │  band
├──────────────────────────────────────────────┤
│  Featured Kshetrams (h2)                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │  4 KshetramCards (Srirangam,
│  │ card   │ │ card   │ │ card   │ │ card   │ │  Tirupati, Kanchi Varadaraja,
│  └────────┘ └────────┘ └────────┘ └────────┘ │  Alwar Thirunagari), 1fr→4col
├──────────────────────────────────────────────┤
│  The Twelve Azhwars (h2) — short intro +     │  Teaser band linking to /azhwars
└──────────────────────────────────────────────┘
```

### 4.2 Browse Page (`/kshetrams`) — FR-20..25

```
│  Explore the Divya Kshetrams (h1)            │
│  ┌────────────────────────────────────────┐  │
│  │ Search… [____________]                 │  │  SearchFilterBar (sticky on
│  │ State [▾] Deity Form [▾] Azhwar [▾]    │  │  desktop): text input with
│  │                          Clear all     │  │  label+placeholder, 3 selects
│  └────────────────────────────────────────┘  │  populated from data, reset
│  Showing 108 of 108 kshetrams   (aria-live)  │  button; result count live region
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐    │
│  │card │ │card │ │card │ │card │ │card │    │  KshetramCard grid: 1col mobile
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘    │  → 2 tablet → 4 desktop
│  … (108 cards, page scrolls)                 │
```

**KshetramCard** (reusable): gold top border, surface bg; Tamil name (muted, Tamil font), English name (display serif, link), place · state line, deity name, badge row (deity form badge, pasuram-count badge). Whole card is a single link to `/kshetram/:id`. Hover: saffron border + shadow lift. Keyboard: focus-visible ring.

**Empty state** (FR-24): centered — "No kshetrams found" (h2), guidance text, "Clear all filters" primary button.

### 4.3 Kshetram Detail (`/kshetram/:id`) — FR-30..33

```
│  ← Back to all kshetrams                     │
│  திருவரங்கம் (Tamil, muted)                  │
│  Srirangam — Sri Ranganathaswamy Temple (h1) │
│  [Chola Nadu] [Standing — Kidandan] [247     │  Badge row (region, form,
│   Pasurams]                                  │  pasurams)
│  ┌──────────────────┬────────────────────┐   │  Two-column → stacked mobile:
│  │ PRESIDING DEITY  │ LOCATION            │   │  Definition-list cards per
│  │ Ranganatha       │ Srirangam, Trichy,  │   │  section: Deity, Location
│  │ (Vishnu,         │ Tamil Nadu          │   │  (+ "View on Google Maps"
│  │  reclining)      │ [View on Map ↗]     │   │  external link), Identity,
│  ├──────────────────┴────────────────────┤   │  Mangalasasanam (Azhwar
│  │ MANGALASANAM                           │   │  chips linking to /azhwars)
│  │ Glorified by: Periyazhwar · Andal · …  │   │
│  ├────────────────────────────────────────┤   │
│  │ SIGNIFICANCE  (paragraph)              │   │
│  └────────────────────────────────────────┘   │
```

**Not-found state** (FR-33): danger-toned EmptyState — "This kshetram was not found" + Browse CTA.

### 4.4 Azhwars Page (`/azhwars`) — FR-40/41

```
│  The Twelve Azhwars (h1)                      │
│  Intro: saint-poets of the Prabandham…        │
│  ┌─────────────────────────────────────────┐ │  Chronological list of 12
│  │ பொய்கையாழ்வார்  Poigai Azhwar            │ │  article cards: Tamil name,
│  │ 6th–7th c. CE · 100 pasurams            │ │  period, pasuram count,
│  │ Glorified 85 desams → [chips: Srirangam,│ │  note, desam-count, chips of
│  │  Tirupati, …] (link to /kshetram/:id)   │ │  first desams + "+N more"
│  └─────────────────────────────────────────┘ │
```

## 5. Interaction & States

| State | Behavior |
|---|---|
| Search input | Filters as user types (no debounce needed at 108 items); `type="search"`, clear × native |
| Selects | First option "All states/forms/Azhwars" (value ""); changing any control re-filters instantly |
| Result count | `aria-live="polite"`; "Showing N of 108 kshetrams" |
| Card link | Whole-card anchor; focus-visible ring 2px saffron offset 2px |
| External map link | `target="_blank" rel="noopener noreferrer"`, external-link icon ↗ |
| Loading | Not applicable (local data) — routes render synchronously |
| Azhwar prefilter | `/kshetrams?azhwar=<id>` sets the Azhwar select on mount (FR-41) |

## 6. Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| < 640px | 1-column cards, stacked detail sections, nav wraps/scrolls |
| 640–1023px | 2-column grid |
| ≥ 1024px | 4-column grid, 2-column detail, max-width 1200px centered |

## 7. Accessibility Specification (NFR-03)

- Landmarks: `header/nav/main/footer`; one `h1` per page; heading levels nested.
- All form controls have visible `<label>`; count region `aria-live`.
- Color contrast per §2.1; focus always visible; no color-only information.
- Tamil text uses `lang="ta"` attribute on Tamil-name elements.

---

*End of Document — UXD-108K-005 v1.0*

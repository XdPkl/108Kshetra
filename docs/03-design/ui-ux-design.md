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

---

## Version 1.1 — Kshetram Detail Page V2 (UXD addendum)

### 8. Detail Page V2 — Screen Specification (showcase)

The detail page is restructured into a hero band, a two-column deity gallery,
and stacked informational sections. Mobile stacks all sections vertically.

```
┌────────────────────────────────────────────────────────────────────┐
│ ← Back to all kshetrams          [📍 Distance from me]  (button)   │
│ திருவரங்கம்   (Tamil, muted)                                        │
│ Srirangam — Sri Ranganathaswamy Temple (h1)                        │
│ [Chola Nadu] [Kidandan — Reclining] [247 pasurams]                 │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ 🕉 OM 06:00 – 12:00 · 15:30 – 21:00   (timing notes ↗)       │   │
│ └──────────────────────────────────────────────────────────────┘   │
├────────────────────────────────────────────────────────────────────┤
│ PRESIDING DEITIES (h2)                                             │
│ ┌────────────────────────────┐  ┌────────────────────────────┐     │
│ │ [photo: MOOLAVAR]          │  │ [photo: THAAYAR]           │     │
│ │ Moolavar (h3)              │  │ Thaayar (h3)               │     │
│ │ நம்பெருமாள் — Ranganathan   │  │ திருவரங்கநாச்சியார் —       │     │
│ │ Kidantha (reclining)       │  │ Ranganayaki                │     │
│ └────────────────────────────┘  └────────────────────────────┘     │
│ ┌────────────────────────────┐  ┌────────────────────────────┐     │
│ │ [photo: URCHAVAR]          │  │ [photo: URCHAVAR THAAYAR]  │     │
│ │ Urchavar (h3)              │  │ Urchavar Thaayar (h3)      │     │
│ │ நம்பெருமாள் — Namperumal    │  │ (name if distinct)         │     │
│ └────────────────────────────┘  └────────────────────────────┘     │
│ photo credit line (small, muted)                                   │
├────────────────────────────────────────────────────────────────────┤
│ MANGALASASANAM PASURAM (h2)              [▶ Listen] (if available) │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ பாயும் ஒளி விளக்கும் …  (Tamil, display serif)                │   │
│ │ Transliteration (italic, muted)                               │   │
│ │ English meaning (body)                                        │   │
│ │ — Thondaradippodi Azhwar, Thiruppalliyezhuchchi 1             │   │
│ └──────────────────────────────────────────────────────────────┘   │
├────────────────────────────────────────────────────────────────────┤
│ STHALA PURANAM (h2)                                                │
│ 1–3 paragraphs of the traditional legend…                          │
├────────────────────────────────────────────────────────────────────┤
│ LOCATION (h2)                                                      │
│ Srirangam, Trichy · Tamil Nadu   [View on Google Maps ↗]           │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ NEARBY DIVYA DESAMS — within 50 km (h3)                      │   │
│ │  • Uthamar Kovil — 5 km    • Thirukkandiyur — 6 km            │   │
│ │  • Uraiyur — 7 km         • Thiruvellarai — 21 km            │   │
│ │  (each links to its detail page; nearest first)              │   │
│ └──────────────────────────────────────────────────────────────┘   │
├────────────────────────────────────────────────────────────────────┤
│ AZHWARS WHO GLORIFIED (h2): Periyazhwar · Andal · … (chips)        │
└────────────────────────────────────────────────────────────────────┘
```

### 9. V2 Interaction & Edge States

| Element | Behavior |
|---|---|
| Distance from me | Opt-in button; requests geolocation on click only; shows "You are ~X km away" (straight-line) or a permission-denied message; hidden for celestial desams |
| Nearby desams | Computed at build time from coordinates (Haversine ≤ 50 km), nearest first, links + km labels; hidden when no coordinates |
| Deity photos | `loading="lazy"`, fixed 4:3 crop, gold top-border motif; decorative SVG placeholder (shrine silhouette) when no licensed photo exists; credit line always visible when a photo is used |
| Pasuram audio | ▶ button when an audio URL exists (HTML5 audio with controls); otherwise an external link chip "Listen ↗"; absent entirely when neither exists |
| Celestial desams (2) | No timings, photos where not applicable, no location/nearby/distance — replaced by a short "beyond earthly geography" note |
| Timings | Shown as two sessions (morning/evening) + free-text notes; no computed open-now status in V2 (avoids wrong info risk) |

### 10. V2 Data Extensions (single source of truth in `src/data`)

Each kshetram record gains: `location {lat,lng}`, `timings {morning:[open,close], evening:[open,close], notes}`, `moolavar {name, tamilName, form, photo?}`, `thaayar {name, tamilName, photo?}`, `urchavar {name, tamilName, form, photo?}`, `urchavarThaayar {name}`, `pasuram {azhwarId, reference, tamil, transliteration, meaning, audio?}`, `sthalaPuranam`. All optional media carry `credit`. Integrity tests extend accordingly (US-DTL-11).

---

## Version 1.2 — Yatra Toolkit & Content Expansion (UXD addendum, Gate 2 wireframes)

Implements FR-71..87 (Release 1) and FR-90..94 (Release 2). All new UI uses the
existing tokens (§2); gold remains decorative-only; visited/trip state lives in
the visitor's browser only (FR-71).

### Revision History (addendum)

| Version | Date | Author | Description |
|---|---|---|---|
| 1.2 | 2026-08-30 | Dev Team | Wireframes for global nav refresh, progress banner, visited/trip states, Map, Trip, Detail V3, About, Azhwar detail, Acharyas index/detail; edge states |

### 11. Global Navigation — refresh (FR-79, FR-93)

Desktop (Release 1 — six items; Release 2 adds Acharyas before About):

```
┌────────────────────────────────────────────────────────────────────────────────┐
│ ◆ 108 Divya Kshetrams    Home  Browse  Map  Trip⑶  Azhwars  Kshetra Tours      │
└────────────────────────────────────────────────────────────────────────────────┘
   R1: Home · Browse · Map · Trip · Azhwars · Kshetra Tours
   R2: Home · Browse · Map · Trip · Azhwars · Acharyas · Kshetra Tours
   Trip⑶ — live trip-count badge in temple gold; shows "Trip" alone when 0
   Label is "Kshetra Tours" (route /about; page h1 "About Us — Kshetra Tours")
```

Mobile (<640px) — the 3-item scroll row no longer suffices; keep the same
pattern (no hamburger JS) with a scrollable, snap-aligned row:

```
┌───────────────────────────┐
│ ◆ 108 Divya Kshetrams     │
│ ‹ Home  Browse  Map  Trip▶│  horizontal scroll, active item underlined
└───────────────────────────┘  in saffron (unchanged), snap to start
```

### 12. Home Page — additions (FR-73, FR-86)

Hero CTA wording changes: `[ Explore the 108 Kshetrams ]  [ Azhwars ]`.
A progress banner is inserted between the stat band and Featured Kshetrams:

```
├──────────────────────────────────────────────────────────────┤
│  🙏 Your yatra — 12 of 108 kshetrams visited                  │
│  [██████████░░░░░░░░░░░░░░░░░░░░░░░░]   Reset progress        │
│   role="progressbar" (saffron fill on gold-tinted track);     │
│   Reset asks confirm() before clearing (FR-75)                │
├──────────────────────────────────────────────────────────────┤
```

### 13. Browse Page — additions (FR-72, FR-74, FR-79)

SearchFilterBar gains a fourth select; cards gain a visited badge and a trip
button **outside** the whole-card link (no nested interactive elements):

```
│ ┌────────────────────────────────────────────┐               │
│ │ Search… [__________]                       │               │
│ │ State [▾] Deity [▾] Azhwar [▾]             │               │
│ │ Visit status [ All ▾ / Visited / Not yet ] │  Clear all    │
│ └────────────────────────────────────────────┘               │
│ Showing 108 of 108 kshetrams (aria-live)                     │
│ ┌────────────────────┐  ┌────────────────────┐               │
│ │ ✓ Visited (gold    │  │               [+ Trip │)          │
│ │   badge, top-left] │  │  (outline button,  │               │
│ │  card content      │  │   top-right; whole │               │
│ │  (unchanged)       │  │   card link stays) │               │
│ └────────────────────┘  └────────────────────┘               │
```

"+ Trip" toggles to "✓ In trip" when the desam is already in the trip.

### 14. Map Page (`/map`) — FR-76..78

```
┌────────────────────────────────────────────────────────────────────┐
│ Map of the Divya Desams (h1)          [📍 Show my location] (btn)  │
│ [All] [Thondai] [Chola] [Nadu] [Pandya] [Malai] [Vada] ← region    │
│ chips (toggle; mirror marker colors)                               │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │                                                              │   │
│ │              Leaflet map · OpenStreetMap tiles               │   │
│ │              attribution visible (bottom-right)              │   │
│ │   ● region-colored marker    ◉ visited (gold ring + ✓)       │   │
│ │                                                              │   │
│ │   click marker → popup:                                      │   │
│ │   ┌────────────────────────────────┐                         │   │
│ │   │ திருவரங்கம்  Srirangam          │                         │   │
│ │   │ [Open page]  [+ Add to trip]   │                         │   │
│ │   └────────────────────────────────┘                         │   │
│ └──────────────────────────────────────────────────────────────┘   │
│ Legend (below map, wraps): ● Thondai ● Chola ● Nadu ● Pandya …     │
└────────────────────────────────────────────────────────────────────┘
```

The map chunk (Leaflet) is lazy-loaded; a "Loading map…" placeholder occupies
the frame until the chunk arrives. Celestial desams are not plotted.

### 15. Trip Page (`/trip`) — FR-80/81

```
┌────────────────────────────────────────────────────────────────────┐
│ My Yatra — Trip Planner (h1)     [🔗 Share] [🖨 Print] [Clear]      │
│ 4 stops · ~212 km in current order (straight-line)                 │
│ [ ⤓ Order my route — nearest first ]                               │
│ ┌─ CHOLA NADU ────────────────────────────────────────────────┐    │
│ │ 1. திருவரங்கம் Srirangam                        [Remove ✕]   │    │
│ │      ↓ 24 km                                                │    │
│ │ 2. Uthamar Kovil                               [Remove ✕]   │    │
│ ├─ PANDYA NADU ───────────────────────────────────────────────┤    │
│ │ 3. Azhwar Thirunagari                          [Remove ✕]   │    │
│ │      ↓ 61 km                                                │    │
│ │ 4. Srivilliputhur                              [Remove ✕]   │    │
│ └─────────────────────────────────────────────────────────────┘    │
│ Distances are straight-line (Haversine) — road distance varies.    │
└────────────────────────────────────────────────────────────────────┘
```

**Empty state:** "Your trip is empty" + guidance + `[Browse desams]` `[Open map]`.
**Shared link:** opening `/trip?t=<ids>` restores the trip with a dismissible
banner "Trip loaded from a shared link — now saved in your browser."
**Order my route:** re-orders stops nearest-neighbour from the first stop and
announces the new total distance (`aria-live`).

### 16. Kshetram Detail V3 — Shrine content template (FR-82..85; PO sample: Srirangam)

Follows the PO's sample document (Divya Desam #1 — Srirangam). Every content
block is optional: anything not yet documented renders the muted
"Not yet documented yet." line — never a blank heading. Existing V2 data is a
subset of this template, so all 108 pages render correctly today.

```
┌────────────────────────────────────────────────────────────────────┐
│ ← Back to all kshetrams                                            │
│ [DIVYA DESAM #1]  (gold serial chip)                               │
│ திருவரங்கம்   (Tamil, display serif)                                │
│ Thiruvarangam — Srirangam Sri Ranganathaswamy Temple (h1)          │
│ [Choza Naadu — Capital Shrine & Head of all 108 (Koyil)]           │
│ [Kidantha — Reclining] [247 pasurams]                              │
│ [ ✓ Mark as visited ]  [ + Add to trip ]  (toggle ↔ "✓ Visited";   │
│                                            trip ↔ "✓ In trip")     │
│ ┌ section nav (sticky chips, anchor links) ──────────────────────┐ │
│ │ Profile · Deities · Puranam · Mangalasasanam · Visit Info ·    │ │
│ │ Location · Media                                               │ │
│ └────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────┤
│ 1 · BASIC SHRINE PROFILE (h2) — definition grid                    │
│   Region           Choza Naadu                                     │
│   Location         Srirangam island, Trichy — 10.86° N, 78.69° E   │
│   Vimanam          Sriranga Vimanam (Pranavakara — Om-shaped)      │
│   Theertham        Chandra Pushkarini (+ 8 sub-theerthams)         │
│   Sthala Vriksham  Punnai tree                                     │
│   Posture          Kidantha Thirukkolam — Bhujanga Sayanam         │
│   Orientation      Facing South (towards Lanka)                    │
├────────────────────────────────────────────────────────────────────┤
│ 2 · DEITIES & CONSORTS (h2) — two-column breakdown                 │
│ ┌ MOOLAVAR ─────────────────────┐  ┌ URCHAVAR ──────────────────┐  │
│ │ [photo 1 → lightbox]          │  │ [photo 1 → lightbox]       │  │
│ │ [photo 2] [photo 3] (thumbs)  │  │ [photo 2] [photo 3]        │  │
│ │ up to 3 photos per column;    │  │                            │  │
│ │ decorative placeholder when   │  │                            │  │
│ │ none; © credits below         │  │                            │  │
│ │ Tamil / Sanskrit /            │  │ Tamil / Sanskrit /         │  │
│ │   transliteration names       │  │   transliteration names    │  │
│ │ Etymology & name origin       │  │ Etymology & name origin    │  │
│ │ Thaayar + her legend &        │  │ Urchavar Thaayar + note    │  │
│ │   attributes                  │  │                            │  │
│ └───────────────────────────────┘  └────────────────────────────┘  │
│ Sanctum iconographic structure note (full width below)             │
├────────────────────────────────────────────────────────────────────┤
│ 3 · STHALA PURANAM & HISTORY (h2)                                  │
│   Origin legend & miracles (paragraphs/bullets) · Prathyaksham     │
│   Historical timeline & epigraphy · Invasions & preservation       │
│   Cultural milestones · Literature references                      │
├────────────────────────────────────────────────────────────────────┤
│ 4 · MANGALASASANAM (h2)                                            │
│   247 pasurams · 11 Azhwars — count chips → /azhwar/:id:           │
│   [Thirumangai 73] [Thondaradippodi 55] [Kulasekhara 31] …         │
│   Representative excerpts — stacked cards, first open:             │
│   ── Thondaradippodi Azhwar — Thirumaalai 2 ──                     │
│   Tamil (display serif) · Transliteration (italic)                 │
│   WORD-BY-WORD MEANING (two-column definition list)                │
│   ✦ Theological significance (tinted note)      [▶ Listen]         │
├────────────────────────────────────────────────────────────────────┤
│ 5 · VISIT INFO (h2)                                                │
│   Timings (as §8) · Festivals & Utsavams · How to Reach ·          │
│   Stay & Darshan Tips · References                                 │
│   (any item not documented → muted "Not yet documented yet.")      │
├────────────────────────────────────────────────────────────────────┤
│ 6 · LOCATION (h2)                                                  │
│ Srirangam, Trichy · Tamil Nadu   [View on Google Maps ↗]           │
│ ┌ mini-map (lazy Leaflet): temple marker + my-distance chip ────┐  │
│ │        [📍 Distance from me] → "You are ~X km away"            │  │
│ └────────────────────────────────────────────────────────────────┘  │
│ NEARBY DIVYA DESAMS (≤50 km list, as §8)                           │
├────────────────────────────────────────────────────────────────────┤
│ 7 · VISUALS & MEDIA (h2)                                           │
│   Visual markers: 236-ft Rajagopuram · Moolavar form · Thaayar …   │
│   Recommended listening: video-search chips (open YouTube search)  │
│   Literature & digital text links                                  │
├────────────────────────────────────────────────────────────────────┤
│ AZHWARS WHO GLORIFIED (chips → /azhwar/:id in R2)                  │
└────────────────────────────────────────────────────────────────────┘
```

Celestial desams hide: visited toggle, trip control, mini-map, timings,
nearby, distance — exactly the §9 rule.

### 17. About Us — Kshetra Tours (`/about`) — FR-87

```
┌────────────────────────────────────────────────────────────────────┐
│ About Us — Kshetra Tours (h1)                                      │
│ About this site (h2)     mission paragraphs                        │
│ Kshetra Tours (h2)       what we offer: guided yatra highlights,   │
│                          how to join, best seasons (bullets)       │
│ [ Contact us ]           primary button → contact section          │
│ Contact (h2)             email · phone · social (as provided)      │
│ All content from src/data/about.js — placeholders marked "[To be    │
│ provided]" until the PO supplies final copy.                       │
└────────────────────────────────────────────────────────────────────┘
```

### 18. Azhwar Detail (`/azhwar/:id`) — FR-90 (Release 2; PO sample: Poigai Azhwar)

```
┌────────────────────────────────────────────────────────────────────┐
│ ← All Azhwars                  [1 of 12 — first of the Mudhal]     │
│ பொய்கையாழ்வார்   Poigai Azhwar (h1)                                  │
│ [Aippasi · Thiruvonam star · Navami tithi] [100 pasurams]          │
│ [N desams glorified]                                               │
│ [photo 1] [photo 2]  ← up to 2 photos (lightbox); decorative       │
│                        placeholder until supplied; © credits       │
│ IDENTIFICATION (h2) — definition grid                              │
│   Names & aliases   Poigai Azhwar · Sarovara Yogi · Kasara Yogi ·  │
│                       Ayonisambhava                                │
│   Birthplace        Thiruvekka → /kshetram/thiruvekka (pond of the ││
│                       Yathothakari temple complex)                 │
│   Divine amsam      Panchajanya — the Lord's conch                 │
│   Era               traditional ~4200 BCE · academic 5th–6th c. CE │
│                       · contemporary Pallava rulers                │
├────────────────────────────────────────────────────────────────────┤
│ LIFE HISTORY & MIRACLES (h2) — narrative paragraphs                │
│   (the Thirukoilur shelter episode and the lamp of the first       │
│    Thiruvandhadhi…)                                                │
├────────────────────────────────────────────────────────────────────┤
│ CONTRIBUTIONS (h2)                                                 │
│   Works: Mudhal Thiruvanthathi (100 pasurams)                      │
│   Role & bhakti bhava: Jnana-Bhakti — illumination through wisdom  │
│   Associated Divya Desams: [Thiruvekka] [Thirukoilur] → chips      │
│   Desams glorified (derived): chip grid → /kshetram/:id            │
│   [Browse all N desams →] (prefiltered /kshetrams?azhwar=)         │
├────────────────────────────────────────────────────────────────────┤
│ REPRESENTATIVE VERSE (h2)                                          │
│   Tamil (display serif) · Transliteration (italic)                 │
│   WORD-BY-WORD MEANING (definition list)                           │
│   ✦ Theological significance (tinted note)      [▶ Listen]         │
├────────────────────────────────────────────────────────────────────┤
│ VISUAL & MEDIA (h2)                                                │
│   Iconography: seated in Anjali Mudra, Thiruman Kaappu…            │
│   Listening: upanyasam video-search chips (open YouTube search)    │
│   Digital texts: Project Madurai links                             │
├────────────────────────────────────────────────────────────────────┤
│ ‹ Previous: (—)   |   Next: Bhoothathazhwar ›   (chronological)    │
└────────────────────────────────────────────────────────────────────┘
```

The §4.4 Azhwars page becomes an index: each card links to `/azhwar/:id`
(chips keep their direct kshetram links).

### 19. Acharyas (`/acharyas`, `/acharya/:id`) — FR-92..94 (Release 2; PO sample: Sri Manavala Mamunigal)

Index — cards grouped by parampara era, in parampara order:

```
┌────────────────────────────────────────────────────────────────────┐
│ The Acharyas (h1) — the guru parampara intro paragraph             │
│ ERA / PARAMPARA GROUP (h2)                                         │
│ ┌──────────────────────────────────────────────────────────────┐   │
│ │ ஶ்ரீ மணவாள மாமுனிகள்  Sri Manavala Mamunigal   [1370–1443 CE]   │   │
│ │ Titles line · one-line role → /acharya/:id                   │   │
│ └──────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────┘
```

Detail — the same saint template as §18, plus Guru & Sishyas and Sources:

```
┌────────────────────────────────────────────────────────────────────┐
│ ← All Acharyas                                                     │
│ ஶ்ரீ மணவாள மாமுனிகள்   Sri Manavala Mamunigal (h1)                    │
│ [Aippasi · Thirumoolam star] [1370–1443 CE — Vijayanagara era]     │
│ [19 works]                                                         │
│ [photo 1] [photo 2]  ← up to 2 photos (lightbox); decorative       │
│                        placeholder until supplied; © credits       │
│ IDENTIFICATION (h2) — names & titles (Yatheendra Pravana…) ·       │
│   birthplace Alwarthirunagari → /kshetram link ·                   │
│   divine amsam: Adisesha, re-incarnation of Ramanuja → /acharya/… ·│
│   era & kings                                                      │
│ LIFE HISTORY & MIRACLES (h2) — narrative (Srirangam renovation;    │
│   the Thanian revealed by Lord Ranganatha as a young boy…)         │
│ CONTRIBUTIONS (h2) — works list (Upadesa Rathinamalai…) ·          │
│   philosophical theme · Associated Divya Desams chips → kshetrams  │
│ REPRESENTATIVE VERSE (h2) — Thanian text · transliteration ·       │
│   meaning & significance · [▶ Listen]                              │
│ GURU & SISHYAS (h2) — links → /acharya/:id                         │
│ VISUALS & MEDIA (h2) — iconography (Anjali Mudra under Adisesha) · │
│   video-search chips · digital text links                          │
│ SOURCES (h2) — reference list                                      │
│ Any unsupplied block renders "[Content pending — to be provided]"  │
└────────────────────────────────────────────────────────────────────┘
```

### 20. V3 Interaction & Edge States

| Element | Behavior |
|---|---|
| Visited toggle | `aria-pressed`; persists instantly (FR-71); badges, progress banner, map markers and filters update reactively everywhere |
| Trip controls | "+ Trip"/"✓ In trip" toggle on detail, map popup, card; duplicates prevented; nav count updates live |
| Order my route | Nearest-neighbour from the first stop; total straight-line distance announced before/after (`aria-live`) |
| Share trip | `/trip?t=<ids>` URL + clipboard fallback + confirmation; opening a share URL restores and saves the trip locally |
| My location (map) | Opt-in only; denial/unsupported → graceful message; position cleared on page leave |
| Region chips | Toggle filters markers; legend and chips share the same region colors |
| Mini-map & map page | Lazy chunks; "Loading map…" placeholder; OSM attribution always visible |
| Lightbox | `dialog` semantics, focus trap, Esc closes, ‹ › navigate, alt text + credit always rendered |
| New detail sections | Per-item "Not yet documented yet." muted line when data absent — never a blank heading (FR-83) |
| Pending content (R2) | Acharya/Azhwar placeholders render "[Content pending — to be provided]" visibly, marked with `data-pending` for future find-and-fill |
| Print | Detail V3 and Trip print stylesheets hide nav/footer/buttons, expand all sections, include credits/references |
| localStorage disabled | Visited/trip features degrade to session-only with a one-time notice; no errors |
| Template depth | Shrine/saint blocks render independently; absent data shows "Not yet documented yet." (kshetram) or "[Content pending — to be provided]" (saints) — never a blank heading |
| Mangalasasanam excerpts | Stacked cards, first expanded; word-by-word meanings as a definition list; per-Azhwar count chips link to `/azhwar/:id` |
| Serial chip | "DIVYA DESAM #N" gold chip derives from the serial field; hidden when absent |
| Deity photo strips | Up to 3 photos per column (Moolavar / Urchavar); thumbnails open the lightbox; zero photos → decorative shrine placeholder; © credits always rendered |
| Saint photos | Up to 2 photos on Azhwar and Acharya pages; same lightbox and placeholder rules |
| Video-search chips | Open a YouTube search for the quoted query in a new tab (`rel="noopener noreferrer"`) — no embedded autoplay |

### 21. V3 Data Extensions (PO sample templates)

- **UI state (not datasets):** `visited` and `trip` live in localStorage only (FR-71) — versioned keys, no server sync.
- **Kshetram enrichment — shrine template (all optional; backward-compatible with the §10 V2 fields):**
  - `serial: number`
  - `profile: {vimanam, theertham, sthalaVriksham, posture, orientation}`
  - `deities: {moolavar|urchavar: {names: {tamil, sanskrit, translit}, etymology?, thaayar?: {name, legend?}, photos?: [{src?|wiki?, credit?, alt?}] (max 3)}, sanctumNote?}` — legacy single `photo` still supported
  - `puranam: {legend: [], prathyaksham?, timeline?, invasions?, milestones?, literature?}` — legacy `puranam` string still supported
  - `mangalasasanam: {perAzhwar: [{azhwarId, count}], excerpts: [{azhwarId, work, verse?, tamil, transliteration, wordMeanings: [[word, meaning]], significance?, audio?}]}` — legacy single `pasuram` still supported
  - `festivals: [{name, month}]`, `access: {town?, rail?, airport?, road?}`, `tips: []`, `references: []`
  - `visuals: {descriptions: [], literature: [], videoSearches: []}`
- **Azhwar dataset (saint template, R2):** `order`, `epithets[]`, `birthMonth`, `birthStar`, `tithi?`, `birthplace?` (kshetram id), `amsam?`, `era: {display, traditional?, academic?, contemporaries?}`, `lifeHistory: []`, `works: [{name, pasurams}]`, `bhaktiBhava?`, `photos: [{src, credit?, alt?}] (up to 2)`, `verse: {work?, tamil, transliteration, wordMeanings: [], significance?}`, `visuals: {iconography?, videoSearches: [], digitalTexts: []}`. Desams glorified remain derived from `Kshetram.azhwars`.
- **Acharya dataset (saint template, R2):** the Azhwar saint schema plus `guru?` (acharya id), `sishyas: []` (acharya ids), `philosophicalTheme?`, `sources: []`.
- **New datasets:** `src/data/about.js` (About / Kshetra Tours / contact copy) — extending content requires data changes only (NFR-05).
- **Integrity:** tests validate shape and cross-references wherever fields are present; absence is valid and renders the documented fallback notes.

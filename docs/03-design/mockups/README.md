# Design Mockups — 108 Divya Kshetrams (v2 proposal)

Static HTML mockups (Tailwind CDN) for all 10 site pages, in the site's current
identity (Cormorant Garamond + Mukta Malar, saffron/temple-gold on warm ivory)
restructured with the layout patterns from the Product Owner's reference files:
eyebrow labels, ruled section cards, definition-card grids, numbered feature
items, timeline rails, chip rows, progress trackers, serial badges
("DD #72"), YouTube-style listening cards, and interactive scroll-spy
section navs.

## View

Open any file directly in a browser, or serve the folder:

```
cd docs/03-design/mockups
python -m http.server 8080
# http://localhost:8080/home.html
```

Pages cross-link to each other (header nav + in-page links), so the set works
as a clickable prototype. Each mock is interactive: live search/region filters
(explore), scroll-spy section navs (detail pages), region-chip counting (map),
view toggle (trip), copy-to-clipboard contacts (about), animated progress
(home). Map tiles and Wikipedia thumbnails load from the network.

## Pages

| File | Site route |
|---|---|
| home.html | `/` |
| explore.html | `/kshetrams` |
| kshetram-detail.html | `/kshetram/srirangam` |
| azhwars.html | `/azhwars` |
| azhwar-detail.html | `/azhwar/poigai` |
| acharyas.html | `/acharyas` |
| acharya-detail.html | `/acharya/manavala-mamunigal` |
| map.html | `/map` |
| trip.html | `/trip` |
| about.html | `/about` |

`_skeleton.html` + `_gen_indexes.py` are build helpers (shared header/footer +
the two index-page generators); `assets/saint-poigai.jpg` is the PO-supplied
painting used on the Azhwar detail mock. These are design artifacts only —
they are not part of the app build.

## Status

Approved by the Product Owner (2026-09-10). The React app has been re-skinned to
match — the v2 design language rollout (UXD §28) plus the mock-parity additions
(UXD §28.1: Browse header yatra tracker + sort control, saint Life History 7/5
split with the Chronological Lifeline rail, section eyebrows, trip print-ready
note). These mocks are retained as the design-of-record reference for the
implemented site.

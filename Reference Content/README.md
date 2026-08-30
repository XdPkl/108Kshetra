# Reference Content — Azhwars & Acharyas Dossiers

Product Owner–supplied source content for the saint pages (Azhwar detail, Acharya detail).
These files are the authoritative reference for populating `app/src/data/azhwar-details.js`
and `app/src/data/acharyas.js`. They are **not** deployed — GitHub Pages serves only `app/dist`.

## Files

| File | Batch | Personalities covered |
|---|---|---|
| `ALWAR B1.pdf` (+ `.docx` companion) | 1 — Early Azhwars | Poigai, Bhoothath, Pey, Thirumazhisai |
| `Alwar B2.pdf` | 2 — Core Azhwars | Nammazhwar, Madhurakavi, Kulasekhara |
| `Alwar B3.pdf` | 3 — Later Azhwars | Periyazhwar, Andal, Thondaradippodi, Thiruppaan, Thirumangai |
| `Alwar B4.pdf` | 4 — Foundational Lineage | Nathamuni, Uyyakondar, Manakkal Nambi, Yamunacharya, Periya Nambi, Thirukachi Nambigal |
| `Alwar B5.pdf` | 5 — Ramanuja Era | Ramanuja, Koorathazhwan, Mudaliyandan, Embar |
| `Alwar B6.pdf` | 6 — Post-Ramanuja & Preceptors | Ananthazhwan, Vaduga Nambi, Nanjiyyar, Nampillai, Periyavachan Pillai, Vadakku Thiruveedhi Pillai |
| `Alwar B7.pdf` | 7 — Philosophers & Scholars | Pillai Lokacharya, Vedanta Desika, Manavala Mamunigal, Parasara Bhattar, P.B. Anna, Vangipuram Nambi, Engalazhwan |

Totals: **35 personalities — 12 Azhwars + 23 Acharyas.** The `ALWAR B1.docx` is kept only because
it is the sole source from which the Tamil verse script is recoverable (see caveats).

## Per-saint section template used in the dossiers

1. **Identification & Incarnation Details** — Full Name & Titles; Incarnation Metadata (Tamil Month, Birth Star, Tithi & Paksham); Geographic Origins (Historic Birthplace Name, Current District & State, Associated Divya Desam/Temple); Divine Lineage & Era (Divine Amsam, Historical Period, Sovereign & Scholarly Contemporaries).
2. **Complete Life History & Miracles** — 2.1 Chronological Life Timeline (~8 events); 2.2 Deep Biographical Narrative (Early Years & Spiritual Awakening, Core Seva/Kainkaryam, Miracles & Historical Events, Guru-Disciple Dynamics, Attainment of Paramapadam); Sthala Puranam & Legend Highlight.
3. **Literary, Preservation & Philosophical Contributions** — Complete List of Works (Tamil/Sanskrit, pasuram counts), Quantified Output, Associated Divya Desams (Mangalasasanam), Sampradaya Defense & Preservation, Predominant Bhakti Bhava & Philosophical Core.
4. **Representative Verses & Theological Breakdown** — one verse per saint (Original Script, Roman Transliteration, Literal Word-by-Word Meaning) + Exhaustive Theological & Philosophical Commentary (1. Esoteric Meaning/Swaroopa Jnanam, 2. Visishtadvaita Alignment, 3. Commentarial Insights).
5. **Visuals & Archival Resources** — 5.1 Iconography & Shrine Visual Description (Posture/Asana, Mudras, Garments, Avathara Sthalam Idol); 5.2 Academic Audio/Video Lecture Queries; 5.3 Digital Text & Archival Links (dravidaveda.org, projectmadurai.org, koyil.org — identical for all entries).

## Known extraction caveats (for bulk population)

- **Tamil script is lost in the PDF text layer** for all batches; **Devanagari (Sanskrit verses) is missing everywhere**. Only `ALWAR B1.docx` retains real Tamil text (~488 chars — the 4 Azhwar verses of batch 1). For batches 2–7 the pages will carry transliteration + word meanings, with the original-script slot pending until re-exported source text is supplied.
- The same three archival links repeat for every saint; there are no per-saint reference lists.
- Minor mid-word line-break artifacts in PDF table cells (e.g. "Thirukadalmall ai") need cleanup during migration.
- Section 5.2 content is literal search-engine query strings (naming Velukkudi Krishnan, Karunakarachariar, Ananthapadmanabhachariar), not URLs — they map to the site's `visuals.videoSearches` chips.

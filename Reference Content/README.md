# Reference Content — Azhwars & Acharyas Dossiers

Product Owner–supplied source content for the saint pages (Azhwar detail, Acharya detail).
These files are the authoritative reference for populating `app/src/data/azhwar-details.js`
and `app/src/data/acharyas.js`. They are **not** deployed — GitHub Pages serves only `app/dist`.

## Files

| File | Batch | Personalities covered |
|---|---|---|
| `ALWAR B1.pdf` (+ `.docx` companion) | 1 — Early Azhwars | Poigai, Bhoothath, Pey, Thirumazhisai |
| `Alwar B2.pdf` — **no DOCX companion** | 2 — Core Azhwars | Nammazhwar, Madhurakavi, Kulasekhara |
| `Alwar B3.pdf` (+ `.docx` companion) | 3 — Later Azhwars | Periyazhwar, Andal, Thondaradippodi, Thiruppaan, Thirumangai |
| `Alwar B4.pdf` (+ `.docx` companion) | 4 — Foundational Lineage | Nathamuni, Uyyakondar, Manakkal Nambi, Yamunacharya, Periya Nambi, Thirukachi Nambigal |
| `Alwar B5.pdf` (+ `.docx` companion) | 5 — Ramanuja Era | Ramanuja, Koorathazhwan, Mudaliyandan, Embar |
| `Alwar B6.pdf` (+ `.docx` companion) | 6 — Post-Ramanuja & Preceptors | Ananthazhwan, Vaduga Nambi, Nanjiyyar, Nampillai, Periyavachan Pillai, Vadakku Thiruveedhi Pillai |
| `Alwar B7.pdf` (+ `.docx` companion) | 7 — Philosophers & Scholars | Pillai Lokacharya, Vedanta Desika, Manavala Mamunigal, Parasara Bhattar, P.B. Anna, Vangipuram Nambi, Engalazhwan |

Totals: **35 personalities — 12 Azhwars + 23 Acharyas.** The DOCX companions are the authoritative
extraction source (clean text flow + verse original script); the PDFs carry the same content with
extraction artifacts and a blank verse-script text layer.

**Population status (2026-08-30):** all 35 personalities are populated on the site. Verse original
script recovered for **32 of 35** — Nammazhwar, Madhurakavi and Kulasekhara (batch 2) await the
missing `Alwar B2.docx`; their verse blocks show transliteration with an explicit original-script
pending marker. Per the PO's correction, Poigai Azhwar's amsam is **Panchajanya** (the dossier's
"Kaumodaki" stands corrected).

## Per-saint section template used in the dossiers

1. **Identification & Incarnation Details** — Full Name & Titles; Incarnation Metadata (Tamil Month, Birth Star, Tithi & Paksham); Geographic Origins (Historic Birthplace Name, Current District & State, Associated Divya Desam/Temple); Divine Lineage & Era (Divine Amsam, Historical Period, Sovereign & Scholarly Contemporaries).
2. **Complete Life History & Miracles** — 2.1 Chronological Life Timeline (~8 events); 2.2 Deep Biographical Narrative (Early Years & Spiritual Awakening, Core Seva/Kainkaryam, Miracles & Historical Events, Guru-Disciple Dynamics, Attainment of Paramapadam); Sthala Puranam & Legend Highlight.
3. **Literary, Preservation & Philosophical Contributions** — Complete List of Works (Tamil/Sanskrit, pasuram counts), Quantified Output, Associated Divya Desams (Mangalasasanam), Sampradaya Defense & Preservation, Predominant Bhakti Bhava & Philosophical Core.
4. **Representative Verses & Theological Breakdown** — one verse per saint (Original Script, Roman Transliteration, Literal Word-by-Word Meaning) + Exhaustive Theological & Philosophical Commentary (1. Esoteric Meaning/Swaroopa Jnanam, 2. Visishtadvaita Alignment, 3. Commentarial Insights).
5. **Visuals & Archival Resources** — 5.1 Iconography & Shrine Visual Description (Posture/Asana, Mudras, Garments, Avathara Sthalam Idol); 5.2 Academic Audio/Video Lecture Queries; 5.3 Digital Text & Archival Links (dravidaveda.org, projectmadurai.org, koyil.org — identical for all entries).

## Known extraction caveats

- **Verse original script:** the PDF text layer lost the Tamil script for every batch, and Devanagari is absent throughout (Sanskrit verses are given in Tamil script with visarga marks). The DOCX companions retain the script; only batch 2's DOCX is missing, so its three saints show an original-script pending marker on the site.
- The same three archival links repeat for every saint; there are no per-saint reference lists.
- The PDFs contain mid-word line-break artifacts in table cells (e.g. "Thirukadalmall ai"); the DOCX companions were used as the primary extraction source precisely to avoid these.
- Section 5.2 content is literal search-engine query strings (naming Velukkudi Krishnan, Karunakarachariar, Ananthapadmanabhachariar) — they populate the site's `visuals.videoSearches` chips.

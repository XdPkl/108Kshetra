# Reference Content — Azhwars, Acharyas & Divya Desams Dossiers

Product Owner–supplied source content for the saint pages (Azhwar detail, Acharya detail) and the
Divya Desam shrine pages. These files are the authoritative reference for populating
`app/src/data/azhwar-details.js`, `app/src/data/acharyas.js` and the kshetram shrine templates
(`app/src/data/enrichment/`). They are **not** deployed — GitHub Pages serves only `app/dist`.

## Divya Desam dossiers (23 files, serials #1–#108 — complete, no gaps)

| Files | Desams | Notes |
|---|---|---|
| `DivyaDesams-1-5.docx` | #1–#5 | Format A (ALL-CAPS headings); Devanagari present |
| `Divya Desam 6 - 10.docx` … `Divya Desams 82 - 85.docx` | #6–#85 | Format B (title-case headings); some profile fields merged onto one line (e.g. "Sanctum Tower & Water Body") |
| `Divya Desams 86 - 90.docx` | #86–#90 | Contains 6 embedded PNG photographs (~10MB) |
| `Divya Desams 91 - 95.docx` … `Divya Desams 107 - 108.docx` | #91–#108 | Format B; no Devanagari in #86–#108 (Sanskrit names in transliteration only) |

Uniform per-desam section template:

1. **Basic Shrine Profile** — Serial Number, Shrine Name, Traditional Region, Geographic Location, Vimanam, Theertham, Sthala Vriksham, Posture & Orientation.
2. **Deities & Consorts Breakdown** — Moolavar/Urchavar (Tamil + Sanskrit + transliteration), Etymology, Moolavar/Urchavar Thaayars with legends, Garbhagriha setup.
3. **Complete Sthala Puranam, Miracles & Historic Milestones** — Origin legend, Prathyaksham, Historical Timeline & Epigraphy, Invasions & Preservation, Cultural Milestones, Literature References.
4. **Pasuram Details & Azhwar Mangalasasanam** — Total pasurams, per-Azhwar counts, Representative Pasuram Excerpts (Tamil script + English Transliteration + Word-by-Word Meaning + Theological Significance).
5. **Visuals & Media References** — Visual References (Rajagopuram/Moolavar form/Thaayar form/Urchavar form), Literature references, Recommended YouTube search queries.

The serial numbering matches the site's regional grouping (verified: #1 Srirangam, #2 Uraiyur,
#3 Uthamar Koil, #4 Koviladi, #5 Thiruvellarai …).

**Population status (2026-08-30):** dossier content is populated for **93 of the 108 site
kshetrams** via `app/src/data/enrichment/dossiers.js` (deduplicated: dossier serials #37/#38,
#72/#93, #78/#89, #85/#95, #103/#104 describe the same temple twice — the richer entry is used).
- Skipped dossier serials (no corresponding site kshetram or unresolved circuit entries): **#40, #54, #57, #58, #87 (Thirukachoor is not a Divya Desam), #90, #94, #106**.
- Site kshetrams with no usable dossier entry (keep their V2 enrichment): **Thiruvekka, Uppiliappan, Thiruvazhundur, Kandiyur, Thirumogur, Thirukkulandai, Thiruppuliangudi, Thiruneermalai, Thiruputkuzhi, Thirunindravur, Thiruvidanthai, Sholinghur, Ayodhya, Naimisaranyam** — candidate follow-ups for the PO.
- Three photographs embedded in `Divya Desams 86 - 90.docx` were extracted to `app/public/photos/` (desams #86, #88, #89; #87/#90 dropped with their serials).

## Azhwar & Acharya dossiers (7 batches, 35 personalities)

| File | Batch | Personalities covered |
|---|---|---|
| `ALWAR B1.pdf` (+ `.docx` companion) | 1 — Early Azhwars | Poigai, Bhoothath, Pey, Thirumazhisai |
| `Alwar B2.pdf` (+ `.docx` companion) | 2 — Core Azhwars | Nammazhwar, Madhurakavi, Kulasekhara |
| `Alwar B3.pdf` (+ `.docx` companion) | 3 — Later Azhwars | Periyazhwar, Andal, Thondaradippodi, Thiruppaan, Thirumangai |
| `Alwar B4.pdf` (+ `.docx` companion) | 4 — Foundational Lineage | Nathamuni, Uyyakondar, Manakkal Nambi, Yamunacharya, Periya Nambi, Thirukachi Nambigal |
| `Alwar B5.pdf` (+ `.docx` companion) | 5 — Ramanuja Era | Ramanuja, Koorathazhwan, Mudaliyandan, Embar |
| `Alwar B6.pdf` (+ `.docx` companion) | 6 — Post-Ramanuja & Preceptors | Ananthazhwan, Vaduga Nambi, Nanjiyyar, Nampillai, Periyavachan Pillai, Vadakku Thiruveedhi Pillai |
| `Alwar B7.pdf` (+ `.docx` companion) | 7 — Philosophers & Scholars | Pillai Lokacharya, Vedanta Desika, Manavala Mamunigal, Parasara Bhattar, P.B. Anna, Vangipuram Nambi, Engalazhwan |

Totals: **35 personalities — 12 Azhwars + 23 Acharyas.** The DOCX companions are the authoritative
extraction source (clean text flow + verse original script); the PDFs carry the same content with
extraction artifacts and a blank verse-script text layer.

**Population status (2026-08-30):** all 35 personalities are populated on the site, and the verse
original script is present for **35 of 35** — the batch-2 DOCX (`Alwar B2.docx`, uploaded the same
day) completed the set. Per the PO's correction, Poigai Azhwar's amsam is **Panchajanya** (the
dossier's "Kaumodaki" stands corrected).

## Per-saint section template used in the dossiers

1. **Identification & Incarnation Details** — Full Name & Titles; Incarnation Metadata (Tamil Month, Birth Star, Tithi & Paksham); Geographic Origins (Historic Birthplace Name, Current District & State, Associated Divya Desam/Temple); Divine Lineage & Era (Divine Amsam, Historical Period, Sovereign & Scholarly Contemporaries).
2. **Complete Life History & Miracles** — 2.1 Chronological Life Timeline (~8 events); 2.2 Deep Biographical Narrative (Early Years & Spiritual Awakening, Core Seva/Kainkaryam, Miracles & Historical Events, Guru-Disciple Dynamics, Attainment of Paramapadam); Sthala Puranam & Legend Highlight.
3. **Literary, Preservation & Philosophical Contributions** — Complete List of Works (Tamil/Sanskrit, pasuram counts), Quantified Output, Associated Divya Desams (Mangalasasanam), Sampradaya Defense & Preservation, Predominant Bhakti Bhava & Philosophical Core.
4. **Representative Verses & Theological Breakdown** — one verse per saint (Original Script, Roman Transliteration, Literal Word-by-Word Meaning) + Exhaustive Theological & Philosophical Commentary (1. Esoteric Meaning/Swaroopa Jnanam, 2. Visishtadvaita Alignment, 3. Commentarial Insights).
5. **Visuals & Archival Resources** — 5.1 Iconography & Shrine Visual Description (Posture/Asana, Mudras, Garments, Avathara Sthalam Idol); 5.2 Academic Audio/Video Lecture Queries; 5.3 Digital Text & Archival Links (dravidaveda.org, projectmadurai.org, koyil.org — identical for all entries).

## Known extraction caveats

- **Verse original script:** the PDF text layer lost the Tamil script for every batch, and Devanagari is absent throughout (Sanskrit verses are given in Tamil script with visarga marks). The DOCX companions retain the script for all seven batches.
- The same three archival links repeat for every saint; there are no per-saint reference lists.
- The PDFs contain mid-word line-break artifacts in table cells (e.g. "Thirukadalmall ai"); the DOCX companions were used as the primary extraction source precisely to avoid these.
- Section 5.2 content is literal search-engine query strings (naming Velukkudi Krishnan, Karunakarachariar, Ananthapadmanabhachariar) — they populate the site's `visuals.videoSearches` chips.

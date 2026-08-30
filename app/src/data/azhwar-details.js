/**
 * Azhwar details — saint-template enrichment (US-AZW-03, FR-91) merged onto
 * the base records by the data layer. Every field is optional: pages render
 * what exists and show the documented fallback where absent.
 *
 * Populated from the Product Owner's dossier batches 1-3 (Reference Content/),
 * per the PO's 2026-08-30 corrections: Poigai Azhwar's amsam is Panchajanya
 * (dossier's Kaumodaki stands corrected). Verse original-script text comes
 * from the DOCX companions; batch-2 saints await the DOCX (script pending).
 *
 * Shape (all optional):
 *  order, epithets[], birthMonth, birthStar, tithi?,
 *  birthplace {name, district?, kshetramId?}, amsam?,
 *  era {academic?, contemporaries?} (base `period` remains the display era),
 *  timeline? [{when?, event}],
 *  lifeHistory (string | {heading, paragraphs[]}) [],
 *  legend? {title?, text}, works [{name, pasurams?, language?}],
 *  preservation?, bhaktiBhava?, associatedDesams [kshetramId],
 *  verse {work?, tamil?, transliteration, meaning?, wordMeanings?, significance?,
 *         commentary? [{heading, text}], audio?},
 *  visuals {iconography? (string | {posture, mudras, garments, idol}),
 *           videoSearches [], digitalTexts []},
 *  sources? []
 */
export const AZHWAR_DETAILS = {
  poigai: {
    order: 1,
    epithets: ["Sarovara Yogi", "Kasara Yogi", "Ayonisambhava", "Sarovara Muni", "Poigaiyar"],
    birthMonth: "Aippasi (Ashvin/Kartika transition)",
    birthStar: "Thiruvonam (Sravanam)",
    tithi: "Sukla Paksha Navami",
    birthplace: {
      name: "Thiruvekka (Kanchipuram) — born in a golden lotus in the temple pond of Sri Yathothakari Perumal",
      district: "Kanchipuram District, Tamil Nadu",
      kshetramId: "thiruvekka"
    },
    amsam: "Lord Vishnu’s holy conch, Panchajanya",
    era: {
      academic: "5th–6th century CE",
      contemporaries: "Bhoothath Azhwar, Pey Azhwar and the Pallava rulers of Kanchi"
    },
    timeline: [
      {
        when: "Birth",
        event: "Ayoni Sambhava — discovered inside a fresh golden lotus in the temple tank (Sardhotha Poigai) of Tiruvekka, Kanchipuram"
      },
      {
        when: "Realisation",
        event: "Natural enlightenment (Ayathna Jnana) free from embryonic contamination; direct contemplation of Para Vasudeva"
      },
      {
        when: "The divine encounter",
        event: "Meeting Bhoothath and Pey Azhwar in the dark corridor (Dehali) of Thirukoilur during a torrential storm"
      },
      {
        when: "Composition",
        event: "Lighting the Jnana Deepam — the lamp of knowledge — through the first verse of the Mudhal Thiruvanthadhi"
      },
      {
        when: "Wanderings & mukthi",
        event: "Travelling the Divya Desams of North and South India spreading Visishtadvaita precursor tenets, before merging into the divine radiance of the Lord"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Unlike ordinary mortals subject to Garbha Vasam (confinement in a womb), Poigai Azhwar was an Ayoni Sambhava — one not born of a womb. He manifested spontaneously on a divine golden lotus blossoming in the pond adjacent to the Tiruvekka Yathothkari Perumal Temple in Kanchipuram.",
          "Blessed with Ayathna Jnana (effortless divine knowledge) from the instant of his manifestation, he required no earthly guru to instruct him in the Vedas, Upanishads or Agamas. He spent his early years immersed in intense yogic trance (samadhi) along the banks of the sacred water bodies of Kanchipuram."
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "His primary kainkaryam was mental and vocal (Manasa and Vachika) — weaving garlands of Tamil verse (Thamizh Maalai) to elucidate the esoteric truths of the Sanskrit Vedas. He traversed the length and breadth of Tamilakam, visiting holy shrines without establishing permanent residence, living as an ascetic completely detached from secular affairs."
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The central event in the life of Poigai Azhwar — and the foundational moment of the Azhwar prabandha tradition — is the divine encounter at Thirukkovilur (Thirukkovilur Dehali Anubhavam). Seeking shelter from a fierce, thunderous storm, Poigai Azhwar entered the narrow front corridor (Dehali) of a small residence in Thirukkovilur. The space was barely large enough for one person to lie down. Shortly thereafter Bhoothath Azhwar arrived seeking refuge; Poigai welcomed him, remarking, \"One person can lie down; two can sit.\" Moments later Pey Azhwar arrived, and they adjusted once more — \"Two can sit; three can stand.\"",
          "As the three saints stood together in pitch darkness, an overwhelming, invisible fourth presence pressed tightly against them. Recognising the supernatural weight and divine fragrance, Poigai Azhwar realised that Sriman Narayana himself had entered the corridor to enjoy the company of his highest devotees. To reveal this unseen guest, Poigai Azhwar lit the material universe as a lamp using the power of verse."
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Poigai Azhwar recognised Sriman Narayana as his sole ultimate Acharya (Narayana Parabrahma). He functioned as an early guru-figure to Thirumazhisai Azhwar, who was deeply influenced by the three Mudhal Azhwars during his spiritual transition from various philosophical systems back to Vaishnavism."
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Having fulfilled his divine mission of initiating the Dravida Veda era, Poigai Azhwar absorbed his physical form into the supreme light (Param Jyothi) of Sriman Narayana, concluding his earthly manifestation alongside Bhoothath and Pey Azhwar."
        ]
      }
    ],
    legend: {
      title: "Sthala Puranam & Legend Highlight — the miraculous Dehali of Thirukoilur",
      text: "The narrow corridor (Dehali) of Thirukoilur remains the spiritual birthplace of Sri Vaishnava devotional literature. When Sriman Narayana pressed against the three Mudhal Azhwars in total darkness, it was not out of constraint but Saulabhya (divine accessibility) — the Supreme Lord seeking closeness with his devotees. The lighting of the lamp of wisdom by Poigai Azhwar transformed the dark room into an illumination of the entire cosmos."
    },
    works: [
      {
        name: "Mudhal Thiruvanthathi",
        pasurams: 100,
        language: "Tamil (Iyalpa / Nerisai Venba meter)"
      }
    ],
    preservation: "Pioneered the Dravida Veda tradition by proving that high philosophical truths (Vedanta) can be fully articulated in the vernacular Tamil language. He set the precedent for using poetic meter as a tool for contemplative bhakti-yoga; his verses served as a primary foundation for later commentators such as Periyavachan Pillai and Nampillai.",
    bhaktiBhava: "Jnana-Garbha Bhakti — devotion rooted in profound intellectual and cosmological awareness. His philosophy highlights Karanatvam (Sriman Narayana as the cosmic Cause) and Saulabhya (his supreme accessibility).",
    associatedDesams: ["thiruvekka", "thirukkovilur", "tirupati"],
    verse: {
      work: "Mudhal Thiruvanthathi 1",
      tamil: "வையந் தகளியா வார்கடலே நெய்யாக\nவெய்ய கதிரோன் விளக்காக - செய்ய\nசுடராழியான் அடிக்கே சூட்டினேன் சொன்ன மாலை\nஇடராழி நீங்குகவே யென்று",
      transliteration: "Vaiyam thagaliyaga var kadale neyyaga / Veyya kadiron vilakkaga - seyya / Sudarazhiyan adikke suttinen sonna maalai / Idarazhi neengugave yendru",
      wordMeanings: [
        ["Vaiyam", "Earth/Universe"],
        ["Thagaliyaga", "As the lamp bowl"],
        ["Var kadale", "Expanding ocean"],
        ["Neyyaga", "As the ghee"],
        ["Veyya kadiron", "Hot/radiant sun"],
        ["Vilakkaga", "As the burning wick/blaze"],
        ["Seyya", "Red/luminous"],
        ["Sudar azhiyan", "Lord holding the glowing Discus"],
        ["Adikke", "At His divine feet"],
        ["Suttinen", "I have offered/adorned"],
        ["Sonna maalai", "Garland of words (verses)"],
        ["Idar azhi", "Ocean of miseries/samsara"],
        ["Neengugave yendru", "So that it may be eradicated entirely"]
      ],
      significance: "Poigai lights an external lamp using the universe itself — earth as bowl, ocean as ghee, sun as flame — establishing that all of cosmic reality points entirely toward Narayana.",
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Poigai Azhwar constructs a cosmic lamp to dispel both the physical darkness in the corridor of Thirukoilur and the spiritual darkness (Ajnana) in human minds. The Earth represents the container of human experience, the oceans symbolise the boundless oil of love, and the Sun represents the concentrated light of intellect."
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "The verse establishes Sriman Narayana as the Koyil (abode) and ultimate master of the cosmos (Seshin). By addressing the Lord as Sudarazhiyan (the wielder of the Chakrathazhwar/Discus), he identifies the Supreme Being (Para Tattva) who actively removes obstacles (Virodhi Nivarana) for the Jiva."
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai in his commentary highlights that this verse demonstrates Paroksha Jnana (indirect knowledge elevated through devotion). The garland of words (Sonna Maalai) offered at the Lord’s feet is non-different from flower garlands, establishing the doctrine that linguistic praise composed with devotion is an essential form of kainkaryam."
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana (half-lotus posture) or standing in Anjali Mudra within the Thirukoilur triad representation.",
        mudras: "Jnana Mudra (index finger touching thumb, signifying the union of Jiva and Paramatma) on the right hand, with the left hand resting on the lap or folded in prayer (Anjali).",
        garments: "Simple white ascetic loincloth (Vesti), prominent Urdhva Pundra (holy white clay marks) on twelve places of the body, adorned with sacred Tulasi beads and a lotus-seed garland.",
        idol: "At the Tiruvekka shrine in Kanchipuram, Poigai Azhwar’s Moolavar idol depicts him in a contemplative, meditative pose next to the temple tank, radiating serene Sattvic intensity."
      },
      videoSearches: [
        "Poigai Azhwar Mudhal Thiruvanthadhi Upanyasam Velukkudi Krishnan",
        "Mudhal Azhwargal Vaibhavam Karunakarachariar",
        "Thirukoilur Dehali Anubhavam Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  bhoothath: {
    order: 2,
    epithets: ["Mallai Natha", "Bhoothathatthan", "Second Among the Mudhal Azhwars"],
    birthMonth: "Aippasi",
    birthStar: "Avittam (Dhanishta)",
    tithi: "Sukla Paksha Dasami",
    birthplace: {
      name: "Thirukadalmallai (Mamallapuram / Mahabalipuram)",
      district: "Chengalpattu District, Tamil Nadu"
    },
    amsam: "Kaustubham (The auspicious, celestial gem residing on Sriman Narayana's chest)",
    era: {
      academic: "Early Sangam / Post-Sangam Transition Period (c. 5th–6th Century CE)",
      contemporaries: "Poigai Azhwar, Pey Azhwar, Pallava Dynasty Kings (who developed the port city of Mallai)"
    },
    timeline: [
      {
        when: "Ayoni Sambhava Birth",
        event: "Discovered inside a Liquorice (Kurukkatthi / Madhavi) flower in Thirukadalmallai"
      },
      {
        when: "Divine Infusion",
        event: "Imbibing the name Bhoothath (one filled with the intense, intoxicated love for the Divine)"
      },
      {
        when: "Thirukoilur Convergence",
        event: "Gathering with Poigai and Pey Azhwar in the dark corridor"
      },
      {
        when: "Lighting the Lamp of Love",
        event: "Composition of Irandam Thiruvanthadhi starting with Anbe Thagaliyaga"
      },
      {
        when: "Perpetual Pilgrimage",
        event: "Continuous propagation of Bhakti through song across sacred shrines"
      },
      {
        when: "Ascension",
        event: "Attainment of eternal service (Nitya Kainkaryam) at the feet of the Divine Couple"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Like Poigai Azhwar, Bhoothath Azhwar was an Ayoni Sambhava. He manifested inside the blossom of a Kurukkatthi vine (Liquorice plant) in a garden near the seashore at Thirukadalmallai (modern Mahabalipuram). The name Bhoothath is derived from the word Bhootha, signifying one who is completely consumed, possessed, or intoxicated by Bhakti (divine love) for Sriman Narayana. Free from all worldly attachments from birth, he spent his youth wandering along the coast, continuously chanting the names of Narayana"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Bhoothath Azhwar's unique service was the conversion of intellectual realization (Jnana) into emotional, nectar-like devotion (Bhakti). He transformed formal Vedic theology into felt, experiential loving service (Preema-Rasa)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "During the thunderous night at Thirukoilur, after Poigai Azhwar lit the physical/cosmic lamp with the Sun as its wick (Vaiyam Thagaliyaga), Bhoothath Azhwar realized that a material lamp alone could not illuminate the internal form of the Supreme Lord who stood among them. Inspired by divine grace, he lit an internal, emotional lamp. He declared love (Anbu) to be the lamp bowl, intense longing (Aarvam) to be the ghee, and a mind melted in bliss (Sinthai) to be the burning wick. Through this Anbu Deepam (Lamp of Love), he brought warmth and emotional clarity to the divine revelation occurring in the corridor"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Functioned in absolute spiritual harmony with Poigai and Pey Azhwar. The trio acted as a single collective spiritual unit, laying the foundational triad of Sri Vaishnava theology"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Having illuminated the inner emotional pathway to Narayana through his 100 verses, Bhoothath Azhwar merged into the eternal abode (Paramapadam), leaving behind his Prabandham as an imperishable guide for posterity"
        ]
      }
    ],
    legend: {
      title: "Sthalasayana Perumal & Mallai Connection",
      text: "Thirukadalmallai is uniquely associated with the Lord reclining on the ground (Sthalasayana). Legend states that sage Pundarika offered lotus flowers directly to the Lord's feet here, and the Lord assumed a reclining posture on the bare earth to receive them. Bhoothath Azhwar's presence in this shrine reinforced the profound accessibility (Saulabhya) of Narayana, who lie down on the simple earth out of love for His devotee"
    },
    works: [
      {
        name: "Irandam Thiruvanthadhi",
        pasurams: 100,
        language: "Tamil"
      }
    ],
    preservation: "Clarified that intellectual knowledge (Jnana) is incomplete without emotional surrender (Bhakti). He protected the sampradaya from cold, intellectual stoicism by demonstrating that love is the ultimate medium to perceive God",
    bhaktiBhava: "Priti-Garbha Bhakti (Love-infused devotion). His core doctrine emphasizes that God is conquered not by austere penance alone, but by pure, unblemished affection (Anbu)",
    associatedDesams: ["mahabalipuram", "thirukkovilur", "tirupati", "kumbakonam", "thirukkoshtiyur", "srirangam"],
    verse: {
      work: "Irandam Thiruvanthadhi, Pasuram 1 (Anbe Thagaliyaga)",
      tamil: "அன்பே தகளியா ஆர்வம் நெய்யாக\nஇன்புருகு சிந்தை இடுதிரியா - நன்புருகி\nஞானச் சுடர்விளக் கேற்றினேன் நாரணற்கு\nஞானத் தமிழ் புரிந்த நான்",
      translit: "Anbe thagaliyaga aarvam neyyaga Inburugu sinthai iduthiriyaa - nanburugi Jnana sudar vilakkerttinen Naranarku Jnana thamizh purintha naan",
      wordMeanings: [
        ["Anbe", "Love/Devotion"],
        ["Thagaliyaga", "as the lamp bowl"],
        ["Aarvam", "intense desire/longing"],
        ["Neyyaga", "as the clarifying ghee"],
        ["Inburugu", "melting in divine bliss"],
        ["Sinthai", "the mind/thought"],
        ["Iduthiriyaa", "as the placed wick"],
        ["Nanburugi", "with a soul deeply melted in affection"],
        ["Jnana sudar vilakku", "the luminous lamp of spiritual wisdom"],
        ["Erttinen", "I have lit"],
        ["Naranarku", "for Lord Narayana"],
        ["Jnana thamizh purintha naan", "I who have authored this wisdom-filled Tamil literature"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Bhoothath Azhwar complements Poigai Azhwar's external cosmic lamp with an internal, subjective lamp. The physical universe is useless to see God unless the human heart possesses the requisite emotional ingredients: love (Anbu), eagerness (Aarvam), and a mind softened by divine contemplation (Sinthai)"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Demonstrates the essential relationship between Bhakti and Jnana. In Visishtadvaita, Bhakti is defined as Tailadhara-vat avicchinna smriti-santana-rupa (unbroken recollection of God like a continuous stream of oil). The \"ghee\" (Aarvam) represents this unbroken continuity of devotional focus required to fuel the flame of divine knowledge"
        },
        {
          heading: "Commentarial Insights",
          text: "Nampillai notes that while Poigai Azhwar provided the Swaroopa Jnanam (awareness of divine reality), Bhoothath Azhwar provided the Rasa (taste/sweetness) without which spiritual knowledge remains dry. The phrase Jnana Thamizh establishes Tamil as a sacred language capable of conveying the deepest Vedic insights"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana or standing alongside Poigai Azhwar in a posture of devotional ecstasy",
        mudras: "Hands held in Anjali Mudra (folded in prayer) close to the chest, symbolizing emotional surrender",
        garments: "Dressed in ascetic garments, adorned with Rudra/Tulasi garlands, featuring prominent Urdhva Pundra tilak markings across his arms, chest, and forehead",
        idol: "At Thirukadalmallai (Mahabalipuram), his image is consecrated in a dedicated shrine, depicting him with a joyful demeanor reflecting his name (Bhoothath—intoxicated by divine love)"
      },
      videoSearches: [
        "Bhoothath Azhwar Irandam Thiruvanthadhi Lecture Velukkudi Krishnan",
        "Anbe Thagaliyaga Pasuram Detailed Vyakhyanam Karunakarachariar",
        "Mudhal Azhwargal Life History Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  pey: {
    order: 3,
    epithets: ["Mahadahvaya", "Peyar", "Third among the Mudhal Azhwars"],
    birthMonth: "Aippasi",
    birthStar: "Sadayam (Shatabhisha)",
    tithi: "Sukla Paksha Ekadashi",
    birthplace: {
      name: "Thirumayilai (Mylapore, Chennai)",
      district: "Chennai District, Tamil Nadu"
    },
    amsam: "Nandaka (The Divine Sword of Sriman Narayana)",
    era: {
      academic: "Early Sangam / Post-Sangam Transition Period (c. 5th–6th Century CE)",
      contemporaries: "Poigai Azhwar, Bhoothath Azhwar, Thirumazhisai Azhwar (his illustrious disciple)"
    },
    timeline: [
      {
        when: "Ayoni Sambhava Birth",
        event: "Discovered in a red lily (Sevvalli) flower inside the temple tank of Adi Kesava Perumal Temple, Mylapore"
      },
      {
        when: "Ecstatic State",
        event: "Attaining the state of Pey (divine madness/possession) through unceasing visualization of the Lord"
      },
      {
        when: "Climax at Thirukoilur",
        event: "Direct vision of the Divine Couple (Sri and Narayana) in the illuminated dark corridor"
      },
      {
        when: "Composition of Moondram Thiruvanthadhi",
        event: "Commencing with the historic proclamation Thirukanden Pon Meni Kanden"
      },
      {
        when: "Mentorship of Thirumazhisai",
        event: "Guiding Thirumazhisai Azhwar into the fold of Sriman Narayana"
      },
      {
        when: "Eternal Bliss",
        event: "Merging into the divine realm of Sri Vaikuntham"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Pey Azhwar was the third Ayoni Sambhava saint, born inside a red lily flower in the Manikairavam well/tank of the Adi Kesava Perumal Temple in Mylapore, Chennai. The name Pey in Tamil translates literally to \"ghost\" or \"one possessed.\" He was given this epithet because his external behavior resembled that of a madman—he would laugh uncontrollably, cry, dance, and break into sudden song, completely oblivious to social norms, because his mind was perpetually fixated on the transcendent beauty of God"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "His primary contribution was revealing the Prathyaksha Anubhava (direct, immediate ocular vision) of Sriman Narayana accompanied by His eternal consort, Sri Lakshmi (Thiru)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Thirukoilur corridor encounter reached its grand climax through Pey Azhwar. When Poigai Azhwar lit the outer cosmic lamp (Jnana) and Bhoothath Azhwar lit the inner emotional lamp (Bhakti), the pitch-black corridor was flooded with divine illumination. Pey Azhwar, standing as the third person, turned his eyes toward the mysterious fourth presence and experienced direct divine vision (Saksatkara). He saw not just Narayana alone, but Sri Lakshmi (Thiru) residing eternally on His golden chest. Overwhelmed by this vision, he burst into the ecstatic declaration: \"Thirukanden Pon Meni Kanden!\" (\"I have seen Lakshmi! I have seen the Golden Form!\")"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Pey Azhwar served as the revered spiritual preceptor (Acharya) to Thirumazhisai Azhwar. When Thirumazhisai was practicing austere Saivite/Siddhanta penance, Pey Azhwar famously planted a plant upside down and watered a dry, dead stick to draw his attention. When Thirumazhisai questioned this absurd behavior, Pey Azhwar replied that seeking liberation from deities other than Sriman Narayana was even more absurd. This encounter transformed Thirumazhisai into an unyielding devotee of Narayana"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Having transmitted his divine vision and established the unbroken lineage (Guru Parampara) through Thirumazhisai Azhwar, Pey Azhwar ascended to Paramapadam"
        ]
      }
    ],
    legend: {
      title: "The Revelation of Purushakara Tattva",
      text: "Pey Azhwar's revelation at Thirukoilur is theological cornerstone of Sri Vaishnavism. By seeing Thiru (Sri Lakshmi) first (Thirukanden), he established that Narayana is never approached in isolation, but always as Divya Dampathi (The Divine Couple). Lakshmi acts as the indispensable mediatrix (Purushakara), ensuring that the Lord's justice is tempered by supreme grace"
    },
    works: [
      {
        name: "Moondram Thiruvanthadhi",
        pasurams: 100,
        language: "Tamil"
      }
    ],
    preservation: "Formulated the primary Sri Vaishnava identity: God is Sriman Narayana—Narayana irrevocably united with Sri (Lakshmi). He safeguarded the sampradaya from doctrines that worshiped the Absolute without its inherent mercy aspect (Krupa)",
    bhaktiBhava: "Saksatkara Bhakti / Darsana Bhava (Devotion culminating in direct vision). His work highlights Purushakara Prapatti (Surrender to God through the divine Mother)",
    associatedDesams: ["thirukkovilur", "tirupati", "triplicane", "kumbakonam", "srirangam"],
    verse: {
      work: "Moondram Thiruvanthadhi, Pasuram 1 (Thirukanden Pon Meni Kanden)",
      tamil: "திருக்கண்டேன் பொன்மேனி கண்டேன் - திகழும்\nஅருக்கனிறம் போன்றும் உருவும் - செருக்கிளறும்\nபொன்னாழி கண்டேன் புரிசங்கம் கைக்கண்டேன்\nஎன்னாழி வண்ணன்பால் இன்று",
      translit: "Thirukanden pon meni kanden - thigazhum Arukkanniram pondrum uruvum - serukkilarum Ponnazhi kanden puri sangam kai kanden Ennazhi vannan pal indru",
      wordMeanings: [
        ["Thirukanden", "I have beheld Goddess Sri Lakshmi"],
        ["Pon meni kanden", "I have beheld His radiant golden body"],
        ["Thigazhum", "dazzling/glorious"],
        ["Arukkan niram pondrum", "resembling the hue of the brilliant sun"],
        ["Uruvum", "His form"],
        ["Serukilarum", "fierce and victorious"],
        ["Pon azhi kanden", "I have beheld the golden Discus (Sudarshana)"],
        ["Puri sangam", "the spiraled Conch (Panchajanya)"],
        ["Kai kanden", "I have seen in His hands"],
        ["En azhi vannan pal", "in my Lord who possesses the deep hue of the ocean"],
        ["Indru", "today"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "The verse represents the absolute summit of spiritual perception. The order of perception is critical: Pey Azhwar sees Thiru (Lakshmi) first, because it is Her presence on the chest of Narayana that grants the Lord His captivating Golden Form (Pon Meni) and converts His awesome power into accessible grace"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Substantiates the Sishya-Gati (path of the soul). The presence of the Weapons—the Discus (Azhi) and Conch (Sangam)—demonstrates that the Lord is fully equipped to destroy the Karmic obstacles of those who take refuge in Him through Lakshmi's mediation"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai emphasizes the word Indru (\"Today\"). It signifies that after countless births spent in the darkness of Samsara, this moment of divine vision is the true beginning of the soul's existence. The golden color (Pon Meni) represents the amalgamation of divine beauty (Thirumeni) illuminated by the presence of Sri"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing or seated in an ecstatic pose, often depicted with eyes wide in wonder and arms raised in joyous expression",
        mudras: "Hands pointing toward the Lord or held in Anjali Mudra with an expression of visual ecstasy (Prathyaksha Anubhava)",
        garments: "Simple ascetic wear, marked heavily with Urdhva Pundra (holy tilak), adorned with Tulasi garlands",
        idol: "Located at the Sri Adi Kesava Perumal Temple in Mylapore, Chennai. The Moolavar idol depicts Pey Azhwar in his characteristic state of divine enchantment, gazing directly at the Lord's form"
      },
      videoSearches: [
        "Pey Azhwar Moondram Thiruvanthadhi Velukkudi Krishnan",
        "Thirukanden Pon Meni Kanden Meaning Karunakarachariar",
        "Pey Azhwar Life and Thirumazhisai Interaction Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  thirumazhisai: {
    order: 4,
    epithets: ["Bhaktisara", "Thirumazhisai Piran", "Mazhisai Vendhan", "Urayil Idaiyittar"],
    birthMonth: "Thai (Makaram)",
    birthStar: "Magham",
    tithi: "Sukla Paksha Saptami",
    birthplace: {
      name: "Thirumazhisai (Jagannatha Kshetram)",
      district: "Thiruvallur District, Tamil Nadu"
    },
    amsam: "Sudarshana Chakra (The Divine Discus/Wheel of Sriman Narayana)",
    era: {
      academic: "c. 6th–7th Century CE",
      contemporaries: "Pey Azhwar (His Acharya), Kanikannan (His primary disciple), Pallava King (Traditional accounts identify him with King Mahendravarman I)"
    },
    timeline: [
      {
        when: "Fetal Manifestation & Discovery",
        event: "Born as an unformed mass of flesh to Sage Bhargava and Kanakangi; miraculously transformed into a complete child by Divine Grace and nurtured by the bamboo-cutter Perumban and his wife"
      },
      {
        when: "Philosophical Exploration",
        event: "Rigorous study and practice of Buddhism, Jainism, Shaivism (taking the name Sivavakkyar)"
      },
      {
        when: "Reconversion by Pey Azhwar",
        event: "The miraculous upside-down plant incident leading to his total surrender to Sriman Narayana"
      },
      {
        when: "The Kanchi Exodus",
        event: "Ordering Lord Yathothkari Perumal to fold His serpent bed and leave Kanchipuram when King banished Kanikannan"
      },
      {
        when: "The Kumbakonam Years",
        event: "Reclining the Sarangapani deity (Keddakidandha Ennayya) at Kumbakonam"
      },
      {
        when: "Ascension",
        event: "Merging into the holy body of Lord Sarangapani"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Sage Bhargava performed a great sacrifice (Yajna). His wife Kanakangi gave birth prematurely to a lifeless, limbless mass of flesh. Overcome with grief, they placed it at the base of a cane bush in the forest of Thirumazhisai. Through the grace of Sriman Narayana, the mass transformed into a glowing, beautiful infant boy. A woodcutter named Perumban and his wife Pankajavalli discovered the child and raised him with deep love. The child famously refused to take any material nourishment for years until an elderly, pious couple offered him fresh milk daily. In gratitude, the child allowed the couple to drink the remaining milk, which restored their youth and blessed them with a son named Kanikannan, who became Thirumazhisai's lifelong disciple"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Establishing absolute, uncompromising monotheism (Parathvam of Narayana) through intense logical debate, deep scriptural analysis, and polemical literature (Nanmugan Thiruvanthadhi)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Transformation of Sivavakkyar: In his search for the ultimate truth, he thoroughly mastered Jainism, Buddhism, and Shaivism, adopting the name Sivavakkyar. Pey Azhwar intercepted him in Kanchipuram, planting a stick upside down and watering it with a broken pot. When Sivavakkyar questioned this folly, Pey Azhwar demonstrated that seeking salvation through any entity other than Narayana was equally futile. Convinced by Pey Azhwar's profound philosophical exposition, he embraced Sri Vaishnavism and earned the title Bhaktisara (the essence of devotion) The Departure of Yathothkari Perumal: In Kanchipuram, an elderly maid who served Thirumazhisai was blessed with youth through his grace. The local Pallava King married her and, desiring eternal youth for himself, demanded that Kanikannan bring Thirumazhisai to his court. Kanikannan refused, stating that his guru sung praises only of God, not mortal men. The enraged King banished Kanikannan. When Kanikannan informed Thirumazhisai, the saint decided to leave as well, refusing to stay where his disciple was insulted. Approaching the local temple, Thirumazhisai commanded the deity: \"Kanikannan is leaving, I too am going! You too fold your serpent bed (Adisesha) and roll up your divine sleep!\" Uniquely in temple history, the Supreme Lord (Yathothkari) obeyed the saint, folded His bed, and followed them out of Kanchipuram. Darkness and despair fell upon the kingdom. Realizing his grave error, the King rushed to apologize. Thirumazhisai relented and commanded the Lord to return: \"Kanikannan has returned, I too have returned! Roll out your serpent bed!\" The Lord complied, earning the eternal title Yathothkari (The One who obeyed His devotee's command / Sonna Vannam Seitha Perumal) Interacting with Lord Sarangapani at Kumbakonam: Arriving at Kumbakonam, Thirumazhisai stood before Lord Aravamudhan (Sarangapani) and sang: \"Are your legs aching from walking so long? Rise up and speak to me!\" The giant reclining deity actually began to rise from his serpent bed. Astounded, Thirumazhisai prayed: \"Please stay as you are, do not rise further!\" The Lord remained frozen in a half-rising posture (Uthana Sayana), which can be witnessed at Kumbakonam to this day"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Disciple of Pey Azhwar; Guru to Kanikannan. Their relationship represents the absolute pinnacle of Acharya-Sishya affection"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Spent his final years in deep contemplation (Samadhi) at Kumbakonam, eventually merging directly into the deity of Lord Sarangapani"
        ]
      }
    ],
    legend: {
      title: "Sonna Vannam Seitha Perumal",
      text: "The miracle at Tiruvekka highlights a fundamental Visishtadvaita concept: Aasrita-Pardhanthriyam (The Lord willing subjection to His true devotees). The Supreme Sovereign of the Cosmos became a follower of His saint's command, demonstrating that love (Bhakti) grants the devotee complete sway over God"
    },
    works: [
      {
        name: "Nanmugan Thiruvanthadhi",
        pasurams: 96,
        language: "Tamil"
      },
      {
        name: "Thiruchanda Viruttham",
        pasurams: 120,
        language: "Tamil"
      }
    ],
    preservation: "Functioned as the fiercest defender of Vaishnava monotheism. He systematically refuted non-Vedic and rival sectarian philosophies, establishing an unshakeable intellectual foundation for Visishtadvaita",
    bhaktiBhava: "Ekantha / Nirupadhika Bhakti (Uncompromising, absolute devotion to Narayana alone). He strictly prohibited Adevatha-Upasana (worship of lesser gods)",
    associatedDesams: ["thiruvekka", "kumbakonam", "tirupati", "triplicane", "thirukkoshtiyur", "anbil", "srirangam"],
    verse: {
      work: "Nanmugan Thiruvanthadhi, Pasuram 1 (Nanmuganai Narayanan Padaitthan)",
      tamil: "நான்முகனை நாரணன் படைத்தான் நான்முகனும்\nதான்முகமாய் சங்கரனைத் தான்படைத்தான் - யான்முகமாய்\nஅந்தாதி மேலிட்டு அறிவித்தேன் ஆழ்பொருளை\nசிந்தாமை கொண்மின் திருது",
      translit: "Nanmuganai Narayanan padaitthan Nanmuganum Than mugamai Sangaranai than padaitthan - yan mugamai Andhadhi melittu arivitsthen aazh porulai Sinthamai konmin thiridhu",
      wordMeanings: [
        ["Nanmuganai", "The four-faced Brahma"],
        ["Narayanan", "Lord Narayana"],
        ["Padaitthan", "created"],
        ["Nanmuganum", "and that four-faced Brahma"],
        ["Than mugamai", "in turn through his own agency"],
        ["Sangaranai", "Lord Shankara (Shiva)"],
        ["Than padaitthan", "created"],
        ["Yan mugamai", "I, taking this responsibility"],
        ["Andhadhi melittu", "using the Anthadhi poetic meter"],
        ["Arivitsthen", "have declared"],
        ["Aazh porulai", "this deep, profound esoteric truth"],
        ["Sinthamai konmin", "hold it firmly in your mind without letting it slip"],
        ["Thiridhu", "without doubt or confusion"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Thirumazhisai Azhwar lays down the precise cosmic hierarchy (Tattva Sekhara). Narayana is the primordial Cause (Karna Parabrahma). From Narayana's navel lotus emerged Brahma (Nanmugan), and from Brahma was born Shiva (Sankaran). Therefore, Narayana alone is the ultimate source and salvation"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Direct Tamil translation of the Upanishadic dictum: \"Eko ha vai Narayana aaseet, na Brahma na Ishana...\" (Narayana alone existed in the beginning, neither Brahma nor Shiva). It establishes Karanatvam (Causality) as the primary definition of the Supreme Absolute (Brahman)"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai notes that the saint opens his work with this unequivocal declaration to spare humanity from wasting their lives worshipping intermediate deities (Devatantara). He commands seekers to hold this truth Sinthamai (without spilling/losing), treating it as precious nectar"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Yoga Asana or Padmasana, exhibiting intense spiritual power",
        mudras: "Right hand held in Jnana Mudra or Upadesha Mudra, left hand resting on his knee; occasionally portrayed with an eye on his right big toe (referencing the legend where he opened a third eye on his foot to overpower a celestial rival's heat)",
        garments: "Dressed in ascetic robes, marked prominently with twelve Urdhva Pundra (Holy Clay Tilak) marks, adorned with sacred thread (Yajnopavitam) and Tulasi garlands",
        idol: "At his birth shrine in Thirumazhisai, his Moolavar idol radiates monumental yogic energy, capturing his authority as Bhaktisara—the essence of devotion"
      },
      videoSearches: [
        "Thirumazhisai Azhwar Life History Velukkudi Krishnan",
        "Nanmugan Thiruvanthadhi Pasuram 1 Vyakhyanam Karunakarachariar",
        "Thiruchanda Viruttham Upanyasam Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  nammazhwar: {
    order: 5,
    epithets: [
      "Shatagopan",
      "Maran",
      "Parankusan",
      "Vakula Bhushana",
      "Kurugai Piran",
      "Sri Shatagopa Muni",
      "Vedam Tamil Seitha Maran"
    ],
    birthMonth: "Vaikasi (Vaikasi Visakam)",
    birthStar: "Visakam",
    tithi: "Sukla Purnima",
    birthplace: {
      kshetramId: "alwar-thirunagari"
    },
    amsam: "Vishvaksena (The Chief Commander of Sriman Narayana's divine forces/hosts)",
    era: {
      academic: "Early Medieval / Pandya Dynasty era (c. 8th-9th Century CE). Sovereign & Scholarly Contemporaries: Madhurakavi Azhwar (His foremost disciple"
    },
    timeline: [
      {
        when: "Miraculous Incarnation",
        event: "Born to Kariyar (Local Chieftain of Thirukkurugur) and Udayanangai without taking material breath or crying (Ayoni-like untouched state) The Shatagopa Manifestation: Overcoming the binding cosmic wind Shatam and earning the name Shatagopan The Sixteen-Year Silent Meditation: Sitting motionless inside the hollow of the sacred Tamarind Tree (Thirupuli) at Adinathar Temple without food or speech Encounter with Madhurakavi: Responding to Madhurakavi Azhwar's profound riddle (Sethiyin Vayil Siriyathu Pirandhal...) with eternal Vedantic truth Outpouring of Dravida Veda: Composition of four monumental Prabandhams corresponding to the four Sanskrit Vedas Ascension to Vaikuntham: Physical transformation and merging into Sriman Narayana at the age of thirty-five"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into a noble Vellala family in Thirukkurugur, the infant exhibited extraordinary divine characteristics from the moment of birth. Unlike ordinary mortals who cry upon birth due to the touch of Shatam--the cosmic wind of delusion that erases prior divine memory--this divine child completely subdued the wind, earning the eternal name Shatagopan. The child took no physical nourishment, did not cry, and remained completely unattached to physical surroundings. Distressed yet awestruck, his parents Kariyar and Udayanangai brought the infant to the shrine of Lord Adinathar in Thirukkurugur. The child crawled into the hollow of a sacred, ancient tamarind tree (Thirupuli) within the temple precinct, assumed the Padmasana posture, closed his eyes, and remained in uninterrupted Samadhi (divine trance) for sixteen full years"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "His primary kainkaryam was the revelation of the highest Vedantic doctrines through the sweet Tamil tongue. Without traveling physically from his station beneath the Tamarind Tree, he experienced direct, uninterrupted vision (Prathyaksha Anubhava) of Lord Narayana presiding across all 108 Divya Desams"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "1. The Thirupuli Samadhi: For sixteen years, Nammalwar remained in the hollow of the Tamarind Tree without food, water, or human interaction, completely absorbed in the inner vision of Para Vasudeva. The leaf of this sacred tree never slept (Urangappuli), reflecting its master's eternal vigilance in divine contemplation. 2. The Awakening by Madhurakavi: Madhurakavi, an elder scholar-pilgrim traveling in North India, noticed a dazzling, unnatural beam of light shining continuously toward the south. Following this light across thousands of miles, he arrived at Thirukkurugur and discovered the glowing youth seated inside the Tamarind Tree. To test whether the youth possessed physical consciousness, Madhurakavi dropped a heavy stone nearby; Nammalwar opened his eyes. Madhurakavi then posed a famous philosophical riddle: \"If a tiny entity is born inside a dead body/substance, what will it eat, and where will it abide?\" (Sethiyin Vayil Siriyathu Pirandhal Etthai Thindru Enge Kidakkum?). Nammalwar broke his sixteen-year silence and delivered his first immortal words: \"It will eat that, and it will abide there!\" (Atthai Thindru Angge Kidakkum!). The profound inner meaning--that the individual soul (Jiva), when bound within the inert physical body (Prakriti/Pina), experiences and abides in material sensations, but when anchored in God, feeds solely on God--instantly made Madhurakavi his lifelong disciple. 3. The Sanga Phalakai Miracle: When scholars of the Madurai Tamil Sangam questioned the validity of Nammalwar's Tamil verses, Madhurakavi placed a small leaf containing the single line \"Kannan Kazhalgalinaai\" (The twin lotus feet of Lord Krishna) on the divine Sangam plank (Sanga Phalakai). The miraculous plank instantly threw off all other manuscripts and held only Nammalwar's verse, forcing the Sangam poets to acknowledge his supreme authority"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Nammalwar is revered as the primary Prapanna Jana Kootastha--the spiritual progenitor and root Acharya for all Sri Vaishnavas. Madhurakavi Azhwar stood as his foremost disciple, serving as his scribe and chronicler"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "At the young age of thirty-five, having rendered the essential import of the Upanishads into Tamil, Nammalwar absorbed his physical form into the supreme luminosity (Param Jyothi) of Lord Adinathar, ascending to Sri Vaikuntham"
        ]
      }
    ],
    legend: {
      title: "Thirupuli & Prapanna Kootastha",
      text: "The sacred tamarind tree (Thirupuli) at Alwarthirunagari is regarded as an incarnation of Adisesha himself, providing shade and protection to Nammazhwar. Nammazhwar is designated Prapanna Jana Kootastha because all subsequent Acharyas — including Nathamuni, Yamunacharya and Ramanuja — trace their spiritual authority and Sri Vaishnava lineage (guru parampara) directly back to him."
    },
    works: [
      {
        name: "Thiruvaymozhi",
        pasurams: 1102,
        language: "Tamil (Sama Veda)"
      },
      {
        name: "Thiruviruttam",
        pasurams: 100,
        language: "Tamil (Rig Veda)"
      },
      {
        name: "Thiruvaasiriyam",
        pasurams: 3,
        language: "Tamil (Yajur Veda)"
      },
      {
        name: "Periya Thiruvanthathi",
        pasurams: 87,
        language: "Tamil (Atharva Veda)"
      }
    ],
    preservation: "Formulated the four pillars of Dravida Vedam. His works provided the core textual foundation upon which Sri Nathamuni later recovered the entire Naalayira Divya Prabandham through intense yoga and Upadesha from Nammalwar in a divine vision.",
    associatedDesams: [
      "alwar-thirunagari",
      "tirupati",
      "srirangam",
      "kumbakonam",
      "thiruvalla",
      "thirukkannapuram",
      "thirumoozhikkalam",
      "paramapadam"
    ],
    verse: {
      work: "Tiruvaymoli, Decad 1.1, Pasuram 1 (Uyarvara Uyarsulum)",
      tamil: "உயர்வர உயர்நலம் உடையவன் எவனவன்\nமயர்வற மதிநலம் அருளினன் எவனவன்\nஅயர்வறும் அமரர்கள் அதிபதி எவனவன்\nதுயரறு சுடரடி தொழுதெழு என்மனனே",
      wordMeanings: [
        ["Uyar nalam", "highest glorious attributes/goodness"],
        ["Udaiyavan", "He who possesses"],
        ["Evanavan", "He who is that Supreme Lord"],
        ["Mayarvara", "freeing from delusion/ignorance"],
        ["Madi nalam", "enlightened wisdom infused with devotion (Bhakti-roopa-jnana)"],
        ["Arulinan", "He who mercifully bestowed"],
        ["Evanavan", "He who is that Supreme Being"],
        ["Ayarvarum", "free from forgetfulness/slumber"],
        ["Amarargal", "eternal celestial beings (Nityasuris)"],
        ["Adhipathi", "the supreme Sovereign/Lord"],
        ["Evanavan", "He who is that Lord"],
        ["Thuyararu", "destroying all sorrow/affliction"],
        ["Sudar adi", "His radiant lotus feet"],
        ["Thozhuthezhu", "worship and rise up in service"],
        ["En manane", "Oh my mind!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This iconic opening verse of Tiruvaymoli encapsulates the entire Visishtadvaita philosophy. It addresses the mind (En Manane), commanding it to surrender to the Supreme Lord who possesses infinite auspicious qualities (Ananta Kalyana Guna), who bestows delusion-free wisdom (Mayarvara Madinalam), and who rules over the eternal celestials (Nityasuris). 2"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes the three core doctrines of Vedantic thought: Para Tattva: Sriman Narayana is the supreme entity possessing unsurpassable auspicious attributes (Uyarvara Uyarnalam). Saubhagya / Kripa: The Lord grants Bhakti-roopa-jnana (wisdom matured into love) out of His own unconditional grace (Mayarvara Madinalam Arulinan). Purushartha: Eternal service (Kainkaryam) at His radiant feet (Sudaradi Thozhuthezhu) is the ultimate goal of life. 3"
        },
        {
          heading: "Commentarial Insights",
          text: "Nampillai, in his famed Eedu 36000 Padi commentary, notes that Nammalwar compressed the whole of the Brahmasutras into this single opening stanza. The word Evanavan (\"He who is such\") points to the Saguna Brahman of the Upanishads--not an abstract void, but a personal, infinitely loving God whose feet destroy all worldly afflictions (Thuyararu Sudaradi)"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana (Lotus Posture) beneath the sacred Tamarind tree, exhibiting absolute tranquility. Hand Gestures (Mudras): Right hand held in Jnana Mudra (index finger touching thumb, communicating supreme Vedantic truth), left hand holding palm-leaf manuscripts (Grantha) or resting on his lap. Garments & Embellishments: Adorned with sacred Vakula (Mimusops elengi / Magizham) flower garlands, simple holy robes, and prominent Urdhva Pundra (white clay tilak) markings across twelve parts of his body. Avathara Sthalam Idol Description: At Alwarthirunagari, Nammalwar's Moolavar idol inside the Tamarind tree precinct presents an unforgettable image of divine serenity, portraying him as the eternal preceptor (Acharya) instructing the world",
        mudras: "Right hand held in Jnana Mudra (index finger touching thumb, communicating supreme Vedantic truth), left hand holding palm-leaf manuscripts (Grantha) or resting on his lap. Garments & Embellishments: Adorned with sacred Vakula (Mimusops elengi / Magizham) flower garlands, simple holy robes, and prominent Urdhva Pundra (white clay tilak) markings across twelve parts of his body. Avathara Sthalam Idol Description: At Alwarthirunagari, Nammalwar's Moolavar idol inside the Tamarind tree precinct presents an unforgettable image of divine serenity, portraying him as the eternal preceptor (Acharya) instructing the world",
        garments: "Adorned with sacred Vakula (Mimusops elengi / Magizham) flower garlands, simple holy robes, and prominent Urdhva Pundra (white clay tilak) markings across twelve parts of his body. Avathara Sthalam Idol Description: At Alwarthirunagari, Nammalwar's Moolavar idol inside the Tamarind tree precinct presents an unforgettable image of divine serenity, portraying him as the eternal preceptor (Acharya) instructing the world",
        idol: "At Alwarthirunagari, Nammalwar's Moolavar idol inside the Tamarind tree precinct presents an unforgettable image of divine serenity, portraying him as the eternal preceptor (Acharya) instructing the world"
      },
      videoSearches: [
        "Our Own Azhwar,",
        "If a tiny entity is born inside a dead body/substance, what will it eat, and where will it abide?",
        "It will eat that, and it will abide there!",
        "Kannan Kazhalgalinaai",
        "He who is such",
        "Nammalwar Tiruvaymoli Detailed Upanyasam Velukkudi Krishnan",
        "Uyarvara Uyarsulum Pasuram Eedu Vyakhyanam Karunakarachariar",
        "Nammalwar Vaibhavam and Dravida Veda Ananthapadmanabhachariar"
      ],
      digitalTexts: []
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  madhurakavi: {
    order: 6,
    epithets: ["Madhurakavi Azhwar"],
    birthMonth: "Chithirai",
    birthStar: "Chithirai",
    tithi: "Sukla Paksha",
    birthplace: {
      kshetramId: "thirukkolur"
    },
    era: {},
    timeline: [
      {
        when: "Birth & Vedic Education",
        event: "Born into a distinguished Brahmin family at Thirukkolur and mastering the Sanskrit Vedas Northern Pilgrimage: Undertaking a extensive pilgrimage across Ayodhya, Mathura, Kashi, and Vrindavan The Celestial Light: Spotting an extraordinary, blinding beam of light shining continuously toward the South Journey to Thirukkurugur: Journeying southward thousands of miles following the divine beam Meeting Nammalwar: Posing the immortal question to Nammalwar inside the Tamarind tree Exclusive Devotion (Acharya Bhakti): Composing Kanninun Siruthambu and serving Nammalwar exclusively as God Himself Preservation of Works: Recording and singing Nammalwar's Tiruvaymoli across Tamilakam before attaining eternal liberation"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into a pious Vedic family in Thirukkolur, Madhurakavi mastered scripture at an early age. Driven by spiritual fervor, he traveled to Northern India on a grand pilgrimage to holy shrines including Ayodhya, Mathura, and Kashi. While residing in the North, he noticed a luminous pillar of light shining brightly in the southern night sky. Intrigued by this supernatural phenomenon, which did not fade with sunrise, he resolved to follow its source"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Madhurakavi's entire life purpose was transformed upon reaching Thirukkurugur. He discovered that the source of the divine light was sixteen-year-old Nammalwar, seated in total silence inside the hollow tamarind tree. Madhurakavi became Nammalwar's scribe, student, and personal servant. His specific kainkaryam was recording every verse sung by Nammalwar and propagating the Tiruvaymoli across the land"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "1. Following the Southern Light: The miraculous light guided Madhurakavi over hundreds of leagues from Northern India directly to the Tamarind tree of Thirukkurugur, demonstrating that true spiritual seekers are divinely guided to their Acharya. 2. The Immutable Riddle: Madhurakavi awakened Nammalwar from his sixteen-year silent trance by asking: \"If the small is born in the dead, what will it eat, and where will it stay?\" Nammalwar's profound response--\"It will eat that and stay there\"--revealed to Madhurakavi that Nammalwar was the living embodiment of divine wisdom. 3. Establishing Acharya Nishtai: Madhurakavi composed eleven immortal verses known as Kanninun Siruthambu. Uniquely among all the Azhwars, Madhurakavi did not sing praise directly of Lord Narayana or any Divya Desam deity. Instead, he sang exclusively of his Guru, Nammalwar (Shatagopan). He declared: \"I know no other God than Shatagopa; singing his praise brings infinite bliss.\""
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Madhurakavi represents the supreme paradigm of Acharya Bhakti (revering the Guru as higher than God Himself). He established the doctrine that surrender to the Acharya (Acharya Abhimana Valli) is superior even to direct surrender to the Supreme Lord (Ekantha Prapatti)"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "After decades spent singing Nammalwar's glory and preserving his manuscripts for future generations, Madhurakavi ascended to Paramapadam, permanently occupying a place at the feet of Nammalwar"
        ]
      }
    ],
    legend: {
      title: "The Essence of Kanninun Siruthambu",
      text: "Kanninun Siruthambu holds a unique status in Sri Vaishnavism: it is considered the “master key” (Chabi) of the Naalayira Divya Prabandham. When Sri Nathamuni later sought to recover the lost 4,000 verses, he recited the Kanninun Siruthambu 12,000 times with intense devotion at Alwarthirunagari, causing Nammazhwar to appear before him in a vision and grant the entire Dravida Veda corpus."
    },
    works: [
      {
        name: "Kanninun Siruththaambu",
        pasurams: 11,
        language: "Tamil"
      }
    ],
    preservation: "Established the fundamental doctrine of Charama Parva Adhikara (the ultimate stage of devotion: serving the devotee of God rather than God directly). He acted as the original archivist and propagator of Nammalwar’s literary heritage.",
    bhaktiBhava: "Acharya-Nishta / Guru-Bhakti (Unswerving, absolute absorption in the preceptor). His philosophical stance asserts that God is accessible only through the grace of the Acharya",
    associatedDesams: ["alwar-thirunagari"],
    verse: {
      work: "Kanninun Siruthambu, Pasuram 2 (Devu Matrariyen)",
      tamil: "தேவு மற்றறியேன் குருகூர்நம்பி\nபாவின் இன்னிசை பாடித்திரிவேனே\nமேவி நன்மணம் மேல்வர நோக்கியே\nநாவினாய் உய்யநான் கண்டு கொண்டெனே",
      wordMeanings: [
        ["Matrariyen", "I know no other"],
        ["Kurugur Nambi", "The Lord/Leader of Thirukkurugur (Nammalwar)"],
        ["Pavin", "of his verses/hymns"],
        ["Innisai", "sweet musical melody"],
        ["Padi", "singing"],
        ["Thirivene", "I wander about joyfully"],
        ["Mevi", "seeking with desire"],
        ["Nanmanam", "noble spiritual fragrance/goodness"],
        ["Melvara", "rising up/increasing"],
        ["Nokkiye", "looking upon"],
        ["Navinai", "by my tongue"],
        ["Uyya", "for my soul's redemption"],
        ["Nan", "I"],
        ["Kandu kondene", "have discovered and held firm"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Madhurakavi Azhwar makes a breathtaking theological assertion: \"Devu Matrariyen\"--\"I know no other God except Nammalwar!\" He openly proclaims that singing the melodious verses authored by his Acharya brings higher spiritual fulfillment than direct ritual worship of the Supreme Lord Narayana. 2"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes the doctrine of Bhagavata Seshatvam (the ultimate nature of the soul is to be a servant of God's devotees). While Bhagavad-Seshatvam (servitude to God) is the middle state, servitude to the Acharya (Acharya Seshatvam) represents the absolute climax (Charama Seema) of spiritual maturity in Visishtadvaita. 3"
        },
        {
          heading: "Commentarial Insights",
          text: "Manavala Mamunigal in his Upadesa Rathnamalai and Periyavachan Pillai in his commentaries declare that Madhurakavi Azhwar demonstrated the true spirit of Prapatti. By relying entirely on Nammalwar, he showed that the Acharya acts as the ultimate refuge (Purushakara) who guarantees salvation to the disciple"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing or seated in Anjali Mudra (folded hands in humble supplication) facing Nammalwar. Hand Gestures (Mudras): Hands held continuously in prayer (Anjali) or holding palm leaves and a writing stylus (Ezhuthanai) used to record Nammalwar's utterances. Garments & Embellishments: Dressed in simple traditional Brahmin priestly attire (Vesti), with a sacred thread (Yajnopavitam), adorned with Tulasi beads and prominent Urdhva Pundra (tilak) marks. Avathara Sthalam Idol Description: At Thirukkolur and Alwarthirunagari, Madhurakavi Azhwar's image is positioned perpetually at the feet of Nammalwar, reflecting his eternal stance as the dedicated servant of his master",
        mudras: "Hands held continuously in prayer (Anjali) or holding palm leaves and a writing stylus (Ezhuthanai) used to record Nammalwar's utterances. Garments & Embellishments: Dressed in simple traditional Brahmin priestly attire (Vesti), with a sacred thread (Yajnopavitam), adorned with Tulasi beads and prominent Urdhva Pundra (tilak) marks. Avathara Sthalam Idol Description: At Thirukkolur and Alwarthirunagari, Madhurakavi Azhwar's image is positioned perpetually at the feet of Nammalwar, reflecting his eternal stance as the dedicated servant of his master",
        garments: "Dressed in simple traditional Brahmin priestly attire (Vesti), with a sacred thread (Yajnopavitam), adorned with Tulasi beads and prominent Urdhva Pundra (tilak) marks. Avathara Sthalam Idol Description: At Thirukkolur and Alwarthirunagari, Madhurakavi Azhwar's image is positioned perpetually at the feet of Nammalwar, reflecting his eternal stance as the dedicated servant of his master",
        idol: "At Thirukkolur and Alwarthirunagari, Madhurakavi Azhwar's image is positioned perpetually at the feet of Nammalwar, reflecting his eternal stance as the dedicated servant of his master"
      },
      videoSearches: [
        "If the small is born in the dead, what will it eat, and where will it stay?",
        "It will eat that and stay there",
        "I know no other God than Shatagopa; singing his praise brings infinite bliss.",
        "master key",
        "Devu Matrariyen",
        "I know no other God except Nammalwar!",
        "Madhurakavi Azhwar Kanninun Siruthambu Velukkudi Krishnan",
        "Devu Matrariyen Pasuram Detailed Vyakhyanam Karunakarachariar",
        "Acharya Bhakti and Madhurakavi Vaibhavam Ananthapadmanabhachariar"
      ],
      digitalTexts: []
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  kulasekhara: {
    order: 7,
    epithets: ["Kulasekhara Perumal", "Koodal Nayakan"],
    birthMonth: "Masi",
    birthStar: "Punarvasu",
    tithi: "Sukla Paksha",
    birthplace: {},
    era: {},
    timeline: [
      {
        when: "Royal Birth & Coronation",
        event: "Born as Prince to King Dridhavrata of the Chera Kingdom at Thiruvanchikulam and succeeding to the throne Military Conquests & Reign: Ruling a vast realm as a brilliant warrior-king over the Chera, Chola, and Pandya regions Spiritual Awakening: Listening to Ramayana discourses and falling into deep devotional trances (Rama Bhakti) The Test of the Snake in the Pot: Proving the innocence of Vaishnava devotees accused of theft by putting his hand into a pot with a deadly cobra Renunciation of Royalty: Abdicating his crown in favor of his son and departing for Sri Rangam Kainkaryam at Sri Rangam & Tirupati: Composing Perumal Thirumozhi and Mukundamala Final Liberation: Attaining Mukthi at Mannarkoil Sri Rajagopalaswamy Temple"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into the royal Chera dynasty, Kulasekara was educated in statecraft, martial arts, Sanskrit, and Tamil. Upon ascending the throne, he expanded his kingdom through successful military campaigns, earning titles like Kolli Kavalan and Koodal Nayagan. However, worldly conquest brought him no inner peace. He spent his nights listening to scholars recite the epics, particularly the Srimad Ramayana. His emotional immersion in Lord Rama's life was so intense that during recitations of the Aranya Kanda--when Rama faced 14,000 demons alone at Janasthana--Kulasekara would rise in a trance, assemble his royal army, and command a march to assist Rama in battle"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Renouncing royal luxury to perform physical and literary service at holy shrines, particularly Sri Rangam and Thiruvengadam. He is celebrated for constructing the third enclosure wall (Kulasekaran Thiruchutru) at the Sri Rangam temple complex"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "1. The Snake in the Pitcher: Kulasekara spent his wealth feeding and honoring Sri Vaishnava saints in his palace. Jealous ministers, seeking to discredit the devotees, hid a valuable royal gem necklace and blamed the Vaishnavas. Indignant at this slander against God's servants, King Kulasekara ordered a copper pitcher containing a venomous cobra to be brought into open court. Proclaiming, \"No true servant of Narayana would ever commit theft!\", he fearlessly plunged his hand into the pitcher. The cobra refrained from biting him, completely vindicating the innocence of the devotees and shaming the corrupt ministers. 2. Abdication & Departure: Realizing that royal duties interfered with his spiritual life, Kulasekara abdicated his throne, crowned his son, and left his kingdom as a simple pilgrim bound for Sri Rangam. 3. Longing for Thiruvengadam: In his famous Perumal Thirumozhi (Decad 4), he expressed deep Vairagya (dispassion), singing that he desired no worldly power, royal wealth, or celestial pleasures. Instead, he prayed to be born on Tirumala hill as a bird, a fish in a holy stream, a stepping stone at the temple threshold, or a piece of stone upon which devotees step. To this day, the threshold leading into the sanctum sanctorum (Garbhagriha) of Lord Venkateswara at Tirupati is called the Kulasekara Padi"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Reverted directly to Sriman Narayana and Lord Sri Rama as his ultimate refuge, serving as an inspirational model of royal renunciation for future Acharyas like Yamunacharya"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "After spending his final years in total devotion across Sri Rangam, Tirupati, and Thirukannapuram, he passed away at the age of sixty-seven at Mannarkoil (near Ambasamudram), merging into Lord Rajagopalaswamy"
        ]
      }
    ],
    legend: {
      title: "Kulasekara Padi & Sri Rangam Connection",
      text: "Kulasekhara Azhwar’s humility is immortalised in temple architecture across South India: the threshold step directly before the sanctum of Lord Venkateswara at Tirupati, as in many other major temples, is called the Kulasekara Padi. Devotees step over this sacred threshold with deep reverence, honouring the king who chose to be a humble step for the Lord’s devotees rather than wear a royal crown."
    },
    works: [
      {
        name: "Perumal Thirumozhi",
        pasurams: 105,
        language: "Tamil"
      },
      {
        name: "Mukundamala",
        language: "Sanskrit (40 slokas)"
      }
    ],
    preservation: "Exemplified total dispassion (Vairagya) and proved that worldly power is utterly insignificant compared to devotional service (kainkaryam). Elevated Saranagati (surrender) through both Sanskrit and Tamil poetic traditions.",
    associatedDesams: ["srirangam", "tirupati", "thirukkannapuram", "thiruvithuvakodu", "chidambaram", "ayodhya"],
    verse: {
      work: "Perumal Thirumozhi, Decad 4, Pasuram 9 (Padiyay Kidanthu)",
      tamil: "செடியாய வல்வினைகள் தீர்க்கும் திருமாலே\nஅடியார்வ் என் உள்ளத்து அசையாது இருப்பானே\nபடியாய்க் கிடந்து உன் பவளவாய் காண்பேனே\nஅடியார் உம் தேவரும் அல்லாரும் ஏத்தும்\nவேங்கடத்து என் அப்பானே !",
      wordMeanings: [
        ["Valvinaigal", "strong past karmas/sins"],
        ["Theerkkum", "who eradicates/destroys"],
        ["Thirumale", "Oh Lord Narayana (consort of Sri Lakshmi)"],
        ["Adiyar", "your devotees"],
        ["En ullathu", "in my heart"],
        ["Asaiyathu", "unshakeably/steadfastly"],
        ["Iruppane", "Oh Lord who resides"],
        ["Padiyay kidanthu", "lying down/remaining as a threshold step"],
        ["Un pavalavay kanbene", "so that I may gaze continuously upon your coral-red lips"],
        ["Adiyar um", "devotees"],
        ["Devarum", "celestial gods"],
        ["Allarum", "and all ordinary human beings"],
        ["Etthum", "praise and glorify"],
        ["Vengadathu", "presiding at Tirumala/Thiruvengadam"],
        ["En appane", "Oh my Father/Master!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Kulasekara Azhwar prays for the ultimate expression of spiritual humility: to become an inanimate threshold step (Padi) inside the sanctum of Thiruvengadam. In doing so, he can perpetually gaze upon the Lord's coral lips while receiving the touch of the dust from the feet of the Lord's visiting devotees (Bhagavatas). 2"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Represents the pinnacle of Ananya-Seshatvam (exclusive servitude) and Bhagavata-Angikaram (seeking proximity to devotees). The desire to be stepped upon by devotees highlights that service to God's servants (Bhagavata Kainkaryam) is the highest reward (Purushartha). 3"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai in his commentary notes that while earthly kings seek exalted thrones (Simhasanam), King Kulasekara sought only to be a step (Padi). This verse gave birth to the term Kulasekara Padi, symbolizing the absolute eradication of ego (Ahamkara-Nivritti) required before entering God's presence"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in royal yet humble posture with hands folded in Anjali Mudra, or seated wearing a royal crown while bearing devotional insignia. Hand Gestures (Mudras): Hands joined in Anjali Mudra at chest level; occasionally depicted holding his divine bow (Sarnga) alongside royal ornaments. Garments & Embellishments: Dressed in royal silk garments adorned with Urdhva Pundra (white clay tilak) markings, wearing a crown (Kireetam) and sacred Tulasi garlands over his royal jewels. Avathara Sthalam Idol Description: At Thiruvanchikulam and Mannarkoil, Kulasekara Azhwar's Moolavar icon presents a majestic combination of royal sovereignty and profound, tearful devotional humility",
        mudras: "Hands joined in Anjali Mudra at chest level; occasionally depicted holding his divine bow (Sarnga) alongside royal ornaments. Garments & Embellishments: Dressed in royal silk garments adorned with Urdhva Pundra (white clay tilak) markings, wearing a crown (Kireetam) and sacred Tulasi garlands over his royal jewels. Avathara Sthalam Idol Description: At Thiruvanchikulam and Mannarkoil, Kulasekara Azhwar's Moolavar icon presents a majestic combination of royal sovereignty and profound, tearful devotional humility",
        garments: "Dressed in royal silk garments adorned with Urdhva Pundra (white clay tilak) markings, wearing a crown (Kireetam) and sacred Tulasi garlands over his royal jewels. Avathara Sthalam Idol Description: At Thiruvanchikulam and Mannarkoil, Kulasekara Azhwar's Moolavar icon presents a majestic combination of royal sovereignty and profound, tearful devotional humility",
        idol: "At Thiruvanchikulam and Mannarkoil, Kulasekara Azhwar's Moolavar icon presents a majestic combination of royal sovereignty and profound, tearful devotional humility"
      },
      videoSearches: [
        "No true servant of Narayana would ever commit theft!",
        "Kulasekara Azhwar Perumal Thirumozhi Upanyasam Velukkudi Krishnan",
        "Padiyay Kidanthu Un Pavalavay Kanbene Vyakhyanam Karunakarachariar",
        "Mukundamala and Kulasekara Vaibhavam Ananthapadmanabhachariar"
      ],
      digitalTexts: ["Dravida Veda Repository — dravidaveda.org"]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  periyazhwar: {
    order: 8,
    epithets: [
      "Vishnuchittan",
      "Srivilliputhur Piran",
      "Pattarpiran",
      "Kizharukku Aruttha Selvan",
      "Vedam Vallarkalai Vadhil Vendraan"
    ],
    birthMonth: "Ani (Jyeshtha)",
    birthStar: "Swathi",
    tithi: "Sukla Paksha Ekadashi",
    birthplace: {
      name: "Srivilliputhur (Vatapatrasayi Kshetram)",
      district: "Virudhunagar District, Tamil Nadu",
      kshetramId: "srivilliputhur"
    },
    amsam: "Garuda (The Divine Eagle / Celestial Vehicle of Lord Narayana)",
    era: {
      academic: "Early Pandya Dynasty era (c. 8th–9th Century CE)",
      contemporaries: "Vallabhadeva (Pandya King of Madurai), Andal (His foster daughter and supreme saint)"
    },
    timeline: [
      {
        when: "Devotional Birth & Floral Kainkaryam",
        event: "Born into a pious Mukundacharya Brahmin lineage at Srivilliputhur, dedicating his life to cultivating a flower garden (Nandavanam) for Lord Vatapatrasayi"
      },
      {
        when: "Divine Command",
        event: "Lord Vatapatrasayi commanding him in a dream to go to the royal court of Pandya King Vallabhadeva in Madurai"
      },
      {
        when: "The Royal Scholarly Debate (Vada)",
        event: "Establishing Narayana's supreme absolute causality (Parathvam) using scripture without formal scholarly training, causing the royal purse (Kizhi) to bend down to him automatically"
      },
      {
        when: "Divine Procession & Vision",
        event: "Riding the royal elephant in grand honor and receiving direct vision (Prathyaksha Anubhava) of Sriman Narayana in the sky with Sri, Bhu, and Nila Devi"
      },
      {
        when: "Outpouring of Thirupallandu",
        event: "Fearing for the Lord's safety against the evil eye, singing Thirupallandu to bless God Himself"
      },
      {
        when: "Fatherhood of Andal",
        event: "Discovering Andal under a Tulasi plant, raising her in Bhakti, and giving her in divine marriage to Lord Ranganatha"
      },
      {
        when: "Attainment of Paramapadam",
        event: "Absorbing into the divine service of Garuda in Paramapadam"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Vishnuchittan was born at Srivilliputhur to Mukundacharya and Padmavalli. Desiring no intellectual preeminence or royal favors, he chose the humblest physical service (Kainkaryam): maintaining a lush flower garden (Nandavanam) to weave daily flower garlands for the deity Lord Vatapatrasayi. He believed that physical service offered with a pure heart was the highest path of surrender"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Nandavana Kainkaryam (Garland weaving) and Mangalasasanam (protective devotional blessing). His spiritual outlook was completely defined by maternal affection (Vatsalya Bhava), viewing the Supreme Lord not as an intimidating, awe-inspiring deity, but as a vulnerable child who required protection"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Victory at the Madurai Court: King Vallabhadeva of Madurai sought to determine the ultimate truth (Paratattva) to attain liberation. Lord Vatapatrasayi appeared in Vishnuchittan's dream, ordering him to participate in the court debate. Though Vishnuchittan protested his lack of formal Vedantic scholarship, the Lord assured him guidance. Entering the royal assembly, divine wisdom flowed through him effortlessly. He quoted Vedic and Smriti texts, conclusively establishing Sriman Narayana as the Supreme Brahman. The monetary reward bag (Kizhi) hung high on a pillar miraculous bent down and fell into his hands Singing Thirupallandu (Blessing the Lord): Overjoyed by Vishnuchittan's victory, King Vallabhadeva seated him upon the royal elephant in a grand victory procession through Madurai. Moved by His devotee's glory, Lord Narayana appeared in the sky, riding Garuda accompanied by His consorts. Seeing the transcendent beauty of the Lord exposed to the gaze of thousands of ordinary mortals, Vishnuchittan was seized by intense maternal fear (Vatsalya). Fearing that the evil eye (Drishti) of the crowd would harm the Lord, he grabbed the bells hanging from the elephant's neck and beat them as cymbals, singing Thirupallandu—wishing long life, protection, and eternal glory to God Himself for thousands of years (Pallandu Pallandu) Parenting Andal: Vishnuchittan discovered the infant Andal beneath a Tulasi plant in his garden. He raised her with total devotion, nurturing her love for Lord Krishna. When he discovered she had been secretly wearing the flower garlands intended for the Lord before offering them to the temple, he was initially horrified. However, Lord Vatapatrasayi appeared in a dream, declaring that He preferred only the garlands already worn and blessed by Andal (Kothai)"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Preceptor and biological foster father to Andal. He passed on the entire emotional legacy of Vatsalya and Krishna Leela Anubhava to her"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Having completed his earthly duties and witnessed Andal's union with Lord Ranganatha at Srirangam, Vishnuchittan returned to Srivilliputhur and eventually entered the eternal abode of Paramapadam to resume his celestial identity as Garuda"
        ]
      }
    ],
    legend: {
      title: "The Inversion of Devotion in Thirupallandu",
      text: "In standard religious paradigms, mortals ask God for protection and long life. In Periyalwar's philosophy, the devotee's love is so intense that he forgets his own finite, helpless nature and attempts to protect the omnipotent Supreme Being from harm. This unique inversion—wishing Pallandu (long life) to God—is why he earned the supreme title Periyalwar (\"The Elder/Great Azhwar\")"
    },
    works: [
      {
        name: "Thirupallandu",
        pasurams: 12,
        language: "Tamil"
      },
      {
        name: "Periyalwar Thirumozhi",
        pasurams: 461,
        language: "Tamil"
      }
    ],
    preservation: "Formulated the primary liturgy of Sri Vaishnava ritual worship. Thirupallandu acts as the indispensable protective armor (Kavacham) recited at the start and end of all Prabandha chants",
    bhaktiBhava: "Vatsalya Bhava (Parental love toward God). His core doctrine asserts that love expressed as protective care toward God eradicates all residual ego (Ahamkara) and seals the bond of Prapatti",
    associatedDesams: [
      "srivilliputhur",
      "madurai-koodal",
      "tirupati",
      "kumbakonam",
      "srirangam",
      "thiruvellarai",
      "mathura",
      "ayarpadi",
      "ayodhya"
    ],
    verse: {
      work: "Thirupallandu, Pasuram 1 (Pallandu Pallandu)",
      tamil: "பல்லாண்டு பல்லாண்டு பல்லாயிரத்தாண்டு\nபலகோடி நூறாயிரம்\nமல்லாண்ட திண்தோள் மணிவண்ணா ! உன்\nசேவடி செவ்வி திருக்காப்பு",
      translit: "Pallandu pallandu pallayiratthandu Pala kodi nurayiram Mallanda thinthol manivanna! Un Sevadi sevvi thirukappu",
      wordMeanings: [
        ["Pallandu", "Many years"],
        ["Pallandu", "many years"],
        ["Pallayiratthandu", "many thousands of years"],
        ["Pala kodi nurayiram", "many hundreds of thousands of crores of years"],
        ["Mallanda", "who subdued/vanquished the mighty wrestlers (in Kamsa's arena)"],
        ["Thinthol", "possessing powerful shoulders"],
        ["Manivanna", "Oh Lord with the radiant hue of a blue sapphire"],
        ["Un", "Your"],
        ["Sevadi", "reddish divine lotus feet"],
        ["Sevvi", "beauty/freshness"],
        ["Thirukappu", "may it be safely protected!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Periyalwar gazes upon the powerful, sapphire-hued shoulders (Manivanna) of Lord Narayana who defeated the demon wrestlers. Yet, instead of relying on that strength for his own protection, he worries that the exposure of the Lord's tender, reddish lotus feet (Sevadi) to human eyes will cause harm. He therefore invokes protective blessings (Thirukappu) over God's own body for infinite cosmic eras"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Svarupa-Jnana through the lens of pure love. In Visishtadvaita, the ultimate boundary of devotion is reached when the soul's focus shifts completely away from its own salvation (Sva-Rakshana) to the protection and pleasure of the Supreme Lord (Para-Gatha-Kapata/Seshin)"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai in his commentary writes that this verse represents the essence of all Vedas. The word Thirukappu (divine protection) is an expression of deep Anuraga (devotional affection). It proves that when devotion matures fully, awe and fear of God's majesty (Aishwarya) disappear, leaving only protective intimacy (Saulabhya-Anubhava)"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated or standing in a humble posture holding brass cymbals (Thalam) used to sing Thirupallandu",
        mudras: "Hands beating cymbals together at chest level in rhythm, or held in Anjali Mudra",
        garments: "Attired in traditional Brahmin priest robes, wearing prominent Urdhva Pundra (tilak) marks on twelve body locations, adorned with fresh Tulasi garlands and lotus seed beads",
        idol: "At Srivilliputhur, Periyalwar's Moolavar shrine portrays him next to Andal and Vatapatrasayi, capturing his eternal role as the father of Andal and the singer of protective blessings"
      },
      videoSearches: [
        "Periyalwar Thirupallandu Detailed Upanyasam Velukkudi Krishnan",
        "Pallandu Pallandu Pasuram Vyakhyanam Karunakarachariar",
        "Periyalwar Vaibhavam and Madurai Vada Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  andal: {
    order: 9,
    epithets: [
      "Kothai",
      "Nachiyar",
      "Chudikuduttha Sudarkodi",
      "Goda Devi",
      "Ranganatha Nayaki",
      "Sri Goda Natchiyar"
    ],
    birthMonth: "Aadi (Ashadha)",
    birthStar: "Pooram (Purva Phalguni)",
    tithi: "Sukla Paksha Chaturthi",
    birthplace: {
      name: "Srivilliputhur (Tulasi Nandavanam)",
      district: "Virudhunagar District, Tamil Nadu",
      kshetramId: "srivilliputhur"
    },
    amsam: "Bhu Devi (Mother Earth / Divine Consort of Sriman Narayana)",
    era: {
      academic: "c. 8th–9th Century CE",
      contemporaries: "Periyalwar (Her foster father), Lord Ranganatha (Her divine Husband)"
    },
    timeline: [
      {
        when: "Ayoni Discovery",
        event: "Discovered as an infant beneath a Tulasi plant in Periyalwar's garden at Srivilliputhur"
      },
      {
        when: "Secret Garland Offering (Chudikuduttha Vaibhavam)",
        event: "Daily wearing the flower garland intended for Lord Vatapatrasayi to inspect her suitableness for Him before putting it back"
      },
      {
        when: "Revelation of Her Identity",
        event: "Lord Vatapatrasayi refusing fresh garlands and insisting on receiving only the garland previously worn by Andal"
      },
      {
        when: "Margazhi Nonbu & Thiruppavai Composition",
        event: "Leading the maidens of Srivilliputhur in the sacred winter vow (Pavai Nonbu) to attain Lord Krishna"
      },
      {
        when: "Dream Marriage (Varanam Aayiram)",
        event: "Expressing intense longing and composing Nachiyar Thirumozhi"
      },
      {
        when: "Journey to Srirangam & Divine Union",
        event: "Arriving at Srirangam in royal bridal procession and stepping onto the serpent bed to merge physically into the deity of Lord Ranganatha"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Andal manifested spontaneously (Ayoni Sambhava) as an infant in the flower garden maintained by Periyalwar in Srivilliputhur. Periyalwar named her Kothai (\"String of Flowers\" or \"Beautiful Maiden\"). Raised in an environment echoing with tales of Lord Krishna's divine sports (Leelas), Kothai developed an exclusive, romantic longing for Sriman Narayana. From early childhood, she resolved that she would never marry a mortal human being (Manidharukku Enru Pechuppadil Vaazhken)"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Bridal Surrender / Nayaki Bhava (Reaching God through love). Her service was offering garlands of both fresh flowers and immortal poetry to the Lord"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "Chudikuduttha Sudarkodi: Every morning, while Periyalwar was away gathering flowers, young Kothai would take the freshly woven garland meant for Lord Vatapatrasayi, wear it around her own neck, admire her reflection in a well, and then place it neatly back in the basket. She did this not out of disrespect, but to check whether her beauty was worthy of her chosen Lord. One day, Periyalwar caught her in the act. Distressed that the garland was contaminated by human use (Echil), he prepared a fresh garland for the deity. That night, Lord Vatapatrasayi appeared in Periyalwar's dream and rejected the fresh garland, declaring: \"I find joy only in the garlands fragrant with Kothai's devotion.\" From that day, she was venerated as Chudikuduttha Sudarkodi The Margazhi Pavai Nonbu: During the sacred month of Margazhi, Andal performed the ancient Pavai vow, assuming the persona of a Gopi in Vrindavan. She woke her companion maidens at dawn, went to the river to bathe, and composed thirty immortal verses—the Thiruppavai—praying for the ultimate spiritual gift: eternal, uninterrupted service (Kainkaryam) at the feet of Krishna The Divine Wedding at Srirangam: As Andal reached marriageable age, her longing for Lord Ranganatha of Srirangam became unbearable. Lord Ranganatha appeared to the priests of Srirangam in a dream, commanding them to bring Andal to Srirangam in a royal palanquin as His bride. When the bridal procession arrived at the sanctum of Srirangam, Andal stepped onto the serpent bed of Adisesha, embraced the lotus feet of Lord Ranganatha, and merged completely into His divine icon before the eyes of her father and thousands of devotees"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Andal accepted her foster father, Periyalwar, as her Acharya, learning the secrets of Vedantic philosophy and Krishna Bhakti from him"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Merged physically into the icon of Lord Ranganatha at Srirangam at a young age, attaining eternal union with her Divine Husband"
        ]
      }
    ],
    legend: {
      title: "Thiruppavai & Bhu Devi's Incarnation",
      text: "Andal is recognized as the direct avatar of Bhu Devi (Mother Earth). Legend states that Bhu Devi asked Lord Varaha how finite souls bound in Samsara could easily reach Him. The Lord replied that remembering His name, offering flowers, and chanting His praise was sufficient. Bhu Devi took birth as Andal to personally demonstrate this easy path of surrender (Laghupaya) through the thirty verses of Thiruppavai"
    },
    works: [
      {
        name: "Thiruppavai",
        pasurams: 30,
        language: "Tamil"
      },
      {
        name: "Nachiyar Thirumozhi",
        pasurams: 143,
        language: "Tamil"
      }
    ],
    preservation: "Formulated the definitive model of Madhurya Bhava (Bridal Mysticism) within Visishtadvaita. Her Thiruppavai serves as a practical guide for daily morning prayer (Anusandhanam) across all Vaishnava households",
    bhaktiBhava: "Nayaki Bhava / Madhurya Bhava (Viewing the soul as the female bride and Narayana as the sole male groom). Her philosophy centers on Purushakara Prapatti and Kainkarya-Prarthana (praying exclusively for divine service)",
    associatedDesams: ["srivilliputhur", "srirangam", "tirupati", "thirumaliruncholai", "ayodhya"],
    verse: {
      work: "Thiruppavai, Pasuram 29 (Cittram Sirukale)",
      tamil: "சிற்றஞ் சிறுகாலே வந்துன்னைச் சேவித்து உன்\nபொற்றாமரை அடியே போற்றும் பொருள்கேளாய்\nபெற்றம் மேய்த்து உண்ணும் குலத்தில் பிறந்து நீ\nகுற்றேவல் எங்களைக் கொள்ளாமல் போகாது\nஇற்றைப் பறை கொள்வான் அன்று காண் கோவிந்தா !\nஎற்றைக்கும் ஏழேழ் பிறவிக்கும் உன்றன்னோடு\nஉற்றோமே ஆவோம் உனக்கேநாம் ஆட்செய்வோம்\nமற்றைநம் காமங்கள் மாற்றேலோர் எம்பாவாய்",
      translit: "Cittram sirukale vanthunnai sevithu un Potthamarai adiye potthum porul kelay Pettham meythu unnum kulathil piranthu nee Kuttreval engalaik kollamal pogadhu Itthraip parai kolvan andru kan Govinda! Ettraikkum ezhezhu piravikkum unrannodu Utthrome avom unakkenaam atcheyvom Matthrai nam kamangal matthrelor empavay",
      wordMeanings: [
        ["Cittram sirukale", "In the very early dawn"],
        ["Vanthu", "coming"],
        ["Unnai sevithu", "worshipping You"],
        ["Un potthamarai adiye", "Your golden lotus feet"],
        ["Potthum porul kelay", "hear the true purpose of our praise"],
        ["Pettham meythu", "grazing cows"],
        ["Unnum", "eating food"],
        ["Kulathil piranthu", "being born in our simple cowherd clan"],
        ["Nee", "You"],
        ["Kuttreval", "intimate personal service (Kainkaryam)"],
        ["Engalaik kollamal", "without accepting from us"],
        ["Pogadhu", "cannot leave"],
        ["Itthraip parai", "temporary drum/reward for the vow"],
        ["Kolvan andru kan", "is not the real objective, see!"],
        ["Govinda", "Oh Lord Govinda!"],
        ["Ettraikkum", "For all time"],
        ["Ezhezhu piravikkum", "for seven times seven future births"],
        ["Unrannodu", "with You"],
        ["Utthrome avom", "we shall remain inextricably bound in relationship"],
        ["Unakkenaam atcheyvom", "we shall render service exclusively to You alone"],
        ["Matthrai nam kamangal", "all our other worldly desires"],
        ["Matthru", "eradicate completely!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This penultimate verse of Thiruppavai reveals the inner core of the entire text. Andal clarifies that the outer pretext of the vow—obtaining a drum (Parai)—was just a ritual cover. The soul's true, ultimate prayer (Porul) is to serve Lord Govinda exclusively (Unakkenaam Atcheyvom) across all future births, while having all selfish, non-godly desires (Matthrai Kamangal) completely eradicated"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Seshathvam (the soul's inherent property of belonging to God) and Ananya-Arha-Seshathvam (belonging only to God and no one else). The phrase Unakkene Atcheyvom (\"We will serve only You\") reflects the essential nature of Purushartha (the ultimate human goal)"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai and Ramanuja held this verse in highest esteem. Ramanuja was so deeply moved by Thiruppavai that he was named Thiruppavai Jeeyar. The commentary notes that Ezhezhu Piravikkum (\"Across 49 births\") does not mean souls desire re-birth; rather, it emphasizes that even if rebirth occurs due to divine will, the relationship with Narayana remains unbroken and eternal"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing gracefully in a gentle three-bend posture (Tribhanga) or seated next to Lord Ranganatha/Vatapatrasayi",
        mudras: "Left arm resting gracefully at her side (Lola Hasta), right hand holding a fresh parrot (Kili) made of green leaves or a lotus flower",
        garments: "Dressed in exquisite bridal silk sarees, featuring her iconic side-tilted hair bun (Kondai) adorned with floral garlands, wearing traditional South Indian bridal jewelry and Urdhva Pundra",
        idol: "At Srivilliputhur, Andal's Moolavar idol captivates pilgrims with her majestic yet gentle bridal posture, standing alongside Rangamannar (Lord Ranganatha) and Garuda"
      },
      videoSearches: [
        "Andal Thiruppavai Detailed Upanyasam Velukkudi Krishnan",
        "Cittram Sirukale Pasuram Vyakhyanam Karunakarachariar",
        "Nachiyar Thirumozhi Varanam Aayiram Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  thondaradippodi: {
    order: 10,
    epithets: ["Vipranarayanan", "Bhaktanghri Renu", "Mandangudi Piran"],
    birthMonth: "Margazhi (Dhanur)",
    birthStar: "Kettai (Jyeshtha)",
    tithi: "Krishna Paksha Chaturthi",
    birthplace: {
      name: "Thirumandangudi",
      district: "Thanjavur District, Tamil Nadu"
    },
    amsam: "Vaijayanti (The celebrated long garland of fresh wildflowers worn by Sriman Narayana)",
    era: {
      academic: "c. 8th–9th Century CE",
      contemporaries: "Devadasi Devadevi (Historical figure in his narrative), Chola King of Uraiyur/Srirangam"
    },
    timeline: [
      {
        when: "Vedic Birth & Garden Kainkaryam",
        event: "Born in a pious Chola-country Brahmin family at Thirumandangudi, moving to Srirangam to cultivate a flower garden for Lord Ranganatha"
      },
      {
        when: "Entrapment by Devadevi",
        event: "Falling under the spell of the courtesan Devadevi through her pride and vow to break his ascetic austerity"
      },
      {
        when: "Total Ruin & Expulsion",
        event: "Spending all his wealth and being thrown out of her house when penniless"
      },
      {
        when: "Intervention of Lord Ranganatha",
        event: "The Lord assuming the form of Vipranarayanan's servant (Azhagan) and delivering a sacred golden vessel from the Srirangam temple to Devadevi"
      },
      {
        when: "Royal Arrest & Imprisonment",
        event: "Accused of stealing the temple's golden vessel and imprisoned by the King"
      },
      {
        when: "Divine Vindication",
        event: "Lord Ranganatha appearing in the King's dream to reveal Vipranarayanan's innocence"
      },
      {
        when: "Repentance & Transformation",
        event: "Taking the name Thondaradippodi, devoting his remaining life to absolute Bhagavata Kainkaryam"
      },
      {
        when: "Composition of Thirumaalai & Thirupalliyezhuchi",
        event: "Authoring forty-five verses of fierce devotion and ten awakening hymns"
      },
      {
        when: "Attainment of Liberation",
        event: "Merging into the eternal light of Lord Ranganatha"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born under the name Vipranarayanan in Thirumandangudi, he was thoroughly educated in the Vedas. Desiring complete detachment from worldly affairs, he settled in Srirangam. Following the tradition of Periyalwar, he created a beautiful flower garden (Nandavanam) and spent his days weaving fresh garlands for Lord Ranganatha. He maintained strict celibacy (Brahmacharya) and avoided all secular temptations"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Nandavana Kainkaryam (Garland service to Ranganatha) and Bhagavata-Thondu (Servitude to the dust of the feet of Lord Narayana's devotees)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Entrapment by Devadevi: A beautiful courtesan named Devadevi passed by his garden. Annoyed that Vipranarayanan did not even raise his eyes to look at her beauty, she made a wager with her sister that she could break his celibacy and make him her slave. Disguising herself as a devout ascetic, she entered his service. Gradually winning his trust over months, she cast her romantic spell over him. Vipranarayanan became completely infatuated, abandoning his daily prayers and garden service to live at her house. Once his money was exhausted, Devadevi's mother threw him out into the streets The Golden Vessel Miracle: Pitying His fallen devotee, Lord Ranganatha took the form of a young temple servant named Azhagan. He visited Devadevi's house at night, carrying a large golden vessel (Vattil) stolen from the Srirangam inner sanctum, presenting it to her as a gift from Vipranarayanan. Delighted by the gold, Devadevi welcomed Vipranarayanan back. The next morning, temple priests discovered the golden vessel missing. A search led to Devadevi's house, where Vipranarayanan was arrested for royal theft and cast into prison Divine Vindication & Re-awakening: That night, Lord Ranganatha appeared in a dream to the Chola King, revealing that Vipranarayanan was completely innocent and that He Himself had orchestrated the event to free His devotee from illusion. Released from prison, Vipranarayanan was overwhelmed with repentance. Realizing the depth of God's unconditioned mercy (Nirupadhika Kripa), he wept, washed the feet of all Vaishnava devotees, consumed that holy water, and declared himself Thondaradippodi (\"The dust of the feet of God's servants\")"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Accepted Lord Ranganatha directly as his savior and Acharya, attributing his rescue from sin entirely to divine grace"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Having authored Thirumaalai and Thirupalliyezhuchi, he spent his remaining years in complete, humble service at Srirangam before ascending to Paramapadam"
        ]
      }
    ],
    legend: {
      title: "The Power of Thirumaalai",
      text: "Sri Vaishnava tradition states: \"Thirumaalai Ariyadaar, Thirumalai Ariyadaar\" (\"One who does not know the hymn Thirumaalai, does not know Lord Narayana\"). Thondaradippodi Azhwar's forty-five verses express an uncompromising, polemical defense of Ranganatha's supreme mercy, asserting that even the greatest sinner is saved the instant he utters the name of Narayana"
    },
    works: [
      {
        name: "Thirumaalai",
        pasurams: 45,
        language: "Tamil"
      },
      {
        name: "Thirupalliyezhuchi",
        pasurams: 10,
        language: "Tamil"
      }
    ],
    preservation: "Formulated the liturgy for the morning awakening ritual (Suprabhatam/Thirupalliyezhuchi) in Vaishnava temples. He fiercely condemned non-Vedic sects and superficial ritualism",
    bhaktiBhava: "Bhagavata-Dasya / Dasa-Dasa-Bhava (Servitude to the servants of God) and Naichyanusandhanam (Deep personal humility and acknowledgment of one's own shortcomings)",
    associatedDesams: ["srirangam"],
    verse: {
      work: "Thirumaalai, Pasuram 2 (Pachai Mamalai Poleni)",
      tamil: "பச்சை மாமலை போல்மேனி பவளவாய் கமலச்செங்கண்\nஅச்சுதா அமரரேறே ஆயர்தம் கொழுந்தே என்னும்\nஇச்சுவை தவிர யான்போய் இந்திர லோகம் ஆளும்\nஅச்சுவை பெறினும் வேண்டேன் அரங்கமா நகருளானே !",
      translit: "Pachai mamalai pol meni pavalavay kamalaccengan Achutha amarar ere ayartham kozhunthe ennum Ichuvai thavira yanpoy indhira lokam aalum Achuvai perinum venden Arangama nagarulane!",
      wordMeanings: [
        ["Pachai mamalai pol", "Resembling a huge emerald-green mountain"],
        ["Meni", "divine body"],
        ["Pavalavay", "coral-red lips"],
        ["Kamala cchengan", "red lotus-like eyes"],
        ["Achutha", "Oh infallible Lord Achytha!"],
        ["Amarar ere", "Oh King of the eternal gods!"],
        ["Ayartham kozhunthe", "Oh tender sprout/leader of the cowherds!"],
        ["Ennum", "thus praising"],
        ["Ichuvai thavira", "apart from this divine sweetness"],
        ["Yan poy", "I going"],
        ["Indhira lokam aalum", "ruling over the celestial realm of Lord Indra"],
        ["Achuvai perinum", "even if that alternative pleasure were granted"],
        ["Venden", "I do not desire it"],
        ["Arangama nagarulane", "Oh Lord residing in the great sacred city of Srirangam!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Thondaradippodi Azhwar compares Lord Ranganatha's emerald-hued form (Pachai Mamalai) to the highest spiritual nectar. He forcefully declares that contemplating the physical beauty of Ranganatha at Srirangam is so profoundly intoxicating that even if he were offered sovereign rule over Indra's heavenly paradise (Indira Lokam), he would reject it without a second thought"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Prathyaksha Anubhava-Rasatvam (the intrinsic experiential sweetness of Brahman). In Visishtadvaita, liberation (Mukthi) is not a void or absorption into featureless consciousness, but the active enjoyment of God's glorious attributes and form (Kalyana Guna and Divya Mangala Vigraha)"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai notes that this verse proves that Srirangam on earth is superior to Sri Vaikuntham in heaven, because here the Lord exhibits His supreme accessibility (Saulabhya) while reclining on Adisesha, allowing finite sinners to gaze upon His coral lips and lotus eyes"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in a posture of deep humility, holding a garden hoe (Kottu) and a flower basket (Poomudai) used for gathering blossoms",
        mudras: "Hands carrying garden implements or held in Anjali Mudra near his chest with a downward gaze reflecting deep repentance",
        garments: "Simple traditional Brahmin attire, marked with twelve prominent Urdhva Pundra (tilak) marks, adorned with a woven flower garland and Tulasi beads",
        idol: "At Srirangam and Thirumandangudi, his Moolavar icon portrays him as the humble gardener saint whose life was transformed by Lord Ranganatha's unconditioned grace"
      },
      videoSearches: [
        "Thondaradippodi Azhwar Thirumaalai Velukkudi Krishnan",
        "Pachai Mamalai Poleni Pasuram Vyakhyanam Karunakarachariar",
        "Thirupalliyezhuchi and Thondaradippodi Vaibhavam Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  thiruppaan: {
    order: 11,
    epithets: ["Paanar", "Munivahana", "Kavishwara", "Amalanadhipiran-Kara"],
    birthMonth: "Karthigai (Vrischika)",
    birthStar: "Rohini",
    tithi: "Sukla Paksha Saptami",
    birthplace: {
      name: "Uraiyur (Thiruuraiyur, ancient Chola capital, modern Tiruchirappalli)",
      district: "Tiruchirappalli District, Tamil Nadu",
      kshetramId: "uraiyur"
    },
    amsam: "Srivatsa (The auspicious mark of divine golden hair residing eternally on Lord Narayana's chest)",
    era: {
      academic: "c. 8th–9th Century CE",
      contemporaries: "Lokasaranga Muni (High Priest of Srirangam), Chola Rulers"
    },
    timeline: [
      {
        when: "Ayoni Discovery & Musician Lineage",
        event: "Discovered as an infant in a paddy field at Uraiyur and raised by a pious family belonging to the musical Paanar community"
      },
      {
        when: "Excluded Social Status & Distant Worship",
        event: "Being barred from crossing the sacred Kaveri River into Srirangam due to caste norms, playing his Veena on the southern banks of the river while gazing toward the temple tower"
      },
      {
        when: "The Stone Incident with Lokasaranga Muni",
        event: "Lokasaranga Muni throwing a stone to move him out of the path, inadvertently striking Thiruppaan's forehead and causing it to bleed"
      },
      {
        when: "Bleeding Deity Miracle",
        event: "Lokasaranga entering the Srirangam sanctum to find Lord Ranganatha's icon bleeding from the exact same spot on the forehead"
      },
      {
        when: "The Divine Command (Munivahana)",
        event: "Lord Ranganatha commanding Lokasaranga Muni to carry Thiruppaan into the sanctum upon his own shoulders"
      },
      {
        when: "Composition of Amalanadhipiran",
        event: "Singing ten immortal verses describing Lord Ranganatha's physical form from feet to crown (Padadi Kesham)"
      },
      {
        when: "Physical Absorption into the Deity",
        event: "Merging physically into the divine icon of Lord Ranganatha before all present"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Thiruppaan Azhwar manifested spontaneously in a rice field in Uraiyur, the ancient Chola capital. He was taken in and raised by childless parents belonging to the Paanar musician community. Inheriting an incredible mastery of music and stringed instruments (Veena), he dedicated his musical talent exclusively to praising Sriman Narayana"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Veena Gana Kainkaryam (Musical devotion through stringed instrument) and Padadi-Kesha Dhyanam (Systematic contemplation of God's form from foot to head)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Devotion at the Banks of Kaveri: Because social norms of the era prohibited members of the Paanar community from entering the holy temple town of Srirangam, Thiruppaan stood every day on the southern bank of the Kaveri River. Facing the direction of the Srirangam sanctum, he played his Veena in deep ecstasy, weeping tears of love for Lord Ranganatha The Incident with Lokasaranga Muni: One morning, Lokasaranga Muni, the revered high priest of Srirangam, approached the river carrying sacred water (Theertham) for the Lord's morning bath. Seeing Thiruppaan lost in musical trance blocking the path, Lokasaranga called out to him. Absorbed in divine consciousness, Thiruppaan did not hear. To move him, Lokasaranga threw a small pebble toward him. The pebble struck Thiruppaan's forehead, causing blood to trickle down. Waking from his trance and realizing he had disrupted the high priest, Thiruppaan bowed humbly and withdrew The Bleeding Sanctum & Munivahana: When Lokasaranga Muni entered the inner sanctum of Srirangam to perform the ritual bath, he was horrified to see blood trickling from the forehead of the main deity, Lord Ranganatha. Prostrating in agony, he prayed for forgiveness. Lord Ranganatha spoke from the icon: \"You threw a stone at My pure devotee Thiruppaan, who lives on the riverbank. His pain is My pain. If you wish to atone for your sin, carry him into My sanctum upon your own shoulders!\" The Singing of Amalanadhipiran & Absorption: Overwhelmed by remorse, Lokasaranga Muni rushed to the riverbank, explained the Lord's decree, and despite Thiruppaan's humble protests, hoisted the saint onto his shoulders. Carried into the inner sanctum as Munivahana (\"He whose vehicle was a sage\"), Thiruppaan opened his eyes and beheld the transcendent form of Lord Ranganatha reclining on Adisesha. Out of his mouth poured ten immortal verses—Amalanadhipiran—describing the beauty of the Lord's feet, garments, navel, chest, neck, lips, eyes, and crown. Concluding the tenth verse with the declaration \"My eyes that have seen my Lord Ranganatha will see nothing else!\", he stepped forward and absorbed physically into the deity of Lord Ranganatha"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Honored by Lokasaranga Muni as an exalted spiritual master; accepted Lord Ranganatha directly as his ultimate goal and refuge"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Merged physically into the Moolavar icon of Lord Ranganatha in Srirangam, leaving behind ten verses that capture the essence of divine beauty"
        ]
      }
    ],
    legend: {
      title: "The Meaning of Munivahana & Universal Equality",
      text: "The miracle of Thiruppaan Azhwar being carried on the shoulders of the high priest Lokasaranga Muni is the ultimate Sri Vaishnava refutation of caste-based discrimination. It established the core Visishtadvaita doctrine that a true devotee of God (Bhagavata), regardless of birth, is worthy of highest worship even by the most exalted scholars"
    },
    works: [
      {
        name: "Amalanadhipiran",
        pasurams: 10,
        language: "Tamil"
      }
    ],
    preservation: "Formulated the primary Sri Vaishnava meditation text for visual contemplation (Divya Mangala Vigraha Dhyanam). Vedanta Desika honored this work by writing a comprehensive commentary titled Munivahana Bhogham",
    bhaktiBhava: "Divya Mangala Vigraha Anubhava (Intense aesthetic and spiritual absorption in God's physical beauty). His work demonstrates Ananya-Drishtitvam (singleness of vision)",
    associatedDesams: ["srirangam", "uraiyur"],
    verse: {
      work: "Amalanadhipiran, Pasuram 10 (Kondal Vannanaik Konda)",
      tamil: "கொண்டல் வண்ணனைக் கோவலனாய் வெண்ணெய்\nஉண்ட வாயன் என் உள்ளம் கவர்ந்தானை\nஅண்டர் கோன் அணி அரங்கன் என் அமுதினைக்\nகண்ட கண்கள் மற்றொன்றினைக் காணாவே !",
      translit: "Kondal vannanaik kovalanay venney Unda vayan en ullam kavarthanai Andar kon ani Arangan en amudhinai Kanda kangal mattrondrinaik kanave!",
      wordMeanings: [
        ["Kondal vannanai", "He who possesses the blue hue of a rain-bearing water cloud"],
        ["Kovalanay", "who manifested as a simple cowherd (Krishna)"],
        ["Venney unda vayan", "possessing the mouth that ate stolen butter"],
        ["En ullam kavarthanai", "who stole my heart away completely"],
        ["Andar kon", "the Sovereign Lord of the celestial gods"],
        ["Ani Arangan", "Lord Ranganatha residing in beautiful Srirangam"],
        ["En amudhinai", "my sweet immortal nectar"],
        ["Kanda kangal", "my eyes which have beheld Him"],
        ["Mattrondrinai", "any other material or spiritual object"],
        ["Kanave", "shall never, ever see again!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "The climax of Thiruppaan Azhwar's life and work. Having contemplated every limb of Lord Ranganatha from His lotus feet to His radiant crown, the saint declares that his physical and spiritual vision is permanently saturated. His eyes, having drunk the nectar of Ranganatha (En Amudhinai), possess no remaining capacity or desire to look at anything else in creation"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Represents Svarupa-Siddhi (the final realization of the soul's nature). When the soul experiences the Supreme Brahman (Niratisaya Ananda), all lesser material attractions (Prakriti-Guna) instantly evaporate"
        },
        {
          heading: "Commentarial Insights",
          text: "Vedanta Desika in Munivahana Bhogham notes that this verse represents the absolute terminal point of Bhakti-Yoga. The moment Thiruppaan uttered the word Kanave (\"Shall never see\"), his physical body dissolved into the divine light of Ranganatha, proving that direct experience of God (Darsana) leads to immediate liberation (Mukthi)"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in Anjali Mudra or holding a Veena across his chest, often depicted seated upon the shoulders of Lokasaranga Muni",
        mudras: "Hands playing the strings of a Veena or joined in tears of devotion (Anjali Mudra)",
        garments: "Dressed in simple cotton garments, wearing Urdhva Pundra (tilak) marks, adorned with a fresh Tulasi bead necklace",
        idol: "At Srirangam and Uraiyur, Thiruppaan Azhwar's Moolavar shrine depicts him in ecstatic adoration, reflecting his eternal oneness with Lord Ranganatha"
      },
      videoSearches: [
        "Thiruppaan Azhwar Amalanadhipiran Velukkudi Krishnan",
        "Kondal Vannanaik Konda Pasuram Vyakhyanam Karunakarachariar",
        "Munivahana Vaibhavam and Thiruppaan Life Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  thirumangai: {
    order: 12,
    epithets: [
      "Kaliyan",
      "Parakalan",
      "Thirumangai Mannan",
      "Arattamukki",
      "Aalivallanal",
      "Mangaiyarkon",
      "Nalkavaperumal"
    ],
    birthMonth: "Karthigai (Vrischika)",
    birthStar: "Krithigai",
    tithi: "Sukla Paksha Purnima",
    birthplace: {
      name: "Thirukuraiyalur",
      district: "Mayiladuthurai District, Tamil Nadu"
    },
    amsam: "Sharanga (The invincible Divine Bow of Sriman Narayana)",
    era: {
      academic: "Late Chola/Pallava era (c. 8th Century CE)",
      contemporaries: "Kumudavalli Nachiyar (His wife and spiritual catalyst), Thirugnana Sambandar (Famous Shaivite saint with whom he debated), Pallava King Nandivarman II"
    },
    timeline: [
      {
        when: "Chieftain Birth & Royal Career",
        event: "Born as Neelan to a Kallar chieftain family at Thirukuraiyalur, rising to become a military general and King of Thirumangai under the Chola empire"
      },
      {
        when: "Encounter with Kumudavalli",
        event: "Falling in love with Kumudavalli Nachiyar, who set two non-negotiable marriage conditions: becoming a initiated Vaishnava (Pancha Samskaram) and feeding 1008 Vaishnavas daily for a year"
      },
      {
        when: "Highway Robbery for Kainkaryam",
        event: "Running out of royal funds, turning into a highway robber to rob the rich to continue feeding devotees"
      },
      {
        when: "The Robbery of the Divine Couple",
        event: "Intercepting a newlywed couple in the forest of Thirunamamangai, who were Sriman Narayana and Lakshmi in disguise"
      },
      {
        when: "The Ashtakshara Mantra Initiation",
        event: "Being unable to lift the bundle of stolen jewels, Lord Narayana leaning down and whispering the sacred Om Namo Narayanaya mantra into his right ear"
      },
      {
        when: "Transformation into Kaliyan",
        event: "Outpouring of Periya Thirumozhi starting with Vaadinen Vaadi"
      },
      {
        when: "Temple Architecture & Nagapattinam Gold Robbery",
        event: "Stealing the golden Buddha statue at Nagapattinam to construct the outer defensive walls (Thiruchutru) of Srirangam"
      },
      {
        when: "Ascension",
        event: "Merging into the divine realm at Thirukkurungudi"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born as Neelan in Thirukuraiyalur, he was a warrior of exceptional physical strength and military intellect. He rose to become a commander in the Chola army and was rewarded with governance over the region of Thirumangai, earning the title Thirumangai Mannan. He lived a life of royal luxury, martial glory, and sensory enjoyment"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Kshethra-Atanam (Mapping and glorifying 86 Divya Desams), Alaya-Nirmanam (Building massive temple fortresses like the Srirangam enclosure walls), and Literary Defense of Visishtadvaita"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Vows of Kumudavalli: Neelan fell in love with Kumudavalli, a physician's adopted daughter who was a devout Vaishnava. She agreed to marry him only on two conditions: he must undergo formal Sri Vaishnava initiation (Pancha Samskaram) from an Acharya, and he must feed 1,000 Vaishnava devotees (Tadiyaradhana) every single day for a full year. Neelan happily accepted, spending his royal treasury to fulfill her wish Highway Robbery & The Sacred Initiation: When royal taxes went unpaid due to funding Tadiyaradhana, the Chola king imprisoned Neelan. After paying his debts through hidden treasure revealed by Varadaraja Perumal, Neelan took to highway robbery with four trusted companions to continue feeding devotees. One night, a wealthy newlywed couple walked through the forest of Thirunamamangai wearing dazzling jewels. Neelan ambushed them, stripped their ornaments, and tied them in a bundle. However, when he tried to lift the bundle, it was miraculously glued to the earth. Drawing his sword, Neelan demanded to know what magic spell (Mantra) the groom had cast. The groom—who was Lord Narayana Himself—smiled and said, \"Come closer, I will teach you the mantra.\" Leaning down, the Lord whispered the sacred eight-syllabled Ashtakshara Mantra (Om Namo Narayanaya) into Neelan's right ear. Instantly, all material delusion vanished. Neelan dropped his sword, fell at the Lord's feet, and transformed into the great saint Thirumangaiazhwar The Robbery of Nagapattinam Buddha: To construct the vast outer rampart walls of the Srirangam temple, Thirumangai needed vast wealth. He sailed to Nagapattinam, outwitted the guardians of a Buddhist monastery, stole a solid gold statue of Buddha, melted it down, and used the gold exclusively to pay laborers for building the Srirangam temple walls Debate with Thirugnana Sambandar: At Sirkazhi, Thirumangai met the famed Shaivite child-saint Thirugnana Sambandar. Challenged to a poetic contest, Thirumangai sang his verse Oru Kuralay Iru Sudaray. Astounded by Thirumangai's poetic genius and Vedantic depth, Sambandar conceded defeat and gifted his personal trident (Vel) to Thirumangai"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Initiated into Pancha Samskaram by Thirukannapuram Acharya; received direct Mantra-Upadesha from Sriman Narayana Himself"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Spent his final years performing intense kainkaryam at Thirukkurungudi (Nambi Temple), where he eventually absorbed into the deity"
        ]
      }
    ],
    legend: {
      title: "The Six Angas of Dravida Veda",
      text: "While Nammalwar's four works are revered as the four Dravida Vedas, Thirumangai Azhwar's six works (Periya Thirumozhi, Thirukurunthandagam, Thirunedunthandagam, Tiruvezhukurrirukkai, Siriya Thirumadal, Periya Thirumadal) are designated as the Vedangas (six auxiliary limbs) of the Tamil Veda"
    },
    works: [
      {
        name: "Periya Thirumozhi",
        pasurams: 1084,
        language: "Tamil"
      },
      {
        name: "Thirukurunthandagam",
        pasurams: 20,
        language: "Tamil"
      },
      {
        name: "Thirunedunthandagam",
        pasurams: 30,
        language: "Tamil"
      },
      {
        name: "Tiruvezhukurrirukkai",
        pasurams: 1,
        language: "Tamil"
      },
      {
        name: "Siriya Thirumadal & Periya Thirumadal",
        language: "Tamil"
      }
    ],
    preservation: "Built physical temple fortifications at Srirangam, instituted the annual Adhyayana Uthsavam (recitation festival of Divya Prabandham alongside Vedas at Srirangam), and defended Visishtadvaita against rival philosophies",
    bhaktiBhava: "Parakala Nayaki Bhava (Bridal longing characterized by bold, fearless pursuit of God) and Ashtakshara-Mahima (Glory of the Holy Name)",
    associatedDesams: [
      "srirangam",
      "tirupati",
      "badari",
      "naimisaranyam",
      "kanchi-varadaraja",
      "thirukkannapuram",
      "thirukkurungudi"
    ],
    verse: {
      work: "Periya Thirumozhi, Decad 1.1, Pasuram 1 (Vaadinen Vaadi)",
      tamil: "வாடினேன் வாடி வருந்தினேன் மனத்தால்\nபெருந்துய ரிடும்பையிற் பிறந்து\nகூடினேன் கூடியிள மென் முலையாரோடு\nஅவர்தரு சுகமே என்று இருந்தேன்\nதேடினேன் தேடித் திருவடைந்தேன்\nநின்றிரு வடியடை உய்வான்\nநாடினேன் நாடி நான் கண்டுகொண்டேன்\nநாராயணா என்னும் நாமமே !",
      translit: "Vaadinen vaadi varundhinen manatthalam Perunthuya ridumbaiyir piranthu Koodinen koodiyila men mulaiyarodu Avartharu sugame endru irundhen Thedinen thedit thiruvadainthen Nintiru vadiyadai uyvan Nadinen nadi nan kandu konden Narayana ennum naamame!",
      wordMeanings: [
        ["Vaadinen vaadi", "I withered and withered in distress"],
        ["Varundhinen manatthalam", "I grieved deeply in my mind"],
        ["Perunthuya ridumbaiyir piranthu", "being born in this birth of immense sorrow and affliction"],
        ["Koodinen koodi", "I indulged and united"],
        ["Ila men mulaiyarodu", "with young women"],
        [
          "Avartharu sugame endru irundhen",
          "believing that sensory pleasure offered by them was the highest happiness"
        ],
        ["Thedinen thedi", "I searched and searched relentlessly"],
        ["Thiru vadainthen", "and attained the divine grace of Lakshmi"],
        ["Nintiru vadiyadai uyvan", "seeking to reach Your sacred lotus feet for my soul's salvation"],
        ["Nadinen nadi", "I sought with intense yearning"],
        ["Nan kandu konden", "and I have discovered"],
        ["Narayana ennum naamame", "the supreme divine Name called 'Narayana'!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Thirumangai Azhwar outlines his spiritual transformation. He confesses his past life of worldly indulgence and sensory distraction. Through divine intervention, after endless searching for true peace, he discovered the ultimate secret for universal salvation: the sacred eight-syllabled name Narayana"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Nama-Sankirtanam and Tirumantra-Prabhavatvam (The supreme power of the Ashtakshara Mantra). In ViśiṣTLādvaita, the divine Name is non-different from the Lord Himself (Nami), acting as the most accessible vehicle for Prapatti"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai in his commentary notes that this verse mirrors the human condition in Samsara. The word Kandu Konden (\"I have discovered\") expresses the immense joy of a starving man finding a feast. The Name Narayana erases all past Karmic sins and instantly qualifies the soul for eternal grace"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in a heroic, martial posture (Veera Sthanakam) holding his royal sword (Khadga), shield (Khetaka), and spear/trident (Vel)",
        mudras: "Right hand holding a drawn sword or spear, left hand holding a shield or resting on his hip in a monarchical pose (Katyavalambita)",
        garments: "Dressed as a warrior-king with a royal turban/crown, wearing chest armor over Urdhva Pundra (tilak) marks, adorned with warrior anklets (Veera Kazhal) and Tulasi garlands",
        idol: "At Thirukuraiyalur and Srirangam, Thirumangai Azhwar's Moolavar icon presents a striking image of military majesty transformed by spiritual devotion, standing beside Kumudavalli Nachiyar"
      },
      videoSearches: [
        "Thirumangai Azhwar Periya Thirumozhi Velukkudi Krishnan",
        "Vaadinen Vaadi Pasuram Vyakhyanam Karunakarachariar",
        "Thirumangai Azhwar Life History and Miracles Ananthapadmanabhachariar"
      ],
      digitalTexts: [
        "Dravida Veda Repository — dravidaveda.org",
        "Project Madurai Texts — projectmadurai.org",
        "Koyil Archival Library — koyil.org"
      ]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  }
};

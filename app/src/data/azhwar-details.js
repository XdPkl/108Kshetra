/**
 * Azhwar details — saint-template enrichment (US-AZW-03, FR-91) merged onto
 * the base records by the data layer. Every field is optional: pages render
 * what exists and show the documented fallback where absent. Poigai Azhwar
 * follows the Product Owner's sample document verbatim in structure; the
 * remaining saints carry well-established traditional facts, with uncertain
 * granular fields deliberately left absent rather than guessed.
 *
 * Shape (all optional):
 *  order, epithets[], birthMonth, birthStar, tithi?,
 *  birthplace {name, district?, kshetramId?}, amsam?,
 *  era {academic?, contemporaries?} (base `period` remains the display era),
 *  timeline? [{when?, event}] (dossier §2.1 chronological life timeline),
 *  lifeHistory (string | {heading, paragraphs[]}) [],
 *  legend? {title?, text} (dossier §2.2 sthala puranam highlight),
 *  works [{name, pasurams?, language?}], preservation?, bhaktiBhava?,
 *  associatedDesams [kshetramId],
 *  verse {work?, tamil?, transliteration, meaning?, wordMeanings?, significance?,
 *         commentary? [{heading, text}], audio?} — absent `tamil` renders the
 *         original-script pending marker (see Reference Content caveats),
 *  visuals {iconography? (string | {posture, mudras, garments, idol}),
 *           videoSearches [], digitalTexts []},
 *  sources? [], photos [{src?|wiki?, alt, credit?}] (max 2)
 */
export const AZHWAR_DETAILS = {
  poigai: {
    order: 1,
    epithets: ['Sarovara Yogi', 'Kasara Yogi', 'Ayonisambhava', 'Sarovara Muni', 'Poigaiyar'],
    birthMonth: 'Aippasi (Ashvin/Kartika transition)',
    birthStar: 'Thiruvonam (Sravanam)',
    tithi: 'Sukla Paksha Navami',
    birthplace: {
      name: 'Thiruvekka (Kanchipuram) — born in a golden lotus in the temple pond of Sri Yathothakari Perumal',
      district: 'Kanchipuram District, Tamil Nadu',
      kshetramId: 'thiruvekka',
    },
    amsam: 'Kaumodaki — the divine mace (gada) of Lord Sriman Narayana',
    era: { academic: '5th–6th century CE', contemporaries: 'Bhoothath Azhwar, Pey Azhwar and the Pallava rulers of Kanchi' },
    timeline: [
      { when: 'Birth', event: 'Ayoni Sambhava — discovered inside a fresh golden lotus in the temple tank (Sardhotha Poigai) of Tiruvekka, Kanchipuram' },
      { when: 'Realisation', event: 'Natural enlightenment (Ayathna Jnana) free from embryonic contamination; direct contemplation of Para Vasudeva' },
      { when: 'The divine encounter', event: 'Meeting Bhoothath and Pey Azhwar in the dark corridor (Dehali) of Thirukoilur during a torrential storm' },
      { when: 'Composition', event: 'Lighting the Jnana Deepam — the lamp of knowledge — through the first verse of the Mudhal Thiruvanthadhi' },
      { when: 'Wanderings & mukthi', event: 'Travelling the Divya Desams of North and South India spreading Visishtadvaita precursor tenets, before merging into the divine radiance of the Lord' },
    ],
    lifeHistory: [
      {
        heading: 'Early Years & Spiritual Awakening',
        paragraphs: [
          'Unlike ordinary mortals subject to Garbha Vasam (confinement in a womb), Poigai Azhwar was an Ayoni Sambhava — one not born of a womb. He manifested spontaneously on a divine golden lotus blossoming in the pond adjacent to the Tiruvekka Yathothkari Perumal Temple in Kanchipuram.',
          'Blessed with Ayathna Jnana (effortless divine knowledge) from the instant of his manifestation, he required no earthly guru to instruct him in the Vedas, Upanishads or Agamas. He spent his early years immersed in intense yogic trance (samadhi) along the banks of the sacred water bodies of Kanchipuram.',
        ],
      },
      {
        heading: 'Core Seva / Kainkaryam',
        paragraphs: [
          'His primary kainkaryam was mental and vocal (Manasa and Vachika) — weaving garlands of Tamil verse (Thamizh Maalai) to elucidate the esoteric truths of the Sanskrit Vedas. He traversed the length and breadth of Tamilakam, visiting holy shrines without establishing permanent residence, living as an ascetic completely detached from secular affairs.',
        ],
      },
      {
        heading: 'Miracles & Historical Events',
        paragraphs: [
          'The central event in the life of Poigai Azhwar — and the foundational moment of the Azhwar prabandha tradition — is the divine encounter at Thirukkovilur (Thirukkovilur Dehali Anubhavam). Seeking shelter from a fierce, thunderous storm, Poigai Azhwar entered the narrow front corridor (Dehali) of a small residence in Thirukkovilur. The space was barely large enough for one person to lie down. Shortly thereafter Bhoothath Azhwar arrived seeking refuge; Poigai welcomed him, remarking, "One person can lie down; two can sit." Moments later Pey Azhwar arrived, and they adjusted once more — "Two can sit; three can stand."',
          'As the three saints stood together in pitch darkness, an overwhelming, invisible fourth presence pressed tightly against them. Recognising the supernatural weight and divine fragrance, Poigai Azhwar realised that Sriman Narayana himself had entered the corridor to enjoy the company of his highest devotees. To reveal this unseen guest, Poigai Azhwar lit the material universe as a lamp using the power of verse.',
        ],
      },
      {
        heading: 'Guru-Disciple Dynamics',
        paragraphs: [
          'Poigai Azhwar recognised Sriman Narayana as his sole ultimate Acharya (Narayana Parabrahma). He functioned as an early guru-figure to Thirumazhisai Azhwar, who was deeply influenced by the three Mudhal Azhwars during his spiritual transition from various philosophical systems back to Vaishnavism.',
        ],
      },
      {
        heading: 'Attainment of Paramapadam',
        paragraphs: [
          'Having fulfilled his divine mission of initiating the Dravida Veda era, Poigai Azhwar absorbed his physical form into the supreme light (Param Jyothi) of Sriman Narayana, concluding his earthly manifestation alongside Bhoothath and Pey Azhwar.',
        ],
      },
    ],
    legend: {
      title: 'Sthala Puranam & Legend Highlight — the miraculous Dehali of Thirukoilur',
      text: 'The narrow corridor (Dehali) of Thirukoilur remains the spiritual birthplace of Sri Vaishnava devotional literature. When Sriman Narayana pressed against the three Mudhal Azhwars in total darkness, it was not out of constraint but Saulabhya (divine accessibility) — the Supreme Lord seeking closeness with his devotees. The lighting of the lamp of wisdom by Poigai Azhwar transformed the dark room into an illumination of the entire cosmos.',
    },
    works: [{ name: 'Mudhal Thiruvanthathi', pasurams: 100, language: 'Tamil (Iyalpa / Nerisai Venba meter)' }],
    preservation: 'Pioneered the Dravida Veda tradition by proving that high philosophical truths (Vedanta) can be fully articulated in the vernacular Tamil language. He set the precedent for using poetic meter as a tool for contemplative bhakti-yoga; his verses served as a primary foundation for later commentators such as Periyavachan Pillai and Nampillai.',
    bhaktiBhava: 'Jnana-Garbha Bhakti — devotion rooted in profound intellectual and cosmological awareness. His philosophy highlights Karanatvam (Sriman Narayana as the cosmic Cause) and Saulabhya (his supreme accessibility).',
    associatedDesams: ['thiruvekka', 'thirukkovilur', 'tirupati'],
    verse: {
      work: 'Mudhal Thiruvanthathi 1',
      tamil: 'வையந் தகளியா வார்கடலே நெய்யாக\nவெய்ய கதிரோன் விளக்காக - செய்ய\nசுடராழியான் அடிக்கே சூட்டினேன் சொன்ன மாலை\nஇடராழி நீங்குகவே யென்று',
      transliteration: 'Vaiyam thagaliyaga var kadale neyyaga / Veyya kadiron vilakkaga - seyya / Sudarazhiyan adikke suttinen sonna maalai / Idarazhi neengugave yendru',
      wordMeanings: [
        ['Vaiyam', 'Earth/Universe'],
        ['Thagaliyaga', 'As the lamp bowl'],
        ['Var kadale', 'Expanding ocean'],
        ['Neyyaga', 'As the ghee'],
        ['Veyya kadiron', 'Hot/radiant sun'],
        ['Vilakkaga', 'As the burning wick/blaze'],
        ['Seyya', 'Red/luminous'],
        ['Sudar azhiyan', 'Lord holding the glowing Discus'],
        ['Adikke', 'At His divine feet'],
        ['Suttinen', 'I have offered/adorned'],
        ['Sonna maalai', 'Garland of words (verses)'],
        ['Idar azhi', 'Ocean of miseries/samsara'],
        ['Neengugave yendru', 'So that it may be eradicated entirely'],
      ],
      significance: 'Poigai lights an external lamp using the universe itself — earth as bowl, ocean as ghee, sun as flame — establishing that all of cosmic reality points entirely toward Narayana.',
      commentary: [
        { heading: 'Esoteric Meaning (Swaroopa Jnanam)', text: 'Poigai Azhwar constructs a cosmic lamp to dispel both the physical darkness in the corridor of Thirukoilur and the spiritual darkness (Ajnana) in human minds. The Earth represents the container of human experience, the oceans symbolise the boundless oil of love, and the Sun represents the concentrated light of intellect.' },
        { heading: 'Visishtadvaita Alignment', text: 'The verse establishes Sriman Narayana as the Koyil (abode) and ultimate master of the cosmos (Seshin). By addressing the Lord as Sudarazhiyan (the wielder of the Chakrathazhwar/Discus), he identifies the Supreme Being (Para Tattva) who actively removes obstacles (Virodhi Nivarana) for the Jiva.' },
        { heading: 'Commentarial Insights', text: 'Periyavachan Pillai in his commentary highlights that this verse demonstrates Paroksha Jnana (indirect knowledge elevated through devotion). The garland of words (Sonna Maalai) offered at the Lord\u2019s feet is non-different from flower garlands, establishing the doctrine that linguistic praise composed with devotion is an essential form of kainkaryam.' },
      ],
    },
    visuals: {
      iconography: {
        posture: 'Seated in Ardha Padmasana (half-lotus posture) or standing in Anjali Mudra within the Thirukoilur triad representation.',
        mudras: 'Jnana Mudra (index finger touching thumb, signifying the union of Jiva and Paramatma) on the right hand, with the left hand resting on the lap or folded in prayer (Anjali).',
        garments: 'Simple white ascetic loincloth (Vesti), prominent Urdhva Pundra (holy white clay marks) on twelve places of the body, adorned with sacred Tulasi beads and a lotus-seed garland.',
        idol: 'At the Tiruvekka shrine in Kanchipuram, Poigai Azhwar\u2019s Moolavar idol depicts him in a contemplative, meditative pose next to the temple tank, radiating serene Sattvic intensity.',
      },
      videoSearches: [
        'Poigai Azhwar Mudhal Thiruvanthadhi Upanyasam Velukkudi Krishnan',
        'Mudhal Azhwargal Vaibhavam Karunakarachariar',
        'Thirukoilur Dehali Anubhavam Ananthapadmanabhachariar',
      ],
      digitalTexts: [
        'Dravida Veda Repository — dravidaveda.org',
        'Project Madurai Texts — projectmadurai.org',
        'Koyil Archival Library — koyil.org',
      ],
    },
    sources: [
      'Dravida Veda Repository — dravidaveda.org',
      'Project Madurai Texts — projectmadurai.org',
      'Koyil Archival Library — koyil.org',
    ],
  },
  bhoothath: {
    order: 2,
    birthMonth: 'Aippasi',
    birthStar: 'Avittam (Dhanishta)',
    birthplace: { name: 'Thirukkadalmallai (Mamallapuram)', kshetramId: 'mahabalipuram' },
    amsam: 'The Kaustubha gem adorning the Lord\u2019s chest',
    lifeHistory: [
      'The second of the three Mudhal Azhwars, Bhoothath Azhwar too appeared from a temple-tank lotus and lived a life of single-minded devotion.',
      'He shared the rain-sheltered hermitage at Thirukkovilur with Poigai and Pey, where the Lord stood as their fourth companion. His hundred verses, the Irandam Thiruvanthathi, sing the Lord as the lamp that lights all creation.',
    ],
    works: [{ name: 'Irandam Thiruvanthathi', pasurams: 100 }],
    associatedDesams: ['mahabalipuram', 'thirukkovilur'],
  },
  pey: {
    order: 3,
    birthMonth: 'Aippasi',
    birthStar: 'Sathayam (Satabhisha)',
    birthplace: { name: 'Mylapore, Chennai — born in a temple-tank lotus' },
    amsam: 'The sword Nandaka',
    lifeHistory: [
      'The third of the Mudhal Azhwars, Pey Azhwar completed the trio sheltered by the Lord himself at Thirukkovilur on that rain-lit night.',
      'His Moondram Thiruvanthathi is celebrated as the first hymn to proclaim the Goddess as inseparable from the Lord\u2019s side — the first brightening of the Sri patham tradition in Tamil.',
    ],
    works: [{ name: 'Moondram Thiruvanthathi', pasurams: 100 }],
    associatedDesams: ['triplicane', 'thirukkovilur'],
  },
  thirumazhisai: {
    order: 4,
    birthMonth: 'Thai',
    birthStar: 'Magam (Magha)',
    birthplace: { name: 'Thirumazhisai, near Chennai' },
    amsam: 'The Sudarsana discus',
    lifeHistory: [
      'A philosopher-seeker, Thirumazhisai Azhwar probed Shaiva and Buddhist paths before his heart settled for ever on Sriman Narayana of Thiruvekka.',
      'So complete was his mastery over the Lord of Thiruvekkaa that when he left Kanchi in displeasure, the reclining Yathothkari rolled up like a mat and followed his devotee. His Thiruchanda Viruththam and Naanmugan Thiruvanthathi remain pillars of Tamil Vaishnava philosophy.',
    ],
    works: [
      { name: 'Thiruchanda Viruththam', pasurams: 120 },
      { name: 'Naanmugan Thiruvanthathi', pasurams: 96 },
    ],
    associatedDesams: ['thiruvekka'],
  },
  nammazhwar: {
    order: 5,
    birthMonth: 'Vaikasi',
    birthStar: 'Vishakam',
    birthplace: { name: 'Thirukkurugur (Azhwar Thirunagari)', kshetramId: 'alwar-thirunagari' },
    amsam: 'Vishvaksena, the Lord\u2019s commander',
    lifeHistory: [
      'Satakopa was born at Thirukkurugur and, by divine will, is said to have lived beneath the tamarind tree of that town in unbroken meditation from birth — without food, speech or movement — for sixteen years.',
      'Madhurakavi Azhwar\u2019s three Tamil questions drew him from silence; his three Tamil answers set out the whole of spiritual life. From that communion flowed his four works — crowned by Thiruvaymozhi, the Tamil Veda — making him the supreme Azhwar in whose line every Sri Vaishnava stands.',
    ],
    works: [
      { name: 'Thiruviruththam', pasurams: 100 },
      { name: 'Thiruvaasiriyam', pasurams: 3 },
      { name: 'Periya Thiruvanthathi', pasurams: 87 },
      { name: 'Thiruvaymozhi', pasurams: 1102 },
    ],
    associatedDesams: ['alwar-thirunagari'],
  },
  madhurakavi: {
    order: 6,
    birthMonth: 'Chithirai',
    birthStar: 'Chithirai',
    birthplace: { name: 'Thirukkolur', kshetramId: 'thirukkolur' },
    amsam: 'Vainateya — Garuda, the Lord\u2019s mount',
    lifeHistory: [
      'Travelling north on pilgrimage, Madhurakavi Azhwar saw a beam of extraordinary light blazing to the south and followed it to the tamarind tree of Thirukkurugur. There he posed three questions in Tamil — "if the tiny is born in the dead, and the dead in the tiny, which would one eat and which adore?" — and the young Nammazhwar\u2019s three answers made him a disciple for life.',
      'He sang only of his guru, never directly of any shrine: the eleven verses of Kanninun Siruththaambu, which the tradition recites before the Prabandham itself.',
    ],
    works: [{ name: 'Kanninun Siruththaambu', pasurams: 11 }],
    associatedDesams: ['alwar-thirunagari', 'thirukkolur'],
  },
  kulasekhara: {
    order: 7,
    birthplace: { name: 'Kerala — the Chera royal line' },
    lifeHistory: [
      'A Chera king who ruled righteously, Kulasekhara Azhwar\u2019s heart belonged entirely to Ranganatha of Srirangam and the Lord of Thiruppullani, reclining on the shore where Rama lay on darbha grass. Tradition tells how, when courtiers branded Vaishnavas as thieves, he proved their innocence by plunging his hand into a cobra basket — the Lord shielded his devotee.',
      'Renouncing the throne, he poured his royal longing into Perumal Thirumozhi, weeping for the darshan of Srirangam and Setu (Thiruppullani).',
    ],
    works: [{ name: 'Perumal Thirumozhi', pasurams: 105 }],
    associatedDesams: ['srirangam', 'thirupullani'],
  },
  periyazhwar: {
    order: 8,
    birthMonth: 'Aani',
    birthStar: 'Swathi',
    birthplace: { name: 'Srivilliputhur', kshetramId: 'srivilliputhur' },
    lifeHistory: [
      'Vishnuchitta was the pandit who strung garlands for Lord Vatapatrasayi of Srivilliputhur. Summoned to the Pandya court at Madurai, he defeated rival creeds and proclaimed the Lord himself as the supreme protector — whereupon the Lord was said to have smiled, earning him the title Periyazhwar.',
      'He sang the Lord\u2019s childhood as a mother would — cradling Krishna in Thiruppallandu and Periyazhwar Thirumozhi — and raised the foundling girl Kodhai (Andal) as his own daughter.',
    ],
    works: [
      { name: 'Thiruppallandu', pasurams: 12 },
      { name: 'Periyazhwar Thirumozhi', pasurams: 461 },
    ],
    associatedDesams: ['srivilliputhur'],
  },
  andal: {
    order: 9,
    birthMonth: 'Aadi',
    birthStar: 'Pooram (Poorva Phalguni)',
    birthplace: { name: 'Srivilliputhur — found as an infant in the temple tulsi garden', kshetramId: 'srivilliputhur' },
    amsam: 'Bhudevi, the Earth Goddess',
    lifeHistory: [
      'Found beneath the tulsi plants of Srivilliputhur and raised by Periyazhwar, Kodhai grew up so enamoured of the Lord that she wore the garlands meant for him before offering them — "soodik kodutha" Nachiyar, she who offered after wearing.',
      'Her thirty verses of the Thiruppavai vow and her Nachiyar Thirumozhi, trembling with bridal longing, end at Srirangam: she refused every earthly bridegroom and merged into Ranganatha himself.',
    ],
    works: [
      { name: 'Thiruppavai', pasurams: 30 },
      { name: 'Nachiyar Thirumozhi', pasurams: 143 },
    ],
    associatedDesams: ['srivilliputhur', 'srirangam'],
  },
  thondaradippodi: {
    order: 10,
    birthMonth: 'Margazhi',
    birthStar: 'Kettai (Jyeshtha)',
    birthplace: { name: 'Thirumandangudi, near Kumbakonam' },
    amsam: 'The Vaijayanti garland at the Lord\u2019s chest',
    lifeHistory: [
      'Vipra Narayana tended the flower garden of Srirangam, weaving garlands for Ranganatha alone. Disillusioned by the world, he took the name Thondaradippodi — the dust of the devotees\u2019 feet.',
      'His Thiruppalliyezhuchchi wakes the Lord each morning in the temple ritual to this day, and his Thirumaalai sings the sweetness of surrender to Ranganatha.',
    ],
    works: [
      { name: 'Thiruppalliyezhuchchi', pasurams: 10 },
      { name: 'Thirumaalai', pasurams: 45 },
    ],
    associatedDesams: ['srirangam'],
  },
  thiruppaan: {
    order: 11,
    birthMonth: 'Karthigai',
    birthStar: 'Rohini',
    birthplace: { name: 'Uraiyur (of the Paanar minstrel community)', kshetramId: 'uraiyur' },
    amsam: 'The Srivatsa mark on the Lord\u2019s chest',
    lifeHistory: [
      'A gifted minstrel of the Paanar community, Thiruppaan Azhwar lived across the Kaveri from Srirangam, singing the Lord\u2019s beauty without ever being permitted to cross. When he lingered in meditation on the river bank, Lokasaranga, the temple priest, carried him on his shoulders straight into the sanctum.',
      'Before Ranganatha, he sang ten verses — Amalanadhipiran — describing the Lord from feet to crown, and merged into the sacred feet he had praised.',
    ],
    works: [{ name: 'Amalanadhipiran', pasurams: 10 }],
    associatedDesams: ['srirangam', 'uraiyur'],
  },
  thirumangai: {
    order: 12,
    birthMonth: 'Karthigai',
    birthStar: 'Krithigai',
    birthplace: { name: 'Thirukkuraiyalur, near Sirkazhi' },
    amsam: 'The Sarngam bow of the Lord',
    lifeHistory: [
      'Neelan was a warrior-chief of Thirumangai whose heart the Lord of Thirukkurungudi captured. Tradition tells how he robbed a wedding procession to feed the assembled Vaishnavas — and how the bridegroom of that night was the Lord himself, revealing his divine form and granting Neelan the Vaishnava mantras.',
      'Kaliyan, as he then became, walked nearly the whole sacred geography: he sang of the most Divya Desams of any Azhwar, and built the great ramparts of Srirangam. His Periya Thirumozhi and four other works form the largest single body of the Prabandham.',
    ],
    works: [
      { name: 'Periya Thirumozhi' },
      { name: 'Thirukkurunthandakam', pasurams: 20 },
      { name: 'Thirunedunthandakam', pasurams: 30 },
      { name: 'Siriya & Periya Thirumadal' },
    ],
    associatedDesams: ['thirukkurungudi'],
  },
};

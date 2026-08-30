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
 *  birthplace {name, kshetramId?}, amsam?,
 *  era {academic?, contemporaries?} (base `period` remains the display era),
 *  lifeHistory [], works [{name, pasurams?}], bhaktiBhava?,
 *  associatedDesams [kshetramId],
 *  verse {work?, tamil, transliteration, meaning?, wordMeanings?, significance?, audio?},
 *  visuals {iconography?, videoSearches [], digitalTexts []},
 *  photos [{src?|wiki?, alt, credit?}] (max 2)
 */
export const AZHWAR_DETAILS = {
  poigai: {
    order: 1,
    epithets: ['Sarovara Yogi', 'Kasara Yogi', 'Ayonisambhava'],
    birthMonth: 'Aippasi (Ashvin/Kartika)',
    birthStar: 'Thiruvonam (Shravana)',
    tithi: 'Navami',
    birthplace: { name: 'Thiruvekka (Kanchipuram) — born in a golden lotus in the temple pond of Sri Yathothakari Perumal', kshetramId: 'thiruvekka' },
    amsam: "Lord Vishnu's holy conch, Panchajanya",
    era: { academic: '5th–6th century CE', contemporaries: 'Pallava rulers' },
    lifeHistory: [
      'Born non-womb (Ayonisambhava) inside a golden lotus blooming in the pond (Poigai) of Thiruvekka, Poigai Azhwar showed complete indifference to worldly existence from childhood. Driven purely by divine love, he wandered from shrine to shrine.',
      'His defining life event occurred in Thirukkovilur. During a torrential downpour, Poigai took shelter in the narrow corridor of a small hermitage that could barely fit one sitting person. Bhoothath Azhwar arrived — there was room for one to sit, two to stand — and then Pey Azhwar, so three stood together. In the pitch darkness a fourth presence was felt among them: the Supreme Lord himself, come to share their shelter. To visualise him, Poigai lit a lamp of poetic devotion — the Mudhal Thiruvanthathi.',
      'He attained eternal service (Paramapadam) by merging into the divine light of the Lord.',
    ],
    works: [{ name: 'Mudhal Thiruvanthathi', pasurams: 100 }],
    bhaktiBhava: 'Jnana-Bhakti — illumination of the mind through wisdom and devotion; he initiated the Tamil Prabandhic tradition.',
    associatedDesams: ['thiruvekka', 'thirukkovilur', 'kanchi-varadaraja', 'tirupati'],
    verse: {
      work: 'Mudhal Thiruvanthathi 1',
      tamil: 'வையந் தகளியா வார்கடலே நெய்யாக\nவெய்ய கதிரோன் விளக்காக, - செய்ய\nசுடராழி யானடிக்கே சூட்டினேன் சொல்மாலை\nஇடராழி நீங்குகவே என்று.',
      transliteration: 'Vaiyam thagaliye vaarkadale neyyaaga / Veyya kadiron vilakkaaga, - seyya / Sudaraazhi yaanadikke soottinen solmaalai / Idaraazhi neengugave endru.',
      wordMeanings: [
        ['Vaiyam', 'Earth'],
        ['Thagali', 'Lamp bowl'],
        ['Vaarkadal', 'Surging ocean'],
        ['Ney', 'Ghee'],
        ['Veyya Kadiron', 'Hot-rayed Sun'],
        ['Vilakku', 'Flame/Lamp'],
        ['Seyya Sudaraazhi', 'Lord holding the radiant discus'],
        ['Adikke', 'At His feet'],
        ['Soottinen Solmaalai', 'Offered this garland of words'],
        ['Idaraazhi Neengugave', 'May the ocean of sorrow vanish'],
      ],
      significance: 'Poigai lights an external lamp using the universe itself — earth as bowl, ocean as ghee, sun as flame — establishing that all of cosmic reality points entirely toward Narayana.',
    },
    visuals: {
      iconography: 'Seated in Anjali Mudra (folded hands), wearing a simple ascetic garment and Thiruman Kaappu.',
      videoSearches: ['Velukkudi Krishnan Mudhal Thiruvanthathi Upanyasam'],
      digitalTexts: ['Project Madurai — Nalayira Divya Prabandham'],
    },
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

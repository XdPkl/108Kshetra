/**
 * Dossier templates — full-depth shrine content for the Divya Desam dossier
 * population (PO documents #1-#108, Reference Content/). One entry per
 * kshetram whose dossier entry resolves to it; serial is the dossier number.
 * Fields not present fall back to the approved samples (templates.js) and
 * then to the V2 region enrichment (timings, legacy puranam, pasuram).
 *
 * Dossier serials that duplicate a temple already covered, or that do not
 * correspond to one of the site's 108 kshetram ids (e.g. Thirukachoor), are
 * intentionally omitted — see Reference Content/README.md.
 */
export const DOSSIER_TEMPLATES = {
 "uraiyur": {
  "serial": 2,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Uraiyur (suburb within Tiruchirappalli city), Tiruchirappalli District, Tamil Nadu. ~5 km from Trichy Railway Station. GPS Coordinates: 10.8291° N, 78.6756° E",
   "vimanam": "Kalyana Vimanam",
   "theertham": "Kalyana Theertham (Kalyana Pushkarini)",
   "sthalaVriksham": "Nandi Tree / Uchiyanthi Tree",
   "posture": "Posture: Nindra Thirukkolam (Standing Posture) | Orientation: Facing North (facing Srirangam, to watch over Lord Ranganatha)",
   "orientation": "Facing North"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "அழகிய மணவாளன் / சுந்தரராஜன்",
     "sanskrit": "सुन्दरजामातृ பெருமாள்",
     "translit": "Azhagiya Manavalan / Sundararajan"
    },
    "etymology": "Named Azhagiya Manavalan (\"The Divine Handsome Bridegroom\") because Lord Ranganatha of Srirangam traveled directly to Uraiyur in human-divine form to marry Princess Kamalavalli",
    "thaayar": {
     "name": "Kamalavalli Thayar (Uraiyur Nachiyar)",
     "legend": "Born as the daughter of King Nanda Chola from a lotus pond (Kamalam), she was an incarnation of Sri Lakshmi who performed penance to wed Lord Ranganatha"
    }
   },
   "urchavar": {
    "names": {
     "tamil": "அழகிய மணவாளன்",
     "sanskrit": "सुन्दरजामातृ",
     "translit": "Azhagiya Manavalan"
    },
    "etymology": "Shares the identical name and form of the processional bridegroom deity",
    "thaayar": {
     "name": "Kamalavalli Thayar",
     "legend": "Possesses processional prominence during the annual wedding festival"
    }
   },
   "sanctumNote": "Unique Feature: Unlike Srirangam, here Kamalavalli Thayar is seated directly facing the same northern direction beside the Moolavar in the main Garbhagriha itself. The shrine places paramount importance on the Thaayar; during the annual festival, Namperumal from Srirangam crosses the Kaveri River to come to Uraiyur for the Kalyana Utsavam"
  },
  "puranam": {
   "prathyaksham": "Manifested directly to Nanda Chola and Thirupanazhwar (Uraiyur is the sacred birth site / Avathara Sthalam of Thirupanazhwar)",
   "timeline": "Construction Era: Early Chola Period (Uraiyur was the ancient capital of the Sangam Cholas) Renovations: Epigraphical evidence records structural expansions by Kulothunga Chola I and later Vijayanagara chieftains",
   "literature": [
    "Mentioned in Koyil Olugu, Chola Mandala Sathakam, and Tamil Sangam works referencing Nichulapuri and Nanda Chola's capital"
   ],
   "legend": [
    "Origin Legend & Miracles",
    "King Nanda Chola, an ardent Vishnu devotee, prayed for a child. While hunting, he found a glowing female infant lying on a 1000-petaled lotus in the lake. He raised her as Kamalavalli",
    "As she grew, she declared she would marry none other than Lord Ranganatha of Srirangam",
    "Recognizing her divinity, Lord Ranganatha appeared in a dream to Nanda Chola, arrived in Uraiyur as Azhagiya Manavalan, wed Princess Kamalavalli, and merged her into His divine form",
    "The Rooster Miracle (Nichulapuri) — Ancient Uraiyur was called Nichulapuri. A miracle occurred where a tiny game-rooster (Kozhi) defeated a royal war elephant in battle through divine empowerment, demonstrating that even the weakest entity gains strength under the Lord's grace. Hence, Uraiyur is historically called Kozhiyur"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ],
    [
     "kulasekhara",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (9.2.5)",
     "tamil": "கோழி யும் கூடலும் கோவிலும் பற்றி\nழியாத மனஞ்செய்யும் எந்தைபெருமான்\nவாழியும் வல்லவல்லா ளென்றும் வாழும்\nஆழியா னடி யாரடை யாளங்களே.",
     "transliteration": "Kōḻi yum kūḍalum kōvilum paṟṟiḺiyādhā manañseyyum endhaiperumāṯVāḻiyum vallavallā ḷeṯṟum vāḻumĀḻiyāṯ aḍi yāraḍai yāḷaṅgaḷē",
     "wordMeanings": [
      [
       "Kōḻi yum",
       "Uraiyur (Kozhiyur)"
      ],
      [
       "Kūḍalum",
       "Thirukkoodal (Madurai)"
      ],
      [
       "Kōvilum",
       "Srirangam (Koyil)"
      ],
      [
       "Paṟṟi",
       "Taking residence in"
      ],
      [
       "Endhai perumāṯ",
       "My Supreme Lord and Father"
      ],
      [
       "Āḻiyāṯ",
       "The wielder of the Divine Chakra"
      ],
      [
       "Aḍiyār",
       "His dedicated devotees"
      ]
     ],
     "significance": "Equates Uraiyur (Kozhi) alongside Srirangam as the prime abode where the Lord permanently resides to liberate bound souls"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Gateway Rajagopuram facing North",
    "Moolavar Form: Moolavar Sri Azhagiya Manavalan alongside Kamalavalli Thayar in the sanctum",
    "Thaayar Form: Kamalavalli Thayar seated prominently in the Garbhagriha",
    "Urchavar Form: Processional icon of Azhagiya Manavalan used during Serthi Seva"
   ],
   "literature": [
    "Periya Thirumozhi Commentary by Periyavachan Pillai"
   ],
   "videoSearches": [
    "Uraiyur Serthi Seva Live",
    "Velukkudi Krishnan Uraiyur Kamalavalli Thayar Sthala Puranam"
   ]
  }
 },
 "uthamar-kovil": {
  "serial": 3,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Manachanallur Taluk, Tiruchirappalli District, Tamil Nadu. ~10 km North of Trichy, near No. 1 Tollgate. GPS Coordinates: 10.8906° N, 78.7042° E",
   "vimanam": "Udyoga Vimanam / Utpala Vimanam",
   "theertham": "Kadamba Theertham / Janaka Theertham",
   "sthalaVriksham": "Kadamba Tree (Anthocephalus cadamba)",
   "posture": "Posture: Nindra Thirukkolam (Standing Posture) | Orientation: Facing East",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "புருஷோத்தமன் / உத்தமர்",
     "sanskrit": "पुरुषोत्तमः",
     "translit": "Purushothaman / Uthamar"
    },
    "etymology": "Named Purushottama (\"The Supreme Being/Person\") as highlighted in the Bhagavad Gita (Chapter 15), signifying His absolute transcendence over both Kshara (matter) and Akshara (souls)",
    "thaayar": {
     "name": "Poornavalli Thayar (Karambanur Nachiyar)",
     "legend": "Poorna translates to \"Complete/Abundant.\" She granted complete alms (Bhiksha) to Lord Shiva to break His curse"
    }
   },
   "urchavar": {
    "names": {
     "tamil": "புருஷோத்தமன்",
     "sanskrit": "पुरुषोत्तमः",
     "translit": "Purushothaman"
    },
    "etymology": "Shares the same name as the Moolavar",
    "thaayar": {
     "name": "Poornavalli Thayar",
     "legend": "Accompanies Purushottaman during major temple street processions"
    }
   },
   "sanctumNote": "Moolavar Purushottama stands flanked by Sridevi and Bhoodevi within the primary sanctum. Dedicated sanctums exist for Brahma with Saraswati, and Shiva (Bhikshatanar) with Parvati within the same outer enclosure"
  },
  "puranam": {
   "prathyaksham": "Manifested for Lord Shiva (Bhikshatanar), Brahma, and Sage Kadamba",
   "timeline": "Era: Early Medieval Chola structure with architectural additions by the Kadavaraya and Vijayanagara kings Epigraphy: Inscriptions record land grants from Parantaka Chola I",
   "legend": [
    "Origin Legend & Miracles",
    "Brahma-Kapala Moksham — Lord Shiva severed the fifth head of Brahma due to vanity. The severed skull (Kapala) stuck permanently to Shiva's palm, turning Him into a wandering mendicant (Bhikshatanar)",
    "Shiva searched the cosmos for food that could fill the skull. When He arrived at Thirukarambanur, Goddess Lakshmi (Poornavalli) dropped divine alms into the Kapala, filling it to overflowing and freeing Shiva from the Brahmahatya sin",
    "Trimurthi Unity Sthalam — This is one of the rare temples where all three primary manifestations of divinity (Brahma, Vishnu, Shiva) reside with their respective consorts (Saraswati, Lakshmi, Parvati)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (5.6.2)",
     "tamil": "பேரானான் பேரா வென்றான் பேரா யாயிரங்\nகாரானான் காரா வான்மழை கடுப்பொக்கும்\nகார்வானான் கார்வானத் துள்ளான் கறங்குவெள்ளத்து\nபேரானான் பேரான் கரம்பனூர் உத்தானே.",
     "transliteration": "Pērāṯāṯ pērā veṯṟāṯ pērā yāyiraṅKārāṯāṯ kārā vāṯmaḻai kaḍuppokkumKārvāṯāṯ kārvāṯath thuḷḷāṯ kaṟaṅguveḷḷaththuPērāṯāṯ pērāṯ karambanūr uththānē",
     "wordMeanings": [
      [
       "Karambanūr uththānē",
       "The Supreme Lord who resides in Karambanur (Uthamar Koil)"
      ],
      [
       "Pērā yāyiraṅ",
       "Having thousands of holy names"
      ],
      [
       "Kār āṯāṯ",
       "Dark like the water-laden rain cloud"
      ]
     ],
     "significance": "Affirms Purushottama's absolute supremacy as the benefactor who grants relief to all beings, including celestial deities like Shiva and Brahma"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Front gateway gopuram leading into the Trimurthi complex",
    "Moolavar Form: Standing Purushottama Perumal with Sridevi and Bhoodevi",
    "Thaayar Form: Poornavalli Thayar in standing posture",
    "Urchavar Form: Panchaloha icon of Purushottama"
   ],
   "videoSearches": [
    "Uthamar Koil Sthala Puranam Velukkudi Krishnan",
    "Bramha Vishnu Shiva Uthamar Kovil Special"
   ]
  }
 },
 "koviladi": {
  "serial": 4,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Koviladi village, Lalgudi Taluk, Tiruchirappalli District, Tamil Nadu. ~25 km East of Trichy. Located near the Grand Anicut (Kallanai). GPS Coordinates: 10.8354° N, 78.8893° E",
   "vimanam": "Indra Vimanam",
   "theertham": "Indra Theertham",
   "sthalaVriksham": "Punnai Tree",
   "posture": "Posture: Kidantha Thirukkolam (Reclining Posture holding a pot of sweet appam with His right hand) | Orientation: Facing West",
   "orientation": "Facing West"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "அப்பக்குடத்தான் / அப்பல ரங்கநாதன்",
     "sanskrit": "अपूपप्रियपतिः / अप्पल रङ्गनाथः",
     "translit": "Appakkudathan / Appala Ranganathan"
    },
    "etymology": "Appam (Sweet fried rice cake) + Kudam (Pot) + Thaan (He who holds) = \"The Lord who permanently holds a pot of sweet Appam.\"",
    "thaayar": {
     "name": "Indravalli Thayar / Kamalavalli",
     "legend": "Named after King Indra, who performed penance here to recover his lost celestial kingdom and power"
    }
   },
   "urchavar": {
    "names": {
     "tamil": "அப்பல ரங்கநாதன்",
     "sanskrit": "अप्पल रङ्गनाथः",
     "translit": "Appala Ranganathan"
    },
    "etymology": "Named Appala Ranganathan as the processional counterpart of the reclining Moolavar",
    "thaayar": {
     "name": "Indravalli Thayar",
     "legend": "Seated alongside the processional deity during festival rites"
    }
   },
   "sanctumNote": "Moolavar reclines on Adisesha facing West, with his right arm resting directly upon a pot filled with Appam"
  },
  "puranam": {
   "prathyaksham": "Manifested for King Upamanyu, King Indra, and Sage Markandeya",
   "timeline": "Era: Early Chola construction dating from the Aditya I era (871–907 CE) Epigraphy: Chola inscriptions detail land donations for maintaining daily offerings of Appam (Apupa-Padi)",
   "legend": [
    "Origin Legend & Miracles",
    "King Upamanyu's Curse — King Upamanyu lost all his merits (Punya) due to an unwitting insult to Sage Durvasa. To regain his state, he fed thousands of pilgrims daily",
    "Lord Vishnu appeared in the guise of an elderly Brahmin with an insatiable appetite. After eating all cooked food prepared for thousands, the Brahmin demanded a full pot of Appam",
    "When Upamanyu handed over the Appam Kudam, the Lord revealed His true form as Lord Ranganatha, wiped away Upamanyu's curse, and declared He would retain the Appam pot in His hand forever",
    "Historical Link to Nammazhwar — Thirupper Nagar is the sacred shrine where Nammazhwar sang his final Pasuram before ascending to Vaikuntam"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     19
    ],
    [
     "nammazhwar",
     13
    ],
    [
     "periyazhwar",
     1
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (10.8.1)",
     "tamil": "திருமாலிருஞ்சோலை மலையென்றேன் என்ன\nதிருமால் வந்து என்நெஞ்சு நிறையப் புகுந்தான்\nபெருமால் மயக்க மயக்கினையே\nதிருப்பேர் நகரான் திருக்கண் வளர்ந்தே.",
     "transliteration": "Thirumāliruñchōlai malaiyeṯṟēṯ eṯṟaThirumāl vandhu eṯneñju niṟeyap pugundhāṯPerumāl mayakka mayakkineyēThiruppēr nagarāṯ thirukkaṇ vaḷarndhē",
     "wordMeanings": [
      [
       "Thiruppēr nagarāṯ",
       "The Lord reclining at Thirupper Nagar (Koviladi)"
      ],
      [
       "Thirukkaṇ vaḷarndhē",
       "Resting in divine slumber"
      ],
      [
       "Vandhu en neñju niṟeya pugundhāṯ",
       "Came and entered completely into my heart"
      ]
     ],
     "significance": "Represents Nammazhwar's ultimate realization (Kritarthata) right before ascending to Vaikuntam"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Elevated temple structure built on an artificial hillock (Maadakoil style)",
    "Moolavar Form: Reclining form of Appakkudathan with his right hand resting on the Appam pot",
    "Thaayar Form: Indravalli Thayar in seated posture",
    "Urchavar Form: Processional icon of Appala Ranganathan"
   ],
   "videoSearches": [
    "Koviladi Appakkudathan Temple History",
    "Velukkudi Krishnan Thirupper Nagar Pasuram"
   ]
  }
 },
 "thiruvellarai": {
  "serial": 5,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thiruvellarai village, Manachanallur Taluk, Tiruchirappalli District, Tamil Nadu. ~20 km North-West of Trichy. GPS Coordinates: 10.9631° N, 78.6750° E",
   "vimanam": "Vimalakriti Vimanam",
   "theertham": "Manikarnika Pushkarini (Primary), Sweta Pushkarini, Chakra Theertham, Varaha Theertham",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "posture": "Posture: Nindra Thirukkolam (Standing Posture) | Orientation: Facing East",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "புண்டரீகாட்சன் / செந்தாமரைக்கண்ணன்",
     "sanskrit": "पुण्डरीकाक्षः",
     "translit": "Pundarikakshan / Senthamaraikannan"
    },
    "etymology": "Pundarika (Lotus) + Aksha (Eyes) = \"The Lotus-Eyed Lord,\" as praised in the Chandogya Upanishad (Tasya yatha kapyasam pundarikam evam akshini)",
    "thaayar": {
     "name": "Pangajavalli Thayar / Shenbagavalli",
     "legend": "Pangajam means \"Lotus.\" She possesses sovereign authority (Pradhanyam) in this temple, leading all divine processions before the Lord"
    }
   },
   "urchavar": {
    "names": {
     "tamil": "புண்டரீகாட்சன்",
     "sanskrit": "पुण्डरीकाक्षः",
     "translit": "Pundarikakshan"
    },
    "etymology": "Shares the name of the Moolavar",
    "thaayar": {
     "name": "Pangajavalli Thayar",
     "legend": "Leads processional movements ahead of the Lord's palanquin"
    }
   },
   "sanctumNote": "Dual Gateway System: The sanctum features two seasonal entrances: the Uttarayana Vaasal (used from mid-January to mid-July) and the Dakshinayana Vaasal (used from mid-July to mid-January)"
  },
  "puranam": {
   "prathyaksham": "Manifested for King Sibi, Lord Brahma, and Garuda",
   "timeline": "Era: Pallava period rock-cut cave architectures alongside major early Chola construction Epigraphy: Inscriptions from the reign of Pallava King Dantivarman (796–847 CE) detail the construction of the Swastika well",
   "legend": [
    "Origin Legend & Miracles",
    "White Rock Hill (Swetagiri) — The site is situated on a natural white limestone hillock (Vellarai = White Rock)",
    "King Sibi's Penance — King Sibi performed penance here. Lord Vishnu appeared as a white boar (Sweta Varaha) to lead Sibi to the divine spot where He intended to manifest",
    "Engraved Swastika Step-Well — Home to the 8th-century Swastika-shaped step-well (Marpidugu Perumpidugu Kinaru), engineered to ensure privacy for bathing",
    "Birthplace of Acharyas — Birthplace of Engalazhwan and Uyyakondar (key pre-Ramanuja lineage scholars)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "periyazhwar",
     20
    ],
    [
     "thirumangai",
     4
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "periyazhwar",
     "work": "Periyazhwar Thirumozhi (3.6.1)",
     "tamil": "இந்திரனோடு பிரமன் ஈசன் இமையவர் எல்லாம்\nமந்திர மாமலர் கொண்டு மழைபோல் உறைவல்லி மாதர்\nஅந்தரத் தேவந்து இழிந்து தொழும்சொல் வெள்ளறை நின்ற\nசுந்தரன் சுந்தரத் தோளனை நந்தன் சுதனைத் தொழீரே.",
     "transliteration": "Indhiraṯōḍu piramaṯ īsaṯ imaiyavar ellāmMandhira māmalar koṇḍu maḻaipōl uṟaivalli mādharAndharath thēvandhu iḻindhu thoḻumsol veḷḷaṟai niṯṟaSundharaṯ sundharath thōḷaṯai nandhaṯ sudhanaith thoḻīrē",
     "wordMeanings": [
      [
       "Indhiraṯōḍu piramaṯ īsaṯ",
       "Indra along with Brahma and Shiva"
      ],
      [
       "Imaiyavar ellām",
       "All heavenly Devas"
      ],
      [
       "Veḷḷaṟai niṯṟa",
       "Standing at Thiruvellarai"
      ],
      [
       "Sundharaṯ",
       "The infinitely beautiful Lord Pundarikaksha"
      ]
     ],
     "significance": "Depicts the supreme cosmic status of Pundarikaksha, worshipped continuously by the entire pantheon of Devas"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Unfinished Pallava/Chola gopuram base on the Swetagiri hillock",
    "Moolavar Form: Standing Pundarikakshan with lotus eyes",
    "Thaayar Form: Pangajavalli Thayar in dedicated shrine",
    "Urchavar Form: Processional Pundarikakshan"
   ],
   "literature": [
    "Epigraphia Indica (Vol. XI) — Dantivarman Thiruvellarai Inscription"
   ],
   "videoSearches": [
    "Thiruvellarai Swastika Kinaru Architecture",
    "Velukkudi Krishnan Thiruvellarai Pundarikakshan"
   ]
  }
 },
 "anbil": {
  "serial": 6,
  "profile": {
   "regionNote": "Choza Naadu (North Bank of Kollidam)",
   "location": "Anbil Village, Lalgudi Taluk, Tiruchirappalli District, Tamil Nadu. Landmark: ~8 km east of Lalgudi",
   "sthalaVriksham": "Vilvam (Aegle marmelos)",
   "vimanam": "Taraka Vimanam (also known as Tarka/Veda Vimanam)",
   "theertham": "Manduka Pushkarini / Kollidam River",
   "posture": "Kidantha Thirukkolam (Reclining posture on Adisesha facing East)",
   "orientation": "Facing East",
   "gps": "10.8667° N, 78.8833° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "சுந்தரராஜ பெருமாள் / வடிழகிய நம்பி Sanskrit: सुन्दरराज பெருமாள் / सुन्दरबाहु Transliteration: Sundararaja Perumal / Vadivazhagiya Nambi"
    },
    "thaayar": {
     "name": "Azhagiya Valli Thayar (சுந்தரவல்லி / அழகியவல்லி)",
     "legend": "Seated in an independent shrine within the inner corridor. Manifested out of divine affection (Anbu) to grant darshan to Sage Sutapa"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Sundararajan (சுந்தரராஜன்)"
    },
    "etymology": "Transcendent divine icon crafted in Panchaloha, carrying the Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Sundaravalli Thayar",
     "legend": "Accompanies Urchavar during festival processions (Purappadu)"
    }
   },
   "sanctumNote": "Two Visible Thaayars"
  },
  "puranam": {
   "prathyaksham": "Manduka Maharishi (Sage Sutapa) and Lord Brahma",
   "timeline": "Early Chola Origins: Epigraphic evidence attributes core stone structures to the 8th–9th Century CE Anbil Copper Plates (961 CE): Issued during the 4th regnal year of Parantaka Chola II (Sundara Chola). Written in Sanskrit (Grantha script) and Tamil, these plates record a royal land grant (Brahmadeya) to Anbil Aniruddha Brahmarayar, the Prime Minister of Sundara Chola, tracing Chola genealogy back to Surya Ruler Grants: Later patronized by Kulottunga Chola I and Vijayanagara kings",
   "literature": [
    "Explicitly mentioned in the Anbil Copper Plates, Koyil Olugu, and Sanskrit sthala puranas detailing the Manduka salvation"
   ],
   "legend": [
    "Origin Story & Legend of Manduka Maharishi — Sage Sutapa was performing deep penance under water in the Swamipushkarini. When the short-tempered Sage Durvasa passed by, Sutapa failed to notice him due to his meditative trance. Enraged, Durvasa cursed him to turn into a frog (Manduka). To break the curse, Sutapa meditated at Anbil (then called Bhargava Theertham). Lord Vishnu manifested in His serene, beautiful reclining form (Sundararaja), absolving the sage and restoring his human form. Hence, the temple tank is named Manduka Pushkarini",
    "Brahma’s Pride — Lord Brahma performed penance here to shed his pride (Ahamkara) regarding his creation powers and received instruction from Sundararaja Perumal"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumazhisai",
     "work": "Nanmugan Thiruvanthadhi (Verse 36)",
     "tamil": "நாகத்தணையான் குடந்தை வெஃகாஃ அஃதான்றி ஆகத்தணையான் அரங்கம் அன்பில் — பாகத்தணையான் திருத்தண்கா வூரானே தீவினைநோய் போக்கும் மருத்தானே வாக்கினில் வைத்து.",
     "transliteration": "Nāgathaṇaiyān kuḍandhai veḥkāḥ aḥdhānṟi Āgathaṇaiyān araṅgam anbil — pāgathaṇaiyān Thiruththaṇgā vūrānē thīvinainoī pōkkum Maruththānē vākkinil vaiththu",
     "wordMeanings": [
      [
       "Nāgathaṇaiyān",
       "The One who reclines on the serpent bed (Adisesha)"
      ],
      [
       "Kuḍandhai",
       "In Thirukkudanthai (Kumbakonam)"
      ],
      [
       "Veḥkāḥ",
       "In Thiruveḥka"
      ],
      [
       "Aḥdhānṟi",
       "Beyond those places"
      ],
      [
       "Āgathaṇaiyān",
       "He who holds Mahalakshmi on His chest"
      ],
      [
       "Araṅgam",
       "In Srirangam"
      ],
      [
       "Anbil",
       "In Thiru Anbil"
      ],
      [
       "Pāgathaṇaiyān",
       "He who shares His body with Parvati (referring to Siva/shrine contexts)"
      ],
      [
       "Thiruththaṇgā vūrānē",
       "The Lord of Thiruththangka"
      ],
      [
       "Thīvinainōi pōkkum Maruththānē",
       "He is the Divine Physician who destroys the disease of evil karma"
      ],
      [
       "Vākkinil vaiththu",
       "I keep Him firmly in my speech/words"
      ]
     ],
     "significance": "Thirumazhisai Azhwar synthesizes five major reclining/standing shrines into a single verse, declaring Lord Sundararaja of Anbil to be the ultimate Bhishag (Divine Doctor) who eradicates the chronic disease of Samsara and karma"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram set against a tranquil rural background near the Kollidam embankment",
    "Moolavar Form: Reclining on Adisesha (Bhujanga Sayanam), facing East, flanked by Brahma emerging from the navel, with Sage Sutapa in attendance",
    "Thaayar Form: Sundaravalli Thayar in seated padmasana pose within an independent sanctum",
    "Urchavar Form: Graceful Panchaloha idol of Sundararajan with Sridevi and Bhudevi"
   ],
   "literature": [
    "Dravida Veda Text Archive: Project Madurai (Nanmugan Thiruvanthadhi, Verse 36)",
    "Video Upanyasam Query: \"Thiru Anbil Divya Desam Velukkudi Krishnan\" / \"Anbil Sundararaja Perumal Sthala Puranam\""
   ]
  }
 },
 "thanjai-mamanikoil": {
  "serial": 7,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Vennar Bank, Thanjavur City, Tamil Nadu. Landmark: ~3 km from Thanjavur Railway Station on the Kumbakonam highway",
   "sthalaVriksham": "Magizham Tree (Mimusops elengi)",
   "vimanam": "Sri Neelamegha Perumal: Soundarya Vimanam | Vennaru / Kanda Pushkarini | Sri Manikunthara Perumal: Manimuktha Vimanam | Sri Rama Theertham | Sri Veera Narasimha Perumal: Vedasundara Vimanam | Surya Pushkarini",
   "theertham": "| Vennaru / Kanda Pushkarini | | Sri Rama Theertham | | Surya Pushkarini",
   "posture": "Neelamegha Perumal: Irundha Thirukkolam (Sitting, facing East) | Manikuntharan: Irundha Thirukkolam (Sitting, facing East) | Veera Narasimhan: Irundha Thirukkolam (Sitting, facing East)",
   "orientation": "Facing East",
   "gps": "10.8125° N, 79.1386° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "translit": "நீலமேகப் பெருமாள் / नीलोत्पलमेघ / Neelamegha Perumal (Dark rain-cloud complexioned Lord) | மணிக்குன்றப் பெருமாள் / मणिकूट / Manikunthara Perumal (Lord like a mountain of blue sapphires) | வீர நரசிம்மப் பெருமாள் / वीर नृसिंह / Veera Narasimha Perumal (Valiant Lion Incarnation)"
    },
    "thaayar": [
     {
      "name": "செங்கமலவல்லி தாயார் (Sengamalavalli Thayar)"
     },
     {
      "name": "அம்புஜவல்லி தாயார் (Ambujavalli Thayar)"
     },
     {
      "name": "தஞ்சை நாயகி / தஞ்சையம்பாள் (Thanjai Nayagi Thayar)"
     }
    ]
   },
   "urchavar": {
    "names": {
     "translit": "Srimad Soundararajan with Sridevi & Bhudevi | Manikunthar with dual Thaayars | Veera Narasimhar with Sridevi & Bhudevi"
    }
   }
  },
  "puranam": {
   "prathyaksham": "Parasara Maharishi and King Thanjasuran (at salvation)",
   "timeline": "Chola Imperial Era: Patronized heavily by Raja Raja Chola I, Rajendra I, and Kundavai. Inscriptions refer to this complex as Thanjai Kavu Nayak & Maratha Rule: Thanjavur Nayaks (Sevappa, Achuthappa) and Tanjore Marathas (Serfoji II) expanded the shrines, constructed mandapams, and instituted daily endowments",
   "literature": [
    "Explicitly praised in Silappatikaram (Katturai) as a historic Vishnu shrine on the banks of Vennaru"
   ],
   "legend": [
    "Origin Legend of Thanjasuran Destruction — Three demons—Thanjan, Thandakan, and Tarakan—harassed sages in the Parasara ashram. Lord Vishnu assumed three forms to destroy them:",
    "As Narasimha, He slayed Thanjan. At his dying request, the city was named Thanjavur (Thanjan-oor)",
    "As Neelamegha Perumal, He defeated Thandakan, crushing him into the earth (forming the Vennar river valley)",
    "As Manikunthar, He eradicated the remaining demonic forces"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     3
    ],
    [
     "bhoothath",
     1
    ],
    [
     "nammazhwar",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.4.1)",
     "tamil": "வெம்பின நோய்வினை தீர்க்கும் மருந்து* வினைத்தலைய போகும் வகையது காட்டும்* தம்பல மாகமுன் தந்தவர்க்கு என்றும்* தமராகி நின்றவர்க்கு இன்அமு தூட்டும்* செம்பவ ளத் திரள் போல்வதோர் வடிவும்* திருவரங்கத் தம்மான் சீலமும் நினைந்து* அம்பவ ளத் திரள் மாலைகள் ஏந்தி* அடியேன் தஞ்சை மாமணிக் கோயில் அடைந்தேனே.",
     "transliteration": "Vembina nōivinai thīrkkum marundhu* vinaiththalaiya pōgum vagaiyadhhu kāṭṭum* Thambala māgamun thandhavarkku enṟum* thamarāgi ninṟavarkku inamudhūṭṭum* Sembava ḷath thiraḷ pōlvadhor vaḍivum* thiruvaraṅgath thammān sīlamum ninaindhu* Ambava ḷath thiraḷ mālaigaḷ ēndhi* aḍiyēn thañjai māmaṇik kōyil aḍaindhēnē",
     "wordMeanings": [
      [
       "Vembina nōivinai thīrkkum marundhu",
       "The medicine that cures afflictions caused by agonizing karmas"
      ],
      [
       "Vinaiththalaiya pōgum vagaiyadhhu kāṭṭum",
       "Shows the path to completely eradicate evil deeds"
      ],
      [
       "Thambala māgamun thandhavarkku",
       "To those who surrender their body and soul to Him"
      ],
      [
       "Enṟum thamarāgi ninṟavarkku",
       "To those who eternally remain His devotees"
      ],
      [
       "Inamudhūṭṭum",
       "Feeds them sweet nectar"
      ],
      [
       "Sembava ḷath thiraḷ pōlvadhor vaḍivum",
       "Possessing a divine radiant form like clustered red coral"
      ],
      [
       "Thiruvaraṅgath thammān sīlamum ninaindhu",
       "Meditating on the noble quality (Saulabhyam) of the Lord of Srirangam"
      ],
      [
       "Ambava ḷath thiraḷ mālaigaḷ ēndhi",
       "Bearing garlands of beautiful coral-like verses"
      ],
      [
       "Aḍiyēn thañjai māmaṇik kōyil aḍaindhēnē",
       "I, His servant, have reached the Thanjai Maamani Koil"
      ]
     ],
     "significance": "Thirumangai Azhwar establishes Thanjai Maamani Koil as the physical haven for liberation, comparing the Lord's accessibility to sweet nectar that cures all worldly afflictions"
    },
    {
     "azhwarId": "bhoothath",
     "work": "Irandarn Thiruvanthadhi (Verse 70)",
     "tamil": "அரங்கம் திருவெஃகா எவ்வுள் திருப்பேர் அரங்கம் திருக்கோட்டி மாப்பால் — அரங்கம் திருத்தஞ்சை மாமணிக கோயில் திருக்கோவிலூரே எடுத்தான் அடிநிழலே ஏத்து.",
     "transliteration": "Araṅgam thiruveḥkā evvuḷ thiruppēr Araṅgam thirukkōṭṭi māppāl — araṅgam Thiruththañjai māmaṇik kōyil thirukkōvilūrē Eḍuththān aḍiniḻalē ēththu",
     "wordMeanings": [
      [
       "Araṅgam... Thiruveḥkā... Evvuḷ... Thiruppēr",
       "Srirangam, Thiruveḥka, Thiruevvul, Thiruppernagar"
      ],
      [
       "Thirukkōṭṭi",
       "Thirukkoshthiyur"
      ],
      [
       "Thiruththañjai māmaṇik kōyil",
       "Thanjai Maamani Koil"
      ],
      [
       "Thirukkōvilūrē",
       "Thirukoilur"
      ],
      [
       "Eḍuththān aḍiniḻalē ēththu",
       "Praise and take refuge under the shadow of the feet of the Lord who lifted Govardhana"
      ]
     ],
     "significance": "Bhoothath Azhwar lists Thanjai Maamani Koil among the primary physical shrines where the Supreme Being manifests His protective lotus feet for humanity"
    },
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (9.2.4)",
     "tamil": "தஞ்சை மணிமாடக் கோயில் மேவிய* அஞ்சிறைப் புள்ளுயர்த்த ஆற்றலாற்கு* எஞ்சலில் அந்தணர் வாழும் வண் குடந்தை* மஞ்சுறு சோலை உறைவாழ்க்கை மாதவற்கே.",
     "transliteration": "Thañjai maṇimāḍak kōyil mēviya* Añjiṟaip puḷḷuyarththa āṟṟalāṟku* Eñjalil andhaṇar vāḻum vaṇ kuḍandhai* Mañjuṟu sōlai uṟaivāḻkkai mādhavaṟkē",
     "wordMeanings": [
      [
       "Thañjai maṇimāḍak kōyil mēviya",
       "The Lord residing in the jewel-like mansion temple of Thanjai"
      ],
      [
       "Añjiṟaip puḷḷuyarththa āṟṟalāṟku",
       "He who flies the Garuda flag of immense power"
      ],
      [
       "Eñjalil andhaṇar vāḻum vaṇ kuḍandhai",
       "In Kumbakonam where flawless Vedic scholars dwell"
      ],
      [
       "Mañjuṟu sōlai uṟaivāḻkkai mādhavaṟkē",
       "Belongs to Madhava who resides amid cloud-capped groves"
      ]
     ],
     "significance": "Nammalwar connects the glory of Thanjai's palatial shrine structures (Mani Maada Koil) to the cosmic supremacy of Lord Madhava"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Distinct Rajagopurams across all 3 shrines located within a 1 km radius along the Vennar banks",
    "Moolavar Form: Massive seated icons (Irundha Thirukkolam) of Neelamegha Perumal, Manikunthar, and Veera Narasimhar",
    "Thaayar Form: Sengamalavalli, Ambujavalli, and Thanjai Nayagi in seated postures",
    "Urchavar Form: Intricately cast bronze icons of Soundararajan and Narasimhar"
   ],
   "literature": [
    "Project Madurai Transcripts (Periya Thirumozhi 3.4 & Thiruvaimozhi 9.2)",
    "Video Search Query: \"Thanjai Mamani Koil Velukkudi Krishnan Upanyasam\""
   ]
  }
 },
 "kabisthalam": {
  "serial": 8,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Kabisthalam, Papanasam Taluk, Thanjavur District, Tamil Nadu. Located ~3 km from Papanasam on the Kumbakonam-Thiruvaiyaru road",
   "sthalaVriksham": "Punnai Tree (Calophyllum inophyllum)",
   "vimanam": "Gaganakara Vimanam / Kanaka Vimanam",
   "theertham": "Gajendra Pushkarini / Cauvery River",
   "posture": "Kidantha Thirukkolam (Reclining on Adisesha facing East)",
   "orientation": "Facing East",
   "gps": "10.9252° N, 79.2558° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கஜேந்திர வரதப் பெருமாள் Sanskrit: गजेंद्रवरद / आञ्जनेयवरद Transliteration: Gajendra Varadha Perumal"
    },
    "thaayar": {
     "name": "Ramamani Valli / Potamarai Valli Thayar (பொற்றாமரைவல்லி / ரமாமணிவல்லி)",
     "legend": "Golden Lotus Consort; resides in a dedicated sanctum adjacent to the main shrine"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Gajendra Varadhar (கஜேந்திர வரதர்)"
    },
    "etymology": "Four-armed metallic deity holding the Chakra ready in Prayoga (launching) position",
    "thaayar": {
     "name": "Potamarai Valli",
     "legend": "Accompanying consort during the annual Gajendra Moksham festival"
    }
   },
   "sanctumNote": "Two Visible Thaayars"
  },
  "puranam": {
   "prathyaksham": "Gajendra the Elephant, Crocodile (Makara Gandharva), Hanuman, and Sage Agastya",
   "timeline": "Ancient Chola structure renovated during medieval Chola regimes (10th-11th Century CE) Inscriptions record grants by Medieval Cholas for conducting the Gajendra Moksham festival on the Purnima day of Panguni month",
   "literature": [
    "Explicitly detailed in the Bhagavata Purana (8th Canto, Gajendra Moksham episode) and Koyil Olugu"
   ],
   "legend": [
    "Gajendra Moksham Legend — King Indradyumna was cursed by Sage Agastya to become an elephant (Gajendra), and the Gandharva Hoohoo was cursed by Sage Devala to become a crocodile (Makara) in the lotus pond at Kabisthalam. When Gajendra entered the pond to pluck a golden lotus for Vishnu's worship, the crocodile seized his leg. After a 1,000-year struggle, as the elephant called out \"Aadhimoolame!\" (O Primeval Source!), Lord Vishnu rushed on Garuda, severed the crocodile's head with his Sudarshana Chakra, and granted liberation to both souls",
    "Association with Hanuman (Kabi) — The place is also called Kabisthalam (Kabi = Monkey in Tamil/Sanskrit) because Hanuman meditated here and was blessed by Lord Varadharajan"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumazhisai",
     "work": "Thiruchanda Viruththam (Verse 36)",
     "tamil": "ஆறும் ஆறும் ஆறும் ஆய்ஓர் ஐந்தும் ஐந்தும் ஐந்துமாய்* ஏறும் சீர்இரண்டும் ஏழும் ஏழும் ஏழும் ஆயினான்* ஆறாறும் ஆறும் ஆய்ஓர் ஐந்தும் ஐந்தும் ஐந்துமாய்* கபிலன் அட்டாங்க யோகம் எய்தும் ஆற்றல் என்னே!\n(Note: In terms of direct shrine Mangalasasanam, Thirumazhisai Azhwar refers specifically to Kabisthalam in Verse 49 of Thiruchanda Viruththam):\nOriginal Tamil (Verse 49):\nஆற்றங் கரைக்கிடக்கும் கண்ணன் கடல்கிடக்கும்* ஆற்றங் கரைக்கிடக்கும் ஆவா வெனஉலகு* ஆற்றங் கரைக்கிடக்கும் கண்ணன் கபிலத்தான்* ஆற்றங் கரைக்கிடக்கும் ஆங்கு.",
     "transliteration": "Āṟṟaṅ karaikkiḍakkum kaṇṇan kaḍalgiḍakkum* Āṟṟaṅ karaikkiḍakkum āvā venaulagu* Āṟṟaṅ karaikkiḍakkum kaṇṇan kapilaththān* Āṟṟaṅ karaikkiḍakkum āṅgu",
     "wordMeanings": [
      [
       "Āṟṟaṅ karaikkiḍakkum kaṇṇan",
       "Lord Krishna reclining on the riverbanks (Cauvery/Kollidam)"
      ],
      [
       "Kaḍalgiḍakkum",
       "Reclining on the Milk Ocean"
      ],
      [
       "Āvā venaulagu",
       "Compassionately protecting the world crying out in distress"
      ],
      [
       "Kapilaththān (Kabisthalam)",
       "Residing at Kabisthalam"
      ],
      [
       "Āṟṟaṅ karaikkiḍakkum āṅgu",
       "Reclining peacefully on the riverbank there"
      ]
     ],
     "significance": "Thirumazhisai Azhwar emphasizes the accessible (Saulabhyam) reclining form of Krishna on the Cauvery riverbank at Kabisthalam, ready to answer the desperate call of any suffering soul just as He did for Gajendra"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered east-facing Rajagopuram overlooking the Gajendra Pushkarini",
    "Moolavar Form: Reclining deity with His right hand supporting His head, flanked by Gajendra with a lotus in its trunk",
    "Thaayar Form: Potamarai Valli Thayar in a separate shrine in Amartha Thirukkolam (seated posture)",
    "Urchavar Form: Gajendra Varadhar in standing posture holding the Chakra in Prayoga state"
   ],
   "literature": [
    "Project Madurai Text Archive (Thiruchanda Viruththam)",
    "Video Search Query: \"Kabisthalam Gajendra Varadhar Temple History Velukkudi\""
   ]
  }
 },
 "pullamboothangudi": {
  "serial": 9,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Pullaboothangudi Village, Papanasam Taluk, Thanjavur District, Tamil Nadu. Located ~4 km from Swami Malai / Kumbakonam belt",
   "sthalaVriksham": "Punnai Tree (Calophyllum inophyllum)",
   "vimanam": "Shobhana Vimanam",
   "theertham": "Jatayu Theertham / Kritasara Pushkarini",
   "posture": "Kidantha Thirukkolam (Reclining posture facing East). Unique feature: Reclining with four arms (Chaturbhuja) as Sri Rama",
   "orientation": "Facing East",
   "gps": "10.9781° N, 79.3175° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வல்வில் இராமன் Sanskrit: महाधनुः श्रीराम / बलविल्ल श्रीराम Transliteration: Valvil Rama Perumal"
    },
    "thaayar": {
     "name": "Pottamarai Valli Thayar (பொற்றாமரைவல்லி)",
     "legend": "Golden Lotus Consort; situated in an independent shrine within the temple precinct"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Valvil Raman"
    },
    "etymology": "Four-armed Panchaloha icon holding the Bow (Kodandam) alongside Sita, Lakshmana, and Sita Devi",
    "thaayar": {
     "name": "Pottamarai Valli",
     "legend": "Accompanies Urchavar in all major Uthsavams"
    }
   },
   "sanctumNote": "No Thaayar inside main Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "King Jatayu (granted Vaikuntha Moksham)",
   "timeline": "Core stone architecture built during the Chola dynasty (10th Century CE) Later expanded by Kulottunga Chola I and Nayak rulers of Thanjavur",
   "literature": [
    "Explicitly recorded in Koyil Olugu and detailed in the Aranya Kanda commentary tradition of Srimad Valmiki Ramayana"
   ],
   "legend": [
    "Jatayu Moksham Legend — When Ravana abducted Sita to Lanka, the noble bird Jatayu fought valiantly to free her. Ravana clipped Jatayu's wings, leaving him fatally wounded. When Rama and Lakshmana arrived searching for Sita, Jatayu narrated the abduction, surrendered to Rama, and breathed his last. Lord Rama performed the final funerary rites (Antyesti) for Jatayu here with full royal honor—a rite normally reserved for one's father. Because Rama was fatigued from performing the rites without Sita, He reclined on the ground",
    "Etymology of Pullambhootangudi — Pul (Bird - Jatayu) + Am (Beautiful) + Bhootham (Physical remains/element) + Kudi (Abode) = The sacred site of the bird Jatayu's final rites"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (8.1.1)",
     "tamil": "சிற்றாறு சூழ்ந்த புள்ளம்பூதங்குடி எம்மான்* பெற்றார் உரிமையால் பேணிக் குறித்தமைந்த* குற்றமில் சீரான் குறித்த வடிவமைந்த* பற்றார் நடுங்கப் படையொன்றை வேந்தற்கு* உற்றாராய் நின்றுலகம் உய்யக் கொடுத்தானை* கற்றார் பரவும் கழலே அடைநெஞ்சே.",
     "transliteration": "Siṟṟāṟu sūḻndha puḷḷambūthaṅguḍi emmān* Peṟṟār urimaiyāl pēṇik kuriththamaindha* Kuṟṟamil sīrān kuriththa vaḍivamaindha* Paṟṟār naḍuṅgap paḍaiyoṉṟai vēndhaṟku* Uṟṟārāy ninṟulagam uyyak koduththānai* Kaṟṟār paravum kaḻalē aḍaineñjē",
     "wordMeanings": [
      [
       "Siṟṟāṟu sūḻndha puḷḷambūthaṅguḍi emmān",
       "My Lord of Thirupullambhootangudi, surrounded by flowing rivulets"
      ],
      [
       "Peṟṟār urimaiyāl pēṇik",
       "Cherishing Jatayu with the filial duty of a loving son"
      ],
      [
       "Kuṟṟamil sīrān",
       "The Lord of flawless supreme attributes"
      ],
      [
       "Paṟṟār naḍuṅgap",
       "Causing enemies to tremble in fear"
      ],
      [
       "Uṟṟārāy ninṟulagam uyyak koduththānai",
       "Standing as the ultimate savior to redeem the world"
      ],
      [
       "Kaṟṟār paravum kaḻalē aḍaineñjē",
       "O mind, seek refuge at His divine lotus feet praised by the learned!"
      ]
     ],
     "significance": "Thirumangai Azhwar highlights Lord Rama's Karithya Souhardam (filial love and affection), treating Jatayu not as a bird, but as His own father King Dasharatha by performing His last rites"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered Rajagopuram facing East",
    "Moolavar Form: Reclining posture facing East (Kidantha Thirukkolam), four-armed (Chaturbhuja) with Jatayu carved near His feet receiving salvation",
    "Thaayar Form: Pottamarai Valli Thayar in a distinct shrine",
    "Urchavar Form: Valvil Rama carrying His bow along with Sita, Lakshmana, and Hanuman"
   ],
   "literature": [
    "Project Madurai Transcripts (Periya Thirumozhi 8.1)",
    "Video Search Query: \"Pullambhootangudi Valvil Rama Sthala Puranam Velukkudi\""
   ]
  }
 },
 "aadanoor": {
  "serial": 10,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Aadhanoor Village, Papanasam Taluk, Thanjavur District, Tamil Nadu. Located ~5 km from Swami Malai, near Thirupullambhootangudi",
   "sthalaVriksham": "Maamaram (Mango Tree - Mangifera indica)",
   "vimanam": "Pranava Vimanam",
   "theertham": "Surya Pushkarini / Kamadhenu Theertham",
   "posture": "Kidantha Thirukkolam (Reclining posture facing East)",
   "orientation": "Facing East",
   "gps": "10.9812° N, 79.3241° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஆண்டளக்கும் ஐயன் / ஆதிகேசவப் பெருமாள் Sanskrit: आण्डळक्कुमैयन् / आदिकेशव Transliteration: Aandavanakkumayan / Aadhikeshava Perumal"
    },
    "thaayar": {
     "name": "Bhargavi Thayar / Kamalasani (பார்கவி / கமலவாசினி)",
     "legend": "Daughter of Sage Bhrigu, seated in a separate shrine in the southern precinct"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Aadhikeshava Perumal (ஆதிகேசவன்)"
    },
    "etymology": "Cast in Panchaloha, standing in serene grace flanked by dual Thaayars",
    "thaayar": {
     "name": "Sridevi & Bhudevi",
     "legend": "Positioned beside Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars + Kamadhenu & Thirumangai Azhwar"
  },
  "puranam": {
   "prathyaksham": "Kamadhenu, Sage Bhrigu, and Thirumangai Azhwar",
   "timeline": "Architecture dates back to the Medieval Chola Period (10th-11th Century CE) Inscriptions detail royal grants for main lighting (Nanda Deepam) and maintenance of the Pranava Vimanam",
   "literature": [
    "Explicitly praised in Periya Thirumozhi and recorded in Guruparamparai Prabhavam (biographies of Srivaishnava Acharyas)"
   ],
   "legend": [
    "Kamadhenu’s Penance — Kamadhenu, the celestial boon-granting cow, felt proud of her divine capabilities. To cleanse her pride, she performed intense penance at Aadhanoor (Aan = Cow + Adhan = Place + Oor = Abode). Lord Vishnu appeared before her, accepting her worship, and placed her image in the sanctum itself",
    "Story of Thirumangai Azhwar & the Measuring Ruler — During the construction of the massive outer rampart walls (Mathil) of the Srirangam temple, Thirumangai Azhwar ran out of funds to pay the laborers. Lord Vishnu appeared as a merchant carrying a measuring scroll (Olai Chuvadi) and a stylus (Ezhuthani), offering to pay workers with sand from the bank of the Kollidam river. For honest workers, the sand turned into pure gold; for lazy or dishonest workers, it remained sand. When the workers pursued the merchant in astonishment, He ran and reclined here at Aadhanoor as Aandavanakkumayan (The Lord who measures labor and grants appropriate reward)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (11.8.1)",
     "tamil": "இல்லாத வெந்நரகத்து எய்புறுவர்க்கு உய்யும் வகை* சொல்லாத நல்லறமே சொல்லுவேன் — புல்லார் உடன்பிரியா வெண்ணரகம் உக்கனபோன்று ஆங்கே* ஆதனூர் மேயானை ஆர்த்து!",
     "transliteration": "Illādha vennaragaththu eybuṟuvarkku uyyum vagai* Sollādha nallaṟamē solluvēn — pullār Uḍanpiriyā veṇnaragam ukkanapōnṟu āṅgē* Ādhanūr mēyānai ārththu!",
     "wordMeanings": [
      [
       "Illādha vennaragaththu",
       "From the terrible, agonizing hellish realms"
      ],
      [
       "Eybuṟuvarkku uyyum vagai",
       "To show the path of salvation for those who suffer"
      ],
      [
       "Sollādha nallaṟamē solluvēn",
       "I shall proclaim the supreme righteousness never spoken before"
      ],
      [
       "Ādhanūr mēyānai ārththu",
       "By binding my heart firmly to the Supreme Lord residing in Aadhanoor!"
      ]
     ],
     "significance": "Thirumangai Azhwar asserts that binding one's heart to Lord Aandavanakkumayan of Aadhanoor is the single most potent Dharma to save humanity from hellish suffering"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered Rajagopuram facing East",
    "Moolavar Form: Reclining on Adisesha facing East, holding an Olai Chuvadi (palm scroll) and Ezhuthani (stylus) in His hands, with Kamadhenu sculptured near His head",
    "Thaayar Form: Bhargavi Thayar seated gracefully in her individual shrine",
    "Urchavar Form: Aadhikeshava Perumal carrying classical Panchayudhas (five weapons)"
   ],
   "literature": [
    "Dravida Veda Text Archive: Project Madurai (Periya Thirumozhi 11.8.1)",
    "Video Search Query: \"Aadhanoor Divya Desam Aandavanakkumayan History\""
   ]
  }
 },
 "kumbakonam": {
  "serial": 11,
  "profile": {
   "regionNote": "Choza Naadu (Heart of Kumbakonam)",
   "location": "Kumbakonam Town, Thanjavur District, Tamil Nadu. Landmark: Near Kumbakonam Main Bazaar & Town High School Road",
   "sthalaVriksham": "Magizham Tree (Mimusops elengi)",
   "vimanam": "Vaidheega Vimanam (shaped as a chariot drawn by horses and elephants)",
   "theertham": "Hema Pushkarini (Potramarai Kulam) / Cauvery River",
   "posture": "Udhana Kidantha Thirukkolam",
   "orientation": "Facing East",
   "gps": "10.9597° N, 79.3750° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "சார்ங்கபாணி / ஆராவமுதன் Sanskrit: शार्ङ्गपाणि / आरावामृद Transliteration: Sarangapani / Aravamudhan"
    },
    "thaayar": {
     "name": "Komalavalli Thayar (கோமளவல்லி தாயார்)",
     "legend": "Born out of the golden lotus in Potramarai Kulam as the daughter of Sage Hema Maharishi. Resides in her own grand sanctum"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Aravamudhan (ஆராவமுதன்)"
    },
    "etymology": "Magnificent bronze image carrying the Sarnga bow, Shankha, and Chakra",
    "thaayar": {
     "name": "Komalavalli Thayar",
     "legend": "Accompanies Aravamudhan during major car festivals (Rathothsavam)"
    }
   },
   "sanctumNote": "No Thaayars inside Moolavar Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Hema Maharishi, Surya Deva, and Nathamuni",
   "timeline": "Chola Foundations: Epigraphs record major expansions by Vikrama Chola and Kulottunga Chola I Vijayanagara & Nayak Splendor: The massive 147-foot-tall, 11-tiered Rajagopuram and the stone chariot sanctum were built by Vijayanagara Empire kings and later fortified by Krishnadevaraya and Tanjore Nayaks",
   "literature": [
    "Mentioned in Silappatikaram, Koyil Olugu, and Srimad Bhagavata Purana"
   ],
   "legend": [
    "Origin Legend & Hema Maharishi's Penance — Sage Hema Maharishi performed intense austerities in Potramarai Kulam to get Goddess Lakshmi as his daughter. She emerged from a golden lotus as Komalavalli. Lord Vishnu descended from Vaikuntha in a cosmic chariot (Ratha) armed with His bow Sarnga to marry her",
    "The Miracle of Udhana Kidantha Posture — When Nammalwar sang Aravamudhe Adiyen Ulam Nindru Akalaaye (Thiruvaimozhi 5.8.1), he called out, \"Will You not speak to me, O Insatiable Nectar?\" Moved by Nammalwar's intense devotion, Lord Sarangapani began rising from His reclining pose. Nammalwar, overwhelmed by the Lord's physical effort, pleaded with Him to remain in that half-raised pose (Udhana Kidantha)",
    "Restoration of 4,000 Divya Prabandham — It was here that Nathamuni heard local devotees reciting the 11 Pasurams of Nammalwar ending with Aravamudhan. Inspired to recover all 4,000 verses, Nathamuni traveled to Alwarthirunagari, meditated on Nammalwar, and brought back the complete Nalayira Divya Prabandham to light"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumazhisai",
     7
    ],
    [
     "nammazhwar",
     11
    ],
    [
     "periyazhwar",
     3
    ],
    [
     "andal",
     1
    ],
    [
     "thirumangai",
     25
    ],
    [
     "bhoothath",
     2
    ],
    [
     "pey",
     2
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (5.8.1)",
     "tamil": "ஆராவமுதே அடியேனுடலம் நின்பாலன்பாயே* நீராயலைந்து கரைய உருக்குகின்ற நெடுமாலே* சீரார்செந்நெல் கவரிவீசும் செழுநீர்க்குடந்தையுள்* ஏரார் கோலத்திருவுருவம் கண்டேன் எழுகேனே.",
     "transliteration": "Ārāvamudhē aḍiyēnuḍalam ninbālanbāyē* Nīrāyalaindhu karaiya urukkugindra neḍumālē* Sīrārseṇnel kavarivīsum seḻunīrkkuḍandhaiyuḷ* Ērār kōlaththiruvuṟuvam kaṇḍēn eḻugēnē",
     "wordMeanings": [
      [
       "Ārāvamudhē",
       "O Insatiable Nectar!"
      ],
      [
       "Aḍiyēn uḍalam ninbāl anbāyē",
       "My body melts away in sheer love for You"
      ],
      [
       "Nīrāyalaindhu karaiya urukkugindra neḍumālē",
       "O Supreme Being who dissolves my soul like water!"
      ],
      [
       "Sīrār seṇnel kavarivīsum",
       "Where rich red-paddy fields wave like whisk-fans"
      ],
      [
       "Seḻunīr kkuḍandhaiyuḷ",
       "In the fertile water-rich city of Thirukkudanthai"
      ],
      [
       "Ērār kōlath thiruvuṟuvam kaṇḍēn",
       "Having witnessed Your exquisitely beautiful reclining form"
      ],
      [
       "Eḻugēnē",
       "How can I ever leave or move away?"
      ]
     ],
     "significance": "This seminal verse led to the recovery of the entire Nalayira Divya Prabandham. Nammalwar captures the essence of Bhakti Yoga where the individual soul completely melts into divine love upon witnessing Lord Aravamudhan"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 11-tiered, 147-foot monumental gateway carved with Bharatanatyam karana sculptures",
    "Moolavar Form: Reclining on Adisesha in Udhana Kidantha posture (torso partially raised), holding Sarnga bow, facing East inside a stone chariot sanctum",
    "Thaayar Form: Komalavalli Thayar in royal seated pose within her grand independent shrine (Padi Thaanda Pathini tradition—she never leaves her shrine)",
    "Urchavar Form: Aravamudhan cast in Panchaloha holding the five celestial weapons"
   ],
   "literature": [
    "Project Madurai Archives (Thiruvaimozhi 5.8)",
    "Video Search Query: \"Sarangapani Temple History Velukkudi Krishnan Upanyasam\""
   ]
  }
 },
 "thirunandhipuram": {
  "serial": 12,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Nathan Koil Village, Korukkai Post, Kumbakonam Taluk, Thanjavur District, Tamil Nadu. Located ~5 km south of Kumbakonam",
   "sthalaVriksham": "Shenbagam (Champaka / Michelia champaca)",
   "vimanam": "Mandara Vimanam",
   "theertham": "Nandi Theertham / Pushkarini",
   "posture": "Irundha Thirukkolam (Seated posture facing West)",
   "orientation": "Facing West",
   "gps": "10.9322° N, 79.3791° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஜெகன்னாதப் பெருமாள் / நந்தினாதன் Sanskrit: जगन्नाथ / नन्दिनाथ Transliteration: Jagannatha Perumal / Nandhinathan"
    },
    "thaayar": {
     "name": "Shenbagavalli Thayar (செண்பகவல்லி தாயார்)",
     "legend": "Named after the divine Shenbagam groves of the region; seated in a separate shrine facing South"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Jagannathan (ஜெகன்னாதன்)"
    },
    "etymology": "Radiant four-armed Panchaloha image seated with Abhaya and Varada Mudras",
    "thaayar": {
     "name": "Shenbagavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars"
  },
  "puranam": {
   "prathyaksham": "Nandi Deva and King Sibhi",
   "timeline": "Pallava Era Construction: Constructed during the reign of Pallava King Nandivarman II (8th Century CE). The structural plan mirrors the Vinnagaram style (similar to Parameswara Vinnagaram / Kanchi Vaikuntha Perumal Temple) Inscriptions record structural renovations by Chola King Rajendra I and Vijayanagara rulers",
   "literature": [
    "Recorded in Periya Thirumozhi and Pallava epigraphical records (Nandivarman Prashasti)"
   ],
   "legend": [
    "Legend of Nandi’s Curse & Salvation — Nandi, the Vahana of Lord Siva, committed an inadvertent transgression by guarding the doorway while Siva and Parvati were private, preventing Sage Durvasa from entering. Cursed with physical agony and loss of radiance, Nandi sought counsel from Siva, who directed him to perform penance to Lord Vishnu in the Shenbagam forest. Nandi performed intense austerity here; Lord Vishnu appeared facing West and cleansed his curse. Hence, the shrine is called Nandipura Vinnagaram",
    "Goddess Mahalakshmi’s Penance — Goddess Lakshmi meditated here under the Shenbagam trees to re-enter the chest of Lord Vishnu, giving the site the name Shenbagaranyam"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (5.10.1)",
     "tamil": "நந்தியுறு மால்வரையி னொன்பொருளு மன்றி* அந்தர மிலாவுலகி னார்வமுற வைகி* சிந்தைசெய்து தேவர்களெ லாம்வழிக ாடாத* நந்திபுர விண்ணகரம் நண்ணுமட நெஞ்சே!",
     "transliteration": "Nandhiyuṟu mālvarayi noṉporuḷu maṉṟi* Andhara milāvulagi nārvamuṟa vaigi* Sindhaiseydhu dēvargaḷe lāmvaḻi kāḍātha* Nandhipura viṇṇagaram naṇṇumaḍa neñjē!",
     "wordMeanings": [
      [
       "Nandhiyuṟu mālvarayin",
       "Like the great Mount Nandi carrying spiritual wealth"
      ],
      [
       "Noṉporuḷu maṉṟi",
       "Revealing the ultimate imperishable Truth"
      ],
      [
       "Andhara milāvulagi nārvamuṟa vaigi",
       "Loving all living beings of the universe without discrimination"
      ],
      [
       "Sindhaiseydhu dēvargaḷelām vaḻikāḍātha",
       "Where celestial beings meditate on Him to find the path of salvation"
      ],
      [
       "Nandhipura viṇṇagaram naṇṇumaḍa neñjē",
       "O simple mind! Reach out and seek refuge at Nandipura Vinnagaram!"
      ]
     ],
     "significance": "Thirumangai Azhwar commands his own heart to take refuge at Nandipura Vinnagaram, declaring it as the sacred spot where even the Celestials (Devas) learn the supreme path of surrender (Prapatti)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered Rajagopuram facing West, reflecting Pallava architectural geometry",
    "Moolavar Form: Seated posture (Irundha Thirukkolam) facing West, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Shenbagavalli Thayar seated in a south-facing sanctum",
    "Urchavar Form: Jagannatha Perumal in seated metallic form with divine emblems"
   ],
   "literature": [
    "Project Madurai (Periya Thirumozhi 5.10)",
    "Video Search Query: \"Nathan Koil Nandipura Vinnagaram History Velukkudi\""
   ]
  }
 },
 "thirucherai": {
  "serial": 13,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirucherai Village, Kumbakonam Taluk, Thanjavur District, Tamil Nadu. Located ~15 km mud-road/highway south of Kumbakonam on the Tiruvarur road",
   "sthalaVriksham": "Maamaram (Mango Tree - Mangifera indica)",
   "vimanam": "Sara Vimanam",
   "theertham": "Sara Pushkarini / Mudikondan River",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "10.8783° N, 79.4542° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "சாரநாதப் பெருமாள் Sanskrit: सारनाथ / शरण्यपति Transliteration: Saranatha Perumal"
    },
    "thaayar": {
     "name": "Gnanavalli Thayar / Saranayagi (ஞானவல்லி / சாரநாயகி)",
     "legend": "The Consort of Divine Wisdom; resides in an independent shrine in the outer courtyard"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Saranathan (சாரநாதன்)"
    },
    "etymology": "Standing Panchaloha idol accompanied by five Thaayars (Sridevi, Bhudevi, Neeladevi, Mahalaksmi, and Saranayagi)",
    "thaayar": {
     "name": "Pancha Lakshmi (5 Consorts)",
     "legend": "Unique feature: Five Thaayars accompany the Lord during festive processions"
    }
   },
   "sanctumNote": "Five Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, River Kaveri, and Sage Markandeya",
   "timeline": "Structural developments by Chola kings (Parantaka Chola I and Rajaraja I) Major contributions by Azhagappa Nayak, minister of Tanjore Nayak kingdom, who used stone materials meant for royal buildings to construct the massive temple walls and mandapams",
   "literature": [
    "Detailed in Periya Thirumozhi, Koyil Olugu, and Kaveri Mahatmyam"
   ],
   "legend": [
    "Legend of the Pot of Clay & Pralaya — When the cosmic Deluge (Pralaya) threatened to destroy the universe, Lord Brahma was instructed by Lord Vishnu to create a strong mud pot (Kudam) to preserve the seeds of creation and the Vedas. Brahma tried making pots out of mud from various sacred sites, but all melted in the deluge waters. Finally, Brahma took mud from Thirucherai, which held firm against the Pralaya. Hence, the spot was named Thirucherai (Cheru = Rich fertile mud) and the Lord as Saranathan (Essence of all strength)",
    "The Trial of River Kaveri vs. Ganga — River Kaveri meditated upon Lord Vishnu at Thirucherai to achieve a status higher than River Ganga. Lord Vishnu appeared before her with His five consorts and granted her wish, declaring that Kaveri at Thirucherai would be purer than Ganga because He resides permanently on her banks. Kaveri was also blessed to embrace the Lord as an infant in her lap"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     13
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (7.9.1)",
     "tamil": "கொல்லார் முல்லைக் கூரெயிறு நக்கக் குடம்பைக் குரம்பை புக்கு* எல்லார் பூணும் எல்லாமும் நல்கும் எம்மான் எழிலாரும்* சொல்லார் தமிழ்நூல் புலவர் பாடும் சுடர்பொன் மணிமாடம்* செல்லார் திருச்சேறைச் சாரநாதனைச் சென்று சேர்மின்களே!",
     "transliteration": "Kollār mullaik kūreyiṟu nakkak kuḍambaik kurambai pukku* Ellār pūṇum ellāmum nalgum emmān eḻilārum* Sollār thamiḻnūl pulavar pāḍum suḍarpon maṇimāḍam* Sellār thiruchchēṟaich chāranāthanaiich cheṇṟu sērmiṅgaḷē!",
     "wordMeanings": [
      [
       "Kollār mullaik kūreyiṟu nakka",
       "As jasmine buds smile displaying sharp beauty"
      ],
      [
       "Ellār pūṇum ellāmum nalgum emmān",
       "My Lord who grants all ornaments, wealth, and spiritual bliss"
      ],
      [
       "Eḻilārum sollār thamiḻnūl pulavar pāḍum",
       "Sang by Tamil scholars filled with sweet poetical mastery"
      ],
      [
       "Suḍarpon maṇimāḍam",
       "Amid golden, gem-studded mansions reaching the sky"
      ],
      [
       "Sellār thiruchchēṟaich chāranāthanai",
       "Unto Lord Saranatha of Thirucherai"
      ],
      [
       "Cheṇṟu sērmiṅgaḷē",
       "Go and surrender at His lotus feet!"
      ]
     ],
     "significance": "Thirumangai Azhwar urges all humanity to take refuge in Saranatha Perumal, highlighting that He is the ultimate granter of both worldly prosperity and eternal liberation (Moksha)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Impressive 9-tiered, 120-foot-tall Rajagopuram facing East",
    "Moolavar Form: Tall standing deity (Nindra Thirukkolam) flanked by 5 Thaayars inside the sanctum, along with Sage Markandeya and River Kaveri in kneeling postures",
    "Thaayar Form: Gnanavalli Thayar in a separate grand shrine",
    "Urchavar Form: Saranatha Perumal surrounded by Pancha Lakshmis"
   ],
   "literature": [
    "Project Madurai Text Transcripts (Periya Thirumozhi 7.9)",
    "Video Search Query: \"Thirucherai Saranathan Temple History Velukkudi Krishnan\""
   ]
  }
 },
 "thirukkoodalur": {
  "serial": 14,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Vadakurangaduthurai / Thirukkoodalur, Papanasam Taluk, Thanjavur District, Tamil Nadu. Located ~15 km west of Kumbakonam on the Tanjore highway",
   "sthalaVriksham": "Palasa Tree (Butea monosperma / Jackfruit tree variant)",
   "vimanam": "Suddhasatva Vimanam",
   "theertham": "Chakra Theertham / Cauvery River",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "10.9234° N, 79.2218° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஜெகத்ரக்ஷகன் / வையாளி நாதன் / உய்யவந்தார் Sanskrit: जगद्रक्षक / जगन्नाद Transliteration: Jagathrakshaka Perumal / Vaiyamatha Perumal"
    },
    "thaayar": {
     "name": "Padmasani Thayar / Pushpavalli (பத்மாசனி / புஷ்பவல்லி)",
     "legend": "Lotus-seated Goddess; positioned in her own shrine in the north corridor"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Jagathrakshakan / Uyyavanthar (உய்யவந்தார்)"
    },
    "etymology": "\"The Redeemer who arrived to save humanity.\" Standing Panchaloha form",
    "thaayar": {
     "name": "Padmasani & Andal",
     "legend": "Accompany Urchavar during Brahmothsavam processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars"
  },
  "puranam": {
   "prathyaksham": "King Ambarisha, Sage Bharadhwaja, and Devas",
   "timeline": "Ancient Chola structure renovated during the early Chola period (10th Century CE) by Rani Sembiyan Mahadevi Epigraphs record endowments for maintaining daily lamps (Nanda Deepam) and feeding pilgrims",
   "literature": [
    "Recorded in Periya Thirumozhi and Ambarisha Charithram of Srimad Bhagavata Purana"
   ],
   "legend": [
    "Legend of Confluence (Koodal) — All sacred rivers (Ganga, Yamuna, Saraswati, Narmada, Godavari, and Kaveri) along with devas and sages gathered (Koodudhal) at this site to worship Lord Vishnu and get purified of accumulated sins. Hence, the shrine acquired the name Thirukkoodalur (The City of Confluence)",
    "Legend of Ambarisha & Durvasa — King Ambarisha, a devout practitioner of Ekadashi Vratam, was about to break his fast on Dwadashi when Sage Durvasa arrived. Durvasa delayed returning from his bath, forcing Ambarisha to take a sip of water to respect the Dwadashi time window. Angered, Durvasa unleashed a demon to kill Ambarisha. Lord Jagathrakshakan dispatched His Sudarshana Chakra, which chased Durvasa across the cosmos until he sought refuge at Ambarisha's feet. The Lord manifested here to protect His devotee Ambarisha (Jagathrakshanam)",
    "Chakra Theertham Miracle — Lord Vishnu plunged His Chakra into the ground here to create the Chakra Theertham to refresh King Ambarisha"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (5.2.1)",
     "tamil": "தம்மையே புகழ்ந்து இச்சைபேசி தன்மெய் இழந்தும் போகமகிழ் உறுமப்* பொய்மையாளரைப் பாடாதே எந்தை புகழையே பாடும்* செம்மையாளரை நன்நெஞ்சே! சென்று காண்பாயேல்* தம்மையே கொடுக்கும் கூடலூர் எம் தலைவனை சென்று கண்டேனே!",
     "transliteration": "Thammaiyē pugaḻndhu ichchaipēsi thanmey iḻandhum pōgamagiḻ uṟumap* Poymaiyāḷarai pāḍādhē endhai pugaḻaiyē pāḍum* Semmaiyāḷarai nanneñjē! seṇṟu kāṇbāyēl* Thammaiyē koḍukkum kūḍalūr em thalaivanai seṇṟu kaṇḍēnē!",
     "wordMeanings": [
      [
       "Thammaiyē pugaḻndhu",
       "Self-praising wealthy mortals"
      ],
      [
       "Poymaiyāḷarai pāḍādhē",
       "Without singing praises of false, worldly men"
      ],
      [
       "Endhai pugaḻaiyē pāḍum",
       "Singing only the glory of my Father, the Supreme Lord"
      ],
      [
       "Semmaiyāḷarai nanneñjē! seṇṟu kāṇbāyēl",
       "O good heart! If you go and seek the righteous devotees"
      ],
      [
       "Thammaiyē koḍukkum",
       "He gives Himself entirely to His devotees"
      ],
      [
       "Kūḍalūr em thalaivanai seṇṟu kaṇḍēnē",
       "I went and beheld my Master of Thirukkoodalur!"
      ]
     ],
     "significance": "Thirumangai Azhwar declares that Lord Jagathrakshakan of Koodalur is so deeply bound by pure devotion that He surrenders Himself (Thammaiye Kodukkum) entirely to those who praise Him rather than mortal human kings"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram set on the banks of Cauvery",
    "Moolavar Form: Majestic standing deity (Nindra Thirukkolam) with Sridevi and Bhudevi, holding Shankha and Chakra",
    "Thaayar Form: Padmasani Thayar seated gracefully in her individual shrine",
    "Urchavar Form: Uyyavanthar in Panchaloha form accompanied by dual Thaayars"
   ],
   "literature": [
    "Project Madurai Archives (Periya Thirumozhi 5.2)",
    "Video Search Query: \"Thirukkoodalur Jagathrakshakan Temple History Velukkudi\""
   ]
  }
 },
 "nachiyar-kovil": {
  "serial": 15,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Nachiyar Koil Town, Kumbakonam Taluk, Thanjavur District, Tamil Nadu. Located ~9 km south-east of Kumbakonam on the Tiruvarur highway",
   "sthalaVriksham": "Vanchula Tree (Salix tetrasperma / Willow variant)",
   "vimanam": "Srinivasa Vimanam",
   "theertham": "Mani Muktha Pushkarini / Anjooran Pillai Tank",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "10.9161° N, 79.4451° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஶ்ரீநிவாஸன் / நம்பி Sanskrit: श्रीनिवास / सुगन्धिनाथ Transliteration: Srinivasa Perumal / Thirunaraiyur Nambi"
    },
    "thaayar": {
     "name": "Vanchulavalli Thayar / Nachiyar (வஞ்சுளவல்லி / நாச்சியார்)",
     "legend": "Manifested as the daughter of Sage Medhavi under the Vanchula tree. She takes absolute prominence; hence the temple is known as Nachiyar Koil"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Srinivasan (ஶ்ரீநிவாஸன்)"
    },
    "etymology": "Positioned slightly ahead of the Lord during all processions to denote her supremacy",
    "thaayar": {
     "name": "Vanchulavalli Thayar",
     "legend": "Positioned slightly ahead of the Lord during all processions to denote her supremacy"
    }
   },
   "sanctumNote": "Thaayar in Primary Position"
  },
  "puranam": {
   "prathyaksham": "Sage Medhavi, Garuda Deva, and Thirumangai Azhwar",
   "timeline": "Chola Construction: Core stone structures built by Chola King Sembiyan Kochengannan (who built 70 Mada Koils) Expanded by Rajaraja I, Kulottunga I, and later Tanjore Nayak kings",
   "literature": [
    "Extensively detailed in Periya Thirumozhi, Thirunaraiyur Nambi Pasurams, and Koyil Olugu"
   ],
   "legend": [
    "Legend of Sage Medhavi & Vanchulavalli — Sage Medhavi meditated under a Vanchula tree for Goddess Lakshmi to be born as his daughter. Lakshmi manifested as a child, whom he raised as Vanchulavalli. Lord Vishnu descended in five forms (Sankarshana, Pradyumna, Aniruddha, Purushottama, and Vasudeva) to seek her hand in marriage. Sage Medhavi agreed on the condition that his daughter would hold primary authority over all temple affairs and lead all processions. The Lord agreed; hence, the temple is called Nachiyar Koil (The Goddess's Temple)",
    "The Miracle of Kal Garuda (Stone Garuda) — The temple houses a unique image of Garuda carved out of stone. During the bi-annual Margazhi and Panguni festival processions, when Kal Garuda is carried out of his sanctum, he dynamically increases in weight:",
    "Starts needing 4 people to lift inside the sanctum",
    "Weight doubles requiring 8, then 16, 32, and finally 64 people as he steps out of the Rajagopuram!",
    "Drops of real sweat visibly emerge on the stone brow of Garuda during the procession. Upon returning into the temple, his weight progressively decreases back to 4 people",
    "Thirumangai Azhwar’s Initiation (Pancha Samskaram) — Lord Thirunaraiyur Nambi acted as the direct Acharya to Thirumangai Azhwar, initiating him into Srivaishnavism through Pancha Samskaram (sacred branding and mantra initiation). Thirumangai Azhwar sang 110 Pasurams exclusively for this Lord—the highest for any shrine after Srirangam and Tirumala"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     110
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (6.1.1)",
     "tamil": "திங்களானை திருமாலைத் தேவினை* எங்களுக்கில் அமுதத்தினை எம்மானை* நங்கள்நாயகனை நறைஊர் நின்ற* செங்கண் மாலையன்றித் தீர்த்திகளாரே?",
     "transliteration": "Thiṅgaḷāṉai thirumālaith thēviṉai* Eṅgaḷukkil amudhadhinaich chemmaiyai* Naṅgaḷ nāyagaṉai naṟaiūr ninṟa* Seṅgaṇ mālaiyaṉṟith thīrththigaḷārē?",
     "wordMeanings": [
      [
       "Thiṅgaḷāṉai",
       "Cool and radiant like the full moon"
      ],
      [
       "Thirumālaith thēviṉai",
       "Lord Vishnu, the Supreme Deva of Sri (Lakshmi)"
      ],
      [
       "Eṅgaḷukkil amudhadhiṉai",
       "The immortal nectar residing within our hearts"
      ],
      [
       "Naṅgaḷ nāyagaṉai",
       "Our ultimate Master and Sovereign"
      ],
      [
       "Naṟaiūr ninṟa",
       "Standing in grace at Thirunaraiyur"
      ],
      [
       "Seṅgaṇ mālaiyaṉṟith thīrththigaḷārē",
       "Who else but this red-eyed Lord can purify our souls?"
      ]
     ],
     "significance": "Thirumangai Azhwar establishes Lord Thirunaraiyur Nambi as his personal spiritual master (Acharya), declaring that no other deity possesses the power to purify the human jiva from eternal birth cycles"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered, 75-foot-tall Rajagopuram facing East",
    "Moolavar Form: Standing posture (Nindra Thirukkolam) with Vanchulavalli Thayar standing to His right side in the main Garbhagriha",
    "Thaayar Form: Vanchulavalli Thayar in prominent standing pose in the Garbhagriha",
    "Kal Garuda Form: Majestic stone sculpture of Garuda with spread wings, located in a dedicated sub-shrine in the outer prakaram"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 6.1 - 7.3)",
    "Video Search Query: \"Nachiyar Koil Kal Garuda Miracle Velukkudi Krishnan\""
   ]
  }
 },
 "thiruvelliyangudi": {
  "serial": 16,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thiruvelliyangudi, Sengalipuram Post, Kumbakonam Taluk, Thanjavur District, Tamil Nadu. Located ~19 km north-east of Kumbakonam via Cholapuram",
   "sthalaVriksham": "Kadali (Banana Tree - Musa acuminata)",
   "vimanam": "Pushkalavartha Vimanam",
   "theertham": "Sukra Pushkarini / Brahma Theertham / Indra Theertham",
   "posture": "Kidantha Thirukkolam (Reclining posture facing East). Unique feature: Reclining four-armed Sri Rama holding Shankha and Chakra",
   "orientation": "Facing East",
   "gps": "11.0558° N, 79.4444° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கோலவில்லி இராமன் / வைஷ்ணவக் கிரஹன் Sanskrit: कोलवलविल्ली श्रीराम / भार्गवप्रिय Transliteration: Kolavalavilli Ramar / Bhargavapriya"
    },
    "thaayar": {
     "name": "Maragathavalli Thayar (மரகதவல்லி தாயார்)",
     "legend": "\"The Emerald Vine Goddess\"; seated in an independent shrine within the inner corridor facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Kolavalavilli Ramar (கோலவில்லி இராமன்)"
    },
    "etymology": "Four-armed Panchaloha idol carrying the Sarnga/Kodandam bow alongside Sita, Lakshmana, and Garuda",
    "thaayar": {
     "name": "Maragathavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Sukracharya (Velli), Viswakarma, Brahma, and Indra",
   "timeline": "Architecture reflects Chola period origins (10th-11th Century CE) with subsequent Nayak structural additions Inscriptions record grants for maintaining daily oil lamps (Nanda Deepam) and conducting the Velliyangudi Velli-Kizhamai (Friday) festivals",
   "literature": [
    "Explicitly praised in Thirumangai Azhwar’s Periya Thirumozhi and recorded in Koyil Olugu"
   ],
   "legend": [
    "Legend of Shukracharya’s Eye & Penance — During the Vamana Avatar, when King Mahabali was granting three steps of land to Vamana, his Guru Shukracharya (also known as Velli in Tamil) realized Vamana was Lord Vishnu. To block the grant, Shukracharya turned into an insect and blocked the spout of the water vessel (Kamandalu). Lord Vamana used a sharp Dharba grass tip to clear the spout, accidentally piercing Shukracharya's eye. To regain his lost eye and vision, Shukracharya performed intense penance at this site. Lord Vishnu appeared before him, restored his eyesight, and accepted the site as Velliyangudi (Velli's abode)",
    "Viswakarma’s Temple Design — According to sthala puranam, Maya (the celestial architect of the Asuras) and Viswakarma (architect of the Devas) had a contest. Lord Vishnu instructed Viswakarma to build a divine temple here reflecting Vaikuntha itself"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (4.10.1)",
     "tamil": "நண்ணாத வாள்அரக்கர் ணெரிந்த வீழ நாலிரண்டு திண்தோளால் நறவ மல்கு* பண்ணார வண்டுரலும் தேன்செய் சோலைப் பழனங்கள் சூழ்ந்திருந்த பாறை மேலால்* கண்ணாரக் கண்டுகொண்டேன் கடியார் சோலைக் கார்மலிந்த மகரந்தக் கள்ளையுண்டு* விண்ணோர்கள் வெறிவண்டு பாடும் சோலை வெள்ளியங்குடியாரை வினவினேனே.",
     "transliteration": "Naṇṇādhā vāḷarakkar ṇerindha vīḻa nāliraṇḍu thiṇdōḷāl naṟava malgu* Paṇṇāra vaṇḍuralum thēņsey sōlaip paḻanaṅgaḷ sūḻndhirundha pāṟai mēlāl* Kaṇṇārak kaṇḍukoṇḍēn kaḍiyār sōlaik kārmalindha magarandhak kaḷḷaiyuṇḍu* Viṇṇōrgaḷ veṟivaṇḍu pāḍum sōlai veḷḷiyaṅguḍiyārai viḻavinēnē",
     "wordMeanings": [
      [
       "Naṇṇādhā vāḷarakkar ṇerindha vīḻa",
       "Crushing and vanquishing the unyielding sword-bearing demons"
      ],
      [
       "Nāliraṇḍu thiṇdōḷāl",
       "With His eight powerful, mighty arms"
      ],
      [
       "Paṇṇāra vaṇḍuralum",
       "Where bees hum sweet melodious tunes"
      ],
      [
       "Kaṇṇārak kaṇḍukoṇḍēn",
       "My eyes have feasted to their heart's content upon beholding Him"
      ],
      [
       "Veḷḷiyaṅguḍiyārai viḻavinēnē",
       "I sought and found the Supreme Lord residing in the lush groves of Thiruvelliyangudi!"
      ]
     ],
     "significance": "Thirumangai Azhwar expresses intense joy (Ananda) at beholding Lord Kolavalavilli Ramar, emphasizing how the Lord's physical presence at Thiruvelliyangudi eradicates all dark forces and fills the devotee's senses with divine nectar"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram set amidst traditional rural surrounding fields",
    "Moolavar Form: Reclining on Adisesha facing East (Kidantha Thirukkolam), four-armed, holding the Shankha and Chakra, with Garuda standing inside the sanctum holding the Lord's bow",
    "Thaayar Form: Maragathavalli Thayar in seated posture in her separate shrine",
    "Urchavar Form: Kolavalavilli Ramar in standing posture carrying the bow along with Sita and Lakshmana"
   ],
   "literature": [
    "Project Madurai Text Archive (Periya Thirumozhi 4.10)",
    "Video Search Query: \"Thiruvelliyangudi Divya Desam History Velukkudi Krishnan\""
   ]
  }
 },
 "thirukkannamangai": {
  "serial": 17,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirukannamangai, Tiruvarur District, Tamil Nadu. Located ~7 km west of Tiruvarur town on the Kumbakonam-Tiruvarur road",
   "sthalaVriksham": "Magizham Tree (Mimusops elengi)",
   "vimanam": "Utpala Vimanam / Jyotiraakara Vimanam",
   "theertham": "Darshana Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "10.7981° N, 79.5892° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பக்தவத்சலப் பெருமாள் / கண்ணமங்கை ஆண்டான் Sanskrit: भक्तवत्सल / कृष्णप्रिय Transliteration: Bhaktavatsala Perumal / Perumparakkadavul"
    },
    "thaayar": {
     "name": "Abhishevavalli Thayar / Kannamangai Nayagi (அபிஷேகவல்லி தாயார்)",
     "legend": "Born out of Darshana Pushkarini; married Lord Bhaktavatsala here. Resides in a dedicated shrine"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Perumparakkadavul (பெரும்புறக்கடவுள்)"
    },
    "etymology": "Majestic standing Panchaloha icon flanked by Sridevi and Bhudevi",
    "thaayar": {
     "name": "Abhishegavalli Thayar",
     "legend": "Accompanies Urchavar during all major festival processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Devas (in bee form), Goddess Abhishegavalli, and Sage Markandeya",
   "timeline": "Built by early Chola monarchs and later renovated by Kulottunga Chola I and Tanjore Nayak rulers Inscriptions record extensive land gifts (Devadana) for the maintenance of the Darshana Pushkarini and daily worship rituals",
   "literature": [
    "Explicitly recorded in Periya Thirumozhi and Srivaishnava Acharya hagiographies (Guruparamparai Prabhavam)"
   ],
   "legend": [
    "Legend of the Celestial Wedding & Bees — Goddess Mahalakshmi performed penance here to wed Lord Vishnu. All devas and rishis gathered to witness the divine wedding. Desiring to stay and witness the divine couple perpetually, the devas transformed into honeybees and constructed a hive in the main sanctum. The honeycomb remains protected in the temple sanctum to this day",
    "The \"Sthala Suddhi\" / Cosmic Refuge (Krishna Mangalam) — This shrine is considered the Krishna Mangala Kshetram, one of the five Pancha Krishna Kshetrams. It is believed that Lord Vishnu protects this site directly during the cosmic dissolution; hence it is called Perumparakkadavul (The Vast Protector)",
    "Story of Thirukannamangai Aandan — An Acharya named Thirukannamangai Aandan dedicated his life to sweeping and maintaining the temple courtyards. One day, seeing a dog being beaten near the temple, he entered into a debate on compassion, merged into the body of Lord Bhaktavatsala in the sanctum, and attained Moksha"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     14
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (7.10.1)",
     "tamil": "பெண்டிரால் சுகமுடைத்தென்று பேதையார் பிறர்க்கடைந்து* தண்டினால் தட்டப்பட்டுத் தம்பொருளிழந்து நிற்பார்* கண்டாயே நெஞ்சமே! நீ கண்ணமங்கையுள் மேவும்* வண்டார் பூம்பொழில் சூழ்ந்த பக்தவத்சலனைச் சேரே!",
     "transliteration": "Peṇḍirāl sugamuḍaiththeṉṟu pēdhaiyār piṟarkkaḍaindhu* Thaṇḍināl thaṭṭappaṭṭuth thamboruḷiḻandhu niṟpār* Kaṇḍāyē neñjamē! nī kaṇṇamaṅgaiyuḷ mēvum* Vaṇḍār pūmboḻil sūḻndha bhaktavatsalaṉaich chērē!",
     "wordMeanings": [
      [
       "Peṇḍirāl sugamuḍaiththeṉṟu",
       "Thinking worldly bodily pleasures yield true happiness"
      ],
      [
       "Pēdhaiyār... thamboruḷiḻandhu niṟpār",
       "Foolish people wander, get beaten down, and lose their true spiritual wealth"
      ],
      [
       "Kaṇḍāyē neñjamē",
       "Have you not seen this reality, O my mind?"
      ],
      [
       "Nī kaṇṇamaṅgaiyuḷ mēvum",
       "Therefore, you must reach Thirukannamangai"
      ]
     ],
     "significance": "Thirumangai Azhwar contrasts transient worldly attachments with the eternal, maternal protection offered by Lord Bhaktavatsala, declaring that total surrender (Saranagati) at Thirukannamangai rescues the jiva from earthly misery"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered east-facing Rajagopuram leading into a vast temple compound",
    "Moolavar Form: Imposing standing deity (Nindra Thirukkolam) facing East, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Abhishegavalli Thayar in seated pose within her separate shrine in the southern prakaram",
    "Urchavar Form: Perumparakkadavul cast in fine Panchaloha with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 7.10)",
    "Video Search Query: \"Thirukannamangai Bhaktavatsala Temple History Velukkudi\""
   ]
  }
 },
 "thirukkannapuram": {
  "serial": 18,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirukannapuram, Nagapattinam District, Tamil Nadu. Located ~27 km east of Tiruvarur and ~13 km from Nannilam",
   "sthalaVriksham": "Magizham Tree (Mimusops elengi)",
   "vimanam": "Utpalavataka Vimanam",
   "theertham": "Nithya Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East). Unique feature: The Lord walks forward with His right foot placed forward (Nadantha Thirukkolam)",
   "orientation": "Facing East",
   "gps": "10.9083° N, 79.7117° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "சௌரிராஜப் பெருமாள் / நீலமேகப் பெருமாள் Sanskrit: शौरिराज / नीलोत्पलमेघ Transliteration: Sowriraja Perumal / Neelamegha Perumal"
    },
    "thaayar": {
     "name": "Kannapura Nayagi / Sridevi (கண்ணபுர நாயகி தாயார்)",
     "legend": "Resides in her own dedicated shrine; celebrated for her divine grace during the annual marriage festival"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Sowriraja Perumal (சௌரிராஜப் பெருமாள்)"
    },
    "etymology": "Majestic Panchaloha icon shown in walking posture (Nadantha Thirukkolam) with hands extended in Abhaya Mudra",
    "thaayar": {
     "name": "Kannapura Nayagi, Padmini, Aandal, and Bhudevi",
     "legend": "Four consorts accompany Urchavar during major processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Vibhishana, King Uparichara Vasu, Garuda, and Sage Dhoramukha",
   "timeline": "Core structures date from early Chola period (9th-10th Century CE) with major additions by Chola emperors Rajaraja I and Rajendra I Inscriptions detail royal endowments for the Masi Magham sea-bath festival (Theerthavari) where Sowriraja Perumal travels to the Bay of Bengal coastline",
   "literature": [
    "Extensively praised in Periya Thirumozhi, Thiruvaimozhi, and Koyil Olugu"
   ],
   "legend": [
    "Legend of the Sowri (Lock of Hair) — A Chola king visited the temple, and the head priest handed him a flower garland previously offered to the Lord. The king found a strand of hair in the garland and angrily questioned the priest whether the deity had hair. To protect the priest's truthfulness, Lord Neelamegha Perumal manifested a thick, radiant lock of hair (Sowri) on the back of His icon when the king returned the next morning. Thus He came to be called Sowriraja Perumal",
    "The Ashtakshara Mantra Teaching — Thirukannapuram is revered as the site where Lord Vishnu Himself revealed the sacred Eight-Syllable Mantra (Om Namo Narayanaya) to Vibhishana and Sage Dhoramukha",
    "The Miracle of Muniyodharan Pongal — A devout lower-caste devotee named Muniyodharan used to offer hot Pongal to the Lord late at night. One night, unable to reach the temple before closing, he prayed outside. Lord Sowriraja accepted the offering spiritually, and the next morning, the temple priests found hot Pongal stains on the Moolavar's lips. This event is commemorated as the Muniyodharan Pongal ritual"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     100
    ],
    [
     "nammazhwar",
     11
    ],
    [
     "periyazhwar",
     1
    ],
    [
     "andal",
     1
    ],
    [
     "kulasekhara",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "kulasekhara",
     "work": "Perumal Thirumozhi (10.1)",
     "tamil": "தேட்டருந்திறல் தேனினையமிர்தை திருவேங்கடச்சுடரை* சூட்டரும்மணியை எனக்குற்றதுணையைத் தோற்றாவுருவை* ஆட்டங்கண்டடையாத ஆராவமுதை அடியேன்மனத்து* நாட்டமாய்நின்ற நறைஊர்நின்ற கண்ணபுரத்து எம்மானைக் கண்டுகொண்டேனே.",
     "transliteration": "Thēṭṭarundhiṟal thēṉinaiyamirdhai thiruvēṅgaḍachchuḍarai* Sūṭṭarummaṇiyai eṉakkuṟṟathuṇaiyaith thōṟṟāvuruvai* Āṭṭaṅgaṇḍaḍaiyādhā ārāvamudhai aḍiyēnmanaththu* Nāṭṭamāyniṉṟa naṟaiūrniṉṟa kaṇṇapuraththu emmāṉaik kaṇḍukoṇḍēnē",
     "wordMeanings": [
      [
       "Thēṭṭarundhiṟal thēṉinaiyamirdhai",
       "Rare treasure of sweet honey and immortal nectar"
      ],
      [
       "Thiruvēṅgaḍachchuḍarai",
       "The divine light shining at Tirumala"
      ],
      [
       "Eṉakkuṟṟa thuṇaiyai",
       "My supreme companion in all lifetimes"
      ],
      [
       "Ārāvamudhai",
       "The insatiable divine nectar"
      ],
      [
       "Kaṇṇapuraththu emmāṉaik kaṇḍukoṇḍēnē",
       "I have beheld my Lord who resides in Thirukannapuram!"
      ]
     ],
     "significance": "Kulasekara Azhwar synthesizes the cosmic glory of Tirumala with Thirukannapuram, recognizing Sowriraja Perumal as the supreme inner light (Chudar) that guides the soul to eternal liberation"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Magnificent 7-tiered Rajagopuram facing East with expansive outer prakarams",
    "Moolavar Form: Standing posture (Nindra/Nadantha Thirukkolam) with right foot slightly forward, holding the Sudarshana Chakra in Prayoga posture facing East",
    "Thaayar Form: Kannapura Nayagi seated in her dedicated shrine",
    "Urchavar Form: Sowriraja Perumal in walking stance carrying divine weapons, showing the miraculous Sowri (hair braid) on the reverse of the icon"
   ],
   "literature": [
    "Project Madurai Text Archives (Perumal Thirumozhi 10 & Periya Thirumozhi)",
    "Video Search Query: \"Thirukannapuram Sowriraja Perumal History Velukkudi Krishnan\""
   ]
  }
 },
 "thirukkannangudi": {
  "serial": 19,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirukannangudi, Kilvelur Taluk, Nagapattinam District, Tamil Nadu. Located ~2 km from Kilvelur on the Tiruvarur-Nagapattinam highway",
   "sthalaVriksham": "Kaya Tree (Memecylon umbellatum / Magizham variant)",
   "vimanam": "Utpala Vimanam",
   "theertham": "Ravana Pushkarini / Rama Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "10.7258° N, 79.7436° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "தாமோதரப் பெருமாள் / உலோகநாதப் பெருமாள் Sanskrit: दामोदर / लोकनाथ Transliteration: Damodara Perumal / Loganatha Perumal"
    },
    "thaayar": {
     "name": "Lokanayagi Thayar / Arvindavalli (அரவிந்தவல்லி / உலோகநாயகி)",
     "legend": "\"Lotus-like Goddess\"; resides in a separate shrine in the southern prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Damodara Perumal (தாமோதரப் பெருமாள்)"
    },
    "etymology": "Fine Panchaloha standing icon holding Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Lokanayagi Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Vasishta Maharishi and Thirumangai Azhwar",
   "timeline": "Core structure constructed during early Chola reign (10th Century CE) Inscriptions record structural renovations by Rajendra Chola I and Nayak rulers",
   "literature": [
    "Explicitly recorded in Periya Thirumozhi and Srivaishnava Acharya commentaries"
   ],
   "legend": [
    "The Legend of the Four Marvels (Nangu Adhisayangal) — Thirukannangudi is associated with four unique sthala miracles:",
    "Kaya Maram (Un-drying Tree) — The sacred tree under which Thirumangai Azhwar hid golden idols never dries up",
    "Kaya Kinaru (Un-tasted Well) — A well whose water was declared sweet by the Lord",
    "Oora Vizhuthi (Un-rooted Banyan Branches) — Aerial roots of the banyan trees that never touch the ground out of respect for the Lord",
    "Thalaikavizhntha Thamarai (Bowed Lotus) — Lotuses in the tank that bow down toward the sanctum",
    "Thirumangai Azhwar’s Gold Deposit — While constructing the outer walls of Srirangam temple, Thirumangai Azhwar stole a solid gold Buddha statue from Nagapattinam. While fleeing, he rested at Thirukannangudi and hid the golden idol under the Kaya tree. When local farmers came to till the land, Azhwar cleverly engaged them in arguments to buy time until he could retrieve the gold safely"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (9.1.1)",
     "tamil": "வனவாசம் புகவேண்டி மனையாளைத் துறந்திட்ட* முனிவாணர் முனிவெய்தி மூவாத முதலானை* கனிவாரு மலர்ச்சோலை திருக்கண்ணங்குடி நின்ற* தனிநாயகனை அடியேன் கண்டுகொண்டேனே!",
     "transliteration": "Vanavāsam pugavēṇḍi manaiyāḷaith thuṟandhiṭṭa* Munivāṇar muniveydhi mūvādha mudhalāṉai* Kanivāru malarchchōlai thirukkaṇṇaṅguḍi niṉṟa* Thaṉināyaganai aḍiyēṉ kaṇḍukoṇḍēnē!",
     "wordMeanings": [
      [
       "Vanavāsam pugavēṇḍi",
       "Desiring to enter forest hermitages for penance"
      ],
      [
       "Manaiyāḷaith thuṟandhiṭṭa munivāṇar",
       "Sages who renounced family life"
      ],
      [
       "Mūvādha mudhalāṉai",
       "Seeking the Ageless Primeval Lord"
      ],
      [
       "Kanivāru malarchchōlai thirukkaṇṇaṅguḍi niṉṟa",
       "Standing in Thirukannangudi surrounded by fruit and flower-rich groves"
      ],
      [
       "Thaṉināyaganai aḍiyēṉ kaṇḍukoṇḍēnē",
       "I, His humble servant, have beheld that Supreme Sovereign Lord!"
      ]
     ],
     "significance": "Thirumangai Azhwar declares that the same Primeval Lord sought by forest ascetics through rigorous tapas is easily accessible to simple devotees standing right here in Thirukannangudi"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered Rajagopuram facing East",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing East, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Lokanayagi Thayar seated in her separate shrine",
    "Urchavar Form: Damodara Perumal cast in Panchaloha holding divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 9.1)",
    "Video Search Query: \"Thirukannangudi Damodara Perumal Temple Velukkudi Krishnan\""
   ]
  }
 },
 "nagapattinam": {
  "serial": 20,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Nagapattinam Town, Nagapattinam District, Tamil Nadu. Located ~2 km from Nagapattinam Railway Station/Port",
   "sthalaVriksham": "Mango Tree (Mangifera indica)",
   "vimanam": "Soundarya Vimanam",
   "theertham": "Sara Pushkarini / Deva Pushkarini",
   "posture": "Moolavar Forms (Triad in single complex): | Standing (Nindra Thirukkolam) facing East in main sanctum | Sitting (Irundha Thirukkolam) on Adisesha in the upper tier | Reclining (Kidantha Thirukkolam) in the rear tier",
   "orientation": "Facing East",
   "gps": "10.7656° N, 79.8428° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "சௌந்தர்யராஜப் பெருமாள் / அழகிய மணவாளன் Sanskrit: सौन्दर्यराज / सुन्दरजामातृ Transliteration: Soundararaja Perumal / Azhagiya Manavalan"
    },
    "thaayar": {
     "name": "Soundaryavalli Thayar (சௌந்தர்யவல்லி தாயார்)",
     "legend": "Seated in an independent grand shrine in the south-west corridor of the complex"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Soundararajan (சௌந்தர்யராஜன்)"
    },
    "etymology": "Breathtaking Panchaloha idol holding the bow, arrow, Shankha, and Chakra",
    "thaayar": {
     "name": "Soundaryavalli Thayar",
     "legend": "Accompanies Urchavar during temple festivals and sea-bath rituals"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Main Garbhagriha"
  },
  "puranam": {
   "timeline": "Chola Maritime Supremacy: Epigraphs record massive endowments by Rajaraja I and Rajendra I. The temple was patronized by merchant guilds trading with South-East Asia (Sri Vijaya Empire) Nayak & Maratha Period: The 7-tiered Rajagopuram and broad outer prakarams were constructed by Tanjore Nayaks and expanded by Tanjore Marathas",
   "literature": [
    "Praised in Periya Thirumozhi and recorded in Nagapattinam Sthala Purana"
   ],
   "legend": [
    "Legend of Nagaraja’s Penance — Adisesha (the Serpent King, Nagaraja) performed intense penance at this coastal site to obtain the privilege of serving as the divine bed for Lord Vishnu in all His cosmic manifestations. Pleased by his devotion, Lord Vishnu manifested His threefold postures (Standing, Seated, and Reclining) and blessed the town to be called Naganadu / Nagapattinam",
    "Blessing to Dhruva — Lord Soundararaja granted darshan to the child-sage Dhruva here, establishing the Dhruva Pada (immortal pole star realm)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (9.2.1)",
     "tamil": "பொன்னார் உலகம் புகழும் புகழால்* என் ஆவியை என்றும் இனிது அடையும்* அந்நாள் அறியாதவன் அல்லன் எம்மான்* நன்னாகை நாகம்படப் நாகை நகரே.",
     "transliteration": "Ponnār ulagam pugaḻum pugaḻāl* Eṉ āviyai eṉṟum iniḍu aḍaiyum* Aṉṉāḷ aṟiyādhavan allaṉ emmān* Naṉnāgai nāgambaḍap nāgai nagarē",
     "wordMeanings": [
      [
       "Ponnār ulagam pugaḻum pugaḻāl",
       "Honored with glory praised across the golden celestial worlds"
      ],
      [
       "Eṉ āviyai eṉṟum iniḍu aḍaiyum",
       "Sweeting and redeeming my soul eternally"
      ],
      [
       "Emmān",
       "My Supreme Master"
      ],
      [
       "Nāgai nagarē",
       "Residing in the coastal holy city of Nagapattinam!"
      ]
     ],
     "significance": "Thirumangai Azhwar celebrates Lord Soundararaja of Nagapattinam as the ultimate savior of human souls, whose glory bridges both earthly oceans and celestial realms"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 7-tiered, 90-foot Rajagopuram facing East near the coastal shore",
    "Moolavar Form: Threefold postures within the complex — Standing (Nindra) ground level, Seated (Irundha) middle level, and Reclining (Kidantha) upper level",
    "Thaayar Form: Soundaryavalli Thayar seated gracefully in her dedicated shrine",
    "Urchavar Form: Soundararajan holding the bow and arrows alongside divine weapons"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 9.2)",
    "Video Search Query: \"Nagapattinam Soundararaja Perumal Temple History Velukkudi\""
   ]
  }
 },
 "thalaichangadu": {
  "serial": 21,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thalaichangadu Village, Sirkazhi / Tarangambadi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~18 km from Mayiladuthurai on the Sirkazhi-Akkur route",
   "sthalaVriksham": "Senbagam (Michelia champaca) / Plumeria",
   "vimanam": "Chandra Vimanam",
   "theertham": "Chandra Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1353° N, 79.7917° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "நான்மதியப் பெருமாள் / தலைச்சங்க நாதன் Sanskrit: चन्द्रनाथ / शिरःशङ्खनाथ Transliteration: Naanmadiya Perumal / Thalaichanga Nathan"
    },
    "thaayar": {
     "name": "Thalaichanga Nachiyar / Senkamalavalli Thayar (தலைச்சங்க நாச்சியார் / செங்கமலவல்லி)",
     "legend": "Seated in her own dedicated shrine within the inner corridor"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Venchudar Perumal / Naanmadiya Perumal (வெண்சுடர் பெருமாள்)"
    },
    "etymology": "\"The Lord of Pure White Radiance.\" Standing Panchaloha icon holding a natural Valampuri Sanghu (right-whorled conch) in His hand",
    "thaayar": {
     "name": "Senkamalavalli Thayar",
     "legend": "Accompanies Urchavar during temple festivals"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Chandra Deva (Moon God)",
   "timeline": "Core stone architecture built during early Chola period (9th-10th Century CE) Inscriptions record grants by Medieval Cholas for the maintenance of the Chandra Pushkarini and night festival illuminations",
   "literature": [
    "Explicitly recorded in Thirumangai Azhwar’s Periya Thirumozhi and Srivaishnava sthala chronicles"
   ],
   "legend": [
    "Chandra’s Curse & Salvation — Chandra (the Moon God) was cursed by Daksha Prajapati for showing favoritism among his 27 wives, causing his body to wane and lose its celestial brilliance. Chandra performed intense penance here and bathed in the tank. Lord Vishnu appeared, freed Chandra from his curse, and placed a part of Chandra’s radiant moon-crescent on His own forehead/crown (Naan-Madhi). Hence, the tank is called Chandra Pushkarini",
    "The Cosmic Conch Source (Valampuri Sanghu) — According to sthala puranam, the most sacred right-whorled conches (Valampuri Sanghu) used in divine worship originate from the ocean bed off this region's ancient coastline. Lord Vishnu holds the primeval conch (Thalai-Sanghu) here"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     2
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.9.1)",
     "tamil": "தலைச்சங்க நால்மதியாய் நின்றானை தேனைத்* தலைச்சங்க மேல்வளரும் தண்துழாய் மாலையானை* தலைச்சங்க நால்மதியாய் நின்றான் தன் தொண்டர்க்கு* அலைச்சங்க முன்கையார்த் தாளே ஆளாகின்றேனே.",
     "transliteration": "Thalaichchaṅga nālmadhiyāy niṉṟāṉai thēṉaith* Thalaichchaṅga mēlvaḷarum thaṇthuḻāy mālaiyāṉai* Thalaichchaṅga nālmadhiyāy niṉṟāṉ thaṉ thoṇḍarkku* Alaichchaṅga muṉkaiyārth thāḷē āḷāgiṉṟēṉē",
     "wordMeanings": [
      [
       "Thalaichchaṅga nālmadhiyāy niṉṟāṉai",
       "The Lord who stands at Thalaichangadu with moon-like cooling brilliance"
      ],
      [
       "Thēṉaith",
       "Sweet like pure nectar"
      ],
      [
       "Thaṇthuḻāy mālaiyāṉai",
       "Adorned with cool Tulasi garlands"
      ],
      [
       "Thaṉ thoṇḍarkku",
       "To His humble servants and devotees"
      ],
      [
       "Āḷāgiṉṟēṉē",
       "I dedicate myself as a lifelong servant to those who worship Him!"
      ]
     ],
     "significance": "Thirumangai Azhwar expresses Bhagavata Seshatvam (servitude to the Lord's devotees), declaring that serving those who surrender to Lord Naanmadiya Perumal of Thalaichangadu is the highest attainment of spiritual life"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 2-tiered east-facing Rajagopuram leading into a serene traditional village enclosure",
    "Moolavar Form: Majestic standing deity (Nindra Thirukkolam) facing East, holding a white conch (Valampuri Sanghu) in His right upper hand",
    "Thaayar Form: Senkamalavalli Thayar in seated posture within her separate shrine",
    "Urchavar Form: Venchudar Perumal cast in Panchaloha flanked by dual Thaayars"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.9)",
    "Video Search Query: \"Thalaichanga Nanmathiyam Divya Desam History Velukkudi\""
   ]
  }
 },
 "thiruchirupuliyur": {
  "serial": 22,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thiruchirupuliyur (Sirupuliyur), Mayiladuthurai District, Tamil Nadu. Located ~12 km from Mayiladuthurai on the Peralam route",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Soundarya Vimanam",
   "theertham": "Anantha Pushkarini / Manasa Pushkarini",
   "posture": "Kidantha Thirukkolam (Reclining posture facing South). Unique feature: A compact, child-like reclining form of Adisesha and Moolavar (Bala Sayanam)",
   "orientation": "Facing South",
   "gps": "10.9631° N, 79.6725° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "அருள்மாகடல் பெருமாள் / ஸ்தலசயனப் பெருமாள் Sanskrit: कृपासमुद्र / बालशयन Transliteration: Arulmaakadal Perumal / Kripasamudra"
    },
    "thaayar": {
     "name": "Thirumamagal Thayar / Daya Nayagi (திருமாமகள் தாயார் / தயாநாயகி)",
     "legend": "Seated in her own dedicated shrine in the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Kripasamudraperumal (கிருபாசமுத்திரப் பெருமாள்)"
    },
    "etymology": "Graceful metallic icon shown in standing posture with hands extended in Abhaya Mudra",
    "thaayar": {
     "name": "Thirumamagal Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Sage Vyaghrapada and Sage Patanjali",
   "timeline": "Core stone structures date to the Chola period (10th-11th Century CE) Inscriptions record structural endowments by Chola rulers for daily feeding (Annasathram) and oil lamps",
   "literature": [
    "Explicitly praised in Thirumangai Azhwar’s Periya Thirumozhi and Sthala Purana manuscripts"
   ],
   "legend": [
    "Legend of Vyaghrapada and Patanjali — Sage Vyaghrapada (\"Tiger-footed Sage\") and Sage Patanjali (incarnation of Adisesha) were traveling to worship Vishnu shrines. Owing to advanced age and failing eyesight, Vyaghrapada could not walk fast and prayed to the Lord. Moved by compassion, Lord Vishnu shrank Himself into a small child-like reclining form (Bala Sayanam) facing South so that the elderly sage could easily behold Him without walking far",
    "Etymology of Thiruchirupuliyur — Thiru (Sacred) + Chiru (Small) + Puli (Tiger - Vyaghrapada) + Ur (Abode) = The sacred site of the small tiger-footed sage's salvation"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (7.9.1)",
     "tamil": "கன்ற மேய்த்து இனிது உகந்த காளாய் என்றும்* கடி பொழில் சூழ் சிறுபுலியூர்ச் சயனத்துள்ளாய்* மன்ற மல்கி மழை தவழும் மாட வீதி* மணாளனே என்று எப்பொழுதும் மாலே கொண்டு* என்று கொலோ அடியேனை அஞ்சல் என்று அங்கு* அருள்மாகடலான் அருளும் நாளே?",
     "transliteration": "Kaṉṟa mēyththu iniḍu ugandha kāḷāy eṉṟum* Kaḍi poḻil sūḻ siṟupuliyūrch sayanaththuḷḷāy* Maṉṟa malgi maḻai thavaḻum māḍa vīdhi* Maṇāḷaṉē eṉṟu eppoḻudhum mālē koṇḍu* Eṉṟu kolō aḍiyēṉai añjal eṉṟu aṅgu* Aruḷmākaḍalāṉ aruḷum nāḷē?",
     "wordMeanings": [
      [
       "Kaṉṟa mēyththu iniḍu ugandha kāḷāy",
       "O heroic Krishna who happily grazed calves!"
      ],
      [
       "Siṟupuliyūrch sayanaththuḷḷāy",
       "Reclining amidst the fragrant groves of Thiruchirupuliyur"
      ],
      [
       "Māḍa vīdhi maṇāḷaṉē",
       "O Divine Groom of the grand mansion-lined streets!"
      ],
      [
       "Eṉṟu kolō aḍiyēṉai añjal eṉṟu",
       "When will that blessed day arrive when You tell this humble servant \"Fear not!\""
      ],
      [
       "Aruḷmākaḍalāṉ aruḷum nāḷē",
       "When the Ocean of Mercy (Arulmaakadal) showers His divine grace upon me?"
      ]
     ],
     "significance": "Thirumangai Azhwar yearns for the Lord's reassurance (Abhaya), describing Him as an boundless ocean of grace who descends to the level of frail human beings"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 4-tiered south-facing Rajagopuram overlooking the Anantha Pushkarini",
    "Moolavar Form: Reclining on Adisesha facing South (Bala Sayanam posture), flanked by sages Patanjali and Vyaghrapada",
    "Thaayar Form: Thirumamagal Thayar seated gracefully in her individual shrine",
    "Urchavar Form: Kripasamudraperumal in standing Panchaloha form with divine ornaments"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 7.9)",
    "Video Search Query: \"Thiruchirupuliyur Arulmaakadal Perumal Temple Velukkudi\""
   ]
  }
 },
 "thirukavalambadi": {
  "serial": 23,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~10 km from Sirkazhi",
   "sthalaVriksham": "Thadama tree / Magizham Tree",
   "vimanam": "Swayamvaktha Vimanam",
   "theertham": "Thadamalar Pushkarini / Salakshana Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1819° N, 79.7744° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கோபாலகிருஷ்ணன் / ராஜகோபாலன் Sanskrit: गोपालकृष्ण / राजगोपाल Transliteration: Gopalakrishna Perumal / Rajagopalan"
    },
    "thaayar": {
     "name": "Sengamalavalli Thayar / Madavaral Mangai (செங்கமலவல்லி தாயார்)",
     "legend": "Red Lotus Consort; seated in a separate shrine facing South"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Gopalakrishnan / Rajagopalan (ராஜகோபாலன்)"
    },
    "etymology": "Exquisite Panchaloha idol shown leaning on a cow with His flute (Venu) in hand",
    "thaayar": {
     "name": "Rukmini and Satyabhama",
     "legend": "Accompany Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Rudra (Siva), Satyabhama, and Senkamalavalli",
   "timeline": "Ancient Chola construction renovated by Chola kings and expanded during the 16th Century by Vijayanagara governors Epigraphs detail endowments for maintaining the annual Thai Amavasya Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (4.6) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Rudra’s Ekadasha Forms — When Lord Siva performed the cosmic dance of destruction (Tandava) after the immolation of Sati, eleven hairs fell to the ground, giving rise to eleven forms of Rudra. To appease Lord Siva's intense wrath, Lord Vishnu manifested in eleven distinct forms across the Thirunangur region. At Thirukavalambadi, He manifested as Lord Gopalakrishna",
    "Legend of Parijata Flower — Lord Krishna brought the celestial Parijata tree from Devaloka to earth to fulfill the wish of Satyabhama. The garden (Kavalam) where He planted and guarded the trees gave this shrine the name Kavalambadi",
    "The Thirunangur 11 Garuda Sevai — Every year on the day following Amavasya in the Tamil month of Thai (Jan-Feb), the Urchavar deities of all 11 Thirunangur Divya Desams assemble on Garuda Vahanams at Thirunangur, accompanied by Thirumangai Azhwar on Hansa Vahanam"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (4.6.1)",
     "tamil": "சலமிலன் நண்ணாதார் தம்மூர் தீயெழ* சிலைவளைத்து அன்று இலங்கை மலங்க அமர்செய்தான்* நலமிலன் என்நெஞ்சே! நண்ணி நாம் தொழுதும்* காவலம்பாடி மேவிய கண்ணனையே.",
     "transliteration": "Salamilaṉ naṇṇādhār thammūr thīyeḻa* Silaivaḷaiththu aṉṟu ilaṅgai malaṅga amarseydhāṉ* Nalamilaṉ eṉneñjē! naṇṇi nām thoḻudhum* Kāvalambāḍi mēviya kaṇṇaṉaiyē",
     "wordMeanings": [
      [
       "Salamilaṉ",
       "The Lord who is free from deceit and malice toward the righteous"
      ],
      [
       "Nalamilaṉ eṉneñjē",
       "O my mind that lacks good virtues!"
      ],
      [
       "Naṇṇi nām thoḻudhum",
       "Let us reach out and bow down to worship"
      ],
      [
       "Kāvalambāḍi mēviya kaṇṇaṉaiyē",
       "Lord Krishna residing at Thirukavalambadi!"
      ]
     ],
     "significance": "Thirumangai Azhwar emphasizes that even a mind lacking inherent spiritual merit (Nalamilan) can attain redemption simply by approaching and bowing before Lord Gopalakrishna at Thirukavalambadi"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram set in a quiet, traditional agraharam",
    "Moolavar Form: Standing posture (Nindra Thirukkolam) facing East, holding the flute alongside Satyabhama",
    "Thaayar Form: Senkamalavalli Thayar seated in her separate shrine",
    "Urchavar Form: Gopalakrishnan in bronze standing posture with hands placed as if holding a flute"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 4.6)",
    "Video Search Query: \"Thirukavalambadi Gopalakrishna Perumal Temple Velukkudi\""
   ]
  }
 },
 "chidambaram": {
  "serial": 24,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Inside the Nataraja Temple Complex, Chidambaram Town, Cuddalore District, Tamil Nadu",
   "sthalaVriksham": "Thillai Tree (Excoecaria agallocha)",
   "vimanam": "Satvikasara Vimanam / Kanaka Sabha border",
   "theertham": "Pundarika Pushkarini / Sivaganga Tank",
   "posture": "Kidantha Thirukkolam (Reclining posture facing East)",
   "orientation": "Facing East",
   "gps": "11.3992° N, 79.6931° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கோவிந்தராஜப் பெருமாள் / திருச்சித்ரகூடத்தன் Sanskrit: गोविन्दराज / चित्रकूटनाथ Transliteration: Govindaraja Perumal / Thiruchitrakootathan"
    },
    "thaayar": {
     "name": "Pundarikavalli Thayar (புண்டரீகவல்லி தாயார்)",
     "legend": "Seated in an independent shrine within the inner prakaram enclosure facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Devadidevan / Parthasarathy (தேவாதிதேவன்)"
    },
    "etymology": "Regal Panchaloha image in reclining/standing posture holding divine emblems",
    "thaayar": {
     "name": "Pundarikavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "literature": [
    "Explicitly recorded in Silappatikaram (Katturai), Periya Thirumozhi, Thiruvaimozhi, and Koyil Olugu"
   ],
   "legend": [
    "Legend of the Divine Dance & Judge — Lord Siva and Goddess Kali engaged in a cosmic dance competition (Ananda Tandavam). Lord Vishnu manifested here as Govindaraja to act as the supreme judge of the contest, reclining peacefully while witnessing the cosmic dance",
    "Sage Kanva and Pundarika’s Tapas — Sages Kanva and Pundarika performed penance here to behold Lord Vishnu in His reclining form amidst the sacred Thillai forest",
    "Persecution and Restoration (Chola Era to Vijayanagara Era)",
    "Chola Removal (12th Century) — Kulottunga Chola II (a staunch Saivite) removed the idol of Govindaraja from the Chidambaram complex and cast it into the sea",
    "Preservation by Ramanuja — Sri Ramanuja retrieved the spare Utsava idol and established the shrine of Lord Govindaraja at Lower Tirupati (Sri Govindarajaswamy Temple, Tirupati)",
    "Restoration by Krishnadevaraya & Achyuta Deva Raya (1539 CE) — Vijayanagara Emperor Achyuta Deva Raya, with the help of his general Mahachalappaya, re-installed the idol of Govindaraja inside the Chidambaram temple complex with grand royal rituals"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     30
    ],
    [
     "kulasekhara",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "kulasekhara",
     "work": "Perumal Thirumozhi (10.1)",
     "tamil": "அங்கண் நெடுமதிள் புடைசூழ் தில்லை நகர்த் திருச்சித்ரகூடம் தன்னுள்* எங்கண் மணிவண்ணனை என் அமுதினை அடியேன கண்டுகொண்டேனே.",
     "transliteration": "Aṅgaṇ neḍumadhiḷ puḍaisūḻ thillai nagarth thiruchchithrakūḍam thaṉṉuḷ* Eṅgaṇ maṇivaṇṇaṉai eṉ amudhiṉai aḍiyēṉ kaṇḍukoṇḍēnē",
     "wordMeanings": [
      [
       "Aṅgaṇ neḍumadhiḷ puḍaisūḻ",
       "Surrounded by majestic, lofty rampart walls"
      ],
      [
       "Thillai nagarth thiruchchithrakūḍam thaṉṉuḷ",
       "Inside Thiruchitrakootam in the sacred city of Thillai (Chidambaram)"
      ],
      [
       "Eṅgaṇ maṇivaṇṇaṉai",
       "My sapphire-complexioned Lord"
      ],
      [
       "Eṉ amudhiṉai",
       "My immortal divine nectar"
      ],
      [
       "Aḍiyēṉ kaṇḍukoṇḍēnē",
       "I, His humble servant, have seen Him with my own eyes!"
      ]
     ],
     "significance": "Kulasekara Azhwar frame-by-frame narrates the entire Ramayana epic while anchoring Sri Rama directly to His reclining form as Govindaraja at Thiruchitrakootam"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Located within the iconic 4 monumental Rajagopurams of the Chidambaram temple complex",
    "Moolavar Form: Reclining on Adisesha facing East (Kidantha Thirukkolam), visible adjacent to the Nataraja Chit Sabha",
    "Thaayar Form: Pundarikavalli Thayar seated in her separate shrine",
    "Urchavar Form: Devadidevan cast in Panchaloha with Sridevi and Bhudevi"
   ],
   "literature": [
    "Project Madurai Text Archives (Perumal Thirumozhi 10 & Periya Thirumozhi 3.2)",
    "Video Search Query: \"Chidambaram Govindaraja Perumal History Velukkudi Krishnan\""
   ]
  }
 },
 "manimadakoil": {
  "serial": 25,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~8 km from Sirkazhi",
   "sthalaVriksham": "Iluppai Tree (Madhuca longifolia)",
   "vimanam": "Pranava Vimanam",
   "theertham": "Indra Pushkarini / Rudra Pushkarini",
   "posture": "Irundha Thirukkolam (Seated posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1805° N, 79.7788° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "நாராயணன் / மணிமாட நாரணன் Sanskrit: नारायण / मणिमाडनारायण Transliteration: Narayana Perumal / Manimada Naranan"
    },
    "thaayar": {
     "name": "Pundarikavalli Thayar (புண்டரீகவல்லி தாயார்)",
     "legend": "Seated in her own dedicated shrine within the elevated temple complex"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Narayanan (நாராயணன்)"
    },
    "etymology": "Seated Panchaloha icon holding Shankha, Chakra, and showing Abhaya Mudra",
    "thaayar": {
     "name": "Pundarikavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Ekadasha Rudras (11 Rudras) and Indra",
   "timeline": "Core structure dating back to early Chola period (10th Century CE) Inscriptions record grants by medieval Chola kings and Nayak governors for the conduct of the Thai Amavasya Garuda Sevai",
   "literature": [
    "Explicitly recorded in Thirumangai Azhwar’s Periya Thirumozhi (3.8) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Ekadasha Rudra Salvation — As part of the Thirunangur manifestations to pacify Lord Siva's eleven Rudra forms, Lord Vishnu appeared here as Narayana Perumal carrying the eternal Nanda Deepam (inextinguishable light)",
    "The Perpetual Lamp (Nanda Deepam) — Legend holds that the lamp lit in this sanctum radiates continuous spiritual energy. It is believed that worshipping Narayana Perumal here illuminates the soul with divine knowledge (Jnana)",
    "Central Hub of Thirunangur Garuda Sevai — Thirumanimadam serves as the primary host and central venue for the famous annual 11 Garuda Sevai festival, where all 11 Nangur Divya Desam deities assemble here to grant darshan alongside Thirumangai Azhwar"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     12
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.8.1)",
     "tamil": "நந்தா விளக்கே அளவாற்கு அரியாய்* நாரணனே நம்பி நள்ளிருள் போல்* ஐந்தாய் நிலனாய் விசும்பாய் அரனாய்* ஆழி முப்பத்தொரு உலகங்கட்கும்* எந்தாய்! இமையோர் பெருமானே! என்று* ஏத்தி மணிமாடக் கோயிலுளாய்!",
     "transliteration": "Nandhā viḷakkē aḷavāṟku ariyāy* Nāraṇaṉē nambi naḷḷiruḷ pōl* Aindhāy nilanāy visumbāy araṉāy* Āḻi muppaththoru ulagaṅgaṭkum* Endhāy! imaiyōr perumāṉē! eṉṟu* Ēththi maṇimāḍak kōyiluḷāy!",
     "wordMeanings": [
      [
       "Nandhā viḷakkē",
       "O Inextinguishable Divine Light!"
      ],
      [
       "Aḷavāṟku ariyāy",
       "O Lord beyond human measure or comprehension!"
      ],
      [
       "Nāraṇaṉē nambi",
       "O supreme, perfect Narayana!"
      ],
      [
       "Aindhāy nilanāy visumbāy",
       "Who manifests as the five elements, the earth, and the cosmic sky"
      ],
      [
       "Imaiyōr perumāṉē",
       "O Sovereign Lord of the Celestials!"
      ],
      [
       "Maṇimāḍak kōyiluḷāy",
       "Residing in the gem-studded mansion temple of Thirumanimadam!"
      ]
     ],
     "significance": "Thirumangai Azhwar addresses Lord Narayana of Thirumanimadam as the Nandha Vilakku (Perpetual Divine Lamp) that dispels cosmic ignorance, identifying Him as the ultimate source of all five material elements and celestial realms"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram built on an elevated structure (Maada Koil design)",
    "Moolavar Form: Seated posture (Irundha Thirukkolam) facing East, holding Shankha and Chakra, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Pundarikavalli Thayar seated in her separate shrine",
    "Urchavar Form: Narayana Perumal in seated Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.8)",
    "Video Search Query: \"Thirumanimadam Narayana Perumal Temple History Velukkudi\""
   ]
  }
 },
 "vaikunta-vinnagaram": {
  "serial": 26,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~8 km from Sirkazhi and 500 meters from Thirumanimadam",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Anantha Satya Varthaka Vimanam",
   "theertham": "Lakshmi Pushkarini / Udhana Pushkarini",
   "posture": "Irundha Thirukkolam (Seated posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1811° N, 79.7794° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வைகுந்த நாதன் / வைகுந்த விண்ணகரத்தன் Sanskrit: वैकुण्ठनाथ / वैकुण्ठपति Transliteration: Vaikunthanatha Perumal / Vaikunthapathi"
    },
    "thaayar": {
     "name": "Vaikunthavalli Thayar (வைகுந்தவல்லி தாயார்)",
     "legend": "\"Goddess of Celestial Vaikuntha\"; seated in her own dedicated shrine within the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Vaikunthanathan (வைகுந்தநாதன்)"
    },
    "etymology": "Breathtaking Panchaloha seated icon holding the Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Vaikunthavalli Thayar",
     "legend": "Accompanies Urchavar during all major festival processions and the annual 11 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "King Swetha and Rudra (Siva)",
   "timeline": "Core stone sanctum dates back to the early Chola period (10th Century CE) Epigraphs detail royal patronage by Vikrama Chola and subsequent repairs during the Nayak period for conducting the Thai Amavasya Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (3.9) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of King Swetha’s Salvation — King Swetha performed deep penance at this site desiring to reach Sri Vaikuntha in his mortal body. Lord Vishnu, pleased by his devotion, manifested here in the exact seated form (Paramapada Nathar) that He assumes in the celestial Vaikuntha world, granting Swetha immediate liberation (Moksha)",
    "Manifestation for Rudra’s Peace — As part of the 11 Thirunangur manifestations, Lord Vishnu assumed this form to pacify the third form of Rudra (Siva) following the destruction of Daksha's Yajna"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.9.1)",
     "tamil": "சலமிலன் நண்ணாதார் தம்மூர் தீயெழ* சிலைவளைத்து அன்று இலங்கை மலங்க அமர்செய்தான்* நலமிலன் என்நெஞ்சே! நண்ணி நாம் தொழுதும்* வைகுந்த விண்ணகரம் மேவிய தேவினையே.",
     "transliteration": "Salamilaṉ naṇṇādhār thammūr thīyeḻa* Silaivaḷaiththu aṉṟu ilaṅgai malaṅga amarseydhāṉ* Nalamilaṉ eṉneñjē! naṇṇi nām thoḻudhum* Vaikundha viṇṇagaram mēviya thēviṉaiyē",
     "wordMeanings": [
      [
       "Salamilaṉ",
       "The Lord who is pure, transparent, and free from deceit"
      ],
      [
       "Nalamilaṉ eṉneñjē",
       "O my mind that lacks good spiritual deeds!"
      ],
      [
       "Naṇṇi nām thoḻudhum",
       "Let us approach with love and bow down to worship"
      ],
      [
       "Vaikundha viṇṇagaram mēviya thēviṉaiyē",
       "The Supreme Sovereign residing at Thiruvaikuntha Vinnagaram!"
      ]
     ],
     "significance": "Thirumangai Azhwar assures that one does not need to cross the material universe to experience Vaikuntha; Lord Vaikunthanatha has brought the bliss of Vaikuntha right down to earth at Thirunangur"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Elegant 3-tiered east-facing Rajagopuram with a spacious outer courtyard",
    "Moolavar Form: Majestic seated deity (Irundha Thirukkolam) facing East on Adisesha, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Vaikunthavalli Thayar seated gracefully in her separate south-facing shrine",
    "Urchavar Form: Vaikunthanathan in seated bronze form holding the celestial weapons"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.9)",
    "Video Search Query: \"Thiru Vaikuntha Vinnagaram Temple History Velukkudi\""
   ]
  }
 },
 "thiruvahindrapuram": {
  "serial": 27,
  "profile": {
   "regionNote": "Choza Naadu / Naduvu Naadu",
   "location": "Thiruvanthipuram, Cuddalore Taluk, Cuddalore District, Tamil Nadu. Located ~7 km edge-west of Cuddalore town along the Gadilam river",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Shuddhasatva Vimanam",
   "theertham": "Garuda Theertham / Sesha Theertham / Gadilam River",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.7456° N, 79.7119° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "தேவநாதப் பெருமாள் / அடியவர்க்கு மெய்யன் Sanskrit: देवनाथ / सत्यव्रत / अच्युत Transliteration: Devanatha Perumal / Adiyavarkku Meyyan"
    },
    "thaayar": {
     "name": "Hemabujavalli Thayar / Sengamalavalli (ஹேமாம்புஜவல்லி / செங்கமலவல்லி)",
     "legend": "\"Golden Lotus Goddess\"; seated in a prominent independent shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Moovarahiya Oruvan / Devanathan (மூவராகிய ஒருவன்)"
    },
    "etymology": "Unique icon possessing attributes of Brahma (lotus-hand), Vishnu (weapons), and Siva (third-eye marker on forehead)",
    "thaayar": {
     "name": "Hemabujavalli Thayar",
     "legend": "Accompanies Urchavar in all major festivals"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Adisesha, Garuda, Indra, Markandeya, and Swami Vedanta Desikan",
   "timeline": "Epigraphical records date back to the Chola emperors Rajendra I, Kulottunga I, and Pallava King Kopperunchinga II Inscriptions detail rich endowments by Vijayanagara rulers and local chieftains for the maintenance of the Oushadagiri Hayagriva shrine",
   "literature": [
    "Explicitly praised in Thirumangai Azhwar’s Periya Thirumozhi (3.1) and Swami Vedanta Desikan's works (Devanayaka Panchasat)"
   ],
   "legend": [
    "Garuda & Adisesha Water Contest — Garuda and Adisesha competed to fetch water for the Lord's worship. Adisesha dug into the earth with his tail to bring water from Pātāla (forming Sesha Theertham). Garuda flew to the celestial Ganga and brought water back (creating Garuda Theertham). Lord Devanatha blessed both water sources and drank from both",
    "Swami Vedanta Desikan's Enlightenment & Hayagriva Shrine — Swami Vedanta Desikan spent over 40 years of his life here. On the nearby hillock of Oushadagiri, Desikan performed intense penance invoking Garuda, who initiated him into the Hayagriva Mantra. Lord Hayagriva appeared before Desikan, bestowing supreme spiritual intellect, leading Desikan to compose the famous Hayagriva Stotram, Mummani Kovai, and Navamani Maalai"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.1.1)",
     "tamil": "ஒருவரை ஒருவர் உவப்பன செய்து* உணர்ந்து உடன் வாழும் இவாழ்க்கை* இருவரை அன்றி மற்றொருவர்க்கு இங்கு இயலொண்ணாது என்று எண்ணி* திருவரை மார்பில் திருவுடன் அமர்ந்த திருவாந்திபுரத்து எம்மானை* திருவடி அடைந்து உய்ந்து போகாமல் என் செய்கேன் நெஞ்சமே!",
     "transliteration": "Oruvarai oruvar uvappana seythu* uṇarndhu uḍan vāḻum ivāḻkkai* Iruvarai aṉṟi maṟṟoruvarkku iṅgu iyaloṇṇādhu eṉṟu eṇṇi* Thiruvarai mārbil thiruvuḍan amarndha thiruvāndhipuraththu emmāṉai* Thiruvaḍi aḍaindhu uyndhu pōgāmal eṉ seygēn neñjamē!",
     "wordMeanings": [
      [
       "Oruvarai oruvar uvappana seythu",
       "Pleasing each other in reciprocal divine love"
      ],
      [
       "Thiruvarai mārbil thiruvuḍan amarndha",
       "Residing inseparably with Goddess Lakshmi on His chest"
      ],
      [
       "Thiruvāndhipuraththu emmāṉai",
       "My Lord of Thiruvanthipuram"
      ]
     ],
     "significance": "Thirumangai Azhwar extols the Divya Dampati (Divine Couple inseparably united) at Thiruvanthipuram, emphasizing that surrendering to Lord Devanatha brings immediate redemption (Uyyudhal)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered Rajagopuram facing East set alongside the scenic Gadilam River",
    "Moolavar Form: Tall standing deity (Nindra Thirukkolam) facing East, holding divine emblems, flanked by Sridevi and Bhudevi",
    "Oushadagiri Shrine: Hillock shrine dedicated to Lord Hayagriva behind the main complex",
    "Urchavar Form: Moovarahiya Oruvan in Panchaloha form showing divine marks"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.1)",
    "Video Search Query: \"Thiruvanthipuram Devanatha Perumal Desikan Velukkudi\""
   ]
  }
 },
 "semponseikoil": {
  "serial": 28,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~8 km from Sirkazhi",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Kanaka Vimanam",
   "theertham": "Kanaka Pushkarini / Nitya Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1825° N, 79.7761° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பேரருளாளன் / செம்பொன்னரங்கன் Sanskrit: पेररुळाळन् / हेमरङ्गनाथ Transliteration: Perarulalan / Semponnarangan"
    },
    "thaayar": {
     "name": "Allimadappoomagal Thayar (அல்லிமடப்பூமகள் தாயார்)",
     "legend": "\"Lotus-laden Goddess\"; seated in her dedicated shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Semponnarangar (செம்பொன்னரங்கர்)"
    },
    "etymology": "Exquisite Panchaloha standing icon holding Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Allimadappoomagal Thayar",
     "legend": "Accompanies Urchavar during festive processions and Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Brahmin Kashyapa and Rudra (Siva)",
   "timeline": "Core sanctum constructed during the Medieval Chola period (10th-11th Century CE) Epigraphs detail grants for maintaining daily worship rituals and supporting the annual 11 Thirunangur Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (3.10) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of the Poor Brahmin Kashyapa — A destitute Brahmin named Kashyapa performed intense penance here to get relief from severe poverty. Lord Vishnu appeared, instructed him to chant the sacred Ashtakshara Mantra 3 days continuously, and granted him a huge treasure of gold (Sempon). Kashyapa used the golden wealth to construct this magnificent temple (Semponsey Koil)",
    "Rudra’s Absolution — Lord Vishnu manifested as Perarulalan here to relieve the fourth form of Rudra (Siva) of the sin of Brahmahatya Dosham"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.10.1)",
     "tamil": "பேரணி வண்டினங்கள் இசைபாடும் பொழில் சூழ்ந்த* சீரணி நாரையூர் நின்ற திருமாலை* கூரணி வேல்வலவன் கலிகன்றி சொல்மாலை* பேரருளாளனையே நண்ணிப் பாடுமினே!",
     "transliteration": "Pēraṇi vaṇḍinaṅgaḷ isaipāḍum poḻil sūḻndha* Sīraṇi nāraiyūr niṉṟa thirumālai* Kūraṇi vēlvalavaṉ kaligaṉṟi solmālai* Pēraruḷāḷanaivē naṇṇip pāḍumiṉē!",
     "wordMeanings": [
      [
       "Pēraṇi vaṇḍinaṅgaḷ isaipāḍum",
       "Where swarms of bees sing sweet melodies"
      ],
      [
       "Sīraṇi... thirumālai",
       "The glorious Lord Vishnu"
      ],
      [
       "Kaligaṉṟi solmālai",
       "The garland of verses composed by Thirumangai Azhwar"
      ],
      [
       "Pēraruḷāḷanaivē naṇṇip pāḍumiṉē",
       "Approach and sing the glory of Lord Perarulalan!"
      ]
     ],
     "significance": "Thirumangai Azhwar declares that approaching Lord Perarulalan fills the soul with spiritual riches far surpassing any temporal golden treasure"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Traditional 3-tiered east-facing Rajagopuram",
    "Moolavar Form: Majestic standing deity (Nindra Thirukkolam) facing East with Sridevi and Bhudevi",
    "Thaayar Form: Allimadappoomagal Thayar seated in her separate shrine",
    "Urchavar Form: Semponnarangar cast in fine Panchaloha"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.10)",
    "Video Search Query: \"Semponsey Koil Perarulalan Temple History Velukkudi\""
   ]
  }
 },
 "thetriyambalam": {
  "serial": 29,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~8 km from Sirkazhi",
   "sthalaVriksham": "Palasa Tree (Butea monosperma)",
   "vimanam": "Veda Shringa Vimanam",
   "theertham": "Surya Pushkarini",
   "posture": "Kidantha Thirukkolam (Reclining posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1797° N, 79.7753° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "செங்கண்மால் ரங்கநாதன் / லட்சுமி நரசிம்மன் Sanskrit: रक्ताक्ष श्रीरङ्गनाथ / जगन्मोहन Transliteration: Seganmaal Ranganathar / Senganmaal Rangan"
    },
    "thaayar": {
     "name": "Sengamalavalli Thayar / Ranganayagi (செங்கமலவல்லி தாயார்)",
     "legend": "Red Lotus Goddess; seated in an independent shrine within the temple compound"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Senganmaal Ranganathan (செங்கண்மால் ரங்கநாதன்)"
    },
    "etymology": "Reclining/standing Panchaloha icon holding Shankha and Chakra",
    "thaayar": {
     "name": "Sengamalavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions and Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Surya Deva and Rudra (Siva)",
   "timeline": "Core structure dating back to the 10th Century Chola era Inscriptions record structural repairs and land endowments made by local chieftains for the annual Thai Amavasya Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (4.4) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Surya’s Penance — Surya (the Sun God) lost his brilliance due to a curse. He performed intense penance at this site. Lord Vishnu appeared as Seganmaal Ranganathar (Red-eyed Ranganatha), restored Surya's radiant glow, and blessed the temple tank to be named Surya Pushkarini",
    "Rudra’s Pacification — Lord Vishnu manifested in this reclining form to pacify the fifth form of Rudra (Siva) during the Thirunangur divine manifestations",
    "Etymology of Thetriyambalam — Thetri (Elevated platform / Place of certainty) + Ambalam (Sacred Space) = The sacred elevated stage where the Supreme Truth is established"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (4.4.1)",
     "tamil": "முன்றில் மழைத்துளி தூவ முகில் தோயும்* சென்றியங்கு மாடத் திருத்தேற்றியம்பலத்து* மன்றில் மலிபுகழ் மாதவனையே தொழுவார்* என்றும் அமருலகில் இன்புறுவர் தாமே.",
     "transliteration": "Muṉṟil maḻaiththuḷi thūva mugil thōyum* Seṉṟiyaṅgu māḍath thiruththēṟṟiyamaṅgalaththu* Maṉṟil malipugaḻ mādhavaṉaiyē thoḻuvār* Eṉṟum amarulagil inbuṟuvar thāmē",
     "wordMeanings": [
      [
       "Muṉṟil maḻaiththuḷi thūva mugil thōyum",
       "Where rain clouds touch the tall courtyard mansions"
      ],
      [
       "Thiruththēṟṟiyamaṅgalaththu",
       "In the sacred shrine of Thiruthetriyambalam"
      ],
      [
       "Mādhavaṉaiyē thoḻuvār",
       "Those who worship Lord Madhava here"
      ],
      [
       "Eṉṟum amarulagil inbuṟuvar thāmē",
       "Shall eternally enjoy supreme bliss in the celestial world!"
      ]
     ],
     "significance": "Thirumangai Azhwar assures that worshipping the red-eyed Lord Seganmaal Ranganathar at Thiruthetriyambalam grants eternal liberation and heavenly joy"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Simple 3-tiered east-facing Rajagopuram set in a quiet rural landscape",
    "Moolavar Form: Reclining posture (Kidantha Thirukkolam) facing East on Adisesha, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Sengamalavalli Thayar seated in her separate shrine",
    "Urchavar Form: Senganmaal Ranganathan in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 4.4)",
    "Video Search Query: \"Thiruthetriyambalam Seganmaal Ranganathar History Velukkudi\""
   ]
  }
 },
 "manikkoodam": {
  "serial": 30,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~1 km from Thirunangur main junction",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Kanaka Vimanam",
   "theertham": "Chandra Pushkarini / Varada Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1764° N, 79.7742° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வரதராஜப் பெருமாள் / மணிக்கூட நாயகன் Sanskrit: वरदराज / मणिकूटनाथ Transliteration: Varadaraja Perumal / Manikooda Nayagan"
    },
    "thaayar": {
     "name": "Thirumaamagal Thayar / Varasundari (திருமாமகள் தாயார்)",
     "legend": "Seated in her own dedicated shrine within the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Varadarajar (வரதராஜர்)"
    },
    "etymology": "Graceful standing Panchaloha idol carrying the Shankha and Chakra with Varada Mudra",
    "thaayar": {
     "name": "Thirumaamagal Thayar",
     "legend": "Accompanies Urchavar during festive processions and the 11 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Sages, Devas, and Rudra (Siva)",
   "timeline": "Core sanctum dates from the early Chola period (10th Century CE) Inscriptions record land grants for conducting daily Tiru-araadhana rituals and supporting the annual Thai Amavasya Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (4.5) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Boon-Granting to Sages — Sages and devas performed penance here seeking protection and wisdom. Lord Vishnu manifested as Varadaraja Perumal (the supreme bestower of boons) and granted all their spiritual desires",
    "Rudra’s Pacification — Lord Vishnu manifested in this standing boon-granting form to pacify the sixth form of Rudra (Siva) during the Thirunangur divine manifestations"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (4.5.1)",
     "tamil": "ஏசாரம் எய்தி ஒருகாலத்து எந்தை கேள்* பூசாரப் பொங்கும் மணிமாடத் திருக்குடந்தை* பேசாரேல் பேசும் பொருளெல்லாம் பேசாமை* மணிக்கூடத்து மேவிய மாயனையே.",
     "transliteration": "Ēsāram eybhi orukālaththu endhai kēḷ* Pūsārap poṅgum maṇimāḍath thirukkuḍandhai* Pēsārēl pēsum poruḷellām pēsāmai* Maṇikkūḍaththu mēviya māyaṉaiyē",
     "wordMeanings": [
      [
       "Endhai kēḷ",
       "Hear me, O my Master!"
      ],
      [
       "Maṇikkūḍaththu mēviya māyaṉaiyē",
       "The wondrous Lord residing at Thirumanikoodam"
      ],
      [
       "Pēsārēl pēsum poruḷellām pēsāmai",
       "If one does not speak of His glory, all other speech is utterly meaningless!"
      ]
     ],
     "significance": "Thirumangai Azhwar asserts that human speech reaches its true purpose only when it praises Lord Varadaraja of Thirumanikoodam; without praising Him, all words are futile"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram leading into a serene courtyard",
    "Moolavar Form: Standing posture (Nindra Thirukkolam) facing East, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Thirumaamagal Thayar seated in her separate shrine",
    "Urchavar Form: Varadarajar cast in fine Panchaloha with Varada Mudra"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 4.5)",
    "Video Search Query: \"Thirumanikoodam Varadaraja Perumal History Velukkudi\""
   ]
  }
 },
 "vellakulam": {
  "serial": 31,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Belt, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~10 km from Sirkazhi and ~2 km from Thirunangur village center",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Tatvabodhaka Vimanam",
   "theertham": "Swetha Pushkarini (Thiru Vellakkulam / White Lily Tank)",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1964° N, 79.7719° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஶ்ரீநிவாஸன் / அண்ணன் பெருமாள் Sanskrit: श्रीनिवास / ज्येष्ठवेङ्कटेश Transliteration: Srinivasa Perumal / Annan Perumal"
    },
    "thaayar": {
     "name": "Alamelumangai Thayar / Alarmelmangai (அலர்மேல்மங்கை தாயார்)",
     "legend": "Named identically to Tirumala's Padmavati; seated in her dedicated shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Srinivasan (ஶ்ரீநிவாஸன்)"
    },
    "etymology": "Magnificent Panchaloha icon holding Shankha and Chakra with Varada and Katyavalambita Mudras",
    "thaayar": {
     "name": "Alamelumangai Thayar & Padmavati",
     "legend": "Accompanies Urchavar during festive processions and the 11 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "King Swetha, Rudra (Siva), and Thirumangai Azhwar",
   "timeline": "Architecture dates back to the early Chola period (10th Century CE) with subsequent structural renovations by Vijayanagara rulers Inscriptions record grants for maintaining daily food distribution (Tadheeyaaradhana) instituted by Thirumangai Azhwar",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (4.7) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of King Swetha & Salvation — King Swetha (son of King Ikshvaku) was destined to die at an early age. He performed intense penance under the instruction of Sage Vasishta on the banks of Swetha Pushkarini. Lord Srinivasa appeared before him, thwarted Yama (the God of Death), and granted Swetha eternal life and Moksha",
    "The Elder Brother of Tirumala (Annan Koil) — Thirumangai Azhwar lost his heart to this shrine and praised Lord Srinivasa here as the elder brother (Annan) of Tirumala Venkateswara. Srivaishnava tradition holds that if one is unable to travel to Tirumala, fulfilling vows at Annan Koil yields identical spiritual fruit",
    "Thirumangai Azhwar’s Enlightenment & Marriage — It was at this shrine that Kumudavalli Nachiyar laid down her conditions for marrying Thirumangai Azhwar—requiring him to undergo Pancha Samskaram and feed 1,008 Vaishnavas daily for a year"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (4.7.1)",
     "tamil": "மேவா நின்ற வல்வினை நோய் வினையாயின தீர்க்கும்* தேவா தேவர்க்கு அரியாய் திருமால் மகளிர்க்கு அண்ணாய்* பூவார் சோலை சூழ்ந்த தண் பொய்கை வெள்ளக் குளத்து* மேவா நின்ற தேவா உன் அடியேன் அடைந்தேனே!",
     "transliteration": "Mēvā niṉṟa valvinai nōi vinaiyāyina thīrkkum* Thēvā thēvarkku ariyāy thirumāl magaḷirkku aṇṇāy* Pūvār sōlai sūḻndha thaṇ poygai veḷḷak kuḷaththu* Mēvā niṉṟa thēvā uṉ aḍiyēṉ aḍaindhēnē!",
     "wordMeanings": [
      [
       "Mēvā niṉṟa valvinai nōi vinaiyāyina thīrkkum",
       "Eradicating all dreadful karmic diseases that afflict the soul"
      ],
      [
       "Thēvā thēvarkku ariyāy",
       "O Lord supreme, rare even for Celestials to comprehend!"
      ],
      [
       "Thirumāl magaḷirkku aṇṇāy",
       "O elder brother (Annan) to us and Lord of Mahalakshmi!"
      ],
      [
       "Veḷḷak kuḷaththu mēvā niṉṟa thēvā",
       "O God residing at Thiruvellakkulam!"
      ],
      [
       "Uṉ aḍiyēṉ aḍaindhēnē",
       "I, Your humble servant, have surrendered at Your feet!"
      ]
     ],
     "significance": "Thirumangai Azhwar establishes Lord Srinivasa of Thiruvellakkulam as the compassionate elder brother (Annan) who readily cures all karmic diseases upon simple surrender (Saranagati)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered Rajagopuram facing East, standing grandly beside the vast Swetha Pushkarini",
    "Moolavar Form: Majestic standing posture (Nindra Thirukkolam) facing East, holding Shankha and Chakra",
    "Thaayar Form: Alamelumangai Thayar seated in her separate shrine",
    "Urchavar Form: Srinivasan in fine Panchaloha form flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 4.7)",
    "Video Search Query: \"Thiruvellakkulam Annan Koil History Velukkudi\""
   ]
  }
 },
 "vanpurushothamam": {
  "serial": 32,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~8 km from Sirkazhi",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Sanjeevigraha Vimanam",
   "theertham": "Thiruparkadal Theertham / Upamanyu Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1833° N, 79.7781° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "புருஷோத்தமன் / வண்புருஷோத்தமன் Sanskrit: पुरुषोत्तम / उत्तमपुरुष Transliteration: Purushothama Perumal / Vanpurushothaman"
    },
    "thaayar": {
     "name": "Purushothama Nayagi Thayar / Perundevi (புருஷோத்தம நாயகி தாயார்)",
     "legend": "Seated in her own dedicated shrine within the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Purushothaman (புருஷோத்தமன்)"
    },
    "etymology": "Regal Panchaloha standing icon holding Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Purushothama Nayagi Thayar",
     "legend": "Accompanies Urchavar during festive processions and the 11 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Sage Upamanyu, Rudra (Siva), and Sage Vyaghrapada",
   "timeline": "Core sanctum dating back to the early Chola period (10th Century CE) Inscriptions record structural endowments by Chola rulers for maintaining daily Ksheera Abhishekam (milk oblations)",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (4.2) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Sage Upamanyu & Ocean of Milk — The infant child Upamanyu (son of Sage Vyaghrapada) was crying in hunger. His mother prayed to Lord Purushothama. Moved by maternal compassion, Lord Purushothama created a celestial ocean of milk (Thiruparkadal) at this site to feed the hungry infant. Thus, the temple tank is revered as Thiruparkadal Theertham",
    "Rudra’s Pacification — Lord Vishnu manifested in this supreme persona (Purushothaman) to pacify the eighth form of Rudra (Siva) during the Thirunangur divine manifestations"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (4.2.1)",
     "tamil": "பந்தொப்பவர் விரல்கள் வழியே வண்டினங்கள் இசைபாடும்* சந்தச் சோலை சூழ்ந்த தண் வண்புருஷோத்தமமே!* அந்தார மார்பன் அன்பாய் அமர்ந்த தண்தொழிலாரும்* எந்தாய் உன்னை அடியேன் கண்டுகொண்டு உய்ந்தேனே.",
     "transliteration": "Pandoppavar viralgaḷ vaḻiyē vaṇḍinaṅgaḷ isaipāḍum* Sandhach sōlai sūḻndha thaṇ vaṇpuruṣōthamamē!* Andhāra mārbhaṉ anbāy amarndha thaṇthoḻilārum* Endhāy uṉṉai aḍiyēṉ kaṇḍukoṇḍu uyndhēnē",
     "wordMeanings": [
      [
       "Sandhach sōlai sūḻndha thaṇ vaṇpuruṣōthamamē",
       "In cool Thirvanpurushothamam surrounded by sandalwood groves"
      ],
      [
       "Andhāra mārbhaṉ",
       "The Lord wearing radiant flower garlands on His chest"
      ],
      [
       "Endhāy uṉṉai aḍiyēṉ kaṇḍukoṇḍu uyndhēnē",
       "O my Father! Beholding You, I, Your servant, have attained eternal redemption!"
      ]
     ],
     "significance": "Thirumangai Azhwar expresses absolute spiritual fulfillment (Uyyudhal) upon beholding Lord Purushothama, highlighting how His supreme nature descends to satisfy the spiritual hunger of devotees just as He satisfied child Upamanyu"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram overlooking the Thiruparkadal tank",
    "Moolavar Form: Standing posture (Nindra Thirukkolam) facing East with Sridevi and Bhudevi",
    "Thaayar Form: Purushothama Nayagi Thayar seated in her separate shrine",
    "Urchavar Form: Purushothaman cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 4.2)",
    "Video Search Query: \"Thiruanpurushothamam Purushothama Perumal History Velukkudi\""
   ]
  }
 },
 "arimeya-vinnagaram": {
  "serial": 33,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~8 km from Sirkazhi",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Ucha Veda Vimanam",
   "theertham": "Kodi Theertham / Amrutha Pushkarini",
   "posture": "Irundha Thirukkolam (Seated posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1814° N, 79.7772° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "குடமாடுகூத்தன் / அரிமேய விண்ணகரத்தன் Sanskrit: कुम्भनर्तन / हरिमेयविष्णु Transliteration: Kudamudakoothan / Arimeya Vinnagarathan"
    },
    "thaayar": {
     "name": "Amruthaghatavalli Thayar / Amutha Nayagi (அமுதநாயகி தாயார்)",
     "legend": "\"Goddess of the Nectar Pot\"; seated in an independent shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Kudamudakoothan (குடமாடுகூத்தன்)"
    },
    "etymology": "Breathtaking Panchaloha icon depicting Lord Krishna in dynamic dancing stance holding pots",
    "thaayar": {
     "name": "Amruthaghatavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions and the 11 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Sage Utanga, Rudra (Siva), and Devas",
   "timeline": "Core sanctum dates back to the early Chola period (10th Century CE) Inscriptions record grants for maintaining daily lighting and conducting the annual Thai Amavasya Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (3.7) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Kudakoothu (Pot Dance) — Lord Krishna performed the legendary Kudakoothu dance in Gokulam after defeating the demon Banasura to free His grandson Aniruddha. At Thiru Arimeya Vinnagaram, He displayed this ecstatic dancing posture to Sage Utanga and the devas",
    "Etymology of Arimeya Vinnagaram — Ari (Hari / Lord Vishnu) + Meya (Residing) + Vinnagaram (Celestial Temple) = The divine abode where Hari resides to grant liberation",
    "Rudra’s Pacification — Lord Vishnu manifested in this joyful dancing form to pacify the ninth form of Rudra (Siva) during the Thirunangur divine manifestations"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.7.1)",
     "tamil": "ஆயர் கொழுந்தாய் அவராயர் தம்பாடி மல்கி* பாய்புகழ் அம்பொன் அரிமேய விண்ணகரம்* மேய பிரானை வினவிக் கேட்டீராகில்* தூய புகழான் அவன் தொண்டர்க்குத் தொண்டாமே.",
     "transliteration": "Āyar koḻundhāy avarāyar thambāḍi malgi* Pāypugaḻ ampon arimēya viṇṇagaram* Mēya pirāṉai viṉavik kēṭṭīrāgil* Thūya pugaḻān avaṉ thoṇḍarkkuth thoṇḍāmē",
     "wordMeanings": [
      [
       "Āyar koḻundhāy",
       "O tender shoot of the cowherd clan!"
      ],
      [
       "Ampon arimēya viṇṇagaram mēya pirāṉai",
       "The Lord residing in golden Arimeya Vinnagaram"
      ],
      [
       "Thūya pugaḻān avaṉ thoṇḍarkkuth thoṇḍāmē",
       "If you inquire of Him, He makes us servants unto His own pure, glorious devotees!"
      ]
     ],
     "significance": "Thirumangai Azhwar highlights that Lord Kudamudakoothan's supreme joy (Kudakoothu) translates into bestowing Bhagavata Seshatvam—granting devotees the privilege of serving other devotees"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram leading into a serene courtyard",
    "Moolavar Form: Seated posture (Irundha Thirukkolam) facing East, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Amruthaghatavalli Thayar seated in her separate shrine",
    "Urchavar Form: Dynamic bronze image of Kudamudakoothan in dancing posture holding pots"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.7)",
    "Video Search Query: \"Arimeya Vinnagaram Kudamudakoothan Temple History Velukkudi\""
   ]
  }
 },
 "devanartogai": {
  "serial": 34,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunangur Belt, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~10 km from Sirkazhi and ~3 km east of Thirunangur",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Shobhana Vimanam",
   "theertham": "Deva Pushkarini / Sobhana Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1867° N, 79.7911° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "மாதவப் பெருமாள் / தேவநாயகன் Sanskrit: माधव / देवनारायण Transliteration: Madhava Perumal / Devanayagan"
    },
    "thaayar": {
     "name": "Kadalmagal Thayar / Samudradevi (கடல்மகள் தாயார்)",
     "legend": "\"Daughter of the Ocean\"; seated in her dedicated shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Madhavan (மாதவன்)"
    },
    "etymology": "Fine Panchaloha standing icon holding Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Kadalmagal Thayar",
     "legend": "Accompanies Urchavar during festive processions and the 11 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Devas (Indra), Sage Vashishta, and Rudra (Siva)",
   "timeline": "Core sanctum dates back to the early Chola period (10th Century CE) Inscriptions detail grants for maintaining daily worship rituals and supporting the annual Thai Amavasya Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (4.1) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Devas’ Confluence (Devan-Ar-Thogai) — All devas, led by Indra and Vashishta, assembled here in great numbers (Thogai) to worship Lord Madhava and seek His grace for performing divine duties. Hence, the site was named Thirudhevanarthegai",
    "Marriage Legend of Kadalmagal — Goddess Mahalakshmi emerged from the churning of the Milk Ocean as Kadalmagal (Daughter of the Ocean) and married Lord Madhava at this site with full celestial rites",
    "Rudra’s Pacification — Lord Vishnu manifested in this serene form to pacify the tenth form of Rudra (Siva) during the Thirunangur divine manifestations"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (4.1.1)",
     "tamil": "மூவரில் முதல்வனாய் நின்ற மூர்த்தியை* தேவரில் தேவனைத் தேவனார்தொகைக்* மேவிய மாதவனை மேவி நின்று தொழும்* பாவலர் அல்லல் நோய் பற்று அறுப்பாரே.",
     "transliteration": "Mūvaril mudhalvaṉāy niṉṟa mūrththiyai* Thēvaril thēvaṉaith thēvaṉārthogaik* Mēviya mādhavaṉai mēvi niṉṟu thoḻum* Pāvalar allal nōi paṟṟu aṟuppārē",
     "wordMeanings": [
      [
       "Mūvaril mudhalvaṉāy niṉṟa mūrththiyai",
       "The foremost Supreme Deity among the Trinity (Brahma, Vishnu, Siva)"
      ],
      [
       "Thēvaril thēvaṉai",
       "The God of Gods"
      ],
      [
       "Thēvaṉārthogaik mēviya mādhavaṉai",
       "Lord Madhava residing at Thirudhevanarthegai where Devas assemble"
      ],
      [
       "Allal nōi paṟṟu aṟuppārē",
       "Those who sing His praise sever all bonds of karmic suffering!"
      ]
     ],
     "significance": "Thirumangai Azhwar proclaims Lord Madhava of Thirudhevanarthegai as Muvavil Mudhalvan (First among the Trinity), asserting that worshipping Him severs all earthly attachments and afflictions"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram leading into a serene courtyard",
    "Moolavar Form: Standing posture (Nindra Thirukkolam) facing East, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Kadalmagal Thayar seated in her separate shrine",
    "Urchavar Form: Madhavan cast in fine Panchaloha with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 4.1)",
    "Video Search Query: \"Thirudhevanarthegai Madhava Perumal History Velukkudi\""
   ]
  }
 },
 "parthanpalli": {
  "serial": 35,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thiru Parthanpalli Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~10 km from Sirkazhi and ~2 km south of Thirunangur",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Kamalavardhana Vimanam",
   "theertham": "Arjuna Theertham / Ganga Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1692° N, 79.7825° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பார்த்தசாரதி / தாமரைநாயகி மணாளன் Sanskrit: पार्थसारथि / अर्जुनसारथि Transliteration: Parthasarathy Perumal / Thamarainayagi Manalan"
    },
    "thaayar": {
     "name": "Thamarai Nayagi Thayar / Kamalavalli (தாமரைநாயகி தாயார்)",
     "legend": "\"Lotus Goddess\"; seated in an independent shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Parthasarathy (பார்த்தசாரதி)"
    },
    "etymology": "Magnificent Panchaloha icon holding a sword (Khadga) and cane (Senkol) in Charioteer posture",
    "thaayar": {
     "name": "Thamarai Nayagi Thayar",
     "legend": "Accompanies Urchavar during festive processions and the 11 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Arjuna (Partha), Rudra (Siva), and Sage Agastya",
   "timeline": "Core sanctum dating back to the early Chola period (10th Century CE) Inscriptions record structural endowments by Chola monarchs for maintaining daily rituals and supporting the annual Thai Amavasya Garuda Sevai",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi (3.3) and Nangur Sthala Purana"
   ],
   "legend": [
    "Legend of Arjuna’s Penance & Water Miracle — Arjuna went on a pilgrimage to redeem sins committed during war. Parched with thirst, he searched for water but found none. He performed penance to Lord Krishna. Krishna appeared, handed Arjuna a sword (Khadga), and instructed him to strike the earth. Pure Ganga water gushed forth, creating the Arjuna Theertham. Krishna then instructed Arjuna on Jnana Yoga at this site (Parthan-Palli = Arjuna's School/Abode)",
    "Rudra’s Pacification — Lord Vishnu manifested in this Charioteer form (Parthasarathy) to pacify the eleventh form of Rudra (Siva) during the Thirunangur divine manifestations"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.3.1)",
     "tamil": "கவள யானை கொம்பு ஒசித்த கண்ணன் என்றும்* தவள மாடக் பார்த்தன்பள்ளி மேவிய எந்தை என்றும்* துவள மாடே சென்று தொழுது தூமலர் தூவி* துவள நின்றார் அல்லல் நோய் தீர்ப்பாரே.",
     "transliteration": "Kavaḷa yāṉai kombu osiththa kaṇṇaṉ eṉṟum* Thavaḷa māḍak pārthanpaḷḷi mēviya endhai eṉṟum* Thuvaḷa māḍē seṉṟu thoḻudhu thūmalar thūvi* Thuvaḷa niṉṟār allal nōi thīrppārē",
     "wordMeanings": [
      [
       "Kavaḷa yāṉai kombu osiththa kaṇṇaṉ eṉṟum",
       "O Lord Krishna who broke the tusk of the rogue elephant Kuvalayapida!"
      ],
      [
       "Pārthanpaḷḷi mēviya endhai",
       "My Father residing at white-mansioned Thiru Parthanpalli"
      ],
      [
       "Thūmalar thūvi thoḻudhu",
       "Offering pure flowers and worshipping Him"
      ],
      [
       "Allal nōi thīrppārē",
       "He completely eradicates all afflictions and suffering!"
      ]
     ],
     "significance": "Thirumangai Azhwar extols Lord Parthasarathy of Thiru Parthanpalli as the supreme preceptor who dispels spiritual ignorance and cures all karmic suffering for those who offer pure devotion"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram set amidst traditional village fields",
    "Moolavar Form: Standing posture (Nindra Thirukkolam) facing East, flanked by Sridevi and Bhudevi, with Arjuna kneeling at His feet",
    "Thaayar Form: Thamarai Nayagi Thayar seated in her separate shrine",
    "Urchavar Form: Parthasarathy cast in fine Panchaloha holding a charioteer's cane and sword"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.3)",
    "Video Search Query: \"Thiru Parthanpalli Parthasarathy Temple History Velukkudi\""
   ]
  }
 },
 "sirkazhi": {
  "serial": 36,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Sirkazhi Town, Mayiladuthurai District, Tamil Nadu. Located ~1 km from Sirkazhi Bus Stand/Railway Station",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata)",
   "vimanam": "Pushkalavartha Vimanam",
   "theertham": "Sangu Pushkarini / Chakra Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East). Unique feature: Left leg lifted high into the cosmic sky as Trivikrama",
   "orientation": "Facing East",
   "gps": "11.2386° N, 79.7381° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "தாடாளன் / உலகளந்த பெருமாள் Sanskrit: तडाळन् / त्रिविक्रम Transliteration: Thadalan Perumal / Trivikramaprasanna"
    },
    "thaayar": {
     "name": "Lokanayagi Thayar / Mattavizhi Kuzhali (மட்டவிழி குழலி தாயார் / லோகநாயகி)",
     "legend": "\"Goddess with fragrant flower-adorned tresses\"; seated in her dedicated shrine in the outer prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Thadalan (தாடாளன்)"
    },
    "etymology": "Four-armed Panchaloha idol carrying a small Valampuri Sanghu (right-whorled conch) given by Sage Roma Rishi",
    "thaayar": {
     "name": "Lokanayagi Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "No Thaayar inside main Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Sage Roma Rishi, Brahma Deva, and Thirumangai Azhwar",
   "timeline": "Core structures date from early Chola period (9th-10th Century CE) Inscriptions record structural renovations by Chola King Vikrama Chola and later expansions by Vijayanagara governors",
   "literature": [
    "Explicitly recorded in Periya Thirumozhi, Koyil Olugu, and Guruparamparai Prabhavam"
   ],
   "legend": [
    "Legend of Trivikrama Avatar & Roma Rishi — Sage Roma Rishi performed intense penance to behold the exact cosmic form (Trivikrama) assumed by Lord Vishnu when He measured the three worlds from King Mahabali. Lord Vishnu manifested here with His left leg lifted skyward. Brahma washed the Lord's extended foot with holy water, creating the sacred Ganga",
    "Etymology of Kazhichheera Rama Vinnagaram — Named after the lush estuaries (Kazhi) of Sirkazhi and Lord Sri Rama's divine glory (Seer)",
    "Thirumangai Azhwar’s Scholastic Victory — It was at this shrine that Thirumangai Azhwar engaged in a fierce philosophical and literary debate with Thirugnana Sambandar (the great Saivite Nayanar). Impressed by Azhwar’s composition (Periya Thirumozhi 3.4), Sambandar conceded victory and gifted Azhwar his sacred spear (Vel)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.4.1)",
     "tamil": "ஒருகுறளாய் இருநிலமூடடி நிலம்வேண்டி* பெருந்திகழால் மாவலிதன் வேள்வியினில் மண்ணளந்த* திருத்தகுசீர் திருக்கழிச்சீராம விண்ணகரத்து அமைந்த* பெருமானை என்மனத்தே பெற்றொழிந்தேன் யானே!",
     "transliteration": "Orukuṟaḷāy irunilamūḍaḍi nilamvēṇḍi* Perundhigaḻāl māvalithan vēḷviyiṉil maṇṇaḷandha* Thiruththagusīr thirukkaḻichchīrāma viṇṇagaraththu amaindha* Perumāṉai eṉmanaththē peṟṟoḻindhēn yānē!",
     "wordMeanings": [
      [
       "Orukuṟaḷāy",
       "Taking the form of a small dwarf (Vamana)"
      ],
      [
       "Irunilamūḍaḍi nilamvēṇḍi",
       "Asking for three paces of land"
      ],
      [
       "Māvalithan vēḷviyiṉil maṇṇaḷandha",
       "Measuring the universe at Mahabali's sacrificial arena"
      ],
      [
       "Eṉmanaththē peṟṟoḻindhēn yānē",
       "I have permanently secured Him within my mind!"
      ]
     ],
     "significance": "Thirumangai Azhwar asserts that the cosmic Trivikrama who measured the universe with a single stride has now comfortably chosen to reside within the heart of his humble devotee"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Impressive 5-tiered east-facing Rajagopuram leading into the main temple street",
    "Moolavar Form: Massive standing icon (Trivikrama) with left leg raised to the sky, right hand showing Yachaka Mudra (asking for land)",
    "Thaayar Form: Lokanayagi Thayar seated in her separate shrine",
    "Urchavar Form: Thadalan in bronze standing posture with right-whorled conch"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.4)",
    "Video Search Query: \"Sirkazhi Thadalan Temple History Velukkudi Krishnan\""
   ]
  }
 },
 "thiruvali-thirunagari": {
  "serial": 38,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Thirunagari Village, Sirkazhi Taluk, Mayiladuthurai District, Tamil Nadu. Located ~13 km south-east of Sirkazhi and ~3 km from Thiruvaali",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Raka Vimanam / Veda Vimanam",
   "theertham": "Ilaatchiya Pushkarini / Surya Pushkarini",
   "posture": "Irundha Thirukkolam (Seated posture facing East)",
   "orientation": "Facing East",
   "gps": "11.1958° N, 79.8139° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வேதராஜன் / வயாலியால மணாளன் Sanskrit: वेदराज / कल्याणरङ्गनाथ Transliteration: Vedarajan Perumal / Vayaliyanathan"
    },
    "thaayar": {
     "name": "Amruthavalli Thayar / Amirthavalli (அமிர்தவல்லி தாயார்)",
     "legend": "Seated in her dedicated independent shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Kalyana Ranganathar (கல்யாண ரங்கநாதன்)"
    },
    "etymology": "Reclining Panchaloha image depicting the Lord as a handsome groom",
    "thaayar": {
     "name": "Amruthavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Thirumangai Azhwar, and Devas",
   "timeline": "Core sanctum dating back to the Chola period (10th-11th Century CE) Expanded by Vijayanagara emperors who constructed the massive 7-tiered Rajagopuram and dedicated shrines for Thirumangai Azhwar",
   "literature": [
    "Recorded in Periya Thirumozhi, Koyil Olugu, and Guruparamparai Prabhavam"
   ],
   "legend": [
    "Birthplace of Thirumangai Azhwar & The Waylaying Miracle — Thirunagari is the birth site (Avatarasthalam) of Thirumangai Azhwar (Neelan). To feed 1,008 Vaishnavas daily, Neelan turned to highway robbery. Lord Vishnu and Goddess Lakshmi disguised themselves as a wealthy newlywed couple passing through the forest of Thiruvaali. Neelan intercepted them and looted their jewels. However, he was unable to lift the bundle of jewels or remove the ring on the Lord's toe (Metti). Neelan tried to bite off the ring, touching the Lord's divine feet. Lord Vishnu revealed His true form, initiated Neelan with the sacred Ashtakshara Mantra into his right ear, and transformed him into the great saint Thirumangai Azhwar",
    "The Vedadhyaana Miracle — Lord Vishnu retrieved the four Vedas stolen by demons Madhu and Kaitabha and instructed Brahma at this site; hence He is named Vedarajan"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     41
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.6.1)",
     "tamil": "நெய்தலும் கமலமும் நீலமும் மலரும்* நீள்வயல் சூழ் திருநகரி முன்றில்* கைதவத் தொழும்பரை விடுத்து என்மனத்தே* காதன்மை செய்த கள்வனையே!",
     "transliteration": "Neydhalum kamalamum nīlamum malarum* Nīḷvayalg sūḻ thirunagari muṉṟil* Kaidhavath thoḻumbarai viḍuththu eṉmanaththē* Kāthanmai seydha kaḷvaṉaiyē!",
     "wordMeanings": [
      [
       "Neydhalum kamalamum... malarum",
       "Where blue water-lilies and lotuses bloom in fertile fields"
      ],
      [
       "Nīḷvayalg sūḻ thirunagari muṉṟil",
       "In the courtyards of Thirunagari"
      ],
      [
       "Kaidhavath thoḻumbarai viḍuththu",
       "Casting aside deceitful worldly attachments"
      ],
      [
       "Eṉmanaththē kāthanmai seydha kaḷvaṉaiyē",
       "The divine thief who stole my heart and filled it with love!"
      ]
     ],
     "significance": "Thirumangai Azhwar affectionately addresses Lord Vedarajan as the \"Divine Thief\" (Kalvan) who ambushed his soul on the highway of life and transformed him into an eternal servant of God"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Magnificent 7-tiered east-facing Rajagopuram rising over the village skyline",
    "Moolavar Form: Regal seated deity (Irundha Thirukkolam) facing East, flanked by Sridevi and Bhudevi",
    "Thaayar Form: Amruthavalli Thayar seated in her separate shrine",
    "Thirumangai Azhwar Shrine: Dedicated sanctum depicting Azhwar with his spear (Vel) and sword"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.6)",
    "Video Search Query: \"Thirunagari Vedarajan Perumal History Velukkudi\""
   ]
  }
 },
 "thiruindalur": {
  "serial": 39,
  "profile": {
   "regionNote": "Choza Naadu",
   "location": "Indhaloor, Mayiladuthurai Town, Mayiladuthurai District, Tamil Nadu. Located ~2 km from Mayiladuthurai Railway Station on the banks of Cauvery",
   "sthalaVriksham": "Senbagam (Michelia champaca)",
   "vimanam": "Veda Chakra Vimanam",
   "theertham": "Indhu Pushkarini / Cauvery River (Thula Kattam)",
   "posture": "Kidantha Thirukkolam (Reclining posture facing East). Unique feature: Green stone reclining form of Parimala Ranganathar measuring 12 feet",
   "orientation": "Facing East",
   "gps": "11.1072° N, 79.6547° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பரிமள ரங்கநாதன் / மருவுனியம்பாரன் Sanskrit: परिमल रङ्गनाथ / सुगन्धरङ्गनाथ Transliteration: Parimala Ranganathar / Sugandha Ranganathar"
    },
    "thaayar": {
     "name": "Parimala Ranganayagi Thayar / Chandrasapa Mochana Nachiyar (பரிமள ரங்கநாயகி தாயார்)",
     "legend": "Seated in an independent shrine facing East within the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Parimala Ranganathar (பரிமள ரங்கநாதன்)"
    },
    "etymology": "Breathtaking Panchaloha reclining/standing icon carrying divine weapons",
    "thaayar": {
     "name": "Parimala Ranganayagi Thayar",
     "legend": "Accompanies Urchavar during festive processions and Thula Snanam"
    }
   },
   "sanctumNote": "Two Visible Thaayars + Sages inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Chandra Deva (Moon God), Sage Markandeya, King Ambarisha, and River Cauvery",
   "timeline": "Core stone structure built during early Chola period (9th-10th Century CE) under King Parantaka I Extensively renovated by Tanjore Nayaks and Tanjore Maratha kings (Serfoji II)",
   "literature": [
    "Explicitly recorded in Thirumangai Azhwar’s Periya Thirumozhi (1.8) and Koyil Olugu"
   ],
   "legend": [
    "Legend of Vedas' Fragrance Restoration — When the demons Madhu and Kaitabha stole the Vedas and hid them in the ocean, the Vedas lost their divine purity and fragrance. Lord Vishnu destroyed the demons, retrieved the Vedas, and bathed them in the Cauvery River at Indhaloor, restoring their eternal fragrance (Parimala)",
    "Salvation of Moon God (Chandra) — Chandra (the Moon God, Indhu) performed penance here to get cleansed of the curse of Daksha. Lord Parimala Ranganathar cleansed his affliction in the temple tank (Indhu Pushkarini); hence the town was named Indhaloor",
    "Thirumangai Azhwar’s Door-Closing Dispute — When Thirumangai Azhwar arrived to worship, the sanctum doors were closed. Azhwar sang passionately: \"If You do not open the door and grant darshan, I shall proclaim that there is no Lord at Indhaloor!\" Moved by his fierce love, Parimala Ranganathar opened the doors and granted Him divine darshan"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (1.8.1)",
     "tamil": "வாசி வல்லீர் இந்தளூரீர் வாழ்ந்தே போம் நீரே* ஆசி இல்லா ஆற்றல் மிக்க அடியேற்கு அருள்செய்யீர்* தூசி முன்கை வாள்அரக்கர் தூளாகப் படைதொட்ட* ஈசானே! என்னிந்தளூர் எந்தாய்! என்றேனே!",
     "transliteration": "Vāsi vallīr indhaḷūrīr vāḻndhē pōm nīrē* Āsi illā āṟṟal mikka aḍiyēṟku aruḷseyyīr* Dūsi muṉkai vāḷarakkar thūḷāgap paḍaithoṭṭa* Īsānē! eṉṉindhaḷūr endhāy! eṉṟēnē!",
     "wordMeanings": [
      [
       "Vāsi vallīr indhaḷūrīr",
       "O Lord of Indhaloor who knows the inner worth of devotion!"
      ],
      [
       "Aḍiyēṟku aruḷseyyīr",
       "Will You not bestow Your divine grace upon me, Your servant?"
      ],
      [
       "Paḍaithoṭṭa Īsānē",
       "O Supreme Master who wiped out the demon armies!"
      ],
      [
       "Eṉṉindhaḷūr endhāy eṉṟēnē",
       "I call out to You: \"O my Father of Indhaloor!\""
      ]
     ],
     "significance": "Thirumangai Azhwar uses playful intimate argument (Ninda Stuti) with Lord Parimala Ranganathar, highlighting that the Supreme Being cannot hide behind locked doors when a devotee calls out with unfeigned love"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered Rajagopuram facing East set on the banks of the Cauvery River",
    "Moolavar Form: Impressive 12-foot green stone reclining deity (Kidantha Thirukkolam) facing East on Adisesha",
    "Thaayar Form: Parimala Ranganayagi Thayar seated in her separate shrine",
    "Urchavar Form: Parimala Ranganathar cast in fine Panchaloha with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 1.8)",
    "Video Search Query: \"Indhaloor Parimala Ranganathar Temple History Velukkudi\""
   ]
  }
 },
 "thirumaliruncholai": {
  "serial": 41,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Alagar Kovil, Madurai District, Tamil Nadu. Located ~21 km north-east of Madurai city at the foothills of the Alagar Hills (Vrishabhadri)",
   "sthalaVriksham": "Jambu Tree (Rose Apple - Syzygium cumini)",
   "vimanam": "Somasundara Vimanam / Somachanda Vimanam",
   "theertham": "Nupura Gangai (Silambaru) / Sila Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "10.0742° N, 78.2133° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கள்ளழகர் / பரமசுவாமி Sanskrit: चोरसुन्दर / परमस्वामी / वृषभाद्रिनाथ Transliteration: Kallazhagar / Paramaswami / Sundararajan"
    },
    "thaayar": {
     "name": "Sundaravalli Thayar (சுந்தரவல்லி தாயார்)",
     "legend": "Seated in an independent, prominent shrine within the second prakaram facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Sundararajan / Azhagar (சுந்தரராஜன்)"
    },
    "etymology": "Breathtaking Panchaloha idol crafted with high gold content; uniquely bathed only in the mountain spring water of Nupura Gangai",
    "thaayar": {
     "name": "Sridevi & Bhudevi",
     "legend": "Positioned beside Urchavar during all major festive processions (Chithirai Thiruvizha)"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Manduka Maharishi (Sage Sutapa), Yama Dharmaraja, Malayadhwaja Pandya, and Devas",
   "timeline": "Early Pandya Origins: Epigraphic records date the sanctum back to the 6th-8th Century CE under Early Pandya kings (Jatila Parantaka Nedunjadayan) Imperial Chola & Vijayanagara Extensions: Expanded by Jatavarman Sundara Pandyan I, Krishnadevaraya, and the Madurai Nayaks (Thirumalai Nayak constructed major mandapams and royal festival routes)",
   "literature": [
    "Celebrated in Sangam Literature (Paripāṭal 15), Silappatikaram (Kātukāṇ Kādhai), Koyil Olugu, and Sanskrit Brahmanda Purana"
   ],
   "legend": [
    "Legend of Sage Manduka & Durvasa’s Curse — Sage Sutapa was performing penance in the Silambaru River without noticing Sage Durvasa's arrival. Durvasa cursed him to become a frog (Manduka). To obtain redemption, the sage meditated at Thirumaaliruncholai. Lord Sundararajan manifested before him on the banks of the Vaigai River at Thaenoor, cleansed his curse, and restored his human form",
    "Origin of Nupura Gangai (Silambaru) — When Lord Vishnu stepped across the heavens as Trivikrama, Lord Brahma washed His extended foot with holy water. A drop of that cosmic water fell from the anklet (Nupura) of Trivikrama onto the Vrishabhadri hill, forming the perpetual mountain stream Nupura Gangai. To this day, the Utsava idol of Kallazhagar is abysheked only with water from this stream; using any other water turns the bronze icon black",
    "Chithirai Thiruvizha Festival — The iconic annual festival where Lord Kallazhagar rides a golden horse from Alagar Kovil to Madurai to enter the Vaigai River and bestow salvation upon Manduka Maharishi, witnessed by millions of pilgrims",
    "Karupannaswamy (Eighteenth Step Guardian) — The shrine features the legendary Pathinettam Padi Karuppu (18th Step Guardian Deity) guarding the main outer gopuram gates, who serves as the divine protector of the temple's sanctity"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "periyazhwar",
     34
    ],
    [
     "andal",
     11
    ],
    [
     "thirumangai",
     33
    ],
    [
     "bhoothath",
     3
    ],
    [
     "pey",
     1
    ],
    [
     "nammazhwar",
     46
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "periyazhwar",
     "work": "Peri azhwar Thirumozhi (4.2.1)",
     "tamil": "நந்தன் மனத்து இடை நின்ற நன்மணியை* அந்தணர் வாழும் மாலிருஞ்சோலை எம் அண்ணலை* சிந்தை பிரசாத் தொழ எழுந்தேன் அடியேன்* எந்தை பெருமானைக் கண்டுகொண்டேனே!",
     "transliteration": "Nandhaṉ manaththu iḍai niṉṟa naṉmaṇiyai* Andhaṇar vāḻum māliruñjōlai em aṇṇaḷai* Sindhai prasāth thoḻa eḻundhēṉ aḍiyēṉ* Endhai perumāṉaik kaṇḍukoṇḍēnē!",
     "wordMeanings": [
      [
       "Nandhaṉ manaththu iḍai niṉṟa naṉmaṇiyai",
       "The precious jewel dwelling in Nanda Maharaja's heart"
      ],
      [
       "Māliruñjōlai em aṇṇaḷai",
       "Our Lord of Thirumaaliruncholai where Vedic scholars reside"
      ],
      [
       "Sindhai prasāth thoḻa eḻundhēṉ",
       "Rising with a heart filled with serene grace to bow down"
      ],
      [
       "Endhai perumāṉaik kaṇḍukoṇḍēnē",
       "I, His humble servant, have beheld my Father and Lord!"
      ]
     ],
     "significance": "Periyazhwar identifies Kallazhagar of Thirumaaliruncholai directly with Yashoda and Nanda's infant Krishna, describing how beholding the Lord at this forest shrine fills the devotee's mind with tranquil divine grace (Prasadam)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Magnificent 7-tiered east-facing Rajagopuram flanked by the famous 18 steps of Karuppannaswamy",
    "Moolavar Form: Regal standing posture (Nindra Thirukkolam) facing East, holding the Sudarshana Chakra in Prayoga posture alongside Shankha",
    "Thaayar Form: Sundaravalli Thayar seated gracefully in her dedicated shrine",
    "Urchavar Form: Breathtaking golden-bronze icon of Sundararajan riding the golden horse during Chithirai Thiruvizha"
   ],
   "literature": [
    "Project Madurai Text Archives (Periyazhwar Thirumozhi 4.2 & Thiruvaimozhi 9.1)",
    "Video Search Query: \"Alagar Kovil Kallazhagar History Velukkudi Krishnan\""
   ]
  }
 },
 "thirukkoshtiyur": {
  "serial": 42,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Thirukosthiyur, Sivaganga District, Tamil Nadu. Located ~8 km south-west of Tiruppattur and ~25 km from Karaikudi",
   "sthalaVriksham": "Purasa Tree (Butea monosperma)",
   "vimanam": "Ashtanga Vimanam (4-tiered octagonal tower reflecting Om Namo Narayanaya)",
   "theertham": "Deva Pushkarini / Mahamaha Kulam",
   "posture": "Threefold Postures across 3 Tiers (Ground: Reclining, Middle: Standing, Top: Seated facing East)",
   "orientation": "Facing East",
   "gps": "10.1236° N, 78.5572° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "சௌமிய நாராயணப் பெருமாள் Sanskrit: सौम्यनारायण / गोष्ठीपुरनाथ Transliteration: Sowmya Narayana Perumal"
    },
    "thaayar": {
     "name": "Thirumamagal Thayar / Thirumagal (திருமாமகள் தாயார்)",
     "legend": "Resides in her dedicated shrine in the inner corridor"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Sowmya Narayanan (சௌமிய நாராயணன்)"
    },
    "etymology": "Exquisite metallic icon made of pure silver (Velli-Moorthi), a rare iconographic feature",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during all major festivals"
    }
   },
   "sanctumNote": "Three-Tiered Ashtanga Sanctum"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Lord Siva, Indra, Kadamba Maharishi, and Ramanuja",
   "timeline": "Built by Early Pandya kings (8th Century CE) and embellished by Chola, Hoysala, and Vijayanagara emperors Inscriptions record extensive royal grants by Pandya King Maravarman Sundara Pandyan I for maintaining the Ashtanga Vimanam",
   "literature": [
    "Recorded in Periyazhwar Thirumozhi, Periya Thirumozhi, Koyil Olugu, and Ramanuja Vaibhavam"
   ],
   "legend": [
    "Legend of the Celestial Confluence (Goshti) — When the demon Hiranyakashipu tormented the worlds, Lord Brahma, Lord Siva, Devas, and Sages gathered in secret council (Goshti) at this site to devise a plan for his destruction. Lord Vishnu manifested to assure them that He would take the Narasimha avatar to slay the demon. Hence, the place acquired the name Thirugoshtiyur (The City of Divine Assembly)",
    "Ramanuja’s Proclamation of the Ashtakshara Mantra — Swami Ramanuja traveled 18 times from Srirangam to Thirugoshtiyur to receive the secret inner meaning of the Ashtakshara Maha Mantra (Om Namo Narayanaya) from his guru Thirukottiyur Nambi. After receiving the sacred oath of secrecy, Ramanuja was moved by boundless compassion, climbed to the top of the Thirugoshtiyur Ashtanga Gopuram, called out to all people regardless of caste or stature, and proclaimed the secret mantra aloud so everyone could attain liberation (Moksha)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "periyazhwar",
     11
    ],
    [
     "thirumangai",
     13
    ],
    [
     "bhoothath",
     2
    ],
    [
     "pey",
     1
    ],
    [
     "thirumazhisai",
     1
    ],
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "periyazhwar",
     "work": "Peri azhwar Thirumozhi (1.4.1)",
     "tamil": "வண்ண மாடங்கள் சூழ் திருக் கோட்டியூர்* கண்ணன் கேசவன் நம்பி பிறந்தினில்* எண்ணெய் சுண்ணம் எதிர்எதிர் தூவிட* மண்ணினாய் ஒளி நெய் மலிந்ததுவே.",
     "transliteration": "Vaṇṇa māḍaṅgaḷ sūḻ thiruk kōṭṭiyūr* Kaṇṇaṉ kēsavaṉ nambi piṟandhiṉil* Eṇṇey suṇṇam edhiredhir thūviḍa* Maṇṇināy oḷi ney malindhadhuvē",
     "wordMeanings": [
      [
       "Vaṇṇa māḍaṅgaḷ sūḻ thiruk kōṭṭiyūr",
       "In Thirugoshtiyur surrounded by colorful mansions"
      ],
      [
       "Kaṇṇaṉ kēsavaṉ nambi piṟandhiṉil",
       "On the occasion of Lord Krishna's divine birth"
      ],
      [
       "Eṇṇey suṇṇam edhiredhir thūviḍa",
       "Devotees joyfully splashing fragrant oil and scented powders on one another"
      ],
      [
       "Maṇṇināy oḷi ney malindhadhuvē",
       "The streets overflowed with holy oil and joyful divine bliss!"
      ]
     ],
     "significance": "Periyazhwar transforms Thirugoshtiyur into Gokulam itself, poetically describing how the entire town celebrates the birth of Krishna with ecstatic joy and divine love (Vatsalya Bhava)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Ashtanga Vimanam: Majestic 4-tiered octagonal Vimanam rising high over the sanctum, housing the three postures of Vishnu",
    "Moolavar Form: Threefold forms within the tier structure — Reclining on ground floor, Standing in mid-level, Seated on top level",
    "Thaayar Form: Thirumamagal Thayar seated in her separate shrine",
    "Ramanuja Tower Spot: The open balcony on the upper tier of the Vimanam from where Ramanuja proclaimed the Ashtakshara Mantra"
   ],
   "literature": [
    "Project Madurai Text Archives (Periyazhwar Thirumozhi 1.4 & Periya Thirumozhi 10.2)",
    "Video Search Query: \"Thirugoshtiyur Ramanuja Ashtakshara Mantra Velukkudi\""
   ]
  }
 },
 "thirumeyyam": {
  "serial": 43,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Thirumayam, Pudukkottai District, Tamil Nadu. Located ~18 km from Pudukkottai on the Karaikudi highway",
   "sthalaVriksham": "Uva Tree (Dillenia indica) / Magizham",
   "vimanam": "Satyagiri Vimanam",
   "theertham": "Satya Pushkarini / Kadamba Theertham",
   "posture": "Moolavar 1 (Satyagirinathan): Nindra Thirukkolam (Standing posture facing East) | Moolavar 2 (Sathyamurthy / Adimeyyar): Kidantha Thirukkolam (Reclining posture facing East - Rock-cut cave sanctum)",
   "orientation": "Facing East",
   "gps": "10.2458° N, 78.7514° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "சத்தியகிரிநாதன் / மெய்யப்பப் பெருமாள் Sanskrit: सत्यगिरिनाथ / सत्यमूर्त्ति Transliteration: Satyagirinathan / Sathyamurthy"
    },
    "thaayar": {
     "name": "Uyyavantha Nachiyar / Uyyavanthal (உய்யவந்த நாச்சியார்)",
     "legend": "\"Goddess who arrived to redeem humanity\"; seated in a separate shrine in the rock-cut complex"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Sathyamurthy (சத்தியமூர்த்தி)"
    },
    "thaayar": {
     "name": "Uyyavantha Nachiyar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Massive Rock-Cut Reclining Image"
  },
  "puranam": {
   "prathyaksham": "Sage Satya, Adisesha, Garuda, and Markandeya",
   "timeline": "8th Century Epigraphs: Inscriptions from the reign of Pandya King Maravarman Rajasimha I detail grants for the rock-cut shrine Epigraphical records document an ancient boundary agreement (Sathyamurthy Sasanama) resolving worship space between Saiva and Vaishnava priests in 1250 CE under Hoysala mediation",
   "literature": [
    "Recorded in Thirumangai Azhwar’s Periya Thirumozhi and Archeological Survey of India (ASI) epigraphical bulletins"
   ],
   "legend": [
    "Legend of Adisesha’s Venomous Protection — When demons attempted to attack the sleeping Lord Sathyamurthy in His cave sanctum, Adisesha spewed intense poisonous fumes (Halahala) from his thousand hoods, consuming the invading demons and protecting the sanctum's sanctity",
    "Sage Satya’s Penance — Sage Satya performed penance on the Truth Hill (Satyagiri) seeking the eternal form of Lord Vishnu. The Lord appeared both as standing Satyagirinathan and reclining Sathyamurthy",
    "Rock-Cut Architectural Marvel & Saiva-Vaishnava Harmony — The cave temple is a celebrated 7th-8th Century CE rock-cut monument built jointly under Pallava/Pandya patronage. Adjacent to the Vishnu cave temple is the rock-cut Satyagiriswara Siva temple, sharing a unified rock hill complex protected by medieval fort walls"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     9
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (2.8.1)",
     "tamil": "மைம்மாநீர்க் கண்ணியும் மான்மறி ஏந்திய கையும்* செய்ய மேனியும் வானிமிர் சடையும் உடையவன் தான்* செம்மாந்து ஏத்தித் திரியும் சத்தியகிரி எம்மான்* மெய்யானை மெய்யே அடியேன் கண்டுகொண்டேனே!",
     "transliteration": "Maimmānīrk kaṇṇiyum māṉmaṟi ēndhiya kaiyum* Seyya mēniyum vāṉimir saḍaiyum uḍaiyavaṉ thāṉ* Semmāndhu ēththith thiriyum satyagiri emmān* Meiyyāṉai meiyyē aḍiyēṉ kaṇḍukoṇḍēnē!",
     "wordMeanings": [
      [
       "Maimmānīrk kaṇṇiyum... saḍaiyum uḍaiyavaṉ thāṉ",
       "Even Lord Siva (with Parvati, holding a deer, with radiant form and matted locks)"
      ],
      [
       "Semmāndhu ēththith thiriyum",
       "Praises Him with reverence"
      ],
      [
       "Satyagiri emmān Meiyyāṉai",
       "My Lord residing on Satyagiri, the embodiment of Truth"
      ],
      [
       "Meiyyē aḍiyēṉ kaṇḍukoṇḍēnē",
       "In absolute truth, I, His humble servant, have beheld Him!"
      ]
     ],
     "significance": "Thirumangai Azhwar highlights that Lord Sathyamurthy of Thirumeyyam is the Supreme Truth (Satyam) revered by Lord Siva Himself, offering absolute liberation to those who seek Him"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rock-Cut Sanctum Gateway: Ancient rock-cut facade cut into the side of the Satyagiri hill fort",
    "Moolavar Form: Imposing 20-foot rock-carved reclining deity (Sathyamurthy) on Adisesha inside the cave sanctum",
    "Thaayar Form: Uyyavantha Nachiyar seated in her dedicated rock-cut shrine",
    "Urchavar Form: Sathyamurthy cast in Panchaloha flanked by consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 2.8)",
    "Video Search Query: \"Thirumeyyam Sathyamurthy Perumal Cave Temple Velukkudi\""
   ]
  }
 },
 "madurai-koodal": {
  "serial": 44,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Heart of Madurai City, Tamil Nadu. Located ~1 km from Madurai Meenakshi Amman Temple and ~1 km from Madurai Junction Railway Station",
   "sthalaVriksham": "Senbagam Tree (Michelia champaca)",
   "vimanam": "Ashtanga Vimanam (3-tiered architectural tower)",
   "theertham": "Hema Pushkarini / Chakra Theertham / Vaigai River",
   "posture": "Threefold Postures across 3 Tiers (Ground: Seated facing East, Middle: Standing, Top: Reclining)",
   "orientation": "Facing East",
   "gps": "9.9158° N, 78.1147° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கூடலழகர் / வையம்போற்றும் பிரான் Sanskrit: सङ्गमसुन्दर / व्यूहसुन्दर Transliteration: Koodal Azhagar / Vyooha Sundararajan"
    },
    "thaayar": {
     "name": "Madhuravalli Thayar / Vyooha Nayagi (மதுரவல்லி தாயார்)",
     "legend": "\"Goddess of Sweetness\"; seated in an independent shrine facing East in the main prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Vyooha Sundararajan (வியூக சுந்தரராஜன்)"
    },
    "etymology": "Breathtaking four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Madhuravalli & Maragathavalli",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Three-Tiered Ashtanga Sanctum"
  },
  "puranam": {
   "timeline": "Structural origins date back to Early Pandya kings (7th-8th Century CE) Expanded during the Reign of Maravarman Sundara Pandyan I and further renovated by Madurai Nayak kings (Viswanatha Nayak and Thirumalai Nayak)",
   "literature": [
    "Recorded in Sangam Literature (Paripāṭal), Thiruppallandu, Periya Thirumozhi, and Koyil Olugu"
   ],
   "legend": [
    "Origin of Thiruppallandu by Periyazhwar — King Vallabhadeva of Madurai held a grand scholastic debate in his court to establish the Supreme Truth (Parathatvam). Periyazhwar (Vishnuchitta) of Srivilliputhur was guided by Lord Koodal Azhagar to attend. Inspired by divine grace, Periyazhwar quoted Vedic scriptures and established Lord Vishnu as the Supreme Truth. Overjoyed, the king paraded Periyazhwar on a royal elephant through the streets of Madurai. Lord Koodal Azhagar appeared in the sky on Garuda to witness the victory procession. Overwhelmed with protective love lest evil eyes harm the Lord, Periyazhwar rang his hand-bells and sang the immortal Thiruppallandu (\"Long Live For Thousands of Years!\")",
    "The Name \"Koodal\" — Madurai is called Koodal (Assembly) because all devas, sages, and Sangam poets gathered here under the shade of Lord Azhagar's grace"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (9.2.5)",
     "tamil": "துவரங்கொமான் பிறந்த தூய்மை மாடக்* கூடல் அழகியாரைக் கொண்டாடிப் போற்றி* அவரம் தீர்த்து அன்பினோடு அடியேன் என்றும்* நாவாரப் பாடி நைந்து உருகுவேனே.",
     "transliteration": "Thuvaraṅgomāṉ piṟandha thūymai māḍak* Kūḍal aḻagiyāraik koṇḍāḍip pōṟṟi* Avaraṁ thīrththu anbiṉōḍu aḍiyēṉ eṉṟum* Nāvārap pāḍi naindhu uruguvēnē",
     "wordMeanings": [
      [
       "Thuvaraṅgomāṉ piṟandha",
       "The Lord born in Dwarka (Lord Krishna)"
      ],
      [
       "Thūymai māḍak Kūḍal aḻagiyārai",
       "Lord Koodal Azhagar of pure-mansioned Madurai"
      ],
      [
       "Koṇḍāḍip pōṟṟi",
       "Celebrating and praising His supreme glory"
      ],
      [
       "Avaraṁ thīrththu anbiṉōḍu",
       "Eradicating my flaws and filling me with divine love"
      ],
      [
       "Nāvārap pāḍi naindhu uruguvēnē",
       "I sing His praises till my tongue is satisfied and my soul melts into bliss!"
      ]
     ],
     "significance": "Thirumangai Azhwar expresses how praising Lord Koodal Azhagar melts the human heart into pure devotion, connecting the Lord of Madurai with Krishna of Dwarka"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Ashtanga Rajagopuram: 5-tiered Rajagopuram leading into the rare 3-tiered Ashtanga Vimanam sanctum",
    "Moolavar Form: Regal seated posture (Irundha Thirukkolam) of Koodal Azhagar facing East on the ground tier, holding Shankha and Chakra",
    "Thaayar Form: Madhuravalli Thayar seated gracefully in her individual shrine",
    "Urchavar Form: Vyooha Sundararajan cast in Panchaloha flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruppallandu & Periya Thirumozhi 9.2)",
    "Video Search Query: \"Koodal Azhagar Temple History Velukkudi Krishnan\""
   ]
  }
 },
 "thirupullani": {
  "serial": 45,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Thirupullani Village, Ramanathapuram District, Tamil Nadu. Located ~10 km south of Ramanathapuram town and ~60 km from Rameswaram",
   "sthalaVriksham": "Arasa Maram (Sacred Fig / Peepal Tree - Ficus religiosa)",
   "vimanam": "Kalyana Vimanam",
   "theertham": "Chakra Theertham / Sethu Theertham / Rathnakara Samudra",
   "posture": "Moolavar 1 (Adhi Jagannathar): Irundha Thirukkolam (Seated posture facing East) | Moolavar 2 (Dhurbasayana Ramar): Kidantha Thirukkolam (Reclining posture on Dharba grass bed facing East)",
   "orientation": "Facing East",
   "gps": "9.3217° N, 78.8356° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஆதி ஜெகன்னாதப் பெருமாள் / புல்லாணி இராமன் Sanskrit: आदिजगन्नाथ / दर्भशयन श्रीराम Transliteration: Adhi Jagannatha Perumal / Dhurbasayana Ramar"
    },
    "thaayar": {
     "name": "Padmasani Thayar / Kalyanavalli (பத்மாசனி / கல்யாணவல்லி)",
     "legend": "Seated in her dedicated shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Kalyana Jagannathar / Kothandarama (கல்யாண ஜெகன்னாதர்)"
    },
    "thaayar": {
     "name": "Padmasani & Sita Devi",
     "legend": "Positioned beside Urchavar during festive processions"
    }
   },
   "sanctumNote": "Dual Sanctum Setup"
  },
  "puranam": {
   "prathyaksham": "King Dasharatha, Vibhishana, Samudra Raja, and Sage Pullaranya",
   "timeline": "Core structures date from the Early Pandya period (8th Century CE) Extensively renovated by Chola King Rajendra I, Sethupathi Kings of Ramanathapuram, and Tanjore Nayaks",
   "literature": [
    "Recorded in Srimad Valmiki Ramayana (Yuddha Kanda), Periya Thirumozhi, Koyil Olugu, and Sethu Puranam"
   ],
   "legend": [
    "King Dasharatha’s Santhana Gopala Tapas — King Dasharatha, childless for years, performed penance here under the sacred Arasa tree. Lord Adhi Jagannathar appeared and presented him with divine Payasam (sweet porridge), instructing him to give it to his three queens. This led to the divine birth of Rama, Lakshmana, Bharata, and Shatrughna. Hence, Thirupullani is renowned as a primary Santhana Praapthi (child-granting) shrine",
    "The Legend of Dhurbasayana & Saranagati (Sharanagathi Kshetram): During the Ramayana quest to rescue Sita, Lord Rama reached this shore. He reclined for 3 days on a bed of sacred Dharba grass (Pull) awaiting Samudra Raja (the Ocean God). Here, Vibhishana (brother of Ravana) fled Lanka and sought refuge at Rama's feet. Lord Rama proclaimed the immortal Abhaya Pradhanam (The Ultimate Assurance of Refuge to anyone who surrenders, even an enemy)",
    "Construction of Sethu Bandhanam — Lord Rama worshipped Adhi Jagannathar here to obtain the divine bow Sharnga before constructing the Sethu Bridge to Lanka"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     21
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (9.3.1)",
     "tamil": "தன் அடியார் திறத்தகத்துத் தாமரையாள் ஆகிலும் சிச்சுரைக்கின்* என் அடியார் அது செய்யார் செய்தாரேல் நன்ற செய்தார் என்று சொல்லி* தன் அடியார் உலகத்தார் தொழக் கெழுமி இருந்த அவற்கு* புல்லாணி கைதொழும் அவர்க்கு அல்லல் நோய் இல்லையே!",
     "transliteration": "Thaṉ aḍiyār thiṟaththagaththu thāmaraiyāḷ āgilum chichchuraikkin* Eṉ aḍiyār adhu seyyār seydhārēl naṉṟu seydhār eṉṟu solli* Thaṉ aḍiyār ulagaththār thoḻak keḻumi irundha avarkku* Pullāṇi kaithoḻum avarkku allal nōi illaiyē!",
     "wordMeanings": [
      [
       "Eṉ aḍiyār adhu seyyār... eṉṟu solli",
       "The Lord defends them saying, \"My devotee would never do wrong; even if they did, it is done for good!\""
      ],
      [
       "Pullāṇi kaithoḻum avarkku allal nōi illaiyē",
       "For those who fold their hands in worship at Thirupullani, there is no karmic suffering or affliction!"
      ]
     ],
     "significance": "Thirumangai Azhwar reveals the peak of Purushakara Prapatti (divine intercession) and Abhaya Pradhanam, declaring that Lord Adhi Jagannathar of Thirupullani excuses all faults of those who surrender to Him"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered east-facing Rajagopuram leading into a sprawling temple complex",
    "Moolavar Form: Dual forms — Seated Adhi Jagannathar in main sanctum; Reclining Dhurbasayana Ramar on a Dharba grass bed in an adjacent sanctum",
    "Thaayar Form: Padmasani Thayar seated in her separate shrine",
    "Urchavar Form: Kalyana Jagannathar and Kothandarama carrying divine weapons"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 9.3 & 9.4)",
    "Video Search Query: \"Thirupullani Dhurbasayana Ramar Temple Velukkudi Krishnan\""
   ]
  }
 },
 "thiruthangal": {
  "serial": 46,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Thiruthangal Town, Virudhunagar District, Tamil Nadu. Located ~25 km from Srivilliputhur and ~2 km from Sivakasi",
   "sthalaVriksham": "Nelli Tree (Amla / Gooseberry - Phyllanthus emblica)",
   "vimanam": "Devaki Vimanam",
   "theertham": "Papavinasa Pushkarini / Bhaskara Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East atop a hillock called Than-malai)",
   "orientation": "Facing East",
   "gps": "9.4795° N, 77.8089° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "நின்ற நாராயணப் பெருமாள் / தங்கப்பாறை நாதன் Sanskrit: निन्रनारायण / श्रीपति Transliteration: Ninnra Narayana Perumal / Thanmalaiathan"
    },
    "thaayar": {
     "name": "Sengamalavalli Thayar / Kamaladevi (செங்கமலவல்லி தாயார்)",
     "legend": "Seated in her dedicated independent shrine on the hillock complex facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Thiruthangalappan / Sengamala Kanna (திருத்தங்காலப்பன்)"
    },
    "etymology": "Breathtaking Panchaloha idol shown holding the bow, arrow, Shankha, and Chakra",
    "thaayar": {
     "name": "Sridevi, Bhudevi, Neeladevi, and Jambavati",
     "legend": "Unique setup: Four consorts accompany Urchavar during festive processions"
    }
   },
   "sanctumNote": "Four Visible Consorts inside Sanctum Complex"
  },
  "puranam": {
   "prathyaksham": "Goddess Sridevi, Sage Bhrigu, Sage Markandeya, and Aniruddha",
   "timeline": "Structural origins date back to early Pandya kings (7th-8th Century CE) Inscriptions record extensive structural donations by Maravarman Sundara Pandyan I and later expansion by the Nayak rulers of Madurai",
   "literature": [
    "Explicitly praised in Periya Thirumozhi (10.4) and Thiruvaimozhi (8.3), and recorded in Sangam literature fragments referring to Than-malai"
   ],
   "legend": [
    "Legend of the Three Goddesses' Dispute (Thiruthangal) — Goddess Sridevi, Bhudevi, and Neeladevi had a loving debate on who held the supreme affection of Lord Vishnu. Sridevi descended to this hillock (Than-malai) and performed intense penance. Lord Vishnu appeared before her and declared that Sridevi resides eternally on His chest (Srivatsa), pacifying all three consorts. Because the Lord stayed (Thangudhal) here happily with Sridevi, the town was named Thiruthangal (\"The Sacred Resting Abode\")",
    "Marriage of Aniruddha and Usha — Pradyumna's son Aniruddha (grandson of Lord Krishna) was married to Usha (daughter of King Banasura) at Thiruthangal under divine auspices"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     4
    ],
    [
     "bhoothath",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (10.4.1)",
     "tamil": "நன் மணி வண்ணன ஊர் உலகேத்தும்* தொல் மணி மாடங்கள் சூழ் திருத்தங்கால்* என் மணி வண்ணனை எய்தி எந்தாயை* பொன் மணி பூண் தொழுது உய்ந்தேனே!",
     "transliteration": "Naṉ maṇi vaṇṇaṉa ūr ulagēththum* Thol maṇi māḍaṅgaḷ sūḻ thiruththaṅgāl* Eṉ maṇi vaṇṇaṉai eybhi endhāyai* Pon maṇi pūṇ thoḻudhu uyndhēnē!",
     "wordMeanings": [
      [
       "Naṉ maṇi vaṇṇaṉa ūr",
       "The sacred town of the sapphire-complexioned Lord"
      ],
      [
       "Eṉ maṇi vaṇṇaṉai eybhi",
       "Approaching my sapphire-hued Lord and Father"
      ],
      [
       "Pon maṇi pūṇ thoḻudhu uyndhēnē",
       "Adoring His jewel-bedecked form, I have attained eternal redemption!"
      ]
     ],
     "significance": "Thirumangai Azhwar declares that worshipping the jewel-bedecked standing form of Ninnra Narayana at Thiruthangal brings instantaneous spiritual redemption (Uyyudhal)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Hillock Sanctum: Rock-cut elevated temple complex rising atop the Than-malai hillock",
    "Moolavar Form: Regal standing deity (Nindra Thirukkolam) facing East, flanked by Sridevi, Bhudevi, Neeladevi, and Jambavati",
    "Thaayar Form: Sengamalavalli Thayar seated gracefully in her individual shrine on the hillock",
    "Urchavar Form: Thiruthangalappan cast in Panchaloha form with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 10.4 & Irandarn Thiruvanthadhi)",
    "Video Search Query: \"Thiruthangal Ninnra Narayana Perumal Temple Velukkudi\""
   ]
  }
 },
 "srivilliputhur": {
  "serial": 47,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Srivilliputhur Town, Virudhunagar District, Tamil Nadu. Located ~74 km south-west of Madurai",
   "sthalaVriksham": "Shenbagam Tree (Michelia champaca)",
   "vimanam": "Vimalakruthi Vimanam",
   "theertham": "Thirumukku Kulam (Kannadi Kulam) / Chakra Theertham",
   "posture": "Kidantha Thirukkolam (Reclining posture on a banyan leaf/Adisesha facing East)",
   "orientation": "Facing East",
   "gps": "9.5097° N, 77.6325° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வடபத்ரசாயி / ஆலிலையான் Sanskrit: वटपत्रशायी / श्रीविल्लिपुत्तूर्नाथ Transliteration: Vatapatrasayi / Aalilaiyan"
    },
    "thaayar": {
     "name": "/ Andal"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Rangamannar (ரங்கமன்னார்)"
    },
    "etymology": "Regal standing Panchaloha idol holding a cane (Senkol), with Andal to His left and Garuda to His right",
    "thaayar": {
     "name": "Andal Nachiyar",
     "legend": "Accompanies Rangamannar during all major festivals, holding the divine parrot (Kili)"
    }
   },
   "sanctumNote": "Massive Reclining Setup in Upper Tier"
  },
  "puranam": {
   "prathyaksham": "Periyazhwar, Andal, Garuda Deva, and Markandeya Maharishi",
   "timeline": "Core structures built by Early Pandya Kings (8th Century CE) Extensively renovated by Maravarman Sundara Pandyan I and the Madurai Nayaks (Thirumalai Nayak constructed the monumental Rajagopuram and Andal's car Ther)",
   "literature": [
    "Birthed the sacred Thiruppavai (30 verses by Andal) and Thiruppallandu (12 verses by Periyazhwar), extensively cited in Guruparamparai Prabhavam and Koyil Olugu"
   ],
   "legend": [
    "Birthplace of Periyazhwar and Andal — Srivilliputhur is the sacred Avatarasthalam of two major Azhwars—Periyazhwar (Vishnuchitta) and Andal (Kothai). Periyazhwar served the Lord by weaving flower garlands. Andal emerged as a child near the sacred Tulasi garden",
    "The Legend of \"Soodi Kodutha Sudarkodi\" — As a young girl, Andal secretly wore the flower garlands woven by her father for Lord Vatapatrasayi to see if she was fit for the Lord, placing them back in the basket. When Periyazhwar discovered a hair strand in the garland one day, he discarded it and made a fresh one. That night, Lord Vatapatrasayi appeared in Periyazhwar's dream and declared He would accept only garlands previously worn and blessed by Andal (Soodi Kodutha Sudarkodi)",
    "The Celestial Wedding with Ranganatha — Andal vowed to marry only Lord Ranganatha. Led by Periyazhwar, she traveled to Srirangam in a grand palanquin, merged bodily into the inner sanctum of Lord Ranganatha, and established her eternal divine union",
    "Emblem of Tamil Nadu — The iconic 192-foot-tall, 11-tiered Rajagopuram of Srivilliputhur served as the visual inspiration for the official Emblem of the Government of Tamil Nadu"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "periyazhwar",
     1
    ],
    [
     "andal",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "andal",
     "work": "Nachiyar Thirumozhi (10.1)",
     "tamil": "கார்மேனிச் செங்கண் மாலிருஞ்சோலை நின்ற* சீர் மல்கு வடபத்ரசாயிக்கு என்றும* சேர் மல்கு கோதை சொன்ன இத்தமிழ மாலை* பார் மல்கு தொண்டர் பாடி ஆடவே!",
     "transliteration": "Kārmēnich seṅgaṇ māliruñjōlai niṉṟa* Sīr malgu vaḍapathrasāyikku eṉṟuma* Sēr malgu kōdhai soṉṉa iththamiḻ mālai* Pār malgu thoṇḍar pāḍi āḍavē!",
     "wordMeanings": [
      [
       "Kārmēnich seṅgaṇ",
       "Dark-complexioned, red-eyed Supreme Lord"
      ],
      [
       "Sīr malgu vaḍapathrasāyikku",
       "Unto the glorious Lord Vatapatrasayi"
      ],
      [
       "Kōdhai soṉṉa iththamiḻ mālai",
       "This Tamil garland composed by Kothai (Andal)"
      ],
      [
       "Pār malgu thoṇḍar pāḍi āḍavē",
       "May the devotees across the world sing and dance in divine bliss!"
      ]
     ],
     "significance": "Andal surrenders her entire life and poetic output to Lord Vatapatrasayi, demonstrating that total unfeigned love (Madhurya Bhakti) leads to direct union with God"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Monumental 11-tiered, 192-foot Rajagopuram (the state emblem of Tamil Nadu)",
    "Moolavar Form: Massive reclining deity (Vatapatrasayi) on the upper floor sanctum facing East",
    "Andal Sanctum Form: Graceful standing icon of Andal alongside Rangamannar and Garuda in the ground floor inner sanctum",
    "Urchavar Form: Rangamannar holding His cane with Andal by His side holding a fresh green parrot"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruppavai & Nachiyar Thirumozhi)",
    "Video Search Query: \"Srivilliputhur Andal Temple History Velukkudi Krishnan\""
   ]
  }
 },
 "thirukkurungudi": {
  "serial": 48,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Thirukkurungudi, Tirunelveli District, Tamil Nadu. Located ~45 km south-west of Tirunelveli at the foot of the Western Ghats (Mahendragiri)",
   "sthalaVriksham": "Tamarind Tree (Tamarindus indica) / Kurungudi Tree",
   "vimanam": "Panchaketa Vimanam",
   "theertham": "Nambiyaaru / Thirupparkadal River / Kaisika Theertham",
   "posture": "Fivefold Postures across the complex (Standing, Sitting, Reclining, Walk-walking, and Mountain-shrine forms facing East)",
   "orientation": "Facing East",
   "gps": "8.4372° N, 77.5647° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "நின்ற நம்பி / நம்பிராயன் Sanskrit: सुन्दरपरमपुरुष / वैष्णववामन Transliteration: Ninnra Nambi / Nambirayan"
    },
    "thaayar": {
     "name": "Kurungudivalli Thayar / Thirumamagal (குறுங்குடிவல்லி தாயார்)",
     "legend": "Seated in an independent, prominent shrine within the inner prakaram facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Nambirayan / Vadivazhagiya Nambi (வடிவழகிய நம்பி)"
    },
    "etymology": "Exquisite Panchaloha icon holding divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during all major festivals and Kaisika Ekadashi"
    }
   },
   "sanctumNote": "Five Pancha-Nambi Shrines in Complex:"
  },
  "puranam": {
   "prathyaksham": "Lord Siva, Nambaduvan the Singer, Brahma-Rakshasa, and Sage Markandeya",
   "timeline": "Core stone structures built during Early Pandya reign (8th Century CE) Heavily patronized by Chola, Chera, Vijayanagara, and Nayak kings of Madurai and Travancore",
   "literature": [
    "Recorded in Periya Thirumozhi (9.5), Thiruvaimozhi (1.10), Kaisika Mahatmyam, and Koyil Olugu"
   ],
   "legend": [
    "Legend of Vamana & Siva's Initiation — After measuring the three worlds, Lord Vamana shrank His form (Kurungu) and settled at this serene spot at the foothills of Mahendragiri. Lord Siva worshipped Lord Nambi here and received initiation into the Vaishnava Mantra; hence Nambi is praised as the ultimate Guru",
    "The Legend of Kaisika Ekadashi & Nambaduvan — A low-caste devout singer named Nambaduvan was traveling to sing praises to Lord Nambi on Kaisika Ekadashi night. A Brahma-Rakshasa (demon) intercepted him to eat him. Nambaduvan promised to return after singing his songs to the Lord. After singing the Kaisika Pān (song), he faithfully returned. Overwhelmed by Nambaduvan's truthfulness and devotion, the Rakshasa repented, fell at his feet, and was redeemed from his demonic curse by listening to the Kaisika Pān",
    "Origin of Srivaishnava Vadakalai-Thenkalai Tradition & Araiyar Sevai: Thirukkurungudi is renowned for preserving the ancient Araiyar Sevai (musical-dance enactment of the Divya Prabandham) and housing the ancient Thirukkurungudi Jeeyar Mutt"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     25
    ],
    [
     "nammazhwar",
     13
    ],
    [
     "periyazhwar",
     1
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (9.5.1)",
     "tamil": "தெளிந்த இலங்கு வெண் சுடர் வேல் திருக் குறுங்குடி மேவிய சங்காரை* அளித்த எந்தை பெருமானை அடியேன் கண்டு கொண்டேனே!",
     "transliteration": "Theḷindha ilaṅgu veṇ suḍar vēl thiruk kuṟuṅguḍi mēviya saṅgārai* Aḷiththa endhai perumāṉai aḍiyēṉ kaṇḍu koṇḍēnē!",
     "wordMeanings": [
      [
       "Theḷindha ilaṅgu veṇ suḍar vēl",
       "Shining with clear, radiant divine light"
      ],
      [
       "Thiruk kuṟuṅguḍi mēviya",
       "Residing in sacred Thirukkurungudi"
      ],
      [
       "Aḷiththa endhai perumāṉai",
       "My Father and Supreme Sovereign who protects all creation"
      ],
      [
       "Aḍiyēṉ kaṇḍu koṇḍēnē",
       "I, His humble servant, have beheld Him with my own eyes!"
      ]
     ],
     "significance": "Thirumangai Azhwar expresses absolute ecstasy upon witnessing Lord Nambirayan at Thirukkurungudi, describing Him as the complete personification of grace (Nambi) who protects all souls"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Majestic 5-tiered Rajagopuram with intricate wooden carvings set against the Mahendragiri mountain backdrop",
    "Moolavar Form: Tall standing deity (Ninnra Nambi) facing East with Sridevi and Bhudevi inside the main sanctum",
    "Thaayar Form: Kurungudivalli Thayar seated gracefully in her separate shrine",
    "Pancha-Nambi Complex: Visual structures housing all five forms of Nambi within the town and hill circuit"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 9.5 & Kaisika Puranam)",
    "Video Search Query: \"Thirukkurungudi Nambirayan Kaisika Ekadashi Velukkudi\""
   ]
  }
 },
 "nanguneri": {
  "serial": 49,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Nanguneri Town, Tirunelveli District, Tamil Nadu. Located ~30 km south of Tirunelveli on the Nagercoil highway",
   "sthalaVriksham": "Senbagam Tree (Michelia champaca)",
   "vimanam": "Nanda Vartha Vimanam",
   "theertham": "Indra Pushkarini / Setru Theertham",
   "posture": "Irundha Thirukkolam (Seated posture under Adisesha facing East)",
   "orientation": "Facing East",
   "gps": "8.4914° N, 77.6583° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வானமாமலைப் பெருமாள் / தோதாத்ரி நாதன் Sanskrit: वनमाली / तोताद्रिनाथ / सिरिवर मङ्गलनाथ Transliteration: Vanamamalai Perumal / Thothadrinathan"
    },
    "thaayar": {
     "name": "வரமங்கை தாயார் / சிரிவரமங்கை (Varamangai Thayar / Srivaramangai)",
     "legend": "Seated directly beside Moolavar inside the main Garbhagriha"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Deivanayagan (தெய்வநாயகன்)"
    },
    "etymology": "Regal four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Dual Thaayars Seated beside Moolavar"
  },
  "puranam": {
   "prathyaksham": "Goddess Bhudevi, Indra, Urvashi, Tilottama, and King Sindhu",
   "timeline": "Core stone architecture built during early Pandya reign (8th Century CE) Expanded during the Chola, Vijayanagara, and Nayak periods, with extensive land grants recorded for the maintenance of the Vanamamalai Mutt",
   "literature": [
    "Explicitly praised in Thiruvaimozhi (5.7) and recorded in Koyil Olugu and Vanamamalai Sthala Purana"
   ],
   "legend": [
    "Legend of Thothadri & Earth Goddess — When demons Madhu and Kaitabha were slain by Lord Vishnu, their remains contaminated the earth. Goddess Bhudevi performed intense penance at Thothadri to purify herself. Lord Vishnu appeared, seated Himself on Adisesha with Goddess Lakshmi (Srivaramangai), and declared that He would reside permanently here to grant boons (Vara-Mangai)",
    "The Sacred Oil Well (Ennai Kinaru) — Moolavar Vanamamalai Perumal receives daily Abhishekam with large quantities of pure gingelly oil and camphor. The oil drains into an ancient open well pit inside the temple precinct (Ennai Kinaru). This consecrated oil is famous for possessing miraculous medicinal and spiritual healing properties, consumed by thousands of pilgrims",
    "Seat of Vanamamalai Mutt — Nanguneri is the hereditary headquarters of the famous Vanamamalai Mutt, one of the premier Srivaishnava monastic institutions established by Svami Manavala Mamunigal in the 15th Century"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (5.7.1)",
     "tamil": "நோற்ற நோன்பிலேன் நுண்ணறிவிலேன்* ஆகிலும் இனி உன்னை விட்டு ஒன்றும்* ஆற்ற்கிலேன் அரவணைத் துயிலானே!* போற்றுச் சேர் வானமாமலை மேவிய* ஆற்றல் மிக்கவனே! என்று என்று உன்னை* போற்றி என் நெஞ்சமே! புணர்ந்து நில்லே.",
     "transliteration": "Nōṟṟa nōṉbilēn nuṇṇaṟivilēn* āgilum ini uṉṉai viṭṭu oṉṟum* Āṟṟkilēn aravaṇaith thuyilānē!* pōṟṟuch sēr vānamāmalai mēviya* Āṟṟal mikkavanē! eṉṟu eṉṟu uṉṉai* Pōṟṟi eṉ neñjamē! puṇarndhu nillē",
     "wordMeanings": [
      [
       "Nōṟṟa nōṉbilēn",
       "I have performed no great austerities or penances"
      ],
      [
       "Nuṇṇaṟivilēn",
       "I possess no subtle intellectual wisdom"
      ],
      [
       "Āgilum ini uṉṉai viṭṭu oṉṟum āṟṟkilēn",
       "Yet I cannot bear to live separated from You for a single moment!"
      ],
      [
       "Aravaṇaith thuyilānē",
       "O Lord reclining on the serpent bed!"
      ],
      [
       "Vānamāmalai mēviya āṟṟal mikkavanē",
       "O Almighty Sovereign residing at Vanamamalai!"
      ],
      [
       "Pōṟṟi eṉ neñjamē puṇarndhu nillē",
       "Praise Him, O my mind, and stay forever united with Him!"
      ]
     ],
     "significance": "Nammalwar expresses pure Akiñchanatvam (acknowledging one's utter lack of personal merit) and total reliance on Lord Vanamamalai's unmerited grace (Kripa), establishing that sincere love alone wins divine redemption"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 7-tiered east-facing Rajagopuram leading into a vast temple complex",
    "Moolavar Form: Regal seated deity (Irundha Thirukkolam) under 7-headed Adisesha, flanked by Srivaramangai Thayar and Bhudevi inside the Garbhagriha",
    "Ennai Kinaru (Oil Pit): The sacred oil well structure inside the temple enclosure from which miraculous medicinal oil is drawn",
    "Urchavar Form: Deivanayagan cast in fine Panchaloha flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 5.7)",
    "Video Search Query: \"Vanamamalai Nanguneri Temple History Oil Well Velukkudi\""
   ]
  }
 },
 "alwar-thirunagari": {
  "serial": 50,
  "profile": {
   "regionNote": "Pandiya Naadu (Nava Tirupathi Circuit — 1st of 9 Shrines)",
   "location": "Alwarthirunagari Town, Thoothukudi District, Tamil Nadu. Located ~31 km east of Tirunelveli on the Thiruchendur highway along the Tamiraparani River",
   "sthalaVriksham": "Gnana Tamarind Tree (Thiruppuli / Ageless Tamarind Tree - Tamarindus indica)",
   "vimanam": "Govinda Vimanam",
   "theertham": "Tamiraparani River / Brahma Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East). Unique feature: Self-manifested Swayambhu feet buried under the ground",
   "orientation": "Facing East",
   "gps": "8.6083° N, 77.9358° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஆதிநாதப் பெருமாள் / பொலிந்துநின்ற பிரான் Sanskrit: आदिनाथ / श्रीकुरुकेश Transliteration: Adinatha Perumal / Polindhunindra Piraan"
    },
    "thaayar": {
     "name": "ஆதிநாதவல்லி / குருகூர்வல்லி (Adinathavalli Thayar / Kurugurvalli)",
     "legend": "Seated in dedicated independent shrines within the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Polindhunindra Piraan (பொலிந்துநின்ற பிரான்)"
    },
    "etymology": "Breathtaking Panchaloha idol carrying divine weapons; accompanied by Nammalwar (whose Utsava icon is central to all rituals)",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Positioned beside Urchavar during festive processions"
    }
   },
   "sanctumNote": "Swayambhu Feet + Nammalwar Shrine"
  },
  "puranam": {
   "prathyaksham": "Nammalwar, Madhurakavi Azhwar, Lord Brahma, and Indra",
   "timeline": "Core stone sanctum built during early Pandya reign (7th-8th Century CE) Expanded by Chola, Vijayanagara, and Madurai Nayak kings who built the majestic 9-tiered Rajagopuram and grand mandapams",
   "literature": [
    "Birthed the entire Thiruvaimozhi, Kanninun Siruthambu, Koyil Olugu, and Guruparamparai Prabhavam"
   ],
   "legend": [
    "Birthplace & 16-Year Meditation of Nammalwar — Alwarthirunagari is the sacred Avatarasthalam of Nammalwar (Shatakopan), the foremost among the 12 Azhwars and the incarnation of Vishvaksena. Born to King Kari and Udayanangai, the infant Nammalwar did not cry, eat, or open his eyes. He was placed in a cradle under the sacred ageless Tamarind Tree (Thiruppuli). Nammalwar sat in deep Yogic trance (Samadhi) inside the hollow of the tree for 16 years without food or speech, radiating divine light",
    "Madhurakavi Azhwar’s Quest & The First Question — Madhurakavi Azhwar, traveling in North India, saw a brilliant cosmic light shining southward. Following the light for hundreds of miles, he arrived at Alwarthirunagari and found Nammalwar under the Tamarind Tree. Madhurakavi threw a stone to test him; Nammalwar opened his eyes. Madhurakavi asked his famous philosophical question:",
    "Query — \"Sethin Vayittril Siriya Dhu Pirandhal, Ethai Thindru Enge Kidakkum?\" (If the small soul is born in the dead body of matter, what will it eat and where will it lie?)",
    "Nammalwar's Answer — \"Athai Thindru Ange Kidakkum!\" (It will eat that [Brahman/God] and lie right there!) Overwhelmed, Madhurakavi became Nammalwar's disciple and recorded all 1,296 verses of Nammalwar's Thiruvaimozhi",
    "The Ageless Tamarind Tree (Thiruppuli) — The tree is believed to be an incarnation of Adisesha. Its leaves never close at night (Urangapuli), and it flowers and fruits continuously without drying out",
    "Nava Tirupathi Center & Annual Vaikasi Garuda Sevai — Alwarthirunagari is the principal shrine of the 9 Nava Tirupathi temples (representing Guru/Jupiter). During the famous annual Vaikasi Visakam Garuda Sevai, the Utsava deities of all 9 Nava Tirupathi temples assemble here on Garuda Vahanams to render homage to Nammalwar, who rides on a Hansa Vahanam"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ],
    [
     "madhurakavi",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (4.10.1)",
     "tamil": "ஒன்றும் தேவும் உலகும் உயிரும் மற்றும் யாதும் இல்லா அன்றால்* நின்ற நான்முகனைப் படைத்து அளித்து உழல் தொழிலான்* அன்று தன் கீழ் உலகெல்லாம் அடக்கிய ஆதிபிரான்* குன்றின் மாடங்கள் சூழ் திருக்குருகூர் அதனுள் நிற்பானே!",
     "transliteration": "Oṉṟum thēvum ulagum uyirum maṟṟum yādhum illā aṉṟāl* Niṉṟa nāṉmuganaip paḍaiththu aḷiththu uḻal thoḻilān* Aṉṟu thaṉ kīḻ ulagellām aḍakkiyaādhibhirān* Kuṉṟin māḍaṅgaḷ sūḻ thirukkurugūr adhaṉuḷ niṟpānē!",
     "wordMeanings": [
      [
       "Oṉṟum thēvum ulagum... illā aṉṟāl",
       "When neither gods, nor worlds, nor living souls, nor anything existed"
      ],
      [
       "Nāṉmuganaip paḍaiththu",
       "Who created Brahma to begin cosmic creation"
      ],
      [
       "Ulagaellām aḍakkiyaādhibhirān",
       "The Primeval Sovereign Lord who contains all universes within Himself"
      ],
      [
       "Thirukkurugūr adhaṉuḷ niṟpānē",
       "Stands in supreme majesty inside sacred Thirukkurugoor!"
      ]
     ],
     "significance": "Nammalwar establishes Lord Adinatha as the transcendent, primeval Creator (Adhibhiran) who existed before space and time, yet chose to stand graciously in Thirukkurugoor to save humanity"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Monumental 9-tiered east-facing Rajagopuram leading to the Tamiraparani riverbank",
    "Moolavar Form: Majestic standing deity (Nindra Thirukkolam) facing East with Swayambhu feet resting beneath the earth",
    "Thiruppuli (Tamarind Tree): The sacred, hollow ageless Tamarind Tree inside the temple prakaram where Nammalwar meditated for 16 years",
    "Nammalwar & Adinatha Form: Breathtaking icon of Nammalwar seated in Yogic pose alongside Lord Polindhunindra Piraan"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi & Kanninun Siruthambu)",
    "Video Search Query: \"Alwarthirunagari Nammalwar Temple History Velukkudi Krishnan\""
   ]
  }
 },
 "tholaivillimangalam": {
  "serial": 51,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Tholaivillimangalam Village, Thoothukudi District, Tamil Nadu. Located ~38 km east of Tirunelveli and ~3 km from Alwarthirunagari along the Tamiraparani River",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata) / Vilvam",
   "vimanam": "Kumuda Vimanam",
   "theertham": "Varuna Theertham / Tamiraparani River",
   "posture": "Twin Shrine 1 (Devapiran / Devarabiran): Nindra Thirukkolam (Standing posture facing East) | Twin Shrine 2 (Aravindalochanan): Irundha Thirukkolam (Seated posture facing East)",
   "orientation": "Facing East",
   "gps": "8.6258° N, 77.9542° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "translit": "தேவபிரான் / देवराट् / Devapiran (Lord of the Celestials) | அரவிந்தலோசனன் / செந்தாமரைக்கண்ணன் / अरविन्दलोचन / Aravindalochanan (Lotus-Eyed Lord)"
    },
    "thaayar": [
     {
      "name": "அலமேலுமங்கை தாயார் (Alamelumangai Thayar / Padmavathi)"
     },
     {
      "name": "கருத்தடங்கண்ணி தாயார் (Karuthadanganni Thayar / Alamelumangai)"
     }
    ]
   },
   "urchavar": {
    "names": {
     "translit": "Devapiran with Sridevi & Bhudevi | Aravindalochanan with dual Thaayars"
    }
   },
   "sanctumNote": "Shrine 1: Devapiran stands facing East, flanked by Sridevi and Bhudevi inside the main sanctum"
  },
  "puranam": {
   "prathyaksham": "Sage Suprabha, Varuna Deva, and Indra",
   "timeline": "Core stone sanctums built during Early Pandya reign (8th-9th Century CE) Renovated by Chola, Vijayanagara, and Madurai Nayak kings who established festival grants for the annual Vaikasi Visakam Garuda Sevai",
   "literature": [
    "Explicitly recorded in Nammalwar's Thiruvaimozhi (6.5) and Nava Tirupathi Mahatmyam"
   ],
   "legend": [
    "Legend of the Bow and Balance (Tholai-Villi) — Sage Suprabha performed deep penance here to prepare a sacrificial ground. While clearing the land, he found a magical bow (Villi) and a wooden scale balance (Tholai). When he touched them, they transformed into a handsome man and woman who had been cursed by Sage Durvasa for their arrogance. Lord Vishnu appeared, restored their celestial forms, and accepted the site as Tholaivillimangalam (\"The Sacred Site of the Bow and Balance\")",
    "Worship with Red Lotuses (Aravinda) — Sage Suprabha picked red lotuses (Senthamarai) daily from the local pond and offered them to the Lord. Pleased by his floral devotion, Lord Vishnu assumed the name Aravindalochanan (\"The Lotus-Eyed Sovereign\")",
    "Nava Tirupathi Astrological Alignment — Twin Tirupathi represents Kethu (Devapiran) and Rahu (Aravindalochanan) in the planetary alignment of the Nava Tirupathi circuit"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (6.5.1)",
     "tamil": "துலைவில்லி மங்கலம் தொழும் இவளை* தொலையுறு சுடரொளி தோற்றுவித்தாய்!* அலைகடல் கடைந்தவனே! என்னம்மா!* சிலைவளைத்து இலங்கை செற்றவனே! என்று* அலை கழல் தொழும் இவள் அன்னைமீர்!* நிலைமை என் நினைவு எண்ணிப் பார்க்கிலே.",
     "transliteration": "Thulaivilli maṅgalam thoḻum ivaḷai* Tholaiyuṟu suḍaroḷi thōṟṟuviththāy!* Alaikadal kaḍaiyndhavanē! eṉnammā!* Silaivaḷaiththu ilaṅgai seṟṟavanē! eṉṟu* Alai kaḻal thoḻum ivaḷ annaimīr!* Nilaimai eṉ niṉaivu eṇṇip pārkkilē",
     "wordMeanings": [
      [
       "Thulaivilli maṅgalam thoḻum ivaḷai",
       "This young maiden who bows to Tholaivillimangalam"
      ],
      [
       "Tholaiyuṟu suḍaroḷi thōṟṟuviththāy",
       "You who manifested the matchless cosmic light!"
      ],
      [
       "Alaikadal kaḍaiyndhavanē",
       "O Lord who churned the wavy Milk Ocean!"
      ],
      [
       "Silaivaḷaiththu ilaṅgai seṟṟavanē",
       "O Rama who bent His bow to shatter Lanka!"
      ],
      [
       "Nilaimai eṉ niṉaivu eṇṇip pārkkilē",
       "O mothers! Consider her deep longing state for the Lord's lotus feet!"
      ]
     ],
     "significance": "Nammalwar assumes the Nayaki Bhava (Parankusha Nayaki), describing a mother observing her daughter's intense spiritual longing for Lord Aravindalochanan of Tholaivillimangalam"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Twin Sanctum Structure: Two distinct temple complexes situated ~500 meters apart amidst dense riverine groves",
    "Moolavar Form (Devapiran): Standing deity (Nindra Thirukkolam) facing East in Shrine 1",
    "Moolavar Form (Aravindalochanan): Seated deity (Irundha Thirukkolam) facing East in Shrine 2 with Karuthadanganni Thayar",
    "Urchavar Form: Devapiran and Aravindalochanan cast in fine Panchaloha with Sridevi and Bhudevi"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 6.5)",
    "Video Search Query: \"Irattai Tirupathi Tholaivillimangalam History Velukkudi\""
   ]
  }
 },
 "thirukkolur": {
  "serial": 52,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Thirukolur Village, Thoothukudi District, Tamil Nadu. Located ~3 km west of Alwarthirunagari along the Tamiraparani River",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata) / Illuppai",
   "vimanam": "Srihara Vimanam",
   "theertham": "Kubera Pushkarini / Tamiraparani River",
   "posture": "Kidantha Thirukkolam (Reclining posture facing East, resting His head on a measuring container called Marakkal)",
   "orientation": "Facing East",
   "gps": "8.6042° N, 77.9158° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வைத்தமாநிதிப் பெருமாள் / திருக்கோளூரான் Sanskrit: निधिनिक्षेप्त / वैगुण्ठनाथ Transliteration: Vaithamanidhi Perumal / Nidhi Niksheptha"
    },
    "thaayar": {
     "name": "குமுதவல்லி தாயார் (Kumudavalli Thayar) & கோளூர்வல்லி தாயார் (Kolurvalli Thayar)",
     "legend": "Seated in dedicated shrines within the inner prakaram facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Nithyanidhi (நித்தியநிதி)"
    },
    "etymology": "Regal reclining/standing Panchaloha idol carrying Shankha and Chakra",
    "thaayar": {
     "name": "Kumudavalli & Kolurvalli",
     "legend": "Positioned beside Urchavar during festive processions"
    }
   },
   "sanctumNote": "Reclining with Marakkal (Measuring Vessel)"
  },
  "puranam": {
   "prathyaksham": "Kubera, Madhurakavi Azhwar, and Devas",
   "timeline": "Structural origins date back to Early Pandya reign (8th Century CE) Expanded by Chola and Vijayanagara emperors with endowments recorded for daily lighting and maintenance of the Kubera Pushkarini",
   "literature": [
    "Recorded in Thiruvaimozhi (8.6), Kanninun Siruthambu, Thirukolur Penpillai Rahasyam, and Koyil Olugu"
   ],
   "legend": [
    "Legend of Kubera’s Lost Treasure & Salvation — Kubera (the God of Wealth) was cursed by Goddess Parvati for looking at her with an improper gaze, losing his wealth, eye, and physical form. Kubera performed intense penance at Thirukolur. Lord Vishnu appeared, restored Kubera's wealth, and reclined here directly over the deposited treasures (Vaithamanidhi) to protect them. Kubera regained his prosperity by worshipping the Lord's feet",
    "Birthplace of Madhurakavi Azhwar — Thirukolur is the sacred Avatarasthalam of Madhurakavi Azhwar, the ardent disciple who composed Kanninun Siruthambu in praise of Nammalwar",
    "The \"Thirukolur Penpillai Rahasyam\" — A famous Srivaishnava tradition where a humble village woman leaving Thirukolur listed 81 historic scriptural events of self-surrender to Swami Ramanuja, demonstrating the deep Vedantic culture of common citizens",
    "Nava Tirupathi Astrological Alignment — Thirukolur represents Angaraka (Mars) in the Nava Tirupathi planetary circuit"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     12
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (8.6.1)",
     "tamil": "உணர்ந்து உணர்ந்து உரைத்து உரைத்து அரியை அரனைப் பிரமனை* இரந்தும் இரவாதும் வாழும் மனிதர்காள்!* திருக் கோளூர் வைத்தமாநிதி என்று ஓதும்* பெருமானை அன்றிப் பிறிது ஒன்று இலையே!",
     "transliteration": "Uṇarndhu uṇarndhu uraiththu uraiththu ariyai aranaip piramanai* Irandhum iravādhum vāḻum manidhargāḷ!* Thiruk kōḷūr vaiththamānidhi eṉṟu ōdhum* Perumāṉai aṉṟip piṟidhu oṉṟu ilaiyē!",
     "wordMeanings": [
      [
       "Uṇarndhu uṇarndhu uraiththu",
       "Reflecting and speaking again and again"
      ],
      [
       "Irandhum iravādhum vāḻum manidhargāḷ",
       "O humans living by begging or working!"
      ],
      [
       "Thiruk kōḷūr vaiththamānidhi eṉṟu ōdhum",
       "Praising the Lord hailed as Vaithamanidhi of Thirukolur"
      ],
      [
       "Perumāṉai aṉṟip piṟidhu oṉṟu ilaiyē",
       "Know that there is no supreme wealth other than Him!"
      ]
     ],
     "significance": "Nammalwar proclaims Lord Vaithamanidhi of Thirukolur as the true, imperishable wealth of all souls, urging humanity to stop chasing transient earthly riches and surrender to Him"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Traditional 3-tiered east-facing Rajagopuram leading into a serene courtyard",
    "Moolavar Form: Reclining deity (Kidantha Thirukkolam) facing East, resting His head on a Marakkal (measuring vessel)",
    "Thaayar Form: Kumudavalli Thayar and Kolurvalli Thayar seated in their separate shrines",
    "Urchavar Form: Nithyanidhi in fine Panchaloha form flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 8.6 & Thirukolur Penpillai Rahasyam)",
    "Video Search Query: \"Thirukolur Vaithamanidhi Perumal History Velukkudi\""
   ]
  }
 },
 "thirupperai": {
  "serial": 53,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Thenthirupurai Town, Thoothukudi District, Tamil Nadu. Located ~35 km east of Tirunelveli and ~5 km from Alwarthirunagari",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata) / Punnai",
   "vimanam": "Bhadra Vimanam",
   "theertham": "Sukra Pushkarini / Tamiraparani River",
   "posture": "Irundha Thirukkolam (Seated posture facing East)",
   "orientation": "Facing East",
   "gps": "8.6119° N, 77.9628° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "மகரநெடுங்குழைக்காதன் / திருப்புரையான் Sanskrit: मकरनेत्रकुण्डलधर / श्रीपति Transliteration: Makara Nedun-Kuzhai-Khadhan / Nikaril Mugin Vannan"
    },
    "thaayar": {
     "name": "குழைக்காதுவல்லி தாயார் (Kuzhaikkaaduvalli) & திருப்புரைதேவி தாயார் (Thirupuraidevi)",
     "legend": "Seated in dedicated independent shrines within the inner corridor facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Nikaril Mugin Vannan (நிகரில் முஹில் வண்ணன்)"
    },
    "etymology": "\"The Lord of Matchless Cloud Complexion.\" Seated Panchaloha icon holding divine emblems",
    "thaayar": {
     "name": "Kuzhaikkaaduvalli & Thirupuraidevi",
     "legend": "Accompanies Urchavar during festive processions and the Vaikasi Visakam Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Goddess Bhudevi, Varuna Deva, Sage Durvasa, and Brahma",
   "timeline": "Core stone sanctum built during Early Pandya reign (8th-9th Century CE) Embellished by Chola, Vijayanagara, and Madurai Nayak kings who constructed the grand 3-tiered Rajagopuram and broad outer prakarams",
   "literature": [
    "Explicitly praised in Nammalwar's Thiruvaimozhi (7.2) and Nava Tirupathi Mahatmyam"
   ],
   "legend": [
    "Legend of the Fish Earrings (Makara Kundalam) — Goddess Bhudevi performed penance here to get cleansed of a curse. While bathing in the Tamiraparani River, she found two radiant gold earrings shaped like fish (Makara Kundalam) and presented them to Lord Vishnu. The Lord put them on His ears; hence He is hailed as Makara Nedun-Kuzhai-Khadhan",
    "Salvation of Sage Durvasa & Varuna — Sage Durvasa performed worship here to regain his spiritual radiance. Varuna (the Rain God) performed penance here to bring torrential rains to end a severe drought; hence the site was named Thenthirupurai (\"The Holy Abode of Abundant Waters\")",
    "Nava Tirupathi Astrological Alignment — Thenthirupurai represents Sukra (Venus) in the Nava Tirupathi planetary circuit"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (7.2.1)",
     "tamil": "ஶ்ரீ திருப்புரையான் தென் திருப்புரையூர் மேவிய* மகர நெடுங்குழைக்காதன் அடியேன் மனத்து அமுதே!* நிகரில் முகில் வண்ணனே! என்று என்று உன்னை* புகரன்றிப் போற்றிப் புணர்ந்து நின்றேனே.",
     "transliteration": "Srī thirupuraiyāṉ theṉ thirupuraiyūr mēviya* Magara neḍuṅkuḻaikkādhaṉ aḍiyēṉ manaththu amudhē!* Nikaril mugil vaṇṇaṉē! eṉṟu eṉṟu uṉṉai* Pugarandrip pōṟṟip puṇarndhu niṉṟēṉē",
     "wordMeanings": [
      [
       "Theṉ thirupuraiyūr mēviya",
       "Residing in sacred Thenthirupurai"
      ],
      [
       "Magara neḍuṅkuḻaikkādhaṉ",
       "Lord wearing long fish-shaped earrings"
      ],
      [
       "Aḍiyēṉ manaththu amudhē",
       "O immortal nectar dwelling in my heart!"
      ],
      [
       "Nikaril mugil vaṇṇaṉē",
       "O Lord of matchless rain-cloud complexion!"
      ],
      [
       "Pōṟṟip puṇarndhu niṉṟēṉē",
       "I praise You and remain eternally united with You!"
      ]
     ],
     "significance": "Nammalwar celebrates the unmatched visual beauty (Azhagu) of Lord Makara Nedun-Kuzhai-Khadhan, describing His divine ear-ornaments and rain-cloud skin as nectar for the meditating soul"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram set amidst lush agricultural fields",
    "Moolavar Form: Regal seated posture (Irundha Thirukkolam) facing East wearing prominent fish-shaped earrings (Makara Kundalam)",
    "Thaayar Form: Kuzhaikkaaduvalli and Thirupuraidevi seated in their separate shrines",
    "Urchavar Form: Nikaril Mugin Vannan cast in fine Panchaloha with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 7.2)",
    "Video Search Query: \"Thenthirupurai Makara Nedunguzhaikadhan Temple Velukkudi\""
   ]
  }
 },
 "thiruvaragunamangai": {
  "serial": 55,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Natham Village (Thiruvaragunamangai), Thoothukudi District, Tamil Nadu. Located ~1 km from Thirupulingudi and ~4 km from Alwarthirunagari",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata)",
   "vimanam": "Vijayasara Vimanam",
   "theertham": "Agastya Pushkarini / Varuna Theertham",
   "posture": "Irundha Thirukkolam (Seated posture facing East on Adisesha's throne)",
   "orientation": "Facing East",
   "gps": "8.6214° N, 77.9431° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "விஜயாசனப் பெருமாள் / வரகுணமங்கை நாதன் Sanskrit: विजयासन / विजयपति Transliteration: Vijayasana Perumal / Varagunamangai Nathan"
    },
    "thaayar": {
     "name": "வரகுணவல்லி தாயார் / வரகுணமங்கை (Varagunavalli Thayar / Varagunamangai)",
     "legend": "Seated in her dedicated independent shrine facing East inside the inner corridor"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Vijayasanan (விஜயாசனன்)"
    },
    "etymology": "Majestic four-armed Panchaloha idol seated in royal posture holding divine weapons",
    "thaayar": {
     "name": "Varagunavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions and the 9 Garuda Sevai"
    }
   },
   "sanctumNote": "Two Visible Thaayars inside Garbhagriha"
  },
  "puranam": {
   "prathyaksham": "Sage Vedavit, Agastya Maharishi, and King Varaguna Pandya",
   "timeline": "Structural origins date back to Early Pandya reign (8th Century CE) Heavily endowed by Varaguna Pandya I and later expanded by Vijayanagara governors",
   "literature": [
    "Explicitly recorded in Nammalwar's Thiruvaimozhi (9.2) and Nava Tirupathi Mahatmyam"
   ],
   "legend": [
    "Legend of Sage Vedavit’s Victory (Vijayam) — A devout Brahmin named Vedavit performed intense penance at this site for the welfare of his ancestors. When demons tried to disrupt his austerity, Lord Vishnu appeared, vanquished the demons, sat victoriously on Adisesha's throne (Vijayasana), and granted salvation (Moksha) to Vedavit and his entire lineage",
    "Salvation of Agastya’s Disciple (Asuravithran) — A fisherman who performed sincere service to Sage Agastya was freed from his lower birth here upon receiving the divine sight of Lord Vijayasana Perumal",
    "Etymology of Varagunamangai — Named after King Varaguna Pandya who performed extensive renovations and endowments at this shrine",
    "Nava Tirupathi Astrological Alignment — Thiruvaragunamangai represents Chandra (Moon) in the Nava Tirupathi planetary circuit"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (9.2.4)",
     "tamil": "புளிங்குடி கிடந்து வரகுண மங்கை இருந்து* வைகுந்தத்துள் நின்று தெள்ளிய சிந்தை* அறப்பாரசித்து என்மனத்துள்ளே வரத் தேடி* அள்ளல் நோய் அறுக்கும் என் ஆதிப்பிரானே!",
     "transliteration": "Puḷiṅguḍi kiḍandhu varaguṇa maṅgai irundhu* Vaikundhaththuḷ niṉṟu theḷḷiya sindhai* Aṟappārasiththu eṉmanaththuḷḷē varath thēḍi* Aḷḷal nōi aṟukkum eṉ ādhippirānē!",
     "wordMeanings": [
      [
       "Puḷiṅguḍi kiḍandhu",
       "Reclining at Thirupulingudi"
      ],
      [
       "Varaguṇa maṅgai irundhu",
       "Seated victoriously at Thiruvaragunamangai"
      ],
      [
       "Vaikundhaththuḷ niṉṟu",
       "Standing in supreme glory at Thiruvaikuntham"
      ],
      [
       "Eṉmanaththuḷḷē varath thēḍi",
       "Searching to enter into the pure clarity of my mind"
      ],
      [
       "Aḷḷal nōi aṟukkum eṉ ādhippirānē",
       "My Primeval Lord who completely severs the affliction of karmic suffering!"
      ]
     ],
     "significance": "Nammalwar synthesizes three adjacent Nava Tirupathi shrines (Thirupulingudi, Thiruvaragunamangai, and Thiruvaikuntham) into a single verse, describing how the Lord moves between standing, sitting, and reclining postures to enter the heart of His devotee"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram leading into a serene traditional village enclosure",
    "Moolavar Form: Regal seated posture (Irundha Thirukkolam) facing East on Adisesha's throne with Sridevi and Bhudevi",
    "Thaayar Form: Varagunavalli Thayar seated in her separate shrine",
    "Urchavar Form: Vijayasanan cast in fine Panchaloha in seated royal posture"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 9.2)",
    "Video Search Query: \"Thiruvaragunamangai Vijayasana Perumal History Velukkudi\""
   ]
  }
 },
 "srivaikuntam": {
  "serial": 56,
  "profile": {
   "regionNote": "Pandiya Naadu",
   "location": "Srivaikuntam Town, Thoothukudi District, Tamil Nadu. Located ~30 km east of Tirunelveli on the Thiruchendur highway along the Tamiraparani River",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata) / Punnai",
   "vimanam": "Chandra Vimanam",
   "theertham": "Bhrigu Pushkarini / Tamiraparani River",
   "posture": "Nindra Thirukkolam (Standing posture facing East under the 9-headed Adisesha hood)",
   "orientation": "Facing East",
   "gps": "8.6256° N, 77.9097° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வைகுந்தநாதப் பெருமாள் / கள்ளப்பிரான் Sanskrit: वैकुण्ठनाथ / चोरपालक Transliteration: Vaikunthanatha Perumal / Kallapiran"
    },
    "thaayar": {
     "name": "வைகுந்தவல்லி தாயார் (Vaikunthavalli) & பூதேவி தாயார் (Bhudevi)",
     "legend": "Seated in dedicated independent shrines within the inner corridor facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Kallapiran (கள்ளப்பிரான்)"
    },
    "etymology": "Exquisite standing Panchaloha idol carrying the mace (Gada), Shankha, and Chakra",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Positioned beside Urchavar during festive processions and the Vaikasi Visakam Garuda Sevai"
    }
   },
   "sanctumNote": "Adisesha Hood over Standing Moolavar"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Indra, Bhrigu Maharishi, and King Vithihothra",
   "timeline": "Core stone sanctum built during Early Pandya reign (8th Century CE) Heavily endowed by Chola, Vijayanagara, and Madurai Nayak kings. Viswanatha Nayak constructed the monumental 9-tiered Rajagopuram and the famous Eka-Sila Mandapam (monolithic sculpted pillars)",
   "literature": [
    "Explicitly praised in Nammalwar's Thiruvaimozhi (6.5 & 9.2) and Nava Tirupathi Mahatmyam"
   ],
   "legend": [
    "Legend of Brahma’s Vedas & Somakasura — The demon Somakasura stole the four Vedas from Lord Brahma while he was meditating. Brahma performed intense penance at this site. Lord Vishnu defeated Somakasura, restored the Vedas to Brahma, and took the name Vaikunthanathan, making this earth site equal to Sri Vaikuntha itself",
    "The Miracle of Kallapiran (The Divine Thief) — A robber named Kaladhavan used to steal from rich people to feed poor pilgrims and donate to the temple. Before every robbery, he prayed to Lord Vaikunthanatha for success and offered a share of his loot to the sanctum. When King Vithihothra caught Kaladhavan's accomplices, the king set out to arrest Kaladhavan. Lord Vaikunthanatha assumed the physical form of Kaladhavan, surrendered to the king, and instructed him on royal justice and righteousness. Recognizing the Lord, the king bowed down, and the Lord acquired the affectionate name Kallapiran",
    "Nava Tirupathi Astrological Alignment — Srivaikuntam represents Surya (Sun) in the Nava Tirupathi planetary circuit"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     2
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (9.2.4)",
     "tamil": "புளிங்குடி கிடந்து வரகுண மங்கை இருந்து* வைகுந்தத்துள் நின்று தெள்ளிய சிந்தை* அறப்பாரசித்து என்மனத்துள்ளே வரத் தேடி* அள்ளல் நோய் அறுக்கும் என் ஆதிப்பிரானே!",
     "transliteration": "Puḷiṅguḍi kiḍandhu varaguṇa maṅgai irundhu* Vaikundhaththuḷ niṉṟu theḷḷiya sindhai* Aṟappārasiththu eṉmanaththuḷḷē varath thēḍi* Aḷḷal nōi aṟukkum eṉ ādhippirānē!",
     "wordMeanings": [
      [
       "Puḷiṅguḍi kiḍandhu",
       "Reclining at Thirupulingudi"
      ],
      [
       "Varaguṇa maṅgai irundhu",
       "Seated victoriously at Thiruvaragunamangai"
      ],
      [
       "Vaikundhaththuḷ niṉṟu",
       "Standing in supreme glory at Thiruvaikuntham (Srivaikuntam)"
      ],
      [
       "Eṉmanaththuḷḷē varath thēḍi",
       "Searching to enter into the pure clarity of my mind"
      ],
      [
       "Aḷḷal nōi aṟukkum eṉ ādhippirānē",
       "My Primeval Lord who completely severs the affliction of karmic suffering!"
      ]
     ],
     "significance": "Nammalwar describes how Lord Vaikunthanatha stands under the serpent canopy at Srivaikuntam, actively seeking entry into the human heart to eradicate the roots of birth and death"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Monumental 9-tiered east-facing Rajagopuram leading to the Tamiraparani riverbank",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing East under a 9-headed Adisesha hood with Sridevi and Bhudevi",
    "Thaayar Form: Vaikunthavalli Thayar seated in her separate shrine",
    "Urchavar Form: Kallapiran cast in fine Panchaloha holding a mace, Shankha, and Chakra"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 9.2)",
    "Video Search Query: \"Srivaikuntam Kallapiran Temple History Velukkudi\""
   ]
  }
 },
 "thiruvananthapuram": {
  "serial": 59,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "East Fort, Thiruvananthapuram City, Kerala. Located in the heart of the state capital",
   "sthalaVriksham": "Kattu Maamaram (Wild Mango Tree) / Vilvam",
   "vimanam": "Hemakuta Vimanam",
   "theertham": "Padma Theertham / Varaha Theertham / Mithranandapuram Tank",
   "posture": "Kidantha Thirukkolam (Reclining posture on the 5-headed Adisesha facing East). Unique feature: The 18-foot Moolavar icon is viewed through three distinct doors (Dwarams)",
   "orientation": "Facing East",
   "gps": "8.4828° N, 76.9436° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "அனந்தபத்மநாபஸ்வாமி / அனந்தசயனத்தையன் Malayalam: അനന്തപദ്മനാഭസ്വാമി Sanskrit: अनन्तपद्मनाभ / अनन्तशायी Transliteration: Anantha Padmanabhaswamy / Ananthasayanathaiyan"
    },
    "thaayar": {
     "name": "Sri Hari Lakshmi Thayar / Harilakshmi (ஹரிலக்ஷ்மி தாயார்) & Bhudevi",
     "legend": "Positioned directly inside the main sanctum flanking the reclining Lord"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Padmanabhan (பத்மநாபன்)"
    },
    "etymology": "Pure gold / Panchaloha standing icon holding Shankha and Chakra",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Positioned beside Urchavar during festive processions and the bi-annual Aarattu festival"
    }
   },
   "sanctumNote": "Three-Door Reclining Setup (Katusarkara Yogam)"
  },
  "puranam": {
   "prathyaksham": "Vilwamangalam Swami / Divakara Muni, Lord Siva, Lord Brahma, and Indra",
   "timeline": "Mentioned in 9th Century Sangam literature and early Chera records Inscriptions record major renovations after a fire in 1686 CE and the re-consecration (Kumbhabhishekam) under Marthanda Varma in 1729–1733 CE",
   "literature": [
    "Recorded in Silappatikaram, Srimad Bhagavata Purana (10th Canto - Balarama's pilgrimage), Periya Thirumozhi, Thiruvaimozhi, and Mathilakam Records"
   ],
   "legend": [
    "Legend of Vilwamangalam Swami / Divakara Muni — Sage Divakara Muni (or Vilwamangalam Swami) meditated upon Lord Vishnu. A radiant child appeared and played with him on the condition that the sage must never scold him. When the child placed a sacred Salagrama in his mouth, the sage lost patience and scolded him. The child ran away saying, \"If you wish to see me again, find me in Ananthankadu!\" Realizing the child was Lord Vishnu, the sage searched frantically and found Him reclining inside a giant Mahua tree that fell to form the 18-foot image of Anantha Padmanabha",
    "Padmanabhadasa Tradition (1750 CE) — King Anizham Thirunal Marthanda Varma, the founder of the Kingdom of Travancore, surrendered his entire kingdom, crown, and royal lineage to Lord Anantha Padmanabhaswamy in a historic ceremony called Thripadidanam on January 3. Thenceforth, all Travancore monarchs ruled strictly as royal servants under the title Padmanabhadasa",
    "Architectural & Epigraphical Legacy — Combines Dravidian stone architecture with native Kerala Kerala-style wooden craft. The 100-foot 7-tiered Rajagopuram was constructed in 1566 CE and expanded by Marthanda Varma. Houses the famous Ottakkal Mandapam (a massive single-stone platform 2.5 feet thick)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (10.2.1)",
     "tamil": "கெடுமிடர் ராயவெல்லாம் கேசவனா என்ன* கொடுவினை செய்யும் கூற்றின் தமர்களும் உட்கும் உன்னும்* சுடர்மணி ஆழி சங்கு இருபால் பொலிந்து இலைக்கும்* இடர்வகையான தீர்க்கும் அனந்தபுரத்து அம்மானே!",
     "transliteration": "Keḍumiḍar rāyavellām kēsavaṉā eṉṉa* Koḍuvinai seyyum kūṟṟiṉ thamargaḷum uṭkum uṉṉum* Suḍarmaṇi āḻi saṅgu irubāl poliṅdhu ilaikkum* Iḍarvagaiyāṉa thīrkkum ananthapuraththu ammānē!",
     "wordMeanings": [
      [
       "Keḍumiḍar rāyavellām kēsavaṉā eṉṉa",
       "All catastrophic sorrows perish the moment one chants \"Kesava!\""
      ],
      [
       "Koḍuvinai seyyum kūṟṟiṉ thamargaḷum uṭkum",
       "Even the cruel emissaries of Yama (Death) tremble in fear"
      ],
      [
       "Suḍarmaṇi āḻi saṅgu irubāl poliṅdhu",
       "Radiating with the glowing Sudarshana Chakra and Panchajanya Shankha on both sides"
      ],
      [
       "Iḍarvagaiyāṉa thīrkkum ananthapuraththu ammānē",
       "The Supreme Master of Ananthapuram who eradicates every species of suffering!"
      ]
     ],
     "significance": "Nammalwar proclaims that uttering the name of Lord Anantha Padmanabha at Thiruvananthapuram strikes terror into the hearts of Yama's messengers and completely wipes away all human afflictions"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Grand 7-tiered Dravidian-style Rajagopuram reflecting over the pristine waters of the Padma Theertham tank",
    "Moolavar Form: 18-foot reclining deity (Anantha Sayanam) on 5-headed Adisesha, viewed sequentially through three sanctum doors",
    "Ottakkal Mandapam: Massive single-stone granite hall standing directly in front of the Garbhagriha",
    "Urchavar Form: Padmanabhan cast in pure gold flanked by Sridevi and Bhudevi"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 10.2)",
    "Video Search Query: \"Thiruvananthapuram Padmanabhaswamy Temple History Velukkudi Krishnan\""
   ]
  }
 },
 "thiruvattaru": {
  "serial": 60,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thiruvattar Town, Kanyakumari District, Tamil Nadu (Historically part of Travancore/Malayala Naadu). Located ~6 km from Marthandam and ~46 km from Thiruvananthapuram",
   "sthalaVriksham": "Senbagam Tree (Michelia champaca)",
   "vimanam": "Ashtanga Vimanam",
   "theertham": "Kothai River / Pahrali River / Rama Theertham (The temple is encircled on three sides by rivers: Vattaru = Winding River)",
   "posture": "Kidantha Thirukkolam (Reclining posture on Adisesha facing West). Viewed through three distinct doors",
   "orientation": "Facing West",
   "gps": "8.3258° N, 77.2667° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஆதிகேசவப் பெருமாள் / திருவாட்டாற்றான் Malayalam: ആദികേശവ പെരുമാൾ Sanskrit: आदिकेशव / सरित्पति Transliteration: Adikesava Perumal / Thiruvattaatran"
    },
    "thaayar": {
     "name": "Maragathavalli Thayar (மரகதவல்லி தாயார்) & Bhudevi",
     "legend": "Seated in dedicated positions flanking the 22-foot reclining Moolavar inside the main sanctum"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Adikesavan (ஆதிகேசவன்)"
    },
    "etymology": "Breathtaking Panchaloha idol holding divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and the Aarattu festival"
    }
   },
   "sanctumNote": "Three-Door 22-Foot Reclining Setup"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Parasurama, Keshini, and Nammalwar",
   "timeline": "Core stone and wood architecture dates back to the Early Chera period (8th Century CE) Inscriptions record major structural additions by Venad Kings (Unni Kerala Varma) and Travancore King Marthanda Varma in 1604 CE and 1750 CE",
   "literature": [
    "Recorded in Thiruvaimozhi (10.6), Koyil Olugu, and Travancore State Manual"
   ],
   "legend": [
    "Legend of Demon Keshin & Adisesha’s Coils — The fierce demon Keshin performed penance and acquired invincibility, tormenting the devas. Lord Vishnu fought Keshin, pinned him down, and reclined directly upon his body. When Keshin tried to wriggle out, Lord Vishnu requested Adisesha to coil tightly around the demon. The Lord reclined over Adisesha, permanently suppressing Keshin. The demon's wife Keshini prayed to the rivers Kothai and Pahrali to submerge the sanctum, but River Goddess Ganga raised the land, causing the rivers to simply encircle the temple (Vattaru)",
    "Model for Thiruvananthapuram — Thiruvattaaru is revered as the ancient elder shrine (Mootha Sthalam) that served as the architectural and ritual prototype for the Thiruvananthapuram Padmanabhaswamy temple",
    "Nammalwar’s Moksha Connection — Nammalwar composed 11 Pasurams for Lord Adikesava here (Thiruvaimozhi 10.6), immediately following which his soul attained Paramapadam (Vaikuntha Moksha)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (10.6.1)",
     "tamil": "ஒருநாள் காண வாராயே என்று உன்றன் ஊழி தொறும் நின்றார்* திருவாட்டாற்றான் திரு அருளால் தீவினைநோய் தீர்ந்தேனே!* பெருமான் உன்னை அடியேனுள் வைத்தேன் உன்னை எவ்வகையாலும்* திருவாட்டாற்றான் திருவடிக்கே என் மனத்தை வைத்து உய்யும்படியே.",
     "transliteration": "Oruṉāḷ kāṇa vārāyē eṉṟu uṉṟaṉ ūḻi thoṟum niṉṟār* Thiruvāṭṭāṟṟāṉ thiru aruḷāl thīvinaiṉōi thīrndhēnē!* Perumāṉ uṉṉai aḍiyēṉuḷ vaiththēṉ uṉṉai evvagaiyālum* Thiruvāṭṭāṟṟāṉ thiruvaḍikkē eṉ manaththai vaiththu uyymbhaḍiyē",
     "wordMeanings": [
      [
       "Oruṉāḷ kāṇa vārāyē eṉṟu",
       "Pleading \"Will You not come to grant me darshan for even a single day?\""
      ],
      [
       "Thiruvāṭṭāṟṟāṉ thiru aruḷāl",
       "By the divine grace of the Lord of Thiruvattaaru"
      ],
      [
       "Thīvinaiṉōi thīrndhēnē",
       "My dreadful disease of past karmas is completely cured!"
      ],
      [
       "Thiruvaḍikkē eṉ manaththai vaiththu uyymbhaḍiyē",
       "Placing my mind firmly at His lotus feet, I have attained eternal redemption!"
      ]
     ],
     "significance": "Nammalwar reveals that Lord Adikesava of Thiruvattaaru personally entered into his soul, curing all residual karmic suffering and ushering his jiva into eternal Moksha"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala-Style Wooden Sanctum: Sprawling wooden and stone temple complex surrounded on three sides by winding river currents",
    "Moolavar Form: Impressive 22-foot reclining deity (Adikesavan) on Adisesha facing West, viewed through three sanctum doors",
    "Ottakkal Mandapam: Single-stone granite hall fronting the sanctum with intricate relief carvings",
    "Urchavar Form: Adikesavan in standing Panchaloha form flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 10.6)",
    "Video Search Query: \"Thiruvattaaru Adikesava Perumal History Velukkudi Krishnan\""
   ]
  }
 },
 "thiruvaranvilai": {
  "serial": 61,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Aranmula Village, Pathanamthitta District, Kerala. Located ~10 km from Chengannur Railway Station along the banks of the Pamba River",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Vamana Vimanam",
   "theertham": "Pamba River / Vedavyasa Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East). Unique feature: Depicts Lord Krishna as Parthasarathy holding the chariot wheel (Chakra) during the Kurukshetra war",
   "orientation": "Facing East",
   "gps": "9.3333° N, 76.6833° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பார்த்தசாரதி / திருவாறன்விளையப்பன் Malayalam: ആറന്മുള പാർത്ഥസാരഥി Sanskrit: पार्थसारथि / नराकृतिविष्णु Transliteration: Parthasarathy / Thiruvaranvilaiyappan"
    },
    "thaayar": {
     "name": "Padmasani Thayar / Mahalakshmi (பத்மாசனி தாயார்)",
     "legend": "Seated in dedicated reverence inside the inner wooden sanctum facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Parthasarathy (பார்த்தசாரதி)"
    },
    "etymology": "Majestic four-armed Panchaloha icon holding the chariot wheel and whip",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive boat processions (Valla Sadya)"
    }
   },
   "sanctumNote": "Standing Charioteer Setup"
  },
  "puranam": {
   "prathyaksham": "Arjuna (Partha), Lord Brahma, Sage Vedavyasa, and River Pamba",
   "timeline": "Core circular wooden sanctum (Vattasreekovil) dates back to the Chera Dynasty (9th Century CE) Extensively patronized by the Kings of Travancore with royal charters for the annual Valla Sadya",
   "literature": [
    "Recorded in Thiruvaimozhi (7.10), Mahabharata, and Kerala Kshetra Vijnana Kosham"
   ],
   "legend": [
    "Legend of Arjuna’s Penance & The Six Rafts (Aranmula) — Arjuna performed intense penance here to expiate the sin of killing Bhishma unarmed in battle. To install the idol of Parthasarathy, six local bamboo rafts (Aaru-Mula) were joined together to transport the deity across the flooded Pamba River. Hence, the shrine acquired the name Aranmula",
    "Bheeshma Prathijna & The Chariot Wheel — During the 9th day of the Kurukshetra war, Bhishma fought fiercely, threatening to kill Arjuna. Lord Krishna, despite His vow not to take arms, leapt down from the chariot, grabbed a broken chariot wheel, and rushed toward Bhishma to protect Arjuna. This iconic form of Krishna holding the wheel is enshrined at Aranmula",
    "Aranmula Valla Sadya & Snake Boat Race (Uthrattathi Vallamkali): Famous for the grand traditional water festival where dozens of massive snake boats (Palliyodams) sail along the Pamba River to deliver feast materials (Valla Sadya) to the temple",
    "Aranmula Kannadi — The region is world-famous for the Aranmula Kannadi (handcrafted metal alloy mirrors made by traditional artisan families attached to the temple)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (7.10.1)",
     "tamil": "ஆறன்விளை அடியேன் அடைந்து ஆறி ஒழிந்தேனே* மாறன் சடகோபன் சொன்ன தமிழ் மாலையானை* தேறும்படி கற்று வல்லார் அமருலகில் இன்புறுவர்* வீறும்படி மேவிய தன் அடியாரொடு ஒன்றியே!",
     "transliteration": "Āṟaṉviḷai aḍiyēṉ aḍaindhu āṟi oḻindhēnē* Māṟaṉ saḍagōpaṉ soṉṉa thamiḻ mālaiyāṉai* Thēṟumbaḍi kaṟṟu vallār amarulagil inbuṟuvar* Vīṟumbaḍi mēviya thaṉ aḍiyāroḍu oṉṟiyē!",
     "wordMeanings": [
      [
       "Āṟaṉviḷai aḍiyēṉ aḍaindhu",
       "Reaching sacred Aranmula (Thiruvaranvilai)"
      ],
      [
       "Āṟi oḻindhēnē",
       "My heart's intense spiritual anguish has completely cooled and ceased!"
      ],
      [
       "Māṟaṉ saḍagōpaṉ soṉṉa thamiḻ mālaiyāṉai",
       "Singing these Tamil garland verses by Nammalwar"
      ],
      [
       "Amarulagil inbuṟuvar",
       "Devotees shall eternally enjoy celestial bliss alongside His divine servants!"
      ]
     ],
     "significance": "Nammalwar expresses how the serene sight of Lord Parthasarathy at Aranmula instantly cools the burning distress of worldly existence (Samsara Tapam), bringing tranquil spiritual peace"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Circular Sanctum (Sreekovil): Traditional circular wooden architectural sanctum topped with a conical copper roof along the Pamba riverbanks",
    "Moolavar Form: Regal standing deity (Nindra Thirukkolam) facing East holding the divine chariot wheel",
    "Palliyodam Snake Boats: Majestic traditional snake boats docked along the river ghats during Uthrattathi Vallamkali",
    "Urchavar Form: Parthasarathy cast in fine Panchaloha with Sridevi and Bhudevi"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 7.10)",
    "Video Search Query: \"Aranmula Parthasarathy Temple History Valla Sadya Velukkudi\""
   ]
  }
 },
 "thiruvanvandoor": {
  "serial": 62,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thiruvanvandoor Village, Alappuzha District, Kerala. Located ~6 km coastal-inland from Chengannur Railway Station",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Vedupura Vimanam",
   "theertham": "Pamba River / Pambanai Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing West)",
   "orientation": "Facing West",
   "gps": "9.3642° N, 76.5875° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பாம்பனியப்பப் பெருமாள் / கமலநாதன் Malayalam: പാമ്പനീയപ്പൻ Sanskrit: सर्पपुरीश / कमलनाथ Transliteration: Pambaniyappan / Kamalanathan"
    },
    "thaayar": {
     "name": "கமலாசனி தாயார் / பாலாசனி (Kamalasani Thayar / Balasani)",
     "legend": "Seated in dedicated reverence inside the wooden inner sanctum facing West"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Pambaniyappan (பாம்பனியப்பன்)"
    },
    "etymology": "Standing Panchaloha icon holding Shankha, Chakra, Gada, and Padma",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Nakula’s Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "Nakula (Pandava), Sage Bhrigu, and Markandeya",
   "timeline": "Core circular wooden architecture dates back to early Chera reign (8th-9th Century CE) Inscriptions in Vatteluttu script record grants by Chera King Kulasekhara for maintaining daily lamps and Vedic chanting (Veda Othu)",
   "literature": [
    "Recorded in Nammalwar's Thiruvaimozhi (6.1) and Kerala Kshetra Mahatmyam"
   ],
   "legend": [
    "Legend of Nakula’s Penance & Temple Construction — Among the Pandava brothers, Nakula built and renovated this shrine during their exile in the Western Ghats. Nakula performed deep penance here to expiate his sins and invoked Lord Vishnu. Lord Vishnu appeared and instructed Nakula on the essence of the Pancharatra Agama scriptures",
    "Bhrigu’s Salvation & Serpent Protection — Sage Bhrigu performed penance here to get cleansed of a curse. Lord Vishnu appeared, freed Bhrigu, and accepted the site surrounded by the serpentine coils (Pamba) of the Pamba River",
    "Pandava Shrines of Chengannur Belt — Thiruvanvandoor is one of the 5 famous Pandava temples in the Chengannur region (Thrichittatt - Yudhishthira, Thiru Puliyoor - Bhima, Aranmula - Arjuna, Thiruvanvandoor - Nakula, Thirukodithanam - Sahadeva)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (6.1.1)",
     "tamil": "வைகுந்தா! மணிவண்ணனே! என் பொல்லாத் திருக்குறளா!* செய்ய கமலக் கண்ணா! என்று என்று உன்னைச் சிந்தித்து* உய்கின்ற என்னை ஊழி தோறும் உய்யக் கொண்டாய்!* வைகுந்தா! வண்டூர் மேவிய திருவாட்டாற்றானே!",
     "transliteration": "Vaikundhā! maṇivaṇṇaṉē! eṉ pollāth thirukkuṟaḷā!* Seyya kamalak kaṇṇā! eṉṟu eṉṟu uṉṉaich chindhiththu* Uygindra eṉṉai ūḻi thōṟum uyyak koṇḍāy!* Vaikundhā! vaṇḍūr mēviya thiruvāṭṭāṟṟāṉē!",
     "wordMeanings": [
      [
       "Vaikundhā maṇivaṇṇaṉē",
       "O Lord of Vaikuntha! O Sapphire-complexioned Lord!"
      ],
      [
       "Eṉ pollāth thirukkuṟaḷā",
       "O my wondrous dwarf Vamana!"
      ],
      [
       "Seyya kamalak kaṇṇā",
       "O Lotus-eyed Supreme Being!"
      ],
      [
       "Ūḻi thōṟum uyyak koṇḍāy",
       "You redeem my soul across every cosmic age"
      ],
      [
       "Vaṇḍūr mēviya thiruvāṭṭāṟṟāṉē",
       "Residing in grace at Thiruvanvandoor!"
      ]
     ],
     "significance": "Nammalwar lovingly calls out to Lord Pambaniyappan as his personal Vamana, expressing how meditating on His sapphire form redeems the soul across endless cosmic cycles"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil: Classic circular wooden sanctum with tiled roofs set in a lush palm grove",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing West inside the inner sanctum",
    "Thaayar Form: Kamalasani Thayar seated in her separate shrine",
    "Urchavar Form: Pambaniyappan cast in fine Panchaloha with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 6.1)",
    "Video Search Query: \"Thiruvanvandoor Pambaniyappan Temple History Velukkudi\""
   ]
  }
 },
 "thiruvalla": {
  "serial": 63,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thiruvalla Town, Pathanamthitta District, Kerala. Located ~2 km from Thiruvalla Railway Station",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Chathushkoona Vimanam",
   "theertham": "Manimala River / Ghantakarna Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing East). Unique feature: Houses a famous 50-foot monolithic flagstaff (Garuda Dhwaja Stambham) carved out of single granite",
   "orientation": "Facing East",
   "gps": "9.3842° N, 76.5744° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஸ்ரீவல்லபன் / கோலப்பிரான் Malayalam: ശ്രീവല്ലഭൻ Sanskrit: श्रीवल्लभ / सुदर्शनमूर्ति Transliteration: Sreevallabha Perumal / Kolapiran"
    },
    "thaayar": {
     "name": "செல்வத்திருக்கொழுந்து தாயார் / வாச்சலியதேவி (Selvathirukozhundhu Thayar / Vatsalyadevi)",
     "legend": "Seated directly inside the main Garbhagriha facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Sreevallabhan / Sudarshanamurthy (ஸ்ரீவல்லபன்)"
    },
    "etymology": "Breathtaking Panchaloha icon depicting Lord Vishnu holding Sudarshana Chakra",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and Kathakali performances"
    }
   },
   "sanctumNote": "Monolithic Dhwaja Stambham & Sudarshana Shrine"
  },
  "puranam": {
   "prathyaksham": "Ghantakarna, Sankaramangalathemmal, Sage Durvasa, and Devas",
   "timeline": "Core circular sanctum built during early Chera reign (8th-9th Century CE) Inscriptions record extensive copper plate charters (Thiruvalla Copper Plates) detailing royal land grants, Vedic schools (Salai), and daily food distribution",
   "literature": [
    "Recorded in Thiruvaimozhi (5.9), Periya Thirumozhi (11.6), Thiruvalla Copper Plates, and Unnuneeli Sandesam"
   ],
   "legend": [
    "Legend of Ghantakarna’s Salvation — Ghantakarna, a fierce demon who rang bells on his ears to avoid hearing the name of Vishnu, realized his ignorance and performed deep penance at Thiruvalla. Lord Sreevallabha appeared, cleansed his sins, and granted him Moksha",
    "Legend of Sankaramangalathemmal & Kathakali Ritual — A devout childless lady named Sankaramangalathemmal performed Ekadashi fasting and sought a holy person to break her fast. Lord Sreevallabha appeared as a young Brahmachari boy, accepted her food, and defeated the demon Thukalasura who tried to disrupt her fast. In gratitude, night-long Kathakali dance performances are offered to Lord Sreevallabha daily as a ritual offering (Kathakali Vazhipadu)",
    "Monolithic Flagstaff (Garuda Stambham) — Features a celebrated 50-foot monolithic granite pillar built by sage-architect Perumthachan, topped with a bronze icon of Garuda"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ],
    [
     "thirumangai",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (11.6.1)",
     "tamil": "ஆவோடு உறும்தண்சோலை சூழ்தண்காவிரியின்* மேவோடு உறும்தண்திருவல்லா வாழ்மேவிய எந்தை* போவோடு உறும்தண்துழாய் மாலையானை அடியேனுக்கு* ஏவோடு உறும்தீவினைநோய்கள் தீர்த்தானே!",
     "transliteration": "Āvōḍu uṟūmthaṇsōlai sūḻthaṇkāviriyiṉ* Mēvōḍu uṟūmthaṇthiruvallā vāḻmēviya endhai* Pōvōḍu uṟūmthaṇthuḻāy mālaiyāṉai aḍiyēṉukku* Ēvōḍu uṟūmthīvinainōygaḷ thīrththāṉē!",
     "wordMeanings": [
      [
       "Thiruvallā vāḻmēviya endhai",
       "My Father residing in cool, sacred Thiruvalla"
      ],
      [
       "Thaṇthuḻāy mālaiyāṉai",
       "Adorned with fragrant Tulasi garlands"
      ],
      [
       "Aḍiyēṉukku ēngu... thīvinainōygaḷ thīrththāṉē",
       "Has completely eradicated the agonizing karmic diseases of this humble servant!"
      ]
     ],
     "significance": "Thirumangai Azhwar praises Lord Sreevallabha of Thiruvalla as the ultimate healer who removes all agonizing karmic afflictions upon simple surrender"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Garuda Dhwaja Stambham: Monumental 50-foot single-stone granite flagstaff standing in front of the eastern entrance",
    "Moolavar Form: Regal standing deity (Nindra Thirukkolam) facing East holding Shankha, Chakra, and Gada inside the circular Sreekovil",
    "Kathakali Performance Area: Open inner courtyard where daily night-long Kathakali plays are staged for the Lord",
    "Urchavar Form: Sreevallabhan cast in fine Panchaloha with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 5.9 & Periya Thirumozhi 11.6)",
    "Video Search Query: \"Thiruvalla Sreevallabha Temple History Kathakali Velukkudi\""
   ]
  }
 },
 "thiruppuliyur": {
  "serial": 64,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Puliyoor Village, Alappuzha District, Kerala. Located ~6 km west of Chengannur Railway Station",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Purushottama Vimanam",
   "theertham": "Pragunasara Pushkarini / Pamba River Tributary",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "9.3256° N, 76.5822° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "மாயப்பிரான் / புலியூர் நம்பி Malayalam: മായാപ്പിരാൻ Sanskrit: मायापुरुष / व्याघ्रपुरीश Transliteration: Mayapiran Perumal / Puliyoor Nambi"
    },
    "thaayar": {
     "name": "பொற்கொடி தாயார் / பொற்கொடி நாச்சியார் (Porkodi Thayar / Hemalatha)",
     "legend": "\"The Golden Vine Goddess\"; seated in dedicated reverence inside the circular wooden inner sanctum facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Mayapiran (மாயப்பிரான்)"
    },
    "etymology": "Regal four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and temple Uthsavams"
    }
   },
   "sanctumNote": "Bhima’s Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "Bhima (Pandava), Sage Vyaghrapada, and Sages Saptarishis",
   "timeline": "Core circular wooden sanctum (Vattasreekovil) dates back to early Chera reign (8th-9th Century CE) Inscriptions record structural renovations sponsored by Venad kings and local Nair chieftains (Madaampimar)",
   "literature": [
    "Recorded in Nammalwar's Thiruvaimozhi (8.9) and Kerala Kshetra Vijnana Kosham"
   ],
   "legend": [
    "Legend of Bhima’s Penance & Club Offering — During the Pandavas' exile, Bhima (the second Pandava) performed intense penance at this site to expiate the sins committed during battle. He constructed and renovated the temple, offering his massive club (Gada) at the feet of Lord Mayapiran. It is believed that offering weapons or heavy maces here grants physical strength and victory over internal enemies",
    "Salvation of Sage Vyaghrapada (Puliyoor) — Sage Vyaghrapada (\"Tiger-footed Sage\") performed penance here to obtain divine vision. Lord Vishnu appeared, granted him spiritual wisdom, and accepted the name of the town as Puliyoor (The Abode of the Tiger-Sage)",
    "Pandava Shrines of Chengannur Belt — Thiru Puliyoor is the second of the 5 famous Pandava temples in the Chengannur region, specifically associated with Bhima"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (8.9.1)",
     "tamil": "கருமாணிக்கக் கூத்தனைக் கனிவாய்த் திருமாமகளை* ஒருமாணி உருவோடு உடன் வைத்த உறைவிடமாம்* திருமாலிருஞ்சோலைமலை திருப் புலியூர் என்று* பெருமான் அடியேனுக்கு அருள் செய்யும் பேறதே!",
     "transliteration": "Karumāṇikkak kūththanaik kanivāyth thirumāmagaḷai* Orumāṇi uruvōḍu uḍan vaiththa uṟaiviḍamām* Thirumāliruñjōlaimalai thirup puliyūr eṉṟu* Perumāṉ aḍiyēṉukku aruḷ seyeyum pēṟadhē!",
     "wordMeanings": [
      [
       "Karumāṇikkak kūththanai",
       "The Lord who dances like a radiant black ruby"
      ],
      [
       "Thirumāmagaḷai... uṟaiviḍamām",
       "The sacred abode where He resides inseparably with Goddess Mahalakshmi"
      ],
      [
       "Thirup puliyūr eṉṟu",
       "Hailed as sacred Thiru Puliyoor"
      ],
      [
       "Perumāṉ aḍiyēṉukku aruḷ seyeyum pēṟadhē",
       "The ultimate boon bestowed by the Supreme Master upon this humble servant!"
      ]
     ],
     "significance": "Nammalwar describes Lord Mayapiran of Thiru Puliyoor as a radiant dark ruby (Karumanickam) who bestows the ultimate blessing of eternal devotion upon those who approach Him"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil: Classic circular wooden sanctum topped with a conical copper roof surrounded by traditional oil lamp railings (Chuttambalam)",
    "Moolavar Form: Majestic standing deity (Nindra Thirukkolam) facing East holding the Gada (mace) and divine weapons",
    "Thaayar Form: Porkodi Thayar seated gracefully in her dedicated inner sanctum",
    "Urchavar Form: Mayapiran cast in fine Panchaloha form flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 8.9)",
    "Video Search Query: \"Thiru Puliyoor Mayapiran Temple History Velukkudi\""
   ]
  }
 },
 "thiruchengundrur": {
  "serial": 65,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Chengannur Town, Alappuzha District, Kerala. Located ~1 km from Chengannur Railway Station",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Jagajjyothi Vimanam",
   "theertham": "Amrutha Pushkarini / Pamba River",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "9.3211° N, 76.6119° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "இமையவரப்பன பெருமாள் / சிற்றாற்றங்கரையான் Malayalam: ഇമയവരപ്പൻ Sanskrit: इमयावरप्पन् / देवनाथ Transliteration: Imayavarappan Perumal / Thrichittattu Nathan"
    },
    "thaayar": {
     "name": "செங்கமலவல்லி தாயார் / தேவி (Sengamalavalli Thayar)",
     "legend": "Seated in dedicated reverence inside the circular wooden inner sanctum facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Imayavarappan (இமையவரப்பன்)"
    },
    "etymology": "Breathtaking four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and Aarattu"
    }
   },
   "sanctumNote": "Yudhishthira’s Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "Yudhishthira (Dharmaputra), Devas (Imayavar), and Sage Narada",
   "timeline": "Core circular wooden architecture dates back to early Chera reign (8th-9th Century CE) Inscriptions record ancient endowments made by Chera rulers for conducting daily Veda Parayanam and maintaining the Amrutha Pushkarini",
   "literature": [
    "Recorded in Nammalwar's Thiruvaimozhi (8.10) and Kerala Kshetra Mahatmyam"
   ],
   "legend": [
    "Legend of Yudhishthira’s Penance & Expiation — Yudhishthira (Dharmaputra), the eldest Pandava, felt immense guilt for uttering the half-truth during the Kurukshetra war (\"Ashwatthama Hatha, Naro Va Kunjaro Va\"), which led to Dronacharya's death. Yudhishthira performed deep penance at this site on the banks of the Chittar stream. Lord Vishnu appeared as Imayavarappan, cleansed Yudhishthira's mind of guilt, and restored his inner peace",
    "Renovation by Yudhishthira — Yudhishthira rebuilt the sanctum, installing the grand standing icon of Imayavarappan. Hence, this shrine is traditionally visited first among the Chengannur Pandava circuit",
    "Pandava Shrines of Chengannur Belt — Thiruchittattu is the primary (1st) shrine among the 5 Pandava temples in the Chengannur region, specifically associated with Yudhishthira"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (8.10.1)",
     "tamil": "மாறன் சடகோபன் வண்குருகூர் மாறன்* ஏறார் செழுங்குடந்தைப் பாடும் இமையவரப்பன்* தேறும்படி கற்று வல்லார் அமருலகில் இன்புறுவர்* வீறும்படி மேவிய தன் அடியாரொடு ஒன்றியே!",
     "transliteration": "Māṟaṉ saḍagōpaṉ vaṇkurugūr māṟaṉ* Ēṟār seḻuṅguḍandhaip pāḍum imaiyavarappan* Thēṟumbaḍi kaṟṟu vallār amarulagil inbuṟuvar* Vīṟumbaḍi mēviya thaṉ aḍiyāroḍu oṉṟiyē!",
     "wordMeanings": [
      [
       "Vaṇkurugūr māṟaṉ",
       "Nammalwar of prosperous Kurugoor"
      ],
      [
       "Imaiyavarappan pāḍum",
       "Singing the praises of Lord Imayavarappan"
      ],
      [
       "Thēṟumbaḍi kaṟṟu vallār",
       "Those who master these verses with clear spiritual understanding"
      ],
      [
       "Amarulagil inbuṟuvar",
       "Shall eternally enjoy celestial bliss alongside His divine servants!"
      ]
     ],
     "significance": "Nammalwar promises that studying the verses dedicated to Lord Imayavarappan grants immediate clarity of mind (Therudhal) and eternal association with the Lord's celestial servants"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Circular Sanctum: Scenic circular wooden Sreekovil surrounded by copper roofs and wide outer stone prakarams",
    "Moolavar Form: Tall standing deity (Nindra Thirukkolam) facing East holding divine emblems inside the inner sanctum",
    "Thaayar Form: Sengamalavalli Thayar seated gracefully in her dedicated inner shrine",
    "Urchavar Form: Imayavarappan cast in fine Panchaloha form flanked by Sridevi and Bhudevi"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 8.10)",
    "Video Search Query: \"Thiruchittattu Imayavarappan Temple History Velukkudi\""
   ]
  }
 },
 "thirukkodithanam": {
  "serial": 66,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thrikkodithanam Village, Kottayam District, Kerala. Located ~3 km from Changanassery Railway Station",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Punyakoti Vimanam",
   "theertham": "Bhoomi Pushkarini / Kadamba Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "9.4542° N, 76.5542° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "அற்புதநாராயணன் / அமிர்தநாராயணன் Malayalam: അത്ഭുതനാരായണൻ Sanskrit: अद्भूतनारायण / अमृतनारायण Transliteration: Arputha Narayanan / Amrutha Narayanan"
    },
    "thaayar": {
     "name": "கற்பகவல்லி தாயார் (Karpagavalli Thayar)",
     "legend": "Seated in dedicated reverence inside the circular wooden inner sanctum facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Arputha Narayanan (அற்புதநாராயணன்)"
    },
    "etymology": "Breathtaking four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and the famous Deepam festival"
    }
   },
   "sanctumNote": "Sahadeva’s Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "Sahadeva (Pandava), King Rukmangada, and Sage Agastya",
   "timeline": "Core circular wooden architecture dates back to early Chera reign (8th-9th Century CE) Inscriptions in Vatteluttu script record ancient land grants by Chera Emperor Bhaskara Ravi Varma for maintaining daily worship rituals",
   "literature": [
    "Recorded in Nammalwar's Thiruvaimozhi (8.8) and Kerala Kshetra Mahatmyam"
   ],
   "legend": [
    "Legend of Sahadeva’s Penance & The Wondrous Manifestation — Sahadeva (the youngest Pandava) performed intense penance here during their exile. Desiring to construct a temple, he searched for a suitable idol. Unable to find one, he attempted to jump into the sacrificial fire. Lord Vishnu miraculously manifested from the fire as Arputha Narayanan (\"The Wondrous Lord\"), stopped Sahadeva, and allowed Himself to be consecrated here",
    "The Festival of Deepam & Kazhukan-parambu — Celebrated for the unique Karthigai Deepam festival where a massive bonfire (Chokkananathan) is lit, and traditional temple arts (Kudakoothu and Kazhunthu) are performed",
    "Pandava Shrines of Chengannur Belt — Thirukodithanam is the 5th shrine among the 5 Pandava temples in the Chengannur region, specifically associated with Sahadeva"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (8.8.1)",
     "tamil": "அற்புதன் நாரணன் அரியுருவாய் உலகுண்டவன்* கற்பகம் நல் சோலை சூழ் திருக்கொடித்தான மேவிய* பொற்புறு சக்கரத்து எந்தை பிரானை அடியேன்* எற்புறத்து வைத்து என்று எப்போதும் இறைஞ்சுவனே!",
     "transliteration": "Arputhaṉ nāraṇaṉ ariyeruvāy ulaguṇḍavaṉ* Karpagam nal sōlai sūḻ thirukkoḍiththāna mēviya* Poṟpuṟu sakkaraththu endhai pirāṉai aḍiyēṉ* Eṟpuṟaththu vaiththu eṉṟu eppōdhum iṟaiñjuvaṉē!",
     "wordMeanings": [
      [
       "Arputhaṉ nāraṇaṉ",
       "Lord Narayana, the Wondrous One"
      ],
      [
       "Ulaguṇḍavaṉ",
       "Who swallowed the universes during cosmic dissolution"
      ],
      [
       "Thirukkoḍiththāna mēviya",
       "Residing at sacred Thirukodithanam surrounded by Wish-fulfilling (Karpagam) groves"
      ],
      [
       "Poṟpuṟu sakkaraththu endhai pirāṉai",
       "My Father and Lord holding the radiant Sudarshana Chakra"
      ],
      [
       "Eppōdhum iṟaiñjuvaṉē",
       "I shall forever bow down and worship Him!"
      ]
     ],
     "significance": "Nammalwar extols Lord Arputha Narayanan as the cosmic wonder worker whose miraculous grace protects devotees who surrender to Him at Thirukodithanam"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil: Classic circular wooden sanctum topped with a conical copper roof set amidst ancient granite courtyards",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing East holding divine weapons inside the inner sanctum",
    "Thaayar Form: Karpagavalli Thayar seated gracefully in her dedicated inner shrine",
    "Ancient Wall Sculptures: Intricate 9th-Century granite relief sculptures decorating the outer walls of the Sreekovil"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 8.8)",
    "Video Search Query: \"Thirukodithanam Arputha Narayanan Temple History Velukkudi\""
   ]
  }
 },
 "thirukkatkarai": {
  "serial": 67,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thrikkakara (Edappally / Kochi), Ernakulam District, Kerala. Located ~10 km from Ernakulam Town Railway Station and ~15 km from Cochin International Airport",
   "sthalaVriksham": "Nelli Tree (Amla / Gooseberry - Phyllanthus emblica)",
   "vimanam": "Pushkala Vimanam",
   "theertham": "Kapilakrutha Pushkarini / Vamana Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing South). Unique feature: Birthplace of the state festival of Onam",
   "orientation": "Facing South",
   "gps": "10.0358° N, 76.3289° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கட்கரையப்பப் பெருமாள் / வாமனமூர்த்தி Malayalam: തൃക്കാക്കരയപ്പൻ / വാമനമൂർത്തി Sanskrit: वामनमूर्त्ति / तृक्काक्करनाथ Transliteration: Katkarai Appan / Vamanamurthy"
    },
    "thaayar": {
     "name": "பெருஞ்செல்வநாயகி தாயார் / வாத்ஸல்யவல்லி (Perunchelvanayagi Thayar / Vatsalyavalli)",
     "legend": "\"Goddess of Supreme Wealth\"; seated in dedicated reverence inside the circular wooden inner sanctum facing South"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Vamanamurthy / Katkarai Appan (வாமனமூர்த்தி)"
    },
    "etymology": "Fine Panchaloha standing icon depicting Vamana holding an umbrella (Chathram) and water pot (Kamandalu)",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and the grand 10-day Onam festival"
    }
   },
   "sanctumNote": "Vamana Avatar Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "King Mahabali, Sage Kapila, and Lord Brahma",
   "timeline": "Core circular wooden architecture dates back to early Chera reign (8th-9th Century CE) Inscriptions detail major royal patronage by Chera Emperor Kulasekhara Perumal, establishing the 10-day Onam festival as a state celebration",
   "literature": [
    "Recorded in Nammalwar's Thiruvaimozhi (9.6) and Kerala Kshetra Mahatmyam"
   ],
   "legend": [
    "Legend of Vamana Avatar, King Mahabali & Birth of Onam — King Mahabali performed a grand Yajna here. Lord Vishnu descended as the dwarf Vamana, requesting three paces of land. With two strides, Vamana measured the earth and heavens. Mahabali offered his own head for the third stride. Pleased by Mahabali's absolute surrender, Vamana placed His foot on Mahabali's head, sending him to Pātāla while granting him eternal liberation. At Mahabali's request, Vamana permitted him to visit his beloved people once a year—an event celebrated across Kerala as the supreme festival of Onam (Thiruvonam)",
    "Sage Kapila’s Penance — Sage Kapila performed penance here to behold Vamana; the temple tank is named Kapilakrutha Pushkarini in his honor",
    "The Plantain Fruit Miracle (Nendran Pazham) — A poor farmer prayed to Lord Katkarai Appan when his plantain trees failed to yield. By the Lord's grace, the trees produced massive, delicious golden plantains—giving rise to the famous Nendran plantain variety unique to Kerala"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (9.6.1)",
     "tamil": "உருவினார் சக்கரத்து என்னப்பன் கார்வயல் சூழ்* திருக்கட்கரை என் தந்தை தாளிரைஞ்சி* பெருகு காதல் செய்தேனுக்கு அருள் செய்யும்* அரியே என் அமுதினை அடியேனே!",
     "transliteration": "Uruvinār sakkaraththu eṉṉappan kārvayal sūḻ* Thirukkaṭkarai eṉ thandhai thāḷiraiñji* Perugu kādhal seydhēṉukku aruḷ seyeyum* Ariyē eṉ amudhiṉai aḍiyēṉē!",
     "wordMeanings": [
      [
       "Uruvinār sakkaraththu eṉṉappan",
       "My Lord holding the beautiful, radiant Sudarshana Chakra"
      ],
      [
       "Thirukkaṭkarai eṉ thandhai thāḷiraiñji",
       "Bowing at the divine feet of my Father at Thrikkakara"
      ],
      [
       "Perugu kādhal seydhēṉukku aruḷ seyeyum",
       "Who bestows divine grace upon me for my overflowing love"
      ],
      [
       "Ariyē eṉ amudhiṉai aḍiyēṉē",
       "O Lord Hari, my immortal divine nectar!"
      ]
     ],
     "significance": "Nammalwar celebrates Lord Katkarai Appan as his personal Father and immortal nectar (Amudhu), highlighting how Vamana's act of measuring the universe was actually an act of overflowing divine love for His devotees"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil: Sprawling circular wooden sanctum surrounded by lush manicured lawns where Onam celebrations originate",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing South depicting Vamana holding the umbrella and water pot",
    "Thaayar Form: Perunchelvanayagi Thayar seated gracefully in her dedicated inner shrine",
    "Onam Floral Carpet (Pookkalam) Site: The sacred temple courtyard where the official royal Onam flag hoisting and Pookkalam ceremonies take place"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 9.6)",
    "Video Search Query: \"Thrikkakara Vamana Temple Onam History Velukkudi\""
   ]
  }
 },
 "thirumoozhikkalam": {
  "serial": 68,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thirumoozhikkulam (Moozhikkulam), Ernakulam District, Kerala. Located ~5 km from Angamaly and ~12 km from Cochin International Airport near the Chalakudy River",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Soundarya Vimanam",
   "theertham": "Shankha Pushkarini / Chalakudy River",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "10.1842° N, 76.3542° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "மூழிக்களத்தான் / லட்சுமணப் பெருமாள் Malayalam: തിരുമൂഴിക്കുളം ലക്ഷ്മണപെരുമാൾ Sanskrit: मूषिकपुरनाथ / लक्ष्मेणप्रतिष्ठित Transliteration: Moozhikkalaththan / Lakshmana Perumal"
    },
    "thaayar": {
     "name": "மதுரவேணி தாயார் / மதுரவல்லி (Madhuraveni Thayar / Madhuravalli)",
     "legend": "\"Goddess of Sweet Speech\"; seated in dedicated reverence inside the circular wooden inner sanctum facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Moozhikkalaththan (மூழிக்களத்தான்)"
    },
    "etymology": "Breathtaking four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and the Nalambalam pilgrimage"
    }
   },
   "sanctumNote": "Lakshmana’s Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "Lakshmana, Bharata, Sage Harita, and Devas",
   "timeline": "Core circular wooden architecture dates back to early Chera reign (8th-9th Century CE) Inscriptions detail the famous Moozhikkulam Kachcham—an ancient 9th-Century socio-religious epigraphical code regulating temple administration, land tenures, and priest duties across Kerala",
   "literature": [
    "Recorded in Nammalwar's Thiruvaimozhi (9.7), Thirumangai Azhwar's Periya Thirumozhi (10.1), and Moozhikkulam Kachcham Inscriptions"
   ],
   "legend": [
    "Legend of Bharata-Lakshmana Reconciliation (Moozhi-Kulam) — During Rama's 14-year exile, Bharata marched with his army toward Chitrakoota to bring Rama back. Lakshmana suspected Bharata's motives and prepared for battle. Upon realizing Bharata's pure, selfless devotion, Lakshmana felt deeply remorseful. Later, at this site, Lakshmana performed intense penance. Bharata arrived here, embraced Lakshmana, and exchanged sacred words of reconciliation (Moozhi = Words + Kulam = Pond/Site). Hence, the shrine was named Thirumoozhikkulam (\"The Sacred Site of Reconciling Words\")",
    "Sage Harita’s Penance & Vedic Code — Sage Harita performed penance here to receive divine instruction. Lord Vishnu appeared and revealed the sacred rules of temple worship and Vedantic conduct (Moozhikkulam Kachcham)",
    "The Nalambalam Pilgrimage Circuit — Thirumoozhikkulam is the main shrine representing Lakshmana in the famous Kerala Nalambalam Yatra (visiting the temples of Rama at Thriprayar, Bharata at Koodalmanikyam, Lakshmana at Moozhikkulam, and Shatrughna at Payammal in a single day during the month of Karkidakam)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ],
    [
     "thirumangai",
     3
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (10.1.1)",
     "tamil": "பொன்னானாய் பொழில் ஏழும் ஏந்தும் மூர்த்தி* புகழாரும் திருமூழிக்களத்து எந்தாய்!* என்னானாய் என்று உன்னை என் நெஞ்சத்து உள்ளே* எந்நாளும் வைப்பாரே இன்புறுவாரே!",
     "transliteration": "Ponnāṉāy poḻil ēḻum ēndhum mūrththi* Pugaḻārum thirumūḻikkaḷaththu endhāy!* Eṉṉāṉāy eṉṟu uṉṉai eṉ neñjaththu uḷḷē* Eṉnāḷum vaippārē inbuṟuvārē!",
     "wordMeanings": [
      [
       "Ponnāṉāy",
       "O Golden Lord!"
      ],
      [
       "Poḻil ēḻum ēndhum mūrththi",
       "O Supreme Being who sustains all seven worlds!"
      ],
      [
       "Thirumūḻikkaḷaththu endhāy",
       "My Father residing at glorious Thirumoozhikkulam!"
      ],
      [
       "Eṉ neñjaththu uḷḷē eṉnāḷum vaippārē inbuṟuvārē",
       "Those who keep You inside their heart every single day shall enjoy eternal spiritual bliss!"
      ]
     ],
     "significance": "Thirumangai Azhwar extols Lord Moozhikkalaththan (Lakshmana) as the golden protector of the seven worlds, declaring that contemplating Him inside one's heart brings unbroken spiritual joy"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil: Majestic circular wooden sanctum surrounded by a granite-paved outer courtyard and traditional lamp-pillars",
    "Moolavar Form: Tall standing deity (Nindra Thirukkolam) facing East worshiped as Lord Lakshmana holding divine weapons",
    "Thaayar Form: Madhuraveni Thayar seated gracefully in her dedicated inner shrine",
    "Urchavar Form: Moozhikkalaththan cast in fine Panchaloha form flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 9.7 & Periya Thirumozhi 10.1)",
    "Video Search Query: \"Thirumoozhikkulam Lakshmana Temple Nalambalam Velukkudi\""
   ]
  }
 },
 "thiruvithuvakodu": {
  "serial": 69,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thirumittacode Village, Pattambi Taluk, Palakkad District, Kerala. Located ~1.5 km from Chathannur and ~10 km from Pattambi Railway Station along the banks of the Bharathapuzha (Nila) River",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Tattva Kanchanakuta Vimanam",
   "theertham": "Bharathapuzha River (Nila River) / Chakra Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing South). Unique feature: Enshrines four distinct Vishnu idols inside the sanctum complex (Chatur Moorthi)",
   "orientation": "Facing South",
   "gps": "10.7936° N, 76.1775° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "உய்யவந்த பெருமாள் / அபயப்பிராத்தன் Malayalam: ഉയ്യവന്ന പെരുമാൾ / തിരുമിറ്റക്കോട്ടപ്പൻ Sanskrit: अभयप्रद / अभयवरदनाथ Transliteration: Uyyavantha Perumal / Abhayapradhan"
    },
    "thaayar": {
     "name": "வித்சுவக்கொடி தாயார் / பத்மாசனி (Vithuvakkodu Nachiyar / Padmasani Thayar)",
     "legend": "Seated in dedicated reverence inside the circular wooden inner sanctum facing South"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Abhayapradhan / Uyyavantha Perumal (அபயப்பிராத்தன்)"
    },
    "etymology": "Majestic four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and the Nila River Aarattu"
    }
   },
   "sanctumNote": "Chatur-Moorthi Setup (4 Deities by Pandavas)"
  },
  "puranam": {
   "prathyaksham": "King Ambarisha, Pandavas, Sage Garga, and River Nila",
   "timeline": "Core circular wooden architecture (Vattasreekovil) dates back to early Chera reign (8th-9th Century CE) Epigraphical records in Vatteluttu script document patronage by the Zamorins of Calicut and the Palakkad Rajas",
   "literature": [
    "Recorded in Kulasekara Azhwar's Perumal Thirumozhi (5th Decad - 10 Pasurams) and Kerala Kshetra Mahatmyam"
   ],
   "legend": [
    "Legend of King Ambarisha & The Four Deities — King Ambarisha performed intense penance here to behold Lord Vishnu. The Lord tested his devotion by appearing in four distinct manifestations. Moved by Ambarisha's unyielding faith, Lord Vishnu agreed to reside here perpetually in four standing forms. During their exile, the Pandava brothers renovated these four individual shrines",
    "Legend of Sage Garga & River Nila — Sage Garga meditated on the banks of the Bharathapuzha (Nila) River. Lord Uyyavantha Perumal manifested to grant him Abhaya (protection), declaring that bathing in the Nila River near the temple equals bathing in the holy Ganga",
    "Saiva-Vaishnava Confluence — Adjacent to the main Vishnu sanctum inside the same outer precinct is a dedicated Siva shrine (Thirumittacode Siva), establishing deep inter-sectarian harmony"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "kulasekhara",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "kulasekhara",
     "work": "Perumal Thirumozhi (5.1)",
     "tamil": "தருதுயரம் தடாயேல் உன்னடி அல்லால் புகல் இல்லா* மெருகுளத்த திருவித்துவக்கோட்டம்மானே!* அரிசினத்தால் ஈன்ற தாய் அகற்றிடினும் மற்றவள் தன்* அருள் நினைந்தேழும் அழுகுழவி அதுவே போன்றேனே!",
     "transliteration": "Tharudhuyaram thaḍāyēl uṉṉaḍi allāl pugal illā* Meruguḷaththa thiruviththuvakkōṭṭammānē!* Arisinaththāl īṉṟa thāy agaṟṟiḍinum maṟṟavaḷ thaṉ* Aruḷ niṉaindhēḻum aḻuguḻavi adhuvē pōṉṟēṉē!",
     "wordMeanings": [
      [
       "Tharudhuyaram thaḍāyēl",
       "Even if You do not remove the afflictions You give me"
      ],
      [
       "Uṉṉaḍi allāl pugal illā",
       "I have no other refuge except Your divine feet!"
      ],
      [
       "Thiruviththuvakkōṭṭammānē",
       "O Lord of Thiruvithuvakkodu!"
      ],
      [
       "Arisinaththāl īṉṟa thāy agaṟṟiḍinum",
       "Even if a mother pushes her child away in intense anger"
      ],
      [
       "Aruḷ niṉaindhēḻum aḻuguḻavi adhuvē pōṉṟēṉē",
       "The crying infant still turns only to that same mother for love; I am just like that child to You!"
      ]
     ],
     "significance": "Kulasekara Azhwar gives birth to the supreme doctrine of Ananya Gathitvam (having no other protector except God), using moving maternal analogies to demonstrate that even when God tests a devotee with sorrow, the devotee has nowhere else to go but to God's own lotus feet"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil: Classic circular wooden sanctum situated right on the elevated banks of the scenic Bharathapuzha (Nila) River",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing South holding Shankha, Chakra, Gada, and Padma",
    "Chatur-Moorthi Sanctums: Four distinct structural shrines within the inner courtyard representing the Pandava consecrations",
    "Urchavar Form: Abhayapradhan cast in fine Panchaloha form flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Perumal Thirumozhi 5)",
    "Video Search Query: \"Thiruvithuvakkodu Uyyavantha Perumal Kulasekara Azhwar Velukkudi\""
   ]
  }
 },
 "thirunavai": {
  "serial": 70,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Thirunavaya Village, Tirur Taluk, Malappuram District, Kerala. Located ~8 km from Tirur Railway Station and ~30 km from Kuttippuram on the banks of the Bharathapuzha (Nila) River",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Veda Shringa Vimanam",
   "theertham": "Bharathapuzha River (Nila River) / Sengamala Pushkarini",
   "posture": "Irundha Thirukkolam (Seated posture facing East - upper torso visible above lotus pedestal). Historic site of the ancient Mamankam Festival",
   "orientation": "Facing East",
   "gps": "10.8542° N, 75.9833° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "நவமுகுந்தப் பெருமாள் / நாவாய் நாரணன் Malayalam: തിരുനാവായ നാരായണൻ / നവമുകുന്ദൻ Sanskrit: नवमुकुन्द / नवमविष्णु Transliteration: Navamukunda Perumal / Navai Narayanan"
    },
    "thaayar": {
     "name": "மலர்மகள் தாயார் / பார்கவி (Malarmagal Thayar / Siridevi) & நிலமகள் தாயார் (Nilamagal Thayar)",
     "legend": "Seated in dedicated shrines inside the wooden inner sanctum facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Navamukundan (நவமுகுந்தன்)"
    },
    "etymology": "Regal four-armed Panchaloha idol carrying divine weapons in standing/seated posture",
    "thaayar": {
     "name": "Malarmagal and Nilamagal",
     "legend": "Accompanies Urchavar during festive processions and the Nila River Aarattu"
    }
   },
   "sanctumNote": "The Ninth Consecrated Idol (Navayogis)"
  },
  "puranam": {
   "prathyaksham": "Navayogis, Goddess Lakshmi, Gajendra the Elephant, and Lord Brahma",
   "timeline": "Core circular wooden architecture dates back to early Chera reign (8th Century CE) Heavily patronized by Chera Kings, Valluvakonathiri, and the Zamorins of Calicut (Zamorin Prashasti inscriptions)",
   "literature": [
    "Recorded in Nammalwar's Thiruvaimozhi (9.8), Thirumangai Azhwar's Periya Thirumozhi (11.7), Koyil Olugu, and Mamankam Records"
   ],
   "legend": [
    "Legend of the Navayogis & The Ninth Idol — The nine celestial sages (Navayogis—Kavi, Hari, Antariksha, Prabuddha, Pippalayana, Avirhotra, Dravida, Chamasas, and Karabhajana) performed penance here. Each sage installed an idol of Lord Vishnu, but the first eight idols sank into the earth (Pātāla). When the ninth sage (Karabhajana) installed the ninth idol (Nava-Mukunda), he stopped it from sinking by chanting sacred mantras just as it reached the chest level. Hence, only the upper half of the Lord is visible today, and the site is named Thirunavaya (Nava = Nine)",
    "Goddess Lakshmi & Gajendra Lotus Ritual — Goddess Lakshmi and Gajendra the Elephant both plucked lotuses from the temple tank to worship Lord Narayana. To resolve their loving competition, Lord Narayana seated Lakshmi by His right side and accepted Gajendra's flowers directly at His feet",
    "The Historic Mamankam Festival — Thirunavaya was the historic venue of the grand Mamankam (held once every 12 years on the banks of the Bharathapuzha River), presided over by the Chera Emperors and later seized by the Zamorins of Calicut. It served as Kerala's premier political, cultural, and spiritual gathering (akin to the Kumbh Mela)",
    "Gaya of the South (Southern Pitru Tharpanam) — Thirunavaya is revered as the primary site in Kerala for performing ancestral rites (Pitru Karyam / Tharpanam), equivalent to Kashi and Gaya"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     11
    ],
    [
     "thirumangai",
     2
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (11.7.1)",
     "tamil": "கணியார் பொழில் சூழ் நாவாய் எந்தை* மணியாரும் மார்பின் மாமலராளை* தணியாத காதலால் தாங்கி நின்ற* அணியாரும் ஆதியை அடியேன் கண்டேனே!",
     "transliteration": "Kaṇiyār poḻil sūḻ nāvāy endhai* Maṇiyārum mārbhin māmalarāḷai* Thaṇiyādha kādhalāl thāṅgi niṉṟa* Aṇiyārum ādhiyai aḍiyēṉ kaṇḍēnē!",
     "wordMeanings": [
      [
       "Kaṇiyār poḻil sūḻ nāvāy endhai",
       "My Father of Thirunavaya surrounded by fruit-laden groves"
      ],
      [
       "Mārbhin māmalarāḷai",
       "Holding Goddess Lakshmi (of the great lotus) upon His chest"
      ],
      [
       "Thaṇiyādha kādhalāl thāṅgi niṉṟa",
       "Sustaining her with unquenchable, eternal love"
      ],
      [
       "Aṇiyārum ādhiyai aḍiyēṉ kaṇḍēnē",
       "I, His humble servant, have beheld that primeval radiant Lord!"
      ]
     ],
     "significance": "Thirumangai Azhwar celebrates Lord Navamukunda of Thirunavaya as the primeval source of love, holding Goddess Lakshmi on His chest while showering unending grace upon pilgrims seeking redemption on the banks of Nila"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil: Sprawling traditional wooden sanctum set directly on the banks of the Bharathapuzha (Nila) River",
    "Moolavar Form: Seated/torso deity (Navamukundan) facing East with upper body visible above the stone pedestal",
    "Nila River Pitru Ghats: The extensive river ghats where thousands gather for ancestral Tharpanam rituals",
    "Urchavar Form: Navamukundan cast in fine Panchaloha form flanked by dual consorts"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi 9.8 & Periya Thirumozhi 11.7)",
    "Video Search Query: \"Thirunavaya Navamukunda Temple History Mamankam Velukkudi\""
   ]
  }
 },
 "thiruvanparisaram": {
  "serial": 71,
  "profile": {
   "regionNote": "Malayala Naadu (Chera Naadu)",
   "location": "Varkala / Coastal Travancore Belt, Thiruvananthapuram District, Kerala. Located ~3 km from Varkala Railway Station overlooking the Arabian Sea cliffs",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Pawana Vimanam",
   "theertham": "Papanasam Sea Beach / Chakra Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East). Unique feature: The right hand of Moolavar is positioned as if reaching for food (Aabhojana Mudra); tradition holds that when His hand reaches His mouth, cosmic dissolution (Pralaya) will occur",
   "orientation": "Facing East",
   "gps": "8.7342° N, 76.7083° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஜனார்தனப் பெருமாள் / மலையாள எல்லைப்பிரான் Malayalam: ജനാർദ്ദനസ്വാമി Sanskrit: जनार्दन / वरकलानाथ Transliteration: Janardhana Swamy / Malayala Ellaipiraan"
    },
    "thaayar": {
     "name": "சாந்தாதேவி தாயார் / ஸ்ரீதேவி (Santhadevi Thayar / Sridevi)",
     "legend": "Seated in dedicated reverence inside the circular wooden inner sanctum facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Janardhanan (ஜனார்தனன்)"
    },
    "etymology": "Regal four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompanies Urchavar during festive processions and sea Aarattu"
    }
   },
   "sanctumNote": "Aabhojana Mudra Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Sage Narada, Devas, and Sage Agastya",
   "timeline": "Core circular wooden architecture dates back to early Chera reign (8th-9th Century CE) Expanded by Travancore Kings; Dutch bell installed in 1757 CE donated by a Dutch ship captain whose vessel was saved from a storm off Varkala beach",
   "literature": [
    "Recorded in Perumal Thirumozhi, Thiruvaimozhi, Kerala Kshetra Mahatmyam, and Travancore State Manual"
   ],
   "legend": [
    "Legend of Brahma’s Yajna & Sage Narada’s Robe — Lord Brahma performed a Yajna without inviting Lord Vishnu. Sage Narada arrived playing his Veena. Brahma mistook Narada for Vishnu and bowed down. The Devas laughed. Embarrassed, Brahma cursed the Devas to be born as mortals on earth. To redeem them, Narada threw his bark garment (Valkalam) into the air; it fell at this spot. The Devas performed penance here, and Lord Vishnu manifested as Janardhana Swamy to liberate them (Papanasam)",
    "Southern Kashi (Dakshina Kashi) — Varkala Janardhana Swamy temple is hailed as the Dakshina Kashi of South India, famous for sea-shore ancestral rites (Papanasam Beach Tharpanam)",
    "Completion of 13 Malayala Naadu Divya Desams — Completes the 13 sacred Chera Naadu shrines (#59 to #71) praised by Nammalwar, Thirumangai Azhwar, Thirumazhisai Azhwar, and Kulasekara Azhwar"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "work": "Thiruvaimozhi (Reference Verse)",
     "tamil": "மலையாள நன்னாட்டுக் பதியாம் புகழார்* மலையாளத்து எம் பிரான் தாளிரைஞ்சி அன்போடு* அலையாடு பிறவித் துயர் எல்லாம் அகற்றி* நிலையான வைகுந்தம் நண்ணுவர் தாமே.",
     "transliteration": "Malayāḷa nannāṭṭuk padhiyām pugaḻār* Malayāḷaththu em pirān thāḷiraiñji anbōḍu* Alaiyāḍu piṟavith thuyar ellām agaṟṟi* Nilaiyāṉa vaikundham naṇṇuvar thāmē",
     "wordMeanings": [
      [
       "Malayāḷa nannāṭṭuk padhiyām",
       "In the holy shrines of the glorious Malayala (Chera) kingdom"
      ],
      [
       "Em pirān thāḷiraiñji anbōḍu",
       "Reaching the divine feet of our Master with love"
      ],
      [
       "Piṟavith thuyar ellām agaṟṟi",
       "Eradicating all tormenting sorrows of birth cycles"
      ],
      [
       "Nilaiyāṉa vaikundham naṇṇuvar thāmē",
       "Souls safely reach the eternal abode of Vaikuntha!"
      ]
     ],
     "significance": "Nammalwar concludes the Malayala Naadu shrine pilgrimage by affirming that surrendering to the Lord across the Chera Naadu shrines eradicates the turbulence of birth cycles and grants eternal admission to Vaikuntha"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Kerala Sreekovil atop Cliff: Historic wooden circular sanctum set atop the red cliffs of Varkala overlooking the Arabian Sea",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing East holding the nectar pot with right hand in Aabhojana Mudra",
    "Dutch Bell Structure: Historic 18th-Century bronze Dutch bell hanging in the outer temple corridor",
    "Papanasam Beach: Sacred ocean beach below the temple cliffs where ancestral Tharpanam rites are performed"
   ],
   "literature": [
    "Project Madurai Text Archives (Thiruvaimozhi)",
    "Video Search Query: \"Varkala Janardhana Swamy Temple History Velukkudi\""
   ]
  }
 },
 "kanchi-varadaraja": {
  "serial": 72,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Vishnu Kanchi (Little Kanchipuram), Kanchipuram District, Tamil Nadu. Located ~5 km from Kanchipuram Railway Station",
   "sthalaVriksham": "Atthimaram (Wild Fig Tree - Ficus racemosa)",
   "vimanam": "Punyakoti Vimanam",
   "theertham": "Anantha Sarovaram (Pushkarini) / Vegavathi River",
   "posture": "Nindra Thirukkolam (Standing posture facing East atop the 24-step elevated hillock called Hasthagiri / Atthigiri)",
   "orientation": "Facing East",
   "gps": "12.8186° N, 79.7242° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பேரருளாளன் / அத்திகிரி வரதர் Sanskrit: वरदराज / हस्तगिरिनाथ / देवराज Transliteration: Varadharaja Perumal / Perarulaalan"
    },
    "thaayar": {
     "name": "பெருந்தேவி தாயார் (Perundevi Thayar / Mahadevi)",
     "legend": "Seated in an independent, royal sanctum (Padi Thaanda Pathini) in the second prakaram facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Devarajan / Varadharajar (தேவராஜன்)"
    },
    "etymology": "Breathtaking Panchaloha idol bearing scars on his face from Brahma's Vedic fire sacrifice",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Positioned beside Urchavar during the famous Garuda Sevai and Athi Varadar festivals"
    }
   },
   "sanctumNote": "Elevated Hasthagiri Sanctum & Athi Varadar Vault"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Saraswati, Thirukachi Nambigal, Sri Ramanuja, and Swami Vedanta Desikan",
   "timeline": "Core structures built during Chola period (Kulottunga I, Vikrama Chola, Rajaraja III) Expanded by Hoysalas, Vijayanagara Emperors (Krishnadevaraya built the 100-pillared hall and 96-foot Rajagopuram), and Tanjore Nayaks",
   "literature": [
    "Celebrated in Sangam Literature (Perumpāṇāṟṟuppaṭai), Thiruvaimozhi, Periya Thirumozhi, Nyasa Dasakam, and Koyil Olugu"
   ],
   "legend": [
    "Origin Legend of Brahma’s Ashwamedha Yajna — Lord Brahma performed an Ashwamedha Yajna at Kanchipuram to behold Lord Vishnu. Goddess Saraswati, angry at not being included, took the form of the raging river Vegavathi to submerge the yajna fire. Lord Vishnu reclined across the riverbed as Yathothkari to check the flow. From the sacred fire altar (Yajna Kunda) on Hasthagiri, Lord Vishnu emerged in a radiant golden chariot as Varadharaja Perumal",
    "The Legend of Athi Varadar (40-Year Festival) — The original deity carved from fig wood (Atthimaram) by Viswakarma was damaged during historical conflicts and preserved inside a silver casket beneath the Anantha Sarovaram tank. The current stone idol replaced it. Every 40 years, Athi Varadar is raised from the water for 48 days (24 days standing, 24 days reclining), attracting tens of millions of pilgrims (last held in 2019)",
    "Golden and Silver Lizards (Kanchi Killi) — Sages Gautama's disciples were cursed to become lizards for contaminating yajna water. Lord Varadharaja cleansed their curse; touching the golden and silver lizards carved on the sanctum roof cleanses all sins and bad omens",
    "Association with Ramanuja & Thirukachi Nambigal — Thirukachi Nambigal performed daily fan service (Aalavatta Kainkaryam) to Varadharaja Perumal, engaging in direct conversations with the Lord. It was here that Lord Varadharaja delivered the Six Truths (Aaru Varthaigal) to Sri Ramanuja through Thirukachi Nambigal, shaping the foundational theology of Visishtadvaita"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     4
    ],
    [
     "bhoothath",
     2
    ],
    [
     "pey",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.9.2)",
     "tamil": "அத்தியூர் அட்டபுயகரத்து எந்தைக்கே* அட்டிமலர் தூவி அடியேனும் வாழ்த்தினேன்* சித்தியும் முத்தியும் தெய்வமும் எல்லாமும்* பத்தியினால் ஆதும் பேரருளாளனே!",
     "transliteration": "Aththiyūr aṭṭapuyakaraththu endhaikkē* Aṭṭimalar thūvi aḍiyēṉum vāḻththiṉēṉ* Siththiyum muththiyum deyvamum ellāmum* Paththiyināl ābhum pēraruḷāḷaṉē!",
     "wordMeanings": [
      [
       "Aththiyūr",
       "Unto the Lord of Atthiyur (Hasthagiri / Kanchipuram)"
      ],
      [
       "Aṭṭimalar thūvi aḍiyēṉum vāḻththiṉēṉ",
       "Offering fresh flowers, I, His humble servant, praise Him"
      ],
      [
       "Siththiyum muththiyum... ellāmum",
       "Worldly accomplishments, liberation (Moksha), and divinity itself"
      ],
      [
       "Paththiyināl ābhum pēraruḷāḷaṉē",
       "Are easily attained through devotion to Lord Perarulaalan!"
      ]
     ],
     "significance": "Thirumangai Azhwar proclaims Lord Varadharaja (Perarulaalan) as the ultimate granter of both worldly achievements (Siddhi) and eternal liberation (Moksha), obtainable purely through loving devotion (Bhakti)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Monumental 96-foot 7-tiered Rajagopuram facing West over the vast temple streets",
    "Moolavar Form: Imposing standing deity (Nindra Thirukkolam) facing East on the elevated Hasthagiri hillock holding Shankha, Chakra, and Abhaya Mudra",
    "100-Pillared Mandapam: Architectural masterpiece carved out of single granite blocks featuring hanging stone chains",
    "Athi Varadar Form: Original fig-wood deity depicted in reclining/standing posture during the 40-year festival"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.9 & Nyasa Dasakam)",
    "Video Search Query: \"Kanchi Varadharaja Perumal Temple History Velukkudi Krishnan\""
   ]
  }
 },
 "parameswara-vinnagaram": {
  "serial": 73,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Kanchipuram Town, Tamil Nadu. Located ~1 km from Kanchipuram Railway Station near the Kamakshi Amman Temple belt",
   "sthalaVriksham": "Shenbagam Tree (Michelia champaca)",
   "vimanam": "Mukunda Vimanam",
   "theertham": "Hema Pushkarini / Kapitha Theertham",
   "posture": "Threefold Postures across 3 Tiers (Ground: Seated, Middle: Reclining, Top: Standing facing East)",
   "orientation": "Facing East",
   "gps": "12.8364° N, 79.7072° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "வைகுந்தப் பெருமாள் / பரமேஸ்வர விண்ணகரத்தன் Sanskrit: वैकुण्ठनाथ / परमेश्वरविष्णु Transliteration: Vaikuntha Perumal / Parameswara Vinnagarathan"
    },
    "thaayar": {
     "name": "வைகுந்தவல்லி தாயார் (Vaikunthavalli Thayar)",
     "legend": "Seated in her dedicated shrine inside the ground-floor prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Vaikunthanathan (வைகுந்தநாதன்)"
    },
    "thaayar": {
     "name": "Vaikunthavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Three-Tiered Pallava Architectural Sanctum"
  },
  "puranam": {
   "prathyaksham": "King Nandivarman II Pallavamalla and Devas",
   "timeline": "Built entirely by Pallava Emperor Nandivarman II (731–796 CE) UNESCO-level heritage architecture featuring recessed cloisters and lion-based pillars (Simha Stambha)",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi (2.9 - 10 Pasurams) and ASI Epigraphia Indica"
   ],
   "legend": [
    "Legend of King Pallavamalla & Cosmic Darshan — Pallava King Nandivarman II (Nandivarman Pallavamalla) performed intense penance here seeking divine guidance for his kingdom. Lord Vishnu appeared and granted him darshan of His three cosmic postures (Seated, Reclining, and Standing) as experienced in Paramapadam",
    "Pallava Epigraphical Gallery — The inner prakaram walls contain an extraordinary continuous band of sculptured panels and inscriptions detailing the complete history of the Pallava Dynasty from its legendary origins down to Nandivarman II (8th Century CE)—a primary historical monument of South India"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (2.9.1)",
     "tamil": "பார் மலிந்த திண் தோள் பல்லவர் கோன் பணிந்த* படுமழை போல் தானம் சொரியும் நல் வேழம்* சீர் மலிந்த மணி மாடங்கள் சூழ் பரமேச்சுர* விண்ணகரம் மேவிய தேவினையே!",
     "transliteration": "Pār malindha thiṇ thōḷ pallavar kōṉ paṇindha* Paḍumaḻai pōl dhāṉam soriyum nal vēḻam* Sīr malindha maṇi māḍaṅgaḷ sūḻ paramēchchura* Viṇṇagaram mēviya thēviṉaiyē!",
     "wordMeanings": [
      [
       "Pār malindha thiṇ thōḷ pallavar kōṉ paṇindha",
       "Worshipped by the mighty-shouldered King of the Pallavas"
      ],
      [
       "Paḍumaḻai pōl dhāṉam soriyum nal vēḻam",
       "Where royal elephants shower gifts like torrential rain"
      ],
      [
       "Paramēchchura viṇṇagaram mēviya thēviṉaiyē",
       "Unto the Supreme Lord residing at Parameswara Vinnagaram!"
      ]
     ],
     "significance": "Thirumangai Azhwar links the spiritual majesty of Lord Vaikuntha Perumal directly with the historical devotion of Pallava King Nandivarman, praising the temple as a physical Vaikuntha on earth"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Pallava Façade: Unique 8th-Century Pallava rock and sandstone architecture with stepped Vimanam tiers",
    "Moolavar Form: Threefold postures across three vertical tiers (Seated, Reclining, and Standing)",
    "Historical Relief Panel Wall: Long cloisters featuring carved relief panels detailing Pallava royal coronations",
    "Urchavar Form: Vaikunthanathan cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 2.9)",
    "Video Search Query: \"Kanchi Vaikuntha Perumal Temple Pallava History Velukkudi\""
   ]
  }
 },
 "pavalavannam": {
  "serial": 74,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Kanchipuram Town, Tamil Nadu. Located ~1 km north of Kanchipuram Railway Station",
   "sthalaVriksham": "Pavazha Malli (Coral Jasmine - Nyctanthes arbor-tristis)",
   "vimanam": "Pravala Vimanam",
   "theertham": "Chakra Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing West). Unique feature: Emerald-coral complexion",
   "orientation": "Facing West",
   "gps": "12.8419° N, 79.7042° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பவளவண்ணப் பெருமாள் / பவளவண்ணன் Sanskrit: प्रवालवर्ण / प्रवालविष्णु Transliteration: Pavalavanna Perumal / Pravalavannan"
    },
    "thaayar": {
     "name": "பவளவல்லி தாயார் (Pavalavalli Thayar / Pravalavalli)",
     "legend": "Seated in her dedicated shrine inside the inner prakaram facing West"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Pavalavannan (பவளவண்ணன்)"
    },
    "etymology": "Fine Panchaloha standing icon holding Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Pavalavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Standing Coral-Hued Moolavar"
  },
  "puranam": {
   "prathyaksham": "Sage Aswatthama, Brhaspati, and Devas",
   "timeline": "Core stone sanctum built during Chola period (10th-11th Century CE) Expanded by Vijayanagara kings with structural endowments recorded for daily worship",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi and Kanchi Kshetra Mahatmyam"
   ],
   "legend": [
    "Legend of Coral Manifestation to Sage Aswatthama — Sage Aswatthama (or Sage Brhaspati) performed penance to behold Lord Vishnu in a unique form. Lord Vishnu appeared radiating a brilliant coral-red hue (Pavalam), matching His cosmic manifestation during the Krutha Yuga",
    "Pairing with Pachai Vannan — Thiru Pavalavannam (Coral-Red Lord) is traditionally paired with the nearby shrine of Pachai Vannan (Emerald-Green Lord). Together, they represent the dual cosmic hues (Coral and Emerald) of the Supreme Being praised by Azhwars"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (3.4.8)",
     "tamil": "திங்களானாய் திருமாலைத் தேவினை* எங்களுக்கில் அமுதத்தினை எம்மானை* பவளவண்ணனைப் பாடி எப்போதும்* உய்ந்து போகாமல் என் செய்கேன் நெஞ்சமே!",
     "transliteration": "Thiṅgaḷāṉāy thirumālaith thēviṉai* Eṅgaḷukkil amudhadhiṉai emmāṉai* Pavalavaṇṇaṉaip pāḍi eppōdhum* Uyndhu pōgāmal eṉ seygēn neñjamē!",
     "wordMeanings": [
      [
       "Thiṅgaḷāṉāy",
       "Radiant like the cool full moon"
      ],
      [
       "Eṅgaḷukkil amudhadhiṉai",
       "The immortal nectar dwelling in our hearts"
      ],
      [
       "Pavalavaṇṇaṉaip pāḍi eppōdhum",
       "Singing the glory of Lord Pavalavannan always"
      ],
      [
       "Uyndhu pōgāmal eṉ seygēn neñjamē",
       "O mind! How can I live without attaining Him?"
      ]
     ],
     "significance": "Thirumangai Azhwar extols Lord Pavalavannan's unique coral-hued divine beauty, identifying Him as the soul's inner nectar"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered west-facing Rajagopuram leading into a serene courtyard",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing West with a unique coral-red tint flanked by Sridevi and Bhudevi",
    "Thaayar Form: Pavalavalli Thayar seated in her separate shrine",
    "Urchavar Form: Pavalavannan cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 3.4)",
    "Video Search Query: \"Kanchi Pavalavannam Temple History Velukkudi\""
   ]
  }
 },
 "thiruooragam": {
  "serial": 75,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Center of Kanchipuram Town, Tamil Nadu. Located near Kamakshi Amman Temple",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata)",
   "vimanam": "Saraswatha Vimanam",
   "theertham": "Naga Theertham",
   "posture": "Nindra Thirukkolam (Colossal 35-foot Trivikrama standing posture with left leg raised facing West)",
   "orientation": "Facing West",
   "gps": "12.8392° N, 79.7028° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "உலகளந்த பெருமாள் / ஊரகத்தான் Sanskrit: त्रिविक्रम / जगदध्यक्ष Transliteration: Ulagalandha Perumal / Ooragathan"
    },
    "thaayar": {
     "name": "அமுதவல்லி தாயார் / அமுதவல்லி (Amruthavalli Thayar)",
     "legend": "Seated in her dedicated shrine facing West inside the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Trivikraman (திரிவிக்ரமன்)"
    },
    "thaayar": {
     "name": "Amruthavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Massive 35-Foot Trivikrama Icon + 4 Divya Desams in 1 Complex"
  },
  "puranam": {
   "prathyaksham": "King Mahabali, Adisesha, and Lord Brahma",
   "timeline": "Core stone structures built during early Chola period (10th Century CE) under Parantaka I and Rajaraja I Extensively expanded by Rajendra Chola I and Vijayanagara emperors",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi, Thirumazhisai Azhwar's Naanmugan Thiruvanthadhi, and Kanchi Puranam"
   ],
   "legend": [
    "Legend of Mahabali’s Desire & Adisesha Form (Ooragam) — King Mahabali could not see the full cosmic Trivikrama form because his head was pinned under the Lord's foot. He prayed to behold Trivikrama again. Lord Vishnu instructed him to come to Kanchipuram. Here, the Lord manifested as the colossal Trivikrama. When Mahabali found the colossal form overwhelming, the Lord compressed Himself into a small serpent form (Ooragam = Adisesha) to grant him serene darshan",
    "Quadruple Divya Desam Hub — Uniquely, four separate Divya Desams praised by Azhwars are preserved inside this single temple compound:",
    "Thiru Ooragam (Main Sanctum - Trivikrama)",
    "Thiru Neeragam (Inner shrine - Jagadeeshwara)",
    "Thiru Karagam (Inner shrine - Karunakara)",
    "Thiru Kaarvanam (Inner shrine - Kalvar)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     4
    ],
    [
     "thirumazhisai",
     2
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumazhisai",
     "work": "Nanmugan Thiruvanthadhi (Verse 36)",
     "tamil": "நின்றதும் இருந்ததும் கிடந்ததும் என் நெஞ்சுளே* பொன்றாத முன்னொன்றிலும் மாணியாய் — சென்று உலகளந்த ஓரகத்து உள்ளாய்! உன்னை கண்டும் என் கண்கள் களிப்பாவதே!",
     "transliteration": "Niṉṟadhum irundhadhum kiḍandhadhum eṉ neñjuḷē* Poṉṟādha muṉṉoṉṟilum māṇiyāy — seṉṟu Ulagalandha ōragaththu uḷḷāy! uṉṉai Kaṇḍum eṉ kaṇgaḷ kaḷippāvadhē!",
     "wordMeanings": [
      [
       "Niṉṟadhum irundhadhum kiḍandhadhum",
       "Standing, sitting, and reclining postures"
      ],
      [
       "Eṉ neñjuḷē",
       "Residing permanently inside my heart"
      ],
      [
       "Seṉṟu ulagalandha ōragaththu uḷḷāy",
       "O Lord of Ooragam who stepped forth to measure the worlds!"
      ],
      [
       "Uṉṉai kaṇḍum eṉ kaṇgaḷ kaḷippāvadhē",
       "My eyes overflow with ecstatic joy upon beholding You!"
      ]
     ],
     "significance": "Thirumazhisai Azhwar connects the cosmic 35-foot Trivikrama measuring the universe with the intimate God who comfortably fits inside the human heart"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Impressive 3-tiered east-facing Rajagopuram in the heart of Kanchipuram town",
    "Moolavar Form: Colossal 35-foot Trivikrama deity (Nindra Thirukkolam) with left leg raised high inside the main sanctum",
    "Ooragam Serpent Shrine: Dedicated sub-shrine housing Adisesha (Ooragathan)",
    "Urchavar Form: Trivikraman cast in fine Panchaloha form with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Nanmugan Thiruvanthadhi & Periya Thirumozhi)",
    "Video Search Query: \"Kanchi Ulagalandha Perumal Temple History Velukkudi\""
   ]
  }
 },
 "ashtabujam": {
  "serial": 76,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Vishnu Kanchi, Kanchipuram Town, Tamil Nadu. Located ~2 km south of Kanchipuram Railway Station near Varadharaja Perumal Temple",
   "sthalaVriksham": "Sembagam Tree (Michelia champaca)",
   "vimanam": "Gaganakara Vimanam",
   "theertham": "Gajendra Pushkarini",
   "posture": "Nindra Thirukkolam (Eight-armed standing posture facing West). Unique feature: Enshrines Lord Vishnu with 8 arms (Ashtabhuja) carrying 8 celestial weapons",
   "orientation": "Facing West",
   "gps": "12.8236° N, 79.7136° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "அட்டபுயகரத்தான் / ஆதிகேசவப் பெருமாள் Sanskrit: अष्टभुजस्वामी / गजेंद्रवरद Transliteration: Ashtabuja Perumal / Adikesava Perumal"
    },
    "thaayar": {
     "name": "அலமேலுமங்கை தாயார் / பத்மாசனி (Alamelumangai Thayar / Padmasani)",
     "legend": "Seated in an independent shrine facing East inside the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Ashtabujan (அட்டபுயன்)"
    },
    "etymology": "Breathtaking four-armed/eight-armed Panchaloha idol carrying divine weapons",
    "thaayar": {
     "name": "Alamelumangai Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Eight-Armed Standing Sanctum"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Gajendra the Elephant, and Swami Vedanta Desikan",
   "timeline": "Core stone sanctum dates back to Pallava and early Chola reign (8th-10th Century CE) Expanded by Vijayanagara rulers with epigraphical records detailing endowments for daily lighting and festival processions",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi (2.8 - 10 Pasurams), Peyazhwar's Moondram Thiruvanthadhi, and Ashtabhuja Ashtakam"
   ],
   "legend": [
    "Legend of Brahma’s Yajna Protection & Sarabha Demonic Beast — When Lord Brahma was performing his Ashwamedha Yajna, demons dispatched a fierce eight-legged wild beast (Sarabha / Kapali) to extinguish the sacred fire. Lord Vishnu manifested instantly with eight arms (Ashtabhuja) holding eight lethal weapons, vanquished the beast, and protected the Yajna",
    "Gajendra Moksham Connection — This shrine is also celebrated as a site of Gajendra Moksham, where the Lord rushed with eight arms to save Gajendra the Elephant from the crocodile",
    "Vedanta Desikan’s Ashtabhuja Ashtakam — Swami Vedanta Desikan composed his famous Ashtabhuja Ashtakam here, praising the Lord's eight arms as the eight pillars of absolute surrender (Saranagati)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ],
    [
     "pey",
     1
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (2.8.1)",
     "tamil": "மேவரற்ற வல்வினை நோய் வினையாயின தீர்க்கும்* தேவா தேவர்க்கு அரியாய் திருமால் மகளிர்க்கு அண்ணாய்* மேவா நின்ற அட்டபுயகரத்து என் ஆதியை* நாவாரப் பாடி அடியேன் உய Politely உய்ந்தேனே!",
     "transliteration": "Mēvaraṟṟa valvinai nōi vinaiyāyina thīrkkum* Thēvā thēvarkku ariyāy thirumāl magaḷirkku aṇṇāy* Mēvā niṉṟa aṭṭapuyakaraththu eṉ ādhiyai* Nāvārap pāḍi aḍiyēṉ uyndhēnē!",
     "wordMeanings": [
      [
       "Valvinai nōi vinaiyāyina thīrkkum",
       "Eradicating all dreadful karmic diseases that afflict the soul"
      ],
      [
       "Thēvā thēvarkku ariyāy",
       "O God of Gods, rare even for Celestials to fathom!"
      ],
      [
       "Aṭṭapuyakaraththu eṉ ādhiyai",
       "My Primeval Lord residing at Ashtabujakaram"
      ],
      [
       "Nāvārap pāḍi aḍiyēṉ uyndhēnē",
       "Singing His praises till my tongue is satisfied, I have attained redemption!"
      ]
     ],
     "significance": "Thirumangai Azhwar celebrates Lord Ashtabujan as the eight-armed savior who uses His eight weapons to dismantle every karmic obstacle confronting the surrendered soul"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered west-facing Rajagopuram leading into a serene courtyard",
    "Moolavar Form: Unique eight-armed standing deity (Nindra Thirukkolam) facing West holding 8 weapons",
    "Thaayar Form: Alamelumangai Thayar seated gracefully in her separate shrine",
    "Urchavar Form: Ashtabujan cast in fine Panchaloha form displaying divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 2.8 & Ashtabhuja Ashtakam)",
    "Video Search Query: \"Kanchi Ashtabujakaram Temple History Velukkudi\""
   ]
  }
 },
 "thiruppadagam": {
  "serial": 77,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Pandavaperumal Koil Street, Kanchipuram Town, Tamil Nadu. Located ~1 km from Ekambareswarar Temple and ~1.5 km from Kanchipuram Railway Station",
   "sthalaVriksham": "Senbagam Tree (Michelia champaca)",
   "vimanam": "Bhadra Vimanam",
   "theertham": "Matsya Theertham",
   "posture": "Irundha Thirukkolam (Colossal 25-foot seated posture facing East)",
   "orientation": "Facing East",
   "gps": "12.8428° N, 79.6967° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பாண்டவ தூதப் பெருமாள் / பாடகத்தான் Sanskrit: पाण्डवदूत / विशालकायविष्णु Transliteration: Pandava Thoodhar Perumal / Padagathan"
    },
    "thaayar": {
     "name": "ருக்மணி தாயார் (Rukmini Thayar) & சத்யபாமா தாயார் (Satyabhama Thayar)",
     "legend": "Seated in dedicated reverence inside the inner sanctum flanking the colossal Moolavar"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Pandava Thoodhar (பாண்டவ தூதர்)"
    },
    "etymology": "Regal four-armed Panchaloha idol carrying divine weapons in standing posture",
    "thaayar": {
     "name": "Rukmini & Satyabhama",
     "legend": "Positioned beside Urchavar during festive processions"
    }
   },
   "sanctumNote": "Colossal Seated Vishwaroopa Setup"
  },
  "puranam": {
   "prathyaksham": "King Janamejaya, Dhritarashtra, and Harita Maharishi",
   "timeline": "Core sanctum architecture dates back to early Chola period (10th Century CE) under Parantaka I and Rajaraja I Inscriptions record major land gifts (Devadana) for conducting the annual Sri Jayanthi (Krishna Janmashtami) and Deepavali festivals",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi, Bhoothath Azhwar's Irandarn Thiruvanthadhi, Peyazhwar's Moondram Thiruvanthadhi, and Thirumazhisai Azhwar's Nanmugan Thiruvanthadhi"
   ],
   "legend": [
    "Legend of Duryodhana’s Trap & Vishwaroopam — Lord Krishna traveled to Hastinapura as an envoy (Thoodhar) to negotiate peace for the Pandavas. Duryodhana plotted to capture Krishna by building a treacherous carpeted pitfall over a subterranean dungeon filled with armed wrestlers. When Krishna sat on the seat, it collapsed. Unharmed, Krishna manifested His cosmic Vishwaroopa form, illuminating the subterranean cavern, blinding the evil courtiers, and revealing His supreme divinity to the blind King Dhritarashtra",
    "Janamejaya’s Penance — King Janamejaya (grandson of Abhimanyu) listened to the Mahabharata recited by Sage Vaisampayana. Desiring to witness the exact Vishwaroopa form shown in Duryodhana's court, he performed penance at Kanchipuram. Lord Vishnu manifested here as the colossal seated Pandava Thoodhar",
    "Association with Thirazhisai Azhwar & Sri Ramanuja — Thirumazhisai Azhwar performed intense meditation at this shrine. Centuries later, Sri Ramanuja attended discourses here under his early master Yadavaprakasa before establishing Visishtadvaita"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     2
    ],
    [
     "bhoothath",
     2
    ],
    [
     "pey",
     1
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumazhisai",
     "work": "Nanmugan Thiruvanthadhi (Verse 36)",
     "tamil": "நின்றதும் இருந்ததும் கிடந்ததும் என் நெஞ்சுளே* பொன்றாத முன்னொன்றிலும் மாணியாய் — சென்று பாடகத்து உள்ளாய்! நிலத்து அளந்த ஓரகத்து உள்ளாய்! நின்னையன்றி மற்றொன்றும் நானிலேன் என் நெஞ்சமே!",
     "transliteration": "Niṉṟadhum irundhadhum kiḍandhadhum eṉ neñjuḷē* Poṉṟādha muṉṉoṉṟilum māṇiyāy — seṉṟu Pāḍagaththu uḷḷāy! nilaththu aḷandha ōragaththu uḷḷāy! Niṉṉaiyaṉṟi maṟṟoṉṟum nāṉilēṉ eṉ neñjamē!",
     "wordMeanings": [
      [
       "Niṉṟadhum irundhadhum kiḍandhadhum",
       "Standing, sitting, and reclining divine postures"
      ],
      [
       "Eṉ neñjuḷē",
       "Residing permanently inside my heart"
      ],
      [
       "Pāḍagaththu uḷḷāy",
       "O Lord residing in Padagam (Pandava Thoodhar)!"
      ],
      [
       "Nilaththu aḷandha ōragaththu uḷḷāy",
       "O Lord of Ooragam who measured the worlds!"
      ],
      [
       "Niṉṉaiyaṉṟi maṟṟoṉṟum nāṉilēṉ",
       "O my mind! I hold no other refuge or reality besides Him!"
      ]
     ],
     "significance": "Thirumazhisai Azhwar links the colossal seated Vishwaroopa form at Padagam with the cosmic Trivikrama at Ooragam, declaring that the Supreme Lord who fills all space chooses to dwell within the devotee's heart"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Traditional 3-tiered east-facing Rajagopuram leading into a high-roofed sanctum hall",
    "Moolavar Form: Colossal 25-foot seated deity (Irundha Thirukkolam) facing East with right hand extended in Abhaya Mudra",
    "Thaayar Form: Rukmini and Satyabhama seated alongside the main Garbhagriha",
    "Urchavar Form: Pandava Thoodhar cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Nanmugan Thiruvanthadhi & Periya Thirumozhi)",
    "Video Search Query: \"Kanchi Pandava Thoodhar Perumal Temple History Velukkudi\""
   ]
  }
 },
 "nilathingal-thundam": {
  "serial": 78,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Situated inside the inner prakaram of Ekambareswarar Siva Temple, Kanchipuram Town, Tamil Nadu",
   "sthalaVriksham": "Mango Tree (inside Ekambareswarar complex)",
   "vimanam": "Purushottama Vimanam",
   "theertham": "Chandra Pushkarini / Dynamic Temple Tank",
   "posture": "Nindra Thirukkolam (Standing posture facing West)",
   "orientation": "Facing West",
   "gps": "12.8472° N, 79.6997° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "நிலத்திங்கள் துண்டத்தான் / சந்திரசூடப் பெருமாள் Sanskrit: नीलेन्दुतुण्डनाथ / चन्द्रचूडविष्णु Transliteration: Nilathingal Thundathan / Chandrachuda Perumal"
    },
    "thaayar": {
     "name": "நேர்உறை மங்காதேவி தாயார் / நிலத்திங்கள் துண்ட நாச்சியார் (Neruverai Mangadevi Thayar)",
     "legend": "Seated in dedicated reverence inside the small sub-shrine facing West"
    },
    "photos": [
     {
      "src": `${import.meta.env.BASE_URL}photos/desam-89.jpg`,
      "alt": "THIRU NILATHINGAL THUNDAM — dossier photograph",
      "credit": "Product Owner dossier (Divya Desams 86-90)"
     }
    ]
   },
   "urchavar": {
    "names": {
     "translit": "Chandrachudan (சந்திரசூடன்)"
    },
    "thaayar": {
     "name": "Neruverai Mangadevi",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Shrine inside Saiva Complex"
  },
  "puranam": {
   "prathyaksham": "Goddess Parvati, Lord Siva, Chandra (Moon God), and Devas",
   "timeline": "Core sanctum structure dated to Pallava and early Chola periods (8th-10th Century CE) Maintained under Chola and Vijayanagara royal grants allocated to the Ekambareswarar complex",
   "literature": [
    "Recorded in Thirumangai Azhwar's Thirukkurunthandagam (Verse 23) and Kanchi Puranam"
   ],
   "legend": [
    "Legend of Parvati’s Mango Tree Penance & Siva’s Fire — Goddess Parvati performed penance under a mango tree in Kanchipuram, making a Lingam out of sand. Lord Siva tested her devotion by unleashing intense heat from His third eye and releasing the waters of Ganga. Parvati prayed to her brother, Lord Vishnu. Lord Vishnu manifested as Nilathingal Thundathan, emitting cool, soothing moonbeams (Nila-Thingal) from the crescent moon on His head to neutralize the scorching heat and protect Parvati's sand Lingam",
    "Saiva-Vaishnava Architectural Harmony — One of the rare Divya Desams physically located inside a prominent Saivite temple complex, testifying to ancient sectarian co-existence in Thondai Naadu"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Thirukkurunthandagam (Verse 23)",
     "tamil": "நீரகம் மேவா ணெடுவரை மேலான் நிலத்திங்கள்* துண்டத்தாய் முனிவர் மூவர்* ஆரமுதே என்று அங்கு அலற்றி* காரகம் மேவா காளாய் எந்தாய்!",
     "transliteration": "Nīragam mēvā ṇeḍuvarai mēlān nilaththiṅgaḷ* Thuṇḍaththāy munivar mūvar* Āramudhē eṉṟu aṅgu alaṟṟi* Kāragam mēvā kāḷāy endhāy!",
     "wordMeanings": [
      [
       "Nīragam mēvā... nilaththiṅgaḷ thuṇḍaththāy",
       "Residing in Neeragam and Nilathingal Thundam"
      ],
      [
       "Munivar mūvar āramudhē eṉṟu",
       "Hailed by the three great sages as immortal nectar!"
      ],
      [
       "Kāragam mēvā kāḷāy endhāy",
       "O Master of Karagam, my Father!"
      ]
     ],
     "significance": "Thirumangai Azhwar synthesizes four compact Kanchipuram shrines into a single verse, praising Lord Nilathingal Thundathan as the immortal nectar (Aramudhu) worshipped by ancient sages"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Sub-Shrine Location: Elegant small stone sanctum located in the north-east prakaram of Ekambareswarar Temple",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing West holding Shankha and Chakra with cool moonbeam iconography",
    "Thaayar Form: Neruverai Mangadevi Thayar seated in her inner niche",
    "Urchavar Form: Chandrachudan cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Thirukkurunthandagam)",
    "Video Search Query: \"Kanchi Nilathingal Thundathan Temple History Velukkudi\""
   ]
  }
 },
 "thiruneeragam": {
  "serial": 79,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Preserved inside the Ulagalandha Perumal Temple Complex, Center of Kanchipuram Town, Tamil Nadu",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata)",
   "vimanam": "Jagadeeshwara Vimanam",
   "theertham": "Akrura Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "12.8392° N, 79.7028° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஜெகதீஸ்வரப் பெருமாள் / நீரகத்தான் Sanskrit: जगदीश्वर / नीरगनाथ Transliteration: Jagadeeshwara Perumal / Neeragathan"
    },
    "thaayar": {
     "name": "நிலமங்கை வல்லி தாயார் / நிலமகள் (Nilamangai Valli Thayar)",
     "legend": "Seated in dedicated reverence inside the sub-shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Jagadeeshwaran (ஜெகதீஸ்வரன்)"
    },
    "thaayar": {
     "name": "Nilamangai Valli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Enshrined Sub-Sanctum"
  },
  "puranam": {
   "prathyaksham": "Akrura, Lord Brahma, and Devas",
   "timeline": "Iconography dates back to Pallava/Early Chola period (8th-10th Century CE) Maintained under ancient royal endowments dedicated to the Ulagalandha Perumal temple",
   "literature": [
    "Recorded in Thirumangai Azhwar's Thirukkurunthandagam (Verse 23) and Kanchi Puranam"
   ],
   "legend": [
    "Legend of Akrura’s Penance & Water Manifestation — Akrura (the devout uncle of Lord Krishna) performed penance here seeking divine knowledge. Lord Vishnu appeared as Jagadeeshwara, manifesting the sacred primordial waters (Neer) to purify Akrura. Hence, the shrine acquired the name Thiru Neeragam",
    "Preservation inside Ulagalandha Complex — Historical evidence suggests the original independent temple structure was lost to urban expansion or flooding during medieval times, leading to the consecrated icon being permanently housed within the outer prakaram of the Ulagalandha Perumal temple"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Thirukkurunthandagam (Verse 23)",
     "tamil": "நீரகம் மேவா ணெடுவரை மேலான் நிலத்திங்கள்* துண்டத்தாய் முனிவர் மூவர்* ஆரமுதே என்று அங்கு அலற்றி* காரகம் மேவா காளாய் எந்தாய்!",
     "transliteration": "Nīragam mēvā ṇeḍuvarai mēlān nilaththiṅgaḷ* Thuṇḍaththāy munivar mūvar* Āramudhē eṉṟu aṅgu alaṟṟi* Kāragam mēvā kāḷāy endhāy!",
     "wordMeanings": [
      [
       "Nīragam mēvā",
       "Residing gracefully at Thiru Neeragam"
      ],
      [
       "Āramudhē eṉṟu aṅgu alaṟṟi",
       "Hailed continuously as immortal nectar"
      ],
      [
       "Kāḷāy endhāy",
       "O my Supreme Master!"
      ]
     ],
     "significance": "Thirumangai Azhwar praises Lord Jagadeeshwara of Neeragam as the supreme source of life-giving spiritual water (Neer) that quenches the soul's eternal thirst"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Sub-Shrine Location: Dedicated sanctum alcove located in the northern prakaram of Ulagalandha Perumal Temple",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing East holding Shankha and Chakra",
    "Thaayar Form: Nilamangai Valli Thayar seated in her inner niche",
    "Urchavar Form: Jagadeeshwaran cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Thirukkurunthandagam)",
    "Video Search Query: \"Kanchi Thiru Neeragam Jagadeeshwara Temple Velukkudi\""
   ]
  }
 },
 "thirukkaragam": {
  "serial": 80,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Preserved inside the Ulagalandha Perumal Temple Complex, Center of Kanchipuram Town, Tamil Nadu",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata)",
   "vimanam": "Vamana Vimanam",
   "theertham": "Garga Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing South)",
   "orientation": "Facing South",
   "gps": "12.8392° N, 79.7028° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கருணாகரப் பெருமாள் / காரகத்தான் Sanskrit: करुणाकर / कारगनाथ Transliteration: Karunakara Perumal / Karagathan"
    },
    "thaayar": {
     "name": "பத்மாசனி தாயார் / பத்மாவதி (Padmasani Thayar / Padmavathi)",
     "legend": "Seated in dedicated reverence inside the sub-shrine facing South"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Karunakaran (கருணாகரன்)"
    },
    "thaayar": {
     "name": "Padmasani Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Enshrined Sub-Sanctum"
  },
  "puranam": {
   "prathyaksham": "Sage Garga, Lord Brahma, and Devas",
   "timeline": "Core iconography dates to Pallava/Early Chola period (8th-10th Century CE) Maintained under medieval endowments dedicated to the main Ulagalandha temple complex",
   "literature": [
    "Recorded in Thirumangai Azhwar's Thirukkurunthandagam (Verse 23) and Kanchi Puranam"
   ],
   "legend": [
    "Legend of Sage Garga’s Enlightenment — Sage Garga performed intense penance here seeking spiritual intellect (Jnana). Lord Vishnu manifested as Karunakara Perumal (\"The Bestower of Compassion\"), showering His infinite grace (Karuna) upon the sage and instructing him on the sacred scriptures",
    "Preservation inside Ulagalandha Complex — Like Neeragam, the original sanctum of Karagam was integrated into the outer prakaram of the Ulagalandha Perumal temple complex during medieval structural restorations"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Thirukkurunthandagam (Verse 23)",
     "tamil": "நீரகம் மேவா ணெடுவரை மேலான் நிலத்திங்கள்* துண்டத்தாய் முனிவர் மூவர்* ஆரமுதே என்று அங்கு அலற்றி* காரகம் மேவா காளாய் எந்தாய்!",
     "transliteration": "Nīragam mēvā ṇeḍuvarai mēlān nilaththiṅgaḷ* Thuṇḍaththāy munivar mūvar* Āramudhē eṉṟu aṅgu alaṟṟi* Kāragam mēvā kāḷāy endhāy!",
     "wordMeanings": [
      [
       "Kāragam mēvā kāḷāy endhāy",
       "O heroic Lord residing at Thiru Karagam, my Master!"
      ],
      [
       "Āramudhē eṉṟu aṅgu alaṟṟi",
       "Hailed as the immortal nectar of compassion!"
      ]
     ],
     "significance": "Thirumangai Azhwar addresses Lord Karunakara of Karagam as his heroic Father (Kalai Endhai), whose boundless compassion redeems the surrendered jiva"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Sub-Shrine Location: Dedicated sanctum alcove located in the outer prakaram of Ulagalandha Perumal Temple",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing South holding Shankha and Chakra",
    "Thaayar Form: Padmasani Thayar seated in her inner niche",
    "Urchavar Form: Karunakaran cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Thirukkurunthandagam)",
    "Video Search Query: \"Kanchi Thiru Karagam Karunakara Perumal Temple Velukkudi\""
   ]
  }
 },
 "thirukkarvanam": {
  "serial": 81,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Preserved inside the Ulagalandha Perumal Temple Complex, Center of Kanchipuram Town, Tamil Nadu",
   "sthalaVriksham": "Vaazhai (Banana Tree - Musa acuminata)",
   "vimanam": "Pushkala Vimanam",
   "theertham": "Gauri Pushkarini",
   "posture": "Nindra Thirukkolam (Standing posture facing North)",
   "orientation": "Facing North",
   "gps": "12.8392° N, 79.7028° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "கள்வர் பெருமாள் / கார்வானத்தான் Sanskrit: चोरनाथ / कार्वाननाथ Transliteration: Kalvar Perumal / Kaarvanathan"
    },
    "thaayar": {
     "name": "கமலவல்லி தாயார் / கார்வான நாச்சியார் (Kamalavalli Thayar)",
     "legend": "Seated in dedicated reverence inside the sub-shrine facing North"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Kalvar (கள்வர்)"
    },
    "thaayar": {
     "name": "Kamalavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Enshrined Sub-Sanctum"
  },
  "puranam": {
   "prathyaksham": "Goddess Parvati, Lord Brahma, and Devas",
   "timeline": "Core iconography dates back to Pallava/Early Chola period (8th-10th Century CE) Maintained under ancient royal grants dedicated to the Ulagalandha temple complex",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi and Thirukkurunthandagam (Verse 23)"
   ],
   "legend": [
    "Legend of Parvati’s Penance & The Divine Thief (Kalvar) — Goddess Parvati performed penance in the dense dark forest (Kaarvanam) of Kanchipuram. Lord Vishnu appeared secretly behind the clouds like a rain-cloud (Kaar-Vannan) to watch over her penance without her knowledge. Parvati noticed His beautiful form stealing glances through the clouds and affectionately called Him Kalvar (\"The Divine Thief\")",
    "Preservation inside Ulagalandha Complex — Completes the 4-in-1 Divya Desam cluster housed within the Ulagalandha Perumal temple compound (#75 Ooragam, #79 Neeragam, #80 Karagam, and #81 Kaarvanam)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Thirukkurunthandagam (Verse 23)",
     "tamil": "நீரகம் மேவா ணெடுவரை மேலான் நிலத்திங்கள்* துண்டத்தாய் முனிவர் மூவர்* ஆரமுதே என்று அங்கு அலற்றி* காரகம் மேவா காளாய் எந்தாய்!",
     "transliteration": "Nīragam mēvā ṇeḍuvarai mēlān nilaththiṅgaḷ* Thuṇḍaththāy munivar mūvar* Āramudhē eṉṟu aṅgu alaṟṟi* Kāragam mēvā kāḷāy endhāy!",
     "wordMeanings": [
      [
       "Kāragam / Kārvana mēvā",
       "Residing in dark-clouded Kaarvanam"
      ],
      [
       "Kāḷāy endhāy",
       "O my Supreme Master!"
      ]
     ],
     "significance": "Thirumangai Azhwar praises Lord Kalvar of Kaarvanam as the rain-cloud complexioned Master (Kaar-Vannan) who steals away the accumulated sins of His devotees"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Sub-Shrine Location: Dedicated sanctum alcove located in the outer prakaram of Ulagalandha Perumal Temple",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing North holding Shankha and Chakra",
    "Thaayar Form: Kamalavalli Thayar seated in her inner niche",
    "Urchavar Form: Kalvar cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Thirukkurunthandagam)",
    "Video Search Query: \"Kanchi Thiru Kaarvanam Kalvar Perumal Temple Velukkudi\""
   ]
  }
 },
 "thiruvelukkai": {
  "serial": 82,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Vishnu Kanchi, Kanchipuram Town, Tamil Nadu. Located ~1 km from Varadharaja Perumal Temple and ~500 m from Ashtabujakaram Temple",
   "sthalaVriksham": "Nelli Tree (Amla / Gooseberry - Phyllanthus emblica)",
   "vimanam": "Kanaka Vimanam",
   "theertham": "Kanaka Pushkarini / Saraswathi Theertham",
   "posture": "Irundha Thirukkolam (Seated Yoga Narasimha posture facing East)",
   "orientation": "Facing East",
   "gps": "12.8214° N, 79.7118° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "அழகிய சிங்கர் / வேளுக்கை ஆள் Sanskrit: मुकुन्दनरसिंह / कामासिकानरसिंह Transliteration: Azhagiya Singar / Velukkai Aalaan"
    },
    "thaayar": {
     "name": "வேளுக்கைவல்லி தாயார் / அமிர்தவல்லி (Velukkaivalli Thayar / Amruthavalli)",
     "legend": "Seated in her dedicated independent shrine facing East within the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Azhagiya Singar (அழகிய சிங்கர்)"
    },
    "etymology": "Exquisite Panchaloha icon depicting Narasimha with four arms holding Shankha, Chakra, and showing Abhaya-Varada Mudras",
    "thaayar": {
     "name": "Velukkaivalli Thayar",
     "legend": "Accompanies Urchavar during festive processions and Narasimha Jayanthi"
    }
   },
   "sanctumNote": "Seated Yoga Narasimha Setup"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Prahlada, Kanva Maharishi, and Swami Vedanta Desikan",
   "timeline": "Core stone architecture dates to the Pallava period (8th Century CE), later renovated by Chola and Vijayanagara emperors Epigraphical records detail royal gifts of gold lamps and lands for conducting daily Narasimha Jayanthi rituals",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi (2.9) and Siriya Madal, Peyazhwar's Moondram Thiruvanthadhi, and Kamashikastakam"
   ],
   "legend": [
    "Legend of Kama-Asika & Protection of Brahma’s Yajna — When Lord Brahma performed his Ashwamedha Yajna at Kanchipuram, the demon Kapali sent ferocious dark forces to extinguish the sacrificial fire. Lord Vishnu manifested instantly as Narasimha. After vanquishing the demons, He chose to reside here peacefully out of His own desire (Kama-Asika = \"He who resides by His own preference\"), giving rise to the name Velukkai (Velirukkai)",
    "Kamashikastakam of Vedanta Desikan — Swami Vedanta Desikan composed the celebrated 8-verse hymn Kamashikastakam at this shrine, praising Lord Azhagiya Singar as the ultimate lion-headed savior who destroys the core fears of samsara"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     3
    ],
    [
     "pey",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "pey",
     "work": "Moondram Thiruvanthadhi (Verse 62)",
     "tamil": "சீரால் மலிந்த சிறப்புடைய வேளுக்கை* பேரான் தன் நாமங்கள் பேசாரேல் — பேராய* மன்மதனை வென்ற மதில்காஞ்சி அட்டபுயத்* தொன்மையான் நாமம் தொழுவார்க்கு என்னாம்?",
     "transliteration": "Sīrāl malindha siṟappuḍaiya vēḷukkai* Pērāṉ thaṉ nāmaṅgaḷ pēsārēl — pērāya* Manmadhanaik veṉṟa madhilkāñchi aṭṭapuyath* Thoṉmaiyāṉ nāmam thoḻuvārkku eṉṉām?",
     "wordMeanings": [
      [
       "Sīrāl malindha siṟappuḍaiya vēḷukkai",
       "Sacred Velukkai, renowned and abundant in spiritual glory"
      ],
      [
       "Pērāṉ thaṉ nāmaṅgaḷ pēsārēl",
       "If one does not chant the holy names of the Lord who resides there"
      ]
     ],
     "significance": "Peyazhwar establishes that worshipping the sweet, protective lion form of Azhagiya Singar at Velukkai is indispensable for completing one's spiritual journey in Kanchipuram"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram leading into a serene traditional courtyard",
    "Moolavar Form: Seated Yoga Narasimha deity (Irundha Thirukkolam) facing East inside the Garbhagriha",
    "Thaayar Form: Velukkaivalli Thayar seated gracefully in her dedicated inner shrine",
    "Urchavar Form: Azhagiya Singar cast in fine Panchaloha form with divine emblems"
   ],
   "literature": [
    "Project Madurai Text Archives (Moondram Thiruvanthadhi & Kamashikastakam)",
    "Video Search Query: \"Kanchi Thiruvelukkai Azhagiya Singar Temple History Velukkudi\""
   ]
  }
 },
 "thiruthanka": {
  "serial": 83,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Vishnu Kanchi, Kanchipuram Town, Tamil Nadu. Located ~1 km from Varadharaja Perumal Temple near Ashtabujakaram",
   "sthalaVriksham": "Vilvam Tree (Aegle marmelos)",
   "vimanam": "Shrikara Vimanam",
   "theertham": "Saraswathi Theertham",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East",
   "gps": "12.8258° N, 79.7122° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "விளக்கொளிப் பெருமாள் / திவ்யப்பிரகாசன் Sanskrit: दीपप्रकाश / प्रकाशविष्णु Transliteration: Deepa Prakasar Perumal / Vilakkoli Perumal"
    },
    "thaayar": {
     "name": "மரரகதவல்லி தாயார் / லட்சுமி (Maragathavalli Thayar)",
     "legend": "Seated in her dedicated independent shrine facing East inside the inner prakaram"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Deepa Prakasar (விளக்கொளிப் பெருமாள்)"
    },
    "etymology": "Fine Panchaloha standing icon holding Shankha and Chakra with Abhaya Mudra",
    "thaayar": {
     "name": "Maragathavalli Thayar",
     "legend": "Accompanies Urchavar during festive processions"
    }
   },
   "sanctumNote": "Standing Divine Light Setup"
  },
  "puranam": {
   "prathyaksham": "Lord Brahma, Saraswati, and Swami Vedanta Desikan",
   "timeline": "Core stone architecture built during early Chola period (10th Century CE) Heavily expanded by Vijayanagara rulers who built the shrine for Swami Vedanta Desikan and provided festival endowments",
   "literature": [
    "Recorded in Thirumangai Azhwar's Periya Thirumozhi (2.9 and 10.1), Saranagati Deepika, and Desika Prabandham"
   ],
   "legend": [
    "Legend of Brahma’s Yajna & The Cosmic Light (Deepa Prakasar) — When Lord Brahma was conducting his Ashwamedha Yajna, Goddess Saraswati (angry at being excluded) created total darkness across Kanchipuram with demonic help to disrupt the ritual. Lord Vishnu manifested as a towering, radiant cosmic beacon (Deepa Prakasar / Vilakkoli), illuminating the whole city, dispelling the pitch darkness, and allowing the Yajna to conclude successfully",
    "Birthplace of Swami Vedanta Desikan — Thiru Thangai is the sacred Avatarasthalam of Swami Vedanta Desikan (1268–1369 CE), one of the greatest acharyas of Srivaishnavism. The temple houses a dedicated shrine for Desikan containing his ancient Thaamra-Vigraha (bronze icon) installed during his lifetime",
    "Saranagati Deepika Composed Here — Swami Vedanta Desikan composed his famous 59-verse Vedantic masterpiece Saranagati Deepika in praise of Lord Deepa Prakasar"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     2
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (2.9.1)",
     "tamil": "தங் சுடராய் எங்கும் தோன்றி எரியும் விளக்கொளிப் பெருமாளை* செங்கண் மாலினைச் சிந்தித்து நாளும்* கொங்கு அலர் சோலைச் சூழ் தங்கத்து மேவிய* அங்கணனைக் கண்டு என் மனம் உய்ந்ததே!",
     "transliteration": "Thaṅ suḍarāy eṅgum thōṉṟi eriyum viḷakkoḷip perumāḷai* Seṅgaṇ māliṉaich chindhiththu nāḷum* Koṅgu alar sōlaich sūḻ thaṅgaththu mēviya* Aṅgaṇaṉaik kaṇḍu eṉ maṉam uyndhadhē!",
     "wordMeanings": [
      [
       "Seṅgaṇ māliṉaich chindhiththu nāḷum",
       "Meditating daily upon that red-eyed Supreme Lord"
      ],
      [
       "Sūḻ thaṅgaththu mēviya",
       "Residing at Thiru Thangai surrounded by flower-filled groves"
      ],
      [
       "Kaṇḍu eṉ maṉam uyndhadhē",
       "Beholding Him, my heart has attained eternal redemption!"
      ]
     ],
     "significance": "Thirumangai Azhwar praises Lord Deepa Prakasar as the eternal, self-luminous light (Vilakkoli) who shines within the soul to dispel ignorance and grant redemption"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 3-tiered east-facing Rajagopuram leading into a serene temple compound",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing East flanked by Sridevi and Bhudevi inside the Garbhagriha",
    "Swami Vedanta Desikan Shrine: Sacred birth-place shrine of Swami Vedanta Desikan within the inner prakaram",
    "Urchavar Form: Deepa Prakasar cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 2.9 & Saranagati Deepika)",
    "Video Search Query: \"Kanchi Deepa Prakasar Temple History Vedanta Desikan Velukkudi\""
   ]
  }
 },
 "thirukkalvanoor": {
  "serial": 84,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Preserved inside the Gayatri Mandapam / inner prakaram of Kamakshi Amman Siva-Shakti Temple, Kanchipuram Town, Tamil Nadu",
   "sthalaVriksham": "Shenbagam Tree (Michelia champaca)",
   "vimanam": "Vamana Vimanam",
   "theertham": "Nitya Pushkarini / Kama Koti Theertham",
   "posture": "Nindra Thirukkolam (Standing Varaha posture facing West)",
   "orientation": "Facing West",
   "gps": "12.8397° N, 79.7003° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "ஆதிவராகப் பெருமாள் / கள்வன் Sanskrit: आदिवराह / चोरविष्णु Transliteration: Adivaraha Perumal / Kalvan"
    },
    "thaayar": {
     "name": "அஞ்சிலைவல்லி தாயார் / அஞ்சலை நாச்சியார் (Anjilaivalli Thayar / Anjalai)",
     "legend": "Seated in dedicated reverence inside the sub-shrine facing West"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Adivarahan (ஆதிவராகன்)"
    },
    "etymology": "Fine Panchaloha standing Varaha icon holding Bhudevi on His lap/arm",
    "thaayar": {
     "name": "Anjilaivalli Thayar",
     "legend": "Accompanies Urchavar during festive rituals"
    }
   },
   "sanctumNote": "Shrine inside Kamakshi Amman Sanctum"
  },
  "puranam": {
   "prathyaksham": "Goddess Kamakshi (Parvati), Aswini Kumaras, and Devas",
   "timeline": "Core iconography dates to Pallava and early Chola periods (8th-10th Century CE) Preserved and maintained as an integral sanctum within the ancient Sri Kanchi Kamakshi Amman Temple management",
   "literature": [
    "Recorded in Thirumangai Azhwar's Thirukkurunthandagam (Verse 23) and Kanchi Puranam"
   ],
   "legend": [
    "Legend of Parvati’s Penance & The Hidden Varaha (Kalvanoor) — When Goddess Parvati was performing intense penance to marry Lord Siva at Kanchipuram, she felt embarrassed by her dark complexion. Lord Vishnu suggested she bathe in the sacred Kama Koti tank, whereupon she emerged glowing with a golden complexion (Gauri). While Parvati was praying, Lord Vishnu stood hidden nearby as Varaha, listening quietly to her intimate prayers. Noticing Him hiding, Parvati affectionately addressed Him as Kalvan (\"The Divine Hidden Thief\"), giving the shrine the name Thiru Kalvanoor",
    "Saiva-Shakti-Vaishnava Confluence — One of the three Divya Desams located inside non-Vaishnavite complexes in Kanchipuram (along with #78 Nilathingal Thundam inside Ekambareswarar Temple and #84 Kalvanoor inside Kamakshi Amman Temple)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Thirukkurunthandagam (Verse 23)",
     "tamil": "நீரகம் மேவா ணெடுவரை மேலான் நிலத்திங்கள்* துண்டத்தாய் முனிவர் மூவர்* ஆரமுதே என்று அங்கு அலற்றி* காரகம் மேவா காளாய் எந்தாய்!",
     "transliteration": "Nīragam mēvā ṇeḍuvarai mēlān nilaththiṅgaḷ* Thuṇḍaththāy munivar mūvar* Āramudhē eṉṟu aṅgu alaṟṟi* Kāragam mēvā kāḷāy endhāy!",
     "wordMeanings": [
      [
       "Neḍuvarai mēlān / Kalvanoor mēvā",
       "Residing atop the hill / inside Kalvanoor"
      ],
      [
       "Munivar mūvar āramudhē eṉṟu",
       "Hailed by the sages as immortal nectar"
      ],
      [
       "Kāḷāy endhāy",
       "O my Supreme Master!"
      ]
     ],
     "significance": "Thirumangai Azhwar praises Lord Adivaraha of Kalvanoor as the hidden protector who quietly watches over the spiritual efforts of every devotee"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Gayatri Mandapam Location: Sanctum niche located inside the inner Gayatri Mandapam of Sri Kamakshi Amman Temple",
    "Moolavar Form: Small standing Varaha deity (Nindra Thirukkolam) facing West holding Shankha and Chakra",
    "Thaayar Form: Anjilaivalli Thayar depicted alongside the Varaha sanctum",
    "Urchavar Form: Adivarahan cast in fine Panchaloha form"
   ],
   "literature": [
    "Project Madurai Text Archives (Thirukkurunthandagam)",
    "Video Search Query: \"Kanchi Kalvanoor Adivaraha Kamakshi Temple Velukkudi\""
   ]
  }
 },
 "triplicane": {
  "serial": 85,
  "profile": {
   "regionNote": "Thondai Naadu",
   "location": "Triplicane (Thiruvallikkeni), Chennai City, Tamil Nadu. Located ~3 km from Chennai Central Railway Station along the Bay of Bengal coast",
   "sthalaVriksham": "Magizham Tree (Mimusops elengi)",
   "vimanam": "Ananthavardhana Vimanam",
   "theertham": "Kairavini Pushkarini (Lily Pond)",
   "posture": "Nindra Thirukkolam (Standing posture facing East). Unique feature: Depicts Lord Krishna as Parthasarathy with war-scarred face, holding the Shankha, with no weapons of war (no Chakra)",
   "orientation": "Facing East",
   "gps": "13.0536° N, 80.2764° E"
  },
  "deities": {
   "moolavar": {
    "names": {
     "tamil": "பார்த்தசாரதிப் பெருமாள் / வெங்கடேகிருஷ்ணன் Sanskrit: पार्थसारथि / वृन्दारण्यविष्णु Transliteration: Parthasarathy Perumal / Venkatakrishnan"
    },
    "thaayar": {
     "name": "ருக்மிணி பிராட்டி (Rukmini Piratti) & வேதவல்லி தாயார் (Vedavalli Thayar)",
     "legend": "Rukmini stands directly beside Moolavar in the main sanctum. Vedavalli Thayar has an independent shrine facing East"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Parthasarathy / Venkatakrishnan (பார்த்தசாரதி)"
    },
    "etymology": "Panchaloha standing icon bearing battle scars (arrow marks) on His face from the Mahabharata war",
    "thaayar": {
     "name": "Rukmini & Vedavalli",
     "legend": "Positioned beside Urchavar during festive processions and the Vaikunta Ekadashi festival"
    }
   },
   "sanctumNote": "Panchancha (5-Avatara) Shrine Setup"
  },
  "puranam": {
   "prathyaksham": "King Sumathi, Atri Maharishi, Saptarishis, and Vedavalli Thayar",
   "timeline": "Structural origins date back to Pallava Emperor Dantivarman (8th Century CE) Expanded extensively by Chola and Vijayanagara kings. Inscriptions record grants for maintaining the Kairavini Pushkarini and daily offerings (Prasadam)",
   "literature": [
    "Breathtakingly praised in Thirumangai Azhwar's Periya Thirumozhi (2.3 - 10 Pasurams), Peyazhwar's Moondram Thiruvanthadhi, and Thirumalisai Azhwar's Nanmugan Thiruvanthadhi"
   ],
   "legend": [
    "Legend of the Charioteer Vow & Battle Scars — During the Mahabharata war, Lord Krishna served as Arjuna's charioteer (Parthasarathy) and vowed not to handle weapons. He absorbed the volley of arrows fired by Bhishma and Karna onto His own face to protect Arjuna. The Moolavar and Urchavar icons at Triplicane clearly retain these scar marks of arrows on their cheeks. True to His vow, He holds only the divine Conch (Panchajanya) and no Chakra in the main sanctum",
    "The Sacred Lily Pond (Kairavini) — Goddess Mahalakshmi performed penance here in a pond of white lilies (Alli) to marry Lord Ranganatha as Vedavalli Thayar",
    "King Sumathi’s Penance — King Sumathi prayed to Lord Venkateswara of Tirupati to appear as the charioteer Krishna. Lord Venkateswara granted his wish by manifesting as Venkatakrishnan / Parthasarathy at Triplicane",
    "Five Deities in One Complex — Houses shrines for five distinct forms: Parthasarathy (Krishna), Ranganatha, Rama, Narasimha, and Gajendra Varadha"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ],
    [
     "pey",
     1
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "work": "Periya Thirumozhi (2.3.1)",
     "tamil": "வில்லால் இலங்கை மலங்கச் சரம் துரந்த* வல்லாளன் வீற்றிருந்த வண்டூர் தண் அல்லிக்கேணி* நல்லானை நாளும் நல் வேதியர்கள் ஓதும்* சொல்லால் துதித்து என் மனம் உய்ந்ததே!",
     "transliteration": "Villāl ilaṅgai malaṅgach saram thurandha* Vallāḷaṉ vīṟṟirundha vaṇḍūr thaṇ allikkēṇi* Nallāṉai nāḷum nal vēdhiyargaḷ ōdhum* Sollāl thudhiththu eṉ maṉam uyndhadhē!",
     "wordMeanings": [
      [
       "Villāl ilaṅgai malaṅgach saram thurandha",
       "The heroic Lord who unleashed arrows from His bow to crush Lanka"
      ],
      [
       "Vallāḷaṉ vīṟṟirundha",
       "The Supreme Sovereign who sits in royal majesty"
      ],
      [
       "Thaṇ allikkēṇi",
       "At cool Thiruvallikkeni (Triplicane)"
      ],
      [
       "Nal vēdhiyargaḷ ōdhum sollāl thudhiththu",
       "Praising Him with the sacred Vedic chants sung daily by righteous Vedic scholars"
      ],
      [
       "Eṉ maṉam uyndhadhē",
       "My heart has attained eternal redemption!"
      ]
     ],
     "significance": "Thirumangai Azhwar celebrates Lord Parthasarathy at Triplicane as the supreme hero who protects those who seek refuge in Him, surrounded by the continuous chanting of the Vedas"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Majestic 5-tiered east-facing Rajagopuram leading into the vast temple courtyard in Triplicane",
    "Moolavar Form: Standing deity (Nindra Thirukkolam) facing East depicting Parthasarathy with moustache and battle scars, flanked by Rukmini and family",
    "Kairavini Pushkarini: Ancient sacred lily pond situated directly in front of the eastern temple tower",
    "Urchavar Form: Parthasarathy cast in fine Panchaloha showing distinct arrow scar marks on His cheeks"
   ],
   "literature": [
    "Project Madurai Text Archives (Periya Thirumozhi 2.3)",
    "Video Search Query: \"Thiruvallikkeni Parthasarathy Temple History Velukkudi\""
   ]
  }
 },
 "tiruvallur": {
  "serial": 86,
  "profile": {
   "regionNote": "Thondai Naadu",
   "vimanam": "Vijayakoti Vimanam",
   "theertham": "Hridhayathaapa Naasini Pushkarini",
   "sthalaVriksham": "Shenbagam (Champaka)",
   "posture": "Kidantha Thirukkolam (Bhujanga Sayanam / Reclining posture facing East on Adisesha)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ வீரராகவ பெருமாள்"
    },
    "thaayar": {
     "name": "Kanakavalli Thaayar / Vasumathi"
    },
    "photos": [
     {
      "src": `${import.meta.env.BASE_URL}photos/desam-86.jpg`,
      "alt": "THIRUVALLUR — dossier photograph",
      "credit": "Product Owner dossier (Divya Desams 86-90)"
     }
    ]
   },
   "urchavar": {
    "names": {
     "translit": "Vaidya Veeraraghavan",
     "tamil": "வைத்திய வீரராகவன்"
    },
    "etymology": "The Divine Supreme Healer who cures chronic physical and spiritual illnesses (Bhavaroga)",
    "thaayar": {
     "name": "Kanakavalli Thaayar",
     "legend": "Present alongside Urchavar during all external processions and Brahmotsavam events"
    }
   },
   "sanctumNote": "Single Consort Shrine Structure"
  },
  "puranam": {
   "prathyaksham": "Manifested directly to Sage Salihotra and King Dharmasena",
   "timeline": "Construction Era: Earliest structures date back to the 8th–9th century Pallava Dynasty Renovations & Patrons: Substantially expanded by Chola kings and later governed under the administrative stewardship of the Ahobila Mutt Invasions & Protection: Survived regional conflicts during the Carnatic Wars; temple administrative control was formally entrusted to the 44th Pontiff of Sri Ahobila Mutt",
   "literature": [
    "Mentioned in the Markandeya Purana under Tondaimandala Mahatmyam"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Sage Salihotra performed severe penance at this place, taking a vow to feed a guest before consuming his daily meal of pounded grain flour. Lord Vishnu tested him by arriving as an aged, hungry Brahmin. Salihotra offered his entire meal. The guest requested more, and Salihotra gave his own portion as well. The Brahmin then asked in Tamil, \"Evvulul Kidanpadhu?\" (\"In which place shall I sleep?\"). Salihotra pointed to his humble hut. The Lord reclined inside the hut and transformed into His divine form as Veeraraghavan, blessing Salihotra with salvation and granting the sacred water body the power to relieve all human ailments"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     11
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "tamil": "எவ்வெள் கிடந்த எம்மான் உலகேழும்,உய்வண்ணம் பெற்ற தொருசீரான்,மெய்வண்ணம் முற்று முழுதுணர்ந்தார் மேவாதே,எவ்வண்ணம் நிற்பா ரிதே",
     "transliteration": "Evvul kidantha emmaan ulageazhum,Uivannam petra thorusheeraan,Meivannam mutru muzhudhunarndhaar mevaadhe,Evvannam nirpaaridhe",
     "wordMeanings": [
      [
       "Evvul kidantha emmaan",
       "My Lord who reclines at Thiruvevvul"
      ],
      [
       "Ulageazhum",
       "All the seven worlds"
      ],
      [
       "Uivannam petra",
       "Attained the means of redemption"
      ],
      [
       "Thorusheeraan",
       "Possessing matchless, radiant qualities"
      ],
      [
       "Meivannam",
       "The absolute truth of ultimate reality"
      ],
      [
       "Nirpaaridhe",
       "How can anyone exist without contemplating Him?"
      ]
     ],
     "significance": "Emphasizes absolute surrender (Saranagathi) to the Lord who actively seeks out the jiva to remove bodily and mental affliction"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 7-tiered soaring gateway facing East along the tank street",
    "Moolavar Form: Massive reclining deity on Adisesha with His right hand placed on Sage Salihotra's head",
    "Thaayar Form: Seated Padmasana icon in a separate shrine holding lotus buds",
    "Urchavar Form: Processional deity carrying five weapons (Panchayudha)"
   ],
   "literature": [
    "Project Madurai — Thirumangai Azhwar Periya Thirumozhi"
   ],
   "videoSearches": [
    "Velukkudi Krishnan Thiruvevvul Upanyasam",
    "Thiruvallur Veeraraghavaswamy Brahmotsavam"
   ]
  }
 },
 "mahabalipuram": {
  "serial": 88,
  "profile": {
   "regionNote": "Thondai Naadu",
   "vimanam": "Ganganakondaan Vimanam / Ananda Vimanam",
   "theertham": "Pundareeka Pushkarini / Pundarika Saras",
   "sthalaVriksham": "Punnai (Alexandrian Laurel)",
   "posture": "Kidantha Thirukkolam (Reclining directly on the floor/ground facing East without Adisesha)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ ஸ்தலஸயன பெருமாள்"
    },
    "thaayar": {
     "name": "Nilamangai Thaayar"
    },
    "photos": [
     {
      "src": `${import.meta.env.BASE_URL}photos/desam-88.jpg`,
      "alt": "THIRUKADALMALLAI — dossier photograph",
      "credit": "Product Owner dossier (Divya Desams 86-90)"
     }
    ]
   },
   "urchavar": {
    "names": {
     "translit": "Ulauyyuva Perumal / Ahobila Varadhan",
     "tamil": "உலகுய்யவந்த பெருமாள்"
    },
    "thaayar": {
     "name": "Sri Bhoo Devis",
     "legend": "Flanked by both consorts for public processions"
    }
   },
   "sanctumNote": "Unique Floor Reclining"
  },
  "puranam": {
   "timeline": "Construction Era: 7th–8th century Pallava rock-cut architecture, later expanded into a structural temple complex by Vijayanagara and Nayak rulers Inscriptions: Pallava and Chola inscriptions document royal endowments for maritime travelers and local temple worship",
   "literature": [
    "Featured in Pallava epigraphs and classical Tamil literature documenting Mamallapuram's maritime history"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Sage Pundarika collected golden lotus flowers from his pond to offer to Lord Vishnu reclining on the Milk Ocean. Finding the ocean blocking his path, the persistent sage began scooping out the sea water with a small shell. Touched by his devotion, Lord Vishnu appeared as an old man, asked for food, and sent Pundarika to fetch it. When the sage returned, he saw the Lord reclining directly on the bare ground, adorned with the very lotus flower Pundarika had plucked",
    "Birthplace of Boodhath Azhwar — Thirukadalmallai is the sacred Avathara Sthalam (birthplace) of Boodhath Azhwar, who incarnated in a lotus flower in the temple tank"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     26
    ],
    [
     "bhoothath",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "bhoothath",
     "tamil": "தமருகமு றுவண்ண மாயினானும்தரணியும் வானமும் தானாயினானும்அமரர்களடி போற்ற நின்றானும்கடல்லலைச் சயனத்தே யுறங்கும் மாயோனே",
     "transliteration": "Thamarugamu ruvanna maayinaanumTharaniyum vaanamum thaanayinanaumAmarargaladi potra ninraanumKadalmallaich sayanathe yurangum maayone",
     "wordMeanings": [
      [
       "Thamarugam",
       "The Form loved by His devotees"
      ],
      [
       "Tharaniyum vaanamum",
       "Earth and the heavens"
      ],
      [
       "Kadalmallai sayanathe",
       "Reclining at the seaside shrine of Kadalmallai"
      ],
      [
       "Urangum maayone",
       "The wondrous Supreme Lord resting in yogic sleep"
      ]
     ],
     "significance": "Celebrates the Lord's supreme cosmic nature alongside His intimate accessibility at this seaside shrine"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Distinctive 7-tiered tower showcasing Vijayanagara architectural influences",
    "Moolavar Form: Unique floor-reclining image with one hand resting on His chest (Jnana Mudra)",
    "Thaayar Form: Separate shrine featuring Nilamangai Thaayar in seated posture",
    "Urchavar Form: Metallic icon holding lotus buds alongside Sage Pundarika"
   ],
   "literature": [
    "Koyil.org — Thirukadalmallai Sthala Puranam"
   ],
   "videoSearches": [
    "Thirukadalmallai Sthala Sayana Perumal",
    "Boodhath Azhwar Avathara Sthalam"
   ]
  }
 },
 "thirukkovilur": {
  "serial": 92,
  "profile": {
   "regionNote": "Naduvu Naadu",
   "vimanam": "Srikara Vimanam",
   "theertham": "Pennai River / Chakra Theertham",
   "sthalaVriksham": "Punnai Tree",
   "posture": "Nindra Thirukkolam (Trivikrama stance — left leg raised to measuring the heavens; facing East)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ த்ரிவிக்ரம பெருமாள்"
    },
    "thaayar": {
     "name": "Poongothai Thaayar / Pushpavalli"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Aayanar / Gopalan",
     "tamil": "ஆயனார் / கோபாலன்"
    },
    "etymology": "The Divine Cowherd deity carrying a flute and shepherd staff",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Flank Urchavar during temple festivals"
    }
   },
   "sanctumNote": "Unique Wooden Iconography"
  },
  "puranam": {
   "prathyaksham": "Manifested to King Mahabali, Sage Mrikandu, and the First Three Azhwars (Mudal Azhwargal)",
   "timeline": "Construction Era: Medieval Chola foundation rebuilt into a massive stone complex under Rajendra Chola I and later expanded by Vijayanagara Kings Inscriptions: Epigraphs detail endowments from Rajaraja Chola I and the Chutu Nagas",
   "literature": [
    "Detailed in the Koyil Olugu, Padma Purana, and Sangam literature"
   ],
   "legend": [
    "Birthplace of the 4000 Divya Prabandham — During a heavy downpour, Poigai Azhwar, Boodhath Azhwar, and Peyazhwar randomly took shelter inside the narrow corridor (Dehalee) of a local house. As space narrowed, a fourth person squeezed in between them in the dark. Realizing it was Lord Vishnu Himself, Poigai Azhwar lit the lamp of the Earth and Sun (Vaiyam Thagaliyaga), Boodhath Azhwar lit the lamp of Love and Devotion (Anbe Thagaliyaga), and Peyazhwar directly visualized the divine form of Mahalakshmi and Narayana (Thirukkanden Ponmeni Kanden), triggering the birth of the 4000 Divya Prabandham"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "poigai",
     1
    ],
    [
     "bhoothath",
     2
    ],
    [
     "pey",
     2
    ],
    [
     "thirumangai",
     16
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "poigai",
     "tamil": "வைய தகளியா வார்கடலே நெய்யாக,வெய்ய கதிரோன் விளக்காக, - செய்யசுடராழி யானடிக்கே சூட்டினேன் சொல்மாலை,இடராழி நீங்குகவே யென்று",
     "transliteration": "Vaiyam thagaliyaa vaarkadale neyyaaga,Veyya kadhiron vilakkaaga - seyya,Sudaraazhi yaanadikke soottinen solmaalai,Idaraazhi neengugave yendru",
     "wordMeanings": [
      [
       "Vaiyam thagaliyaa",
       "The entire Earth as the lamp bowl"
      ],
      [
       "Vaarkadale neyyaaga",
       "The surrounding oceans as the lamp oil"
      ],
      [
       "Veyya kadhiron vilakkaaga",
       "The glowing Sun as the burning wick"
      ],
      [
       "Idaraazhi neengugave",
       "To eliminate the ocean of human suffering"
      ]
     ],
     "significance": "Marks the foundational verse of the entire Dravida Veda (Nalayira Divya Prabandham)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 11-tiered 192-foot soaring gateway tower — one of the tallest in South India",
    "Moolavar Form: Gigantic wooden sculpture of Trivikrama with raised leg reaching the ceiling",
    "Thaayar Form: Separate shrine holding Poongothai Thaayar in seated grace",
    "Urchavar Form: Metal icon holding a shepherd's crook and flute"
   ],
   "literature": [
    "Dravida Veda — Mudal Azhwargal Prabandham Archives"
   ],
   "videoSearches": [
    "Thirukoilur Trivikraman Temple History",
    "Mudal Azhwargal Avathara Sthalam"
   ]
  }
 },
 "tirupati": {
  "serial": 96,
  "profile": {
   "regionNote": "Vada Naadu (Northern Region)",
   "vimanam": "Ananda Nilaya Vimanam (Gold-gilded dome)",
   "theertham": "Swami Pushkarini / Papavanasam / Akasa Ganga",
   "sthalaVriksham": "Tamarind Tree (Tirumala Tamarind) / Shenbagam",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ வேங்கடேஶ்வர பெருமாள்"
    },
    "thaayar": {
     "name": "Padmavathi Thaayar / Alarmelmangai"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Malayappa Swamy",
     "tamil": "மலையப்ப சுவாமி"
    },
    "etymology": "\"The Lord of the Hill\" — discovered in a hidden ravine named Malayappan Konai",
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompany Malayappa Swamy during all daily Sevas and annual Brahmotsavams"
    }
   },
   "sanctumNote": "Solitary Moolavar with Invisible Consort"
  },
  "puranam": {
   "prathyaksham": "Manifested to Lord Brahma, King Thondaiman, Ananthazhwar, and Sri Ramanuja",
   "timeline": "Construction Era: Pre-Pallava origins expanded by Pallava Queen Samavai (966 CE), Chola Kings (Rajaraja I), and Pandyan Rulers Golden Age: Vijayanagara Emperor Krishnadevaraya visited seven times, gilding the Ananda Nilayam and donating jewel-encrusted crowns Administrative Reformation: Sri Ramanuja established temple rituals, defined the Pancharatra Agama framework, and settled sectarian disputes by confirming the deity as Lord Vishnu using the Conch and Discus test",
   "literature": [
    "Mentioned in Sangam literature (Akananuru, Purananuru), Rig Veda, Varaha Purana, and Padma Purana"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Sage Bhrigu tested the Trimurtis to find who possessed absolute Sathva Guna. Finding Lord Vishnu sleeping, Bhrigu kicked His chest. Vishnu calmly massaged the sage's foot, neutralizing his pride. Outraged by this disrespect to Her abode, Lakshmi left Vaikuntha. Vishnu descended to Earth as Srinivasa on the Venkatadri hill. He married Princess Padmavathi (an avatar of Vedavathi), taking a loan from Kubera for wedding expenses, promising to repay the interest until the end of Kali Yuga"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     52
    ],
    [
     "thirumangai",
     61
    ],
    [
     "poigai",
     10
    ],
    [
     "bhoothath",
     9
    ],
    [
     "pey",
     19
    ],
    [
     "kulasekhara",
     11
    ],
    [
     "thirumazhisai",
     14
    ],
    [
     "periyazhwar",
     7
    ],
    [
     "andal",
     16
    ],
    [
     "thiruppaan",
     3
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "tamil": "அகலகில்லேன் இறையும் என்று அலர்மேல் மங்கை உறை மார்பா!,நிகரில் புகழாய்! உலக மூன் றுடையாய்! என்னை ஆள்வானே!,நிகரில் அமரர் முனிக்கணங்கள் விரும்பும் திருவேங்கடத்தானே!,புகல் ஒன்று இல்லா அடியேன் உன் அடிக்கீழ் அமர்ந்து புகுந்தேனே",
     "transliteration": "Agalagillen iraiyum endru alarmel mangai urai maarbaa!Nigaril pugazhaai! Ulaga moon rudaiyaai! Ennai aalvaane!Nigaril amarar munikkanangal virumbum thiruvengadathaane!Pugal ondru illaa adiyean un adikkeezh amardhu pugundhene",
     "wordMeanings": [
      [
       "Alarmel mangai urai maarbaa",
       "O Lord whose chest is the abode of Sri Alarmelmangai, who never parts from You even for a moment!"
      ],
      [
       "Thiruvengadathaane",
       "O Lord of Thiruvengadam desired by celestials and sages!"
      ],
      [
       "Pugal ondru illaa adiyean",
       "Having no other refuge"
      ],
      [
       "Un adikkeezh amardhu pugundhene",
       "I surrender completely at Your holy feet"
      ]
     ],
     "significance": "The foundational verse for Saranagathi (Prapatti) in Sri Vaishnava theology, establishing the dual mediation of Thaayar and Perumal"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Padi Kavali Maha Dwaram (outer gateway) and 3-tiered inner Ananda Nilayam Vimanam fully plated in gold",
    "Moolavar Form: Self-manifested (Swayambhu) 8-foot standing icon with Katyavalambita posture and Shaligram silk attire",
    "Thaayar Form: Golden chest relief on Moolavar; full independent deity seated on lotus at Tiruchanur",
    "Urchavar Form: Malayappa Swamy carrying Panchayudha flanked by Sridevi and Bhudevi"
   ],
   "literature": [
    "Koyil.org — Tirumala Divya Desam History"
   ],
   "videoSearches": [
    "Velukkudi Krishnan Thiruvengadam Upanyasam",
    "Tirumala Ananda Nilayam History"
   ]
  }
 },
 "ahobilam": {
  "serial": 97,
  "profile": {
   "regionNote": "Vada Naadu",
   "vimanam": "Guha Viswa Vimanam",
   "theertham": "Bhavanasini River / Rakthakundam",
   "sthalaVriksham": "Sandalwood Tree / Bamboo",
   "posture": "Various forms across 9 shrines (Sitting, Standing, Emerging from Pillar; facing East/North)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ அஹோபில நரஸிம்ஹ பெருமாள்"
    },
    "thaayar": {
     "name": "Chenchu Lakshmi / Amruthavalli Thaayar"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Prahlada Varadhan / Jwala Narasimhan",
     "tamil": "ப்ரஹ்லாத வரதன்"
    },
    "thaayar": {
     "name": "Sridevi, Bhudevi, and Chenchu Lakshmi",
     "legend": "Flank Urchavar in Lower Ahobilam for public worship"
    }
   },
   "sanctumNote": "Nava Narasimha Complex"
  },
  "puranam": {
   "timeline": "Construction Era: Ancient cave shrines enclosed into structural temples by Vijayanagara rulers (14th–16th century CE) Patronage: Imperial patronage from Devaraya II and Krishnadevaraya",
   "literature": [
    "Detailed in the Nrisimha Purana, Brahmanda Purana, and Ahobila Kaifiyat"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Ahobilam is the exact cosmic locus where Lord Narasimha emerged from the palace pillar (Ugra Stambham) to disembowel the demon king Hiranyakasipu and save His child devotee Prahlada. After slaying the demon, His fury burned the mountain. Lakshmi descended as Chenchu Lakshmi, marrying Narasimha to transform His fierce form into Malola Narasimha (\"He who is beloved of Lakshmi\")",
    "Seat of Sri Ahobila Mutt — Founded here in 1398 CE by Kidambi Srinivasacharya (Sri Adivan Satakopa Yati), instructed directly by Lord Malola Narasimha who jumped into his hands to become the traveling deity of the Mutt"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "tamil": "மெய்த்துக் கூறிய வெந்சொல் இரணியன்,ஆகம் பிளந்த அரிய உருவமாய்,எய்த்துக் கூப்பிடும் எங்களுக் கின்னருள்,செய்த்து நிற்பது சிங்கவேள் குன்றமே",
     "transliteration": "Meithuk kooriya vensol iraniyan,Aagam pilandha ariya uruvamaai,Eithuk kooppidum engaluk kinnarul,Seithu nirpadhu singavel kundrame",
     "wordMeanings": [
      [
       "Vensol iraniyan aagam pilandha",
       "Splitting open the chest of harsh-worded Hiranyakasipu"
      ],
      [
       "Ariya uruvamaai",
       "In the terrifying hybrid Lion-Man form"
      ],
      [
       "Engaluk kinnarul seithu",
       "Bestowing sweet grace on us who call out in distress"
      ],
      [
       "Singavel kundrame",
       "Resides at the sacred hill of Singavelkundram (Ahobilam)"
      ]
     ],
     "significance": "Highlights the Lord's immediate protection of surrendered souls (Abhaya Pradhanatha)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Lower Ahobilam 5-tiered entrance tower; Upper Ahobilam features natural mountain cave entrances",
    "Moolavar Form: Self-manifested cave rock formations depicting Ugra Narasimha disemboweling Hiranyakasipu",
    "Thaayar Form: Chenchu Lakshmi seated gracefully alongside Malola Narasimha",
    "Urchavar Form: Prahlada Varadhan carrying weapons alongside small golden Malola Narasimha deity"
   ],
   "literature": [
    "Ahobila Mutt Official Archives"
   ],
   "videoSearches": [
    "Nava Narasimha Ahobilam Yatra",
    "Velukkudi Krishnan Ahobilam Upanyasam"
   ]
  }
 },
 "salagramam": {
  "serial": 98,
  "profile": {
   "regionNote": "Vada Naadu",
   "vimanam": "Kanaka Vimanam",
   "theertham": "Gandaki River / 108 Dhara (Bull-headed water spouts) / Chakra Kunda",
   "sthalaVriksham": "Himalayan Pine / Birch (Bhurja Patra)",
   "posture": "Nindra Thirukkolam (Standing posture facing South)",
   "orientation": "Facing South"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ ஸாளக்ராம பெருமாள்"
    },
    "thaayar": {
     "name": "Sridevi & Bhudevi / Sridevi Thaayar"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Saligrama Perumal"
    },
    "thaayar": {
     "name": "Sridevi and Bhudevi",
     "legend": "Accompany Urchavar during sacred festivals"
    }
   },
   "sanctumNote": "Syncretic Tibetan-Dravidian Sanctum"
  },
  "puranam": {
   "prathyaksham": "Manifested to Brahma, Gandaki River goddess, Vrinda, and Sage Kandu",
   "timeline": "Origins: Ancient Himalayan pilgrimage site referenced in Hindu epics and Tibetan Buddhist tradition (Chumig Gyatsa) Royal Patronage: Enriched by the Malla Kings of Nepal and Shah Dynasty rulers who established regular worship trusts (Guthi)",
   "literature": [
    "Detailed in the Vishnu Purana, Garuda Purana, and Gandaki Mahatmyam"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Lord Vishnu cursed the demon king Jalandhara. His virtuous wife Vrinda cursed Vishnu in return to transform into stone. Accepting the curse, Lord Vishnu assumed the form of sacred black fossil stones (Salagramas) along the banks of the Gandaki River. Every Shaligram stone found in this river bears natural wheel (Chakra) markings and is worshipped without any formal consecration (Samprokshanam)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "tamil": "கலங்க வுலகம் முன் நீரினுக்குள்,எலங்க ஒருகாலத் தெயிறுதீண்டிக்,சலங்கொண்டு எடுத்தானைச் சாளக்கிராமத்,துலங்கக் கண்டேனுக் கென்னையுறு கவலையே",
     "transliteration": "Kalanga vulagam mun neerinukkul,Elanga orukaalat theyirudheendi,Salangondru eduthaanaich saalakkiraamat,Thulangak kandeenuk kennaiyuru kavalaiye",
     "wordMeanings": [
      [
       "Neerinukkul salangondru eduthaanai",
       "The Lord who lifted Earth from the cosmic waters as Varaha"
      ],
      [
       "Saalakkiraamath thulangak kandeenuk",
       "Having seen Him shining in Salagramam"
      ],
      [
       "Ennaiyuru kavalaiye",
       "What worry can possibly touch me anymore?"
      ]
     ],
     "significance": "Affirms that worshipping the Lord at Salagramam destroys all karmic fears and guarantees liberation"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Pagoda-style Nepali wooden architecture against snow-capped Himalayan peaks",
    "Moolavar Form: Gold-cast standing image of Lord Vishnu holding Conch, Discus, Mace, and Lotus",
    "Thaayar Form: Metal icon standing beside Moolavar",
    "Urchavar Form: Brass processional deity placed near the 108 freeze-water spouts"
   ],
   "literature": [
    "Project Madurai — Thirumangai Azhwar Salagramam Pasurams"
   ],
   "videoSearches": [
    "Muktinath Salagramam Yatra",
    "Velukkudi Krishnan Salagramam Upanyasam"
   ]
  }
 },
 "badari": {
  "serial": 99,
  "profile": {
   "regionNote": "Vada Naadu",
   "vimanam": "Thapta Kanchana Vimanam (Gold-gilded roof)",
   "theertham": "Tapt Kund (Hot thermal spring) / Rishi Ganga / Alaknanda",
   "sthalaVriksham": "Badari Tree (Jujube / Wild Berry)",
   "posture": "Irundha Thirukkolam (Padmasana / Meditative sitting posture facing East)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ பத்ரிநாராயண பெருமாள்"
    },
    "thaayar": {
     "name": "Arvindavalli Thaayar / Badri Vishal"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Badrinarayanan / Uddhava"
    },
    "etymology": "Portable brass deity moved to Pandukeshwar during winter closure",
    "thaayar": {
     "name": "Arvindavalli Thaayar",
     "legend": "Revered alongside Urchavar during seasonal temple rituals"
    }
   },
   "sanctumNote": "Meditative Black Shaligram Form"
  },
  "puranam": {
   "prathyaksham": "Manifested to Sage Nara, Sage Narayana, Narada, Uddhava, and Adi Shankaracharya",
   "timeline": "Restoration by Adi Shankaracharya: In the 8th century CE, Adi Shankaracharya retrieved the submerged Shaligram idol of Badrinarayana from the Narad Kund and consecrated it inside the temple Pujari Tradition: Daily worship is conducted by traditional Nambudiri Brahmins (Rawal) from Kerala",
   "literature": [
    "Extensively praised in the Srimad Bhagavatham, Mahabharata (Santi Parva), Skanda Purana, and Padma Purana"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Lord Vishnu performed intense tapas here for universal peace. Goddess Lakshmi took the form of a jujube tree (Badari) to shade Him from extreme weather. Pleased with Her devotion, Vishnu declared that Her name (Badri) would precede His (Nath). This is the cosmic origin seat where Lord Narayana revealed the sacred Ashtakshara Maha Mantra (\"Om Namo Narayanaya\") to Sage Nara, which was later transmitted down the lineage of Acharyas"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     18
    ],
    [
     "periyazhwar",
     4
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "tamil": "பெருகு மதவேழ மாபிடிக்கு முன்னின்று,இருகண் மலரினிய தேனளிக்கும் வண்டே!,பெருகும் புனல்பத்ரி யாராமத் துள்ளான்,கருகுங் கடல்ல வண்ணன் என்னுள்ளத் துள்ளானே",
     "transliteration": "Perugu madhavazha maapidikku munnindru,Irukan malariniya theanalikkum vande!Perugum punalbadhri yaaraamad thullaan,Karugung kadal vannan ennullad thullane",
     "wordMeanings": [
      [
       "Perugum punalbadhri yaaraamad thullaan",
       "The Lord who resides in Badarikashramam amidst flowing streams"
      ],
      [
       "Karugung kadal vannan",
       "Whose complexioned form resembles dark oceanic waves"
      ],
      [
       "Ennullad thullane",
       "Resides forever inside my heart!"
      ]
     ],
     "significance": "Establishes that the remote Himalayan Supreme Lord of Badari takes permanent residence within the heart of a surrendered devotee"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Colorful, brightly painted arched facade against snow-draped Himalayan mountains",
    "Moolavar Form: Black Shaligram icon seated in Padmasana with hands in Dhyana Mudra",
    "Thaayar Form: Seated image of Arvindavalli Thaayar to the left of Moolavar",
    "Urchavar Form: Brass icon of Badrinarayanan carrying silver umbrella"
   ],
   "literature": [
    "Dravida Veda — Badrinath Azhwar Pasuram Commentary"
   ],
   "videoSearches": [
    "Badrinath Divya Desam History",
    "Velukkudi Krishnan Badarikashramam Upanyasam"
   ]
  }
 },
 "devaprayag": {
  "serial": 100,
  "profile": {
   "regionNote": "Vada Naadu",
   "vimanam": "Mangala Vimanam",
   "theertham": "Ganga Sangam / Mangala Theertham / Vashishta Kund",
   "sthalaVriksham": "Vilvam / Pine",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ நீலமேக பெருமாள்"
    },
    "thaayar": {
     "name": "Pundareekavalli Thaayar / Sita Devi"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Raghunathji / Rama"
    },
    "thaayar": {
     "name": "Sita Devi",
     "legend": "Flanks Raghunathji during temple celebrations"
    }
   },
   "sanctumNote": "6-foot Standing Rama Form"
  },
  "puranam": {
   "prathyaksham": "Manifested to Lord Brahma, Sage Vashishta, and King Bhagiratha",
   "timeline": "Construction Era: Ancient stone temple rebuilt by Garhwal Kings and heavily restored after the 1803 Garhwal earthquake by Maharaja Daulat Rao Scindia of Gwalior Inscriptions: Inscriptions on temple pillars document grants by Garhwal rulers and regional pilgrims",
   "literature": [
    "Featured in the Kedarkhanda of Skanda Purana, Ramayana, and classical Tamil Divya Prabandham"
   ],
   "legend": [
    "Sthala Puranam & Miracles — After defeating Ravana in Lanka, Lord Rama performed intense penance (Tapas) at Devaprayag to wash away Brahmahatya Dosha. Sage Vashishta and Lord Brahma also performed austerities at this spot. The site derives its name Devaprayag (\"Divine Confluence\") because the two sacred Himalayan rivers — Bhagirathi (representing energy) and Alaknanda (representing grace) — merge here to originate the River Ganga"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "tamil": "கன்னித் துறைபடிந்து கங்கையின் நன்னீர்போல்,மின்னிக் கதிர்சிந்தும் வெண்டிரை மேல்வந்து,கண்டங் கடிநகர் மேவிய எம்மான்,தொண்டர்க்கு அமுதுமாய் நின்றானே",
     "transliteration": "Kannith thuraipadindhu gangaiyin nanneerpol,Minnik kadhirsindhum vendirai mealvandhu,Kandang kadinagar meaviya emmaan,Thondarkku amudhumaai ninraane",
     "wordMeanings": [
      [
       "Gangaiyin nanneerpol",
       "Like the pure sacred waters of the River Ganga"
      ],
      [
       "Kandang kadinagar meaviya emmaan",
       "My Lord who resides at Thirukandam (Devaprayag)"
      ],
      [
       "Thondarkku amudhumaai ninraane",
       "Stands as sweet divine nectar for His humble devotees!"
      ]
     ],
     "significance": "Praises the purifying potency of the sacred river confluence while declaring Lord Neelamega Perumal as the real nectar of liberation"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Traditional North Indian stone tower perched high above the river confluence stairs",
    "Moolavar Form: 6-foot standing black stone icon of Sri Rama holding bow and arrow",
    "Thaayar Form: Separate shrine holding Sita Devi in seated grace",
    "Urchavar Form: Metallic Rama idol flanked by Sita, Lakshmana, and Hanuman"
   ],
   "literature": [
    "Project Madurai — Thirumangai Azhwar Periya Thirumozhi"
   ],
   "videoSearches": [
    "Devaprayag Raghunathji Temple History",
    "Velukkudi Krishnan Devaprayag Upanyasam"
   ]
  }
 },
 "joshimutt": {
  "serial": 101,
  "profile": {
   "regionNote": "Vada Naadu (Northern Region)",
   "vimanam": "Goverdhana Vimanam",
   "theertham": "Indra Theertham / Dhana Theertham / Vishnu Ganga",
   "sthalaVriksham": "Mulberry / Devadaru (Himalayan Cedar)",
   "posture": "Irundha Thirukkolam (Sitting posture facing West)",
   "orientation": "Facing West"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ பரமபுருஷ பெருமாள்"
    },
    "thaayar": {
     "name": "Parimalavalli Thaayar / Chandramandala Thayar"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Paramapurushan / Narasimhan"
    },
    "etymology": "Processional idol revered during temple festivals and winter closure shifts",
    "thaayar": {
     "name": "Parimalavalli Thaayar",
     "legend": "Accompanies Urchavar during external rituals"
    }
   },
   "sanctumNote": "Shaligram Narasimha Form"
  },
  "puranam": {
   "prathyaksham": "Manifested to King Vasudev, Sage Narada, and Adi Shankaracharya",
   "timeline": "Construction Era: Ancient Katyuri dynasty stone construction (8th–11th century CE) Institutional Legacy: Headquarters of the Northern Matha established by Adi Shankaracharya",
   "literature": [
    "Detailed in the Garhwal Sthala Mahatmyam, Skanda Purana (Kedarkhanda), and Divya Prabandham commentaries"
   ],
   "legend": [
    "Sthala Puranam & Miracles — King Vasudev performed severe penance at this Himalayan junction seeking divine enlightenment. Lord Vishnu appeared before him as Paramapurushan along with Narasimha, bestowing the Jyoti (divine light) of self-realization. Later, Adi Shankaracharya performed intense austerities under a mulberry tree here, attained enlightenment, and established the Uttaramnaya Jyotirmath Peetham—one of his four primary cardinal monasteries",
    "Winter Abode of Badrinath — During the six months of harsh winter when the Badrinath Temple remains snowbound, the symbolic processional deity (Utsava Murthi) of Lord Badrinath is brought down to Joshimath and worshipped inside this complex"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "thirumangai",
     10
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumangai",
     "tamil": "ஏனமாய் நிலங்கீண்ட என்அப்பனே!,கானமாய் முதியோன் உடைகல்லினால்,தானமாய் நின்ற நால்மறை பாடீ!,பிரமபுரத் து உறை பிரானே!",
     "transliteration": "Aenamaai nilangeenda enappane!Kaanamaai mudhiyon udaikallinaal,Thaanamaai ninra naalmarai paadee!Thirupirudhi thurai piraane!",
     "wordMeanings": [
      [
       "Aenamaai nilangeenda",
       "Who rescued the Earth taking the Varaha form"
      ],
      [
       "Naalmarai paadee",
       "Resounding with the chanting of the four Vedas"
      ],
      [
       "Thirupirudhi thurai piraane",
       "O Lord residing at the holy shrine of Thirupirudhi!"
      ]
     ],
     "significance": "Extols the Lord as the cosmic upholder who preserves Vedic wisdom in the rugged heights of the Himalayas"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Stone-slated Himalayan Katyuri architectural structure with a courtyard",
    "Moolavar Form: Black Shaligram seated deity of Narasimha with a remarkably fine left arm",
    "Thaayar Form: Seated relief image of Parimalavalli Thaayar placed adjacent to the sanctum",
    "Urchavar Form: Metallic icon housed within the inner altar, revered alongside the winter Badrinath idol"
   ],
   "literature": [
    "Project Madurai — Thirumangai Azhwar Periya Thirumozhi"
   ],
   "videoSearches": [
    "Joshimath Narsingh Temple Thirupirudhi",
    "Velukkudi Krishnan Thirupirudhi Upanyasam"
   ]
  }
 },
 "mathura": {
  "serial": 102,
  "profile": {
   "regionNote": "Vada Naadu",
   "vimanam": "Govardhana Vimanam",
   "theertham": "Yamuna River / Potra Kund / Kamsa Theertham",
   "sthalaVriksham": "Kadamba Tree",
   "posture": "Nindra Thirukkolam (Standing posture facing East)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ கேஶவதேவ பெருமாள்"
    },
    "thaayar": {
     "name": "Sathyabhama Thaayar / Chandravalli"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Vasudeva Krishna / Keshavdeo"
    },
    "etymology": "Processional metallic deity adorned in traditional North Indian Shringar attire",
    "thaayar": {
     "name": "Sathyabhama & Rukmini Thaayars",
     "legend": "Accompany the Lord during major festivals like Janmashtami and Jhulan Yatra"
    }
   },
   "sanctumNote": "Prison Cell Subterranean Sanctum"
  },
  "puranam": {
   "prathyaksham": "Manifested to Vasudeva, Devaki, Ugrasena, Akrura, and King Vajranabha",
   "timeline": "First Temple Construction: Built by King Vajranabha (great-grandson of Lord Krishna) Gupta Era: Rebuilt as a grand temple complex during the reign of Chandragupta II (4th century CE) Invasions & Reconstruction: Destroyed by Mahmud of Ghazni (1017 CE) and later by Aurangzeb (1670 CE); rebuilt in modern times under the patronage of Ramkrishna Dalmia and Industrialist M. P. Birla through the Sri Krishna Janmabhoomi Trust",
   "literature": [
    "Extensively celebrated in the Srimad Bhagavatham, Mahabharata, Harivamsa, Vishnu Purana, and Dravida Prabandham"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Lord Vishnu incarnated here as Sri Krishna—His 8th Avatar—in the prison cell of King Kamsa at midnight on Bhadrapada Ashtami. Right at birth, He revealed His four-armed divine form holding the Conch, Discus, Mace, and Lotus before transforming into an infant. Vasudeva carried the baby across the raging Yamuna River to Gokul to protect Him from Kamsa. Later in His youth, Krishna returned to Mathura, vanquished the wrestlers Mushtika and Chanura, slayed Kamsa, liberated His parents, and restored King Ugrasena to the throne"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "periyazhwar",
     16
    ],
    [
     "andal",
     12
    ],
    [
     "nammazhwar",
     11
    ],
    [
     "thirumangai",
     10
    ],
    [
     "thirumazhisai",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "periyazhwar",
     "tamil": "வண்டூரு வனமாலை யுன்மார்பில் இலங்,தண்டாமரை நன்நறு மலர்போல் வீற்றிருந்தாய்!,அண்டா வடம்மதுரை மேவிய வெம்பெருமான்!,தொண்டாளு மாறெனக்கே சூழ்கின்றாயே",
     "transliteration": "Vandooru vanamaalai yunmaarbil ilang,Thandaamarai nannaru malarpol veetrirundhaai!Andaa vadammadhurai meaviya vemperumaan!Thondaalu maarenakke soozhkindraaye",
     "wordMeanings": [
      [
       "Vandooru vanamaalai",
       "Garland of wild flowers humming with honeybees on Your chest"
      ],
      [
       "Vadammadhurai meaviya vemperumaan",
       "My Lord residing in northern Mathura"
      ],
      [
       "Thondaalu maarenakke",
       "Accepting me as Your eternal servant"
      ]
     ],
     "significance": "Expresses Vatsalya Bhava (motherly love), celebrating the supreme beauty and accessibility (Saulabhyam) of Lord Krishna at His birthplace"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: Grand Nagara-style stone gateway leading into the Janmabhoomi temple complex",
    "Moolavar Form: Black marble icon of Keshavdeo dressed in seasonal attire (Poshak)",
    "Thaayar Form: Separate altar housing Sathyabhama and Rukmini idols",
    "Urchavar Form: Brass icon of infant Krishna (Laddoo Gopal) used for ritual baths"
   ],
   "literature": [
    "Dravida Veda — Periyazhwar Thirumozhi Mathura Pasurams"
   ],
   "videoSearches": [
    "Mathura Janmabhoomi Temple History",
    "Velukkudi Krishnan Thiruvadamadhura Upanyasam"
   ]
  }
 },
 "ayarpadi": {
  "serial": 103,
  "profile": {
   "regionNote": "Vada Naadu",
   "vimanam": "Govardhana Vimanam",
   "theertham": "Yamuna River / Keshi Ghat / Kaliya Mardan Ghat",
   "sthalaVriksham": "Tulasi (Vrinda) / Kadamba Tree",
   "posture": "Nindra Thirukkolam (Standing posture in Tribhanga pose facing East)",
   "orientation": "Facing East"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ கோவிந்ததேவ பெருமாள்"
    },
    "thaayar": {
     "name": "Radharani / Vrindavani Thaayar"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Radharaman / Govindadeo"
    },
    "etymology": "Represented by a holy crown (Gaddi) or metal icon beside the Lord",
    "thaayar": {
     "name": "Sri Radha",
     "legend": "Represented by a holy crown (Gaddi) or metal icon beside the Lord"
    }
   },
   "sanctumNote": "Tribhanga Flute Posture"
  },
  "puranam": {
   "timeline": "Red Sandstone Govindadeo Temple: Constructed in 1590 CE by Raja Man Singh of Amber using red sandstone granted by Emperor Akbar Invasions: When Aurangzeb attacked Vrindavan in 1670 CE, the original deity of Govindadeo was safely moved to Jaipur, where He remains worshipped today as the royal deity of Jaipur",
   "literature": [
    "Extensively detailed in the Srimad Bhagavatham, Gita Govinda, Padma Purana, and Divya Prabandham"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Named after Goddess Vrinda (Tulasi), this holy forest is the celestial arena of Lord Krishna's childhood pastimes (Leelas). Here Krishna danced atop the venomous serpent Kaliya (Kaliya Nardhanam), protected the inhabitants from Indra's torrents by lifting Mount Govardhana, played His cosmic flute on full moon nights, and engaged in the divine Rasa Leela with Radha and the Gopis",
    "Six Goswamis Era — Re-discovered in the 16th century by Sri Chaitanya Mahaprabhu and His disciples—the Six Goswamis of Vrindavan (Sanatana, Rupa, Jiva, Raghunath Bhatta, Raghunath Dasa, and Gopal Bhatta Goswami)—who unearthed the ancient deities (Govindadeo, Gopinath, Madanmohan)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "andal",
     10
    ],
    [
     "periyazhwar",
     5
    ],
    [
     "nammazhwar",
     4
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "andal",
     "tamil": "மத்தளம் கொட்ட வரிசங்கம் நின்றூத,முத்துடைத் தாமம் நிரைதாழ்ந்த பந்தற்கீழ்,மைத்துனன் நம்பி மதுசூதன் வந்துஎன்னைக்,கைத்தலம் பற்றும் கனாக்கண்டேன் தோழீ நான்",
     "transliteration": "Mathalam kotta varisangam ninroodha,Muthudaith thaamam niraithaazhndha pandhar keezh,Maithunan nambi madhusoodhan vandhennaik,Kaithalam patrum kanaakkandeen thozhee naan",
     "wordMeanings": [
      [
       "Mathalam kotta",
       "As drums resounded and white conches blew"
      ],
      [
       "Muthudaith thaamam",
       "Under a canopy draped with pearl garlands"
      ],
      [
       "Madhusoodhan vandhu",
       "Lord Madhusudhana of Vrindavan came"
      ],
      [
       "Ennaik kaithalam patrum",
       "To take my hand in sacred marriage—I saw this dream, O friend!"
      ]
     ],
     "significance": "The climax of Nachiyar Thirumozhi, symbolizing the individual soul's (Jivatma) eternal mystical union with the Supreme Lord (Paramatma)"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 7-tiered red sandstone structure combining Hindu and Rajput architectural styles",
    "Moolavar Form: Enchanting black marble image of Krishna in Tribhanga posture playing flute",
    "Thaayar Form: Holy silver crown (Gaddi) representing Sri Radharani",
    "Urchavar Form: Compact Shaligram deity of Radharaman"
   ],
   "literature": [
    "Koyil.org — Thiruvaipadi Vrindavan History"
   ],
   "videoSearches": [
    "Vrindavan Govindadeo Temple History",
    "Andal Nachiyar Thirumozhi Vrindavan"
   ]
  }
 },
 "dwaraka": {
  "serial": 105,
  "profile": {
   "regionNote": "Vada Naadu",
   "vimanam": "Hari Gruha Vimanam / 5-tiered 78-meter tall spired tower (Jagat Mandir)",
   "theertham": "Gomti River / Samudra Sangam / Chakra Theertham",
   "sthalaVriksham": "Rayan Tree (Manilkara hexandra)",
   "posture": "Nindra Thirukkolam (Standing posture facing West toward the ocean)",
   "orientation": "Facing West"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ த்வாரகாதீஶ பெருமாள்"
    },
    "thaayar": {
     "name": "Rukmini Thaayar / Kalyana Nachiyar"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Dwarkadhish / Trivikrama"
    },
    "etymology": "Four-armed black stone processional icon used during public festivals",
    "thaayar": {
     "name": "Rukmini & Sathyabhama",
     "legend": "Accompany the deity during royal processions and boat festivals (Naukavihar)"
    }
   },
   "sanctumNote": "Royal Four-Armed Sovereign Form"
  },
  "puranam": {
   "prathyaksham": "Manifested to Rukmini, Kuchela (Sudama), Draupadi, Arjuna, and King Vajranabha",
   "timeline": "First Construction: Original temple built by Krishna's great-grandson Vajranabha over the royal residence (Hari Gruha) Structural Temple: Present 5-tiered limestone structure built in Chalukya-Solanki style (15th–16th century CE) Patronage: Richly endowed by the Gaekwads of Baroda and Maratha rulers",
   "literature": [
    "Detailed in the Mahabharata (Mausala Parva), Srimad Bhagavatham, Harivamsa, Skanda Purana, and Dravida Prabandham"
   ],
   "legend": [
    "Sthala Puranam & Miracles — To protect the Yadava clan from repeated attacks by Jarasandha, Lord Krishna instructed Vishwakarma to construct a golden fortress city inside the western ocean at Dwarka. Krishna ruled here as the supreme sovereign (Dwarkadhish) for 100 years, marrying Rukmini, Sathyabhama, and six other chief queens (Ashta-Bharya). This is the sacred site where Krishna welcomed His impoverished childhood friend Sudama (Kuchela), transforming his poverty into unimaginable wealth in return for a handful of puffed rice (Pori)",
    "Submerged Golden City — After Lord Krishna completed His earthly incarnation, the original golden city of Dwarka was submerged beneath the Arabian Sea, as confirmed by modern marine archaeological excavations led by Dr. S.R. Rao"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "periyazhwar",
     5
    ],
    [
     "andal",
     4
    ],
    [
     "thirumangai",
     2
    ],
    [
     "nammazhwar",
     2
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "andal",
     "tamil": "சிந்துரச் செம்பொடிப் போல் திருமாலிருஞ்சோலை எங்கும்,இந்திர கோபங்களே எழுந்தும்பரந் திட்டனபோல்,வாஸுதேவன் வலைப் பட்டிருந்தேன் என்னை,துவாரபதிக்கு உய்த்திடுமின்",
     "transliteration": "Sindhurach sempodip pol thirumaalirunjolai engum,Indhira gopangale ezhundhumparan thittanapol,Vaasudhevan valaip pattirundheen ennai,Dhuvaarabadhikku uythidumin",
     "wordMeanings": [
      [
       "Vaasudhevan valaip pattirundheen",
       "I am caught helplessly in the net of Lord Vasudeva's love"
      ],
      [
       "Ennai dhuvaarabadhikku uythidumin",
       "Take me at once to His royal city of Dwarka (Dhuvarapathi)!"
      ]
     ],
     "significance": "Expresses intense devotional longing (Viraha Tapam), seeking ultimate union with the Lord at His royal seat"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Rajagopuram: 5-tiered 78-meter tall spired Jagat Mandir flying a massive 52-yard silk flag (Dhvaja)",
    "Moolavar Form: Regal four-armed black granite icon dressed in royal crowns and garments",
    "Thaayar Form: Independent grand temple for Rukmini Thaayar displaying Solanki carvings",
    "Urchavar Form: Metallic icon carried in royal palanquins during Rath Yatra"
   ],
   "literature": [
    "Koyil.org — Thirudwaraka Divya Desam History"
   ],
   "videoSearches": [
    "Dwarkadhish Temple History",
    "Velukkudi Krishnan Thirudwaraka Upanyasam"
   ]
  }
 },
 "thirupparkadal": {
  "serial": 107,
  "profile": {
   "regionNote": "Vinnulagam (Transcendental / Celestial Realm)",
   "vimanam": "Ashtanga Vimanam / Athyashcharya Vimanam",
   "theertham": "Ksheera Saagaram (Ocean of Milk) / Amritha Pushkarini",
   "sthalaVriksham": "Kalpavriksham (The Celestial Wish-Fulfilling Tree)",
   "posture": "Kidantha Thirukkolam (Bhujanga Sayanam — Reclining on Adisesha facing South towards the material universe to monitor and protect creation)",
   "orientation": "Facing South"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ க்ஷீராப்திநாத பெருமாள்"
    },
    "thaayar": {
     "name": "Kadalmagal Nachiyar / Sri Wave-Born Lakshmi"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Vyuhavasudeva / Ksheerabdhinaathan"
    },
    "etymology": "Envisioned in cosmic meditation by Devas and Rishis during times of cosmic distress",
    "thaayar": {
     "name": "Sridevi, Bhudevi & Neeladevi",
     "legend": "Triple divine consorts providing cosmic administration, material sustenance, and intimate grace"
    }
   },
   "sanctumNote": "Cosmic Ocean Couch"
  },
  "puranam": {
   "prathyaksham": "Manifested to Lord Brahma, Rudra, Sanatkumara Sages, Garuda, Adisesha, and all Devas",
   "timeline": "Transcendental Antiquity: Unbound by earthly timelines or dynasties; eternally documented in the Vedas, Upanishads, and Tamil Dravida Veda",
   "literature": [
    "Celebrated extensively in the Srimad Bhagavatham (8th Canto), Vishnu Purana, Taitiriya Samhita, and throughout the 4000 Divya Prabandham"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Whenever adharma overwhelms the terrestrial worlds, Lord Brahma and the celestial Devas assemble along the shores of Thirupparkadal to perform Purusha Sukta Homa and chant Vedic hymns. In response to their collective prayers, Lord Ksheerabdhinaathan manifests or promises His terrestrial avatars (such as Varaha, Narasimha, Rama, and Krishna). It is also the legendary site of Samudra Manthan (Churning of the Milky Ocean), where the Lord took the Kurma Avatar to support Mount Mandara and distributed the nectar of immortality (Amrita) to the Devas"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "periyazhwar",
     9
    ],
    [
     "andal",
     5
    ],
    [
     "thirumangai",
     11
    ],
    [
     "nammazhwar",
     9
    ],
    [
     "poigai",
     3
    ],
    [
     "bhoothath",
     2
    ],
    [
     "pey",
     4
    ],
    [
     "thirumazhisai",
     4
    ],
    [
     "kulasekhara",
     2
    ],
    [
     "thiruppaan",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "thirumazhisai",
     "tamil": "நாகத் தணையானை நாலூ ரமுதானை,பாகத் தொருவனைப் படைத்தானை, - மேகத்,தமர்ந்தானை ஆழித் தடங்கடலை ஞாலம்,உமிழ்ந்தானை நெஞ்சே! உணர்",
     "transliteration": "Naagath thanaiyaanai naaloor amudhaanai,Baagath thoruvaanaip pataithaanai, - meagath,Thamardhaani aazhith thadangadalai gnaalam,Umizhdhaanai nenje! Unar",
     "wordMeanings": [
      [
       "Naagath thanaiyaanai",
       "Resting upon the serpent couch of Adisesha"
      ],
      [
       "Aazhith thadangadalai",
       "Residing in the vast milky ocean"
      ],
      [
       "Gnaalam umizhdhaanai",
       "Who protected and spat out the worlds during dissolution"
      ],
      [
       "Nenje unar",
       "O my mind, realize Him with unwavering devotion!"
      ]
     ],
     "significance": "Establishes Ksheerabdhinaathan as the ultimate Vyuha source from whom all cosmic protection and terrestrial incarnations continuously flow"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Sanctum Architecture: Celestial Ashtanga Vimanam surrounded by infinite ocean waves of milk",
    "Moolavar Form: Radiantly dark reclining form upon the white coils of Adisesha, with one hand resting on His head and the other bestowing grace",
    "Thaayar Form: Kadalmagal Nachiyar seated at His head/chest holding golden lotuses",
    "Urchavar Form: Four-armed divine form holding Panchayudha floating in pure light"
   ],
   "literature": [
    "Dravida Veda — Thirupparkadal Pasurams Index"
   ],
   "videoSearches": [
    "Thirupparkadal Divya Desam Velukkudi Krishnan",
    "Samudra Manthan Ksheerabdhinaathan"
   ]
  }
 },
 "paramapadam": {
  "serial": 108,
  "profile": {
   "regionNote": "Vinnulagam (Transcendental / Celestial Realm)",
   "vimanam": "Ananthanga Vimanam / Chandraloka Vimanam",
   "theertham": "Viraja River / Airammadhya Sarovar / Soma Sarovar",
   "sthalaVriksham": "Parijatha Tree / Mahamani Tree",
   "posture": "Irundha Thirukkolam (Paramapada Nathan seated on the throne of Adisesha facing South towards the material worlds to welcome liberated jivas)",
   "orientation": "Facing South"
  },
  "deities": {
   "moolavar": {
    "names": {
     "sanskrit": "ஶ்ரீ பரமபதநாத பெருமாள்"
    },
    "thaayar": {
     "name": "Periya Piratti / Vaikuntha Nayaki"
    }
   },
   "urchavar": {
    "names": {
     "translit": "Paramapada Nathan / Sri Vaikundapathi"
    },
    "etymology": "Envisioned surrounded by Nityasuri eternal angels (Garuda, Visvaksena, Adisesha)",
    "thaayar": {
     "name": "Sridevi, Bhudevi & Neeladevi",
     "legend": "Eternally serving the Lord in blissful, unconditioned devotional service (Kainkaryam)"
    }
   },
   "sanctumNote": "Manikarnika Mandapam Throne"
  },
  "puranam": {
   "prathyaksham": "Eternally visible to Nityasuris (Garuda, Adisesha, Visvaksena) and all Muktas (liberated souls)",
   "timeline": "Eternal Realm (Nitya Vibhuti): Beyond time, space, creation, and destruction (Kala-Atheetha). Unceasingly glorified in the Rig Veda (\"Tad Vishnoh Paramam Padam...\")",
   "literature": [
    "Glorified in the Rig Veda, Katha Upanishad, Kaushitaki Upanishad, Srimad Bhagavatham, Gadhya Thrayam (Vaikuntha Gadhyam by Sri Ramanuja), and closing hymns of the Naalayira Divya Prabandham"
   ],
   "legend": [
    "Sthala Puranam & Miracles — Paramapadam is the final, ultimate destination of the spiritual journey in Sri Vaishnavism. When a jiva undergoes Saranagathi (Prapatti) or Bhakti Yoga on earth, at the moment of death, the Lord guides the soul through the Archiradi Marga (Path of Light). The liberated soul crosses the holy Viraja River, sheds its material body (Sookshma Sarira), receives a divine luminous form (Saroopya Moksha), and enters Sri Vaikuntam. There, the soul is welcomed by the Nityasuris, embraced by Paramapada Nathan, and granted eternal, uninterrupted bliss (Nithya Kainkaryam)"
   ]
  },
  "mangalasasanam": {
   "perAzhwar": [
    [
     "nammazhwar",
     12
    ],
    [
     "thirumangai",
     1
    ],
    [
     "periyazhwar",
     5
    ],
    [
     "andal",
     4
    ],
    [
     "poigai",
     2
    ],
    [
     "bhoothath",
     2
    ],
    [
     "pey",
     5
    ],
    [
     "thirumazhisai",
     2
    ],
    [
     "kulasekhara",
     2
    ],
    [
     "thiruppaan",
     1
    ]
   ],
   "excerpts": [
    {
     "azhwarId": "nammazhwar",
     "tamil": "சூழ்விசும் பணிமேகம் தூரியம் முழக்கின,ஆழ் கடல்கள் அலைக்கரத்தால் அடிதொழு தாடின,ஏழ்க பொழிலும் எம்மான் தமர்வர என்று,ஏழ இசை கானங்கள் இசைத்தனர் அமரரே!",
     "transliteration": "Soozhvisum panimegam thooriyam muzhakkina,Aazh kadalgal alaikkarathaal adithozhu thaadina,Eazha pozhilum emmaan thamarvara endru,Eazha isai kaanangal isaithanar amarare!",
     "wordMeanings": [
      [
       "Soozhvisum panimegam thooriyam muzhakkina",
       "Clouds in the heavens sounded divine trumpets"
      ],
      [
       "Aazh kadalgal alaikkarathaal adithozhu thaadina",
       "Oceans danced with hands of waves in joy"
      ],
      [
       "Emmaan thamarvara endru",
       "Celebrating \"The devotee of our Supreme Lord is arriving!\""
      ],
      [
       "Isaithanar amarare",
       "Celestials sang divine melodies in seven musical notes"
      ]
     ],
     "significance": "The triumphant opening verse of Nammalwar's Thiruvaimozhi (10.9), describing the grand, joyful welcome accorded to a liberated soul entering Sri Vaikuntam"
    }
   ]
  },
  "visuals": {
   "descriptions": [
    "Sanctum Architecture: Radiantly glowing Manikarnika Mandapam with thousand-pillared gem-encrusted halls",
    "Moolavar Form: Glorious seated icon of Paramapada Nathan in majestic royal posture holding Conch, Discus, and Abhaya Mudra",
    "Thaayar Form: Periya Piratti seated prominently on His right chest/throne",
    "Urchavar Form: Transcendent light form flanked by Sridevi, Bhudevi, and Neeladevi"
   ],
   "literature": [
    "Koyil.org — Sri Vaikuntha Gadhyam & Thiruvaimozhi Commentary"
   ],
   "videoSearches": [
    "Paramapadam Sri Vaikuntam Velukkudi Krishnan",
    "Thiruvaimozhi Soozhvisumbu Animegam Upanyasam"
   ]
  }
 }
};

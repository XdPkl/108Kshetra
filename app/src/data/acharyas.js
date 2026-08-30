/**
 * The Acharyas — the guru parampara of Sri Vaishnavism (US-ACH-01..03,
 * FR-92..94), fully populated from the Product Owner's dossier batches 4-7
 * (Reference Content/). Verse original-script text comes from the DOCX
 * companions; where absent the verse renders an explicit pending marker.
 *
 * Shape: id, name, tamilName, eraGroup, era, role (one-line index role),
 * titles?, birthMonth?, birthStar?, tithi?, birthplace? {name, district?, kshetramId?},
 * amsam?, amsamAcharyaId?, timeline? [{when?, event}],
 * lifeHistory? (string | {heading, paragraphs[]}) [],
 * legend? {title?, text}, worksSummary?, works? [{name, pasurams?, language?}],
 * preservation?, philosophicalTheme?, associatedDesams? [],
 * verse? {work?, tamil?, transliteration, meaning?, wordMeanings?,
 *         commentary? [{heading, text}], audio?},
 * visuals? {iconography? (string | {posture, mudras, garments, idol}),
 *           videoSearches [], digitalTexts []},
 * guru? / sishyas? (acharya ids), sources? []
 */
export const acharyas = [
  {
    id: "nathamuni",
    name: "Nathamuni",
    tamilName: "நாதமுனி",
    eraGroup: "Purvacharyas — the early masters",
    era: "c. 823–951 CE",
    role: "Recovered and arranged the Nalayira Divya Prabandham; first teacher of the Sri Vaishnava lineage.",
    titles: [
      "Ranganatha Muni",
      "Veera Narayanapura Piran",
      "Sadhu Janapriya",
      "Founder of the Sri Vaishnava Acharya Lineage"
    ],
    birthMonth: "Aani (Jyeshtha)",
    birthStar: "Anusham (Anuradha)",
    tithi: "Sukla Paksha Saptami",
    birthplace: {
      name: "Veera Narayanapuram (Kattumannarkoil)",
      district: "Cuddalore District, Tamil Nadu"
    },
    amsam: "Gaja Mukha (divine attendant) — Adisesha aspect",
    sishyas: ["uyyakondar", "yamunacharya"],
    associatedDesams: ["srirangam", "kumbakonam", "alwar-thirunagari"],
    timeline: [
      {
        when: "Birth & scholarship",
        event: "Born into an illustrious Bhagavata family at Veera Narayanapuram, mastering the Sanskrit Vedas, Shastras and Ashtanga Yoga"
      },
      {
        when: "The decad mystery",
        event: "Hearing visiting pilgrims recite ten pasurams (Aravamudhe) of Nammazhwar concluding \"these ten out of one thousand\" — and realising the rest were lost"
      },
      {
        when: "Pilgrimage",
        event: "Travelling to Alwarthirunagari (Thirukkurugur) and meeting Parankusa Dasa, a disciple of Madhurakavi Azhwar"
      },
      {
        when: "Yogic realisation",
        event: "Reciting the Kanninun Siruthambu 12,000 times under the sacred tamarind tree (Thirupuli), entering yoga samadhi and receiving the direct vision of Nammazhwar"
      },
      {
        when: "Recovery of Dravida Vedam",
        event: "Receiving the complete 4,000-verse Naalayira Divya Prabandham with its esoteric meanings directly from Nammazhwar"
      },
      {
        when: "Devaganam",
        event: "Setting the 4,000 verses to divine musical notes and appointing his nephews (Melaiyagatthu Azhwan and Keezhaiyagatthu Azhwan) to chant them at Srirangam"
      },
      {
        when: "Yogic departure",
        event: "Attaining mukthi in a state of supreme devotional trance upon beholding a hunting party as Rama, Sita and Lakshmana"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Sri Nathamuni was born at Veera Narayanapuram (Kattumannarkoil) to Ishvara Bhatta. Educated in Vedic literature, logic and Ashtanga Yoga, he spent his youth performing temple service at Veera Narayanapuram, deeply devoted to the Lord Mannanar (Veera Narayana Perumal)."
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "The recovery, collation and musical codification of the entire Naalayira Divya Prabandham; establishing the Arayar Sevai tradition at Srirangam; and writing fundamental philosophical treatises on Visishtadvaita epistemology."
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "1. The quest for the lost hymns: A group of pilgrims from Kumbakonam visiting the Veera Narayanapuram temple recited ten sweet Tamil pasurams ending with Aravamudhe from Nammazhwar’s Thiruvaymozhi. Captivated, Nathamuni asked for the remaining verses of the set of 1,000 mentioned in the concluding verse; the pilgrims knew only those ten. Determined to recover the lost treasure of the Azhwars, Nathamuni travelled south to Kumbakonam and eventually to Alwarthirunagari (Thirukkurugur).",
          "2. The direct revelation from Nammazhwar: At Alwarthirunagari, Nathamuni met Parankusa Dasa, who taught him the Kanninun Siruthambu — Madhurakavi Azhwar’s eleven verses in praise of Nammazhwar. Nathamuni sat beneath the sacred tamarind tree (Thirupuli) where Nammazhwar had sat centuries earlier, entered Ashtanga Yoga samadhi and chanted the Kanninun Siruthambu 12,000 times with unbroken devotion. Moved by his resolve, Nammazhwar appeared in a divine vision and imparted not just the 1,102 verses of Thiruvaymozhi but all 4,000 verses of the twelve Azhwars, with their secret interpretations (Rahasya Arthas).",
          "3. Instituting Devaganam & Arayar Sevai: Returning to Srirangam, Nathamuni classified the 4,000 verses into four parts (Mudhal Ayiram, Iyarpa, Thiruvaymozhi, Thirumozhi) and set them to celestial musical scales (Devaganam). He instructed his nephews to perform these verses with music and sacred dance before Lord Ranganatha — giving birth to the Arayar Sevai tradition preserved at Srirangam, Srivilliputhur and Alwarthirunagari.",
          "4. The hunter vision & mukthi: In his elderly years, while residing near Gangaikonda Cholapuram, a local ruler passed by on a hunt with his wife, brother and a dog. Nathamuni’s yogic mind perceived them as Lord Rama, Sita, Lakshmana and Hanuman; he ran after them in a trance of divine love. When they vanished from sight he collapsed in the agony of separation and breathed his last, ascending directly to Paramapadam."
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Nathamuni received direct jnana-upadesha from Nammazhwar in yoga samadhi. He was the Acharya of Uyyakondar (Pundarikaksha) and of Kurukai Kavalappan, to whom he entrusted the science of yoga; through Uyyakondar’s line the lineage flows to Yamunacharya."
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "He attained mukthi at Gangaikonda Cholapuram through divine absorption in Lord Rama, in the yogic trance narrated in the hunter-vision episode."
        ]
      }
    ],
    legend: {
      title: "Sthala Puranam & Legend Highlight — the re-discovery of Dravida Vedam",
      text: "Sri Nathamuni’s yogic recovery of the Naalayira Divya Prabandham beneath the Thirupuli tree saved the Tamil Veda from permanent extinction. Without his intervention the devotional legacy of the Azhwars would have been lost to history; his work re-established Tamil as a sacred scriptural language equal to Sanskrit in temple liturgy."
    },
    worksSummary: "2 major Sanskrit texts and the complete structural classification of the 4,000 Tamil pasurams",
    works: [
      {
        name: "Nyaya Tattva",
        language: "Sanskrit"
      },
      {
        name: "Yoga Rahasya",
        language: "Sanskrit"
      },
      {
        name: "Codification of the Naalayira Divya Prabandham into four structural books"
      }
    ],
    preservation: "The bridge between the era of the Azhwars (the seers) and the era of the Acharyas (the systematisers). He integrated the Tamil Dravida Veda with the Sanskrit Upanishadic heritage, establishing the Ubhaya Vedanta tradition; the Nyaya Tattva survives through citations in Vedanta Desika’s Nyaya Siddhanjana.",
    philosophicalTheme: "Ubhaya-Vedanta Samanvaya (harmony of the Sanskrit and Tamil scriptures) and yoga-assisted prapatti.",
    verse: {
      work: "Invocation to Sri Nathamuni (thaniyan composed by Uyyakondar)",
      tamil: "நமோऽசிந்த்யாத்புதாத்புடாக்லிஷ்டஜ்ஞானவைராக்யராசயே ।\nநாதாய முனயேऽகாதபகவத்பக்திஸிந்தவே ॥",
      transliteration: "Namo ’chintyad bhuthad bhutha-aklishta jnana vairagya rasaye / Nathaya munaye ’gadha bhagavad bhakti sindhave",
      wordMeanings: [
        ["Namo", "Prostrations/salutations"],
        ["Achintya", "Inconceivable"],
        ["Adbhutha adbhuta", "Marvel of marvels"],
        ["Aklishta", "Effortless/unblemished"],
        ["Jnana", "Spiritual wisdom"],
        ["Vairagya", "Dispassion"],
        ["Rasaye", "Treasure-house/ocean"],
        ["Nathaya munaye", "To the sage Nathamuni"],
        ["Agadha", "Unfathomable"],
        ["Bhagavad bhakti", "Devotion to the Lord"],
        ["Sindhave", "Who is an ocean"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This invocation (thaniyan) offers prostrations to Sri Nathamuni, describing him as an unfathomable ocean of love for God (Bhagavad Bhakti Sindhu). He possesses effortless wisdom (Aklishta Jnana) and total dispassion (Vairagya), standing as an inconceivable spiritual marvel who revived the Sri Vaishnava sampradaya."
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "It highlights the essential qualifications of an Acharya in Visishtadvaita: jnana (correct knowledge of Tattva, Hita and Purushartha) coupled with vairagya (dispassion toward material attractions) and deep bhakti (love for Sriman Narayana)."
        },
        {
          heading: "Commentarial Insights",
          text: "Vedanta Desika notes that without Nathamuni’s unblemished wisdom (Aklishta Jnana), the stream of Ubhaya Vedanta would not have reached later Acharyas such as Yamunacharya and Ramanuja. His status as a Muni (reflective sage) marks the formal beginning of systemic Sri Vaishnava scholarship."
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana in deep yogic contemplation (yoga samadhi).",
        mudras: "Right hand held in Jnana Mudra at chest level, left hand resting on the lap in meditative pose.",
        garments: "Simple white ascetic vestment bearing the sacred thread (Yajnopavitam), adorned with Urdhva Pundra (tilak) marks across twelve parts of the body and Tulasi seed garlands.",
        idol: "At Veera Narayanapuram (Kattumannarkoil), Sri Nathamuni’s Moolavar shrine depicts him as a luminous yogic sage seated in contemplative trance, symbolising his retrieval of the Dravida Veda."
      },
      videoSearches: [
        "Sri Nathamuni Life History and Naalayiram Recovery Velukkudi Krishnan",
        "Nathamuni Nyaya Tattva and Yoga Rahasya Lecture Karunakarachariar",
        "Nathamuni Vaibhavam and Arayar Sevai Ananthapadmanabhachariar"
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
  {
    id: "uyyakondar",
    name: "Uyyakondar",
    tamilName: "உய்யக்கொண்டார்",
    eraGroup: "Purvacharyas — the early masters",
    era: "c. 9th–10th century CE",
    role: "Prime disciple of Nathamuni; preserved the lineage and nurtured Manakkal Nambi as his successor.",
    titles: ["Uyyakondar", "Sri Pundarikaksha", "Thiruvellarai Piran", "Successor to Sri Nathamuni"],
    birthMonth: "Karthigai (Vrischika)",
    birthStar: "Krithigai",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Thiruvellarai (Swetagiri Kshetram)",
      district: "Tiruchirappalli District, Tamil Nadu",
      kshetramId: "thiruvellarai"
    },
    amsam: "Pundarikaksha (The Lotus-Eyed aspect of Sriman Narayana)",
    guru: "nathamuni",
    sishyas: ["manakkal-nambi"],
    associatedDesams: ["thiruvellarai", "srirangam"],
    timeline: [
      {
        when: "Birth & Discipleship under Nathamuni",
        event: "Born at Thiruvellarai, moving to Veera Narayanapuram to become the foremost disciple of Sri Nathamuni"
      },
      {
        when: "Selfless Service to Acharya",
        event: "Serving Nathamuni and his family with absolute humility for years"
      },
      {
        when: "The Sand-Drying Miracle",
        event: "Walking behind Nathamuni's wife in the rain to protect her feet, using his own garments to dry muddy paths"
      },
      {
        when: "Designation as Successor",
        event: "Nathamuni entrusting the leadership of the Sampradaya and the training of his grandson (Yamunacharya) to Uyyakondar"
      },
      {
        when: "Mentorship of Manakkal Nambi",
        event: "Training Manakkal Nambi to carry out the mandate of reforming Yamunacharya"
      },
      {
        when: "Attainment of Liberation",
        event: "Merging into eternal service at Srirangam"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born at Thiruvellarai into a Vedic family, Pundarikaksha traveled to Veera Narayanapuram to surrender at the feet of Sri Nathamuni. Recognized for his humility and intellectual clarity, he became Nathamuni's premier disciple"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Acharya-Kainkaryam (Personal service to the preceptor) and preserving the continuity of the Guru Parampara between Nathamuni and Yamunacharya"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Title Uyyakondar: Pundarikaksha demonstrated absolute submission (Seshathvam) to his Acharya. He never sought personal fame or scholarly acclaim, living only to execute Nathamuni's commands. Seeing his capacity to save souls through selfless devotion, Nathamuni affectionately gave him the name Uyyakondar (\"One who came to redeem the spiritual world\") Fulfilling Nathamuni's Mandate: Before Nathamuni passed away, he told Uyyakondar that a divine grandson would be born in their lineage—Yamunacharya—who was destined to lead the Sampradaya. Nathamuni instructed Uyyakondar to ensure Yamunacharya was instructed in Visishtadvaita. When Uyyakondar grew elderly and realized he might not live to see Yamunacharya mature, he passed this sacred responsibility onto his chief disciple, Manakkal Nambi"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Prime disciple of Sri Nathamuni; Acharya to Manakkal Nambi (Rama Mishra)"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: ["Passed away peacefully at Srirangam, leaving behind a protected lineage"]
      }
    ],
    legend: {
      title: "Thiruvellarai Shrine & Uyyakondar's Legacy",
      text: "Thiruvellarai is home to the ancient cave temple of Pundarikaksha Perumal, featuring steps representing the 18 chapters of the Bhagavad Gita. Uyyakondar's birth here linked this ancient shrine with the revival of Sri Vaishnavism under Nathamuni's lineage"
    },
    works: [
      {
        name: "Thaniyan on Thiruppavai"
      }
    ],
    preservation: "Preserved the unbroken chain of the Guru Parampara. He safeguarded Nathamuni's teachings on Dravida Veda and ensured their transmission to the next generation",
    philosophicalTheme: "Acharya-Kainkaryam and Guru-Parampara-Rakshanam (Protection of the spiritual lineage)",
    verse: {
      work: "Thiruppavai Thaniyan (Anna Vayal Puthuvai)",
      tamil: "அன்ன வயல் புதுவை ஆண்டாள் அரங்கற்கு\nபண்ணு திருப்பாவை பல்பதியம் - இன்னிசையால்\nபாடிிக் கொடுத்தாள் நற்பாமாலை பூமாலை\nசூடிக் கொடுத்தாளைச் சொல்லு",
      translit: "Anna vayal puthuvai Andal Arangarku Pannu thiruppavai palpathiyam - innisaiyal Padik koduthal narbamalai poomalai Sudik koduthalaic chollu",
      wordMeanings: [
        ["Anna vayal", "Fertile fields filled with swans"],
        ["Puthuvai", "of Srivilliputhur"],
        ["Andal", "Goddess Andal"],
        ["Arangarku", "for Lord Ranganatha of Srirangam"],
        ["Pannu", "composed"],
        ["Thiruppavai", "the sacred hymn Thiruppavai"],
        ["Palpathiyam", "verses/decads"],
        ["Innisaiyal", "with sweet music"],
        ["Padik koduthal", "sang and offered"],
        ["Narbamalai", "garland of exquisite verses"],
        ["Poomalai", "garland of flowers"],
        ["Sudik koduthalaic", "she who offered after wearing"],
        ["Chollu", "praise/recite her glory!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Uyyakondar instructs devotees to praise Andal, who was born in swan-filled Srivilliputhur. She offered two distinct garlands to Lord Ranganatha: a garland of flowers (Poomalai) which she wore first, and a sweet garland of verses (Paamalai) composed as Thiruppavai"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes the role of Andal as the ultimate mediatrix (Purushakara). By praising the author of Thiruppavai before chanting her work, Uyyakondar set the standard for invoking Acharya grace (Thaniyan Anusandhanam) prior to scriptural study"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai notes that Uyyakondar highlighted the dual offering—Poomalai (physical flower garland) and Paamalai (poetic garland)—proving that physical action and intellectual devotion must unite in service to God"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana or standing in supplication before Sri Nathamuni",
        mudras: "Hands joined in Anjali Mudra or held in Jnana Mudra",
        garments: "Dressed in ascetic robes, bearing sacred thread, adorned with twelve Urdhva Pundra (tilak) marks and Tulasi garlands",
        idol: "At Thiruvellarai, Uyyakondar's icon is enshrined near the main sanctum, depicting him as the faithful steward of Nathamuni's lineage"
      },
      videoSearches: [
        "Uyyakondar Thiruvellarai Vaibhavam Velukkudi Krishnan",
        "Anna Vayal Puthuvai Thaniyan Meaning Karunakarachariar",
        "Uyyakondar and Manakkal Nambi Lineage Ananthapadmanabhachariar"
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
  {
    id: "manakkal-nambi",
    name: "Manakkal Nambi",
    tamilName: "மாணக்கால் நம்பி",
    eraGroup: "Purvacharyas — the early masters",
    era: "c. 10th century CE",
    role: "Nurtured and brought Yamunacharya into the Sri Vaishnava fold through the Thoodhu Valai greens stratagem.",
    titles: [
      "Manakkal Nambi",
      "Rama Mishra",
      "Manakkal Piran",
      "The Great Reformer who reclaimed Sri Yamunacharya"
    ],
    birthMonth: "Maasi (Kumbham)",
    birthStar: "Magham",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Manakkal (near Lalgudi, Tiruchirappalli)",
      district: "Tiruchirappalli District, Tamil Nadu"
    },
    amsam: "Rama Mishra (Divine Attendant aspect)",
    guru: "uyyakondar",
    sishyas: ["yamunacharya"],
    associatedDesams: ["srirangam"],
    timeline: [
      {
        when: "Discipleship under Uyyakondar",
        event: "Serving Uyyakondar for twelve years with absolute dedication"
      },
      {
        when: "Receiving the Sacred Mandate",
        event: "Uyyakondar charging him with the mission to bring Yamunacharya into the fold of Sri Vaishnavism"
      },
      {
        when: "The Courtroom Access Problem",
        event: "Finding Yamunacharya surrounded by royal luxury and guards as King Alavandar, unable to gain direct audience"
      },
      {
        when: "The Thoodhu Valai Strategy",
        event: "Cooking and supplying the medicinal greens (Thoodhu Valai) daily to the royal kitchen for months"
      },
      {
        when: "Stopping the Greens",
        event: "Ceasing the supply to cause Yamunacharya to inquire about the missing greens"
      },
      {
        when: "The Royal Meeting",
        event: "Gaining entrance to the palace, refusing worldly wealth, and promising to reveal his grandfather Nathamuni's hidden treasure"
      },
      {
        when: "Instruction in the Bhagavad Gita",
        event: "Teaching Yamunacharya the 18 chapters of the Gita over several days"
      },
      {
        when: "The Final Revelation at Srirangam",
        event: "Leading Yamunacharya to the sanctum of Lord Ranganatha, revealing that Ranganatha Himself was the ultimate ancestral treasure"
      },
      {
        when: "Attainment of Liberation",
        event: "Handing over the Sampradaya leadership to Yamunacharya and ascending to Paramapadam"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born in the village of Manakkal near Lalgudi, Rama Mishra became the chief disciple of Uyyakondar. When Uyyakondar's wife passed away, Manakkal Nambi took over all household duties, including cooking, carrying water, and caring for Uyyakondar's young daughters, demonstrating unmatched humility (Acharya-Abhimana)"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Acharya-Wakya-Palanam (Fulfilling the Acharya's command) through the tactical reclamation of Yamunacharya from royal materialism to spiritual leadership"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Thoodhu Valai Greens Strategy: Young Yamunacharya had won a half-kingdom in a scholarly debate against Akkiyalvan and lived as a monarch (Alavandar), immersed in royal politics and luxuries. Remembering Uyyakondar's command to reform Yamunacharya, Manakkal Nambi tried to meet him, but guards turned him away. Learning that Yamunacharya favored a specific culinary green—Thoodhu Valai (Solanum trilobatum)—Manakkal Nambi gathered fresh greens daily and handed them to the royal cooks for six months without asking for money Reclaiming Alavandar: One day, Manakkal Nambi abruptly stopped supplying the greens. When Yamunacharya noticed their absence and asked who had been providing them, the cooks explained that an old Brahmin had brought them daily for free. Yamunacharya ordered him to be brought to court. When Yamunacharya offered him gold and lands, Manakkal Nambi replied: \"I seek no wealth. I am here to deliver an imperishable ancestral treasure left for you by your grandfather, Sri Nathamuni.\" The Gita Upadesha & Srirangam Revelation: Manakkal Nambi took Yamunacharya to a private chamber and taught him the deep esoteric truths of the Bhagavad Gita. Gradually, Yamunacharya's royal delusion dissolved. Manakkal Nambi then led him to Srirangam, walked into the sanctum, and pointed to Lord Ranganatha reclining on Adisesha: \"Here is your grandfather's ultimate treasure!\" Overwhelmed by divine grace, Yamunacharya renounced his kingdom on the spot, embraced asceticism, and became the head of the Sri Vaishnava Sampradaya"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Prime disciple of Uyyakondar; Acharya to Sri Yamunacharya (Alavandar)"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Having fulfilled his Acharya's solemn vow, Manakkal Nambi passed away peacefully in Srirangam"
        ]
      }
    ],
    legend: {
      title: "The Thoodhu Valai Reclamation",
      text: "Manakkal Nambi's six-month cultivation of Thoodhu Valai greens is a supreme example of Upaya-Kushalatvam (skilful spiritual diplomacy). He demonstrated that saving a soul requires endless patience, tactical intelligence, and absolute devotion to the Acharya's word"
    },
    works: [
      {
        name: "Systematized oral instructions on Gitartha Sangraha concepts transmitted to Yamunacharya"
      }
    ],
    preservation: "Saved the Sri Vaishnava lineage from losing its future intellectual giant (Yamunacharya). Without Manakkal Nambi's efforts, Yamunacharya would have remained a secular king, breaking the continuity toward Sri Ramanuja",
    philosophicalTheme: "Acharya-Aagya-Palanam (Uncompromising execution of the Acharya's instructions) and Prapatti-Margadarshana",
    verse: {
      work: "Invocation to Manakkal Nambi (Thaniyan by Yamunacharya)",
      tamil: "அயத்னதோ யாமுனமாமுனிம் தர்சிதத்வாத்யாமல ஆத்மஸம்பதம் ।\nநமாமி ராமாமிஸ்ரமஸ்மதாகூர்வம் ॥",
      translit: "Ayathnato Yamunamamunim darsithathvadhyamala atmasampatham Namami Ramamisramasmadhagurvam",
      wordMeanings: [
        ["Ayathnatah", "Effortlessly/without strain"],
        ["Yamunamamunim", "to Yamunacharya"],
        ["Darsitha", "who revealed/showed"],
        ["Tvt-adhyamala", "your unblemished supreme"],
        ["Atmasampatham", "spiritual wealth of the soul"],
        ["Namami", "I bow down to"],
        ["Rama Misram", "Sri Rama Mishra (Manakkal Nambi)"],
        ["Asmadh agurvam", "my revered spiritual preceptor"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Yamunacharya expresses eternal gratitude to his Acharya Manakkal Nambi (Rama Mishra), praising him as the noble master who effortlessly opened his eyes to the unblemished spiritual wealth of the soul (Atma-Sampath) and freed him from royal delusion"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Demonstrates the core Visishtadvaita concept of Acharya-Kripa (the unconditioned grace of the Guru). The soul bound in material delusion (Prakriti-Bandha) cannot free itself without an Acharya who acts as a divine catalyst"
        },
        {
          heading: "Commentarial Insights",
          text: "Vedanta Desika highlights that Yamunacharya considered Manakkal Nambi's grace as the turning point of his existence. The term Atmasampatham refers to Lord Ranganatha Himself, who is the true, imperishable wealth of every Jiva"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing or seated in a humble posture facing Yamunacharya, offering instruction",
        mudras: "Right hand held in Upadesha Mudra (teaching pose), left hand holding a bundle of sacred greens or palm leaves",
        garments: "Simple ascetic white vestments, wearing Urdhva Pundra (tilak) marks, bearing sacred thread and Tulasi garlands",
        idol: "At Manakkal and Srirangam, his icon captures his serene, determined expression as the faithful servant who fulfilled Uyyakondar's mandate"
      },
      videoSearches: [
        "Manakkal Nambi Thoodhu Valai History Velukkudi Krishnan",
        "Rama Mishra and Alavandar Upadesam Karunakarachariar",
        "Manakkal Nambi Vaibhavam Ananthapadmanabhachariar"
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
  {
    id: "yamunacharya",
    name: "Yamunacharya",
    tamilName: "யாமுநாச்சார்யா",
    eraGroup: "Purvacharyas — the early masters",
    era: "c. 10th–11th century CE",
    role: "Alavandar — consolidated Visishtadvaita doctrine and bequeathed the three great charges to Ramanuja.",
    titles: [
      "Alavandar",
      "Yamuna Muni",
      "Sri Yamunacharya",
      "Yamuna Thuraivar",
      "Sri Rama Mishra Sishya",
      "Grandfather Acharya of Sri Ramanuja"
    ],
    birthMonth: "Aadi (Ashadha)",
    birthStar: "Uttaradam (Uttara Ashadha)",
    tithi: "Sukla Paksha Purnima",
    birthplace: {
      name: "Veera Narayanapuram (Kattumannarkoil)",
      district: "Cuddalore District, Tamil Nadu"
    },
    amsam: "Simhanaadam (Aspect of Divine Throne/Attendant of Sriman Narayana)",
    guru: "nathamuni",
    sishyas: ["periya-nambi", "thirukachi-nambigal", "ramanuja"],
    associatedDesams: ["srirangam", "kanchi-varadaraja"],
    timeline: [
      {
        when: "Child Prodigy & Debate Defeat of Akkiyalvan",
        event: "Challenging the arrogant court scholar Akkiyalvan at age twelve, solving complex logical riddles, winning half the Chola kingdom, and earning the royal title Alavandar"
      },
      {
        when: "Reign as King",
        event: "Living as a sovereign monarch in luxury at Chidambaram/Madurai"
      },
      {
        when: "Reclamation by Manakkal Nambi",
        event: "Instructed via the Thoodhu Valai greens strategy and Gita upadesha, surrendering to Lord Ranganatha"
      },
      {
        when: "Renunciation & Asceticism",
        event: "Abandoning his throne, taking sannyasa, and settling in Srirangam as head of the Sampradaya"
      },
      {
        when: "Composition of Philosophical Treatises",
        event: "Authoring Stotra Ratnam, Siddhitrayam, Gitartha Sangraha, and Agama Pramanyam"
      },
      {
        when: "Spotting Sri Ramanuja",
        event: "Viewing young Ramanuja at Kanchipuram Varadaraja Temple, blessing him silently (Amudha Kai), and proclaiming him the future savior"
      },
      {
        when: "Passing & The Three Curved Fingers Miracle",
        event: "Departing for Paramapadam; his three folded fingers straightening only after Ramanuja pledged to fulfill his three unfulfilled wishes"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Yamunacharya was the grandson of Sri Nathamuni, born to Ishvaracharya at Veera Narayanapuram. A child prodigy, he studied under Bhashyacharya. At age twelve, when the arrogant royal scholar Akkiyalvan demanded tribute from his teacher, young Yamuna accepted Akkiyalvan's open debate challenge"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Systematizing Visishtadvaita philosophy in Sanskrit; authoring fundamental texts (Granthas); establishing Srirangam as the intellectual headquarters of Sri Vaishnavism"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Debate Victory over Akkiyalvan: In the Chola royal court, twelve-year-old Yamuna posed three statements to Akkiyalvan, challenging him to refute them: 1) \"Your mother is not a barren woman.\" 2) \"The Chola King is righteous.\" 3) \"The King's wife is chaste.\" If Akkiyalvan agreed, he accepted Yamuna's premises; if he refuted them, he committed treason and absurdity! Akkiyalvan was rendered speechless. Yamuna then cleverly refuted all three statements using technical scriptural loopholes. Marveled by his genius, the Chola Queen embraced him, calling him Alavandar (\"The Conqueror who came to save us\"), and the King awarded him half his kingdom Renunciation of the Kingdom: Reclaimed by Manakkal Nambi through the Thoodhu Valai greens strategy and Bhagavad Gita discourses, Alavandar renounced his kingdom, royal wealth, and family. He moved to Srirangam, took up ascetic life, and devoted himself to Lord Ranganatha Spotting Sri Ramanuja at Kanchipuram: While visiting Kanchipuram Varadaraja Temple, Alavandar saw young Ramanuja walking alongside his Advaitic guru, Yadava Prakasa. Recognizing Ramanuja's radiant spiritual aura, Alavandar turned to his disciple Thirukachi Nambigal and remarked: \"Amudha Kai!\" (\"He is the one who will nourish our Sampradaya!\"). He blessed Ramanuja from afar, praying that Ramanuja would lead the Sampradaya The Miracle of the Three Curved Fingers: When Yamunacharya passed away at Srirangam before Ramanuja could reach his side, Ramanuja arrived to find three fingers on Alavandar's right hand tightly folded into his palm. Ramanuja understood that Alavandar had three unfulfilled desires: 1) To write a commentary on the Brahma Sutras (Sri Bhashyam). 2) To name worthy scholars after Parasara and Veda Vyasa. 3) To name a scholar after Nammalwar (Shatagopan). As Ramanuja loudly pledged to fulfill each of these three vows, the three curved fingers straightened one by one, confirming that Alavandar’s soul accepted his pledge"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Prime disciple of Manakkal Nambi; Acharya to Periya Nambi, Thirukachi Nambigal, Thirukoshtiyur Nambi, and Maraner Nambi. Spiritual grand-guru to Sri Ramanuja"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: ["Passed away at Srirangam in 1041 CE, leaving behind an unshakeable intellectual foundation"]
      }
    ],
    legend: {
      title: "The Three Vows at Srirangam",
      text: "The miraculous straightening of Yamunacharya's three curved fingers (Three Vows) sealed the spiritual succession of Sri Ramanuja. It proved that Sri Vaishnavism is an unbroken intellectual and spiritual chain, where the unfulfilled vision of one master is executed by his designated successor"
    },
    works: [
      {
        name: "Stotra Ratnam",
        pasurams: 65,
        language: "Sanskrit"
      },
      {
        name: "Chatusshloki",
        pasurams: 4,
        language: "Sanskrit"
      },
      {
        name: "Gitartha Sangraha",
        pasurams: 32,
        language: "Sanskrit"
      },
      {
        name: "Siddhitrayam",
        language: "Sanskrit"
      },
      {
        name: "Agama Pramanyam",
        language: "Sanskrit"
      },
      {
        name: "Purusha Nirnaya",
        language: "Sanskrit"
      }
    ],
    preservation: "Defended Pancharatra Agamas against rival Mimamsa scholars, refuted Advaitic illusionism (Mayavada), and established the doctrine of Purushakara Prapatti (Sri Lakshmi as mediatrix)",
    philosophicalTheme: "Purushakara-Prapatti and Atma-Nivedanam (Total self-surrender)",
    verse: {
      work: "Stotra Ratnam, Verse 28 (Na Dharma Nishto 'smi)",
      tamil: "ந தர்மனிஷ்டோऽஸ்மி ந சாத்மவேதீ\nந பக்திமான் த்வத்சரணாரவிந்தே ।\nஅகிஞ்சனோऽனன்யகதிஃ சரண்ய !\nத்வன்மூலபாதம் சரணம் ப்ரபத்யே ॥",
      translit: "Na dharma nishtho 'smi na chatmavedi Na bhaktiman tvat charanaravinde Akinchano 'nanyagatih sharanya! Tvat mula padam sharanam prapadye",
      wordMeanings: [
        ["Na", "Not"],
        ["Dharma nishthah", "steadfast in prescribed duties (Karma Yoga)"],
        ["Asmi", "I am"],
        ["Na ca", "nor am I"],
        ["Atma-vedi", "self-realized in spiritual knowledge (Jnana Yoga)"],
        ["Na bhaktiman", "nor possessed of intense devotion (Bhakti Yoga)"],
        ["Tvat charanaravinde", "at Your lotus feet"],
        ["Akinchanah", "destitute of all merit/helpless"],
        ["Ananyagatih", "possessing no other refuge"],
        ["Sharanya!", "Oh Lord worthy of taking refuge in!"],
        ["Tvat mula padam", "at the sole root of Your divine lotus feet"],
        ["Sharanam prapadye", "I take absolute surrender (Prapatti)!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "The quintessential expression of Akinchanya (utter helplessness) and Ananyagatitva (having no other recourse). Yamunacharya confesses that he possesses no qualifications in Karma Yoga, Jnana Yoga, or Bhakti Yoga. Stripped of all spiritual pride, he surrenders unconditionally at the lotus feet of Lord Narayana, relying solely on God's unconditioned grace"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Formulates the exact qualifications required for Prapatti (Surrender). In Visishtadvaita, Prapatti is not performed by those rich in merit, but by those who realize their complete helplessness (Akinchanya) and accept God as both the Means (Upaya) and the Goal (Upeya)"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Vedanta Desika wrote a monumental commentary on Stotra Ratnam, identifying this verse as the heart of the entire work. Sri Ramanuja recited this verse daily, declaring it to be the ultimate refuge for every soul in Samsara"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana or Jnana Mudra, wearing ascetic robes and bearing an aura of royal scholarship",
        mudras: "Right hand held in Jnana Mudra or Upadesha Mudra, left hand holding palm-leaf manuscripts (Grantha)",
        garments: "Dressed in ascetical garments (Kashaya / white robes), bearing sacred thread, marked with twelve Urdhva Pundra (tilak) marks and Tulasi seed garlands",
        idol: "At Kattumannarkoil and Srirangam, Yamunacharya's Moolavar idol portrays him as Alavandar—the majestic scholar-saint whose intellectual vision shaped the future of Sri Vaishnavism"
      },
      videoSearches: [
        "Sri Yamunacharya Stotra Ratnam Upanyasam Velukkudi Krishnan",
        "Na Dharma Nishto Smi Pasuram Vyakhyanam Karunakarachariar",
        "Alavandar Life History and Three Vows Ananthapadmanabhachariar"
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
  {
    id: "periya-nambi",
    name: "Periya Nambi",
    tamilName: "பெரிய நம்பி",
    eraGroup: "Purvacharyas — the early masters",
    era: "c. 10th–11th century CE",
    role: "Performed the Pancha Samskaram for Ramanuja at Madurantakam and acted as his primary Acharya.",
    titles: [
      "Periya Nambi",
      "Sri Maha Purna",
      "Srirangam Piran",
      "Chief Senior Disciple of Yamunacharya",
      "Direct Acharya who initiated Sri Ramanuja into Pancha Samskaram"
    ],
    birthMonth: "Karthigai (Vrischika)",
    birthStar: "Kettai (Jyeshtha)",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Srirangam",
      district: "Tiruchirappalli District, Tamil Nadu",
      kshetramId: "srirangam"
    },
    amsam: "Maha Purna (Aspect of Divine Host / Attendant)",
    guru: "yamunacharya",
    sishyas: ["ramanuja"],
    associatedDesams: ["srirangam", "kanchi-varadaraja"],
    timeline: [
      {
        when: "Discipleship under Yamunacharya",
        event: "Mastering the Dravida Veda and Sanskrit Shastras under Yamunacharya at Srirangam"
      },
      {
        when: "Mission to Kanchipuram",
        event: "Dispatched by the Srirangam congregation to bring Sri Ramanuja to Srirangam following Yamunacharya's passing"
      },
      {
        when: "Meeting at Madurantakam",
        event: "Intercepting Ramanuja at the Madurantakam Eri-Katha Rama Temple"
      },
      {
        when: "Pancha Samskaram Initiation",
        event: "Initiating Ramanuja into the five sacred Vaishnava sacraments (Pancha Samskaram) beneath a Vakula tree"
      },
      {
        when: "Co-habitation & Training at Kanchipuram",
        event: "Living in Ramanuja's home at Kanchipuram to instruct him in Tiruvaymoli"
      },
      {
        when: "The Funeral of Maraner Nambi",
        event: "Performing the final rites for his outcaste spiritual brother Maraner Nambi despite fierce orthodoxy opposition"
      },
      {
        when: "The Royal Persecution at Gangaikonda Cholapuram",
        event: "Standing in Ramanuja's robes alongside Koorathazhwan before the fanatic Chola King, refusing to sign the declaration that Shiva is supreme"
      },
      {
        when: "Blinding & Martyrdom",
        event: "Blinded by royal decree, passing away in the arms of Koorathazhwan and his daughter Attuzhai at Tirudanga (Pasupathikoil) while journeying back to Srirangam"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born in Srirangam into a distinguished scholarly family, Periya Nambi became the primary senior disciple of Sri Yamunacharya. He was renowned for his deep erudition, absolute humility, and profound mastery of both Sanskrit Vedantic texts and Tamil Divya Prabandham"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Transmitting the core teachings of Yamunacharya to Sri Ramanuja; initiating Ramanuja through Pancha Samskaram; sacrificing his eyes and life to preserve the Sampradaya against royal persecution"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Initiation of Ramanuja at Madurantakam: Following Yamunacharya’s demise, the Srirangam elders deputed Periya Nambi to travel to Kanchipuram and bring Ramanuja to lead the Sampradaya. Simultaneously, Ramanuja was traveling toward Srirangam. They met at the sacred temple of Eri-Katha Rama in Madurantakam. Recognizing that time was precious, Ramanuja requested immediate initiation. Beneath a Vakula tree in the temple precinct, Periya Nambi performed Pancha Samskaram (Branding with holy Conch and Discus symbols, applying Urdhva Pundra, bestowing the secret Mantras, adding the Dasa name, and initiating into worship), officially linking Ramanuja to the Sri Vaishnava lineage The Funeral Rites for Maraner Nambi: Maraner Nambi, a devoted disciple of Yamunacharya, belonged to an untouchable community. Before passing away, he requested Periya Nambi to perform his final rites so his body would not be touched by non-believers. Periya Nambi performed the full sacred funeral rituals (Samskara) for Maraner Nambi as a brother. When conservative scholars criticized him for violating caste norms, Periya Nambi replied: \"I am not greater than King Rama, who performed final rites for the vulture Jatayu, nor is Maraner Nambi lesser than Jatayu!\" Martyrdom for the Sampradaya: When the fanatic Chola King summoned Ramanuja to court to sign a decree stating \"Shivath Paratharam Nasti\" (\"There is no deity higher than Shiva\"), Koorathazhwan disguised himself in Ramanuja's saffron robes to protect his Acharya. Periya Nambi accompanied Koorathazhwan to the royal court at Gangaikonda Cholapuram. When both refused to sign the decree, establishing Sriman Narayana's supreme causality, the enraged King ordered their eyes to be gouged out. Aged Periya Nambi bore the torture with divine joy. As he was being carried back toward Srirangam, he breathed his last at Tirudanga (Pasupathikoil), attaining supreme martyrdom (Paramapadam)"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Senior disciple of Yamunacharya; Direct Samashrayana Acharya to Sri Ramanuja"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Attained supreme martyrdom at Pasupathikoil near Kumbakonam, resting his head on Koorathazhwan's lap"
        ]
      }
    ],
    legend: {
      title: "Madurantakam & Pasupathikoil",
      text: "Madurantakam is celebrated as the Dvaimatha Kshetram (the place where Ramanuja received spiritual rebirth through Periya Nambi). Pasupathikoil remains the holy shrine of Periya Nambi's ultimate sacrifice, proving that true Acharyas willingly surrender their lives to protect their disciples and the Tattva"
    },
    works: [
      {
        name: "Systematized oral commentaries on Tiruvaymoli transmitted directly to Sri Ramanuja"
      }
    ],
    preservation: "Preserved social equality within Sri Vaishnavism by honoring devotees regardless of caste (Maraner Nambi episode). He protected Sri Ramanuja’s life during the Chola persecution at the cost of his own",
    philosophicalTheme: "Bhagavata-Equality (Viewing all Vaishnavas as divine forms) and Acharya-Tyaga (Supreme self-sacrifice for the preceptor and Tattva)",
    verse: {
      work: "Invocation to Periya Nambi (Thaniyan composed by Sri Ramanuja)",
      tamil: "கமலாபதி கல்யாண குணாம்ருத நிஷேவயா ।\nபூர்ணகாமாய பூர்ணாய மஹாபூர்ணாய தீமஹீ ॥",
      translit: "Kamalapathi kalyana gunamrutha nishevaya Purnakamaya purnaya Mahapurnaya dhimahi",
      wordMeanings: [
        ["Kamalapathi", "Consort of Kamala (Goddess Lakshmi / Narayana)"],
        ["Kalyana guna", "auspicious divine attributes"],
        ["Amrutha", "divine nectar"],
        ["Nishevaya", "by drinking/contemplating perpetually"],
        ["Purna kamaya", "whose desires are completely fulfilled"],
        ["Purnaya", "who is whole/complete"],
        ["Maha Purnaya", "upon Sri Maha Purna (Periya Nambi)"],
        ["Dhimahi", "we meditate"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Sri Ramanuja composes this reverent invocation to his Acharya Periya Nambi (Maha Purna). He describes him as one who perpetually drinks the sweet nectar of Lord Narayana's infinite auspicious qualities (Kalyana Guna), reaching a state of total spiritual fulfillment (Purna Kama) and completeness (Maha Purna)"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes the essential quality of a true Acharya: being Purna Kama (completely free from material cravings) due to constant absorption in God's divine nature (Bhagavad-Guna-Anubhava)"
        },
        {
          heading: "Commentarial Insights",
          text: "Nampillai notes that Ramanuja gave the name Maha Purna (\"The Great Complete One\") to Periya Nambi because he was complete in every spiritual dimension—in wisdom, in compassion, in social courage, and in supreme sacrifice for the Sampradaya"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana or standing while performing Pancha Samskaram (holding sacred heated seals of Conch and Discus)",
        mudras: "Right hand held in Upadesha Mudra or applying Samashrayana marks, left hand resting on his lap",
        garments: "Dressed in traditional white scholarly vestments, bearing sacred thread, marked with twelve Urdhva Pundra (tilak) marks, wearing Tulasi garlands",
        idol: "At Srirangam and Madurantakam, Periya Nambi's icon depicts him standing alongside Sri Ramanuja under the Vakula tree, capturing the sacred moment of Ramanuja's initiation"
      },
      videoSearches: [
        "Periya Nambi Madurantakam Pancha Samskaram Velukkudi Krishnan",
        "Maha Purna Life History and Martyrdom Karunakarachariar",
        "Periya Nambi and Maraner Nambi Incident Ananthapadmanabhachariar"
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
  {
    id: "thirukachi-nambigal",
    name: "Thirukachi Nambigal",
    tamilName: "திருக்கச்சி நம்பிகள்",
    eraGroup: "Purvacharyas — the early masters",
    era: "c. 11th century CE",
    role: "Composed the Devaraja Ashtakam, rendered fan-service (Alavatta Kainkaryam) to Lord Varadaraja, and relayed Ramanuja’s six questions to Kanchipuram.",
    titles: [
      "Thirukachi Nambigal",
      "Kanchipoorna",
      "Gajendra Dasa",
      "Bhargava Priyar",
      "Alavatta Kainkaryaparar",
      "The Divine Intermediary who relayed the Six Words to Ramanuja"
    ],
    birthMonth: "Maasi (Kumbham)",
    birthStar: "Mrigasirsham",
    tithi: "Sukla Paksha Dasami",
    birthplace: {
      name: "Poovirundhavalli (Poonamallee, near Chennai)",
      district: "Thiruvallur District / Chennai Region, Tamil Nadu"
    },
    amsam: "Kanchipoorna (Aspect of Divine Hand-Fan / Celestial Attendant)",
    guru: "yamunacharya",
    sishyas: ["ramanuja"],
    associatedDesams: ["kanchi-varadaraja"],
    timeline: [
      {
        when: "Birth into Wealthy Merchant Family",
        event: "Born into a prosperous Vysya family at Poonamallee, rejecting secular commerce to dedicate his life to God"
      },
      {
        when: "Alavatta Kainkaryam at Kanchipuram",
        event: "Moving to Kanchipuram to perform daily hand-fan service (Alavatta Kainkaryam) and weave flower garlands for Lord Varadaraja"
      },
      {
        when: "Direct Conversation with Lord Varadaraja",
        event: "Reaching such spiritual purity that Lord Varadaraja spoke to him directly every night during fan service"
      },
      {
        when: "Mentorship of Sri Ramanuja",
        event: "Becoming the trusted mentor and friend of young Ramanuja in Kanchipuram"
      },
      {
        when: "The Six Words of Varadaraja",
        event: "Relaying Lord Varadaraja's six fundamental Vedantic answers (Six Words) to resolve Ramanuja's philosophical doubts"
      },
      {
        when: "Refusal of Acharya Status",
        event: "Refusing Ramanuja's request to become his formal Acharya out of extreme humility regarding his non-Brahmin merchant birth"
      },
      {
        when: "Service at Thirukoshtiyur",
        event: "Serving Thirukoshtiyur Nambi as a simple bullock-cart driver to demonstrate Bhagavata-Kainkaryam"
      },
      {
        when: "Ascension",
        event: "Merging into eternal service at the feet of Lord Varadaraja"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born under the name Gajendra Dasa into a wealthy merchant (Vysya) family in Poonamallee (Poovirundhavalli), Thirukachi Nambigal showed complete dispassion toward material business from youth. He moved to Kanchipuram, dedicating himself entirely to Lord Varadaraja"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Alavatta Kainkaryam (Fanning Lord Varadaraja with a handheld palm leaf fan) and Nandavana Kainkaryam (bringing fresh flowers and water for the Lord's morning bath)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "Direct Conversations with Lord Varadaraja: Every evening, while Thirukachi Nambigal fanned Lord Varadaraja inside the sanctum to relieve the Lord of the day's heat, Lord Varadaraja spoke to him as a close friend, answering his questions and discussing spiritual matters The Relaying of the Six Words (Aaru Varthaigal): When Sri Ramanuja experienced deep philosophical dilemmas while studying under Advaitic scholar Yadava Prakasa, he approached Thirukachi Nambigal. Ramanuja requested him to ask Lord Varadaraja directly for divine clarification. That night, Lord Varadaraja gave Thirukachi Nambigal six explicit Tamil sentences—the historic Six Words—to deliver to Ramanuja: Sriman Narayana is the Supreme Absolute Reality (Para Tattva) The Jiva and Paramatma are distinct (Bheda / Visishtadvaita) Self-surrender (Prapatti / Saranagati) is the ultimate means to salvation Remembrance at the moment of death (Antima Smriti) is not mandatory for a Prapanna Liberation (Mukthi) occurs immediately upon discarding the physical body Seek refuge at the feet of Periya Nambi as your formal Acharya Unmatched Humility: When Sri Ramanuja invited Thirukachi Nambigal to his house for lunch, intending to take his leftover food (Echil) as sacred prasadam and accept him as his Acharya, Thirukachi Nambigal outwitted him. Sensing Ramanuja's intention and wishing to preserve social norms and avoid exalting himself, Thirukachi Nambigal arrived early, ate quickly, and left quietly through the back door before Ramanuja returned, proving his absolute, self-effacing humility"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Disciple of Sri Yamunacharya; Revered spiritual guide and mentor to Sri Ramanuja"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Merged into eternal Kainkaryam at Kanchipuram, honored as one of the most exalted saints of the lineage"
        ]
      }
    ],
    legend: {
      title: "The Six Words of Kanchi Varadaraja",
      text: "The Six Words delivered by Lord Varadaraja through Thirukachi Nambigal form the explicit, divine foundation of Sri Vaishnava theology. It proved that Sri Ramanuja's philosophy was not a human invention, but a direct revelation from God Himself"
    },
    works: [
      {
        name: "Devaraja Ashtakam",
        pasurams: 8
      }
    ],
    preservation: "Served as the direct conduit for divine revelation (Six Words). He shattered caste-based pride by showing that direct communion with God depends solely on pure devotion (Bhakti/Prapatti), not birth",
    philosophicalTheme: "Sakhya Bhava (Devotional friendship with God) and Alavatta-Kainkaryam (Loving personal service)",
    verse: {
      work: "Devaraja Ashtakam, Verse 1 (Namaste Hastigiri Shekhara)",
      tamil: "நமஸ்தே ஹஸ்திகிரீஷேகராய ஸ்ரீவரதராஜாய ।\nஶ்ரீமதே விஷ்ணவே ஸர்வபூதஸாரண்யாய ॥",
      translit: "Namaste Hastigirishekharaya Sri Varadarajaya Srimate Vishnave sarvabhuta sharanyaya",
      wordMeanings: [
        ["Namaste", "Prostrations unto You"],
        [
          "Hastigiri shekharaya",
          "who resides as the crown peak of Hastigiri (Tirukacchi / Kanchipuram hill)"
        ],
        ["Sri Varadarajaya", "to Lord Varadaraja (King among boon-givers)"],
        ["Srimate", "who is eternally united with Sri Lakshmi"],
        ["Vishnave", "to Lord Vishnu (the All-Pervading One)"],
        ["Sarvabhuta sharanyaya", "who is the ultimate refuge for all living beings!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Thirukachi Nambigal opens his hymn of praise by saluting Lord Varadaraja presiding atop Hastigiri hill in Kanchipuram. He identifies Varadaraja as Sarvabhuta Sharanya—the supreme, compassionate protector of every living creature in existence"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Sharanyathvam (God as the universal refuge). In Visishtadvaita, Lord Varadaraja is renowned for His supreme generosity (Varada = giver of boons), granting the ultimate boon of liberation (Moksha) to anyone who surrenders to Him"
        },
        {
          heading: "Commentarial Insights",
          text: "Vedanta Desika highlights that Thirukachi Nambigal's Devaraja Ashtakam reflects his intimate relationship (Sakhya) with Lord Varadaraja. The hymn contains no complex intellectual dialectics, but pure, luminous devotion flowing from one who spoke face-to-face with God"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing gracefully holding a large handheld palm-leaf fan (Alavatta/Venchamaram) in service to Lord Varadaraja",
        mudras: "Hands holding the handle of the fan near his chest or folded in Anjali Mudra",
        garments: "Dressed in simple cotton vestments, marked with twelve Urdhva Pundra (tilak) marks, adorned with fresh Tulasi garlands and lotus seed beads",
        idol: "At Poonamallee and Kanchipuram Varadaraja Temple, Thirukachi Nambigal's icon depicts him with his handheld fan (Alavatta), permanently ready to serve Lord Varadaraja"
      },
      videoSearches: [
        "Thirukachi Nambigal Six Words History Velukkudi Krishnan",
        "Devaraja Ashtakam Upanyasam Karunakarachariar",
        "Thirukachi Nambigal and Ramanuja Relationship Ananthapadmanabhachariar"
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
  {
    id: "ramanuja",
    name: "Sri Ramanujacharya",
    tamilName: "ஸ்ரீ ராமானுஜர்",
    eraGroup: "The age of Ramanuja",
    era: "1017–1137 CE",
    role: "Codified the Visishtadvaita philosophy; wrote the Sri Bhashyam and led the Sri Vaishnava community at Srirangam.",
    titles: [
      "Sri Bhashyakarar",
      "Yatiraja",
      "Emperumanar",
      "Udayavar",
      "Sri Ramanuja",
      "Sri Bhashyakara",
      "Udaiyavar",
      "Lakshmana Muni",
      "Ilaiyazhwar",
      "Desikendra"
    ],
    birthMonth: "Chithirai",
    birthStar: "Thiruvadirai",
    tithi: "Sukla Paksha Saptami (Traditional dates 1017–1137 CE",
    birthplace: {
      name: "Sriperumbudur (Bhoothapuri)",
      district: "Kanchipuram District, Tamil Nadu, India"
    },
    amsam: "Adisesha, the serpent throne of the Lord",
    guru: "yamunacharya",
    sishyas: ["koorathazhwan", "mudaliyandan", "embar", "ananthazhwan", "vaduga-nambi", "vangipuram-nambi"],
    associatedDesams: ["kanchi-varadaraja", "srirangam", "thirukkoshtiyur", "thiruvellarai", "tirupati", "badari"],
    timeline: [
      {
        when: "Birth & Early Education",
        event: "Born as Ilaiyazhwar to Asuri Keshava Somayaji and Kanthimathi in Sriperumbudur"
      },
      {
        when: "Study under Yadava Prakasa",
        event: "Mastering Advaita Vedanta at Kanchipuram and pointing out philosophical flaws in his teacher's interpretations"
      },
      {
        when: "The Vindhya Rescue",
        event: "Escaping an assassination plot orchestrated by Yadava Prakasa through his cousin Govinda (Embar) and being guided back to Kanchipuram by Varadaraja Perumal and Perundevi Thayar in the guise of a hunter couple"
      },
      {
        when: "Service to Varadaraja",
        event: "Carrying water (Theertha Kainkaryam) daily from Salai Kinaru to Varadaraja Perumal under the guidance of Thirukachi Nambigal"
      },
      {
        when: "The Three Vows at Srirangam",
        event: "Arriving after Yamunacharya's demise and pledging to fulfill his three unfulfilled wishes, causing Yamunacharya's three folded fingers to straighten"
      },
      {
        when: "Pancha Samskaram at Madurantakam",
        event: "Initiated by Periya Nambi at Madurantakam"
      },
      {
        when: "Renunciation & Sannyasa",
        event: "Taking ascetic vows (Tridanda Sannyasa) at Kanchipuram Varadaraja Temple, receiving the name Yatiraja"
      },
      {
        when: "Broadcasting the Ashtakshara at Thirukoshtiyur",
        event: "Scaling the temple tower of Thirukoshtiyur to proclaim the secret Eight-Lettered Mantra (Om Namo Narayanaya) to all people regardless of caste"
      },
      {
        when: "Journey to Kashmir & Sri Bhashyam",
        event: "Retrieving the Bodhayana Vritti from the Sharada Peetham in Kashmir with Koorathazhwan and composing the Sri Bhashyam"
      },
      {
        when: "Refuge at Melkote (Thondanoor)",
        event: "Fleeing Chola persecution, converting Hoysala King Vishnuvardhana, recovering the idol of Cheluvanarayana Swamy (Ramapriya), and installing the Panchama community as Thirukulatthar"
      },
      {
        when: "Return to Srirangam & Final Departure",
        event: "Re-establishing Srirangam administration and entering Paramapadam after 120 years of continuous service"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into an orthodox Vedic family in Sriperumbudur, Ilaiyazhwar displayed unmatched intellect from childhood. He moved to Kanchipuram to study Vedanta under Yadava Prakasa, a prominent Advaita scholar. Disagreements arose when Ramanuja refuted Yadava Prakasa's interpretations—most famously concerning the Upanishadic phrase Tapyasam Kapyasam Pundarikam Evamakshini, where Yadava translated Kapyasam as \"the buttocks of a monkey.\" Ramanuja wept at this blasphemy and re-interpreted the phrase with linguistic rigor to mean \"luminous lotus blossoms opened by the morning sun.\""
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Systematizing Visishtadvaita philosophy, organizing temple rituals across South India, authoring Nine Gems of Literature (Navaratnas), and establishing social inclusivity within temple worship"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Hunter Couple at Vindhyas: Fearing Ramanuja's growing intellectual stature, Yadava Prakasa organized a pilgrimage to Varanasi with the secret intention of drowning Ramanuja in the Ganges. Alerted by his cousin Govinda (Embar), Ramanuja slipped away in the dense Vindhya forest. Lost and exhausted, a hunter couple appeared, guided him through the dark woods overnight, and requested water. When Ramanuja drew water from a nearby well, the couple vanished, and he found himself standing at the gates of Kanchipuram. He realized the hunters were Lord Varadaraja and Goddess Perundevi Proclaiming the Mantra at Thirukoshtiyur: Ramanuja traveled eighteen times from Srirangam to Thirukoshtiyur to seek initiation into the inner meaning of the Ashtakshara Mantra from Thirukoshtiyur Nambi. The Acharya bound him by oath to keep the mantra secret, warning that revealing it to the uninitiated would cause the teacher to go to hell. Driven by boundless compassion, Ramanuja climbed to the top of the Thirukoshtiyur temple tower, summoned the entire township, and shouted the sacred mantra for all to hear. When Thirukoshtiyur Nambi confronted him in rage, Ramanuja bowed humbly: \"I will gladly suffer in hell for my sin, if millions of suffering souls can attain salvation through this mantra!\" Stunned by his mercy, Thirukoshtiyur Nambi embraced him, calling him Emperumanar (\"Our Master\") The Composition of Sri Bhashya: To write an authoritative commentary on Badarayana's Brahma Sutras, Ramanuja needed the ancient manuscript Bodhayana Vritti. He traveled to Kashmir with Koorathazhwan. Though local scholars attempted to prevent him from taking the manuscript, Koorathazhwan read the text overnight, committing it to memory. When the manuscript was confiscated, Koorathazhwan recited it verbatim, allowing Ramanuja to dictate his masterpiece, the Sri Bhashyam The Melkote Exile & Thirukulatthar: Facing death threats from the fanatic Chola monarch who demanded all scholars sign a decree stating Shiva was supreme, Ramanuja donned white garments provided by Koorathazhwan and traveled to Karnataka. At Melkote (Thondanoor), he healed the princess of Hoysala King Bittideva, converting him to Sri Vaishnavism under the name Vishnuvardhana. When local outcastes helped recover the lost processional deity Ramapriya from the Sultan's court in Delhi, Ramanuja gave them the name Thirukulatthar (\"Children of the Divine Family\") and granted them temple entry rights during the annual festival"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Student of Periya Nambi (Primary Acharya), Thirukachi Nambigal, Thirukoshtiyur Nambi, Tirumalai Nambi, and Thirumalai Aandaan. Master to Koorathazhwan, Mudaliyandan, Embar, Parasara Bhattar, and 74 Simhasanadhipathis"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Having consolidated the Sri Vaishnava Sampradaya and leaving his physical body preserved in a seated posture (Thirumeni) inside the Srirangam temple complex (where it remains preserved to this day in the Vasantha Mandapam), he ascended to Paramapadam"
        ]
      }
    ],
    legend: {
      title: "Srirangam Thanana Thirumeni",
      text: "Sri Ramanuja's physical body at Srirangam is known as Thanaana Thirumeni (the body preserved naturally without embalming chemicals). For over eight centuries, his actual physical form has sat in Padmasana inside his dedicated shrine at the Srirangam temple, receiving twice-yearly applications of natural camphor and saffron paste"
    },
    works: [
      {
        name: "Sri Bhashya"
      },
      {
        name: "Vedartha Sangraha"
      },
      {
        name: "Gita Bhashyam"
      },
      {
        name: "Vedantadipa & Vedantasara"
      },
      {
        name: "Saranagati Gadya, Sriranga Gadya, Vaikuntha Gadya"
      },
      {
        name: "Nitya Grantham"
      }
    ],
    preservation: "Codified the Visishtadvaita philosophy, established temple administration frameworks (Srirangam Kovil Olugu), organized 74 administrative seats (Simhasanadhipathis), and institutionalized the equal status of the Tamil Dravida Veda alongside Sanskrit scriptures",
    philosophicalTheme: "Visishtadvaita (Qualified Non-Dualism: Jiva and Jagat form the body (Sareera) of Paramatma who is the Soul (Sareeri)) and Saranagati / Prapatti (Surrender as the universal, direct means to Moksha)",
    verse: {
      work: "Sri Bhashya Invocation (Yo Nityam Achyuta)",
      tamil: "அகிலபுவனஜன்மக்ஷேமாதிீலாய\nவிமலவிவிதவிஶ்வா his ஶேஷஷேஷிணே ।\nப்ப்ரஹ்மணி ஶ்ரீனிவாஸே பவது மம பரஸ்மின் ஶேமுஷீ பக்திரூபா ॥",
      translit: "Akhila bhuvana janma kshema dasadi leelaya Vimala vividha vishvadhisha shesha sheshine Brahmani Srinivase bhavatu mama parasmin shemushi bhaktirupa",
      wordMeanings: [
        ["Akhila bhuvana", "Of all universes"],
        ["Janma", "creation"],
        ["Kshema", "sustenance"],
        ["Dasa", "dissolution"],
        ["Adi", "and other divine activities"],
        ["Leelaya", "whose spontaneous sport"],
        ["Vimala", "immaculate/pure"],
        ["Vividha", "manifold"],
        ["Vishvadhisha", "master of the universe"],
        ["Shesha", "the dependent body/servant"],
        ["Sheshine", "who is the ultimate Master/Owner"],
        ["Brahmani", "in Brahman"],
        ["Srinivase", "who resides with Goddess Sri Lakshmi (Srinivasa)"],
        ["Bhavatu", "let there be"],
        ["Mama", "my"],
        ["Parasmin", "in the Supreme"],
        ["Shemushi", "intellect"],
        ["Bhaktirupa", "transformed into continuous devotional love (Bhakti-roopa-jnana)"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Sri Ramanuja opens the Sri Bhashya by defining the Supreme Absolute Brahman as Srinivasa—the Supreme Being irrevocably united with Sri Lakshmi. Creation, sustenance, and dissolution of all worlds are merely His spontaneous cosmic play (Leela). Ramanuja prays that his own intellect (Shemushi) may be transformed into unbroken, loving devotion (Bhakti-roopa-jnana) toward this Supreme Being"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes the Sareera-Sareeri Bhava (Body-Soul relationship). God is not a featureless, impersonal void (Nirguna Brahman); He is Saguna Brahman, possessing infinite auspicious attributes (Kalyana Guna) and acting as the Seshin (Owner/Master) of all Shesha (dependent entities)"
        },
        {
          heading: "Commentarial Insights",
          text: "Sudarshana Suri, in his commentary Srutaprakasika, highlights that the phrase Shemushi Bhaktirupa reconciles the debate between Knowledge (Jnana) and Devotion (Bhakti). In Visishtadvaita, true spiritual knowledge is not dry intellectual awareness, but intellect matured into passionate, continuous love for God"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana (Lotus Posture) with upright posture, wearing the saffron robes of a Tridandi Sannyasi",
        mudras: "Right hand held in Jnana Mudra (index finger touching thumb, signifying Vedantic truth) or Anjali Mudra, left hand holding the triple ascetic staff (Tridandam)",
        garments: "Dressed in saffron robes (Kasaya Vasthram), bearing the Tridandam, marked prominently with twelve Urdhva Pundra (holy white clay tilak) marks, wearing Tulasi seed bead garlands and an ornate crown/cap (Kurai) in specific temple representations",
        idol: "At Sriperumbudur, Ramanuja's idol is known as Thanugantha Thirumeni (the icon embraced and approved by Ramanuja himself during his lifetime)"
      },
      videoSearches: [
        "Sri Ramanuja Life History and Sri Bhashya Velukkudi Krishnan",
        "Ramanuja Viśiṣṭādvaita Philosophy Detailed Lecture Karunakarachariar",
        "Emperumanar Vaibhavam and Srirangam Reforms Ananthapadmanabhachariar"
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
  {
    id: "koorathazhwan",
    name: "Koorathazhwan",
    tamilName: "கூரத்தாழ்வான்",
    eraGroup: "The age of Ramanuja",
    era: "c. 11th–12th century CE",
    role: "Foremost disciple of Ramanuja; surrendered his own eyes to save the guru, and sang the Sri Varadaraja Panchasat.",
    titles: [
      "Kuresa",
      "Sri Vatsanka Misra",
      "Koorathazhwan",
      "Kuresan",
      "Sri Vatsanka Mishra",
      "Koorathalwar",
      "Azhwan",
      "The Chief Disciple of Ramanuja"
    ],
    birthMonth: "Thai (Makaram)",
    birthStar: "Hastam",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Kooram (near Kanchipuram)",
      district: "Kanchipuram District, Tamil Nadu, India"
    },
    amsam: "Panchajanya (The Divine Sacred Conch of Sriman Narayana)",
    guru: "ramanuja",
    sishyas: ["parasara-bhattar", "nanjiyyar"],
    associatedDesams: ["kanchi-varadaraja", "srirangam", "thirumaliruncholai"],
    timeline: [
      {
        when: "Birth & Enormous Wealth",
        event: "Born into a wealthy landlord family of the Harita clan in the village of Kooram"
      },
      {
        when: "Immense Charity at Kooram",
        event: "Opening his brass palace gates daily to feed thousands of poor travelers, earning fame for unmatched philanthropy"
      },
      {
        when: "The Brass Gate Echo",
        event: "The heavy brass gates of his mansion closing at night, making a resounding gong heard in Kanchipuram, causing Goddess Perundevi to ask Varadaraja Perumal about the noise"
      },
      {
        when: "Abandonment of Wealth",
        event: "Realizing his immense riches caused inconvenience to the Divine Couple, abandoning all his worldly property overnight and walking away with his wife Andalamma to become Ramanuja's disciple"
      },
      {
        when: "Discipleship under Ramanuja",
        event: "Becoming Ramanuja's chief assistant and intellectual right hand in Srirangam"
      },
      {
        when: "The Kashmir Bodhayana Vritti Triumph",
        event: "Traveling to Kashmir, memorizing the entire Bodhayana Vritti overnight, and dictating it to enable Ramanuja to write Sri Bhashyam"
      },
      {
        when: "Heroic Sacrifice at Chola Court",
        event: "Posing as Ramanuja in saffron robes before the hostile Chola King, defending Narayana's supremacy, and having his eyes gouged out by royal order"
      },
      {
        when: "Refusal of Revenge",
        event: "Refusing to curse his persecutors, praying instead for the Chola king's well-being"
      },
      {
        when: "Composition of Pancha Stava",
        event: "Authoring five masterworks of Sanskrit poetry in exile and blindness"
      },
      {
        when: "Regaining Vision & Departure",
        event: "Composing Varadaraja Stavam before Lord Varadaraja at Kanchipuram, receiving divine vision, and attaining Paramapadam before his master Ramanuja"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into an extraordinarily wealthy chieftain family in Kooram, Kuresan lived like a prince. He married Andalamma, a woman of deep piety. Kuresan was renowned for his boundless charity; his palace kitchens served free meals to thousands daily. One evening, when the heavy brass gates of his estate were shut after feeding the crowds, the resounding echo shook Kanchipuram. Inside the sanctum of the Varadaraja Temple, Goddess Perundevi inquired about the sound. Lord Varadaraja replied that it was the gate of Kuresan's mansion. Ashamed that his material wealth had interrupted the peace of the Divine Couple, Kuresan gave away all his lands, gold, and possessions overnight, leaving Kooram on foot with his wife to seek refuge at the feet of Sri Ramanuja"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Serving as the intellectual scribe, defender, and companion to Sri Ramanuja; memorizing manuscripts; authoring devotional Sanskrit hymns (Pancha Stava)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Feat of Memory in Kashmir: During their pilgrimage to the Sharada Peetham in Kashmir to consult the Bodhayana Vritti, local Pandits refused to lend the rare text to Ramanuja for more than a single night. Seeing Ramanuja's distress, Koorathazhwan read the voluminous manuscript continuously through the night, committing every single sutra and commentary to memory. When the Pandits confiscated the manuscript the following morning, Koorathazhwan recited the text word-for-word, allowing Ramanuja to write the Sri Bhashyam without hindrance The Sacrifice of His Eyes: When the Chola King summoned Ramanuja to force him to sign a decree stating Shiva was supreme, Koorathazhwan donned Ramanuja's saffron sannyasa robes and went to court alongside Periya Nambi. Facing the King, Koorathazhwan engaged in brilliant theological debate. When presented with the decree \"Shivath Paratharam Nasti\" (\"There is nothing higher than Shiva\"), Koorathazhwan added a clever linguistic pun: \"Dronam Asti!\" (\"A Drona measure is larger than a Shivam measure!\"). Enraged, the King ordered his guards to pluck out his eyes. Koorathazhwan declared: \"You need not bother your executioners; eyes that have looked upon a sinner who insults Narayana are of no use to me!\" and plucked out his own eyes Refusing Worldly Sight: Years later, when Ramanuja returned from Melkote, he took the blind Koorathazhwan to Kanchipuram and requested him to sing before Lord Varadaraja to regain his sight. Koorathazhwan composed the Varadaraja Stavam. Touched by his poetry, Lord Varadaraja offered to grant him his eyesight. Koorathazhwan asked only to behold the Lord's form and the form of his Acharya Ramanuja, refusing to use his vision to see worldly objects ever again"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Chief disciple to Sri Ramanuja; Acharya and father to Parasara Bhattar and Veda Vyasa Bhattar"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away at Srirangam before Ramanuja. Ramanuja wept inconsolably at his loss, declaring that he had lost his own eyes and spiritual foundation"
        ]
      }
    ],
    legend: {
      title: "Kooram Shrine & Pancha Stava",
      text: "The village of Kooram houses the birth temple of Koorathazhwan, where his original shrine is preserved. His monumental composition, the Pancha Stava, is regarded as an indispensable masterpiece of Sanskrit devotional literature, laying down the core tenets of Visishtadvaita through poetic praise"
    },
    works: [
      {
        name: "Sree Stavam",
        pasurams: 11
      },
      {
        name: "Atimanusha Stavam",
        pasurams: 61
      },
      {
        name: "Sundarabahu Stavam",
        pasurams: 132
      },
      {
        name: "Varadaraja Stavam",
        pasurams: 102
      },
      {
        name: "Vaikuntha Stavam",
        pasurams: 100
      }
    ],
    preservation: "Provided the intellectual raw material for the Sri Bhashyam through his extraordinary memory. He defended the doctrine of Purushakara Prapatti (Sri Lakshmi's mediation) and demonstrated the ultimate height of Guru-Bhakti",
    philosophicalTheme: "Atma-Guna-Purnathvam (Possession of all spiritual virtues, humility, and forgiveness) and Acharya-Parathanthriyam (Absolute subordination to the preceptor)",
    verse: {
      work: "Varadaraja Stavam, Verse 1 (Nirastasamastapaddhavam)",
      tamil: "ஸ்வஸ்தி ஶ்ரீயாஸ்கஸுதோத்தமாய நமோऽஸ்து குரேஶாய ।\nயத்ஸூக்திபிஃ ஹரிபதாம்புஜபக்திபாஜாம் ஶுத்திஃ பவேத் ॥",
      translit: "Swasti shriyaskasudhotthamaya namo 'stu Kureshaya Yatsuktibhih Harapadambuja bhaktibhajam shuddhih bhavet",
      wordMeanings: [
        ["Swasti", "May there be auspiciousness"],
        ["Shriyaska", "who grants eternal prosperity"],
        ["Sudhotthamaya", "who is purer than divine nectar"],
        ["Namo 'stu", "let prostrations be offered"],
        ["Kureshaya", "to Koorathazhwan (Kuresa)"],
        ["Yat suktibhih", "by whose sublime poetic verses"],
        ["Hari padambuja", "the lotus feet of Lord Hari"],
        ["Bhakti bhajam", "for those filled with devotion"],
        ["Shuddhih bhavet", "absolute purity is attained!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This invocation verse offers salutations to Koorathazhwan (Kuresa), praising his sacred poetry as purer than celestial nectar. By contemplating his verses (Pancha Stava), the mind of the devotee is cleansed of all material impurities, establishing unbroken attachment to the lotus feet of Lord Hari"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Stotra-Literature as an authentic medium for Vedantic realization. Koorathazhwan's poetry is not mere literary ornament; it is the systematic translation of complex Upanishadic truths into emotional, accessible devotion (Bhakti-Rasa)"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Vedanta Desika in his commentary on Pancha Stava notes that Koorathazhwan embodied the ideal of an Acharya who possessed zero personal ego (Ahamkara-Mamakara-Nivritti). His sacrifice for Ramanuja proves that true knowledge culminates in selfless service to the Guru"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing or seated in Anjali Mudra (folded hands), often depicted with eyes covered by a cloth or showing blind serenity reflecting his sacrifice",
        mudras: "Hands joined in eternal supplication (Anjali Mudra) held close to his chest",
        garments: "Simple traditional white vestments, marked with twelve Urdhva Pundra (tilak) marks, adorned with sacred thread and Tulasi garlands",
        idol: "At Kooram and Srirangam, Koorathazhwan's Moolavar idol captures his calm, compassionate demeanor, portraying him as the embodiment of patience and sacrifice"
      },
      videoSearches: [
        "Koorathazhwan Life History and Pancha Stava Velukkudi Krishnan",
        "Koorathazhwan Sacrifice at Chola Court Karunakarachariar",
        "Atimanusha Stavam and Varadaraja Stavam Ananthapadmanabhachariar"
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
  {
    id: "mudaliyandan",
    name: "Mudaliyandan",
    tamilName: "முதலியாண்டான்",
    eraGroup: "The age of Ramanuja",
    era: "11th–12th century CE",
    role: "Prime nephew and disciple of Ramanuja; systematised the administration of the Srirangam temple.",
    titles: [
      "Mudaliyandan",
      "Dasarathi",
      "Sri Rama Paduka Amsam",
      "Yathiraja Paduka",
      "Yandhan",
      "Senior Nephew of Sri Ramanuja"
    ],
    birthMonth: "Chithirai (Chaitra)",
    birthStar: "Punarvasu",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Pachai (Nazarethpettah, near Sriperumbudur)",
      district: "Kanchipuram District, Tamil Nadu, India"
    },
    amsam: "Tridandam (The Triple Ascetic Staff of Ramanuja) / Sri Rama’s Paduka (Divine Sandals) Amsam",
    guru: "ramanuja",
    sishyas: [],
    associatedDesams: ["kanchi-varadaraja", "srirangam", "srivilliputhur"],
    timeline: [
      {
        when: "Birth as Ramanuja's Nephew",
        event: "Born as Dasarathi to Anantha Somayaji and Nachiyarammal (Ramanuja's elder sister) at Pachai"
      },
      {
        when: "Absolute Surrender",
        event: "Surrendering to Sri Ramanuja at a young age and becoming his shadow and administrative right hand"
      },
      {
        when: "The Paduka Declaration",
        event: "Ramanuja declaring that while Koorathazhwan was his mind, Mudaliyandan was his very body and divine sandals (Yathiraja Paduka)"
      },
      {
        when: "Managing Srirangam Administration",
        event: "Appointed by Ramanuja as the chief administrator (Kevil Sree Karyam) of the Srirangam temple complex"
      },
      {
        when: "Reforming Temple Rituals",
        event: "Implementing strict organizational systems for temple priests, servants, and treasuries across major shrines"
      },
      {
        when: "The Srivilliputhur Conquest",
        event: "Subduing opposition at Srivilliputhur and other shrines through diplomatic firm authority"
      },
      {
        when: "The Sanctorum Water Blessing",
        event: "Placing his feet in the water tank at Thirumanjana Kovil to purify those afflicted by ailments"
      },
      {
        when: "Establishing the 74 Simhasanadhipathis",
        event: "Assisting Ramanuja in organizing 74 hereditary administrative lineages to propagate Visishtadvaita"
      },
      {
        when: "Attainment of Paramapadam",
        event: "Serving Srirangam faithfully until his final moments, entering Paramapadam shortly after Ramanuja"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born under the name Dasarathi in Pachai, he was Sri Ramanuja's sister's son. From childhood, Dasarathi showed complete dispassion toward worldly affairs, choosing to dedicate his life exclusively to serving his maternal uncle, Sri Ramanuja"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Temple administration (Srikarya Paripalanam); enforcement of discipline and liturgy; acting as the physical representative (Paduka) of Sri Ramanuja"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Identity as Ramanuja's Paduka: Sri Ramanuja famously remarked: \"Koorathazhwan is my mind (Jnana), but Mudaliyandan is my physical body (Sareera). He is my divine sandals (Paduka).\" Because of this unique status, when Ramanuja took Sannyasa and had to renounce all family relationships, he refused to renounce his bond with Mudaliyandan, declaring that one cannot renounce one's own feet or ascetic staff Refusal of Ego during Initiation: When Ramanuja sent Mudaliyandan to study under Thirukoshtiyur Nambi, Nambi made Mudaliyandan wait for six months without offering instruction to test his humility. Mudaliyandan performed simple household chores, cleaning the courtyard and caring for cattle without a trace of pride. Seeing his complete freedom from ego, Thirukoshtiyur Nambi embraced him and imparted the deepest esoteric truths Reforming Srirangam Administration: Ramanuja entrusted Mudaliyandan with the complete administrative charge of the Srirangam temple (Kovil Olugu). Mudaliyandan introduced rigorous accounting, structured priestly duties into ten traditional groups (Kothu), and ensured that the recitation of the Divya Prabandham was performed with proper decorum. His management was so flawless that he earned the title Mudaliyandan (\"The First Leader\")"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Prime nephew and disciple to Sri Ramanuja; Acharya to Kandhadhai Aandaan and founder of the Kandhadhai lineage"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away at Srirangam, leaving behind a legacy of organized temple administration that continues across South Indian shrines today"
        ]
      }
    ],
    legend: {
      title: "The Concept of Yathiraja Paduka",
      text: "In Sri Vaishnava theology, Mudaliyandan represents the ultimate archetype of Paduka-Prabhavatvam (the glory of the Lord's sandals). Just as Bharata worshiped Sri Rama's sandals in the Ramayana, Sri Vaishnavas revere Mudaliyandan as the living sandals of Sri Ramanuja"
    },
    works: [
      {
        name: "Systematized administrative manuals for Srirangam Kovil management"
      },
      {
        name: "Oral transmissions of Rahasya Arthas preserved through the Kandhadhai lineage"
      }
    ],
    preservation: "Built the operational, administrative, and institutional backbone of the Sri Vaishnava Sampradaya. He ensured that Ramanuja's philosophical reforms were practically enforced in temple worship",
    philosophicalTheme: "Acharya-Sareerathvam (Viewing oneself as the physical instrument/body of the Acharya) and Kainkarya-Nishta (Unwavering dedication to administrative service)",
    verse: {
      work: "Invocation to Mudaliyandan (Thaniyan)",
      tamil: "பாதுகே யதிராஜஸ்ய கதயந்தி யதாக்யயா ।\nதஸ்ய தாஸரதேஃ பாதாெ ஶிரஸா தாரயாம்யஹம் ॥",
      translit: "Paduke Yathirajasya kathayanti yadakhyaya Tasya Dasaratheh padau shirasa dharamyaham",
      wordMeanings: [
        ["Paduke", "The divine sandals"],
        ["Yathirajasya", "of Yathiraja (Sri Ramanuja)"],
        ["Kathayanti", "who is described"],
        ["Yad akhyaya", "by whose very name"],
        ["Tasya", "of that"],
        ["Dasaratheh", "Dasarathi (Mudaliyandan)"],
        ["Padau", "the lotus feet"],
        ["Shirasa", "upon my head"],
        ["Dharamyaham", "I bear with deep reverence!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This invocation verse offers salutations to Sri Mudaliyandan (Dasarathi), identifying him directly as the divine sandals (Paduka) of Sri Ramanuja (Yathiraja). The devotee places Mudaliyandan's lotus feet upon their head, seeking his grace to approach Ramanuja"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Illustrates Charama Parva Adhikara (The ultimate stage of surrender: taking refuge in the servant of the Guru). In Sri Vaishnavism, one approaches Sriman Narayana through Sri Lakshmi, Sri Lakshmi through Ramanuja, and Ramanuja through his divine sandals—Mudaliyandan"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Manavala Mamunigal in Upadesa Rathnamalai highlights that Mudaliyandan demonstrated how administrative authority (Srikaryam) can be executed with complete personal humility, serving as a model for all temple administrators"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in a posture of alert readiness or seated in Anjali Mudra beside Sri Ramanuja",
        mudras: "Hands joined in Anjali Mudra or holding a palm-leaf record scroll (Olai) detailing temple administration",
        garments: "Dressed in traditional white householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Nazarethpettah (Pachai) and Srirangam, Mudaliyandan's idol stands beside Ramanuja, capturing his role as the eternal shadow and protector of his master"
      },
      videoSearches: [
        "Mudaliyandan Life History and Srirangam Administration Velukkudi Krishnan",
        "Yathiraja Paduka Mudaliyandan Vaibhavam Karunakarachariar",
        "Mudaliyandan and 74 Simhasanadhipathis Ananthapadmanabhachariar"
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
  {
    id: "embar",
    name: "Embar",
    tamilName: "எம்பார்",
    eraGroup: "The age of Ramanuja",
    era: "11th–12th century CE",
    role: "Cousin and disciple of Ramanuja; his thaniyan on the guru is recited daily; Acharya to Parasara Bhattar.",
    titles: [
      "Embar",
      "Govinda Bhattar",
      "Govinda Jeeyar",
      "Ramanuja-Padanudhyatha",
      "The Reclaimed Saint of Kalahasti",
      "Successor to Ramanuja at Srirangam"
    ],
    birthMonth: "Thai (Makaram)",
    birthStar: "Punarvasu",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Mazhalaimangalam (Maduramangalam, near Sriperumbudur)",
      district: "Kanchipuram District, Tamil Nadu, India"
    },
    amsam: "Ananta / Adisesha aspect (Maternal cousin brother of Sri Ramanuja)",
    guru: "ramanuja",
    sishyas: ["parasara-bhattar"],
    associatedDesams: ["kanchi-varadaraja", "srirangam", "tirupati"],
    timeline: [
      {
        when: "Birth & Early Education",
        event: "Born as Govinda Bhattar to Kamalaksha Bhattar and Sridevi Ammal (Ramanuja's mother's sister) at Maduramangalam"
      },
      {
        when: "Rescuing Ramanuja at Vindhyas",
        event: "Alerting Ramanuja to Yadava Prakasa's murder plot during the Varanasi pilgrimage"
      },
      {
        when: "Conversion to Saivism at Kalahasti",
        event: "Finding a divine lingam in his hand while bathing at the Ganges, moving to Kalahasti, becoming a staunch Saivite, and taking the name Ullangai Startha Nayanar"
      },
      {
        when: "Reclamation by Thirumalai Nambi",
        event: "Thirumalai Nambi visiting Kalahasti, chanting Nammalwar's Pasurams outside his path, and re-awakening his Vaishnava heritage"
      },
      {
        when: "Renunciation & Sannyasa",
        event: "Discarding Saivite emblems, taking Vaishnava initiation, becoming an ascetic (Embar), and joining Ramanuja at Srirangam"
      },
      {
        when: "The Snake-in-Frog's-Mouth Miracle",
        event: "Putting his hand into a snake's mouth to remove a painful thorn choking a frog, demonstrating boundless compassion for all living beings"
      },
      {
        when: "Tending to Ramanuja's Bed",
        event: "Checking Ramanuja's bed for thorns by lying on it himself before his master slept"
      },
      {
        when: "Instructing Parasara Bhattar",
        event: "Chosen by Ramanuja to be the spiritual preceptor to Koorathazhwan's brilliant young son, Parasara Bhattar"
      },
      {
        when: "Head of Srirangam Math",
        event: "Succeeding Ramanuja as head of the Srirangam Math"
      },
      {
        when: "Attainment of Paramapadam",
        event: "Passing away after transferring spiritual leadership to Parasara Bhattar"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born in Maduramangalam as Ramanuja's maternal cousin, Govinda Bhattar was deeply attached to Ramanuja from childhood. During the pilgrimage to Varanasi with Yadava Prakasa, Govinda overheard the conspiracy to kill Ramanuja in the Vindhya forest and secretly warned him to flee"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Personal service (Antharanga Kainkaryam) to Sri Ramanuja; guardianship and education of Parasara Bhattar; leading the Srirangam Math"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Reclamation at Kalahasti: Continuing his pilgrimage to Varanasi, Govinda found a small lingam in his palm while bathing in the Ganges. Believing it to be a divine sign, he became a devoted Saivite ascetic at Kalahasti, known as Ullangai Startha Nayanar. Distressed that his brilliant cousin was lost to Saivism, Ramanuja requested their uncle Thirumalai Nambi to reclaim him. Thirumalai Nambi traveled to Kalahasti, stood near the garden where Govinda gathered flowers, and sang Nammalwar's Tiruvaymoli verse: \"Tanum Sivanum Brahmavum Tanaiyilla Vaanum...\" Hearing the supreme truth of Narayana expressed in sweet Tamil, Govinda threw away his flower basket, tore off his Saivite beads, fell at Thirumalai Nambi's feet, and returned to Sri Vaishnavism The Compassion for the Frog: One day, while walking with disciples, Embar saw a frog writhing in agony inside a bush. A venomous snake had swallowed the frog, but a sharp thorn was jammed in the snake's jaw, causing excruciating pain to both creatures. Without hesitating, Embar fearlessly thrust his hand into the snake's open mouth, removed the thorn, and freed the frog. When disciples warned him of the fatal poison, Embar replied: \"How could I worry about my physical body when two living beings created by Narayana were suffering before my eyes?\" Testing the Acharya's Bed: Every night, Embar inspected Ramanuja's bed before his master retired. He would lie down on the bed himself and roll across it. When criticized by other disciples for disrespecting the Acharya's bed, Embar explained: \"If there are hidden thorns or insects, let them bite my body first, so my Acharya may sleep peacefully.\" Moved by his selflessness, Ramanuja embraced him, calling him Embar (\"My Master\")"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Cousin and disciple to Sri Ramanuja; Reclaimed disciple of Thirumalai Nambi; Acharya to Parasara Bhattar"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away peacefully at Srirangam after handing over the reign of the Sri Vaishnava Sampradaya to Parasara Bhattar"
        ]
      }
    ],
    legend: {
      title: "Maduramangalam Shrine & Embar's Name",
      text: "Maduramangalam is the sacred birth site of Embar, housing a dedicated temple and holy tank. The name Embar was given to him by Sri Ramanuja as an abbreviation of Em-Perumanar (\"My Master\"), honoring his supreme personal devotion"
    },
    works: [
      {
        name: "Embar Thaniyan on Sri Ramanuja",
        language: "Sanskrit"
      }
    ],
    preservation: "Preserved the intellectual continuity of the Sampradaya by nurturing Parasara Bhattar, ensuring that Yamunacharya's second vow (naming a scholar after Parasara) bore fruit",
    philosophicalTheme: "Daya / Karunya (Universal compassion toward all living beings) and Antharanga Kainkaryam (Intimate personal service to the Guru)",
    verse: {
      work: "Invocation to Sri Ramanuja (Thaniyan composed by Embar)",
      tamil: "ஶ்ரீமத்யமுனமுனீந்த்ரபதாம்புஜப்ருங்காய ஶ்ரீமதே ।\nராமானுஜாய முனயே குரவே நமோऽஸ்து நஃ ॥",
      translit: "Srimad Yamunamunindra padambuja bhringaya srimate Ramanujaya munaye kurave namo 'stu nah",
      wordMeanings: [
        ["Srimad", "Possessing divine luster/grace"],
        ["Yamuna munindra", "of Yamunacharya, the prince among sages"],
        ["Pada ambuja", "lotus feet"],
        ["Bhringaya", "who acts like a humble honeybee"],
        ["Srimate", "who is accompanied by spiritual wealth"],
        ["Ramanujaya munaye", "to the sage Ramanuja"],
        ["Kurave", "to my supreme preceptor"],
        ["Namo 'stu nah", "let our humble salutations be offered!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Embar composes this invocation in honor of his Acharya, Sri Ramanuja. He compares Ramanuja to a golden honeybee (Bhringa) perpetually drinking the divine nectar flowing from the lotus feet of Sri Yamunacharya (Yamunamunindra)"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Demonstrates the principle of Guru-Parampara-Anusandhanam (Contemplating the unbroken chain of preceptors). Embar highlights that Ramanuja's authority derives directly from his deep absorption in the legacy of Yamunacharya"
        },
        {
          heading: "Commentarial Insights",
          text: "Nampillai highlights that Embar chose the metaphor of a honeybee (Bhringa) because a bee collects only sweet nectar without harming the flower. Similarly, Ramanuja extracted the pure essence of Vedic truth (Vedartha Sangraha) without distorting scriptural texts"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana or standing in Anjali Mudra facing Sri Ramanuja",
        mudras: "Hands joined in Anjali Mudra or held in Jnana Mudra",
        garments: "Dressed in ascetic robes (Kasaya Vasthram), marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi seed garlands",
        idol: "At Maduramangalam and Srirangam, Embar's idol captures his serene, compassionate expression, capturing his identity as the gentle saint who rescued both frogs and disciples"
      },
      videoSearches: [
        "Embar Life History and Kalahasti Reclamation Velukkudi Krishnan",
        "Embar Compassion and Frog Miracle Karunakarachariar",
        "Maduramangalam Embar Vaibhavam Ananthapadmanabhachariar"
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
  {
    id: "ananthazhwan",
    name: "Ananthazhwan",
    tamilName: "ஆண்டான் ஆழ்வான்",
    eraGroup: "The age of Ramanuja",
    era: "11th–12th century CE",
    role: "Prime disciple of Ramanuja and pioneer of the Tirumala Vaishnava community; tended the Lord’s garden.",
    titles: [
      "Ananthazhwan",
      "Sri Ananthacharya",
      "Ananthasuri",
      "Tirumala Nandavanam Piran",
      "Sri Venkateswara Matrubhoota"
    ],
    birthMonth: "Chithirai (Chaitra)",
    birthStar: "Chithirai",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Sirudhavoor (near Chengalpattu / Kanchipuram)",
      district: "Kanchipuram District, Tamil Nadu, India"
    },
    amsam: "Ananta / Adisesha (Divine Serpent Bed aspect of Sriman Narayana)",
    guru: "ramanuja",
    sishyas: [],
    associatedDesams: ["tirupati", "srirangam"],
    timeline: [
      {
        when: "Birth & Discipleship under Ramanuja",
        event: "Born at Sirudhavoor and traveling to Srirangam to become a leading disciple of Sri Ramanuja"
      },
      {
        when: "Accepting the Tirumala Mandate",
        event: "Voluntarily stepping forward when Ramanuja asked who would go to Tirumala to establish a flower garden (Nandavanam) for Lord Venkateswara"
      },
      {
        when: "Creating the Garden & Tank",
        event: "Digging a lake (Ananthasaras) and planting a garden on Tirumala hill with his pregnant wife"
      },
      {
        when: "The Crowbar Miracle",
        event: "Lord Venkateswara taking the form of a young boy to help his tired wife, Ananthazhwan striking the boy with a crowbar, and the Lord's chin bleeding inside the sanctum"
      },
      {
        when: "The Snake Bite Incident",
        event: "Refusing treatment after being bitten by a cobra, demonstrating absolute dependence on Lord Venkateswara"
      },
      {
        when: "Authoring Godha Chatusshloki",
        event: "Composing four verses praising Andal's grace"
      },
      {
        when: "Ascension",
        event: "Merging into the holy Tamarind tree precinct at Tirumala"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into an orthodox Vedic family in Sirudhavoor, Ananthazhwan moved to Srirangam to surrender at the feet of Sri Ramanuja. He was renowned for his unwavering obedience to his Acharya's word and his physical stamina in Kainkaryam"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Nandavana Kainkaryam (Establishing and maintaining the flower garden at Tirumala) and Pushpa-Kainkaryam (weaving daily garlands for Lord Venkateswara)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Tirumala Garden Assignment: During a discourse on Nammalwar's Tiruvaymoli, Sri Ramanuja reached the verse Sindhoo Poomagizhum Thiruvengadatthu, which expresses the desire to offer fresh flowers to Lord Venkateswara. Ramanuja asked his assembly: \"Who among you will go to Tirumala to dig a tank and plant a garden for the Lord?\" While others hesitated due to the dense forests and wild animals on Tirumala hill, Ananthazhwan stood up instantly, declaring: \"I shall obey my Acharya's command!\" The Crowbar and the Bleeding Chin: While digging a pond for the garden, Ananthazhwan worked relentlessly alongside his pregnant wife. Pitying her exhaustion, Lord Venkateswara assumed the form of a young Brahmin boy and began assisting her by carrying baskets of earth. When Ananthazhwan noticed the boy helping, he grew angry that an outsider was intruding upon their exclusive Kainkaryam to his Acharya. He chased the boy and threw a crowbar at him, striking him on the chin. The boy ran into the temple sanctum. When Ananthazhwan entered the temple later that evening, he was stunned to see blood trickling from the chin of the Moolavar idol of Lord Venkateswara. Realizing the boy was the Lord Himself, Ananthazhwan wept and applied camphor to the wound. To this day, camphor (Paccai Karpooram) is applied to Lord Venkateswara's chin, and the original crowbar hangs at the entrance of the Tirumala temple The Snake Bite Test: While working in the garden, Ananthazhwan was bitten by a venomous cobra. When fellow devotees urged him to seek a physician or recite a protective mantra, he refused, saying: \"If the snake that bit me is stronger, I will bathe in the holy Koneri tank and reach Sri Vaikuntham. If the snake of my Acharya's grace is stronger, I will stay here and continue my garden service.\" He simply bathed in the Swami Pushkarini tank and returned to work completely unharmed"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Prime disciple of Sri Ramanuja; pioneer of the Tirumala Vaishnava community"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: ["Passed away at Tirumala, transforming into a sacred Magizha tree near the temple precinct"]
      }
    ],
    legend: {
      title: "The Crowbar at Tirumala Entrance",
      text: "The iron crowbar used by Ananthazhwan hangs on the outer wall of the main entrance (Mahadwaram) of the Tirumala temple. It stands as an enduring physical monument to an Acharya's absolute dedication to physical Kainkaryam"
    },
    works: [
      {
        name: "Godha Chatusshloki",
        pasurams: 4
      },
      {
        name: "Venkatachala Itihasa Mala"
      }
    ],
    preservation: "Established the continuous Sri Vaishnava liturgical and garden tradition at Tirumala. He defended Sri Ramanuja's administrative procedures on the holy hill against local opposition",
    philosophicalTheme: "Acharya-Aagya-Palanam (Unquestioning obedience to the Acharya's word) and Kainkarya-Nishta",
    verse: {
      work: "Godha Chatusshloki, Verse 1 (Sri Vishnu Chitta Kula Nandanakalpa Vallim)",
      tamil: "ஶ்ரீவிஷ்ணுசித்தகுலநந்தனகல்பவல்லீம்\nஶ்ரீரங்கராஜஹரிசந்தனயோகத்ருஶ்யாம் ।\nஸாக்ஷாத் க்ஷமாம் கருணயா கமலாமிவாந்யாம்\nகோதாமனந்யஶரணஃ ஶரணம் ப்ரபத்யே ॥",
      translit: "Sri Vishnu Chitta kula nandana kalpa vallim Sri Rangaraja harichandana yoga drushyam Sakshat kshamam karunaya Kamalam ivanyam Godham ananya sharanah sharanam prapadye",
      wordMeanings: [
        ["Sri Vishnu Chitta", "Of Periyalwar (Vishnuchitta)"],
        ["Kula", "dynasty/family"],
        ["Nandana", "delighting"],
        ["Kalpa vallim", "the wish-fulfilling divine creeper"],
        ["Sri Rangaraja", "of Lord Ranganatha"],
        ["Harichandana", "the sacred sandal tree"],
        ["Yoga drushyam", "beautiful when united with"],
        ["Sakshat kshamam", "patience/Mother Earth personified"],
        ["Karunaya", "by compassion"],
        ["Kamalam iva anyam", "like a second Goddess Lakshmi"],
        ["Godham", "unto Goddess Andal"],
        ["Ananya sharanah", "having no other refuge"],
        ["Sharanam prapadye", "I take absolute surrender!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Ananthazhwan offers prostration to Goddess Andal (Godha), describing her as a celestial wish-fulfilling vine (Kalpa Valli) originating in the garden of Periyalwar. She winds gracefully around the sandal-wood tree of Lord Ranganatha (Sri Rangaraja), embodying the patience of Mother Earth (Bhu Devi) and the boundless mercy of Goddess Lakshmi (Kamala)"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Purushakara-Tattva (Mediation of the Divine Mother). In Visishtadvaita, Andal is approached not only as an Azhwar, but as an incarnation of Bhu Devi who intercedes on behalf of bound souls (Samsarins)"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Vedanta Desika praised Godha Chatusshloki as the primary inspiration for his own Godha Stuti, noting that Ananthazhwan captured the essence of Andal's dual role as devotee and divine Queen in just four verses"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in a posture of physical labor holding a crowbar (Padarai) and basket (Poodai), or seated in Anjali Mudra",
        mudras: "Hands carrying garden tools or joined in prayer (Anjali Mudra)",
        garments: "Dressed in simple cotton vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing Tulasi seed bead garlands",
        idol: "At Tirumala and Sirudhavoor, Ananthazhwan's icon depicts him with his garden basket and crowbar, permanently dedicated to Lord Venkateswara's floral service"
      },
      videoSearches: [
        "Ananthazhwan Tirumala History and Crowbar Miracle Velukkudi Krishnan",
        "Godha Chatusshloki Lecture Karunakarachariar",
        "Ananthazhwan Vaibhavam at Tirumala Ananthapadmanabhachariar"
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
  {
    id: "vaduga-nambi",
    name: "Vaduga Nambi",
    tamilName: "வடுக நம்பி",
    eraGroup: "The age of Ramanuja",
    era: "11th–12th century CE",
    role: "Personal attendant and intimate disciple of Ramanuja; chronicled his life in the Yathiraja Vaibhavam.",
    titles: [
      "Vaduga Nambi",
      "Andhrapurna",
      "Salagramam Piran",
      "Ramanuja-Ekantha-Sishya",
      "Exemplar of Acharya-Abhimana-Nishta"
    ],
    birthMonth: "Chithirai (Chaitra)",
    birthStar: "Aswini",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Salagramam (Karnataka region)",
      district: "Mysuru / Hassan Region, Karnataka, India"
    },
    amsam: "Madhurakavi Azhwar aspect (Re-manifestation of Madhurakavi's absolute Guru-devotion)",
    guru: "ramanuja",
    sishyas: [],
    associatedDesams: ["salagramam", "srirangam"],
    timeline: [
      {
        when: "Birth at Salagramam",
        event: "Born in the Karnataka village of Salagramam"
      },
      {
        when: "Encounter with Sri Ramanuja",
        event: "Surrendering to Sri Ramanuja during Ramanuja's journey to Melkote and becoming his intimate personal attendant (Ekantha Kainkaryaparar)"
      },
      {
        when: "Absolute Devotion to the Guru",
        event: "Refusing to look at temple deities, considering Sri Ramanuja's physical form as his sole God (Devu Matrariyen)"
      },
      {
        when: "The Boiling Milk Incident",
        event: "Boldly refusing to step out to see the royal procession of Lord Ranganatha because he was boiling milk for Ramanuja"
      },
      {
        when: "Authoring Yathiraja Vaibhavam",
        event: "Chronicling the life and divine activities of Sri Ramanuja"
      },
      {
        when: "Ascension",
        event: "Entering Paramapadam shortly after Ramanuja's departure"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into a Kannada-speaking family in Salagramam, Vaduga Nambi met Sri Ramanuja during the master's stay in Karnataka. Captivated by Ramanuja's spiritual luster, Vaduga Nambi abandoned all worldly attachments and became Ramanuja's personal servant (Ekantha Sishya)"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Antharanga Kainkaryam (Preparing warm milk, carrying the ascetic staff, and tending to Ramanuja's physical needs)"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Boiling Milk Incident: One day, the grand annual procession (Uthsavam) of Lord Ranganatha was passing right outside Ramanuja's residence in Srirangam. Drums sounded and thousands cheered. Ramanuja called out to Vaduga Nambi: \"Vaduga, come out and behold the divine beauty of Lord Ranganatha!\" Vaduga Nambi replied from the kitchen: \"If I come out to see your Ranganatha, the milk I am boiling for my Ranganatha (Ramanuja) will boil over!\" This incident proved that for Vaduga Nambi, Sri Ramanuja was not just a Guru, but the Supreme Being Himself Refusal to Gaze upon Temple Deities: When accompanying Ramanuja into temple sanctums across India, Vaduga Nambi would keep his eyes fixed firmly on Sri Ramanuja's face, never turning to look at the stone or metal idols (Moolavars). When asked why, he quoted Madhurakavi Azhwar's verse: \"Devu Matrariyen\" (\"I know no other God than my Acharya\"). He stated: \"My eyes that have seen the living embodiment of grace—Ramanuja—have no desire to see anything else.\" The Holy Sandals Protection: Vaduga Nambi carried Sri Ramanuja's sacred sandals (Paduka) wrapped in a clean cloth everywhere they traveled, treating them with higher reverence than temple holy water (Theertham)"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Personal attendant and intimate disciple to Sri Ramanuja"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Unable to endure life on earth after Sri Ramanuja's departure, Vaduga Nambi passed away shortly thereafter at Srirangam"
        ]
      }
    ],
    legend: {
      title: "The Archetype of Acharya-Nishta",
      text: "Vaduga Nambi is venerated in Sri Vaishnava tradition as the post-Ramanuja re-manifestation of Madhurakavi Azhwar. He demonstrated that Acharya-Abhimana-Nishta (total absorption in the Acharya) is an independent, complete path to salvation"
    },
    works: [
      {
        name: "Yathiraja Vaibhavam"
      },
      {
        name: "Ramanuja Ashtottara Shatanama Stotram (The 108 sacred names of Sri Ramanuja)"
      }
    ],
    preservation: "Preserved the authentic biographical details of Sri Ramanuja's life through eye-witness accounts. He established the liturgical practice of worshiping Sri Ramanuja in daily household rituals",
    philosophicalTheme: "Charama-Parva-Nishta / Acharya-Devatvam (Viewing the Acharya as the Supreme Deity)",
    verse: {
      work: "Yathiraja Vaibhavam Invocation (Ramanujam Muni-Pattanam)",
      tamil: "ராமானுஜோ விஜயதே யதிராஜராஜஃ\nகாருண்யராஶிரபிராமகுணாபிராமஃ ।\nதத்பாதபங்கஜரஜோத்ருதஉத்தமாங்கஃ\nவடுகாபிதானமுனிரேஷ பஜே ததாக்கியாம் ॥",
      translit: "Ramanujo vijayate yathirajarajah Karunyarashir abhiramagunabhiramah Tatpadapankajarajodhruta utthamangah Vadukabhidhana muniresha bhaje tadakhyam",
      wordMeanings: [
        ["Ramanujo", "Sri Ramanuja"],
        ["Vijayate", "stands eternally victorious"],
        ["Yathirajarajah", "the King of Kings among ascetics"],
        ["Karunyarashir", "an ocean of compassion"],
        ["Abhirama guna abhiramah", "charming due to His delightful qualities"],
        ["Tat pada pankaja rajo", "the dust of His lotus feet"],
        ["Dhruta utthamangah", "wearing upon his head"],
        ["Vadukabhidhana munir", "the sage named Vaduga Nambi"],
        ["Esha", "this servant"],
        ["Bhaje tadakhyam", "worships His holy name continuously!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Vaduga Nambi proclaims the eternal victory of Sri Ramanuja—the King of Ascetics and ocean of compassion. He describes himself as one whose head is permanently adorned with the sacred dust from Ramanuja's lotus feet (Tat Pada Pankaja Rajo), knowing no other spiritual practice than chanting Ramanuja's name"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Acharya-Padadhooli-Mahima (The supreme power of the dust of the Acharya's feet). In Sri Vaishnavism, the dust of the Acharya's feet is the ultimate purifier, capable of destroying all residual Karmic bonds"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Manavala Mamunigal highlights that Vaduga Nambi's writings are free from poetic exaggeration because they were written by an eye-witness who lived as Ramanuja's shadow for decades"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in Anjali Mudra or carrying Sri Ramanuja's ascetic staff (Tridandam) and sandals (Paduka)",
        mudras: "Hands joined in prayer (Anjali Mudra) or holding a vessel of warm milk",
        garments: "Dressed in simple householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Salagramam and Srirangam, Vaduga Nambi's icon stands gazing directly at Sri Ramanuja's form, capturing his singular focus on his Guru"
      },
      videoSearches: [
        "Vaduga Nambi Life History and Boiling Milk Incident Velukkudi Krishnan",
        "Yathiraja Vaibhavam Lecture Karunakarachariar",
        "Acharya Abhimana Nishta Vaduga Nambi Ananthapadmanabhachariar"
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
  {
    id: "vangipuram-nambi",
    name: "Vangipuram Nambi",
    tamilName: "வாங்கிபுரம் நம்பி",
    eraGroup: "The age of Ramanuja",
    era: "11th–12th century CE",
    role: "Keeper of Ramanuja’s daily conversations and practical instructions (Vartha Malai).",
    titles: [
      "Vangipuram Nambi",
      "Vangipura Piran",
      "Sri Ramanuja-Ekantha-Sishya",
      "Transcriber of Vartha Malai"
    ],
    birthMonth: "Chithirai (Chaitra)",
    birthStar: "Chithirai",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Vangipuram (Andhra / Tamil border region)",
      district: "Andhra Pradesh / Tamil Nadu border region"
    },
    amsam: "Celestial Attendant aspect",
    guru: "ramanuja",
    sishyas: [],
    associatedDesams: ["srirangam", "kanchi-varadaraja"],
    timeline: [
      {
        when: "Birth at Vangipuram",
        event: "Born into a pious Vedic family in Vangipuram"
      },
      {
        when: "Surrender to Sri Ramanuja",
        event: "Moving to Srirangam, surrendering to Sri Ramanuja, and becoming one of his trusted internal disciples (Antharanga Sishya)"
      },
      {
        when: "Transcribing Ramanuja's Daily Instructions",
        event: "Carefully recording Sri Ramanuja's informal answers, daily conversations, and practical advice into Vartha Malai"
      },
      {
        when: "Codifying Prapanna Rituals",
        event: "Formulating clear rules for daily conduct (Ahnika Grantham) for Prapannas"
      },
      {
        when: "Attainment of Liberation",
        event: "Merging into Paramapadam at Srirangam after serving Ramanuja's lineage"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born in Vangipuram, he moved to Srirangam to seek refuge at the feet of Sri Ramanuja. Recognized for his keen listening skills and deep devotion, he became an intimate attendant (Antharanga Sishya) to Ramanuja"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Transcribing Sri Ramanuja's oral teachings into Vartha Malai; documenting practical daily rituals (Nitya Karma) for Sri Vaishnava householders"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "Transcribing Vartha Malai: While other disciples focused on formal Sanskrit commentaries like Sri Bhashya, Vangipuram Nambi recognized the immense practical value of Ramanuja's informal, daily instructions. Whenever Ramanuja answered a disciple's personal doubt, explained a pasuram over meals, or gave advice on daily conduct, Vangipuram Nambi recorded it. This collection became the famous Vartha Malai (\"Garland of Sacred Conversations\"), an indispensable guide to Sri Vaishnava practical living Codifying Prapanna Ahnika: He formulated practical manuals detailing how a Prapanna (one who has surrendered to God) should spend their day from dawn to nightfall, emphasizing Pancharatra worship, diet, speech, and attitude toward other devotees"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Intimate disciple to Sri Ramanuja"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: ["Passed away peacefully at Srirangam"]
      }
    ],
    legend: {
      title: "The Value of Vartha Malai",
      text: "Vartha Malai preserved by Vangipuram Nambi provides a rare, intimate window into Sri Ramanuja's daily personality and informal teachings, serving as a practical handbook for householder devotees"
    },
    works: [
      {
        name: "Vartha Malai"
      },
      {
        name: "Prapanna Ahnika Grantham"
      }
    ],
    preservation: "Preserved the practical, lived dimension of Visishtadvaita. He ensured that Ramanuja's teachings were accessible to everyday householders, not just formal scholars",
    philosophicalTheme: "Prapanna-Anustana-Nishta (Practical execution of surrender in daily life)",
    verse: {
      work: "Invocation to Vangipuram Nambi (Thaniyan)",
      tamil: "ஶ்ரீமத் ராமானுஜார்யஸ்ய கதாம்ருதமஹாஸரம் ।\nயோऽக்ருஹ்ணாத் வங்கிபுராதீஶம் தம் வந்தே குருமுத்தமம் ॥",
      translit: "Srimad Ramanujaryasya kathamruthamahasaram Yo 'gruhnat Vangipuradhisam tam vande gurumuttamam",
      wordMeanings: [
        ["Srimad", "Possessing spiritual grace"],
        ["Ramanujaryasya", "of Sri Ramanuja"],
        ["Kathamrutha mahasaram", "the supreme nectar-essence of daily conversations"],
        ["Yah agruhnat", "he who captured and compiled"],
        ["Vangipuradhisam", "the master of Vangipuram (Vangipuram Nambi)"],
        ["Tam vande", "him I salute"],
        ["Gurum uttamam", "the supreme preceptor!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This invocation verse offers salutations to Vangipuram Nambi, praising him as the master scholar who captured and compiled the supreme nectar-essence (Kathamrutha) of Sri Ramanuja's daily conversations for the benefit of future generations"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Loka-Upakaram (Service to humanity through documentation). Spiritual wisdom remains incomplete unless translated into practical guidelines for daily life (Anustana)"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Manavala Mamunigal frequently cited Vartha Malai in his commentaries, honoring Vangipuram Nambi as an eye-witness recorder of Ramanuja's authentic words"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana, writing upon palm leaves with a stylus",
        mudras: "Right hand holding a writing stylus, left hand holding a palm-leaf scroll",
        garments: "Dressed in simple householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Srirangam and Vangipuram, his icon depicts him seated at Sri Ramanuja's feet, recording his master's words"
      },
      videoSearches: [
        "Vangipuram Nambi Vartha Malai Velukkudi Krishnan",
        "Prapanna Ahnika Guidelines Karunakarachariar",
        "Vangipuram Nambi Life Ananthapadmanabhachariar"
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
  {
    id: "parasara-bhattar",
    name: "Parasara Bhattar",
    tamilName: "பராசர பட்டர்",
    eraGroup: "The age of Ramanuja",
    era: "c. 12th century CE",
    role: "Son and disciple of Koorathazhwan; renowned exponent of Bhagavad Vishaya and the Vishnu Sahasranama.",
    titles: [
      "Sri Bhashya Bhattar",
      "Parasara Bhattar",
      "Ranganatha Kumara",
      "Bhattar",
      "Vedanti-Vijayi",
      "Author of Bhagavad Guna Darpanam"
    ],
    birthMonth: "Vaikasi (Vaisakha)",
    birthStar: "Anusham (Anuradha)",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Srirangam",
      district: "Tiruchirappalli District, Tamil Nadu, India"
    },
    amsam: "Ranganatha-Amsam / Koorathazhwan’s Son (Fulfilling Yamunacharya's second vow to name a scholar after Sage Parasara)",
    guru: "koorathazhwan",
    sishyas: [],
    associatedDesams: ["srirangam", "kanchi-varadaraja"],
    timeline: [
      {
        when: "Miraculous Birth & Naming",
        event: "Born as the twin son of Koorathazhwan and Andalamma, named Parasara by Sri Ramanuja to fulfill Yamunacharya's second pledge"
      },
      {
        when: "Child Prodigy at Srirangam",
        event: "Growing up inside the Srirangam temple sanctum, fed on the holy prasadam of Goddess Ranganayaki, outwitting senior scholars at age five"
      },
      {
        when: "Defeating the Arrogant Scholar",
        event: "Outwitting an arrogant visiting scholar at age seven by asking him to explain a simple grain of sand"
      },
      {
        when: "Initiation by Embar",
        event: "Instructed in esoteric Vedantic wisdom by Embar"
      },
      {
        when: "Succeeding Ramanuja",
        event: "Appointed by Ramanuja as the leader of the Sri Vaishnava Sampradaya at Srirangam"
      },
      {
        when: "The Mission to Melkote",
        event: "Traveling to Karnataka to debate and convert the Advaitic titan Madhavacharya (Vedanti), naming him Nanjiyyar"
      },
      {
        when: "Authoring Master Treatises",
        event: "Authoring Ashtashloki, Bhagavad Guna Darpanam (Vishnu Sahasranama commentary), and Srirangaraja Stavam"
      },
      {
        when: "Attainment of Liberation",
        event: "Passing away at the young age of twenty-eight, ascending to Paramapadam to serve Lord Ranganatha in the celestial realm"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "o Koorathazhwan and Andalamma through the grace of Lord Ranganatha's prasadam, young Parasara was brought before Sri Ramanuja. Ramanuja held the infant, wept with joy, and named him Parasara to fulfill the second curved-finger vow made to Yamunacharya. Parasara spent his childhood inside the inner enclosures of the Srirangam temple, treated by Goddess Ranganayaki as Her own child"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Heading the Srirangam Sampradaya after Ramanuja; authoring definitive Sanskrit commentaries; defending Visishtadvaita through philosophical debate"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Five-Year-Old Defeats a Scholar: When a famed scholar arrived in Srirangam riding a palanquin and challenging all local Pandits, five-year-old Parasara Bhattar picked up a handful of dust, approached the scholar, and asked: \"Tell me how many grains of sand are in my hand!\" The scholar was stunned into silence. Parasara laughed: \"If you do not even know the measurement of this dust, how can you claim to know the infinite Brahman?\" The scholar bowed before the child's intuitive wisdom The Conversion of Vedanti: Fulfilling Ramanuja's command, Parasara Bhattar traveled to Melkote, entered the mansion of Advaitic scholar Vedanti, and challenged him to a debate. Over nine days of intense intellectual discourse, Bhattar established Visishtadvaita using Upanishadic logic and Tiruvaymoli. Vedanti surrendered his wealth, took sannyasa, moved to Srirangam, and became Bhattar's premier disciple under the name Nanjiyyar Authoring Bhagavad Guna Darpanam: Bhattar composed Bhagavad Guna Darpanam (\"The Mirror of Divine Qualities\"), a classic Sanskrit commentary on the Vishnu Sahasranama. Unlike Advaitic commentaries that interpret the names as featureless consciousness, Bhattar interpreted every single name as celebrating Sriman Narayana's Kalyana Gunas (auspicious attributes) and Saulabhya (accessibility)"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Twin son of Koorathazhwan; Disciple of Embar; Acharya to Nanjiyyar"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away at the young age of 28, declaring that he was eager to go to Paramapadam to see Lord Narayana's beauty in the celestial realm"
        ]
      }
    ],
    legend: {
      title: "Ranganatha's Divine Child",
      text: "Parasara Bhattar was uniquely designated as Ranganatha Kumara (The Son of Lord Ranganatha). Legend states that Goddess Ranganayaki Herelf fed young Bhattar with Her divine prasadam, imbuing him with effortless scriptural genius"
    },
    works: [
      {
        name: "Bhagavad Guna Darpanam"
      },
      {
        name: "Ashtashloki",
        pasurams: 8
      },
      {
        name: "Srirangaraja Stavam"
      },
      {
        name: "Kriya Deepa"
      }
    ],
    preservation: "Fulfilled Yamunacharya's second vow. He established the commentary tradition for the Vishnu Sahasranama within Visishtadvaita, emphasizing Kalyana Guna over featureless monism",
    philosophicalTheme: "Guna-Anubhava-Nishta (Absorption in God's auspicious attributes) and Madhurya-Devatvam",
    verse: {
      work: "Ashtashloki, Verse 1 (Akaarattho Vishnur)",
      tamil: "அகாரார்த்தோ விஷ்ணுஃ ஜகதுதயரக்ஷாப்ரளயக்ருத்\nமகாரார்த்தோ ஜீவஃ ததுபசரணம் தாஸ இதி ச ।\nஉகாரோऽனன்யார்ஹம் நியமயதி ஸம்பந்தமனயோஃ\nத்ரயீஸாரஸ் த்ர்யாத்மா ப்ரணவ இமமர்த்தம் ஸமுதிஶேத் ॥",
      translit: "Akarartho Vishnuh jagadudayarakshapralayakrut Makarartho jivah tadupacharanam dasa iti ca Ukaro 'nanyarham niyamayati sambandhamanayoh Trayisaras tryatma Pranava imamartham samudishet",
      wordMeanings: [
        ["Akararthah", "The letter 'A' (A-kara) signifies"],
        ["Vishnuh", "Lord Vishnu, the cause of creation, protection, and dissolution"],
        ["Makararthah", "the letter 'M' (Ma-kara) signifies"],
        ["Jivah", "the individual soul"],
        ["Tat upacharanam dasa iti ca", "who is a servant (Dasa) rendering service to Him"],
        ["Ukarah", "the letter 'U' (U-kara)"],
        ["Ananyarham", "exclusive belonging"],
        ["Niyamayati", "establishes"],
        ["Sambandham anayoh", "the eternal relationship between them"],
        ["Trayisarah", "the essence of the three Vedas"],
        ["Tryatma Pranava", "the three-syllabled Omkara (A-U-M)"],
        ["Imam artham", "this profound truth"],
        ["Samudishet", "explicitly declares!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Parasara Bhattar encapsulates the entire philosophical meaning of the sacred Pranava (Om = A + U + M). The letter A denotes Lord Vishnu (the Creator/Protector). The letter M denotes the Jiva (the individual soul who is a natural servant). The middle letter U establishes that the Jiva belongs exclusively to Vishnu and to no other entity"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Formulates Ananya-Arha-Seshathvam (The doctrine that the soul's servitude belongs solely to Narayana). This verse serves as the foundational text for studying the Thirumantram in Sri Vaishnavism"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Vedanta Desika wrote extensively on Bhattar's Ashtashloki, calling it an imperishable diamond that compresses the entire ocean of Upanishadic truth into eight short Sanskrit verses"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana or Ardha Padmasana, wearing traditional householder vestments, holding palm-leaf manuscripts",
        mudras: "Right hand held in Upadesha Mudra (teaching pose), left hand holding a stylus or manuscript scroll",
        garments: "Dressed in elegant householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Srirangam, Parasara Bhattar's icon depicts him in youthful, glowing scholarly majesty beside his twin brother Veda Vyasa Bhattar"
      },
      videoSearches: [
        "Parasara Bhattar Life History and Ashtashloki Velukkudi Krishnan",
        "Bhagavad Guna Darpanam Sahasranama Commentary Karunakarachariar",
        "Parasara Bhattar and Vedanti Debate Ananthapadmanabhachariar"
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
  {
    id: "nanjiyyar",
    name: "Nanjiyyar",
    tamilName: "நஞ்சீயர்",
    eraGroup: "Later acharyas",
    era: "12th century CE",
    role: "Author of the monumental 9000 Padi commentary on Thiruvaymozhi.",
    titles: ["Nanjiyyar", "Vedanti", "Thirukolambiyar", "Sri Madhava", "Author of the 9000 Padi Vyakhyanam"],
    birthMonth: "Panguni (Phalguna)",
    birthStar: "Uttaradam (Uttara Ashadha)",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Thirukarambanoor (Uttamar Kovil, near Tiruchirappalli)",
      district: "Tiruchirappalli District, Tamil Nadu, India"
    },
    amsam: "Madhava Amsam",
    guru: "parasara-bhattar",
    sishyas: ["nampillai"],
    associatedDesams: ["uthamar-kovil", "srirangam"],
    timeline: [
      {
        when: "Birth & Advaitic Eminence",
        event: "Born into an affluent family at Thirukarambanoor, mastering Sanskrit Shastras, becoming a celebrated Advaita scholar named Madhavacharya (Vedanti) in Melkote"
      },
      {
        when: "The Scholarly Debate Challenge",
        event: "Parasara Bhattar traveling from Srirangam to Karnataka on Sri Ramanuja's command to debate Vedanti"
      },
      {
        when: "The Historic Conquest",
        event: "Parasara Bhattar defeating Vedanti in a multi-day Vedantic debate, demonstrating the supremacy of Visishtadvaita"
      },
      {
        when: "Renunciation & Sannyasa",
        event: "Vedanti surrendering his immense wealth, taking sannyasa under Parasara Bhattar, and earning the affection of his Acharya"
      },
      {
        when: "The Title \"Nam-Jiyyar\"",
        event: "Parasara Bhattar welcoming him back to Srirangam with the words \"Nam Jiyyar\" (\"Our Ascetic/Saint\"), which became his permanent name"
      },
      {
        when: "Authoring 9000 Padi Commentary",
        event: "Writing the monumental 9000 Padi commentary on Tiruvaymoli"
      },
      {
        when: "Mentorship of Nampillai",
        event: "Identifying and training Nampillai to lead the Sampradaya"
      },
      {
        when: "Attainment of Liberation",
        event: "Ascending to Paramapadam at Srirangam"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born in Thirukarambanoor, Madhavacharya grew up to become an exceptionally wealthy and learned Advaitic scholar based in Karnataka. He was so affluent that he fed hundreds of scholars daily in his grand mansion, earning the title Vedanti"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Authoring Manipravala commentaries on the Naalayira Divya Prabandham; preserving the commentarial lineage (Vyakhyanam) of Dravida Veda; serving Parasara Bhattar"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Debate with Parasara Bhattar: Before passing away, Sri Ramanuja instructed his young successor, Parasara Bhattar, to travel to Melkote and bring the great Advaitic scholar Vedanti into the Sri Vaishnava fold. Bhattar traveled in royal palanquin style to Vedanti's mansion. Knowing that Vedanti gave free meals to all scholars, Bhattar sat in the feeding hall and refused to eat. When Vedanti asked what he desired, Bhattar replied: \"I seek a debate gift (Vada Bhiksha)!\" For nine days, they debated complex Vedantic texts. Bhattar used the Sri Bhashyam and Tiruvaymoli to systematically refute Advaitic non-duality, proving Visishtadvaita. Convinced, Vedanti bowed at Bhattar's feet The Transformation into Nanjiyyar: Fulfilling his debate pledge, Vedanti divided his immense wealth among his wives and relatives, took ascetic vows (Tridanda Sannyasa), and walked to Srirangam as a penniless monk. As he approached Srirangam, Parasara Bhattar rushed out to receive him, embrace him, and exclaim: \"Em-Jiyyaro!\" (\"Is this our own saint?\"). From that day, he was known across Tamilakam as Nanjiyyar (\"Our Ascetic\") Writing the 9000 Padi: Nanjiyyar composed a comprehensive 9,000-measure (9000 Padi) Manipravala commentary on Nammalwar's Tiruvaymoli. When the original manuscript fell into the Kaveri River and was lost, Nanjiyyar's brilliant young disciple, Nampillai, rewrote the entire commentary from memory word-for-word, delighting Nanjiyyar"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Prime disciple of Parasara Bhattar; Acharya to Nampillai (Lokacharya)"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Spent his remaining decades teaching Dravida Vedam in Srirangam before merging into Paramapadam"
        ]
      }
    ],
    legend: {
      title: "The Nam-Jiyyar Title",
      text: "The name Nanjiyyar carries deep emotional warmth. It was not a formal academic title, but an expression of maternal affection (Vatsalya) uttered by Parasara Bhattar when welcoming his former debate opponent into his heart"
    },
    works: [
      {
        name: "9000 Padi Vyakhyanam"
      },
      {
        name: "Commentary on Kanninun Siruthambu"
      },
      {
        name: "Commentary on Thirupalliyezhuchi"
      },
      {
        name: "Commentary on Sharanagati Gadya"
      }
    ],
    preservation: "Expanded the scope of Tamil commentarial literature (Manipravala), harmonizing Sanskrit Upanishadic logic with Tamil devotional poetry. He ensured the survival of Parasara Bhattar's lineage",
    philosophicalTheme: "Sannyasa-Nishta coupled with Dravida-Veda-Anubhavama (Deep emotional absorption in Tamil Pasurams)",
    verse: {
      work: "Invocation to Nanjiyyar (Thaniyan composed by Nampillai)",
      tamil: "நமோ வேதாந்தவேத்யாய கூரநாதஸுதார்த்திதே ।\nஶ்ரீமாதவாய ஶாந்தாய நமோऽஸ்து நஞ்ஜீயரே ॥",
      translit: "Namo Vedantavedyaya Kuranathasutarthithe Srimadhavaya shantaya namo 'stu Nanjiyare",
      wordMeanings: [
        ["Namo", "Prostrations"],
        ["Vedanta vedyaya", "to him who has understood the ultimate goal of the Upanishads"],
        [
          "Kuranatha suta arthithe",
          "who was sought after and won by the son of Koorathazhwan (Parasara Bhattar)"
        ],
        ["Sri Madhavaya", "to Sri Madhava (Nanjiyyar)"],
        ["Shantaya", "who is the embodiment of tranquility"],
        ["Namo 'stu Nanjiyare", "let prostrations be offered to Nanjiyyar!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Nampillai composes this invocation verse in honor of his Acharya Nanjiyyar (Sri Madhava). He describes Nanjiyyar as a master of Vedantic wisdom who was converted by Parasara Bhattar (Kuranatha Suta), praising his supreme inner peace (Shanta) and profound scholarship"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Demonstrates the value of Vada-Jaya (Philosophical debate in service of truth). Nanjiyyar's life proves that intellectual brilliance, when surrendered to an authentic Acharya, matures into serene devotional wisdom"
        },
        {
          heading: "Commentarial Insights",
          text: "Periyavachan Pillai notes that Nanjiyyar's 9000 Padi commentary brought unprecedented clarity to Tiruvaymoli, laying the structural blueprint for all subsequent commentaries"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana wearing the robes of a Tridandi Sannyasi, holding palm-leaf manuscripts",
        mudras: "Right hand held in Upadesha Mudra (teaching pose), left hand holding a manuscript scroll",
        garments: "Dressed in saffron robes, bearing the Tridandam (ascetic staff), marked with twelve Urdhva Pundra (tilak) marks and Tulasi garlands",
        idol: "At Uttamar Kovil and Srirangam, Nanjiyyar's icon depicts him as a tranquil, scholarly monk absorbed in scriptural exposition"
      },
      videoSearches: [
        "Nanjiyyar Life History and Parasara Bhattar Debate Velukkudi Krishnan",
        "Nanjiyyar 9000 Padi Commentary Lecture Karunakarachariar",
        "Nanjiyyar Vaibhavam Ananthapadmanabhachariar"
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
  {
    id: "engalazhwan",
    name: "Engalazhwan",
    tamilName: "ஏங்களாழ்வான்",
    eraGroup: "Later acharyas",
    era: "12th century CE",
    role: "Author of the Vishnu Chittiyam, the definitive Sanskrit commentary on the Vishnu Puranam.",
    titles: [
      "Engalazhwan",
      "Sri Vishnuchitta",
      "Ammal",
      "Author of Vishnu Chittiyam",
      "Revered Scholar of Thiruvellarai"
    ],
    birthMonth: "Chithirai (Chaitra)",
    birthStar: "Rohini",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Thiruvellarai (Swetagiri Kshetram)",
      district: "Tiruchirappalli District, Tamil Nadu, India"
    },
    amsam: "Sacred Lotus / Scholarly aspect",
    sishyas: [],
    associatedDesams: ["thiruvellarai", "srirangam", "kanchi-varadaraja"],
    timeline: [
      {
        when: "Birth at Thiruvellarai",
        event: "Born into a distinguished scholarly family at Thiruvellarai"
      },
      {
        when: "Discipleship under Thirukkurugai Piran Pillan",
        event: "Studying the Sri Bhashya and 6000 Padi under Pillan"
      },
      {
        when: "The Knock on the Door Miracle",
        event: "Answering Sri Ramanuja's knock at his door by declaring \"I am Vishnuchitta!\", receiving Ramanuja's affectionate correction, and being named Engal Azhwan (\"Our Azhwar\")"
      },
      {
        when: "Authoring Vishnu Chittiyam",
        event: "Composing a master commentary on the Vishnu Puranam"
      },
      {
        when: "Mentorship of Nadadur Ammal",
        event: "Training young Nadadur Ammal in Sri Bhashya at Kanchipuram"
      },
      {
        when: "Attainment of Liberation",
        event: "Merging into Paramapadam at Thiruvellarai"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born under the name Vishnuchitta in Thiruvellarai, he became a premier student of Thirukkurugai Piran Pillan (Ramanuja's spiritual son). He was renowned for his profound scholarship in Puranic and Upanishadic literature"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Authoring Vishnu Chittiyam (Commentary on Vishnu Puranam); teaching Sri Bhashya; establishing the Thiruvellarai scholarly lineage"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Earning of the Title \"Engal Azhwan\": One day, Sri Ramanuja visited Vishnuchitta's house in Thiruvellarai and knocked on the door. Vishnuchitta asked from inside: \"Who is it?\" Ramanuja replied: \"It is I.\" Vishnuchitta answered: \"I am Vishnuchitta.\" Ramanuja remarked: \"When does the 'I' (ego) die so that the soul can attain God?\" Realizing his mistake of identifying with his ego, Vishnuchitta opened the door, fell at Ramanuja's feet, and prostrated in deep repentance. Ramanuja was so moved by his immediate humility that he embraced him, turning to his disciples and exclaiming: \"Engal Azhwano!\" (\"Is he not our own Azhwar?\"). From that day, he was known across the Sampradaya as Engalazhwan Authoring Vishnu Chittiyam: He authored Vishnu Chittiyam, a monumental Sanskrit commentary on the Vishnu Puranam. This work is considered the definitive Visishtadvaita commentary on the Vishnu Puranam, establishing it as the supreme Purana (Puranaratna) Training Nadadur Ammal: Engalazhwan acted as the Acharya to young Nadadur Ammal in Kanchipuram, passing down the Sri Bhashya commentary tradition that later nurtured Sri Vedanta Desika"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Student of Thirukkurugai Piran Pillan; Acharya to Nadadur Ammal"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: ["Passed away peacefully at Thiruvellarai"]
      }
    ],
    legend: {
      title: "The Meaning of Engal Azhwan",
      text: "The title Engal Azhwan (\"Our Azhwar\") was bestowed directly by Sri Ramanuja to honor Vishnuchitta's instant eradication of personal ego (Ahamkara-Nivritti)"
    },
    works: [
      {
        name: "Vishnu Chittiyam"
      },
      {
        name: "Commentary on Shariraka Mimamsa"
      }
    ],
    preservation: "Established the authority of the Vishnu Puranam within Visishtadvaita. He preserved the unbroken transmission of the Sri Bhashya from Pillan to Nadadur Ammal",
    philosophicalTheme: "Ahamkara-Nivritti (Eradication of ego) and Purana-Pramanya-Sthapanam",
    verse: {
      work: "Invocation to Engalazhwan (Thaniyan composed by Nadadur Ammal)",
      tamil: "ஶ்ரீவிஷ்ணுசித்தபதாம்போஜஸூர்யவத் போதகாயினே ।\nஎன்மதாசார்யவர்யாய எங்களாழ்வார்ங்க்ரிமே பஜே ॥",
      translit: "Sri Vishnuchitta padambhoja suryavat bodhakayine Enmadacharyavaryaya Engalazhwarngrime bhaje",
      wordMeanings: [
        ["Sri Vishnuchitta", "Of Sri Vishnuchitta (Engalazhwan)"],
        ["Pada ambhoja", "lotus feet"],
        ["Suryavat", "like the sun"],
        ["Bodhakayine", "who illuminates spiritual wisdom"],
        ["Enmada", "my revered"],
        ["Acharyavaryaya", "to the supreme Acharya"],
        ["Engalazhwar amgrim", "the divine lotus feet of Engalazhwan"],
        ["Bhaje", "I worship continuously!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Nadadur Ammal composes this invocation verse in honor of his Acharya Engalazhwan (Vishnuchitta). He compares his Acharya's lotus feet to the rising sun (Suryavat), which dispels the darkness of ignorance and illuminates Vedantic wisdom in the minds of disciples"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Jnana-Suryatvam (The Acharya as the sun of wisdom). In Visishtadvaita, the Acharya dispels the darkness of Ajnana (ignorance) just as the morning sun opens the lotus of the Jiva's intellect"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Vedanta Desika cited Vishnu Chittiyam extensively in his Tattvamuktakalapa, honoring Engalazhwan as an unshakeable pillar of Puranic interpretation"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana holding palm-leaf manuscripts",
        mudras: "Right hand held in Upadesha Mudra, left hand holding a manuscript scroll",
        garments: "Dressed in scholarly householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Thiruvellarai, Engalazhwan's icon depicts him seated beside Thirukkurugai Piran Pillan, portraying his deep scholarly humility"
      },
      videoSearches: [
        "Engalazhwan Life History and Ramanuja Encounter Velukkudi Krishnan",
        "Vishnu Chittiyam Commentary Lecture Karunakarachariar",
        "Engalazhwan Vaibhavam Ananthapadmanabhachariar"
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
  {
    id: "nampillai",
    name: "Nampillai",
    tamilName: "நம்பிள்ளை",
    eraGroup: "Later acharyas",
    era: "12th–13th century CE",
    role: "Master of the Eedu discourses — his lectures form the grandest commentary on Thiruvaymozhi.",
    titles: [
      "Nampillai",
      "Lokacharya",
      "Jagadguru",
      "Nambur Varadarajar",
      "Thirukali Devar",
      "Sovereign of Srirangam Discourses"
    ],
    birthMonth: "Karthigai (Vrischika)",
    birthStar: "Krithigai",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Nambur (near Tiruchirappalli)",
      district: "Tiruchirappalli District, Tamil Nadu, India"
    },
    amsam: "Lokacharya Amsam",
    guru: "nanjiyyar",
    sishyas: ["periyavachan-pillai", "vadakku-thiruveedhi-pillai"],
    associatedDesams: ["srirangam"],
    timeline: [
      {
        when: "Birth at Nambur",
        event: "Born as Nambur Varadarajar in Nambur village"
      },
      {
        when: "Moving to Srirangam",
        event: "Surrendering to Nanjiyyar and becoming his foremost student"
      },
      {
        when: "Rewriting the Lost Commentary",
        event: "Rewriting the entire 9000 Padi commentary from memory after it was lost in the river, earning Nanjiyyar's eternal gratitude"
      },
      {
        when: "The Title \"Nam-Pillai\"",
        event: "Nanjiyyar lovingly calling him \"Nam Pillai\" (\"Our Son/Child\"), which became his immortal title"
      },
      {
        when: "The Golden Era of Srirangam Discourses",
        event: "Conducting daily discourses on Tiruvaymoli before thousands of scholars at the Srirangam temple hall"
      },
      {
        when: "Spiritual Monarch Status",
        event: "Revered by kings and scholars across South India as the living embodiment of Sri Vaishnavism"
      },
      {
        when: "The Eedu Discourses",
        event: "Delivering the lectures that were secretly documented by Vadakku Thiruveedhi Pillai as the Eedu 36000 Padi"
      },
      {
        when: "Attainment of Liberation",
        event: "Ascending to Paramapadam at Srirangam after delegating commentarial duties to Periyavachan Pillai"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into a pious family in Nambur, Varadarajar moved to Srirangam to study under Nanjiyyar. He possessed an extraordinary intellect, an photographic memory, and supreme devotional eloquence"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Public exposition of Dravida Vedam; transforming Srirangam into the premier university for Sri Vaishnava theology; mentoring the next generation of commentators"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Feat of Rewriting the 9000 Padi: When Nanjiyyar finished his 9000 Padi commentary, he handed the leaf manuscript to Varadarajar to take across the river. While crossing the Kaveri, a sudden flood washed the manuscript away. Devastated, Varadarajar sat on the bank and rewrote all 9,000 measures word-for-word from memory before evening. When he presented the new manuscript to Nanjiyyar, the Acharya compared it with his original notes and found not a single letter missing. Touched by his genius, Nanjiyyar embraced him, calling him Nam Pillai (\"Our Child\") The Discourse Sovereign: Nampillai's daily lectures on Tiruvaymoli at the Srirangam temple hall (Prabandha Mandapam) became a major phenomenon. Hundreds of monks, scholars, kings, and householders gathered daily to hear his sweet, analytical, and emotionally overwhelming expositions. His eloquence was so great that even rival scholars were moved to tears Kandasamy Debate Victory: When an arrogant scholar challenged the Srirangam assembly, Nampillai dispatched his student Periyavachan Pillai to debate him, while Nampillai provided the intellectual framework, securing absolute victory for the Sampradaya"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Prime disciple of Nanjiyyar; Acharya to Periyavachan Pillai, Vadakku Thiruveedhi Pillai, and Pinpazhagiya Perumal Jiyyar"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away peacefully at Srirangam, leaving behind a legacy that defines the Eedu commentary tradition"
        ]
      }
    ],
    legend: {
      title: "The Golden Age of Srirangam",
      text: "Nampillai's era is celebrated as the absolute golden age of Sri Vaishnava exposition. Under his leadership, Srirangam functioned as the cultural and intellectual epicenter of Tamil Vaishnavism"
    },
    works: [
      {
        name: "Direct oral discourses compiled by his disciples into the Eedu 36000 Padi"
      },
      {
        name: "Systematized oral commentaries on the Naalayira Divya Prabandham"
      }
    ],
    preservation: "Institutionalized the systematic study of Manipravala commentaries. His oral teachings formed the definitive foundation for both the Tenkalai and Vadakalai commentary traditions",
    philosophicalTheme: "Upanyasa-Chakravarthi (Emperor of Discourses) and Prapatti-Margadarshana",
    verse: {
      work: "Invocation to Nampillai (Thaniyan composed by Vadakku Thiruveedhi Pillai)",
      tamil: "லோகாசார்யாய குரவே க்ருஷ்ணபாதஸ்ய ஸூனவே ।\nஸம்ஸாரபோகிஸந்தஷ்டஜீவோஜ்ஜீவனஹேதவே ॥",
      translit: "Lokacharyaya kurave Krishnapadasya sunave Samsarabhogisandashta jivajjivana hetave",
      wordMeanings: [
        ["Lokacharyaya", "To the World Teacher (Lokacharya / Nampillai)"],
        ["Kurave", "to the supreme Acharya"],
        [
          "Krishnapadasya sunave",
          "the illustrious spiritual son of Nanjiyyar (and biological son of Nambur Krishna)"
        ],
        ["Samsara bhogi", "the venomous serpent of worldly existence (Samsara)"],
        ["Sandashta", "bitten by"],
        ["Jiva", "bound individual souls"],
        ["Ujjivana hetave", "who is the sole cause of their revival/salvation!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Vadakku Thiruveedhi Pillai offers prostrations to his Acharya Nampillai (Lokacharya). He describes Nampillai as the supreme divine physician whose discourses act as the celestial antidote to revive bound souls (Jivas) who have been fatally bitten by the venomous snake of material existence (Samsara)"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Samsara-Nivritti through Acharya-Upadesha. The soul bound in material suffering cannot heal itself; it requires the transformative audio-receptive medicine (Sabda-Brahman) delivered through the Acharya's lectures"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Manavala Mamunigal in Upadesa Rathnamalai highlights that Nampillai was awarded the title Lokacharya (\"Teacher of the World\") by Lord Ranganatha Himself in recognition of his capacity to save humanity through his discourses"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana on an exalted teaching platform (Vyakhyanam Pitha), gesturing with his hands during a discourse",
        mudras: "Right hand held in Vyakhyana Mudra (exposition gesture), left hand resting on his knee or holding palm-leaf notes",
        garments: "Dressed in elegant householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Nambur and Srirangam, Nampillai's icon depicts him in full devotional speech, capturing his majesty as the Sovereign of Discourses"
      },
      videoSearches: [
        "Nampillai Life History and Srirangam Discourses Velukkudi Krishnan",
        "Eedu 36000 Padi Nampillai Lecture Karunakarachariar",
        "Nampillai Vaibhavam and Lokacharya Title Ananthapadmanabhachariar"
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
  {
    id: "periyavachan-pillai",
    name: "Periyavachan Pillai",
    tamilName: "பெரியவாச்சான் பிள்ளை",
    eraGroup: "Later acharyas",
    era: "12th–13th century CE",
    role: "Commented on all 4,000 pasurams, including the 12000 Padi on Thiruvaymozhi.",
    titles: [
      "Periyavachan Pillai",
      "Sri Krishna Suri",
      "Yamunacharya",
      "Abhaya Hasta Amsam",
      "Vyakhyana Chakravarthi"
    ],
    birthMonth: "Aani (Jyeshtha)",
    birthStar: "Rohini",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Senganaloor (near Kumbakonam)",
      district: "Thanjavur District, Tamil Nadu, India"
    },
    amsam: "Abhaya Hasta (The Divine Hand of Protection aspect of Sriman Narayana)",
    guru: "nampillai",
    sishyas: [],
    associatedDesams: ["srirangam", "kumbakonam"],
    timeline: [
      {
        when: "Birth at Senganaloor",
        event: "Born in the pious village of Senganaloor"
      },
      {
        when: "Journey to Srirangam",
        event: "Moving to Srirangam to become a primary disciple of Nampillai"
      },
      {
        when: "Mastery of Dravida Veda",
        event: "Spending decades absorbing Nampillai's discourses and mastering all 4,000 Pasurams"
      },
      {
        when: "Commission by Nampillai",
        event: "Authorized by Nampillai to write comprehensive Manipravala commentaries for the entire Naalayira Divya Prabandham"
      },
      {
        when: "The Complete Commentarial Corpus",
        event: "Becoming the first and only scholar in history to write detailed commentaries on all 4,000 Pasurams of the Azhwars"
      },
      {
        when: "Earning the Emperor Title",
        event: "Bestowed the title Vyakhyana Chakravarthi (Emperor among Commentators) by the scholars of Srirangam"
      },
      {
        when: "Authoring Independent Treatises",
        event: "Writing classical Rahasya granthas such as Parandha Rahasyam and Sakaraya Rahasyam"
      },
      {
        when: "Attainment of Paramapadam",
        event: "Ascending to Paramapadam at Srirangam"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born under the name Yamunacharya (Sri Krishna Suri) in Senganaloor, he moved to Srirangam as a youth. He surrendered to Nampillai and became one of his most trusted intellectual assistants"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Writing detailed Manipravala commentaries (Vyakhyanams) for every single verse of the 4,000 Naalayira Divya Prabandham; preserving the linguistic and esoteric meanings of the Azhwars"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Feat of Commentating on all 4,000 Pasurams: Prior to Periyavachan Pillai, commentators had written works on specific texts like Tiruvaymoli, Thiruppavai, or Kanninun Siruthambu. No single scholar had attempted to write word-by-word commentaries on all 4,000 verses. Driven by intense devotion and command of his Acharya, Periyavachan Pillai executed this monumental task, producing thousands of pages of Manipravala prose. For this unique, unmatched achievement, the Srirangam assembly crowned him Vyakhyana Chakravarthi (\"The Emperor of Commentators\") Authoring the 12000 Padi: He authored the famous 12000 Padi commentary on Tiruvaymoli, which expanded upon Nanjiyyar's 9000 Padi and provided precise lexical, grammatical, and theological interpretations The Abhaya Hasta Manifestation: Tradition holds that Periyavachan Pillai was an incarnation of the Lord's Abhaya Hasta (Hand of Protection). Just as the Lord's hand reassures fearful souls, Periyavachan Pillai's commentaries protect spiritual seekers from misinterpreting the complex Tamil verses of the Azhwars"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: ["Prime disciple of Nampillai; Acharya to Nayanarachan Pillai (his adopted son and successor)"]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Spent his entire life writing and teaching in Srirangam, ascending to Paramapadam after completing his commentarial legacy"
        ]
      }
    ],
    legend: {
      title: "The Emperor of Commentators",
      text: "In Sri Vaishnava scholarship, if any commentary is cited without mentioning the author's name, it is automatically assumed to be the work of Periyavachan Pillai. He remains the supreme authority on the linguistic interpretation of the Azhwars' poetry"
    },
    works: [
      {
        name: "Commentary on Srimad Ramayana"
      },
      {
        name: "Commentary on Parasara Bhattar's Ashtashloki"
      },
      {
        name: "Rahasya Granthas: Parandha Rahasyam, Sakaraya Rahasyam, Artha Panchakam"
      }
    ],
    preservation: "Preserved the complete linguistic semantics of the Dravida Veda. Without his commentaries, large portions of the earlier Azhwars' Tamil vocabulary would have become incomprehensible to later generations",
    philosophicalTheme: "Manipravala-Vyakhyana-Nishta (Devotional scholarship dedicated to scriptural interpretation)",
    verse: {
      work: "Invocation to Periyavachan Pillai (Thaniyan composed by Manavala Mamunigal)",
      tamil: "ஶ்ரீமத் க்ருஷ்ணஸமாயாய நமோ யாமுனஸூனவே ।\nயத்புக்திபோகஸுரஸம் த்ராவீடீஸம்ஹிதாஶிரம் ॥",
      translit: "Srimad Krishnasamayaya namo Yamunasunave Yadbhuktibhogasurasam Dravidasamhitashiram",
      wordMeanings: [
        ["Srimad", "Possessing divine luster"],
        ["Krishna samayaya", "to Sri Krishna Suri (Periyavachan Pillai)"],
        ["Namo", "prostrations"],
        ["Yamunasunave", "to the spiritual son of Yamunacharya/Nampillai"],
        ["Yat bhukti bhoga surasam", "by enjoying whose sweet commentary nectar"],
        [
          "Dravida samhita shiram",
          "the crown jewel of the Dravida Veda (Tiruvaymoli) becomes fully illuminating!"
        ]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Sri Manavala Mamunigal offers prostrations to Periyavachan Pillai (Krishna Suri), declaring that the supreme nectar of the Tamil Dravida Veda (Tiruvaymoli) can be fully tasted and understood only through the luminous commentary written by him"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Vyakhyana-Utility (The necessity of authentic commentaries). The poetic utterances of seers (Rishis/Azhwars) require an illuminated Acharya to unpack their inner Vedantic alignment"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Vedanta Desika extensively cited Periyavachan Pillai in his own works (Adhikara Sangraha), honoring him as the definitive guide to Tamil scriptural grammar and esoteric meaning"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana or Ardha Padmasana, writing upon palm leaves with a steel stylus (Ezhuthanai)",
        mudras: "Right hand holding a writing stylus, left hand holding a palm-leaf manuscript",
        garments: "Dressed in scholarly householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Senganaloor and Srirangam, Periyavachan Pillai's icon depicts him in an attitude of intense literary creation, surrounded by stacks of palm-leaf manuscripts"
      },
      videoSearches: [
        "Periyavachan Pillai Vyakhyana Chakravarthi Velukkudi Krishnan",
        "Periyavachan Pillai Divya Prabandham Commentary Lecture Karunakarachariar",
        "Periyavachan Pillai Life and Works Ananthapadmanabhachariar"
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
  {
    id: "vadakku-thiruveedhi-pillai",
    name: "Vadakku Thiruveedhi Pillai",
    tamilName: "வடக்கு திருவீதிப் பிள்ளை",
    eraGroup: "Later acharyas",
    era: "12th–13th century CE",
    role: "Recorded Nampillai’s lectures as the Eedu 36000 Padi; father of Pillai Lokacharya.",
    titles: [
      "Vadakku Thiruveedhi Pillai",
      "Srisailesa",
      "Author of the Eedu 36000 Padi",
      "Father of Pillai Lokacharya and Azhagiya Manavala Perumal Nayanar"
    ],
    birthMonth: "Aani (Jyeshtha)",
    birthStar: "Swathi",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Srirangam (North Street / Vadakku Thiruveedhi)",
      district: "Tiruchirappalli District, Tamil Nadu, India"
    },
    amsam: "Srisailesa Amsam",
    guru: "nampillai",
    sishyas: ["pillai-lokacharya"],
    associatedDesams: ["srirangam"],
    timeline: [
      {
        when: "Birth at Srirangam",
        event: "Born in the North Street of Srirangam, earning the name Vadakku Thiruveedhi Pillai"
      },
      {
        when: "Discipleship under Nampillai",
        event: "Surrendering to Nampillai and attending his daily discourses on Tiruvaymoli"
      },
      {
        when: "Secret Documentation of the Eedu",
        event: "Taking detailed notes each night of Nampillai's lectures, organizing them into the 36,000-measure manuscript (Eedu 36000 Padi)"
      },
      {
        when: "Discovery by Nampillai",
        event: "Presenting the manuscript to Nampillai, who initially locked it away to test its readiness, before sanctioning its preservation"
      },
      {
        when: "Fathering Two Giant Acharyas",
        event: "Blessed by Lord Ranganatha to father Pillai Lokacharya and Azhagiya Manavala Perumal Nayanar"
      },
      {
        when: "Authoring Yathindra Pravana Prabhavam",
        event: "Documenting the history of the Sri Vaishnava lineage after Ramanuja"
      },
      {
        when: "Ascension",
        event: "Merging into Paramapadam at Srirangam after handing over the Eedu manuscript to his son Pillai Lokacharya"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into a scholarly family residing in the Northern Street (Vadakku Thiruveedhi) of Srirangam, he became a devoted disciple of Nampillai. He was characterized by exceptional intellect, quiet humility, and dedication to preserving his Acharya's spoken words"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Documenting and compiling Nampillai's oral discourses on Tiruvaymoli into the monumental Eedu 36000 Padi; chronicling the Guru Parampara"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Secret Recording of the Eedu: Every day, Nampillai delivered discourses on Nammalwar's Tiruvaymoli in the Srirangam temple hall. Vadakku Thiruveedhi Pillai listened with rapt attention. Each night, by lamp light, he recorded every explanation, analogy, commentary reference, and philosophical nuance spoken by Nampillai during the day. He organized the text into 36,000 measures (36000 Padi), matching the exact length of the Sanskrit Srimad Bhagavatam The Blessing of the Eedu: When Vadakku Thiruveedhi Pillai presented the completed manuscript to Nampillai, the Acharya was amazed by its accuracy and depth. However, because Vadakku Thiruveedhi Pillai had written it without explicit prior permission, Nampillai initially confiscated the text, locking it in a chest to ensure it was not prematurely released. Later, recognizing its immense value for future generations, Nampillai sanctioned its preservation, entrusting it to his student Koorakullathothama Dasa, from whom it passed to Vadakku Thiruveedhi Pillai's son, Pillai Lokacharya The Father of Two Lions: Lord Ranganatha was so pleased with Vadakku Thiruveedhi Pillai's devotion that He commanded him to marry and raise children. He was blessed with two sons: Pillai Lokacharya (author of the 18 Ashtadasa Rahasya texts) and Azhagiya Manavala Perumal Nayanar (author of Acharya Hridayam)"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Prime disciple of Nampillai; Acharya and biological father to Pillai Lokacharya and Azhagiya Manavala Perumal Nayanar"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: ["Passed away peacefully at Srirangam, having secured the textual future of Dravida Vedanta"]
      }
    ],
    legend: {
      title: "The Eedu 36000 Padi",
      text: "The Eedu 36000 Padi is regarded as the pinnacle of Sri Vaishnava commentarial literature. The word Eedu signifies \"equal measure\" or \"unmatched treasure,\" indicating that it matches the Sanskrit Srimad Bhagavatam in volume and authority"
    },
    works: [
      {
        name: "Eedu 36000 Padi"
      },
      {
        name: "Yathindra Pravana Prabhavam"
      }
    ],
    preservation: "Preserved Nampillai's oral legacy for eternity. He fathered the two master scholars who formulated the core Tenkalai Sri Vaishnava Rahasya literature",
    philosophicalTheme: "Acharya-Vakya-Likhita-Nishta (Devotional commitment to transcribing the Acharya's words) and Grantha-Rakshanam",
    verse: {
      work: "Invocation to Vadakku Thiruveedhi Pillai (Thaniyan composed by Sri Koorakullathothama Dasa)",
      tamil: "ஶ்ரீரங்கார்யக்ருபாபாத்ரம் ஶ்ரீஸேஸார்யாதிகோஷஜம் ।\nஶ்ரீமத் வடகுரூரத்தம்பா ஶ்ரீகப்பாதமஹம் பஜே ॥",
      translit: "Srirangarya krupapatram Srisesharyadhikoshajam Srimad Vadagururatthamba Srikappadam aham bhaje",
      wordMeanings: [
        ["Srirangarya", "Of Nampillai (Srirangaraja)"],
        ["Krupa patram", "the recipient of mercy"],
        ["Srisesharya", "Sri Vadakku Thiruveedhi Pillai"],
        ["Adhikoshajam", "born of noble lineage/wisdom"],
        ["Srimad Vadaguru", "the glorious Northern Street Preceptor"],
        ["Srikappadam", "his divine lotus feet"],
        ["Aham bhaje", "I worship continuously!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This invocation verse offers salutations to Sri Vadakku Thiruveedhi Pillai, praising him as the chosen vessel of Nampillai's (Srirangarya) unconditioned grace. It commands devotees to worship his divine feet for giving the world the treasure of the Eedu"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Sutra-Likhita-Parampara (The sacred duty of scribal preservation). In Visishtadvaita, the spoken word of the Guru must be accurately transcribed and preserved to protect the Tattva from oral corruption"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Manavala Mamunigal wrote his famous commentary Eedu Eduppu based entirely on the manuscript compiled by Vadakku Thiruveedhi Pillai, calling him the silent savior of Dravida Vedanta"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana, writing upon palm leaves while gazing in deep contemplation",
        mudras: "Right hand holding a writing stylus, left hand holding the Eedu manuscript",
        garments: "Dressed in scholarly householder robes, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi garlands",
        idol: "At Srirangam, Vadakku Thiruveedhi Pillai's icon depicts him seated alongside his two famous sons, Pillai Lokacharya and Azhagiya Manavala Perumal Nayanar"
      },
      videoSearches: [
        "Vadakku Thiruveedhi Pillai Eedu 36000 Padi History Velukkudi Krishnan",
        "Eedu Commentary Compilation Lecture Karunakarachariar",
        "Vadakku Thiruveedhi Pillai Vaibhavam Ananthapadmanabhachariar"
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
  {
    id: "pillai-lokacharya",
    name: "Pillai Lokacharya",
    tamilName: "பிள்ளை லோகாசாரியார்",
    eraGroup: "Later acharyas",
    era: "c. 13th–14th century CE",
    role: "Illuminator of the Tenkalai sampradaya; wrote the Ashtadasa Rahasya secrets of prapatti. He protected the Urchavar of Srirangam during the 1323 invasion.",
    titles: [
      "Loka Acharya",
      "Pillai Lokacharya",
      "Ulagasiriyan",
      "Lokacharyar",
      "Srirangam Karunakarar",
      "Author of the 18 Ashtadasa Rahasya works"
    ],
    birthMonth: "Aippasi (Ashvin)",
    birthStar: "Thiruvadhirai (Ardra)",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Srirangam",
      district: "Tiruchirappalli District, Tamil Nadu, India"
    },
    amsam: "Kaustubha / Kripa (Aspect of Divine Compassion of Sriman Narayana)",
    guru: "vadakku-thiruveedhi-pillai",
    associatedDesams: ["srirangam", "thirumaliruncholai"],
    timeline: [
      {
        when: "Birth & Pedigree",
        event: "Born in Srirangam as the eldest son of Vadakku Thiruveedhi Pillai"
      },
      {
        when: "Nurturing under Nampillai's Legacy",
        event: "Instructed in the esoteric Rahasya doctrines of Sri Vaishnavism by his father and senior Acharyas"
      },
      {
        when: "Composition of the 18 Rahasya Granthas",
        event: "Authoring eighteen landmark Manipravala treatises summarizing Visishtadvaita philosophy, including Srivachana Bhushanam and Mumukshuppadi"
      },
      {
        when: "The Deliberate Celibacy (Naisthika Brahmacharya)",
        event: "Remaining a lifelong bachelor to dedicate his full mind to scriptural preservation and protection of devotees"
      },
      {
        when: "The Delhi Sultanate Invasion (1323 CE)",
        event: "Malik Kafur / Ulugh Khan's forces invading Srirangam; 12,000 Sri Vaishnavas martyred at the temple gates"
      },
      {
        when: "Fleeing with Namu Perumal",
        event: "Pillai Lokacharya, aged over 110 years, carrying the processional icon of Lord Ranganatha (Namu Perumal) hidden in a palanquin out of Srirangam"
      },
      {
        when: "The Sacrifice at Jyothishkudi",
        event: "Guiding the deity safely through the dense forests toward Madurai, shielding the Lord with his own body"
      },
      {
        when: "Attainment of Liberation",
        event: "Passing away from exhaustion and old age at Jyothishkudi, securing the physical safety of Lord Ranganatha's icon"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born into the prestigious lineage of Vadakku Thiruveedhi Pillai, he was named Lokacharya by Lord Ranganatha Himself, mirroring Nampillai's title. He chose a life of strict celibacy (Naisthika Brahmacharya) to ensure his entire life was rendered as undivided service (Kainkaryam) to the Sampradaya"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Authoring foundational texts on Prapatti and Purushakara; preserving the processional deity of Srirangam (Namu Perumal) during Islamic invasions; codifying Tenkalai doctrine"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "Authoring Srivachana Bhushanam: Pillai Lokacharya composed Srivachana Bhushanam (\"The Jewel of Sacred Utterances\"), a text that synthesizes the core operational tenets of Sri Vaishnavism. In it, he elevated Bhagavata-Kainkaryam (service to devotees) and Acharya-Abhimana (dependence on the Acharya) above all ritualistic practices, famously establishing that caste is irrelevant in determining a true devotee's spiritual status The 1323 Siege of Srirangam: When the forces of the Delhi Sultanate invaded Srirangam in 1323 CE, panic struck the holy city. While 12,000 Vaishnavas stood at the temple ramparts and were martyred to delay the enemy, elderly Pillai Lokacharya assumed responsibility for protecting the primary processional icon (Namu Perumal). He built a stone wall in front of the sanctum sanctorum (Moolavar) to hide the main idol and placed Namu Perumal in a covered box The Last Journey to Jyothishkudi: Though over 110 years old, Pillai Lokacharya carried and guarded the palanquin containing Namu Perumal through rocky terrain, thorn bushes, and dense forests toward Southern Tamilakam. Reaching Jyothishkudi (near Yanaimalai, Madurai), exhausted by hunger, fatigue, and severe physical injuries sustained during the flight, he gathered his disciples. He instructed them to protect the Lord at all costs and passed away peacefully, merging into Paramapadam"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Son and disciple of Vadakku Thiruveedhi Pillai; Acharya to Koorakullathothama Dasa, Thirunaimaruthur Pillai, and Vilancholai Pillai"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Attained supreme martyrdom and liberation at Jyothishkudi in 1323 CE after successfully saving Lord Ranganatha's icon"
        ]
      }
    ],
    legend: {
      title: "Jyothishkudi & Namu Perumal's Flight",
      text: "Jyothishkudi remains one of the most sacred pilgrimage sites in Sri Vaishnava history. Pillai Lokacharya's sacrifice of his aged body to shield the processional deity Namu Perumal ensured that the visual form of Lord Ranganatha survived the 48-year exile of Srirangam"
    },
    works: [
      {
        name: "Srivachana Bhushanam"
      },
      {
        name: "Mumukshuppadi"
      },
      {
        name: "Tattva Trayam"
      }
    ],
    preservation: "Saved the physical icon of Lord Ranganatha during the 1323 CE invasion. He laid down the formal theological doctrines of the Tenkalai school, focusing on Nirupadhika Kripa (unconditioned divine grace) and Purushakara",
    philosophicalTheme: "Svarupa-Jnana-Prapatti and Bhagavata-Seshatvam (Servitude to God's devotees as the supreme spiritual reality)",
    verse: {
      work: "Srivachana Bhushanam, Sutra 242 (Acharyanam Sreesukthigal)",
      tamil: "ஆசார்ய அபிமானமே உஜ்ஜீவனத்துக்கு ஹேது ।\nதந்நிஷ்டைக்கு எல்லை பாகவத அபிமானத்தில் முடியுகை ॥",
      translit: "Acharya abhimaname ujjivanattukku hetu Tan nishthaikku ellai Bhagavata abhimanattil mudiyugai",
      wordMeanings: [
        ["Acharya abhimaname", "The affectionate grace and acceptance of the Acharya alone"],
        ["Ujjivanattukku", "for the soul's total redemption/salvation"],
        ["Hetu", "is the true cause"],
        ["Tan nishthaikku", "for that steadfast devotion"],
        ["Ellai", "the ultimate boundary/limit"],
        ["Bhagavata abhimanattil", "in loving servitude to the devotees of God"],
        ["Mudiyugai", "culminates and reaches perfection!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Pillai Lokacharya encapsulates the ultimate secret of Sri Vaishnavism. The individual soul (Jiva) cannot achieve salvation through its own frail efforts (Karma, Jnana, Bhakti). The true cause of redemption is the Acharya's graceful acceptance (Acharya Abhimanam). Furthermore, true faith in the Acharya reaches its absolute perfection only when it expresses itself as deep, humble love for all devotees of God (Bhagavata Abhimanam)"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Charama-Upaya (The ultimate means). In Tenkalai Visishtadvaita, the grace of the Acharya acts as an independent, sufficient vehicle for salvation, bypassing personal merit (Akinchanya)"
        },
        {
          heading: "Commentarial Insights",
          text: "Sri Manavala Mamunigal wrote his famous commentary on Srivachana Bhushanam, noting that Pillai Lokacharya removed all intellectual barriers, opening the doors of Prapatti to every living being without distinction of caste, gender, or learning"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Ardha Padmasana or Jnana Mudra, bearing a luminous, compassionate expression",
        mudras: "Right hand held in Upadesha Mudra (teaching pose), left hand resting on his knee or holding palm-leaf manuscripts",
        garments: "Dressed in simple householder/ascetic white vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi seed garlands",
        idol: "At Srirangam and Jyothishkudi, Pillai Lokacharya's icon depicts him carrying the processional palanquin of Namu Perumal, commemorating his ultimate sacrifice"
      },
      videoSearches: [
        "Pillai Lokacharya Life History and Srivachana Bhushanam Velukkudi Krishnan",
        "Ashtadasa Rahasya Mumukshuppadi Lecture Karunakarachariar",
        "Jyothishkudi Sacrifice of Pillai Lokacharya Ananthapadmanabhachariar"
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
  {
    id: "vedanta-desika",
    name: "Vedanta Desika",
    tamilName: "வேதாந்த தேசிகர்",
    eraGroup: "Later acharyas",
    era: "1268–1369 CE",
    role: "Nigamantha Maha Desika — peerless defender and systematiser of Visishtadvaita; composed over a hundred works.",
    titles: [
      "Venkatanatha",
      "Kavitarkika Simham",
      "Sarvatantra Svatantram",
      "Sri Vedanta Desika",
      "Nigamantha Maha Desikan",
      "Sarvatantra Svatantrar",
      "Founder of the Vadakalai Sampradaya"
    ],
    birthMonth: "Purattasi (Bhadrapada)",
    birthStar: "Thiruvonam (Sravanam)",
    tithi: "Sukla Paksha Dasami",
    birthplace: {
      name: "Thooppul (adjacent to Sri Varadaraja Perumal Temple, Kanchipuram)",
      district: "Kanchipuram District, Tamil Nadu, India"
    },
    amsam: "Ghanta (The Divine Sacred Bell of Lord Venkateswara of Tirumala)",
    associatedDesams: ["kanchi-varadaraja", "tirupati", "srirangam"],
    timeline: [
      {
        when: "Miraculous Incarnation",
        event: "Born to Ananthasuri and Totaramba at Thooppul, blessed by Nadadur Ammal at age five with the prophecy that he would establish Vedanta"
      },
      {
        when: "Mastery of Shastras",
        event: "Completing education in all Vedic sciences, logic, and arts by age twenty under Kidambi Appullar"
      },
      {
        when: "Vision of Garuda at Thiruvahindrapuram",
        event: "Performing penance on Oushadagiri hill, receiving Garuda Mantra Upadesha, and beholding Lord Hayagriva"
      },
      {
        when: "Composition of Hayagriva Stotram & Paduka Sahasram",
        event: "Authoring 1,000 Sanskrit verses on Lord Ranganatha's sandals (Paduka Sahasram) in a single night watch"
      },
      {
        when: "Refusal of Royal Patronage at Vijayanagara",
        event: "Rejecting Vidyaranya's invitation to join the royal court of Vijayanagara, composing Vairagya Panchakam to celebrate holy poverty"
      },
      {
        when: "The Srirangam Siege (1323 CE)",
        event: "Hiding among the corpses of 12,000 martyrs with Sri Bhashya manuscripts, escaping to Satyagalam to preserve the texts"
      },
      {
        when: "Defeating Rival Scholars",
        event: "Authoring Sathadushani to refute 100 Advaitic objections"
      },
      {
        when: "Return to Srirangam & Re-consecration",
        event: "Assisting Gopanna Udaiyar and Vidyaranya in re-installing Lord Ranganatha at Srirangam"
      },
      {
        when: "Attainment of Paramapadam",
        event: "Ascending to Paramapadam at Srirangam after composing Rahasyatrayasaram"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "ooppul near Kanchipuram, young Venkatanatha was taken by his uncle Kidambi Appullar to the Varadaraja Temple. The venerable scholar Nadadur Ammal was delivering a lecture. Seeing the five-year-old child's radiant aura, Nadadur Ammal stopped his lecture, embraced the boy, and delivered a famous prophecy: \"You shall establish Visishtadvaita on a firm footing, refute all rival philosophies, and shine as a luminous tower of Vedantic truth!\""
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Systematizing Vadakalai Visishtadvaita; authoring over 120 works in Sanskrit, Tamil, Manipravala, and Prakrit; refuting hostile philosophical systems; establishing Hayagriva worship"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "The Vision of Lord Hayagriva: At Thiruvahindrapuram, Venkatanatha climbed Oushadagiri hill and performed intense meditation on Garuda. Lord Garuda appeared and imparted the Hayagriva Mantra. Lord Hayagriva (the horse-headed deity of wisdom) manifested before him, dropping His divine nectar-droplets onto Venkatanatha's tongue. Instantly, all arts, sciences, and poetic meters became submissive to him, earning him the title Sarvatantra Svatantrar The Composition of Paduka Sahasram: A rival scholar challenged Desika to compose 1,000 verses on Lord Ranganatha's sandals (Paduka) in a single night. Desika accepted, spent most of the night in deep contemplation, and during the final watch (Yama), dictated 1,002 exquisite Sanskrit verses—the Paduka Sahasram—covering complex poetic meters, riddles, and Vedantic truths. The rival scholar managed to compose only 30 verses on the Lord's feet The Vairagya Panchakam (Rejecting Royal Gold): His childhood friend Vidyaranya, prime minister of the Vijayanagara Empire, invited Desika to court to receive royal honors and wealth. Desika sent back five immortal verses—the Vairagya Panchakam—declaring: \"I have no need for earthly gold; my ultimate wealth is Lord Varadaraja residing atop Hastigiri hill!\" Preserving Sri Bhashya during Invasion: During the 1323 CE invasion of Srirangam, Sudarshana Suri (author of Srutaprakasika) handed his twin young sons and the sole manuscript of Srutaprakasika to Desika. Desika lay motionless among thousands of slain bodies to avoid detection, escaped under cover of night to Karnataka (Satyagalam), and spent years teaching the manuscript to preserve the Sri Bhashya tradition"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Prime nephew and disciple to Kidambi Appullar; Acharya to Kumara Varadachariar and Brahmatantra Swatantra Jiyyar (founder of Parakala Math)"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away peacefully at Srirangam in 1369 CE at age 100, leaving an unmatched literary legacy"
        ]
      }
    ],
    legend: {
      title: "Thooppul & Oushadagiri",
      text: "Thooppul is the birthplace of Sri Vedanta Desika, housing his shrine inside the Deepaprakasar temple. Oushadagiri hill at Thiruvahindrapuram is celebrated as the sacred site where Lord Hayagriva empowered Desika to become the ultimate polymath of Indian philosophy"
    },
    works: [
      {
        name: "Tattvamuktakalapa",
        language: "Sanskrit"
      },
      {
        name: "Adhikara Sangraha",
        language: "Sanskrit"
      },
      {
        name: "Sathadushani",
        language: "Sanskrit"
      },
      {
        name: "Nyaya Siddhanjana",
        language: "Sanskrit"
      },
      {
        name: "Nyaya Parisuddhi",
        language: "Sanskrit"
      },
      {
        name: "Tattva Tika",
        language: "Sanskrit"
      },
      {
        name: "Yadavabhyudayam",
        language: "Sanskrit"
      },
      {
        name: "Sankalpa Suryodayam",
        language: "Sanskrit"
      },
      {
        name: "Hamsa Sandesam",
        language: "Sanskrit"
      },
      {
        name: "Hayagriva Stotram",
        language: "Sanskrit"
      },
      {
        name: "Daya Satakam",
        language: "Sanskrit"
      },
      {
        name: "Paduka Sahasram",
        language: "Sanskrit"
      },
      {
        name: "Kamasikastakam",
        language: "Sanskrit"
      },
      {
        name: "Gopala Vimsati",
        language: "Sanskrit"
      },
      {
        name: "Sri Stuti",
        language: "Sanskrit"
      },
      {
        name: "Bhu Stuti",
        language: "Sanskrit"
      },
      {
        name: "Sudarshana Ashtakam",
        language: "Sanskrit"
      },
      {
        name: "Rahasyatrayasaram",
        language: "Manipravala"
      },
      {
        name: "Desika Prabandham",
        pasurams: 24,
        language: "Tamil"
      }
    ],
    preservation: "Formulated the intellectual framework of Vadakalai Sri Vaishnavism. He established Prapatti as an active, conscious act of surrender requiring Angas (auxiliary components), defended the authority of Pancharatra, and protected Sri Vaishnavism from external philosophical attacks",
    philosophicalTheme: "Ubhayavedanta-Simhanadam and Vyaja-Prapatti (Surrender as an intentional act of refuge accepting God's grace)",
    verse: {
      work: "Daya Satakam, Verse 108 (Kavitarkika Simhaya)",
      tamil: "ஶ்ரீமான் வேங்கடநாதார்யஃ கவிதார்கிககேஸரீ ।\nவேதாந்தாசார்யவர்யோ மே ஸந்நிதத்தாம் ஸதா ஹ்ருதி ॥",
      translit: "Sriman Venkatanatharyah kavitarkikakesari Vedantacharyavaryo me sannidhattham sada hrudi",
      wordMeanings: [
        ["Sriman", "Possessing spiritual majesty"],
        ["Venkatanatha aryah", "Sri Venkatanatha (Vedanta Desika)"],
        ["Kavitarkika kesari", "the lion among poets and logicians"],
        ["Vedantacharya varyah", "the supreme master among teachers of Vedanta"],
        ["Me", "my"],
        ["Sannidhattham", "let him reside/abide"],
        ["Sada", "perpetually"],
        ["Hrudi", "within the heart!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "This universal Thaniyan composed by his son Kumara Varadachariar invokes Sri Vedanta Desika. He prays that Sri Venkatanatha—the lion among logicians (Kavitarkika Kesari) and supreme Acharya of Vedanta—may reside perpetually within his heart to dispel spiritual darkness"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Acharya-Dhyanam as a continuous protective armor. In Vadakalai Visishtadvaita, meditating upon the Acharya's intellectual and spiritual purity prepares the mind for unblemished surrender (Prapatti)"
        },
        {
          heading: "Commentarial Insights",
          text: "Appayya Dikshitar, the great 16th-century Advaita scholar, wrote extensive commentaries on Desika's Yadavabhyudayam, declaring: \"Even rival scholars must bow before the poetic and logical genius of Vedanta Desika.\""
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Seated in Padmasana or Jnana Mudra, wearing householder vestments, holding palm-leaf manuscripts",
        mudras: "Right hand held in Jnana Mudra or Vyakhyana Mudra, left hand holding a manuscript scroll or resting on his knee",
        garments: "Dressed in elegant householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread, Tulasi garlands, and an ornate conical scholar's cap (Desika Kireetam) in specific iconographic forms",
        idol: "At Thooppul and Thiruvahindrapuram, Sri Vedanta Desika's Moolavar icon depicts him in serene intellectual majesty, seated before Lord Hayagriva"
      },
      videoSearches: [
        "Sri Vedanta Desika Life History and Works Velukkudi Krishnan",
        "Rahasyatrayasaram and Daya Satakam Lecture Karunakarachariar",
        "Paduka Sahasram and Desika Vaibhavam Ananthapadmanabhachariar"
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
  {
    id: "manavala-mamunigal",
    name: "Sri Manavala Mamunigal",
    tamilName: "ஸ்ரீ மணவாள மாமுனிகள்",
    eraGroup: "Later acharyas",
    era: "1370–1443 CE — Vijayanagara Empire era",
    role: "Redeemer of Srirangam and systematiser of the Tenkalai sampradaya; the Lord himself declared him his Acharya.",
    titles: [
      "Azhagiya Manavala Perumal Nayanar",
      "Yatheendra Pravana",
      "Visadhavak Shikhamani",
      "Sri Manavala Mamunigal",
      "Ramyajamatra Muni",
      "Varavaramuni",
      "Yatindra Pravana",
      "Azhagiya Manavala Seer",
      "Re-incarnation of Sri Ramanuja",
      "Founder of the Tenkalai Sampradaya"
    ],
    birthMonth: "Aippasi",
    birthStar: "Thirumoolam",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Azhwar Thirunagari (Thirukkurugur)",
      district: "Thoothukudi District, Tamil Nadu, India",
      kshetramId: "alwar-thirunagari"
    },
    amsam: "Adisesha — regarded as the re-incarnation of Sri Ramanuja",
    amsamAcharyaId: "ramanuja",
    sishyas: ["p-b-anna"],
    associatedDesams: ["srirangam", "kanchi-varadaraja", "nanguneri"],
    timeline: [
      {
        when: "Birth & Early Education",
        event: "Born at Azhwar Thirunagari as Azhagiya Manavala Nayanar to Tigazhakkidandhan Thirunaveerudaiya Piran Tadar and Sriranga Nachiyar"
      },
      {
        when: "Discipleship under Thiruvaimozhi Pillai",
        event: "Studying at Alwarthirunagari under Thiruvaimozhi Pillai, mastering Tiruvaymoli and the Eedu commentaries"
      },
      {
        when: "The Mandate to Restore Srirangam",
        event: "Commissioned by his Acharya to move to Srirangam and rebuild the devastated cultural and academic life of the temple post-invasion"
      },
      {
        when: "Taking Sannyasa",
        event: "Taking ascetic vows (Tridanda Sannyasa) at Srirangam, assuming the name Ramyajamatra Muni (Manavala Mamunigal)"
      },
      {
        when: "Systematizing Tenkalai Literature",
        event: "Authoring commentaries on Rahasya granthas and compiling history in Upadesa Rathnamalai"
      },
      {
        when: "The Year-Long Srirangam Lectures",
        event: "Delivering daily discourses on the Eedu 36000 Padi inside the Srirangam temple hall for a full year (1432–1433 CE)"
      },
      {
        when: "Lord Ranganatha as Student",
        event: "Lord Ranganatha stopping all temple festivals for a year to hear his lectures, appearing as a young boy to recite the famous Thaniyan (Sreesailesa Daya Patram)"
      },
      {
        when: "Establishing Ashta Dikkajangal",
        event: "Appointing eight primary scholars (Ashta Dikkajangal) to lead the Tenkalai lineage across India"
      },
      {
        when: "Attainment of Paramapadam",
        event: "Merging into Paramapadam at Srirangam"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "Born in Azhwar Thirunagari, he was named Azhagiya Manavala Nayanar. He became the premier student of Thiruvaimozhi Pillai. Recognizing his divine intellect, Thiruvaimozhi Pillai charged him with a sacred duty: to restore Srirangam to its former glory and propagate Nammalwar's Tiruvaymoli and the Eedu commentaries across the land"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Restoring the Srirangam temple administration post-invasion; authoring Manipravala commentaries on Ashtadasa Rahasya texts; composing Upadesa Rathnamalai; establishing the Tenkalai Ashta Dikkajangal institution"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "Lord Ranganatha's Year-Long Lecture Attendance: In 1432 CE, Manavala Mamunigal began a year-long exposition of the Eedu 36000 Padi commentary in the Srirangam temple hall (Unjal Mandapam). Touched by the sweetness of his discourses, Lord Ranganatha issued a divine decree stopping all annual temple processions and music for a full year so that the Lord Himself could listen uninterrupted. Every day, the temple deity was brought to the hall to attend the lectures The Divine Thaniyan (Sreesailesa Daya Patram): On the final day of the year-long discourse series (1433 CE), as Manavala Mamunigal concluded his lecture, a young Brahmin boy stepped out from the crowd. Facing Manavala Mamunigal, the boy recited a single Sanskrit verse in a ringing voice: \"Sreesailesa Daya Patram...\" (\"I bow to Manavala Mamunigal, the chosen vessel of Thiruvaimozhi Pillai's grace...\"). The boy vanished into the sanctum sanctorum. Lord Ranganatha had manifested as a child to offer Acharya-Sambhavana (tribute) to His own teacher! To this day, this verse is recited as the opening invocation for all Tenkalai recitations Authoring Upadesa Rathnamalai: Mamunigal composed Upadesa Rathnamalai (\"Garland of Instruction Jewels\"), a Tamil poetic masterpiece detailing the birth months, stars, and historical contributions of all twelve Azhwars and the early Acharyas, preserving the historical continuity of the Sampradaya"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Prime disciple of Thiruvaimozhi Pillai; Acharya to the Ashta Dikkajangal (Eight Directional Leaders: Vanamamalai Jiyyar, Pattarpiran Jiyyar, Thirugopala Dasa, Paravastu Pattarbiran, Erumbi Appaa, Appillai, Appillan, and Prativadi Bhayankaram Anna)"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away peacefully at Srirangam in 1443 CE, revered as the ultimate Acharya of the Tenkalai tradition"
        ]
      }
    ],
    legend: {
      title: "The Sreesailesa Daya Patram Thaniyan",
      text: "The Sreesailesa Daya Patram verse holds an unprecedented status in Sri Vaishnavism: it is a Thaniyan composed by God Himself (Lord Ranganatha) for a human Acharya (Manavala Mamunigal). It established Mamunigal as the direct re-manifestation of Sri Ramanuja (Yatindra Pravana)"
    },
    works: [
      {
        name: "Upadesa Rathinamalai"
      },
      {
        name: "Thiruvaimozhi Noorthanthathi"
      },
      {
        name: "Aarti Prabandham"
      },
      {
        name: "Yathiraja Vimsathi"
      },
      {
        name: "Commentaries on Srivachana Bhushanam, Mumukshuppadi and Tattvatrayam"
      }
    ],
    worksSummary: "19 works",
    preservation: "Restored the physical and academic infrastructure of Srirangam. He consolidated the Tenkalai school of Visishtadvaita, emphasizing Marjala-Kishora-Nyaya (the mother-cat analogy: total passive reliance on God's unconditioned grace)",
    philosophicalTheme: "Systematic organisation of Tenkalai Sri Vaishnava doctrine and Prabandhic commentary.",
    verse: {
      work: "Sri Ranganatha's Thanian for Mamunigal",
      tamil: "ஸ்ரீஶைலேஶத³யாபாத்ரம் தீ⁴ப⁴க்த்யாதி³கு³ணார்ணவம் |\nயதீந்த்³ரப்ரவணம் வந்தே³ ரம்யஜாமாதரம் முனிம் ||",
      transliteration: "Sreesailesa-dayaapaatram dhee-bhaktyaadhi-gunaarnavam | Yatheendra-pravanam vande ramya-jaamaatharam munim ||",
      meaning: "\"I bow to Sage Manavala Mamunigal (Ramya Jamatra Muni), the recipient of Thirumalai Andavan’s grace, an ocean of wisdom and devotion, who is devoted to Sri Ramanuja!\"",
      wordMeanings: [
        ["Sreesailesa", "Of Thiruvaimozhi Pillai (Srisailesa)"],
        ["Daya patram", "the chosen recipient of grace"],
        ["Dhi", "wisdom"],
        ["Bhakthi", "devotion"],
        ["Adi", "and other divine qualities"],
        ["Gunarnavam", "an ocean of virtues"],
        ["Yatindra pravanam", "deeply attached to Sri Ramanuja (Yatindra)"],
        ["Vande", "I salute/worship"],
        ["Ramyajamatharam munim", "the sage Ramyajamatra (Manavala Mamunigal)!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "Lord Ranganatha offers prostrations to Manavala Mamunigal (Ramyajamatra Muni). The Lord describes Mamunigal as the recipient of Thiruvaimozhi Pillai's (Sreesailesa) mercy, an ocean of wisdom and devotion (Dhibhakthyadi Gunarnavam), and one whose heart is perpetually fixated on Sri Ramanuja"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Bhagavad-Acharya-Vandanam (God worshiping the Acharya). In Visishtadvaita, the Supreme Lord derives greater joy from praising His pure devotee than from receiving ritual worship Himself"
        },
        {
          heading: "Commentarial Insights",
          text: "Erumbi Appaa in his Parchanti notes that when Lord Ranganatha uttered this verse, He sealed the spiritual succession of the Tenkalai tradition, establishing Mamunigal as the final universal preceptor (Jagadacharya)"
        }
      ]
    },
    visuals: {
      iconography: "Seated with hands in Anjali Mudra under the hood of Adisesha, wearing a sannyasi robe.",
      videoSearches: ["Manavala Mamunigal Upadesa Rathinamalai Velukkudi"],
      digitalTexts: ["Koyil.org — Sri Manavala Mamunigal"]
    },
    sources: [
      "Dravida Veda Repository — dravidaveda.org",
      "Project Madurai Texts — projectmadurai.org",
      "Koyil Archival Library — koyil.org"
    ]
  },
  {
    id: "p-b-anna",
    name: "P.B. Anna",
    tamilName: "பிரதிவாதி பயங்கரம் ஆண்டான்",
    eraGroup: "Later acharyas",
    era: "14th–15th century CE",
    role: "Prativadi Bhayankaram Ananthachari — composer of the Sri Venkateswara Suprabhatam.",
    titles: [
      "P.B. Anna",
      "Prativadi Bhayankaram Ananthachari",
      "P.B. Annan",
      "Hastigiri Mahasuri",
      "Author/Compiler of Venkateswara Suprabhatam",
      "Ashta Dikkaja of Manavala Mamunigal"
    ],
    birthMonth: "Karthigai (Vrischika)",
    birthStar: "Pushyam (Poosam)",
    tithi: "Sukla Paksha",
    birthplace: {
      name: "Kanchipuram",
      district: "Kanchipuram District, Tamil Nadu, India"
    },
    amsam: "Sri Rama’s Bow / Scholarly Attendant aspect",
    guru: "manavala-mamunigal",
    sishyas: [],
    associatedDesams: ["kanchi-varadaraja", "tirupati", "srirangam"],
    timeline: [
      {
        when: "Birth at Kanchipuram",
        event: "Born into an illustrious scholarly family in Kanchipuram, mastering Sanskrit logic, grammar, and Vedantic polemics"
      },
      {
        when: "Earning the Title \"Prativadi Bhayankaram\"",
        event: "Terrifying rival scholars in philosophical debates, earning the historic title Prativadi Bhayankaram (\"Terror to Opposing Debaters\")"
      },
      {
        when: "Discipleship under Manavala Mamunigal",
        event: "Journeying to Srirangam, surrendering to Sri Manavala Mamunigal, and becoming one of his primary Ashta Dikkajangal"
      },
      {
        when: "The Tirumala Kainkaryam",
        event: "Dispatched to Tirumala to perform scholarly and devotional service for Lord Venkateswara"
      },
      {
        when: "Composing Venkateswara Suprabhatam",
        event: "Authoring/compiling the world-famous Venkateswara Suprabhatam, Stotram, Prapatti, and Mangalam"
      },
      {
        when: "Daily Recitation Institution",
        event: "Instituting the daily dawn recitation of the Suprabhatam at Tirumala"
      },
      {
        when: "Attainment of Liberation",
        event: "Merging into Paramapadam after serving the Sampradaya through polemical texts and devotional hymns"
      }
    ],
    lifeHistory: [
      {
        heading: "Early Years & Spiritual Awakening",
        paragraphs: [
          "rn in Kanchipuram under the name Ananthacharya, he mastered Sanskrit logic (Nyaya) and Vedantic grammar at an early age. His intellectual prowess in debates was so devastating to rival philosophical schools that scholars bestowed upon him the title Prativadi Bhayankaram (\"The Terror of Opposing Debaters\")"
        ]
      },
      {
        heading: "Core Seva / Kainkaryam",
        paragraphs: [
          "Composing the Venkateswara Suprabhatam corpus; serving as an Ashta Dikkaja under Sri Manavala Mamunigal; defending Visishtadvaita through polemical Sanskrit literature"
        ]
      },
      {
        heading: "Miracles & Historical Events",
        paragraphs: [
          "Composing the Venkateswara Suprabhatam: While residing at Tirumala, P.B. Anna was inspired by the opening verse of Valmiki's Ramayana (Kausalya Supraja Rama...). He composed twenty-nine divine Sanskrit verses—the Sri Venkateswara Suprabhatam—to awaken Lord Venkateswara at dawn. He followed it with the Venkateswara Stotram (11 verses), Venkateswara Prapatti (11 verses), and Venkateswara Mangalam (14 verses). This 65-verse corpus became the official morning liturgy of the Tirumala temple, chanted at dawn every single day for centuries Submission to Manavala Mamunigal: Despite his formidable reputation as an undefeated logician, P.B. Anna was overcome with humility when he met Sri Manavala Mamunigal in Srirangam. He discarded his intellectual pride, surrendered at Mamunigal's feet, and requested initiation. Mamunigal accepted him as one of his eight primary directional leaders (Ashta Dikkajangal) and charged him with spreading Dravida Vedanta in Northern Tamilakam and Andhra regions Authoring Commentaries & Polemics: He authored extensive Sanskrit glosses (Vyakhya) on Vedanta Desika's works and Sri Bhashya, proving that true scholarship bridges logical rigor with devotional humility"
        ]
      },
      {
        heading: "Guru-Disciple Dynamics",
        paragraphs: [
          "Prime disciple of Sri Manavala Mamunigal; Founder of the P.B. Annangaracharya scholarly lineage"
        ]
      },
      {
        heading: "Attainment of Paramapadam",
        paragraphs: [
          "Passed away peacefully, leaving behind a family lineage that produced historic scholars like P.B. Annangaracharya Swamy of Kanchipuram"
        ]
      }
    ],
    legend: {
      title: "Venkateswara Suprabhatam at Tirumala",
      text: "P.B. Anna's composition, the Sri Venkateswara Suprabhatam, is heard by millions of pilgrims worldwide every dawn at Tirumala. It stands as the most popular Sanskrit devotional awakening hymn in Hinduism"
    },
    works: [
      {
        name: "Sri Venkateswara Suprabhatam",
        pasurams: 29
      },
      {
        name: "Sri Venkateswara Stotram",
        pasurams: 11
      },
      {
        name: "Sri Venkateswara Prapatti",
        pasurams: 11
      },
      {
        name: "Sri Venkateswara Mangalam",
        pasurams: 14
      },
      {
        name: "Saptati Ratnamalika",
        pasurams: 70
      },
      {
        name: "Ashtashloki Vyakhyanam"
      }
    ],
    preservation: "Created the universal morning liturgy for Lord Venkateswara at Tirumala. He bridged the intellectual heritage of Vadakalai logic with Tenkalai devotional surrender",
    philosophicalTheme: "Suprabhata-Kainkaryam and Tarka-Samanvaya-Prapatti (Harmony of rigorous logic and absolute surrender)",
    verse: {
      work: "Sri Venkateswara Suprabhatam, Verse 1 (Kausalya Supraja Rama)",
      tamil: "கௌஸல்யாஸுப்ரஜா ராம பூர்வா ஸந்த்யா ப்ரவர்த்ததே ।\nஉத்திஷ்ட நரஶார்தூல கர்தவ்யம் தைவமாஹ்னிகம் ॥",
      translit: "Kausalya supraja Rama purva sandhya pravartate Utthishta narashardula kartavyam daivam ahnikam",
      wordMeanings: [
        ["Kausalya supraja", "Oh noble son of Queen Kausalya!"],
        ["Rama", "Oh Lord Rama!"],
        ["Purva sandhya", "the morning twilight/dawn"],
        ["Pravartate", "is breaking/arising"],
        ["Utthishta", "arise!"],
        ["Narashardula", "Oh tiger among men!"],
        ["Kartavyam", "must be performed"],
        ["Daivam ahnikam", "the divine daily morning duties/rituals!"]
      ],
      commentary: [
        {
          heading: "Esoteric Meaning (Swaroopa Jnanam)",
          text: "P.B. Anna opens the Tirumala morning liturgy by echoing Sage Viswamitra's famous awakening call to Lord Rama from the Valmiki Ramayana. He addresses Lord Venkateswara as Sri Rama Himself, announcing that dawn has arrived and inviting the Lord to arise to receive the morning worship of His creation"
        },
        {
          heading: "Visishtadvaita Alignment",
          text: "Establishes Avataric-Identity (The essential oneness of Lord Venkateswara with Sri Rama and Narayana). In Visishtadvaita, the Archa (deity form) in the temple is non-different from the historical Vibhava avatars (Rama and Krishna) and the transcendent Para form"
        },
        {
          heading: "Commentarial Insights",
          text: "P.B. Annangaracharya Swamy notes that P.B. Anna chose this verse to open the Suprabhatam because it links the cosmic majesty of Narayana with the accessible, human-like affection of Sri Rama"
        }
      ]
    },
    visuals: {
      iconography: {
        posture: "Standing in Anjali Mudra facing the Tirumala sanctum or seated in Ardha Padmasana holding palm-leaf notes",
        mudras: "Hands joined in prayer (Anjali Mudra) held close to his chest",
        garments: "Dressed in traditional householder vestments, marked with twelve Urdhva Pundra (tilak) marks, wearing sacred thread and Tulasi seed garlands",
        idol: "At Kanchipuram and Tirumala, P.B. Anna's icon depicts him in an attitude of dawn awakening service (Suprabhata Kainkaryam) before Lord Venkateswara"
      },
      videoSearches: [
        "P.B. Anna Venkateswara Suprabhatam History Velukkudi Krishnan",
        "Prativadi Bhayankaram Ananthachari Life Karunakarachariar",
        "Venkateswara Suprabhatam Meaning Ananthapadmanabhachariar"
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
];

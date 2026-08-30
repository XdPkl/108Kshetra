/**
 * Shrine templates — full-detail records per the PO sample documents
 * (US-DTL-15, FR-83). Every field is optional: pages render whatever depth
 * exists and fall back to legacy V2 enrichment, then to the documented
 * "not yet documented" note. New entries: add a key below — no UI change.
 *
 * Shape (all optional):
 *  serial, profile {regionNote, location, gps, vimanam, theertham,
 *    sthalaVriksham, posture, orientation},
 *  deities {moolavar|urchavar: {names {tamil, sanskrit, translit}, etymology,
 *    thaayar {name, legend}, photos [{src|wiki, alt, credit?}]}},
 *  puranam {legend[], prathyaksham?, timeline?, invasions?, milestones?, literature?},
 *  mangalasasanam {perAzhwar [[azhwarId, count]], excerpts [{azhwarId, work, verse?,
 *    tamil, transliteration, wordMeanings [[word, meaning]], significance?, audio?}]},
 *  visuals {descriptions[], literature[], videoSearches[]}
 */
export const TEMPLATES = {
  srirangam: {
    serial: 1,
    profile: {
      regionNote: 'Choza Naadu — Capital Shrine & Head of all 108 Divya Desams (Koyil)',
      location: 'Srirangam island, Tiruchirappalli district, Tamil Nadu — bounded by the Kaveri to the south and the Kollidam to the north',
      gps: '10.8624° N, 78.6899° E',
      vimanam: 'Sriranga Vimanam (Pranavakara Vimanam — shaped like the sacred syllable Om)',
      theertham: 'Chandra Pushkarini (primary), with 8 sub-theerthams: Kaveri, Kollidam, Surya, Ashwa, Tara, Bilva, Vasishta and Vibhishana',
      sthalaVriksham: 'Punnai tree (Calophyllum inophyllum)',
      posture: 'Kidantha Thirukkolam — reclining in Bhujanga Sayanam on the five-headed serpent Adisesha',
      orientation: 'Facing South — towards Lanka, blessing King Vibhishana as promised',
    },
    deities: {
      moolavar: {
        names: { tamil: 'ஸ்ரீ ரங்கநாதன் / பெரிய பெருமாள்', sanskrit: 'श्री रङ्गनाथः / परब्रह्मन्', translit: 'Sri Ranganathan / Periya Perumal' },
        etymology: 'Ranga (sacred stage) + Nathan (lord) — "Master of the sacred stage of the universe". Periya Perumal — "The Great Supreme Lord", the foundational Moolavar to whom all Azhwars surrendered.',
        thaayar: {
          name: 'Sri Ranganayaki Thayar (Padi Thaanda Pathini)',
          legend: 'She resides in her own sanctum compound within the 4th enclosure and never leaves it — the chaste consort who never steps past the threshold, signifying her independent authority (Purushakara Prapatti) as mediatrix between the Jivatma and the Paramatma.',
        },
        photos: [{ wiki: 'Ranganathaswamy Temple, Srirangam', alt: 'Sri Ranganatha sanctum at Srirangam' }],
      },
      urchavar: {
        names: { tamil: 'நம்பெருமாள் / அழகிய மணவாளன்', sanskrit: 'सुन्दरजामातृ', translit: 'Namperumal / Azhagiya Manavalan' },
        etymology: 'Nam-Perumal ("Our Supreme Lord") — an affectionate name coined by Swami Parasara Bhattar; Azhagiya Manavalan — "The Handsome Bridegroom".',
        thaayar: {
          name: 'Sri Ranganayaki Thayar (processional icon)',
          legend: 'Joins Namperumal directly only once a year, during Serthi Seva on the holy day of Panguni Uthiram.',
        },
        photos: [{ wiki: 'Ranganathaswamy Temple, Srirangam', alt: 'Namperumal processional deity at Srirangam' }],
      },
      sanctumNote: 'In the main Garbhagriha there is no visible Moolavar Thaayar icon beside Sri Ranganatha: Sri Ranganayaki is worshipped in a completely separate, dedicated temple complex within the inner prakaram — her independent authority as the divine mediatrix between the bound soul and the Supreme Lord.',
    },
    puranam: {
      legend: [
        'The Sriranga Vimanam emerged directly from the cosmic ocean during the creation cycle as the fruit of Brahma\u2019s penance; it passed to the Ikshvaku dynasty of Ayodhya and was worshipped by King Ikshvaku and by Lord Sri Rama himself.',
        'After his coronation, Rama gifted the Pranavakara Vimanam to Vibhishana of Lanka. Setting it down on the Kaveri bank for his mid-day prayers, it fixed itself permanently to the earth — and Lord Ranganatha, keeping his promise to gaze upon Lanka, reclines facing south to this day.',
        'Prathyaksham: manifested directly for Brahma, Ikshvaku, Sri Rama, King Dharmavarma, Vibhishana and Sage Kashyapa.',
      ],
      timeline: 'Pre-Sangam era origins (2nd century BCE – 3rd century CE); built and expanded by the Early Cholas (Dharmavarma, Parantaka I), Later Cholas (Kulothunga I, Rajamahendra), Hoysalas (Vira Someshwara), Pandyas (Jatavarman Sundara Pandya I, who gilded the inner sanctum with solid gold), the Vijayanagara emperors (Kumara Kampana) and the Nayaks of Madurai and Thanjavur.',
      invasions: 'During the Sultanate invasions of 1311 and 1323 CE (Malik Kafur and Ulugh Khan), Swami Pillai Lokacharya evacuated the Urchavar south, protecting Namperumal for 48 years. In 1371 CE General Gopanarya of Vijayanagara defeated the occupation forces, re-installed the Lord, and recorded the triumph on the temple\u2019s eastern wall inscriptions.',
      milestones: 'Kambar formally premiered his Tamil epic Ramavataram at the Mettazhagiya Singar sanctum here. The Vellai Gopuram remembers Vellayi, the devadasi who gave her life by leaping from the eastern tower after tricking a Sultanate commander during the 1323 siege.',
      literature: [
        'Sangam literature: Akananuru (verse 137); Silappatikaram (Katturai Gathai — the reclining Lord on the Kaveri island)',
        'Sri Ranga Mahatmyam, in the Brahmanda and Padma Puranas',
        'Koyil Olugu — the formal chronicle of the temple\u2019s administrative and liturgical history',
      ],
    },
    mangalasasanam: {
      perAzhwar: [
        ['thirumangai', 73],
        ['thondaradippodi', 55],
        ['periyazhwar', 35],
        ['kulasekhara', 31],
        ['thirumazhisai', 14],
        ['nammazhwar', 12],
        ['andal', 10],
        ['thiruppaan', 10],
        ['bhoothath', 4],
        ['pey', 2],
        ['poigai', 1],
      ],
      excerpts: [
        {
          azhwarId: 'thondaradippodi',
          work: 'Thirumaalai',
          verse: 'Verse 2',
          tamil: 'பச்சைமா மலைபோல் மேனி பவளவாய் கமலச் செங்கண்\nஅச்சுதா அமர ரேறே ஆயர்தம் கொழுந்தே என்னும்\nஇச்சுவை தவிர யான்போய் இந்திர லோகம் ஆளும்\nஅச்சுவை பெறினும் வேண்டேன் அரங்கமா நகருளானே!',
          transliteration: 'Pachchaimaa malaipol meni pavalavaay kamalach chengann / Achchuthaa amara rere aayardam kozhundhe ennum / Ichchuvai thavira yaanpoy indhira lokam aalum / Achchuvai perinum venden arangamaa nagarulaane!',
          wordMeanings: [
            ['Pachchaimaa malai pol meni', 'Body like a massive green emerald mountain'],
            ['Pavalavaay', 'Coral-red lips'],
            ['Kamalach chengann', 'Lotus-like red eyes'],
            ['Achchuthaa', 'Infallible Lord (Achyuta)'],
            ['Amara rere', 'Supreme Lord of the Devas'],
            ['Aayardam kozhundhe', 'Tender leader of the cowherd folk'],
            ['Ichchuvai thavira', 'Except for this nectar of devotional taste'],
            ['Yaan poy Indhira lokam aalum', 'Even if I went and ruled Indra\u2019s heaven'],
            ['Achchuvai perinum venden', 'I would not desire that enjoyment'],
            ['Arangamaa nagarulaane', 'O Lord who resides in the grand city of Srirangam!'],
          ],
          significance: 'Establishes Bhagavat-Anubhava — experiencing Lord Ranganatha at Srirangam — as infinitely superior to Kaivalya (self-realisation) or even the pleasures of Svarga.',
        },
        {
          azhwarId: 'thiruppaan',
          work: 'Amalanadhipiran',
          verse: 'Verse 10',
          tamil: 'கொண்டல் வண்ணனைக் கோவல னாய்வெண்ணெய்\nஉண்ட வாயன்என் உள்ளம் கவர்ந்தானை\nஅண்ட கோனரங் கன்என் அமுதினைக்\nகண்ட கண்கள்மற் றொன்றினைக் காணாவே.',
          transliteration: 'Kondal vannanaik kovalanaay venney unda vaayan en ullam kavarndhaanai / Anda kon arangann en amudhinaik / Kanda kangal marrondrinaik kaanaave.',
          wordMeanings: [
            ['Kondal vannanai', 'He whose hue is like rain-bearing clouds'],
            ['Kovalanaay', 'Who came as a cowherd'],
            ['Venney unda vaayan', 'Whose mouth consumed stolen butter'],
            ['En ullam kavarndhaanai', 'He who stole my heart'],
            ['Anda kon', 'Sovereign King of the entire cosmos'],
            ['Arangann', 'Lord Ranganatha'],
            ['En amudhinaik', 'My insatiable nectar'],
            ['Kanda kangal', 'Eyes that have beheld Him'],
            ['Marrondrinaik kaanaave', 'Will never look upon anything else!'],
          ],
          significance: 'The ultimate Padadi-Kesantam vision — having beheld the divine beauty of Ranganatha from feet to crown, the Azhwar\u2019s eyes refused everything else, culminating in his absorption into the Moolavar icon.',
          audio: 'https://archive.org/search?query=Amalanadhipiran%20recitation',
        },
      ],
    },
    visuals: {
      descriptions: [
        'Rajagopuram: the 236-foot, 13-tiered southern tower in Dravidian style',
        'Moolavar form: reclining Sri Ranganatha on Adisesha beneath the golden Pranavakara Vimanam',
        'Thaayar form: Sri Ranganayaki seated in padmasana in her separate inner shrine',
        'Urchavar form: Namperumal flanked by Sridevi and Bhoodevi, bearing the kasturi tilaka',
      ],
      literature: [
        'Srirangam Temple Chronicles (Koyil Olugu)',
        'Project Madurai — Nalayira Divya Prabandham archives',
      ],
      videoSearches: [
        'Velukkudi Krishnan Srirangam Mahatmyam series',
        'Srirangam Vaikunta Ekadasi Araiyar Sevai',
      ],
    },
  },
};

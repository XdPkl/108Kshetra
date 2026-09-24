/**
 * About page content — the single place to update the "About Us — Kshetra
 * Tours" page without touching UI code (FR-87, NFR-05). Content per the
 * PO-approved design mockups (docs/03-design/mockups/about.html, 2026-09-10).
 */
export const ABOUT = {
  site: {
    heading: 'About this site',
    paragraphs: [
      '108 Divya Kshetrams is a devotional reference for the 108 Divya Desams — the sacred abodes of Lord Narayana glorified by the twelve Azhwars in the Nalayira Divya Prabandham, the four-thousand-verse Tamil Veda.',
      'The site helps pilgrims and students explore every kshetram: deities and consorts, temple timings, sthala puranam, the pasurams sung there, nearby desams, and practical visit information. Plan your journey with the map and trip planner, and track your darshan progress toward all 108.',
      'Content is compiled with reverence from the Prabandham tradition and standard published lists, and is provided in good faith. Where a detail is not yet documented, the page says so plainly.',
    ],
    features: [
      {
        label: 'Kshetra Insights',
        text: 'Detailed records of presiding deities, consorts, temple timings, sthala puranams, and specific pasurams composed by each Azhwar.',
      },
      {
        label: 'Interactive Yatra Planner',
        text: 'Cluster-based route mapping by region (Nadu), logistics guidance, nearby temples, and personal darshan trackers toward all 108.',
      },
      {
        label: 'Authentic Archival Faith',
        text: 'Compiled from canonical commentaries (Periyavachan Pillai) and standard sources; where an entry remains unconfirmed, it is stated plainly.',
      },
    ],
  },
  tours: {
    heading: 'Kshetra Tours',
    intro: 'Curated pilgrim journeys accompanied by traditional sthala puranam discourses and seamless travel logistics.',
    highlights: [
      {
        title: 'Regional Circuit Itineraries',
        text: 'Structured circuits covering Chola Nadu (40 abodes), Pandya Nadu (18 abodes), Thondai Nadu (22 abodes), and Malai Nadu.',
      },
      {
        title: 'Pure Sattvic Travel & Stay',
        text: 'Clean accommodations proximate to temples, authentic sattvic vegetarian dining, and planned darshan windows.',
      },
      {
        title: 'Festivals & Auspicious Departures',
        text: 'Departures aligned with Brahmotsavams, Vaikunta Ekadasi, and Azhwar Thirunakshatram celebrations.',
      },
    ],
    note: 'To express interest or ask about an upcoming yatra, reach us through the contact section below.',
  },
  contact: {
    heading: 'Contact',
    email: 'contact@kshetratours.org',
    phone: '+91 98765 43210',
    note: 'Monday – Saturday, 9:00 AM – 6:00 PM IST. Typical inquiry response time is within 24 hours.',
  },
  ceo: {
    name: 'Sri Prasanna Venkatesh',
    role: 'Founder & Chief Executive Officer',
    org: 'Kshetra Tours & Pilgrimage Trust',
    title: 'Divya Desam Yatra Architect & Sampradaya Kainkaryapara',
    base: 'Srirangam & Chennai, India',
    email: 'ceo@kshetratours.org',
    trustee: 'Sampradaya Yatra Trustee',
    quote: '“Our sacred Divya Desams are not mere destinations of stone and sculpture — they are the living divine residences of Sriman Narayana, eternalized by the celestial tears and ecstatic songs of the Azhwars. When a devotee travels with Kshetra Tours, our singular kainkaryam is to lift away every logistical worry, ensure pristine sattvic nourishment, and cultivate an unhurried atmosphere of prayer so that each darshan touches the soul.”',
    bio: [
      'Sri Prasanna Venkatesh founded Kshetra Tours with the sacred vision of establishing an authentic, sampradaya-centered pilgrimage organization dedicated exclusively to the 108 Divya Desams and holy Sri Vaishnava abodes. Having completed the mangalasasanam of all terrestrial Divya Desams multiple times, he brings over eighteen years of firsthand experience navigating sanctum schedules, festival protocols, and comfortable devotional travel logistics.',
      'Under his leadership, Kshetra Tours has pioneered pure sattvic catering (madi-samayal without onion or garlic), spacious senior-citizen friendly circuit pacing, and insightful orientation on Nalayira Divya Prabandham pasurams before each temple entry, ensuring that modern pilgrims experience the sacred depth of our ancestral yatra tradition.',
    ],
    pillars: [
      {
        title: '108 Divya Desams Completed',
        text: 'Personal pilgrimage mastery across all 106 terrestrial shrines from Bhooloka Vaikuntam (Srirangam) to Badrinath and Muktinath.',
      },
      {
        title: '25,000+ Pilgrims Guided',
        text: 'Over 450+ guided batches conducted across Chola, Thondai, Pandiya, Malai, and Vada Nadu circuits with zero logistical compromises.',
      },
      {
        title: 'Sattvic Prasadam Standard',
        text: 'Pioneered strict orthodox madi-samayal travel catering, partnering with local temple thaligai cooks for uncompromised purity.',
      },
      {
        title: 'Sampradaya & Pasuram Context',
        text: 'Deeply grounded in Nalayira Divya Prabandham studies under traditional scholars, blending devotion with rich historical lore.',
      },
    ],
  },
  circuits: [
    {
      id: 'chola',
      region: 'Chola Nadu',
      title: '1. Chola Nadu Heritage Yatra',
      subtitle: 'Kumbakonam, Thanjavur & Srirangam',
      count: '40 Divya Desams',
      duration: '5 to 7 Days',
      baseCamps: 'Kumbakonam & Srirangam (Trichy)',
      desc: 'The primordial heartland of Sri Vaishnava sampradayam. Covers Srirangam, Thiruvellarai, Anbil, the 12 Divya Desams around Kumbakonam, and the coastal delta shrines.',
      highlights: ['Srirangam Periya Kovil', 'Sarangapani Aaravamudhan', 'Thirukkannapuram Sowriraja Perumal', 'Nachiyar Kovil'],
    },
    {
      id: 'thondai',
      region: 'Thondai Nadu',
      title: '2. Kanchipuram & Thondai Nadu Yatra',
      subtitle: 'Kanchi Kshetrams, Triplicane & Shore Shrines',
      count: '22 Divya Desams',
      duration: '3 to 4 Days',
      baseCamps: 'Kanchipuram & Chennai',
      desc: 'Encompasses the 14 Divya Desams situated within sacred Satyavrata Kshetra (Kanchipuram), plus Sri Parthasarathy in Triplicane, Tiruneermalai, Mahabalipuram, and Sholinghur.',
      highlights: ['Varadaraja Perumal (Athigiri)', 'Triplicane Parthasarathy', 'Thiruvehka Sonnavannam Seitha Perumal', 'Thirukkadalmallai'],
    },
    {
      id: 'pandiya',
      region: 'Pandiya Nadu',
      title: '3. Pandiya Nadu & Nava Thirupathi Yatra',
      subtitle: 'Madurai, Srivilliputhur & Thamirabarani Valley',
      count: '18 Divya Desams',
      duration: '4 Days',
      baseCamps: 'Madurai & Tirunelveli',
      desc: 'Covers the southern realm immortalized by Nammalwar, Periyazhwar, and Andal. Features the 9 Nava Thirupathi shrines aligned with the nine Navagrahas along the sacred Thamirabarani river.',
      highlights: ['Srivilliputhur Andal Kovil', 'Alagar Kovil (Kallazhagar)', 'Nava Thirupathi (Alwarthirunagari)', 'Thirukkoshtiyur Sowmya Narayana'],
    },
    {
      id: 'malai',
      region: 'Malai Nadu',
      title: '4. Malai Nadu (Kerala) Yatra',
      subtitle: 'Trivandrum, Chengannur & Pandava Kshetrams',
      count: '13 Divya Desams',
      duration: '3 to 4 Days',
      baseCamps: 'Thiruvananthapuram & Kochi / Chengannur',
      desc: 'The scenic coastal and backwater abodes of Chera Nadu, from Anantha Padmanabhaswamy to the 5 shrines built by the Pancha Pandavas around Chengannur.',
      highlights: ['Sri Padmanabhaswamy (Thiruvananthapuram)', 'Thirukkatkarai', 'Thiruvalla Vallabha', 'Chengannur Pandava Desams'],
    },
    {
      id: 'vada',
      region: 'Vada Nadu',
      title: '5. Vada Nadu & Tirumala Pilgrimage',
      subtitle: 'Tirumala, Ahobilam & the Himalayan Abodes',
      count: '11 Divya Desams',
      duration: '4 to 8 Days',
      baseCamps: 'Tirupati (Renigunta) & Delhi / Dehradun',
      desc: 'The northern circuit from the Seven Hills of Srinivasa through the lion shrines of Ahobilam to the Himalayan abodes of Badrinath and Muktinath, saluted by the Azhwars beyond earthly frontiers.',
      highlights: ['Thiruvengadam (Tirumala)', 'Ahobilam Singavel Kundram', 'Badrinath', 'Muktinath (Salagrama Kshetram, Nepal)'],
    },
    {
      id: 'nadu',
      region: 'Nadu Nadu',
      title: '6. Nadu Nadu Mini Yatra',
      subtitle: 'Thirukkoviloor & Thiruaheendrapuram',
      count: '2 Divya Desams',
      duration: '1 Day',
      baseCamps: 'Tirukoilur & Cuddalore',
      desc: 'A one-day sojourn through the central realm between Chola and Thondai: Thirukkoviloor, where Trivikrama revealed his cosmic stride to Poigai and Thirumazhisai, and the hill shrine of Thiruaheendrapuram sung by Thirumazhisai Azhwar.',
      highlights: ['Thirukkoviloor Ulagalandha Perumal', 'Thiruaheendrapuram Devanathan'],
    },
    {
      id: 'vinnulaga',
      region: 'Celestial',
      title: '7. Vinnulaga Thirupathigal Darshanam',
      subtitle: 'Thiruppaarkadal & Paramapadham',
      count: '2 Celestial Abodes',
      duration: 'Within every sanctum',
      baseCamps: 'Worshipped within every Divya Desam sanctum',
      desc: 'The two transcendental abodes beyond earthly maps — the Ocean of Milk (Thiruppaarkadal) and the Supreme Abode (Paramapadham) — meditated upon by every Sri Vaishnava within each temple sannidhi, completing the 108.',
      highlights: ['Thiruppaarkadal (Kshirabdi)', 'Thirupparamapadham (Vaikuntam)'],
    },
  ],
  etiquette: [
    {
      id: 'sanctum',
      title: 'Temple Sanctum Etiquette',
      subtitle: 'Kovil Mariyathai & Darshan Varam',
      points: [
        ['Traditional Attire:', 'Dhoti and Angavastram for men; traditional sarees or modest salwar for women. Avoid synthetic or casual modern western apparel inside the inner prakarams.'],
        ['Pradakshinam (Circumambulation):', 'Perform odd-numbered clockwise circumambulations, paying reverent homage first to the Dwajasthambam (flagpole), Bali Peetam, and Periya Thiruvadi (Garuda Azhwar).'],
        ['Thayar First (Purushakaram):', 'In Sri Vaishnava sampradayam, it is traditional to first take the darshan and blessings of Thayar (Sri Mahalakshmi), seeking her compassionate intercession before entering the Moolavar sanctum.'],
        ['Satari & Holy Theertham:', 'Receive the sacred Sri Satari (representing the lotus feet of the Lord through Nammalwar) with bowed head, and receive holy Theertham reverently in the right palm cupped over a vastram.'],
      ],
    },
    {
      id: 'parayanam',
      title: 'Divya Prabandham Parayanam',
      subtitle: 'The 4,000 Sacred Tamil Hymns',
      points: [
        ['Mangalasasanam Pasurams:', 'Chanting the specific decuple hymn composed by the Azhwars on each Kshetram brings profound spiritual elevation during Darshan.'],
        ['Thiruppavai Recitation:', 'The 30 sacred verses of Andal’s Thiruppavai are universally chanted during early morning Suprabhatam and Dhanurmasa seva at all 108 temples.'],
        ['Nithyanusandhanam:', 'Daily recitation begins with Periyazhwar’s Thirupallandu ("பல்லாண்டு பல்லாண்டு பல்லாயிரத்தாண்டு..."), invoking eternal protective blessings on the Lord.'],
        ['Acharya Thaniyan:', 'Before beginning any pasuram recitation, reciting the invocatory sloka (Thaniyan) of your respective Acharya and the singing Azhwar is customary.'],
      ],
    },
  ],
};

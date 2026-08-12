import { LessonMetadata, TimelineEvent, QuizQuestion, ExitTicketLeaf } from '../types';

export const LESSON_METADATA: LessonMetadata = {
  title: 'The Magic of Bali: History & Origins',
  teacher: 'Robinson A. Rubio Jr.',
  date: 'September 2, 2024',
  grade: 'Grade 6',
  termWeek: 'Term 1, Week 4',
  standards: [
    {
      code: 'HT3-1',
      title: 'Historical Change & Continuity',
      description: 'Describes and explains the significance of people, groups, places, and events to the development of Balinese society over time.'
    },
    {
      code: 'HT3-3',
      title: 'Cultural Heritage & Tradition',
      description: 'Identifies change and continuity in Balinese cultural traditions, spiritual beliefs, and social systems.'
    },
    {
      code: 'HT3-5',
      title: 'Historical Inquiry & Communication',
      description: 'Applies historical inquiry skills to interpret evidence and create reflective primary source artifacts.'
    }
  ]
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'austronesian',
    era: 'Prehistoric Origins',
    year: '2000 BCE',
    title: 'Austronesian Migration & Rice Culture',
    category: 'culture',
    categoryLabel: 'Culture & Religion',
    summary: 'Seafaring migrants settled in Bali, introducing wet-rice farming, animistic ancestor worship, and metalworking.',
    detailedDescription: 'Around 2000 BCE, Austronesian seafarers migrated south from Maritime Southeast Asia to Bali. They brought advanced terraced wet-rice agriculture (padi), megalithic stone altars, bronze instruments, and deep animistic spiritual veneration for spirits (Hyang) residing in mountains, forests, and oceans.',
    keyTakeaway: 'Foundation of Balinese spiritual connection to nature and communal wet-rice agriculture that evolved into the Subak system.',
    primarySourceQuote: '“The mountains belong to the gods, the sea to the spirits, and the fields to the communities that work them together.” — Ancient Balinese Proverb',
    imageIcon: 'Waves',
    location: 'Candi Dasa & North Coast Bali',
    artifacts: ['Moon of Pejeng Bronze Drum', 'Megalithic Stone Altars', 'Terraced Irrigation Models']
  },
  {
    id: 'hindu-buddhist',
    era: 'Early Classical Age',
    year: '1st–5th Century CE',
    title: 'Hindu-Buddhist Cultural Synthesis',
    category: 'culture',
    categoryLabel: 'Culture & Religion',
    summary: 'Indian traders and monks brought Sanskrit scriptures, Hinduism, and Buddhism, blending with local spirit traditions.',
    detailedDescription: 'Maritime trade routes connecting India and Southeast Asia brought Hindu and Buddhist priests (Brahmins and Monks) to Bali. Rather than replacing local animistic traditions, Indian beliefs merged seamlessly with Balinese spirit worship, creating Agama Hindu Dharma (Balinese Hinduism) with Sanskrit inscriptions on palm-leaf manuscripts (Lontar).',
    keyTakeaway: 'Creation of a unique, vibrant fusion religion found nowhere else in the world: Balinese Hinduism.',
    primarySourceQuote: '“In Bali, Shiva and Buddha reside side by side in sacred harmony upon the throne of Mt. Agung.” — Lontar Manuscript Excerpt',
    imageIcon: 'Scroll',
    location: 'Bedulu & Sanur Coast',
    artifacts: ['Sanur Belanjong Pillar Inscription (914 CE)', 'Goa Gajah (Elephant Cave)', 'Prasati Palm-Leaf Manuscripts']
  },
  {
    id: 'majapahit',
    era: 'Imperial Expansion',
    year: '1343 CE',
    title: 'Majapahit Empire Integration',
    category: 'conflict',
    categoryLabel: 'Conflict & Politics',
    summary: 'General Gajah Mada of Java conquered Bali, bringing Javanese Hindu court culture, theatre, dance, and caste systems.',
    detailedDescription: 'In 1343 CE, Prime Minister Gajah Mada of the powerful Javanese Majapahit Empire led an expedition into Bali. Following the victory, Javanese nobles, priests, court dancers, and artisans migrated to Bali. This influx revitalized Balinese arts, introducing Wayang Kulit shadow puppetry, gamelan music scales, and royal court ceremonies.',
    keyTakeaway: 'Bali became the vibrant storehouse and preserver of Majapahit classical Hindu-Javanese high culture.',
    primarySourceQuote: '“Unity in Diversity (Bhinneka Tunggal Ika) — Though we are different in form, our spiritual truth is one.” — Mpu Tantular, Majapahit Court Poet',
    imageIcon: 'Crown',
    location: 'Samprangan & Gelgel Kingdom',
    artifacts: ['Keris Sacred Daggers', 'Majapahit Terracotta Reliefs', 'Gamelan Gong Kebyar Prototypes']
  },
  {
    id: 'gelgel-kingdoms',
    era: 'Golden Age of Kings',
    year: '16th Century',
    title: 'The Royal Kingdoms of Gelgel',
    category: 'culture',
    categoryLabel: 'Culture & Religion',
    summary: 'Under King Dalem Baturenggong, Bali experienced a Renaissance of temple building, epic dance, and literature.',
    detailedDescription: 'Following the fall of Majapahit in Java, Bali flourished as an independent realm under the Gelgel Dynasty. King Dalem Baturenggong and holy priest Dang Hyang Nirartha established iconic sea temples including Tanah Lot and Uluwatu, while formalizing the Padmasana lotus seat for Supreme God Acintya.',
    keyTakeaway: 'Establishment of Bali’s iconic temple network architecture and classical performing arts traditions.',
    primarySourceQuote: '“Let every village build three sacred temples (Kahyangan Tiga) to honor Creation, Preservation, and Renewal.” — Dang Hyang Nirartha',
    imageIcon: 'Castle',
    location: 'Gelgel & Klungkung Royal Courts',
    artifacts: ['Padmasana Lotus Altars', 'Barong & Rangda Sacred Masks', 'Kerta Gosa Hall of Justice Ceiling Paintings']
  },
  {
    id: 'dutch-colonial',
    era: 'Colonial Era',
    year: '1846–1908 CE',
    title: 'Dutch Imperial Intrusion & Puputan Resistance',
    category: 'conflict',
    categoryLabel: 'Conflict & Politics',
    summary: 'Dutch military expansion met fierce Balinese royal resistance, culminating in the tragic and historic Puputan rituals.',
    detailedDescription: 'Starting in 1846, the Netherlands Indies government launched military campaigns to control Balinese trade ports. In 1906 (Badung) and 1908 (Klungkung), faced with overwhelming firepower, royal families and followers dressed in white ceremonial clothes marched into battle choosing honorable death (Puputan) over submission.',
    keyTakeaway: 'A solemn testament to Balinese honor, pride, and spiritual devotion that shocked the world and protected cultural identity.',
    primarySourceQuote: '“Better to die in white robes of honor than to live in chains of foreign submission.” — King of Klungkung (1908)',
    imageIcon: 'ShieldAlert',
    location: 'Denpasar & Klungkung Palace',
    artifacts: ['Ceremonial White Robes', 'Gold-leafed Royal Keris', 'Puputan Badung Monument']
  },
  {
    id: 'modern-unesco',
    era: 'Modern Heritage Era',
    year: 'Modern Day (1990s-Present)',
    title: 'UNESCO World Heritage & Global Cultural Treasure',
    category: 'modern',
    categoryLabel: 'Modern Era',
    summary: 'The Subak irrigation system and Tri Hita Karana philosophy achieved UNESCO recognition, preserving Bali’s living legacy.',
    detailedDescription: 'In 2012, UNESCO recognized Bali’s Subak irrigation system as a World Cultural Heritage site. Subak combines ecology, engineering, and spiritual devotion, reflecting Tri Hita Karana—the balance between Humans, God, and Nature. Today, Bali navigates modern tourism while safeguarding its ancient rituals and living history.',
    keyTakeaway: 'Ancient history is not just in books; in Bali, thousand-year-old irrigation and spiritual practices are lived every single day.',
    primarySourceQuote: '“Tri Hita Karana teaches us that happiness comes when humanity lives in harmony with God, with fellow people, and with nature.” — UNESCO Heritage Citation',
    imageIcon: 'Sparkles',
    location: 'Jatiluwih & Tampaksiring Rice Terraces',
    artifacts: ['Subak Water Temple Locks', 'UNESCO Inscription Plaque', 'Lontar Agricultural Calendars']
  }
];

export const INITIAL_EXIT_TICKETS: ExitTicketLeaf[] = [
  {
    id: 'ticket-1',
    studentName: 'Maya K.',
    type: 'fact',
    content: 'I learned that Balinese Hinduism merged Indian Hindu beliefs with ancient local animistic ancestor worship!',
    timestamp: '9:12 AM',
    xPercent: 28,
    yPercent: 38
  },
  {
    id: 'ticket-2',
    studentName: 'Ethan P.',
    type: 'insight',
    content: 'The Subak system is over 1,000 years old and works using democratic water temples without modern electricity!',
    timestamp: '9:15 AM',
    xPercent: 72,
    yPercent: 32
  },
  {
    id: 'ticket-3',
    studentName: 'Chloe S.',
    type: 'question',
    content: 'Why did the Majapahit artists and priests choose Bali when moving away from Java in 1343 CE?',
    timestamp: '9:18 AM',
    xPercent: 48,
    yPercent: 22
  },
  {
    id: 'ticket-4',
    studentName: 'Lucas M.',
    type: 'fact',
    content: 'Austronesians brought wet-rice terrace farming to Bali over 4,000 years ago around 2000 BCE.',
    timestamp: '9:22 AM',
    xPercent: 22,
    yPercent: 62
  },
  {
    id: 'ticket-5',
    studentName: 'Aisha T.',
    type: 'insight',
    content: 'Puputan showed how deeply the Balinese valued their royal honor and spiritual freedom against Dutch control.',
    timestamp: '9:25 AM',
    xPercent: 78,
    yPercent: 58
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which ancient seafaring group introduced wet-rice terrace farming and metalworking to Bali around 2000 BCE?',
    options: [
      'The Portuguese Explorers',
      'The Austronesian Migrants',
      'The Roman Empire Merchants',
      'The British East India Traders'
    ],
    correctAnswer: 1,
    explanation: 'Austronesian migrants navigated to Bali around 2000 BCE, bringing rice cultivation techniques, animism, and bronze tools.',
    eraContext: 'Prehistoric Origins (2000 BCE)'
  },
  {
    id: 2,
    question: 'How did Balinese Hinduism (Agama Hindu Dharma) develop during the 1st–5th centuries CE?',
    options: [
      'By destroying all previous local traditions and stone altars',
      'By blending Indian Hindu-Buddhist teachings with local animist ancestor worship',
      'By adopting European Christian missionary doctrines',
      'By importing fully written Javanese law books without changes'
    ],
    correctAnswer: 1,
    explanation: 'Balinese Hinduism is a unique cultural synthesis that combined Indian Sanskrit Hindu/Buddhist concepts with indigenous spirit veneration.',
    eraContext: 'Early Classical Age (1st–5th Century CE)'
  },
  {
    id: 3,
    question: 'What major event occurred in 1343 CE that brought Javanese dance, wayang shadow puppets, and court culture to Bali?',
    options: [
      'The UNESCO Heritage Declaration',
      'The Arrival of Dutch Ships in Denpasar',
      'The Majapahit Empire Integration led by Gajah Mada',
      'The Eruption of Mount Agung'
    ],
    correctAnswer: 2,
    explanation: 'Prime Minister Gajah Mada led the Majapahit conquest of Bali in 1343 CE, bringing court artisans, dancers, scholars, and priests.',
    eraContext: 'Majapahit Expansion (1343 CE)'
  },
  {
    id: 4,
    question: 'What core philosophical principle guides the UNESCO-recognized Subak irrigation system in Bali?',
    options: [
      'Tri Hita Karana (Harmony between Humans, God, and Nature)',
      'Pax Neerlandica (Colonial Trade Dominance)',
      'Subak Modernization (Industrial Chemical Farming)',
      'Veda Samhita (Strict Monastic Isolation)'
    ],
    correctAnswer: 0,
    explanation: 'Tri Hita Karana emphasizes that prosperity arises from maintaining harmonious relationships with the Divine, fellow humans, and the environment.',
    eraContext: 'Modern UNESCO Era'
  },
  {
    id: 5,
    question: 'Which holy priest established iconic sea temples like Tanah Lot and Uluwatu during the Gelgel Royal Renaissance?',
    options: [
      'Gajah Mada',
      'Dang Hyang Nirartha',
      'Robinson Rubio',
      'King Baturenggong'
    ],
    correctAnswer: 1,
    explanation: 'Dang Hyang Nirartha traveled throughout Bali in the 16th century, establishing coastal sea temples and designing the iconic Padmasana lotus altars.',
    eraContext: 'Golden Age of Kings (16th Century)'
  }
];

export const POSTCARD_THEMES = [
  {
    id: 'tanah-lot',
    name: 'Tanah Lot Sea Temple',
    bgGradient: 'from-amber-900/80 via-slate-900 to-indigo-950',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-200',
    description: 'Iconic offshore rock temple built during the 16th Century Gelgel era.',
    illustrationUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'subak-terraces',
    name: 'Jatiluwih Rice Terraces',
    bgGradient: 'from-emerald-900/80 via-slate-900 to-teal-950',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-200',
    description: 'Ancient Subak UNESCO eco-irrigation terraced system.',
    illustrationUrl: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'besakih-gateway',
    name: 'Besakih Mother Temple',
    bgGradient: 'from-blue-900/80 via-slate-900 to-slate-950',
    borderColor: 'border-blue-500/50',
    textColor: 'text-blue-200',
    description: 'The holiest multi-tiered temple complex at the foot of sacred Mt. Agung.',
    illustrationUrl: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'barong-mask',
    name: 'Sacred Barong & Legong',
    bgGradient: 'from-rose-900/80 via-slate-900 to-amber-950',
    borderColor: 'border-rose-500/50',
    textColor: 'text-rose-200',
    description: 'Classical dance and spiritual protector spirit rooted in Majapahit tradition.',
    illustrationUrl: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?auto=format&fit=crop&w=600&q=80'
  }
];

export const STAMP_DESIGNS = [
  { id: 'garuda', name: 'Gold Garuda Seal', icon: 'Eagle', color: 'bg-amber-500/20 text-amber-300 border-amber-400' },
  { id: 'frangipani', name: 'Balinese Frangipani', icon: 'Flower2', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-400' },
  { id: 'temple', name: 'Meru Temple Tower', icon: 'Castle', color: 'bg-blue-500/20 text-blue-300 border-blue-400' },
  { id: 'unesco', name: 'UNESCO World Seal', icon: 'Globe', color: 'bg-purple-500/20 text-purple-300 border-purple-400' }
];

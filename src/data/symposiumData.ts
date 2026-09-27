import { EventItem, ScheduleItem, Coordinator } from '../types';

export const COLLEGE_INFO = {
  name: 'Adhiparasakthi Engineering College',
  invocation: 'Om Sakthi',
  department: 'Department of Information Technology',
  degree: 'B.Tech Information Technology',
  location: 'Melmaruvathur, Chengalpattu District, Tamil Nadu - 603319',
  approvals: 'Approved by AICTE, New Delhi & Affiliated to Anna University, Chennai',
  accreditation: 'Accredited by NAAC "A" Grade',
  certification: 'An ISO 9001:2015 Certified Institution',
  symposiumTitle: 'INTELLECTRA 2K26',
  symposiumSubtitle: 'IT Spectrum 2026 - National Level Technical Symposium',
  theme: '</> IDEAS | TECHNOLOGY | INNOVATION | A BETTER TOMORROW',
  tagline: 'Code • Create • Innovate',
  secondaryMotto: 'Dream Innovate Achieve',
  date: 'October 12, 2026',
  dateFormatted: '12th October 2026, 09:00 AM',
  countdownDateIso: '2026-10-12T09:00:00+05:30',
  venue: 'Central Library, Adhiparasakthi Engineering College',
  posterPath: '/src/assets/images/intellectra_official_poster_1790447046945.jpg',
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScX_sample_intellectra2026/viewform',
  website: 'www.intellectra.in',
  designedBy: 'Madhavan D',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.790924976774!2d79.82772597576906!3d12.430030587834572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5323bb657159bb%3A0xe54d31d0445d4e1c!2sAdhiparasakthi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  mapsDirectUrl: 'https://maps.google.com/?q=Adhiparasakthi+Engineering+College+Melmaruvathur'
};

export const EVENTS: EventItem[] = [
  {
    id: 'prompt-stack',
    title: 'Prompt Stack',
    category: 'technical',
    shortTagline: 'AI Tools & Rapid Prompt Engineering Hackathon',
    description: 'Test your ingenuity in architecting high-leverage prompts, LLM orchestrations, and autonomous agent workflows to solve challenging real-world software puzzles.',
    rounds: [
      'Round 1: Rapid Prompt Precision & Jailbreak Detection (30 mins)',
      'Round 2: System Architecture & Workflow Synthesis with Generative AI (45 mins)',
      'Round 3: Live Demo & Defense in front of the Jury Panel'
    ],
    rules: [
      'Individual or team of 2-3 members allowed.',
      'Participants may use popular LLM APIs & playground interfaces.',
      'Evaluation based on prompt efficiency, hallucination mitigation, and architectural novelty.',
      'Plagiarism or raw copy-pasting of pre-made templates is strictly prohibited.'
    ],
    teamSize: '1 - 3 Members',
    venue: 'Computer Center Lab 3',
    time: '10:30 AM - 01:00 PM',
    prizes: 'Cash Prize + Winner Memento + Merit Certificate',
    skills: ['AI Tools', 'Prompt Engineering', 'LLM Architectures', 'Logic Reasoning'],
    image: '/src/assets/images/hackathon_coding_1790438526661.jpg',
    coordinators: [
      { name: 'Mr. K. Venkatesh', phone: '9342661192' },
      { name: 'Ms. P. Jayasri', phone: '9655777274' }
    ]
  },
  {
    id: 'codesmith-innovation',
    title: 'Codesmith: Innovation Meet & Paper Presentation',
    category: 'technical',
    shortTagline: 'Technical Research & Next-Gen Architecture Defense',
    description: 'A prestigious forum to articulate and defend novel research methodologies, IEEE format papers, and system architectures across Cloud, Web3, Cyber Security, and Machine Learning.',
    rounds: [
      'Round 1: Abstract Screening & Initial Shortlisting',
      'Round 2: PPT Presentation (8 mins presentation + 2 mins Q&A by Judges)'
    ],
    rules: [
      'Maximum 2-3 authors per research paper.',
      'Topics include Cloud Computing, Edge AI, IoT, Blockchain, and Cyber Defense.',
      'Bring 2 printed copies of IEEE format manuscript along with PPT on a clean flash drive.',
      'Presentation will be strictly capped at 8 minutes.'
    ],
    teamSize: '1 - 3 Members',
    venue: 'APEC Central Library Audio-Visual Hall',
    time: '10:30 AM - 12:45 PM',
    prizes: 'First & Second Cash Prizes + Publication Assistance',
    skills: ['Paper Presentation', 'Technical Writing', 'Public Speaking', 'System Defense'],
    image: '/src/assets/images/paper_presentation_1790438539203.jpg',
    coordinators: [
      { name: 'Mr. L. Balaji', phone: '8608802727' },
      { name: 'Ms. S. Mohanapriya', phone: '6374663499' }
    ]
  },
  {
    id: 'infographix-uiux',
    title: 'Infographix',
    category: 'technical',
    shortTagline: 'UI/UX Design Sprint & Interactive Prototyping Challenge',
    description: 'Transform complex user journey briefs into visually captivating, accessible, and intuitive UI/UX design prototypes on Figma adhering to modern design tokens.',
    rounds: [
      'Round 1: Visual Heuristics & Wireframing Sprint (40 mins)',
      'Round 2: High-Fidelity Interactive Prototype & Micro-interaction Defense (50 mins)'
    ],
    rules: [
      'Teams of 1 or 2 designers.',
      'Figma will be the primary software environment (web-based accounts provided if needed).',
      'Judging criteria: Visual hierarchy, accessibility compliance (WCAG AA), interaction fidelity, and creative flair.',
      'Pre-made UI kits from community must not be copied as final solutions.'
    ],
    teamSize: '1 - 2 Members',
    venue: 'IT Multimedia & Graphics Lab',
    time: '10:30 AM - 01:00 PM',
    prizes: 'Cash Prize + Design Portfolio Badge',
    skills: ['UI/UX', 'Figma', 'Prototyping', 'Design Systems', 'Micro-interactions'],
    image: '/src/assets/images/web_dev_lab_1790438551031.jpg',
    coordinators: [
      { name: 'Ms. P. Jayasri', phone: '9655777274' },
      { name: 'Mr. K. Venkatesh', phone: '9342661192' }
    ]
  },
  {
    id: 'booyah-battle',
    title: 'Booyah Battle',
    category: 'non-technical',
    shortTagline: 'High-Octane Tactical Esports Tournament',
    description: 'Assemble your mobile gaming squad and battle through intense elimination brackets in a battle royale showdown testing lightning reflexes and tactical coordination.',
    rounds: [
      'Round 1: Qualifying Elimination Matches (Custom Rooms)',
      'Round 2: Semi-Final Survival Skirmish',
      'Round 3: Grand Finale Showdown on Projected Big Screen'
    ],
    rules: [
      'Squad of 4 players (Mobile devices only, no emulators or triggers).',
      'Stable college high-speed Wi-Fi provided.',
      'Unsportsmanlike conduct or third-party modifications result in instant disqualification.'
    ],
    teamSize: '4 Members (Squad)',
    venue: 'Seminar Hall 2 (Esports Zone)',
    time: '02:00 PM - 03:30 PM',
    prizes: 'Winner Cash Pool + Esports Champion Medals',
    skills: ['Team Coordination', 'Lightning Reflexes', 'Spatial Tactics'],
    image: '/src/assets/images/hackathon_coding_1790438526661.jpg',
    coordinators: [
      { name: 'Mr. K. Venkatesh', phone: '9342661192' },
      { name: 'Mr. L. Balaji', phone: '8608802727' }
    ]
  },
  {
    id: 'neurolink',
    title: 'Neurolink',
    category: 'non-technical',
    shortTagline: 'Cognitive Brain Teaser & Neural Mind Challenge',
    description: 'A brain-stimulating arena testing analytical aptitude, pattern recognition, sensory puzzle solving, and lightning-fast neural reflexes.',
    rounds: [
      'Round 1: Rapid Neural Impulse & Logic Decoder (30 mins)',
      'Round 2: Synaptic Cross-Puzzle & Pattern Recognition (30 mins)',
      'Round 3: High-Voltage Buzzer Face-Off'
    ],
    rules: [
      'Individual or team of 2 participants.',
      'No external calculators or digital smartwatches permitted.',
      'Evaluated on speed, lateral reasoning, and cognitive accuracy.'
    ],
    teamSize: '1 - 2 Members',
    venue: 'Auditorium Foyer Hall',
    time: '02:00 PM - 03:30 PM',
    prizes: 'Cash Prize + Cognitive Champion Memento',
    skills: ['Cognitive Agility', 'Pattern Recognition', 'Lateral Thinking'],
    image: '/src/assets/images/paper_presentation_1790438539203.jpg',
    coordinators: [
      { name: 'Ms. P. Jayasri', phone: '9655777274' },
      { name: 'Ms. S. Mohanapriya', phone: '6374663499' }
    ]
  },
  {
    id: 'checkmate-clash',
    title: 'Checkmate Clash',
    category: 'non-technical',
    shortTagline: 'Strategic Chess & Grandmaster Mind Duel',
    description: 'Exercise mental foresight and strategic poise over 64 squares in a rapid-fire Swiss and knockout chess tournament.',
    rounds: [
      'Round 1: Rapid Swiss Pairing (10 min + 5 sec increment)',
      'Round 2: Quarter & Semi-Final Blitz Rounds',
      'Round 3: Championship Match with Live Chess Board Display'
    ],
    rules: [
      'Standard FIDE rapid rules apply.',
      'Touch-move rule strictly enforced.',
      'Decisions of the Chief Arbiter are final.'
    ],
    teamSize: 'Individual',
    venue: 'APEC Central Library Quiet Arena',
    time: '02:00 PM - 03:30 PM',
    prizes: 'Grand Cash Prize + Chess Grandmaster Trophy',
    skills: ['Foresight', 'Tactical Analysis', 'Crisis Management'],
    image: '/src/assets/images/hero_tech_network_1790438511467.jpg',
    coordinators: [
      { name: 'Mr. L. Balaji', phone: '8608802727' },
      { name: 'Ms. S. Mohanapriya', phone: '6374663499' }
    ]
  },
  {
    id: 'auction-arena',
    title: 'Auction Arena',
    category: 'non-technical',
    shortTagline: 'IPL Style Tech & Strategy Bidding War',
    description: 'Step into the shoes of franchise owners and venture capitalists. Manage virtual budgets, place calculated bids, and assemble the ultimate technology conglomerate.',
    rounds: [
      'Round 1: Rapid-Fire General Tech & Business Trivia (Budget Allocation)',
      'Round 2: Live Auctioneer Bidding Session with Surprise Regulatory Modifiers'
    ],
    rules: [
      'Teams of 2 to 3 participants.',
      'Teams exceeding budget will face harsh penalty subtractions.',
      'Judged on balanced team composition, valuation ROI, and negotiation tactics.'
    ],
    teamSize: '2 - 3 Members',
    venue: 'IT Main Department Hall',
    time: '02:00 PM - 03:30 PM',
    prizes: 'Exciting Cash Prize + Tycoon Trophy',
    skills: ['Budget Strategy', 'Valuation Math', 'Negotiation Dynamics'],
    image: '/src/assets/images/hero_tech_network_1790438511467.jpg',
    coordinators: [
      { name: 'Mr. L. Balaji', phone: '8608802727' },
      { name: 'Mr. K. Venkatesh', phone: '9342661192' }
    ]
  }
];

export const SCHEDULE: ScheduleItem[] = [
  {
    time: '08:30 AM - 09:30 AM',
    title: 'Registration & Welcome Kit Distribution',
    venue: 'Central Library Foyer',
    type: 'general',
    description: 'On-spot check-in, confirmation pass verification, delegate badge and stationery collection.'
  },
  {
    time: '09:30 AM - 10:15 AM',
    title: 'Inaugural Ceremony & Keynote Address',
    venue: 'APEC Central Auditorium',
    type: 'general',
    description: 'Traditional Tamizh invocation, lighting of the lamp, presidential address by HOD/IT and college dignitaries.'
  },
  {
    time: '10:15 AM - 10:30 AM',
    title: 'Morning High Tea & Networking Break',
    venue: 'Department Plaza',
    type: 'break',
    description: 'Fresh refreshments and networking with faculty and fellow engineering delegates.'
  },
  {
    time: '10:30 AM - 01:00 PM',
    title: 'Technical Events Block',
    venue: 'Designated Computer Labs & Seminar Halls',
    type: 'technical',
    description: 'Simultaneous tracks: Prompt Stack (Lab 3), Codesmith & Paper Presentation (Library Hall), Infographix UI/UX (Lab 2), Debugging (Lab 1).'
  },
  {
    time: '01:00 PM - 02:00 PM',
    title: 'Complimentary Lunch for All Participants',
    venue: 'College Dining Hall',
    type: 'break',
    description: 'Wholesome buffet lunch provided completely free of charge to all registered symposium delegates.'
  },
  {
    time: '02:00 PM - 03:30 PM',
    title: 'Non-Technical Arena & E-Sports Clash',
    venue: 'Seminar Hall 2 & Library Arena',
    type: 'non-technical',
    description: 'Booyah Battle (Esports Arena), Neurolink Checkmate Clash (Chess Board), and Auction Arena (Main Stage).'
  },
  {
    time: '03:30 PM - 04:30 PM',
    title: 'Valedictory Ceremony & Grand Cash Prize Distribution',
    venue: 'APEC Central Auditorium',
    type: 'general',
    description: 'Announcement of winners, distribution of cash prize envelopes, trophies, and participation certificates for all delegates.'
  }
];

export const LEADERSHIP_COORDINATORS: Coordinator[] = [
  {
    role: 'Head of the Department',
    name: 'Mr. K. Hemakumar',
    designation: 'HOD / IT, Adhiparasakthi Engineering College'
  },
  {
    role: 'Convener',
    name: 'Mr. P. Sakthivel',
    designation: 'Assistant Professor, Department of IT'
  },
  {
    role: 'Faculty Co-ordinator',
    name: 'Mrs. S. Sasirekha',
    designation: 'Assistant Professor, Department of IT'
  },
  {
    role: 'Faculty Co-ordinator',
    name: 'Mrs. S. Lavanya',
    designation: 'Assistant Professor, Department of IT'
  }
];

export const STUDENT_COORDINATORS: Coordinator[] = [
  {
    role: 'Student Co-ordinator',
    name: 'Mr. K. Venkatesh',
    phone: '9342661192',
    isStudent: true
  },
  {
    role: 'Student Co-ordinator',
    name: 'Ms. P. Jayasri',
    phone: '9655777274',
    isStudent: true
  },
  {
    role: 'Student Co-ordinator',
    name: 'Mr. L. Balaji',
    phone: '8608802727',
    isStudent: true
  },
  {
    role: 'Student Co-ordinator',
    name: 'Ms. S. Mohanapriya',
    phone: '6374663499',
    isStudent: true
  }
];

export const SYMPOSIUM_PERKS = [
  {
    title: 'Exciting Cash Prizes & Shields',
    highlight: '₹25,000+ Prize Pool',
    description: 'First & Second prizes for every technical and non-technical contest, handed over at the grand valedictory ceremony.',
    icon: 'Trophy'
  },
  {
    title: 'Complimentary Hot Lunch & High-Tea',
    highlight: '100% Free Buffet',
    description: 'Wholesome campus dining buffet and morning/evening tea & snacks for all pre-registered delegates.',
    icon: 'Utensils'
  },
  {
    title: 'Recognized Anna University Certificates',
    highlight: 'Merit & Participation',
    description: 'Official printed certificates bearing NAAC "A" Grade and ISO 9001:2015 institutional seals for your academic resume.',
    icon: 'Award'
  },
  {
    title: 'Direct Connectivity on GST Road',
    highlight: '1.2 km from MLMR Station',
    description: 'Melmaruvathur railway station and central bus stop are situated right across the campus entrance with free parking.',
    icon: 'Navigation'
  }
];

export const SYMPOSIUM_FAQS = [
  {
    question: 'Is there any registration fee to participate?',
    answer: 'No! Registration is completely free for all engineering and technology college students. Complimentary lunch and delegate kits are provided.'
  },
  {
    question: 'Can I participate in multiple events?',
    answer: 'Yes! You can choose up to two non-overlapping tracks (e.g., 1 Technical event in the morning + 1 Non-Technical tournament in the afternoon).'
  },
  {
    question: 'What should I bring on the day of the symposium?',
    answer: 'Bring your official College Identity Card, your digital pass (or screenshot), and required materials (e.g. PPT presentation on a flash drive for paper presentation).'
  },
  {
    question: 'How do I reach the college campus?',
    answer: 'Adhiparasakthi Engineering College is located on NH 45 (GST Road) in Melmaruvathur. Trains from Chennai Egmore/Tambaram stop at Melmaruvathur (MLMR) station, just 1.2 km from campus.'
  }
];


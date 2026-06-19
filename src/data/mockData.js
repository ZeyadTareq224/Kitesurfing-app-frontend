// ============================================================
// mockData.js — Static data layer (replace with API calls later)
// Security: All data is hardcoded — no user input, no XSS risk.
//           When wiring to backend, always use React's JSX
//           interpolation (never dangerouslySetInnerHTML) for
//           untrusted data.
// ============================================================

export const COURSES = [
  {
    id: 'kite-intro',
    sport: 'Kitesurfing',
    name: 'Intro to Kitesurfing',
    description: 'A taster session for those who are curious. Get a real feel for the kite before committing to a full course.',
    duration: 'Half day',
    level: 'Total beginner',
    price: 45,
    currency: 'EUR',
    badge: 'Popular',
    badgeType: 'coral',
    icon: '🪁',
  },
  {
    id: 'kite-free-rider-1',
    sport: 'Kitesurfing',
    name: 'Free Rider — Stage 1',
    description: 'Beginner course covering kite control, body dragging, water relaunching and first board rides.',
    duration: '2–3 days',
    level: 'Beginner',
    price: 240,
    currency: 'EUR',
    badge: 'IKO Certified',
    badgeType: 'cyan',
    icon: '🏄',
  },
  {
    id: 'kite-free-rider-2',
    sport: 'Kitesurfing',
    name: 'Free Rider — Stage 2',
    description: 'Build on stage 1. Ride independently upwind and master edge control for confident riding.',
    duration: '2 days',
    level: 'Independent Beginner',
    price: 200,
    currency: 'EUR',
    badge: null,
    badgeType: null,
    icon: '🌊',
  },
  {
    id: 'kite-special-features',
    sport: 'Kitesurfing',
    name: 'Free Rider + Special Features',
    description: 'Intermediate course: transitions, jumps, wave riding and advanced kite handling techniques.',
    duration: '2–3 days',
    level: 'Intermediate',
    price: 250,
    currency: 'EUR',
    badge: null,
    badgeType: null,
    icon: '✨',
  },
  {
    id: 'kite-advanced',
    sport: 'Kitesurfing',
    name: 'Advanced Rider',
    description: 'Refine high-performance riding: powered jumps, handle-passes, and advanced wave techniques.',
    duration: '2 days',
    level: 'Advanced',
    price: 200,
    currency: 'EUR',
    badge: null,
    badgeType: null,
    icon: '🚀',
  },
  {
    id: 'wind-intro',
    sport: 'Windsurfing',
    name: 'Intro to Windsurfing',
    description: 'A taster session for those new to windsurfing. Learn balance, sail handling and first glides.',
    duration: 'Half day',
    level: 'Total beginner',
    price: 30,
    currency: 'EUR',
    badge: null,
    badgeType: null,
    icon: '⛵',
  },
  {
    id: 'wind-free-rider',
    sport: 'Windsurfing',
    name: 'Free Rider Course',
    description: 'Beginner to intermediate windsurfing course. Learn to harness, plane and gybe confidently.',
    duration: '2–3 days',
    level: 'Beginner',
    price: 150,
    currency: 'EUR',
    badge: 'Best Value',
    badgeType: 'gold',
    icon: '💨',
  },
  {
    id: 'wind-advanced',
    sport: 'Windsurfing',
    name: 'Advanced Rider',
    description: 'Master speed sailing, racing technique and advanced manoeuvres with our expert instructors.',
    duration: '2 days',
    level: 'Intermediate',
    price: 100,
    currency: 'EUR',
    badge: null,
    badgeType: null,
    icon: '🏁',
  },
  {
    id: 'wing-intro',
    sport: 'Wingfoiling',
    name: 'Intro to Wingfoiling',
    description: 'The newest water sport. Experience the magic of foiling with our specialised intro session.',
    duration: 'Half day',
    level: 'Total beginner',
    price: 60,
    currency: 'EUR',
    badge: 'New',
    badgeType: 'cyan',
    icon: '🦅',
  },
  {
    id: 'wing-free-rider',
    sport: 'Wingfoiling',
    name: 'Free Rider Course',
    description: 'Beginner to intermediate wingfoiling: wing handling, body dragging, board riding and first flights.',
    duration: '2–3 days',
    level: 'Beginner–Intermediate',
    price: 300,
    currency: 'EUR',
    badge: null,
    badgeType: null,
    icon: '🌬️',
  },
]

export const EQUIPMENT_RENTALS = [
  {
    id: 'kite-rental',
    sport: 'Kitesurfing',
    brands: 'Ozone, North, Cabrinha 2024',
    note: 'Wetsuit, shoes, helmet & life jacket included',
    options: [
      { label: '1 Hour', price: 35, currency: 'EUR' },
      { label: 'Half Day (AM or PM)', price: 80, currency: 'EUR' },
      { label: 'Full Day', price: 100, currency: 'EUR' },
    ],
  },
  {
    id: 'wind-rental',
    sport: 'Windsurfing',
    brands: 'Fanatic, JP, Neil Pride',
    note: 'Wetsuit, shoes, helmet & life jacket included',
    options: [
      { label: '1 Hour', price: 30, currency: 'EUR' },
      { label: 'Half Day (AM or PM)', price: 65, currency: 'EUR' },
      { label: 'Full Day', price: 80, currency: 'EUR' },
    ],
  },
  {
    id: 'wake-rental',
    sport: 'Wakeboarding / Water Skiing',
    brands: 'Premium cable & boat setup',
    note: 'All safety equipment provided',
    options: [
      { label: '30 Minutes', price: 70, currency: 'EUR' },
      { label: '1 Hour', price: 110, currency: 'EUR' },
    ],
  },
]

export const CAMPS = [
  {
    id: 'kite-camp',
    title: '7-Day Kitesurfing Camp',
    sport: 'Kitesurfing',
    location: 'Sharm El Sheikh · Dahab · Hurghada',
    price: 600,
    currency: 'USD',
    priceNote: 'From',
    image: 'https://images.unsplash.com/photo-1554774853-6a56f62c6451?w=800&auto=format&fit=crop&q=80',
    includes: [
      '7 nights BB/HB beach apartment',
      'Airport transfers',
      '12 hours kitesurfing sessions',
      'Tuition: EN, PL, IT, AR, DE',
      'North 2024 equipment',
      'Wetsuit, shoes, helmet, life jacket',
      'IKO certification',
      'Discounted equipment rental post-course',
      'Other water activities at discounted rate',
    ],
    description:
      'Join us for an unforgettable 7 days in the stunning lagoon at Nabq Bay — shallow, warm waters and a sandy beach: the perfect environment for learning kitesurfing.',
  },
  {
    id: 'wind-camp',
    title: '7-Day Windsurfing Camp',
    sport: 'Windsurfing',
    location: 'Sharm El Sheikh',
    price: 600,
    currency: 'USD',
    priceNote: 'From',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&auto=format&fit=crop&q=80',
    includes: [
      '7 nights beach apartment or villa',
      'Airport transfers',
      'Free Rider or Advanced Rider course',
      'Complete equipment package',
      'IKO certification',
      'Discounted equipment rental',
      'Social activities included',
      'Other water activities at discounted rate',
    ],
    description:
      'Master your skills in the beautiful surroundings of Sharm el Sheikh. Perfect for all levels — beginner through advanced — with our certified international instructors.',
  },
]

export const SERVICES_LIST = [
  {
    id: 'kitesurfing',
    title: 'Kitesurfing',
    icon: '🪁',
    color: 'cyan',
    description:
      'From your very first flight to mastering advanced tricks, our IKO-certified instructors guide you every step of the way in the warm Red Sea waters.',
    features: [
      'Intro taster sessions',
      'Beginner → Advanced courses',
      'Group & private lessons',
      'Kids programmes',
      'Holiday camps',
      'Supervised equipment rental',
    ],
  },
  {
    id: 'windsurfing',
    title: 'Windsurfing',
    icon: '⛵',
    color: 'coral',
    description:
      'Our expert windsurfing coaches have decades of combined experience. Learn in one of the world\'s best wind destinations with gear from Fanatic, JP and Neil Pride.',
    features: [
      'Intro to windsurfing',
      'Beginner → Advanced courses',
      'Group & private lessons',
      'Kids programmes',
      'Holiday camps',
      'Supervised equipment rental',
    ],
  },
  {
    id: 'wingfoiling',
    title: 'Wing Foiling',
    icon: '🦅',
    color: 'gold',
    description:
      'Experience the future of water sports. Wing foiling combines the thrill of kitesurfing with the freedom of foiling — and Sharm\'s consistent wind is perfect for it.',
    features: [
      'Intro wing sessions',
      'Beginner → Intermediate courses',
      'Private coaching available',
      'Latest foil equipment',
      'Perfect flat-water lagoon',
    ],
  },
  {
    id: 'wakeboarding',
    title: 'Wakeboarding & Water Skiing',
    icon: '🚤',
    color: 'cyan',
    description:
      'Adrenaline on the water without wind. Our wakeboard and water ski sessions are perfect for all the family with experienced boat crew on hand.',
    features: [
      '30-min & 1-hour sessions',
      'Beginner-friendly',
      'Family packages',
      'All safety gear provided',
    ],
  },
  {
    id: 'sup',
    title: 'Stand Up Paddle (SUP)',
    icon: '🧘',
    color: 'coral',
    description:
      'Glide across the crystal-clear waters of Nabq Bay on a SUP. A relaxing and rewarding activity for all ages and fitness levels.',
    features: [
      'Guided SUP tours',
      'Sunset sessions',
      'Yoga SUP available',
      'All equipment provided',
    ],
  },
  {
    id: 'safari',
    title: 'Kite Safari',
    icon: '🏕️',
    color: 'gold',
    description:
      'Explore Egypt\'s most iconic kite spots — from Sharm El Sheikh and Dahab to Hurghada — on a multi-day kite safari with our trusted team.',
    features: [
      'Sharm ↔ Dahab ↔ Hurghada routes',
      'Accommodation included',
      'Expert local guides',
      'Flexible dates',
      'Small groups',
    ],
  },
]

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'how-to-prepare-first-kiteboarding-experience',
    title: 'How to Prepare for Your First Kiteboarding Lesson on the Red Sea',
    author: 'Ahmed Khofa',
    authorRole: 'Head Instructor · IKO Level 2',
    date: '2024-11-12',
    category: 'Kitesurfing',
    readTime: '6 min read',
    // ✅ Real photo: man kiteboarding on the ocean — pexels-sergk1-13195887
    image: 'https://images.pexels.com/photos/13195887/pexels-photo-13195887.jpeg?auto=compress&cs=tinysrgb&w=1600',
    excerpt:
      "Heading to Dahab or Nabq Bay for your first kite lesson? Here's everything you need to know — from what to wear on the Red Sea to what to expect with an IKO instructor — so you arrive confident and ready to fly.",
    tags: ['beginner', 'tips', 'kitesurfing', 'dahab'],
  },
  {
    id: 2,
    slug: 'guide-water-sports-sharm-el-sheikh',
    title: 'The Complete Guide to Water Sports in Sharm El Sheikh',
    author: 'Ahmed Khofa',
    authorRole: 'Head Instructor · IKO Level 2',
    date: '2024-10-05',
    category: 'Sharm El Sheikh',
    readTime: '8 min read',
    // ✅ Real photo: Hurghada Egypt Red Sea beach with swing — pexels-14668164
    image: 'https://images.pexels.com/photos/14668164/pexels-photo-14668164.jpeg?auto=compress&cs=tinysrgb&w=1600',
    excerpt:
      "From kitesurfing at Nabq Bay to snorkeling the reefs of Ras Mohammed, Sharm El Sheikh packs world-class water adventures into one stunning Red Sea destination. Here's your insider guide.",
    tags: ['sharm el sheikh', 'guide', 'water sports', 'red sea'],
  },
  {
    id: 3,
    slug: 'windsurfing-dahab-soma-bay-red-sea',
    title: 'Windsurfing the Red Sea: Dahab, Soma Bay & Beyond',
    author: 'Ahmed Khofa',
    authorRole: 'Head Instructor · IKO Level 2',
    date: '2024-09-18',
    category: 'Windsurfing',
    readTime: '7 min read',
    // ✅ Real photo: kitesurfing action in Akyaka — pexels-29387213
    image: 'https://images.pexels.com/photos/29387213/pexels-photo-29387213.jpeg?auto=compress&cs=tinysrgb&w=1600',
    excerpt:
      "Soma Bay gets wind over 300 days a year. Dahab's lagoons are perfectly flat for beginners. Whether you're carving jibes or just starting out, Egypt's Red Sea coast is one of the world's finest windsurfing destinations.",
    tags: ['windsurfing', 'soma bay', 'dahab', 'red sea'],
  },
  {
    id: 4,
    slug: 'best-kitesurfing-spots-red-sea-egypt',
    title: 'The Best Kitesurfing Spots on the Red Sea: Dahab, Hurghada & Soma Bay',
    author: 'OS Team',
    authorRole: 'Kiteboarding OS',
    date: '2024-08-22',
    category: 'Kitesurfing',
    readTime: '5 min read',
    // ✅ Real photo: aerial view of Egyptian coastal waters (Red Sea) — pexels-35759858
    image: 'https://images.pexels.com/photos/35759858/pexels-photo-35759858/free-photo-of-stunning-aerial-view-of-egyptian-coastal-waters.jpeg?auto=compress&cs=tinysrgb&w=1600',
    excerpt:
      "Dahab's Blue Lagoon, Hurghada's island runs, and Soma Bay's thermal winds each offer something unique for kiteboarders. We break down Egypt's top Red Sea kite spots so you can pick the one that fits your level and style.",
    tags: ['kitesurfing', 'dahab', 'hurghada', 'soma bay', 'spots'],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marta K.',
    country: '🇵🇱 Poland',
    text: 'Absolutely incredible experience! Within 3 days I was riding independently. The instructors were patient, professional and made every session so much fun. Can\'t wait to come back!',
    course: 'Free Rider Stage 1',
    stars: 5,
  },
  {
    id: 2,
    name: 'Marco R.',
    country: '🇮🇹 Italy',
    text: 'The camp package was perfect — airport pickup, great apartment, and the best instructors I\'ve ever had. The lagoon at Nabq is stunning. Highly recommend OS to anyone.',
    course: '7-Day Kite Camp',
    stars: 5,
  },
  {
    id: 3,
    name: 'Sarah L.',
    country: '🇬🇧 UK',
    text: 'Did the windsurfing intro and was hooked immediately. Signed up for the full course on the spot. The team really adapts to your pace — never felt rushed or out of my depth.',
    course: 'Intro to Windsurfing',
    stars: 5,
  },
  {
    id: 4,
    name: 'Omar F.',
    country: '🇸🇦 Saudi Arabia',
    text: 'Brought the whole family for a week. Kids loved it, wife tried SUP, and I finally got my kitesurfing skills to the next level. The team speaks Arabic which made everything so smooth.',
    course: 'Family Package',
    stars: 5,
  },
]

export const STATS = [
  { value: '20+', label: 'Years of Experience' },
  { value: '5,000+', label: 'Students Trained' },
  { value: '4', label: 'Locations in Egypt' },
  { value: '5★', label: 'Average Review' },
]

export const INSTRUCTORS = [
  {
    id: 1,
    name: 'Head Instructor Team',
    title: 'IKO Level 2 Certified',
    languages: 'EN · PL · IT · AR · DE',
    bio: 'Our instructors collectively hold nearly a century of combined kitesurfing and windsurfing experience. Every coach is IKO certified and trained to teach at all levels safely and effectively.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
]

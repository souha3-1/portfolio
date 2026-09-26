export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  year: string;
  role: string;
  color: string;
  colorDeep: string;
  liveUrl?: string;
  overview: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  tools: string[];
};

export const projects: Project[] = [
  {
    slug: "nabi-bookstore",
    number: "01",
    title: "Nabi Bookstore",
    shortTitle: "NABI",
    description:
      "Novels & stationery, delivered. A full-stack storefront with cart, checkout, and an admin back office.",
    category: "Full-Stack Design / Development",
    year: "2026",
    role: "Designer & developer",
    color: "#e7e2f4",
    colorDeep: "#6f5bd0",
    liveUrl: "https://nabi-bookstore-lunaria-books.vercel.app/",
    overview:
      "Nabi Novels & Stationery is an online bookshop for fiction titles and writing supplies: a searchable catalog with real cover images, a persistent cart, checkout with delivery options across Algeria, and a protected admin back office for inventory and orders.",
    challenge:
      "Small bookshops in the region sell through social-media messages: no central catalog, orders tracked by hand, no stock visibility. The store needed a real storefront and checkout, plus a way for the owner to publish titles and manage orders without touching code.",
    approach:
      "Built as a single TypeScript monorepo: a Vite + React storefront on Supabase Postgres. Catalog, orders, and delivery options were modeled as database migrations and RPCs — including a place_order function and notify triggers — so stock and orders stay consistent. The admin panel shares the storefront's component library.",
    solution:
      "A calm, editorial shop: global search over the catalog, product pages with covers served from Supabase storage, a cart that survives refreshes, wilaya-based delivery options at checkout, and an admin area with dashboard, products, categories, orders, and global search behind proper authorization.",
    outcome:
      "Shipped to production on Vercel and iterated in the open — sixty-plus commits in its first week. The owner now publishes titles, tracks orders, and manages inventory without developer help, and the storefront stays fast on mobile.",
    tools: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "popcorn-website",
    number: "02",
    title: "Popcorn Website",
    shortTitle: "POPCORN",
    description:
      "Streaming and discovery. Exploring how people find their next watch.",
    category: "Web Design / Creative Development",
    year: "2025",
    role: "Designer & frontend developer",
    color: "#f4e6a9",
    colorDeep: "#b98a12",
    overview:
      "Popcorn is a discovery layer for streaming: one warm, playful place to answer the nightly question — what are we watching? Editorial curation meets a recommendation engine that explains itself.",
    challenge:
      "Streaming catalogues are infinite and paralysing. People scroll for forty minutes and watch nothing. Existing tools recommend titles but never build trust or taste.",
    approach:
      "We prototyped a 'taste profile' onboarding that feels like a magazine quiz, not a form. Card sorts and first-click tests shaped a browse experience built around moods and moments instead of genres.",
    solution:
      "A buttery, editorial interface: big serif headlines, hand-curated collections, and recommendation cards that say why a film fits tonight. Micro-interactions — a kernel popping into a watchlist — make saving a title feel like a treat.",
    outcome:
      "Time-to-decision fell from 41 minutes to under 6 in usability sessions. The launch site earned an honourable mention in a web-design annual and doubled newsletter sign-ups.",
    tools: ["Next.js", "Tailwind CSS", "Motion", "Sanity CMS"],
  },
  {
    slug: "ehr-web-app",
    number: "03",
    title: "EHR Web App",
    shortTitle: "EHR",
    description:
      "Smarter patient care. Exploring the experience of managing patient records.",
    category: "UX Research / Interface Design",
    year: "2025",
    role: "Senior product designer",
    color: "#dbe4eb",
    colorDeep: "#4a7089",
    overview:
      "An electronic health records platform for clinics that run on minutes. Every screen was designed against one question: does this help a clinician care for the patient in front of them?",
    challenge:
      "Clinicians spent up to three hours a night on documentation. The old interface scattered a single patient's story across forty tabs, and critical alerts competed with noise.",
    approach:
      "We shadowed six clinics across three specialties, timing every task. Journey maps exposed the twenty clicks between 'open record' and 'understand patient'. A clinical advisory panel reviewed every pattern weekly.",
    solution:
      "A timeline-first record that reads like a story, severity-tiered alerts with plain-language summaries, and keyboard-first navigation for charting at speed. A muted, clinical palette keeps long shifts easy on the eyes.",
    outcome:
      "Documentation time fell 44% in pilot clinics. Charting errors caught in audit dropped by a third, and the pattern library was adopted as the vendor's new baseline.",
    tools: ["Figma", "React", "TypeScript", "Storybook", "WCAG 2.2"],
  },
  {
    slug: "fintech-mobile-app",
    number: "04",
    title: "Fintech Mobile App",
    shortTitle: "MOBILE",
    description:
      "Finance on the go. A mobile approach to everyday money management.",
    category: "Mobile Design / Prototyping",
    year: "2024",
    role: "Product designer",
    color: "#f2dee5",
    colorDeep: "#b25d80",
    overview:
      "The pocket companion to the Fintech App: fast, glanceable money management for people who live between notifications. Designed thumb-first, offline-aware, and calm by default.",
    challenge:
      "The desktop experience didn't shrink well. On mobile, people wanted three things in five seconds: balance, last payment, and 'am I okay this month?'. Everything else was weight.",
    approach:
      "We ran hallway tests with clickable prototypes on real devices, iterating twice a week. Haptic and motion studies turned key actions — approve, split, save — into one-thumb gestures with physical feedback.",
    solution:
      "A single scrolling story per day: morning balance, live spend, evening summary. Gestures replace menus, widgets surface what matters, and a soft rose palette keeps finance feeling human.",
    outcome:
      "App-store rating moved from 3.1 to 4.7 across two releases. 'Check balance' became the second-most used widget in the beta cohort.",
    tools: ["Figma", "React Native", "Reanimated", "ProtoPie"],
  },
];

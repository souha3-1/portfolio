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
  {
    slug: "atlas-travel-journal",
    number: "05",
    title: "Atlas Travel Journal",
    shortTitle: "ATLAS",
    description:
      "Maps and memories. A journaling app that turns trips into stories.",
    category: "Mobile Design / Illustration",
    year: "2024",
    role: "Product designer",
    color: "#dfe7db",
    colorDeep: "#64806a",
    overview:
      "Atlas is a travel journal that pins photos, notes, and routes to a living map, then binds them into a shareable story at the end of each trip.",
    challenge:
      "Travelers take hundreds of photos and write nothing: context evaporates within days. Existing journal apps felt like homework and died by day three.",
    approach:
      "We designed for tired travelers: one-tap captures, voice notes, and auto-generated day spreads. Prototypes were tested on actual weekend trips with five participants.",
    solution:
      "A sage-toned, paper-textured journal where each day is a spread: map trace, photo stack, and a single prompt per day — never more. Stories export as a scrollable web page.",
    outcome:
      "Day-three retention doubled versus the prototype baseline, and exported stories became the app's main acquisition channel.",
    tools: ["Figma", "SwiftUI", "MapKit", "Procreate"],
  },
  {
    slug: "studio-commerce",
    number: "06",
    title: "Studio Commerce",
    shortTitle: "STUDIO",
    description:
      "Ceramics, sold softly. An e-commerce build for a small pottery studio.",
    category: "E-commerce / Development",
    year: "2023",
    role: "Designer & developer",
    color: "#f1e8d7",
    colorDeep: "#a9854f",
    overview:
      "A quiet storefront for a two-person ceramics studio: small batches, honest photography, and a checkout that never shouts.",
    challenge:
      "The studio sold through DMs and spreadsheets. Drops sold out in minutes and oversold regularly; shipping quotes were manual and slow.",
    approach:
      "We modeled drops as timed collections with real inventory counts, and photographed every piece on the same linen backdrop for a consistent catalog.",
    solution:
      "A warm cream storefront with editorial product pages, waitlist sign-ups for sold-out pieces, and automated shipping rules — built headless so the studio can write their own copy.",
    outcome:
      "Overselling went to zero across three drops, and admin time per order fell from nine minutes to under two.",
    tools: ["React", "TypeScript", "Stripe", "Sanity CMS"],
  },
  {
    slug: "pulse-fitness-dashboard",
    number: "07",
    title: "Pulse Fitness Dashboard",
    shortTitle: "PULSE",
    description:
      "Training data, beautifully behaved. A coach-facing analytics dashboard.",
    category: "Data Visualization / UI",
    year: "2023",
    role: "Senior product designer",
    color: "#d8e6e4",
    colorDeep: "#4f7f7a",
    overview:
      "Pulse gives strength coaches one screen per athlete: load, readiness, and progress — readable in ten seconds between sessions.",
    challenge:
      "Coaches drowned in export sheets from three devices. Signals that matter were buried under charts nobody trusted or read.",
    approach:
      "We ran decision-mapping workshops: what question does each glance answer? Every chart earned its place or was cut. Color was reserved for alerts only.",
    solution:
      "A muted teal dashboard with sparkline-first layouts, plain-language readiness scores, and drill-downs that open only on demand. Fully keyboard-navigable for gym-floor use.",
    outcome:
      "Coaches cut weekly review time by half, and the readiness score became the team's shared vocabulary across staff.",
    tools: ["Figma", "React", "D3", "Storybook"],
  },
  {
    slug: "maison-restaurant-site",
    number: "08",
    title: "Maison Restaurant Site",
    shortTitle: "MAISON",
    description:
      "A menu that reads like a story. Web design for a neighborhood restaurant.",
    category: "Web Design / Art Direction",
    year: "2022",
    role: "Art director & designer",
    color: "#f5e0d3",
    colorDeep: "#c07a52",
    overview:
      "A one-page site for Maison: seasonal menu, quiet photography, and reservations — designed to feel like being seated at the table.",
    challenge:
      "The old site was a PDF menu and a phone number. Mobile visitors bounced before finding tonight's menu or a way to book.",
    approach:
      "We art-directed a single scroll: courses revealed in sequence, type set like a printed menu, photography shot in available light only.",
    solution:
      "A peach-warm editorial page with a live menu sourced from a simple CMS the chef updates himself, plus a two-tap reservation flow.",
    outcome:
      "Mobile bounce rate halved, and online reservations overtook phone bookings within two months of launch.",
    tools: ["Figma", "Astro", "CSS", "Netlify CMS"],
  },
];

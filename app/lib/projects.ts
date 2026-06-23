// Real project data — update fields as needed.

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  role: string;
  skills: string[];
  brief: string;
  process: ProcessStep[];
  outcome: string;
  tags: string[];
  featured: boolean;
  refNumber: string;
  status: "COMPLETED" | "IN PROGRESS" | "ONGOING";
  site?: string; // Optional external site link
  heroImage?: string;
  contentImage?: string;
};

export const projects: Project[] = [
  {
    slug: "ravio",
    title: "RAVIO",
    category: "Web",
    year: "2026",
    featured: true,
    refNumber: "REF. 004", // sesuaikan nomornya
    status: "COMPLETED",
    site: "https://ravio-web.netlify.app",
    shortDescription:
      "Personal project — a full e-commerce web store for a fictional fashion brand.",
    role: "Fullstack Developer",
    skills: ["React", "TypeScript", "E-commerce"],
    brief:
      "Ravio is a personal project built to explore what a proper e-commerce experience looks like end to end. A fictional premium fashion brand — men, women, kids, accessories — used as a canvas to build out product browsing, filtering, auth, and checkout flows from scratch.",
    process: [
      {
        number: "01",
        title: "Designing the store structure",
        body: "Planned out the full category and product hierarchy first — Women, Men, Kids, Accessories, each with sub-types. Got the data model right before building any UI.",
      },
      {
        number: "02",
        title: "Building the experience",
        body: "Built product listing, filtering, bestseller sections, and a recommendation layer. Added multilingual support (ID, EN, JP) and user auth. Kept the UI clean — the kind of store you'd actually want to shop at.",
      },
    ],
    heroImage: "/ravio.png",
    contentImage: "/ravio.png",
    outcome:
      "A fully functional fashion e-commerce store with product browsing, filtering by category and type, customer reviews, personalized recommendations, and multilingual support. Built entirely as a personal project to see it through from idea to deployed product.",
    tags: ["React", "E-commerce", "Multilingual", "Auth", "Personal Project"],
  },
  {
    slug: "ai-robot-gemini",
    title: "AI ROBOT GEMINI",
    category: "AI & Robotics",
    year: "2025",
    featured: true,
    refNumber: "REF. 003",
    status: "COMPLETED",
    shortDescription:
      "A wheeled robot powered by Jetson Nano and Gemini — it talks, sees, and plays tic-tac-toe.",
    role: "Hardware + Software Engineer",
    skills: ["Jetson Nano", "Gemini API", "Python", "Embedded Systems"],
    brief:
      "The idea was simple: what if you could have a conversation with a robot, ask it what it sees, and then beat it at tic-tac-toe? Built on Jetson Nano with Gemini as the AI layer, the project was about making AI feel physical and interactive — not just something on a screen.",
    process: [
      {
        number: "01",
        title: "Hardware setup",
        body: "Set up Jetson Nano as the main controller, connected camera, microphone, and display. Also wired up the wheel-based movement system — so the robot could actually go somewhere, not just sit there looking smart.",
      },
      {
        number: "02",
        title: "Gemini as the brain",
        body: "Integrated Gemini API to handle conversation, camera-based scene description, and game logic for tic-tac-toe. Multimodal input meant the robot could switch between talking, seeing, and playing without separate systems for each.",
      },
    ],
    outcome:
      "A working robot that holds a conversation, describes what it sees through the camera, and plays tic-tac-toe — all while being able to physically move around. Proof that AI doesn't have to stay behind a screen.",
    tags: ["Jetson Nano", "Gemini API", "Python", "IoT"],
  },
  {
    slug: "cretivox",
    title: "CRETIVOX",
    category: "Web",
    year: "2024",
    featured: false,
    refNumber: "REF. 002",
    status: "COMPLETED",
    site: "https://cretivox.com",
    shortDescription:
      "Built card reveal animations with GSAP as part of the Cretivox project.",
    role: "Frontend Developer",
    skills: ["React", "GSAP", "CSS Animation"],
    brief:
      "Part of the Cretivox project — tasked with bringing a set of cards to life. They needed to open with intention, not just appear. The motion had to feel considered, with the content inside revealing naturally after the card opened.",
    process: [
      {
        number: "01",
        title: "Getting the CSS right first",
        body: "Before any animation, spent a good amount of time sorting out the card layout and states. A lot of iteration — but clean structure was what made the GSAP transitions actually work.",
      },
      {
        number: "02",
        title: "Card animation with GSAP",
        body: "Used GSAP to animate the card opening sequence and time the content reveal inside. The goal was making it feel like the card was genuinely opening, not just appearing.",
      },
    ],
    outcome:
      "Shipped a card reveal interaction that felt smooth and deliberate. A small scope, but the kind of detail that makes an interface feel crafted.",
    tags: ["React", "GSAP", "CSS Animation", "Performance"],
    heroImage: "/cretivox.png",
    contentImage: "/cretivox.png",
  },
  {
    slug: "tawada-dashboard",
    title: "TAWADA DASHBOARD",
    category: "Web",
    year: "2024–2025",
    featured: true,
    refNumber: "REF. 001",
    status: "COMPLETED",
    shortDescription:
      "Internal dashboard for travel reimbursement management at Tawada Healthcare.",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "Data Visualization"],
    brief:
      "Healthcare operations run on data — but data is only useful when it's readable. Tawada needed an internal dashboard that made complex operational data feel manageable and clear.",
    process: [
      {
        number: "01",
        title: "Understanding the reimbursement flow",
        body: "Mapped out how the team was currently handling travel reimbursement requests — what data was being tracked, where things got lost, and what the review process looked like.",
      },
      {
        number: "02",
        title: "Dashboard build",
        body: "Built the interface in React with TypeScript. Focused on making the data easy to read and act on, not just easy to display.",
      },
    ],
    outcome:
      "Replaced a manual reimbursement tracking process with a centralized dashboard. The team got cleaner visibility into submissions and a faster path from request to approval.",
    tags: ["React", "TypeScript", "Dashboard", "Healthcare"],
    heroImage: "/thc.png",
    contentImage: "/thc.png",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

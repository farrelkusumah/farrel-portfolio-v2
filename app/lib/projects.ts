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
  nextProject: string; // slug of the next project
  featured: boolean;
  refNumber: string;
  status: "COMPLETED" | "IN PROGRESS" | "ONGOING";
};

export const projects: Project[] = [
  {
    slug: "cretivox",
    title: "CRETIVOX",
    category: "Web",
    year: "2024",
    featured: true,
    refNumber: "REF. 001",
    status: "COMPLETED",
    shortDescription:
      "Crafted interactive animations using GSAP for digital storytelling.",
    role: "Frontend Developer",
    skills: ["React", "GSAP", "CSS Animation"],
    brief:
      "Modern digital storytelling needs more than static layouts. Cretivox needed a web experience that moved — one where animations weren't decoration, but part of the narrative itself.",
    process: [
      {
        number: "01",
        title: "Motion architecture",
        body: "Mapped out the animation timeline before writing a single line of code. Every entrance, transition, and scroll trigger was planned as part of the story flow.",
      },
      {
        number: "02",
        title: "GSAP implementation",
        body: "Used GSAP ScrollTrigger for scroll-based animations and Timeline for sequenced entrance effects. Performance was monitored continuously.",
      },
    ],
    outcome:
      "Cretivox launched with a measurably higher engagement rate. The animations became a core part of the brand identity — not just a feature, but the feeling of the product.",
    tags: ["React", "GSAP", "ScrollTrigger", "Performance"],
    nextProject: "tawada-dashboard",
  },
  {
    slug: "tawada-dashboard",
    title: "TAWADA DASHBOARD",
    category: "Web",
    year: "2024–2025",
    featured: true,
    refNumber: "REF. 002",
    status: "COMPLETED",
    shortDescription:
      "Internal dashboard for healthcare data visualization at PLABS.ID.",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "Data Visualization"],
    brief:
      "Healthcare operations run on data — but data is only useful when it's readable. Tawada needed an internal dashboard that made complex operational data feel manageable and clear.",
    process: [
      {
        number: "01",
        title: "Data mapping",
        body: "Worked closely with the operations team to understand which metrics mattered most and how they were currently being tracked manually.",
      },
      {
        number: "02",
        title: "Interface build",
        body: "Built modular dashboard components in React with TypeScript, prioritizing readability and performance over visual complexity.",
      },
    ],
    outcome:
      "The dashboard replaced several manual reporting processes, reducing time spent on weekly data compilation and giving the team a single source of truth for operations.",
    tags: ["React", "TypeScript", "Dashboard", "Healthcare"],
    nextProject: "ai-robot-gemini",
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
      "AI-powered robot using Jetson Nano + Gemini as core intelligence.",
    role: "Hardware + Software Engineer",
    skills: ["Jetson Nano", "Gemini API", "Python", "Embedded Systems"],
    brief:
      "The gap between AI and physical interaction is still wide. This project was about bridging that — building a robot that could see, hear, and respond using Gemini as its brain.",
    process: [
      {
        number: "01",
        title: "Hardware setup",
        body: "Configured Jetson Nano as the controller, wiring touchscreen, camera, and microphone inputs. Each component needed to communicate reliably under real-time constraints.",
      },
      {
        number: "02",
        title: "Gemini integration",
        body: "Connected the Gemini API as the core intelligence layer — processing multimodal inputs and returning responses through display and motor output.",
      },
    ],
    outcome:
      "A working robot that accepts touchscreen, camera, and microphone input and responds through a display interface and physical movement. A proof that AI doesn't have to stay on a screen.",
    tags: ["Jetson Nano", "Gemini API", "Python", "IoT"],
    nextProject: "cretivox",
  },
  {
    slug: "untitled-04",
    title: "[UNTITLED]",
    category: "Experimental",
    year: "2025",
    shortDescription: "Work in progress.",
    featured: false,
    refNumber: "REF. 004",
    status: "IN PROGRESS",
    role: "—", skills: [], brief: "", process: [], outcome: "", tags: [], nextProject: ""
  },
  {
    slug: "untitled-05",
    title: "[UNTITLED]",
    category: "Hardware",
    year: "2025",
    shortDescription: "Work in progress.",
    featured: false,
    refNumber: "REF. 005",
    status: "IN PROGRESS",
    role: "—", skills: [], brief: "", process: [], outcome: "", tags: [], nextProject: ""
  },
  {
    slug: "untitled-06",
    title: "[UNTITLED]",
    category: "Web",
    year: "2025",
    shortDescription: "Work in progress.",
    featured: false,
    refNumber: "REF. 006",
    status: "IN PROGRESS",
    role: "—", skills: [], brief: "", process: [], outcome: "", tags: [], nextProject: ""
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

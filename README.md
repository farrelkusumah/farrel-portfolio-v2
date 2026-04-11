farrel kusumah — personal archive
Personal portfolio and archive. Built to last, designed to evolve.
Live: farrelkusumah.vercel.app (or custom domain later)

stack

Next.js 14 — App Router
TypeScript
Tailwind CSS
Framer Motion — page transitions + entrance animations
Vercel — deployment


fonts

Space Grotesk — headlines, nav, display text
Inter — body, labels, captions

Both loaded via Google Fonts in app/layout.tsx.

color system
NameHexUsageCream#F5F0E8Page backgroundSurface#fef9f1Cards, navInk#2C2C2APrimary text, headlinesMuted#625f51Secondary text, descriptionsSage#8A9E8CAccent — use sparinglyBorder#b7b2a1Dividers, card bordersContainer#f3ede1Card backgrounds, hover states

structure
app/
├── page.tsx              # Homepage — hero + works index + closing quote
├── work/
│   ├── page.tsx          # Work listing — featured projects only
│   └── [slug]/
│       └── page.tsx      # Project detail — brief, process, outcome
├── archive/
│   └── page.tsx          # Archive ledger — all projects
├── about/
│   └── page.tsx          # About — bio, philosophy, expertise
├── contact/
│   └── page.tsx          # Contact — form + info
└── layout.tsx            # Root layout — nav, footer, page transition

components/
├── Nav.tsx               # Fixed top nav — desktop + mobile hamburger
├── Footer.tsx            # Footer — copyright + social links
├── PageTransition.tsx    # Framer Motion page fade wrapper
└── FadeUp.tsx            # Framer Motion entrance animation

lib/
└── projects.ts           # All project data — single source of truth

adding a new project
Everything lives in lib/projects.ts. Add a new object to the projects array:
ts{
  slug: "project-name",           // URL: /work/project-name
  title: "PROJECT NAME",
  category: "Web",
  year: "2025",
  shortDescription: "One line.",
  role: "Frontend Developer",
  skills: ["React", "TypeScript"],
  brief: "The problem and context.",
  process: [
    { number: "01", title: "Step title", body: "What you did." },
    { number: "02", title: "Step title", body: "What you did." }
  ],
  outcome: "What happened as a result.",
  tags: ["React", "TypeScript"],
  nextProject: "next-project-slug",  // or leave "" if last
  featured: true,                    // true = shows on homepage + work page
  refNumber: "REF. 007",            // increment from last entry
  status: "COMPLETED"               // "COMPLETED" | "IN PROGRESS" | "ONGOING"
}
Rules:

featured: true → appears on homepage works index + /work page
featured: false → archive only, shows as LOCKED until status = COMPLETED
Last featured project's nextProject should be "" — detail page will auto-show "VIEW THE FULL ARCHIVE" link
Keep refNumber sequential — check last entry before adding


design rules — never break these

No gradients, no shadows, no glassmorphism
Border radius: 0px everywhere except full-round pills
Sage #8A9E8C is the only accent color — use it sparingly
Whitespace is intentional — don't add padding/margin without reason
Typography carries the visual weight — not decoration


animations
Three patterns only — defined in components/FadeUp.tsx and components/PageTransition.tsx:

Page transition — fade in/out between routes, 300ms
Entrance — fade up on load, staggered for lists, once: true
Hover — CSS transition only, duration-200, colors only

Do not add new animation patterns without good reason.

deployment
Deployed on Vercel. Auto-deploys on push to main.
bash# local dev
npm run dev

# build check before pushing
npm run build
If build fails — most likely a TypeScript error in lib/projects.ts. Check that all required fields are present on every project object.

domain
Currently on Vercel subdomain. When ready to upgrade:

Buy farrelkusumah.com (check availability first)
Add custom domain in Vercel dashboard → Settings → Domains
Update DNS at domain registrar — Vercel gives exact instructions


future ideas

 Add real project images — replace dark placeholders
 Add real profile photo to about page
 Journal / writing section under /journal
 Dark mode toggle
 Custom domain
 OG image for social sharing
 Add more projects as archive grows


still in beta. just like me.

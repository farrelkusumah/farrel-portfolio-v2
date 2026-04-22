import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "../../lib/projects";
import PageTransition from "../../components/PageTransition";
import FadeUp from "../../components/FadeUp";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Farrel Kusumah`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage(props: PageProps) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const featuredProjects = [...projects]
    .filter((p) => p.featured)
    .sort((a, b) => a.refNumber.localeCompare(b.refNumber));
  
  const currentIndex = featuredProjects.findIndex((p) => p.slug === project.slug);
  const isLast = currentIndex === -1 || currentIndex === featuredProjects.length - 1;
  const nextProject = isLast ? null : featuredProjects[currentIndex + 1];

  return (
    <PageTransition>
      <div className="bg-[#F5F0E8] min-h-screen pb-16">
        {/* ── Page Header ────────────────────────────────────────────── */}
        <section className="max-w-screen-2xl mx-auto px-5 md:px-16 pt-24 pb-12">
          <FadeUp>
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[10vw] md:text-[8vw] uppercase text-[#2C2C2A] leading-none tracking-[-0.03em]">
              {project.title}
            </h1>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#625f51] mt-4 max-w-xl">
              {project.shortDescription}
            </p>
          </FadeUp>
        </section>

        {/* ── Hero Image ─────────────────────────────────────────────── */}
        <FadeUp delay={0.1}>
          <div className="w-full aspect-[16/7] bg-[#1a1a1a] flex items-center justify-center object-cover">
            <span className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#7f7b6c]/50">
              Oops... image is still in progress, please come back later
            </span>
          </div>
        </FadeUp>

        {/* ── Content Grid ───────────────────────────────────────────── */}
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 mt-16 mb-24">
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
              
              {/* Left Column: Metadata Sidebar */}
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4 md:block mb-8 md:mb-0">
                <div className="mb-4 md:mb-8">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-1">
                    ROLE
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#2C2C2A]">
                    {project.role}
                  </p>
                </div>

                <div className="mb-4 md:mb-8">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-1">
                    SKILLS
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#2C2C2A]">
                    {project.skills.join(", ")}
                  </p>
                </div>

                <div className="mb-4 md:mb-8">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-1">
                    YEAR
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#2C2C2A]">
                    {project.year}
                  </p>
                </div>

                <div className="mb-4 md:mb-12">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-1">
                    TYPE
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#2C2C2A]">
                    {project.category}
                  </p>
                </div>

                <div className="col-span-2 md:col-span-1 mt-4 md:mt-0">
                  <a
                    href="#"
                    className="inline-block border border-[#8A9E8C] text-[#8A9E8C] text-[10px] tracking-[0.25em] uppercase px-5 py-3 hover:opacity-70 transition-opacity duration-150 active:opacity-50 min-h-[44px] flex items-center justify-center w-fit"
                  >
                    LAUNCH SITE →
                  </a>
                </div>
              </div>

              {/* Right Column: Main Content */}
              <div className="md:col-span-9">
                
                {/* The Brief */}
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-6">
                    THE BRIEF
                  </p>
                  <p className="font-[family-name:var(--font-fraunces)] font-light text-lg md:text-xl text-[#2C2C2A] leading-relaxed max-w-2xl tracking-[0.01em]">
                    {project.brief}
                  </p>
                </div>

                {/* The Process */}
                <div className="mt-16">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-8">
                    THE PROCESS
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.process.map((step) => (
                      <div key={step.number}>
                        <p className="font-[family-name:var(--font-inter)] text-sm tracking-widest text-[#7f7b6c] mb-4">
                          {step.number} /
                        </p>
                        <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-sm tracking-widest text-[#2C2C2A] mb-3 uppercase">
                          {step.title}
                        </h3>
                        <p className="font-[family-name:var(--font-inter)] text-sm text-[#625f51] leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Image Placeholder (as seen in design) */}
                <div className="w-full aspect-[21/9] bg-[#1a1a1a] mt-16 flex items-center justify-center object-cover">
                  <span className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#7f7b6c]/50">
                    Oops... image is still in progress, please come back later
                  </span>
                </div>

                {/* The Outcome */}
                <div className="mt-16">
                  <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-6">
                    THE OUTCOME
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-base text-[#2C2C2A] leading-relaxed max-w-2xl">
                    {project.outcome}
                  </p>
                </div>

                {/* Tags Row */}
                <div className="mt-12 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#b7b2a1] text-[10px] tracking-[0.25em] uppercase px-4 py-2 text-[#625f51]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </FadeUp>
        </div>

        {/* ── Next Project ───────────────────────────────────────────── */}
        {/* ── Next Project / Archive ─────────────────────────────────── */}
        <FadeUp delay={0.3}>
          <div className="border-t border-[#b7b2a1]/30">
            <Link
              href={nextProject ? `/work/${nextProject.slug}` : "/archive"}
              className="block max-w-screen-2xl mx-auto px-5 md:px-16 w-full py-16 group"
            >
              <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-4">
                {nextProject ? "UP NEXT" : "ALL WORKS, DOCUMENTED."}
              </p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[8vw] md:text-[8vw] uppercase text-[#2C2C2A] leading-none group-hover:text-[#516454] transition-colors">
                  {nextProject ? nextProject.title : "VIEW THE FULL ARCHIVE"}
                </h2>
                <span className="font-[family-name:var(--font-inter)] text-xs tracking-[0.25em] uppercase text-[#2C2C2A] whitespace-nowrap group-hover:opacity-70 transition-opacity duration-150">
                  {nextProject ? "VIEW PROJECT →" : "VIEW ARCHIVE →"}
                </span>
              </div>
            </Link>
          </div>
        </FadeUp>
      </div>
    </PageTransition>
  );
}

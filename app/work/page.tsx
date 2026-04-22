import Link from "next/link";
import { projects } from "../lib/projects";
import PageTransition from "../components/PageTransition";
import FadeUp from "../components/FadeUp";

export default function WorkPage() {
  // Only display projects that are not "archive only" (e.g. have a fully populated role)
  // Re-filtering like before or display all according to the original map? 
  // Wait, the original code displayed all projects in the work page, except no explicit filter.
  // Actually, I'll just map `projects` directly since that's what was there.

  return (
    <PageTransition>
      <div className="pb-32">
        {/* ── Page Header ──────────────────────────────────────────────── */}
        <section className="max-w-screen-2xl mx-auto px-5 md:px-16 pt-24 pb-8">
          <h1 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[10vw] leading-none text-[#2C2C2A]">
            work.
          </h1>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full mb-12 md:mb-32">
          <div className="w-full h-px bg-[#b7b2a1]/30" />
        </div>

        {/* ── Project Cards ────────────────────────────────────────────── */}
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full flex flex-col gap-12 md:gap-32">
          {projects.filter(p => p.featured).map((project, i) => {
            const isEven = i % 2 === 1;

            return (
              <FadeUp key={project.slug} delay={i * 0.1}>
                <Link
                  href={`/work/${project.slug}`}
                  className={`group w-full flex flex-col ${
                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  {/* Left/Right half: Image */}
                  <div className="w-full md:w-1/2 aspect-[16/9] md:aspect-[4/3] bg-[#1a1a1a] flex items-center justify-center shrink-0 object-cover">
                    {/* Image placeholder */}
                    <span className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-widest text-[#7f7b6c]/50">
                      Oops... image is still in progress, please come back later
                    </span>
                  </div>

                  {/* Left/Right half: Text */}
                  <div className="w-full md:w-1/2 bg-[#f3ede1] p-6 md:p-16 flex flex-col justify-between transition-colors duration-200 group-hover:bg-[#ebe4d5]">
                    <div>
                      <div className="flex justify-between items-center font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[#7f7b6c] mb-8 md:mb-12">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-5xl text-[#2C2C2A] mb-4 md:mb-6">
                        {project.title}
                      </h2>
                      <p className="font-[family-name:var(--font-inter)] text-sm text-[#625f51] leading-relaxed max-w-xs">
                        {project.shortDescription}
                      </p>
                    </div>
                    
                    <div className="mt-12 md:mt-0 font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase text-[#2C2C2A] outline-none group-hover:opacity-70 transition-opacity duration-150">
                      VIEW PROJECT →
                    </div>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}

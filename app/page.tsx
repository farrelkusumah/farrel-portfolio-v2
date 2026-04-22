import Link from "next/link";
import { projects } from "./lib/projects";
import PageTransition from "./components/PageTransition";
import FadeUp from "./components/FadeUp";

export default function HomePage() {
  return (
    <PageTransition>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-center">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full">
          <FadeUp delay={0.1}>
            <h1 className="font-[family-name:var(--font-space-grotesk)] font-extrabold leading-[0.82] tracking-tight text-[#2C2C2A] text-[22vw] md:text-[16vw]">
              FARREL
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1
              style={{ color: "#516454" }}
              className="font-[family-name:var(--font-space-grotesk)] font-extrabold leading-[0.82] tracking-tight -mt-4 md:-mt-24 text-[22vw] md:text-[16vw]"
            >
              KUSUMAH
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="font-[family-name:var(--font-inter)] text-xs uppercase tracking-[0.2em] text-[#625f51] mt-10">
              ENGINEER. BUILDER. STILL FIGURING IT OUT — ON PURPOSE.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Divider + label ──────────────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full">
        <div className="flex flex-col gap-3 mb-0">
          <div className="flex justify-start">
            <Link href="/work">
              <span className="font-[family-name:var(--font-inter)] hover:font-bold hover:scale-105 transition-all text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c]">
                SELECTED WORKS —
              </span>
            </Link>
          </div>
          <div className="w-full h-px bg-[#b7b2a1]/30" />
        </div>
      </div>

      {/* ── Works index ──────────────────────────────────────────────── */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full pb-16 border-b border-[#b7b2a1]/30 pt-4">
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <FadeUp key={project.slug} delay={0.1 + index * 0.08}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex flex-col md:flex-row md:items-center w-full py-4 md:py-6 transition-all duration-300"
              >
                {/* Title */}
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-5xl text-[#2C2C2A] group-hover:text-[#516454] group-hover:scale-[1.012] group-hover:translate-x-1 transition-all duration-300 origin-left shrink-0 mb-1 md:mb-0 tracking-[-0.02em] inline-block">
                  {project.title}
                </span>

                {/* Dotted spacer (desktop only) */}
                <span
                  aria-hidden
                  className="hidden md:block flex-grow self-end border-b border-dotted border-[#b7b2a1]/40 mx-8 mb-2"
                />

                {/* Category / Year */}
                <span className="font-[family-name:var(--font-inter)] text-[10px] md:text-xs tracking-widest uppercase text-[#625f51] shrink-0 md:mr-4">
                  {project.category} / {project.year}
                </span>

                {/* Arrow indicator — always visible, scales on hover */}
                <span
                  aria-hidden
                  className="hidden md:inline-block shrink-0 font-[family-name:var(--font-space-grotesk)] text-sm text-[#b7b2a1] group-hover:text-[#516454] group-hover:scale-125 group-hover:translate-x-1 transition-all duration-300 origin-center"
                >
                  →
                </span>
              </Link>
            </FadeUp>
          ))}

        {/* Static placeholder row */}
        <FadeUp delay={0.1 + projects.length * 0.08}>
          <div className="flex flex-col md:flex-row md:items-baseline w-full py-6 md:py-10 opacity-20 pointer-events-none select-none">
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold text-3xl md:text-5xl text-[#2C2C2A] mb-1 md:mb-0 tracking-[-0.02em]">
              MORE IN PROGRESS
            </span>
            <span
              aria-hidden
              className="hidden md:block flex-grow self-end border-b border-dotted border-[#b7b2a1] mx-8 mb-2"
            />
          </div>
        </FadeUp>
      </div>

      {/* ── Closing quote ────────────────────────────────────────────── */}
      <section className="py-24 md:py-56 text-center max-w-screen-2xl mx-auto px-5 md:px-16 w-full">
        <FadeUp delay={0.2}>
          <p className="font-[family-name:var(--font-fraunces)] italic font-light text-3xl md:text-6xl text-[#625f51] tracking-[-0.01em]">
            &ldquo;Still in beta. Just like me.&rdquo;
          </p>
          <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.4em] uppercase text-[#7f7b6c] mt-6">
            — FARREL KUSUMAH —
          </p>
        </FadeUp>
      </section>
    </PageTransition>
  );
}

import Link from "next/link";
import PageTransition from "../components/PageTransition";
import FadeUp from "../components/FadeUp";

export const metadata = {
  title: "About — Farrel Kusumah",
  description: "I connect the dots between code and people.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-[#F5F0E8] min-h-screen pb-16">
        {/* ── Page Header ────────────────────────────────────────────── */}
        <section className="max-w-screen-2xl mx-auto px-5 md:px-16 pt-24 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <FadeUp>
              <h1 className="font-space-grotesk font-bold text-[10vw] leading-none text-[#2C2C2A] tracking-[-0.03em]">
                about.
              </h1>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex justify-end pb-2 md:pb-4">
                <span className="border border-[#8A9E8C] text-[#8A9E8C] text-[10px] tracking-[0.25em] uppercase px-4 py-2 inline-block font-medium">
                  ● AVAILABLE FOR WORK
                </span>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── Divider ────────────────────────────────────────────────── */}
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full mb-16">
          <div className="w-full h-px bg-[#b7b2a1]/30" />
        </div>

        {/* ── Intro Grid ─────────────────────────────────────────────── */}
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full">
          <FadeUp delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">

              {/* Left Column: Photo & Metadata */}
              <div className="md:col-span-4 flex flex-col">
                <div className="w-full aspect-square bg-[#1a1a1a] flex items-center justify-center object-cover">
                  <span className="font-inter text-xs tracking-widest uppercase text-[#7f7b6c]/50">
                    Oops... image is still in progress, please come back later
                  </span>
                </div>
              </div>

              {/* Right Column: Bio */}
              <div className="md:col-span-8 flex flex-col max-w-3xl">
                <h2
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  className="font-light text-3xl md:text-4xl text-[#2C2C2A] leading-tight tracking-[-0.01em] mb-8"
                >
                  I connect the dots between code and people.
                </h2>
                <p className="font-inter text-sm md:text-base text-[#625f51] leading-relaxed mb-6">
                  Farrel Kusumah is an engineer in progress — with a background in electrical engineering and a habit of asking why things are built the way they are. He builds things that are functional, a little unexpected, and still in beta.
                </p>
                <p className="font-inter text-sm md:text-base text-[#625f51] leading-relaxed mb-12">
                  Currently open to new opportunities — remote, global.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['EMBEDDED SYSTEMS', 'FRONT-END ARCHITECTURE', 'UI/UX DESIGN', 'SYSTEM DESIGN', 'TYPESCRIPT'].map(skill => (
                    <span
                      key={skill}
                      className="border border-[#b7b2a1] text-[10px] tracking-[0.25em] uppercase px-4 py-2 text-[#625f51]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* ── Philosophy Section ─────────────────────────────────────── */}
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full mt-24 md:mt-32 pt-16">
          <FadeUp delay={0.1}>
            <div className="w-full overflow-hidden flex justify-center mb-16">
              <h2 style={{ color: "#e8e2d1" }} className="font-space-grotesk font-bold text-[15vw] md:text-[13vw] text-[#e8e2d1] whitespace-nowrap select-none leading-none">
                PHILOSOPHY
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <FadeUp delay={0.2}>
              <div>
                <h3 style={{ fontWeight: "bold" }} className="font-space-grotesk text-xs md:text-sm tracking-[0.25em] uppercase text-[#2C2C2A] font-bold mb-4">
                  THE MESSY MIDDLE
                </h3>
                <p className="font-inter text-sm text-[#625f51] leading-relaxed max-w-sm">
                  The most interesting problems live between disciplines. Between electrical and software. Between logic and design. That&apos;s where I want to work.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div>
                <h3 style={{ fontWeight: "bold" }} className="font-space-grotesk text-xs md:text-sm tracking-[0.25em] uppercase text-[#2C2C2A] font-bold mb-4">
                  STILL IN BETA
                </h3>
                <p className="font-inter text-sm text-[#625f51] leading-relaxed max-w-sm">
                  I don&apos;t believe in finished. I believe in deliberate iteration — shipping, learning, and rebuilding with more context than before.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── Divider & Section Label ────────────────────────────────── */}
          <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full mt-12 mb-16">
          <div className="w-full h-px bg-[#b7b2a1]/30 mb-8" />
          <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c]">
            CORE EXPERTISE
          </span>
        </div>

        {/* ── Expertise Section ──────────────────────────────────────── */}
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 w-full mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <FadeUp delay={0.1}>
              <div>
                <h4 className="font-space-grotesk font-bold text-4xl text-[#8A9E8C] opacity-40">
                  01
                </h4>
                <h5 className="font-inter text-xs tracking-[0.25em] uppercase text-[#2C2C2A] font-medium mt-4 mb-3">
                  FRONTEND ENGINEERING
                </h5>
                <p className="font-inter text-sm text-[#625f51] leading-relaxed">
                  Building user interfaces with modern frameworks — React, Next.js — focusing on clean, scalable architecture and fluid motion.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <div>
                <h4 className="font-space-grotesk font-bold text-4xl text-[#8A9E8C] opacity-40">
                  02
                </h4>
                <h5 className="font-inter text-xs tracking-[0.25em] uppercase text-[#2C2C2A] font-medium mt-4 mb-3">
                  HARDWARE + SYSTEMS THINKING
                </h5>
                <p className="font-inter text-sm text-[#625f51] leading-relaxed">
                  Electrical engineering background means I understand systems at a foundational level. From hardware logic to embedded code.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div>
                <h4 className="font-space-grotesk font-bold text-4xl text-[#8A9E8C] opacity-40">
                  03
                </h4>
                <h5 className="font-inter text-xs tracking-[0.25em] uppercase text-[#2C2C2A] font-medium mt-4 mb-3">
                  CROSS-DISCIPLINARY APPROACH
                </h5>
                <p className="font-inter text-sm text-[#625f51] leading-relaxed">
                  Every project needs someone who understands how the moving parts connect. I bridge the gap between design, logic, and hardware.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── CTA Section ────────────────────────────────────────────── */}
        <div className="w-full flex flex-col items-center justify-center pt-16 pb-32">
          <FadeUp>
            <h2
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              className="font-semibold text-[8vw] md:text-[6vw] uppercase text-[#2C2C2A] text-center leading-[0.9] mb-12 tracking-[-0.02em]"
            >
              BEGIN THE<br />ARCHIVE.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="/contact"
              className="font-inter text-xs tracking-[0.25em] uppercase text-[#625f51] hover:opacity-70 transition-opacity duration-150 active:opacity-50 min-h-11 flex items-center"
            >
              GET IN TOUCH →
            </Link>
          </FadeUp>
        </div>

      </div>
    </PageTransition>
  );
}

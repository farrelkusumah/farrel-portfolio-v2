import Link from "next/link";
import { projects } from "../lib/projects";
import PageTransition from "../components/PageTransition";
import FadeUp from "../components/FadeUp";

export const metadata = {
  title: "Archive — Farrel Kusumah",
  description: "A complete list of projects, experiments, and ongoing work.",
};

export default function ArchivePage() {
  // Sort projects by refNumber in descending order.
  const sortedProjects = [...projects].sort((a, b) => {
    return b.refNumber.localeCompare(a.refNumber);
  });

  const entryCount =
    projects.length < 10 ? `0${projects.length}` : projects.length.toString();

  return (
    <PageTransition>
      <div className="bg-[#F5F0E8] min-h-screen pb-32">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-16 pt-32">
          {/* Header Block */}
          <FadeUp>
            <div className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-[#2C2C2A] md:border-[#b7b2a1]/30 pb-4 mb-10 md:mb-20 gap-4">
              <h1 className="font-space-grotesk font-bold text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter text-[#2C2C2A] lowercase">
                archive.
              </h1>
              <div className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c]">
                {entryCount} ENTRIES
              </div>
            </div>
          </FadeUp>

          {/* Table representation */}
          <div className="w-full">
            <div className="w-full">
              {/* Table Header */}
              <FadeUp delay={0.1}>
                <div className="flex w-full border-b border-[#b7b2a1]/30 md:border-[#b7b2a1] pb-6 mb-4 font-inter text-[10px] tracking-[0.25em] uppercase text-[#b7b2a1]">
                  <div className="hidden md:block w-24 shrink-0">REF. NO</div>
                  <div className="grow">PROJECT TITLE</div>
                  <div className="hidden md:block w-48 shrink-0">
                    CATEGORY + YEAR
                  </div>
                  <div className="hidden md:block w-36 shrink-0">STATUS</div>
                  <div className="w-20 shrink-0 text-right">ACTION</div>
                </div>
              </FadeUp>

              {/* Data Rows */}
              <div className="flex flex-col">
                {sortedProjects.map((project, index) => {
                  const isCompleted = project.status === "COMPLETED";
                  return (
                    <FadeUp key={project.slug} delay={0.15 + index * 0.05}>
                      <div
                        className={`group/row flex w-full items-center py-6 border-b border-[#b7b2a1]/20 hover:bg-[#ebe4d5] hover:translate-x-1 transition-all duration-200 ${!isCompleted ? "opacity-40" : ""}`}
                      >
                        {/* REF NUMBER (Desktop only) */}
                        <div className="hidden md:block w-24 shrink-0 font-inter text-xs tracking-[0.2em] text-[#b7b2a1]">
                          {project.refNumber}
                        </div>

                        {/* TITLE (and Category/Year on Mobile) */}
                        <div className="grow flex flex-col gap-1">
                          <div className="font-space-grotesk font-bold text-base md:text-lg uppercase text-[#2C2C2A]">
                            {project.title}
                          </div>
                          <div className="md:hidden font-inter text-[10px] tracking-[0.2em] uppercase text-[#7f7b6c]">
                            {project.category} / {project.year}
                          </div>
                        </div>

                        {/* CATEGORY & YEAR (Desktop only) */}
                        <div className="hidden md:block w-48 shrink-0 font-inter text-xs tracking-[0.2em] uppercase text-[#7f7b6c]">
                          {project.category} / {project.year}
                        </div>

                        {/* STATUS (Desktop only) */}
                        <div
                          className={`hidden md:block w-36 shrink-0 font-inter text-xs tracking-[0.2em] uppercase truncate ${isCompleted ? "text-[#8A9E8C]" : "text-[#b7b2a1]"}`}
                        >
                          {project.status}
                        </div>

                        {/* ACTION */}
                        <div className="w-20 shrink-0 text-right">
                          {isCompleted ? (
                            <Link
                              href={`/work/${project.slug}`}
                              className="group/action font-inter text-xs tracking-[0.2em] uppercase text-[#2C2C2A] whitespace-nowrap min-h-11 inline-flex items-center justify-end gap-1 hover:font-bold transition-all duration-150"
                            >
                              VIEW
                              <span className="inline-block group-hover/action:scale-125 group-hover/action:translate-x-0.5 transition-all duration-150 font-bold">
                                →
                              </span>
                            </Link>
                          ) : (
                            <span className="font-inter text-xs tracking-[0.2em] uppercase text-[#b7b2a1] whitespace-nowrap min-h-11 flex items-center justify-end">
                              LOCKED
                            </span>
                          )}
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

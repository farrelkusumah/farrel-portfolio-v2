import PageTransition from "../components/PageTransition";
import FadeUp from "../components/FadeUp";

export const metadata = {
  title: "Contact — Farrel Kusumah",
  description: "Get in touch for freelance projects, full-time roles, and long-term collaborations.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="bg-[#F5F0E8] min-h-screen pb-24">
        {/* Container */}
        <section className="max-w-screen-2xl mx-auto px-5 md:px-16 pt-24 md:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

            {/* Left Column */}
            <div className="md:col-span-7">
              <FadeUp>
                <h1 className="font-space-grotesk font-bold text-5xl md:text-[6vw] lg:text-[5.5vw] uppercase text-[#2C2C2A] leading-[0.9] tracking-tight">
                  LET&apos;S BUILD THE NEXT ARCHIVE.
                </h1>

                <p className="font-inter text-sm md:text-base text-[#625f51] mt-6 max-w-md leading-relaxed">
                  Currently open for freelance projects, full-time roles, and long-term collaborations.
                </p>
              </FadeUp>

              {/* Form */}
              <FadeUp delay={0.1}>
                <form className="mt-16 w-full flex flex-col gap-8 md:gap-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="w-full">
                      <label className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-2">
                        NAME
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        required
                        className="w-full border-b border-[#b7b2a1]/50 focus:border-[#2C2C2A] rounded-none bg-transparent py-3 text-sm font-inter text-[#2C2C2A] placeholder-[#b7b2a1] outline-none transition-colors min-h-11"
                      />
                    </div>
                    <div className="w-full">
                      <label className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-2">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        placeholder="hello@example.com"
                        required
                        className="w-full border-b border-[#b7b2a1]/50 focus:border-[#2C2C2A] rounded-none bg-transparent py-3 text-sm font-inter text-[#2C2C2A] placeholder-[#b7b2a1] outline-none transition-colors min-h-11"
                      />
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-2">
                      PROJECT TYPE
                    </label>
                    <div className="relative">
                      <select
                        defaultValue=""
                        required
                        className="w-full border-b border-[#b7b2a1]/50 focus:border-[#2C2C2A] rounded-none bg-transparent py-3 text-sm font-inter text-[#2C2C2A] placeholder-[#b7b2a1] outline-none cursor-pointer appearance-none transition-colors min-h-11"
                      >
                        <option value="" disabled hidden>Select project type</option>
                        <option value="frontend">Frontend Development</option>
                        <option value="fullstack">Full-stack Web App</option>
                        <option value="hardware">Hardware / IoT Project</option>
                        <option value="uiux">UI/UX Consultation</option>
                        <option value="other">Other</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#7f7b6c]">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <label className="block font-inter text-[10px] tracking-[0.25em] uppercase text-[#7f7b6c] mb-2">
                      MESSAGE
                    </label>
                    <textarea
                      placeholder="Briefly describe your vision..."
                      required
                      rows={4}
                      className="w-full border-b border-[#b7b2a1]/50 focus:border-[#2C2C2A] rounded-none bg-transparent py-3 text-sm font-inter text-[#2C2C2A] placeholder-[#b7b2a1] outline-none resize-y transition-colors min-h-11"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#516454] text-[#F5F0E8] font-inter text-xs tracking-widest uppercase px-8 py-4 mt-2 hover:opacity-80 transition-opacity min-h-11"
                    >
                      SEND INQUIRY →
                    </button>
                  </div>
                </form>
              </FadeUp>
            </div>

            {/* Right Column */}
            <div className="md:col-span-5 flex flex-col gap-10 mt-8 md:mt-0">
              <FadeUp delay={0.2}>
                {/* Info Box */}
                <div className="bg-[#f3ede1] p-6 md:p-10 flex flex-col gap-8">
                  <div>
                    <p className="font-inter text-[10px] tracking-widest uppercase text-[#7f7b6c] mb-1">
                      DIRECT EMAIL
                    </p>
                    <a
                      href="mailto:farrelkusumah24@outlook.com"
                      className="font-inter text-sm md:text-base text-[#2C2C2A] border-b border-[#2C2C2A] pb-0.5 hover:text-[#516454] hover:border-[#516454] transition-colors min-h-11 flex items-center"
                    >
                      farrelkusumah24@outlook.com
                    </a>
                  </div>

                  <div>
                    <p className="font-inter text-[10px] tracking-widest uppercase text-[#7f7b6c] mb-1">
                      LOCATION
                    </p>
                    <p className="font-inter text-sm md:text-base text-[#2C2C2A] flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#625f51]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Bandung, Indonesia
                    </p>
                  </div>

                  <div>
                    <p className="font-inter text-[10px] tracking-widest uppercase text-[#7f7b6c] mb-1">
                      RESPONSE TIME
                    </p>
                    <p className="font-inter text-sm md:text-base text-[#625f51] italic">
                      Usually within 24 hours.
                    </p>
                  </div>

                  <div className="w-full h-px bg-[#b7b2a1]/20 my-2" />

                  <div>
                    <p className="font-inter text-[10px] tracking-widest uppercase text-[#7f7b6c] mb-3">
                      NEXT AVAILABILITY:
                    </p>
                    <span className="border border-[#8A9E8C] text-[#8A9E8C] font-inter text-[10px] tracking-[0.25em] uppercase px-4 py-3 inline-block">
                      AVAILABLE NOW
                    </span>
                  </div>
                </div>
              </FadeUp>

              <FadeUp delay={0.3}>
                {/* Optional Image Box matching the design layout */}
                <div className="w-full aspect-4/3 bg-[#1a1a1a] flex items-center justify-center object-cover">
                  <span className="font-inter text-xs tracking-widest uppercase text-[#7f7b6c]/50">
                    Farrel Kusumah.
                  </span>
                </div>
              </FadeUp>
            </div>

          </div>
        </section>
      </div>
    </PageTransition>
  );
}

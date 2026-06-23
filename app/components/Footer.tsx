export default function Footer() {
  return (
    <footer className="bg-[#F5F0E8] py-8 md:py-6 mt-16 md:mt-24">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

        {/* Left cluster / Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 text-center md:text-left">
          <span className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#625f51]">
            © 2026 FARREL KUSUMAH — BUILT WITH INTENTIONAL ASYMMETRY
          </span>
        </div>

        {/* Right — links */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-4 md:mt-0">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#625f51] hover:opacity-70 transition-opacity duration-150 active:opacity-50 min-h-11 flex items-center"
          >
            LINKEDIN
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#625f51] hover:opacity-70 transition-opacity duration-150 active:opacity-50 min-h-11 flex items-center"
          >
            INSTAGRAM
          </a>
          <a
            href="https://farrelkusumah.vercel.app/Farrel-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#2C2C2A] font-medium hover:opacity-70 transition-opacity duration-150 active:opacity-50 min-h-11 flex items-center"
          >
            READCV
          </a>
          <a
            href="https://github.com/farrelkusumah"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter text-[10px] uppercase tracking-[0.2em] text-[#625f51] hover:opacity-70 transition-opacity duration-150 active:opacity-50 min-h-11 flex items-center"
          >
            GITHUB
          </a>
        </div>

      </div>
    </footer>
  );
}

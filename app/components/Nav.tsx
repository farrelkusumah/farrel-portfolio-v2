"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const centerLinks = [
  { href: "/work", label: "WORK" },
  { href: "/archive", label: "ARCHIVE" },
  { href: "/about", label: "ABOUT" },
  // { href: "/contact", label: "CONTACT" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when tapping outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [menuOpen]);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[#F5F0E8] pt-4 relative z-50">
      <nav className="max-w-screen-2xl mx-auto px-5 md:px-16 flex items-center justify-between h-[52px]">

        {/* Left — wordmark */}
        <div className="flex-1 flex items-center">
          <Link
            href="/"
            className="font-[family-name:var(--font-space-grotesk)] text-sm md:text-sm font-bold uppercase tracking-widest text-[#2C2C2A] min-h-[44px] flex items-center transition-opacity duration-150 hover:opacity-70"
          >
            FARREL KUSUMAH
          </Link>
        </div>

        {/* Center — desktop navigation links */}
        <ul className="hidden md:flex items-center gap-10">
          {centerLinks.map(({ href, label }) => {
            const active =
              pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href} className="relative pb-0.5">
                <Link
                  href={href}
                  className={[
                    "font-[family-name:var(--font-space-grotesk)] text-[12px] md:text-sm font-bold uppercase tracking-[0.2em] transition-opacity duration-150 active:opacity-50",
                    active ? "text-[#2C2C2A]" : "text-[#625f51] hover:opacity-70",
                  ].join(" ")}
                >
                  {label}
                </Link>
                {/* Active underline */}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#2C2C2A]" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right — desktop inquiry / mobile hamburger */}
        <div className="flex-1 flex items-center justify-end">
          <Link
            href="/contact"
            className="hidden md:flex font-[family-name:var(--font-space-grotesk)] text-sm font-bold uppercase tracking-[0.2em] text-[#F5F0E8] bg-[#516454] px-5 py-2 hover:opacity-80 transition-opacity duration-150 min-h-[44px] items-center"
            style={{ color: "#F5F0E8" }}
          >
            INQUIRY
          </Link>

          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-11 min-h-[44px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-[#2C2C2A] transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-[#2C2C2A] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-[#2C2C2A] transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>

      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#fef9f1] border-b border-[#b7b2a1] shadow-lg md:hidden"
          >
            <ul className="flex flex-col">
              {centerLinks.map((link, idx) => (
                <li key={link.href} className={idx !== centerLinks.length - 1 ? 'border-b border-[#b7b2a1]/30' : ''}>
                  <Link
                    href={link.href}
                    className="block font-[family-name:var(--font-space-grotesk)] font-bold text-sm tracking-widest uppercase text-[#2C2C2A] py-4 px-5 min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="border-t border-[#b7b2a1]">
                <Link
                  href="/contact"
                  className="block font-[family-name:var(--font-space-grotesk)] font-bold text-sm tracking-widest uppercase text-[#F5F0E8] bg-[#516454] py-4 px-5 min-h-[44px]"
                >
                  INQUIRY
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

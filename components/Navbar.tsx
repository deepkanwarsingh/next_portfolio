"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${isScrolled ? "py-4 border-b border-white/10" : "py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter outfit">
            DEEPKANWAR SINGH<span className="text-primary-glow"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["ABOUT", "SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium tracking-widest text-gray-400 hover:text-primary-glow transition-colors"
              >
                {item}
              </Link>
            ))}
            <button className="px-6 py-2 border border-white/10 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all">
              <a href="/Deepkanwar_Singh_CV.pdf" download>
                Download Resume
              </a>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-transform duration-500 md:hidden ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {["ABOUT", "SKILLS", "PROJECTS", "EXPERIENCE", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold tracking-widest text-gray-400 hover:text-primary-glow transition-colors outfit"
            >
              {item}
            </Link>
          ))}
          <button className="mt-4 px-10 py-4 border border-white/10 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all">
            <a href="/Deepkanwar_Singh_CV.pdf" download onClick={() => setIsMenuOpen(false)}>
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

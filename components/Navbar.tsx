"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black ${isScrolled ? "py-4 border-b border-white/10" : "py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter outfit">
          DEEPKANWAR SINGH<span className="text-primary-glow"></span>
        </Link>

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
            RESUME
          </button>
        </div>

        {/* Mobile menu icon could go here */}
      </div>
    </nav>
  );
}

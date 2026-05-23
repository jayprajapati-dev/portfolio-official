"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", num: "01" },
  { label: "Skills", href: "#skills", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Learning", href: "#learning", num: "04" },
  { label: "Experience", href: "#experience", num: "05" },
  { label: "Contact", href: "#contact", num: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header role="banner">
      <motion.nav
        role="navigation"
        aria-label="Primary navigation"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass shadow-lg shadow-emerald-500/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-18">
            <motion.a
              href="#home"
              className="flex items-center gap-0 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Home"
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <rect width="100" height="100" rx="20" className="fill-emerald-500/10 group-hover:fill-emerald-500/15 transition-colors" />
                <path d="M18 22H42V32H33V65C33 75 27 80 21 80H16V70H21C24 70 24 66 24 66V32H18Z" className="fill-emerald-400" />
                <path d="M54 22V80H64V54H76C83 54 87 47 87 38C87 29 83 22 76 22ZM64 32H74C77 32 77 38 77 38C77 42 77 44 74 44H64Z" className="fill-emerald-400" />
              </svg>
            </motion.a>

            <ul className="hidden md:flex items-center gap-1" role="menubar" aria-label="Section navigation">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <motion.a
                    role="menuitem"
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                      activeSection === item.href.replace("#", "")
                        ? "text-emerald-400"
                        : "text-slate-400 hover:text-emerald-300"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xs font-mono text-emerald-400/60" aria-hidden="true">{item.num}.</span>
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://github.com/jayprajapati-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-semibold border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </div>

            <button
              className="md:hidden p-2 text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-gray-950/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="relative pt-24 px-6">
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-1" role="menu">
                  {navItems.map((item, i) => (
                    <li key={item.href} role="none">
                      <motion.a
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-3 text-lg font-medium rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-emerald-500/5 transition-colors flex items-center gap-2"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="text-sm font-mono text-emerald-400/60" aria-hidden="true">{item.num}.</span>
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

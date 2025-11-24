"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaUserTie, FaCode, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [active, setActive] = useState("home");

  const links = [
    { id: "experience", icon: <FaUserTie />, label: "Experience" },
    { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
    { id: "skills", icon: <FaTools />, label: "Skills" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact" },
  ];

  const handleScroll = (id : string) => {
    const section = document.getElementById(id);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <>
      {/* 🌗 Top Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center 
                   px-6 py-4 bg-[var(--background)]/80 backdrop-blur-md shadow-sm"
      >
        {/* Left: Title (always visible) */}
        <h1 className="text-lg md:text-xl font-bold text-[var(--foreground)]">
          <a href="/">Nitish’s Portfolio</a>
        </h1>

        {/* Right: Desktop Menu + Theme Toggle */}
        <div className="flex items-center gap-6">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                className={`font-medium transition-all ${
                  active === link.id
                    ? "text-[var(--button-gradient-to)] scale-105"
                    : "text-[var(--foreground)] hover:text-[var(--button-gradient-to)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle (always visible) */}
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* 🧭 Bottom Bar (Mobile Only) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.45, 0.05, 0.25, 0.95] }}
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[999]
                   flex items-center justify-around w-[95vw] max-w-md
                   px-4 py-3 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.15)] 
                   backdrop-blur-md border border-[var(--muted)] bg-[var(--background)]/70"
      >
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleScroll(link.id)}
            className={`flex flex-col items-center text-xs font-medium transition-all ${
              active === link.id
                ? "text-[var(--button-gradient-to)] scale-110"
                : "text-[var(--foreground)] hover:text-[var(--button-gradient-to)]"
            }`}
          >
            <div className="text-lg mb-1">{link.icon}</div>
            {link.label}
          </button>
        ))}
      </motion.div>
    </>
  );
}

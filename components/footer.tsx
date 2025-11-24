"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.45, 0.05, 0.25, 0.95],
      }}
      viewport={{ once: true }}
      className="relative mt-16 w-full border-t border-[var(--border-color)]/60 
                 py-8 text-center md:text-left text-[var(--foreground)]/80 
                 overflow-x-hidden"
    >
      <div
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row 
                   items-center justify-between gap-6 px-4 md:px-8 box-border"
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="shrink-0"
        >
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Nitish</h2>
          <p className="text-sm opacity-70">
            Full Stack Developer • React + Node.js • AI Enthusiast
          </p>
        </motion.div>

        {/* Center Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          <a
            href="#projects"
            className="hover:text-[var(--button-gradient-to)] transition"
          >
            Projects
          </a>
          <a
            href="#About"
            className="hover:text-[var(--button-gradient-to)] transition"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-[var(--button-gradient-to)] transition"
          >
            Experience
          </a>
        </motion.div>

        {/* Right Section - Socials */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-5 text-lg justify-center md:justify-end"
        >
          <a
            href="https://github.com/Nitish-Babu-Chetti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/nitish-babu-chetti-01117b249"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:chetti1605@gmail.com"
            className="hover:text-emerald-400 transition"
          >
            <FaEnvelope />
          </a>
          {/* <a
            href="https://nitish.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition"
          >
            <FaGlobe />
          </a> */}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-xs mt-6 opacity-60 px-4"
      >
        © {new Date().getFullYear()} Nitish. Built with Next.js & Framer Motion.
      </motion.div>
    </motion.footer>
  );
}

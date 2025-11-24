"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="glossy py-24 px-6 md:px-12 mx-6 flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)] text-center"
    >
      {/* 🧠 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text "
      >
        Let’s Work Together 🚀
      </motion.h2>

      {/* 💬 Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-2xl mb-10 text-[var(--foreground)]/80 leading-relaxed"
      >
        I’m currently open to <span className="text-[var(--foreground)] font-semibold">Full-Stack</span> or{" "}
        <span className="text-[var(--foreground)] font-semibold">AI-based Development</span> roles.  
        Let’s build something extraordinary together — feel free to connect or download my resume below.
      </motion.p>

      {/* 🌐 Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center gap-8 mb-10 text-3xl"
      >
        <a
          href="mailto:chetti1605@gmail.com"
          aria-label="Email"
          className="hover:scale-110 transition-transform hover:text-[var(--button-gradient-to)]"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/nitish-babu-chetti-01117b249"
          target="_blank"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform hover:text-[var(--button-gradient-to)]"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Nitish-Babu-Chetti"
          target="_blank"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform hover:text-[var(--button-gradient-to)]"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* 📄 Action Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-5"
      >
        <a
          href="/resume/Nitish's_Resume.pdf"
          download
          className="px-8 py-3 rounded-full border border-[var(--foreground)] 
                     font-medium shadow-[0_0_15px_rgba(143,188,139,0.3)] 
                     hover:shadow-[0_0_25px_var(--button-gradient-to)] 
                     transition-all duration-300 hover:scale-105 flex items-center gap-2"
        >
          <FaFileDownload />
          <span>Download Resume</span>
        </a>

        <a
          href="mailto:chetti1605@gmail.com"
          className="px-8 py-3 rounded-full border border-[var(--foreground)] 
                     font-medium hover:bg-[var(--button-gradient-to)] hover:text-black 
                     hover:shadow-[0_0_20px_var(--button-gradient-to)] 
                     hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <FaEnvelope />
          <span>Contact Me</span>
        </a>
      </motion.div>
    </section>
  );
}

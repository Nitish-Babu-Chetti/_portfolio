"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const [pause, setPause] = useState(false);

  // blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // typing logic
  useEffect(() => {
    if (pause) return;
    if (index === roles.length) setIndex(0);

    const currentRole = roles[index];
    const typingSpeed = deleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));

      if (!deleting && subIndex === currentRole.length) {
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setDeleting(true);
        }, 1200);
        return;
      }

      if (deleting && subIndex === 0) {
        setDeleting(false);
        setPause(true);
        setTimeout(() => {
          setPause(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 500);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, pause]);

  return (
    <section
      className="glossy p-6 sm:p-8 md:p-10 min-h-[80vh] flex flex-col-reverse md:flex-row 
                items-center justify-between gap-10 md:gap-0 m-4 sm:m-6 md:m-10 mt-20 md:mt-24"
                id="About"
    >
      {/* ---------- LEFT SIDE (Text Section) ---------- */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: [0.45, 0.05, 0.25, 0.95],
        }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] mb-3 sm:mb-4">
          Hi, I'm{" "}
          <span className="text-[var(--button-gradient-to)]">Nitish</span>
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-400 mt-2">
          I'm a{" "}
          <span className="text-gray-200">
            {roles[index].substring(0, subIndex)}
            {blink ? "|" : " "}
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[var(--foreground)] max-w-xl leading-relaxed">
          Passionate Full Stack Developer skilled in building dynamic, scalable web
          applications with modern technologies like React, Next.js, Node.js, and
          Spring Boot. I love crafting seamless user experiences with clean,
          efficient code.
        </p>
      </motion.div>

      {/* ---------- RIGHT SIDE (Profile Image Section) ---------- */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.45, 0.05, 0.25, 0.95],
        }}
        viewport={{ once: true }}
      >
        <div className="relative inline-block group">
          {/* Glowing animated ring */}
          <div
            className="absolute inset-0 rounded-full p-[3px]
                      bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 
                      dark:from-green-400 dark:via-emerald-500 dark:to-teal-400
                      animate-rotate-glow blur-sm"
          ></div>

          {/* Inner static ring */}
          <div
            className="absolute inset-[6px] rounded-full 
                      bg-gradient-to-r from-white/60 to-white/0 
                      dark:from-emerald-400/20 dark:to-transparent"
          ></div>

          {/* Profile Image */}
          <Image
            src="/profile_image.png"
            alt="Profile Picture"
            width={220}
            height={220}
            className="relative z-10 rounded-full drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] 
                      dark:drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]"
          />
        </div>
      </motion.div>
    </section>
  );
}

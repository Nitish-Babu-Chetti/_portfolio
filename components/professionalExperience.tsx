"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Chrisent Software Solutions",
    duration: "Dec 2024 – Present",
    description: [
      "Led backend development independently using Node.js, Express.js, and MySQL to build scalable REST APIs and manage database operations.",
      "Collaborated with the frontend team to deliver a responsive eCommerce platform using React.js and Next.js.",
      "Integrated Razorpay, MSG91, Sandbox, and Shiprocket APIs for payments, OTP verification, and logistics.",
      "Containerized and deployed the entire system on VPS using Docker and CI/CD pipelines.",
    ],
    moreDetails: [
      "Implemented authentication, authorization, and real-time data synchronization with Socket.io.",
      "Configured Firebase Cloud Messaging for notifications and Elasticsearch for optimized search.",
      "Worked across user, vendor, and internal admin modules within the eCommerce ecosystem.",
    ],
    isCurrent: true,
  },
  {
    title: "Full Stack Intern",
    company: "Infoz IT Solutions",
    duration: "Aug 2024 – Oct 2024",
    description: [
      "Developed a full-stack food delivery platform using React.js, Spring Boot, and MySQL.",
      "Implemented secure authentication and state management with Redux.",
      "Optimized backend data handling using Hibernate for efficient transactions.",
    ],
    moreDetails: [
      "Designed reusable frontend components and improved UI responsiveness.",
      "Contributed to database schema design and integrated REST APIs for better scalability.",
    ],
    isCurrent: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 sm:px-10 relative">
      <motion.h2
        className="text-4xl playwrite text-center mb-16 text-[var(--foreground)]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <LayoutGroup>
        <motion.div
          layout
          className="relative max-w-5xl mx-auto flex flex-col md:flex-row"
        >
          {/* 🔹 Timeline Section — Hidden on Mobile */}
          <motion.div
            layout
            className="hidden md:flex relative w-1/5 justify-center"
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Vertical Line */}
            <motion.div
              layout
              className="absolute top-0 bottom-0 w-[8px] bg-gradient-to-b 
                         from-[#8FBC8B] via-white to-[#8FBC8B] animate-lineFlow 
                         rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            ></motion.div>

            {/* Timeline Dots */}
            <motion.div
              layout
              className="flex flex-col items-center justify-between h-full py-4 relative z-10"
            >
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  layout
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: i * 0.2 + 0.3,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className={`w-5 h-5 rounded-full border-[3px] ${
                    exp.isCurrent
                      ? "border-white bg-[#8FBC8B] animate-blink shadow-[0_0_15px_#8FBC8B]"
                      : "border-gray-600 bg-gray-900"
                  }`}
                ></motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 🔸 Experience Cards Section */}
          <motion.div
            layout
            className="w-full md:w-4/5 space-y-10 md:pl-10"
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} />
            ))}
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </section>
  );
}

/* ✅ Individual Experience Card */
function ExperienceCard({ exp }) {
  const [showMore, setShowMore] = useState(false);
  const visiblePoints = showMore
    ? exp.description.concat(exp.moreDetails || [])
    : exp.description;

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5 } }}
      className={`p-6 glossy border border-white/10 rounded-xl relative 
                 hover:shadow-[0_0_25px_rgba(143,188,139,0.2)] transition-shadow
                 ${
                   exp.isCurrent
                     ? "animate-current-blink md:animate-none"
                     : ""
                 }`}
    >
      <h3 className="text-2xl font-semibold">{exp.title}</h3>
      <p className="text-sm font-semibold mb-1">
        <span className="text-4xl">🏢</span> {exp.company}
      </p>
      <p className="text-sm mb-4 italic">{exp.duration}</p>

      {/* Description List */}
      <motion.ul
        layout
        className="list-disc list-inside text-sm leading-relaxed space-y-1 overflow-hidden"
      >
        <AnimatePresence>
          {visiblePoints.map((d, index) => (
            <motion.li
              key={index}
              layout
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
            >
              {d}
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {/* Show More / Less Button */}
      {exp.moreDetails && (
        <motion.button
          layout
          onClick={() => setShowMore(!showMore)}
          className="mt-3 text-sm underline hover:text-[var(--button-gradient-to)] transition-all flex items-center gap-1"
          whileTap={{ scale: 0.95 }}
        >
          {showMore ? "Show Less ▲" : "Show More ▼"}
        </motion.button>
      )}

      {/* "Current" Badge */}
      {exp.isCurrent && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-3 right-4 px-3 py-1 text-xs font-semibold 
                     text-black bg-[#8FBC8B] rounded-full shadow-md"
        >
          Current
        </motion.span>
      )}
    </motion.div>
  );
}

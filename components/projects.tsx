"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FaEye, FaFolderOpen } from "react-icons/fa";
import digital_library from "@/public/digital_library.jpeg";
import first from "@/public/Ecommerce.png";
import second from '@/public/Food Delivery App.png'
import third from "@/public/ATM.png";
import CinematicCarousel from "./cinematicCarousel";
import ProjectDetailsCard from "./DetailProjectCard";

type Project = {
  id: number;
  name: string;
  duration?: string;
  description: string;
  fullDescription: string;
  tech: string[];
  image?: any;
  github?: string;
  live?: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    name: "Ecommerce Website (Shopkaro)",
    duration: "Aug 2023 – Sep 2023",
    description:
      "Developed a fully functional eCommerce website using React.js and Redux for seamless product browsing.",
    fullDescription:
      "Developed a fully functional eCommerce website using React.js, Redux, and Bootstrap for responsive design. Implemented secure authentication, product browsing, and a smooth user interface. Focused on scalability, clean UI/UX, and high performance for a seamless shopping experience on both desktop and mobile.",
    tech: [
      "React.js",
      "Redux",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "HTML5",
      "Redux Thunk",
    ],
    image: first,
    github: "https://github.com/Nitish-Babu-Chetti/Ecommerce-website-shopKaro",
    live: 'https://nitish-babu-chetti.github.io/shopkaro/'
  },
  {
    id: 2,
    name: "Food Delivery Platform",
    duration: "Nov 2024 – Nov 2024",
    description:
      "Built a full-stack food delivery app using React.js, Redux, Spring Boot, and MySQL.",
    fullDescription:
      "Built a full-stack food delivery application inspired by Swiggy using React.js and Redux for dynamic routing and user interface. The backend, powered by Spring Boot and MySQL, handled secure authentication, user management, and real-time order processing. Focused on performance, scalability, and clean code architecture.",
    tech: [
      "React.js",
      "Redux",
      "Spring Boot",
      "Hibernate",
      "MySQL",
      "Bootstrap",
      "CSS",
      "JavaScript",
    ],
    image: second,
  },
  {
    id: 3,
    name: "Digital Library Management System",
    duration: "Jan 2023 – Apr 2023",
    description:
      "Developed a Digital Library System using Java, JDBC, and MySQL for efficient resource management.",
    fullDescription:
      "Developed a Java-based Digital Library Management System using JDBC and MySQL. Students can rent and return books seamlessly, with personal and centralized logbooks to manage rental history. Designed a user-friendly interface for efficient resource tracking and management.",
    tech: ["Java", "JDBC", "MySQL", "Core Java"],
    image: digital_library,
    // github: "https://github.com/yourusername/digital-library",
  },
  {
    id: 4,
    name: "ATM Transactions System",
    duration: "Aug 2022",
    description:
      "Created a Java-based ATM system using JDBC and MySQL for secure banking operations.",
    fullDescription:
      "Developed a secure Java-based ATM Transactions System leveraging JDBC for seamless integration with MySQL database. Implemented login authentication, balance inquiry, deposits, withdrawals, and transaction history management with proper error handling and user-friendly navigation.",
    tech: ["Java", "JDBC", "MySQL", "Core Java"],
    image: third,
    // github: "https://github.com/yourusername/atm-service",
  },
];

export default function ProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const next = () => setCarouselIndex((i) => (i + 1) % projectsData.length);
  const prev = () => setCarouselIndex((i) => (i - 1 + projectsData.length) % projectsData.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!showDialog) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setShowDialog(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showDialog]);

  return (
    <section className="w-full p-8 md:p-12 transition-colors" id="projects">
      {/* 🖥️ Desktop Version */}
      <motion.div
        className="hidden md:grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-10 items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* LEFT PANEL */}
        <motion.aside
          className="glossy p-6 rounded-2xl flex flex-col justify-between"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.45, 0.05, 0.25, 0.95],
          }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-4">My Projects</h2>
            <p className="text-sm mb-8">
              Click any project to preview or open the 3D slider.
            </p>

            <div className="space-y-3">
              {projectsData.map((p, i) => (
                <button
                  key={`list-${p.id}`}
                  onClick={() => setSelectedIndex(i)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 flex items-center justify-between ${
                    selectedIndex === i ? "ring-1" : ""
                  }`}
                  style={{
                    background:
                      selectedIndex === i
                        ? "var(--project-selected-bg)"
                        : "transparent",
                    boxShadow:
                      selectedIndex === i
                        ? "0 0 10px var(--project-selected-ring)"
                        : "none",
                    borderColor:
                      selectedIndex === i
                        ? "var(--project-selected-ring)"
                        : "transparent",
                  }}
                >
                  <div>
                    <div className="font-medium">{p.name}</div>
                    {p.duration && (
                      <p className="text-xs opacity-70">{p.duration}</p>
                    )}
                  </div>
                  <div className="text-xs">{p.tech[0]}</div>
                </button>
              ))}
            </div>
          </div>
        </motion.aside>

        {/* RIGHT PANEL — 3D Folder Stack */}
        <LayoutGroup>
          <motion.section
            className="relative w-full h-full flex flex-col-reverse items-center justify-center bg-[var(--background)] text-[var(--foreground)] px-6 md:px-12"
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.45, 0.05, 0.25, 0.95],
            }}
            viewport={{ once: true }}
          >
            {/* 🌟 Show All Projects Button */}
            <button
              onClick={() => setShowDialog(true)}
              className="mb-6 px-6 py-3 rounded-full font-medium text-[var(--foreground)] 
                      shadow-[var(--button-glow)] transition-all duration-500 hover:scale-105 backdrop-blur-md"
              style={{
                background: `linear-gradient(to right, 
                  var(--button-gradient-from), 
                  var(--button-gradient-to))`,
              }}
            >
              <span className="flex items-center gap-2">
                <FaFolderOpen className="animate-pulse" />
                Show All Projects
              </span>
            </button>

            {/* 📁 Folder Stack */}
            <div
              className="relative w-[420px] h-[360px] flex items-center justify-center"
              style={{
                perspective: "1200px",
                transformStyle: "preserve-3d",
              }}
            >
              {projectsData.map((project, i) => {
                const isSelected = selectedIndex === i;
                return (
                  <motion.div
                    key={`folder-${project.id}`}
                    layout
                    animate={
                      isSelected
                        ? {
                            x: [0, 0, -30],
                            y: [-10, -500, 30],
                            z: [0, 250, 50],
                            filter: [
                              "brightness(0.9)",
                              "brightness(1.1)",
                              "brightness(1.05)",
                            ],
                            transition: {
                              duration: 1.1,
                              ease: [0.45, 0.05, 0.25, 0.95],
                            },
                          }
                        : {
                            x: i * 25,
                            y: -i * 20,
                            z: -i * 45,
                            filter: `brightness(${1 - i * 0.05})`,
                            transition: { duration: 0.6 },
                          }
                    }
                    className="absolute rounded-xl overflow-hidden shadow-2xl transition-all cursor-pointer"
                    onClick={() => setSelectedIndex(i)}
                    style={{
                      width: "380px",
                      height: "280px",
                      zIndex: isSelected ? 200 : 100 - i,
                      transform: `translateX(${i * 35}px)`,
                      boxShadow: isSelected
                        ? "0 0 25px var(--button-glow)"
                        : "0 8px 25px rgba(0,0,0,0.4)",
                      border: isSelected
                        ? "1.5px solid var(--highlight-ring)"
                        : "none",
                    }}
                  >
                    {/* Folder Body */}
                    <div
                      className="absolute inset-0 rounded-xl border shadow-[0_8px_25px_var(--folder-shadow)]"
                      style={{
                        background: `linear-gradient(to bottom right, 
                          var(--folder-gradient-from), 
                          var(--folder-gradient-via), 
                          var(--folder-gradient-to))`,
                        borderColor: "var(--folder-border)",
                      }}
                    />

                    {/* Folder Flap */}
                    <div
                      className="absolute top-[-14px] left-[18px] w-[90px] h-[20px] rounded-t-md border shadow-md"
                      style={{
                        background: `linear-gradient(to right, 
                          var(--flap-gradient-from), 
                          var(--flap-gradient-to))`,
                        borderColor: "var(--flap-border)",
                      }}
                    />

                    {/* Folder Image */}
                    <motion.div
                      layoutId={`project-image-${project.id}`}
                      className="absolute bottom-[15px] left-[10px] right-[10px] top-[25px] overflow-hidden rounded-lg z-10 pointer-events-none"
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                          No image
                        </div>
                      )}
                    </motion.div>

                    {/* Folder Front Cover */}
                    <div
                      className="absolute bottom-[15px] left-[10px] right-[10px] h-[45%] rounded-b-lg z-20 border-t border-emerald-400/20 shadow-inner pointer-events-none"
                      style={{
                        background: `linear-gradient(to top right, 
                          var(--folder-gradient-from), 
                          var(--folder-gradient-via), 
                          var(--folder-gradient-to))`,
                      }}
                    />

                    {/* 👁️ Show Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenProjectId(project.id);
                      }}
                      className="absolute top-[55%] right-5 p-2 rounded-full 
                                bg-[var(--foreground)]/20 hover:bg-[var(--foreground)]/30 
                                text-[var(--foreground)] transition-all duration-300 
                                shadow-md hover:scale-110 cursor-pointer"
                      style={{
                        zIndex: 300,
                      }}
                    >
                      <FaEye className="text-[18px]" />
                    </button>

                    {/* Info */}
                    <div className="absolute top-[55%] left-5 z-30">
                      <div className="text-[24px] font-semibold select-none">
                        {project.name}
                      </div>
                      <div className="text-[12px] select-none">
                        {project.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* 🪟 Project Details Modal */}
          <AnimatePresence mode="wait">
            {openProjectId && (
              <ProjectDetailsCard
                key={`details-${openProjectId}`}
                project={projectsData.find((p) => p.id === openProjectId) || null}
                onClose={() => setOpenProjectId(null)}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </motion.div>

      {/* 📱 Mobile Version */}
      <div className="md:hidden max-w-3xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-6">Projects</h1>
        {projectsData.map((p) => (
          <div
            key={p.id}
            className="relative glossy p-5 rounded-2xl mb-6 overflow-hidden text-white"
          >
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="absolute inset-0 object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-xs opacity-80 mb-2">{p.duration}</p>
              <p className="text-sm mb-3">{p.description}</p>
              <div className="flex flex-wrap gap-2 text-xs mb-3">
                {p.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 px-2 py-1 rounded-md border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-xs font-semibold">
                <div className="flex gap-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="underline hover:text-green-400 transition"
                    >
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="underline hover:text-green-400 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setOpenProjectId(p.id)}
                  className="px-3 py-1 border border-white/20 rounded-md hover:bg-white/10 transition text-xs"
                >
                  Show Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🎬 Cinematic Carousel */}
      <AnimatePresence>
        {showDialog && (
          <CinematicCarousel
            key="carousel"
            items={projectsData}
            onClose={() => setShowDialog(false)}
          />
        )}
      </AnimatePresence>

      {/* 🪟 Shared Project Detail Card for both Desktop & Mobile */}
      <AnimatePresence mode="wait">
        {openProjectId && (
          <ProjectDetailsCard
            key={`details-${openProjectId}`}
            project={projectsData.find((p) => p.id === openProjectId) || null}
            onClose={() => setOpenProjectId(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

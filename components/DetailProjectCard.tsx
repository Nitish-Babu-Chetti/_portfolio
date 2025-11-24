"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

type Project = {
  id: number;
  name: string;
  description: string;
  fullDescription?: string;
  duration?: string;
  tech: string[];
  image?: any;
  github?: string;
  live?: string;
};

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailsCard({ project, onClose }: Props) {
  return (
    <AnimatePresence mode="wait">
      {project && (
        <motion.div
          key="overlay"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.45, 0.05, 0.25, 0.95] }}
          onClick={onClose}
        >
          {/* 🪟 Floating Card Container */}
          <motion.div
            key="card"
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 100, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            transition={{
              duration: 0.55,
              ease: [0.45, 0.05, 0.25, 0.95],
            }}
            className="relative w-[90%] md:w-[650px] bg-[var(--background)] text-[var(--foreground)]
                       rounded-2xl shadow-2xl overflow-hidden border border-[var(--border-color)]"
          >
            {/* 🔘 Close Button */}
            <button
              onClick={onClose}
              style={{ cursor: "pointer" }}
              className="absolute top-4 right-4 z-[10000] bg-black/40 p-2 rounded-full 
                         text-white hover:bg-black/60 hover:text-[var(--button-gradient-to)] transition"
            >
              <FaTimes size={20} />
            </button>

            {/* 🖼️ Banner Image */}
            <motion.div
              layoutId={`project-image-${project.id}`}
              className="relative h-56 w-full overflow-hidden rounded-t-2xl"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500">
                  No Image
                </div>
              )}
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />
            </motion.div>

            {/* 📋 Project Details */}
            <div className="p-6 space-y-4">
              {/* 🏷️ Title & Duration */}
              <div>
                <h2 className="text-2xl font-bold tracking-wide text-[var(--button-gradient-to)]">
                  {project.name}
                </h2>
                {project.duration && (
                  <p className="text-sm opacity-70 mt-1">{project.duration}</p>
                )}
              </div>

              {/* 💬 Short Summary */}
              <p className="text-[15px] leading-relaxed opacity-90">
                {project.description}
              </p>

              {/* 🧾 Detailed Description Section */}
              {project.fullDescription && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--button-gradient-to)]">
                    Description
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--foreground)]/90">
                    {project.fullDescription}
                  </p>
                </div>
              )}

              {/* 💻 Tech Stack */}
              {project.tech && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--button-gradient-to)]">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-sm bg-[var(--button-gradient-from)]/20 
                                   border border-[var(--button-gradient-to)]/40 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 🔗 Links Section */}
              {(project.github || project.live) && (
                <div className="flex items-center gap-6 mt-6 border-t border-white/10 pt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--button-gradient-to)] transition"
                    >
                      <FaGithub /> <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--button-gradient-to)] transition"
                    >
                      <FaExternalLinkAlt /> <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

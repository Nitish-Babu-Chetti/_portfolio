"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProjectDetailsCard from "./DetailProjectCard";

type CarouselItem = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  github?: string;
  live?: string;
};

type Props = {
  items: CarouselItem[];
  onClose?: () => void;
};

export default function CinematicCarousel({ items, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % items.length);
  const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);

  // 🔑 Smoothly trigger close animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      if (onClose) onClose();
      setIsClosing(false);
    }, 500); // delay = animation duration
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (openProjectId) setOpenProjectId(null);
        else handleClose();
      }
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openProjectId]);

  // If project details open
  if (openProjectId) {
    const project = items.find((p) => p.id === openProjectId);
    return (
      <ProjectDetailsCard
        project={project || null}
        onClose={() => setOpenProjectId(null)}
      />
    );
  }

  return (
    <AnimatePresence mode="wait">
      {!isClosing && (
        <motion.div
          key="carousel"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-[var(--background)]/90 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.45, 0.05, 0.25, 0.95] }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-20 right-10 text-[var(--foreground)] text-2xl z-50 hover:scale-110 transition-transform"
          >
            ✕
          </button>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-4xl text-[var(--foreground)]/80 hover:text-[var(--foreground)] z-50"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-4xl text-[var(--foreground)]/80 hover:text-[var(--foreground)] z-50"
          >
            ▶
          </button>

          {/* 3D Container */}
          <div
            className="relative w-full h-[85vh] flex items-center justify-center"
            style={{
              perspective: "1400px",
              transformStyle: "preserve-3d",
            }}
          >
            {items.map((item, i) => {
              const len = items.length;
              let offset = (i - index + len) % len;

              // Only left, center, right
              if (offset !== 0 && offset !== 1 && offset !== len - 1) return null;

              const isCenter = offset === 0;
              const isLeft = offset === len - 1;
              const isRight = offset === 1;

              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let scale = 1;
              let brightness = 0.6;

              if (isCenter) {
                translateX = 0;
                translateZ = 0;
                rotateY = 0;
                scale = 1;
                brightness = 1;
              } else if (isLeft) {
                translateX = -450;
                translateZ = -250;
                rotateY = 40;
              } else if (isRight) {
                translateX = 450;
                translateZ = -250;
                rotateY = -40;
              }

              return (
                <motion.div
                  key={item.id}
                  className="absolute rounded-2xl overflow-hidden shadow-2xl border border-[var(--foreground)]/20"
                  animate={{
                    transform: `
                      translateX(${translateX}px)
                      translateZ(${translateZ}px)
                      rotateY(${rotateY}deg)
                      scale(${scale})
                    `,
                    zIndex: isCenter ? 300 : 100,
                  }}
                  transition={{ duration: 0.9, ease: [0.45, 0.05, 0.25, 0.95] }}
                  style={{
                    width: isCenter ? "50%" : "45%",
                    height: isCenter ? "65%" : "60%",
                    filter: `brightness(${brightness})`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      priority={isCenter}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[var(--foreground)] text-lg">
                      No Image
                    </div>
                  )}

                  {/* Info + Button only for center */}
                  {isCenter && (
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-[var(--background)]/95 to-transparent p-6 flex flex-col items-center justify-end">
                      <h3 className="text-black text-2xl font-bold mb-2 drop-shadow-md">
                        {item.name}
                      </h3>
                      <p className="text-black text-sm mb-4 text-center max-w-lg">
                        {item.description}
                      </p>
                      <button
                        onClick={() => setOpenProjectId(item.id)}
                        className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white 
                                   font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        View Project
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

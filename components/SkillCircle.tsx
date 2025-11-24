"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SkillCircleProps {
  name: string;
  percentage: number;
  color?: string;
  imageSrc?: string;
  slideDistance?: number; // 👈 optional custom slide distance
}

export default function SkillCircle({
  name,
  percentage,
  color = "#C0B9A0",
  imageSrc,
  slideDistance = 150,
}: SkillCircleProps) {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // 🔹 detect when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 🔹 animate circular progress once visible
  useEffect(() => {
    if (visible && progress < percentage) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= percentage) {
            clearInterval(interval);
            return percentage;
          }
          return prev + 1;
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [visible, percentage, progress]);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={containerRef}
      className="flex flex-col items-center justify-center relative"
      style={{ width: radius * 2, height: radius * 2 + 40 }}
      initial={{ opacity: 0, x: -slideDistance }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.45, 0.05, 0.25, 0.95],
      }}
      viewport={{ once: true }}
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90 absolute top-0 left-0"
      >
        {/* Background Circle */}
        <circle
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress Circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference + " " + circumference}
          style={{
            strokeDashoffset,
            transition: "stroke-dashoffset 0.3s ease-in-out",
            filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      {/* 🖼️ Center Image */}
      {imageSrc && (
        <div className="absolute flex items-center justify-center top-0 left-0 w-full h-[120px]">
          <Image
            src={imageSrc}
            alt={name}
            width={50}
            height={50}
            className="rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] rotate-round"
          />
        </div>
      )}

      {/* Skill Name */}
      <p className="absolute bottom-8 text-sm font-semibold text-[var(--foreground)]">
        {name}
      </p>
    </motion.div>
  );
}

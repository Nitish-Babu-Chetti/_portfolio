"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = saved === "dark" || (!saved && systemPrefersDark);
    applyTheme(initialDark, false);
    setDarkMode(initialDark);
  }, []);

const applyTheme = (isDark: boolean, animate = true) => {
  const root = document.documentElement;

  if (isDark) {
    // 🌙 Deep Emerald → Blue Gradient Dark Theme
    root.style.setProperty(
      "--background",
      "linear-gradient(to bottom right, #0A1A17 0%, #10594A 40%, #0A3D66 100%)"
    );
    root.style.setProperty("--foreground", "#E9F7EF");
    root.style.setProperty("--navbar-bg", "rgba(12, 35, 31, 0.8)");
    root.style.setProperty("--glossy-bg", "rgba(15, 40, 45, 0.5)");
    root.style.setProperty("--skin", "#A9EAB5");

    // 🌌 Folder Gradient (dark emerald → teal → blue)
    root.style.setProperty("--folder-gradient-from", "#064E3B");
    root.style.setProperty("--folder-gradient-via", "#036564");
    root.style.setProperty("--folder-gradient-to", "#0B4C61");
    root.style.setProperty("--folder-border", "rgba(16, 185, 129, 0.4)");
    root.style.setProperty("--folder-shadow", "rgba(0, 0, 0, 0.65)");

    // 🌙 Folder Flap (lighter emerald glow)
    root.style.setProperty("--flap-gradient-from", "#10B981");
    root.style.setProperty("--flap-gradient-to", "#06B6D4");
    root.style.setProperty("--flap-border", "rgba(16, 185, 129, 0.5)");
    root.style.setProperty("--flap-shadow", "rgba(0, 0, 0, 0.6)");

    // ✨ Button & accent tones for dark theme
    root.style.setProperty("--button-gradient-from", "#10B981");
    root.style.setProperty("--button-gradient-to", "#06B6D4");
    root.style.setProperty("--button-glow", "0 0 35px rgba(16, 185, 129, 0.8)");
    root.style.setProperty("--highlight-ring", "rgba(255,255,255,0.3)");

     // 🌙 Project selection highlight (emerald-glow)
    root.style.setProperty("--project-selected-bg", "rgba(16, 185, 129, 0.25)");
    root.style.setProperty("--project-selected-ring", "rgba(52, 211, 153, 0.4)");
    root.style.setProperty("--project-hover-bg", "rgba(255, 255, 255, 0.05)");
  } else {
    // 🌤️ Light Theme (unchanged)
    root.style.setProperty("--background", "#E6E1D3");
    root.style.setProperty("--foreground", "#1C1C1C");
    root.style.setProperty("--navbar-bg", "#C0B9A0");
    root.style.setProperty("--glossy-bg", "#C0B9A0");
    root.style.setProperty("--skin", "#8FBC8B");

     // 🌿 Folder Gradient (mint → light teal → aqua)
    root.style.setProperty("--folder-gradient-from", "#C0B9A0");
    root.style.setProperty("--folder-gradient-via", "#D2CBB8");
    root.style.setProperty("--folder-gradient-to", "#b0a888ff");
    root.style.setProperty("--folder-border", "rgba(90, 90, 90, 0.25)");
    root.style.setProperty("--folder-shadow", "rgba(0, 0, 0, 0.25)");

    // 🌤️ Folder Flap (light paper-like reflection)
    root.style.setProperty("--flap-gradient-from", "#EDE9D5");
    root.style.setProperty("--flap-gradient-to", "#D8D2BE");
    root.style.setProperty("--flap-border", "rgba(100, 100, 100, 0.2)");
    root.style.setProperty("--flap-shadow", "rgba(0, 0, 0, 0.15)");

    // ☀️ Button & accent tones for light theme
    root.style.setProperty("--button-gradient-from", "#D7CBB2");
    root.style.setProperty("--button-gradient-to", "#c2a96eff");
    root.style.setProperty("--button-glow", "0 0 25px rgba(150, 150, 150, 0.35)");
    root.style.setProperty("--highlight-ring", "rgba(0,0,0,0.2)");

    // ☀️ Project selection highlight (beige-glow)
    root.style.setProperty("--project-selected-bg", "rgba(216, 210, 190, 0.55)");
    root.style.setProperty("--project-selected-ring", "rgba(130, 120, 100, 0.35)");
    root.style.setProperty("--project-hover-bg", "rgba(240, 236, 224, 0.6)");

  }

  if (animate) showTransitionEmoji(isDark);
};



  const showTransitionEmoji = (isDark: boolean) => {
    const emoji = document.createElement("div");
    emoji.classList.add("theme-transition");
    emoji.textContent = isDark ? "🌙" : "☀️";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 2200); // remove after animation ends
  };

  const toggleTheme = () => {
    const newDark = !darkMode;
    localStorage.setItem("theme", newDark ? "dark" : "light");
    setDarkMode(newDark);
    applyTheme(newDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-500 overflow-hidden 
        ${darkMode ? "bg-gray-800" : "bg-yellow-300"}`}
    >
      {/* Slider knob */}
      <div
        className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-500 ease-in-out 
          ${darkMode ? "translate-x-8" : "translate-x-1"}`}
      />

      {/* Sun / Moon icons inside toggle */}
      <div className="absolute inset-0 flex justify-between items-center px-2">
        <div
          className={`text-white text-xs transition-all duration-500 transform 
            ${darkMode ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          ☾
        </div>
        <div
          className={`text-orange-500 text-xs transition-all duration-500 transform 
            ${darkMode ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"}`}
        >
          ☀
        </div>
      </div>
    </button>
  );
}

import SkillCircle from "@/components/SkillCircle";

export default function Skills() {
  const frontendSkills = [
    { name: "React.js", percentage: 90, color: "#61DAFB", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", percentage: 85, color: "#000000", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TailwindCSS", percentage: 90, color: "#38BDF8", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Bootstrap", percentage: 95, color: "#7952B3", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 90, color: "#68A063", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", percentage: 85, color: "#000000", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Spring Boot", percentage: 88, color: "#6DB33F", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Docker", percentage: 85, color: "#0db7ed", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MySQL", percentage: 90, color: "#00758F", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ];

  const aiSkills = [
    { name: "Python", percentage: 95, color: "#3776AB", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", percentage: 80, color: "#FF6F00", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", percentage: 75, color: "#EE4C2C", imageSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  ];

  return (
    <div id="skills" className="glossy px-4 sm:px-6 md:px-10 py-10 m-4 sm:m-6 md:m-10 rounded-2xl">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--foreground)] mb-2">
          Skills
        </h1>
        <p className="text-sm sm:text-base opacity-70">
          Technologies and tools I work with across the stack
        </p>
      </div>

      {/* -------- Frontend -------- */}
      <div className="text-center flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[var(--foreground)]">Frontend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {frontendSkills.map((skill, i) => (
            <SkillCircle key={i} {...skill} />
          ))}
        </div>
      </div>

      {/* -------- Backend -------- */}
      <div className="text-center flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[var(--foreground)]">Backend</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {backendSkills.map((skill, i) => (
            <SkillCircle key={i} {...skill} />
          ))}
        </div>
      </div>

      {/* -------- Machine Learning -------- */}
      <div className="text-center flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[var(--foreground)]">AI Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {aiSkills.map((skill, i) => (
            <SkillCircle key={i} {...skill} />
          ))}
        </div>
      </div>

      {/* -------- Additional Skills Tags -------- */}
      <div className="mt-12 text-center text-[var(--foreground)]">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Skill Set</h3>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs sm:text-sm opacity-90">
          {[
            "HTML5", "CSS3", "JavaScript", "Redux", "Servlets", "JSPs",
            "Hibernate", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "NLP", "Gen AI"
          ].map((item, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-1 border border-gray-500 rounded-full hover:bg-[var(--button-gradient-to)] hover:text-white transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

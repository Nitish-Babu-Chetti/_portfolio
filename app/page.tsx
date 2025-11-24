import ContactSection from "@/components/ContactSection";
import Footer from "@/components/footer";
import HomePage from "@/components/homePage";
import Navbar from "@/components/navbar";
import Experience from "@/components/professionalExperience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div
      className="min-h-screen text-[var(--foreground)] transition-colors duration-700"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <Navbar />
      <HomePage/>
      <Skills/>
      <Experience/>
      <Projects/>
      <ContactSection/>
      <Footer/>

    </div>
  );
}

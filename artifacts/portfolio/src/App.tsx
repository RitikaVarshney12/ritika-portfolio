import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

function SectionDivider() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-px h-8 bg-gradient-to-b from-transparent via-violet-500/20 to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080d] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

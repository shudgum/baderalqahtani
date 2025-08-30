import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SectionDivider variant="wave" />
        <Mission />
        <SectionDivider variant="diagonal" />
        <About />
        <SectionDivider variant="dots" />
        <Experience />
        <SectionDivider variant="gradient" />
        <Projects />
        <SectionDivider variant="wave" />
        <Skills />
        <SectionDivider variant="diagonal" />
        <Services />
        <SectionDivider variant="dots" />
        <Contact />
      </main>
      
    </div>
  );
};

export default Index;

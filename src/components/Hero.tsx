import { ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("mission");
    nextSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80"></div>
      </div>

      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Simple gradient overlay */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-radial from-secondary/5 to-transparent rounded-full opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Bader Alqahtnai
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Bridging IoT, AI, and Green Innovation for Vision 2030
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="gradient-hero text-white hover:opacity-90 transition-opacity duration-200" onClick={() => document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth"
        })}>
            Explore My Work
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          
          <Button variant="outline" size="lg" className="glass border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
            Download CV
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="glass rounded-xl p-6 border border-primary/10 hover:scale-105 transition-transform duration-200">
            <div className="text-2xl font-bold text-primary">R&D</div>
            <div className="text-sm text-muted-foreground">Research & Development</div>
          </div>
          <div className="glass rounded-xl p-6 border border-secondary/10 hover:scale-105 transition-transform duration-200">
            <div className="text-2xl font-bold text-secondary">MSc</div>
            <div className="text-sm text-muted-foreground">IoT & Embedded Systems</div>
          </div>
          <div className="glass rounded-xl p-6 border border-accent/10 hover:scale-105 transition-transform duration-200">
            <div className="text-2xl font-bold text-accent">Vision 2030</div>
            <div className="text-sm text-muted-foreground">Green Innovation</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-300">
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>;
}
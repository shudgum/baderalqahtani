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

      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 animate-morph-bg blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/15 to-accent/15 animate-morph-bg blur-3xl" style={{ animationDelay: "5s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-t from-accent/20 to-primary/20 animate-morph-bg blur-3xl" style={{ animationDelay: "10s" }}></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle animate-particle-rise"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary to-transparent rounded-full animate-glow-pulse opacity-30"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-tl from-accent to-transparent rounded-full animate-glow-pulse opacity-40" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Enhanced Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up-fade">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight overflow-hidden">
            <span className="text-gradient animate-gradient-x bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto]">
              Bader Alqahtnai
            </span>
          </h1>
          
          {/* Dynamic subtitle with typewriter effect */}
          <div className="relative">
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              Bridging IoT, AI, and Green Innovation for Vision 2030
            </p>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-30 animate-glow-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-scale" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="gradient-hero text-white hover:shadow-glow hover-lift transition-all duration-300 group relative overflow-hidden" onClick={() => document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth"
        })}>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            Explore My Work
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300" />
          </Button>
          
          <Button variant="outline" size="lg" className="glass glass-hover border-glass-border hover:shadow-glow hover-glow transition-all duration-300 group relative overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500"></span>
            <span className="relative z-10">Download CV</span>
            <Download className="relative z-10 ml-2 h-4 w-4 group-hover:translate-y-1 group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="glass glass-hover rounded-xl p-6 border border-glass-border hover-lift hover-glow transition-all duration-300 group animate-slide-up-fade" style={{ animationDelay: "0.9s" }}>
            <div className="text-2xl font-bold text-gradient group-hover:animate-glow-pulse">R&D</div>
            <div className="text-sm text-muted-foreground">Research & Development</div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="glass glass-hover rounded-xl p-6 border border-glass-border hover-lift hover-glow transition-all duration-300 group animate-slide-up-fade" style={{ animationDelay: "1.1s" }}>
            <div className="text-2xl font-bold text-gradient group-hover:animate-glow-pulse">MSc</div>
            <div className="text-sm text-muted-foreground">IoT & Embedded Systems</div>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="glass glass-hover rounded-xl p-6 border border-glass-border hover-lift hover-glow transition-all duration-300 group animate-slide-up-fade" style={{ animationDelay: "1.3s" }}>
            <div className="text-2xl font-bold text-gradient group-hover:animate-glow-pulse">Vision 2030</div>
            <div className="text-sm text-muted-foreground">Green Innovation</div>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button onClick={scrollToNext} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-300">
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>;
}
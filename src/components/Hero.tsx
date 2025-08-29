import { ChevronDown, Download, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/assets/hero-bg.jpg"

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("mission")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient">Your Name</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Bridging IoT, AI, and Green Innovation for Vision 2030
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="gradient-hero text-white hover:shadow-glow transition-all duration-300 group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore My Work
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="glass glass-hover border-glass-border hover:shadow-glow transition-all duration-300 group"
          >
            Download CV
            <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="glass glass-hover rounded-xl p-6 border border-glass-border hover:shadow-card transition-all duration-300">
            <div className="text-2xl font-bold text-gradient">3+</div>
            <div className="text-sm text-muted-foreground">Aramco Projects</div>
          </div>
          <div className="glass glass-hover rounded-xl p-6 border border-glass-border hover:shadow-card transition-all duration-300">
            <div className="text-2xl font-bold text-gradient">MSc</div>
            <div className="text-sm text-muted-foreground">IoT & Embedded Systems</div>
          </div>
          <div className="glass glass-hover rounded-xl p-6 border border-glass-border hover:shadow-card transition-all duration-300">
            <div className="text-2xl font-bold text-gradient">Vision 2030</div>
            <div className="text-sm text-muted-foreground">Green Innovation</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-muted-foreground hover:text-foreground transition-colors duration-300"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  )
}
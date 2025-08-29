import { Target, Eye } from "lucide-react"

export function Mission() {
  return (
    <section id="mission" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Mission & Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Driving sustainable innovation through technology for a better tomorrow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group">
            <div className="glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-500 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Mission</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                To create added-value in the market by enabling local talent and creating new solutions 
                tailored for local needs. Empowering communities through innovative technology that addresses 
                real-world challenges while fostering sustainable growth.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Local Talent</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Innovation</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Market Value</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group">
            <div className="glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-500 h-full">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-secondary/10 mr-4 group-hover:bg-secondary/20 transition-colors duration-300">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Vision</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be a leader in the IoT / AI industry with research and applicable solutions tailored 
                to Kingdom Vision 2030, especially in renewable and green solutions. Pioneering sustainable 
                technology that transforms how we interact with our environment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">IoT Leadership</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">Vision 2030</span>
                <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">Green Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vision 2030 Highlight */}
        <div className="mt-12 text-center">
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 text-gradient">
              Aligned with Kingdom Vision 2030
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Contributing to Saudi Arabia's transformation through sustainable technology solutions, 
              renewable energy innovation, and digital transformation initiatives that support the 
              Kingdom's ambitious goals for economic diversification and environmental sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
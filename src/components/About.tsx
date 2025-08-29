import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about bridging technology and sustainability for meaningful impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am currently pursuing a Master's degree in IoT & Embedded Systems at King Fahd University 
              of Petroleum & Minerals (KFUPM), building upon my Bachelor's degree in Information Technology 
              from Saudi Electronic University.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey combines technical expertise with environmental consciousness, focusing on creating 
              innovative solutions that align with Saudi Arabia's Vision 2030 goals. I believe in the power 
              of technology to drive sustainable change and create lasting positive impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary">IoT Systems</span>
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary">AI Innovation</span>
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent-foreground">Green Tech</span>
              <span className="px-4 py-2 rounded-full bg-success/10 text-success-foreground">Sustainability</span>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Master's Degree */}
            <div className="glass glass-hover rounded-2xl p-6 border border-glass-border hover:shadow-card transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-1">
                    Master's in IoT & Embedded Systems
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">King Fahd University of Petroleum & Minerals</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Current</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Advanced studies in IoT architecture, embedded systems design, and AI integration 
                    for sustainable technology solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Bachelor's Degree */}
            <div className="glass glass-hover rounded-2xl p-6 border border-glass-border hover:shadow-card transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <GraduationCap className="h-6 w-6 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-secondary mb-1">
                    Bachelor's in Information Technology
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Saudi Electronic University</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Completed</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive foundation in information systems, software development, 
                    and digital technology applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
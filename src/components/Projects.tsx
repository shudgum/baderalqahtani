import { Lightbulb, Wind, Activity, Droplets, Printer, Gauge } from "lucide-react"

const projects = [
  {
    title: "Smart Light with Presence Sensor",
    description: "Intelligent lighting system that automatically adjusts based on occupancy",
    icon: Lightbulb,
    tags: ["IoT", "Sensors", "Energy Efficiency"],
    color: "primary"
  },
  {
    title: "Air Quality Monitor",
    description: "Real-time air quality monitoring system with digital display and data logging capabilities",
    icon: Wind,
    tags: ["Environmental", "Monitoring", "Display"],
    color: "secondary"
  },
  {
    title: "Vibration Monitoring Sensor",
    description: "Vibration detection alarm system for real-time alerts and safety monitoring",
    icon: Activity,
    tags: ["Industrial IoT", "Predictive Analytics", "Sensors"],
    color: "accent"
  },
  {
    title: "Soil Moisture Sensor",
    description: "Smart agriculture solution for optimal irrigation management and crop health monitoring",
    icon: Droplets,
    tags: ["AgTech", "Smart Farming", "Water Management"],
    color: "success"
  },
  {
    title: "3D Printing & Design",
    description: "Custom prototyping and design solutions for various IoT enclosures and mechanical components",
    icon: Printer,
    tags: ["3D Design", "Prototyping", "Manufacturing"],
    color: "primary"
  },
  {
    title: "Custom IoT Solutions",
    description: "Tailored IoT systems for specific environmental and industrial monitoring applications",
    icon: Gauge,
    tags: ["Custom Development", "IoT Architecture", "System Integration"],
    color: "secondary"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on innovation through practical IoT solutions and sustainable technology development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="glass rounded-2xl p-6 border border-primary/10 hover:scale-105 transition-all duration-200 h-full">
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="p-4 rounded-2xl bg-primary/10 mb-6 w-fit group-hover:bg-primary/20 transition-colors duration-200">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Philosophy */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Innovation Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project represents a commitment to solving real-world challenges through practical IoT solutions. 
              From smart environmental monitoring to industrial applications, each innovation contributes to building 
              a more connected and sustainable future aligned with Vision 2030 objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
import { Building2, Briefcase, TreePine, Zap, Waves } from "lucide-react"

const experiences = [
  {
    role: "General Manager",
    company: "Green Groves Environmental Services",
    period: "Present",
    type: "leadership",
    icon: Building2,
    projects: [
      {
        title: "Algae Research Test-bed Facility",
        description: "Built the first algae research test-bed facility in the Middle East for bio-fuel & bio-char research",
        icon: TreePine,
        highlight: "First in Middle East"
      },
      {
        title: "Climatree Development",
        description: "Developed a solar-powered artificial tree that purifies air and can be monitored remotely",
        icon: Zap,
        highlight: "Solar Innovation"
      },
      {
        title: "Red Sea Seaweed Research",
        description: "Researched and developed solutions for Red Sea seaweed growth & production optimization",
        icon: Waves,
        highlight: "Marine Innovation"
      }
    ]
  },
  {
    role: "Business Developer",
    company: "Green Groves Environmental Services",
    period: "Last Employment",
    type: "development",
    icon: Briefcase,
    achievements: [
      "Expanded business networks across environmental technology sector",
      "Secured strategic partnerships with key industry players",
      "Supported complex negotiations for major project acquisitions",
      "Conducted comprehensive market analysis for sustainable solutions"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading environmental innovation through strategic management and pioneering research
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-glow z-10"></div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-500 animate-slide-up">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className="p-3 rounded-full bg-primary/10 mr-4">
                        <exp.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                        <p className="text-lg text-muted-foreground">{exp.company}</p>
                        <span className="text-sm text-accent font-medium">{exp.period}</span>
                      </div>
                    </div>

                    {/* Projects */}
                    {exp.projects && (
                      <div className="space-y-4 mb-6">
                        <h4 className="text-lg font-semibold text-secondary">Key Aramco Projects:</h4>
                        {exp.projects.map((project, pIndex) => (
                          <div key={pIndex} className="flex items-start space-x-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                            <div className="p-2 rounded-lg bg-secondary/10">
                              <project.icon className="h-5 w-5 text-secondary" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 mb-1">
                                <h5 className="font-semibold">{project.title}</h5>
                                <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                                  {project.highlight}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements && (
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-secondary">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, aIndex) => (
                            <li key={aIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Summary */}
        <div className="mt-16 glass rounded-2xl p-8 border border-glass-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Environmental Impact</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Through innovative research and strategic leadership, contributed to advancing sustainable 
            technology solutions that align with Saudi Arabia's Vision 2030 environmental goals, 
            pioneering green innovation in the Middle East region.
          </p>
        </div>
      </div>
    </section>
  )
}
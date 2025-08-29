import { BarChart3, Users, TrendingUp, Lightbulb, Code, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Business Intelligence",
    icon: BarChart3,
    skills: [
      { name: "Data Analytics", level: 90 },
      { name: "Market Research", level: 85 },
      { name: "Strategic Planning", level: 88 },
      { name: "Performance Metrics", level: 82 }
    ],
    color: "primary"
  },
  {
    title: "Business Development",
    icon: TrendingUp,
    skills: [
      { name: "Partnership Development", level: 95 },
      { name: "Negotiation", level: 88 },
      { name: "Market Analysis", level: 90 },
      { name: "Network Expansion", level: 92 }
    ],
    color: "secondary"
  },
  {
    title: "Solutions Development",
    icon: Lightbulb,
    skills: [
      { name: "IoT Architecture", level: 85 },
      { name: "System Design", level: 80 },
      { name: "Innovation Strategy", level: 90 },
      { name: "Technology Integration", level: 88 }
    ],
    color: "accent"
  },
  {
    title: "Talent Development",
    icon: Users,
    skills: [
      { name: "Team Leadership", level: 92 },
      { name: "Mentoring", level: 88 },
      { name: "Capacity Building", level: 85 },
      { name: "Knowledge Transfer", level: 90 }
    ],
    color: "success"
  }
]

const technicalSkills = [
  { name: "Python", level: 85, icon: Code },
  { name: "Data Analysis", level: 90, icon: Database },
  { name: "IoT Development", level: 80, icon: Lightbulb },
  { name: "Business Intelligence", level: 95, icon: BarChart3 }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Combining technical proficiency with strategic business acumen for comprehensive solution delivery
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full bg-${category.color}/10 mr-4`}>
                  <category.icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className={`text-sm text-${category.color}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 bg-gradient-to-r from-${category.color} to-${category.color}-light rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Skills Showcase */}
        <div className="glass rounded-2xl p-8 border border-glass-border">
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Core Technical Competencies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative mb-4">
                  {/* Circular Progress */}
                  <div className="w-20 h-20 mx-auto relative">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="hsl(var(--muted))"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="40"
                        cy="40"
                        r="35"
                        stroke="hsl(var(--primary))"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 35}`}
                        strokeDashoffset={`${2 * Math.PI * 35 * (1 - skill.level / 100)}`}
                        className="transition-all duration-1000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-sm mb-1">{skill.name}</h4>
                <p className="text-xs text-muted-foreground">{skill.level}% Proficiency</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Philosophy */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Continuous Learning</h3>
            <p className="text-lg text-muted-foreground">
              In the rapidly evolving landscape of IoT and AI, continuous learning and adaptation are essential. 
              These skills represent a foundation that grows stronger with each project, each challenge, 
              and each opportunity to create meaningful technological solutions for a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
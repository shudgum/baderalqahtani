import { BarChart3, Database, Palette, MessageSquare, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights that drive strategic decision-making and business growth through advanced analytics and visualization.",
    icon: BarChart3,
    features: [
      "Data Analytics & Visualization",
      "Performance Metrics & KPIs",
      "Market Intelligence Reports",
      "Strategic Planning Support"
    ],
    color: "primary"
  },
  {
    title: "Data Analysis",
    description: "Comprehensive data analysis services that uncover patterns, trends, and opportunities within your business data ecosystem.",
    icon: Database,
    features: [
      "Statistical Analysis",
      "Predictive Modeling",
      "Data Mining & Processing",
      "Custom Reporting Solutions"
    ],
    color: "secondary"
  },
  {
    title: "Web Design",
    description: "Modern, responsive web solutions that blend aesthetic appeal with functional excellence and user-centered design principles.",
    icon: Palette,
    features: [
      "Responsive Web Development",
      "UI/UX Design",
      "Performance Optimization",
      "Accessibility Standards"
    ],
    color: "accent"
  },
  {
    title: "Consultancy",
    description: "Strategic guidance and expert consultation for technology adoption, business transformation, and sustainable innovation initiatives.",
    icon: MessageSquare,
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "Innovation Consulting",
      "Vision 2030 Alignment"
    ],
    color: "success"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business forward through technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-2xl bg-${service.color}/10 mr-4 group-hover:bg-${service.color}/20 transition-colors duration-300`}>
                  <service.icon className={`h-8 w-8 text-${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-${service.color}`}></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>


              {/* Hover Effect Overlay */}
              <div className="absolute top-0 left-0 right-0 bottom-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${service.color}/5 to-transparent`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Philosophy */}
        <div className="mt-16 glass rounded-2xl p-8 border border-glass-border text-center">
          <h3 className="text-2xl font-bold mb-4 text-gradient">
            Tailored Solutions for Vision 2030
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Every service is designed with Saudi Arabia's Vision 2030 in mind, focusing on sustainable innovation, 
            digital transformation, and local capacity building. From data-driven insights to cutting-edge web solutions, 
            we help organizations navigate the future with confidence and strategic clarity.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 gradient-hero text-white rounded-lg hover:shadow-glow transition-all duration-300">
              Schedule Consultation
            </button>
            <button className="px-6 py-3 glass glass-hover border border-glass-border rounded-lg hover:shadow-card transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
    
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next innovative project? Let's discuss how we can create sustainable solutions together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">your.email@example.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+966 XXX XXX XXXX</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-accent/10">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Dhahran, Saudi Arabia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-glass-border">
                <p className="font-medium mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:shadow-glow transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-secondary hover:shadow-glow transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* CV Download */}
              <div className="mt-6">
                <Button 
                  variant="outline" 
                  className="w-full glass glass-hover border-glass-border hover:shadow-card group"
                >
                  <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Values Card */}
            <div className="glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-secondary">Values & Interests</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Environmental Sustainability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-muted-foreground">Digital Transformation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-muted-foreground">Innovation & Research</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-muted-foreground">3D Printing & Design</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass glass-hover rounded-2xl p-8 border border-glass-border hover:shadow-card transition-all duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-glass-border focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass border-glass-border focus:ring-primary"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass border-glass-border focus:ring-primary resize-none"
                  placeholder="Tell me about your project or how we can collaborate..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-hero text-white hover:shadow-glow transition-all duration-300 group"
                size="lg"
              >
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center glass rounded-2xl p-8 border border-glass-border">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Innovate Together?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Whether you're looking to implement IoT solutions, analyze business data, or develop sustainable 
            technology initiatives aligned with Vision 2030, I'm here to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="gradient-hero text-white hover:shadow-glow transition-all duration-300">
              Start a Project
            </Button>
            <Button variant="outline" className="glass glass-hover border-glass-border hover:shadow-card transition-all duration-300">
              Schedule Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
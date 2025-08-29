import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
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

        <div className="max-w-md mx-auto">
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
                  <p className="text-muted-foreground">baq100@gmail.com</p>
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
                  href="https://www.linkedin.com/in/baderalqahtani"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary hover:shadow-glow transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
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
        </div>
      </div>
    </section>
  )
}
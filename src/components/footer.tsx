export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-20 pointer-events-none animate-float" />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-20 pointer-events-none animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div className="space-y-4 group">
            <h3 className="text-primary font-semibold text-base sm:text-lg group-hover:text-accent transition-colors">
              Eslem Romdhane
            </h3>
            <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
              Software Engineer and AI Researcher passionate about building intelligent systems and innovative
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#home"
                  className="text-foreground/70 hover:text-primary transition inline-flex items-center gap-2"
                >
                  <span className="inline-block w-0 group-hover:w-2 transition-all" />
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-base sm:text-lg">Connect</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://github.com/EslemRomdhane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/eslem-romdhane"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:eslem.romdhan@gmail.com" className="text-foreground/70 hover:text-primary transition">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <p className="text-center text-foreground/60 text-xs sm:text-sm">
            © {currentYear} Eslem Romdhane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

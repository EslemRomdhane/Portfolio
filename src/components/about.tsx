export default function About() {
  return (
    <section id="about" className="min-h-screen bg-background py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float" />
      <div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="space-y-2 animate-fade-in-up">
          <h2 className="text-primary font-semibold text-xs sm:text-sm">ABOUT</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">About Me</h1>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              I'm a third-year computer science student at École Pluridisciplinaire Internationale (EPI), specializing
              in software engineering with a strong interest in artificial intelligence.
            </p>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              Currently seeking a 6-month internship from February 2026 in software development and AI. I'm conducting
              research at the LABTIM laboratory focusing on deep learning, computer vision, and intelligent systems for
              medical image analysis.
            </p>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              I bring strong teamwork, adaptability, and leadership qualities. I'm curious, rigorous, and motivated to
              apply my skills to concrete AI systems and software solutions.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">🎓 Education</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="border-l-4 border-primary pl-3 sm:pl-4 group hover:pl-5 sm:hover:pl-6 transition-all hover:bg-primary/5 p-4 rounded-r-lg">
                <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Engineering Degree in Computer Science
                </h4>
                <p className="text-xs sm:text-sm text-foreground/60">
                  École Pluridisciplinaire Internationale (EPI) • 2024 - Present
                </p>
                <p className="text-xs sm:text-sm text-foreground/60">Specialization: Software Engineering</p>
              </div>
              <div className="border-l-4 border-accent pl-3 sm:pl-4 group hover:pl-5 sm:hover:pl-6 transition-all hover:bg-accent/5 p-4 rounded-r-lg">
                <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  Master's in Computer Science Research
                </h4>
                <p className="text-xs sm:text-sm text-foreground/60">
                  Institut Supérieur d'Informatique et de Mathématiques (ISIMM) • 2023 - 2025
                </p>
                <p className="text-xs sm:text-sm text-foreground/60">Specialization: Software Engineering</p>
              </div>
              <div className="border-l-4 border-secondary pl-3 sm:pl-4 group hover:pl-5 sm:hover:pl-6 transition-all hover:bg-secondary/5 p-4 rounded-r-lg">
                <h4 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-secondary transition-colors">
                  Bachelor's in Computer Science
                </h4>
                <p className="text-xs sm:text-sm text-foreground/60">
                  Institut Supérieur d'Informatique et de Mathématiques (ISIMM) • 2020 - 2023
                </p>
                <p className="text-xs sm:text-sm text-foreground/60">Specialization: Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

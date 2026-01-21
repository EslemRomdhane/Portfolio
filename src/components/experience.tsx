export default function Experience() {
  const experiences = [
    {
      role: "Summer Intern",
      company: "Mobelite Labs",
      period: "July 2025 - August 2025",
      description:
        "Developed AI-assisted medical collaboration web app with React/TypeScript, MongoDB, and FastAPI. Integrated BERT Transformer for intelligent reports.",
      technologies: ["React", "TypeScript", "MongoDB", "FastAPI", "Hugging Face"],
    },
    {
      role: "Research Project",
      company: "Laboratory of Medical Technology and Imaging (LABTIM)",
      period: "March 2025 - October 2025",
      description:
        "Developed neuro-symbolic hybrid approach for coronary artery annotation combining GNN, YOLOv10, and symbolic reasoning.",
      technologies: ["Python", "PyTorch Geometric", "DGL", "YOLOv10"],
    },
    {
      role: "Summer Research Intern",
      company: "Laboratory of Medical Technology and Imaging (LABTIM)",
      period: "July 2024 - August 2024",
      description:
        "Detection and segmentation of coronary arteries from X-ray angiography. Implemented YOLO, Faster R-CNN, and TransUNet models.",
      technologies: ["Python", "PyTorch Lightning", "YOLO", "Faster R-CNN", "TransUNet"],
    },
    {
      role: "Graduation Project",
      company: "Mobelite Labs",
      period: "February 2023 - June 2023",
      description:
        "Developed tournament organization and video game streaming platform using MERN Stack with YouTube/Twitch integration.",
      technologies: ["MERN Stack", "YouTube API", "Twitch API"],
    },
  ]

  return (
    <section
      id="experience"
      className="min-h-screen bg-background py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 relative"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="space-y-2 animate-fade-in-up">
          <h2 className="text-primary font-semibold text-xs sm:text-sm">EXPERIENCE</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Professional Journey</h1>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 sm:p-6 hover:border-primary/50 hover:shadow-lg transition-all animate-fade-in-up group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="space-y-2 mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-primary">{exp.role}</h3>
                  <div className="space-y-1">
                    <p className="font-semibold text-sm sm:text-base text-foreground">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-foreground/60">{exp.period}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-foreground/70 mb-3 sm:mb-4 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-card border border-border rounded-lg p-4 sm:p-6 animate-fade-in-up group relative overflow-hidden"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10">
            <h3 className="text-base sm:text-lg font-bold text-primary mb-2 sm:mb-3">Ready for New Opportunities</h3>
            <p className="text-xs sm:text-sm text-foreground/70">
              Eager to apply my experience and expertise to solve challenging problems in AI and software development.
              Open to internship opportunities in software engineering and AI research.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

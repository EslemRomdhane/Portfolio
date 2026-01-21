export default function Skills() {
  const skillCategories = [
    {
      name: "AI/ML",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Keras",
        "YOLOv10",
        "Faster R-CNN",
        "Transformers",
        "RAG",
        "Deep Learning",
        "Computer Vision",
      ],
    },
    {
      name: "Web/Fullstack",
      skills: ["React", "Node.js", "Express", "FastAPI", "Spring Boot", "MongoDB", "MySQL", "Next.js"],
    },
    {
      name: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C", "R", "PHP", "Swift"],
    },
    {
      name: "Data Science",
      skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "OpenCV"],
    },
    {
      name: "Cloud/DevOps",
      skills: ["AWS", "Azure", "Docker", "Jenkins", "Git", "GitHub"],
    },
    {
      name: "Mobile",
      skills: ["Android (Java)", "iOS (Swift)", "Flutter"],
    },
  ]

  return (
    <section id="skills" className="min-h-screen bg-card py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
        <div className="space-y-2 animate-fade-in-up">
          <h2 className="text-primary font-semibold text-xs sm:text-sm">SKILLS</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Technical Expertise</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.name}
              className="relative bg-background border border-border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all animate-fade-in-up group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-primary font-bold text-base sm:text-lg mb-3 sm:mb-4">{category.name}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="text-foreground/70 text-xs sm:text-sm flex items-center hover:text-primary transition-colors"
                    >
                      <span className="text-accent mr-2">▸</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bg-background border border-border rounded-lg p-4 sm:p-6 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-primary font-bold text-base sm:text-lg mb-3 sm:mb-4">Certifications</h3>
          <div className="space-y-2 text-xs sm:text-sm text-foreground/70">
            <p>✓ Fondamentaux du Deep Learning — NVIDIA</p>
            <p>✓ Oracle Cloud Infrastructure 2025 Certified Generative AI Professional</p>
            <p>✓ Oracle Data Platform 2025 Certified Foundations Associate</p>
            <p>✓ Microsoft Azure AZ-900</p>
            <p>✓ AWS Cloud Foundations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

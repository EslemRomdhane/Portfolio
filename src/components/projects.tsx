export default function Projects() {
  const projects = [
    {
      title: "Neuro-Symbolic Approach for Coronary Arteries Annotation",
      description:
        "Hybrid approach combining GNN (GCN & GAT), YOLOv10 and symbolic reasoning for medical image analysis.",
      tech: ["Python", "PyTorch Geometric", "DGL", "YOLOv10"],
      featured: true,
    },
    {
      title: "Medical Collaboration Platform with AI",
      description:
        "Web application with AI-assisted medical reports using BERT Transformer and automatic PDF generation.",
      tech: ["React", "TypeScript", "MongoDB", "FastAPI", "Hugging Face"],
      featured: true,
    },
    {
      title: "Real-Time Medical Image Detection",
      description:
        "Detection and segmentation of coronary arteries from X-ray angiography images using YOLO, Faster R-CNN, and TransUNet.",
      tech: ["Python", "PyTorch Lightning", "YOLO", "Faster R-CNN"],
      featured: true,
    },
    {
      title: "Tournament Platform with Live Streaming",
      description:
        "Full-stack platform for organizing tournaments and live streaming video games with YouTube/Twitch integration.",
      tech: ["MERN Stack", "YouTube API", "Twitch API"],
      featured: false,
    },
    {
      title: "Recruitment Management Platform",
      description:
        "Online recruitment platform for candidates and companies with job offers, applications, and interview management.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      featured: false,
    },
    {
      title: "AI Task Management Application",
      description:
        "Enterprise task management with intelligent assistance using RAG and Cohere, real-time collaboration, and automated testing.",
      tech: ["React", "Node.js", "MongoDB", "Cohere", "Socket.io", "Selenium"],
      featured: false,
    },
    {
      title: "Plant Disease Detection Mobile App",
      description:
        "Android application for identifying plants and diagnosing diseases via image analysis with TrefleAPI integration.",
      tech: ["Java", "Android Studio", "RoomDB", "TrefleAPI"],
      featured: false,
    },
    {
      title: "License Plate Detection System",
      description: "Real-time detection and recognition of license plates from video streams using YOLOv8 and OCR.",
      tech: ["Python", "YOLOv8", "OpenCV", "Tesseract OCR"],
      featured: false,
    },
    {
      title: "Multi-Tool AI Agent",
      description:
        "Intelligent AI agent with web search, document analysis, and conversational memory using RAG and Llama 3.",
      tech: ["Streamlit", "LangChain", "Groq API", "FAISS"],
      featured: false,
    },
    {
      title: "OCR-GPT Text Extraction",
      description: "Automatic text extraction from scanned images and PDFs using OCR and LLM integration.",
      tech: ["Tesseract OCR", "Python", "Streamlit"],
      featured: false,
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-card py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 relative"
    >
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float" />
      <div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="space-y-2 animate-fade-in-up">
          <h2 className="text-primary font-semibold text-xs sm:text-sm">PROJECTS</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h1>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative border rounded-lg p-4 sm:p-6 transition-all animate-fade-in-up group overflow-hidden ${
                project.featured
                  ? "bg-background border-primary/30 hover:border-primary/60 hover:shadow-lg"
                  : "bg-background border-border hover:border-primary/30 hover:shadow-lg"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-xl font-bold text-foreground">{project.title}</h3>
                  {project.featured && (
                    <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                      FEATURED
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground/70 mb-3 sm:mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/30 hover:bg-primary/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

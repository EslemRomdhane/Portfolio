"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        alert("Failed to send email: " + (data.error || "Unknown error"))
      }
    } catch (err) {
      console.error(err)
      alert("An error occurred while sending the email.")
    } finally {
      setLoading(false)
    }
  }


  return (
    <section
      id="contact"
      className="min-h-screen bg-card py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-32 relative"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        <div className="space-y-2 animate-fade-in-up">
          <h2 className="text-primary font-semibold text-xs sm:text-sm">CONTACT</h2>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Get In Touch</h1>
          <p className="text-sm sm:text-base text-foreground/70">Let's discuss your ideas and see how I can help</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up">
            <div className="bg-background border border-border rounded-lg p-4 sm:p-6 group hover:border-primary/50 hover:shadow-lg transition-all relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-primary font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <p className="text-xs sm:text-sm text-foreground/60 mb-1">Email</p>
                    <a
                      href="mailto:eslem.romdhan@gmail.com"
                      className="text-primary hover:underline text-sm sm:text-base break-all"
                    >
                      eslem.romdhan@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-foreground/60 mb-1">Phone</p>
                    <a href="tel:+21655516598" className="text-primary hover:underline text-sm sm:text-base">
                      +216 55 516 598
                    </a>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-foreground/60 mb-1">Location</p>
                    <p className="text-sm sm:text-base text-foreground">Monastir, Tunisia</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-foreground/60 mb-1">Status</p>
                    <p className="text-sm sm:text-base text-foreground font-semibold">
                      Open to internship opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-primary font-bold text-base sm:text-lg">Social Links</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/EslemRomdhane"
                  className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition text-sm sm:text-base"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/eslem-romdhane-677aa922b"
                  className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition text-sm sm:text-base"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-3 sm:space-y-4 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {submitted && (
              <div className="bg-primary/10 border border-primary/50 text-primary p-3 sm:p-4 rounded-lg font-semibold animate-fade-in-up text-sm sm:text-base">
                ✓ Message sent successfully!
              </div>
            )}
            <div>
              <label className="text-foreground font-semibold text-xs sm:text-sm block mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition group hover:border-primary/50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-foreground font-semibold text-xs sm:text-sm block mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition group hover:border-primary/50"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="text-foreground font-semibold text-xs sm:text-sm block mb-2">Subject</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition group hover:border-primary/50"
                placeholder="Project inquiry"
              />
            </div>
            <div>
              <label className="text-foreground font-semibold text-xs sm:text-sm block mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition group hover:border-primary/50 min-h-28 sm:min-h-32"
                placeholder="Tell me about your project..."
              />
            </div>
           <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-semibold py-2 text-sm sm:text-base rounded-lg hover:opacity-90 active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

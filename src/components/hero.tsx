"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Eslem Romdhane"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-background py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center relative"
    >
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-0 md:opacity-20 pointer-events-none animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center animate-fade-in-up">
          {/* Left Column - Text */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <div className="text-primary font-semibold text-sm">Hello, I'm</div>
              <div className="text-muted-foreground text-sm sm:text-base">
                Available for internship opportunities (Feb 2026)
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight">
                {displayText}
                <span className="animate-pulse">_</span>
              </h1>
              <p className="text-xl sm:text-2xl text-primary font-semibold">Software Engineer & AI Researcher</p>
              <p className="text-base sm:text-lg text-foreground/80">
                Passionate about AI, Deep Learning, Computer Vision & Software Development
              </p>
            </div>

            <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
              Computer Science student at EPI, specializing in software engineering with a focus on artificial
              intelligence. Proficient in full-stack development (MERN), with hands-on experience in deep learning and
              computer vision. Currently conducting research at LABTIM laboratory on medical image analysis.
            </p>

            <div className="pt-6 sm:pt-8 space-y-4">
              <div className="text-sm sm:text-base text-foreground/70">📍 Monastir, Tunisia</div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 text-sm sm:text-base">
                <a href="tel:+21655516598" className="text-foreground/70 hover:text-primary transition">
                  +216 55 516 598
                </a>
                <span className="text-border hidden sm:inline">•</span>
                <a
                  href="mailto:eslem.romdhan@gmail.com"
                  className="text-foreground/70 hover:text-primary transition truncate"
                >
                  eslem.romdhan@gmail.com
                </a>
              </div>
            </div>

            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 sm:mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition w-full sm:w-auto"
            >
              Explore My Work
            </button>

            <div className="pt-6 sm:pt-8 text-primary animate-bounce">↓</div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl flex-shrink-0">
              <Image
                src="/eslem.jpeg"
                alt="Eslem Romdhane - Software Engineer & AI Researcher"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

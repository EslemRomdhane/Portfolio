"use client"

import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Contact", id: "contact" },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 w-screen max-w-full bg-background/95 border-b border-border backdrop-blur-sm z-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          eslem.
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <a href="https://github.com/EslemRomdhane" className="text-muted-foreground hover:text-primary transition">
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/eslem-romdhane"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:eslem.romdhan@gmail.com" className="text-muted-foreground hover:text-primary transition">
            <Mail size={20} />
          </a>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-primary transition p-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

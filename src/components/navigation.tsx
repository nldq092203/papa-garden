"use client"

import { useState } from "react"
import { SECTIONS } from "@/lib/constants"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">🌳 Vườn cây của ba</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map((section) => (
              <button
                key={`desktop-${section.id}`}
                onClick={() => scrollToSection(section.id)}
                className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200"
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {SECTIONS.map((section) => (
                <button
                  key={`mobile-${section.id}`}
                  onClick={() => scrollToSection(section.id)}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors cursor-pointer font-medium text-left py-2 hover:bg-muted/50 rounded-lg px-3"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

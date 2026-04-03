// Hero section with name, profession, and call-to-action buttons
// Customize the name, title, and bio with your own information

"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Download, ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.cv-dropdown-container')) {
        setIsCvDropdownOpen(false)
      }
    }

    if (isCvDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isCvDropdownOpen])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 bg-background">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            <p className="text-accent font-semibold mb-2">Salut, Je suis Amir Laroussi</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
               Ingénieur logiciel | Développeur full stack
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Passionné par la conception de solutions scalables, je maîtrise les architectures microservices, l'intelligence
artificielle, l'intégration de moteurs de règles (Drools), les workflows d'automatisation (Camunda), et les pipelines
CI/CD. Habitué à travailler en équipe agile (SCRUM), je suis motivé par l'apprentissage continu et l'excellence
technique

            </p>

            {/* Location and stats */}
            <div className="flex gap-6 mb-8 flex-wrap">
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-semibold">Tunisie, Tunis</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Repositories</p>
                <p className="font-semibold">25 repositories</p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="px-8 py-3 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-border rounded-lg hover:border-accent transition-colors font-semibold"
              >
                Me contacter
              </a>
              {/* CV Download Dropdown */}
              <div className="relative cv-dropdown-container">
                <button
                  onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
                  className="px-8 py-3 border border-border rounded-lg hover:border-accent transition-colors font-semibold flex items-center gap-2"
                >
                  <Download size={18} />
                  CV
                  <ChevronDown size={16} />
                </button>
                {isCvDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                    <a
                      href="/cv-amir-fr.pdf"
                      download
                      className="block px-4 py-3 hover:bg-accent hover:text-background transition-colors"
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      🇫🇷 Français
                    </a>
                    <a
                      href="/cv-amir-en.pdf"
                      download
                      className="block px-4 py-3 hover:bg-accent hover:text-background transition-colors border-t border-border"
                      onClick={() => setIsCvDropdownOpen(false)}
                    >
                      🇬🇧 English
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-lg overflow-hidden shadow-xl border border-border">
              <Image
                src="/amir-profile.jpeg"
                alt="Amir Laroussi"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

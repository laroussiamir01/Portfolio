"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { FeaturedProject } from "@/lib/projects-data"

interface ProjectModalProps {
  project: FeaturedProject
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen) return null

  const currentImage = project.screenshots[currentImageIndex]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-background border border-border rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
            {project.company && <p className="text-sm text-muted-foreground mt-1">{project.company}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors ml-4 flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={24} className="text-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Date Range */}
          <div>
            <p className="text-sm text-muted-foreground mb-1">Durée du projet</p>
            <p className="text-foreground font-medium">{project.dateRange}</p>
          </div>
          {/* Github */}
          {project.github && (
  <div>
    <p className="text-sm text-muted-foreground mb-1">Lien GitHub</p>
    <p className="text-foreground font-medium">
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
      >
        {project.github}
      </a>
    </p>
  </div>
)}
{project.website && (<div>
    <p className="text-sm text-muted-foreground mb-1">Lien du site web</p>
    <p className="text-foreground font-medium">
      <a 
        href={project.website} 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-accent transition-colors"
      >
        {project.website}
      </a>
    </p>
  </div>)}

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Aperçu</h3>
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Screenshots Carousel */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Captures d'écran du projet</h3>
            <div className="relative bg-muted rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              {project.screenshots.length > 0 ? (
                <>
                  <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Buttons */}
                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight size={20} />
                      </button>

                      {/* Indicator */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {project.screenshots.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <p className="text-muted-foreground">Aucune capture d'écran disponible</p>
              )}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Fonctionnalités clés</h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

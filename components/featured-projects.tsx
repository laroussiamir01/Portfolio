"use client"

import { useState } from "react"
import { featuredProjects } from "@/lib/projects-data"
import { ProjectModal } from "./project-modal"
import { ExternalLink } from "lucide-react"

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {featuredProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-muted hover:bg-muted/80 rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 text-left"
          >
            {/* Project Image */}
            <div className="relative bg-muted-foreground/10 aspect-video overflow-hidden">
              <img
                src={project.screenshots[0]?.src}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {/* Click to view hint */}
              <div className="flex items-center gap-1 mt-4 text-accent text-sm font-medium">
                View Details
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}

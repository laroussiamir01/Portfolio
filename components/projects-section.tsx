// Projects section showcasing your work
// Update project titles, descriptions, tags, and links with your own projects

"use client"

import { Github } from "lucide-react"
import GitHubProjects from "./github-projects"
import { FeaturedProjects } from "./featured-projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Projets</h2>
          <p className="text-muted-foreground text-lg">Cliquez sur un projet pour afficher sa description détaillée et des captures d'écran.</p>
        </div>

        {/* Featured Projects Grid */}
        <FeaturedProjects />

        {/* GitHub Projects Section */}
        <div className="mt-20">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Projets GitHub récents</h3>
            <p className="text-muted-foreground">Découvrez d'autres projets sur GitHub</p>
          </div>
          <GitHubProjects />
        </div>

        {/* View All Projects Link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/laroussiamir01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg transition-all hover:gap-3 font-medium"
          >
            <Github size={20} />
            Voir tous les projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

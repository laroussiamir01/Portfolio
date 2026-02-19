// Technologies section showcasing tech stack

export function TechnologiesSection() {
  const technologies = [
    "React.js",
    "Angular",
    "Next.js",
    "ExpressJS",
    "TypeScript",
    "Node.js",
    "Django",
    "MongoDB/PostgreSQL/MySQL",
    "Symfony",
    "Spring Boot",
    "Docker",
    "Jenkins",
    "Drools",
    "Camunda",
    "AI/ML",
    "Laravel9",
    ".NET",

  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Technologies avec lesquelles je travaille</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Un ensemble diversifié d'outils pour créer des applications modernes et évolutives
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-card border border-border rounded-full text-sm font-medium hover:border-accent transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

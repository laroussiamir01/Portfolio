// Services/What I Do section showcasing main areas of expertise

import { Smartphone, Globe, Zap,Workflow,CloudUpload  } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: CloudUpload ,
      title: "CI/CD",
      description: "Mise en œuvre de pipelines CI/CD robustes à l'aide d'outils tels que Jenkins, GitHub Actions et GitLab CI pour automatiser les processus de test, de déploiement et de livraison.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Développement d'applications web performantes et réactives avec React, Next.js, Node.js, Angular, Spring Boot… En privilégiant un code propre et une expérience utilisateur optimale.",
    },
    {
      icon: Zap,
      title: "Full-Stack Solutions",
      description: "Fournir des solutions complètes de bout en bout, depuis la conception d'API backend évolutives jusqu'à la création d'interfaces frontend intuitives, garantissant une intégration transparente et des performances optimales.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Ce que je fais</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Je propose des services de développement complets pour les plateformes mobiles et web.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors"
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

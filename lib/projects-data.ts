export interface ProjectScreenshot {
  alt: string
  src: string
}

export interface FeaturedProject {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  screenshots: ProjectScreenshot[]
  keyFeatures: string[]
  dateRange: string
  company?: string
  github?: string
  website?: string
  websitetitle?: string
}

export const featuredProjects: FeaturedProject[] = [
  {
  id: "caffebrg-platform",
  title: "CaffeBRG : Plateforme de gestion de café (Next.js + Prisma)",
  description:
    "Plateforme full-stack pour café/restaurant — POS avec déduction atomique du stock, gestion d'inventaire avec coût moyen pondéré, recettes, dépenses, rapports CSV compatibles Excel fr-TN, et audit log.",
  longDescription:
    "Conception et développement d'une plateforme web complète pour la gestion opérationnelle d'un café à Tunis. Couvre le point de vente (POS), la gestion de stock avec calcul du coût moyen pondéré à chaque achat, un moteur de recettes avec conversion d'unités, la comptabilité (dépenses, bénéfice net), les rapports financiers avec export CSV conforme aux locales françaises et tunisiennes d'Excel, et un journal d'audit complet. Authentification NextAuth avec RBAC à deux rôles (ADMIN / STAFF) et protection server-side des routes sensibles via middleware.",
  technologies: [
    "Next.js 14", "TypeScript", "React Server Components", "Prisma",
    "PostgreSQL", "Supabase", "NextAuth", "Tailwind CSS", "bcrypt",
    "Server Actions", "RBAC", "Vercel", "Transaction Pooler"
  ],
  dateRange: "2026",
  company: "CaffeBRG (Tunis)",
  github: "https://github.com/laroussiamir01/CaffeBRG",
  website: "https://caffe-brg.vercel.app/",
  websitetitle: "Caffe BRG Platforme",
  keyFeatures: [
    "Point de vente (POS) avec déduction atomique du stock via recettes et annulation de vente qui restaure intégralement le stock",
    "Gestion de stock complète : CRUD articles, fournisseurs, achats avec coût moyen pondéré, usage, gaspillage, ajustements, alertes stock bas et historique des mouvements",
    "Moteur de recettes avec conversion d'unités (G ↔ KG, ML ↔ L) et calcul automatique du coût matière et du bénéfice par article vendu",
    "Comptabilité : dépenses par catégorie, KPIs tableau de bord temps réel (revenu, bénéfice brut, dépenses du jour, bénéfice net)",
    "Rapports avec export CSV compatible Excel fr-FR / fr-TN (séparateur « ; », décimales « , », directive sep=;, BOM UTF-8, quoting RFC 4180)",
    "Sécurité : authentification NextAuth + bcrypt, RBAC appliqué côté serveur (middleware + route guards), journal d'audit de toutes les mutations métier",
    "UI 100 % française avec devise DT (Dinar tunisien) formatée à 3 décimales, menu public rendu directement depuis PostgreSQL",
    "Déploiement Vercel + Supabase Transaction Pooler (port 6543, pgbouncer, connection_limit=1) pour scalabilité serverless sans épuisement du pool"
  ],
  screenshots: [
    { alt: "Tableau de bord administrateur avec KPIs", src: "/BRG/1.png" },
    { alt: "Point de vente (POS) avec panier et déduction automatique du stock", src: "/BRG/2.png" },
    { alt: "Gestion du stock avec historique des mouvements", src: "/BRG/3.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/4.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/5.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/6.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/7.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/8.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/9.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/10.png" },
    { alt: "Rapports financiers avec export CSV", src: "/BRG/11.png" },
  ],
},
  {
    id: "bns-automation",
    title: "PROJET DE FIN D'ÉTUDES",
    description: "Plateforme d'automatisation d'entreprise avec moteur Drools et workflows Camunda",
    longDescription:
      "Développement d'une plateforme intelligente d'automatisation des processus de commerce extérieur intégrant un moteur de règles Drools, des workflows Camunda, et une couche de traduction IA basée sur le traitement du langage naturel (NLP).",
    technologies: ["Spring Boot", "Angular", "Drools 8", "Camunda", "React.js" , "NextJS", "Fine-Tuning", "NLP", "Hugging Face", "Docker", "Jenkins", "Microservices", "Eureka/API Gateway", "Keycloak","MySQL/PostgreSQL"],
    dateRange: "Feb 2025 - Aug 2025",
    company: "BNS ENGINEERING",
    website: "https://v0-drools.vercel.app/",
    websitetitle: "Aperçu de partie IA",
    keyFeatures: [
      "Conception et implémentation d'un système CRUD complet pour la gestion des règles métier avec versioning et suspension programmée",
      "Orchestration complète des processus de commerce extérieur avec suivi en temps réel et monitoring",
      "Traduction automatique du langage naturel en règles Drools utilisant Hugging Face et Fine-Tuning",
      "4 services indépendants (Drools, Camunda, Traduction IA, API Gateway) avec service discovery Eureka",
      "Authentification JWT, contrôle d'accès basé sur les rôles(Keycloak), audit complet des modifications",
      "Pipeline Jenkins automatisé, tests unitaires (JUnit/Mockito), analyse code SonarQube, déploiement Docker",
    ],
    screenshots: [
      {
        alt: "Drools Rule Engine Dashboard",
        src: "/login.png",
      },
      {
        alt: "Camunda Workflow Orchestration",
        src: "/IA.png",
      },
      {
        alt: "NLP Rule Translation Interface",
        src: "/dif.png",
      },
      {
        alt: "Camunda",
        src: "/camunda.png",
      },
      {
        alt: "IA1",
        src: "/ia1.png",
      },
    ],
  },
  {
    id: "talenthub-platform",
    title: "TalentHub: Plateforme Opportunités d'Emploi (MERN Stack)",
    description: "Plateforme de recrutement basée sur l'IA avec analyse de CV et mise en relation avec les offres d'emploi",
    longDescription:
      "Conçeption d'une plateforme de recrutement complète basée sur la technologie MERN, qui exploite l'apprentissage automatique pour analyser automatiquement les CV et les mettre en relation avec les offres d'emploi. La plateforme simplifie l'ensemble du processus de mise en relation des candidats et des postes grâce à des algorithmes intelligents.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Python", "ML", "Jenkins", "Docker"],
    dateRange: "2024",
    keyFeatures: [
      "Analyse automatisée des CV à l'aide d'algorithmes d'apprentissage automatique",
      "Mise en relation intelligente avec des recommandations basées sur l'apprentissage automatique",
      "Gestion centralisée des candidatures",
      "Extraction et analyse des données des candidatures",
      "Diffusion des opportunités d'emploi et de stages",
      "Pipeline CI/CD avec Jenkins, Nexus, et SonarQube",
    ],
    screenshots: [
      {
        alt: "Job Listing Dashboard",
        src: "/talenthub-platform/1.png",
      },
      {
        alt: "CV Analysis and Matching",
        src: "/talenthub-platform/2.png",
      },
      {
        alt: "Candidate Management System",
        src: "/talenthub-platform/3.png",
      },
      {
        alt: "Candidate Management System",
        src: "/talenthub-platform/4.png",
      },
    ],
  },
  /*{
    id: "gaming-ecommerce",
    title: "Gaming E-Commerce Platform",
    description: "Secure e-commerce platform with user authentication and event management",
    longDescription:
      "Developed a full-featured e-commerce platform dedicated to gaming products with robust authentication, user management, event system, and secure payment processing. Implemented enterprise-level security practices and followed SOLID principles for maintainability.",
    technologies: ["Symfony 5", "PHP 8", "MySQL", "Doctrine ORM", "JWT", "REST API"],
    dateRange: "2023",
    keyFeatures: [
      "Complete authentication and authorization system with JWT and role-based access control",
      "User management with account activation and secure password encryption",
      "Event creation and management system with participation tracking",
      "Event participation workflows with validation rules and participant limits",
      "Email notifications for account confirmation and password reset",
      "RESTful API following MVC architecture and SOLID principles",
    ],
    screenshots: [
      {
        alt: "Gaming Products Catalog",
        src: "/projects/gaming-catalog.jpg",
      },
      {
        alt: "Event Management Dashboard",
        src: "/projects/gaming-events.jpg",
      },
      {
        alt: "User Authentication Flow",
        src: "/projects/gaming-auth.jpg",
      },
    ],
  },*/
  {
    id: "urban-gardening",
    title: "Plateforme de Jardinage Urbain Durable (Laravel 9)",
    description: "Conception et développement d'une plateforme web complète de gestion agricole facilitant la gestion des jardins, des plantes et de la nutrition des cultures.",
    longDescription:
      "plateforme web complète pour le jardinage urbain durable, permettant aux utilisateurs de gérer leurs jardins, de suivre l'état de santé de leurs plantes et d'accéder à des informations agricoles. Intégration de technologies web sémantiques via des requêtes SPARQL pour un enrichissement intelligent des données.",
    technologies: ["Laravel 9", "Bootstrap", "MySQL", "SPARQL", "PHP"],
    dateRange: "2024",
    keyFeatures: [
      "Gestion des plantes avec catégorisation et descriptions détaillées",
      "Intégration d'ontologies agricoles via des requêtes SPARQL pour l'enrichissement des données",
      "Contrôle d'accès et gestion des permissions basés sur les rôles",
      "Suivi des jardins et planification de l'entretien",
      "Analyse nutritionnelle et suivi de la santé des cultures",
      "Design responsive avec frontend Bootstrap",
    ],
    screenshots: [
      {
        alt: "Garden Management Dashboard",
        src: "/agrishare-platform/1.png",
      },
      {
        alt: "Plant Database and Care Guide",
        src: "/agrishare-platform/2.png",
      },
      {
        alt: "Nutritional Analysis",
        src: "/agrishare-platform/3.png",
      },
      {
        alt: "Nutritional Analysis",
        src: "/agrishare-platform/4.png",
      },
    ],
  },
  /*{
    id: "technplay-esports",
    title: "TechNPlay: Esports & Order Management",
    description: "Django platform for integrated esports event and order logistics management",
    longDescription:
      "Developed a comprehensive Django-based application for managing esports events and supply chain logistics. The platform includes AI models for delivery time prediction and intelligent description generation, optimizing both operational efficiency and user experience.",
    technologies: ["Django", "Python", "scikit-learn", "Machine Learning", "MySQL", "REST API"],
    dateRange: "2024",
    keyFeatures: [
      "Delivery delay prediction using Linear Regression ML models",
      "Intelligent description generation powered by AI",
      "Esports event management and scheduling",
      "Supply chain and logistics optimization",
      "Real-time order tracking and monitoring",
      "Analytics dashboard with performance metrics",
    ],
    screenshots: [
      {
        alt: "Order Management Dashboard",
        src: "/projects/technplay-orders.jpg",
      },
      {
        alt: "Esports Event Management",
        src: "/projects/technplay-events.jpg",
      },
      {
        alt: "Logistics and Delivery Tracking",
        src: "/projects/technplay-logistics.jpg",
      },
    ],
  },*/
  {
    id: "CiCd-Pipeline",
    title: "Pipeline d'automatisation DevOps — CI/CD avec contrôles de sécurité et de qualité",
    description: "Pipeline CI/CD de bout en bout avec Docker, tests automatisés, contrôles qualité SonarQube et automatisation du déploiement.",
    longDescription:
      "Conception et implémentation d'un pipeline d'automatisation DevOps complet pour une application web, intégrant des étapes de construction, de test, d'analyse de code et de déploiement. Le pipeline utilise Docker pour la conteneurisation, Jenkins pour l'orchestration, SonarQube pour les contrôles de qualité du code, et Nexus pour la gestion des artefacts.",
    technologies: ["Jenkins", "Docker", "SonarQube", "Nexus", "Automated Testing", "CI/CD","Prometheus", "Grafana"],
    dateRange: "2024",
    keyFeatures: [
      "Builds Dockerisés avec un environnement identique et reproductible.",
      "Étapes d'intégration continue pour les tests unitaires/d'intégration et l'analyse statique",
      "Les portes de qualité de SonarQube (couverture, bugs, vulnérabilités, anomalies) qui bloquent les fusions non sécurisées.",
      "Déploiements automatisés avec approbations d'environnement et restaurations.",
      "Monitoring en temps réel avec Prometheus et Grafana pour la surveillance de la performance et des erreurs post-déploiement.",
      "Gestion centralisée des artefacts avec Nexus pour les dépendances et les builds.",
      "Pipeline entièrement automatisé avec notifications et rapports détaillés pour une visibilité complète du processus de développement.",
    ],
    screenshots: [
      {
        alt: "Garden Management Dashboard",
        src: "/devops-automation-pipeline/Updated-jenkins-view.png",
      },
      {
        alt: "Plant Database and Care Guide",
        src: "/devops-automation-pipeline/2.png",
      }
    ],
  },
]

export const siteContent = {
  nav: {
    brand: "Akim Guentas",
    links: [
      { label: "Projets", href: "#work" },
      { label: "CV", href: "cv" },
      { label: "Parcours", href: "#about" },
    ],
    cta: { label: "Me contacter", href: "#contact" },
  },

  hero: {
    headline: "Je relie les idées, les gens",
    headlineAccent: "et la technologie.",
    body: "Je transforme des besoins concrets en outils utiles : dashboards, automatisations, produits Data et expériences digitales. De l’analyse du problème à la mise en œuvre, je construis ce qui permet de passer à l’action.",
    status: [
      { label: "Paris · Île-de-France", type: "map" },
      { label: "Disponible immédiatement", type: "dot" },
    ],
    ctas: [
      { label: "Voir ce que j'ai livré", href: "/projects", variant: "primary" },
      { label: "Parler d'un poste", href: "#contact", variant: "outline" },
    ],
    orbCards: [
      { text: "6+ dashboards Power BI", position: "top-20 left-0" },
      { text: "5–6 h → 1 h / semaine", position: "bottom-24 right-8" },
      { text: "Du besoin au produit", position: "top-40 right-0" },
    ],
    proof: [
      { value: "6+", label: "dashboards Power BI déployés" },
      { value: "4", label: "produits mis en lumière" },
      { value: "Data +", label: "produit, automatisation et création" },
    ],
  },

  about: {
    heading: "À l'interface du métier et de la technique.",
    bio: [
      "Pendant mon alternance chez Sidel, groupe Tetra Laval, j'ai transformé des données commerciales et clients en dashboards Power BI et en recommandations directement exploitables par les équipes Marketing, Sales et Management.",
      "En parallèle, avec MadeByAkim, je conçois des produits Data/IA de bout en bout : analyse du besoin, architecture, développement, contrôle qualité, tests et déploiement. Cette double culture me permet de relier une question métier à une solution concrète.",
      "Mon approche reste simple : comprendre le problème, fiabiliser la donnée, construire le bon outil et mesurer ce qu'il change réellement.",
    ],
    capabilities: [
      "Analyser et structurer des données métier",
      "Construire des dashboards Power BI décisionnels",
      "Automatiser des tâches avec Python, n8n et des APIs",
      "Cadrer un produit Data/IA de bout en bout",
      "Faire le lien entre équipes métier, IT et direction",
    ],
    education: [
      "MSc Business Intelligence & Analytics — Data Analyst for Marketing · Eugenia School · 2025",
      "Databricks pour Data Engineers · ORSYS · 2026",
      "Bachelor Responsable Commerce & Marketing · EM Normandie · 2023",
      "BTS Management Commercial Opérationnel · Alternancia · 2022",
    ],
    certifications: "Dataiku ML Practitioner · Python for Machine Learning · Fine-Tuning Large Language Models",
    languages: "Français natif · Anglais professionnel · Espagnol intermédiaire",
    experience: [
      "AI Transformation Consultant & Product Builder · MadeByAkim · 2024 – aujourd'hui",
      "Data & Business Analyst — International Stakeholder Reporting · Sidel, Groupe Tetra Laval · 2023 – 2025",
      "Business Development & Reporting · Vassard OMB Mobilier · 2022 – 2023",
    ],
  },

  approach: {
    intro: "Chaque sujet commence par le besoin métier, puis la donnée et la solution s'alignent.",
    items: [
      { number: "01", title: "Comprendre le besoin", body: "Recueillir les attentes, formaliser les besoins et identifier les décisions que la solution doit réellement faciliter." },
      { number: "02", title: "Fiabiliser la donnée", body: "Consolider les sources, contrôler la cohérence et structurer un modèle exploitable avant de produire un indicateur." },
      { number: "03", title: "Construire la solution", body: "Choisir le bon niveau d'outil : dashboard, pipeline, API, automatisation ou produit Data/IA complet." },
      { number: "04", title: "Tester avec les utilisateurs", body: "Vérifier les résultats, corriger les anomalies et faire évoluer la restitution avec les équipes concernées." },
      { number: "05", title: "Livrer et documenter", body: "Mettre en production avec des tests, des logs, une documentation et une solution maintenable." },
      { number: "06", title: "Mesurer l'impact", body: "Relier le livrable à un résultat concret : temps économisé, meilleure visibilité ou décision plus rapide." },
    ],
  },

  behind: {
    intro: "Ce portfolio présente des expériences et des produits réels, avec leur contexte, leur rôle et les outils effectivement utilisés.",
    automation: [
      { step: "01", note: "Besoin métier" },
      { step: "02", note: "Données et sources" },
      { step: "03", note: "Analyse et architecture" },
      { step: "04", note: "Construction et tests" },
      { step: "05", note: "Livraison et adoption" },
    ],
    techStack: ["Power BI", "Power Query", "SQL", "Python", "PostgreSQL", "FastAPI", "n8n", "Make", "Docker", "Coolify"],
  },

  sections: {
    work: {
      eyebrow: "Produits que je construis",
      heading: "Des outils qui tournent, pas des maquettes.",
      intro: "Job Apply, Signal, Nuit Blanche et YEVA : conçus, développés et déployés de bout en bout. Captures réelles, architecture et limites.",
    },
    approach: { eyebrow: "Ma méthode", heading: "Du besoin à l'usage." },
    behind: { eyebrow: "Mon environnement", heading: "Les outils au service du problème.", automationLabel: "Du besoin au livrable", stackLabel: "Compétences principales" },
    contact: {
      eyebrow: "Échangeons",
      heading: "On peut en parler.",
      subheading: "Un poste, un projet ou une idée à confronter à la réalité ? Dis-moi ce que tu cherches à construire ou à résoudre.",
      projectTypeLabel: "Le sujet concerne…",
      responseTimeLabel: "Disponibilité",
      responseTime: "Basé au Havre · Mobile en Île-de-France · Ouvert aux opportunités CDI",
      socialLabel: "Retrouve-moi",
    },
  },

  contact: {
    projectTypes: ["Data / BI", "Business Analysis", "Automation / IA", "Produit Data", "Opportunité professionnelle"],
    social: [
      { label: "Email", href: "mailto:akimguentas13@gmail.com" },
      { label: "LinkedIn", href: "https://linkedin.com/in/akimguentas" },
      { label: "GitHub", href: "https://github.com/akimgnts" },
    ],
  },

  footer: { name: "Akim Guentas", year: new Date().getFullYear(), tagline: "Business · Data · Automation / IA" },
};

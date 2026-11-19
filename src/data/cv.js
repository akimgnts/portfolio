// Source de vérité du CV en ligne.
// Croisé depuis : CV KPMG Deal Analytics (sept. 2026), Master CV (juil.–août 2026), CV 2022.
// Règle : aucun contenu inventé ; niveaux de compétences = calibration verrouillée du Master CV V2.

export const profile = "Profil Business × Data, formé en Business Intelligence & Analytics. Près de deux ans chez Sidel (alternance) à transformer des données clients, commerciales et opérationnelles en dashboards, KPI et recommandations métier. Je collecte, fiabilise, structure et restitue des données issues de sources multiples, et je conçois des produits Data/IA que je développe et déploie moi-même.";

export const experience = [
  {
    date: "janv. 2024 — sept. 2025",
    role: "Data & Business Analyst — Reporting commercial et opérationnel",
    org: "Sidel · Groupe Tetra Laval",
    place: "Alternance · Octeville-sur-Mer / international",
    bullets: [
      "Conception et déploiement de 6+ dashboards Power BI utilisés chaque semaine par des dizaines de collaborateurs et managers.",
      "Consolidation de données clients, commerciales et Installed Base (Excel, Power Query, Power BI, Python, SQL) avec contrôles de cohérence.",
      "Automatisation d'un reporting hebdomadaire : 5–6 h sous Excel ramenées à environ 1 h par semaine, contrôles inclus.",
      "KPI, mesures DAX et modèles en étoile pour fiabiliser les indicateurs des équipes Marketing, Sales et Management.",
      "Analyse d'un portefeuille Wines & Spirits de 61 comptes : équipements installés, services et potentiel commercial.",
      "Funnel des salons européens : visites, contacts, rendez-vous et progression vers les opportunités.",
      "Restitution des analyses et recommandations à des interlocuteurs internationaux, en français et en anglais.",
    ],
    reports: ["sidel-reporting-commercial", "event-analytics-europe"],
  },
  {
    date: "2026 — aujourd'hui",
    role: "AI Transformation Consultant & Product Builder",
    org: "MadeByAkim",
    place: "Micro-entreprise · Conseil Data & IA",
    bullets: [
      "Analyse des besoins métier et traduction en cas d'usage Data/IA, règles fonctionnelles, architectures et workflows.",
      "Solutions de bout en bout avec Python, FastAPI, PostgreSQL, SQL et APIs REST : ingestion, transformation, stockage, restitution.",
      "Pipelines avec contrôle qualité, normalisation, classification, scoring et validation humaine avant persistance.",
      "Produits déployés sur serveur (Docker, Coolify) : Job Apply, Signal, Nuit Blanche · Content Engine.",
    ],
    reports: ["job-apply-assistant", "event-signal", "nuit-blanche"],
  },
  {
    date: "2026 — aujourd'hui",
    role: "Création, communication & opérations",
    org: "YEVA",
    place: "Collectif culturel · Le Havre",
    bullets: [
      "Identité, contenus et organisation d'événements.",
      "Site public yeva.club et cockpit Signal pour suivre billetterie, publicité et contenus.",
    ],
    reports: ["yeva-site", "event-signal"],
  },
  {
    date: "2022 — 2023",
    role: "Business Development & Reporting",
    org: "Vassard OMB Mobilier",
    place: "Expérience commerciale",
    bullets: [
      "Structuration des données CRM, qualification des prospects et suivi de l'activité commerciale pour améliorer la visibilité sur le pipeline.",
    ],
  },
  {
    date: "2021 — 2022",
    role: "Vendeur / Conseiller",
    org: "Comptoir Seigneurie Gauthier",
    place: "Alternance BTS",
    bullets: ["Vente et conseil, gestion de stock, animation de point de vente et fidélisation client."],
  },
];

export const education = [
  { date: "2023 — 2025", title: "MSc Analytics for Business — Data Analysis & IA", school: "Eugenia School", note: "Mémoire : V.I.E Matcher — matching d'offres par IA, CV optimisés ATS et automatisation du pipeline de candidature V.I.E." },
  { date: "2022 — 2023", title: "Bachelor Responsable Commerce & Marketing", school: "EM Normandie" },
  { date: "2020 — 2022", title: "BTS Management Commercial Opérationnel", school: "Alternancia · en alternance" },
];

export const training = [
  { date: "2026", title: "Databricks pour Data Engineers", school: "ORSYS · Paris La Défense", note: "Spark SQL, Delta Lake, notebooks, pipelines, architecture lakehouse/medallion." },
];

export const certifications = ["Dataiku ML Practitioner · Dataiku · 2025", "Dataiku Core Designer · Dataiku · 2025", "Python pour le machine learning · LinkedIn · 2025", "Fine-Tuning for LLMs · LinkedIn Learning · 2025"];

export const languages = ["Français — natif", "Anglais — professionnel", "Espagnol — intermédiaire"];

// Calibration verrouillée (Master CV V2) : ne jamais gonfler un niveau.
// `match` = libellés équivalents dans les stacks projets, pour relier compétence → preuves.
export const skillLevels = [
  {
    id: "maitrise", label: "Maîtrisé", hint: "Utilisé en production ou de façon régulière",
    skills: [
      { name: "Power BI" }, { name: "Power Query" }, { name: "Excel" }, { name: "SQL" },
      { name: "Python" }, { name: "PostgreSQL" }, { name: "FastAPI" }, { name: "SQLAlchemy" },
      { name: "Alembic" }, { name: "REST APIs", match: ["API REST"] }, { name: "Git / GitHub" },
      { name: "Docker" }, { name: "Coolify" }, { name: "n8n" }, { name: "Make" },
      { name: "Google Apps Script", match: ["Apps Script"] }, { name: "PowerPoint" },
    ],
  },
  {
    id: "operationnel", label: "Opérationnel", hint: "Pratiqué sur des cas réels",
    skills: [
      { name: "DAX" }, { name: "Modélisation dimensionnelle" }, { name: "Agile / Scrum / Kanban" }, { name: "Tableau" },
    ],
  },
  {
    id: "notions", label: "Notions", hint: "Formation ou exploration",
    skills: [
      { name: "Databricks" }, { name: "BigQuery" }, { name: "AWS" }, { name: "Architecture medallion" },
      { name: "UiPath" }, { name: "Power Platform" },
    ],
  },
];

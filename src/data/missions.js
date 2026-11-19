// Missions en entreprise : présentées en rapport, pas en vitrine produit.
// Règle : uniquement des faits déclarés. Un champ à null n'est pas affiché.
// À compléter par Akim : duration, communication, stakeholders précis.
export const missions = {
  "sidel-reporting-commercial": {
    number: "01",
    company: "Sidel",
    group: "Groupe Tetra Laval",
    contract: "Alternance",
    role: "Data & Business Analyst",
    period: "2024 – 2025",
    duration: null,
    teams: ["Sales", "Marketing", "Management"],
    usage: "Utilisé chaque semaine par des dizaines de collaborateurs et managers.",
    brief: "Transformer les données CRM et commerciales en priorités directement exploitables par les équipes Sales.",
    actions: [
      "Consolider les données CRM, commerciales, clients et Installed Base",
      "Contrôler la cohérence des sources avant toute restitution",
      "Modéliser dans Power BI et écrire les mesures DAX",
      "Automatiser le reporting récurrent avec Power Query",
      "Réunir performance par commercial, rendez-vous, opportunités et historique de contact dans une même vue",
    ],
    communication: null,
    deliverables: [
      "6+ dashboards Power BI conçus et déployés",
      "Un outil de pilotage commercial utilisé chaque semaine",
      "Analyse d'un portefeuille Wines & Spirits de 61 comptes (périmètre étudié, pas un résultat de vente)",
    ],
  },
  "event-analytics-europe": {
    number: "02",
    company: "Sidel",
    group: "Groupe Tetra Laval",
    contract: "Alternance",
    role: "Data & Business Analyst",
    period: "2024 – 2025",
    duration: null,
    teams: ["Communication", "Marketing Europe"],
    usage: null,
    brief: "Relier présence, contacts et satisfaction des salons européens pour suivre ce qui se passe après l'événement.",
    actions: [
      "Rapprocher les données de présence, de contacts et les questionnaires de satisfaction",
      "Construire un modèle Power BI unique à partir de sources auparavant séparées",
      "Restituer un funnel : visites, contacts, rendez-vous, progression commerciale",
      "Centraliser les KPI de performance événementielle et de satisfaction",
    ],
    communication: null,
    deliverables: [
      "Dashboard Power BI de pilotage des salons européens",
      "Funnel événementiel et commercial construit de bout en bout",
    ],
  },
};

export const isMission = (slug) => Boolean(missions[slug]);

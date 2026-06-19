export const projects = [
  {
    id: 1,
    slug: "job-apply-assistant",
    index: "01",
    title: "Job Apply Assistant",
    description: "Telegram bot qui analyse une offre d'emploi et génère CV, lettre et mail en moins de 5 minutes.",
    fullDescription: "Job Apply Assistant est un assistant IA accessible via Telegram qui transforme le processus de candidature. L'utilisateur envoie une offre (URL ou texte brut), le bot analyse le poste, évalue le match avec le profil candidat, choisit un angle de positionnement et génère trois documents tailored — CV HTML, lettre de motivation et email recruteur — en moins de 5 minutes. Le système repose sur une architecture multi-agents avec des règles anti-hallucination strictes : l'IA ne peut utiliser que les faits vérifiés du profil source.",

    observed_problem: "Préparer une candidature sérieuse (CV adapté + lettre + mail) prenait 45 minutes minimum par offre, avec un risque de génériques ou de copy-paste.",
    impact: "Fatigue de candidature, volume limité, manque de personnalisation réelle — la majorité des CVs envoyés ne sont pas adaptés à l'offre ciblée.",
    affected_users: "Candidats actifs en recherche d'emploi envoyant plusieurs candidatures par semaine.",

    key_observation: "Le travail long n'est pas la rédaction — c'est l'adaptation : comprendre l'offre, choisir quoi mettre en avant, reformuler les bullets pour le bon angle. Ce travail peut être structuré et délégué à un LLM si on lui fournit des faits vérifiés.",
    hypothesis: "En séparant rigoureusement les faits immuables (expériences, chiffres réels) de la narration flexible (formulation, emphase, angle), un pipeline LLM peut produire des documents crédibles, personnalisés et non-génériques.",

    architecture: "Architecture en couches : Bot Telegram (interface) → Agents (logique métier pure) → Services (OpenAI, DB, scraping, templates). 8 agents spécialisés orchestrent le pipeline : analyse de l'offre, gap analysis, positionnement stratégique, adaptation du CV, revue qualité. Les agents sont indépendants du Telegram et réutilisables. La source de vérité est un Master CV hardcodé avec bullets enrichis de chiffres vérifiés.",
    workflows: "Offre (URL ou texte) → InputAgent (extraction trafilatura) → AnalysisAgent (analyse LLM + score match) → MatchingAgent (validation blocs profil) → PositioningAgent (angle + strategic brief) → CVAdaptationAgent (adaptation narrative) → ReviewerAgent (audit qualité bullet par bullet) → render Jinja2 → sauvegarde PostgreSQL + envoi Telegram",
    automation_logic: "Règle evidence-first : chaque bullet du CV doit contenir au minimum un chiffre, un before/after, un scope stakeholder ou un output mesurable. Liste de mots interdits (buzzwords) appliquée au prompt et auditée par le ReviewerAgent. Experience order fixe [0,1,2] jamais réordonnable. Minimum 5 bullets Sidel (expérience flagship). Fallback automatique si l'adaptation ne passe pas la validation.",
    pipelines: "Event-driven (message Telegram déclenche le pipeline). Pipeline synchrone par étape : ingestion → analyse → adaptation → revue → rendu. Async tout au long (await OpenAI calls) pour garder le bot réactif.",

    friction_reduction: "Préparation d'une candidature réduite de ~45 minutes à ~5 minutes. Plus besoin d'ouvrir Word, LinkedIn, de copier-coller ou de reformuler manuellement. CV, lettre et email générés et livrés dans Telegram directement.",
    simplification: "Suppression de 4-5 étapes manuelles : lecture approfondie de l'offre, choix des expériences à mettre en avant, reformulation des bullets, adaptation de la lettre, rédaction du mail recruteur.",

    stack: ["Python 3.11", "OpenAI API (GPT-4o-mini)", "python-telegram-bot", "FastAPI", "PostgreSQL 16", "SQLAlchemy", "Alembic", "Jinja2", "trafilatura", "Docker"],
    infra: "Docker Compose sur Coolify (self-hosted). PostgreSQL 16 avec volume persistant. Migrations Alembic + seed profil automatiques au démarrage. Documents générés sauvegardés dans /outputs.",
    APIs: "OpenAI API (json_mode pour outputs structurés, text pour génération). API Telegram (polling). trafilatura pour extraction web (fallback precision/recall).",
    data_sources: "Master CV hardcodé (source de vérité avec chiffres vérifiés). ProfileBlocks PostgreSQL (blocs de compétences enrichis). Offres d'emploi en texte brut ou extraites via URL.",

    role: "Concepteur & développeur solo — architecture, prompt engineering, pipeline multi-agents, intégration Telegram, infrastructure Coolify.",
    outcome: "Réduit le temps de préparation d'une candidature de 45 minutes à moins de 5 minutes, avec des documents personnalisés et non-génériques.",
    results: [
      "Temps de préparation : ~45 min → ~5 min par candidature (réduction ~89%)",
      "100+ documents générés (CVs, lettres, mails) sur Elevia et JAA combinés",
      "8 agents spécialisés orchestrés en pipeline : analyse, gap, positionnement, adaptation, revue",
      "Règles anti-hallucination strictes : zéro fact inventé, bullets vérifiés par ReviewerAgent avant rendu",
    ],
    learnings: [
      "Séparer faits immuables et narration flexible est le principe le plus important : une fois cette frontière posée, le prompt engineering devient beaucoup plus fiable et itérable.",
      "Les exemples few-shot dans les prompts ont plus d'impact que les règles abstraites — remplacer 'ALWAYS USE soft verbs' par des exemples concrets evidence-first a immédiatement amélioré la qualité des bullets générés.",
      "Un ReviewerAgent séparé qui audite le rendu (plutôt que de tout mettre dans le prompt de génération) est plus robuste : les deux rôles — écrire et critiquer — travaillent mieux séparément.",
    ],

    current_limits: "Un seul utilisateur (Telegram user ID hardcodé). Pas de PDF natif (impression navigateur). La base de profil n'est pas mise à jour dynamiquement — tout changement de CV nécessite une modification du code. Dernier refresh de la base VIE : juin 2026.",
    tradeoffs: "Master CV hardcodé plutôt que base de données dynamique : sacrifice de la flexibilité pour la fiabilité — on préfère des faits 100% vérifiés à un système qui pourrait mélanger des données. GPT-4o-mini plutôt que GPT-4o : coût réduit, latence acceptable, qualité suffisante pour ce cas d'usage.",

    next_steps: "Intégration base d'offres VIE Business France (1453 offres actives) avec commande /matches. Génération PDF native via Playwright. Mode multi-utilisateurs avec profils distincts.",
    future_vision: "Plateforme de career intelligence autonome : monitoring des offres en temps réel, alertes personnalisées, scoring continu profil vs marché, analyse des patterns de candidatures réussies.",

    accentColor: "hsl(262, 60%, 58%)",
    accentHover: "hsla(262, 60%, 73%, 0.12)",
    year: 2025,
  },
];

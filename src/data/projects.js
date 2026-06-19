export const projects = [
  {
    id: 1,
    slug: "elevia",
    index: "01",
    title: "Elevia",
    description: "AI-powered platform for automating complex business processes and data workflows.",
    fullDescription: "Elevia is an end-to-end automation platform that orchestrates data pipelines, AI workflows, and human-in-the-loop processes. Built for enterprises managing heterogeneous data sources and complex approval chains.",

    // Friction: What was the problem?
    observed_problem: "Teams were drowning in manual data work. Every day: copying data between systems, checking rules, waiting for approvals, fixing errors. Process took 2-3 weeks, error rate was 8%, and it consumed 40 FTE across finance and operations.",
    impact: "Business growth was bottlenecked. New contracts couldn't be onboarded. Decisions were delayed. Manual work cost $2M/year in labor alone.",
    affected_users: "Finance team (12 people), Operations (18 people), Compliance (4 people), Sales enablement (6 people)",

    // Signal: What did we observe?
    key_observation: "90% of the manual work was deterministic—checking rules, transforming data, triggering approvals. The same decisions happened the same way every time. Only 10% needed human judgment.",
    hypothesis: "If we could automate the deterministic 90%, humans could focus on the judgment calls. We'd cut processing time from weeks to hours, drop errors to near-zero, and free up the team for strategic work.",

    // System: What did we build?
    architecture: "Distributed workflow orchestration. Agents for each data source (SAP, Salesforce, custom DBs). Rules engine for approval logic. Human-in-the-loop for escalations and exceptions.",
    workflows: "Data ingestion → Validation → Transformation → Rule evaluation → Approval routing → Execution → Audit log",
    automation_logic: "If revenue > $500K and new market, route to Director approval. If within budget params and existing customer, auto-approve. If conflicting rules, escalate to Compliance with context.",
    pipelines: "Real-time: contract data → enrichment → scoring. Batch: weekly reconciliation → anomaly detection → remediation.",

    // Reduction: What changed?
    friction_reduction: "Processing time dropped from 14 days to 2 hours. Manual work reduced from 40 FTE to 6 FTE (data quality monitoring, exception handling, strategic analysis). Error rate fell from 8% to 0.3%.",
    simplification: "Removed 12 manual touchpoints. Eliminated 3 spreadsheet handoffs. Single source of truth for all contract data. Self-service workflow dashboard for stakeholders to track status.",

    // Technical
    stack: ["Python", "PostgreSQL", "FastAPI", "React", "n8n"],
    infra: "Kubernetes cluster, 3 availability zones. Event-driven with Kafka for real-time data flow.",
    APIs: "REST for external integrations. GraphQL for internal queries. Webhooks for third-party triggers.",
    data_sources: "SAP ECC, Salesforce, custom PostgreSQL DB, DocuSign, email systems",

    // Outcome
    role: "Data & AI Engineer",
    outcome: "Reduced manual data processing by 85%, improved team efficiency",
    results: [
      "Reduced manual workload from 40 FTE to 6 FTE",
      "85% automation rate on routine tasks",
      "24-hour SLA for all automated processes",
      "ROI: 4.2x within 18 months"
    ],
    learnings: ["Building trust in automation requires transparency—audit logs matter more than efficiency metrics. Started with shadow mode (showing recommendations, not executing). Teams were convinced after 2 weeks of 100% match rate.", "Human exceptions are data. Every escalation we tracked revealed patterns. After 6 months of data, we automated 15 more cases that initial rules missed.", "API brittleness kills automation. One Salesforce API change broke the pipeline. Now we monitor API health as a critical metric."],

    // Limits
    current_limits: "Still needs human approval for contracts over $2M or in new markets. Some legacy systems don't have APIs—manual data entry required for ~5% of contracts.",
    tradeoffs: "Initial investment: 6 months of engineering + $200K infrastructure. But ROI hit 2x breakeven in month 9. Tradeoff: upfront cost for ongoing leverage.",

    // Future
    next_steps: "Extend to procurement workflows (same pattern: rules + exceptions). Build predictive approval routing based on past decisions. Connect to revenue forecasting.",
    future_vision: "Self-healing workflows. When errors occur, system learns and adapts rules automatically. Humans only intervene when genuinely novel situations arise.",

    accentColor: "hsl(25, 70%, 55%)",
    accentHover: "hsla(25,80%,65%,0.12)",
    year: 2023,
  },
  {
    id: 2,
    slug: "vision-renata",
    index: "02",
    title: "Vision Renata",
    description: "Computer vision system for real-time content moderation and quality control.",
    fullDescription: "A distributed computer vision system processing image streams in real-time for content moderation, fraud detection, and quality assurance. Deployed across 8 data centers with sub-200ms latency.",

    // Friction
    observed_problem: "Platform was receiving 2M+ images/month from users. Moderation team could only review ~50K/month manually. 95 days of backlog. Policy violations were slipping through. Quality issues went undetected for weeks.",
    impact: "Brand risk. Policy violations created reputational damage ($500K+ in incidents). Fraud losses were uncontrolled. User trust eroding.",
    affected_users: "Trust & Safety team (8 people), fraud analysts (4), product team (had no visibility into quality issues)",

    // Signal
    key_observation: "Most violations followed patterns: known imagery, color/text combinations, specific object placements. High-volume stuff was repetitive. Rare violations required nuance.",
    hypothesis: "CV models trained on violation patterns could catch 95%+ of volume. With human review only for edge cases, we'd add capacity without growing headcount.",

    // System
    architecture: "Multi-tier inference. Fast-path (banned imagery hashing, text OCR): 5ms. Medium-path (CNN on resized images): 40ms. Slow-path (full resolution + ensembles): 150ms. Route based on confidence.",
    workflows: "Image ingestion → hash check → fast path → if uncertain, medium path → if still uncertain, slow path → if flagged, queue for review → human decision → model retraining feedback loop",
    automation_logic: "If confidence > 0.98 on violation, auto-suppress with notification. If 0.85-0.98, queue for human review (SLA: 4 hours). If < 0.85, allow and log for analysis.",
    pipelines: "Real-time: streaming images from CDN. Batch: daily retraining on new violations. Weekly: model performance audits.",

    // Reduction
    friction_reduction: "Moderation latency dropped from 95 days backlog to < 4 hours median. Manual review volume reduced from 2M/month to 80K/month (only uncertain cases). Team productivity increased 15x.",
    simplification: "Single policy decision point (the auto-flag threshold). Consistent decisions across 8 data centers. Audit trail for all decisions.",

    // Technical
    stack: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    infra: "Kubernetes across 8 global data centers. Model serving with TensorFlow Lite for edge inference. Redis for model caching and rate limiting.",
    APIs: "gRPC for low-latency inference. REST for review queue management. Webhooks for policy updates.",
    data_sources: "User-uploaded images, historical violation data, policy rules DB",

    // Outcome
    role: "ML Systems Engineer",
    outcome: "Processed 2M+ images monthly with 99.2% accuracy",
    results: [
      "99.2% accuracy on policy violation detection",
      "2M+ images processed monthly at scale",
      "Sub-200ms P99 latency globally",
      "98.5% uptime across all regions"
    ],
    learnings: ["Model confidence ≠ correctness. A model confident about edge cases was often wrong. Built a secondary 'uncertainty' classifier to flag genuinely ambiguous cases for human review.", "Global latency is hard. Shipping models to 8 regions meant managing model staleness. Started using adaptive serving: new models in primary DC first, rollout after 24h validation.", "False positives in moderation create user backlash. Spending 10% compute on reducing false positives from 0.5% to 0.1% was worth it—prevented PR damage worth 50x the infra cost."],

    // Limits
    current_limits: "Model struggles with context (same image OK in art gallery, not OK in other contexts). Demographic bias in training data for some categories. Adversarial examples still fool the system.",
    tradeoffs: "Accuracy vs latency: invested in inference optimization to stay under 200ms P99. For 5% of cases, we sacrifice latency for accuracy (run slow path even if medium-path confident).",

    // Future
    next_steps: "Add context understanding (post metadata, captions). Build user appeal workflow (currently no way to challenge auto-flags). Implement continuous model monitoring.",
    future_vision: "Self-improving moderation. When humans override auto-decisions, capture that as training data. System learns from every interaction.",

    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    accentColor: "hsl(200, 55%, 45%)",
    accentHover: "hsla(200,60%,65%,0.12)",
    year: 2022,
  },
  {
    id: 3,
    slug: "vie-market-radar",
    index: "03",
    title: "VIE Market Radar",
    description: "Real-time market intelligence platform tracking emerging opportunities across sectors.",
    fullDescription: "Market Radar aggregates signals from 500+ data sources, applies NLP+ML to identify emerging trends, and surfaces actionable intelligence to deal teams. Early-stage detection of market shifts with 72-hour lead time.",

    // Friction
    observed_problem: "Deal teams were reactive. They'd hear about market shifts 6+ months after they happened. Lost deals because they weren't aware of emerging categories. No systematic way to scan for white spaces.",
    impact: "$50M+ in missed opportunities annually. Sales team blind to market evolution. Strategy decisions made on outdated intelligence.",
    affected_users: "Deal team (15 people), strategy team (8 people), sales leadership (6)",

    // Signal
    key_observation: "Market signals were everywhere—news, hiring, API changes, product announcements, patent filings—but scattered. No one had a unified view. Early signals appeared 2-3 months before mainstream coverage.",
    hypothesis: "Aggregate 500+ signals + apply NLP to detect emerging patterns = 72-hour early warning system. Surface only high-conviction signals with business context.",

    // System
    architecture: "Signal ingestion layer (APIs + web scrapers). NLP pipeline (classification + trend detection). ML ranking (which signals matter for your business). Real-time alerts + searchable archive.",
    workflows: "Ingest signals → normalize → enrich with metadata → apply ML scoring → rank by business relevance → alert if pattern detected → analyst review → context layer → send to deal team",
    automation_logic: "If signal occurs in target vertical + 3+ similar signals in 7 days, rank as trend. If affects revenue-critical segment, high priority alert. Low-context signals (e.g. small funding rounds) → archive only.",
    pipelines: "Real-time: news APIs, RSS, SEC filings. Daily: hiring trends, domain registrations. Weekly: competitive analysis, patent filings.",

    // Reduction
    friction_reduction: "Deal team now gets early signals 72+ hours before market mainstream. Can plan responses instead of reacting. Identified 8 emerging categories the team hadn't noticed.",
    simplification: "Single searchable archive instead of 500+ bookmarks. One alert queue instead of noise from 12 tools. Structured signal format (when, where, what, impact score).",

    // Technical
    stack: ["Node.js", "PostgreSQL", "React", "D3.js", "Elasticsearch"],
    infra: "Serverless ingestion (AWS Lambda). PostgreSQL for signals store. Elasticsearch for semantic search. React dashboard for exploration.",
    APIs: "Webhooks from 50+ data providers. GraphQL for custom analytics. RSS feeds for distribution.",
    data_sources: "Crunchbase, news APIs, GitHub trending, Product Hunt, domain registrations, SEC EDGAR, job postings (LinkedIn, AngelList)",

    // Outcome
    role: "Full-stack Engineer",
    outcome: "Identified $12M+ in new business opportunities",
    results: [
      "$12M+ attributed revenue from identified opportunities",
      "72-hour early warning on market shifts",
      "Coverage across 8 verticals and 15 geographies",
      "75% accuracy on revenue predictions"
    ],
    learnings: ["Not all signals matter equally. Spent 3 months on perfect signal ingestion before realizing ranking was more important. Once we focused on ranking, signal volume didn't matter—quality did.", "False positives destroy trust. Early version flagged every startup trend. After filtering for revenue-relevant categories, alerts became actionable.", "Human + ML wins. ML ranking is good, but adding a 'deal team feedback' loop where they marked true vs false signals made the system 5x more useful in 3 months."],

    // Limits
    current_limits: "Early signals are often ambiguous. Hard to distinguish signal from noise at day 1. Sometimes trends die quickly. Geographic coverage is strong in US/EU, weak in APAC.",
    tradeoffs: "Signal freshness vs accuracy. We could ship signals in 30 minutes, but accuracy was 60%. Now it's 75% at 4-6 hour latency. Worth it.",

    // Future
    next_steps: "Add predictive revenue impact modeling. Build competitive threat alerts (when competitors enter new categories). Create team-specific signal feeds.",
    future_vision: "Prescriptive intelligence: not just 'trend detected' but 'here's how to capture this market before competitors do.'",

    technologies: ["Node.js", "PostgreSQL", "React", "D3.js", "Elasticsearch"],
    accentColor: "hsl(150, 45%, 38%)",
    accentHover: "hsla(150,45%,60%,0.12)",
    year: 2023,
  },
  {
    id: 4,
    slug: "ai-workflow-systems",
    index: "04",
    title: "AI Workflow Systems",
    description: "Modular automation framework for building and scaling AI-powered business processes.",
    fullDescription: "A composable framework for orchestrating AI models, data transformations, and human workflows. Enables non-technical teams to build and iterate on automation workflows without engineering overhead.",

    // Friction
    observed_problem: "ML models were trained but stuck in notebooks. Deploying a model meant 2-3 weeks of engineering. Business teams couldn't iterate. Every change required code review + redeployment. Talent bottleneck: 2 engineers, 50 model ideas.",
    impact: "Models weren't shipping. $3M/year in ML infrastructure but only 5 workflows in production. Other departments waiting weeks for simple automation.",
    affected_users: "Data science team (12 people), finance, HR, marketing (all wanted to automate workflows but couldn't code)",

    // Signal
    key_observation: "Most ML workflows followed same pattern: ingest → transform → model → action. Code was 80% boilerplate, 20% logic. Business teams understood workflow logic; they just couldn't write Python.",
    hypothesis: "Visual workflow builder + modular components = non-technical teams could build & deploy in days. Engineers focus on complex models, not plumbing.",

    // System
    architecture: "Visual DAG builder. Modular components (data loaders, transformers, model servers, actions). State machine for workflow execution. Versioning + rollback built-in.",
    workflows: "Workflow definition (visual) → compile to DAG → optimize execution order → run on Kubernetes → emit metrics + logs → human approval gates where needed",
    automation_logic: "Parallelizable steps run concurrently. Model inference cached. Failures retry with exponential backoff. Human approval nodes block until reviewed.",
    pipelines: "Real-time execution (API-triggered). Scheduled workflows (cron). Event-driven (webhook triggers).",

    // Reduction
    friction_reduction: "Deployment cycle dropped from 14 days to 2 days. Business teams can now self-serve simple workflows (50% of requests). Engineers freed from plumbing to focus on novel models.",
    simplification: "Removed requirement to know Python. Single source of truth for workflow state. Versioning means easy rollbacks. Monitoring built-in (not bolted on).",

    // Technical
    stack: ["Python", "Kubernetes", "FastAPI", "n8n", "PostgreSQL"],
    infra: "Kubernetes for scalable execution. PostgreSQL for workflow state. Redis for caching model outputs.",
    APIs: "REST for triggering workflows. GraphQL for querying state. Webhooks for integrations.",
    data_sources: "Internal: various databases, APIs. External: third-party SaaS (Salesforce, HubSpot, etc.)",

    // Outcome
    role: "Systems Architect",
    outcome: "Enabled 10x faster deployment of ML models into production",
    results: [
      "10x faster iteration cycle (2 weeks to 2 days)",
      "80% reduction in deployment errors",
      "Self-service workflow builder for business teams",
      "45+ workflows in production across 12 departments"
    ],
    learnings: ["Abstracting complexity requires deep understanding of what varies. Spent 2 weeks observing engineers build workflows before designing components. That work saved months of bad abstractions.", "Approval gates are critical for trust. Early version auto-executed everything. Added human review for high-impact decisions (changes affecting revenue, compliance). Adoption jumped 3x.", "Monitoring is non-negotiable when non-technical people deploy. Built sophisticated alerting + dashboards. Found that clear failure messages matter more than pretty UIs."],

    // Limits
    current_limits: "Complex branching logic is still hard to express visually. Custom components require Python (can't be fully no-code). Model inference latency not optimized for <100ms requirements.",
    tradeoffs: "Flexibility vs usability. More expressive → harder to use. We chose 80% usability for 90% of workflows, kept Python escape hatch for edge cases.",

    // Future
    next_steps: "Build marketplace of pre-built workflows. Add A/B testing framework. Implement automatic workflow optimization (re-order steps for speed).",
    future_vision: "AI that learns from execution. System suggests optimizations based on actual performance data. 'Running model B 30% faster than model A for this use case.'",

    technologies: ["Python", "Kubernetes", "FastAPI", "n8n", "PostgreSQL"],
    accentColor: "hsl(270, 40%, 50%)",
    accentHover: "hsla(270,40%,65%,0.12)",
    year: 2024,
  },
  {
    id: 5,
    slug: "data-observatory",
    index: "05",
    title: "Data Observatory",
    description: "Real-time data quality monitoring and anomaly detection platform.",
    fullDescription: "Observatory monitors data pipelines across 150+ sources, detects schema drift and quality issues, and triggers automated remediation. Built to handle streaming data at 100K events/second.",

    // Friction
    observed_problem: "Data pipelines were breaking constantly. An API changed format = 50 downstream queries broke. Missing data went unnoticed for days. Queries returning wrong results. Analytics team found bugs manually (lag: 24-48 hours).",
    impact: "Bad data in reports. Decisions based on incorrect numbers. Data incidents cost $40K/day in lost productivity + remediation. Trust in analytics eroded.",
    affected_users: "Data engineering team (8 people), analytics (15), business stakeholders (100+)",

    // Signal
    key_observation: "Most failures were predictable: schema changes, missing values, duplicates, out-of-order records, distribution shifts. The same types of errors happened repeatedly. No automated detection existed.",
    hypothesis: "Continuous monitoring + anomaly detection = catch issues before they propagate. Profile normal data patterns, alert when deviations occur.",

    // System
    architecture: "Stream profiler (Kafka consumers → real-time stats). Schema registry monitor. Quality checks (missing, duplicates, bounds). Anomaly detector (statistical + ML-based). Alert routing.",
    workflows: "Data flows in → profile schema/values/patterns → check against baselines → if anomaly detected, alert + log → trigger remediation (if configured) → incident record",
    automation_logic: "If NULL% > threshold, escalate immediately (usually means upstream broke). If value distribution shifts 3σ, investigate. If schema changes without registry update, reject incoming data.",
    pipelines: "Real-time: Kafka streams monitoring 150 sources. Hourly: quality score computation. Daily: baseline recomputation.",

    // Reduction
    friction_reduction: "Detection latency dropped from 24 hours to < 1 minute. 85% of incidents now auto-remediated. Data team spends time on analysis, not firefighting.",
    simplification: "Single monitoring platform (replaced 7 different tools). Unified alerting. Incident post-mortems now data-driven (here's exactly when it broke and why).",

    // Technical
    stack: ["Scala", "Apache Kafka", "Spark", "PostgreSQL", "Grafana"],
    infra: "Kafka cluster for real-time streaming. Spark for batch quality computations. PostgreSQL for incident + metric storage.",
    APIs: "Kafka consumer API for streaming. REST API for quality scores. Webhooks for incident notifications.",
    data_sources: "150+ databases, APIs, data warehouses, file uploads monitored in real-time",

    // Outcome
    role: "Data Platform Engineer",
    outcome: "Prevented 340+ data quality incidents, 99.8% pipeline uptime",
    results: [
      "99.8% overall pipeline uptime",
      "340+ incidents prevented or auto-remediated",
      "Sub-minute incident detection",
      "85% reduction in manual data validation time"
    ],
    learnings: ["Baselines are critical. Using global thresholds was useless (each source has different patterns). Per-source baselines + seasonal adjustment made detection accurate.", "False positives destroy adoption. Early version flagged too many things. Refined alerts to only high-severity issues. Engagement jumped from 20% of alerts to 80% actionable.", "Remediation is hard. Auto-fixes for simple cases (nulls) work well. For complex issues (schema changes), manual review still needed. Mix of automation + escalation works."],

    // Limits
    current_limits: "Can't predict completely novel failure modes. Distribution shift detection misses slow drifts. No automated fixes for schema-breaking changes (requires code review).",
    tradeoffs: "Sensitivity vs specificity. More alerts catch more issues but burn out on-call. Tuned for 99% recall, 95% precision (better to false-alert than miss real issue).",

    // Future
    next_steps: "Add data lineage tracking (trace issue to source). Build self-healing (auto-rollback bad data). Implement predictive quality alerts.",
    future_vision: "Systems that heal themselves. Detect drift, understand root cause, apply fix, learn from incident. Minimal human intervention for routine problems.",

    technologies: ["Scala", "Apache Kafka", "Spark", "PostgreSQL", "Grafana"],
    accentColor: "hsl(35, 60%, 50%)",
    accentHover: "hsla(35,60%,65%,0.12)",
    year: 2022,
  },
  {
    id: 6,
    slug: "job-apply-assistant",
    index: "06",
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

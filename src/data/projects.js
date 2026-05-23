export const projects = [
  {
    id: 1,
    slug: "elevia",
    index: "01",
    title: "Elevia",
    description: "AI-powered platform for automating complex business processes and data workflows.",
    fullDescription: "Elevia is an end-to-end automation platform that orchestrates data pipelines, AI workflows, and human-in-the-loop processes. Built for enterprises managing heterogeneous data sources and complex approval chains.",
    role: "Data & AI Engineer",
    outcome: "Reduced manual data processing by 85%, improved team efficiency",
    results: [
      "Reduced manual workload from 40 FTE to 6 FTE",
      "85% automation rate on routine tasks",
      "24-hour SLA for all automated processes",
      "ROI: 4.2x within 18 months"
    ],
    technologies: ["Python", "PostgreSQL", "FastAPI", "React", "n8n"],
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
    role: "ML Systems Engineer",
    outcome: "Processed 2M+ images monthly with 99.2% accuracy",
    results: [
      "99.2% accuracy on policy violation detection",
      "2M+ images processed monthly at scale",
      "Sub-200ms P99 latency globally",
      "98.5% uptime across all regions"
    ],
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
    role: "Full-stack Engineer",
    outcome: "Identified $12M+ in new business opportunities",
    results: [
      "$12M+ attributed revenue from identified opportunities",
      "72-hour early warning on market shifts",
      "Coverage across 8 verticals and 15 geographies",
      "75% accuracy on revenue predictions"
    ],
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
    role: "Systems Architect",
    outcome: "Enabled 10x faster deployment of ML models into production",
    results: [
      "10x faster iteration cycle (2 weeks to 2 days)",
      "80% reduction in deployment errors",
      "Self-service workflow builder for business teams",
      "45+ workflows in production across 12 departments"
    ],
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
    role: "Data Platform Engineer",
    outcome: "Prevented 340+ data quality incidents, 99.8% pipeline uptime",
    results: [
      "99.8% overall pipeline uptime",
      "340+ incidents prevented or auto-remediated",
      "Sub-minute incident detection",
      "85% reduction in manual data validation time"
    ],
    technologies: ["Scala", "Apache Kafka", "Spark", "PostgreSQL", "Grafana"],
    accentColor: "hsl(35, 60%, 50%)",
    accentHover: "hsla(35,60%,65%,0.12)",
    year: 2022,
  },
];

export const capabilities = [
  "Data pipeline architecture & ETL design",
  "AI/ML systems and workflows",
  "Automation and process optimization",
  "Full-stack engineering (backend, frontend, infrastructure)",
  "Product thinking and user-centric design",
];

export const approaches = [
  {
    number: "01",
    title: "Systems thinking",
    body: "Understanding how components interact, identifying leverage points, and designing for resilience.",
  },
  {
    number: "02",
    title: "Reducing friction",
    body: "Removing bottlenecks in workflows, automating repetitive tasks, and creating tools that disappear into the background.",
  },
  {
    number: "03",
    title: "Information architecture",
    body: "Structuring complex data in ways that reveal insights and enable better decision-making.",
  },
  {
    number: "04",
    title: "Practical AI",
    body: "Building automation that solves real problems, not chasing every trend. Focus on impact, not hype.",
  },
  {
    number: "05",
    title: "Clarity first",
    body: "Making technical complexity understandable to non-technical stakeholders. A product is only useful if people understand it.",
  },
  {
    number: "06",
    title: "Measurement",
    body: "Defining metrics that matter, instrumenting systems properly, and using data to guide decisions.",
  },
];

export const automationSteps = [
  { step: "00", note: "Lead from contact form" },
  { step: "01", note: "CRM qualification" },
  { step: "02", note: "Automated follow-up" },
  { step: "03", note: "Meeting scheduler" },
  { step: "04", note: "Project kickoff" },
];

export const techStack = [
  "React",
  "Vite",
  "Tailwind CSS",
  "Framer Motion",
  "Lucide Icons",
  "Node.js",
  "PostgreSQL",
  "n8n",
  "Python",
  "FastAPI",
];

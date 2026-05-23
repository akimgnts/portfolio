import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Import projects from frontend data
const projects = [
  {
    id: "proj_elevia",
    slug: "elevia",
    title: "Elevia",
    description:
      "AI-powered platform for automating complex business processes and data workflows.",
    fullDescription:
      "Elevia is an end-to-end automation platform that orchestrates data pipelines, AI workflows, and human-in-the-loop processes. Built for enterprises managing heterogeneous data sources and complex approval chains.",
    role: "Data & AI Engineer",
    outcome: "Reduced manual data processing by 85%, improved team efficiency",
    results: [
      "Reduced manual workload from 40 FTE to 6 FTE",
      "85% automation rate on routine tasks",
      "24-hour SLA for all automated processes",
      "ROI: 4.2x within 18 months",
    ],
    technologies: ["Python", "PostgreSQL", "FastAPI", "React", "n8n"],
    accentColor: "hsl(25, 70%, 55%)",
    accentHover: "hsla(25,80%,65%,0.12)",
    year: 2023,
    featured: true,
  },
  {
    id: "proj_vision_renata",
    slug: "vision-renata",
    title: "Vision Renata",
    description:
      "Computer vision system for real-time content moderation and quality control.",
    fullDescription:
      "A distributed computer vision system processing image streams in real-time for content moderation, fraud detection, and quality assurance. Deployed across 8 data centers with sub-200ms latency.",
    role: "ML Systems Engineer",
    outcome: "Processed 2M+ images monthly with 99.2% accuracy",
    results: [
      "99.2% accuracy on policy violation detection",
      "2M+ images processed monthly at scale",
      "Sub-200ms P99 latency globally",
      "98.5% uptime across all regions",
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    accentColor: "hsl(200, 55%, 45%)",
    accentHover: "hsla(200,60%,65%,0.12)",
    year: 2022,
    featured: true,
  },
  {
    id: "proj_vie_radar",
    slug: "vie-market-radar",
    title: "VIE Market Radar",
    description:
      "Real-time market intelligence platform tracking emerging opportunities across sectors.",
    fullDescription:
      "Market Radar aggregates signals from 500+ data sources, applies NLP+ML to identify emerging trends, and surfaces actionable intelligence to deal teams. Early-stage detection of market shifts with 72-hour lead time.",
    role: "Full-stack Engineer",
    outcome: "Identified $12M+ in new business opportunities",
    results: [
      "$12M+ attributed revenue from identified opportunities",
      "72-hour early warning on market shifts",
      "Coverage across 8 verticals and 15 geographies",
      "75% accuracy on revenue predictions",
    ],
    technologies: ["Node.js", "PostgreSQL", "React", "D3.js", "Elasticsearch"],
    accentColor: "hsl(150, 45%, 38%)",
    accentHover: "hsla(150,45%,60%,0.12)",
    year: 2023,
    featured: true,
  },
  {
    id: "proj_ai_workflows",
    slug: "ai-workflow-systems",
    title: "AI Workflow Systems",
    description:
      "Modular automation framework for building and scaling AI-powered business processes.",
    fullDescription:
      "A composable framework for orchestrating AI models, data transformations, and human workflows. Enables non-technical teams to build and iterate on automation workflows without engineering overhead.",
    role: "Systems Architect",
    outcome: "Enabled 10x faster deployment of ML models into production",
    results: [
      "10x faster iteration cycle (2 weeks to 2 days)",
      "80% reduction in deployment errors",
      "Self-service workflow builder for business teams",
      "45+ workflows in production across 12 departments",
    ],
    technologies: ["Python", "Kubernetes", "FastAPI", "n8n", "PostgreSQL"],
    accentColor: "hsl(270, 40%, 50%)",
    accentHover: "hsla(270,40%,65%,0.12)",
    year: 2024,
    featured: true,
  },
  {
    id: "proj_data_observatory",
    slug: "data-observatory",
    title: "Data Observatory",
    description:
      "Real-time data quality monitoring and anomaly detection platform.",
    fullDescription:
      "Observatory monitors data pipelines across 150+ sources, detects schema drift and quality issues, and triggers automated remediation. Built to handle streaming data at 100K events/second.",
    role: "Data Platform Engineer",
    outcome: "Prevented 340+ data quality incidents, 99.8% pipeline uptime",
    results: [
      "99.8% overall pipeline uptime",
      "340+ incidents prevented or auto-remediated",
      "Sub-minute incident detection",
      "85% reduction in manual data validation time",
    ],
    technologies: ["Scala", "Apache Kafka", "Spark", "PostgreSQL", "Grafana"],
    accentColor: "hsl(35, 60%, 50%)",
    accentHover: "hsla(35,60%,65%,0.12)",
    year: 2022,
    featured: false,
  },
];

async function main() {
  console.log("🌱 Starting database seed...");

  // Clear existing projects (optional, remove if you want to keep old data)
  // await prisma.project.deleteMany({});

  // Seed projects
  for (const project of projects) {
    const existing = await prisma.project.findUnique({
      where: { slug: project.slug },
    });

    if (existing) {
      console.log(`⚠️  Project "${project.title}" already exists, skipping...`);
      continue;
    }

    await prisma.project.create({
      data: project,
    });

    console.log(`✓ Created project: ${project.title}`);
  }

  console.log("✅ Seed complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

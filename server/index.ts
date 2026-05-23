import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.API_PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ==================== ROUTES ====================

/**
 * GET /api/projects
 * Fetch all published projects (paginated)
 */
app.get("/api/projects", async (req, res) => {
  try {
    const { skip = "0", take = "10" } = req.query;
    const projects = await prisma.project.findMany({
      where: {
        publishedAt: {
          not: null,
        },
      },
      orderBy: { year: "desc" },
      skip: parseInt(skip as string),
      take: parseInt(take as string),
    });

    const total = await prisma.project.count({
      where: { publishedAt: { not: null } },
    });

    res.json({
      data: projects,
      pagination: {
        total,
        skip: parseInt(skip as string),
        take: parseInt(take as string),
      },
    });
  } catch (error) {
    console.error("GET /api/projects error:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

/**
 * GET /api/projects/:slug
 * Fetch single project by slug
 */
app.get("/api/projects/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const project = await prisma.project.findUnique({
      where: { slug },
    });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json({ data: project });
  } catch (error) {
    console.error(`GET /api/projects/${req.params.slug} error:`, error);
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

/**
 * POST /api/leads
 * Submit contact form (public)
 */
app.post("/api/leads", async (req, res) => {
  try {
    const { name, email, projectType, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Missing required fields: name, email, message" });
    }

    const lead = await prisma.lead.create({
      data: {
        name,
        email,
        projectType: projectType || null,
        message,
      },
    });

    // TODO: Send email notification + webhook to n8n
    console.log("✓ New lead:", { id: lead.id, email: lead.email });

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      data: { id: lead.id },
    });
  } catch (error) {
    console.error("POST /api/leads error:", error);
    res.status(500).json({ error: "Failed to create lead" });
  }
});

/**
 * GET /api/health
 * Health check
 */
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ==================== ERROR HANDLING ====================

app.use("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

// ==================== SERVER ====================

const start = async () => {
  try {
    await prisma.$connect();
    console.log("✓ Database connected");

    app.listen(PORT, () => {
      console.log(`✓ API server running on http://localhost:${PORT}`);
      console.log(`  - GET  /api/projects`);
      console.log(`  - GET  /api/projects/:slug`);
      console.log(`  - POST /api/leads`);
      console.log(`  - GET  /api/health`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

process.on("SIGINT", async () => {
  console.log("\n⏹  Shutting down...");
  await prisma.$disconnect();
  process.exit(0);
});

start();

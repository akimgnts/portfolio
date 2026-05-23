# Backend Setup Guide

## Quick Start

### 1. Setup Database

**Option A: Use Supabase (Recommended for MVP)**
```bash
# Create free Supabase project at https://supabase.com
# Copy CONNECTION STRING from project settings
# Paste into .env as DATABASE_URL
```

**Option B: Local PostgreSQL**
```bash
# Install PostgreSQL (macOS with Homebrew)
brew install postgresql@15
brew services start postgresql@15

# Create database
createdb portfolio_db

# Set .env
DATABASE_URL="postgresql://localhost/portfolio_db"
```

### 2. Install & Migrate

```bash
# Copy environment template
cp .env.example .env

# Update DATABASE_URL in .env

# Install Prisma (already done)
npm install

# Create database schema
npm run db:push

# Seed projects
npm run db:seed
```

### 3. Start API Server

```bash
# Terminal 1: API server (watches for changes)
npm run api:dev

# Terminal 2: Frontend dev server
npm run dev
```

API runs on `http://localhost:3001`
Frontend runs on `http://localhost:5173`

---

## Database Commands

```bash
# View/edit database via Prisma Studio
npm run db:studio

# Create migration after schema changes
npm run db:migrate -- --name add_feature_name

# Apply pending migrations
npm run db:push

# Seed database with project data
npm run db:seed

# Reset database (⚠️  DESTRUCTIVE)
npx prisma migrate reset
```

---

## API Endpoints

### Public

**GET `/api/projects`**
- Fetch all projects
- Query params: `skip=0&take=10` (pagination)
- Response: `{ data: Project[], pagination: { total, skip, take } }`

**GET `/api/projects/:slug`**
- Fetch single project by slug
- Response: `{ data: Project }`

**POST `/api/leads`**
- Submit contact form
- Body: `{ name, email, projectType?, message }`
- Response: `{ success: true, data: { id } }`

**GET `/api/health`**
- Health check
- Response: `{ status: "ok", timestamp }`

### Admin (future)

```
POST /api/auth/login
GET  /api/leads
GET  /api/leads/:id
PATCH /api/leads/:id
POST /api/projects (admin)
PATCH /api/projects/:slug (admin)
DELETE /api/projects/:slug (admin)
```

---

## Frontend Integration

### Fetch Projects (Homepage)

```jsx
// src/pages/Home.jsx
import { useEffect, useState } from "react";

function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      {/* Render projects from state instead of hardcoded data */}
    </>
  );
}
```

### Fetch Single Project

```jsx
// src/pages/ProjectDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/api/projects/${slug}`)
      .then((res) => res.json())
      .then((data) => setProject(data.data))
      .catch((err) => console.error(err));
  }, [slug]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.fullDescription}</p>
      {/* Render project details */}
    </div>
  );
}
```

### Submit Contact Form

```jsx
// Update Contact.jsx form submission
const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } else {
      toast.error("Failed to send message");
    }
  } catch (error) {
    console.error("Submit error:", error);
    toast.error("Error sending message");
  } finally {
    setSending(false);
  }
};
```

---

## Environment Variables

Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Update with your actual values:

```env
DATABASE_URL="postgresql://user:pass@host/db"
API_PORT=3001
VITE_API_URL=http://localhost:3001
```

---

## Troubleshooting

**"database error: ECONNREFUSED"**
- Check DATABASE_URL is correct
- Ensure PostgreSQL is running: `brew services list`
- Verify database exists: `psql -l`

**"relation \"projects\" does not exist"**
- Run schema migration: `npm run db:push`

**"CORS errors"**
- CORS is enabled in server/index.ts
- If issues, check `app.use(cors())` is before routes

**Seed script fails**
- Ensure database is created and migrations applied
- Check .env DATABASE_URL
- Run: `npm run db:push` then `npm run db:seed`

---

## Next Steps

1. ✅ Setup database (Supabase or local PostgreSQL)
2. ✅ Run migrations & seed
3. ✅ Start API server (`npm run api:dev`)
4. ⏳ Update frontend to fetch from API instead of hardcoded data
5. ⏳ Build ProjectDetail page (`/projects/:slug`)
6. ⏳ Setup admin panel
7. ⏳ Add email integration
8. ⏳ Setup n8n webhooks for leads

---

## Architecture

```
┌─────────────────────────────────────────────┐
│           Frontend (React + Vite)            │
│         http://localhost:5173               │
│                                              │
│  - Home (fetch /api/projects)               │
│  - ProjectDetail (fetch /api/projects/:slug)│
│  - Contact form (POST /api/leads)           │
└────────────────┬────────────────────────────┘
                 │
        HTTP/REST │
                 │
┌────────────────▼────────────────────────────┐
│      API Server (Express + Prisma)          │
│         http://localhost:3001               │
│                                              │
│  - GET /api/projects                        │
│  - GET /api/projects/:slug                  │
│  - POST /api/leads                          │
│  - GET /api/health                          │
└────────────────┬────────────────────────────┘
                 │
         Queries │
                 │
┌────────────────▼────────────────────────────┐
│   PostgreSQL Database (Prisma Client)       │
│   - projects table                          │
│   - leads table                             │
│   - events table                            │
│   - admin_users table                       │
└─────────────────────────────────────────────┘
```

---

## Important Notes

- **Frontend URL:** Keep `http://localhost:5173`
- **API URL:** Use `http://localhost:3001` in development
- **Database:** Once in production, use Supabase/RDS with connection pooling
- **Env secrets:** Never commit `.env` file (already in .gitignore)
- **CORS:** Currently allows all origins in dev. Lock down before production.

---

## Cost Estimate (Production)

- **Database (Supabase):** $25/month (1GB, 100k row limit)
- **Hosting (Vercel):** Free tier (frontend)
- **Hosting (Railway/Render):** ~$7/month (API server) or use Vercel Functions
- **Email (SendGrid):** Free tier (100/day)
- **Total:** ~$32/month minimum

(Or go serverless with Vercel Functions + Supabase = $25/month)

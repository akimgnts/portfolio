# Portfolio Backend TODO

## Status
**Frontend:** ✅ Frozen & stable (responsive, clean architecture, real project content)
**Backend:** ⏳ Pending

---

## Phase 1: Core Models & APIs

### 1. Project Entity
```ts
Project {
  id: string (UUID)
  slug: string (unique)
  title: string
  description: string
  fullDescription: string (rich text)
  role: string
  outcome: string
  results: string[] (array of bullet points)
  technologies: string[]
  accentColor: string (HSL)
  accentHover: string (HSL)
  year: number
  
  // Metadata
  createdAt: timestamp
  updatedAt: timestamp
  publishedAt: timestamp | null
  featured: boolean
}
```

**Routes:**
- `GET /api/projects` → List all published projects (paginated)
- `GET /api/projects/:slug` → Single project detail
- `POST /api/projects` (admin) → Create
- `PATCH /api/projects/:slug` (admin) → Update
- `DELETE /api/projects/:slug` (admin) → Delete

---

### 2. Lead Entity (Contact Form Submissions)
```ts
Lead {
  id: string (UUID)
  name: string
  email: string
  projectType: enum ["Data Pipeline", "AI Workflow", "Automation System", "Consultation", "Other"]
  message: string
  
  // Auto-filled
  createdAt: timestamp
  updatedAt: timestamp
  
  // CRM tracking
  status: enum ["new", "contacted", "qualified", "converted", "lost"] (default: "new")
  notes: string | null
  assignedTo: string (user ID) | null
  
  // Future automation
  automationStatus: enum ["pending", "contacted", "scheduled", "completed"]
}
```

**Routes:**
- `POST /api/leads` → Submit contact form (public)
- `GET /api/leads` (admin) → List all leads with filtering/search
- `GET /api/leads/:id` (admin) → Single lead detail
- `PATCH /api/leads/:id` (admin) → Update status/notes

**Notifications:**
- Email to akimguentas13@gmail.com on new lead
- Webhook to n8n on lead creation (trigger automation flow)

---

### 3. Event Tracking Model
```ts
Event {
  id: string (UUID)
  eventType: enum ["page_view", "scroll", "click", "form_submit", "project_view"]
  
  // Context
  timestamp: timestamp
  path: string
  userAgent: string
  referer: string | null
  sessionId: string (cross-page tracking)
  
  // Event-specific data
  data: object {
    // page_view: { page: string }
    // scroll: { scrollDepth: number }
    // click: { target: string, text: string }
    // form_submit: { formType: string, success: boolean }
    // project_view: { projectSlug: string }
  }
}
```

**Routes:**
- `POST /api/events` → Log event (public, no auth)
- `GET /api/events/analytics` (admin) → Dashboard stats

---

### 4. Admin User Model (future)
```ts
AdminUser {
  id: string (UUID)
  email: string
  passwordHash: string
  role: enum ["owner", "editor", "viewer"]
  
  createdAt: timestamp
  lastLoginAt: timestamp
}
```

---

## Phase 2: Authentication & Admin Panel

### Auth
- Email + password (or OAuth via Base44 platform)
- JWT tokens (access + refresh)
- Admin-only endpoints require token + valid role

### Admin Panel Routes (frontend)
- `/admin/login`
- `/admin/dashboard` (overview, stats)
- `/admin/projects` (CRUD interface)
- `/admin/leads` (list, detail, update status/notes)
- `/admin/events` (analytics dashboard)

---

## Phase 3: Integrations

### Email (Contact Form → Inbox)
- Service: SendGrid / Resend / Mailgun
- Template: New lead notification
- Recipient: akimguentas13@gmail.com

### Webhook → n8n
- Trigger: New lead submitted
- Payload: { id, name, email, projectType, message, createdAt }
- n8n workflow: "Lead from contact form" → CRM qualification → Follow-up → Calendar link

### Analytics (Optional)
- PostHog / Plausible (lightweight privacy-focused alternative)
- Track: Page views, project views, form submissions, scroll depth
- Dashboard: Visitor counts, top pages, conversion funnel

---

## Phase 4: SEO & Metadata

### SEO Model
```ts
SEOMeta {
  id: string
  entityType: enum ["project", "page"]
  entityId: string
  
  title: string
  description: string
  keywords: string[]
  ogImage: string (URL)
  ogTitle: string
  ogDescription: string
}
```

### Implementation
- Inject into `<head>` on page load (Next.js `next/head`, or React Helmet)
- Dynamic og:image per project (generated or stored)
- Sitemap.xml generation

---

## Database Schema (PostgreSQL)

```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  full_description TEXT,
  role VARCHAR(255),
  outcome TEXT,
  results TEXT[], -- JSON array
  technologies TEXT[], -- JSON array
  accent_color VARCHAR(50),
  accent_hover VARCHAR(50),
  year INT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP,
  published_at TIMESTAMP
);

CREATE TABLE leads (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  project_type VARCHAR(50),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  assigned_to UUID,
  automation_status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP
);

CREATE TABLE events (
  id UUID PRIMARY KEY,
  event_type VARCHAR(50) NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  path VARCHAR(500),
  user_agent TEXT,
  referer VARCHAR(500),
  session_id UUID,
  data JSONB,
  CONSTRAINT idx_session UNIQUE (session_id, timestamp)
);

CREATE TABLE admin_users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  role VARCHAR(50) DEFAULT 'editor',
  created_at TIMESTAMP DEFAULT NOW(),
  last_login_at TIMESTAMP
);
```

---

## API Stack Recommendation

### Option A: Node.js + Express (lightweight)
- Express + TypeScript
- Prisma ORM (schema-first, type-safe)
- PostgreSQL

### Option B: Fastapi (Python, if preferred)
- FastAPI + SQLAlchemy
- Alembic for migrations
- PostgreSQL

### Option C: Use Base44 SDK (if available)
- Build on top of Base44's platform
- Reuse auth, database, webhooks

---

## Frontend Integration Checklist

- [ ] Contact form → POST /api/leads
- [ ] Project detail page → GET /api/projects/:slug
- [ ] Admin login page → POST /api/auth/login
- [ ] Admin projects page → GET /api/projects (with filtering)
- [ ] Admin leads page → GET /api/leads
- [ ] Event tracking script → POST /api/events (page_view, click, project_view)
- [ ] Webhook handler ready for n8n events (future)
- [ ] OG meta tags dynamically injected (future SEO)

---

## Not Implementing Yet
- OAuth / social login
- Payment processing
- User accounts (non-admin)
- Comments / feedback
- Blog / articles

---

## Timeline Estimate
- **Phase 1** (Models + APIs): 3–4 days
- **Phase 2** (Auth + Admin UI): 2–3 days
- **Phase 3** (Integrations): 2 days
- **Phase 4** (SEO): 1 day

**Total:** ~1–1.5 weeks of backend work after frontend is locked.

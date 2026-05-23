# API Integration Checklist

## Phase 1: GET /api/projects (Homepage)

**Goal:** Render projects from database instead of hardcoded data

### Steps

1. **Update `src/pages/Home.jsx` to fetch projects**

```jsx
import { useEffect, useState } from "react";
import Projects from "../components/Projects";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects?take=10");
        const { data } = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        // Fallback: use imported hardcoded data
        // setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <div>Loading projects...</div>;

  return (
    <>
      {/* Pass projects as prop */}
      <Projects projects={projects} />
      {/* ... other sections ... */}
    </>
  );
}
```

2. **Update `src/components/Projects.jsx` to accept props**

```jsx
export default function Projects({ projects }) {
  // Use props instead of hardcoded data
  return (
    <section id="work" className="py-40 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={siteContent.sections.work.eyebrow}
          heading={siteContent.sections.work.heading}
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

3. **Test in browser**
   - Start API: `npm run api:dev`
   - Start frontend: `npm run dev`
   - Check Projects section renders from DB
   - Verify no visual changes (same Base44 design)

---

## Phase 2: GET /api/projects/:slug (ProjectDetail Page)

**Goal:** Create dynamic project detail page

### Steps

1. **Create `src/pages/ProjectDetail.jsx`**

```jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectDetail() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/projects/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 max-w-5xl mx-auto px-6 md:px-8 py-20 w-full">
          {/* Project Hero */}
          <div className="mb-16">
            <p className="text-accent text-sm font-medium mb-4">
              {new Date(project.year, 0).getFullYear()}
            </p>
            <h1 className="font-serif text-6xl font-medium mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {project.description}
            </p>
          </div>

          {/* Full Description */}
          <div className="prose mb-16">
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
              {project.fullDescription}
            </p>
          </div>

          {/* Role + Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-y border-border mb-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/50 mb-2">
                Role
              </p>
              <p className="text-[15px] text-muted-foreground">
                {project.role}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground/50 mb-2">
                Outcome
              </p>
              <p className="text-[15px] text-muted-foreground">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Results */}
          {project.results && (
            <div className="mb-16">
              <h2 className="font-serif text-2xl font-medium mb-6">Results</h2>
              <ul className="space-y-3">
                {project.results.map((result, idx) => (
                  <li key={idx} className="text-[15px] text-muted-foreground">
                    ✓ {result}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-medium mb-6">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          </div>

          {/* Back Link */}
          <a
            href="/#work"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            ← Back to work
          </a>
        </main>
      </div>
      <Footer />
    </>
  );
}
```

2. **Update `src/App.jsx` to enable route**

```jsx
import ProjectDetail from "./pages/ProjectDetail";

<Route path="/projects/:slug" element={<ProjectDetail />} />
```

3. **Update `src/components/Projects.jsx` to link to detail**

```jsx
function ProjectCard({ project, index: cardIndex }) {
  return (
    <a href={`/projects/${project.slug}`} className="block">
      {/* ... card content ... */}
    </a>
  );
}
```

4. **Test**
   - Click on project card → should navigate to `/projects/:slug`
   - Page should load project from API
   - Design should match Base44 (same styling, no surprises)

---

## Phase 3: POST /api/leads (Contact Form)

**Goal:** Save contact submissions to database

### Steps

1. **Update `src/components/Contact.jsx` form submission**

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setSending(true);

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Failed to submit");
    }

    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  } catch (error) {
    console.error("Submit error:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setSending(false);
  }
};
```

2. **Test**
   - Fill out contact form
   - Click "Send message"
   - Should see success toast
   - Check database: `npm run db:studio` → browse leads table
   - Verify data is saved correctly

---

## Phase 4: Monitoring

Once phases 1-3 are complete:

```bash
# View all leads in dashboard
npm run db:studio

# Check API logs
# Watch server/index.ts output for requests

# Monitor: Check no visual regressions
# - Projects render correctly
# - ProjectDetail page matches design
# - Contact form works end-to-end
```

---

## Rollback Plan

If something breaks:

1. **Frontend still has hardcoded data** in `src/data/projects.js`
2. **Can revert to hardcoded** if API has issues
3. **Keep API endpoints working** for future use

Example fallback:
```jsx
const [projects, setProjects] = useState(defaultProjectsFromData);

useEffect(() => {
  fetch("/api/projects")
    .then(/* ... */)
    .catch(() => {
      // Keep default data if API fails
    });
}, []);
```

---

## Timeline

- **Phase 1 (GET /api/projects):** 30 minutes
- **Phase 2 (GET /api/projects/:slug):** 45 minutes
- **Phase 3 (POST /api/leads):** 20 minutes
- **Phase 4 (Testing):** 20 minutes

**Total:** ~2 hours to full API integration

---

## After Integration

✅ Projects are dynamic (edit in `npm run db:studio`, auto-update homepage)
✅ Contact form saves leads (check in `npm run db:studio`)
✅ ProjectDetail pages exist (`/projects/elevia`, `/projects/vision-renata`, etc.)
✅ Codebase ready for admin panel + future features
✅ Design remains 100% Base44 (no visual changes)

Next: Admin panel, email notifications, n8n webhooks.

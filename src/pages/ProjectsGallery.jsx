import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/Button";
import { ProjectCard } from "../components/ProjectCard";
import { fetchProjects } from "../services/projectService";
import { siteContent } from "../data/content";

export default function ProjectsGallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [technology, setTechnology] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const data = await fetchProjects(0, 100);
        if (active) setProjects(data.filter((project) => project.published !== false));
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    return () => { active = false; };
  }, [attempt]);

  const technologies = [...new Set(projects.flatMap((project) => project.stack || []))].sort();
  const searchTerms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const filteredProjects = projects.filter((project) => {
    const searchable = [project.title, project.description, ...(project.stack || [])]
      .join(" ").toLowerCase();
    return searchTerms.every((term) => searchable.includes(term))
      && (!technology || project.stack?.includes(technology));
  });
  const hasFilters = Boolean(query || technology);
  const resetFilters = () => {
    setQuery("");
    setTechnology("");
  };
  const retry = () => {
    setLoading(true);
    setError(false);
    setAttempt((value) => value + 1);
  };

  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-6 md:px-8 section-gradient-hero" aria-labelledby="projects-heading">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
                {siteContent.sections.work.eyebrow}
              </p>
              <h1 id="projects-heading" className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground mb-6">
                {siteContent.sections.work.heading}
              </h1>
              <p className="text-base text-muted-foreground leading-relaxed">
                {siteContent.sections.work.intro}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 md:pb-28 px-6 md:px-8" aria-label="Browse projects">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-border bg-white/60 p-5 sm:p-6 mb-8">
              <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
                <div>
                  <label htmlFor="project-search" className="block text-sm font-medium text-foreground mb-2">
                    Rechercher un projet
                  </label>
                  <div className="relative">
                    <Search aria-hidden="true" className="absolute left-3.5 top-3.5 size-4 text-muted-foreground pointer-events-none" />
                    <input
                      id="project-search"
                      type="search"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Projet, problème ou technologie"
                      aria-controls="project-results"
                      disabled={loading || error}
                      className="w-full h-11 pl-10 pr-4 rounded-lg bg-white border border-border text-sm text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="project-technology" className="block text-sm font-medium text-foreground mb-2">
                    Technologie
                  </label>
                  <select
                    id="project-technology"
                    value={technology}
                    onChange={(event) => setTechnology(event.target.value)}
                    aria-controls="project-results"
                    disabled={loading || error}
                    className="w-full sm:w-48 h-11 px-3 rounded-lg bg-white border border-border text-sm text-foreground disabled:opacity-50"
                  >
                    <option value="">Toutes les technologies</option>
                    {technologies.map((tech) => <option key={tech} value={tech}>{tech}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 mt-4 min-h-8">
                <p role="status" aria-atomic="true" className="text-sm text-muted-foreground">
                  {loading ? "Chargement des projets…" : error ? "Les projets ne peuvent pas être chargés." : `${filteredProjects.length} projet${filteredProjects.length > 1 ? "s" : ""} sur ${projects.length}`}
                </p>
                {hasFilters && (
                  <button type="button" onClick={resetFilters} className="inline-flex items-center gap-1.5 text-sm text-foreground underline underline-offset-4 hover:text-accent py-1">
                    <X aria-hidden="true" className="size-3.5" />
                    Effacer les filtres
                  </button>
                )}
              </div>
            </div>

            <div id="project-results" aria-busy={loading}>
              {loading ? (
                <div aria-hidden="true" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[0, 1].map((index) => (
                    <div key={index} className="h-72 rounded-2xl border border-border bg-white/50 p-8 motion-safe:animate-pulse">
                      <div className="h-5 w-1/3 rounded bg-muted mb-6" />
                      <div className="h-3 rounded bg-muted mb-3" />
                      <div className="h-3 w-4/5 rounded bg-muted" />
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center rounded-2xl border border-border bg-white/50 px-6 py-16">
                  <h2 className="font-serif text-2xl mb-3">Les projets sont momentanément indisponibles.</h2>
                  <p className="text-muted-foreground mb-6">Réessaie dans un instant.</p>
                  <Button type="button" onClick={retry}>Réessayer</Button>
                </div>
              ) : filteredProjects.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProjects.map((project, idx) => (
                    <ProjectCard key={project.id || project.slug} project={project} index={idx} />
                  ))}
                </div>
              ) : (
                <div className="text-center rounded-2xl border border-border bg-white/50 px-6 py-16">
                  <Search aria-hidden="true" className="size-7 text-muted-foreground mx-auto mb-5" />
                  <h2 className="font-serif text-2xl mb-3">{hasFilters ? "Aucun projet ne correspond." : "De nouveaux projets arrivent."}</h2>
                  <p className="text-muted-foreground mb-6">
                    {hasFilters ? "Essaie un autre mot-clé ou affiche tous les projets." : "Tu as un système à améliorer ? Parlons-en."}
                  </p>
                  {hasFilters ? (
                    <Button type="button" variant="outline" onClick={resetFilters}>Afficher tous les projets</Button>
                  ) : (
                    <Button asChild><Link to="/#contact">Me contacter <ArrowRight aria-hidden="true" /></Link></Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

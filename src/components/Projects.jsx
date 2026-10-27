import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects as defaultProjects } from "../data/projects";
import { siteContent } from "../data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { fetchProjects } from "../services/projectService";

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjects(0, 100);
      setProjects(data.filter((project) => project.published !== false).slice(0, 4));
      setLoading(false);
    };
    load();
  }, []);

  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={siteContent.sections.work.eyebrow}
          heading={siteContent.sections.work.heading}
          className="mb-12"
        />

        {siteContent.sections.work.intro && (
          <motion.p
            className="text-[15px] text-muted-foreground leading-relaxed mb-20 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {siteContent.sections.work.intro}
          </motion.p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {loading && <p role="status" className="text-muted-foreground">Loading projects…</p>}
          {!loading && projects.length === 0 && <p className="text-muted-foreground">Les projets arrivent bientôt. Parlons du tien ci-dessous.</p>}
          {!loading && projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-all"
          >
            Voir tous les projets →
          </Link>
        </div>
      </div>
    </section>
  );
}

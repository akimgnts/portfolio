import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SectionHeader } from "../components/ui/SectionHeader";
import { fetchProjects } from "../services/projectService";

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={`/projects/${project.slug}`}
      className="block rounded-2xl border border-border/10 bg-card overflow-hidden group hover:shadow-[0_8px_40px_hsla(0,0%,0%,0.07)] hover:-translate-y-0.5 transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
    >
      {/* Accent band */}
      <div
        className="h-1 w-full rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Hover ambient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${project.accentHover}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-8">
        <p className="text-xs font-mono text-muted-foreground/50 mb-2">
          {project.year}
        </p>

        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Role + Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-t border-b border-border/15">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-2">
              Role
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              {project.role}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-2">
              Outcome
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="pt-8 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-foreground border border-border/12"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-foreground border border-border/12">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsGallery() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-40 px-6 md:px-8 section-gradient-hero">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <SectionHeader
                eyebrow="Work"
                heading="Selected projects"
                className="text-center mb-8"
              />
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                A selection of projects I've built and led over the past 8 years.
                Each represents a different challenge in systems thinking, automation,
                and solving real problems at scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-40 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            {loading ? (
              <div className="text-center py-20">Loading projects...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <ProjectCard key={project.id || project.slug} project={project} index={idx} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

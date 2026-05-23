import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { siteContent } from "../data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Tag } from "./ui/Tag";

function ProjectCard({ project, index: cardIndex }) {
  return (
    <a href={`/projects/${project.slug}`} className="block">
      <motion.div
        className="rounded-xl border border-border/10 bg-white/25 overflow-hidden group hover:bg-white/40 hover:shadow-[0_8px_24px_hsla(0,0%,0%,0.04)] hover:-translate-y-0.5 transition-all duration-500 p-9"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: cardIndex * 0.12 }}
      >
      {/* Accent band */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-50 transition-opacity duration-500"
        style={{ backgroundColor: project.accentColor }}
      />

      {/* Hover ambient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${project.accentHover}, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-xs font-mono text-muted-foreground/50 mb-2">{project.index}</p>

        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4 mt-1" />
        </div>

        {/* Metadata rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-t border-b border-border/15">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-2">Role</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{project.role}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-2">Outcome</p>
            <p className="text-[15px] text-muted-foreground leading-relaxed">{project.outcome}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="pt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
      </motion.div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-40 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <SectionHeader
          eyebrow={siteContent.sections.work.eyebrow}
          heading={siteContent.sections.work.heading}
          className="mb-20"
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "./ui/Tag";
import ProjectVisual from "./ProjectVisual";

const MotionLink = motion.create(Link);

/**
 * Universal ProjectCard component
 * Used on: homepage, /projects gallery, admin, related projects, anywhere projects are listed
 * Single source of truth for project card design
 */
export function ProjectCard({ project, index = 0, variant = "default" }) {
  const isLink = variant !== "admin";
  const Component = isLink ? MotionLink : motion.div;

  const cardProps = isLink
    ? {
        to: `/projects/${encodeURIComponent(project.slug)}`,
        className: "block",
      }
    : {
        className: "",
      };

  return (
    <Component
      {...cardProps}
      className={`relative h-full rounded-2xl border border-border/70 bg-card overflow-hidden group hover:shadow-[0_8px_40px_hsla(0,0%,0%,0.07)] hover:-translate-y-0.5 transition-all duration-500 ${
        cardProps.className || ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: Math.min(index * 0.06, 0.24) }}
    >
      <ProjectVisual slug={project.slug} />

      {/* Accent band */}
      <div
        className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundColor: project.accentColor || "hsl(25, 70%, 55%)",
        }}
      />

      {/* Hover ambient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${
            project.accentHover || "hsla(25,80%,65%,0.12)"
          }, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Meta */}
        <p className="text-xs font-mono text-muted-foreground mb-2">
          {project.period || project.year || new Date().getFullYear()}
        </p>

        {/* Title + Arrow */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>
          {isLink && (
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4 mt-1" />
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground border-t border-border/40 pt-4">
          <span className="font-medium text-foreground">{project.role || "Projet personnel"}</span>
        </div>

        {/* Stack tags (minimal) */}
        {project.stack && project.stack.length > 0 && (
          <div className="pt-4 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
            {project.stack.length > 3 && (
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/20 text-secondary-foreground border border-border/12">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Component>
  );
}

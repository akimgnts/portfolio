import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "./ui/Tag";

/**
 * Universal ProjectCard component
 * Used on: homepage, /projects gallery, admin, related projects, anywhere projects are listed
 * Single source of truth for project card design
 */
export function ProjectCard({ project, index = 0, variant = "default" }) {
  const isLink = variant !== "admin";
  const Component = isLink ? motion.a : motion.div;

  const cardProps = isLink
    ? {
        href: `/projects/${project.slug}`,
        className: "block",
      }
    : {
        className: "",
      };

  return (
    <Component
      {...cardProps}
      className={`rounded-2xl border border-border/10 bg-card overflow-hidden group hover:shadow-[0_8px_40px_hsla(0,0%,0%,0.07)] hover:-translate-y-0.5 transition-all duration-500 ${
        cardProps.className || ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
    >
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
      <div className="relative z-10 p-8">
        {/* Meta */}
        <p className="text-xs font-mono text-muted-foreground/50 mb-2">
          {project.year || new Date().getFullYear()}
        </p>

        {/* Title + Arrow */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
          {isLink && (
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0 ml-4 mt-1" />
          )}
        </div>

        {/* Friction + Observed Problem (key signal) */}
        {(project.impact || project.observed_problem) && (
          <div className="mb-6 pb-6 border-b border-border/15">
            {project.impact && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-1">
                  Impact
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.impact}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Role + Outcome (what changed) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-t border-b border-border/15">
          {project.role && (
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-2">
                Role
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {project.role}
              </p>
            </div>
          )}
          {project.friction_reduction && (
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-2">
                Friction Reduction
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {project.friction_reduction}
              </p>
            </div>
          )}
        </div>

        {/* Stack tags (minimal) */}
        {project.stack && project.stack.length > 0 && (
          <div className="pt-8 flex flex-wrap gap-2">
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

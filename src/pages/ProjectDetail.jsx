import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tag } from "../components/ui/Tag";
import { fetchProjectBySlug } from "../services/projectService";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjectBySlug(slug);
      if (!data) {
        navigate("/projects");
        return;
      }
      setProject(data);
      setLoading(false);
    };
    load();
  }, [slug, navigate]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Loading project...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p>Project not found</p>
        </div>
        <Footer />
      </>
    );
  }

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
            >
              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to work
              </button>

              <p className="text-accent text-sm font-medium mb-4">
                {project.year || new Date().getFullYear()}
              </p>
              <h1 className="font-serif text-6xl font-medium mb-6 text-foreground">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-40 px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Full Description */}
            {project.fullDescription && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>
            )}

            {/* Problem Section */}
            {project.problem && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20 pb-20 border-b border-border/15"
              >
                <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
                  The Problem
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </motion.div>
            )}

            {/* Approach Section */}
            {project.approach && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20 pb-20 border-b border-border/15"
              >
                <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
                  My Approach
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {project.approach}
                </p>
              </motion.div>
            )}

            {/* Architecture Section */}
            {project.architecture && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20 pb-20 border-b border-border/15"
              >
                <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
                  Architecture
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {project.architecture}
                </p>
              </motion.div>
            )}

            {/* Stack Section */}
            {project.technologies && project.technologies.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20 pb-20 border-b border-border/15"
              >
                <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Role + Outcome */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-border/15 mb-20"
            >
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
              {project.outcome && (
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-2">
                    Outcome
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </motion.div>

            {/* Results Section */}
            {project.results && project.results.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20 pb-20 border-b border-border/15"
              >
                <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
                  Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="text-[15px] text-muted-foreground">
                      ✓ {result}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Lessons Section */}
            {project.lessons && project.lessons.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
              >
                <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">
                  Key Learnings
                </h2>
                <ul className="space-y-3">
                  {project.lessons.map((lesson, idx) => (
                    <li key={idx} className="text-[15px] text-muted-foreground">
                      • {lesson}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* External Links */}
            {(project.githubUrl || project.demoUrl) && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-20 border-t border-border/15"
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium mb-4">
                  Resources
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-border/40 transition-all"
                    >
                      View on GitHub →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:border-border/40 transition-all"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </motion.div>
            )}

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-20 border-t border-border/15"
            >
              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all work
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

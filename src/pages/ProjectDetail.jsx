import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Tag } from "../components/ui/Tag";
import { fetchProjectBySlug } from "../services/projectService";

const SectionLabel = ({ children }) => (
  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium block mb-3">
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2 className="font-serif text-3xl font-medium mb-6 text-foreground">{children}</h2>
);

const SectionDivider = () => <div className="border-b border-border/15" />;

const SubsectionTitle = ({ children }) => (
  <h3 className="font-serif text-xl font-medium mb-3 text-foreground">{children}</h3>
);

const BodyText = ({ children }) => (
  <p className="text-[15px] text-muted-foreground leading-relaxed">{children}</p>
);

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

  const hasFriction = project.observed_problem || project.impact || project.affected_users;
  const hasSignal = project.key_observation || project.hypothesis;
  const hasSystem = project.architecture || project.workflows || project.automation_logic || project.pipelines;
  const hasReduction = project.friction_reduction || project.simplification;
  const hasTechnical = project.stack || project.infra || project.APIs || project.data_sources || project.technologies;
  const hasOutcome = project.results || project.learnings || project.lessons;
  const hasLimits = project.current_limits || project.tradeoffs;
  const hasFuture = project.next_steps || project.future_vision;

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
          <div className="max-w-3xl mx-auto space-y-24">
            {/* Overview */}
            {project.fullDescription && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <BodyText>{project.fullDescription}</BodyText>
              </motion.div>
            )}

            {/* Friction Section */}
            {hasFriction && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>The Friction</SectionLabel>
                <SectionTitle>What was the problem?</SectionTitle>

                {project.observed_problem && (
                  <div className="mb-8">
                    <SubsectionTitle>Problem</SubsectionTitle>
                    <BodyText>{project.observed_problem}</BodyText>
                  </div>
                )}

                {project.impact && (
                  <div className="mb-8">
                    <SubsectionTitle>Impact</SubsectionTitle>
                    <BodyText>{project.impact}</BodyText>
                  </div>
                )}

                {project.affected_users && (
                  <div>
                    <SubsectionTitle>Affected Users</SubsectionTitle>
                    <BodyText>{project.affected_users}</BodyText>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* Signal Section */}
            {hasSignal && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>The Signal</SectionLabel>
                <SectionTitle>What did we observe?</SectionTitle>

                {project.key_observation && (
                  <div className="mb-8">
                    <SubsectionTitle>Key Observation</SubsectionTitle>
                    <BodyText>{project.key_observation}</BodyText>
                  </div>
                )}

                {project.hypothesis && (
                  <div>
                    <SubsectionTitle>Hypothesis</SubsectionTitle>
                    <BodyText>{project.hypothesis}</BodyText>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* System Section */}
            {hasSystem && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>The System</SectionLabel>
                <SectionTitle>What did we build?</SectionTitle>

                {project.architecture && (
                  <div className="mb-8">
                    <SubsectionTitle>Architecture</SubsectionTitle>
                    <BodyText>{project.architecture}</BodyText>
                  </div>
                )}

                {project.workflows && (
                  <div className="mb-8">
                    <SubsectionTitle>Workflows</SubsectionTitle>
                    <BodyText>{project.workflows}</BodyText>
                  </div>
                )}

                {project.automation_logic && (
                  <div className="mb-8">
                    <SubsectionTitle>Automation Logic</SubsectionTitle>
                    <BodyText>{project.automation_logic}</BodyText>
                  </div>
                )}

                {project.pipelines && (
                  <div>
                    <SubsectionTitle>Pipelines</SubsectionTitle>
                    <BodyText>{project.pipelines}</BodyText>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* Reduction Section */}
            {hasReduction && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>The Reduction</SectionLabel>
                <SectionTitle>What changed?</SectionTitle>

                {project.friction_reduction && (
                  <div className="mb-8">
                    <SubsectionTitle>Friction Reduction</SubsectionTitle>
                    <BodyText>{project.friction_reduction}</BodyText>
                  </div>
                )}

                {project.simplification && (
                  <div>
                    <SubsectionTitle>Simplification</SubsectionTitle>
                    <BodyText>{project.simplification}</BodyText>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* Technical Section */}
            {hasTechnical && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>Technical</SectionLabel>
                <SectionTitle>Stack & Infrastructure</SectionTitle>

                {(project.stack || project.technologies) && (
                  <div className="mb-8">
                    <SubsectionTitle>Stack</SubsectionTitle>
                    <div className="flex flex-wrap gap-2">
                      {(project.stack || project.technologies || []).map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>
                  </div>
                )}

                {project.infra && (
                  <div className="mb-8">
                    <SubsectionTitle>Infrastructure</SubsectionTitle>
                    <BodyText>{project.infra}</BodyText>
                  </div>
                )}

                {project.APIs && (
                  <div className="mb-8">
                    <SubsectionTitle>APIs</SubsectionTitle>
                    <BodyText>{project.APIs}</BodyText>
                  </div>
                )}

                {project.data_sources && (
                  <div>
                    <SubsectionTitle>Data Sources</SubsectionTitle>
                    <BodyText>{project.data_sources}</BodyText>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* Outcome Section */}
            {hasOutcome && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>Outcome</SectionLabel>
                <SectionTitle>What happened?</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 pb-8 border-b border-border/15">
                  {project.role && (
                    <div>
                      <SectionLabel>Role</SectionLabel>
                      <BodyText>{project.role}</BodyText>
                    </div>
                  )}
                  {project.outcome && (
                    <div>
                      <SectionLabel>Outcome</SectionLabel>
                      <BodyText>{project.outcome}</BodyText>
                    </div>
                  )}
                </div>

                {project.results && project.results.length > 0 && (
                  <div className="mb-8">
                    <SubsectionTitle>Results</SubsectionTitle>
                    <ul className="space-y-3">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-[15px] text-muted-foreground">
                          ✓ {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(project.learnings || project.lessons) && (project.learnings || project.lessons).length > 0 && (
                  <div>
                    <SubsectionTitle>Learnings</SubsectionTitle>
                    <ul className="space-y-3">
                      {(project.learnings || project.lessons).map((learning, idx) => (
                        <li key={idx} className="text-[15px] text-muted-foreground">
                          • {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* Limits Section */}
            {hasLimits && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>Limits & Tradeoffs</SectionLabel>
                <SectionTitle>What we didn't solve</SectionTitle>

                {project.current_limits && (
                  <div className="mb-8">
                    <SubsectionTitle>Current Limits</SubsectionTitle>
                    <BodyText>{project.current_limits}</BodyText>
                  </div>
                )}

                {project.tradeoffs && (
                  <div>
                    <SubsectionTitle>Tradeoffs</SubsectionTitle>
                    <BodyText>{project.tradeoffs}</BodyText>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* Future Section */}
            {hasFuture && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>Future</SectionLabel>
                <SectionTitle>What's next?</SectionTitle>

                {project.next_steps && (
                  <div className="mb-8">
                    <SubsectionTitle>Next Steps</SubsectionTitle>
                    <BodyText>{project.next_steps}</BodyText>
                  </div>
                )}

                {project.future_vision && (
                  <div>
                    <SubsectionTitle>Vision</SubsectionTitle>
                    <BodyText>{project.future_vision}</BodyText>
                  </div>
                )}

                <div className="mt-8 pt-8">
                  <SectionDivider />
                </div>
              </motion.div>
            )}

            {/* External Links */}
            {(project.githubUrl || project.demoUrl) && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <SectionLabel>Resources</SectionLabel>
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

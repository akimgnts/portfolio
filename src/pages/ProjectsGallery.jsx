import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SectionHeader } from "../components/ui/SectionHeader";
import { ProjectCard } from "../components/ProjectCard";
import { fetchProjects } from "../services/projectService";
import { siteContent } from "../data/content";

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
        <section className="py-40 px-6 md:px-8 section-gradient-hero">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <SectionHeader
                eyebrow={siteContent.sections.work.eyebrow}
                heading={siteContent.sections.work.heading}
                className="text-center mb-8"
              />
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {siteContent.sections.work.intro}
              </p>
            </motion.div>
          </div>
        </section>

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

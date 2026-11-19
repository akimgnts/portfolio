import { Reveal } from "./ui/Reveal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects as defaultProjects } from "../data/projects";
import { siteContent } from "../data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { ProjectCard } from "./ProjectCard";
import { fetchProjects } from "../services/projectService";
import { MissionReportCard } from "./MissionReport";

export default function Projects() {
  const [projects, setProjects] = useState(defaultProjects);
  const [loading, setLoading] = useState(true);
  const [companyProjects, setCompanyProjects] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchProjects(0, 100);
      const featured = ["job-apply-assistant", "event-signal", "nuit-blanche"];
      const visible = data.filter((project) => project.published !== false);
      const ordered = [...visible].sort((a, b) => {
        const ai = featured.indexOf(a.slug);
        const bi = featured.indexOf(b.slug);
        return (ai < 0 ? 999 : ai) - (bi < 0 ? 999 : bi);
      });
      setProjects(ordered.filter(project => featured.includes(project.slug)).slice(0, 3));
      setCompanyProjects(visible.filter(project => ["sidel-reporting-commercial", "event-analytics-europe"].includes(project.slug)));
      setLoading(false);
    };
    load();
  }, []);

  return (
    <section id="work" className="py-14 md:py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={siteContent.sections.work.eyebrow}
          heading={siteContent.sections.work.heading}
          className="mb-7"
        />

        {siteContent.sections.work.intro && (
          <Reveal><p
            className="text-[15px] text-muted-foreground leading-relaxed mb-9 max-w-3xl"
          >
            {siteContent.sections.work.intro}
          </p></Reveal>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading && <p role="status" className="text-muted-foreground">Chargement des projets…</p>}
          {!loading && projects.length === 0 && <p className="text-muted-foreground">Les projets arrivent bientôt. Parlons du tien ci-dessous.</p>}
          {!loading && projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {!loading && companyProjects.length > 0 && <section className="mt-16 pt-12 border-t border-border" aria-labelledby="missions-heading">
          <Reveal blur><p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Missions en entreprise</p>
          <h2 id="missions-heading" className="font-serif text-3xl md:text-4xl text-foreground">Ce que j'ai livré pour des équipes.</h2>
          <p className="text-base text-muted-foreground leading-7 max-w-2xl mt-4 mb-8">Chaque mission en format rapport : contexte, actions, équipes, stack et livrables. Données et écrans internes non publiés.</p>
          </Reveal><div className="grid md:grid-cols-2 gap-5">{companyProjects.map((project, i) => <MissionReportCard key={project.slug} project={project} index={i} />)}</div>
        </section>}

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

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { missions } from "../data/missions";

const label = "text-[10px] font-semibold uppercase tracking-[.18em] text-[#7b6a5c]";

function Facts({ mission, stack, compact = false }) {
  const rows = [
    ["Entreprise", `${mission.company} · ${mission.group}`],
    ["Contrat", mission.contract],
    ["Rôle", mission.role],
    ["Période", mission.period],
    ["Durée", mission.duration],
    ["Équipes", mission.teams?.join(" · ")],
    ["Stack", stack?.join(" · ")],
  ].filter(([, value]) => value);
  const visible = compact ? rows.filter(([k]) => ["Contrat", "Période", "Équipes", "Stack"].includes(k)) : rows;
  return <dl className={"grid gap-px bg-[#e4ddd3] border border-[#e4ddd3] rounded-lg overflow-hidden " + (compact ? "grid-cols-2" : "sm:grid-cols-2")}>
    {visible.map(([k, v]) => <div key={k} className="bg-[#fdfbf7] px-4 py-3 min-w-0">
      <dt className={label}>{k}</dt>
      <dd className="text-sm text-[#2f3a33] mt-1 break-words">{v}</dd>
    </div>)}
  </dl>;
}

/** Carte « rapport » pour la home et la galerie : sobre, documentaire, sans visuel. */
export function MissionReportCard({ project, index = 0 }) {
  const mission = missions[project.slug];
  if (!mission) return null;
  return <Reveal className="h-full" delay={Math.min(index * .08, .16)}>
    <Link to={`/projects/${encodeURIComponent(project.slug)}`} className="group flex flex-col h-full rounded-xl border border-[#ddd5ca] bg-[#fdfbf7] p-6 md:p-7 shadow-[0_1px_0_#e9e2d8] hover:border-[#a99a88] hover:shadow-[0_12px_40px_rgba(60,45,30,.08)] transition-all duration-300">
      <div className="flex items-center justify-between border-b border-[#e7e0d6] pb-3 mb-5">
        <span className={label}>Rapport de mission · {mission.number}</span>
        <span className="text-[11px] font-mono text-[#8b7d6f]">{mission.company}</span>
      </div>
      <h3 className="font-serif text-2xl text-[#25302a]">{project.title}</h3>
      <p className="text-[15px] leading-7 text-[#5b625c] mt-3 mb-5">{mission.brief}</p>
      <div className="mt-auto">
        <Facts mission={mission} stack={project.stack} compact />
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#5a4a3c] mt-5 group-hover:gap-3 transition-all">Lire le rapport <ArrowRight size={15} aria-hidden="true" /></span>
      </div>
    </Link>
  </Reveal>;
}

function Section({ n, title, children }) {
  return <Reveal><section className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8 py-8 border-t border-[#e4ddd3]">
    <h2 className="text-sm font-semibold text-[#3a3129]"><span className="font-mono text-[#9a8a7a] mr-2">{n}</span>{title}</h2>
    <div className="text-[15px] leading-[1.8] text-[#4f5751]">{children}</div>
  </section></Reveal>;
}

/** Page complète d'une mission : format rapport. */
export function MissionReportPage({ project }) {
  const mission = missions[project.slug];
  const stack = project.stack || project.technologies || [];
  const lessons = project.learnings || [];
  return <article className="max-w-4xl mx-auto px-6 md:px-8 pt-32 md:pt-36 pb-20">
    <Link to="/projects" className="text-sm text-[#6b6157] hover:text-[#2f3a33]">← Toutes les réalisations</Link>
    <Reveal blur><header className="mt-8 rounded-xl border border-[#ddd5ca] bg-[#fdfbf7] p-6 md:p-10">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e0d6] pb-4 mb-6">
        <span className={label}>Rapport de mission · {mission.number}</span>
        <span className="text-xs font-mono text-[#8b7d6f]">{mission.company} · {mission.period}</span>
      </div>
      <h1 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.08] tracking-tight text-[#25302a]">{project.title}</h1>
      <p className="text-lg leading-relaxed text-[#5b625c] mt-4 mb-8 max-w-2xl">{mission.brief}</p>
      <Facts mission={mission} stack={stack} />
    </header></Reveal>

    <div className="mt-6">
      <Section n="01" title="Contexte">
        <p>{project.fullDescription}</p>
        {project.observed_problem && <p className="mt-3">{project.observed_problem}</p>}
      </Section>
      <Section n="02" title="Ce que j'ai fait">
        <ol className="space-y-2">{mission.actions.map((a, i) => <li key={i} className="flex gap-3"><span className="font-mono text-xs text-[#9a8a7a] pt-1.5">{String(i + 1).padStart(2, "0")}</span><span>{a}</span></li>)}</ol>
      </Section>
      <Section n="03" title="Avec qui">
        <p>Équipes {mission.teams.join(", ")}.</p>
        {mission.usage && <p className="mt-2">{mission.usage}</p>}
        {mission.communication && <p className="mt-2">{mission.communication}</p>}
      </Section>
      <Section n="04" title="Livrables">
        <ul className="space-y-2 list-disc pl-5 marker:text-[#b3a393]">{mission.deliverables.map((d, i) => <li key={i}>{d}</li>)}</ul>
      </Section>
      {lessons.length > 0 && <Section n="05" title="Ce que j'en retiens">
        <ul className="space-y-2">{lessons.map((l, i) => <li key={i}>{l}</li>)}</ul>
      </Section>}
      {project.current_limits && <Section n="06" title="Confidentialité">
        <p className="text-sm text-[#6b6f69]">{project.current_limits}</p>
      </Section>}
    </div>
  </article>;
}

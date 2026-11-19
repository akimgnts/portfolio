import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data/projects";
import { skillLevels } from "../data/cv";
import { TechIcon, TechChip } from "./ui/TechIcon";
import { Reveal } from "./ui/Reveal";

const norm = (v) => v.toLocaleLowerCase("fr").trim();
const visible = projects.filter((p) => p.published !== false);

function proofsFor(skill) {
  const names = [skill.name, ...(skill.match || [])].map(norm);
  return visible.filter((p) => (p.stack || p.technologies || []).some((t) => names.includes(norm(t))));
}

/** Cartographie sobre : chaque compétence, son niveau déclaré et les projets qui la prouvent. */
export default function SkillsProof() {
  const [selected, setSelected] = useState(null);
  const calibrated = useMemo(() => new Set(skillLevels.flatMap((l) => l.skills.flatMap((s) => [s.name, ...(s.match || [])].map(norm)))), []);
  const others = useMemo(() => [...new Set(visible.flatMap((p) => p.stack || []))].filter((t) => !calibrated.has(norm(t))).sort((a, b) => a.localeCompare(b, "fr")), [calibrated]);
  const proofs = selected ? proofsFor(selected) : [];

  return <section className="no-print mt-14" aria-labelledby="skills-proof-heading">
    <Reveal>
      <p className="text-[11px] uppercase tracking-[.16em] text-[#9b6c50] font-semibold">Compétences & preuves</p>
      <h2 id="skills-proof-heading" className="font-serif text-3xl md:text-4xl tracking-tight text-[#2c4034] mt-3">Ce que je sais faire, et où le vérifier.</h2>
      <p className="text-[15px] leading-7 text-[#647267] max-w-2xl mt-3">Niveaux déclarés sans gonflement. Sélectionne une compétence pour voir les projets et missions qui l'utilisent.</p>
    </Reveal>

    <div className="grid lg:grid-cols-3 gap-4 mt-8">
      {skillLevels.map((level, li) => <Reveal key={level.id} delay={li * .06} className="rounded-2xl border border-[#e0e3da] bg-white/80 p-5">
        <div className="flex items-baseline justify-between gap-3 border-b border-[#ebede6] pb-3 mb-4">
          <h3 className="text-sm font-semibold text-[#2f4337]">{level.label}</h3>
          <span className="text-[11px] text-[#8a958c]">{level.hint}</span>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {level.skills.map((skill) => {
            const count = proofsFor(skill).length;
            const active = selected?.name === skill.name;
            return <li key={skill.name}>
              <button type="button" aria-pressed={active} onClick={() => setSelected(active ? null : skill)}
                className={"inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors duration-200 " + (active ? "bg-[#2e4036] border-[#2e4036] text-white" : "bg-[#f6f7f2] border-[#e1e4dc] text-[#43564a] hover:border-[#a3afa4]")}>
                <TechIcon name={skill.name} size={12} />{skill.name}
                {count > 0 && <span className={"tabular-nums text-[10px] " + (active ? "text-white/70" : "text-[#8d624a]")}>{count}</span>}
              </button>
            </li>;
          })}
        </ul>
      </Reveal>)}
    </div>

    <div aria-live="polite" className="mt-4 min-h-[3rem]">
      <AnimatePresence mode="wait" initial={false}>
        {selected && <motion.div key={selected.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: .18, ease: "easeOut" }}
          className="rounded-2xl border border-[#e4d9cc] bg-[#f8f2ea] p-5">
          <p className="text-sm text-[#4c3f34]"><span className="font-semibold">{selected.name}</span> · {proofs.length ? `${proofs.length} preuve${proofs.length > 1 ? "s" : ""} sur ce portfolio` : "pas de projet publié qui l'illustre ici, ce qui ne signifie pas absence de pratique"}</p>
          {proofs.length > 0 && <div className="flex flex-wrap gap-2 mt-3">{proofs.map((p) => <Link key={p.slug} to={"/projects/" + p.slug} className="rounded-full bg-white border border-[#e2d6c8] px-3 py-1.5 text-xs font-medium text-[#6d4c38] hover:border-[#a1694b] transition-colors">{p.title} →</Link>)}</div>}
        </motion.div>}
      </AnimatePresence>
    </div>

    {others.length > 0 && <Reveal className="mt-6">
      <p className="text-xs text-[#7b877d] mb-3">Aussi utilisés dans mes projets</p>
      <div className="flex flex-wrap gap-1.5">{others.map((t) => <TechChip key={t} name={t} />)}</div>
    </Reveal>}
  </section>;
}

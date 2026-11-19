import { Reveal } from "../components/ui/Reveal";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, GitBranch, Lightbulb, ShieldCheck } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "./NotFound";
import ProjectVisual from "../components/ProjectVisual";
import ProjectDemo from "../components/ProjectDemo";
import { productTours } from "../data/productTours";
import ProductionEvidence from "../components/ProductionEvidence";
import { fetchProjectBySlug } from "../services/projectService";

const label = "text-[11px] font-semibold uppercase tracking-[.18em] text-[#946044]";
const copy = "text-[15px] leading-[1.8] text-[#536059]";

function CaseStudyBody({ collapsed, children }) {
  return collapsed ? <details className="case-disclosure case-full-story"><summary>Le contexte, les choix et les résultats</summary><div>{children}</div></details> : children;
}

function Panel({ title, eyebrow, children, className = "" }) {
  return <Reveal><section className={"rounded-[24px] border border-[#dedfd6] bg-white/75 p-6 md:p-8 " + className}>
    <p className={label}>{eyebrow}</p>
    <h2 className="font-serif text-[clamp(1.65rem,3vw,2.3rem)] leading-tight tracking-tight text-[#29382f] mt-3 mb-4">{title}</h2>
    {children}
  </section></Reveal>;
}

function Flow({ description }) {
  const steps = (description || "").split(/\s*→\s*/).map(item => item.trim()).filter(Boolean);
  if (steps.length < 2) return description ? <p className={copy}>{description}</p> : null;
  return <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-5" aria-label="Étapes du système">
    {steps.map((step, i) => <li key={i} className="relative min-w-0 rounded-xl border border-[#d9e1d9] bg-[#f3f7f1] px-4 py-4">
      <span className="block text-[10px] uppercase tracking-wider text-[#7c947f] mb-2">{String(i+1).padStart(2,"0")}</span>
      <span className="block text-sm leading-5 font-medium text-[#344c3d] break-words">{step}</span>
    </li>)}
  </ol>;
}

function Bullets({ items }) {
  if (!items?.length) return null;
  return <ul className="space-y-3">{items.map((item, index) =>
    <li key={index} className="flex items-start gap-3 text-[14px] md:text-[15px] leading-7 text-[#536059]">
      <CheckCircle2 size={18} className="shrink-0 mt-1 text-[#648c72]" aria-hidden="true"/>
      <span>{item}</span>
    </li>)}</ul>;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    let active = true;
    fetchProjectBySlug(slug).then(data => {
      if (active) setResult({ slug, project: data?.published === false ? null : data });
    }).catch(() => {
      if (active) setResult({ slug, project: null });
    });
    return () => { active = false; };
  }, [slug]);

  const loading = result?.slug !== slug;
  const project = result?.project;
  if (loading) return <><Navbar/><main id="main-content" tabIndex={-1} className="min-h-screen grid place-items-center"><p role="status">Chargement du projet…</p></main><Footer/></>;
  if (!project) return <NotFound/>;

  const stack = project.stack || project.technologies || [];
  const lessons = project.learnings || project.lessons || [];
  const outcomes = project.results || [];
  const hasVisual = [ "elevia", "skillmap-console", "csg-agent", "yeva-site"].includes(project.slug);

  return <>
    <Navbar/>
    <main id="main-content" tabIndex={-1} className="flex-1">
      <Reveal blur><header className="pt-32 md:pt-36 pb-8 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[#5d7062] hover:text-[#a1694b] transition-colors mb-9"><ArrowLeft size={16}/> Tous les projets</Link>
          <div className="grid md:grid-cols-[1fr_auto] items-end gap-5">
            <div>
              <p className={label}>{project.period || project.year || "Projet"}</p>
              <h1 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.05] tracking-[-.045em] text-[#29382f] mt-4">{project.title}</h1>
              <p className="text-[17px] md:text-xl text-[#5a665e] leading-relaxed mt-5 max-w-3xl">{project.description}</p>
              {project.slug === "event-signal" && <p className="text-sm text-[#66766b] mt-3">Anciennement Event Signal : les captures conservent le nom affiché dans l’application.</p>}
            </div>
            <div className="flex flex-wrap gap-2 items-center">{productTours[project.slug] && <a href="#interactive-demo" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 border border-[#8ea996] text-[#34533d] text-sm font-semibold hover:bg-[#edf5ec] transition-colors">Explorer le produit <ArrowRight size={16}/></a>}
            {(project.githubUrl || project.demoUrl) && <a href={project.demoUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-[#2e4036] text-white text-sm font-medium hover:bg-[#49634f] transition-colors">{project.demoUrl ? "Voir le site" : "Code & documentation"} <ArrowUpRight size={16}/></a>}</div>
          </div>
        </div>
      </header></Reveal>

      {productTours[project.slug] && <div className="max-w-6xl mx-auto px-6 md:px-8 mb-8"><ProjectDemo slug={project.slug}/><details className="case-disclosure"><summary>Architecture, sources et fiabilité</summary><ProductionEvidence slug={project.slug}/>{project.slug === "job-apply-assistant" && <section id="research" className="rounded-3xl border border-[#d6dccc] bg-[#f4efe5] p-7 md:p-10 mt-10"><p className={label}>De la recherche au produit</p><h2 className="font-serif text-3xl text-[#2d4535] mt-3 mb-4">Elevia → Job Apply</h2><p className={copy}>Avec Elevia, j’ai travaillé sur l’extraction des offres, la normalisation des compétences, le matching et les méthodes d’évaluation. Job Apply prolonge cette recherche par un produit utilisable : trouver une offre, préparer un dossier et garder le fil.</p><p className={copy + " mt-4"}>Je présente ici un même cheminement de conception. Le dépôt Job Apply contient des adaptateurs Elevia, mais leur présence ne prouve pas une intégration active en production. Le radar observé utilise son propre score par règles.</p></section>}</details></div>}

      {hasVisual && <div className="max-w-6xl mx-auto px-6 md:px-8 mb-8">
        <div className="rounded-[24px] overflow-hidden border border-white/75 shadow-[0_18px_65px_rgba(38,56,46,.10)]"><ProjectVisual slug={project.slug}/></div>
        <p className="text-xs text-[#81877f] mt-3">Représentation schématique du fonctionnement, pas une capture de données réelles.</p>
      </div>}

      <CaseStudyBody collapsed={Boolean(productTours[project.slug])}><section className="px-6 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {[
              ["Contexte", project.affected_users || project.period || "Projet produit"],
              ["Mon rôle", project.role || "Conception et réalisation"],
              ["Livrable", project.outcome || project.simplification || "Solution documentée"]
            ].map(([title, text]) => <div key={title} className="rounded-2xl border border-[#e0e2d9] bg-[#f9faf6]/90 p-5"><p className={label}>{title}</p><p className="text-sm leading-6 text-[#354439] mt-3">{text}</p></div>)}
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(290px,.75fr)] gap-5 items-start">
            <div className="space-y-5">
              <Panel eyebrow="01 / Le point de départ" title="Comprendre avant de construire">
                {project.fullDescription && <p className={copy}>{project.fullDescription}</p>}
                {project.observed_problem && <div className="mt-5 rounded-xl bg-[#f7f2eb] p-5 border-l-[3px] border-[#b98364]"><p className="text-xs font-semibold text-[#986448] uppercase tracking-wider mb-2">La difficulté</p><p className={copy}>{project.observed_problem}</p></div>}
                {project.impact && <p className={copy + " mt-5"}><strong className="font-medium text-[#34453a]">Ce que l'on cherchait à améliorer. </strong>{project.impact}</p>}
              </Panel>
              {(project.architecture || project.workflows || project.pipelines) && <Panel eyebrow="02 / Le système" title="Du besoin au fonctionnement">
                {project.architecture && <p className={copy}>{project.architecture}</p>}
                <Flow description={project.workflows || project.pipelines}/>
                {project.automation_logic && <p className={copy + " mt-5"}><strong className="font-medium text-[#34453a]">Logique de traitement. </strong>{project.automation_logic}</p>}
              </Panel>}
              {(outcomes.length > 0 || project.friction_reduction) && <Panel eyebrow="03 / Ce qui est vérifiable" title="Livrable et résultats">
                {project.friction_reduction && <p className={copy + " mb-5"}>{project.friction_reduction}</p>}
                <Bullets items={outcomes}/>
                <p className="text-xs text-[#80877f] mt-5">Les éléments ci-dessus décrivent les réalisations documentées, pas des performances extrapolées.</p>
              </Panel>}
              {(project.current_limits || project.tradeoffs || project.next_steps) && <Panel eyebrow="04 / Transparence" title="Ce qui reste ouvert">
                {project.current_limits && <p className={copy}>{project.current_limits}</p>}
                {project.tradeoffs && <p className={copy + " mt-3"}>{project.tradeoffs}</p>}
                {project.next_steps && <p className={copy + " mt-3"}>{project.next_steps}</p>}
              </Panel>}
            </div>
            <aside className="space-y-5 lg:sticky lg:top-28">
              <div className="rounded-[24px] bg-[#2e4036] text-[#f4f1e8] p-6 md:p-7">
                <div className="flex items-center gap-2 text-[#a7c7ac] text-[11px] tracking-[.16em] uppercase"><GitBranch size={15}/> Les choix derrière le projet</div>
                <h2 className="font-serif text-2xl md:text-3xl leading-tight mt-5 mb-4">Construire, c'est aussi arbitrer.</h2>
                {project.key_observation && <p className="text-sm leading-7 text-[#d7e2d8]">{project.key_observation}</p>}
                {project.hypothesis && <p className="text-sm leading-7 text-[#d7e2d8] mt-4">{project.hypothesis}</p>}
              </div>
              {stack.length > 0 && <div className="rounded-[24px] bg-white/70 border border-[#dedfd6] p-6">
                <div className="flex gap-2 items-center text-[#9b6a4c]"><ShieldCheck size={16}/><p className={label}>Environnement technique</p></div>
                <div className="flex flex-wrap gap-2 mt-5">{stack.map(t => <span key={t} className="rounded-full bg-[#f0f2ec] border border-[#e2e5dc] px-3 py-2 text-xs text-[#43564a]">{t}</span>)}</div>
                {project.data_sources && <p className="text-xs text-[#66736a] leading-6 mt-5">{project.data_sources}</p>}
              </div>}
              {lessons.length > 0 && <div className="rounded-[24px] bg-[#f5ede3] border border-[#e7d9c7] p-6">
                <div className="flex items-center gap-2 text-[#9b6a4c]"><Lightbulb size={17}/><p className={label}>Ce que j'en retiens</p></div>
                <ul className="mt-4 space-y-3">{lessons.map((lesson, i) => <li className="text-sm leading-6 text-[#6c6257]" key={i}>{lesson}</li>)}</ul>
              </div>}
            </aside>
          </div>
          <div className="mt-10 border-t border-[#d6dcd1] pt-8 flex flex-wrap items-center justify-between gap-5">
            <div><p className={label}>Continuer l'exploration</p><h2 className="font-serif text-2xl md:text-3xl text-[#2e4036] mt-2">D'autres problèmes, d'autres réponses.</h2></div>
            <div className="flex flex-wrap gap-3"><Link to="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#aab4a8] text-sm text-[#2e4036] hover:bg-white">Tous les projets <ArrowRight size={16}/></Link><Link to="/#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#2e4036] text-sm text-white">Échanger <ArrowUpRight size={16}/></Link></div>
          </div>
        </div>
      </section></CaseStudyBody>
    </main>
    <Footer/>
  </>;
}

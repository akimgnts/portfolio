import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, GitBranch, Layers3, Network } from "lucide-react";

const domains = [
  { id:"bi", number:"01", name:"Data & BI", short:"Transformer la donnée en décision", color:"#A15C3D", x:16, y:21,
    skills:["Power BI","DAX / Power Query","SQL","Excel","Reporting métier","KPI & data storytelling"],
    projects:[["Sidel","Dashboards commerciaux et reporting métier"],["Event Signal","Indicateurs ventes, campagnes et événements"]], detail:"De la question métier à l'indicateur exploitable : modélisation, fiabilité et restitution." },
  { id:"engineering", number:"02", name:"Data Engineering", short:"Construire le chemin de la donnée", color:"#607D73", x:81, y:18,
    skills:["PostgreSQL","Python / pandas","API REST","ETL / ELT","Bronze · Silver · Gold","Databricks (formation)"],
    projects:[["Event Signal","Ingestion multi-sources et couches Bronze / Silver / Gold"],["Nuit Blanche","Validation et transformation des données événementielles"]], detail:"Collecter, structurer, transformer et tracer les données, en distinguant les traitements réels des intégrations à venir." },
  { id:"automation", number:"03", name:"IA & automatisation", short:"Relier les systèmes et les actions", color:"#BC854E", x:81, y:76,
    skills:["n8n / Make","Agents IA","OpenAI API","Apps Script","Webhooks","Python"],
    projects:[["Job Apply Assistant","Analyse d'offres, matching et génération sous validation humaine"],["Nuit Blanche","Google Sheets vers génération de carrousels"]], detail:"Orchestrer des étapes répétables avec contrôles, validation humaine et sorties vérifiables." },
  { id:"product", number:"04", name:"Développement produit", short:"Faire fonctionner l'outil de bout en bout", color:"#6E777D", x:17, y:78,
    skills:["React / Next.js","TypeScript","FastAPI","Docker / Coolify","GitHub","UX / architecture produit"],
    projects:[["Event Signal","Cockpit analytique privé"],["Portfolio","Interface de présentation des réalisations"],["Job Apply Assistant","Bot Telegram et services Python"]], detail:"Passer du besoin au produit utilisable : interface, backend, tests et déploiement." },
  { id:"business", number:"05", name:"Business & création", short:"Partir du terrain, mesurer l'impact", color:"#9B785E", x:50, y:6,
    skills:["Analyse des besoins","Marketing & acquisition","Gestion de projet","Communication","Direction artistique","Coordination parties prenantes"],
    projects:[["YEVA","Événementiel, contenu et acquisition"],["Made by Akim","Solutions numériques pour besoins opérationnels"],["Sidel","Collaboration avec équipes métier"]], detail:"Comprendre les usages, cadrer une solution et relier la technique à une décision ou une expérience." }
];
const edges=[["bi","engineering"],["engineering","automation"],["automation","product"],["product","bi"],["business","bi"],["business","engineering"],["business","automation"],["business","product"],["bi","automation"],["engineering","product"]];
export default function SkillsMap(){
  const [active,setActive]=useState("bi");
  const selected=domains.find(d=>d.id===active);
  const byId=Object.fromEntries(domains.map(d=>[d.id,d]));
  return <main className="min-h-screen px-5 md:px-9 pt-28 pb-24" style={{background:"linear-gradient(135deg,#faf7f0,#f3eee5 55%,#f2f4ef)"}}>
    <div className="max-w-6xl mx-auto">
      <Link to="/" className="inline-flex gap-2 items-center text-sm text-stone-600 hover:text-stone-900 mb-10"><ArrowLeft size={16}/> Retour au portfolio</Link>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div><p className="text-xs uppercase tracking-[.22em] font-medium mb-4" style={{color:"#A15C3D"}}>Made by Akim · Cartographie</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-tight text-stone-900 max-w-3xl">Des compétences qui<br/><em className="font-normal" style={{color:"#A15C3D"}}>se connectent.</em></h1>
        <p className="text-stone-600 mt-5 max-w-xl text-[15px] leading-7">Cinq domaines, un même fil conducteur : comprendre un besoin, faire circuler la donnée et construire un outil qui sert réellement.</p></div>
        <div className="flex items-center gap-2 text-xs text-stone-500"><Network size={15}/> Explorer les nœuds pour voir les preuves</div>
      </div>
      <div className="grid lg:grid-cols-[1.35fr_.85fr] gap-5 items-stretch">
        <div className="relative rounded-[28px] border border-stone-200 bg-white/70 shadow-sm overflow-hidden min-h-[440px] md:min-h-[560px]">
          <div className="absolute inset-0 opacity-35" style={{backgroundImage:"radial-gradient(#b8b1a5 0.8px,transparent 0.8px)",backgroundSize:"22px 22px"}}/>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {edges.map(([a,b])=><line key={a+b} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} stroke={active===a||active===b?"#a15c3d":"#c7c4be"} strokeOpacity={active===a||active===b?".55":".35"} strokeWidth={active===a||active===b?".35":".18"} strokeDasharray={active===a||active===b?"0":"1 1.5"}/>)}
          </svg>
          <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-[#a15c3d]/20 bg-[#faf7f0]/95 shadow-xl flex flex-col items-center justify-center text-center">
            <GitBranch size={18} color="#a15c3d"/><span className="font-serif text-lg md:text-xl text-stone-900 mt-2">Akim</span><span className="text-[9px] uppercase tracking-[.16em] text-stone-500 mt-1">Business × Tech</span>
          </div>
          {domains.map(d=><button key={d.id} onClick={()=>setActive(d.id)} aria-pressed={active===d.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-10 text-left rounded-2xl border px-3 py-3 md:px-4 md:py-4 w-[31%] md:w-[28%] transition-all duration-300 hover:-translate-y-[55%] focus-visible:outline-2 focus-visible:outline-offset-4"
            style={{left:d.x+"%",top:d.y+"%",background:active===d.id?"#fffaf3":"#fffefa",borderColor:active===d.id?d.color:"#e7e2d9",boxShadow:active===d.id?"0 12px 35px #40302522":"0 4px 18px #4030250c"}}>
            <span className="text-[10px] tracking-[.12em] font-semibold" style={{color:d.color}}>{d.number} /</span>
            <span className="block text-xs md:text-base font-semibold text-stone-800 leading-tight mt-1">{d.name}</span>
            <span className="hidden md:block text-[11px] leading-4 text-stone-500 mt-2">{d.short}</span>
          </button>)}
          <div className="absolute bottom-4 left-5 text-[10px] tracking-[.1em] uppercase text-stone-400">Carte interactive · 05 domaines</div>
        </div>
        <aside className="rounded-[28px] bg-[#fffdf9] border border-stone-200 shadow-sm p-6 md:p-8 flex flex-col" aria-live="polite">
          <div className="flex items-center justify-between"><span className="text-xs uppercase tracking-[.18em] text-stone-400">Explorer / {selected.number}</span><Layers3 size={18} color={selected.color}/></div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-7">{selected.name}</h2>
          <p className="text-sm leading-6 text-stone-600 mt-4">{selected.detail}</p>
          <div className="h-px bg-stone-200 my-7"/>
          <h3 className="text-xs uppercase tracking-[.18em] text-stone-500 font-semibold mb-4">Compétences & outils</h3>
          <div className="flex flex-wrap gap-2">{selected.skills.map(s=><span key={s} className="text-xs rounded-full px-3 py-2 bg-[#f5f1e9] border border-[#e8e1d6] text-stone-700">{s}</span>)}</div>
          <div className="h-px bg-stone-200 my-7"/>
          <h3 className="text-xs uppercase tracking-[.18em] text-stone-500 font-semibold mb-4">Mises en pratique</h3>
          <div className="space-y-4">{selected.projects.map(([name,desc])=><div key={name} className="border-l-2 pl-4" style={{borderColor:selected.color}}><p className="font-semibold text-sm text-stone-800">{name}</p><p className="text-xs text-stone-500 leading-5 mt-1">{desc}</p></div>)}</div>
          <Link to="/projects" className="mt-auto pt-8 inline-flex items-center gap-2 text-sm font-medium" style={{color:selected.color}}>Explorer les projets <ArrowUpRight size={16}/></Link>
        </aside>
      </div>
      <p className="text-xs text-stone-500 leading-6 mt-7 max-w-3xl">Cette carte relie des compétences pratiquées, des projets documentés et des domaines en développement. Elle n'attribue pas de niveau chiffré artificiel : les études de cas constituent les preuves.</p>
    </div>
  </main>
}
import { Database, FileText, Bot, ShieldCheck, ArrowRight, Users, Network, Target } from "lucide-react";
function Sidel(){return <CompanyMethod title="Reporting commercial" source="CRM & Installed Base" decision="Prioriser les relances"/>;}
function CompanyMethod({title,source,decision}){return <div className="p-6 md:p-8 bg-[#edf1e9] min-h-[250px] text-[#314b3a]">
 <p className="text-xs uppercase tracking-widest text-[#6b765e]">Sidel · Méthode de travail</p><h3 className="font-serif text-3xl mt-5 mb-6">{title}</h3>
 <dl className="space-y-3 text-sm"><div className="flex flex-wrap gap-x-3"><dt className="font-semibold">Sources</dt><dd>{source}</dd></div><div className="flex flex-wrap gap-x-3"><dt className="font-semibold">Traitement</dt><dd>Consolidation · Modèle Power BI · Indicateurs</dd></div><div className="flex flex-wrap gap-x-3"><dt className="font-semibold">Décision</dt><dd>{decision}</dd></div></dl>
 <p className="text-xs leading-5 text-[#6b765e] mt-6">Synthèse de la démarche. Aucun écran ni chiffre interne reproduit.</p></div>;}
function Europe(){return <CompanyMethod title="Performance des salons" source="Présences · Contacts · Satisfaction" decision="Suivre les suites commerciales"/>;}
function Elevia(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#292b39] text-[#f4f0ee] overflow-hidden">
  <div className="absolute -right-16 -top-20 w-72 h-72 bg-[#957ab7]/20 blur-3xl rounded-full" aria-hidden="true"/>
  <div className="relative flex justify-between gap-3 uppercase tracking-[.15em] text-[10px] text-[#c9b5df]"><span>Semantic matching</span><span>ESCO · Data / IA</span></div>
  <div className="relative mt-6 grid grid-cols-[1fr_auto_1fr] gap-2 sm:gap-4 items-center">
   <div className="rounded-2xl border border-[#a3a2b7]/30 bg-white/[.08] p-3 sm:p-4 min-w-0"><div className="flex items-center gap-2"><Users size={17} className="text-[#d0b2e5]"/><span className="text-[11px] font-semibold">Profil</span></div><div className="mt-4 space-y-2">{["Compétences","Expérience","Contexte"].map(x=><div key={x} className="rounded-lg border border-white/10 px-2 sm:px-3 py-2 bg-white/[.06] text-[10px] text-[#e4dbe9]">{x}</div>)}</div></div>
   <div className="flex flex-col items-center gap-2"><Network size={20} className="text-[#dbb6d8]"/><span className="w-px h-10 bg-[#ad91bf]/50"/><Target size={20} className="text-[#dbb6d8]"/></div>
   <div className="rounded-2xl border border-[#a3a2b7]/30 bg-white/[.08] p-3 sm:p-4 min-w-0"><div className="flex items-center gap-2"><Database size={17} className="text-[#d0b2e5]"/><span className="text-[11px] font-semibold">Opportunité</span></div><div className="mt-4 space-y-2">{["Extraction","Normalisation","Comparaison"].map(x=><div key={x} className="rounded-lg border border-white/10 px-2 sm:px-3 py-2 bg-white/[.06] text-[10px] text-[#e4dbe9]">{x}</div>)}</div></div>
  </div><div className="relative mt-4 rounded-xl border border-[#bda8d0]/20 bg-[#bda8d0]/10 p-3 flex justify-between items-center gap-3"><p className="text-[11px] text-[#dbcfe3]">Évaluation explicable · cycles reproductibles</p><ShieldCheck size={17} className="text-[#d1bce1] shrink-0"/></div>
 </div>;
}

function Skillmap(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#e9f0e9] text-[#344c40] overflow-hidden">
  <div className="absolute -right-20 -top-20 size-72 rounded-full bg-[#b9d4b7]/35 blur-3xl" aria-hidden="true"/>
  <div className="relative flex items-center justify-between gap-2 text-[10px] uppercase tracking-[.15em] text-[#678a6c]"><span>Market intelligence</span><span>Snapshot → API</span></div>
  <div className="relative grid grid-cols-[1fr_.72fr] gap-3 mt-6">
   <div className="rounded-2xl border border-[#d5e0d4] bg-white/80 p-4 shadow-[0_15px_30px_#375e4020]">
    <div className="flex items-center gap-2 text-[#557f61]"><Network size={16}/><span className="text-[11px] font-semibold">Explorer les compétences</span></div>
    <div className="mt-4 grid grid-cols-2 gap-2">{["SQL","Python","Data BI","Automation","Cloud","APIs"].map((x,i)=><span key={x} className={"rounded-lg border py-2 text-center text-[10px] " + (i%3===0?"bg-[#dfeee1] border-[#b3cdb8]":"bg-white border-[#e4e9e0]")}>{x}</span>)}</div>
    <div className="mt-4 border-t border-[#e0e7df] pt-3"><div className="flex gap-1 items-end h-9">{[35,66,45,80,56,92,65,53].map((h,i)=><span key={i} style={{height:h+"%"}} className="rounded-t-sm bg-[#8bac96] flex-1"/>)}</div></div>
   </div>
   <div className="rounded-2xl border border-[#d5e0d4] bg-[#f7faf5]/90 p-3 sm:p-4 flex flex-col gap-2">
    <p className="text-[10px] uppercase tracking-wide text-[#6a9275] mb-1">Routes locales</p>
    {["/skills","/offers","/insights","/workflows"].map(s=><div key={s} className="flex gap-2 items-center rounded-lg bg-white/75 border border-[#e1e8dd] px-2 py-2 text-[10px]"><span className="size-1.5 bg-[#83aa8c] rounded-full"/><span className="truncate">{s}</span></div>)}
   </div>
  </div>
  <p className="relative mt-4 text-[11px] text-[#708c75]">Données agrégées · éléments de démonstration identifiés.</p>
 </div>;
}
function Csg(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#e3edf0] text-[#39525f] overflow-hidden">
  <div className="absolute -right-14 -top-20 size-72 bg-[#b5d8e1]/40 rounded-full blur-3xl" aria-hidden="true"/>
  <div className="relative flex justify-between gap-2 uppercase tracking-[.15em] text-[10px] text-[#668b9a]"><span>Knowledge system</span><span>Documents → réponse</span></div>
  <div className="relative mt-6 flex flex-wrap items-center justify-center gap-2">
   <span className="rounded-xl border border-white bg-white/80 px-3 py-3 text-[11px] flex gap-2 items-center"><FileText size={15}/> PDF / Web</span>
   <ArrowRight size={15} className="text-[#7295a2]"/>
   <span className="rounded-xl border border-white bg-white/80 px-3 py-3 text-[11px]">Structuration</span>
   <ArrowRight size={15} className="text-[#7295a2]"/>
   <span className="rounded-xl border border-white bg-white/80 px-3 py-3 text-[11px] flex gap-2 items-center"><Database size={15}/> Index</span>
  </div>
  <div className="relative mt-5 grid grid-cols-[.9fr_1.1fr] gap-3">
    <div className="rounded-2xl border border-white bg-[#c8dde4]/55 p-3 sm:p-4"><p className="text-[10px] uppercase tracking-wider text-[#718a95]">Recherche hybride</p><div className="mt-3 space-y-2">{["ChromaDB","PostgreSQL","Embeddings"].map(x=><p key={x} className="rounded-lg px-3 py-2 text-[10px] bg-white/60">{x}</p>)}</div></div>
    <div className="rounded-2xl border border-white bg-white/75 p-3 sm:p-4"><div className="flex gap-2 items-center"><Bot size={16} className="text-[#58839a]"/><span className="text-[11px] font-semibold">Assistant documentaire</span></div><div className="rounded-xl bg-[#eef4f5] border border-[#d8e7eb] p-3 mt-4 text-[11px] leading-5">Réponses contextualisées par les documents indexés.</div><span className="block text-[9px] text-[#92a4a8] mt-3">Vue d'architecture illustrative</span></div>
  </div>
 </div>;
}
function ProductCover({slug,name,extension="svg"}){return <img src={`/brand/${slug}-cover.${extension}`} alt={name} width="1440" height="900" loading="lazy" decoding="async" className="block w-full h-auto aspect-[8/5] object-cover"/>;}
export default function ProjectVisual({slug}){if(slug==="event-signal")return <ProductCover slug="signal" name="Signal"/>;if(slug==="nuit-blanche")return <ProductCover slug="nuit-blanche" name="Nuit Blanche" extension="webp"/>;if(slug==="job-apply-assistant")return <ProductCover slug="job-apply" name="Job Apply"/>;if(slug==="sidel-reporting-commercial")return <Sidel/>;if(slug==="event-analytics-europe")return <Europe/>;if(slug==="elevia")return <Elevia/>;if(slug==="skillmap-console")return <Skillmap/>;if(slug==="csg-agent")return <Csg/>;if(slug==="yeva-site")return <ProductCover slug="yeva" name="YEVA"/>;return null;}

import { Database, ShieldCheck, Users, Network, Target } from "lucide-react";
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

function ProductCover({slug,name,extension="svg"}){return <img src={`/brand/${slug}-cover.${extension}`} alt={name} width="1440" height="900" loading="lazy" decoding="async" className="block w-full h-auto aspect-[8/5] object-cover"/>;}
export default function ProjectVisual({slug}){if(slug==="event-signal")return <ProductCover slug="signal" name="Signal"/>;if(slug==="nuit-blanche")return <ProductCover slug="nuit-blanche" name="Nuit Blanche" extension="webp"/>;if(slug==="job-apply-assistant")return <ProductCover slug="job-apply" name="Job Apply"/>;if(slug==="sidel-reporting-commercial")return <Sidel/>;if(slug==="event-analytics-europe")return <Europe/>;if(slug==="elevia")return <Elevia/>;if(slug==="yeva-site")return <ProductCover slug="yeva" name="YEVA"/>;return null;}

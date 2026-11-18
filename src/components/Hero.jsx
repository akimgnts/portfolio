import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, CircleCheck, MapPin } from "lucide-react";

export default function Hero() {
 return <section className="relative px-6 md:px-8 pt-32 sm:pt-36 pb-14 md:pb-20" aria-labelledby="hero-title">
  <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.03fr_.97fr] gap-10 lg:gap-16 items-center">
   <div>
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase tracking-[.15em] font-semibold text-[#966547]">
     <span className="size-2 rounded-full bg-[#679278]" aria-hidden="true"/>
     Data & Business Analyst
     <span className="hidden sm:inline text-[#b3ab9c]">/</span>
     <span className="text-[#60736a]">Power BI · SQL · Python</span>
    </div>
    <h1 id="hero-title" className="font-serif text-[clamp(3.25rem,5.8vw,5.7rem)] leading-[1.065] tracking-[-.055em] text-[#263b30] mt-6">
     Des données plus claires.<br/><em className="font-normal text-[#aa6a4c]">Des décisions plus simples.</em>
    </h1>
    <p className="mt-7 text-[16px] md:text-[17px] leading-[1.8] text-[#455b4e] max-w-[590px]">
     Chez Sidel, en alternance, j'ai conçu des tableaux de bord Power BI pour aider des équipes commerciales et marketing à piloter leur activité. Je conçois aussi des solutions Data/IA que je développe, automatise et déploie sur serveur.
    </p>
    <div className="flex flex-wrap gap-3 mt-8">
     <Link to="/cv" className="inline-flex items-center gap-2.5 rounded-full bg-[#294337] hover:bg-[#3c5b49] text-white px-6 py-3.5 text-sm font-semibold transition-colors">
      Consulter mon CV <ArrowUpRight size={16} aria-hidden="true"/>
     </Link>
     <Link to="/projects" className="inline-flex items-center gap-2.5 rounded-full border border-[#b8c5b9] bg-white/70 hover:bg-white text-[#324e3b] px-6 py-3.5 text-sm font-semibold transition-colors">
      Explorer les produits <ArrowRight size={16} aria-hidden="true"/>
     </Link>
    </div>
    <div className="flex flex-wrap gap-x-5 gap-y-3 mt-9 pt-6 border-t border-[#d6ddd3] text-[12px] text-[#5b7060]">
     <span className="inline-flex items-center gap-2"><MapPin size={15} aria-hidden="true"/> Le Havre · Mobile en Île-de-France</span>
     <span className="inline-flex items-center gap-2"><CircleCheck size={15} className="text-[#729878]" aria-hidden="true"/> Ouvert aux opportunités CDI</span>
    </div>
   </div>

   <div className="relative">
    <div className="absolute -inset-3 rounded-[32px] bg-gradient-to-br from-[#d9e7d7]/60 via-[#e7d9c8]/30 to-transparent blur-xl pointer-events-none" aria-hidden="true"/>
    <div className="relative rounded-[28px] border border-[#d5dcd2] bg-[#fcfcf8]/95 shadow-[0_22px_75px_rgba(45,72,52,.09)] p-5 sm:p-7 lg:p-8">
     <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#e0e5dd]">
      <div><p className="text-[10px] uppercase tracking-[.18em] font-semibold text-[#a27253]">Expérience en entreprise</p><h2 className="font-serif text-[29px] sm:text-[34px] text-[#2e4436] tracking-tight mt-2">Sidel <span className="text-[#9eaa9f] font-normal text-lg">/ 2024—2025</span></h2></div>
      <BriefcaseBusiness size={26} className="text-[#719079] shrink-0" aria-hidden="true"/>
     </div>
     <div className="grid grid-cols-[.7fr_1.3fr] gap-5 py-6">
      <div className="border-r border-[#e2e6df] pr-5">
       <p className="font-serif text-[clamp(3.5rem,6vw,5rem)] leading-none text-[#9a614b] tabular-nums">6<span className="text-3xl align-top">+</span></p>
       <p className="mt-3 text-xs leading-6 text-[#5a7262]">dashboards Power BI conçus</p>
      </div>
      <div className="flex flex-col justify-center">
       <p className="text-sm font-semibold text-[#324b3a]">Reporting commercial & CRM</p>
       <p className="text-[13px] leading-6 text-[#63796a] mt-2">Suivi des comptes, des interactions et des opportunités pour les équipes métier.</p>
       <Link to="/projects/sidel-reporting-commercial" className="inline-flex items-center gap-2 text-xs font-semibold text-[#a1674b] mt-3 hover:underline underline-offset-4">Lire l'étude de cas <ArrowUpRight size={14}/></Link>
      </div>
     </div>
     <div className="border-t border-[#e0e5dd] pt-5">
      <p className="text-[10px] uppercase tracking-[.16em] text-[#89978a] font-semibold">En parallèle · Projets indépendants</p>
      <div className="grid sm:grid-cols-2 gap-2 mt-3">
       <Link to="/projects/event-signal" className="flex items-center justify-between gap-3 rounded-xl bg-[#eff3ed] border border-[#e0e7de] hover:border-[#a3bca6] px-4 py-3 text-xs font-medium text-[#405d46]">Event Signal <ArrowUpRight size={15} aria-hidden="true"/></Link>
       <Link to="/projects/job-apply-assistant" className="flex items-center justify-between gap-3 rounded-xl bg-[#f5efe8] border border-[#e9e0d5] hover:border-[#cfab93] px-4 py-3 text-xs font-medium text-[#6c5447]">Job Apply <ArrowUpRight size={15} aria-hidden="true"/></Link>
      </div>
     </div>
    </div>
    <p className="text-[11px] leading-5 text-[#819086] mt-3 px-2">Des réalisations décrites dans les études de cas ; les données confidentielles ne sont pas exposées.</p>
   </div>
  </div>
 </section>;
}

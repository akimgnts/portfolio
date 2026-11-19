import { Reveal } from "./ui/Reveal";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CircleCheck, MapPin } from "lucide-react";

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
    <Reveal blur delay={0.06}><h1 id="hero-title" className="font-serif text-[clamp(3.25rem,5.8vw,5.7rem)] leading-[1.065] tracking-[-.055em] text-[#263b30] mt-6">
     Des données plus claires.<br/><em className="font-normal text-[#aa6a4c]">Des décisions plus simples.</em>
    </h1></Reveal>
    <Reveal delay={0.13}><p className="mt-7 text-[16px] md:text-[17px] leading-[1.8] text-[#455b4e] max-w-[590px]">
     Chez Sidel, en alternance, j'ai conçu des tableaux de bord Power BI pour aider des équipes commerciales et marketing à piloter leur activité. Je conçois aussi des solutions Data/IA que je développe, automatise et déploie sur serveur.
    </p></Reveal>
    <Reveal delay={0.2}><div className="flex flex-wrap gap-3 mt-8">
     <Link to="/cv" className="inline-flex items-center gap-2.5 rounded-full bg-[#294337] hover:bg-[#3c5b49] text-white px-6 py-3.5 text-sm font-semibold transition-colors">
      Consulter mon CV <ArrowUpRight size={16} aria-hidden="true"/>
     </Link>
     <Link to="/projects" className="inline-flex items-center gap-2.5 rounded-full border border-[#b8c5b9] bg-white/70 hover:bg-white text-[#324e3b] px-6 py-3.5 text-sm font-semibold transition-colors">
      Explorer les produits <ArrowRight size={16} aria-hidden="true"/>
     </Link>
    </div>
    </Reveal><div className="flex flex-wrap gap-x-5 gap-y-3 mt-9 pt-6 border-t border-[#d6ddd3] text-[12px] text-[#5b7060]">
     <span className="inline-flex items-center gap-2"><MapPin size={15} aria-hidden="true"/> Le Havre · Mobile en Île-de-France</span>
     <span className="inline-flex items-center gap-2"><CircleCheck size={15} className="text-[#729878]" aria-hidden="true"/> Ouvert aux opportunités CDI</span>
    </div>
   </div>

   <Reveal delay={0.16} className="rounded-[28px] border border-[#d5dcd2] bg-[#fcfcf8] shadow-[0_22px_75px_rgba(45,72,52,.09)] p-5 sm:p-7">
    <p className="text-xs uppercase tracking-widest text-[#966547] mb-3">Trois produits, du besoin à l’usage</p>
    <h2 className="font-serif text-3xl text-[#2e4436] mb-6">Ce que j’ai construit.</h2>
    <div className="space-y-3">{[
      {slug:'job-apply-assistant',name:'Job Apply',image:'/brand/job-apply-cover.svg',text:'Rechercher, analyser, préparer une candidature.'},
      {slug:'event-signal',name:'Signal',image:'/brand/signal-cover.svg',text:'Rapprocher les ventes, les contenus et les dépenses.'},
      {slug:'nuit-blanche',name:'Nuit Blanche · Content Engine',image:'/brand/nuit-blanche-cover.webp',text:'D’un agenda Google Sheets à un carrousel.'}
    ].map(item=><Link key={item.slug} to={`/projects/${item.slug}`} className="grid grid-cols-[88px_1fr] sm:grid-cols-[108px_1fr] items-center gap-4 rounded-2xl border border-[#dce4d8] bg-[#f2f5ee] p-3 hover:border-[#89a18d] transition-colors">
      <div className="aspect-[8/5] overflow-hidden rounded-lg border border-[#c9d6c5] bg-[#17303b]"><img src={item.image} alt="" width="160" height="120" loading="lazy" className="h-full w-full object-contain object-center"/></div>
      <div><h3 className="text-base font-semibold leading-6 text-[#314c3b]">{item.name}</h3><p className="text-sm leading-6 text-[#5d7261] mt-1">{item.text}</p></div>
    </Link>)}</div>
    <p className="text-sm leading-6 text-[#607460] mt-6 pt-5 border-t border-[#dce4d8]">À découvrir ensuite : <Link to="/projects/sidel-reporting-commercial" className="underline underline-offset-4">mon expérience Data & BI chez Sidel</Link>.</p>
   </Reveal>
  </div>
 </section>;
}

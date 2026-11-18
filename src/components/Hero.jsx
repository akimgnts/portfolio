import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Database, Workflow, Sparkles, Code2, BriefcaseBusiness } from "lucide-react";

const points=[
  {icon:Database,label:"Data & BI",x:"left-[3%] top-[15%]",tone:"text-[#5f806e]"},
  {icon:Workflow,label:"Automatisation",x:"right-[2%] top-[7%]",tone:"text-[#aa6847]"},
  {icon:Code2,label:"Produit",x:"left-[1%] bottom-[15%]",tone:"text-[#7e8278]"},
  {icon:Sparkles,label:"IA appliquée",x:"right-[0%] bottom-[18%]",tone:"text-[#aa6847]"},
];
function ConnectedVisual(){
 const reduced=useReducedMotion();
 return <div className="relative w-full h-[310px] sm:h-[380px] lg:h-[470px] isolate" aria-label="Cartographie des domaines Data, produit et automatisation">
   <div className="absolute inset-[8%] rounded-full blur-3xl opacity-60" style={{background:"radial-gradient(circle,#e5c6a7 0%,#d9e8df 48%,transparent 72%)"}}/>
   <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" aria-hidden="true">
     <circle cx="250" cy="250" r="176" fill="none" stroke="#b6b5a8" strokeDasharray="2 8" strokeWidth="1"/>
     <circle cx="250" cy="250" r="122" fill="none" stroke="#d7c4af" strokeWidth="1"/>
     <path d="M100 108 L250 250 L408 82 M250 250 L80 408 M250 250 L420 395" fill="none" stroke="#c1b0a0" strokeWidth="1.5"/>
     <circle cx="250" cy="250" r="5" fill="#ad704e"/>
   </svg>
   <motion.div animate={reduced?{}:{y:[0,-8,0]}} transition={{duration:8,repeat:Infinity,ease:"easeInOut"}} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[205px] sm:h-[205px] lg:w-[245px] lg:h-[245px] rounded-[35%] rotate-[-12deg] border border-white/80 bg-white/45 backdrop-blur-xl shadow-[0_30px_90px_#6d6a5529] flex items-center justify-center">
     <div className="rotate-[12deg] text-center"><span className="block text-[10px] uppercase tracking-[.23em] text-[#a1694b] mb-3">Made by Akim</span><span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#333a34] leading-none">Idées<br/><em>→ impact.</em></span><span className="block text-xs text-[#6d756d] mt-4">Business × Data × Digital</span></div>
   </motion.div>
   {points.map(({icon:Icon,label,x,tone},i)=><motion.div key={label} animate={reduced?{}:{y:[0,i%2?-7:7,0]}} transition={{duration:5+i,repeat:Infinity,ease:"easeInOut"}} className={`absolute ${x} z-10 flex items-center gap-2 rounded-2xl border border-white/80 bg-white/65 backdrop-blur-xl px-2.5 py-2.5 sm:px-3 sm:py-3 lg:px-4 shadow-[0_12px_32px_#44443314]`}><Icon size={17} className={tone}/><span className="text-xs font-medium text-[#455047]">{label}</span></motion.div>)}
   <Link to="/cartographie" className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-[#8f5d42] border-b border-[#8f5d42]/40 pb-1 hover:border-[#8f5d42]">Explorer la cartographie ↗</Link>
 </div>
}
export default function Hero(){
 return <section className="relative overflow-hidden px-6 md:px-8 pt-32 pb-12 md:pt-36 md:pb-16">
  <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(ellipse 55% 70% at 82% 36%,#e6ece6 0%,transparent 75%)"}}/>
  <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.05fr_.95fr] gap-4 lg:gap-10 items-center">
   <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[.18em] font-semibold text-[#a1694b] mb-6"><span className="size-2 rounded-full bg-[#719a79]"/> Data · Produit · Automatisation</div>
    <h1 className="font-serif text-[clamp(3rem,5.5vw,5.5rem)] tracking-[-.055em] leading-[1.06] text-[#29332e]">Je relie les idées,<br/>les gens <span className="italic font-normal text-[#a1694b]">et la<br className="hidden lg:block"/> technologie.</span></h1>
    <p className="text-[15px] md:text-[17px] text-[#59635c] leading-[1.8] max-w-[550px] mt-7">Je transforme des besoins concrets en produits utiles : données qui éclairent, systèmes qui automatisent et expériences digitales pensées pour les personnes qui les utilisent.</p>
    <div className="flex flex-wrap gap-3 mt-8">
      <Link to="/projects" className="inline-flex items-center gap-3 rounded-full bg-[#2e4036] text-white px-6 py-3.5 text-sm font-medium hover:bg-[#405a49] transition-colors">Explorer mes réalisations <ArrowUpRight size={17}/></Link>
      <Link to="/cartographie" className="inline-flex items-center gap-3 rounded-full border border-[#b9bcb1] bg-white/45 backdrop-blur-md text-[#354138] px-6 py-3.5 text-sm font-medium hover:bg-white/80 transition-colors">Mes compétences <ArrowDownRight size={17}/></Link>
    </div>
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-9 pt-5 border-t border-[#d9d9cf] text-xs text-[#737b72]"><span>Data & Business Analyst</span><span className="size-1 rounded-full bg-[#b88767]"/><span>Le Havre · Mobile à Paris</span><span className="size-1 rounded-full bg-[#b88767]"/><span>Disponible pour un CDI</span></div>
   </motion.div>
   <ConnectedVisual/>
  </div>
 </section>
}
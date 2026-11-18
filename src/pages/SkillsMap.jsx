import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, GitBranch, Layers3, Network } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const domains = [
 {id:"data",n:"01",title:"Data & BI",tagline:"Transformer l'information en décision.",color:"#a96b4e",x:17,y:31,skills:["Power BI","DAX","Power Query","SQL","Reporting métier"],proofs:[{name:"Reporting commercial & CRM",slug:"sidel-reporting-commercial"},{name:"Event Analytics Europe",slug:"event-analytics-europe"}],note:"Partir d'une question métier, vérifier les sources et construire une lecture qui aide à agir."},
 {id:"engineer",n:"02",title:"Data Engineering",tagline:"Donner un chemin fiable aux données.",color:"#6b8677",x:82,y:29,skills:["Python","PostgreSQL","APIs REST","Modélisation","Bronze / Silver / Gold","Databricks (formation)"],proofs:[{name:"Event Signal",slug:"event-signal"},{name:"Nuit Blanche",slug:"nuit-blanche"}],note:"Les données sont utiles quand leur origine, leurs transformations et leurs limites sont comprises."},
 {id:"automation",n:"03",title:"IA & automatisation",tagline:"Réduire la friction sans perdre le contrôle.",color:"#b78a55",x:79,y:76,skills:["Python","n8n","Make","Apps Script","OpenAI API","Contrôles"],proofs:[{name:"Job Apply Assistant",slug:"job-apply-assistant"},{name:"Nuit Blanche",slug:"nuit-blanche"}],note:"Automatiser ce qui se répète et préserver une validation humaine là où elle est nécessaire."},
 {id:"product",n:"04",title:"Développement produit",tagline:"Relier l'interface au système.",color:"#708092",x:19,y:77,skills:["React","Next.js","FastAPI","Docker","GitHub","UX"],proofs:[{name:"Event Signal",slug:"event-signal"},{name:"Job Apply Assistant",slug:"job-apply-assistant"}],note:"Penser au chemin complet : besoin, données, interface, tests et usage."},
 {id:"human",n:"05",title:"Business & création",tagline:"Comprendre les personnes avant les outils.",color:"#a77d6d",x:50,y:11,skills:["Analyse des besoins","Marketing","Coordination","Copywriting","Direction artistique","Communication"],proofs:[{name:"Event Signal · YEVA",slug:"event-signal"},{name:"Reporting commercial · Sidel",slug:"sidel-reporting-commercial"}],note:"YEVA, Made by Akim et Sidel montrent des contextes différents, mais une même priorité : créer quelque chose qui sert."}
];
const links=[["human","data"],["human","engineer"],["human","automation"],["human","product"],["data","engineer"],["data","product"],["engineer","automation"],["product","automation"]];
export default function SkillsMap() {
 const [active,setActive]=useState("data");
 const current=domains.find(item=>item.id===active);
 const byId=Object.fromEntries(domains.map(d=>[d.id,d]));
 return <><Navbar/><main id="main-content" tabIndex={-1} className="min-h-screen px-6 md:px-8 pt-32 pb-20">
  <div className="max-w-6xl mx-auto">
   <Link to="/" className="inline-flex gap-2 items-center text-sm text-[#657569] hover:text-[#a1694b] mb-8"><ArrowLeft size={16}/> Retour au portfolio</Link>
   <div className="flex flex-wrap justify-between gap-4 items-end">
    <div><p className="text-[11px] uppercase tracking-[.2em] text-[#a1694b] font-semibold">Une façon de penser</p>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#2d4034] leading-[1.1] tracking-tight mt-4">Tout est <em className="font-normal text-[#a1694b]">connecté.</em></h1>
      <p className="text-[#677269] text-[15px] leading-7 max-w-2xl mt-4">Je ne travaille pas dans cinq métiers séparés. Je passe du besoin à la donnée, de la donnée au système, et du système aux personnes qui vont l'utiliser. Explore chaque domaine pour retrouver les projets associés.</p>
    </div>
    <span className="inline-flex items-center gap-2 text-[11px] text-[#79847b]"><Network size={16}/> Une cartographie, pas une notation de niveau</span>
   </div>
   <div className="mt-9 flex gap-2 overflow-x-auto pb-3 md:hidden" aria-label="Choisir un domaine">
    {domains.map(d=><button key={d.id} type="button" onClick={()=>setActive(d.id)} aria-pressed={d.id===active} className={"shrink-0 rounded-full border px-4 py-3 text-xs font-medium " + (d.id===active?"bg-[#2e4036] text-white border-[#2e4036]":"bg-white/70 text-[#42574a] border-[#d8ded6]")}>{d.title}</button>)}
   </div>
   <div className="grid lg:grid-cols-[1.18fr_.82fr] gap-4 md:gap-5 mt-5 md:mt-9 items-stretch">
    <div className="relative rounded-[26px] border border-[#dfe1d8] bg-white/65 min-h-[550px] overflow-hidden hidden md:block">
      <div className="absolute inset-0 opacity-25" style={{backgroundImage:"radial-gradient(#adafa6 1px, transparent 1px)",backgroundSize:"22px 22px"}}/>
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" aria-hidden="true">
        {links.map(([a,b])=><line key={a+b} x1={byId[a].x} y1={byId[a].y} x2={byId[b].x} y2={byId[b].y} stroke={a===active||b===active?"#a1694b":"#bdc4b8"} strokeWidth={(a===active||b===active) ? .42 : .23} strokeDasharray={a===active||b===active?"0":"1.3 1.8"} opacity={(a===active||b===active) ? .8 : .6}/>)}
      </svg>
      <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#faf8f1] border border-[#d8dcd3] shadow-[0_16px_38px_#41504124] size-24 lg:size-28 flex flex-col items-center justify-center text-center"><GitBranch size={18} className="text-[#a1694b]"/><span className="font-serif text-lg text-[#344238] mt-2">Akim</span><span className="text-[9px] text-[#8c948c] uppercase tracking-wider">Business × Tech</span></div>
      {domains.map(d=><button key={d.id} type="button" onClick={()=>setActive(d.id)} aria-pressed={d.id===active} className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[26%] rounded-[17px] border px-3 py-3 lg:px-4 lg:py-4 text-left transition-all duration-200 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2" style={{left:d.x+"%",top:d.y+"%",background:d.id===active?"#fff9f2":"#fffefa",borderColor:d.id===active?d.color:"#e0e4dc",boxShadow:d.id===active?"0 14px 30px #6b695422":"0 4px 10px #6b695411"}}>
        <span className="text-[10px] font-semibold tracking-[.12em]" style={{color:d.color}}>{d.n}</span><span className="block text-xs lg:text-sm font-semibold text-[#34453a] leading-5 mt-1">{d.title}</span>
      </button>)}
      <span className="absolute bottom-4 left-5 text-[10px] uppercase tracking-wider text-[#899589]">Sélectionner un nœud</span>
    </div>
    <aside className="rounded-[26px] border border-[#dfe1d8] bg-[#fcfcf7] p-6 sm:p-8 flex flex-col min-h-[425px]" aria-live="polite">
      <div className="flex items-center justify-between gap-3"><p className="text-xs uppercase tracking-[.15em] text-[#849087]">Domaine {current.n} / 05</p><Layers3 size={19} style={{color:current.color}}/></div>
      <h2 className="font-serif text-3xl sm:text-4xl text-[#2f4136] mt-8">{current.title}</h2>
      <p className="text-sm text-[#a1694b] mt-2">{current.tagline}</p>
      <p className="text-sm leading-7 text-[#627067] mt-5">{current.note}</p>
      <div className="h-px bg-[#e1e5dc] my-7"/>
      <h3 className="text-xs uppercase tracking-[.15em] font-semibold text-[#68766b] mb-4">Outils & pratiques</h3>
      <div className="flex flex-wrap gap-2">{current.skills.map(s=><span key={s} className="text-xs border border-[#dce1d7] rounded-full bg-[#f4f6f0] px-3 py-2 text-[#506051]">{s}</span>)}</div>
      <div className="h-px bg-[#e1e5dc] my-7"/>
      <h3 className="text-xs uppercase tracking-[.15em] font-semibold text-[#68766b] mb-4">Les preuves</h3>
      <div className="space-y-2">{current.proofs.map(p=><Link key={p.slug} to={"/projects/"+p.slug} className="flex items-center justify-between gap-3 text-sm px-4 py-3 rounded-xl border border-[#dce1d7] bg-white/70 text-[#34453a] hover:border-[#a1694b] hover:bg-white transition-colors"><span>{p.name}</span><ArrowUpRight size={16} className="shrink-0 text-[#a1694b]"/></Link>)}</div>
      <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-semibold text-[#a1694b] mt-auto pt-6">Tous les projets <ArrowUpRight size={15}/></Link>
    </aside>
   </div>
  </div>
 </main><Footer/></>;
}

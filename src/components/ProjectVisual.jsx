import { Database, ChartNoAxesCombined, FileImage, FileText, Bot, ShieldCheck, ArrowRight, CalendarDays, Table2, Workflow, BriefcaseBusiness, Users, Network, Target, BarChart3, MapPinned } from "lucide-react";
function Pill({children,dark=false}){return <span className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-semibold border shadow-sm ${dark?"border-white/15 bg-white/10 text-white":"border-white/90 bg-white/75 text-[#384a40]"}`}>{children}</span>}
function Event(){return <div className="relative min-h-[260px] p-6 md:p-8 bg-[#203d33] text-[#e6f0e6] overflow-hidden">
 <div className="absolute -right-12 -top-16 size-64 rounded-full bg-[#72b28b]/15 blur-3xl"/>
 <div className="relative flex justify-between text-[10px] tracking-[.16em] uppercase text-[#a6cbb2]"><span>01 / Event intelligence</span><span>Bronze → Silver → Gold</span></div>
 <div className="relative mt-7 grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-2 items-center">
 <div className="space-y-2"><Pill dark><CalendarDays size={13}/> Shotgun</Pill><Pill dark>Meta Ads</Pill><Pill dark>Instagram</Pill></div>
 <ArrowRight size={16} className="text-[#9ac4a9]"/>
 <div className="flex flex-col items-center gap-2"><div className="w-full max-w-[105px] border border-[#bc9b68]/60 bg-[#bc9b68]/20 rounded-xl p-3 text-center text-[10px]">BRONZE</div><div className="w-full max-w-[105px] border border-slate-300/40 bg-white/10 rounded-xl p-3 text-center text-[10px]">SILVER</div><div className="w-full max-w-[105px] border border-[#c9c478]/50 bg-[#c9c478]/15 rounded-xl p-3 text-center text-[10px]">GOLD</div></div>
 <ArrowRight size={16} className="text-[#9ac4a9]"/>
 <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-3"><div className="flex items-center gap-2 text-[10px] mb-3"><ChartNoAxesCombined size={14}/> Cockpit</div><svg viewBox="0 0 120 60" className="w-full"><path d="M0 52 L24 43 L45 47 L67 23 L88 31 L120 6" stroke="#a6dfb4" fill="none" strokeWidth="3"/><path d="M0 52 L24 43 L45 47 L67 23 L88 31 L120 6 L120 60 L0 60Z" fill="#a6dfb4" opacity=".12"/></svg></div></div>
 <p className="relative text-[11px] text-[#a6cbb2] mt-5">De la source au KPI, avec provenance et contrôles.</p>
 </div>}
function Nuit(){return <div className="relative min-h-[260px] p-6 md:p-8 bg-[#f3e7d5] text-[#594737] overflow-hidden">
 <div className="absolute -right-12 -bottom-20 size-60 bg-[#d5ad80]/25 rounded-full blur-3xl"/>
 <div className="relative flex justify-between text-[10px] tracking-[.16em] uppercase text-[#997452]"><span>02 / Content pipeline</span><span>Sheets → PNG</span></div>
 <div className="relative mt-7 flex items-center justify-between gap-1 sm:gap-2">
 <div className="rounded-2xl bg-white/75 border border-white p-2 sm:p-3 shadow-sm"><Table2 size={22} className="text-[#578768]"/><div className="mt-3 space-y-1">{[0,1,2].map(i=><div key={i} className="flex gap-1">{[0,1,2].map(j=><span key={j} className="w-3 sm:w-5 h-2 rounded-[2px] bg-[#b7d3bf]"/>)}</div>)}</div><span className="block text-[10px] mt-2">Google Sheets</span></div>
 <ArrowRight size={17} className="shrink-0"/>
 <div className="rounded-2xl border border-[#d8bd9e] bg-white/45 backdrop-blur-lg p-2 sm:p-3 text-center"><Workflow size={22} className="mx-auto text-[#9c6a47]"/><span className="block text-[10px] mt-2 font-semibold">FastAPI</span><span className="block text-[9px] mt-1 opacity-70">Valider · Trier<br/>Rendre</span></div>
 <ArrowRight size={17} className="shrink-0"/>
 <div className="relative w-[72px] h-[104px] sm:w-[100px] sm:h-[126px] shrink-0"><div className="absolute inset-0 translate-x-2 -rotate-6 bg-[#c49b76] rounded-xl"/><div className="absolute inset-0 -rotate-1 bg-[#354b3b] rounded-xl border-4 border-white shadow-lg flex flex-col justify-between p-3 text-white"><span className="text-[8px] uppercase tracking-wider">Nuit blanche</span><span className="font-serif text-xl leading-none">Cette<br/>semaine.</span><FileImage size={17}/></div></div>
 </div><p className="relative text-[11px] text-[#997452] mt-6">Automatiser la production sans changer les habitudes de l'équipe.</p></div>}
function Job(){return <div className="relative min-h-[260px] p-6 md:p-8 bg-[#e5e8e8] text-[#37434a] overflow-hidden">
 <div className="absolute -right-12 -top-16 size-60 bg-[#b2c9c9]/45 rounded-full blur-3xl"/>
 <div className="relative flex justify-between text-[10px] tracking-[.16em] uppercase text-[#6d8086]"><span>03 / AI orchestration</span><span>Human in the loop</span></div>
 <div className="relative mt-8 flex flex-wrap gap-2 items-center justify-center"><Pill><FileText size={13}/> Offre</Pill><ArrowRight size={14}/><Pill><Bot size={13}/> Analyse</Pill><ArrowRight size={14}/><Pill>Matching</Pill><ArrowRight size={14}/><Pill><ShieldCheck size={13}/> Contrôle</Pill></div>
 <div className="relative mx-auto mt-6 w-[80%] rounded-2xl border border-white/90 bg-white/60 backdrop-blur-lg p-4 shadow-[0_14px_40px_#53626a20]"><div className="flex justify-between items-center"><span className="text-[10px] uppercase tracking-wider text-[#6d8086]">Sorties générées</span><Database size={13}/></div><div className="grid grid-cols-3 gap-2 mt-3">{["CV","Lettre","Mail"].map(x=><div key={x} className="rounded-lg border border-[#d6dfe0] bg-white/75 py-3 text-center text-xs font-semibold">{x}</div>)}</div></div>
 <p className="relative text-[11px] text-[#6d8086] mt-5">Analyser, valider, générer — sans inventer le parcours.</p></div>}

function Sidel(){
 const bars=[38,66,46,78,58,90,73];
 return <div className="relative overflow-hidden min-h-[270px] p-5 sm:p-7 bg-[#f0eee9] text-[#36433f]">
  <div className="absolute -right-16 -top-20 w-72 h-72 bg-[#cfa6a7]/20 blur-3xl rounded-full" aria-hidden="true"/>
  <div className="relative flex justify-between gap-3 text-[10px] uppercase tracking-[.15em] text-[#936667]"><span>01 / Business intelligence</span><span>CRM → décision</span></div>
  <div className="relative mt-5 grid grid-cols-[.65fr_1.35fr] gap-3 items-stretch">
   <div className="rounded-xl border border-[#ddd3cb] bg-white/75 p-3 flex flex-col gap-3">
    <div className="flex items-center gap-2 text-[#9b6166]"><BriefcaseBusiness size={15}/><span className="text-[10px] font-semibold">CRM</span></div>
    <div className="space-y-2">{["Comptes","Opportunités","Interactions","Suivi"].map((x,i)=><div key={x} className={"rounded-md border px-2 py-2 text-[10px] " + (i===1?"border-[#aa7d79] bg-[#f0e3e0]":"border-[#e7e4dd] bg-[#f7f7f4]")}>{x}</div>)}</div>
   </div>
   <div className="rounded-xl border border-[#d7dad4] bg-[#fdfefd]/90 shadow-[0_10px_35px_#424d4312] p-3 sm:p-4 min-w-0">
    <div className="flex justify-between items-start gap-2"><div><p className="text-[9px] uppercase tracking-[.12em] text-[#a66d69]">Power BI / Sidel</p><p className="font-serif text-[17px] sm:text-xl mt-1">Pilotage commercial</p></div><BarChart3 size={18} className="text-[#9b6166] shrink-0"/></div>
    <div className="grid grid-cols-3 gap-2 mt-3">{["Activité","Suivi","Priorités"].map(t=><div key={t} className="rounded-md bg-[#f2f4f0] border border-[#e0e5dd] text-center py-2"><span className="block text-[9px] text-[#728279]">{t}</span><div className="mx-auto mt-2 h-1 w-3/5 rounded-full bg-[#d0a7a1]"/></div>)}</div>
    <div className="mt-4 flex h-16 sm:h-20 gap-2 items-end border-b border-[#d0d8d1] pb-1">{bars.map((b,i)=><div key={i} style={{height:b+"%"}} className="flex-1 min-w-0 rounded-t-[3px] bg-[#b77d7d]/80"/> )}</div>
   </div>
  </div>
  <p className="relative text-[11px] text-[#8c7773] mt-4">Une lecture métier des interactions et des opportunités. Vue illustrative.</p>
 </div>;
}
function Europe(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#e9f0f3] text-[#34495a] overflow-hidden">
  <div className="absolute -right-16 -top-12 w-72 h-72 bg-[#adc9d8]/40 blur-3xl rounded-full" aria-hidden="true"/>
  <div className="relative flex items-center justify-between text-[10px] tracking-[.16em] uppercase text-[#5b8295]"><span>02 / Event analytics</span><span>Europe · salons</span></div>
  <div className="relative mt-5 grid grid-cols-1 sm:grid-cols-[1fr_.55fr] gap-3">
   <div className="rounded-2xl bg-white/75 border border-white p-4 sm:p-5">
    <p className="text-[10px] uppercase tracking-wider text-[#688c9f] mb-4">Du contact au suivi</p>
    <div className="space-y-2">{[{t:"Visites & échanges",w:"100%"},{t:"Contacts qualifiés",w:"81%"},{t:"Rendez-vous",w:"62%"},{t:"Suivi commercial",w:"44%"}].map((x,i)=><div key={x.t} className="flex items-center gap-3"><span className="w-24 sm:w-32 text-[10px] text-[#4b6572]">{x.t}</span><div className="flex-1 h-5 bg-[#ebf1f3] rounded-md overflow-hidden"><div style={{width:x.w,opacity:1-i*.14}} className="h-full rounded-md bg-[#719eb3]"/></div></div>)}</div>
    <p className="text-[9px] text-[#7f9198] mt-4">Barres schématiques · aucune métrique simulée</p>
   </div>
   <div className="rounded-2xl border border-[#dae5eb] bg-[#d9e7ee]/55 p-4 flex flex-col justify-between"><div className="flex gap-2 items-center"><MapPinned size={19} className="text-[#59879b]"/><p className="text-[12px] font-semibold">Vue Europe</p></div><div className="flex flex-col gap-3 mt-4">{["Salons","Satisfaction","Opportunités"].map(x=><span key={x} className="rounded-lg bg-white/70 border border-white px-3 py-2 text-[11px]">{x}</span>)}</div></div>
  </div>
  <p className="text-[11px] text-[#628196] mt-4">Rapprocher les étapes plutôt que compter les visiteurs seuls.</p>
 </div>;
}
function Elevia(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#292b39] text-[#f4f0ee] overflow-hidden">
  <div className="absolute -right-16 -top-20 w-72 h-72 bg-[#957ab7]/20 blur-3xl rounded-full" aria-hidden="true"/>
  <div className="relative flex justify-between gap-3 uppercase tracking-[.15em] text-[10px] text-[#c9b5df]"><span>03 / Semantic matching</span><span>ESCO · Data / IA</span></div>
  <div className="relative mt-6 grid grid-cols-[1fr_auto_1fr] gap-2 sm:gap-4 items-center">
   <div className="rounded-2xl border border-[#a3a2b7]/30 bg-white/[.08] p-3 sm:p-4 min-w-0"><div className="flex items-center gap-2"><Users size={17} className="text-[#d0b2e5]"/><span className="text-[11px] font-semibold">Profil</span></div><div className="mt-4 space-y-2">{["Compétences","Expérience","Contexte"].map((x,i)=><div key={x} className="rounded-lg border border-white/10 px-2 sm:px-3 py-2 bg-white/[.06] text-[10px] text-[#e4dbe9]">{x}</div>)}</div></div>
   <div className="flex flex-col items-center gap-2"><Network size={20} className="text-[#dbb6d8]"/><span className="w-px h-10 bg-[#ad91bf]/50"/><Target size={20} className="text-[#dbb6d8]"/></div>
   <div className="rounded-2xl border border-[#a3a2b7]/30 bg-white/[.08] p-3 sm:p-4 min-w-0"><div className="flex items-center gap-2"><Database size={17} className="text-[#d0b2e5]"/><span className="text-[11px] font-semibold">Opportunité</span></div><div className="mt-4 space-y-2">{["Extraction","Normalisation","Comparaison"].map(x=><div key={x} className="rounded-lg border border-white/10 px-2 sm:px-3 py-2 bg-white/[.06] text-[10px] text-[#e4dbe9]">{x}</div>)}</div></div>
  </div><div className="relative mt-4 rounded-xl border border-[#bda8d0]/20 bg-[#bda8d0]/10 p-3 flex justify-between items-center gap-3"><p className="text-[11px] text-[#dbcfe3]">Évaluation explicable · cycles reproductibles</p><ShieldCheck size={17} className="text-[#d1bce1] shrink-0"/></div>
 </div>;
}

function Skillmap(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#e9f0e9] text-[#344c40] overflow-hidden">
  <div className="absolute -right-20 -top-20 size-72 rounded-full bg-[#b9d4b7]/35 blur-3xl" aria-hidden="true"/>
  <div className="relative flex items-center justify-between gap-2 text-[10px] uppercase tracking-[.15em] text-[#678a6c]"><span>07 / Market intelligence</span><span>Snapshot → API</span></div>
  <div className="relative grid grid-cols-[1fr_.72fr] gap-3 mt-6">
   <div className="rounded-2xl border border-[#d5e0d4] bg-white/80 p-4 shadow-[0_15px_30px_#375e4020]">
    <div className="flex items-center gap-2 text-[#557f61]"><Network size={16}/><span className="text-[11px] font-semibold">Explorer les compétences</span></div>
    <div className="mt-4 grid grid-cols-2 gap-2">{["SQL","Python","Data BI","Automation","Cloud","APIs"].map((x,i)=><span key={x} className={"rounded-lg border py-2 text-center text-[10px] " + (i%3===0?"bg-[#dfeee1] border-[#b3cdb8]":"bg-white border-[#e4e9e0]")}>{x}</span>)}</div>
    <div className="mt-4 border-t border-[#e0e7df] pt-3"><div className="flex gap-1 items-end h-9">{[35,66,45,80,56,92,65,53].map((h,i)=><span key={i} style={{height:h+"%"}} className="rounded-t-sm bg-[#8bac96] flex-1"/></div></div>
   </div>
   <div className="rounded-2xl border border-[#d5e0d4] bg-[#f7faf5]/90 p-3 sm:p-4 flex flex-col gap-2">
    <p className="text-[10px] uppercase tracking-wide text-[#6a9275] mb-1">Routes locales</p>
    {["/skills","/offers","/insights","/workflows"].map(s=><div key={s} className="flex gap-2 items-center rounded-lg bg-white/75 border border-[#e1e8dd] px-2 py-2 text-[10px]"><span className="size-1.5 bg-[#83aa8c] rounded-full"/><span className="truncate">{s}</span></div>)}
   </div>
  </div>
  <p className="relative mt-4 text-[11px] text-[#708c75]">Données agrégées · workflow de démonstration clairement identifié.</p>
 </div>;
}
function Csg(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#e3edf0] text-[#39525f] overflow-hidden">
  <div className="absolute -right-14 -top-20 size-72 bg-[#b5d8e1]/40 rounded-full blur-3xl" aria-hidden="true"/>
  <div className="relative flex justify-between gap-2 uppercase tracking-[.15em] text-[10px] text-[#668b9a]"><span>08 / Knowledge system</span><span>Documents → réponse</span></div>
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
function YevaSite(){
 return <div className="relative min-h-[270px] p-5 sm:p-7 bg-[#101011] text-[#f2ede5] overflow-hidden">
  <div className="absolute -right-8 -top-24 w-72 h-72 rounded-full bg-[#ef492d]/15 blur-3xl" aria-hidden="true"/>
  <div className="relative flex justify-between gap-2 text-[10px] uppercase tracking-[.17em] text-[#a9aaa1]"><span>09 / Culture & digital</span><span>Site collectif</span></div>
  <div className="relative mt-4 grid grid-cols-[1.1fr_.9fr] gap-3 items-stretch">
   <div className="border border-white/10 rounded-xl p-4 sm:p-5 min-h-[165px] flex flex-col justify-between bg-[#1d1d1d]">
    <div className="flex justify-between items-start"><span className="text-[9px] uppercase tracking-[.2em]">Musique · Création · Rencontres</span><span className="size-2 rounded-full bg-[#ef492d]"/></div>
    <div><p className="text-[clamp(2.5rem,8vw,5rem)] font-black tracking-[-.07em] leading-[.9]">YEVA<span className="text-[#ef492d]">.</span></p><p className="text-[11px] mt-4 text-[#b2afa8]">Un lieu numérique pour un collectif vivant.</p></div>
   </div>
   <div className="flex flex-col gap-2"><div className="rounded-xl bg-[#ef492d] text-white p-3 sm:p-4 flex-1 flex flex-col justify-between"><span className="text-[9px] uppercase tracking-wider">Programmation</span><span className="font-semibold text-base sm:text-xl leading-tight">TRAP SESSION</span></div><div className="rounded-xl border border-white/15 bg-[#202021] p-3 sm:p-4 flex gap-2 items-center justify-between"><span className="text-[11px]">Billetterie</span><ArrowRight size={17} className="text-[#ef492d]"/></div></div>
  </div>
  <p className="relative mt-4 text-[11px] text-[#9a9b97]">Identité, agenda, communauté. Représentation éditoriale du site.</p>
 </div>;
}
export default function ProjectVisual({slug}){if(slug==="event-signal")return <Event/>;if(slug==="nuit-blanche")return <Nuit/>;if(slug==="job-apply-assistant")return <Job/>;if(slug==="sidel-reporting-commercial")return <Sidel/>;if(slug==="event-analytics-europe")return <Europe/>;if(slug==="elevia")return <Elevia/>;if(slug==="skillmap-console")return <Skillmap/>;if(slug==="csg-agent")return <Csg/>;if(slug==="yeva-site")return <YevaSite/>;return null;}

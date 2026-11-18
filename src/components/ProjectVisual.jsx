import { Database, ChartNoAxesCombined, FileImage, FileText, Bot, ShieldCheck, ArrowRight, CalendarDays, Table2, Workflow } from "lucide-react";
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
 <div className="relative mt-7 flex items-center justify-between gap-2">
 <div className="rounded-2xl bg-white/75 border border-white p-3 shadow-sm"><Table2 size={22} className="text-[#578768]"/><div className="mt-3 space-y-1">{[0,1,2].map(i=><div key={i} className="flex gap-1">{[0,1,2].map(j=><span key={j} className="w-5 h-2 rounded-[2px] bg-[#b7d3bf]"/>)}</div>)}</div><span className="block text-[10px] mt-2">Google Sheets</span></div>
 <ArrowRight size={17} className="shrink-0"/>
 <div className="rounded-2xl border border-[#d8bd9e] bg-white/45 backdrop-blur-lg p-3 text-center"><Workflow size={22} className="mx-auto text-[#9c6a47]"/><span className="block text-[10px] mt-2 font-semibold">FastAPI</span><span className="block text-[9px] mt-1 opacity-70">Valider · Trier<br/>Rendre</span></div>
 <ArrowRight size={17} className="shrink-0"/>
 <div className="relative w-[100px] h-[126px] shrink-0"><div className="absolute inset-0 translate-x-2 -rotate-6 bg-[#c49b76] rounded-xl"/><div className="absolute inset-0 -rotate-1 bg-[#354b3b] rounded-xl border-4 border-white shadow-lg flex flex-col justify-between p-3 text-white"><span className="text-[8px] uppercase tracking-wider">Nuit blanche</span><span className="font-serif text-xl leading-none">Cette<br/>semaine.</span><FileImage size={17}/></div></div>
 </div><p className="relative text-[11px] text-[#997452] mt-6">Automatiser la production sans changer les habitudes de l'équipe.</p></div>}
function Job(){return <div className="relative min-h-[260px] p-6 md:p-8 bg-[#e5e8e8] text-[#37434a] overflow-hidden">
 <div className="absolute -right-12 -top-16 size-60 bg-[#b2c9c9]/45 rounded-full blur-3xl"/>
 <div className="relative flex justify-between text-[10px] tracking-[.16em] uppercase text-[#6d8086]"><span>03 / AI orchestration</span><span>Human in the loop</span></div>
 <div className="relative mt-8 flex flex-wrap gap-2 items-center justify-center"><Pill><FileText size={13}/> Offre</Pill><ArrowRight size={14}/><Pill><Bot size={13}/> Analyse</Pill><ArrowRight size={14}/><Pill>Matching</Pill><ArrowRight size={14}/><Pill><ShieldCheck size={13}/> Contrôle</Pill></div>
 <div className="relative mx-auto mt-6 w-[80%] rounded-2xl border border-white/90 bg-white/60 backdrop-blur-lg p-4 shadow-[0_14px_40px_#53626a20]"><div className="flex justify-between items-center"><span className="text-[10px] uppercase tracking-wider text-[#6d8086]">Sorties générées</span><Database size={13}/></div><div className="grid grid-cols-3 gap-2 mt-3">{["CV","Lettre","Mail"].map(x=><div key={x} className="rounded-lg border border-[#d6dfe0] bg-white/75 py-3 text-center text-xs font-semibold">{x}</div>)}</div></div>
 <p className="relative text-[11px] text-[#6d8086] mt-5">Analyser, valider, générer — sans inventer le parcours.</p></div>}
export default function ProjectVisual({slug}){if(slug==="event-signal")return <Event/>;if(slug==="nuit-blanche")return <Nuit/>;if(slug==="job-apply-assistant")return <Job/>;return null;}

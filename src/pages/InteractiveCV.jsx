import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Copy, Printer, ShieldCheck, Search } from "lucide-react";
import { projects } from "../data/projects";
import { siteContent } from "../data/content";

const tracks=[
 {id:"data",label:"Data Analyst / BI",terms:["Power BI","SQL","Power Query","DAX","Excel","PostgreSQL"],summary:"J'articule les besoins métier, la qualité des données et leur restitution. Chez Sidel, j'ai travaillé sur des dashboards commerciaux et événementiels ; dans mes projets, je conçois des pipelines et des outils analytiques."},
 {id:"automation",label:"Automatisation / IA",terms:["Python","FastAPI","OpenAI","Apps Script","Docker","Telegram"],summary:"Je conçois des automatisations et des produits IA appliqués à des problèmes concrets, de la donnée d'entrée aux contrôles et aux livrables. Nuit Blanche et Job Apply Assistant illustrent cette approche."},
 {id:"product",label:"Business Analyst / Produit",terms:["Power BI","Next.js","FastAPI","PostgreSQL","SQL","Docker"],summary:"Je fais le lien entre le besoin métier et l'outil livré : cadrage, conception, données, développement et validation. Mon expérience chez Sidel et mes produits Made by Akim se complètent."}
];
const all=projects.filter(p=>p.published!==false);
export default function InteractiveCV(){
 const [track,setTrack]=useState("data");
 const [offer,setOffer]=useState("");
 const [copied,setCopied]=useState(false);
 const selected=tracks.find(t=>t.id===track);
 const ranked=useMemo(()=>all.map(p=>({p,score:(p.stack||p.technologies||[]).filter(t=>selected.terms.some(term=>t.toLowerCase().includes(term.toLowerCase()))).length})).sort((a,b)=>b.score-a.score).slice(0,4),[selected]);
 const mentioned=selected.terms.filter(t=>offer.toLowerCase().includes(t.toLowerCase()));
 const text=`Akim Guentas — ${selected.label}\n${selected.summary}\nCompétences : ${selected.terms.join(", ")}\nProjets : ${ranked.map(x=>x.p.title).join(", ")}\nPortfolio : https://madebyakim.com`;
 return <div className="min-h-screen bg-[#faf7f0]"><div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
 <Link to="/" className="inline-flex items-center gap-2 text-sm text-stone-600 mb-9"><ArrowLeft size={16}/> Retour au portfolio</Link>
 <p className="uppercase tracking-[.2em] text-xs font-semibold text-[#a1694b] mb-4">Parcours / CV interactif</p>
 <h1 className="font-serif text-5xl md:text-6xl tracking-tight text-[#29332e]">Un parcours.<br/><em className="text-[#a1694b]">Plusieurs lectures.</em></h1>
 <p className="text-[#626a63] text-base leading-7 max-w-2xl mt-5">Pas de score inventé ni de CV fabriqué automatiquement. Choisis un angle métier : les compétences et projets documentés se réorganisent pour faciliter la lecture.</p>
 <div className="flex flex-wrap gap-2 mt-8" role="group" aria-label="Choisir un métier">{tracks.map(t=><button key={t.id} onClick={()=>setTrack(t.id)} aria-pressed={track===t.id} className={`rounded-full border px-5 py-3 text-sm transition-colors ${track===t.id?"bg-[#2e4036] border-[#2e4036] text-white":"border-stone-300 bg-white/70 text-stone-700 hover:bg-white"}`}>{t.label}</button>)}</div>
 <div className="grid lg:grid-cols-[1.3fr_.7fr] gap-5 mt-7">
 <article className="rounded-[26px] border border-[#e2dfd5] bg-white/85 shadow-sm p-6 md:p-9">
 <div className="flex flex-wrap justify-between gap-3 items-start border-b border-stone-200 pb-6"><div><span className="text-[11px] tracking-widest uppercase text-[#a1694b]">Profil professionnel</span><h2 className="font-serif text-3xl text-[#29332e] mt-2">Akim Guentas</h2><p className="text-sm text-[#59655d] mt-2">{selected.label}</p></div><ShieldCheck size={22} className="text-[#688b74]"/></div>
 <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-7 mb-3">Positionnement</h3><p className="text-sm leading-7 text-[#47534a]">{selected.summary}</p>
 <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-7 mb-3">Compétences pertinentes</h3><div className="flex flex-wrap gap-2">{selected.terms.map(t=><span key={t} className="rounded-full bg-[#f2f0e8] border border-[#e6e1d5] px-3 py-2 text-xs text-stone-700">{t}</span>)}</div>
 <h3 className="text-xs font-semibold uppercase tracking-widest text-stone-500 mt-7 mb-4">Réalisations associées</h3><div className="grid sm:grid-cols-2 gap-3">{ranked.map(({p})=><Link to={`/projects/${p.slug}`} key={p.slug} className="rounded-xl border border-[#e5e3dc] p-4 hover:border-[#a1694b] transition-colors"><span className="font-semibold text-sm text-[#29332e]">{p.title}</span><ArrowUpRight size={14} className="inline ml-2 text-[#a1694b]"/><p className="text-xs text-stone-500 mt-2 leading-5">{p.description}</p></Link>)}</div>
 <div className="border-t border-stone-200 mt-7 pt-5"><p className="text-xs text-stone-500">Expérience : Sidel · Made by Akim</p><p className="text-xs text-stone-500 mt-2">Formation : MSc Data & AI / Business · Eugenia School</p></div>
 </article>
 <aside className="space-y-5">
 <div className="rounded-[26px] border border-[#e2dfd5] bg-white/65 backdrop-blur-md p-6"><h2 className="font-serif text-2xl text-[#29332e]">Comparer à une offre</h2><p className="text-xs text-stone-500 leading-6 mt-3">Colle une fiche de poste pour repérer les technologies explicitement présentes dans cette sélection. Il ne s'agit pas d'un score de compatibilité.</p><label htmlFor="offer" className="sr-only">Fiche de poste</label><textarea id="offer" value={offer} onChange={e=>setOffer(e.target.value)} rows={7} placeholder="Colle ici le texte d'une offre d'emploi…" className="w-full mt-4 rounded-xl border border-stone-300 bg-white/80 p-3 text-sm resize-y focus:outline-[#a1694b]"/><div className="mt-4"><div className="flex items-center gap-2 text-xs text-stone-600"><Search size={14}/> Termes retrouvés dans l'offre</div><div className="flex flex-wrap gap-2 mt-3">{offer.trim()?(mentioned.length?mentioned.map(t=><span key={t} className="rounded-full bg-[#e2ede4] text-[#365941] text-xs px-3 py-2">{t}</span>):<p className="text-xs text-stone-500">Aucun terme de cette sélection retrouvé.</p>):<p className="text-xs text-stone-500">En attente d'une offre.</p>}</div></div></div>
 <div className="rounded-[26px] border border-[#e2dfd5] bg-white/65 backdrop-blur-md p-6"><h2 className="font-serif text-2xl text-[#29332e]">Partager ce profil</h2><p className="text-xs text-stone-500 mt-3 leading-6">Une version lisible, sans informations inventées. Tu peux l'imprimer ou copier la synthèse.</p><div className="flex flex-wrap gap-2 mt-5"><button onClick={()=>window.print()} className="inline-flex items-center gap-2 rounded-full bg-[#2e4036] px-4 py-3 text-xs text-white"><Printer size={14}/> Imprimer / PDF</button><button onClick={async()=>{try{await navigator.clipboard.writeText(text);setCopied(true)}catch{setCopied(false)}}} className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-3 text-xs text-stone-700"><Copy size={14}/>{copied?"Copié":"Copier"}</button></div></div>
 </aside></div>
 <p className="text-xs text-stone-500 mt-6">La sélection est une lecture éditoriale du parcours, pas une certification automatique des compétences.</p>
 </div></div>
}
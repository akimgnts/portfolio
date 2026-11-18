import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BriefcaseBusiness, Check, Copy, Mail, MapPin, Printer, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

const angles=[
 {id:"data",title:"Data Analyst / BI",summary:"Je donne une forme exploitable aux données métier : collecte, fiabilisation, analyse et restitution pour aider les équipes à décider.",skills:["Power BI","DAX","Power Query","SQL","Excel","Python","PostgreSQL"],ids:["sidel-reporting-commercial","event-analytics-europe","event-signal","elevia"]},
 {id:"automation",title:"Automatisation / IA",summary:"Je construis des systèmes qui relient des sources, des règles de traitement et des actions concrètes, avec des contrôles et une validation humaine quand elle compte.",skills:["Python","FastAPI","API REST","PostgreSQL","n8n","Make","Apps Script","OpenAI"],ids:["job-apply-assistant","nuit-blanche","elevia","event-signal"]},
 {id:"product",title:"Business Analyst / Produit",summary:"Je fais le lien entre une question métier et une solution utilisable : écouter les besoins, structurer, prototyper et apprendre des usages.",skills:["Analyse des besoins","Power BI","SQL","Python","FastAPI","React","Next.js","Gestion de projet"],ids:["sidel-reporting-commercial","event-signal","job-apply-assistant","nuit-blanche"]}
];
const experience=[
 {date:"2026 — aujourd'hui",role:"Fondateur · Made by Akim",place:"Activité indépendante",body:"Conception de solutions numériques, automatisations et produits Data/IA. Du cadrage à la logique technique, avec une attention particulière à la lisibilité du résultat."},
 {date:"2026 — aujourd'hui",role:"Création, communication & opérations · YEVA",place:"Projet associatif et culturel",body:"Identité, contenus, organisation d'événements et mesure de l'acquisition. Un terrain concret pour relier expérience humaine, création et données."},
 {date:"2024 — 2025",role:"Data & Business Analyst · Sidel",place:"Groupe Tetra Laval · Alternance",body:"Dashboards Power BI pour les équipes Marketing, Sales et Management ; rapprochement de données commerciales et événementielles et suivi de KPI."},
 {date:"2022 — 2023",role:"Business Development & Reporting · Vassard OMB Mobilier",place:"Expérience commerciale",body:"Développement commercial et reporting, au contact des usages et des objectifs métier."}
];
const studies=["MSc Data & AI — Business Track · Eugenia School · 2025","Bachelor Responsable Commerce & Marketing · EM Normandie · 2023","BTS Management Commercial Opérationnel · 2021"];
const eyebrow="text-[11px] uppercase tracking-[.16em] text-[#9b6c50] font-semibold";

export default function InteractiveCV(){
 const [active,setActive]=useState("data");
 const [offer,setOffer]=useState("");
 const [copied,setCopied]=useState(false);
 const chosen=angles.find(x=>x.id===active);
 const related=useMemo(()=>chosen.ids.map(id=>projects.find(p=>p.slug===id)).filter(Boolean),[chosen]);
 const matched=chosen.skills.filter(t=>offer.toLocaleLowerCase("fr").includes(t.toLocaleLowerCase("fr")));
 const share=["Akim Guentas — "+chosen.title,chosen.summary, "Compétences : "+chosen.skills.join(", "), "Expérience : Sidel · Made by Akim · YEVA", "Projets : "+related.map(p=>p.title).join(", "),"Portfolio : https://madebyakim.com"].join("\n");
 const copy=async()=>{try{await navigator.clipboard.writeText(share);setCopied(true)}catch{setCopied(false)}};
 return <><Navbar/><main id="main-content" tabIndex={-1} className="min-h-screen pt-32 pb-20 px-6 md:px-8">
   <div className="max-w-6xl mx-auto">
    <div className="no-print">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-[#63766b] mb-8 hover:text-[#a1694b]"><ArrowLeft size={16}/> Retour au portfolio</Link>
      <p className={eyebrow}>CV interactif / Une expérience de lecture</p>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#2c4034] mt-4">Un parcours.<br/><em className="font-normal text-[#ab7555]">Plusieurs façons de le lire.</em></h1>
      <p className="text-[15px] leading-7 text-[#647267] max-w-2xl mt-5">Le parcours reste le même. Ce qui change, c'est l'angle de lecture : les compétences et les études de cas les plus utiles pour comprendre ce que je pourrais apporter à une équipe.</p>
      <div role="group" aria-label="Choisir un angle métier" className="flex flex-wrap gap-2 mt-7">{angles.map(a=><button type="button" key={a.id} onClick={()=>{setActive(a.id);setCopied(false)}} aria-pressed={a.id===active} className={"px-5 py-3 rounded-full border text-sm font-medium transition-colors "+(active===a.id?"bg-[#2e4036] text-white border-[#2e4036]":"bg-white/75 text-[#47594b] border-[#d6ddd3] hover:border-[#a3afa4]")}>{a.title}</button>)}</div>
    </div>

    <div className="grid lg:grid-cols-[minmax(0,1.45fr)_minmax(270px,.7fr)] gap-5 mt-8 items-start">
     <article className="cv-paper bg-white/95 border border-[#e1e2dc] shadow-[0_20px_55px_rgba(47,70,55,.08)] rounded-[25px] p-6 sm:p-9 md:p-11">
      <div className="flex flex-wrap gap-6 justify-between border-b border-[#e2e5dd] pb-7">
       <div><p className={eyebrow}>Akim Guentas / CV</p><h2 className="font-serif text-4xl tracking-tight text-[#273b30] mt-3">Akim Guentas</h2><p className="text-[15px] text-[#8f644c] mt-2 font-medium">{chosen.title}</p></div>
       <div className="text-xs leading-7 text-[#6d7a70]"><p className="inline-flex gap-2 items-center"><MapPin size={13}/> Le Havre · Mobilité Paris / IDF</p><br/><a className="inline-flex gap-2 items-center hover:underline" href="mailto:akimguentas13@gmail.com"><Mail size={13}/> akimguentas13@gmail.com</a><br/><a className="hover:underline" href="https://madebyakim.com">madebyakim.com</a></div>
      </div>

      <section className="mt-8"><p className={eyebrow}>01 / Positionnement</p><p className="text-[15px] leading-8 text-[#465a4c] mt-3">{chosen.summary}</p></section>
      <section className="mt-9"><p className={eyebrow}>02 / Expériences</p><div className="mt-5 space-y-6 border-l border-[#d9dfd5] ml-1">{experience.map((e,i)=><div key={i} className="relative pl-6"><span className="absolute -left-[5px] top-2 size-[9px] rounded-full border-2 border-[#658a73] bg-[#fffdfa]"/><p className="text-[11px] tracking-wide font-semibold text-[#9d7058]">{e.date}</p><h3 className="font-serif text-xl text-[#35473c] mt-1">{e.role}</h3><p className="text-xs text-[#87938a] mt-1">{e.place}</p><p className="text-sm leading-7 text-[#617167] mt-2">{e.body}</p></div>)}</div></section>
      <section className="mt-9"><p className={eyebrow}>03 / Compétences</p><div className="flex flex-wrap gap-2 mt-4">{chosen.skills.map(skill=><span key={skill} className="text-xs text-[#4b6051] bg-[#f1f5ee] border border-[#dce3d8] px-3 py-2 rounded-lg">{skill}</span>)}</div></section>
      <section className="mt-9"><p className={eyebrow}>04 / Réalisations sélectionnées</p><div className="mt-4 grid sm:grid-cols-2 gap-3">{related.map(p=><Link to={"/projects/"+p.slug} key={p.slug} className="rounded-xl border border-[#dee3da] bg-[#fafcf8] p-4 hover:border-[#a1694b] transition-colors"><div className="flex items-start justify-between gap-2"><h3 className="text-sm font-semibold text-[#33483b]">{p.title}</h3><ArrowUpRight className="text-[#a1694b] shrink-0" size={15}/></div><p className="text-xs leading-6 text-[#6e7b71] mt-2">{p.description}</p></Link>)}</div></section>
      <section className="mt-9 border-t border-[#e2e5dd] pt-7"><p className={eyebrow}>05 / Formation</p><ul className="mt-4 space-y-2">{studies.map(x=><li className="text-sm text-[#617167] leading-6" key={x}>{x}</li>)}</ul><p className="text-xs mt-5 text-[#7b877d]">Français natif · Anglais professionnel</p></section>
     </article>

     <aside className="no-print space-y-4 lg:sticky lg:top-28">
       <div className="rounded-[24px] border border-[#e0e3da] bg-white/75 backdrop-blur-md p-6">
         <div className="flex items-center gap-2 text-[#a1694b]"><BriefcaseBusiness size={17}/><p className={eyebrow}>Lecture recruteur</p></div>
         <h2 className="font-serif text-2xl text-[#304439] mt-4">Tu recrutes sur un poste précis ?</h2>
         <p className="text-xs leading-6 text-[#667469] mt-3">Colle une description de poste. Les compétences explicitement présentes dans cette sélection apparaîtront ici. Il n'y a ni score de compatibilité inventé ni données envoyées à un serveur.</p>
         <label htmlFor="cv-offer" className="sr-only">Description de poste</label><textarea id="cv-offer" value={offer} onChange={e=>setOffer(e.target.value)} rows={6} placeholder="Description du poste…" className="w-full mt-4 rounded-xl border border-[#d8e0d5] p-3 text-sm text-[#405248] bg-white/90 resize-y focus:outline-[#a1694b]"/>
         <div className="mt-4 flex items-center gap-2 text-xs text-[#667469]"><Search size={14}/> Technologies retrouvées</div>
         <div className="flex flex-wrap gap-2 mt-3">{offer.trim()?(matched.length?matched.map(t=><span key={t} className="rounded-full bg-[#e4efe5] px-3 py-2 text-xs text-[#456e4f]">{t}</span>):<p className="text-xs text-[#90968d]">Aucun terme de cette liste identifié.</p>):<p className="text-xs text-[#90968d]">En attente d'une description.</p>}</div>
       </div>
       <div className="rounded-[24px] border border-[#e0e3da] bg-[#f6efe6] p-6"><p className={eyebrow}>Partager</p><h2 className="font-serif text-2xl text-[#304439] mt-3">Une version facile à transmettre.</h2><p className="text-xs leading-6 text-[#737469] mt-3">L'impression produit une version épurée de ce CV. Le texte copié reprend le positionnement actuellement sélectionné.</p><div className="flex flex-wrap gap-2 mt-5">
        <button type="button" onClick={()=>window.print()} className="inline-flex gap-2 items-center rounded-full bg-[#30473a] px-4 py-3 text-white text-xs"><Printer size={15}/> Imprimer / PDF</button>
        <button type="button" onClick={copy} className="inline-flex gap-2 items-center rounded-full border border-[#b6b7a9] px-4 py-3 text-[#465447] text-xs">{copied?<Check size={15}/>:<Copy size={15}/>} {copied?"Copié":"Copier la synthèse"}</button>
       </div></div>
       <p className="text-xs leading-6 text-[#829087] px-2">Ce CV met en valeur des compétences et projets documentés, sans créer de qualifications ou résultats supplémentaires.</p>
     </aside>
    </div>
   </div>
  </main><Footer/></>;
}

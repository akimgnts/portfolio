import { useState } from "react";
import { ArrowRight, CheckCircle2, CircleHelp, FileText, Mail, Search, ShieldCheck, Ticket, TrendingUp } from "lucide-react";

// Public, privacy-safe recreations of verified application flows. These are not screenshots.
const jobs=[
 {id:"a",title:"Data Analyst Junior",company:"Atelier Nord (fictif)",city:"Paris",hours:16,skills:["Power BI","SQL","Python"]},
 {id:"b",title:"Business Analyst",company:"Studio Horizon (fictif)",city:"Lyon",hours:38,skills:["Analyse métier","SQL"]},
 {id:"c",title:"Chargé de reporting",company:"Maison Atlas (fictif)",city:"Rouen",hours:62,skills:["Excel","Power BI"]}
];
const btnBase="rounded-xl px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-offset-2";
function Frame({brand,children}) {
 return <div className="rounded-[25px] border border-[#d5dfd3] overflow-hidden shadow-[0_20px_55px_rgba(40,68,48,.1)] bg-[#f5f7f3]">
  <header className="flex flex-wrap items-center justify-between gap-3 bg-white px-5 sm:px-7 py-4 border-b border-[#dce5d9]">
   <span className="text-sm font-bold text-[#2d4737]">{brand}</span>
   <span className="px-3 py-1.5 bg-[#fff2e5] border border-[#eed2b8] rounded-full text-[10px] font-semibold text-[#956643]">DÉMO · DONNÉES FICTIVES</span>
  </header>{children}
 </div>;
}
function TabButton({active,onClick,children}){
 return <button type="button" onClick={onClick} aria-pressed={active} className={btnBase+" shrink-0 "+(active?"bg-white text-[#2a4736]":"text-[#e1ece1] hover:bg-white/10")}>{children}</button>;
}
function Stat({name,value,unit}){
 return <div className="rounded-xl bg-white border border-[#dce6dc] p-4">
  <p className="text-[11px] text-[#66806e]">{name}</p><p className="text-2xl font-semibold text-[#2d4736] tabular-nums mt-3">{value}<span className="text-sm ml-1 text-[#708a78]">{unit}</span></p>
 </div>;
}
function EventDemo(){
 const [page,setPage]=useState("overview");
 const [event,setEvent]=useState("a");
 const [explain,setExplain]=useState(false);
 const metrics=event==="a"?{name:"Événement A",sold:18,orders:14,amount:63,ads:21,scans:12,posts:3,graph:[2,4,1,5,3,4]}:{name:"Événement B",sold:11,orders:9,amount:42,ads:16,scans:6,posts:2,graph:[1,2,2,4,1,3]};
 return <Frame brand="YEVA / Event Signal">
  <div className="grid lg:grid-cols-[178px_minmax(0,1fr)]">
   <nav className="flex lg:flex-col gap-1 overflow-x-auto p-3 bg-[#284639]" aria-label="Naviguer dans la démo Event Signal">
    <TabButton active={page==="overview"} onClick={()=>setPage("overview")}>Aujourd'hui</TabButton>
    <TabButton active={page==="sales"} onClick={()=>setPage("sales")}>Ventes</TabButton>
    <TabButton active={page==="content"} onClick={()=>setPage("content")}>Contenus & pubs</TabButton>
    <TabButton active={page==="sources"} onClick={()=>setPage("sources")}>Sources & fiabilité</TabButton>
   </nav>
   <div className="p-4 sm:p-7 min-w-0">
    <div className="flex flex-wrap gap-3 items-end justify-between mb-6">
     <div><p className="text-[10px] uppercase tracking-widest text-[#78917b] font-semibold">Cockpit organisateur</p><h3 className="font-serif text-2xl sm:text-3xl text-[#2a4333] mt-2">{page==="overview"?"Où en sommes-nous ?":page==="sales"?"Du billet à la décision":page==="content"?"Relier communication et ventes":"Garder la source visible"}</h3></div>
     <label className="text-xs text-[#607866]">Événement
      <select className="block mt-1 bg-white border border-[#cbdacb] rounded-lg p-2 text-sm" value={event} onChange={e=>setEvent(e.target.value)}>
       <option value="a">Événement A</option><option value="b">Événement B</option>
      </select>
     </label>
    </div>
    {page==="overview"&&<>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <Stat name="Billets payants" value={metrics.sold}/><Stat name="Commandes" value={metrics.orders}/><Stat name="Prix facial" value={metrics.amount} unit="€"/><Stat name="Pub. / billet" value={(metrics.ads/metrics.sold).toFixed(2).replace(".",",")} unit="€"/>
     </div>
     <div className="grid sm:grid-cols-[1fr_.7fr] gap-3 mt-3">
      <div className="rounded-xl bg-white border border-[#dce6dc] p-4">
       <p className="text-xs font-semibold text-[#36533f]">Chronologie des ventes</p>
       <div className="mt-6 border-b border-[#c9dccd] h-24 flex gap-2 items-end">{metrics.graph.map((n,i)=><div key={i} className="flex-1 bg-[#91b69b] rounded-t-sm" style={{height:(n*18)+"%"}}/>)}</div>
       <p className="text-[10px] text-[#829688] mt-3">Graphique d'exemple, non synchronisé</p>
      </div>
      <div className="rounded-xl bg-[#2b4839] text-white p-4">
       <p className="text-xs text-[#bcd5c1]">Solde partiel</p>
       <p className="font-serif text-3xl mt-4">{metrics.amount-metrics.ads} €</p>
       <p className="text-[11px] leading-6 mt-4 text-[#d2e0d4]">Avant frais et autres dépenses. Ce n'est pas un bénéfice.</p>
      </div>
     </div>
    </>}
    {page==="sales"&&<div className="space-y-3">
     <div className="grid grid-cols-3 gap-2"><Stat name="Billets" value={metrics.sold}/><Stat name="Commandes" value={metrics.orders}/><Stat name="Scans" value={metrics.scans}/></div>
     <div className="rounded-xl bg-white p-5 border border-[#dce6dc]">
      <p className="text-sm font-semibold text-[#36533f]">Billets scannés / valides</p>
      <div className="h-2 rounded-full bg-[#e3efe4] mt-5 overflow-hidden"><div className="h-full bg-[#75a481]" style={{width:(100*metrics.scans/metrics.sold)+"%"}}/></div>
      <p className="text-xs leading-6 mt-3 text-[#698073]">Un billet non scanné ne prouve pas une absence.</p>
     </div>
    </div>}
    {page==="content"&&<div className="grid sm:grid-cols-2 gap-3">
      <Stat name="Contenus associés explicitement" value={metrics.posts}/>
      <Stat name="Dépenses des campagnes associées" value={metrics.ads} unit="€"/>
      <div className="sm:col-span-2 rounded-xl bg-[#e7efe7] p-4 text-xs leading-6 text-[#58705c]">Les publications organiques et les publicités restent séparées lorsqu'elles ne possèdent pas le même identifiant.</div>
    </div>}
    {page==="sources"&&<div className="grid sm:grid-cols-2 gap-3">{[["Shotgun","Ventes, tarifs, commandes et scans"],["Meta","Campagnes et dépenses"],["Instagram","Publications et statistiques"],["ManyChat","Observations séparées des APIs"]].map(([name,detail])=><div key={name} className="rounded-xl bg-white border border-[#dce6dc] p-4"><div className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#6a9875]"/><p className="font-semibold text-sm text-[#35513e]">{name}</p></div><p className="text-xs leading-6 text-[#718678] mt-2">{detail}</p></div>)}</div>}
    <button type="button" aria-expanded={explain} onClick={()=>setExplain(x=>!x)} className="inline-flex items-center gap-2 underline underline-offset-4 text-xs text-[#56775f] mt-6"><CircleHelp size={15}/> Pourquoi publicité par billet ≠ CAC attribué ?</button>
    {explain&&<p className="rounded-xl bg-[#e5eee6] px-4 py-3 mt-3 text-xs leading-6 text-[#47644e]">Diviser le budget publicitaire par les billets vendus n'établit aucun lien causal entre une campagne et un achat. Sans attribution fiable, le CAC attribué reste inconnu.</p>}
   </div>
  </div>
 </Frame>;
}
function JobDemo(){
 const [hours,setHours]=useState(48);
 const [page,setPage]=useState("offers");
 const [selected,setSelected]=useState(null);
 const job=jobs.find(x=>x.id===selected);
 return <Frame brand="jobapply. / Espace candidat">
  <div className="grid lg:grid-cols-[178px_minmax(0,1fr)]">
   <nav className="flex lg:flex-col gap-1 overflow-x-auto p-3 bg-[#273c30]" aria-label="Naviguer dans la démo Job Apply">
    <TabButton active={page==="offers"} onClick={()=>setPage("offers")}>Offres du jour</TabButton>
    <TabButton active={page==="file"} onClick={()=>setPage("file")}>Préparation</TabButton>
    <TabButton active={page==="tracking"} onClick={()=>setPage("tracking")}>Suivi</TabButton>
   </nav>
   <div className="p-4 sm:p-7 min-w-0">
    <p className="text-[10px] font-semibold uppercase tracking-widest text-[#718677]">Une candidature, étape par étape</p>
    <h3 className="font-serif text-2xl sm:text-3xl text-[#2b4435] mt-2 mb-5">{page==="offers"?"Trouver une offre récente":page==="file"?"Préparer un dossier":"Retrouver l'historique"}</h3>
    {page==="offers"&&<>
     <div className="flex flex-wrap items-center justify-between gap-3 mb-4"><p className="text-xs text-[#607966]">Publiée il y a moins de</p><div className="flex gap-1">{[24,48,72].map(h=><button type="button" key={h} aria-pressed={hours===h} onClick={()=>setHours(h)} className={btnBase+" "+(hours===h?"bg-[#2d4938] text-white":"bg-white border border-[#dce5da] text-[#4e6957]")}>{h} h</button>)}</div></div>
     <div className="space-y-2">{jobs.filter(j=>j.hours<=hours).map(j=><div key={j.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl p-4 bg-white border border-[#dce5da]"><div><p className="text-[11px] text-[#819185]">{j.company} · {j.city}</p><p className="font-semibold text-sm text-[#34513d] mt-2">{j.title}</p><p className="text-[11px] text-[#7d8b7e] mt-1">{j.hours} h · {j.skills.join(" · ")}</p></div><button type="button" onClick={()=>{setSelected(j.id);setPage("file")}} className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-[#2d4938] px-3 py-2.5 rounded-full">Préparer <ArrowRight size={14}/></button></div>)}</div>
     <p className="text-[11px] text-[#829186] mt-4">Le vrai radar distingue date de publication et fraîcheur de collecte.</p>
    </>}
    {page==="file"&&<div className="space-y-3">
     <div className="p-4 bg-white rounded-xl border border-[#dce5da]"><p className="text-[10px] uppercase tracking-wider text-[#7c9183]">Offre choisie</p><p className="text-sm font-semibold text-[#34513e] mt-3">{job?.title||"Aucune offre sélectionnée"}</p><p className="text-xs text-[#748577] mt-2">{job?"Compétences : "+job.skills.join(", "):"Choisissez une offre dans l'onglet précédent."}</p></div>
     {job&&<><div className="grid sm:grid-cols-3 gap-2">{[["Analyse","Exigences et forces",<Search size={18}/>],["Documents","CV, lettre, email",<FileText size={18}/>],["Contrôle","Validation humaine",<ShieldCheck size={18}/>]].map(([name,detail,ico])=><div key={name} className="rounded-xl bg-[#edf3eb] border border-[#dce5da] p-4"><span className="text-[#779d7c]">{ico}</span><p className="text-xs font-semibold text-[#35513d] mt-3">{name}</p><p className="text-[11px] leading-5 text-[#728478] mt-2">{detail}</p></div>)}</div><button type="button" onClick={()=>setPage("tracking")} className="inline-flex gap-2 items-center bg-[#2d4938] text-white text-xs rounded-full px-4 py-3">Voir le suivi <ArrowRight size={14}/></button></>}
    </div>}
    {page==="tracking"&&<div className="rounded-xl bg-white border border-[#dce5da] p-5"><div className="flex items-center gap-2"><Mail size={17} className="text-[#709979]"/><p className="font-semibold text-sm text-[#34513d]">Suivi du dossier</p></div><p className="text-xs text-[#748577] mt-3">{job?.title||"Exemple de dossier"}</p><ol className="grid sm:grid-cols-3 gap-2 mt-5">{["Offre analysée","Documents à relire","Envoi à confirmer"].map((s,i)=><li key={s} className="bg-[#f0f5ef] rounded-xl p-3 text-xs text-[#536a59]"><span className="text-[#a77d62] block mb-2">0{i+1}</span>{s}</li>)}</ol><p className="text-[11px] leading-6 text-[#859286] mt-5">Simulation uniquement : aucun document ni email n'est généré ou envoyé ici. L'application réelle distingue les dossiers incomplets et les connexions Gmail expirées.</p></div>}
   </div>
  </div>
 </Frame>;
}
export default function ProjectDemo({slug}){
 if(slug!=="event-signal"&&slug!=="job-apply-assistant")return null;
 return <section aria-label="Démonstration interactive du projet" className="my-10">
  <p className="text-[11px] uppercase tracking-[.17em] text-[#9f6a4e] font-semibold">Le produit en action</p>
  <h2 className="font-serif text-3xl sm:text-4xl text-[#2e4538] tracking-tight mt-3">Explorer le fonctionnement.</h2>
  <p className="max-w-3xl text-sm leading-7 text-[#6d7e70] mt-3 mb-6">Reconstitution interactive des écrans observés dans l'application. Les chiffres et les entreprises sont fictifs pour ne pas exposer les données privées. Ce n'est pas une capture du produit connecté.</p>
  {slug==="event-signal"?<EventDemo/>:<JobDemo/>}
 </section>;
}

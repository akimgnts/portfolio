import { Activity, Clock3, Database, ExternalLink, GitBranch, Server, ShieldCheck } from "lucide-react";

const details = {
  "event-signal": {
    subtitle:"Un cockpit réellement hébergé, avec des synchronisations opérationnelles.",
    verified:"Interface privée relue le 18 novembre 2026",
    items:[
      {icon:Server,title:"Application en production",body:"Déploiement privé Coolify sur VPS, authentification et PostgreSQL 17 avec volume persistant."},
      {icon:Clock3,title:"Synchronisation toutes les 15 minutes",body:"Worker serveur, verrouillage des cycles concurrents et contrôle des erreurs par source."},
      {icon:Database,title:"3 intégrations métier",body:"Shotgun Tickets/Events, Meta Ads et Instagram Insights, en lecture seule. Les observations ManyChat sont identifiées séparément."},
      {icon:Activity,title:"Indicateurs utilisés",body:"Billets, commandes, prix, scans, dépenses publicitaires, publications et fraîcheur des données, par événement."},
    ],
    note:"La fréquence du worker est documentée côté déploiement. Une heure de synchronisation affichée dans le cockpit n'établit pas à elle seule une garantie de disponibilité continue."
  },
  "job-apply-assistant": {
    subtitle:"Une application web exploitée, pas uniquement une expérimentation Telegram.",
    verified:"Interface web et état Coolify relus le 18 novembre 2026",
    items:[
      {icon:Server,title:"Web + API en production",body:"Application hébergée sur Coolify, API protégée et stockage PostgreSQL. État Running / Healthy observé."},
      {icon:Database,title:"Collecte et suivi multi-sources",body:"Business France VIE et APEC avec dates de dernière collecte ; radar séparant offres actives, archives et nouveautés."},
      {icon:GitBranch,title:"Workflow de candidature complet",body:"Analyse du poste, choix du positionnement, préparation de CV / lettre / email, validation et suivi du dossier."},
      {icon:ShieldCheck,title:"Contrôles et traçabilité",body:"Documents versionnés, PDF testé, avertissements de fraîcheur et statut explicite des connexions comme Gmail."},
    ],
    note:"Le fonctionnement web est vérifié ; la cadence exacte des tâches planifiées Job Apply n'a pas été contrôlée. La collecte APEC et l'autorisation Gmail présentent des limites documentées."
  }
};
export default function ProductionEvidence({slug}){
 const item=details[slug]; if(!item)return null;
 return <section aria-labelledby="production-proof-heading" className="mt-9 mb-10 rounded-[25px] overflow-hidden border border-[#cfdccf] bg-[#e9f0e8]">
  <div className="flex flex-wrap items-center justify-between gap-3 bg-[#284737] text-[#f2f6ef] px-6 sm:px-8 py-5">
    <div className="flex items-center gap-3"><span className="size-2.5 rounded-full bg-[#b1d6ad]" aria-hidden="true"/><div><p className="text-[10px] uppercase tracking-[.18em] text-[#b2d3b7]">Preuves d'exploitation</p><h2 id="production-proof-heading" className="font-serif text-2xl mt-1">Déployé. Utilisé. Documenté.</h2></div></div>
    <span className="inline-flex gap-2 items-center rounded-full border border-white/20 px-3 py-2 text-[11px] text-[#e4f0e2]"><Activity size={15}/> Production vérifiée</span>
  </div>
  <div className="p-6 sm:p-8">
    <p className="text-sm leading-7 text-[#4f6855] mb-6">{item.subtitle}</p>
    <div className="grid sm:grid-cols-2 gap-3">
     {item.items.map(({icon:Icon,title,body})=><div key={title} className="rounded-2xl border border-[#d9e5d7] bg-white/85 p-5">
      <Icon size={19} className="text-[#5b8768]" aria-hidden="true"/>
      <h3 className="font-semibold text-[14px] text-[#304d39] mt-4">{title}</h3>
      <p className="text-[12px] leading-6 text-[#617465] mt-2">{body}</p>
     </div>)}
    </div>
    <div className="flex flex-wrap gap-3 items-start justify-between border-t border-[#d2dfd0] pt-5 mt-6">
      <p className="text-[11px] text-[#68806e]">{item.verified}</p>
      <p className="text-[11px] leading-5 text-[#7b8f7f] max-w-2xl">{item.note}</p>
    </div>
  </div>
 </section>;
}

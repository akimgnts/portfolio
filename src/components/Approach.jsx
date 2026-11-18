import { ArrowRight, CircleCheck, Code2, Compass } from "lucide-react";
const stages=[
 {number:"01",icon:Compass,title:"Comprendre",note:"Écouter, questionner, rendre le problème précis.",steps:["Besoin métier","Sources de données","Critères de réussite"]},
 {number:"02",icon:Code2,title:"Construire",note:"Choisir la solution la plus simple qui tient dans la durée.",steps:["Modèle & architecture","Prototype utilisable","Tests avec les personnes concernées"]},
 {number:"03",icon:CircleCheck,title:"Apprendre",note:"Livrer, mesurer et accepter de corriger.",steps:["Livraison & documentation","Contrôle des résultats","Amélioration continue"]}
];
export default function Approach(){
 return <section id="approach" className="px-6 md:px-8 py-14 md:py-20" aria-labelledby="approach-heading">
  <div className="max-w-5xl mx-auto">
   <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 mb-7">
    <div><p className="text-[11px] font-semibold uppercase tracking-[.18em] text-[#a1694b]">Ma méthode</p>
      <h2 id="approach-heading" className="font-serif text-4xl md:text-5xl text-[#2e4036] mt-4 tracking-tight">Faire simple. <em className="font-normal text-[#a1694b]">Faire utile.</em></h2></div>
    <p className="text-sm leading-7 text-[#708176] max-w-sm">Le bon produit n'est pas nécessairement le plus complexe. C'est celui qui répond au besoin et dont on peut vérifier le fonctionnement.</p>
   </div>
   <div className="grid md:grid-cols-3 gap-3">{stages.map(({number,icon:Icon,title,note,steps},idx)=><div className="rounded-[23px] border border-[#dce2d9] bg-white/65 px-6 py-7 flex flex-col" key={number}>
      <div className="flex items-center justify-between"><span className="text-[11px] tracking-wider text-[#ae856d]">{number} / 03</span><Icon size={22} className="text-[#718c77]"/></div>
      <h3 className="font-serif text-[29px] text-[#314438] mt-8">{title}</h3>
      <p className="text-[13px] leading-6 text-[#718076] mt-2 min-h-12">{note}</p>
      <div className="border-t border-[#e3e8df] mt-6 pt-5 space-y-3">{steps.map(s=><p key={s} className="flex items-center gap-2 text-xs text-[#5c705f]"><span className="w-1 h-1 rounded-full bg-[#bd8a6c]"/>{s}</p>)}</div>
      {idx<2 && <ArrowRight size={16} className="hidden md:block absolute opacity-0" aria-hidden="true"/>}
    </div>)}</div>
  </div>
 </section>;
}

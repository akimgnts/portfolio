import { Link } from "react-router-dom";
import { ArrowUpRight, BriefcaseBusiness, GitBranch, Users } from "lucide-react";

const worlds=[
 {icon:BriefcaseBusiness,label:"Expérience métier",title:"Sidel",text:"Des données commerciales à transformer en décisions utiles pour des équipes Sales, Marketing et Management."},
 {icon:GitBranch,label:"Construction",title:"Made by Akim",text:"Concevoir des produits, connecter des APIs, tester des hypothèses et améliorer les systèmes."},
 {icon:Users,label:"Création & collectif",title:"YEVA",text:"Imaginer des événements, porter une identité et réunir des personnes autour d'une proposition."}
];

export default function About(){
 return <section id="about" className="px-6 md:px-8 py-14 md:py-20" aria-labelledby="about-heading">
  <div className="max-w-5xl mx-auto">
   <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-7 lg:gap-16 items-start">
    <div>
      <p className="text-[11px] uppercase tracking-[.18em] text-[#a1694b] font-semibold">Qui je suis</p>
      <h2 id="about-heading" className="font-serif text-4xl md:text-5xl tracking-tight leading-[1.13] text-[#2e4036] mt-4">Je préfère <em className="font-normal text-[#a1694b]">comprendre</em> avant de construire.</h2>
      <Link to="/cv" className="inline-flex items-center gap-2 text-sm font-medium text-[#526958] mt-6 hover:text-[#a1694b]">Explorer mon parcours <ArrowUpRight size={16}/></Link>
    </div>
    <div className="space-y-4 text-[15px] text-[#5e6f62] leading-8">
      <p>Mon parcours a commencé par le commerce et la compréhension des besoins. Chez Sidel, j'ai découvert ce que les données pouvaient changer dans le quotidien d'une équipe : moins de flou, de meilleures priorités et des décisions plus simples.</p>
      <p>Aujourd'hui, je construis aussi mes propres outils. J'aime autant réfléchir à un problème, écrire le code, travailler une interface que présenter le résultat à quelqu'un qui va vraiment s'en servir.</p>
      <p>Et avec YEVA, je garde un pied dans un autre univers : celui des idées, de la création et des rencontres. Ce mélange est une force de travail, pas une liste de titres.</p>
    </div>
   </div>
   <div className="grid sm:grid-cols-3 gap-3 mt-9">
     {worlds.map(({icon:Icon,label,title,text})=><div key={title} className="rounded-[21px] border border-[#dfe3db] bg-white/65 p-5 sm:p-6">
       <div className="flex justify-between items-center gap-2"><span className="text-[10px] uppercase tracking-[.15em] text-[#a16b50]">{label}</span><Icon size={19} className="text-[#6b8d74]"/></div>
       <h3 className="font-serif text-2xl text-[#31463a] mt-6">{title}</h3>
       <p className="text-[13px] text-[#708076] mt-3 leading-6">{text}</p>
     </div>)}
   </div>
  </div>
 </section>;
}

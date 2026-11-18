import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteContent } from "../data/content";

export default function Footer(){
 const social=siteContent.contact.social.filter(x=>x.label!=="Site");
 return <footer className="border-t border-[#dce2d8] bg-[#f7f7f1]/75 px-6 md:px-8">
  <div className="max-w-5xl mx-auto py-9 flex flex-col sm:flex-row gap-6 justify-between sm:items-end">
    <div><Link to="/" className="font-serif text-2xl text-[#2e4036] hover:text-[#9b684e]">Akim Guentas<span className="text-[#a1694b]">.</span></Link><p className="text-xs text-[#758277] leading-6 mt-2">Business · Data · Produit · Création</p><p className="text-[11px] text-[#939e94] mt-3">© {siteContent.footer.year} Akim Guentas</p></div>
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-[#536b5a]"><Link to="/projects" className="hover:text-[#a1694b]">Projets</Link><Link to="/cv" className="hover:text-[#a1694b]">CV</Link>{social.map(s=><a key={s.href} href={s.href} target={s.href.startsWith("mailto")?undefined:"_blank"} rel={s.href.startsWith("mailto")?undefined:"noopener noreferrer"} className="inline-flex items-center gap-1 hover:text-[#a1694b]">{s.label}<ArrowUpRight size={12}/></a>)}</div>
  </div>
 </footer>;
}
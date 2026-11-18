import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data/projects";

const titles = {
 "/": "Data & Business Analyst",
 "/projects": "Projets & études de cas",
 "/cartographie": "Cartographie des compétences",
 "/cv": "CV interactif"
};
const descriptions = {
 "/": "Akim Guentas, Data & Business Analyst. Reporting Power BI chez Sidel, automatisations et projets Data documentés.",
 "/projects": "Découvrez les parcours réels de Job Apply et Event Signal, leurs données et leur architecture, et mon expérience Power BI chez Sidel.",
 "/cartographie": "Une cartographie interactive qui relie les compétences Data, BI, IA, produit et Business à des projets documentés.",
 "/cv": "Explorez le CV interactif d'Akim Guentas : expériences, compétences, réalisations et lectures par métier."
};
export default function RouteEffects(){
 const {pathname,hash,key}=useLocation();
 useEffect(()=>{
  const detail=pathname.startsWith("/projects/") ? projects.find(p=>"/projects/"+p.slug===pathname) : null;
  const title=detail?.title || titles[pathname] || "Portfolio";
  const description=detail?.description || descriptions[pathname] || descriptions["/"];
  const url="https://madebyakim.com" + (pathname==="/" ? "/" : pathname);
  document.title=title+" — Akim Guentas";
  document.documentElement.lang="fr";
  const meta=document.querySelector('meta[name="description"]');
  const ogTitle=document.querySelector('meta[property="og:title"]');
  const ogDesc=document.querySelector('meta[property="og:description"]');
  const ogUrl=document.querySelector('meta[property="og:url"]');
  const canonical=document.querySelector('link[rel="canonical"]');
  if(meta) meta.setAttribute("content",description);
  if(ogTitle) ogTitle.setAttribute("content",document.title);
  if(ogDesc) ogDesc.setAttribute("content",description);
  if(ogUrl) ogUrl.setAttribute("content",url);
  if(canonical) canonical.setAttribute("href",url);
  const frame=requestAnimationFrame(()=>{
    const target=hash?document.getElementById(hash.slice(1)):document.getElementById("main-content");
    if(hash && target){
      target.scrollIntoView({behavior:"auto",block:"start"});
      if(!target.hasAttribute("tabindex"))target.setAttribute("tabindex","-1");
      target.focus({preventScroll:true});
    } else if(!hash){
      window.scrollTo({top:0,behavior:"auto"});
      target?.focus({preventScroll:true});
    }
  });
  return ()=>cancelAnimationFrame(frame);
 },[pathname,hash,key]);
 return null;
}

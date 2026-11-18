import { Link } from "react-router-dom";
import { ArrowUpRight, HeartHandshake, PenTool, Workflow } from "lucide-react";

export default function HumanSignal() {
  return <section id="creation" className="px-6 md:px-8 py-14 md:py-16" aria-labelledby="creation-heading">
    <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.08fr] overflow-hidden rounded-[28px] border border-[#355045] bg-[#243c32]">
      <div className="p-7 sm:p-10 md:p-12 text-[#f3efe4] flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[.2em] text-[#b2c9b7]">Au-delà du code</p>
          <h2 id="creation-heading" className="font-serif text-4xl md:text-[3.25rem] tracking-tight leading-[1.12] mt-5">
            La technologie m'intéresse. <em className="text-[#e3b38c] font-normal">Les gens aussi.</em>
          </h2>
          <p className="mt-6 text-[15px] leading-8 text-[#d2ded4]">Avec YEVA, je travaille aussi sur des projets culturels : imaginer des formats, faire exister une identité, coordonner des talents et comprendre ce qui donne envie aux gens de se réunir.</p>
          <p className="mt-4 text-[15px] leading-8 text-[#d2ded4]">Ce terrain nourrit ma façon de construire des produits : partir de l'expérience humaine, puis choisir les bons outils.</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <a href="https://www.instagram.com/yeva.club" target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center text-xs font-medium text-[#fff0dd] hover:underline underline-offset-4">Découvrir YEVA <ArrowUpRight size={15}/></a>
          <Link to="/projects/event-signal" className="inline-flex gap-2 items-center text-xs font-medium text-[#d4e9d8] hover:underline underline-offset-4">Le projet data associé <ArrowUpRight size={15}/></Link>
        </div>
      </div>
      <div className="relative min-h-[300px] bg-[#e8dcd0] p-6 sm:p-8 overflow-hidden flex flex-col justify-between">
        <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-[#e9a47b]/40 blur-3xl" aria-hidden="true"/>
        <div className="relative flex justify-between items-center"><span className="text-[10px] font-semibold tracking-[.22em] uppercase text-[#8f6852]">Expression × Système</span><span className="text-[10px] text-[#9b7864]">YEVA / Made by Akim</span></div>
        <div className="relative grid grid-cols-3 gap-2 sm:gap-3 items-end my-7">
          <div className="rounded-2xl border border-white/80 bg-white/50 backdrop-blur-md p-3 sm:p-4 -rotate-3 shadow-[0_20px_35px_#5a463315]">
            <PenTool size={22} className="text-[#aa6b55]"/>
            <p className="font-serif text-base sm:text-xl text-[#4a4a39] mt-9">Créer.</p><p className="text-[10px] mt-2 text-[#8d7b6d]">Identité · récit</p>
          </div>
          <div className="rounded-2xl border border-white/80 bg-[#f8f2e8]/80 backdrop-blur-md p-3 sm:p-4 translate-y-4 shadow-[0_20px_35px_#5a463315]">
            <HeartHandshake size={22} className="text-[#698b72]"/>
            <p className="font-serif text-base sm:text-xl text-[#4a4a39] mt-9">Relier.</p><p className="text-[10px] mt-2 text-[#8d7b6d]">Équipe · public</p>
          </div>
          <div className="rounded-2xl border border-white/80 bg-white/50 backdrop-blur-md p-3 sm:p-4 rotate-3 shadow-[0_20px_35px_#5a463315]">
            <Workflow size={22} className="text-[#aa6b55]"/>
            <p className="font-serif text-base sm:text-xl text-[#4a4a39] mt-9">Mesurer.</p><p className="text-[10px] mt-2 text-[#8d7b6d]">Donnée · usage</p>
          </div>
        </div>
        <p className="relative font-serif italic text-xl text-[#6c584b] max-w-sm">Une même curiosité, dans plusieurs mondes.</p>
      </div>
    </div>
  </section>;
}

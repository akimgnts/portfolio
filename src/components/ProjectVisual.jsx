const scenes = {
  "nuit-blanche": {
    kicker: "CONTENT ENGINE / 01",
    title: "Du tableur au carrousel",
    nodes: ["Google Sheets", "FastAPI", "PNG / ZIP"],
    palette: "from-[#E9F0DD] via-[#F6E6CD] to-[#F3E4DB]",
    ink: "text-[#344737]",
    detail: "1080 × 1350",
  },
  "event-signal": {
    kicker: "EVENT INTELLIGENCE / 02",
    title: "Les données racontent la soirée",
    nodes: ["Shotgun + Meta", "PostgreSQL", "Cockpit"],
    palette: "from-[#DDEBE2] via-[#E8EFE4] to-[#D7E6DB]",
    ink: "text-[#234638]",
    detail: "BRONZE / SILVER / GOLD",
  },
  "job-apply-assistant": {
    kicker: "AI WORKFLOW / 03",
    title: "De l'offre à la candidature",
    nodes: ["Offre", "Matching IA", "Documents"],
    palette: "from-[#E5EAE7] via-[#F2E7DB] to-[#E9F0E8]",
    ink: "text-[#33433D]",
    detail: "HUMAN IN THE LOOP",
  },
};

export default function ProjectVisual({ slug }) {
  const scene = scenes[slug];
  if (!scene) return null;
  return (
    <div aria-label={scene.title} className={`relative overflow-hidden min-h-[210px] sm:min-h-[235px] bg-gradient-to-br ${scene.palette} ${scene.ink} p-6 md:p-8 border-b border-black/5`}>
      <div aria-hidden="true" className="absolute -right-12 -top-20 size-64 rounded-full border border-white/70 bg-white/20 blur-[1px]" />
      <div aria-hidden="true" className="absolute right-10 bottom-[-95px] size-56 rounded-full border border-white/80 bg-white/25" />
      <div className="relative z-10 flex justify-between items-start gap-3">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">{scene.kicker}</span>
        <span className="text-[10px] font-mono opacity-60">{scene.detail}</span>
      </div>
      <p className="relative z-10 font-serif text-2xl md:text-[27px] leading-tight max-w-[270px] mt-5 mb-7">{scene.title}</p>
      <div className="relative z-10 flex flex-wrap items-center gap-2">
        {scene.nodes.map((node, index) => (
          <div key={node} className="flex items-center gap-2">
            {index > 0 && <span aria-hidden="true" className="opacity-60 text-sm">→</span>}
            <span className="rounded-lg border border-white/75 bg-white/65 backdrop-blur-sm px-3 py-2 text-[11px] font-semibold shadow-sm">{node}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

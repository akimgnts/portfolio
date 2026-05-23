export function SectionHeader({ eyebrow, heading, className }) {
  return (
    <div className={className}>
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground/45 font-medium mb-3">
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground">
        {heading}
      </h2>
    </div>
  );
}

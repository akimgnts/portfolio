export function Card({ children, className = "", hover = false }) {
  const baseClasses = "rounded-lg border border-border/12 bg-white/25 transition-all";
  const hoverClasses = hover ? "hover:bg-white/40 hover:border-border/30" : "";

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}

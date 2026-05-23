export function Tag({ children, active = false, onClick, className = "" }) {
  if (onClick) {
    // Interactive variant (used in Contact form for project type selection)
    return (
      <button
        type="button"
        onClick={onClick}
        className={`text-xs px-4 py-2 rounded-lg border transition-all duration-300 ${
          active
            ? "bg-foreground text-background border-foreground"
            : "border-border/12 text-muted-foreground bg-white/30 hover:border-border/40 hover:bg-white/50 hover:text-foreground/75"
        } ${className}`}
      >
        {children}
      </button>
    );
  }

  // Display-only variant (used for tech tags in projects, stack tags in BehindSite)
  return (
    <span
      className={`text-xs px-3 py-1.5 rounded-lg border border-border/12 bg-white/20 text-muted-foreground ${className}`}
    >
      {children}
    </span>
  );
}

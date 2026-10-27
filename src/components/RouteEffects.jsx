import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteEffects() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const titles = { "/": "Business · Data · Automation / IA", "/projects": "Projets" };
    document.title = `Akim Guentas — ${titles[pathname] || (pathname.startsWith("/admin") ? "Espace projets" : "Portfolio")}`;
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : document.getElementById("main-content");
      if (hash && target) {
        target.scrollIntoView({ behavior: "instant", block: "start" });
        if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      } else if (!hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
        target?.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);
  return null;
}

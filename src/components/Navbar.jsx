import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { siteContent } from "../data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuRoute, setMenuRoute] = useState(null);
  const location = useLocation();
  const menuOpen = menuRoute === location.key;
  const toggle = useRef(null);
  const nav = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuRoute(null);
        toggle.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!nav.current?.contains(event.target)) setMenuRoute(null);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setMenuRoute(null); };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <nav ref={nav} aria-label="Main navigation" className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${isScrolled || menuOpen ? "border-border bg-background/95 shadow-sm backdrop-blur-xl" : "border-transparent bg-background/80 backdrop-blur-sm"}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="font-medium tracking-tight text-foreground" onClick={() => setMenuRoute(null)}>
          {siteContent.nav.brand}<span className="text-accent" aria-hidden="true">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {siteContent.nav.links.map((link) => (
            <Link key={link.href} to={`/${link.href}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="nav" size="sm" asChild className="hidden md:inline-flex">
            <Link to={`/${siteContent.nav.cta.href}`}>{siteContent.nav.cta.label}</Link>
          </Button>
          <button ref={toggle} type="button" className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-border" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuRoute(menuOpen ? null : location.key)}>
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div id="mobile-navigation" className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-1">
          {siteContent.nav.links.map((link) => (
            <Link key={link.href} to={`/${link.href}`} onClick={() => setMenuRoute(null)} className="rounded-lg px-3 py-3 text-foreground hover:bg-secondary">{link.label}</Link>
          ))}
          <Button asChild className="mt-3 h-12"><Link to={`/${siteContent.nav.cta.href}`} onClick={() => setMenuRoute(null)}>{siteContent.nav.cta.label}</Link></Button>
        </div>
      )}
    </nav>
  );
}

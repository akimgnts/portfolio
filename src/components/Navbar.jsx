import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { siteContent } from "../data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/60 backdrop-blur-md" : ""
      }`}
      style={
        isScrolled
          ? { boxShadow: "0 0.5px 0 0 hsl(36, 15%, 92%)" }
          : {}
      }
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-serif text-foreground font-medium tracking-tight hover:text-muted-foreground transition-colors"
        >
          {siteContent.nav.brand}
        </a>

        {/* Center nav items */}
        <div className="hidden md:flex items-center gap-8">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="nav" size="sm" asChild>
          <a href={siteContent.nav.cta.href}>{siteContent.nav.cta.label}</a>
        </Button>
      </div>
    </nav>
  );
}

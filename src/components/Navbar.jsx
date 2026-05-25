import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/Button";
import { siteContent } from "../data/content";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomepage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    if (isHomepage) {
      window.location.hash = href.slice(1);
    } else {
      navigate(`/${href}`);
    }
  };

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
          href="/"
          className="text-foreground font-medium tracking-tight hover:text-muted-foreground transition-colors"
        >
          {siteContent.nav.brand}
        </a>

        {/* Center nav items */}
        <div className="hidden md:flex items-center gap-8">
          {siteContent.nav.links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant="nav"
          size="sm"
          onClick={() => handleNavClick(siteContent.nav.cta.href)}
        >
          {siteContent.nav.cta.label}
        </Button>
      </div>
    </nav>
  );
}

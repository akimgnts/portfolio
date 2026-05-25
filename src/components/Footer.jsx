import { siteContent } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            © {siteContent.footer.year} {siteContent.footer.name}. All rights reserved.
          </p>
          {siteContent.footer.tagline && (
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              {siteContent.footer.tagline}
            </p>
          )}
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground leading-relaxed">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}

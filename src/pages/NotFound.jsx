import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return <>
    <Navbar />
    <main id="main-content" tabIndex={-1} className="flex-1 px-6 pt-44 pb-24">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-accent mb-6">404 · Connexion introuvable</p>
        <h1 className="font-serif text-4xl md:text-6xl mb-6">Cette page n'existe pas.</h1>
        <p className="max-w-lg text-muted-foreground mb-10">L'adresse a peut-être changé. Tu peux encore parcourir les projets.</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild><Link to="/projects">Voir les projets <ArrowUpRight aria-hidden="true" /></Link></Button>
          <Button asChild variant="outline"><Link to="/"><ArrowLeft aria-hidden="true" /> Retour à l'accueil</Link></Button>
        </div>
      </div>
    </main>
    <Footer />
  </>;
}

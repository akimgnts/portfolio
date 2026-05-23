import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Approach from "../components/Approach";
import BehindSite from "../components/BehindSite";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Approach />
        <BehindSite />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

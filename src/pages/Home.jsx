import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import HumanSignal from "../components/HumanSignal";
import Approach from "../components/Approach";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Hero />
        <Projects />
        <About />
        <HumanSignal />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

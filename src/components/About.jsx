import { motion } from "framer-motion";
import { siteContent } from "../data/content";
import { Card } from "./ui/Card";

function CapabilityCard({ capability, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.07 }}
    >
      <Card hover className="px-6 py-5 group">
        <p className="text-[15px] text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">{capability}</p>
      </Card>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-40 px-6 md:px-8 section-gradient-about">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-6">
              {siteContent.about.heading}
            </h2>
            <div className="space-y-4">
              {siteContent.about.bio.map((paragraph, idx) => (
                <p key={idx} className="text-[15px] text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <div className="space-y-3">
            {siteContent.about.capabilities.map((capability, idx) => (
              <CapabilityCard key={idx} capability={capability} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

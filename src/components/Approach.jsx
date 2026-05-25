import { motion } from "framer-motion";
import { siteContent } from "../data/content";
import { SectionHeader } from "./ui/SectionHeader";

function ApproachRow({ approach, index }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-10 py-12 border-b border-border/8 first:pt-0 last:border-b-0 hover:bg-secondary/10 -mx-2 md:-mx-8 px-2 md:px-8 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <p className="text-xs font-mono text-muted-foreground/50">{approach.number}</p>
      <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground">{approach.title}</h3>
      <p className="text-[15px] text-muted-foreground leading-relaxed">{approach.body}</p>
    </motion.div>
  );
}

export default function Approach() {
  return (
    <section id="approach" className="py-40 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={siteContent.sections.approach.eyebrow}
          heading={siteContent.sections.approach.heading}
          className="mb-12"
        />
        {siteContent.approach.intro && (
          <motion.p
            className="text-[15px] text-muted-foreground leading-relaxed mb-20 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {siteContent.approach.intro}
          </motion.p>
        )}
        <div className="divide-y divide-border">
          {siteContent.approach.items.map((approach, idx) => (
            <ApproachRow key={approach.number} approach={approach} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

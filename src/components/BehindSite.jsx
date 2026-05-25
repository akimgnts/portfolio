import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "../data/content";
import { SectionHeader } from "./ui/SectionHeader";
import { Tag } from "./ui/Tag";
import { Card } from "./ui/Card";

function FlowCard({ step, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card hover className="p-5 group">
        <p className="text-xs font-mono text-muted-foreground/35 mb-2 group-hover:text-muted-foreground/55 transition-colors">{step.step}</p>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/65 transition-colors">{step.note}</p>
      </Card>
    </motion.div>
  );
}

export default function BehindSite() {
  return (
    <section id="behind" className="py-40 px-6 md:px-8 section-gradient-behind">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow={siteContent.sections.behind.eyebrow}
          heading={siteContent.sections.behind.heading}
          className="mb-12"
        />

        {siteContent.behind.intro && (
          <motion.p
            className="text-[15px] text-muted-foreground leading-relaxed mb-20 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {siteContent.behind.intro}
          </motion.p>
        )}

        <div className="mb-20">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium mb-8">
            {siteContent.sections.behind.automationLabel}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {siteContent.behind.automation.map((step, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FlowCard step={step} index={idx} />
                {idx < siteContent.behind.automation.length - 1 && (
                  <ArrowRight className="hidden md:block w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium mb-8">
            {siteContent.sections.behind.stackLabel}
          </p>
          <Card className="flex flex-wrap gap-2 p-7">
            {siteContent.behind.techStack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
}

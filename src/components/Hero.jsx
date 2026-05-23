import { motion } from "framer-motion";
import { ArrowDownRight, MapPin, Dot } from "lucide-react";
import { Button } from "./ui/Button";
import { siteContent } from "../data/content";

function AtmosphericOrb() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsla(25,80%,75%,0.18) 0%, hsla(200,60%,75%,0.10) 50%, transparent 75%)",
        }}
      />

      {/* Core orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, hsla(36,80%,85%,0.85) 0%, hsla(25,70%,72%,0.55) 45%, hsla(200,50%,75%,0.25) 80%, transparent 100%)",
        }}
        animate={{ scale: [1, 1.04, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating cards */}
      {siteContent.hero.orbCards.map((card, idx) => {
        const durations = [5, 6, 7];
        const yAnimations = [[0, -14, 0], [0, 10, 0], [0, -8, 0]];
        return (
          <motion.div
            key={idx}
            className={`bg-white/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-sm absolute ${card.position}`}
            animate={{ y: yAnimations[idx] }}
            transition={{ duration: durations[idx], repeat: Infinity, ease: "easeInOut", delay: idx }}
          >
            <p className="text-sm">{card.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="pt-40 pb-32 px-6 md:px-8 section-gradient-hero">
      {/* Ambient overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 60% 40%, hsla(25,70%,80%,0.08), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center min-h-screen"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text */}
          <motion.div variants={itemVariants}>
            <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] tracking-tight text-foreground mb-6">
              {siteContent.hero.headline}{" "}
              <em className="not-italic text-accent">
                {siteContent.hero.headlineAccent}
              </em>
            </h1>

            <motion.p className="text-lg text-muted-foreground leading-relaxed mb-8" variants={itemVariants}>
              {siteContent.hero.body}
            </motion.p>

            {/* Status pills */}
            <motion.div className="flex flex-col sm:flex-row gap-3 mb-10" variants={itemVariants}>
              {siteContent.hero.status.map((status, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2.5 rounded-lg bg-white/35 backdrop-blur-sm border border-border/15 flex items-center gap-2 text-sm w-fit hover:bg-white/50 hover:border-border/35 transition-all"
                >
                  {status.type === "dot" ? (
                    <Dot className="w-2 h-2" style={{ color: "#16a34a" }} />
                  ) : (
                    <MapPin className="w-4 h-4" />
                  )}
                  {status.label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              {siteContent.hero.ctas.map((cta, idx) => (
                <Button key={idx} variant={cta.variant} size="default" asChild>
                  <a href={cta.href}>
                    {cta.label}
                    {idx === 0 && <ArrowDownRight className="w-4 h-4" />}
                  </a>
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Atmospheric visual */}
          <motion.div
            className="h-96 md:h-full hidden md:flex"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <AtmosphericOrb />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

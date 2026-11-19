import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

/** Fondu court entre les pages : opacité seule, aucun décalage de mise en page. */
export default function PageFade({ children }) {
  const { pathname } = useLocation();
  const reduced = useReducedMotion();
  return <motion.div key={pathname} className="flex flex-col flex-1 min-h-screen"
    initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }}
    transition={{ duration: 0.22, ease: "easeOut" }}>{children}</motion.div>;
}

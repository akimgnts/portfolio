import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

// Transform + opacity only: GPU-friendly, no blur filter repaint on scroll.
const EASE = [0.16, 1, 0.3, 1];

/** One entrance per visit. Focus and reduced motion always reveal immediately. */
export function Reveal({ children, className = '', delay = 0, blur = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1, margin: '0px 0px -40px 0px' });
  const reduced = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const visible = inView || focused || reduced;
  const hidden = { opacity: 0, y: blur ? 10 : 16 };
  const shown = { opacity: 1, y: 0 };
  return <motion.div ref={ref} className={`scroll-reveal ${className}`} data-reveal={visible ? 'visible' : 'waiting'}
    initial={reduced ? false : hidden} animate={visible ? shown : hidden}
    transition={{ duration: reduced || focused ? 0 : 0.5, delay: reduced || focused ? 0 : Math.min(delay, 0.2), ease: EASE }}
    onFocusCapture={() => setFocused(true)}>{children}</motion.div>;
}

import { useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

/** One entrance per visit. Focus and reduced motion always reveal immediately. */
export function Reveal({ children, className = '', delay = 0, blur = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.12, margin: '0px 0px -32px 0px' });
  const reduced = useReducedMotion();
  const [focused, setFocused] = useState(false);
  const visible = inView || focused || reduced;
  const hidden = { opacity: 0, y: blur ? 12 : 22, filter: blur ? 'blur(5px)' : 'blur(0px)' };
  const shown = { opacity: 1, y: 0, filter: 'blur(0px)' };
  return <motion.div ref={ref} className={`scroll-reveal ${className}`} data-reveal={visible ? 'visible' : 'waiting'}
    initial={reduced ? false : hidden} animate={visible ? shown : hidden}
    transition={{ duration: reduced || focused ? 0 : 0.65, delay: reduced || focused ? 0 : Math.min(delay, 0.24), ease: [0.22, 1, 0.36, 1] }}
    onFocusCapture={() => setFocused(true)}>{children}</motion.div>;
}

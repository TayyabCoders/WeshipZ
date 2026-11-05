"use client";

import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Template({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis]);

  if (reduceMotion) return children;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center bg-midnight"
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease, delay: 0.15 }}
      >
        <motion.span
          className="font-display text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          WeShipZ<span className="text-primary">.</span>
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        onAnimationComplete={() => ScrollTrigger.refresh()}
      >
        {children}
      </motion.div>
    </>
  );
}

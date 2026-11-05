"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

type MagneticProps = {
  children: ReactNode;
  className?: string;
};

export function Magnetic({ children, className }: MagneticProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [finePointer, setFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setFinePointer(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (reduceMotion || !finePointer) {
    return <div className={cn("inline-flex", className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        x.set(offsetX * 0.28);
        y.set(offsetY * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

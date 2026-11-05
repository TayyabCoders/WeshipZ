"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { LenisGsap } from "@/components/animations/LenisGsap";

type SmoothScrollProps = {
  children: ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return children;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        autoRaf: true,
      }}
    >
      <LenisGsap />
      {children}
    </ReactLenis>
  );
}

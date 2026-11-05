"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function StudioWord() {
  const wordRef = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const word = wordRef.current;
    if (!word || reduceMotion) return;

    const tween = gsap.fromTo(
      word,
      { xPercent: -12 },
      {
        xPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: word,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [reduceMotion]);

  return (
    <div aria-hidden className="overflow-hidden border-y border-border bg-background py-8">
      <p
        ref={wordRef}
        className="whitespace-nowrap text-center font-display text-[20vw] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_var(--primary)]"
      >
        WeShipZ
      </p>
    </div>
  );
}

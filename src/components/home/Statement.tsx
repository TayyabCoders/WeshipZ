"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { Container } from "@/components/common/Container";

const text =
  "WeShipZ is a creative-tech studio. We make the pictures people stop scrolling for, then build the sites and systems that turn that attention into business.";

const facts = [
  { value: "6", label: "Disciplines under one roof" },
  { value: "1", label: "Team from brief to delivery" },
  { value: "0", label: "Hand-offs between vendors" },
];

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span className="mr-[0.25em] inline-block" style={{ opacity }}>
      {word}
    </motion.span>
  );
}

export function Statement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });
  const words = text.split(" ");

  return (
    <section id="about" className="bg-background py-24 md:py-40">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          ( Who we are )
        </p>
        <p
          ref={ref}
          className="mt-8 max-w-5xl font-display text-3xl font-medium leading-[1.12] tracking-[-0.03em] sm:text-5xl lg:text-6xl"
        >
          {reduceMotion
            ? text
            : words.map((word, i) => (
                <Word
                  key={`${word}-${i}`}
                  word={word}
                  progress={scrollYProgress}
                  range={[i / words.length, (i + 1) / words.length]}
                />
              ))}
        </p>

        <dl className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3 md:mt-24">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="sr-only">{fact.label}</dt>
              <dd className="font-display text-6xl font-semibold tracking-[-0.05em] text-primary md:text-8xl">
                {fact.value}
              </dd>
              <dd className="mt-2 text-sm text-secondary">{fact.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

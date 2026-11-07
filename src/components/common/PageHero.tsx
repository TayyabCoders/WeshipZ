"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/common/Container";

const ease = [0.22, 1, 0.36, 1] as const;

type PageHeroProps = {
  label: string;
  /** Each entry renders on its own line. */
  lines: ReactNode[];
  intro?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({ label, lines, intro, aside }: PageHeroProps) {
  return (
    <section className="bg-background pb-16 pt-12 md:pb-24 md:pt-20">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          {label}
        </p>
        <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
          {lines.map((line, index) => (
            <span key={index} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.9, ease, delay: 0.5 + index * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        {intro || aside ? (
          <motion.div
            className="mt-12 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
          >
            {intro ? (
              <div className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
                {intro}
              </div>
            ) : (
              <span />
            )}
            {aside}
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}

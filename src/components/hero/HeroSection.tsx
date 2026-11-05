"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Magnetic } from "@/components/animations/Magnetic";
import { showreel } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const rotating = ["motion", "ads", "edits", "websites", "automation"];
const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const reelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => setIndex((value) => (value + 1) % rotating.length),
      2200,
    );
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel || reduceMotion) return;

    const media = gsap.matchMedia();
    media.add(
      { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
      (context) => {
        const inset = context.conditions?.desktop ? 14 : 4;
        gsap.fromTo(
          reel,
          { clipPath: `inset(0% ${inset}% 0% ${inset}% round 28px)` },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: {
              trigger: reel,
              start: "top 92%",
              end: "top 8%",
              scrub: true,
            },
          },
        );
      },
    );
    return () => media.revert();
  }, [reduceMotion]);

  return (
    <section className="relative overflow-hidden bg-background pt-10 md:pt-16">
      <Container>
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-secondary">
          <span>Creative-tech studio</span>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Booking new projects
          </span>
        </div>

        <h1 className="mt-10 font-display text-[clamp(3.25rem,11vw,10rem)] font-semibold leading-[0.88] tracking-[-0.055em] md:mt-14">
          <span className="sr-only">
            We ship motion, ads, edits, websites and automation that gets noticed.
          </span>
          <span aria-hidden>
            <Line delay={0.5}>We ship</Line>
            <span className="block h-[0.98em] overflow-hidden">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={rotating[index]}
                  className="block text-primary"
                  initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                  transition={{ duration: 0.55, ease }}
                >
                  {rotating[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            <Line delay={0.62}>
              <span className="text-muted">that gets noticed.</span>
            </Line>
          </span>
        </h1>

        <motion.div
          className="mt-10 grid gap-8 border-t border-border pt-8 md:mt-14 md:grid-cols-[1fr_auto] md:items-end"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.95 }}
        >
          <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            Motion graphics, creative ads, post-production, websites and AI
            automation. One team takes it from the first idea to the final
            export, with no hand-offs and no agency maze.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Magnetic>
              <Button href="/work" size="lg">
                See our work
              </Button>
            </Magnetic>
            <Button href="/contact" variant="ghost" size="lg">
              Start a project
            </Button>
          </div>
        </motion.div>
      </Container>

      <div className="mt-14 md:mt-20">
        <div
          ref={reelRef}
          className="relative aspect-[4/5] w-full overflow-hidden bg-midnight sm:aspect-video md:max-h-[88vh]"
          style={reduceMotion ? { clipPath: "inset(0 4% 0 4% round 28px)" } : undefined}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={showreel.video}
            poster={showreel.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="WeShipZ showreel"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white md:p-12">
            <p className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
              Showreel
              <span className="ml-3 align-middle text-sm font-medium text-white/60 md:text-base">
                ’26
              </span>
            </p>
            <a
              href="#about"
              className="inline-flex size-14 items-center justify-center rounded-full bg-white text-midnight transition-transform hover:scale-110 md:size-20"
              aria-label="Scroll to the next section"
            >
              <ArrowDownRight className="size-6 md:size-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

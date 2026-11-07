"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Magnetic } from "@/components/animations/Magnetic";
import { ShowreelLightbox } from "@/components/hero/ShowreelLightbox";
import { packages } from "@/data/packages";
import { showreel } from "@/data/site";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

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

function Fade({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [reelOpen, setReelOpen] = useState(false);
  const reelRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const pack = packages[active];
  const next = packages[(active + 1) % packages.length];

  useEffect(() => {
    if (reduceMotion || pinned) return;
    const id = window.setInterval(() => setActive((value) => (value + 1) % packages.length), 4500);
    return () => window.clearInterval(id);
  }, [reduceMotion, pinned]);

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
            scrollTrigger: { trigger: reel, start: "top 92%", end: "top 8%", scrub: true },
          },
        );
      },
    );
    return () => media.revert();
  }, [reduceMotion]);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview) return;
    if (reelOpen) preview.pause();
    else void preview.play().catch(() => undefined);
  }, [reelOpen]);

  return (
    <section className="relative overflow-hidden bg-background pt-10 md:pt-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h1 className="font-display text-[clamp(3rem,6vw,6.25rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              <span className="sr-only">
                We make video people stop for: motion graphics, video editing and creative ads.
              </span>
              <span aria-hidden>
                <Line delay={0.5}>We make</Line>
                <Line delay={0.6}>
                  <motion.span
                    className="relative mr-[0.18em] inline-block h-[0.78em] overflow-hidden rounded-full bg-midnight align-[-0.04em]"
                    initial={{ width: reduceMotion ? "1.7em" : 0 }}
                    animate={{ width: "1.7em" }}
                    transition={{ duration: 0.9, ease, delay: 1.1 }}
                  >
                    <AnimatePresence initial={false}>
                      <motion.video
                        key={pack.id}
                        className="absolute inset-0 h-full w-full object-cover"
                        src={pack.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatePresence>
                  </motion.span>
                  video
                </Line>
                <Line delay={0.7}>
                  <span className="text-muted">people stop for</span>
                  <span className="text-primary">.</span>
                </Line>
              </span>
            </h1>

            <Fade delay={0.95}>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
                Motion graphics, video editing and creative ads, packaged for how
                you grow. One team from the first idea to the final export.
              </p>
            </Fade>

            <Fade delay={1.05} className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">Built for</p>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Choose who it's for">
                {packages.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={index === active}
                    onClick={() => {
                      setActive(index);
                      setPinned(true);
                    }}
                    className={cn(
                      "relative min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      index === active
                        ? "border-foreground text-background"
                        : "border-border text-secondary hover:border-foreground/40 hover:text-foreground",
                    )}
                  >
                    {index === active ? (
                      <motion.span
                        layoutId="hero-audience"
                        className="absolute inset-0 rounded-full bg-foreground"
                        transition={{ duration: 0.4, ease }}
                      />
                    ) : null}
                    <span className="relative">{item.audience}</span>
                  </button>
                ))}
                <Link
                  href="/packages#builder"
                  className="inline-flex min-h-11 items-center rounded-full border border-dashed border-primary/50 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  + Custom
                </Link>
              </div>
            </Fade>

            <Fade delay={1.15} className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Button href="/packages" size="lg">
                  Explore packages
                </Button>
              </Magnetic>
              <Button href="/work" variant="ghost" size="lg">
                See our work
              </Button>
            </Fade>
          </div>

          <Fade delay={0.8} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-midnight shadow-[0_50px_100px_-40px_rgba(16,17,22,0.55)] lg:aspect-auto lg:h-[min(76vh,700px)]">
              <AnimatePresence initial={false}>
                <motion.video
                  key={pack.id}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={pack.video}
                  poster={pack.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`Example work for ${pack.audience}`}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

              <div className="absolute inset-x-0 top-0 flex justify-end p-5">
                {reduceMotion || pinned ? null : (
                  <span className="h-[3px] w-20 overflow-hidden rounded-full bg-white/25">
                    <motion.span
                      key={pack.id}
                      className="block h-full origin-left rounded-full bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 4.5, ease: "linear" }}
                    />
                  </span>
                )}
              </div>

              <div className="absolute inset-x-3 bottom-3 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-[320px]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={pack.id}
                    className="rounded-[22px] bg-background/95 p-5 text-foreground shadow-xl backdrop-blur-xl"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] font-medium uppercase tracking-[0.14em]">
                      <span className="text-primary">For {pack.audience}</span>
                      <span className="text-muted">{pack.turnaround}</span>
                    </div>
                    <p className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em]">{pack.name}</p>
                    <ul className="mt-3 space-y-1.5">
                      {pack.includes.slice(0, 3).map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-secondary">
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <p className="text-sm">
                        <span className="text-muted">From </span>
                        <span className="font-display text-xl font-semibold">{pack.price}</span>
                        <span className="text-muted"> {pack.cadence}</span>
                      </p>
                      <Link
                        href={`/packages#${pack.id}`}
                        className="inline-flex size-10 items-center justify-center rounded-full bg-foreground text-background transition-[background-color,transform] hover:rotate-45 hover:bg-primary"
                        aria-label={`View the ${pack.name} package`}
                      >
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.button
              type="button"
              onClick={() => {
                setActive((active + 1) % packages.length);
                setPinned(true);
              }}
              className="absolute -right-3 top-16 hidden aspect-[9/16] w-28 overflow-hidden rounded-2xl border-4 border-background bg-midnight shadow-2xl sm:block lg:-right-6 lg:w-32"
              initial={{ rotate: 0 }}
              animate={{ rotate: 6 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease }}
              aria-label={`Show the ${next.audience} package`}
            >
              <AnimatePresence initial={false}>
                <motion.video
                  key={next.id}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={next.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </AnimatePresence>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 pt-6 text-left text-[10px] font-medium leading-tight text-white">
                Up next
                <span className="block text-white/60">{next.audience}</span>
              </span>
            </motion.button>
          </Fade>
        </div>

      </Container>

      <div className="mt-14 md:mt-20">
        <div
          ref={reelRef}
          className="relative aspect-[4/5] w-full overflow-hidden bg-midnight sm:aspect-video md:max-h-[88vh]"
          style={reduceMotion ? { clipPath: "inset(0 4% 0 4% round 28px)" } : undefined}
        >
          <video
            ref={previewRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={showreel.video}
            poster={showreel.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
          <button
            type="button"
            onClick={() => setReelOpen(true)}
            className="absolute inset-0 flex items-end justify-between gap-4 p-6 text-left text-white md:p-12"
            aria-label="Play showreel with sound"
          >
            <p className="font-display text-2xl font-semibold tracking-tight md:text-4xl">
              Showreel
              <span className="ml-3 align-middle text-sm font-medium text-white/60 md:text-base">’26</span>
            </p>
            <span className="inline-flex size-14 items-center justify-center rounded-full bg-white text-midnight transition-transform hover:scale-110 md:size-20">
              <Play className="size-6 fill-current md:size-8" />
            </span>
          </button>
        </div>
      </div>
      <ShowreelLightbox open={reelOpen} onClose={() => setReelOpen(false)} />
    </section>
  );
}

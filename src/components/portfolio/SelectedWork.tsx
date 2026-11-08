"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const featured = projects.filter((project) => project.featured);

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track || reduceMotion) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 768px)", () => {
      const distance = () => track.scrollWidth - window.innerWidth;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.8,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      timeline
        .to(track, { x: () => -distance(), ease: "none" }, 0)
        .fromTo(barRef.current, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0);
    });
    return () => media.revert();
  }, [reduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-midnight py-20 text-white md:flex md:h-screen md:flex-col md:justify-center md:py-0"
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-end justify-between gap-6 px-5 md:px-8 xl:px-12">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Selected work
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Work that moves
            <sup className="ml-2 align-super text-lg font-medium text-white/40 md:text-2xl">
              ({String(projects.length).padStart(2, "0")})
            </sup>
          </h2>
        </div>
        <Link
          href="/work"
          className="hidden shrink-0 items-center gap-2 border-b border-white/30 pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:inline-flex"
        >
          All projects <ArrowUpRight className="size-4" />
        </Link>
      </div>

      <div
        className={
          reduceMotion
            ? "mt-12 overflow-x-auto"
            : "mt-12 overflow-x-auto md:mt-14 md:overflow-visible"
        }
      >
        <div
          ref={trackRef}
          className="flex w-max items-start gap-6 px-5 pb-2 md:gap-10 md:px-[max(2rem,calc((100vw-1280px)/2+3rem))] md:will-change-transform"
        >
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              tone="dark"
              className={cn(
                "w-[82vw] shrink-0",
                // vertical width = 0.45 × landscape width, so both media boxes share one height
                project.orientation === "vertical"
                  ? "max-w-[340px] md:w-[min(27.9vw,387px,calc((100vh-360px)*0.8))] md:max-w-none"
                  : "md:w-[min(62vw,860px,calc((100vh-360px)*1.78))]",
              )}
            />
          ))}
          <Link
            href="/work"
            className="group flex min-h-64 w-[60vw] shrink-0 self-stretch flex-col items-center justify-center gap-5 rounded-[24px] border border-white/15 transition-colors hover:border-primary hover:bg-primary md:w-[360px]"
          >
            <span className="inline-flex size-20 items-center justify-center rounded-full bg-white text-midnight transition-transform group-hover:scale-110">
              <ArrowUpRight className="size-8" />
            </span>
            <span className="font-display text-2xl font-semibold tracking-[-0.03em]">
              See all work
            </span>
          </Link>
        </div>
      </div>

      {reduceMotion ? null : (
        <div className="mx-auto mt-10 hidden w-full max-w-[1280px] px-5 md:block md:px-8 xl:px-12">
          <div className="h-px w-full bg-white/15">
            <div ref={barRef} className="h-px origin-left scale-x-0 bg-primary" />
          </div>
        </div>
      )}
    </section>
  );
}

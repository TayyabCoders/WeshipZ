"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const items = services.map((service) => ({
  service,
  media: projects.find((project) => project.serviceSlug === service.slug),
}));

export function ServiceList({ bare = false }: { bare?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 });
  const current = active === null ? null : items[active].media;

  return (
    <section
      ref={sectionRef}
      className={cn("relative bg-soft md:py-36", bare ? "py-16" : "py-24")}
      onMouseMove={(event) => {
        const rect = sectionRef.current?.getBoundingClientRect();
        if (!rect) return;
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
    >
      <Container>
        <div className={cn("flex flex-col justify-between gap-6 md:flex-row md:items-end", bare && "hidden")}>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              What we do
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Three crafts. One studio.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-secondary">
            Motion, edits and ads, made by one team. Pick one, or bring a brief
            that needs all three.
          </p>
        </div>

        <ul
          className={cn("group/list border-t border-foreground/15", !bare && "mt-16 md:mt-20")}
          onMouseLeave={() => setActive(null)}
        >
          {items.map(({ service }, index) => (
            <li key={service.slug} className="border-b border-foreground/15">
              <Link
                href={`/services/${service.slug}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-7 transition-opacity duration-300 md:gap-10 md:py-10 md:group-hover/list:opacity-35 md:hover:!opacity-100"
              >
                <span className="w-8 text-sm font-medium text-muted md:w-14">
                  0{index + 1}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-3xl font-semibold tracking-[-0.04em] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3 sm:text-5xl lg:text-6xl">
                    {service.shortTitle}
                  </span>
                  <span className="mt-3 hidden flex-wrap gap-2 md:flex">
                    {service.offerings.slice(0, 3).map((offering) => (
                      <span
                        key={offering}
                        className="rounded-full border border-foreground/15 px-3 py-1 text-xs text-secondary"
                      >
                        {offering}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="inline-flex size-11 items-center justify-center rounded-full border border-foreground/15 transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white md:size-16">
                  <ArrowUpRight className="size-5 md:size-6" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-10 hidden aspect-[4/5] w-[300px] overflow-hidden rounded-[22px] shadow-2xl shadow-midnight/25 pointer-fine:md:block"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: current ? 1 : 0, opacity: current ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {items.map(({ service, media }, index) =>
          media ? (
            <Image
              key={service.slug}
              src={media.poster}
              alt=""
              fill
              sizes="300px"
              className="object-cover transition-opacity duration-300"
              style={{ opacity: active === index ? 1 : 0 }}
            />
          ) : null,
        )}
        {current?.video ? (
          <video
            key={current.slug}
            className="absolute inset-0 h-full w-full object-cover"
            src={current.video}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : null}
      </motion.div>
    </section>
  );
}

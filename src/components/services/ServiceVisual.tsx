"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BeforeAfter } from "@/components/craft/BeforeAfter";
import { projects } from "@/data/projects";
import type { ServiceSlug } from "@/data/services";
import { craftClip } from "@/data/showcase";

const ease = [0.22, 1, 0.36, 1] as const;
const kinetic = ["Timing", "Weight", "Ease", "Snap"];

function KineticType({ src, poster, title }: { src?: string; poster?: string; title: string }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setIndex((value) => (value + 1) % kinetic.length), 1800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-midnight">
      {src ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : null}
      <div className="absolute inset-0 bg-black/35" />
      <p className="absolute left-6 top-6 text-xs uppercase tracking-[0.16em] text-white/60">Motion language</p>
      <div className="absolute inset-x-6 bottom-8 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={kinetic[index]}
            className="font-display text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl"
            initial={{ y: "80%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-80%", opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            {kinetic[index]}
            <span className="text-primary">.</span>
          </motion.p>
        </AnimatePresence>
        <p className="mt-3 text-sm text-white/60">{title}</p>
      </div>
    </div>
  );
}

export function ServiceVisual({ slug }: { slug: ServiceSlug }) {
  const project = projects.find((item) => item.serviceSlug === slug);

  switch (slug) {
    case "motion-graphics":
      return (
        <KineticType
          src={craftClip.video}
          poster={craftClip.poster}
          title="Quippy: Concept launch"
        />
      );
    case "video-editing":
      return <BeforeAfter video={project?.preview} poster={project?.poster} />;
    default: {
      const _never: never = slug;
      return _never;
    }
  }
}

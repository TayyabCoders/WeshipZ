"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BeforeAfter } from "@/components/craft/BeforeAfter";
import { projects } from "@/data/projects";
import type { ServiceSlug } from "@/data/services";
import { reels } from "@/data/showcase";
import { cn } from "@/lib/utils";

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

function HookCuts() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex aspect-[4/5] flex-col gap-2">
      {reels.map((reel, index) => (
        <HookClip
          key={reel.title}
          src={reel.video}
          poster={reel.poster}
          title={reel.title}
          index={index}
          active={index === active}
          onSelect={() => setActive(index)}
        />
      ))}
    </div>
  );
}

function HookClip({
  src,
  poster,
  title,
  index,
  active,
  onSelect,
}: {
  src: string;
  poster: string;
  title: string;
  index: number;
  active: boolean;
  onSelect: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) void video.play().catch(() => undefined);
    else video.pause();
  }, [active]);

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onSelect}
      className={cn(
        "relative min-h-0 overflow-hidden rounded-[22px] text-left transition-[flex,filter] duration-500",
        active ? "flex-[1.8] brightness-100" : "flex-1 brightness-50",
      )}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <span className="absolute left-4 top-3 font-mono text-[11px] text-white/70">Hook 0{index + 1}</span>
      <span className="absolute bottom-3 left-4 right-4 line-clamp-2 font-display text-sm font-semibold text-white sm:text-base">
        {title}
      </span>
    </button>
  );
}

export function ServiceVisual({ slug }: { slug: ServiceSlug }) {
  const project = projects.find((item) => item.serviceSlug === slug);

  switch (slug) {
    case "motion-graphics":
      return (
        <KineticType src={project?.preview} poster={project?.poster} title={project ? `${project.brand}: ${project.title}` : ""} />
      );
    case "video-editing":
      return <BeforeAfter video={project?.preview} poster={project?.poster} />;
    case "creative-ads":
      return <HookCuts />;
    default: {
      const _never: never = slug;
      return _never;
    }
  }
}

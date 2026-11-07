"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { ChevronsLeftRight } from "lucide-react";
import { craftClip } from "@/data/showcase";
import { cn } from "@/lib/utils";

type BeforeAfterProps = {
  className?: string;
  video?: string;
  poster?: string;
};

export function BeforeAfter({ className, video = craftClip.video, poster = craftClip.poster }: BeforeAfterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rawRef = useRef<HTMLVideoElement>(null);
  const finalRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  const [pos, setPos] = useState(50);
  const touched = useRef(false);

  useEffect(() => {
    const videos = [rawRef.current, finalRef.current];
    for (const clip of videos) {
      if (!clip) continue;
      if (inView) void clip.play().catch(() => undefined);
      else clip.pause();
    }
  }, [inView]);

  useEffect(() => {
    const raw = rawRef.current;
    const finished = finalRef.current;
    if (!raw || !finished) return;
    const sync = () => {
      if (Math.abs(finished.currentTime - raw.currentTime) > 0.12) {
        finished.currentTime = raw.currentTime;
      }
    };
    raw.addEventListener("timeupdate", sync);
    return () => raw.removeEventListener("timeupdate", sync);
  }, []);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(50, [50, 24, 76, 50], {
      duration: 2.6,
      ease: "easeInOut",
      onUpdate: (value) => {
        if (!touched.current) setPos(value);
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  // ponytail: same clip, grade stripped with CSS; swap for a real raw/final pair when you have one
  const media = { src: video, poster, muted: true, loop: true, playsInline: true, preload: "metadata" as const };

  return (
    <div ref={ref} className={cn("relative aspect-[4/5] select-none overflow-hidden rounded-[28px] bg-midnight", className)}>
      <video
        ref={rawRef}
        className="absolute inset-0 h-full w-full object-cover [filter:saturate(0.08)_contrast(0.82)_brightness(0.9)]"
        {...media}
        aria-hidden
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <video
          ref={finalRef}
          className="absolute inset-0 h-full w-full object-cover [filter:saturate(1.15)_contrast(1.06)]"
          {...media}
          aria-hidden
        />
        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-medium text-midnight">
          Final
        </span>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
        Raw
      </span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white" style={{ left: `${pos}%` }}>
        <span className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-midnight shadow-lg">
          <ChevronsLeftRight className="size-5" />
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(event) => {
          touched.current = true;
          setPos(Number(event.target.value));
        }}
        aria-label="Drag to compare raw footage with the final edit"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

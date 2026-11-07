"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { reels, type Reel } from "@/data/showcase";
import { cn } from "@/lib/utils";

const tools = ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Final Cut Pro"];
const formats = ["9:16", "1:1", "16:9", "4K"];

function ReelCard({
  reel,
  index,
  progress,
  offset,
  playing,
  hovered,
  onHover,
}: {
  reel: Reel;
  index: number;
  progress: MotionValue<number>;
  offset: number;
  playing: boolean;
  hovered: number | null;
  onHover: (index: number | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const side = index - 1;
  const x = useTransform(progress, [0, 1], [side * 24, side * offset]);
  const rotate = useTransform(progress, [0, 1], [side * 2, side * 9]);
  const y = useTransform(progress, [0, 1], [side === 0 ? 0 : 30, side === 0 ? -10 : 24]);
  const active = hovered === index;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) void video.play().catch(() => undefined);
    else video.pause();
  }, [playing]);

  return (
    <motion.div
      className="absolute inset-x-0 top-0 mx-auto aspect-[9/16] w-[180px] sm:w-[230px] lg:w-[260px]"
      style={{ x, y, rotate, zIndex: active ? 30 : side === 0 ? 20 : 10 }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
    >
      <motion.div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[22px] border border-white/10 bg-surface-dark shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] transition-[filter] duration-300",
          hovered !== null && !active && "brightness-50",
        )}
        animate={{ scale: active ? 1.06 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={reel.video}
          poster={reel.poster}
          muted
          loop
          playsInline
          preload="metadata"
          onTimeUpdate={(event) => {
            const { currentTime, duration } = event.currentTarget;
            if (barRef.current && duration) {
              barRef.current.style.transform = `scaleX(${currentTime / duration})`;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
        <div className="absolute inset-x-0 top-0 flex justify-end p-3 text-[11px] font-medium text-white">
          <span className="rounded-full bg-black/40 px-2 py-1 tabular-nums backdrop-blur-md">
            {reel.duration}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="font-display text-base font-semibold tracking-[-0.02em] sm:text-lg">
            {reel.title}
          </p>
          <p className="mt-0.5 text-[11px] text-white/60 sm:text-xs">{reel.tag}</p>
          <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-white/20">
            <div ref={barRef} className="h-full origin-left scale-x-0 rounded-full bg-white" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ReelStack() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);
  const [offset, setOffset] = useState(210);
  const playing = useInView(ref, { amount: 0.3 });
  const still = useMotionValue(1);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center 60%"] });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setOffset(media.matches ? 210 : window.innerWidth < 640 ? 115 : 170);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div ref={ref} className="relative h-[400px] sm:h-[500px] lg:h-[560px]">
      <div
        aria-hidden
        className="absolute inset-x-[10%] bottom-0 h-24 rounded-[100%] border-t border-white/10 bg-[radial-gradient(ellipse_at_top,rgba(41,107,229,0.25),transparent_70%)]"
      />
      {reels.map((reel, index) => (
        <ReelCard
          key={reel.title}
          reel={reel}
          index={index}
          progress={reduceMotion ? still : scrollYProgress}
          offset={offset}
          playing={playing}
          hovered={hovered}
          onHover={setHovered}
        />
      ))}
    </div>
  );
}

export function Showcase() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24 text-white md:py-36">

      <Container className="relative grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Short-form & post
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl">
            Edits that stop
            <br />
            the thumb.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
            Reels, podcast clips, ads and long-form edits. Cut for retention,
            captioned, color-graded and sound-designed, then exported for every
            platform.
          </p>

          <div className="mt-10 space-y-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">Toolkit</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <li key={tool} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-white/40">Delivered in</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {formats.map((format) => (
                  <li key={format}>
                    <a
                      href="#formats"
                      className="block rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-xs tabular-nums text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                    >
                      {format}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/services/video-editing"
            className="mt-10 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Video editing & post <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <ReelStack />
      </Container>
    </section>
  );
}

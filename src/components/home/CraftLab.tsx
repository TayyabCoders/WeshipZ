"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/common/Container";
import { craftClip } from "@/data/showcase";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/** Width of each frame as a share of a 16:9 stage, so every ratio is exact. */
const formats = [
  { id: "9:16", use: "Reels · TikTok · Shorts", size: "1080 × 1920", width: 31.64 },
  { id: "4:5", use: "Feed ads", size: "1080 × 1350", width: 45 },
  { id: "1:1", use: "Square posts", size: "1080 × 1080", width: 56.25 },
  { id: "16:9", use: "YouTube · Web", size: "1920 × 1080", width: 100 },
];

function FormatSwitcher() {
  const [active, setActive] = useState(0);
  const format = formats[active];

  return (
    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
      <div>
        <h2 className="font-display text-3xl font-semibold leading-[1] tracking-[-0.04em] md:text-5xl lg:text-6xl">
          One edit.
          <br />
          <span className="text-muted">Every format.</span>
        </h2>
        <p className="mt-5 max-w-sm text-base leading-relaxed text-secondary">
          We reframe every shot by hand for each platform, so nothing important gets cropped out.
        </p>
        <div className="mt-8 border-t border-border" role="group" aria-label="Choose a format">
          {formats.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              className="group flex min-h-12 w-full items-center justify-between gap-3 border-b border-border py-4 text-left"
            >
              <span className="flex min-w-0 items-baseline gap-3 sm:gap-4">
                <span
                  className={cn(
                    "w-14 font-display text-2xl font-semibold tabular-nums tracking-[-0.03em] transition-colors",
                    index === active ? "text-primary" : "text-foreground/40 group-hover:text-foreground",
                  )}
                >
                  {item.id}
                </span>
                <span className="min-w-0 text-sm text-secondary">{item.use}</span>
              </span>
              <span
                className={cn(
                  "size-2 rounded-full bg-primary transition-opacity",
                  index === active ? "opacity-100" : "opacity-0",
                )}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="relative aspect-video rounded-[28px] border border-border bg-soft bg-[radial-gradient(circle,rgba(16,17,22,0.08)_1px,transparent_1px)] [background-size:20px_20px]">
        <motion.div
          className="absolute inset-y-[6%] left-1/2 overflow-hidden rounded-2xl bg-midnight shadow-[0_30px_60px_-30px_rgba(16,17,22,0.6)]"
          initial={false}
          animate={{ width: `${format.width * 0.88}%`, x: "-50%" }}
          transition={{ duration: 0.7, ease }}
        >
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={craftClip.video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur-md sm:text-xs">
            {format.size}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export function CraftLab() {
  return (
    <section id="formats" className="scroll-mt-28 bg-background py-24 md:py-36">
      <Container>
        <FormatSwitcher />
      </Container>
    </section>
  );
}

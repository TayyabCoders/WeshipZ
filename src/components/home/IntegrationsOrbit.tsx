"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const tools = [
  "Slack",
  "Sheets",
  "ChatGPT",
  "Make",
  "Notion",
  "Gmail",
  "WhatsApp",
  "Calendar",
  "Drive",
  "Vapi",
];

type IntegrationsOrbitProps = {
  className?: string;
};

export function IntegrationsOrbit({ className }: IntegrationsOrbitProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-xl overflow-hidden rounded-[24px] bg-midnight",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[68%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-dashed border-white/15"
      />
      <motion.div
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 42, repeat: Infinity, ease: "linear" }
        }
      >
        {tools.map((tool, index) => {
          const angle = (index / tools.length) * Math.PI * 2;
          const x = 50 + Math.cos(angle) * 34;
          const y = 50 + Math.sin(angle) * 26;
          return (
            <div
              key={tool}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <motion.div
                className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-background px-2 text-center text-[10px] font-semibold text-foreground shadow-lg shadow-black/30 sm:size-16 sm:text-xs"
                animate={reduceMotion ? undefined : { rotate: -360 }}
                transition={
                  reduceMotion
                    ? undefined
                    : { duration: 42, repeat: Infinity, ease: "linear" }
                }
              >
                {tool}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,107,229,0.18),transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-center">
        <p className="text-sm text-muted">Connected tools. Cleaner ops.</p>
      </div>
    </div>
  );
}

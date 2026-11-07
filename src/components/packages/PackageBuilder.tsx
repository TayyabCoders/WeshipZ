"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { Container } from "@/components/common/Container";
import { builderItems, rushMultiplier } from "@/data/packages";
import { cn } from "@/lib/utils";

const roundTo = (value: number, step: number) => Math.round(value / step) * step;
const usd = (value: number) => `$${value.toLocaleString("en-US")}`;

export function PackageBuilder() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [rush, setRush] = useState(false);

  const picked = builderItems.filter((item) => (counts[item.id] ?? 0) > 0);
  const total = picked.reduce((sum, item) => sum + item.price * counts[item.id], 0) * (rush ? rushMultiplier : 1);
  // ponytail: flat ±range around unit prices; swap for real tiered pricing once quotes are standardised
  const low = roundTo(total * 0.9, 50);
  const high = roundTo(total * 1.15, 50);

  const brief = [
    "Custom package:",
    ...picked.map((item) => `- ${counts[item.id]} × ${item.name}`),
    rush ? "- Rush delivery" : null,
    `Estimate shown: ${usd(low)} – ${usd(high)}`,
  ]
    .filter(Boolean)
    .join("\n");

  const change = (id: string, delta: number, max: number) =>
    setCounts((value) => ({ ...value, [id]: Math.min(max, Math.max(0, (value[id] ?? 0) + delta)) }));

  return (
    <section id="builder" className="scroll-mt-24 bg-soft py-24 md:py-36">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Custom</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Build your own package.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-secondary">
            Add what you need and see a ballpark instantly. Send it over and we&apos;ll reply with an exact quote.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <ul className="border-t border-foreground/15">
            {builderItems.map((item) => {
              const count = counts[item.id] ?? 0;
              return (
                <li key={item.id} className="flex items-center justify-between gap-3 border-b border-foreground/15 py-5">
                  <div className="min-w-0">
                    <p className={cn("font-display text-lg font-semibold tracking-[-0.02em] transition-colors sm:text-xl md:text-2xl", count > 0 && "text-primary")}>
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {usd(item.price)} {item.unit}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-background p-1">
                    <button
                      type="button"
                      onClick={() => change(item.id, -1, item.max)}
                      disabled={count === 0}
                      aria-label={`Remove one ${item.name}`}
                      className="flex size-9 items-center justify-center rounded-full transition-colors hover:bg-soft disabled:opacity-30"
                    >
                      <Minus className="size-4" />
                    </button>
                    <output aria-live="polite" aria-label={`${item.name} quantity`} className="w-8 text-center font-medium tabular-nums">
                      {count}
                    </output>
                    <button
                      type="button"
                      onClick={() => change(item.id, 1, item.max)}
                      disabled={count === item.max}
                      aria-label={`Add one ${item.name}`}
                      className="flex size-9 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-primary disabled:opacity-30"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="rounded-[28px] bg-midnight p-7 text-white md:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">Your estimate</p>
            <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] tabular-nums md:text-5xl" aria-live="polite">
              {total > 0 ? `${usd(low)} – ${usd(high)}` : "$0"}
            </p>
            <ul className="mt-6 min-h-12 space-y-2 border-t border-white/10 pt-6 text-sm text-white/70">
              {picked.length > 0 ? (
                picked.map((item) => (
                  <li key={item.id} className="flex justify-between gap-4">
                    <span>{item.name}</span>
                    <span className="tabular-nums">× {counts[item.id]}</span>
                  </li>
                ))
              ) : (
                <li>Add items on the left to see a price range.</li>
              )}
            </ul>
            <label className="mt-6 flex cursor-pointer items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm">
              <span>
                Rush delivery
                <span className="block text-xs text-white/50">About half the usual turnaround</span>
              </span>
              <input type="checkbox" checked={rush} onChange={(event) => setRush(event.target.checked)} className="peer sr-only" />
              <span className="relative h-6 w-11 shrink-0 rounded-full bg-white/20 transition-colors after:absolute after:left-0.5 after:top-0.5 after:size-5 after:rounded-full after:bg-white after:transition-transform peer-checked:bg-primary peer-checked:after:translate-x-5 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary" />
            </label>
            {total > 0 ? (
              <Link
                href={`/contact?package=custom&brief=${encodeURIComponent(brief)}`}
                className="group mt-8 flex h-12 items-center justify-between rounded-full bg-primary pl-6 pr-1.5 text-sm font-medium transition-colors hover:bg-white hover:text-midnight"
              >
                Send this as a brief
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-white text-midnight transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            ) : (
              <span className="mt-8 flex h-12 items-center rounded-full bg-white/10 px-6 text-sm text-white/40">
                Send this as a brief
              </span>
            )}
            <p className="mt-4 text-xs leading-relaxed text-white/40">
              A ballpark, not a quote. Final price is confirmed after a short call.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

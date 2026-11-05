import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-background pb-24 pt-12 md:pb-36 md:pt-20">
      <Container>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">( Error 404 )</p>
        <h1 className="mt-8 font-display text-[clamp(3rem,9vw,8.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
          This page
          <br />
          <span className="text-muted">
            didn&apos;t ship<span className="text-primary">.</span>
          </span>
        </h1>
        <div className="mt-12 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base leading-relaxed text-secondary sm:text-lg">
            The link may be old or mistyped. The work, though, is right where we left it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors hover:bg-primary"
            >
              See the work <ArrowUpRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
            >
              Back home
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

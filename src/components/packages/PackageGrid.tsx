import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/animations/Reveal";
import { contactHref, packages } from "@/data/packages";
import { getService } from "@/data/services";
import { cn } from "@/lib/utils";

export function PackageGrid({ bare = false }: { bare?: boolean }) {
  return (
    <section className={cn("bg-background md:py-36", bare ? "pb-24 pt-4" : "py-24")}>
      <Container>
        {bare ? null : (
          <div className="mb-16 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Packages</p>
              <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Built for where
                <br />
                you are now.
              </h2>
            </div>
            <div className="max-w-sm">
              <p className="text-base leading-relaxed text-secondary">
                Ready-made packages for creators, SaaS, startups and more. Clear
                scope, clear price, no guesswork. Or build your own.
              </p>
              <Link
                href="/packages"
                className="mt-6 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                Compare packages <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        )}

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pack, index) => (
            <li key={pack.id} id={pack.id} className="scroll-mt-28">
              <Reveal delay={(index % 3) * 0.06} className="h-full">
                <article className="group flex h-full flex-col rounded-[28px] border border-border bg-soft p-7 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_60px_-30px_rgba(41,107,229,0.35)] md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                      For {pack.audience}
                    </span>
                    <span className="text-xs text-muted">{pack.turnaround}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em]">{pack.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary">{pack.pitch}</p>

                  <p className="mt-8 flex items-baseline gap-2 border-t border-border pt-6">
                    <span className="text-xs text-muted">From</span>
                    <span className="font-display text-4xl font-semibold tracking-[-0.04em]">{pack.price}</span>
                    <span className="text-sm text-muted">{pack.cadence}</span>
                  </p>

                  <ul className="mt-6 space-y-3">
                    {pack.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <ul className="mb-6 flex flex-wrap gap-1.5">
                      {pack.services.map((slug) => (
                        <li key={slug} className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] text-secondary">
                          {getService(slug)?.shortTitle}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={contactHref(pack.id)}
                      className="flex h-12 items-center justify-between rounded-full bg-foreground pl-6 pr-1.5 text-sm font-medium text-background transition-colors group-hover:bg-primary"
                    >
                      Start with this package
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-5">
          <div id="custom" className="relative scroll-mt-28 overflow-hidden rounded-[28px] bg-midnight p-8 text-white md:p-12">
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-primary">Custom</span>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] md:text-6xl">
                  Don&apos;t fit a box?
                  <br />
                  <span className="text-white/50">We&apos;ll build one.</span>
                </h3>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-white/60">
                  Pick exactly what you need, see a price range instantly, and send
                  it to us as a brief.
                </p>
              </div>
              <Link
                href="/packages#builder"
                className="group inline-flex h-14 max-w-full items-center gap-3 self-start rounded-full bg-primary pl-5 pr-2 text-sm font-medium transition-colors hover:bg-white hover:text-midnight sm:pl-7 sm:text-base md:self-auto"
              >
                Build a custom package
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-white text-midnight transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="size-5" />
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

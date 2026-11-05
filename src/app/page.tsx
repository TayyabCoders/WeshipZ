import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-4rem)] overflow-hidden bg-midnight text-primary-foreground">
        <div
          aria-hidden
          className="animate-fade absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_55%_at_15%_10%,rgba(41,107,229,0.35)_0%,transparent_55%),radial-gradient(ellipse_55%_45%_at_90%_80%,rgba(108,99,255,0.18)_0%,transparent_50%),linear-gradient(165deg,#101116_0%,#161821_55%,#101116_100%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(166,176,195,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(166,176,195,0.18) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          }}
        />

        <Container className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20">
          <div className="animate-rise inline-flex w-fit items-center rounded-xl bg-surface p-3 shadow-lg shadow-primary/10">
            <Logo className="h-12 sm:h-14" priority />
          </div>
          <p className="animate-rise animate-delay-1 mt-8 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            WeShipZ
          </p>
          <h1 className="animate-rise animate-delay-1 mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Ship smarter. Arrive faster.
          </h1>
          <p className="animate-rise animate-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Freight and last-mile logistics with clear tracking, tight SLAs, and
            a team that treats every parcel like it matters.
          </p>
          <div className="animate-rise animate-delay-2 mt-8 flex flex-wrap gap-3">
            <Button href="#get-started">Get a quote</Button>
            <Button
              href="#what-we-do"
              variant="ghost"
              className="border-white/15 text-primary-foreground hover:bg-white/5"
            >
              How it works
            </Button>
          </div>
        </Container>
      </section>

      <section id="what-we-do" className="border-t border-border bg-background py-20">
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What we do
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            End-to-end shipping for brands that need reliability without the
            ops headache — from warehouse pickup to the customer&apos;s door.
          </p>
        </Container>
      </section>

      <section
        id="get-started"
        className="border-t border-white/5 bg-surface-dark py-20 text-primary-foreground"
      >
        <Container>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Ready when you are
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Tell us what you move. We&apos;ll map a lane and get you live.
          </p>
          <div className="mt-8">
            <Button href="mailto:hello@weshipz.com" external>
              Talk to us
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

import Link from "next/link";
import { Magnetic } from "@/components/animations/Magnetic";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { footerNav, legalNav } from "@/data/navigation";
import { services } from "@/data/services";
import { email, whatsappHref } from "@/data/site";

export function Footer() {
  const whatsapp = whatsappHref();

  return (
    <footer className="mt-auto bg-midnight text-primary-foreground">
      <Container className="py-20 md:py-28">
        <div className="relative border-b border-white/10 pb-16 md:pb-24">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            ( Got a brief? )
          </p>
          <p className="mt-6 font-display text-[clamp(3.5rem,12vw,11rem)] font-semibold leading-[0.85] tracking-[-0.06em]">
            Let&apos;s make
            <br />
            it <span className="text-primary">move.</span>
          </p>
          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center md:absolute md:bottom-24 md:right-0 md:mt-0">
            <Magnetic>
              <Link
                href="/contact"
                className="group inline-flex size-36 items-center justify-center rounded-full bg-primary text-center font-display text-lg font-semibold leading-tight transition-colors hover:bg-white hover:text-midnight md:size-48 md:text-xl"
              >
                Start a<br />project
              </Link>
            </Magnetic>
          </div>
          <a
            href={`mailto:${email}`}
            className="mt-10 inline-block border-b border-white/30 pb-1 font-display text-xl font-medium transition-colors hover:border-primary hover:text-primary md:text-3xl"
          >
            {email}
          </a>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="WeShipZ home"
            >
              <span className="rounded-lg bg-background p-1.5">
                <Logo className="h-7" />
              </span>
              <span className="font-display text-lg font-bold">WeShipZ</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A creative-tech studio for motion, ads, digital experiences and
              intelligent automation.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              Contact
            </p>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Ready when you are. Share the brief and we&apos;ll map the next
              step.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/contact"
                className="text-sm font-medium text-primary hover:text-[#6C9DF5]"
              >
                Send a brief →
              </Link>
              {whatsapp ? (
                <a
                  href={whatsapp}
                  className="text-sm font-medium text-primary hover:text-[#6C9DF5]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp →
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 WeShipZ. All rights reserved.</p>
          <div className="flex gap-4">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

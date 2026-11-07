"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Logo } from "@/components/common/Logo";
import { mainNav } from "@/data/navigation";
import { services } from "@/data/services";
import { email } from "@/data/site";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 240 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          hidden && !open && !servicesOpen ? "-translate-y-full" : "translate-y-0",
          scrolled && !open
            ? "border-b border-border bg-background/85 backdrop-blur-xl"
            : "border-b border-transparent bg-background",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            onClick={close}
            className="relative z-10 flex items-center gap-2.5"
            aria-label="WeShipZ home"
          >
            <Logo priority />
            <span className="font-display text-lg font-semibold tracking-[-0.03em]">
              WeShipZ
            </span>
          </Link>

          <nav className="hidden h-full items-center gap-1 lg:flex" aria-label="Primary">
            {mainNav
              .filter((item) => item.href !== "/contact")
              .map((item) =>
                item.href === "/services" ? (
                  <div
                    key={item.href}
                    className="flex h-full items-center"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink
                      href={item.href}
                      label={item.label}
                      active={isActive(item.href)}
                      onClick={close}
                      expanded={servicesOpen}
                      onFocus={() => setServicesOpen(true)}
                    />
                    <AnimatePresence>
                      {servicesOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.25, ease }}
                          className="absolute inset-x-0 top-full border-b border-border bg-background shadow-[0_30px_60px_-30px_rgba(16,17,22,0.25)]"
                        >
                          <Container className="grid gap-10 py-10 lg:grid-cols-[1fr_2fr]">
                            <div>
                              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                                Services
                              </p>
                              <p className="mt-4 max-w-xs font-display text-3xl font-semibold leading-[1] tracking-[-0.04em]">
                                Three crafts, planned as one piece of work.
                              </p>
                              <Link
                                href="/services"
                                onClick={close}
                                className="mt-6 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium hover:border-primary hover:text-primary"
                              >
                                All services <ArrowUpRight className="size-4" />
                              </Link>
                            </div>
                            <ul className="grid grid-cols-3 gap-x-6">
                              {services.map((service, index) => (
                                <li key={service.slug}>
                                  <Link
                                    href={`/services/${service.slug}`}
                                    onClick={close}
                                    className="group flex gap-4 rounded-2xl p-4 transition-colors hover:bg-soft"
                                  >
                                    <span className="pt-1 text-xs font-medium text-muted">
                                      0{index + 1}
                                    </span>
                                    <span>
                                      <span className="flex items-center gap-1.5 font-display text-lg font-semibold tracking-[-0.02em] group-hover:text-primary">
                                        {service.shortTitle}
                                        <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                                      </span>
                                      <span className="mt-1 line-clamp-2 block text-sm leading-relaxed text-secondary">
                                        {service.description}
                                      </span>
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </Container>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    active={isActive(item.href)}
                    onClick={close}
                  />
                ),
              )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              onClick={close}
              className="group hidden h-11 items-center gap-2 rounded-full bg-foreground pl-5 pr-1.5 text-sm font-medium text-background transition-colors hover:bg-primary sm:inline-flex"
            >
              Start a project
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-background text-foreground transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>

            <button
              type="button"
              className="relative z-10 inline-flex h-11 items-center gap-3 rounded-full border border-border px-4 text-sm font-medium lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
              <span className="relative block h-2.5 w-4" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                    open ? "top-1 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-[1.5px] w-full bg-current transition-transform duration-300",
                    open ? "top-1 -rotate-45" : "top-2",
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto [scrollbar-width:none] bg-background pt-24 lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease }}
          >
            <Container className="flex flex-1 flex-col justify-between pb-10">
              <nav aria-label="Mobile">
                <ul>
                  {mainNav.map((item, index) => (
                    <li key={item.href} className="overflow-hidden border-b border-border">
                      <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{ duration: 0.6, ease, delay: 0.15 + index * 0.06 }}
                      >
                        <Link
                          href={item.href}
                          onClick={close}
                          className={cn(
                            "flex items-center justify-between gap-4 py-4 font-display text-[clamp(2rem,10vw,3rem)] font-semibold tracking-[-0.045em]",
                            isActive(item.href) && "text-primary",
                          )}
                        >
                          {item.label}
                          <span className="text-sm font-medium text-muted">0{index + 1}</span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </nav>

              <motion.div
                className="mt-10 space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={close}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-secondary"
                    >
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
                <div className="flex items-end justify-between gap-4">
                  <a href={`mailto:${email}`} className="min-w-0 break-all text-sm font-medium text-foreground underline underline-offset-4">
                    {email}
                  </a>
                  <Link
                    href="/contact"
                    onClick={close}
                    className="inline-flex size-24 items-center justify-center rounded-full bg-primary text-center text-sm font-semibold leading-tight text-white"
                  >
                    Start a<br />project
                  </Link>
                </div>
              </motion.div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  label,
  active,
  onClick,
  expanded,
  onFocus,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick: () => void;
  expanded?: boolean;
  onFocus?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      onFocus={onFocus}
      aria-expanded={expanded}
      className={cn(
        "group relative px-4 py-2 text-sm font-medium transition-colors",
        active ? "text-foreground" : "text-secondary hover:text-foreground",
      )}
    >
      {label}
      <span
        className={cn(
          "absolute inset-x-4 bottom-1 h-px origin-left bg-current transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}

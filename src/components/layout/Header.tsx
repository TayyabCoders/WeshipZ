import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const nav = [{ href: "/", label: "Home" }] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="WeShipZ home"
        >
          <Logo priority />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            WeShipZ
          </span>
        </Link>

        <nav className="flex items-center gap-6" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button href="#get-started" size="sm">
            Get a quote
          </Button>
        </nav>
      </Container>
    </header>
  );
}

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="mt-auto bg-midnight text-primary-foreground">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5"
            aria-label="WeShipZ home"
          >
            <span className="rounded-md bg-surface p-1.5">
              <Logo className="h-7" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              WeShipZ
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Reliable freight and last-mile delivery, built for modern commerce.
          </p>
        </div>
        <p className="text-sm text-muted">© 2026 WeShipZ. All rights reserved.</p>
      </Container>
    </footer>
  );
}

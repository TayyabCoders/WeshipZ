import { Suspense } from "react";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { email, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with WeShipZ: motion graphics, video editing, creative ads or a ready-made package.",
};

const nextSteps = [
  { title: "You send the brief", detail: "What it is, who it is for and any references you like." },
  { title: "We reply with a plan", detail: "A clear take on the work, what we would make first, timeline and cost." },
  { title: "We start when it fits", detail: "Scope agreed up front. No surprises once production begins." },
];

export default function ContactPage() {
  const whatsapp = whatsappHref();

  return (
    <>
      <PageHero
        label="Contact"
        lines={["Tell us what", <span key="b" className="text-muted">you&apos;re making.</span>]}
      />

      <section className="bg-background pb-24 md:pb-36">
        <Container className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="text-sm text-secondary">Prefer email?</p>
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-flex max-w-full items-center gap-2 break-all font-display text-xl font-semibold tracking-[-0.03em] transition-colors hover:text-primary sm:text-2xl md:text-3xl"
            >
              {email}
              <ArrowUpRight className="size-5 shrink-0 sm:size-6" />
            </a>
            {whatsapp ? (
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-fit items-center gap-2 border-b border-foreground/30 pb-1 text-sm font-medium hover:border-primary hover:text-primary"
              >
                Message on WhatsApp <ArrowUpRight className="size-4" />
              </a>
            ) : null}

            <ol className="mt-14 border-t border-border">
              {nextSteps.map((step, index) => (
                <li key={step.title} className="flex gap-6 border-b border-border py-6">
                  <span className="text-sm font-medium text-primary">0{index + 1}</span>
                  <div>
                    <p className="font-display text-xl font-semibold tracking-[-0.02em]">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-secondary">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[28px] bg-soft p-6 sm:p-10">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </section>
    </>
  );
}

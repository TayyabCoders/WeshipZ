import { Plus } from "lucide-react";
import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

type Faq = { question: string; answer: string };

export function FaqSection({ title, items, className }: { title: string; items: Faq[]; className?: string }) {
  return (
    <section className={cn("bg-background", className)}>
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">FAQ</p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="border-t border-border">
          {items.map((faq) => (
            <details key={faq.question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-6 font-display text-lg font-semibold tracking-[-0.02em] sm:text-xl md:text-2xl [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">{faq.question}</span>
                <Plus className="mt-1 size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-6 text-base leading-relaxed text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

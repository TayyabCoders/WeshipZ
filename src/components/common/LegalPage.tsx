import type { ReactNode } from "react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";

type LegalPageProps = {
  lines: ReactNode[];
  intro: string;
  sections: { title: string; body: string }[];
};

export function LegalPage({ lines, intro, sections }: LegalPageProps) {
  return (
    <>
      <PageHero label="Legal" lines={lines} intro={intro} />
      <section className="bg-background pb-24 md:pb-36">
        <Container>
          <ol className="border-t border-foreground/15">
            {sections.map((section, index) => (
              <li
                key={section.title}
                className="grid gap-4 border-b border-foreground/15 py-8 md:grid-cols-[6rem_1fr_1fr] md:items-baseline md:py-10"
              >
                <span className="text-sm font-medium text-muted">0{index + 1}</span>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                  {section.title}
                </h2>
                <p className="max-w-md text-base leading-relaxed text-secondary">{section.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}

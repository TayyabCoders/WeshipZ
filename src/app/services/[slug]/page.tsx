import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { FaqSection } from "@/components/common/FaqSection";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ServiceVisual } from "@/components/services/ServiceVisual";
import { projects } from "@/data/projects";
import { getService, services, type ServiceSlug } from "@/data/services";

const fit: Record<ServiceSlug, { audience: string; why: string }> = {
  "motion-graphics": {
    audience: "Launches, product stories and brands that need a picture people replay.",
    why: "Motion is designed as a system, a hero film plus the cutdowns that come from it, so the work keeps earning after the first export.",
  },
  "video-editing": {
    audience: "Creators, founders and podcasts sitting on footage that does not yet feel like a story.",
    why: "Pacing, grade and sound are one finish, not two vendors handing files back and forth.",
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.title, description: service.description };
}

const label = "text-xs font-medium uppercase tracking-[0.18em] text-primary";

const sharedFaqs = [
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. You get a clear timeline with the proposal, agreed before any production starts.",
  },
  {
    question: "How do you price work?",
    answer:
      "Per project, based on the brief. Share what you need and your budget range, and we will shape the scope to fit.",
  },
];

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((item) => item.slug === service.slug);
  const related = projects.filter((project) => project.serviceSlug === service.slug);
  const others = services.filter((item) => item.slug !== service.slug);
  const point = fit[service.slug];

  return (
    <>
      <section className="bg-background pb-20 pt-12 md:pb-28 md:pt-20">
        <Container className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className={label}>Service 0{index + 1}</p>
            <h1 className="mt-8 font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              {service.shortTitle}
              <span className="text-primary">.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-secondary">
              {service.longDescription}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground pl-6 pr-1.5 text-sm font-medium text-background transition-colors hover:bg-primary"
              >
                Start a project
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
              {related.length > 0 ? (
                <a
                  href="#work"
                  className="inline-flex h-12 items-center rounded-full border border-border px-6 text-sm font-medium transition-colors hover:border-foreground"
                >
                  See the work
                </a>
              ) : null}
            </div>
          </div>
          <Reveal>
            <ServiceVisual slug={service.slug} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-soft py-20 md:py-28">
        <Container className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className={label}>Who it&apos;s for</p>
            <p className="mt-6 font-display text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-4xl">
              {point.audience}
            </p>
          </div>
          <div>
            <p className={label}>Why it works</p>
            <p className="mt-6 text-lg leading-relaxed text-secondary md:text-xl">{point.why}</p>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className={label}>What we make</p>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl">
              Everything in the box.
            </h2>
          </div>
          <ul className="border-t border-border">
            {service.offerings.map((item, i) => (
              <li
                key={item}
                className="group flex items-start justify-between gap-4 border-b border-border py-6 font-display text-xl font-semibold tracking-[-0.03em] transition-colors hover:text-primary sm:text-2xl md:text-3xl"
              >
                <span className="min-w-0 transition-transform duration-500 group-hover:translate-x-2">{item}</span>
                <span className="shrink-0 text-sm font-medium text-muted">0{i + 1}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-midnight py-20 text-white md:py-28">
        <Container>
          <p className={label}>How it runs</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-5xl">
            Four steps. No surprises.
          </h2>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {service.process.map((step, i) => (
              <li key={step.title} className="relative border-t border-white/15 pt-8">
                <span className="absolute -top-[5px] left-0 size-2.5 rounded-full bg-primary" />
                <p className="text-sm font-medium text-white/40">0{i + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {related.length > 0 ? (
        <section id="work" className="scroll-mt-24 bg-background py-20 md:py-28">
          <Container>
            <p className={label}>Selected work</p>
            <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FaqSection title="Questions, answered." items={[...service.faqs, ...sharedFaqs]} className="pb-20 md:pb-28" />

      <section className="border-t border-border bg-soft py-16">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium text-secondary">Other services</p>
          <ul className="flex flex-wrap gap-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className="inline-flex rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  {item.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import {
  categoryLabel,
  getAdjacentProjects,
  getProject,
  projects,
} from "@/data/projects";
import { getService } from "@/data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { next } = getAdjacentProjects(slug);
  const service = getService(project.serviceSlug);
  const facts = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Discipline", value: categoryLabel(project) },
    { label: "Deliverables", value: `${project.deliverables.length} pieces` },
  ];

  return (
    <>
      <PageHero
        label={categoryLabel(project)}
        lines={[project.title]}
        intro={project.summary}
      />

      <section className="bg-background">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[1600px] overflow-hidden bg-midnight sm:aspect-video md:max-h-[88vh] md:rounded-[28px]">
          {project.video ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={project.video}
              poster={project.poster}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
            />
          ) : (
            <Image src={project.poster} alt={project.title} fill priority className="object-cover" sizes="100vw" />
          )}
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <Container>
          <dl className="grid grid-cols-2 gap-8 border-b border-border pb-12 md:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-[0.16em] text-muted">{fact.label}</dt>
                <dd className="mt-2 font-display text-xl font-semibold tracking-[-0.02em]">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="grid gap-16 py-16 md:py-24 lg:grid-cols-[0.8fr_1.2fr]">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">The brief</p>
            <p className="font-display text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-5xl">
              {project.challenge}
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">Our approach</p>
            <p className="max-w-2xl text-lg leading-relaxed text-secondary md:text-xl">{project.approach}</p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">What we delivered</p>
            <ul className="border-t border-border">
              {project.deliverables.map((item, index) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-border py-5 font-display text-xl font-semibold tracking-[-0.02em] md:text-2xl"
                >
                  {item}
                  <span className="text-sm font-medium text-muted">0{index + 1}</span>
                </li>
              ))}
            </ul>
          </div>

          {service ? (
            <div className="flex flex-col justify-between gap-6 rounded-[28px] bg-soft p-8 md:flex-row md:items-center md:p-12">
              <div>
                <p className="text-sm text-secondary">Need something like this?</p>
                <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em]">
                  {service.title}
                </p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-foreground pl-6 pr-1.5 text-sm font-medium text-background transition-colors hover:bg-primary"
              >
                Explore the service
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            </div>
          ) : null}
        </Container>
      </section>

      {next ? (
        <Link href={`/work/${next.slug}`} className="group relative block overflow-hidden bg-midnight text-white">
          <Image
            src={next.poster}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
          />
          <Container className="relative py-24 md:py-36">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">Next project</p>
            <p className="mt-6 flex items-center justify-between gap-6 font-display text-5xl font-semibold tracking-[-0.05em] md:text-8xl">
              {next.title}
              <span className="inline-flex size-16 shrink-0 items-center justify-center rounded-full bg-white text-midnight transition-transform duration-500 group-hover:rotate-45 md:size-24">
                <ArrowUpRight className="size-7 md:size-10" />
              </span>
            </p>
          </Container>
        </Link>
      ) : null}
    </>
  );
}

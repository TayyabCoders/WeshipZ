"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryLabel, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
  className?: string;
  /** Media aspect, e.g. "aspect-[16/10]". */
  aspect?: string;
  tone?: "light" | "dark";
};

export function ProjectCard({
  project,
  index,
  className,
  aspect = "aspect-[4/3]",
  tone = "light",
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const dark = tone === "dark";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn("group block", className)}
      onMouseEnter={() => void videoRef.current?.play().catch(() => undefined)}
      onMouseLeave={() => videoRef.current?.pause()}
    >
      <div className={cn("relative overflow-hidden rounded-[24px] bg-surface-dark", aspect)}>
        <Image
          src={project.poster}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
        {project.video ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            src={project.video}
            muted
            loop
            playsInline
            preload="none"
          />
        ) : null}
        <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
          {categoryLabel(project)}
        </span>
        <span className="absolute right-5 top-5 inline-flex size-12 scale-75 items-center justify-center rounded-full bg-white text-midnight opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3
          className={cn(
            "font-display text-2xl font-semibold tracking-[-0.03em] transition-colors md:text-3xl",
            dark ? "text-white" : "text-foreground group-hover:text-primary",
          )}
        >
          {project.title}
        </h3>
        <span className={cn("shrink-0 text-sm", dark ? "text-white/50" : "text-muted")}>
          {index !== undefined ? `0${index + 1} / ` : ""}
          {project.year}
        </span>
      </div>
      <p
        className={cn(
          "mt-2 max-w-lg text-sm leading-relaxed",
          dark ? "text-white/55" : "text-secondary",
        )}
      >
        {project.summary}
      </p>
    </Link>
  );
}

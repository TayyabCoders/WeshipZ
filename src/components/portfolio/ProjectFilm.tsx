"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { ShowreelLightbox } from "@/components/hero/ShowreelLightbox";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectFilm({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const vertical = project.orientation === "vertical";
  const label = `${project.brand}: ${project.title}`;

  return (
    <section className="bg-background">
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[1600px] overflow-hidden bg-midnight sm:aspect-video md:max-h-[88vh] md:rounded-[28px]">
        {vertical ? (
          <Image src={project.poster} alt="" fill sizes="100vw" className="hidden scale-110 object-cover opacity-50 blur-2xl sm:block" />
        ) : null}
        <video
          className={cn("absolute inset-0 h-full w-full object-cover", vertical && "sm:object-contain")}
          src={project.preview}
          poster={project.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-0 flex items-end justify-between gap-4 p-6 text-left text-white md:p-12"
          aria-label={`Play ${label} with sound`}
        >
          <span className="font-display text-xl font-semibold tracking-tight md:text-3xl">
            Watch with sound
            <span className="ml-3 align-middle text-sm font-medium text-white/60 md:text-base">{project.duration}</span>
          </span>
          <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-white text-midnight transition-transform hover:scale-110 md:size-20">
            <Play className="size-6 fill-current md:size-8" />
          </span>
        </button>
        <ShowreelLightbox open={open} onClose={() => setOpen(false)} src={project.video} poster={project.poster} label={label} />
      </div>
    </section>
  );
}

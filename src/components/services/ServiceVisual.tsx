import { projects } from "@/data/projects";
import type { ServiceSlug } from "@/data/services";

export function ServiceVisual({ slug }: { slug: ServiceSlug }) {
  const project = projects.find((item) => item.serviceSlug === slug);
  if (!project) return null;

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-midnight">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={project.video}
        poster={project.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-20 text-white">
        <p className="text-xs uppercase tracking-[0.16em] text-white/60">Featured</p>
        <p className="mt-1 font-display text-xl font-semibold">{project.title}</p>
      </div>
    </div>
  );
}

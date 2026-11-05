"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import {
  getProjectsByCategory,
  projectFilters,
  type ProjectCategory,
} from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectGrid() {
  const [active, setActive] = useState<ProjectCategory>("all");
  const items = getProjectsByCategory(active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects"
        className="-mx-5 flex gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-border px-5 md:mx-0 md:px-0"
      >
        {projectFilters.map((filter) => {
          const count = getProjectsByCategory(filter.id).length;
          const selected = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(filter.id)}
              className={cn(
                "relative shrink-0 px-4 pb-4 pt-2 text-sm font-medium transition-colors",
                selected ? "text-foreground" : "text-secondary hover:text-foreground",
              )}
            >
              {filter.label}
              <sup className="ml-1 text-[10px] text-muted">{count}</sup>
              {selected ? (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {items.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full rounded-[24px] border border-dashed border-border p-12 text-center text-secondary"
            >
              New work in this category is on the way.
            </motion.p>
          ) : (
            items.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                className={index % 2 === 1 ? "md:mt-24" : undefined}
              >
                <ProjectCard project={project} index={index} aspect="aspect-[4/5]" />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

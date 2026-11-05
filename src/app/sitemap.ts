import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://weshipz.com";
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-11-06"),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date("2026-11-06"),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/work/${project.slug}`,
    lastModified: new Date("2026-11-06"),
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}

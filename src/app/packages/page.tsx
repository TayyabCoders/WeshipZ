import type { Metadata } from "next";
import { FaqSection } from "@/components/common/FaqSection";
import { PageHero } from "@/components/common/PageHero";
import { PackageBuilder } from "@/components/packages/PackageBuilder";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { packageFaqs } from "@/data/packages";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Video packages for creators, SaaS teams and startups, or a custom scope built around your brief.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        label="Packages"
        lines={["Pick your package.", <span key="b" className="text-muted">Or build your own.</span>]}
        intro="Motion graphics, video editing and creative ads, bundled for the stage you are at. Every package starts with a short call to tune the scope to you."
      />
      <PackageGrid bare />
      <PackageBuilder />
      <FaqSection title="Before you buy." items={packageFaqs} className="py-24 md:py-36" />
    </>
  );
}

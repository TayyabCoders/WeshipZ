import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ProcessStack } from "@/components/home/ProcessStack";
import { PackageGrid } from "@/components/packages/PackageGrid";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Video packages for creators, SaaS teams, startups, founders, e-commerce brands and agencies, or a custom scope built around your brief.",
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
      <ProcessStack />
    </>
  );
}

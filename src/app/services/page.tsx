import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ProcessStack } from "@/components/home/ProcessStack";
import { ServiceList } from "@/components/home/ServiceList";
import { PackageGrid } from "@/components/packages/PackageGrid";
import { SelectedWork } from "@/components/portfolio/SelectedWork";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Motion graphics, video editing and creative ads, under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        lines={["Three crafts.", <span key="b" className="text-muted">One studio.</span>]}
        intro="Motion that explains, edits that hold attention and ads that sell. Pick one, grab a package, or bring a brief that needs all three."
      />
      <ServiceList bare />
      <SelectedWork />
      <PackageGrid />
      <ProcessStack />
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ProcessStack } from "@/components/home/ProcessStack";
import { ServiceList } from "@/components/home/ServiceList";
import { SelectedWork } from "@/components/portfolio/SelectedWork";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Motion graphics, creative ads, video editing, websites, AI automation and social content, under one roof.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        lines={["Six crafts.", <span key="b" className="text-muted">One studio.</span>]}
        intro="Picture, product and the systems behind both. Pick one, or bring a brief that needs several and we will plan it as one piece of work."
      />
      <ServiceList bare />
      <SelectedWork />
      <ProcessStack />
    </>
  );
}

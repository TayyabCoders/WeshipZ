import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Motion graphics, ads, edits, websites, automation and social content by WeShipZ.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Work"
        lines={[
          "Selected",
          <span key="b">
            work<span className="text-primary">.</span>
          </span>,
        ]}
        intro="Campaigns, edits, websites and systems. Hover any piece to see it move, then open it for the full story."
        aside={
          <p className="font-display text-6xl font-semibold tracking-[-0.05em] text-primary md:text-8xl">
            {String(projects.length).padStart(2, "0")}
          </p>
        }
      />
      <section className="bg-background pb-24 md:pb-36">
        <Container>
          <ProjectGrid />
        </Container>
      </section>
    </>
  );
}

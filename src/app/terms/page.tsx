import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "How work with WeShipZ is scoped and credited.",
};

const sections = [
  {
    title: "Work starts in writing",
    body: "A conversation on this site is an inquiry, not a contract. Production begins when scope, timing, and fee are agreed in writing.",
  },
  {
    title: "Concepts are not client work",
    body: "Projects marked as concept projects show the kind of work the studio makes. They are not claims about a named client's results.",
  },
  {
    title: "What you receive",
    body: "Deliverables, usage, and ownership are defined in the project agreement. Until that agreement exists, concepts shared in a pitch stay with the studio.",
  },
  {
    title: "This page",
    body: "These notes describe how the studio intends to work. Have them reviewed before you rely on them as legal terms.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      lines={[<span key="a">Terms<span className="text-primary">.</span></span>]}
      intro="Clear scope before the work, clear ownership after it."
      sections={sections}
    />
  );
}

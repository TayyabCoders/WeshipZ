import type { Metadata } from "next";
import { LegalPage } from "@/components/common/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How WeShipZ handles project inquiries.",
};

const sections = [
  {
    title: "What you send us",
    body: "The contact form asks for your name, email, company, the service you need, and a description of the project. Budget and a reference link are optional.",
  },
  {
    title: "Why we keep it",
    body: "We use that information to read the brief and reply. We do not sell inquiry details, and we do not use them for unrelated marketing.",
  },
  {
    title: "How long it stays",
    body: "Inquiries are kept long enough to respond and, if we work together, for the life of the project. You can ask us to delete a message that has not become an active job.",
  },
  {
    title: "This page",
    body: "This is the studio's working privacy note. Replace it with counsel-reviewed policy text before a public launch if your jurisdiction requires a formal notice.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      lines={[<span key="a">Privacy<span className="text-primary">.</span></span>]}
      intro="WeShipZ collects only what a project conversation needs."
      sections={sections}
    />
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/animations/Reveal";
import { StudioWord } from "@/components/home/StudioWord";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description:
    "WeShipZ is a small creative-tech team building motion, digital experiences and intelligent systems.",
};

const label = "text-xs font-medium uppercase tracking-[0.18em] text-primary";

const principles = [
  {
    title: "Craft over clutter",
    description: "Fewer elements, stronger decisions, clearer stories. Every frame has a job.",
  },
  {
    title: "Motion with purpose",
    description: "Animation should guide attention, not decorate. If it does not help the message, it goes.",
  },
  {
    title: "Built to keep using",
    description: "Brand kits, sites and automations your team can run long after launch day.",
  },
  {
    title: "One team, start to finish",
    description: "The people who pitch the idea are the people who make it. Nothing gets lost in a hand-off.",
  },
];

const team = [
  {
    role: "Creative direction",
    focus: "Taste, story and the final edit",
    note: "Holds the brief and the point of view until the work feels like one piece.",
    tone: "bg-primary text-white",
  },
  {
    role: "Motion & picture",
    focus: "Film, ads and animation",
    note: "Builds the frames people stop for, then cuts them for every screen.",
    tone: "bg-midnight text-white",
  },
  {
    role: "Product & systems",
    focus: "Web and automation",
    note: "Turns the campaign into a site, a tool or a workflow the team can run.",
    tone: "bg-primary-light text-foreground",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        lines={["Small team.", <span key="b" className="text-muted">Big output.</span>]}
        intro="WeShipZ is a creative-tech studio. We make the pictures people stop for, and the digital systems that keep a brand moving after the campaign ends."
      />

      <StudioWord />

      <section className="bg-background py-24 md:py-36">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <p className={label}>( Our story )</p>
          <div>
            <Reveal>
              <p className="font-display text-3xl font-medium leading-[1.15] tracking-[-0.03em] md:text-5xl">
                Designers, editors and developers in the same room. The work
                stays sharp because the people making the picture also
                understand the product.
              </p>
            </Reveal>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-secondary">
              Most brands juggle a video team, a web agency and a freelancer
              for automation. We put all of it under one roof, so the campaign,
              the website and the systems behind them speak the same language.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-soft py-24 md:py-36">
        <Container>
          <p className={label}>( What we believe )</p>
          <ul className="mt-12 border-t border-foreground/15">
            {principles.map((item, index) => (
              <li
                key={item.title}
                className="grid gap-4 border-b border-foreground/15 py-8 md:grid-cols-[6rem_1fr_1fr] md:items-baseline md:py-10"
              >
                <span className="text-sm font-medium text-muted">0{index + 1}</span>
                <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
                  {item.title}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-secondary">{item.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-background py-24 md:py-36">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className={label}>( The team )</p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl">
                Three disciplines.
                <br />
                One table.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-secondary">
              A small studio by design. You always talk to the people doing the
              work.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.role} delay={index * 0.08} className={index === 1 ? "md:mt-16" : undefined}>
                <article
                  className={cn(
                    "flex aspect-[4/5] flex-col justify-between rounded-[28px] p-8",
                    member.tone,
                  )}
                >
                  <span className="font-display text-7xl font-semibold tracking-[-0.06em] opacity-90">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-60">
                      {member.focus}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em]">
                      {member.role}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed opacity-75">{member.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

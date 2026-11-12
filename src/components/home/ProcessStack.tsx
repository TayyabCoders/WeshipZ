import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Discover",
    description:
      "We get clear on the goal, the audience and what has to change. You get a direction before production hours pile up.",
    tags: ["Brief", "Research", "Creative angle"],
    tone: "bg-background text-foreground border border-border",
  },
  {
    title: "Design",
    description:
      "Scripts, style frames and storyboards. You see exactly how it will look and move before we animate a frame.",
    tags: ["Scripts", "Style frames", "Storyboards"],
    tone: "bg-primary-light text-foreground",
  },
  {
    title: "Produce",
    description:
      "Animation and edits, made by the same team that designed them. Nothing is lost in a hand-off.",
    tags: ["Motion", "Edit & grade", "Sound"],
    tone: "bg-primary text-white",
  },
  {
    title: "Ship",
    description:
      "Platform-ready exports in every format, plus cutdowns and source files your team can keep using.",
    tags: ["Delivery", "Cutdowns", "Iterate"],
    tone: "bg-midnight text-white",
  },
];

export function ProcessStack() {
  return (
    <section className="bg-background py-24 md:py-36">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            How we ship
          </p>
          <h2 className="mt-6 font-display text-4xl font-semibold leading-[0.95] tracking-[-0.045em] sm:text-6xl">
            From first call to final frame.
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-secondary">
            Four clear stages, with one team the whole way through. You always
            know what is happening and what comes next.
          </p>
        </div>

        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className={cn(
                "sticky flex min-h-[340px] flex-col justify-between rounded-[28px] p-8 shadow-[0_-20px_40px_-24px_rgba(16,17,22,0.25)] md:min-h-[380px] md:p-12",
                step.tone,
              )}
              style={{ top: `calc(6rem + ${index * 1.75}rem)` }}
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="font-display text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                  {step.title}
                </h3>
                <span className="font-display text-lg font-medium opacity-50">
                  0{index + 1}
                </span>
              </div>
              <div>
                <p className="max-w-md text-base leading-relaxed opacity-75 md:text-lg">
                  {step.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-current/20 px-3 py-1 text-xs font-medium opacity-80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

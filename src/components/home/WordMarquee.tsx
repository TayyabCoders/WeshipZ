const words = [
  "Motion graphics",
  "Video editing",
  "SaaS animation",
  "Short-form reels",
];

export function WordMarquee() {
  const line = [...words, ...words];

  return (
    <div aria-hidden className="overflow-hidden border-y border-border bg-background py-6 md:py-8">
      <div className="marquee-track flex w-max items-center">
        {line.map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={
              index % 2 === 0
                ? "flex items-center whitespace-nowrap font-display text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-7xl"
                : "flex items-center whitespace-nowrap font-display text-4xl font-semibold tracking-[-0.04em] text-transparent [-webkit-text-stroke:1.5px_var(--foreground)] md:text-7xl"
            }
          >
            {word}
            <span className="mx-6 inline-block size-3 rounded-full bg-primary md:mx-10 md:size-4" />
          </span>
        ))}
      </div>
    </div>
  );
}

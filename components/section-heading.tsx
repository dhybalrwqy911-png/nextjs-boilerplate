import { Reveal } from "./reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
  id?: string;
  align?: "start" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  id,
  align = "start",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`flex flex-col gap-4 ${centered ? "items-center text-center" : ""}`}>
      <div className="flex items-center gap-3 text-accent">
        {index ? (
          <>
            <span className="font-display text-sm tracking-[0.3em]" dir="ltr">
              {index}
            </span>
            <span className="h-px w-10 bg-accent" />
          </>
        ) : (
          <span className="h-px w-10 bg-accent" />
        )}
        <span className="font-display text-sm uppercase tracking-[0.3em]" dir="ltr">
          {eyebrow}
        </span>
      </div>
      <h2 id={id} className="text-balance text-3xl font-black leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

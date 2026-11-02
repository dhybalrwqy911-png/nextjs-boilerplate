import Image from "next/image";
import { DiscordButton, SecondaryLink } from "./buttons";
import { Reveal } from "./reveal";

type CtaBannerProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  image?: string;
};

export function CtaBanner({
  eyebrow = "JOIN THE COMMUNITY",
  title = "قصتك تبدأ الآن",
  text = "انضم إلى مجتمع ARAB REFORGER وكن جزءاً من تجربة رول بلاي عربية جادة على Arma Reforger.",
  image = "/images/hero.png",
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="grain relative isolate overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center md:px-8">
        <p className="font-display text-sm tracking-[0.4em] text-accent" dir="ltr">
          {eyebrow}
        </p>
        <h2 id="cta-title" className="text-balance text-4xl font-black leading-tight text-foreground md:text-6xl">
          {title}
        </h2>
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/75">{text}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <DiscordButton />
          <SecondaryLink href="/join">خطوات الانضمام</SecondaryLink>
        </div>
      </Reveal>
    </section>
  );
}

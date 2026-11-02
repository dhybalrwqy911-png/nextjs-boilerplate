import Image from "next/image";
import { PrimaryLink, SecondaryLink } from "./buttons";

const stats = [
  { value: "03", label: "قطاعات حكومية" },
  { value: "06", label: "مجالات مهنية مدنية" },
  { value: "AR", label: "مجتمع عربي بالكامل" },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="نقطة تفتيش عسكرية وسيارة شرطة في مدينة عند الغروب"
          fill
          priority
          sizes="100vw"
          className="animate-hero-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-l from-background/80 via-transparent to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <div className="max-w-3xl">
          <p
            className="animate-fade-up flex items-center gap-3 font-display text-xs tracking-[0.4em] text-accent md:text-sm"
            dir="ltr"
            style={{ animationDelay: "200ms" }}
          >
            <span className="h-px w-12 bg-accent" />
            ARMA REFORGER · ARABIC ROLEPLAY
          </p>

          <h1
            id="hero-title"
            className="animate-fade-up mt-6 font-display text-6xl font-bold leading-[0.9] tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
            dir="ltr"
            style={{ animationDelay: "350ms", textAlign: "right" }}
          >
            ARAB
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_var(--foreground)]">
              REFORGER
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 text-2xl font-bold text-foreground md:text-4xl"
            style={{ animationDelay: "500ms" }}
          >
            عالمك، قصتك، قراراتك
          </p>
          <p
            className="animate-fade-up mt-4 max-w-xl text-pretty text-base leading-relaxed text-foreground/75 md:text-lg"
            style={{ animationDelay: "600ms" }}
          >
            تجربة رول بلاي عربية واقعية على محرك Arma Reforger. اختر طريقك بين الحياة
            المدنية، الخدمة الحكومية، أو عالم الجريمة المنظمة.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "750ms" }}
          >
            <PrimaryLink href="/roleplay">اكتشف عالمنا</PrimaryLink>
            <SecondaryLink href="/join">انضم إلى المجتمع</SecondaryLink>
          </div>
        </div>

        <dl
          className="animate-fade-up mt-16 grid grid-cols-3 gap-px border border-border bg-border md:max-w-2xl"
          style={{ animationDelay: "900ms" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 bg-background/80 p-4 backdrop-blur-sm md:p-5">
              <dt className="order-2 text-xs leading-snug text-muted md:text-sm">{s.label}</dt>
              <dd className="order-1 font-display text-2xl font-bold text-foreground md:text-3xl" dir="ltr">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#welcome"
        aria-label="انتقل إلى القسم التالي"
        className="absolute bottom-8 left-8 hidden flex-col items-center gap-3 text-muted transition-colors hover:text-foreground md:flex"
      >
        <span className="font-display text-[10px] tracking-[0.4em] [writing-mode:vertical-rl]" dir="ltr">
          SCROLL
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-accent to-transparent" />
      </a>
    </section>
  );
}

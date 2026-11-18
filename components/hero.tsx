import { HeroArtwork } from "./hero-artwork";
import Link from "next/link";
import { SecondaryLink } from "./buttons";

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
      className="relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_30%,rgba(163,118,42,0.12),transparent_65%)]"
      />
      <div className="mx-auto w-full max-w-6xl px-6 pb-12 pt-28 md:px-12 md:pb-16 md:pt-36 lg:pt-44">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:gap-14">
          <div className="mx-auto w-full min-w-0 max-w-2xl text-center">
            <p
              className="text-sm font-semibold tracking-[0.06em] text-accent sm:text-base"
              dir="ltr"
            >
              ARMA REFORGER · ARABIC ROLEPLAY
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-foreground"
              dir="ltr"
              style={{ textAlign: "center" }}
            >
              ARAB
              <br />
              <span className="text-[#c49b54]">REFORGER</span>
            </h1>
            <p className="mt-6 text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
              عالمك، قصتك، قراراتك
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-foreground/75 md:text-lg">
              تجربة رول بلاي عربية واقعية على محرك Arma Reforger. اختر طريقك بين الحياة
              المدنية، الخدمة الحكومية، أو عالم الجريمة المنظمة.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row sm:flex-wrap">
              <Link href="/roleplay" className="px-3 py-3 text-lg font-bold text-accent underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">اكتشف عالمنا ←</Link>
              <SecondaryLink href="/join">انضم إلى المجتمع</SecondaryLink>
            </div>
          </div>

          <HeroArtwork />
        </div>

        <dl className="mt-12 grid grid-cols-3 gap-px border border-border bg-border md:mt-16">
          {stats.map((s) => (
            <div key={s.label} className="flex min-w-0 flex-col gap-2 bg-background p-4 text-center sm:p-6">
              <dt className="order-2 text-xs leading-relaxed text-muted md:text-sm">{s.label}</dt>
              <dd className="order-1 font-display text-2xl font-bold text-[#c49b54] md:text-3xl" dir="ltr">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#welcome"
          className="mx-auto mt-8 flex w-fit items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
        >
          استكشف المجتمع
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

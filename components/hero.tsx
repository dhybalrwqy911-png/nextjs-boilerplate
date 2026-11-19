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
      <div className="mx-auto w-full max-w-6xl px-5 pb-8 pt-20 sm:px-6 md:px-12 md:pb-16 md:pt-36 lg:pt-44">
        <div className="grid min-w-0 items-center gap-2 md:gap-6 lg:grid-cols-[1.3fr_0.8fr] lg:gap-14">
          <div className="mx-auto w-full min-w-0 max-w-2xl text-center">
            <p
              className="text-[11px] font-semibold tracking-[0.06em] text-accent sm:text-base"
              dir="ltr"
            >
              ARMA REFORGER · ARABIC ROLEPLAY
            </p>
            <h1
              id="hero-title"
              className="mt-3 font-display text-[clamp(2.25rem,10vw,3.5rem)] md:mt-6 lg:text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-foreground"
              dir="ltr"
              style={{ textAlign: "center" }}
            >
              ARAB
              <br />
              <span className="text-accent">REFORGER</span>
            </h1>
            <p className="mt-3 text-xl font-bold leading-snug md:mt-6 md:leading-relaxed text-foreground md:text-3xl">
              عالمك، قصتك، قراراتك
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-6 md:mt-5 md:leading-8 text-foreground/75 md:text-lg">
              تجربة رول بلاي عربية واقعية على محرك Arma Reforger. اختر طريقك بين الحياة
              المدنية، الخدمة الحكومية، أو عالم الجريمة المنظمة.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:mt-8 md:gap-5">
              <Link href="/roleplay" className="inline-flex min-h-11 items-center px-2 text-sm md:px-3 md:py-3 md:text-lg font-bold text-accent underline-offset-8 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">اكتشف عالمنا ←</Link>
              <div className="md:hidden"><Link href="/join" className="inline-flex min-h-11 items-center border border-foreground/40 px-3 text-sm font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">انضم إلى المجتمع</Link></div>
              <div className="hidden md:block"><SecondaryLink href="/join">انضم إلى المجتمع</SecondaryLink></div>
            </div>
          </div>

          <div className="order-first min-w-0 lg:order-none"><HeroArtwork /></div>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-px border border-border bg-border md:mt-16">
          {stats.map((s) => (
            <div key={s.label} className="flex min-w-0 flex-col gap-2 bg-background p-2 text-center sm:p-6">
              <dt className="order-2 text-xs leading-relaxed text-muted md:text-sm">{s.label}</dt>
              <dd className="order-1 font-display text-2xl font-bold text-accent md:text-3xl" dir="ltr">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        <a
          href="#welcome"
          className="mx-auto mt-5 flex w-fit md:mt-8 items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
        >
          استكشف المجتمع
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

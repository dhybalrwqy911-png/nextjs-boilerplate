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
      className="relative isolate overflow-hidden border-b border-border bg-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_30%,rgba(163,118,42,0.12),transparent_65%)]"
      />
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-36 lg:pt-44">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="min-w-0">
            <p
              className="flex flex-wrap items-center gap-3 font-display text-[10px] tracking-[0.2em] text-accent sm:text-xs"
              dir="ltr"
            >
              <span className="h-px w-8 shrink-0 bg-accent" />
              ARMA REFORGER · ARABIC ROLEPLAY
            </p>
            <h1
              id="hero-title"
              className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-foreground"
              dir="ltr"
              style={{ textAlign: "right" }}
            >
              ARAB
              <br />
              <span className="text-[#c49b54]">REFORGER</span>
            </h1>
            <p className="mt-6 text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
              عالمك، قصتك، قراراتك
            </p>
            <p className="mt-4 max-w-xl text-pretty text-base leading-8 text-foreground/75 md:text-lg">
              تجربة رول بلاي عربية واقعية على محرك Arma Reforger. اختر طريقك بين الحياة
              المدنية، الخدمة الحكومية، أو عالم الجريمة المنظمة.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PrimaryLink href="/roleplay">اكتشف عالمنا</PrimaryLink>
              <SecondaryLink href="/join">انضم إلى المجتمع</SecondaryLink>
            </div>
          </div>

          <figure className="order-first min-w-0 lg:order-none">
            <div className="relative overflow-hidden rounded-sm border border-[#b58a45]/40 bg-[#17130c] shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/arab-banner.webp"
                alt="بنر عرب ريفورجر الرسمي: شعار السيرفر الذهبي واسم ARAB REFORGER ARMA RP"
                width={1920}
                height={1080}
                priority
                sizes="(min-width: 1440px) 720px, (min-width: 1024px) 55vw, 100vw"
                className="block h-auto w-full object-contain"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4 font-display text-[10px] tracking-[0.2em] text-[#c49b54]/80 sm:text-xs" dir="ltr">
              <span>ARAB REFORGER</span>
              <span>ROLEPLAY COMMUNITY</span>
            </figcaption>
          </figure>
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

import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const pillars = [
  {
    title: "واقعية كاملة",
    text: "أنظمة اقتصادية وقانونية مستوحاة من الحياة الحقيقية تجعل كل قرار له وزن.",
  },
  {
    title: "مجتمع عربي",
    text: "لاعبون من مختلف الدول العربية يجمعهم شغف القصة والتمثيل الجاد.",
  },
  {
    title: "إدارة عادلة",
    text: "فريق إداري نشط يضمن تطبيق القوانين وتجربة ممتعة للجميع.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            index="01"
            eyebrow="About"
            title="أكثر من مجرد سيرفر، إنه عالم حي"
            description="ARAB REFORGER مجتمع رول بلاي عربي مبني على Arma Reforger، صُمم لمن يبحث عن تجربة غامرة وقصص يكتبها اللاعبون بأنفسهم. هنا لا توجد مهام جاهزة، بل حياة كاملة تتشكل بقراراتك وتفاعلك مع الآخرين."
          />
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100} className="flex gap-6 py-6">
                <span className="font-display text-sm text-accent" dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <Image
              src="/images/about.png"
              alt="مجموعة جنود حول شاحنة على تلة عند الفجر"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 right-6 border border-border bg-surface p-5 md:right-auto md:-left-6">
            <p className="font-display text-xs tracking-[0.3em] text-muted" dir="ltr">
              EST. 2026
            </p>
            <p className="mt-1 text-lg font-bold text-foreground">مجتمع عربي للرول بلاي</p>
          </div>
          <span className="absolute -top-3 -right-3 size-6 border-r-2 border-t-2 border-accent" />
        </Reveal>
      </div>
    </section>
  );
}

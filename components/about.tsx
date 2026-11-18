import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const pillars = [
  { title: "متابعة المجتمع والدعم", text: "استقبال الاستفسارات والمشكلات، ومتابعة التذاكر وإحالتها إلى الفريق المختص للوصول إلى معالجة واضحة." },
  { title: "تنظيم الرول بلاي", text: "توضيح القوانين ومراجعة البلاغات والأدلة، والعمل على حماية جودة التجربة واحترام قصص اللاعبين." },
  { title: "التطوير والتشغيل", text: "التنسيق بين العمل الإداري والتقني لمتابعة الأنظمة والملاحظات والمشكلات التي تؤثر على تجربة اللعب." },
  { title: "التواصل والتحسين", text: "جمع اقتراحات المجتمع وملاحظاته، وتوضيح المستجدات وتطوير آليات العمل حسب احتياج السيرفر." },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            index="01"
            eyebrow="OUR MANAGEMENT"
            title="تعرّف على إدارة عرب ريفورجر"
            description="خلف تجربة عرب ريفورجر فريق يتولى تنظيم المجتمع ومتابعة احتياجات اللاعبين والتنسيق مع الفرق المختصة. هنا تتعرّف على دور الإدارة، وما تقدمه للمجتمع، ومجالات العمل التي تدعم تجربة الرول بلاي."
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
              src="/images/management-team.webp"
              alt="تصميم تصوري لفريق إدارة عرب ريفورجر في بيئة عمل مشتركة"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-12 right-6 border border-border bg-surface p-5 md:right-auto md:-left-6">
            <p className="font-display text-xs tracking-[0.3em] text-muted" dir="ltr">
              ARAB REFORGER TEAM
            </p>
            <p className="mt-1 text-lg font-bold text-foreground">إدارة المجتمع وتطوير التجربة</p>
          </div>
          <p className="mt-12 text-xs leading-6 text-muted">صورة تصورية للفريق الإداري، وليست صور الأعضاء الفعلية.</p>
          <span className="absolute -top-3 -right-3 size-6 border-r-2 border-t-2 border-accent" />
        </Reveal>
      </div>
    </section>
  );
}

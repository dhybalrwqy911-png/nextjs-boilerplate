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
    <section id="about" aria-labelledby="about-title about-title-mobile" className="relative py-7 md:py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 md:gap-14 md:px-8">
        <div className="flex flex-col gap-3 md:gap-10">
          <h2 id="about-title-mobile" className="text-xl font-black md:hidden">وش تقدّم الإدارة؟</h2>
          <div className="hidden md:contents">
          <SectionHeading
            id="about-title"
            index="01"
            eyebrow="OUR MANAGEMENT"
            title="تعرّف على إدارة عرب ريفورجر"
            description="خلف تجربة عرب ريفورجر فريق يتولى تنظيم المجتمع ومتابعة احتياجات اللاعبين والتنسيق مع الفرق المختصة. هنا تتعرّف على دور الإدارة، وما تقدمه للمجتمع، ومجالات العمل التي تدعم تجربة الرول بلاي."
          />
          </div>
          <ul className="flex flex-col divide-y divide-border border-y border-border">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 100} className="flex gap-3 py-3 md:gap-6 md:py-6">
                <span className="font-display text-sm text-accent" dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold text-foreground md:text-lg">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted md:text-base">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

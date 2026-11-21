import { CarIcon, FactoryIcon, PickaxeIcon, ScaleIcon, TruckIcon, WrenchIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const jobs = [
  { Icon: ScaleIcon, en: "Legal", name: "المهن القانونية", text: "محامون، قضاة، وموثقون يديرون العدالة في المدينة." },
  { Icon: PickaxeIcon, en: "Mining", name: "التعدين", text: "استخراج الموارد الخام وبيعها للمصانع والتجار." },
  { Icon: TruckIcon, en: "Transport", name: "النقل والشحن", text: "نقل البضائع بين المدن وتشغيل خطوط الإمداد." },
  { Icon: FactoryIcon, en: "Manufacturing", name: "التصنيع", text: "تحويل المواد الخام إلى منتجات تحرك الاقتصاد." },
  { Icon: WrenchIcon, en: "Mechanics", name: "الميكانيك", text: "صيانة المركبات وتعديلها وإدارة الورش." },
  { Icon: CarIcon, en: "Services", name: "الخدمات العامة", text: "سيارات الأجرة، المطاعم، والمتاجر اليومية." },
];

export function Jobs({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section aria-labelledby="mobile-jobs-title" className="mx-auto max-w-xl px-4 pb-8">
        <h2 id="mobile-jobs-title" className="mb-3 text-base font-bold">المهن المتاحة</h2>
        <ul className="divide-y divide-border border border-border bg-surface">
          {jobs.map(({ Icon, name, text, en }) => (
            <li key={en} className="flex items-start gap-3 p-3">
              <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center bg-olive/20 text-olive-bright">
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold leading-6">{name}</h3>
                <p className="mt-0.5 text-sm leading-6 text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section
      id="jobs"
      aria-labelledby="jobs-title"
      className="relative isolate overflow-hidden border-y border-border py-6 md:py-10"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading
          index="04"
          eyebrow="Civilian Jobs"
          title="اقتصاد يبنيه اللاعبون"
          description="كل وظيفة حلقة في سلسلة اقتصادية مترابطة. اعمل، تاجر، واستثمر لتصعد في المجتمع."
        />

        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <Reveal
              as="li"
              key={job.en}
              delay={(i % 3) * 100}
              className="group flex flex-col gap-5 bg-background/90 p-6 backdrop-blur-sm transition-colors hover:bg-surface-2 md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center bg-olive/20 text-olive-bright transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <job.Icon className="size-6" />
                </span>
                <span className="font-display text-xs tracking-[0.3em] text-muted" dir="ltr">
                  {job.en.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-foreground">{job.name}</h3>
                <p className="leading-relaxed text-muted">{job.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

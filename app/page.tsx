import { sectionTheme } from "@/lib/section-theme";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { CtaBanner } from "@/components/community";
const highlights = [
{title:"تعرّف على الإدارة",desc:"اكتشف دور إدارة المجتمع وما تقدمه في الدعم والتنظيم والتطوير.",image:"/images/management-team.webp",href:"/about"},
{title:"عالم الرول بلاي",desc:"حياة مدنية وقصص يومية وقرارات تصنع مسارك داخل المدينة.",image:"/images/civilian.png",href:"/roleplay"},
{title:"القطاعات الحكومية",desc:"اكتشف الشرطة والإسعاف والإدارة الحكومية ومسؤوليات كل قطاع.",image:"/images/government.png",href:"/departments"},
{title:"الوظائف والاقتصاد",desc:"تعرّف على التعدين والتصنيع والنقل والخدمات ومسارات التطور المهني.",image:"/images/jobs.png",href:"/jobs"},
{title:"خريطة المدينة",desc:"استكشف دليل المواقع والقطاعات والمناطق المهمة داخل العالم.",image:"/images/map.png",href:"/map"},
{title:"القوانين والانضمام",desc:"اطّلع على ضوابط اللعب وكيف تبدأ رحلتك في المجتمع.",image:"/images/rules.png",href:"/rules"},
];
export default function Home() {
  return (
    <>
      <Hero />
      <section id="welcome" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-8 md:scroll-mt-0 md:px-8 md:py-20">
        <p className="mb-4 hidden text-sm font-bold tracking-widest text-accent md:block" dir="ltr">
          EXPLORE ARAB REFORGER
        </p>
        <h2 className="max-w-4xl text-2xl font-black leading-tight md:text-6xl">
          <span className="md:hidden">استكشف أقسام الموقع</span>
          <span className="hidden md:inline">عالم متكامل، وكل قصة لها طريقها</span>
        </h2>
        <p className="mt-6 hidden max-w-3xl text-lg leading-9 text-foreground/70 md:block">
          تعرّف على عالم عرب ريفورجر، واستكشف الوظائف والقطاعات ومواقع المدينة.
        </p>
        <div className="mt-5 grid gap-3 md:mt-9 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
          {highlights.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              data-section-theme={sectionTheme(card.href)}
              className="section-card group grid min-h-20 grid-cols-[4.5rem_minmax(0,1fr)] overflow-hidden rounded-md border border-border bg-surface transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:grid-cols-none md:grid-rows-[auto_1fr]"
            >
              <div className="relative overflow-hidden border-b border-border md:aspect-[16/9]">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 72px, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
                />
              </div>
              <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 md:flex md:flex-col md:items-stretch md:justify-between md:gap-4 md:p-5">
                <div>
                  <h3 className="text-base font-bold leading-snug md:text-2xl">{card.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/75 md:mt-2 md:text-sm md:leading-7">
                    {card.desc}
                  </p>
                </div>
                <span className="font-bold text-accent md:inline-flex md:w-fit md:items-center md:gap-1.5 md:text-sm" aria-hidden="true">
                  <span className="hidden md:inline">اكتشف القسم </span>←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}

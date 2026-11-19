import { sectionTheme } from "@/lib/section-theme";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { CtaBanner } from "@/components/community";
const highlights=[
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
      <section id="welcome" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-8 md:scroll-mt-0 md:px-8 md:py-28">
        <p className="mb-4 hidden text-sm font-bold tracking-widest text-accent md:block" dir="ltr">
          EXPLORE ARAB REFORGER
        </p>
        <h2 className="max-w-4xl text-2xl font-black leading-tight md:text-6xl">
          <span className="md:hidden">استكشف أقسام الموقع</span>
          <span className="hidden md:inline">عالم متكامل، وكل قصة لها طريقها</span>
        </h2>
        <p className="mt-6 hidden max-w-3xl text-lg leading-9 text-foreground/70 md:block">
          عرب ريفورجر مجتمع رول بلاي عربي في Arma Reforger. الصفحة الرئيسية تعطيك لمحة سريعة، وكل قسم له صفحته الخاصة وتفاصيله الكاملة.
        </p>
        <div className="mt-4 grid gap-2 md:mt-14 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {highlights.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              data-section-theme={sectionTheme(card.href)}
              className="section-card group grid min-h-20 grid-cols-[4.5rem_minmax(0,1fr)] overflow-hidden border border-border bg-surface transition-colors hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent md:block"
            >
              <div className="relative overflow-hidden md:h-52">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 72px, (max-width: 1279px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-3 py-2 md:block md:p-7">
                <div>
                  <h3 className="text-base font-bold leading-snug md:text-2xl">{card.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/75 md:mt-3 md:text-base md:leading-8 md:text-foreground/65">
                    {card.desc}
                  </p>
                </div>
                <span className="font-bold text-accent md:mt-6 md:inline-block" aria-hidden="true">
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

"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const tabs = [
  {
    id: "civilian",
    en: "Civilian Life",
    label: "الحياة المدنية",
    image: "/images/civilian.png",
    alt: "ساحة بلدة صغيرة فيها مقهى ومارة وسيارات قديمة",
    title: "عش حياتك بالطريقة التي تريدها",
    text: "امتلك منزلاً، افتح مشروعك الخاص، كوّن علاقات، وابنِ سمعتك في المدينة. الحياة المدنية هي قلب العالم ومصدر كل القصص.",
    points: ["سكن وممتلكات", "متاجر ومشاريع خاصة", "علاقات اجتماعية"],
  },
  {
    id: "government",
    en: "Government Services",
    label: "الخدمات الحكومية",
    image: "/images/government.png",
    alt: "مبنى حكومي حجري بأعمدة عند الغسق",
    title: "مؤسسات تحفظ النظام",
    text: "تراخيص، محاكم، سجلات مدنية، وقرارات إدارية تؤثر على حياة الجميع. الدولة في ARAB REFORGER ليست ديكوراً بل نظام فعّال.",
    points: ["تراخيص ومعاملات", "نظام قضائي", "انتخابات وقرارات"],
  },
  {
    id: "crime",
    en: "Crime Scenarios",
    label: "سيناريوهات الجريمة",
    image: "/images/crime.png",
    alt: "شخصيات ملثمة بجانب سيارات في مستودع مهجور",
    title: "الوجه الآخر للمدينة",
    text: "سيناريوهات إجرامية مدروسة تضيف التوتر والإثارة للقصة، ضمن قوانين واضحة تضمن تجربة عادلة لجميع الأطراف.",
    points: ["عمليات مخططة", "تحقيقات ومطاردات", "عواقب حقيقية"],
  },
  {
    id: "interactive",
    en: "Interactive World",
    label: "عالم تفاعلي",
    image: "/images/about-roleplay.webp",
    alt: "جنود حول شاحنة على تلة ضبابية",
    title: "كل تفاعل يصنع حدثاً",
    text: "فعاليات حية، أحداث مفاجئة، وتفاعل مستمر بين القطاعات. العالم يتغير ويتطور بناءً على ما يفعله اللاعبون.",
    points: ["فعاليات أسبوعية", "أحداث ديناميكية", "قصص مترابطة"],
  },
];

export function RoleplayWorld() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section
      id="world"
      aria-labelledby="world-title"
      className="relative border-y border-border bg-surface py-24 md:py-36"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading
          index="02"
          eyebrow="Roleplay World"
          title="عالم الرول بلاي"
          description="أربعة محاور تتقاطع لتصنع تجربة متكاملة. اختر المحور واستكشف ما ينتظرك."
        />

        <Reveal>
          <div
            role="tablist"
            aria-label="محاور عالم الرول بلاي"
            className="grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4"
          >
            {tabs.map((tab) => {
              const selected = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveId(tab.id)}
                  className={`relative flex flex-col items-start gap-1 p-4 text-right transition-colors md:p-5 ${
                    selected ? "bg-surface-2" : "bg-surface hover:bg-surface-2/60"
                  }`}
                >
                  <span
                    className={`font-display text-[10px] tracking-[0.3em] md:text-xs ${
                      selected ? "text-accent" : "text-muted"
                    }`}
                    dir="ltr"
                  >
                    {tab.en.toUpperCase()}
                  </span>
                  <span className="text-base font-bold text-foreground md:text-lg">{tab.label}</span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-500 ${
                      selected ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            className="relative mt-8 grid overflow-hidden border border-border lg:grid-cols-5"
          >
            <div className="relative aspect-video lg:col-span-3 lg:aspect-auto lg:min-h-[480px]">
              <Image
                key={active.image + active.id}
                src={active.image}
                alt={active.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="animate-fade-up object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:to-background/30" />
            </div>
            <div
              key={active.id}
              className="animate-fade-up flex flex-col justify-center gap-6 bg-background p-6 md:p-10 lg:col-span-2"
            >
              <h3 className="text-balance text-2xl font-black text-foreground md:text-3xl">
                {active.title}
              </h3>
              <p className="leading-relaxed text-muted">{active.text}</p>
              <ul className="flex flex-col gap-3">
                {active.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-foreground">
                    <span className="size-1.5 bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

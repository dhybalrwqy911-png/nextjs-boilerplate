"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Category = "all" | "gov" | "civil" | "industry" | "danger";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "gov", label: "حكومي" },
  { id: "civil", label: "مدني" },
  { id: "industry", label: "صناعي" },
  { id: "danger", label: "مناطق خطرة" },
];

const categoryColor: Record<Exclude<Category, "all">, string> = {
  gov: "bg-sky-400",
  civil: "bg-olive-bright",
  industry: "bg-foreground",
  danger: "bg-accent",
};

// Placeholder coordinates (percent of map). Replace with real in-game locations.
const locations: {
  id: string;
  name: string;
  category: Exclude<Category, "all">;
  x: number;
  y: number;
  desc: string;
}[] = [
  { id: "pd", name: "مركز الشرطة", category: "gov", x: 42, y: 38, desc: "المقر الرئيسي لقسم الشرطة ومركز العمليات." },
  { id: "hospital", name: "المستشفى المركزي", category: "gov", x: 55, y: 45, desc: "مقر الإسعاف والطوارئ والرعاية الطبية." },
  { id: "government", name: "الإدارة الحكومية", category: "gov", x: 22, y: 25, desc: "موقع توضيحي لمقر الإدارة الحكومية." },
  { id: "city", name: "وسط المدينة", category: "civil", x: 48, y: 55, desc: "المتاجر، المقاهي، والحياة اليومية." },
  { id: "port", name: "الميناء", category: "civil", x: 75, y: 70, desc: "نقطة الشحن الرئيسية والتجارة البحرية." },
  { id: "mine", name: "منجم الجبل", category: "industry", x: 28, y: 68, desc: "موقع استخراج الموارد الخام." },
  { id: "factory", name: "المنطقة الصناعية", category: "industry", x: 66, y: 30, desc: "المصانع ومراكز التصنيع." },
  { id: "red", name: "المنطقة الحمراء", category: "danger", x: 82, y: 22, desc: "منطقة غير آمنة تنشط فيها العصابات." },
];

const locationProfiles: Record<string, { image: string; description: string; link?: { href: string; label: string } }> = {
  pd: { image: "/images/police-station-model.webp", description: "المقر الرئيسي لقسم الشرطة داخل المدينة. يستقبل المركز بلاغات السكان، ومنه ينسّق قسم العمليات تحرّك الدوريات ويتابع الحالات والتحقيقات داخل اللعبة.", link: { href: "/departments/police", label: "تعرّف على قسم الشرطة" } },
  hospital: { image: "/images/map-hospital.webp", description: "مقر الإسعاف والطوارئ في المدينة. يستقبل الحالات التي تنقلها فرق الإسعاف ويوفّر مساحة لسيناريوهات العلاج والمتابعة الطبية داخل السيرفر.", link: { href: "/departments/ems", label: "تعرّف على الإسعاف والطوارئ" } },
  government: { image: "/images/map-government.webp", description: "واجهة الإدارة الحكومية داخل المدينة. يمثل نقطة مراجعة للسكان للتعرّف على الجهات الرسمية والخدمات المدنية في عالم الرول بلاي.", link: { href: "/departments/government", label: "تعرّف على الإدارة الحكومية" } },
  city: { image: "/images/map-city.webp", description: "قلب الحياة اليومية في المدينة، وفيه تتجمع المتاجر والمقاهي والساحات العامة. مكان مناسب للقاء السكان وبدء السيناريوهات المدنية." },
  port: { image: "/images/map-port.webp", description: "واجهة المدينة البحرية، وتضم الأرصفة وساحات الشحن. يمثل الميناء نقطة لسيناريوهات نقل البضائع والتجارة البحرية داخل اللعبة." },
  mine: { image: "/images/map-mine.webp", description: "موقع جبلي يرتبط بوظائف استخراج الموارد الخام. تدخل المواد المستخرجة في سلسلة العمل بين التجميع والنقل والتصنيع.", link: { href: "/jobs", label: "استكشف الوظائف" } },
  factory: { image: "/images/map-factory.webp", description: "تضم المنطقة المصانع والمستودعات ومرافق تجهيز المواد. ترتبط بسيناريوهات التصنيع والعمل الصناعي ونقل المنتجات داخل المدينة.", link: { href: "/jobs", label: "استكشف الوظائف" } },
  red: { image: "/images/map-red.webp", description: "منطقة غير آمنة في عالم اللعبة تنشط فيها العصابات. ترتبط بسيناريوهات عالم الإجرام، وتظل قواعد الرول بلاي سارية فيها.", link: { href: "/news/contraband", label: "استكشف دليل أبو مهنا" } },
};

export function InteractiveMap() {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedId, setSelectedId] = useState(locations[0].id);

  const visible = locations.filter((l) => filter === "all" || l.category === filter);
  const selected = locations.find((l) => l.id === selectedId) ?? locations[0];

  const profile = locationProfiles[selected.id];
  const categoryLabel = categories.find((item) => item.id === selected.category)?.label;

  function changeFilter(category: Category) {
    setFilter(category);
    if (category !== "all" && selected.category !== category) {
      const first = locations.find((loc) => loc.category === category);
      if (first) setSelectedId(first.id);
    }
  }

  return (
    <section id="map" aria-labelledby="map-title" className="border-y border-border bg-[radial-gradient(ellipse_at_top,#25211b_0%,#111719_48%,#101619_100%)] py-8 md:py-24" style={{ "--accent": "#ff9a58" } as React.CSSProperties}>
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 md:gap-12 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="World Map"
          title="خريطة العالم"
          description="تعرّف على أهم المواقع قبل أن تبدأ رحلتك. المواقع الحالية مؤقتة وسيتم تحديثها مع إطلاق الخريطة الرسمية."
        />

        <Reveal className="grid gap-3 md:gap-4 lg:items-start lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="relative isolate row-start-2 aspect-[4/3] overflow-hidden rounded-lg border border-accent/35 bg-[#0b1012] shadow-[0_0_32px_#ff8a371a] md:aspect-[16/10] lg:row-start-auto">
            <Image
              src="/images/map.png"
              alt="خريطة طبوغرافية للجزيرة"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover opacity-90 contrast-125"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-35"
              style={{
                backgroundImage:
                  "linear-gradient(#789ea833 1px, transparent 1px), linear-gradient(90deg, #789ea833 1px, transparent 1px)",
                backgroundSize: "10% 10%",
              }}
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#070a0cc9_100%)]" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-0 border-t border-dashed border-accent/45" style={{ top: `${selected.y}%` }} />
              <div className="absolute inset-y-0 border-l border-dashed border-accent/45" style={{ left: `${selected.x}%` }} />
            </div>
            <div className="pointer-events-none absolute start-2 top-2 flex items-center gap-2 rounded-sm border border-accent/30 bg-[#0b1012]/90 px-2 py-1 text-xs font-bold text-accent md:start-4 md:top-4">
              <span aria-hidden="true" className="size-1.5 rotate-45 bg-accent" />
              خريطة الجزيرة
            </div>
            <div aria-label="الشمال أعلى الخريطة" className="pointer-events-none absolute end-2 top-2 flex size-9 flex-col items-center justify-center rounded-full border border-white/25 bg-[#0b1012]/90 text-[10px] leading-none text-foreground md:end-4 md:top-4 md:size-11">
              <span aria-hidden="true" className="text-base text-accent">↑</span>
              <span aria-hidden="true">N</span>
            </div>
            <ul className="absolute inset-0">
              {visible.map((loc) => {
                const isSelected = loc.id === selected.id;
                return (
                  <li
                    key={loc.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedId(loc.id)}
                      aria-pressed={isSelected}
                      aria-label={loc.name}
                      className="group relative flex size-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      {isSelected && <span aria-hidden="true" className="absolute size-8 rounded-full border border-accent/60 bg-accent/10 shadow-[0_0_18px_#ff8a3766]" />}
                      <span
                        className={`relative rounded-full ring-2 ring-background transition-all ${
                          isSelected ? "size-4 bg-accent" : `size-3 group-hover:size-4 ${categoryColor[loc.category]}`
                        }`}
                      />
                      <span
                        className={`pointer-events-none absolute bottom-full hidden md:block whitespace-nowrap border border-accent/35 bg-[#0b1012]/95 px-2 py-1 text-xs font-bold text-foreground transition-opacity ${
                          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                        }`}
                      >
                        {loc.name}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="pointer-events-none absolute inset-x-2 bottom-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 rounded-sm border border-white/15 bg-[#0b1012]/90 px-2 py-1.5 text-xs md:inset-x-4 md:bottom-4 md:px-3">
              <span className="font-bold text-foreground">{selected.name}</span>
              <bdi dir="ltr" className="font-mono text-accent">{`X${selected.x} · Y${selected.y}`}</bdi>
            </div>
          </div>

          <div className="contents lg:flex lg:min-w-0 lg:flex-col lg:gap-3 lg:rounded-xl lg:border lg:border-accent/20 lg:bg-[#0b1012]/80 lg:p-3">
            <div className="row-start-1 rounded-xl border border-border bg-background/80 p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-foreground">تصفية المواقع</h3>
                <span className="text-xs text-muted">{visible.length.toLocaleString("ar-SA")} مواقع</span>
              </div>
              <div role="group" aria-label="تصفية المواقع" className="grid grid-cols-3 gap-1.5">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={filter === category.id}
                    onClick={() => changeFilter(category.id)}
                    className={`min-h-11 rounded-lg border px-1 text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-accent ${category.id === "danger" ? "col-span-2" : ""} ${
                      filter === category.id
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border bg-surface text-foreground hover:border-accent/60"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <label className="grid gap-1 text-sm font-bold lg:hidden">
              اختر موقعًا
              <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)} className="min-h-11 w-full rounded-lg border border-border bg-background px-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-accent">
                {visible.map((loc) => <option key={loc.id} value={loc.id}>{loc.name}</option>)}
              </select>
            </label>

            <div aria-live="polite" className="overflow-hidden rounded-xl border border-accent/35 bg-background">
              <div className="grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-3 p-3">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-surface-2">
                  <Image src={profile.image} alt="" fill sizes="80px" className="object-cover" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-accent">
                    <span>{categoryLabel}</span>
                    <span dir="ltr">{`X${selected.x} · Y${selected.y}`}</span>
                  </div>
                  <h3 className="mt-1 font-black text-foreground">{selected.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{selected.desc}</p>
                </div>
              </div>
              <a href="#map-location-card" className="flex min-h-11 items-center justify-between gap-2 border-t border-accent/20 bg-accent/10 px-3 text-sm font-bold text-accent hover:bg-accent/20 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent">
                عرض صورة الموقع وتعريفه <span aria-hidden="true">↓</span>
              </a>
            </div>

            <ul aria-label="مواقع الخريطة" className="hidden gap-1 rounded-xl border border-border bg-background/80 p-1.5 lg:grid">
              {visible.map((loc) => {
                const active = loc.id === selectedId;
                return (
                  <li key={loc.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(loc.id)}
                      aria-pressed={active}
                      className={`flex min-h-11 w-full items-center gap-2 rounded-lg border px-3 py-2 text-start text-sm focus-visible:outline-2 focus-visible:outline-accent ${
                        active ? "border-accent/45 bg-accent/10 font-bold text-foreground" : "border-transparent text-muted hover:bg-surface-2 hover:text-foreground"
                      }`}
                    >
                      <span aria-hidden="true" className={`size-2 shrink-0 rounded-full ${categoryColor[loc.category]}`} />
                      <span className="flex-1">{loc.name}</span>
                      {active && <span aria-hidden="true" className="text-accent">✓</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <article id="map-location-card" aria-labelledby="map-location-title" className="scroll-mt-24 grid overflow-hidden border border-accent/30 bg-background md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" dir="rtl">
          <figure className="relative aspect-[4/3] min-w-0 bg-surface-2 md:aspect-auto md:min-h-72">
            <Image
              src={profile.image}
              alt={`مجسّم تصوّري لموقع ${selected.name}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
            <figcaption className="absolute bottom-3 right-3 bg-background/90 px-2 py-1 text-xs text-foreground">صورة تقريبية للموقع</figcaption>
          </figure>
          <div className="flex min-w-0 flex-col justify-center gap-3 p-4 md:p-8">
            <p className="text-xs font-bold text-accent">{categoryLabel}</p>
            <h3 id="map-location-title" className="text-2xl font-black md:text-3xl">{selected.name}</h3>
            <p className="text-sm leading-7 text-muted md:text-base md:leading-8">
              {profile.description}
            </p>
            {profile.link && <Link href={profile.link.href} className="inline-flex min-h-11 w-fit items-center gap-2 font-bold text-accent focus-visible:outline-2 focus-visible:outline-accent">
              {profile.link.label} <span aria-hidden="true">←</span>
            </Link>}
          </div>
        </article>
      </div>
    </section>
  );
}

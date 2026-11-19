"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MapPinIcon } from "./icons";
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
    <section id="map" aria-labelledby="map-title" className="border-y border-border bg-surface py-8 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 md:gap-12 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="World Map"
          title="خريطة العالم"
          description="تعرّف على أهم المواقع قبل أن تبدأ رحلتك. المواقع الحالية مؤقتة وسيتم تحديثها مع إطلاق الخريطة الرسمية."
        />

        <Reveal className="grid gap-3 md:gap-4 lg:grid-cols-[1fr_340px]">
          <div className="relative row-start-2 aspect-[4/3] md:row-start-auto overflow-hidden border border-border bg-background md:aspect-[16/10]">
            <Image
              src="/images/map.png"
              alt="خريطة طبوغرافية للجزيرة"
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover opacity-80"
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
                backgroundSize: "10% 10%",
              }}
            />
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
                      className="group relative flex size-8 items-center justify-center focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      <span className={`absolute size-3 rounded-full ${categoryColor[loc.category]} animate-ping-soft`} />
                      <span
                        className={`relative rounded-full ring-2 ring-background transition-all ${categoryColor[loc.category]} ${
                          isSelected ? "size-4" : "size-3 group-hover:size-4"
                        }`}
                      />
                      <span
                        className={`pointer-events-none absolute bottom-full hidden md:block mb-1 whitespace-nowrap bg-background/90 px-2 py-1 text-xs font-bold text-foreground transition-opacity ${
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
            <span className="absolute bottom-3 left-3 hidden md:inline font-display text-[10px] tracking-[0.3em] text-muted" dir="ltr">
              GRID REF · PLACEHOLDER
            </span>
          </div>

          <div className="contents md:flex md:flex-col md:gap-4">
            <div role="group" aria-label="تصفية المواقع" className="row-start-1 grid grid-cols-3 gap-1.5 md:flex md:flex-wrap md:gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={filter === c.id}
                  onClick={() => changeFilter(c.id)}
                  className={`min-h-11 border px-1 py-1 text-xs md:min-h-0 md:px-3 md:py-2 md:text-sm font-bold transition-colors ${
                    filter === c.id
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-foreground/80 hover:border-foreground/40"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <label className="grid gap-1 text-sm font-bold md:hidden">
              اختر موقعًا
              <select value={selectedId} onChange={(event) => setSelectedId(event.target.value)} className="min-h-11 w-full rounded-none border border-border bg-background px-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-accent">
                {visible.map((loc) => <option key={loc.id} value={loc.id}>{loc.name}</option>)}
              </select>
            </label>

            <div aria-live="polite" className="flex flex-col gap-1 border border-border bg-background p-3 md:gap-3 md:p-5">
              <div className="flex items-center gap-2 text-accent">
                <MapPinIcon className="size-5" />
                <span className="font-display text-xs tracking-[0.3em]" dir="ltr">
                  {`X${selected.x} · Y${selected.y}`}
                </span>
              </div>
              <h3 className="text-base font-black md:text-xl text-foreground">{selected.name}</h3>
              <p className="text-sm leading-relaxed text-muted md:text-base">{selected.desc}</p>
              <a href="#map-location-card" className="inline-flex min-h-11 w-fit items-center text-sm font-bold text-accent focus-visible:outline-2 focus-visible:outline-accent">عرض صورة الموقع وتعريفه ↓</a>
            </div>

            <ul className="hidden max-h-64 flex-col md:flex overflow-y-auto border border-border lg:max-h-none lg:flex-1">
              {visible.map((loc) => (
                <li key={loc.id} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setSelectedId(loc.id)}
                    aria-pressed={loc.id === selectedId}
                    className={`flex w-full items-center gap-3 px-4 py-3 text-right text-sm transition-colors ${
                      loc.id === selected.id ? "bg-surface-2 text-foreground" : "text-foreground/75 hover:bg-surface-2/60"
                    }`}
                  >
                    <span className={`size-2 rounded-full ${categoryColor[loc.category]}`} />
                    {loc.name}
                  </button>
                </li>
              ))}
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

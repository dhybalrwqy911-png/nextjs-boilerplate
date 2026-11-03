"use client";

import Image from "next/image";
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

export function InteractiveMap() {
  const [filter, setFilter] = useState<Category>("all");
  const [selectedId, setSelectedId] = useState(locations[0].id);

  const visible = locations.filter((l) => filter === "all" || l.category === filter);
  const selected = locations.find((l) => l.id === selectedId) ?? locations[0];

  return (
    <section id="map" aria-labelledby="map-title" className="border-y border-border bg-surface py-24 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading
          index="06"
          eyebrow="World Map"
          title="خريطة العالم"
          description="تعرّف على أهم المواقع قبل أن تبدأ رحلتك. المواقع الحالية مؤقتة وسيتم تحديثها مع إطلاق الخريطة الرسمية."
        />

        <Reveal className="grid gap-4 lg:grid-cols-[1fr_340px]">
          <div className="relative aspect-[4/3] overflow-hidden border border-border bg-background md:aspect-[16/10]">
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
                      className="group relative flex size-8 items-center justify-center"
                    >
                      <span className={`absolute size-3 rounded-full ${categoryColor[loc.category]} animate-ping-soft`} />
                      <span
                        className={`relative rounded-full ring-2 ring-background transition-all ${categoryColor[loc.category]} ${
                          isSelected ? "size-4" : "size-3 group-hover:size-4"
                        }`}
                      />
                      <span
                        className={`pointer-events-none absolute bottom-full mb-1 whitespace-nowrap bg-background/90 px-2 py-1 text-xs font-bold text-foreground transition-opacity ${
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
            <span className="absolute bottom-3 left-3 font-display text-[10px] tracking-[0.3em] text-muted" dir="ltr">
              GRID REF · PLACEHOLDER
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <div role="group" aria-label="تصفية المواقع" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={filter === c.id}
                  onClick={() => setFilter(c.id)}
                  className={`border px-3 py-2 text-sm font-bold transition-colors ${
                    filter === c.id
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-foreground/80 hover:border-foreground/40"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div aria-live="polite" className="flex flex-col gap-3 border border-border bg-background p-5">
              <div className="flex items-center gap-2 text-accent">
                <MapPinIcon className="size-5" />
                <span className="font-display text-xs tracking-[0.3em]" dir="ltr">
                  {`X${selected.x} · Y${selected.y}`}
                </span>
              </div>
              <h3 className="text-xl font-black text-foreground">{selected.name}</h3>
              <p className="leading-relaxed text-muted">{selected.desc}</p>
            </div>

            <ul className="flex max-h-64 flex-col overflow-y-auto border border-border lg:max-h-none lg:flex-1">
              {visible.map((loc) => (
                <li key={loc.id} className="border-b border-border last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setSelectedId(loc.id)}
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
      </div>
    </section>
  );
}

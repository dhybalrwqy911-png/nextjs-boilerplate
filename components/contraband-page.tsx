"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";

const locations = [
  {
    id: "gathering",
    title: "التجميع",
    name: "الأطراف الشمالية",
    position: { left: "28%", top: "27%" },
    dialogue: "هنا تبدأ السالفة. نقطة التجميع هي المكان اللي تستلم منه شخصيتك المواد الأولية داخل اللعبة. راجع وصف المادة في المخزون قبل تكمل.",
  },
  {
    id: "manufacturing",
    title: "التصنيع",
    name: "المنطقة الصناعية",
    position: { left: "56%", top: "48%" },
    dialogue: "المواد الخام لها محطة ثانية. نقطة التصنيع تحوّلها إلى سلعة داخل اللعبة، حسب الوصفات والشروط اللي يحددها السيرفر.",
  },
  {
    id: "sale",
    title: "البيع",
    name: "منطقة الميناء",
    position: { left: "73%", top: "74%" },
    dialogue: "هنا تحسب حسابك. واجهة التاجر داخل اللعبة تبيّن وش يقبل وكم يعطيك. احسب قيمة الصفقة بعد التكاليف عشان تعرف صافي العائد.",
  },
] as const;

const threats = [
  { title: "دوريات الشرطة", text: "قد تواجه تفتيشًا أو تحقيقًا بحسب قوانين القطاع. كمل الموقف بشخصيتك، وإذا عندك اعتراض ارفعه للدعم بعد انتهاء السيناريو." },
  { title: "العصابات المنافسة", text: "العصابات الثانية ممكن تنافسك على الموارد والصفقات والنفوذ. أي مواجهة أو ريد يخضع لقوانين السيرفر والسيناريو القائم." },
  { title: "أطراف ثانية في المدينة", text: "التاجر يحدد وش يقبله، وتغيّر السوق يؤثر على قيمة الصفقة. دخول أي طرف ثالث في مواجهة قائمة يخضع لقوانين الرول بلاي." },
];

export function ContrabandPage() {
  const [selectedId, setSelectedId] = useState<(typeof locations)[number]["id"]>("gathering");
  const location = locations.find((item) => item.id === selectedId) ?? locations[0];

  return (
    <PageShell compactOnMobile image="/images/abu-muhanna.webp" eyebrow="ABU MUHANNA" title="أبو مهنا · دليلك لعالم الإجرام" description="من أول نقطة تجميع إلى آخر صفقة داخل عالم الرول بلاي.">
      <section aria-labelledby="crime-map-title" className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-12">
        <Link href="/news" className="inline-flex min-h-11 items-center text-sm font-bold text-accent">العودة إلى الأخبار ←</Link>
        <div className="mt-3 grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="min-w-0 border border-border bg-surface p-3 md:p-5">
            <h2 id="crime-map-title" className="text-xl font-black md:text-2xl">خريطة الممنوعات</h2>
            <p className="mt-2 text-sm leading-6 text-foreground/75">المواقع المعروضة أمثلة توضيحية داخل اللعبة. المواقع الفعلية تظهر بعد اعتماد خريطة السيرفر.</p>
            <div className="relative isolate mt-4 aspect-[4/3] overflow-hidden border border-accent/30 bg-background sm:aspect-[16/10]" aria-label="نقاط التجميع والتصنيع والبيع">
              <Image src="/images/map.png" alt="" fill sizes="(min-width: 1024px) 65vw, 100vw" className="object-contain opacity-65" />
              <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
              {locations.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.title}
                  aria-pressed={selectedId === item.id}
                  aria-controls="muhanna-dialogue"
                  onClick={() => setSelectedId(item.id)}
                  style={item.position}
                  className={`absolute grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border text-base font-black shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${selectedId === item.id ? "border-accent bg-accent text-accent-foreground" : "border-accent/70 bg-background text-accent"}`}
                >
                  {(index + 1).toLocaleString("ar-SA")}
                </button>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2" aria-label="اختر محطة">
              {locations.map((item) => (
                <button key={item.id} type="button" aria-pressed={selectedId === item.id} aria-controls="muhanna-dialogue" onClick={() => setSelectedId(item.id)} className={`min-h-11 border px-1 py-2 text-sm font-bold focus-visible:outline-2 focus-visible:outline-accent ${selectedId === item.id ? "border-accent bg-accent/15 text-accent" : "border-border"}`}>
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <aside aria-labelledby="muhanna-title" className="overflow-hidden border border-accent/30 bg-surface lg:sticky lg:top-24">
            <div className="relative hidden aspect-[16/10] lg:block">
              <Image src="/images/abu-muhanna.webp" alt="أبو مهنا في مكتب الميناء" fill sizes="352px" className="object-cover object-left" />
            </div>
            <div className="p-4 md:p-5">
              <h2 id="muhanna-title" className="font-black text-accent">أبو مهنا</h2>
              <div id="muhanna-dialogue" aria-live="polite" aria-atomic="true">
                <h3 className="mt-2 text-lg font-bold">{location.title} · {location.name}</h3>
                <p className="mt-2 text-base leading-7 text-foreground/85">«{location.dialogue}»</p>
              </div>
            </div>
          </aside>
        </div>
        <details className="mt-4 border border-border bg-surface px-4">
          <summary className="min-h-11 cursor-pointer py-3 font-bold marker:text-accent">وش تعتبره اللعبة ممنوع؟</summary>
          <p className="pb-4 text-sm leading-7 text-foreground/85">أي غرض يصنّفه السيرفر كممنوع داخل الرول بلاي. شوف وصف الغرض وتعليمات السيرفر، وإذا التصنيف مو واضح اسأل الدعم قبل ما تبني عليه سيناريو.</p>
        </details>
        <section aria-labelledby="crime-threats-title" className="mt-8">
          <h2 id="crime-threats-title" className="text-2xl font-black">مين ممكن يوقف بوجهك؟</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {threats.map(({ title, text }) => (
              <article key={title} className="border border-border bg-surface p-4">
                <h3 className="font-bold text-accent">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/85">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <nav aria-label="أدلة مرتبطة" className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm font-bold text-accent">
          <Link className="inline-flex min-h-11 items-center" href="/news/economy-update">حاسبة السوق ←</Link>
          <Link className="inline-flex min-h-11 items-center" href="/news/gang-raids#raid-rules">قوانين الريد ←</Link>
          <Link className="inline-flex min-h-11 items-center" href="/rules/roleplay">قوانين الرول بلاي ←</Link>
        </nav>
      </section>
    </PageShell>
  );
}

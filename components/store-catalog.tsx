"use client";

import { useState } from "react";
import { ChevronDownIcon, ShieldIcon, StarIcon, UsersIcon } from "./icons";

const filters = [
  { id: "all", label: "الكل" },
  { id: "support", label: "الدعم" },
  { id: "community", label: "المجتمع" },
] as const;

const products = [
  {
    title: "دعم السيرفر",
    category: "support",
    description: "مساهمة في تغطية تكاليف تشغيل السيرفر.",
    details: "باقة مقترحة لدعم الاستضافة والتشغيل. تُحدد قيمة المساهمة وآلية الدعم عند اعتماد الباقة.",
    Icon: ShieldIcon,
  },
  {
    title: "دعم التطوير",
    category: "support",
    description: "مساهمة في تطوير الأنظمة وتحسين تجربة اللاعبين.",
    details: "باقة مقترحة لدعم أعمال التطوير والصيانة. تُعلن تفاصيل الباقة بعد اعتمادها.",
    Icon: StarIcon,
  },
  {
    title: "شارة الداعم",
    category: "community",
    description: "شارة تقدير داخل مجتمع عرب ريفورجر.",
    details: "فكرة تقديرية تظهر في المجتمع. الشارة المقترحة تجميلية ومن دون تأثير على اللعب أو صلاحياته.",
    Icon: UsersIcon,
  },
] as const;

export function StoreCatalog() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const visibleProducts = products.filter((product) => filter === "all" || product.category === filter);

  return (
    <section aria-labelledby="catalog-title" className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 id="catalog-title" className="text-xl font-black md:text-2xl">الباقات المقترحة</h2>
        <div role="group" aria-label="تصنيف الباقات" className="flex flex-wrap gap-2">
          {filters.map(({ id, label }) => (
            <button key={id} type="button" aria-pressed={filter === id} onClick={() => setFilter(id)}
              className="min-h-11 rounded border border-border px-4 text-sm font-bold hover:border-accent focus-visible:outline-2 focus-visible:outline-accent aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-accent-foreground">
              {label}
            </button>
          ))}
        </div>
      </div>

      <ul className="grid items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map(({ title, description, details, Icon }) => (
          <li key={title} className="overflow-hidden rounded-md border border-border bg-surface">
            <div className="flex gap-3 p-4 md:p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded bg-accent/10 text-accent"><Icon aria-hidden="true" className="size-5" /></span>
              <div>
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
              </div>
            </div>
            <details className="group border-t border-border">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 px-4 text-sm font-bold text-accent focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                تفاصيل الباقة <ChevronDownIcon aria-hidden="true" className="size-4 group-open:rotate-180" />
              </summary>
              <p className="px-4 pb-4 text-sm leading-6 text-muted">{details}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

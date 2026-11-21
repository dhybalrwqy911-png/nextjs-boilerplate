"use client";

import { sectionTheme } from "@/lib/section-theme";
import Link from "next/link";
import { useState } from "react";
import { ruleCategories } from "@/lib/rules";

function CategoryIcon({ id }: { id: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-5 md:size-7">
    {id === "discord" ? <><path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2Z"/><path d="M7 9h10M7 13h6"/></> : (id === "roleplay" || id === "police") ? <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/><path d="m8 12 3 3 5-6"/></> : id === "ems" ? <><path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z"/></> : id === "jobs" ? <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a24 24 0 0 0 18 0M12 11v4"/></> : <><circle cx="12" cy="7" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3M5 5a3 3 0 0 0 0 6M19 5a3 3 0 0 1 0 6M2 20v-3a4 4 0 0 1 3-4M22 20v-3a4 4 0 0 0-3-4"/></>}
  </svg>;
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Rules({ categoryId }: { categoryId?: string }) {
  const [query, setQuery] = useState("");
  const category = ruleCategories.find(c => c.id === categoryId);
  const normalizedQuery = query.trim().toLocaleLowerCase("ar");
  const categories = ruleCategories.filter(c => `${c.title} ${c.description} ${c.english}`.toLocaleLowerCase("ar").includes(normalizedQuery));
  const sections = category?.sections.map(s => ({ ...s, rules: s.rules.map((text, index) => ({ text, index })).filter(r => `${s.title} ${r.text}`.toLocaleLowerCase("ar").includes(normalizedQuery)) })).filter(s => s.rules.length > 0) ?? [];

  return <div className="bg-background pb-8 pt-20 md:pb-12 md:pt-24">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <nav aria-label="مسار التصفح" className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted md:mb-4 md:gap-3">
        <Link href="/" className={`hover:text-foreground ${focus}`}>الرئيسية</Link><span aria-hidden="true">/</span>
        {category ? <><Link href="/rules" className={`hover:text-foreground ${focus}`}>مركز القوانين</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-foreground">{category.title}</span></> : <span aria-current="page" className="text-foreground">مركز القوانين</span>}
      </nav>

      <header className="relative overflow-hidden border border-border bg-surface p-4 md:p-6">
        <span aria-hidden="true" className="absolute inset-y-0 right-0 w-1 bg-accent" />
        <p className="mb-4 hidden font-display text-xs tracking-[0.3em] md:block text-accent" dir="ltr">COMMUNITY RULEBOOK {category ? ` / ${category.english}` : ""}</p>
        <h1 className="text-2xl font-black leading-tight md:text-3xl">{category?.title ?? "مركز القوانين"}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">{category?.description ?? "كل قسم له مرجعه الخاص. اختر القسم للوصول إلى قوانينه الكاملة والجهة المسؤولة عنه."}</p>
        {!(category ? category.sections.length : ruleCategories.some(c => c.sections.length)) && <span className="mt-3 inline-flex md:mt-6 items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-bold text-accent"><span className="size-1.5 rounded-full bg-accent"/>بانتظار إضافة القوانين المعتمدة</span>}
      </header>

      {!category ? <>
        <div className="mb-3 mt-5 flex flex-col justify-between gap-2 md:gap-4 sm:flex-row sm:items-end">
          <div><h2 className="text-lg font-bold md:text-2xl">أقسام القوانين</h2><p className="mt-2 hidden text-sm text-muted md:block">{ruleCategories.length.toLocaleString("ar-SA")} أقسام مستقلة، للوصول إلى المعلومة بسهولة.</p></div>
          <div className="w-full sm:max-w-xs"><label htmlFor="category-search" className="mb-2 block text-sm text-muted">ابحث عن قسم</label><input id="category-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="مثال: الديسكورد" className={`w-full border border-border bg-surface px-3 py-2.5 text-base md:px-4 md:py-3 text-foreground placeholder:text-muted ${focus}`}/></div>
        </div>
        <div className="grid gap-2 md:gap-5 lg:grid-cols-3">
          {categories.map((c) => <Link key={c.id} href={`/rules/${c.id}`} data-section-theme={sectionTheme(`/rules/${c.id}`)} className={`section-card group grid min-h-16 min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 border border-border bg-surface p-3 md:flex md:flex-col md:items-stretch md:p-4 transition-colors hover:border-accent/70 ${focus}`}>
            <div className="flex items-center justify-between max-md:col-start-1 max-md:row-start-1 max-md:row-end-3 md:mb-3"><span className="flex size-9 items-center md:size-10 justify-center border border-accent/30 bg-accent/10 text-accent"><CategoryIcon id={c.id}/></span><span className="hidden font-display text-xs tracking-[0.2em] text-muted md:inline" dir="ltr">{c.english}</span></div>
            <h3 className="col-start-2 row-start-1 text-base font-bold leading-snug md:text-lg">{c.title}</h3><p className="col-start-2 row-start-2 text-xs leading-relaxed text-muted md:mt-1 md:flex-1 md:text-sm md:leading-7">{c.description}</p>
            <div className="col-start-3 row-start-1 row-end-3 flex items-center justify-between gap-3 md:mt-3"><span className="hidden text-xs text-muted md:inline">{c.sections.length ? "القوانين منشورة" : "القوانين قيد الإضافة"}</span><span aria-hidden="true" className="text-sm font-bold text-accent"><span className="hidden md:inline">عرض القسم </span>←</span></div>
          </Link>)}
        </div>
        {categories.length === 0 && <div role="status" className="border border-dashed border-border p-10 text-center text-muted">لا يوجد قسم يطابق بحثك.<button onClick={() => setQuery("")} className={`mx-auto mt-4 block text-accent ${focus}`}>عرض جميع الأقسام</button></div>}
      </> : <div className="mt-4 grid items-start gap-4 md:mt-5 md:gap-4 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <aside className="order-last rounded-lg border border-border bg-surface lg:sticky lg:top-24 lg:order-none">
          <nav aria-labelledby="rule-category-navigation" className="p-4">
            <h2 id="rule-category-navigation" className="mb-3 text-sm font-bold">الانتقال بين الأقسام</h2>
            <ul className="grid gap-1 sm:grid-cols-2 lg:grid-cols-1">
              {ruleCategories.map(item => (
                <li key={item.id}>
                  <Link
                    href={`/rules/${item.id}`}
                    aria-current={item.id === category.id ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded border px-3 py-2 text-sm ${item.id === category.id ? "border-accent/40 bg-accent/10 text-accent" : "border-transparent text-muted hover:bg-white/5 hover:text-foreground"} ${focus}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <dl className="space-y-2 border-t border-border p-4 text-xs text-muted">
            <div>
              <dt>المسؤول عن القسم</dt>
              <dd className="mt-1 text-sm font-bold text-foreground">{category.owner ?? "لم يُحدّد بعد"}</dd>
            </div>
            {category.updatedAt && (
              <div className="flex flex-wrap gap-x-2">
                <dt>آخر تحديث</dt>
                <dd>{category.updatedAt}</dd>
              </div>
            )}
          </dl>
        </aside>
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap md:mb-5 items-center justify-between gap-3"><h2 className="text-2xl font-bold">القوانين الكاملة</h2><Link href="/rules" className={`text-sm text-accent ${focus}`}>جميع أقسام القوانين ←</Link></div>
          {category.sections.length === 0 ? <section className="flex flex-col items-center justify-center border border-dashed border-accent/35 bg-surface px-4 py-6 text-center md:px-6 md:py-8"><span className="mb-5 text-accent"><CategoryIcon id={category.id}/></span><h3 className="text-xl font-bold">قوانين هذا القسم بانتظار الإضافة</h3><p className="mt-4 max-w-md text-sm leading-8 text-muted">ستظهر هنا النسخة الكاملة من {category.title} بعد اعتمادها، مع ترتيب المواد وتوضيح الجهة المسؤولة عنها.</p><p className="mt-6 hidden text-xs text-muted md:block">لا توجد قوانين منشورة في هذا القسم حاليًا.</p></section> : <>
            <label htmlFor="rules-search" className="mb-2 block text-sm text-muted">بحث داخل قوانين القسم</label><input id="rules-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="ابحث بكلمة من القانون" className={`mb-6 w-full border border-border bg-surface px-4 py-3 ${focus}`}/>
            <div className="grid gap-4 lg:grid-cols-2">
              {sections.map(section => (
                <section id={section.id} key={section.id} className="flex min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-xl border border-accent/40 bg-surface lg:last:odd:col-span-2">
                  <h3 className="flex min-h-14 items-center gap-2 border-b border-border bg-accent/10 px-4 py-3 text-base font-bold leading-6 text-accent">
                    <CategoryIcon id={category.id} />
                    {section.title}
                  </h3>
                  <ol className="flex flex-1 flex-col divide-y divide-border">
                    {section.rules.map(({ index, text }) => {
                      const titleEnd = text.indexOf("\n");

                      return (
                        <li key={index} value={index + 1} className="flex grow items-start gap-2.5 px-4 py-2.5">
                          <span aria-hidden="true" className="mt-0.5 grid min-w-6 shrink-0 place-items-center rounded bg-accent/10 px-1 text-sm font-bold text-accent">
                            {(index + 1).toLocaleString("ar-SA")}
                          </span>
                          <div className="min-w-0 leading-7">
                            {titleEnd >= 0 && category.id !== "discord" && <h4 className="font-bold text-accent">{text.slice(0, titleEnd)}</h4>}
                            <p className="whitespace-pre-line break-words text-sm text-foreground md:text-base">{titleEnd < 0 ? text : text.slice(titleEnd + 1)}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </section>
              ))}
            </div>
            {sections.length === 0 && <p role="status" className="border border-border p-8 text-center text-muted">لا توجد قوانين تطابق البحث.</p>}
          </>}
        </div>
      </div>}
    </div>
  </div>;
}

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

  return <div className="min-h-[70vh] bg-background pb-10 pt-20 md:pb-20 md:pt-36">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <nav aria-label="مسار التصفح" className="mb-3 flex flex-wrap items-center gap-2 text-sm text-muted md:mb-8 md:gap-3">
        <Link href="/" className={`hover:text-foreground ${focus}`}>الرئيسية</Link><span aria-hidden="true">/</span>
        {category ? <><Link href="/rules" className={`hover:text-foreground ${focus}`}>مركز القوانين</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-foreground">{category.title}</span></> : <span aria-current="page" className="text-foreground">مركز القوانين</span>}
      </nav>

      <header className="relative overflow-hidden border border-border bg-surface p-4 md:p-12">
        <span aria-hidden="true" className="absolute inset-y-0 right-0 w-1 bg-accent" />
        <p className="mb-4 hidden font-display text-xs tracking-[0.3em] md:block text-accent" dir="ltr">COMMUNITY RULEBOOK {category ? ` / ${category.english}` : ""}</p>
        <h1 className="text-2xl font-black leading-tight md:text-5xl md:leading-relaxed">{category?.title ?? "مركز القوانين"}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:mt-4 md:text-lg md:leading-8">{category?.description ?? "كل قسم له مرجعه الخاص. اختر القسم للوصول إلى قوانينه الكاملة والجهة المسؤولة عنه."}</p>
        {!(category ? category.sections.length : ruleCategories.some(c => c.sections.length)) && <span className="mt-3 inline-flex md:mt-6 items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-bold text-accent"><span className="size-1.5 rounded-full bg-accent"/>بانتظار إضافة القوانين المعتمدة</span>}
      </header>

      {!category ? <>
        <div className="mb-3 mt-5 flex flex-col justify-between gap-2 md:mb-7 md:mt-12 md:gap-5 sm:flex-row sm:items-end">
          <div><h2 className="text-lg font-bold md:text-2xl">أقسام القوانين</h2><p className="mt-2 hidden text-sm text-muted md:block">{ruleCategories.length.toLocaleString("ar-SA")} أقسام مستقلة، للوصول إلى المعلومة بسهولة.</p></div>
          <div className="w-full sm:max-w-xs"><label htmlFor="category-search" className="mb-2 block text-sm text-muted">ابحث عن قسم</label><input id="category-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="مثال: الديسكورد" className={`w-full border border-border bg-surface px-3 py-2.5 text-base md:px-4 md:py-3 text-foreground placeholder:text-muted ${focus}`}/></div>
        </div>
        <div className="grid gap-2 md:gap-5 lg:grid-cols-3">
          {categories.map((c) => <Link key={c.id} href={`/rules/${c.id}`} data-section-theme={sectionTheme(`/rules/${c.id}`)} className={`section-card group grid min-h-16 min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 border border-border bg-surface p-3 md:flex md:flex-col md:items-stretch md:p-7 transition-colors hover:border-accent/70 ${focus}`}>
            <div className="flex items-center justify-between max-md:col-start-1 max-md:row-start-1 max-md:row-end-3 md:mb-7"><span className="flex size-9 items-center md:size-14 justify-center border border-accent/30 bg-accent/10 text-accent"><CategoryIcon id={c.id}/></span><span className="hidden font-display text-xs tracking-[0.2em] text-muted md:inline" dir="ltr">{c.english}</span></div>
            <h3 className="col-start-2 row-start-1 text-base font-bold leading-snug md:text-2xl md:leading-8">{c.title}</h3><p className="col-start-2 row-start-2 text-xs leading-relaxed text-muted md:mt-3 md:flex-1 md:text-sm md:leading-7">{c.description}</p>
            <div className="mt-7 hidden border-t border-border pt-5 md:block"><span className="block text-xs text-muted">المسؤول عن القسم</span><span className="mt-2 block text-sm font-semibold">{c.owner ?? "لم يُحدّد بعد"}</span></div>
            <div className="col-start-3 row-start-1 row-end-3 flex items-center justify-between gap-3 md:mt-6"><span className="hidden text-xs text-muted md:inline">{c.sections.length ? "القوانين منشورة" : "القوانين قيد الإضافة"}</span><span aria-hidden="true" className="text-sm font-bold text-accent"><span className="hidden md:inline">عرض القسم </span>←</span></div>
          </Link>)}
        </div>
        {categories.length === 0 && <div role="status" className="border border-dashed border-border p-10 text-center text-muted">لا يوجد قسم يطابق بحثك.<button onClick={() => setQuery("")} className={`mx-auto mt-4 block text-accent ${focus}`}>عرض جميع الأقسام</button></div>}
        <div className="mt-8 hidden border border-border p-6 text-sm leading-7 text-muted md:block">ستظهر القوانين الكاملة وأسماء المسؤولين داخل أقسامها بعد اعتمادها وإضافتها.</div>
      </> : <div className="mt-4 grid items-start gap-4 md:mt-10 md:gap-7 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="order-last space-y-3 lg:order-none lg:space-y-5 lg:sticky lg:top-24">
          <nav aria-label="أقسام القوانين" className="border border-border bg-surface p-5"><h2 className="mb-4 text-sm font-bold">الانتقال بين الأقسام</h2><div className="flex flex-col gap-2">{ruleCategories.map(c => <Link key={c.id} href={`/rules/${c.id}`} aria-current={c.id === category.id ? "page" : undefined} className={`border px-4 py-3 text-sm ${c.id === category.id ? "border-accent/40 bg-accent/10 text-accent" : "border-transparent text-muted hover:bg-white/5 hover:text-foreground"} ${focus}`}>{c.title}</Link>)}</div></nav>
          <section aria-labelledby="rules-owner" className="border border-border bg-surface p-5"><h2 id="rules-owner" className="text-xs text-muted">المسؤول عن القسم</h2><p className="mt-3 font-bold">{category.owner ?? "لم يُحدّد بعد"}</p><p className="mt-5 border-t border-border pt-4 text-xs leading-6 text-muted">آخر تحديث: {category.updatedAt ?? "لم تُنشر القوانين بعد"}</p></section>
          {category.sections.length > 0 && <nav aria-label="فهرس القوانين" className="hidden border lg:block border-border p-5"><h2 className="mb-4 text-sm font-bold">فهرس القسم</h2>{category.sections.map(s => <a key={s.id} href={`#${s.id}`} className={`block py-2 text-sm text-muted hover:text-foreground ${focus}`}>{s.title}</a>)}</nav>}
        </aside>
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap md:mb-5 items-center justify-between gap-3"><h2 className="text-2xl font-bold">القوانين الكاملة</h2><Link href="/rules" className={`text-sm text-accent ${focus}`}>جميع أقسام القوانين ←</Link></div>
          {category.sections.length === 0 ? <section className="flex flex-col items-center justify-center border border-dashed border-accent/35 bg-surface px-4 py-6 text-center md:min-h-80 md:px-6 md:py-14"><span className="mb-5 text-accent"><CategoryIcon id={category.id}/></span><h3 className="text-xl font-bold">قوانين هذا القسم بانتظار الإضافة</h3><p className="mt-4 max-w-md text-sm leading-8 text-muted">ستظهر هنا النسخة الكاملة من {category.title} بعد اعتمادها، مع ترتيب المواد وتوضيح الجهة المسؤولة عنها.</p><p className="mt-6 hidden text-xs text-muted md:block">لا توجد قوانين منشورة في هذا القسم حاليًا.</p></section> : <>
            <label htmlFor="rules-search" className="mb-2 block text-sm text-muted">بحث داخل قوانين القسم</label><input id="rules-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="ابحث بكلمة من القانون" className={`mb-6 w-full border border-border bg-surface px-4 py-3 ${focus}`}/>
            {sections.length > 0 && <details open className="mb-4 border border-border px-3 lg:hidden"><summary className="min-h-11 cursor-pointer py-3 text-sm font-bold text-foreground marker:text-accent">فهرس القسم</summary><nav aria-label="فهرس القسم"><ul>{sections.map(s => <li key={s.id}><a href={`#${s.id}`} className={`flex min-h-11 items-center text-sm text-accent ${focus}`}>{s.title}</a></li>)}</ul></nav></details>}
            {sections.map(s => <section id={s.id} key={s.id} className="mb-3 scroll-mt-24 border border-border bg-surface p-3 md:mb-6 md:scroll-mt-28 md:p-6"><h3 className="mb-3 text-lg font-bold md:mb-5 md:text-xl">{s.title}</h3><ol className="space-y-3 md:space-y-4">{s.rules.map(r => <li key={r.index} className="flex gap-2 border-t border-border pt-3 md:gap-4 md:pt-4"><span className="font-display text-accent">{r.index + 1}.</span><p className="min-w-0 text-base leading-relaxed text-foreground/90 md:leading-8 md:text-foreground/80">{r.text.includes("\n") ? <><strong className="block text-foreground">{r.text.slice(0, r.text.indexOf("\n"))}</strong>{r.text.slice(r.text.indexOf("\n") + 1)}</> : r.text}</p></li>)}</ol></section>)}
            {sections.length === 0 && <p role="status" className="border border-border p-8 text-center text-muted">لا توجد قوانين تطابق البحث.</p>}
          </>}
        </div>
      </div>}
    </div>
  </div>;
}

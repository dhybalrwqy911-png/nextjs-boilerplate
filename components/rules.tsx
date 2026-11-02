"use client";

import Link from "next/link";
import { useState } from "react";
import { ruleCategories } from "@/lib/rules";

function CategoryIcon({ id }: { id: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-7">
    {id === "discord" ? <><path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-6 4V6a2 2 0 0 1 2-2Z"/><path d="M7 9h10M7 13h6"/></> : id === "roleplay" ? <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/><path d="m8 12 3 3 5-6"/></> : <><circle cx="12" cy="7" r="3"/><path d="M6 21v-3a6 6 0 0 1 12 0v3M5 5a3 3 0 0 0 0 6M19 5a3 3 0 0 1 0 6M2 20v-3a4 4 0 0 1 3-4M22 20v-3a4 4 0 0 0-3-4"/></>}
  </svg>;
}

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function Rules({ categoryId }: { categoryId?: string }) {
  const [query, setQuery] = useState("");
  const category = ruleCategories.find(c => c.id === categoryId);
  const normalizedQuery = query.trim().toLocaleLowerCase("ar");
  const categories = ruleCategories.filter(c => `${c.title} ${c.description} ${c.english}`.toLocaleLowerCase("ar").includes(normalizedQuery));
  const sections = category?.sections.map(s => ({ ...s, rules: s.rules.map((text, index) => ({ text, index })).filter(r => `${s.title} ${r.text}`.toLocaleLowerCase("ar").includes(normalizedQuery)) })).filter(s => s.rules.length > 0) ?? [];

  return <div className="min-h-[70vh] bg-background pb-20 pt-28 md:pt-36">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <nav aria-label="مسار التصفح" className="mb-8 flex flex-wrap items-center gap-3 text-sm text-muted">
        <Link href="/" className={`hover:text-foreground ${focus}`}>الرئيسية</Link><span aria-hidden="true">/</span>
        {category ? <><Link href="/rules" className={`hover:text-foreground ${focus}`}>مركز القوانين</Link><span aria-hidden="true">/</span><span aria-current="page" className="text-foreground">{category.title}</span></> : <span aria-current="page" className="text-foreground">مركز القوانين</span>}
      </nav>

      <header className="relative overflow-hidden border border-border bg-surface p-7 md:p-12">
        <span aria-hidden="true" className="absolute inset-y-0 right-0 w-1 bg-[#c49b54]" />
        <p className="mb-4 font-display text-xs tracking-[0.3em] text-[#c49b54]" dir="ltr">COMMUNITY RULEBOOK {category ? ` / ${category.english}` : ""}</p>
        <h1 className="text-3xl font-black leading-relaxed md:text-5xl">{category?.title ?? "مركز القوانين"}</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted md:text-lg">{category?.description ?? "كل قسم له مرجعه الخاص. اختر القسم للوصول إلى قوانينه الكاملة والجهة المسؤولة عنه."}</p>
        <span className="mt-6 inline-flex items-center gap-2 border border-[#c49b54]/30 bg-[#c49b54]/10 px-3 py-2 text-xs font-bold text-[#ddbb80]"><span className="size-1.5 rounded-full bg-[#c49b54]"/>بانتظار إضافة القوانين المعتمدة</span>
      </header>

      {!category ? <>
        <div className="mb-7 mt-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><h2 className="text-2xl font-bold">أقسام القوانين</h2><p className="mt-2 text-sm text-muted">ثلاثة أقسام مستقلة، للوصول إلى المعلومة بسهولة.</p></div>
          <div className="w-full sm:max-w-xs"><label htmlFor="category-search" className="mb-2 block text-sm text-muted">ابحث عن قسم</label><input id="category-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="مثال: الديسكورد" className={`w-full border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted ${focus}`}/></div>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {categories.map((c) => <Link key={c.id} href={`/rules/${c.id}`} className={`group flex min-w-0 flex-col border border-border bg-surface p-7 transition-colors hover:border-[#c49b54]/70 ${focus}`}>
            <div className="mb-7 flex items-center justify-between"><span className="flex size-14 items-center justify-center border border-[#c49b54]/30 bg-[#c49b54]/10 text-[#c49b54]"><CategoryIcon id={c.id}/></span><span className="font-display text-xs tracking-[0.2em] text-muted" dir="ltr">{c.english}</span></div>
            <h3 className="text-2xl font-bold">{c.title}</h3><p className="mt-3 flex-1 text-sm leading-7 text-muted">{c.description}</p>
            <div className="mt-7 border-t border-border pt-5"><span className="block text-xs text-muted">المسؤول عن القسم</span><span className="mt-2 block text-sm font-semibold">{c.owner ?? "لم يُحدّد بعد"}</span></div>
            <div className="mt-6 flex items-center justify-between gap-3"><span className="text-xs text-muted">القوانين قيد الإضافة</span><span className="text-sm font-bold text-[#c49b54]">عرض القسم ←</span></div>
          </Link>)}
        </div>
        {categories.length === 0 && <div role="status" className="border border-dashed border-border p-10 text-center text-muted">لا يوجد قسم يطابق بحثك.<button onClick={() => setQuery("")} className={`mx-auto mt-4 block text-accent ${focus}`}>عرض جميع الأقسام</button></div>}
        <div className="mt-8 border border-border p-6 text-sm leading-7 text-muted">ستظهر القوانين الكاملة وأسماء المسؤولين داخل أقسامها بعد اعتمادها وإضافتها.</div>
      </> : <div className="mt-10 grid items-start gap-7 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-24">
          <nav aria-label="أقسام القوانين" className="border border-border bg-surface p-5"><h2 className="mb-4 text-sm font-bold">الانتقال بين الأقسام</h2><div className="flex flex-col gap-2">{ruleCategories.map(c => <Link key={c.id} href={`/rules/${c.id}`} aria-current={c.id === category.id ? "page" : undefined} className={`border px-4 py-3 text-sm ${c.id === category.id ? "border-[#c49b54]/40 bg-[#c49b54]/10 text-[#ddbb80]" : "border-transparent text-muted hover:bg-white/5 hover:text-foreground"} ${focus}`}>{c.title}</Link>)}</div></nav>
          <section aria-labelledby="rules-owner" className="border border-border bg-surface p-5"><h2 id="rules-owner" className="text-xs text-muted">المسؤول عن القسم</h2><p className="mt-3 font-bold">{category.owner ?? "لم يُحدّد بعد"}</p><p className="mt-5 border-t border-border pt-4 text-xs leading-6 text-muted">آخر تحديث: {category.updatedAt ?? "لم تُنشر القوانين بعد"}</p></section>
          {category.sections.length > 0 && <nav aria-label="فهرس القوانين" className="border border-border p-5"><h2 className="mb-4 text-sm font-bold">فهرس القسم</h2>{category.sections.map(s => <a key={s.id} href={`#${s.id}`} className={`block py-2 text-sm text-muted hover:text-foreground ${focus}`}>{s.title}</a>)}</nav>}
        </aside>
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3"><h2 className="text-2xl font-bold">القوانين الكاملة</h2><Link href="/rules" className={`text-sm text-[#c49b54] ${focus}`}>جميع أقسام القوانين ←</Link></div>
          {category.sections.length === 0 ? <section className="flex min-h-80 flex-col items-center justify-center border border-dashed border-[#c49b54]/35 bg-surface px-6 py-14 text-center"><span className="mb-5 text-[#c49b54]"><CategoryIcon id={category.id}/></span><h3 className="text-xl font-bold">قوانين هذا القسم بانتظار الإضافة</h3><p className="mt-4 max-w-md text-sm leading-8 text-muted">ستظهر هنا النسخة الكاملة من {category.title} بعد اعتمادها، مع ترتيب المواد وتوضيح الجهة المسؤولة عنها.</p><p className="mt-6 text-xs text-muted">لا توجد قوانين منشورة في هذا القسم حاليًا.</p></section> : <>
            <label htmlFor="rules-search" className="mb-2 block text-sm text-muted">بحث داخل قوانين القسم</label><input id="rules-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="ابحث بكلمة من القانون" className={`mb-6 w-full border border-border bg-surface px-4 py-3 ${focus}`}/>
            {sections.map(s => <section id={s.id} key={s.id} className="mb-6 scroll-mt-28 border border-border bg-surface p-6"><h3 className="mb-5 text-xl font-bold">{s.title}</h3><ol className="space-y-4">{s.rules.map(r => <li key={r.index} className="flex gap-4 border-t border-border pt-4"><span className="font-display text-[#c49b54]">{r.index + 1}.</span><p className="leading-8 text-foreground/80">{r.text}</p></li>)}</ol></section>)}
            {sections.length === 0 && <p role="status" className="border border-border p-8 text-center text-muted">لا توجد قوانين تطابق البحث.</p>}
          </>}
        </div>
      </div>}
    </div>
  </div>;
}

"use client";

import { useState } from "react";
import Link from "next/link";

const stages = [
  { title: "انتظار التفعيل", label: "قبل الريد", text: "يتكرر الريد مرتين خلال الأسبوع، بأوقات غير ثابتة. هذه الصفحة تشرح النظام ولا تعرض حالة تفعيله الآن.", attacker: "الريد غير مفعّل", defender: "الريد غير مفعّل", progress: 0 },
  { title: "بداية الريد", label: "فتح المواجهة", text: "عند تفعيل الريد تبدأ نافذة المواجهة المحددة بين العصابات. الطرف المهاجم يسعى للوصول إلى أغراض العصابة المنافسة، والطرف المدافع يحاول حمايتها.", attacker: "محاولة الوصول للأغراض", defender: "حماية أغراض العصابة", progress: 33 },
  { title: "المواجهة والسلب", label: "وقت محدود", text: "تدور المواجهة خلال مدة الريد فقط، ويكون الهدف سلب أغراض العصابة الأخرى وفق التفاصيل المعتمدة. نوع الأغراض المسموحة وحدود السلب ستُوضح عند اعتمادها.", attacker: "سلب الأغراض المسموحة", defender: "منع خسارة الأغراض", progress: 66 },
  { title: "انتهاء الريد", label: "نهاية النافذة", text: "بانتهاء المدة ينتهي الريد، حتى لو لم يصل أحد الطرفين إلى هدفه. الريد نافذة مواجهة مؤقتة، وليس قتالًا مفتوحًا بلا نهاية.", attacker: "انتهت نافذة الريد", defender: "انتهت نافذة الريد", progress: 100 },
];

export function RaidGuide() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
    <dl className="grid gap-4 sm:grid-cols-3">
      {[["02", "مرتين في الأسبوع", "عدد مرات تفعيل النظام أسبوعيًا"], ["غير ثابتة", "أوقات التفعيل", "لا يرتبط بيوم أو ساعة ثابتة"], ["محدودة", "مدة المواجهة", "ينتهي الريد عند انتهاء الوقت"]].map(([value,title,text]) => <div key={title} className="border border-accent/25 bg-surface p-6"><dd className="font-display text-3xl font-bold text-accent">{value}</dd><dt className="mt-3 text-xl font-bold">{title}</dt><dd className="mt-2 text-sm leading-7 text-muted">{text}</dd></div>)}
    </dl>
    <section aria-labelledby="raid-intro" className="py-14">
      <span className="text-xs font-bold tracking-widest text-accent">GANG RAID · دليل العصابات</span>
      <h2 id="raid-intro" className="mt-4 text-3xl font-black md:text-5xl">وش هو نظام الريد؟</h2>
      <p className="mt-6 max-w-4xl text-lg leading-9 text-muted">الريد مواجهة مؤقتة بين عصابات السيرفر داخل عالم الرول بلاي. فكرته أن تحاول عصابة سلب أغراض عصابة أخرى خلال وقت محدد، بينما تحاول العصابة المستهدفة الدفاع عن أغراضها. يتكرر النظام مرتين بالأسبوع في أوقات غير ثابتة، وتنتهي المواجهة بانتهاء مدتها.</p>
    </section>
    <section aria-labelledby="raid-stages" className="border border-border bg-surface p-5 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold text-accent">استكشف مراحل الريد</p><h2 id="raid-stages" className="mt-2 text-2xl font-black md:text-3xl">من التفعيل إلى انتهاء الوقت</h2></div><span className="border border-border px-3 py-2 text-xs text-muted">شرح تفاعلي · ليس ريدًا مباشرًا</span></div>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4" role="group" aria-label="اختيار مرحلة الريد">{stages.map((item,index) => <button key={item.title} type="button" aria-pressed={active === index} aria-controls="raid-stage-detail" onClick={() => setActive(index)} className={`border p-4 text-right transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${active === index ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"}`}><span className="font-display text-sm text-accent">0{index+1}</span><span className="mt-2 block font-bold">{item.title}</span></button>)}</div>
      <div id="raid-stage-detail" className="mt-6" aria-live="polite" aria-atomic="true">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="border border-accent/30 bg-background p-6"><span className="text-sm text-accent">الطرف المهاجم</span><h3 className="mt-3 text-xl font-bold">العصابة الأولى</h3><p className="mt-3 leading-7 text-muted">{stage.attacker}</p></div>
          <span aria-hidden="true" className={`mx-auto flex size-14 items-center justify-center rounded-full border border-accent/40 font-display text-accent ${active === 2 ? "motion-safe:animate-pulse" : ""}`}>VS</span>
          <div className="border border-[#70b8aa]/30 bg-background p-6"><span className="text-sm text-[#70b8aa]">الطرف المدافع</span><h3 className="mt-3 text-xl font-bold">العصابة الثانية</h3><p className="mt-3 leading-7 text-muted">{stage.defender}</p></div>
        </div>
        <div className="mt-6 border-t border-border pt-6"><span className="text-sm font-bold text-accent">{stage.label}</span><p className="mt-3 max-w-4xl leading-8 text-muted">{stage.text}</p></div>
        <div aria-hidden="true" className="mt-6 h-1 overflow-hidden bg-border"><div className="h-full bg-accent transition-[width] duration-500 motion-reduce:transition-none" style={{width: `${stage.progress}%`}} /></div>
      </div>
      <p className="mt-4 text-xs leading-6 text-muted">شريط المراحل يوضح تسلسل الفكرة فقط؛ ليس عدادًا لوقت الريد ولا جدولًا لمواعيده.</p>
    </section>
    <section aria-labelledby="raid-goal" className="py-14">
      <h2 id="raid-goal" className="text-3xl font-black">هدف واحد، ودوران مختلفان</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{[["المهاجم", "يسعى إلى سلب أغراض العصابة المنافسة خلال نافذة الريد. الوصول للأغراض هو الهدف، والقتال جزء من المواجهة المحدودة بالوقت."], ["المدافع", "يسعى إلى حماية أغراض عصابته ومنع الطرف الآخر من سلبها خلال نفس النافذة الزمنية."]].map(([title,text]) => <article key={title} className="border border-border p-6"><h3 className="text-xl font-bold text-accent">{title}</h3><p className="mt-4 leading-8 text-muted">{text}</p></article>)}</div>
    </section>
    <section aria-labelledby="raid-faq">
      <h2 id="raid-faq" className="text-3xl font-black">قبل ما تشارك</h2>
      <div className="mt-6 divide-y divide-border border-y border-border">{[
        ["كم مرة يصير الريد؟", "مرتين في الأسبوع. أوقات التفعيل غير ثابتة، ولا تعرض هذه الصفحة موعد الريد القادم."],
        ["كم تستمر المواجهة؟", "لها مدة محددة وتنتهي بانتهائها. عدد الدقائق لم يُحدد للنشر بعد؛ سيُضاف هنا عند اعتماده."],
        ["هل الريد يسمح بسلب أي شيء؟", "الهدف سلب أغراض العصابة المنافسة، لكن قائمة الأغراض المسموحة وحدود السلب لم تُحدد للنشر بعد. لا يُفهم من هذا الشرح أن كل الأغراض قابلة للسلب."],
        ["وش يصير إذا انتهى الوقت والمواجهة مستمرة؟", "ينتهي الريد بانتهاء المدة حتى لو لم يتحقق هدف أحد الطرفين."],
        ["وين أحصل التفاصيل التنظيمية؟", "راجع قسم قوانين العصابات عند نشر القوانين المعتمدة. عدد المشاركين وشروط الدخول وطريقة بدء الريد وتفاصيل احتساب النتيجة بانتظار الاعتماد."],
      ].map(([question,answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer text-lg font-bold marker:text-accent">{question}</summary><p className="mt-4 max-w-4xl leading-8 text-muted">{answer}</p></details>)}</div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row"><Link href="/rules/gangs" className="bg-accent px-6 py-4 text-center font-bold text-accent-foreground">قوانين العصابات</Link><Link href="/rules/roleplay" className="border border-border px-6 py-4 text-center font-bold hover:border-accent">قوانين الرول بلاي</Link></div>
    </section>
  </div>;
}

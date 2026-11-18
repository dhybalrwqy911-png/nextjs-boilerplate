"use client";

import { useState } from "react";
import Link from "next/link";

const stages = [
  { title: "انتظار التفعيل", label: "قبل الريد", text: "يتكرر الريد مرتين خلال الأسبوع، بأوقات غير ثابتة. هذه الصفحة تشرح النظام ولا تعرض حالة تفعيله الآن.", attacker: "الريد غير مفعّل", defender: "الريد غير مفعّل", progress: 0 },
  { title: "بداية الريد", label: "فتح المواجهة", text: "عند تفعيل الريد تبدأ نافذة المواجهة المحددة بين العصابات. الطرف المهاجم يسعى للوصول إلى أغراض العصابة المنافسة، والطرف المدافع يحاول حمايتها.", attacker: "محاولة الوصول للأغراض", defender: "حماية أغراض العصابة", progress: 33 },
  { title: "المواجهة والسلب", label: "وقت محدود", text: "تدور المواجهة خلال مدة الريد فقط، ويكون الهدف سلب أغراض العصابة الأخرى وفق التفاصيل المعتمدة. توضح قوانين الريد أدناه حدود السلب.", attacker: "سلب الأغراض المسموحة", defender: "منع خسارة الأغراض", progress: 66 },
  { title: "انتهاء الريد", label: "نهاية النافذة", text: "بانتهاء المدة ينتهي الريد، حتى لو لم يصل أحد الطرفين إلى هدفه. الريد نافذة مواجهة مؤقتة، وليس قتالًا مفتوحًا بلا نهاية.", attacker: "انتهت نافذة الريد", defender: "انتهت نافذة الريد", progress: 100 },
];

const raidRules = [
  {
    id: "raid-timing",
    title: "نظام الوقت والاشتباك",
    rules: [
      ["التوقيت المفاجئ","يبدأ وقت الريد والاشتباك في موعد مفاجئ للجميع تحدده الإدارة، ويُسمح فور إعلانه باقتحام بيسات العصابات ونهبها."],
      ["نهاية الريد","ينتهي الفايت والنهب فور انتهاء الوقت المحدد وإعلان الإدارة بذلك في القنوات الرسمية أو داخل السيرفر."],
      ["الحظر بعد النهاية","يُمنع منعاً باتاً نهب أي أغراض أو البقاء داخل بيس الخصم أو استكمال إطلاق النار بعد إعلان انتهاء الوقت، وأي نهب يحدث بعد الثانية الأخيرة يُلغى وتُسترجع الأغراض فوراً."],
    ],
  },
  {
    id: "raid-defense",
    title: "قواعد الدفاع والتخبئة والنهب",
    rules: [
      ["حرية التخبئة والتأمين","يحق للعصابات إخفاء أغراضها وتوزيعها داخل نطاق البيس الخاص بها بالطريقة التكتيكية التي تراها مناسبة لحمايتها من النهب (سواء قبل الريد أو أثنائه)."],
      ["ضوابط التخبئة الشرعية","يُشترط أن تكون الأغراض مخبأة في أماكن قابلة للوصول والفتح بشكل طبيعي داخل البيس، ويُمنع استخدام ثغرات الخريطة أو الجدران (Glitches) لإخفاء الصناديق أو جعلها مستحيلة الفتح."],
      ["الهجوم والدفاع","يحق للمهاجمين تفتيش البيس بالكامل ونهب كل ما يعثرون عليه خلال وقت الريد، وللمدافعين كامل الحق في الدفاع عن بيسهم ومخابئهم بكل الوسائل المسموحة."],
    ],
  },
  {
    id: "raid-allies",
    title: "تحالفات العصابات والتدخل الخارجي",
    rules: [
      ["عزلة الفايت (1 ضد 1)","الريد قائم حصرياً بين العصابة المهاجمة والعصابة المُستهدفة فقط، ويُمنع منعاً باتاً تدخل أي عصابة خارجية في المعركة لصالح أي طرف."],
      ["التحالفات المسبقة","في حال وجود اتفاق تحالف رسمي ومعلن مسبقاً بين العصابات لدى الإدارة، يُحدد عدد العناصر المسموح بمشاركتهم من العصابة الحليفة ضمن شروط الريد الأساسية."],
      ["منع الدعم المفاجئ","يُحظر تماماً قيام عصابات أخرى غير معنية بالريد بتقديم الدعم العسكري، أو تأمين محيط البيس من الخارج، أو إعاقة وصول الطرف المهاجم، ويعتبر أي تدخل خارجي غير مبرر تدخلاً غير قانوني يعرض المخالفين للعقوبة."],
    ],
  },
  {
    id: "raid-prohibitions",
    title: "المحظورات الصارمة",
    rules: [
      ["الخروج لتفادي الخسارة (Combat Logging)","يُمنع منعاً باتاً تسجيل الخروج من السيرفر أثناء الريد أو نقل الأغراض عبر حسابات أخرى لإخراجها من السيرفر وقت الهجوم."],
      ["إغلاق المداخل بالثغرات","يُمنع سد المداخل أو الصناديق بأجسام غير قابلة للكسر أو بوضعيات تمنع التفاعل معها برمجياً."],
    ],
  },
  {
    id: "raid-penalties",
    title: "العقوبات",
    rules: [
      ["النهب بعد الوقت","مصادرة كافة الأغراض المنهوبة بعد انتهاء وقت الريد وإعادتها لأصحابها، مع فرض عقوبة إدارية على المخالف."],
      ["التدخل الخارجي","تعرض العصابة المتدخلة خارج الإطار الرسمي لعقوبات صارمة (مثل غرامات مالية أو حرمان مؤقت من الريدات)، واعتبار النتيجة باطلة إذا تأثر الفايت بشكل مباشر."],
      ["استغلال الثغرات","أي محاولة لإخفاء الأغراض أو حماية البيس عن طريق ثغرات اللعبة تعرّض العصابة للمصادرة الفورية وعقوبات إدارية مشددة."],
    ],
  },
];

export function RaidGuide() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return <div className="mx-auto max-w-7xl px-4 py-5 md:px-8 md:py-20">
    <section aria-label="ملخص الريد" className="mb-4 border border-accent/25 bg-surface p-4 md:hidden">
      <h2 className="text-xl font-black">الريد باختصار</h2>
      <p className="mt-2 text-sm leading-6 text-foreground/85">مواجهة بين عصابتين داخل اللعبة، تتكرر مرتين أسبوعيًا بأوقات غير ثابتة. المهاجم يحاول أخذ الأغراض المسموح بها، والمدافع يحميها حتى ينتهي الوقت.</p>
    </section>
    <dl className="hidden gap-4 md:grid md:grid-cols-3">
      {[["02", "مرتين في الأسبوع", "عدد مرات تفعيل النظام أسبوعيًا"], ["غير ثابتة", "أوقات التفعيل", "لا يرتبط بيوم أو ساعة ثابتة"], ["محدودة", "مدة المواجهة", "ينتهي الريد عند انتهاء الوقت"]].map(([value,title,text]) => <div key={title} className="border border-accent/25 bg-surface p-6"><dd className="font-display text-3xl font-bold text-accent">{value}</dd><dt className="mt-1 text-sm font-bold md:mt-3 md:text-xl">{title}</dt><dd className="mt-2 text-sm leading-7 text-muted">{text}</dd></div>)}
    </dl>
    <section aria-labelledby="raid-intro" className="hidden py-14 md:block">
      <span className="text-xs font-bold tracking-widest text-accent">GANG RAID · دليل العصابات</span>
      <h2 id="raid-intro" className="mt-4 text-3xl font-black md:text-5xl">وش هو نظام الريد؟</h2>
      <p className="mt-6 max-w-4xl text-lg leading-9 text-muted">الريد مواجهة مؤقتة بين عصابات السيرفر داخل عالم الرول بلاي. فكرته أن تحاول عصابة سلب أغراض عصابة أخرى خلال وقت محدد، بينما تحاول العصابة المستهدفة الدفاع عن أغراضها. يتكرر النظام مرتين بالأسبوع في أوقات غير ثابتة، وتنتهي المواجهة بانتهاء مدتها.</p>
    </section>
    <a href="#raid-rules" className="mb-4 inline-flex min-h-11 items-center border border-accent/40 px-4 text-sm font-bold text-accent md:mb-6">قوانين الريد ↓</a>
    <section aria-labelledby="raid-stages" className="border border-border bg-surface p-3 md:p-8">
      <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold text-accent">استكشف مراحل الريد</p><h2 id="raid-stages" className="mt-1 text-xl font-black md:mt-2 md:text-3xl">من التفعيل إلى انتهاء الوقت</h2></div><span className="text-xs text-muted md:border md:border-border md:px-3 md:py-2">شرح تفاعلي · ليس ريدًا مباشرًا</span></div>
      <div className="mt-3 grid grid-cols-2 gap-2 md:mt-8 md:grid-cols-4 md:gap-3" role="group" aria-label="اختيار مرحلة الريد">{stages.map((item,index) => <button key={item.title} type="button" aria-pressed={active === index} aria-controls="raid-stage-detail" onClick={() => setActive(index)} className={`min-h-11 border px-2 py-2 text-right md:p-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${active === index ? "border-accent bg-accent/10" : "border-border hover:border-accent/50"}`}><span className="font-display text-sm text-accent">0{index+1}</span><span className="ms-2 text-xs font-bold sm:text-sm md:ms-0 md:mt-2 md:block md:text-base">{item.title}</span></button>)}</div>
      <div id="raid-stage-detail" className="mt-3 flex flex-col md:mt-6 md:block" aria-live="polite" aria-atomic="true">
        <div className="mt-3 grid grid-cols-2 gap-2 md:mt-0 md:grid-cols-[1fr_auto_1fr] md:gap-4 md:items-center">
          <div className="border border-accent/30 bg-background p-2 md:p-6"><span className="text-sm text-accent">الطرف المهاجم</span><h3 className="mt-1 text-sm font-bold md:mt-3 md:text-xl">العصابة الأولى</h3><p className="mt-1 text-sm leading-5 text-muted md:mt-3 md:text-base md:leading-7">{stage.attacker}</p></div>
          <span aria-hidden="true" className={`mx-auto hidden size-14 md:flex items-center justify-center rounded-full border border-accent/40 font-display text-accent ${active === 2 ? "motion-safe:animate-pulse" : ""}`}>VS</span>
          <div className="border border-[#70b8aa]/30 bg-background p-2 md:p-6"><span className="text-sm text-[#70b8aa]">الطرف المدافع</span><h3 className="mt-1 text-sm font-bold md:mt-3 md:text-xl">العصابة الثانية</h3><p className="mt-1 text-sm leading-5 text-muted md:mt-3 md:text-base md:leading-7">{stage.defender}</p></div>
        </div>
        <div className="order-first md:order-none md:mt-6 md:border-t md:border-border md:pt-6"><span className="text-sm font-bold text-accent">{stage.label}</span><p className="mt-1 max-w-4xl text-sm leading-6 md:mt-3 md:text-base md:leading-8 text-muted">{stage.text}</p></div>
        <div aria-hidden="true" className="mt-3 h-1 overflow-hidden md:mt-6 bg-border"><div className="h-full bg-accent transition-[width] duration-500 motion-reduce:transition-none" style={{width: `${stage.progress}%`}} /></div>
      </div>
      <p className="mt-2 text-xs leading-5 md:mt-4 md:leading-6 text-muted">شريط المراحل يوضح تسلسل الفكرة فقط؛ ليس عدادًا لوقت الريد ولا جدولًا لمواعيده.</p>
    </section>
    <section aria-labelledby="raid-goal" className="hidden py-14 md:block">
      <h2 id="raid-goal" className="text-3xl font-black">هدف واحد، ودوران مختلفان</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{[["المهاجم", "يسعى إلى سلب أغراض العصابة المنافسة خلال نافذة الريد. الوصول للأغراض هو الهدف، والقتال جزء من المواجهة المحدودة بالوقت."], ["المدافع", "يسعى إلى حماية أغراض عصابته ومنع الطرف الآخر من سلبها خلال نفس النافذة الزمنية."]].map(([title,text]) => <article key={title} className="border border-border p-6"><h3 className="text-xl font-bold text-accent">{title}</h3><p className="mt-4 leading-8 text-muted">{text}</p></article>)}</div>
    </section>
    <section id="raid-rules" aria-labelledby="raid-rules-title" className="my-6 scroll-mt-24 md:my-12">
      <h2 id="raid-rules-title" className="mb-4 text-2xl font-black md:text-4xl">قوانين الريد</h2>
      <div className="grid items-start gap-4 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-6">
        <nav aria-label="فهرس قوانين الريد" className="border border-border bg-surface px-3 py-2 md:sticky md:top-24 md:p-4">
          <ul>
            {raidRules.map(({ id, title }) => (
              <li key={id}><a href={`#${id}`} className="flex min-h-11 items-center border-b border-border py-2 text-sm font-bold text-accent">{title}</a></li>
            ))}
          </ul>
        </nav>
        <div className="grid min-w-0 gap-3 md:gap-5">
          {raidRules.map(({ id, title, rules }) => (
            <section id={id} key={id} className="scroll-mt-24 border border-border bg-surface p-4 md:p-6">
              <h3 className="mb-3 text-lg font-bold md:text-xl">{title}</h3>
              <ol className="space-y-3">
                {rules.map(([label, text], index) => (
                  <li key={label} className="grid grid-cols-[auto_minmax(0,1fr)] gap-2 border-t border-border pt-3 md:gap-3">
                    <span className="font-bold text-accent">{(index + 1).toLocaleString("ar-SA")}</span>
                    <div>
                      <h4 className="font-bold">{label}</h4>
                      <p className="mt-1 leading-relaxed text-foreground/85 md:leading-8">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </section>
    <section aria-labelledby="raid-faq" className="mt-5 md:mt-0">
      <h2 id="raid-faq" className="text-xl md:text-3xl font-black">قبل ما تشارك</h2>
      <div className="mt-2 divide-y md:mt-6 divide-border border-y border-border">{[
        ["كم مرة يصير الريد؟", "مرتين في الأسبوع. أوقات التفعيل غير ثابتة، ولا تعرض هذه الصفحة موعد الريد القادم."],
        ["كم تستمر المواجهة؟", "لها مدة محددة وتنتهي بانتهائها. عدد الدقائق لم يُحدد للنشر بعد؛ سيُضاف هنا عند اعتماده."],
        ["هل الريد يسمح بسلب أي شيء؟", "خلال وقت الريد يحق للمهاجمين نهب ما يعثرون عليه داخل البيس. يتوقف النهب عند إعلان انتهاء الوقت."],
        ["وش يصير إذا انتهى الوقت والمواجهة مستمرة؟", "ينتهي الريد بانتهاء المدة حتى لو لم يتحقق هدف أحد الطرفين."],
        ["وين أحصل التفاصيل التنظيمية؟", "راجع قوانين الريد أعلاه لمعرفة شروط التوقيت والتخبئة والنهب والتحالفات والعقوبات."],
      ].map(([question,answer]) => <details key={question} className="group py-3 md:py-5"><summary className="cursor-pointer text-sm md:text-lg font-bold marker:text-accent">{question}</summary><p className="mt-2 max-w-4xl text-sm leading-6 md:mt-4 md:text-base md:leading-8 text-muted">{answer}</p></details>)}</div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:mt-8 md:flex md:gap-4"><Link href="/rules/gangs" className="bg-accent flex min-h-11 items-center justify-center px-2 py-2 text-center text-sm font-bold md:px-6 md:py-4 md:text-base text-accent-foreground">قوانين العصابات</Link><Link href="/rules/roleplay" className="border border-border flex min-h-11 items-center justify-center px-2 py-2 text-center text-sm font-bold md:px-6 md:py-4 md:text-base hover:border-accent">قوانين الرول بلاي</Link></div>
    </section>
  </div>;
}

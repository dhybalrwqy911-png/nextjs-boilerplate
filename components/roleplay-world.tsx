const topics = [
  {
    id: "civilian",
    label: "الحياة المدنية",
    title: "عش حياتك بالطريقة التي تريدها",
    text: "امتلك منزلاً، افتح مشروعك الخاص، كوّن علاقات، وابنِ سمعتك في المدينة. الحياة المدنية هي قلب العالم ومصدر كل القصص.",
    points: ["سكن وممتلكات", "متاجر ومشاريع خاصة", "علاقات اجتماعية"],
  },
  {
    id: "government",
    label: "الخدمات الحكومية",
    title: "مؤسسات تحفظ النظام",
    text: "تراخيص، محاكم، سجلات مدنية، وقرارات إدارية تؤثر على حياة الجميع. الدولة في ARAB REFORGER ليست ديكوراً بل نظام فعّال.",
    points: ["تراخيص ومعاملات", "نظام قضائي", "انتخابات وقرارات"],
  },
  {
    id: "crime",
    label: "سيناريوهات الجريمة",
    title: "الوجه الآخر للمدينة",
    text: "سيناريوهات إجرامية مدروسة تضيف التوتر والإثارة للقصة، ضمن قوانين واضحة تضمن تجربة عادلة لجميع الأطراف.",
    points: ["عمليات مخططة", "تحقيقات ومطاردات", "عواقب حقيقية"],
  },
  {
    id: "interactive",
    label: "عالم تفاعلي",
    title: "كل تفاعل يصنع حدثاً",
    text: "فعاليات حية، أحداث مفاجئة، وتفاعل مستمر بين القطاعات. العالم يتغير ويتطور بناءً على ما يفعله اللاعبون.",
    points: ["فعاليات أسبوعية", "أحداث ديناميكية", "قصص مترابطة"],
  },
];

export function RoleplayWorld() {
  return (
    <section id="world" aria-labelledby="world-title" className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
      <h2 id="world-title" className="mb-4 text-xl font-black md:text-2xl">محاور عالم الرول بلاي</h2>
      <div className="grid gap-3">
        {topics.map(({ id, label, title, text, points }) => (
          <article key={id} aria-labelledby={`world-${id}`} className="rounded-lg border border-border border-s-2 border-s-accent/70 bg-surface p-4 md:p-5">
            <h3 id={`world-${id}`} className="text-lg font-bold">{label}</h3>
            <p className="mt-1 text-sm font-bold text-accent">{title}</p>
            <p className="mt-1 max-w-3xl text-sm leading-7 text-muted md:text-base">{text}</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-sm">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

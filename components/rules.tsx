import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const rules = [
  { q: "الالتزام بالشخصية", a: "يجب البقاء داخل الشخصية طوال فترة اللعب وعدم الخلط بين الواقع والقصة." },
  { q: "احترام الجميع", a: "يمنع منعاً باتاً الإساءة أو العنصرية أو التنمر بأي شكل داخل اللعبة وخارجها." },
  { q: "منع القتل العشوائي (RDM)", a: "لا يُسمح بأي اعتداء دون سبب قصصي واضح ومبرر ضمن الرول بلاي." },
  { q: "منع استغلال المعلومات (Meta Gaming)", a: "لا يجوز استخدام معلومات حصلت عليها خارج اللعبة لصالح شخصيتك." },
  { q: "قيمة الحياة", a: "تصرف كما لو أن حياة شخصيتك حقيقية، وتجنب المخاطرات غير الواقعية." },
];

export function Rules() {
  return (
    <section id="rules" aria-labelledby="rules-title" className="border-y border-border bg-surface py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHeading
          index="08"
          eyebrow="Server Rules"
          title="القوانين الأساسية"
          description="القوانين هي أساس التجربة العادلة. هذه أبرز القواعد، والنسخة الكاملة متاحة في سيرفر الديسكورد."
        />
        <Reveal>
          <ol className="flex flex-col border-t border-border">
            {rules.map((r, i) => (
              <li key={r.q} className="border-b border-border">
                <details className="group" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center gap-5 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-sm text-accent" dir="ltr">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-lg font-bold text-foreground">{r.q}</span>
                    <span
                      aria-hidden="true"
                      className="relative size-4 before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-foreground after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:bg-foreground after:transition-transform group-open:after:scale-y-0"
                    />
                  </summary>
                  <p className="pb-6 pr-11 leading-relaxed text-muted">{r.a}</p>
                </details>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

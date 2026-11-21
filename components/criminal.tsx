import { MaskIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const factions = [
  { name: "عصابة الصقر الأسود", en: "BLACK FALCON", desc: "شبكة تهريب تسيطر على الموانئ والطرق الساحلية." },
  { name: "ذئاب الصحراء", en: "DESERT WOLVES", desc: "مجموعة خارجة عن القانون تنشط في الأطراف والقرى النائية." },
  { name: "العائلة", en: "THE FAMILY", desc: "تنظيم قديم يدير أعماله من خلف واجهات تجارية شرعية." },
];

export function Criminal() {
  return (
    <section id="crime" aria-labelledby="crime-title" className="py-6 md:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="relative isolate grid overflow-hidden border border-border">
          <div className="flex flex-col justify-center gap-10 bg-surface p-6 md:p-12">
            <SectionHeading
              index="05"
              eyebrow="Criminal Organizations"
              title="المنظمات الإجرامية"
              description="العالم السفلي جزء من السرد القصصي للسيرفر. جميع التنظيمات خيالية بالكامل، وتعمل ضمن قوانين رول بلاي صارمة تضمن قصصاً مشوقة وعادلة."
            />
            <ul className="flex flex-col gap-3">
              {factions.map((f) => (
                <li
                  key={f.en}
                  className="group flex items-start gap-4 border border-border bg-background p-4 transition-colors hover:border-accent/60"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center bg-surface-2 text-accent">
                    <MaskIcon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h3 className="font-bold text-foreground">{f.name}</h3>
                      <span className="font-display text-[10px] tracking-[0.25em] text-muted" dir="ltr">
                        {f.en}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted">
              * أسماء التنظيمات أمثلة توضيحية وسيتم تحديثها حسب قصة السيرفر.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

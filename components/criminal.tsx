import Image from "next/image";
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
    <section id="crime" aria-labelledby="crime-title" className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="relative isolate grid overflow-hidden border border-border lg:grid-cols-2">
          <div className="relative min-h-80 lg:min-h-[620px]">
            <Image
              src="/images/crime.png"
              alt="شخصيات ملثمة في مستودع مظلم بإضاءة برتقالية"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent lg:bg-gradient-to-r lg:from-background lg:via-transparent lg:to-transparent" />
            <span className="absolute right-5 top-5 bg-accent px-3 py-1 font-display text-[11px] tracking-[0.25em] text-accent-foreground" dir="ltr">
              FICTIONAL STORYLINE
            </span>
          </div>

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

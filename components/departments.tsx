import Image from "next/image";
import { departments } from "@/lib/content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";


export function Departments() {
  return (
    <section id="departments" aria-labelledby="departments-title" className="py-24 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            index="03"
            eyebrow="Government Departments"
            title="القطاعات الحكومية"
            description="انضم إلى أحد القطاعات الرسمية وكن جزءاً من المنظومة التي تحفظ توازن العالم."
          />
          <a
            href="/join"
            className="shrink-0 self-start border-b border-accent pb-1 text-sm font-bold text-accent transition-colors hover:text-foreground md:self-auto"
          >
            التقديم على القطاعات
          </a>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d, i) => (
            <Reveal as="li" key={d.en} delay={i * 100}>
              <article className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden border border-border">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="font-display text-xs text-foreground/60" dir="ltr">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex size-10 items-center justify-center border border-foreground/20 bg-background/40 text-accent backdrop-blur-sm">
                    <d.Icon className="size-5" />
                  </span>
                </div>
                <div className="relative flex flex-col gap-2 p-5">
                  <p className="font-display text-[11px] tracking-[0.25em] text-accent" dir="ltr">
                    {d.en.toUpperCase()}
                  </p>
                  <h3 className="text-2xl font-black text-foreground">{d.name}</h3>
                  <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-foreground/75 opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 group-focus-within:max-h-24 group-focus-within:opacity-100 max-lg:max-h-24 max-lg:opacity-100">
                    {d.short}
                  </p>
                  <span className="mt-2 h-0.5 w-10 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

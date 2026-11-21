import Link from "next/link";
import { DiscordButton } from "./buttons";
import { BookIcon, ChatIcon, ShieldIcon } from "./icons";

const steps = [
  { title: "راجع قوانين السيرفر", description: "اطّلع على قوانين المجتمع والرول بلاي قبل دخول السيرفر.", Icon: BookIcon },
  { title: "انضم إلى ديسكورد", description: "افتح ديسكورد عرب ريفورجر وتوجّه إلى قسم التفعيل.", Icon: ChatIcon },
  { title: "أكمل التفعيل", description: "اتبع تعليمات التفعيل داخل ديسكورد، وبعد قبولك تقدر تدخل السيرفر.", Icon: ShieldIcon },
];

export function JoinSteps() {
  return (
    <section aria-labelledby="join-steps-title" className="mx-auto max-w-6xl px-4 pt-6 md:px-8 md:pt-9">
      <div className="overflow-hidden rounded-xl border border-border bg-surface p-4 md:p-7">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 md:mb-6">
          <h2 id="join-steps-title" className="text-xl font-black md:text-3xl">ابدأ رحلتك في ثلاث خطوات</h2>
          <DiscordButton label="ابدأ عبر ديسكورد" />
        </div>
        <ol className="grid gap-2.5 md:grid-cols-3 md:gap-4">
          {steps.map(({ title, description, Icon }, index) => (
            <li key={title} className="flex min-w-0 items-start gap-3 rounded-lg border border-border bg-background p-3 md:p-5">
              <span className="relative grid size-11 shrink-0 place-items-center rounded-lg border border-accent/30 text-accent">
                <Icon aria-hidden="true" className="size-5" />
                <span className="absolute -end-1.5 -top-1.5 grid size-5 place-items-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{index + 1}</span>
              </span>
              <div className="min-w-0">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
                {index === 0 && <Link href="/rules" className="inline-flex min-h-11 items-center text-sm font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent">عرض القوانين</Link>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

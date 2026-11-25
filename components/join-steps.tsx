import Link from "next/link";
import { DISCORD_URL } from "@/lib/site";
import { ArrowIcon, ChatIcon } from "./icons";

const steps = [
  { title: "اقرأ قوانين السيرفر", description: "راجع قوانين الرول بلاي وديسكورد قبل التفعيل.", href: "/rules" },
  { title: "افتح قسم التفعيل", description: "انضم إلى ديسكورد عرب ريفورجر وتوجّه إلى قسم التفعيل." },
  { title: "أكمل التفعيل", description: "اتبع تعليمات القسم. بعد قبولك تقدر تدخل السيرفر." },
];

export function JoinSteps() {
  return (
    <section aria-labelledby="join-steps-title" className="mx-auto max-w-3xl px-4 py-5 sm:px-6 md:py-8 xl:max-w-[94rem] xl:px-10">
      <div className="rounded-2xl border border-border/75 bg-surface px-4 py-4 sm:px-6 sm:py-5">
        <h2 id="join-steps-title" className="text-lg font-bold sm:text-xl">خطوات التفعيل</h2>
        <ol className="mt-2 divide-y divide-border/70 xl:mt-5 xl:grid xl:grid-cols-3 xl:gap-4 xl:divide-y-0">
          {steps.map(({ title, description, href }, index) => (
            <li key={title} className="flex items-start gap-3 py-3 xl:rounded-xl xl:border xl:border-border/70 xl:bg-background/60 xl:p-4">
              <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-accent/10 text-sm font-bold text-accent">{(index + 1).toLocaleString("ar-SA")}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-bold">{title}</h3>
                <p className="mt-0.5 text-sm leading-6 text-muted">{description}</p>
                {href && (
                  <Link href={href} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent">
                    عرض القوانين <ArrowIcon aria-hidden="true" className="size-4" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
        {DISCORD_URL && (
          <a href={DISCORD_URL} className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 py-2 text-sm font-bold text-accent-foreground hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent xl:mt-5 xl:inline-flex">
            <ChatIcon aria-hidden="true" className="size-5" /> انضم عبر ديسكورد
          </a>
        )}
      </div>
    </section>
  );
}

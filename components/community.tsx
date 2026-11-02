import Image from "next/image";
import { DISCORD_URL } from "@/lib/site";
import { BookIcon, ChatIcon, UsersIcon } from "./icons";
import { Reveal } from "./reveal";

const steps = [
  { Icon: ChatIcon, title: "انضم للديسكورد", text: "ادخل سيرفر الديسكورد وتعرّف على المجتمع." },
  { Icon: BookIcon, title: "اقرأ القوانين", text: "اطّلع على القوانين الكاملة قبل البدء." },
  { Icon: UsersIcon, title: "ابدأ قصتك", text: "أنشئ شخصيتك وادخل العالم." },
];

export function Community() {
  return (
    <section id="join" aria-labelledby="join-title" className="grain relative isolate overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10">
        <Image src="/images/hero.png" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-5 text-center md:px-8">
        <Reveal className="flex flex-col items-center gap-6">
          <p className="font-display text-sm tracking-[0.4em] text-accent" dir="ltr">
            09 — JOIN THE COMMUNITY
          </p>
          <h2 id="join-title" className="text-balance text-4xl font-black leading-tight text-foreground md:text-6xl">
            قصتك تبدأ الآن
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-foreground/75">
            انضم إلى مجتمع ARAB REFORGER وكن جزءاً من أكبر تجربة رول بلاي عربية على Arma Reforger.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={DISCORD_URL}
              className="inline-flex items-center justify-center gap-3 bg-accent px-10 py-4 text-lg font-bold text-accent-foreground transition-colors hover:bg-foreground"
            >
              <ChatIcon className="size-5" />
              انضم عبر الديسكورد
            </a>
            <a
              href="#rules"
              className="inline-flex items-center justify-center border border-foreground/40 px-10 py-4 text-lg font-bold text-foreground transition-colors hover:border-foreground hover:bg-foreground/10"
            >
              اقرأ القوانين
            </a>
          </div>
        </Reveal>

        <ol className="mt-6 grid w-full gap-px border border-border bg-border md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="flex flex-col items-center gap-3 bg-background/90 p-8">
              <span className="flex size-12 items-center justify-center border border-border text-accent">
                <s.Icon className="size-6" />
              </span>
              <span className="font-display text-xs text-muted" dir="ltr">
                {`STEP ${String(i + 1).padStart(2, "0")}`}
              </span>
              <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

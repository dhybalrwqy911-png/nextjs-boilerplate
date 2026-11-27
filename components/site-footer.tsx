import Link from "next/link";
import { ArrowIcon, BuildingIcon, ChatIcon } from "./icons";

const projects = [
  {
    name: "زمرة",
    description: "بوت ديسكورد عربي",
    href: "https://zumrra.com/",
    Icon: ChatIcon,
  },
  {
    name: "القطاعات الصحية والأمنية",
    description: "بوابة قطاعات المجتمع",
    href: "https://arab-reforger.com/",
    Icon: BuildingIcon,
  },
];

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-4 pt-4 pb-3 sm:px-6 lg:px-8 xl:max-w-[104rem] xl:px-10 2xl:px-12">
        <nav aria-labelledby="footer-projects" className="md:flex md:items-center md:gap-5 lg:gap-7">
          <h2 id="footer-projects" className="mb-2 flex shrink-0 items-center gap-2 text-sm font-bold text-foreground md:mb-0">
            <span aria-hidden="true" className="h-0.5 w-4 rounded-full bg-accent" />
            أبرز أعمالنا
          </h2>
          <ul className="grid grid-cols-2 divide-x divide-border/65 rounded-xl border border-border/75 bg-linear-to-l from-accent/10 to-background/35 md:min-w-0 md:flex-1">
            {projects.map(({ name, description, href, Icon }) => (
              <li key={href} className="min-w-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group grid h-full grid-cols-[minmax(0,1fr)_auto] content-start items-start gap-y-1.5 rounded-lg px-2.5 py-2 hover:bg-accent/10 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:gap-x-3 sm:px-3 ${focus}`}
                >
                  <span className="col-start-1 row-start-1 grid size-7 place-items-center rounded-md bg-accent/15 text-accent sm:size-8">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <ArrowIcon className="col-start-2 row-start-1 size-4 rotate-135 justify-self-end text-accent [direction:ltr] sm:col-start-3" />
                  <span className="col-span-2 row-start-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                    <span className="block text-sm font-bold leading-5 group-hover:text-accent">{name}</span>
                    <span className="block text-xs leading-4 text-muted">{description}</span>
                  </span>
                  <span className="sr-only">، يفتح في نافذة جديدة</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-2 border-t border-border/60 lg:flex lg:items-center lg:justify-between lg:gap-6">
          <nav aria-label="روابط الموقع" className="flex shrink-0 flex-wrap items-center gap-x-4">
            <Link href="/" className={`inline-flex min-h-11 items-center rounded-sm text-xs font-bold text-accent hover:underline ${focus}`}>بوابة عرب ريفورجر</Link>
            <Link href="/about" className={`inline-flex min-h-11 items-center rounded-sm text-xs font-bold hover:text-accent ${focus}`}>عن المجتمع</Link>
          </nav>
          <div className="text-xs leading-5 text-muted lg:text-end">
            <p>© 2026 ARAB REFORGER. جميع الحقوق محفوظة.</p>
            <p>مجتمع مستقل غير تابع لـ Bohemia Interactive. جميع الشخصيات والتنظيمات في السيرفر خيالية.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

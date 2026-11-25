import Link from "next/link";
import { BuildingIcon, ChatIcon } from "./icons";

const projects = [
  { name: "زمرة", description: "بوت ديسكورد عربي لإدارة المجتمعات.", href: "https://zumrra.com/", domain: "zumrra.com", Icon: ChatIcon },
  { name: "القطاعات الصحية والأمنية", description: "بوابة القطاعات الصحية والأمنية للمجتمع.", href: "https://arab-reforger.com/", domain: "arab-reforger.com", Icon: BuildingIcon },
];

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-4 pt-5 pb-4 sm:px-6 lg:px-8">
        <nav aria-labelledby="footer-projects">
          <h2 id="footer-projects" className="mb-2 text-base font-bold text-foreground">أبرز أعمالنا</h2>
          <ul className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            {projects.map(({ name, description, href, domain, Icon }) => (
              <li key={href} className="min-w-0">
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name}، يفتح في نافذة جديدة`} className={`group flex h-full items-start gap-3 rounded-xl border border-border/75 bg-background/50 p-3 hover:border-accent sm:p-4 ${focus}`}>
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent"><Icon aria-hidden="true" className="size-5" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold leading-5 group-hover:text-accent">{name}</span>
                    <span className="mt-1 block text-xs leading-5 text-muted sm:text-sm">{description}</span>
                    <bdi dir="ltr" className="mt-1 block break-words text-xs text-accent">{domain}</bdi>
                  </span>
                  <span aria-hidden="true" className="shrink-0 text-accent">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="روابط الموقع" className="mt-3 flex flex-wrap items-center gap-x-5 border-t border-border/70">
          <Link href="/" className={`inline-flex min-h-11 items-center rounded-sm text-sm font-bold text-accent hover:underline ${focus}`}>بوابة عرب ريفورجر</Link>
          <Link href="/about" className={`inline-flex min-h-11 items-center rounded-sm text-sm font-bold hover:text-accent ${focus}`}>عن المجتمع</Link>
        </nav>
        <div className="flex flex-col gap-1 text-xs leading-5 text-muted md:flex-row md:justify-between">
          <p>© 2026 ARAB REFORGER. جميع الحقوق محفوظة.</p>
          <p>مجتمع مستقل غير تابع لـ Bohemia Interactive. جميع الشخصيات والتنظيمات في السيرفر خيالية.</p>
        </div>
      </div>
    </footer>
  );
}

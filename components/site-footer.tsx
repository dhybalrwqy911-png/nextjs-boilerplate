import Link from "next/link";
import { departments } from "@/lib/content";
import { navItems } from "@/lib/site";
import { Logo } from "./logo";

const projects = [
  { name: "زمرة", label: "ZUMRRA", description: "بوت ديسكورد عربي لإدارة المجتمعات.", href: "https://zumrra.com/", domain: "zumrra.com" },
  { name: "القطاعات الصحية والأمنية", label: "ARAB REFORGER", description: "بوابة القطاعات الصحية والأمنية للمجتمع.", href: "https://arab-reforger.com/", domain: "arab-reforger.com" },
];

const linkStyle = "flex min-h-11 items-center py-1 text-sm leading-5 lg:inline-block lg:min-h-0 lg:leading-6 text-foreground/70 transition-colors hover:text-[#ddbb80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function SiteFooter() {
  const explore = navItems.filter(n => n.href !== "/departments");
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-5 sm:py-10 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-8 sm:gap-y-8 lg:grid-cols-12">
          <div className="col-span-2 min-w-0 lg:col-span-4">
            <Link href="/" aria-label="ARAB REFORGER - الرئيسية" className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              <Logo />
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-6 lg:mt-5 lg:leading-8 text-muted">
              مجتمع رول بلاي عربي على Arma Reforger. عالم حي تصنعه قصص اللاعبين وقراراتهم.
            </p>
          </div>

          <nav aria-label="روابط الموقع" className="min-w-0 lg:col-span-2">
            <h2 className="mb-1 text-sm sm:text-base lg:mb-4 font-bold text-foreground">روابط الموقع</h2>
            <ul className="lg:space-y-1.5">{explore.map(item => <li key={item.href}><Link href={item.href} className={linkStyle}>{item.label}</Link></li>)}</ul>
          </nav>

          <nav aria-label="القطاعات الحكومية" className="min-w-0 lg:col-span-2">
            <h2 className="mb-1 text-sm sm:text-base lg:mb-4 font-bold text-foreground">القطاعات الحكومية</h2>
            <ul className="lg:space-y-1.5">
              <li><Link href="/departments" className={linkStyle}>جميع القطاعات</Link></li>
              {departments.map(d => <li key={d.slug}><Link href={`/departments/${d.slug}`} className={linkStyle}>{d.name}</Link></li>)}
            </ul>
          </nav>

          <nav aria-label="أبرز أعمالنا" className="col-span-2 min-w-0 lg:col-span-4">
            <h2 className="mb-1 text-sm sm:text-base lg:mb-4 font-bold text-foreground">أبرز أعمالنا</h2>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-1">
              {projects.map(project => <a key={project.href} href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} — يفتح في نافذة جديدة`} className="group min-w-0 border border-border bg-background/40 p-2.5 sm:p-4 transition-colors hover:border-[#c49b54]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <div className="flex items-start justify-between gap-1 sm:gap-3">
                  <div className="min-w-0"><p className="mb-1.5 hidden lg:block font-display text-[10px] tracking-[0.18em] text-[#c49b54]" dir="ltr">{project.label}</p><h3 className="text-sm font-bold leading-5 lg:leading-7 text-foreground group-hover:text-[#ddbb80]">{project.name}</h3></div>
                  <span aria-hidden="true" className="text-lg text-[#c49b54]">↗</span>
                </div>
                <p className="mt-1.5 text-xs leading-5 text-muted lg:leading-6">{project.description}</p>
                <span className="mt-1 inline-block break-all font-display text-xs tracking-wide text-foreground/60" dir="ltr">{project.domain}</span>
              </a>)}
            </div>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-3 text-xs leading-5 sm:px-5 md:py-5 text-muted md:flex-row md:items-center md:justify-between md:gap-8 md:px-8">
          <p className="shrink-0">© 2026 ARAB REFORGER. جميع الحقوق محفوظة.</p>
          <p className="max-w-xl">مجتمع مستقل غير تابع لـ Bohemia Interactive. جميع الشخصيات والتنظيمات في السيرفر خيالية.</p>
        </div>
      </div>
    </footer>
  );
}

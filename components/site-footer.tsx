import Link from "next/link";
import { departments } from "@/lib/content";
import { DISCORD_URL, navItems } from "@/lib/site";
import { Logo } from "./logo";

export function SiteFooter() {
  const explore = navItems.filter((n) => n.href !== "/departments");
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" aria-label="ARAB REFORGER - الرئيسية" className="self-start">
            <Logo />
          </Link>
          <p className="max-w-sm leading-relaxed text-muted">
            مجتمع رول بلاي عربي على Arma Reforger. عالم حي تصنعه قصص اللاعبين وقراراتهم.
          </p>
        </div>

        <nav aria-label="استكشف">
          <h2 className="mb-5 font-display text-xs tracking-[0.3em] text-accent" dir="ltr">
            EXPLORE
          </h2>
          <ul className="flex flex-col gap-3">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-foreground/75 transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="القطاعات الحكومية">
          <h2 className="mb-5 font-display text-xs tracking-[0.3em] text-accent" dir="ltr">
            DEPARTMENTS
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/departments" className="text-foreground/75 transition-colors hover:text-foreground">
                جميع القطاعات
              </Link>
            </li>
            {departments.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/departments/${d.slug}`}
                  className="text-foreground/75 transition-colors hover:text-foreground"
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="المجتمع">
          <h2 className="mb-5 font-display text-xs tracking-[0.3em] text-accent" dir="ltr">
            COMMUNITY
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/join" className="text-foreground/75 transition-colors hover:text-foreground">
                كيف تنضم
              </Link>
            </li>
            <li>
              <Link href="/rules" className="text-foreground/75 transition-colors hover:text-foreground">
                القوانين
              </Link>
            </li>
            <li>
              {DISCORD_URL ? (
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/75 transition-colors hover:text-foreground"
                >
                  الديسكورد
                </a>
              ) : (
                <span className="text-muted">الديسكورد (الرابط قيد الإضافة)</span>
              )}
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © 2026 ARAB REFORGER. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs">
            مجتمع مستقل غير تابع لـ Bohemia Interactive. جميع الشخصيات والتنظيمات في السيرفر خيالية.
          </p>
        </div>
      </div>
    </footer>
  );
}

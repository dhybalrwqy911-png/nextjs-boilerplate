import { DISCORD_URL, navLinks } from "@/lib/site";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr] md:px-8">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            مجتمع رول بلاي عربي مستقل على Arma Reforger. غير تابع رسمياً لشركة Bohemia Interactive.
          </p>
        </div>
        <nav aria-label="روابط التذييل">
          <h2 className="mb-4 text-sm font-bold text-foreground">روابط سريعة</h2>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 text-sm font-bold text-foreground">تواصل معنا</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <a href={DISCORD_URL} className="text-sm text-muted transition-colors hover:text-foreground">
                Discord
              </a>
            </li>
            <li>
              <a href="#join" className="text-sm text-muted transition-colors hover:text-foreground">
                الدعم الفني
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted md:flex-row md:px-8">
          <p>© 2026 ARAB REFORGER. جميع الحقوق محفوظة.</p>
          <p className="font-display tracking-[0.3em]" dir="ltr">
            YOUR WORLD · YOUR STORY · YOUR CHOICES
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function SiteFooter() {
  const linkClass = "inline-flex min-h-11 items-center rounded-sm text-sm font-bold hover:text-accent focus-visible:outline-2 focus-visible:outline-accent";

  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:py-5 lg:px-8">
        <nav aria-label="روابط الموقع والمشاريع" className="flex flex-wrap items-center gap-x-5">
          <Link href="/" className={`${linkClass} text-accent`}>بوابة عرب ريفورجر</Link>
          <Link href="/about" className={linkClass}>عن المجتمع</Link>
          <a href="https://zumrra.com/" target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="زمرة، يفتح في نافذة جديدة">زمرة ↗</a>
          <a href="https://arab-reforger.com/" target="_blank" rel="noopener noreferrer" className={linkClass} aria-label="القطاعات الصحية والأمنية، يفتح في نافذة جديدة">القطاعات الصحية والأمنية ↗</a>
        </nav>
        <div className="mt-1 flex flex-col gap-1 text-xs leading-5 text-muted md:flex-row md:justify-between">
          <p>© 2026 ARAB REFORGER. جميع الحقوق محفوظة.</p>
          <p>مجتمع مستقل غير تابع لـ Bohemia Interactive. جميع الشخصيات والتنظيمات في السيرفر خيالية.</p>
        </div>
      </div>
    </footer>
  );
}

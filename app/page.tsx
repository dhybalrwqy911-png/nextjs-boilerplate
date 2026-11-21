import { DiscordMemberCount } from "@/components/discord-member-count";
import { JoinSteps } from "@/components/join-steps";
import Link from "next/link";
import { DiscordButton } from "@/components/buttons";
import { newsArticles } from "@/lib/news";
import { BookIcon, BriefcaseIcon, BuildingIcon, MapPinIcon, ShieldIcon } from "@/components/icons";

const services = [
  { href: "/join", title: "دليل الانضمام", description: "خطوات الدخول إلى السيرفر. التفعيل داخل ديسكورد.", Icon: ShieldIcon },
  { href: "/rules", title: "مركز القوانين", description: "قوانين الرول بلاي وديسكورد والقطاعات.", Icon: BookIcon },
  { href: "/departments", title: "القطاعات الحكومية", description: "دليل الشرطة والإسعاف والإدارة الحكومية.", Icon: BuildingIcon },
  { href: "/news/sectors-applications", title: "التقديم على القطاعات", description: "تعليمات التقديم وبوابة الشرطة والإسعاف.", Icon: BriefcaseIcon },
  { href: "/jobs", title: "الوظائف والاقتصاد", description: "المهن المدنية والموارد والخدمات.", Icon: BriefcaseIcon },
  { href: "/map", title: "دليل مواقع المدينة", description: "المرافق والمناطق بحسب التصنيف.", Icon: MapPinIcon },
];

const quickLink = "inline-flex min-h-11 items-center rounded-md border border-border px-2.5 py-1 text-sm font-bold text-accent hover:bg-surface focus-visible:outline-2 focus-visible:outline-accent";

export default function Home() {
  const [featuredNews, ...otherNews] = newsArticles;

  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 pt-24 md:px-8 md:pb-12 md:pt-28">
      <section aria-labelledby="portal-title" className="grid gap-5 rounded-2xl border border-border bg-[radial-gradient(ellipse_at_top_right,var(--surface-2),var(--background)_78%)] p-5 md:items-center md:p-9 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <div className="min-w-0">
          <h1 id="portal-title" className="text-balance text-3xl font-black leading-tight sm:text-5xl">بوابة عرب ريفورجر</h1>
          <p className="mt-3 max-w-lg text-sm leading-7 text-muted md:text-base">مجتمع رول بلاي عربي في Arma Reforger. استكشف القوانين والقطاعات، وابدأ التفعيل عبر ديسكورد.</p>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            <DiscordButton label="انضم عبر ديسكورد" />
            <Link href="/rules" className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-border bg-surface px-4 text-sm font-bold hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">
              <BookIcon aria-hidden="true" className="size-5 text-accent" />
              اقرأ القوانين
            </Link>
          </div>
        </div>
        <div className="grid gap-3">
          <DiscordMemberCount />
        <nav aria-label="روابط المجتمع" className="grid grid-cols-2 gap-2 border-t border-border pt-4 lg:border-s lg:border-t-0 lg:ps-5 lg:pt-0">
          <Link href="/news" className={quickLink}>الأخبار والإعلانات</Link>
          <Link href="/roleplay" className={quickLink}>دليل الرول بلاي</Link>
          <Link href="/store" className={quickLink}>المتجر</Link>
          <Link href="/about" className={quickLink}>عن المجتمع</Link>
        </nav>
        </div>
      </section>

      <div className="mt-6 grid items-start gap-5 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <section id="welcome" aria-labelledby="services-title" className="scroll-mt-24">
          <h2 id="services-title" className="mb-3 text-xl font-black">خدمات اللاعبين</h2>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {services.map(({ href, title, description, Icon }) => (
              <li key={href}>
                <Link href={href} className="group flex h-full min-h-20 items-start gap-3 rounded-lg border border-border bg-surface p-3 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">
                  <span className="grid size-9 shrink-0 place-items-center rounded-md bg-accent/10 text-accent"><Icon aria-hidden="true" className="size-5" /></span>
                  <div className="min-w-0">
                    <h3 className="font-bold group-hover:text-accent">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="home-news-title">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3">
            <h2 id="home-news-title" className="text-xl font-black">أخبار المجتمع</h2>
            <Link href="/news" className="inline-flex min-h-11 items-center text-sm font-bold text-accent hover:underline">كل الأخبار</Link>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-surface">
            <Link href={`/news/${featuredNews.slug}`} className="group block bg-accent/5 p-4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent">
              <p className="text-xs font-bold text-accent">{featuredNews.tag}</p>
              <h3 className="mt-1 text-lg font-bold group-hover:text-accent">{featuredNews.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{featuredNews.excerpt}</p>
            </Link>
            <ul className="divide-y divide-border border-t border-border">
              {otherNews.slice(0, 2).map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/news/${slug}`} className="flex min-h-11 items-center px-4 py-2 text-sm font-bold hover:text-accent focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent">{title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="-mx-4 md:-mx-8">
        <JoinSteps fullWidth />
      </div>
    </div>
  );
}

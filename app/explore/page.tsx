import { Suspense } from "react";
import Link from "next/link";
import { DiscordMemberCount } from "@/components/discord-member-count";
import {
  ArrowIcon, BookIcon, BriefcaseIcon, BuildingIcon, ChatIcon, ClockIcon,
  MapPinIcon, PackageIcon, UsersIcon,
} from "@/components/icons";
import { getAnnouncements } from "@/lib/announcement-content";

const destinations = [
  { href: "/roleplay", label: "عالم الرول بلاي", description: "الأدوار والسيناريوهات", Icon: UsersIcon },
  { href: "/departments", label: "القطاعات الحكومية", description: "الشرطة والإسعاف والإدارة", Icon: BuildingIcon },
  { href: "/jobs", label: "الوظائف والاقتصاد", description: "المهن والتجارة", Icon: BriefcaseIcon },
  { href: "/map", label: "خريطة المدينة", description: "المواقع والمرافق", Icon: MapPinIcon },
  { href: "/faq", label: "الأسئلة الشائعة", description: "التفعيل والبلاغات والعقوبات", Icon: ChatIcon },
  { href: "/store", label: "المتجر", description: "معاينة الباقات", Icon: PackageIcon },
];

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

async function LatestNews() {
  const announcements = await getAnnouncements();

  return (
    <section aria-labelledby="portal-news" className="min-w-0 xl:rounded-2xl xl:border xl:border-border/75 xl:bg-surface xl:p-5 2xl:p-6">
      <div className="mb-2 flex flex-wrap items-center justify-between gap-x-3">
        <h2 id="portal-news" className="text-lg font-bold sm:text-xl">آخر الإعلانات</h2>
        <Link href="/news" className={`inline-flex min-h-11 items-center text-sm font-bold text-accent hover:underline ${focus}`}>كل الأخبار</Link>
      </div>
      <ul className="divide-y divide-border/70 rounded-xl border border-border/70 bg-surface px-3 sm:px-4">
        {announcements.slice(0, 3).map(({ slug, title, tag, excerpt }, index) => (
          <li key={slug}>
            <Link href={`/news/${slug}`} className={`group flex min-h-16 items-center gap-3 py-2.5 ${focus}`}>
              <ClockIcon aria-hidden="true" className="size-4 shrink-0 text-accent xl:self-start xl:mt-1" />
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-muted">{tag}</span>
                <span className="block text-sm font-bold leading-5 group-hover:text-accent xl:text-base">{title}</span>
                {index === 0 && <span className="mt-2 hidden text-sm leading-6 text-muted xl:line-clamp-3">{excerpt}</span>}
              </span>
              <ArrowIcon aria-hidden="true" className="size-4 shrink-0 text-accent" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Explore() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-8 pt-20 sm:px-6 md:pb-12 md:pt-24 lg:px-8 xl:max-w-[104rem] xl:px-10 2xl:px-12">
      <section aria-labelledby="portal-title" className="rounded-2xl border border-accent/35 bg-[linear-gradient(125deg,var(--surface-2),var(--surface)_60%)] p-4 sm:p-6 lg:flex lg:items-center lg:justify-between lg:gap-8 lg:p-8 xl:min-h-56 xl:px-10">
        <div className="min-w-0">
          <h1 id="portal-title" className="text-balance text-2xl font-black leading-tight sm:text-4xl xl:text-5xl">استكشف عرب ريفورجر</h1>
          <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
            مجتمع رول بلاي عربي في <bdi>Arma Reforger</bdi>. التفعيل عبر ديسكورد.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <Link href="/join" className={`inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-2 py-2 text-center text-sm font-bold text-accent-foreground hover:bg-foreground sm:px-5 ${focus}`}>ابدأ الانضمام</Link>
            <Link href="/rules" className={`inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-border bg-background/50 px-2 py-2 text-center text-sm font-bold hover:border-accent sm:px-5 ${focus}`}>
              <BookIcon aria-hidden="true" className="size-4 shrink-0 text-accent" />
              القوانين
            </Link>
          </div>
        </div>
        <div className="mt-4 flex min-h-6 items-center lg:mt-0 xl:shrink-0 xl:rounded-xl xl:border xl:border-border/70 xl:bg-background/50 xl:px-5 xl:py-4 xl:empty:hidden">
          <Suspense fallback={null}><DiscordMemberCount /></Suspense>
        </div>
      </section>

      <div className="mt-5 grid items-start gap-6 lg:mt-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] xl:grid-cols-[minmax(0,2fr)_minmax(19rem,1fr)] xl:gap-8">
        <section aria-labelledby="portal-guide">
          <h2 id="portal-guide" className="mb-3 text-lg font-bold sm:text-xl">دليل السيرفر</h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 xl:grid-cols-2 xl:gap-3">
            {destinations.map(({ href, label, description, Icon }) => (
              <li key={href} className="min-w-0">
                <Link href={href} className={`group flex h-full flex-col rounded-xl border border-border/75 bg-surface px-3 py-2.5 transition-colors hover:border-accent sm:p-4 xl:grid xl:min-h-24 xl:grid-cols-[auto_minmax(0,1fr)] xl:content-center xl:items-center xl:gap-x-3 xl:gap-y-1 xl:p-4 2xl:p-5 ${focus}`}>
                  <span className="mb-1.5 flex items-center justify-between gap-2 text-accent xl:row-span-2 xl:mb-0 xl:size-10 xl:justify-center xl:rounded-lg xl:bg-accent/10">
                    <Icon aria-hidden="true" className="size-5" />
                    <ArrowIcon aria-hidden="true" className="size-4 opacity-70 xl:hidden" />
                  </span>
                  <span className="text-sm font-bold leading-5 group-hover:text-accent xl:text-base">{label}</span>
                  <span className="mt-1 text-xs leading-5 text-muted xl:mt-0 xl:text-sm">{description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Suspense fallback={<h2 className="text-lg font-bold">آخر الإعلانات</h2>}><LatestNews /></Suspense>
      </div>
    </div>
  );
}

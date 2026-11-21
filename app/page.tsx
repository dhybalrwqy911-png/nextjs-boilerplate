import Link from "next/link";
import { BookIcon, BriefcaseIcon, BuildingIcon, MapPinIcon, ShieldIcon } from "@/components/icons";

const services = [
  { href: "/join", title: "الانضمام والتفعيل", description: "خطوات دخول السيرفر والتفعيل عبر ديسكورد.", Icon: ShieldIcon },
  { href: "/rules", title: "مركز القوانين", description: "قوانين الرول بلاي وديسكورد والقطاعات.", Icon: BookIcon },
  { href: "/departments", title: "القطاعات الحكومية", description: "دليل الشرطة والإسعاف والإدارة الحكومية.", Icon: BuildingIcon },
  { href: "/news/sectors-applications", title: "التقديم على القطاعات", description: "تعليمات التقديم وبوابة الشرطة والإسعاف.", Icon: BriefcaseIcon },
  { href: "/jobs", title: "الوظائف والاقتصاد", description: "المهن المدنية والموارد والخدمات.", Icon: BriefcaseIcon },
  { href: "/map", title: "دليل مواقع المدينة", description: "المرافق والمناطق بحسب التصنيف.", Icon: MapPinIcon },
];

export default function Home() {
  return (
    <>
      <section aria-labelledby="portal-title" className="border-b border-border bg-surface px-4 pb-7 pt-24 md:px-8 md:pb-10 md:pt-28">
        <div className="mx-auto max-w-6xl border-s-2 border-accent ps-4 md:ps-6">
          <h1 id="portal-title" className="text-3xl font-black md:text-5xl">بوابة عرب ريفورجر</h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-muted md:text-base">دليل مجتمع الرول بلاي في Arma Reforger وخدمات الانضمام والتقديم.</p>
        </div>
      </section>

      <section id="welcome" aria-labelledby="services-title" className="mx-auto max-w-6xl px-4 py-7 md:px-8 md:py-10">
        <h2 id="services-title" className="mb-3 text-xl font-black md:text-2xl">خدمات اللاعبين</h2>
        <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ href, title, description, Icon }) => (
            <li key={href}>
              <Link href={href} className="flex h-full min-h-20 items-start gap-3 rounded-md border border-border bg-surface p-3 hover:border-accent focus-visible:outline-2 focus-visible:outline-accent md:p-5">
                <span className="grid size-9 shrink-0 place-items-center rounded bg-accent/10 text-accent"><Icon aria-hidden="true" className="size-5" /></span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <nav aria-label="روابط المجتمع" className="mx-auto flex max-w-6xl flex-wrap gap-2 px-4 pb-8 md:px-8">
        <Link className="inline-flex min-h-11 items-center rounded border border-border px-3 text-sm font-bold text-accent" href="/news">الأخبار والإعلانات</Link>
        <Link className="inline-flex min-h-11 items-center rounded border border-border px-3 text-sm font-bold text-accent" href="/store">المتجر</Link>
        <Link className="inline-flex min-h-11 items-center rounded border border-border px-3 text-sm font-bold text-accent" href="/roleplay">دليل الرول بلاي</Link>
        <Link className="inline-flex min-h-11 items-center rounded border border-border px-3 text-sm font-bold text-accent" href="/about">عن المجتمع</Link>
      </nav>
    </>
  );
}

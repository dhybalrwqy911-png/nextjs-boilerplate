import type { Metadata } from "next";
import Link from "next/link";
import { BriefcaseIcon, MapPinIcon } from "@/components/icons";
import { PageShell } from "@/components/page-shell";
import { RoleplayWorld } from "@/components/roleplay-world";

export const metadata: Metadata = { title: "عالم الرول بلاي | ARAB REFORGER" };

const guides = [
  { href: "/jobs", title: "الوظائف والاقتصاد", description: "استكشف المهن والخدمات المدنية.", Icon: BriefcaseIcon },
  { href: "/map", title: "خريطة المدينة", description: "تعرّف على المواقع والمرافق داخل السيرفر.", Icon: MapPinIcon },
];

export default function Page() {
  return (
    <PageShell title="عالم الرول بلاي" description="اختر شخصيتك، وابدأ مسارك بين الحياة المدنية والخدمة العامة والمواقف اليومية.">
      <nav aria-label="أدلة عالم الرول بلاي" className="mx-auto grid max-w-7xl gap-3 px-4 pt-5 sm:grid-cols-2 md:px-8 md:pt-8">
        {guides.map(({ href, title, description, Icon }) => (
          <Link key={href} href={href} className="flex min-h-20 items-start gap-3 rounded-lg border border-border bg-surface p-4 hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">
            <span className="grid size-9 shrink-0 place-items-center rounded-md bg-accent/10 text-accent"><Icon aria-hidden="true" className="size-5" /></span>
            <div>
              <span className="block font-bold">{title}</span>
              <span className="mt-1 block text-sm leading-6 text-muted">{description}</span>
            </div>
          </Link>
        ))}
      </nav>
      <RoleplayWorld />
    </PageShell>
  );
}

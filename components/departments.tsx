import Link from "next/link";
import { departments } from "@/lib/content";

export function Departments() {
  return (
    <section id="departments" aria-labelledby="departments-title" className="mx-auto max-w-7xl px-4 py-5 md:px-8 md:py-10 xl:max-w-[94rem] xl:px-10">
      <h2 id="departments-title" className="mb-3 text-lg font-black md:mb-5 md:text-2xl">اختر قطاعك</h2>
      <ul className="grid gap-2.5 md:grid-cols-3 md:gap-4">
        {departments.map((department) => (
          <li key={department.slug}>
            <Link href={`/departments/${department.slug}`} className="group grid h-full min-h-[84px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border border-border bg-surface p-2.5 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent md:items-start md:p-3 xl:min-h-32 xl:gap-4 xl:p-5">
              <department.Icon aria-hidden="true" className="size-6 text-accent" />
              <div>
                <h3 className="font-black md:text-lg">{department.name}</h3>
                <p className="mt-1 text-sm leading-5 text-foreground/80">{department.short}</p>
              </div>
              <span aria-hidden="true" className="text-lg text-accent">←</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/news/sectors-applications" className="mt-4 inline-flex min-h-11 items-center justify-center border border-accent px-4 py-2 text-sm font-bold text-accent hover:bg-accent hover:text-background">التقديم على القطاعات</Link>
    </section>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { departments } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return departments.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  return { title: `${department?.name ?? "القطاع"} | ARAB REFORGER` };
}

function DepartmentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details name="department-details" className="group border border-border bg-surface">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 font-bold focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
        {title}
        <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-180 motion-reduce:transition-none">⌄</span>
      </summary>
      <div className="border-t border-border p-4 md:p-5">{children}</div>
    </details>
  );
}

export default async function DepartmentPage({ params }: Props) {
  const { slug } = await params;
  const department = departments.find((item) => item.slug === slug);
  if (!department) notFound();

  return (
    <PageShell title={department.name} description={department.short}>
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 md:px-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-8">
        <section aria-labelledby="department-intro">
          <Link href="/departments" className="inline-flex min-h-11 items-center font-bold text-accent">→ جميع القطاعات</Link>
          <h2 id="department-intro" className="mt-2 text-xl font-black">عن القطاع</h2>
          <p className="mt-2 text-sm leading-7 text-foreground/80 md:text-base">{department.intro}</p>
        </section>
        <section aria-label="تفاصيل القطاع" className="grid content-start gap-2.5">
          <DepartmentSection title="المهام والمسؤوليات">
            <ul className="grid gap-3 sm:grid-cols-2">
              {department.responsibilities.map(({ title, text }) => (
                <li key={title} className="border border-border bg-background p-3">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-foreground/80">{text}</p>
                </li>
              ))}
            </ul>
          </DepartmentSection>
          <DepartmentSection title="أنشطة القطاع">
            <ul className="list-disc space-y-2 ps-5 text-sm leading-6 text-foreground/80">
              {department.activities.map((activity) => <li key={activity}>{activity}</li>)}
            </ul>
          </DepartmentSection>
          <DepartmentSection title="خطوات المشاركة">
            <ol className="list-decimal space-y-3 ps-5 marker:font-bold marker:text-accent">
              {department.participation.map(({ title, text }) => (
                <li key={title}>
                  <h3 className="font-bold">{title}</h3>
                  <p className="text-sm leading-6 text-foreground/80">{text}</p>
                </li>
              ))}
            </ol>
          </DepartmentSection>
          <Link href="/news/sectors-applications" className="mt-1 inline-flex min-h-11 items-center justify-center bg-accent px-4 py-2 text-center font-bold text-background">التقديم على القطاعات</Link>
        </section>
      </div>
    </PageShell>
  );
}

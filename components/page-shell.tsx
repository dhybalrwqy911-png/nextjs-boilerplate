import type { ReactNode } from "react";
import Link from "next/link";

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
  parent?: { href: string; label: string };
};

export function PageShell({ title, description, children, parent }: PageShellProps) {
  return (
    <>
      <section aria-labelledby="page-title" className="border-b border-border bg-surface px-4 pb-5 pt-16 sm:pt-18 md:px-8 md:pb-8">
        <div className="mx-auto max-w-7xl xl:max-w-[94rem] xl:px-2">
          <nav aria-label="مسار التنقل" className="flex flex-wrap items-center gap-x-3">
            <Link href="/explore" className="inline-flex min-h-11 items-center rounded-sm text-sm font-bold text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent">استكشف الموقع</Link>
            {parent && (
              <Link href={parent.href} className="inline-flex min-h-11 items-center rounded border border-border px-3 text-sm font-bold text-accent hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">
                {parent.label}
              </Link>
            )}
          </nav>
          <h1 id="page-title" className="text-2xl font-black leading-snug sm:text-4xl">{title}</h1>
          <p className="mt-1.5 max-w-3xl text-sm leading-6 text-muted md:text-base">{description}</p>
        </div>
      </section>
      {children}
    </>
  );
}

export function TextPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
      <h2 className="mb-4 text-xl font-black md:text-3xl">{title}</h2>
      <div className="text-base leading-7 text-foreground/80">{children}</div>
    </section>
  );
}

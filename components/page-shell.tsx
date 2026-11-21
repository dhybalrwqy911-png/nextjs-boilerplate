import type { ReactNode } from "react";
import Link from "next/link";

type PageShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <>
      <section aria-labelledby="page-title" className="border-b border-border bg-surface px-4 pb-6 pt-24 md:px-8 md:pb-9 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <Link href="/" className="inline-flex min-h-11 items-center text-sm font-bold text-accent">الرئيسية</Link>
          <h1 id="page-title" className="text-2xl font-black leading-snug sm:text-4xl">{title}</h1>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-muted md:text-base">{description}</p>
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

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { href: string; label: string };

type PageHeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export function PageHero({ image, alt, eyebrow, title, description, crumbs = [], children }: PageHeroProps) {
  const trail = [{ href: "/", label: "الرئيسية" }, ...crumbs];
  return (
    <section
      aria-labelledby="page-title"
      className="grain relative isolate flex min-h-[68svh] items-end overflow-hidden border-b border-border md:min-h-[74svh]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="animate-hero-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-l from-background/85 via-background/20 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pb-20">
        <nav aria-label="مسار التنقل" className="animate-fade-up" style={{ animationDelay: "100ms" }}>
          <ol className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
            {trail.map((c, i) => {
              const last = i === trail.length - 1;
              return (
                <li key={c.href + c.label} className="flex items-center gap-2">
                  {last ? (
                    <span aria-current="page" className="text-foreground">
                      {c.label}
                    </span>
                  ) : (
                    <>
                      <Link href={c.href} className="transition-colors hover:text-foreground">
                        {c.label}
                      </Link>
                      <span aria-hidden="true" className="text-accent">
                        /
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-8 max-w-3xl">
          <p
            className="animate-fade-up flex items-center gap-3 font-display text-xs uppercase tracking-[0.4em] text-accent md:text-sm"
            dir="ltr"
            style={{ animationDelay: "200ms", justifyContent: "flex-end" }}
          >
            {eyebrow}
            <span className="h-px w-12 bg-accent" />
          </p>
          <h1
            id="page-title"
            className="animate-fade-up mt-5 text-balance text-5xl font-black leading-[1.1] text-foreground md:text-7xl"
            style={{ animationDelay: "320ms" }}
          >
            {title}
          </h1>
          <p
            className="animate-fade-up mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/75 md:text-xl"
            style={{ animationDelay: "440ms" }}
          >
            {description}
          </p>
          {children ? (
            <div className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "560ms" }}>
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

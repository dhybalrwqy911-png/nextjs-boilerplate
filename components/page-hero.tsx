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
  compactOnMobile?: boolean;
  crumbs?: Crumb[];
  children?: ReactNode;
};

export function PageHero({ image, alt, eyebrow, title, description, crumbs = [], compactOnMobile = false, children }: PageHeroProps) {
  const trail = [{ href: "/", label: "الرئيسية" }, ...crumbs];
  return (
    <section
      aria-labelledby="page-title"
      className={`grain relative isolate flex items-end overflow-hidden border-b border-border md:min-h-[74svh] ${compactOnMobile ? "" : "min-h-[68svh]"}`}
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

      <div className={`mx-auto w-full max-w-7xl px-5 md:px-8 md:pb-20 md:pt-32 ${compactOnMobile ? "pb-6 pt-24" : "pb-14 pt-32"}`}>
        <nav aria-label="مسار التنقل" className={compactOnMobile ? "hidden animate-fade-up md:block" : "animate-fade-up"} style={{ animationDelay: "100ms" }}>
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

        <div className={compactOnMobile ? "max-w-3xl md:mt-8" : "mt-8 max-w-3xl"}>
          <p
            className={`animate-fade-up items-center gap-3 font-display text-xs uppercase tracking-[0.4em] text-accent md:flex md:text-sm ${compactOnMobile ? "hidden" : "flex"}`}
            dir="ltr"
            style={{ animationDelay: "200ms", justifyContent: "flex-end" }}
          >
            {eyebrow}
            <span className="h-px w-12 bg-accent" />
          </p>
          <h1
            id="page-title"
            className={`animate-fade-up text-balance font-black leading-[1.1] text-foreground md:mt-5 md:text-7xl ${compactOnMobile ? "text-3xl" : "mt-5 text-5xl"}`}
            style={{ animationDelay: "320ms" }}
          >
            {title}
          </h1>
          <p
            className={`animate-fade-up max-w-2xl text-pretty leading-relaxed text-foreground/75 md:mt-6 md:text-xl ${compactOnMobile ? "mt-2 text-sm" : "mt-6 text-lg"}`}
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

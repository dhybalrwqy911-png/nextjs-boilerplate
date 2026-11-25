"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { communityNavigation, isActivePath, navItems, worldNavigation } from "@/lib/site";
import { ArrowIcon, CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

const mobileGroups = [
  { title: "المجتمع", links: [...communityNavigation, { href: "/about", label: "عن المجتمع" }] },
  {
    title: "داخل اللعبة",
    links: [
      ...worldNavigation,
      { href: "/jobs", label: "الوظائف والاقتصاد" },
      { href: "/map", label: "خريطة المدينة" },
    ],
  },
];

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const menuButton = useRef<HTMLButtonElement>(null);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 80rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false);
    };
    closeOnDesktop();
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background"
    >
      <div className="mx-auto flex h-16 max-w-7xl sm:h-18 items-center justify-between gap-3 px-4 md:px-8">
        <Link href="/explore" onClick={closeMobileMenu} aria-label="ARAB REFORGER - استكشف الموقع" className={`min-w-0 rounded-sm ${focus}`}>
          <Logo />
        </Link>

        <nav aria-label="القائمة الرئيسية" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              const linkClass = `relative inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-3 text-sm font-semibold transition-colors ${focus} ${
                active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
              }`;
              const indicator = (
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              );

              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={linkClass}>
                    {item.label}
                    {indicator}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className={`hidden min-h-11 items-center whitespace-nowrap rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-colors hover:bg-foreground xl:inline-flex ${focus}`}
          >
            دليل الانضمام
          </Link>
          <button
            ref={menuButton}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className={`flex size-11 items-center justify-center rounded-lg border border-border text-foreground xl:hidden ${focus}`}
          >
            {mobileOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-border bg-background shadow-xl sm:max-h-[calc(100dvh-4.5rem)] xl:hidden"
      >
        <nav aria-label="القائمة المحمولة" className="mx-auto max-w-lg space-y-4 px-4 py-4 sm:px-6">
          <Link
            href="/join"
            onClick={closeMobileMenu}
            aria-current={pathname === "/join" ? "page" : undefined}
            className={`flex min-h-11 items-center justify-between rounded-lg bg-accent px-3 py-2 text-sm font-bold text-accent-foreground ${focus}`}
          >
            دليل الانضمام <ArrowIcon aria-hidden="true" className="size-4" />
          </Link>
          {mobileGroups.map(({ title, links }) => (
            <section key={title} aria-label={title}>
              <h2 className="mb-1.5 text-sm font-bold text-muted">{title}</h2>
              <ul className="grid grid-cols-2 gap-1.5">
                {links.map(({ href, label }) => {
                  const active = href === "/roleplay" ? pathname === href : isActivePath(pathname, href);
                  return (
                    <li key={href} className="min-w-0">
                      <Link
                        href={href}
                        onClick={closeMobileMenu}
                        aria-current={pathname === href ? "page" : undefined}
                        className={`flex min-h-11 items-center rounded-lg border px-2.5 py-2 text-sm font-bold leading-5 ${focus} ${active ? "border-accent/60 bg-accent/10 text-accent" : "border-border/60 bg-surface text-foreground hover:border-accent"}`}
                      >{label}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
      </div>
    </header>
  );
}

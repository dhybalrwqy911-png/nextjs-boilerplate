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
  const menuDialog = useRef<HTMLDialogElement>(null);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const dialog = menuDialog.current;
    if (!mobileOpen || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
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
      <div className="mx-auto flex h-16 max-w-7xl sm:h-18 items-center justify-between gap-3 px-4 md:px-8 xl:max-w-[104rem] xl:px-10 2xl:px-12">
        <Link href="/explore" onClick={closeMobileMenu} aria-label="ARAB REFORGER - استكشف الموقع" className={`min-w-0 rounded-sm ${focus}`}>
          <Logo />
        </Link>

        <nav aria-label="القائمة الرئيسية" className="hidden xl:block">
          <ul className="flex items-center gap-1 2xl:gap-2">
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
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label="فتح القائمة"
            className={`flex size-11 items-center justify-center rounded-lg border border-border text-foreground xl:hidden ${focus}`}
          >
            <MenuIcon aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>

      <dialog
        ref={menuDialog}
        id="mobile-menu"
        aria-labelledby="mobile-menu-title"
        onCancel={(event) => {
          event.preventDefault();
          closeMobileMenu();
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-background text-foreground backdrop:bg-black/75 sm:ms-0 sm:w-[min(100%,26rem)] sm:border-e sm:border-border xl:hidden"
      >
        <div className="flex h-full flex-col">
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-2 sm:px-6">
            <h2 id="mobile-menu-title" className="text-lg font-bold">القائمة</h2>
            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="إغلاق القائمة"
              className={`grid size-11 place-items-center rounded-lg border border-border ${focus}`}
            >
              <CloseIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
          <nav aria-label="القائمة المحمولة" className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6">
            <Link
              href="/join"
              onClick={closeMobileMenu}
              aria-current={pathname === "/join" ? "page" : undefined}
              className={`flex min-h-11 items-center justify-between gap-2 rounded-lg bg-accent px-3 py-2 text-sm font-bold text-accent-foreground ${focus}`}
            >
              دليل الانضمام <ArrowIcon aria-hidden="true" className="size-4 shrink-0" />
            </Link>
            {mobileGroups.map(({ title, links }) => (
              <section key={title} aria-label={title}>
                <h3 className="mb-1.5 px-1 text-sm font-bold text-muted">{title}</h3>
                <ul className="divide-y divide-border/60 rounded-lg border border-border/75 bg-surface">
                  {links.map(({ href, label }) => {
                    const active = href === "/roleplay" ? pathname === href : isActivePath(pathname, href);
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={closeMobileMenu}
                          aria-current={pathname === href ? "page" : undefined}
                          className={`flex min-h-11 items-center justify-between gap-2 rounded-sm px-3 py-2 text-sm font-bold leading-5 ${focus} ${active ? "bg-accent/10 text-accent" : "text-foreground hover:text-accent"}`}
                        >
                          {label} <ArrowIcon aria-hidden="true" className="size-4 shrink-0 text-accent/80" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </nav>
        </div>
      </dialog>
    </header>
  );
}

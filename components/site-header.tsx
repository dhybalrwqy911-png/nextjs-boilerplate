"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { isActivePath, navItems } from "@/lib/site";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [lastPath, setLastPath] = useState(pathname);

  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "border-b border-border bg-background/90 backdrop-blur-md" : "border-b border-transparent bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Link href="/" aria-label="ARAB REFORGER - الرئيسية" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="القائمة الرئيسية" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              const linkClass = `relative px-3 py-2 text-sm font-semibold transition-colors ${
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

              if (!item.children) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={linkClass}>
                      {item.label}
                      {indicator}
                    </Link>
                  </li>
                );
              }

              const menuOpen = openMenu === item.href;
              const menuId = `menu-${item.href.slice(1)}`;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.href)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenMenu(null);
                  }}
                >
                  <div className="flex items-center">
                    <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={linkClass}>
                      {item.label}
                      {indicator}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={menuOpen}
                      aria-controls={menuId}
                      aria-label={`قائمة ${item.label}`}
                      onClick={() => setOpenMenu(menuOpen ? null : item.href)}
                      className="-mr-2 flex size-7 items-center justify-center text-foreground/70 hover:text-foreground"
                    >
                      <ChevronDownIcon className={`size-4 transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  <div
                    id={menuId}
                    className={`absolute right-0 top-full pt-3 transition-all duration-300 ${
                      menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="w-72 border border-border bg-background/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-md">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={childActive ? "page" : undefined}
                              className={`flex flex-col gap-0.5 border-r-2 px-4 py-3 transition-colors ${
                                childActive
                                  ? "border-accent bg-surface-2"
                                  : "border-transparent hover:border-accent/60 hover:bg-surface-2/60"
                              }`}
                            >
                              <span className="text-sm font-bold text-foreground">{child.label}</span>
                              <span className="text-xs text-muted">{child.description}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/join"
            className="hidden bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-foreground sm:inline-flex"
          >
            انضم إلينا
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className="flex size-11 items-center justify-center border border-border text-foreground xl:hidden"
          >
            {mobileOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!mobileOpen}
        className={`fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-background transition-all duration-300 xl:hidden ${
          mobileOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav aria-label="القائمة المحمولة" className="mx-auto flex max-w-7xl flex-col px-5 py-6 md:px-8">
          <ul className="flex flex-col">
            {navItems.map((item, i) => {
              const active = isActivePath(pathname, item.href);
              const expanded = mobileExpanded === item.href;
              return (
                <li key={item.href} className="border-b border-border">
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`flex flex-1 items-center justify-between py-4 text-xl font-bold ${
                        active ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {item.label}
                      <span className="font-display text-xs text-muted" dir="ltr">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                    {item.children ? (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`mobile-sub-${i}`}
                        aria-label={`قائمة ${item.label}`}
                        onClick={() => setMobileExpanded(expanded ? null : item.href)}
                        className="mr-3 flex size-10 items-center justify-center border border-border text-foreground"
                      >
                        <ChevronDownIcon className={`size-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                      </button>
                    ) : null}
                  </div>
                  {item.children ? (
                    <div
                      id={`mobile-sub-${i}`}
                      className={`grid transition-all duration-300 ${expanded ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"}`}
                    >
                      <ul className="flex flex-col gap-1 overflow-hidden" inert={!expanded}>
                        {item.children.slice(1).map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              aria-current={pathname === child.href ? "page" : undefined}
                              className={`flex flex-col border-r-2 py-2 pr-4 ${
                                pathname === child.href ? "border-accent" : "border-border"
                              }`}
                            >
                              <span className="font-bold text-foreground">{child.label}</span>
                              <span className="text-xs text-muted">{child.description}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-8 bg-accent px-6 py-4 text-center text-lg font-bold text-accent-foreground"
          >
            انضم إلينا
          </Link>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:right-4 focus:top-4 focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        تخطَّ إلى المحتوى
      </a>
      <nav
        aria-label="التنقل الرئيسي"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 md:px-8"
      >
        <a href="#home" aria-label="ARAB REFORGER - الرئيسية" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`relative px-3 py-2 text-sm font-semibold transition-colors hover:text-foreground ${
                  active === link.href ? "text-foreground" : "text-foreground/70"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent transition-transform duration-300 ${
                    active === link.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#join"
            className="hidden bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-colors hover:bg-foreground sm:inline-flex"
          >
            انضم إلينا
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border border-border text-foreground xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background xl:hidden"
      >
        <ul className="flex flex-col px-5 py-6">
          {navLinks.map((link, i) => (
            <li key={link.href} className="border-b border-border">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-bold text-foreground"
              >
                {link.label}
                <span className="font-display text-xs text-muted" dir="ltr">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
          <li className="pt-6">
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="flex justify-center bg-accent py-4 text-lg font-bold text-accent-foreground"
            >
              انضم إلينا
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

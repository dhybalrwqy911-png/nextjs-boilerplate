import Link from "next/link";
import type { ReactNode } from "react";
import { DISCORD_URL } from "@/lib/site";
import { ArrowIcon, ChatIcon } from "./icons";

const base =
  "group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={`${base} bg-accent text-accent-foreground hover:bg-foreground`}>
      {children}
      <ArrowIcon className="size-5 transition-transform group-hover:-translate-x-1" />
    </Link>
  );
}

export function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className={`${base} border border-foreground/40 bg-black/30 text-foreground backdrop-blur-sm hover:border-foreground hover:bg-foreground/10`}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 border-b border-accent pb-1 text-sm font-bold text-accent transition-colors hover:text-foreground"
    >
      {children}
      <ArrowIcon className="size-4 transition-transform group-hover:-translate-x-1" />
    </Link>
  );
}

export function DiscordButton({ label = "انضم عبر الديسكورد" }: { label?: string }) {
  if (DISCORD_URL) {
    return (
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-accent text-accent-foreground hover:bg-foreground`}
      >
        <ChatIcon className="size-5" />
        {label}
      </a>
    );
  }
  return (
    <span
      aria-disabled="true"
      title="رابط الديسكورد قيد الإضافة"
      className={`${base} cursor-not-allowed flex-col gap-1 border border-dashed border-accent/60 bg-accent/10 text-foreground`}
    >
      <span className="flex items-center gap-3">
        <ChatIcon className="size-5 text-accent" />
        {label}
      </span>
      <span className="text-xs font-semibold text-muted">رابط الدعوة قيد الإضافة</span>
    </span>
  );
}

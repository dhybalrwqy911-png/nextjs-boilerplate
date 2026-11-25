"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath } from "@/lib/site";
import { BookIcon, BuildingIcon, ChatIcon, ShieldIcon } from "./icons";

const links = [
  { href: "/", label: "الرئيسية", Icon: BuildingIcon },
  { href: "/rules", label: "القوانين", Icon: BookIcon },
  { href: "/departments", label: "القطاعات", Icon: ShieldIcon },
  { href: "/join", label: "الانضمام", Icon: ChatIcon },
];

export function MobileNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="روابط الجوال السريعة" className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background px-2 pb-[env(safe-area-inset-bottom)] xl:hidden">
      <ul className="mx-auto grid max-w-lg grid-cols-4">
        {links.map(({ href, label, Icon }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center gap-0.5 rounded-md px-1 text-center text-xs font-bold focus-visible:outline-2 focus-visible:outline-accent ${isActivePath(pathname, href) ? "bg-accent/10 text-accent" : "text-foreground"}`}
            >
              <Icon aria-hidden="true" className="size-5" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sectionTheme } from "@/lib/section-theme";

type SiteFrameProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
};

export function SiteFrame({ children, header, footer }: SiteFrameProps) {
  const pathname = usePathname();
  const landing = pathname === "/";

  return (
    <div className={landing ? "bg-background" : "site-frame flex min-h-svh flex-col data-[section-theme=store]:before:hidden"} data-section-theme={sectionTheme(pathname)}>
      {!landing && header}
      <main id="main" className="min-w-0 break-words xl:flex-1">{children}</main>
      {!landing && pathname !== "/store" && footer}
    </div>
  );
}

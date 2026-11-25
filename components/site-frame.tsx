"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sectionTheme } from "@/lib/section-theme";

type SiteFrameProps = {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  mobileNavigation: ReactNode;
};

export function SiteFrame({ children, header, footer, mobileNavigation }: SiteFrameProps) {
  const pathname = usePathname();
  const landing = pathname === "/";

  return (
    <div className={landing ? "bg-background" : "site-frame max-xl:pb-[calc(3.5rem+env(safe-area-inset-bottom))]"} data-section-theme={sectionTheme(pathname)}>
      {!landing && header}
      <main id="main" className="min-w-0 break-words">{children}</main>
      {!landing && footer}
      {!landing && mobileNavigation}
    </div>
  );
}

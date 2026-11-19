"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { sectionTheme } from "@/lib/section-theme";

export function SiteFrame({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <div className="site-frame" data-section-theme={sectionTheme(pathname)}>{children}</div>;
}

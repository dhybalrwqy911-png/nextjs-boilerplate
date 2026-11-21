import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { InteractiveMap } from "@/components/interactive-map";

export const metadata: Metadata = { title: "الخريطة | ARAB REFORGER" };

export default function Page() {
  return (
    <PageShell parent={{ href: "/roleplay", label: "الرجوع إلى عالم الرول بلاي" }} title="الخريطة" description="دليل تفاعلي استرشادي للمناطق والجهات والمواقع المهمة.">
      <InteractiveMap />
    </PageShell>
  );
}

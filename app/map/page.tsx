import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { InteractiveMap } from "@/components/interactive-map";

export const metadata: Metadata = { title: "الخريطة | ARAB REFORGER" };

export default function Page() {
  return (
    <PageShell parent={{ href: "/roleplay", label: "عالم الرول بلاي" }} title="الخريطة" description="دليل تفاعلي للمناطق والمرافق. المواقع استرشادية إلى حين إطلاق الخريطة الرسمية.">
      <InteractiveMap />
    </PageShell>
  );
}

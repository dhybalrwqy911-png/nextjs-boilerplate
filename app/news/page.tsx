import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { News } from "@/components/news";

export const metadata: Metadata = { title: "الأخبار والتحديثات | ARAB REFORGER" };

export default function Page() {
  return (
    <PageShell title="الأخبار والتحديثات" description="أخبار المجتمع وإعلانات القطاعات وتحديثات الأنظمة.">
      <News />
    </PageShell>
  );
}

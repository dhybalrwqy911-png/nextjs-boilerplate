import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { StoreCatalog } from "@/components/store-catalog";

export const metadata: Metadata = { title: "المتجر | عرب ريفورجر" };

export default function StorePage() {
  return (
    <PageShell title="متجر عرب ريفورجر" description="معاينة للباقات المقترحة. البيع والأسعار بانتظار الاعتماد.">
      <StoreCatalog />
    </PageShell>
  );
}

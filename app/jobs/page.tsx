import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Jobs } from "@/components/jobs";

const title = "الوظائف والاقتصاد";
const description = "تعرّف على مجالات العمل والموارد والتصنيع والخدمات في عالم عرب ريفورجر.";

export const metadata: Metadata = { title: `${title} | ARAB REFORGER` };

export default function Page() {
  return (
    <PageShell title={title} description={description}>
      <div className="pt-4 md:hidden"><Jobs compact /></div>
      <div className="hidden md:block"><Jobs /></div>
    </PageShell>
  );
}

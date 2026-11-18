import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Jobs } from "@/components/jobs";

const title = "الوظائف والاقتصاد";
const description = "تعرّف على مجالات العمل والموارد والتصنيع والخدمات في عالم عرب ريفورجر.";

export const metadata: Metadata = { title: `${title} | ARAB REFORGER` };

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-xl px-4 pb-4 pt-24 md:hidden">
        <h1 className="text-3xl font-black leading-tight">{title}</h1>
        <p className="mt-2 text-sm leading-6 text-muted">استخرج الموارد، انقلها أو صنّعها، أو اختر إحدى المهن والخدمات في المدينة.</p>
      </div>
      <div className="hidden md:block">
        <PageShell image="/images/jobs.png" eyebrow="CAREERS & ECONOMY" title={title} description={description}>
          <Jobs />
        </PageShell>
      </div>
      <div className="md:hidden"><Jobs compact /></div>
    </>
  );
}

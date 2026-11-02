import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Jobs } from "@/components/jobs";
export const metadata:Metadata={title:"الوظائف والاقتصاد | ARAB REFORGER"};
export default function Page(){return <PageShell image="/images/jobs.png" eyebrow="CAREERS & ECONOMY" title="الوظائف والاقتصاد" description="تعرّف على مجالات العمل والموارد والتصنيع والخدمات في عالم عرب ريفورجر."><Jobs/></PageShell>}

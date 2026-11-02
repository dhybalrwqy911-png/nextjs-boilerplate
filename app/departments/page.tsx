import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Departments } from "@/components/departments";
export const metadata:Metadata={title:"القطاعات الحكومية | ARAB REFORGER"};
export default function Page(){return <PageShell image="/images/government.png" eyebrow="GOVERNMENT" title="القطاعات الحكومية" description="تعرف على الجهات الحكومية وأدوارها في خدمة المدينة وحماية سكانها."><Departments/></PageShell>}

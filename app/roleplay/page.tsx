import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { RoleplayWorld } from "@/components/roleplay-world";
export const metadata:Metadata={title:"عالم الرول بلاي | ARAB REFORGER"};
export default function Page(){return <PageShell image="/images/civilian.png" eyebrow="ROLEPLAY WORLD" title="عالم الرول بلاي" description="اختر شخصيتك، وابدأ مسارك بين الحياة المدنية والخدمة العامة والمواقف اليومية."><RoleplayWorld/></PageShell>}

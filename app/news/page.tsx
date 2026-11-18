import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { News } from "@/components/news";
export const metadata:Metadata={title:"الأخبار والتحديثات | ARAB REFORGER"};
export default function Page(){return <PageShell image="/images/community-newsroom.webp" eyebrow="ARAB REFORGER NEWS" title="الأخبار والتحديثات" description="من قلب المجتمع: أخبار عرب ريفورجر وإعلانات القطاعات وتحديثات الأنظمة."><News/></PageShell>}

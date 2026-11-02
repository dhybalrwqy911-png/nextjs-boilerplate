import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { News } from "@/components/news";
export const metadata:Metadata={title:"الأخبار والتحديثات | ARAB REFORGER"};
export default function Page(){return <PageShell image="/images/news.png" eyebrow="LATEST NEWS" title="الأخبار والتحديثات" description="مساحة لمتابعة أخبار المجتمع وإعلاناته وتحديثاته."><News/></PageShell>}

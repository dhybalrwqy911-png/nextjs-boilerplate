import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { InteractiveMap } from "@/components/interactive-map";
export const metadata:Metadata={title:"الخريطة | ARAB REFORGER"};
export default function Page(){return <PageShell title="الخريطة" description="دليل تفاعلي استرشادي للمناطق والجهات والمواقع المهمة."><InteractiveMap/></PageShell>}

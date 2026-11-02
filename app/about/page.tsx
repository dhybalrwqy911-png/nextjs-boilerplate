import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { About } from "@/components/about";
export const metadata:Metadata={title:"عن عرب ريفورجر | ARAB REFORGER"};
export default function Page(){return <PageShell image="/images/about-roleplay.webp" eyebrow="ABOUT US" title="عن عرب ريفورجر" description="مجتمع عربي يقدم تجربة رول بلاي تقوم على التفاعل والواقعية واحترام القصة."><About/></PageShell>}

import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { Rules } from "@/components/rules";
export const metadata:Metadata={title:"القوانين | ARAB REFORGER"};
export default function Page(){return <PageShell image="/images/rules.png" eyebrow="SERVER RULES" title="القوانين" description="راجع الأنظمة والتصنيفات قبل البدء في اللعب."><Rules/></PageShell>}

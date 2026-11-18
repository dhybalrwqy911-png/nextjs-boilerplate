import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { News } from "@/components/news";
export const metadata:Metadata={title:"الأخبار والتحديثات | ARAB REFORGER"};
export default function Page() {
  return <>
    <div className="mx-auto max-w-xl px-4 pb-3 pt-24 md:hidden">
      <h1 className="text-3xl font-black">الأخبار والتحديثات</h1>
      <p className="mt-2 text-sm leading-6 text-muted">أخبار المجتمع وإعلانات القطاعات وتحديثات الأنظمة.</p>
      <Image src="/images/community-newsroom.webp" alt="استوديو أخبار عرب ريفورجر" width={1672} height={941} sizes="100vw" className="mt-4 h-auto w-full border border-border" />
    </div>
    <div className="hidden md:block">
      <PageShell image="/images/community-newsroom.webp" eyebrow="ARAB REFORGER NEWS" title="الأخبار والتحديثات" description="من قلب المجتمع: أخبار عرب ريفورجر وإعلانات القطاعات وتحديثات الأنظمة.">
        <News />
      </PageShell>
    </div>
    <div className="md:hidden"><News compact /></div>
  </>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, TextPanel } from "@/components/page-shell";
import { About } from "@/components/about";
export const metadata: Metadata = { title: "تعرّف على الإدارة | ARAB REFORGER" };
export default function Page() { return <PageShell image="/images/management-team.webp" eyebrow="OUR MANAGEMENT" title="إدارة عرب ريفورجر" description="تعرّف على الفريق خلف المجتمع، ودور الإدارة في الدعم والتنظيم والتطوير.">
  <About />
  <div className="border-y border-border bg-surface"><TextPanel title="مجالات عمل الإدارة">
    <p className="max-w-4xl">العمل الإداري يجمع بين التواصل مع اللاعبين وفهم أنظمة الرول بلاي ومتابعة التشغيل. توضح المجالات التالية طبيعة العمل الذي يخدم المجتمع؛ وتُضاف أسماء أعضاء الفريق وخبراتهم الفردية عند اعتماد بياناتهم.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-3">{[
      ["إدارة المجتمع", "التواصل الواضح، تنظيم قنوات الدعم، ومتابعة الملاحظات والبلاغات."],
      ["تنظيم التجربة", "فهم سيناريوهات الرول بلاي والقوانين، ومراجعة الوقائع والأدلة قبل معالجة المشكلات."],
      ["التنسيق التقني", "نقل المشكلات للجهة المختصة ومتابعة الملاحظات المرتبطة بالأنظمة والتحديثات."],
    ].map(([title,text]) => <article key={title} className="border border-border bg-background p-6"><h3 className="text-xl font-bold text-foreground">{title}</h3><p className="mt-3 text-base leading-8 text-muted">{text}</p></article>)}</div>
  </TextPanel></div>
  <TextPanel title="كيف تتواصل مع الإدارة؟">
    <p className="max-w-4xl">ادخل ديسكورد المجتمع وافتح تذكرة في القسم المناسب، واشرح طلبك بوضوح وأرفق ما يساعد على مراجعته. تُتابع الحالة مع الفريق المختص، ويمكن رفع الملاحظات والاقتراحات عبر القنوات المخصصة.</p>
    <Link href="/join" className="mt-8 inline-block bg-accent px-6 py-4 text-base font-bold text-accent-foreground">التواصل والانضمام إلى المجتمع ←</Link>
  </TextPanel>
</PageShell>; }

import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, TextPanel } from "@/components/page-shell";
import { About } from "@/components/about";
export const metadata: Metadata = { title: "تعرّف على الإدارة | ARAB REFORGER" };
export default function Page() { return <PageShell compactOnMobile image="/images/management-team.webp" eyebrow="OUR MANAGEMENT" title="إدارة عرب ريفورجر" description="تعرّف على الفريق خلف المجتمع، ودور الإدارة في الدعم والتنظيم والتطوير.">
  <About />
  <div className="border-y border-border bg-surface max-md:[&>section]:py-7 max-md:[&_h2]:mb-3 max-md:[&_h2]:text-xl max-md:[&_h2+div]:text-sm max-md:[&_h2+div]:leading-relaxed"><TextPanel title="مجالات عمل الإدارة">
    <p className="max-w-4xl">العمل الإداري يجمع بين التواصل مع اللاعبين وفهم أنظمة الرول بلاي ومتابعة التشغيل. توضح المجالات التالية طبيعة العمل الذي يخدم المجتمع؛ وتُضاف أسماء أعضاء الفريق وخبراتهم الفردية عند اعتماد بياناتهم.</p>
    <div className="mt-3 grid gap-2 md:mt-8 md:grid-cols-3 md:gap-4">{[
      ["إدارة المجتمع", "التواصل الواضح، تنظيم قنوات الدعم، ومتابعة الملاحظات والبلاغات."],
      ["تنظيم التجربة", "فهم سيناريوهات الرول بلاي والقوانين، ومراجعة الوقائع والأدلة قبل معالجة المشكلات."],
      ["التنسيق التقني", "نقل المشكلات للجهة المختصة ومتابعة الملاحظات المرتبطة بالأنظمة والتحديثات."],
    ].map(([title,text]) => <article key={title} className="border border-border bg-background p-3 md:p-6"><h3 className="text-base font-bold text-foreground md:text-xl">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted md:mt-3 md:text-base md:leading-8">{text}</p></article>)}</div>
  </TextPanel></div>
  <div className="max-md:[&>section]:py-7 max-md:[&_h2]:mb-3 max-md:[&_h2]:text-xl max-md:[&_h2+div]:text-sm max-md:[&_h2+div]:leading-relaxed">
  <TextPanel title="كيف تتواصل مع الإدارة؟">
    <p className="max-w-4xl">ادخل ديسكورد المجتمع وافتح تذكرة في القسم المناسب، واشرح طلبك بوضوح وأرفق ما يساعد على مراجعته. تُتابع الحالة مع الفريق المختص، ويمكن رفع الملاحظات والاقتراحات عبر القنوات المخصصة.</p>
    <Link href="/join" className="mt-4 inline-block md:mt-8 bg-accent px-6 py-4 text-base font-bold text-accent-foreground">التواصل والانضمام إلى المجتمع ←</Link>
  </TextPanel>
  </div>
</PageShell>; }

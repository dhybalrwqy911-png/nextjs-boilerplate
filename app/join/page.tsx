import type { Metadata } from "next";
import Link from "next/link";
import { DiscordButton } from "@/components/buttons";
import { PageShell, TextPanel } from "@/components/page-shell";

export const metadata: Metadata = { title: "دليل الانضمام | عرب ريفورجر" };

const steps = [
  { title: "اقرأ القوانين", text: "اطّلع على قوانين السيرفر والرول بلاي قبل الانضمام." },
  { title: "انضم إلى ديسكورد", text: "افتح ديسكورد عرب ريفورجر وراجع تعليمات التفعيل." },
  { title: "أكمل التفعيل داخل ديسكورد", text: "اتبع الخطوات المعلنة في ديسكورد قبل دخول السيرفر." },
];

export default function Join() {
  return (
    <PageShell title="دليل الانضمام إلى عرب ريفورجر" description="هنا تتعرّف على خطوات الانضمام. جميع إجراءات التفعيل تتم داخل ديسكورد الرسمي.">
      <TextPanel title="خطوات الانضمام">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <DiscordButton label="فتح ديسكورد للتفعيل" />
          <Link href="/rules" className="inline-flex min-h-11 items-center border border-border px-4 text-sm font-bold text-accent">اقرأ القوانين</Link>
        </div>
        <ol className="grid gap-3 md:grid-cols-3">
          {steps.map(({ title, text }, index) => (
            <li key={title} className="flex gap-3 border border-border bg-surface p-4">
              <span className="font-bold text-accent">{index + 1}.</span>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </TextPanel>
    </PageShell>
  );
}

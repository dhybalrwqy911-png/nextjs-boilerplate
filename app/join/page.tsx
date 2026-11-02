import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, TextPanel } from "@/components/page-shell";
import { CtaBanner } from "@/components/community";
export const metadata:Metadata={title:"الانضمام | ARAB REFORGER"};
const steps=[{title:"اطّلع على القوانين",text:"اقرأ القوانين العامة وقوانين الرول بلاي، وتأكد من فهم متطلبات المجتمع."},{title:"تابع قنوات المجتمع",text:"انضم إلى الديسكورد الرسمي عبر زر الانضمام أدناه، واطّلع على تعليمات التفعيل."},{title:"أكمل التفعيل",text:"اتبع إجراءات التفعيل التي تعلنها الإدارة قبل المشاركة في عالم الرول بلاي."}];
export default function Join(){return <PageShell image="/images/join.png" eyebrow="JOIN THE COMMUNITY" title="انضم إلى عرب ريفورجر" description="رحلتك تبدأ بفهم القوانين والتفعيل، ثم بناء قصتك داخل المدينة."><TextPanel title="كيف تبدأ؟"><div className="grid gap-5 md:grid-cols-3">{steps.map((s,i)=><div key={s.title} className="border border-border bg-surface p-7"><span className="font-display text-4xl font-bold text-accent">0{i+1}</span><h3 className="mt-5 text-2xl font-bold text-foreground">{s.title}</h3><p className="mt-4">{s.text}</p></div>)}</div><Link href="/rules" className="mt-8 inline-block font-bold text-accent">اقرأ القوانين ←</Link></TextPanel><CtaBanner image="/images/join.png"/></PageShell>}

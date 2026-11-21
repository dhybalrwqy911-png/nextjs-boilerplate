import type { Metadata } from "next";
import { JoinSteps } from "@/components/join-steps";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "دليل الانضمام | عرب ريفورجر" };

export default function Join() {
  return (
    <PageShell title="دليل الانضمام إلى عرب ريفورجر" description="تعرّف على خطوات دخول السيرفر وإكمال التفعيل داخل ديسكورد الرسمي.">
      <JoinSteps />
    </PageShell>
  );
}

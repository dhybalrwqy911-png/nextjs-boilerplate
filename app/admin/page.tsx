import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { getEditor, hasEditors } from "@/lib/admin-access";
import { applicationStates, getAnnouncements, hasAnnouncementStorage } from "@/lib/announcement-content";
import { signIn, signOut, updateAnnouncement } from "./actions";

export const metadata: Metadata = { title: "إدارة الإعلانات | عرب ريفورجر", robots: { index: false, follow: false } };

const field = "mt-1 block w-full rounded border border-border bg-background px-3 py-2 focus-visible:outline-2 focus-visible:outline-accent";
const button = "min-h-11 rounded bg-accent px-4 py-2 text-sm font-bold text-accent-foreground";
const messages = {
  login: "تحقق من اسم المحرر ومفتاح الدخول.",
  invalid: "تحقق من الحقول المطلوبة والحد الأقصى لكل حقل.",
  storage: "تعذّر حفظ الإعلان. حاول مرة أخرى.",
  saved: "تم حفظ التعديل ونشره.",
};

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ slug?: string; result?: string }> }) {
  const { slug, result } = await searchParams;
  const ready = hasEditors() && hasAnnouncementStorage();
  const editor = ready ? await getEditor() : null;
  const announcements = editor ? await getAnnouncements() : [];
  const current = announcements.find(article => article.slug === slug) ?? announcements[0];
  const message = result && Object.hasOwn(messages, result) ? messages[result as keyof typeof messages] : null;

  return (
    <PageShell title="إدارة الإعلانات" description="لوحة محرري أخبار عرب ريفورجر وإعلان التقديم.">
      <div className="mx-auto max-w-4xl space-y-4 px-4 py-6 md:px-8">
        {message && <p role="status" className="rounded border border-border bg-surface p-3">{message}</p>}
        {!ready ? <p>لوحة الإدارة بانتظار إعداد الوصول والتخزين.</p> : !editor ? (
          <form action={signIn} className="grid max-w-md gap-4 rounded border border-border bg-surface p-4">
            <label>اسم المحرر<input name="name" required maxLength={40} autoComplete="username" className={field} /></label>
            <label>مفتاح الدخول<input name="key" type="password" required maxLength={64} autoComplete="current-password" className={field} /></label>
            <button className={button}>دخول</button>
          </form>
        ) : current && (
          <>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-muted">المحرر <bdi>{editor}</bdi></p>
              <form action={signOut}><button className="min-h-11 rounded border border-border px-3 text-sm">خروج</button></form>
            </div>
            <nav aria-label="الإعلانات القابلة للتعديل" className="grid gap-2 sm:grid-cols-2">
              {announcements.map(article => (
                <Link key={article.slug} href={`/admin?slug=${article.slug}`} aria-current={article.slug === current.slug ? "page" : undefined}
                  className="flex min-h-11 items-center rounded border border-border p-3 text-sm aria-[current=page]:border-accent">
                  {article.title}
                </Link>
              ))}
            </nav>
            <form key={current.slug} action={updateAnnouncement} className="grid gap-4 rounded border border-border bg-surface p-4">
              <input type="hidden" name="slug" value={current.slug} />
              <label>عنوان الإعلان<input name="title" required maxLength={120} defaultValue={current.title} className={field} /></label>
              <label>نص الإعلان المختصر<textarea name="excerpt" required maxLength={500} defaultValue={current.excerpt} rows={4} className={field} /></label>
              {current.kind === "sectors" && (
                <label>حالة التقديم<select name="state" defaultValue={current.applicationState ?? "unannounced"} className={field}>
                  {Object.entries(applicationStates).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select></label>
              )}
              <button className={button}>حفظ ونشر</button>
            </form>
          </>
        )}
      </div>
    </PageShell>
  );
}

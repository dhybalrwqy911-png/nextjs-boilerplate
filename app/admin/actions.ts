"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { clearEditorSession, getEditor, issueEditorSession } from "@/lib/admin-access";
import { applicationStates, saveAnnouncement, type ApplicationState } from "@/lib/announcement-content";
import { newsArticles } from "@/lib/news";

export async function signIn(form: FormData) {
  const name = String(form.get("name") ?? "").trim();
  const key = String(form.get("key") ?? "").trim();
  if (!await issueEditorSession(name, key)) redirect("/admin?result=login");
  redirect("/admin");
}

export async function signOut() {
  await clearEditorSession();
  redirect("/admin");
}

export async function updateAnnouncement(form: FormData) {
  if (!await getEditor()) redirect("/admin?result=login");

  const article = newsArticles.find(item => item.slug === form.get("slug"));
  if (!article) redirect("/admin?result=invalid");
  const target = `/admin?slug=${article.slug}`;

  const title = String(form.get("title") ?? "").trim();
  const excerpt = String(form.get("excerpt") ?? "").trim();
  const state = String(form.get("state") ?? "unannounced");
  if (!title || title.length > 120 || !excerpt || excerpt.length > 500 ||
      (article.kind === "sectors" && !Object.hasOwn(applicationStates, state))) {
    redirect(`${target}&result=invalid`);
  }

  try {
    await saveAnnouncement(article.slug, {
      title,
      excerpt,
      applicationState: article.kind === "sectors" ? state as ApplicationState : undefined,
    });
  } catch {
    redirect(`${target}&result=storage`);
  }

  revalidatePath("/");
  revalidatePath("/news");
  revalidatePath(`/news/${article.slug}`);
  redirect(`${target}&result=saved`);
}

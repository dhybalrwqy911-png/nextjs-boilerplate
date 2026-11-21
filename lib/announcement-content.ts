import { newsArticles } from "./news";

export type AnnouncementSlug = (typeof newsArticles)[number]["slug"];

export const applicationStates = {
  unannounced: "راجع حالة التقديم في بوابة القطاع",
  open: "التقديم مفتوح",
  closed: "التقديم مغلق",
} as const;

export type ApplicationState = keyof typeof applicationStates;

export type AnnouncementEdit = {
  title: string;
  excerpt: string;
  applicationState?: ApplicationState;
};

function storageConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

export function hasAnnouncementStorage() {
  return storageConfig() !== null;
}

async function redis<T>(command: readonly string[]): Promise<T> {
  const config = storageConfig();
  if (!config) throw new Error("Announcement storage is not configured");
  const response = await fetch(config.url, {
    method: "POST",
    headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
    signal: AbortSignal.timeout(4000),
  });
  if (!response.ok) throw new Error("Announcement storage request failed");
  const data = await response.json() as { result?: T; error?: string };
  if (data.error || data.result === undefined) throw new Error("Invalid announcement storage response");
  return data.result;
}

const storageKey = (slug: AnnouncementSlug) => `arab-reforger:announcement:${slug}`;

export async function getAnnouncements() {
  const defaults = newsArticles.map(article => ({ ...article, applicationState: undefined as ApplicationState | undefined }));
  if (!hasAnnouncementStorage()) return defaults;

  try {
    const edits = await redis<Array<string | null>>(["MGET", ...defaults.map(article => storageKey(article.slug))]);
    return defaults.map((article, index) => {
      const value = edits[index];
      if (!value) return article;
      const edit = JSON.parse(value) as AnnouncementEdit;
      return {
        ...article,
        title: edit.title,
        excerpt: edit.excerpt,
        applicationState: edit.applicationState,
      };
    });
  } catch {
    return defaults;
  }
}

export async function saveAnnouncement(slug: AnnouncementSlug, edit: AnnouncementEdit) {
  const result = await redis<string>(["SET", storageKey(slug), JSON.stringify(edit)]);
  if (result !== "OK") throw new Error("Announcement was not saved");
}

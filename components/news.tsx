import Link from "next/link";
import { getAnnouncements } from "@/lib/announcement-content";

export async function News() {
  const announcements = await getAnnouncements();
  return (
    <section aria-label="مواضيع الأخبار" className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
      <ul className="grid gap-2.5 md:grid-cols-2">
        {announcements.map((post) => (
          <li key={post.slug}>
            <Link href={`/news/${post.slug}`} className="block h-full rounded-md border border-border bg-surface p-4 hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">
              <p className="text-xs font-bold text-accent">{post.tag}</p>
              <h2 className="mt-1 text-base font-bold md:text-lg">{post.title}</h2>
              <p className="mt-1 text-sm leading-6 text-muted">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { sectionTheme } from "@/lib/section-theme";
import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/news";
import { ArrowIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const posts = newsArticles;

export function News({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section aria-label="مواضيع الأخبار" className="mx-auto max-w-xl px-4 pb-8 pt-2">
        <ul className="grid gap-2">
          {posts.map((post) => (
            <li key={post.slug} data-section-theme={sectionTheme(`/news/${post.slug}`)}>
              <Link href={`/news/${post.slug}`} className="section-card flex items-center gap-3 border border-border bg-surface p-2.5 focus-visible:outline-2 focus-visible:outline-accent">
                <div className="relative size-16 shrink-0 overflow-hidden">
                  <Image src={post.image} alt="" fill sizes="64px" className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-accent">{post.tag}</p>
                  <h2 className="mt-0.5 text-sm font-bold leading-5">{post.title}</h2>
                  <p className="mt-1 text-xs leading-5 text-muted">{post.excerpt}</p>
                </div>
                <ArrowIcon className="size-4 shrink-0 text-accent" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section id="news" aria-labelledby="news-title" className="py-24 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading
          index="07"
          eyebrow="Latest News"
          title="آخر الأخبار والتحديثات"
          description="تابع جديد السيرفر من تحديثات وفعاليات وإعلانات رسمية."
        />
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.title} delay={i * 100}>
              <article data-section-theme={sectionTheme(`/news/${post.slug}`)} className="section-card group relative flex h-full flex-col border border-border bg-surface transition-colors hover:border-foreground/30">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs text-muted">{(post.kind === "raid" || post.kind === "contraband") ? "دليل العصابات" : "دليل المجتمع"}</span>
                  <h3 className="text-xl font-bold leading-snug text-foreground">
                    <Link href={`/news/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="flex-1 leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    {post.kind === "raid" ? "اكتشف نظام الريد" : post.kind === "contraband" ? "قابل أبو مهنا" : "اقرأ المزيد"}
                    <ArrowIcon className="size-4 transition-transform group-hover:-translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

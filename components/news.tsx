import Image from "next/image";
import Link from "next/link";
import { newsArticles } from "@/lib/news";
import { ArrowIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const posts = newsArticles;

export function News() {
  return (
    <section id="news" aria-labelledby="news-title" className="py-24 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
        <SectionHeading
          index="07"
          eyebrow="Latest News"
          title="آخر الأخبار والتحديثات"
          description="تابع جديد السيرفر من تحديثات وفعاليات وإعلانات رسمية."
        />
        <ul className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col border border-border bg-surface transition-colors hover:border-foreground/30">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs text-muted">دليل المجتمع</span>
                  <h3 className="text-xl font-bold leading-snug text-foreground">
                    <Link href={`/news/${post.slug}`} className="after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="flex-1 leading-relaxed text-muted">{post.excerpt}</p>
                  <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-accent">
                    اقرأ المزيد
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

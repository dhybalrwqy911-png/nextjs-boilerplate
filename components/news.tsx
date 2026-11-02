import Image from "next/image";
import { ArrowIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const posts = [
  {
    tag: "إعلان",
    date: "2026-02-10",
    dateLabel: "10 فبراير 2026",
    title: "فتح باب التقديم على قسم الشرطة",
    excerpt: "بدأ استقبال طلبات الانضمام للدفعة الأولى من ضباط الشرطة. تعرف على الشروط وآلية التقديم.",
    image: "/images/police.png",
  },
  {
    tag: "تحديث",
    date: "2026-02-06",
    dateLabel: "6 فبراير 2026",
    title: "نظام اقتصادي جديد للتعدين والتصنيع",
    excerpt: "إضافة سلاسل إنتاج مترابطة بين المناجم والمصانع مع أسعار متغيرة حسب السوق.",
    image: "/images/jobs.png",
  },
  {
    tag: "فعالية",
    date: "2026-02-01",
    dateLabel: "1 فبراير 2026",
    title: "فعالية الافتتاح الكبرى",
    excerpt: "انضم إلينا في أول فعالية رسمية للمجتمع مع جوائز وسيناريوهات خاصة.",
    image: "/images/civilian.png",
  },
];

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
              <article className="group flex h-full flex-col border border-border bg-surface transition-colors hover:border-foreground/30">
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
                  <time dateTime={post.date} className="text-xs text-muted">
                    {post.dateLabel}
                  </time>
                  <h3 className="text-xl font-bold leading-snug text-foreground">
                    <a href="#news" className="after:absolute after:inset-0 focus:outline-none">
                      {post.title}
                    </a>
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

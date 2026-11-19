import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const topics = [
  {
    title: "وش تقصد بالممنوعات؟",
    answer: "أي غرض يصنّفه السيرفر كممنوع داخل الرول بلاي. تصنيف الغرض يغيّر السيناريو اللي تدخل فيه، وقد يعرّض شخصيتك للمساءلة داخل اللعبة.",
  },
  {
    title: "كيف أعرف إذا الغرض ممنوع؟",
    answer: "خل عينك على وصف الغرض وتعليمات السيرفر. إذا التصنيف مو واضح، اسأل الدعم قبل ما تبني عليه سيناريو. الأسماء والتصنيفات تعتمد على إعدادات السيرفر المعتمدة.",
  },
  {
    title: "كيف يشتغل البيع داخل اللعبة؟",
    answer: "إذا اللعبة تتيح بيع الغرض، واجهة التاجر توضح لك وش يقبل والسعر المتاح. قبل ما تأكد، احسب الكمية والسعر والتكاليف عشان تعرف صافي العائد.",
    link: { href: "/news/economy-update", label: "جرّب حاسبة السوق" },
  },
  {
    title: "وش يصير إذا تدخلت الشرطة؟",
    answer: "تعامل مع الموقف بشخصيتك وكمّل السيناريو وفق قوانين الرول بلاي. لو صار خلاف على مخالفة، ارفع تذكرة بعد انتهاء المشهد وأرفق الإثبات.",
    link: { href: "/rules/roleplay#zones-police-admin", label: "راجع قوانين الرول بلاي" },
  },
];

export function ContrabandPage() {
  return (
    <PageShell compactOnMobile image="/images/abu-muhanna.webp" eyebrow="ABU MUHANNA" title="الممنوعات" description="دليل أبو مهنا إلى السلع الممنوعة داخل عالم عرب ريفورجر.">
      <section aria-labelledby="muhanna-title" className="mx-auto max-w-4xl px-4 py-6 md:px-8 md:py-12">
        <Link href="/news" className="inline-flex min-h-11 items-center text-sm font-bold text-accent">العودة إلى الأخبار ←</Link>
        <div className="mt-2 border border-accent/30 bg-surface p-4 md:p-8">
          <h2 id="muhanna-title" className="text-2xl font-black text-accent md:text-3xl">أبو مهنا</h2>
          <p className="mt-3 text-base leading-8 text-foreground">هلا، قرّب. أنا أبو مهنا. إذا سمعت عن الممنوعات داخل المدينة وودّك تفهم كيف تشتغل، اختر سؤالك وأنا أشرح لك.</p>
          <div className="mt-5 divide-y divide-border border-y border-border">
            {topics.map(({ title, answer, link }) => (
              <details key={title} className="py-1">
                <summary className="min-h-11 cursor-pointer py-3 font-bold marker:text-accent focus-visible:outline-2 focus-visible:outline-accent">{title}</summary>
                <p className="pb-3 text-base leading-8 text-foreground/85">{answer}</p>
                {link && <Link href={link.href} className="mb-2 inline-flex min-h-11 items-center font-bold text-accent">{link.label} ←</Link>}
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

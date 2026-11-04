import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell, TextPanel } from "@/components/page-shell";
import { EconomySimulator } from "@/components/economy-simulator";
import { newsArticles } from "@/lib/news";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return newsArticles.map(article => ({ slug: article.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find(item => item.slug === slug);
  return { title: article?.title ?? "الخبر" };
}

export default async function NewsDetail({ params }: Props) {
  const { slug } = await params;
  const article = newsArticles.find(item => item.slug === slug);
  if (!article) notFound();

  return <PageShell image={article.image} eyebrow={article.tag} title={article.title} description={article.excerpt}>
    <div className="mx-auto max-w-7xl px-5 pt-8 md:px-8"><Link href="/news" className="text-sm font-bold text-accent focus-visible:outline-2 focus-visible:outline-accent">← العودة إلى جميع الأخبار</Link></div>
    {article.kind === "police" ? <>
      <TextPanel title="الانضمام إلى قسم الشرطة">
        <p className="max-w-4xl">تجد في هذه الصفحة مسار التقديم على الشرطة والانتقال إلى بوابة القطاعات الصحية والأمنية. تُراجع طلبات الانضمام عبر القنوات التي تحددها قيادة القطاع.</p>
        <div className="mt-6 border border-[#c49b54]/35 bg-[#c49b54]/10 p-5 text-base leading-8 text-[#ddbb80]">حالة التقديم ومواعيده والشروط النهائية بانتظار اعتماد قيادة الشرطة. وجود هذه الصفحة لا يعني أن التقديم مفتوح حاليًا.</div>
      </TextPanel>
      <section className="border-y border-border bg-surface"><TextPanel title="متطلبات القبول">
        <p className="text-base text-muted">ستظهر الشروط الرسمية كاملة هنا بعد إرسالها واعتمادها.</p>
        <dl className="mt-6 grid gap-4 md:grid-cols-2">{["العمر المطلوب", "متطلبات الخبرة والتواجد", "معايير السجل والانضباط", "المقابلة والتدريب"].map(label => <div key={label} className="border border-border bg-background p-6"><dt className="text-lg font-bold text-foreground">{label}</dt><dd className="mt-2 text-sm text-muted">بانتظار إعلان المتطلبات المعتمدة من قيادة القطاع.</dd></div>)}</dl>
      </TextPanel></section>
      <TextPanel title="كيف تصل إلى طلب التقديم؟">
        <ol className="grid gap-4 md:grid-cols-3">{[
          ["راجع القوانين", "اطّلع على قوانين الشرطة والرول بلاي المنشورة قبل التقديم."],
          ["افتح بوابة القطاعات", "انتقل إلى بوابة القطاعات الصحية والأمنية وابحث عن قسم الشرطة والتقديم."],
          ["تابع إعلان القبول", "اتبع التعليمات والمواعيد التي تنشرها قيادة الشرطة داخل البوابة."],
        ].map(([title,text],index) => <li key={title} className="border border-border p-6"><span className="font-display text-2xl text-accent">0{index+1}</span><h3 className="mt-3 text-xl font-bold text-foreground">{title}</h3><p className="mt-3 text-base leading-8">{text}</p></li>)}</ol>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href="https://arab-reforger.com/" target="_blank" rel="noopener noreferrer" className="bg-accent px-6 py-4 text-center text-base font-bold text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">بوابة الشرطة والتقديم ↗</a>
          <Link href="/rules/police" className="border border-border px-6 py-4 text-center text-base font-bold text-foreground hover:border-accent">قوانين الشرطة</Link>
          <Link href="/departments/police" className="border border-border px-6 py-4 text-center text-base font-bold text-foreground hover:border-accent">تعرّف على قطاع الشرطة</Link>
        </div>
        <p className="mt-4 text-sm text-muted">يفتح زر البوابة الموقع الخارجي في نافذة جديدة؛ يتم تقديم الطلب هناك.</p>
      </TextPanel>
    </> : article.kind === "economy" ? <TextPanel title="كيف تبيع أغراضك على التجار؟">
      <p className="max-w-4xl">الفكرة تنطبق على السلع الشرعية والممنوعة داخل عالم اللعبة: التاجر يشتري منك حسب حالة السوق. افهم الفرق بين سعر الوحدة وإجمالي البيع وصافي العائد بعد التكاليف، ثم جرّب سيناريوهات مختلفة في اللوحة التالية.</p>
      <EconomySimulator />
      <div className="mt-8 grid gap-4 md:grid-cols-3">{[
        ["زيادة المعروض", "يبيع اللاعبون كمية أكبر من نفس السلعة للتجار."],
        ["تغيّر سعر الوحدة", "في المثال، تكدّس السلعة يخفض سعر شراء التاجر، وزيادة الطلب قد ترفعه."],
        ["تراجع صافي العائد", "التكاليف المستمرة قد تستهلك الربح أو تتجاوز دخل البيع."],
      ].map(([title,text]) => <article key={title} className="border border-border p-6"><h2 className="text-xl font-bold text-foreground">{title}</h2><p className="mt-3 text-base leading-8">{text}</p></article>)}</div>
      <p className="mt-8 text-base leading-8 text-muted">قبل أي صفقة، قارن ما يدفعه لك التاجر بتكلفة شراء أو تجهيز البضاعة والنقل والتشغيل. المبلغ الذي تستلمه عند البيع ليس كله ربحًا. الأرقام الحالية أمثلة تعليمية، ويُضاف النظام الفعلي بعد اعتماد إعدادات السيرفر.</p>
      <Link href="/jobs" className="mt-6 inline-block text-base font-bold text-accent">استكشف الوظائف والمهن ←</Link>
    </TextPanel> : <TextPanel title="تفاصيل الفعاليات">
      <p>تُضاف هنا أخبار الفعاليات ومواعيدها وطريقة المشاركة بعد اعتمادها. لا توجد تفاصيل أو مواعيد معلنة ضمن هذه الصفحة حاليًا.</p>
      <Link href="/news" className="mt-6 inline-block text-base font-bold text-accent">تابع آخر أخبار المجتمع ←</Link>
    </TextPanel>}
  </PageShell>;
}

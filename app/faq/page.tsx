import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { DISCORD_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description: "إجابات عن التفعيل والرول بلاي والإدارة والشكاوى والعقوبات في عرب ريفورجر.",
};

const questions = [
  {
    id: "project",
    emoji: "🇸🇦",
    question: "وش هو مشروع عرب ريفورجر ومن يديره؟",
    answer: "عرب ريفورجر مشروع رول بلاي عربي داخل Arma Reforger، بنته إدارة عربية سعودية من الصفر. يتولى الفريق تنظيم السيرفر وتطوير أنظمته ومتابعة الدعم والبلاغات.",
  },
  {
    id: "activation",
    emoji: "🎫",
    question: "كيف أنضم للسيرفر وأفعّل حسابي؟",
    answer: "ادخل ديسكورد عرب ريفورجر، اقرأ القوانين واتبع خطوات قسم التفعيل هناك. التفعيل يتم داخل ديسكورد، ودليل الانضمام في الموقع يوضح لك الخطوات.",
    links: [{ href: "/join", label: "دليل الانضمام" }],
  },
  {
    id: "roleplay",
    emoji: "🎭",
    question: "وش المقصود بالرول بلاي؟",
    answer: "تمثّل شخصية داخل اللعبة، وتتصرّف وفق دورها وظروف الموقف والمعلومات اللي عرفتها داخل السيناريو. تابع قوانين الرول بلاي لمعرفة ضوابط الاشتباكات والمناطق الآمنة والتعامل مع اللاعبين.",
    links: [{ href: "/rules/roleplay", label: "قوانين الرول بلاي" }],
  },
  {
    id: "applications",
    emoji: "📋",
    question: "كيف أقدّم على الشرطة أو الإسعاف؟",
    answer: "راجع صفحة التقديم على القطاعات لمعرفة الشروط. تابع إعلانات ديسكورد لمواعيد فتح التقديم والمسار المخصص لكل قطاع.",
    links: [{ href: "/news/sectors-applications", label: "التقديم على القطاعات" }],
  },
  {
    id: "support",
    emoji: "💬",
    question: "كيف أتواصل مع الإدارة؟",
    answer: "افتح تذكرة في القسم المناسب داخل ديسكورد واكتب طلبك بوضوح. استخدم التذكرة للاستفسارات والمشاكل، وتجنّب منشنة الإدارة أو إرسال الطلب في الخاص أو الشات العام.",
    links: [{ href: "/rules/discord", label: "قوانين ديسكورد" }],
  },
  {
    id: "report",
    emoji: "⏱️",
    question: "متى أرفع بلاغ عن مخالفة داخل الرول؟",
    answer: "أكمل السيناريو، ثم ارفع شكواك عبر تذكرة الدعم خلال 24 ساعة من وقت المخالفة. وضّح وش صار وأرفق الإثبات. يحق للإدارة رفض الشكوى إذا تجاوزت المدة.",
    note: "أثناء السيناريو، يمنع طلب إيقاف الرول بلاي بسبب المخالفة.",
  },
  {
    id: "evidence",
    emoji: "🎥",
    question: "وش المطلوب في تسجيل الإثبات؟",
    answer: "احتفظ بتسجيل واضح لآخر 20 دقيقة على الأقل من أي اشتباك أو موقف قد ينتج عنه شكوى. أرسل المقطع دون تلاعب، وإذا استخدمت برنامج تواصل خارجي أثناء الواقعة لازم تظهر الأصوات المتعلقة بها في التسجيل.",
    note: "تظل ضوابط استخدام برامج التواصل الخارجي داخل السيناريو سارية.",
  },
  {
    id: "penalties",
    emoji: "⚖️",
    question: "كم مدة العقوبة وكيف تتحدد؟",
    answer: "تختلف العقوبة ومدتها حسب نوع المخالفة وتكرارها وما تنص عليه قوانين القسم. راجع قرار الإدارة لمعرفة العقوبة المطبقة ومدتها إذا كانت مؤقتة. تكرار المخالفات البسيطة في ديسكورد قد يؤدي إلى عقوبة مغلظة أو الطرد النهائي.",
    links: [{ href: "/rules", label: "مركز القوانين" }],
  },
  {
    id: "appeal",
    emoji: "📝",
    question: "كيف أعترض إذا شفت إن العقوبة غير صحيحة؟",
    answer: "افتح تذكرة في ديسكورد، واذكر القرار وسبب اعتراضك وأرفق أي إثبات متاح. تابع الرد داخل التذكرة واحضر المقابلة إذا طلبتها الإدارة.",
  },
  {
    id: "game-rules",
    emoji: "🛡️",
    question: "كيف تتماشى قوانين السيرفر مع شروط Bohemia Interactive؟",
    answer: "قوانين عرب ريفورجر تنظم اللعب داخل مجتمعنا، ونلتزم إلى جانبها بشروط استخدام Arma Reforger وسياسات Bohemia Interactive المعمول بها. داخل السيرفر يُمنع الغش واستغلال الثغرات، ويجب الإبلاغ عن أي ثغرة تكتشفها.",
    links: [
      { href: "https://reforger.armaplatform.com/eula", label: "اتفاقية استخدام اللعبة" },
      { href: "https://www.bohemia.net/en/community/game-content-usage-rules", label: "سياسة استخدام محتوى اللعبة" },
    ],
  },
];

const linkClass = "inline-flex min-h-11 items-center rounded-sm text-sm font-bold text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default function FaqPage() {
  return (
    <PageShell
      title="الأسئلة الشائعة"
      description="دليلك للتفعيل والرول بلاي والتواصل مع الإدارة ومعرفة إجراءات الشكاوى والعقوبات."
    >
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8 md:py-10">
        <ol aria-label="الأسئلة والأجوبة" className="grid list-none items-start gap-4 lg:grid-cols-2 lg:gap-6">
          {questions.map(({ id, emoji, question, answer, note, links }) => (
            <li key={id} id={id} className="scroll-mt-24 rounded-2xl border border-border bg-surface p-4 sm:p-5">
              <h2 className="flex items-start gap-3 border-s-4 border-accent ps-3 text-lg font-black leading-snug sm:text-xl">
                <span aria-hidden="true" className="shrink-0 leading-snug">{emoji}</span>
                <span>{question}</span>
              </h2>
              <div className="mt-4 rounded-lg border-s-4 border-emerald-400/65 bg-background px-4 py-3">
                <p className="text-sm font-bold text-emerald-300"><span aria-hidden="true">✅ </span>الجواب</p>
                <p className="mt-1 text-base leading-8 text-foreground">{answer}</p>
                {links && (
                  <div className="mt-1 flex flex-wrap gap-x-5">
                    {links.map(({ href, label }) => (
                      <Link key={href} href={href} className={linkClass}>{label}</Link>
                    ))}
                  </div>
                )}
              </div>
              {note && (
                <p className="mt-3 rounded-lg border-s-4 border-accent bg-accent/10 px-4 py-3 text-sm leading-7 text-foreground">
                  <span aria-hidden="true">📌 </span>{note}
                </p>
              )}
            </li>
          ))}
        </ol>
        {DISCORD_URL && (
          <section className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface p-4 sm:px-6">
            <h2 className="font-bold">عندك سؤال ثاني؟</h2>
            <a href={DISCORD_URL} className="inline-flex min-h-11 items-center rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              تواصل معنا عبر ديسكورد
            </a>
          </section>
        )}
      </div>
    </PageShell>
  );
}

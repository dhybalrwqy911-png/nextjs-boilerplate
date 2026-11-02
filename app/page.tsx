import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/hero";
import { CtaBanner } from "@/components/community";
const highlights=[
{title:"عن عرب ريفورجر",desc:"تعرف على المجتمع ورؤيتنا لتقديم تجربة حياة عربية تفاعلية.",image:"/images/about-roleplay.webp",href:"/about"},
{title:"عالم الرول بلاي",desc:"حياة مدنية وقصص يومية وقرارات تصنع مسارك داخل المدينة.",image:"/images/civilian.png",href:"/roleplay"},
{title:"القطاعات الحكومية",desc:"اكتشف الشرطة والإسعاف والشرطة العسكرية ومسؤوليات كل قطاع.",image:"/images/government.png",href:"/departments"},
{title:"الوظائف والاقتصاد",desc:"تعرّف على التعدين والتصنيع والنقل والخدمات ومسارات التطور المهني.",image:"/images/jobs.png",href:"/jobs"},
{title:"خريطة المدينة",desc:"استكشف دليل المواقع والقطاعات والمناطق المهمة داخل العالم.",image:"/images/map.png",href:"/map"},
{title:"القوانين والانضمام",desc:"اطّلع على ضوابط اللعب وكيف تبدأ رحلتك في المجتمع.",image:"/images/rules.png",href:"/rules"},
];
export default function Home(){return <><Hero/><section id="welcome" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28"><p className="mb-4 text-sm font-bold tracking-widest text-accent" dir="ltr">EXPLORE ARAB REFORGER</p><h2 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">عالم متكامل، وكل قصة لها طريقها</h2><p className="mt-6 max-w-3xl text-lg leading-9 text-foreground/70">عرب ريفورجر مجتمع رول بلاي عربي في Arma Reforger. الصفحة الرئيسية تعطيك لمحة سريعة، وكل قسم له صفحته الخاصة وتفاصيله الكاملة.</p><div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{highlights.map(card=><Link key={card.href} href={card.href} className="group overflow-hidden border border-border bg-surface transition-colors hover:border-accent"><div className="relative h-52 overflow-hidden"><Image src={card.image} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105"/></div><div className="p-7"><h3 className="text-2xl font-bold">{card.title}</h3><p className="mt-3 leading-8 text-foreground/65">{card.desc}</p><span className="mt-6 inline-block font-bold text-accent">اكتشف القسم ←</span></div></Link>)}</div></section><CtaBanner/></>}

"use client";

import { useState } from "react";

const cost = 4500;
const quantity = 100;
function priceAt(supply: number) { return Math.round(100 * Math.pow(100 / supply, 1.4)); }
const format = (n: number) => n.toLocaleString("ar-SA");

export function EconomySimulator() {
  const [supply, setSupply] = useState(180);
  const price = priceAt(supply);
  const revenue = price * quantity;
  const profit = revenue - cost;
  const points = Array.from({ length: 21 }, (_, i) => {
    const amount = 100 + i * 10;
    return { supply: amount, price: priceAt(amount), x: 64 + (amount - 100) * 2.5, y: 235 - priceAt(amount) * 1.9 };
  });
  const activeX = 64 + (supply - 100) * 2.5;
  const activeY = 235 - price * 1.9;

  return <section aria-labelledby="economy-title" className="mt-10 border border-border bg-surface p-5 md:p-8">
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div><h2 id="economy-title" className="text-2xl font-bold">جرّب أثر زيادة المعروض</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-muted">حرّك المؤشر لزيادة كمية الحديد التي يطرحها جميع اللاعبين في السوق، مع افتراض ثبات الطلب وكمية بيع اللاعب.</p></div>
      <span className="border border-[#c49b54]/40 bg-[#c49b54]/10 px-3 py-2 text-xs font-bold text-[#ddbb80]">محاكاة توضيحية — ليست أسعار السيرفر</span>
    </div>

    <div className="mt-8 border border-border bg-background p-5">
      <label htmlFor="iron-supply" className="flex flex-wrap justify-between gap-3 font-bold"><span>المعروض الكلي من الحديد مقارنة بالمستوى الأساسي</span><output htmlFor="iron-supply" className="text-[#ddbb80]">{format(supply)}٪</output></label>
      <input id="iron-supply" type="range" min="100" max="300" step="10" value={supply} onChange={e => setSupply(Number(e.target.value))} aria-valuetext={`المعروض ${supply} بالمئة، سعر الوحدة ${price}، صافي العائد ${profit}`} className="mt-6 h-3 w-full cursor-pointer accent-[#c49b54]" dir="ltr"/>
      <div className="mt-3 flex justify-between text-xs text-muted" dir="ltr"><span>100% — المستوى الأساسي</span><span>300% — ثلاثة أضعاف</span></div>
      <div className="mt-5 flex flex-wrap gap-2">{[100, 200, 300].map(v => <button key={v} onClick={() => setSupply(v)} aria-pressed={supply === v} className={`border px-4 py-2 text-xs focus-visible:outline-2 focus-visible:outline-accent ${supply === v ? "border-[#c49b54] text-[#ddbb80]" : "border-border text-muted hover:text-foreground"}`}>{v === 100 ? "المستوى الأساسي" : v === 200 ? "ضعف المعروض" : "ثلاثة أضعاف"}</button>)}</div>
    </div>

    <div className="mt-6 grid gap-3 sm:grid-cols-3" aria-live="polite" aria-atomic="true">
      {[{ label: "سعر الوحدة", value: price, unit: "عملة لعب" }, { label: "دخل بيع ١٠٠ وحدة", value: revenue, unit: "عملة لعب" }, { label: profit < 0 ? "صافي الخسارة للرحلة" : "صافي الربح للرحلة", value: profit, unit: "بعد التكاليف" }].map((item, i) => <div key={i} className="border border-border bg-background p-5"><p className="text-sm text-muted">{item.label}</p><p className={`mt-3 text-3xl font-bold ${i === 2 && profit < 0 ? "text-red-300" : "text-[#ddbb80]"}`}><bdi>{format(item.value)}</bdi></p><p className="mt-2 text-xs text-muted">{item.unit}</p></div>)}
    </div>

    <figure className="mt-8 min-w-0 border border-border bg-background p-3 md:p-6">
      <figcaption className="mb-4 text-sm font-bold">سعر وحدة الحديد مقابل المعروض الكلي</figcaption>
      <svg viewBox="0 0 620 290" role="img" aria-labelledby="iron-chart-title iron-chart-desc" className="block h-auto w-full" dir="ltr">
        <title id="iron-chart-title">انخفاض سعر الحديد عند زيادة المعروض مع ثبات الطلب</title>
        <desc id="iron-chart-desc">المحور الأفقي هو المعروض من 100 إلى 300 بالمئة. المحور الرأسي سعر الوحدة بعملة اللعب. يبدأ السعر من 100 وينخفض إلى 21 عند ثلاثة أضعاف المعروض. القيم الحالية معروضة أعلى الرسم، وكل الأرقام افتراضية.</desc>
        {[0,25,50,75,100].map(v => <g key={v}><line x1="64" x2="564" y1={235-v*1.9} y2={235-v*1.9} stroke="#303128"/><text x="49" y={239-v*1.9} textAnchor="end" fill="#a5a18f" fontSize="12">{v}</text></g>)}
        <line x1="64" x2="564" y1="235" y2="235" stroke="#777364"/>
        {[100,150,200,250,300].map(v => <text key={v} x={64+(v-100)*2.5} y="258" textAnchor="middle" fill="#a5a18f" fontSize="12">{v}%</text>)}
        <polyline points={points.map(p => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#d1a556" strokeWidth="3"/>
        <line x1={activeX} x2={activeX} y1={activeY} y2="235" stroke="#d1a556" strokeDasharray="4 4"/>
        <circle cx={activeX} cy={activeY} r="6" fill="#f2d499" stroke="#17180f" strokeWidth="2"/>
      </svg>
      <div className="flex flex-wrap justify-between gap-2 text-xs text-muted"><span>الرأسي: سعر الوحدة بعملة اللعب</span><span>الأفقي: نسبة المعروض الكلي</span></div>
    </figure>

    <div className={`mt-5 border-r-2 p-5 text-sm leading-8 ${profit < 0 ? "border-red-300 bg-red-300/5" : "border-[#c49b54] bg-[#c49b54]/5"}`} aria-live="polite">
      {profit < 0 ? "في هذا المثال انخفض دخل البيع تحت تكاليف الرحلة، فتحول العائد إلى خسارة." : "في هذا المثال لا يزال دخل البيع أعلى من تكاليف الرحلة. زيادة المعروض تخفّض هامش الربح تدريجيًا."}
    </div>
    <details className="mt-6 border border-border p-5"><summary className="cursor-pointer text-sm font-bold">افتراضات المثال وجدول المقارنة</summary>
      <p className="mt-4 text-sm leading-8 text-muted">الطلب ثابت، وكل لاعب يبيع ١٠٠ وحدة في الرحلة، وتكاليف الرحلة ثابتة عند ٤٬٥٠٠ عملة لعب. سعر الوحدة الأساسي ١٠٠ عملة. معادلة السعر الافتراضية: ١٠٠ × (١٠٠ ÷ نسبة المعروض) أس ١٫٤، مع التقريب لأقرب عدد صحيح. لا يحاكي المثال تغيّر الطلب أو تكاليف الإنتاج.</p>
      <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[430px] text-right text-sm"><caption className="mb-4 text-right text-muted">مقارنة سيناريوهات افتراضية</caption><thead><tr className="border-b border-border">{["المعروض","سعر الوحدة","دخل البيع","صافي العائد"].map(t => <th key={t} scope="col" className="p-3">{t}</th>)}</tr></thead><tbody>{[100,150,200,250,300].map(v => <tr key={v} className="border-b border-border"><th scope="row" className="p-3">{format(v)}٪</th><td className="p-3">{format(priceAt(v))}</td><td className="p-3">{format(priceAt(v)*quantity)}</td><td className="p-3"><bdi>{format(priceAt(v)*quantity-cost)}</bdi></td></tr>)}</tbody></table></div>
    </details>
  </section>;
}

"use client";
import { useState } from "react";

const green = "#45c4b5", red = "#f17e70";
const fmt = (n: number) => n.toLocaleString("ar-SA", { maximumFractionDigits: 1 });
const goods = ["موارد خام", "منتجات مصنّعة", "سلع مدنية", "بضاعة ممنوعة داخل اللعبة"];
const box = "min-w-0 rounded-xl border border-white/5 bg-[#1d2326] p-5 md:p-6";
const field = "w-full rounded-lg border border-white/15 bg-[#14191c] px-3 py-3 text-sm text-white focus-visible:outline-2 focus-visible:outline-[#45c4b5]";
function priceAt(s: number, d: number) { return Math.round(Math.max(10, Math.min(200, 100 * Math.pow(d / s, 1.2)))); }

function Icon({ n }: { n: number }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-6" aria-hidden="true">{n === 0 ? <><path d="m3 9 9-6 9 6H3ZM3 21h18M6 10v8M12 10v8M18 10v8"/></> : n === 1 ? <><circle cx="12" cy="12" r="9"/><path d="M12 6v12M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8"/></> : n === 2 ? <><path d="M5 8h14v12H5zM8 8V4h8v4M9 13h6"/></> : <><path d="m4 17 6-6 4 3 6-9M15 5h5v5"/></>}</svg>;
}

export function EconomySimulator() {
  const [good, setGood] = useState(goods[0]);
  const [supply, setSupply] = useState(160);
  const [demand, setDemand] = useState(100);
  const [qty, setQty] = useState(100);
  const [unitCost, setUnitCost] = useState(35);
  const [transport, setTransport] = useState(500);
  const price = priceAt(supply, demand), purchase = qty * unitCost, costs = purchase + transport;
  const revenue = qty * price, net = revenue - costs, breakEven = costs / qty;
  const loss = net < 0, pressure = demand / supply;
  const total = costs + Math.max(net, 0);
  const purchaseShare = total ? purchase / total * 100 : 0, costShare = total ? costs / total * 100 : 0;
  const rows = [80,100,150,200,250,300].map(s => ({ s, price: priceAt(s,demand), revenue: priceAt(s,demand)*qty, net: priceAt(s,demand)*qty-costs }));
  const maxNet = Math.max(1,...rows.map(r => Math.abs(r.net)));
  const curve = Array.from({length:23},(_,i) => { const s = 80+i*10; return `${52+(s-80)/220*410},${224-priceAt(s,demand)/200*180}`; }).join(" ");
  function reset() { setGood(goods[0]); setSupply(160); setDemand(100); setQty(100); setUnitCost(35); setTransport(500); }

  return <section id="trader-market" aria-labelledby="market-title" className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-[#14191c] p-4 text-base leading-normal text-[#f2f5f6] shadow-2xl md:p-7">
    <header className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
      <div><p className="text-[10px] font-bold tracking-[0.25em] text-[#45c4b5]" dir="ltr">TRADER MARKET · ARAB REFORGER</p><h2 id="market-title" className="mt-3 text-2xl font-black md:text-3xl">افهم السوق قبل ما تبيع</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[#a6b3b9]">أي سلعة، وأي تاجر داخل اللعبة: راقب سعر شراء التاجر منك، واحسب تكاليفك، ثم اعرف صافي عائدك.</p></div>
      <span className="rounded-full border border-[#45c4b5]/30 bg-[#45c4b5]/10 px-3 py-2 text-xs text-[#60d7c9]">محاكاة تعليمية · أسعار افتراضية</span>
    </header>

    <div className="my-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" aria-live="polite" aria-atomic="true">
      {[{label:"سعر شراء التاجر للوحدة",value:price,note:"المبلغ الذي يدفعه لك التاجر",color:green},{label:"إجمالي البيع",value:revenue,note:`${fmt(qty)} وحدة × ${fmt(price)}`,color:green},{label:"إجمالي التكاليف",value:costs,note:"شراء / تجهيز + نقل وتشغيل",color:red},{label:loss ? "صافي الخسارة" : "صافي الربح",value:net,note:`هامش العائد ${fmt(net/revenue*100)}٪`,color:loss ? red : green}].map((m,i) => <div key={i} className={box}><div className="flex items-center gap-3"><span className="rounded-lg bg-black/15 p-2" style={{color:m.color}}><Icon n={i}/></span><h3 className="text-xs leading-6 text-[#c2cbce]">{m.label}</h3></div><p className="mt-4 text-3xl font-bold" style={{color:m.color}}><bdi>{fmt(m.value)}</bdi></p><p className="mt-2 text-[11px] leading-6 text-[#a6b3b9]">{m.note}</p></div>)}
    </div>

    <section aria-labelledby="trade-controls" className={box}>
      <div className="mb-5 flex items-center justify-between gap-4"><h3 id="trade-controls" className="font-bold">جرّب صفقتك</h3><button type="button" onClick={reset} className="text-xs text-[#60d7c9] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#45c4b5]">إعادة الضبط</button></div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div><label htmlFor="market-good" className="mb-2 block text-xs text-[#a6b3b9]">نوع السلعة داخل اللعبة</label><select id="market-good" value={good} onChange={e => setGood(e.target.value)} className={field}>{goods.map(g => <option key={g}>{g}</option>)}</select></div>
        {[{id:"market-qty",label:"الكمية التي ستبيعها",value:qty,min:1,max:1000,set:setQty},{id:"market-cost",label:"تكلفة شراء أو تجهيز الوحدة",value:unitCost,min:0,max:1000,set:setUnitCost},{id:"market-transport",label:"تكلفة النقل والتشغيل للصفقة",value:transport,min:0,max:100000,set:setTransport}].map(f => <div key={f.id}><label htmlFor={f.id} className="mb-2 block text-xs text-[#a6b3b9]">{f.label}</label><input id={f.id} type="number" min={f.min} max={f.max} step="1" value={f.value} onChange={e => f.set(Math.round(Math.max(f.min,Math.min(f.max,Number(e.target.value)))))} className={field}/></div>)}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">{[{id:"market-supply",label:"معروض السوق الكلي بعد التوريد",value:supply,min:80,max:300,set:setSupply},{id:"market-demand",label:"طلب التجار مقارنة بالأساس",value:demand,min:50,max:200,set:setDemand}].map(f => <div key={f.id}><label htmlFor={f.id} className="flex justify-between gap-4 text-sm"><span className="text-[#c2cbce]">{f.label}</span><output htmlFor={f.id} className="shrink-0 font-bold text-[#60d7c9]">{fmt(f.value)}٪</output></label><input id={f.id} type="range" min={f.min} max={f.max} step="10" value={f.value} onChange={e => f.set(Number(e.target.value))} className="mt-4 w-full cursor-pointer accent-[#45c4b5]" dir="ltr"/></div>)}</div>
      <div className="mt-5 flex flex-wrap gap-2">{[{label:"سوق متوازن",s:100,d:100},{label:"تكدّس البضاعة",s:300,d:70},{label:"ارتفاع الطلب",s:100,d:180}].map(p => <button key={p.label} onClick={() => {setSupply(p.s);setDemand(p.d);}} aria-pressed={supply === p.s && demand === p.d} className={`rounded-lg border px-4 py-2.5 text-xs focus-visible:outline-2 focus-visible:outline-[#45c4b5] ${supply === p.s && demand === p.d ? "border-[#45c4b5] bg-[#45c4b5]/10 text-[#60d7c9]" : "border-white/15 text-[#c2cbce] hover:border-[#45c4b5]/50"}`}>{p.label}</button>)}</div>
    </section>

    <div className="mt-5 grid gap-5 lg:grid-cols-2">
      <figure className={box}><figcaption className="mb-5 font-bold">وين يروح دخل الصفقة؟</figcaption><div className="flex flex-wrap items-center justify-center gap-7">
        <div className="relative size-44 shrink-0"><div aria-hidden="true" className="size-full rounded-full" style={{background:total ? `conic-gradient(${red} 0 ${purchaseShare}%, #6c7d88 ${purchaseShare}% ${costShare}%, ${green} ${costShare}% 100%)` : "#39444a"}}/><div className="absolute inset-7 flex flex-col items-center justify-center rounded-full bg-[#1d2326]"><span className="text-[10px] text-[#a6b3b9]">سعر التعادل للوحدة</span><bdi className="mt-2 text-2xl font-bold">{fmt(breakEven)}</bdi><span className="mt-1 text-[10px] text-[#a6b3b9]">عملة لعب</span></div></div>
        <ul className="space-y-4 text-sm">{[{name:"شراء / تجهيز",value:purchase,color:red},{name:"نقل وتشغيل",value:transport,color:"#6c7d88"},{name:"الربح المتبقي",value:Math.max(net,0),color:green}].map(r => <li key={r.name} className="flex items-center gap-3"><span className="size-3 rounded-sm" style={{backgroundColor:r.color}}/><span className="text-[#a6b3b9]">{r.name}</span><bdi className="mr-auto font-bold">{fmt(r.value)}</bdi></li>)}</ul>
      </div><p className="mt-5 text-xs leading-6 text-[#a6b3b9]">{loss ? `الدخل لا يغطي التكاليف؛ العجز ${fmt(-net)}. الحلقة توزّع التكاليف فقط عند الخسارة.` : "الحلقة تقسم دخل البيع بين التكاليف والربح المتبقي."}</p></figure>

      <figure className={box}><figcaption className="font-bold">المعروض وسعر شراء التاجر</figcaption><p className="mt-2 text-xs leading-6 text-[#a6b3b9]">سعر الوحدة عند مستويات معروض مختلفة، والطلب ثابت عند {fmt(demand)}٪.</p>
        <div dir="ltr" className="mt-3"><svg viewBox="0 0 500 270" role="img" aria-labelledby="market-price-chart" className="h-auto w-full"><title id="market-price-chart">سعر شراء التاجر ينخفض مع زيادة المعروض عند ثبات الطلب. جدول المقارنة أسفل اللوحة يعرض القيم.</title>
          {[0,50,100,150,200].map(v => <g key={v}><line x1="52" x2="462" y1={224-v/200*180} y2={224-v/200*180} stroke="#334047"/><text x="40" y={228-v/200*180} textAnchor="end" fontSize="11" fill="#a6b3b9">{v}</text></g>)}
          <polyline points={curve} fill="none" stroke={green} strokeWidth="3"/>
          {[80,100,150,200,250,300].map(s => <text key={s} x={52+(s-80)/220*410} y="247" textAnchor="middle" fontSize="10" fill="#a6b3b9">{s}%</text>)}
          <line x1={52+(supply-80)/220*410} x2={52+(supply-80)/220*410} y1={224-price/200*180} y2="224" stroke={red} strokeDasharray="4 4"/><circle cx={52+(supply-80)/220*410} cy={224-price/200*180} r="5" fill={red}/>
        </svg></div><div className="flex flex-wrap justify-between gap-2 text-[11px] text-[#a6b3b9]"><span>الرأسي: سعر الوحدة بعملة اللعب</span><span>الأفقي: المعروض مقارنة بالأساس</span></div>
      </figure>

      <figure className={box}><figcaption className="font-bold">صافي العائد تحت ضغط السوق</figcaption><p className="mt-2 text-xs leading-6 text-[#a6b3b9]">نفس الكمية والتكاليف والطلب، مع تغيير المعروض فقط.</p><div dir="ltr" className="mt-3"><svg viewBox="0 0 500 260" role="img" aria-labelledby="market-net-chart" className="h-auto w-full"><title id="market-net-chart">أعمدة الربح فوق الصفر والخسارة تحت الصفر. جدول المقارنة يعرض القيم الرقمية.</title><line x1="34" x2="478" y1="125" y2="125" stroke="#8e9ba2"/><text x="22" y="129" fill="#a6b3b9" fontSize="11">0</text>{rows.map((r,i) => { const h = Math.abs(r.net)/maxNet*82; return <g key={r.s}><rect x={53+i*70} width="33" y={r.net >= 0 ? 125-h : 125} height={Math.max(h,1)} rx="2" fill={r.net >= 0 ? green : red}/><text x={69.5+i*70} y={r.net >= 0 ? 115-h : 141+h} textAnchor="middle" fill="#d9e2e5" fontSize="10">{r.net}</text><text x={69.5+i*70} y="246" textAnchor="middle" fill="#a6b3b9" fontSize="11">{r.s}%</text></g>;})}</svg></div><p className="text-[11px] leading-6 text-[#a6b3b9]">الأفقي: المعروض · الرأسي: صافي العائد بعملة اللعب، بطول نسبي موحّد للأعمدة.</p></figure>

      <figure className={box}><figcaption className="font-bold">هل السوق يحتاج بضاعتك؟</figcaption><div className="mx-auto mt-6 max-w-64" dir="ltr"><svg viewBox="0 0 240 150" role="img" aria-labelledby="market-demand-chart" className="h-auto w-full"><title id="market-demand-chart">الطلب إلى المعروض {fmt(pressure*100)} بالمئة. مئة بالمئة تعني توازنًا افتراضيًا.</title><path d="M30 120 A90 90 0 0 1 210 120" fill="none" stroke="#334047" strokeWidth="20" strokeLinecap="round" pathLength="100"/><path d="M30 120 A90 90 0 0 1 210 120" fill="none" stroke={pressure < 0.8 ? red : green} strokeWidth="20" strokeLinecap="round" pathLength="100" strokeDasharray={`${Math.min(100,pressure/2*100)} 100`}/><text x="120" y="100" textAnchor="middle" fill="#f2f5f6" fontSize="30" fontWeight="bold">{Math.round(pressure*100)}%</text><text x="22" y="145" fill="#a6b3b9" fontSize="10">0%</text><text x="104" y="19" fill="#a6b3b9" fontSize="10">100%</text><text x="195" y="145" fill="#a6b3b9" fontSize="10">200%+</text></svg></div><p className="mt-3 text-center font-bold" style={{color:pressure < 0.8 ? red : green}}>{pressure < 0.8 ? "المعروض أعلى من الطلب" : pressure > 1.2 ? "الطلب أعلى من المعروض" : "السوق قريب من التوازن"}</p><p className="mt-4 text-xs leading-7 text-[#a6b3b9]">المؤشر = الطلب ÷ المعروض. يوضح ضغط الطلب، ولا يعني احتمال نجاح الصفقة أو ضمان الربح.</p></figure>
    </div>

    <section aria-labelledby="trade-ledger" className={`${box} mt-5`}><div className="mb-5 flex flex-wrap justify-between gap-3"><h3 id="trade-ledger" className="font-bold">كشف الصفقة: {good}</h3><span className="text-xs text-[#a6b3b9]">كل المبالغ بعملة اللعبة</span></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[520px] text-right text-sm"><caption className="sr-only">تفصيل دخل وتكاليف بيع {fmt(qty)} وحدة من {good}</caption><thead><tr className="border-b border-white/15 text-xs text-[#a6b3b9]">{["البند","الكمية","سعر الوحدة","الإجمالي","الأثر"].map(x => <th scope="col" key={x} className="px-3 py-4">{x}</th>)}</tr></thead><tbody>{[{name:"شراء / تجهيز البضاعة",q:fmt(qty),unit:fmt(unitCost),total:purchase,effect:"تكلفة"},{name:"النقل والتشغيل",q:"صفقة واحدة",unit:"—",total:transport,effect:"تكلفة"},{name:"البيع للتاجر",q:fmt(qty),unit:fmt(price),total:revenue,effect:"دخل"}].map(r => <tr key={r.name} className="border-b border-white/5"><th scope="row" className="px-3 py-4 font-normal">{r.name}</th><td className="px-3 py-4">{r.q}</td><td className="px-3 py-4">{r.unit}</td><td className="px-3 py-4"><bdi>{fmt(r.total)}</bdi></td><td className="px-3 py-4" style={{color:r.effect === "دخل" ? green : red}}>{r.effect}</td></tr>)}</tbody><tfoot><tr><th scope="row" colSpan={3} className="px-3 pt-5">صافي العائد = البيع − التكاليف</th><td className="px-3 pt-5 font-bold" style={{color:loss ? red : green}}><bdi>{fmt(net)}</bdi></td><td className="px-3 pt-5 text-xs" style={{color:loss ? red : green}}>{loss ? "خسارة" : net === 0 ? "تعادل" : "ربح"}</td></tr></tfoot></table></div>
      <p role="status" className="mt-6 rounded-lg bg-black/15 p-4 text-sm leading-8 text-[#c2cbce]">{loss ? `سعر التاجر ${fmt(price)} أقل من سعر التعادل ${fmt(breakEven)}؛ دخل الصفقة لا يغطي التكاليف.` : net === 0 ? "وصلت إلى التعادل: استعدت التكاليف دون ربح." : `سعر التاجر ${fmt(price)} أعلى من سعر التعادل ${fmt(breakEven)}؛ يتبقى لك ${fmt(net)} بعد التكاليف.`}</p>
    </section>

    <details className={`${box} mt-5`}><summary className="cursor-pointer text-sm font-bold">كيف تقرأ الأرقام؟ وجدول مقارنة السوق</summary><div className="mt-5 space-y-4 text-sm leading-8 text-[#a6b3b9]"><p>اختر السلعة، ثم أدخل الكمية وتكلفة شرائها أو تجهيزها وتكلفة النقل والتشغيل. نوع السلعة يغيّر وصف الصفقة فقط؛ نفس المثال يُطبّق على الأنواع كلها.</p><p>١٠٠٪ هو المستوى المرجعي للعرض والطلب. المعروض يمثل حالة السوق بعد التوريد، والكمية الشخصية لا تغيّر مؤشره تلقائيًا. السعر الافتراضي = ١٠٠ × (الطلب ÷ المعروض) أس ١٫٢، ويُقرّب لأقرب عدد صحيح ضمن حدّي ١٠ و٢٠٠ عملة.</p><p>صافي العائد = دخل البيع − (تكلفة الوحدة × الكمية + النقل والتشغيل). اللوحة تشرح المبدأ ولا تتصل بمخزون التجار أو الأسعار الفعلية، ولا تحاكي تغير السعر أثناء بيع دفعة كبيرة. إعدادات السيرفر هي التي تحدد النظام الحقيقي.</p></div>
      <div className="mt-5 overflow-x-auto"><table className="w-full min-w-[430px] text-right text-sm"><caption className="mb-4 text-right text-xs text-[#a6b3b9]">نفس الكمية والتكاليف والطلب الحالي؛ نغيّر المعروض فقط</caption><thead><tr className="border-b border-white/15">{["المعروض","سعر التاجر","دخل البيع","صافي العائد"].map(x => <th key={x} scope="col" className="p-3">{x}</th>)}</tr></thead><tbody>{rows.map(r => <tr key={r.s} className="border-b border-white/5"><th scope="row" className="p-3">{fmt(r.s)}٪</th><td className="p-3">{fmt(r.price)}</td><td className="p-3">{fmt(r.revenue)}</td><td className="p-3" style={{color:r.net < 0 ? red : green}}><bdi>{fmt(r.net)}</bdi></td></tr>)}</tbody></table></div>
    </details>
  </section>;
}

'use client';
import { useState } from 'react';
import { beneficiaries } from '@/data/beneficiaries';

type Item = { id:string; type:'recommendation'|'report'; subject:string; text:string; at:string; status:'pending'|'approved'|'rejected' };

const seed: Item[] = [
  { id:'r1', type:'report', subject:'عائلة الزيتون', text:'معلومة غير دقيقة في العنوان.', at:'اليوم 10:30', status:'pending' },
  { id:'r2', type:'recommendation', subject:'خالد س.', text:'شخص موثوق ومعروف في المنطقة.', at:'أمس 18:10', status:'pending' },
];

export default function AdminReports(){
  const [items, setItems] = useState<Item[]>(seed);

  const act = (id:string, status:Item['status']) =>
    setItems(items.map(i => i.id===id?{...i, status}:i));

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-right">البلاغات والتوصيات</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(i => (
          <div key={i.id} className="card p-4 text-right">
            <div className="flex justify-between flex-row-reverse">
              <div className="font-semibold">{i.type==='report'?'بلاغ':'توصية'} — {i.subject}</div>
              <span className="badge">{i.status}</span>
            </div>
            <p className="text-sm text-slate-700 mt-1">{i.text}</p>
            <div className="text-xs text-slate-500 mt-1">{i.at}</div>
            <div className="flex gap-2 justify-end mt-2">
              <button className="btn" onClick={()=>act(i.id,'approved')}>قبول</button>
              <button className="btn-ghost" onClick={()=>act(i.id,'rejected')}>رفض</button>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4 text-right">
        <h3 className="font-semibold mb-2">سجل التوصيات الحالي</h3>
        <ul className="text-sm list-disc pr-5">
          {beneficiaries.flatMap(b => b.recommendations.map(r => `${r.author}: ${r.text}`)).map((t,i)=>(<li key={i}>{t}</li>))}
        </ul>
      </div>
    </div>
  );
}

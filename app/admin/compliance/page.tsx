'use client';
import { useState } from 'react';
import { screenings } from '@/data/compliance';

export default function AdminCompliance(){
  const [items, setItems] = useState(screenings);

  const setStatus = (id:string, status:'cleared'|'needs_review'|'flagged') =>
    setItems(items.map(s => s.id===id?{...s, status}:s));

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-row-reverse">
        <h2 className="text-2xl font-bold">الامتثال — فحص أسماء (نموذج)</h2>
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3">الاسم</th>
              <th className="p-3">النوع</th>
              <th className="p-3">المنطقة</th>
              <th className="p-3">الحالة</th>
              <th className="p-3">النتيجة</th>
              <th className="p-3">الوقت</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {items.map(s => (
              <tr key={s.id} className="border-t">
                <td className="p-3">{s.name}</td>
                <td className="p-3">{s.subjectType==='beneficiary'?'مستفيد':'مانح'}</td>
                <td className="p-3">{s.district || '—'}</td>
                <td className="p-3"><span className="badge">{s.status}</span></td>
                <td className="p-3">{s.score}</td>
                <td className="p-3">{s.at}</td>
                <td className="p-3">
                  <div className="flex gap-2 flex-row-reverse">
                    <button className="btn" onClick={()=>setStatus(s.id,'cleared')}>تأكيد</button>
                    <button className="btn-ghost" onClick={()=>setStatus(s.id,'needs_review')}>مراجعة</button>
                    <button className="btn-ghost" onClick={()=>setStatus(s.id,'flagged')}>إشارة</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-500">* فحص أسماء مبدئي — نموذج واجهة فقط.</p>
    </div>
  );
}

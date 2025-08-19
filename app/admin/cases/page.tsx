'use client';
import { useMemo, useState } from 'react';
import { beneficiaries } from '@/data/beneficiaries';

export default function AdminCases(){
  const [q, setQ] = useState('');
  const items = useMemo(()=> beneficiaries.filter(b => (`${b.name} ${b.story} ${b.district}`).includes(q)), [q]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-row-reverse">
        <h2 className="text-2xl font-bold">إدارة الحالات</h2>
        <input className="input max-w-sm" placeholder="بحث…" value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="card overflow-hidden">
        <table className="w-full text-right">
          <thead className="bg-slate-50">
            <tr>
              <th className="p-3">الاسم</th>
              <th className="p-3">النوع</th>
              <th className="p-3">المنطقة</th>
              <th className="p-3">الهدف (USD)</th>
              <th className="p-3">آخر تحقق</th>
              <th className="p-3">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {items.map(b => (
              <tr key={b.id} className="border-t">
                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.type==='family'?'عائلة':'فرد'}</td>
                <td className="p-3">{b.district}</td>
                <td className="p-3">${b.targetUSD}</td>
                <td className="p-3">{new Date(b.verifiedAt).toLocaleDateString()}</td>
                <td className="p-3">
                  <div className="flex gap-2 flex-row-reverse">
                    <a className="btn-ghost" href={`/beneficiaries/${b.id}`}>عرض</a>
                    <button className="btn-ghost">إيقاف</button>
                    <button className="btn">تمييز</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

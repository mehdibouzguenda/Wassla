'use client';
import { useState } from 'react';
import { exchangePoints as initial } from '@/data/beneficiaries';
import { ExchangePoint } from '@/lib/types';
import { v4 as uuid } from 'uuid';

type Pending = ExchangePoint & { status:'pending'|'approved'|'rejected' };

const seed: Pending[] = [
  { id:'p1', name:'مؤسسة الهلال للصرافة', district:'غزة', address:'السوق الشعبي', phone:'059-0000010', notes:'بجانب الساحة', trust:0, status:'pending' }
];

export default function AdminExchanges(){
  const [approved, setApproved] = useState<ExchangePoint[]>(initial);
  const [pending, setPending] = useState<Pending[]>(seed);

  const approve = (id:string) => {
    const p = pending.find(x=>x.id===id); if(!p) return;
    setApproved([{ id:uuid(), name:p.name, district:p.district, address:p.address, phone:p.phone, notes:p.notes, trust:0 }, ...approved]);
    setPending(pending.filter(x=>x.id!==id));
  };
  const reject = (id:string) => setPending(pending.filter(x=>x.id!==id));

  return (
    <div className="space-y-6">
      <div className="card p-4">
        <h3 className="font-semibold mb-2 text-right">طلبات الإضافة المعلّقة</h3>
        {pending.length===0 && <p className="text-slate-500 text-sm text-right">لا توجد طلبات حالياً.</p>}
        <div className="grid md:grid-cols-2 gap-3">
          {pending.map(x => (
            <div key={x.id} className="rounded-xl border p-3 text-right">
              <div className="font-semibold">{x.name}</div>
              <div className="text-sm">العنوان: {x.address}</div>
              <div className="text-sm">الهاتف: {x.phone}</div>
              <div className="flex gap-2 justify-end mt-2">
                <button className="btn" onClick={()=>approve(x.id)}>قبول</button>
                <button className="btn-ghost" onClick={()=>reject(x.id)}>رفض</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card p-4">
        <h3 className="font-semibold mb-2 text-right">القائمة المعتمدة</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {approved.map(x => (
            <div key={x.id} className="rounded-xl border p-3 text-right">
              <div className="flex justify-between flex-row-reverse"><div className="font-semibold">{x.name}</div><span className="badge">{x.district}</span></div>
              <div className="text-sm text-slate-700">العنوان: {x.address}</div>
              <div className="text-xs text-slate-500 mt-1">ثقة المجتمع: {x.trust}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

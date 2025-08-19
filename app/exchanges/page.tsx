'use client';
import { useMemo, useState } from 'react';
import { exchangePoints as initial } from '@/data/beneficiaries';
import { ExchangePoint } from '@/lib/types';
import { v4 as uuid } from 'uuid';

export default function Exchanges(){
  const [items, setItems] = useState<ExchangePoint[]>(initial);
  const [form, setForm] = useState<ExchangePoint>({id:'',name:'',district:'',address:'',phone:'',notes:'',trust:0});
  const [q, setQ] = useState('');
  const [sort, setSort] = useState<'trust'|'name'>('trust');

  const filtered = useMemo(() => {
    const list = items.filter(x => (`${x.name} ${x.address} ${x.district}`).includes(q));
    return list.sort((a,b)=> sort==='trust' ? b.trust - a.trust : a.name.localeCompare(b.name));
  }, [items, q, sort]);

  const save = () => {
    if (!form.name || !form.address) return alert('يرجى إدخال الاسم والعنوان');
    setItems([{...form, id: uuid(), trust: 0}, ...items]);
    setForm({id:'', name:'', district:'', address:'', phone:'', notes:'', trust:0});
  };
  const upvote = (id: string) => setItems(items.map(x => x.id===id?{...x, trust:x.trust+1}:x));

  return(
    <div className="py-10 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-4">
        <div className="card p-4 grid md:grid-cols-3 gap-3">
          <input className="input" placeholder="ابحث بالاسم/العنوان…" value={q} onChange={e=>setQ(e.target.value)} />
          <select className="select" value={sort} onChange={e=>setSort(e.target.value as any)}>
            <option value="trust">الأكثر موثوقية</option>
            <option value="name">الاسم</option>
          </select>
          <div className="text-sm text-slate-500 text-right md:text-left">نتائج: {filtered.length}</div>
        </div>

        <div className="space-y-3">
          {filtered.map(x => (
            <div key={x.id} className="card p-4 text-right">
              <div className="flex justify-between flex-row-reverse items-center">
                <div className="font-semibold text-lg">{x.name}</div>
                <span className="badge">{x.district || '—'}</span>
              </div>
              <div className="text-sm text-slate-700 mt-1">العنوان: {x.address}</div>
              {x.phone && <div className="text-sm mt-1">الهاتف: {x.phone}</div>}
              {x.notes && <div className="text-sm mt-1">ملاحظات: {x.notes}</div>}
              <div className="mt-3">
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand" style={{width: Math.min(100, x.trust*3)+'%'}} />
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-1 flex-row-reverse">
                  <span>ثقة المجتمع: {x.trust}</span>
                  <button className="badge hover:bg-slate-200" onClick={()=>upvote(x.id)}>👍 موثوق</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-6 space-y-3 text-right h-fit">
        <h3 className="font-semibold">إضافة نقطة موصى بها</h3>
        <input className="input" placeholder="الاسم" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
        <input className="input" placeholder="المنطقة" value={form.district} onChange={e=>setForm({...form, district:e.target.value})} />
        <input className="input" placeholder="العنوان" value={form.address} onChange={e=>setForm({...form, address:e.target.value})} />
        <input className="input" placeholder="الهاتف" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
        <textarea className="input min-h-24" placeholder="ملاحظات" value={form.notes} onChange={e=>setForm({...form, notes:e.target.value})} />
        <button className="btn w-full" onClick={save}>حفظ</button>
      </div>
    </div>
  );
}

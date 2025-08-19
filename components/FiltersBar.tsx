'use client';
import { useState, useMemo } from 'react';
import { beneficiaries as all } from '@/data/beneficiaries';
import { Beneficiary } from '@/lib/types';

type Props = {
  onChange: (items: Beneficiary[]) => void;
};

const districts = Array.from(new Set(all.map(b => b.district)));

export default function FiltersBar({ onChange }: Props) {
  const [q, setQ] = useState('');
  const [type, setType] = useState<'all' | 'family' | 'person'>('all');
  const [district, setDistrict] = useState<string>('');
  const [needs, setNeeds] = useState<string[]>([]);

  const uniqueNeeds = useMemo(() => {
    const s = new Set<string>();
    all.forEach(b => b.needs.forEach(n => s.add(n)));
    return Array.from(s);
  }, []);

  const toggleNeed = (n: string) => {
    setNeeds(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
  };

  const filtered = useMemo(() => {
    return all.filter(b => {
      if (type !== 'all' && b.type !== type) return false;
      if (district && b.district !== district) return false;
      if (q && !`${b.name} ${b.story}`.includes(q)) return false;
      if (needs.length && !needs.every(n => b.needs.includes(n))) return false;
      return true;
    });
  }, [q, type, district, needs]);

  // emit to parent
  useMemo(() => onChange(filtered), [filtered, onChange]);

  return (
    <div className="card p-4 space-y-3">
      <div className="grid md:grid-cols-3 gap-3">
        <input className="input" placeholder="ابحث بالاسم أو الوصف…" value={q} onChange={e=>setQ(e.target.value)} />
        <select className="select" value={district} onChange={e=>setDistrict(e.target.value)}>
          <option value="">كل المناطق</option>
          {districts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <div className="flex gap-2 justify-end">
          <button className="chip" data-active={type==='all'} onClick={()=>setType('all')}>الكل</button>
          <button className="chip" data-active={type==='family'} onClick={()=>setType('family')}>عائلات</button>
          <button className="chip" data-active={type==='person'} onClick={()=>setType('person')}>أفراد</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {uniqueNeeds.map(n => (
          <button key={n} className="chip" data-active={needs.includes(n)} onClick={()=>toggleNeed(n)}>{n}</button>
        ))}
      </div>
    </div>
  );
}

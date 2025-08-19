'use client';
import { useState } from 'react';
import { beneficiaries } from '@/data/beneficiaries';
import CaseCard from '@/components/CaseCard';
import FiltersBar from '@/components/FiltersBar';

export default function BeneficiariesPage(){
  const [items, setItems] = useState(beneficiaries);
  return(
    <div className="py-10 space-y-6">
      <div className="flex items-center justify-between flex-row-reverse">
        <h2 className="text-3xl font-bold">الحالات</h2>
      </div>
      <FiltersBar onChange={setItems} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {items.map(b => <CaseCard key={b.id} b={b} />)}
        {items.length===0 && <p className="text-slate-500 text-right">لا توجد نتائج مطابقة.</p>}
      </div>
    </div>
  );
}

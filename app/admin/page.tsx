'use client';
import { useMemo } from 'react';
import { beneficiaries, exchangePoints } from '@/data/beneficiaries';

function Spark({ points='5,12 20,8 35,14 50,6 65,10 80,5' }: { points?: string }){
  return (
    <svg viewBox="0 0 100 20" className="w-full h-8">
      <polyline fill="none" stroke="currentColor" strokeWidth="2" points={points} className="text-brand"/>
    </svg>
  )
}

export default function AdminOverview(){
  const families = beneficiaries.filter(b=>b.type==='family');
  const persons = beneficiaries.filter(b=>b.type==='person');
  const kpis = useMemo(()=>[
    { title:'مجموع الحالات', value: beneficiaries.length, hint:'+2 هذا الأسبوع' },
    { title:'عائلات', value: families.length, hint:'+1' },
    { title:'أفراد', value: persons.length, hint:'+1' },
    { title:'نقاط صرف موصى بها', value: exchangePoints.length, hint:'+1' },
  ], []);

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k,i)=>(
          <div key={i} className="card p-4">
            <div className="text-sm text-slate-500">{k.title}</div>
            <div className="text-3xl font-bold mt-1">{k.value}</div>
            <div className="text-xs text-slate-500">{k.hint}</div>
            <div className="mt-2 text-brand"><Spark /></div>
          </div>
        ))}
      </div>

      <div className="card p-6 text-right space-y-2">
        <h3 className="font-semibold">أحدث الأنشطة</h3>
        <ul className="text-sm text-slate-700 leading-8">
          <li>✔︎ توثيق ميداني لحالة <b>عائلة الزيتون</b>.</li>
          <li>💬 بدء محادثة دعم معنوي مع <b>خالد س.</b>.</li>
          <li>🏪 إضافة نقطة صرف جديدة: <b>محل الندى للصرافة</b>.</li>
        </ul>
      </div>
    </div>
  );
}

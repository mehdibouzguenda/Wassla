'use client';
import { beneficiaries } from '@/data/beneficiaries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import PledgeModal from '@/components/PledgeModal';
import RecommendModal from '@/components/RecommendModal';
import ReportModal from '@/components/ReportModal';

export default function BeneficiaryDetail({params}:{params:{id:string}}){
  const b = beneficiaries.find(x=>x.id===params.id);
  const [p,setP]=useState(false); const [r,setR]=useState(false); const [x,setX]=useState(false);
  if(!b) return notFound();
  return(
    <div className="py-10 space-y-6">
      <div className="card overflow-hidden">
        <div className="relative h-56 w-full">
          <Image src={b.cover||'/logo.svg'} alt={b.name} fill className="object-cover blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <h1 className="absolute bottom-4 right-4 text-white text-3xl font-bold">{b.name}</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 card p-6 text-right space-y-4">
          <p className="text-slate-700 leading-8">{b.story}</p>
          <div className="flex gap-2 flex-wrap justify-end">
            {b.needs.map(n => <span key={n} className="badge">{n}</span>)}
          </div>
          <p className="text-sm text-slate-500">المنطقة: {b.district} • الهدف: ${b.targetUSD}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">توصيات المجتمع</h3>
              <div className="space-y-3">
                {b.recommendations.map((r,i)=>(
                  <div key={i} className="rounded-xl border p-3">
                    <div className="text-sm text-slate-500 mb-1">{new Date(r.at).toLocaleString()} — {r.author}</div>
                    <p>{r.text}</p>
                  </div>
                ))}
                {b.recommendations.length===0 && <p className="text-slate-500 text-sm">لا توجد توصيات بعد.</p>}
                <button className="btn-ghost mt-2" onClick={()=>setR(true)}>اكتب توصية</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">تقارير ميدانية</h3>
              <div className="space-y-3">
                {b.fieldReports.map((r,i)=>(
                  <div key={i} className="rounded-xl border p-3">
                    <div className="text-sm text-slate-500 mb-1">{new Date(r.at).toLocaleString()} — {r.author}</div>
                    <p>{r.summary}</p>
                  </div>
                ))}
                {b.fieldReports.length===0 && <p className="text-slate-500 text-sm">لا يوجد تقارير بعد.</p>}
                <button className="btn-ghost mt-2">رفع تقرير</button>
              </div>
            </div>
          </div>
        </section>

        <aside className="card p-6 space-y-3">
          <h3 className="font-semibold text-right">ملخص سريع</h3>
          <div className="text-sm text-right text-slate-600">
            <div>الاسم: {b.name}</div>
            <div>المنطقة: {b.district}</div>
            <div>الاحتياجات: {b.needs.join('، ')}</div>
            <div>آخر تحقق: {new Date(b.verifiedAt).toLocaleDateString()}</div>
          </div>
          <Link className="btn w-full" href={`/chat/${b.id}`}>محادثة</Link>
          <button className="btn-secondary w-full" onClick={()=>setP(true)}>دعم مالي</button>
          <button className="btn-ghost w-full" onClick={()=>setX(true)}>إبلاغ</button>
        </aside>
      </div>

      <div className="quick-actions md:hidden">
        <button className="btn flex-1" onClick={()=>setP(true)}>دعم مالي</button>
        <Link className="btn-secondary flex-1 text-center" href={`/chat/${b.id}`}>محادثة</Link>
        <button className="btn-ghost flex-1" onClick={()=>setX(true)}>إبلاغ</button>
      </div>

      {p && <PledgeModal b={b} onClose={()=>setP(false)}/>}
      {r && <RecommendModal b={b} onClose={()=>setR(false)}/>}
      {x && <ReportModal b={b} onClose={()=>setX(false)}/>}
    </div>
  );
}

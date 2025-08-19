'use client';
import { Beneficiary } from '@/lib/types'; import Link from 'next/link'; import Image from 'next/image'; import { useState } from 'react';
import PledgeModal from './PledgeModal'; import RecommendModal from './RecommendModal'; import ReportModal from './ReportModal';
export default function CaseCard({ b }: { b: Beneficiary }){
  const [p,setP]=useState(false); const [r,setR]=useState(false); const [x,setX]=useState(false);
  return(<div className="card overflow-hidden">
    <div className="relative h-40 w-full"><Image src={b.cover||'/logo.svg'} alt={b.name} fill className="object-cover blur-[1px] brightness-90"/><div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/></div>
    <div className="p-5 space-y-2 text-right">
      <div className="flex items-center justify-between flex-row-reverse"><h3 className="font-semibold text-lg">{b.name}</h3><span className="badge">{b.type==='family'?'عائلة':'فرد'} • {b.district}</span></div>
      <p className="text-sm text-slate-600 line-clamp-2">{b.story}</p>
      <div className="flex gap-2 flex-wrap justify-end">{b.needs.map(n=><span key={n} className="badge">{n}</span>)}</div>
      <div className="flex items-center justify-between pt-2 flex-row-reverse">
        <div className="text-sm text-slate-500">آخر تحقق: {new Date(b.verifiedAt).toLocaleDateString()}</div>
        <div className="flex gap-2 flex-row-reverse"><button onClick={()=>setP(true)} className="btn">دعم مالي</button><Link className="btn bg-slate-900 hover:bg-black" href={`/beneficiaries/${b.id}`}>التفاصيل</Link></div>
      </div>
      <div className="flex gap-2 justify-end pt-2"><button className="badge hover:bg-slate-200" onClick={()=>setR(true)}>اكتب توصية</button><button className="badge hover:bg-slate-200" onClick={()=>setX(true)}>إبلاغ</button></div>
    </div>
    {p && <PledgeModal b={b} onClose={()=>setP(false)}/>}{r && <RecommendModal b={b} onClose={()=>setR(false)}/>}{x && <ReportModal b={b} onClose={()=>setX(false)}/>}
  </div>);
}

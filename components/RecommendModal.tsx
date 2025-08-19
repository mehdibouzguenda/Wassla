'use client'; import { Beneficiary } from '@/lib/types'; import { useState } from 'react';
export default function RecommendModal({b,onClose}:{b:Beneficiary;onClose:()=>void}){
  const [author,setAuthor]=useState('متبرع'); const [text,setText]=useState(''); const save=()=>{alert('تم حفظ التوصية محلياً — للعرض فقط'); onClose();};
  return(<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"><div className="card max-w-lg w-full p-6 space-y-4 text-right">
    <div className="flex justify-between items-center flex-row-reverse"><h3 className="text-xl font-semibold">اكتب توصية</h3><button onClick={onClose}>✕</button></div>
    <input className="rounded-xl border px-3 py-2" value={author} onChange={e=>setAuthor(e.target.value)} placeholder="اسمك"/>
    <textarea className="rounded-xl border px-3 py-2 min-h-32" value={text} onChange={e=>setText(e.target.value)} placeholder="نص التوصية…"/>
    <div className="flex gap-2 flex-row-reverse"><button onClick={save} className="btn">حفظ</button><button onClick={onClose} className="btn bg-slate-700 hover:bg-slate-900">إلغاء</button></div>
  </div></div>);
}

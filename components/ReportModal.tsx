'use client'; import { Beneficiary } from '@/lib/types'; import { useState } from 'react';
export default function ReportModal({b,onClose}:{b:Beneficiary;onClose:()=>void}){
  const [reason,setReason]=useState('معلومة غير دقيقة'); const [text,setText]=useState(''); const send=()=>{alert('تم إرسال البلاغ (نموذج).'); onClose();};
  return(<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"><div className="card max-w-lg w-full p-6 space-y-4 text-right">
    <div className="flex justify-between items-center flex-row-reverse"><h3 className="text-xl font-semibold">إبلاغ</h3><button onClick={onClose}>✕</button></div>
    <label className="block"><span className="text-sm text-slate-600">سبب البلاغ</span><select className="mt-1 w-full rounded-xl border px-3 py-2" value={reason} onChange={e=>setReason(e.target.value)}><option>معلومة غير دقيقة</option><option>نشاط مشبوه</option><option>محتوى غير لائق</option></select></label>
    <textarea className="rounded-xl border px-3 py-2 min-h-32" value={text} onChange={e=>setText(e.target.value)} placeholder="تفاصيل إضافية…"/>
    <div className="flex gap-2 flex-row-reverse"><button onClick={send} className="btn">إرسال</button><button onClick={onClose} className="btn bg-slate-700 hover:bg-slate-900">إلغاء</button></div>
  </div></div>);
}

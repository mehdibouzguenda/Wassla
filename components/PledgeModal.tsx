'use client'; import { Beneficiary } from '@/lib/types'; import { useState } from 'react'; import PaymentInstructions from './PaymentInstructions';
export default function PledgeModal({b,onClose}:{b:Beneficiary;onClose:()=>void}){
  const [amount,setAmount]=useState(b.targetUSD); const [rail,setRail]=useState('BANK_TRANSFER'); const [text,setText]=useState<string|null>(null);
  const gen=()=>setText(`WASSLA | ${b.name} | ${amount} USD | ${rail} | Gaza`);
  return(<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-[60]"><div className="card max-w-lg w-full p-6 space-y-4 text-right">
    <div className="flex justify-between items-center flex-row-reverse"><h3 className="text-xl font-semibold">إنشاء تعهّد</h3><button onClick={onClose}>✕</button></div>
    <label className="block"><span className="text-sm text-slate-600">المبلغ</span><input value={amount} onChange={e=>setAmount(Number(e.target.value||0))} type="number" min={1} className="mt-1 w-full rounded-xl border px-3 py-2"/></label>
    <label className="block"><span className="text-sm text-slate-600">اختر طريقة الإرسال</span><select value={rail} onChange={e=>setRail(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2"><option value="BANK_TRANSFER">حوالة بنكية</option><option value="REMITTANCE">شركة تحويل</option><option value="EWALLET">محفظة إلكترونية</option><option value="CRYPTO_OFFRAMP">تحويل رقمي ↜ صرف قانوني</option><option value="OTHER">أخرى</option></select></label>
    <button onClick={gen} className="btn">إنشاء تعليمات التحويل</button>
    {text && <PaymentInstructions text={text} onClose={onClose}/>}
  </div></div>);
}

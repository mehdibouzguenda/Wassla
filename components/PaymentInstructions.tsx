'use client'; import { QRCode } from 'qrcode.react'; import { useState } from 'react';
export default function PaymentInstructions({text,onClose}:{text:string;onClose:()=>void}){
  const [copied,setCopied]=useState(false); const copy=async()=>{await navigator.clipboard.writeText(text);setCopied(true);setTimeout(()=>setCopied(false),1200)};
  return(<div className="border rounded-xl p-4 space-y-3 bg-slate-50 text-right">
    <h4 className="font-semibold">تعليمات التحويل (خارج المنصّة)</h4>
    <div className="flex items-center gap-4 flex-row-reverse"><QRCode value={text} size={128}/><div className="text-sm text-slate-700 max-w-sm"><p>{text}</p><p className="mt-2 italic opacity-80">امسح الكود في تطبيقك المصرفي/الحوالات</p></div></div>
    <div className="flex gap-2 flex-row-reverse"><button className="btn" onClick={copy}>{copied?'تم النسخ':'نسخ'}</button><button className="btn bg-slate-700 hover:bg-slate-900" onClick={onClose}>إغلاق</button></div>
  </div>);
}

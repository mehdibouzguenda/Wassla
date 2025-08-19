'use client';
import { useEffect, useState, useRef } from 'react';
import { beneficiaries, initialMessages } from '@/data/beneficiaries';
import Link from 'next/link';

const quickReplies = ['كيف وضع الكهرباء اليوم؟','هل تحتاجون دواء بشكل عاجل؟','متى يناسبكم مكالمة قصيرة؟'];

export default function ChatRoom({params}:{params:{id:string}}){
  const b = beneficiaries.find(x=>x.id===params.id);
  const [messages,setMessages]=useState(initialMessages);
  const [text,setText]=useState('');
  const [typing,setTyping]=useState(false);
  const [callOpen,setCallOpen]=useState(false);
  const endRef=useRef<HTMLDivElement>(null);

  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:'smooth'}); },[messages]);

  const send=(body?:string)=>{
    const content = (body ?? text).trim();
    if(!content) return;
    setMessages(m=>[...m,{id:String(Math.random()),roomId:'r-001',from:'أنت',me:true,body:content,at:new Date().toLocaleTimeString().slice(0,5)}]);
    setText('');
    setTyping(true);
    setTimeout(()=>{
      setMessages(m=>[...m,{id:String(Math.random()),roomId:'r-001',from:(b?.name||'المستفيد'),body:'شكراً لك، وصلت الرسالة.',at:new Date().toLocaleTimeString().slice(0,5)}]);
      setTyping(false);
    }, 1000);
  };

  return(
    <div className="py-10 grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 card p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-brand/20" />
            <div className="text-right">
              <div className="font-semibold">{b?.name}</div>
              <div className="text-xs text-slate-500">غرفة الدعم المعنوي</div>
            </div>
          </div>
          <button className="btn" onClick={()=>setCallOpen(true)}>اتصال مرئي</button>
        </div>

        <div className="h-[55vh] overflow-y-auto space-y-3 border rounded-xl p-3 bg-white">
          {messages.map(m=>(
            <div key={m.id} className={`max-w-[75%] ${m.me?'ml-auto text-right':''}`}>
              <div className={`rounded-2xl px-3 py-2 ${m.me?'bg-brand text-white':'bg-slate-100'}`}>
                <div className="text-xs opacity-80 mb-1">{m.me?'أنت':m.from} • {m.at}</div>
                <div>{m.body}</div>
              </div>
            </div>
          ))}
          {typing && <div className="text-xs text-slate-500 text-right">يكتب…</div>}
          <div ref={endRef} />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {quickReplies.map((q,i)=>(
            <button key={i} className="chip" onClick={()=>send(q)}>{q}</button>
          ))}
        </div>

        <div className="sticky bottom-0 mt-3 flex gap-2">
          <input value={text} onChange={e=>setText(e.target.value)} className="input flex-1" placeholder="اكتب رسالة…" />
          <button className="btn" onClick={()=>send()}>إرسال</button>
        </div>
      </div>

      <aside className="card p-4 space-y-4">
        <h3 className="font-semibold text-right">معلومات الحالة</h3>
        <div className="text-sm text-right text-slate-600">
          <div>الاسم: {b?.name}</div>
          <div>المنطقة: {b?.district}</div>
          <div>الاحتياجات: {b?.needs.join('، ')}</div>
          <div>آخر تحقق: {b && new Date(b.verifiedAt).toLocaleDateString()}</div>
        </div>
        <Link className="btn w-full" href={`/beneficiaries/${b?.id}`}>الملف الكامل</Link>
      </aside>

      {callOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[60]">
          <div className="card max-w-3xl w-full p-4">
            <div className="aspect-video bg-slate-900/95 rounded-xl flex items-center justify-center text-white">
              الاتصال المرئي (واجهة عرض فقط)
            </div>
            <div className="flex justify-between mt-3">
              <button className="btn bg-red-600 hover:bg-red-700" onClick={()=>setCallOpen(false)}>إنهاء</button>
              <div className="flex gap-2">
                <button className="badge">كتم</button>
                <button className="badge">كاميرا</button>
                <button className="badge">مشاركة شاشة</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

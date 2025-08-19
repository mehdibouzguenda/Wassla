'use client';
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Q = { q: string; a: string }
const items: Q[] = [
  { q: 'هل وصلة تحفظ أو تنقل أموال؟', a: 'لا. وصلة منصّة غير وصية. لا نحفظ أموالًا ولا نحولها. نحن ننشئ تعليمات/QR لتستخدمها في قناتك القانونية المعتادة خارج المنصّة.' },
  { q: 'كيف يتم التحقق من الحالات؟', a: 'فريق ميداني داخل غزة يقوم بالتحقق ورفع تقارير مع تعتيم تلقائي للوجوه والعناوين للحفاظ على الخصوصية.' },
  { q: 'هل يمكنني التواصل معنويًا فقط؟', a: 'نعم. يمكنك المحادثة والاتصال المرئي داخل المنصّة لتقديم دعم معنوي منظم ومحترم.' },
  { q: 'كيف تُقترَح نقاط الصرف؟', a: 'المجتمع يضيف النقاط المقترحة، ثم يراجعها المشرفون لاعتمادها. يمكن للمستخدمين تعزيز الثقة عبر التصويت.' },
]

export default function FAQ(){
  const [open, setOpen] = useState<number | null>(0);
  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-right">الأسئلة الشائعة</h2>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="card">
            <button onClick={()=>toggle(i)} className="w-full flex items-center justify-between px-4 py-3 flex-row-reverse">
              <span className="font-semibold">{it.q}</span>
              <ChevronDown className={`transition ${open===i?'rotate-180':''}`} />
            </button>
            {open===i && (
              <div className="px-4 pb-4 text-right text-slate-700 leading-7">{it.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

import { Quote } from 'lucide-react'

type T = { name: string; role: string; text: string; city: string }
const items: T[] = [
  { name: 'ليان م.', role: 'متطوّعة ميدانية', city: 'غزة', text: 'أفضل ما في وصلة أنه لا يوجد حفظ أموال. نركز على إيصال الدعم بسرعة واحترام لخصوصية الأسر.' },
  { name: 'سامي ر.', role: 'متبرّع', city: 'الدوحة', text: 'أحب بساطة الفكرة. أنشئ QR وأحوّل من تطبيقي المعتاد، ثم أرى تقريرًا ميدانيًا بلا كشف للهوية.' },
  { name: 'أميمة ك.', role: 'مسانِدة معنوية', city: 'إسطنبول', text: 'المحادثة داخل المنصّة ساعدتني أتواصل بأمان ولطف. الواجهة واضحة جدًا.' },
  { name: 'عمر ش.', role: 'متبرّع', city: 'الرياض', text: 'وجود نقاط صرف موصى بها مهم جدًا. إضافتها واعتمادها سهل من المجتمع.' },
]

export default function Testimonials(){
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-right">آراء المتطوعين والمتبرعين</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((t, i) => (
          <div key={i} className="card p-5 text-right">
            <div className="flex items-center justify-end gap-2">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                <Quote size={18} />
              </div>
              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-slate-500">{t.role} • {t.city}</div>
              </div>
            </div>
            <p className="text-sm text-slate-700 mt-3 leading-7">{t.text}</p>
            <div className="text-amber-500 mt-2" aria-label="rating">★★★★★</div>
          </div>
        ))}
      </div>
    </div>
  )
}

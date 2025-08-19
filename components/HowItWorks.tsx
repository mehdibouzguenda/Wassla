const Step = ({n, title, desc}:{n:number; title:string; desc:string}) => (
  <div className="card p-5 text-right">
    <div className="flex items-center justify-end gap-3">
      <div className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center">{n}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-sm text-slate-600 mt-2">{desc}</p>
  </div>
)

export default function HowItWorks(){
  return (
    <div className="space-y-4">
      <div className="grid md:grid-cols-4 gap-4">
        <Step n={1} title="اكتشف حالة" desc="عائلات وأفراد تم التحقق منهم في غزة — بملفات مخفية الهوية."/>
        <Step n={2} title="ادعم ماليًا" desc="أنشئ تعليمات تحويل/QR واستخدم القناة القانونية التي تفضّلها خارج المنصّة."/>
        <Step n={3} title="أرسل دعمًا معنويًا" desc="ابدأ محادثة أو اتصل مرئيًا داخل المنصّة."/>
        <Step n={4} title="تابع الإثبات" desc="تقارير ميدانية وتوصيات المجتمع وبلاغات — مع احترام الخصوصية."/>
      </div>
    </div>
  )
}

import { ShieldCheck, HandHeart, Video, QrCode, Lock, BadgeCheck } from 'lucide-react'

const Item = ({icon:Icon, title, desc}:{icon:any; title:string; desc:string}) => (
  <div className="card p-6 text-right">
    <div className="flex items-center gap-3 justify-end">
      <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center"><Icon size={20}/></div>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-slate-600 mt-2">{desc}</p>
  </div>
)

export default function ValueProps(){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Item icon={HandHeart} title="دعم مباشر بكرامة" desc="تواصل مباشر مع الأسر والأفراد في غزة — نصًا واتصالًا مرئيًا داخل المنصّة." />
      <Item icon={QrCode} title="تحويلات خارج المنصّة" desc="وصلة لا تحفظ أموالًا: ننشئ تعليمات/QR للاستخدام على قنوات قانونية يختارها المتبرع والمستفيد." />
      <Item icon={ShieldCheck} title="إثبات يحفظ الخصوصية" desc="صور مُعتّمة قبل الرفع، وسجلّات مترابطة مقاومة للتلاعب." />
      <Item icon={Lock} title="الامتثال أولًا" desc="مطابقة سياسات بسيطة + مراجعات يدوية أينما لزم." />
      <Item icon={Video} title="دعم معنوي من داخل المنصّة" desc="محادثة سريعة وردود جاهزة + واجهة اتصال مرئي (نموذج عرض)." />
      <Item icon={BadgeCheck} title="موثوقية المجتمع" desc="توصيات وبلاغات ومؤشر ثقة لنقاط الصرف المعتمدة." />
    </div>
  )
}

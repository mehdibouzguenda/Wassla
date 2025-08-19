import Link from 'next/link'

export default function CTASection(){
  return (
    <div className="card p-8 text-center">
      <h3 className="text-2xl font-bold mb-2">ابدأ الآن — وصلة مباشرة إلى الخير</h3>
      <p className="text-slate-600 mb-4">اختر حالة، ادعم ماليًا عبر قناتك المفضّلة، وقدّم كلمة طيبة عبر محادثة داخل المنصّة.</p>
      <div className="flex gap-3 justify-center">
        <Link href="/beneficiaries" className="btn">تصفّح الحالات</Link>
        <Link href="/exchanges" className="btn-secondary">نقاط الصرف الموصى بها</Link>
      </div>
    </div>
  )
}

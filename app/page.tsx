import Image from 'next/image'
import Link from 'next/link'
import StatsBand from '@/components/StatsBand'
import ValueProps from '@/components/ValueProps'
import HowItWorks from '@/components/HowItWorks'
import CasesPreview from '@/components/CasesPreview'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function Home(){
  return (
    <div className="py-10 space-y-12">
      {/* HERO */}
      <section className="rounded-3xl border p-6 md:p-10 gradient-hero max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 text-right space-y-5">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">وصلة — دعم مباشر لعائلات وأفراد في غزة</h1>
            <p className="text-lg text-slate-700">
              منصّة غير وصية: لا نحفظ أموالًا، بل نساعدك على إرسالها بشكل قانوني خارج المنصّة — مع
              محادثة/اتصال من داخل وصلة واحترام كامل للخصوصية.
            </p>
            <div className="flex gap-2 flex-wrap justify-end">
              <span className="badge">بدون حفظ أموال</span>
              <span className="badge">خصوصية افتراضية</span>
              <span className="badge">الامتثال أولًا</span>
            </div>
            <div className="flex gap-3 justify-end">
              <Link href="/beneficiaries" className="btn">تصفّح الحالات</Link>
              <Link href="/exchanges" className="btn-secondary">نقاط الصرف</Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <Image src="/logo.svg" alt="WASSLA" width={140} height={140} className="rounded-2xl shadow-brand"/>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-1">
        <StatsBand />
      </section>

      {/* VALUE PROPS */}
      <section className="max-w-7xl mx-auto px-1 space-y-4">
        <h2 className="text-3xl font-bold text-right">لماذا وصلة؟</h2>
        <ValueProps />
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-1 space-y-4">
        <h2 className="text-3xl font-bold text-right">كيف تعمل؟</h2>
        <HowItWorks />
      </section>

      {/* CASES PREVIEW */}
      <section className="max-w-7xl mx-auto px-1">
        <CasesPreview />
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-1">
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-1">
        <FAQ />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-1">
        <CTASection />
      </section>
    </div>
  )
}

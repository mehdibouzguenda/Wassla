import { beneficiaries } from '@/data/beneficiaries'
import CaseCard from '@/components/CaseCard'
import Link from 'next/link'

export default function CasesPreview(){
  const sample = beneficiaries.slice(0,3)
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-row-reverse">
        <h3 className="text-2xl font-bold">نماذج من الحالات</h3>
        <Link href="/beneficiaries" className="btn-secondary">عرض الكل</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {sample.map(b => <CaseCard key={b.id} b={b} />)}
      </div>
    </div>
  )
}

import { beneficiaries, exchangePoints } from '@/data/beneficiaries'

export default function StatsBand(){
  const families = beneficiaries.filter(b=>b.type==='family').length
  const persons = beneficiaries.filter(b=>b.type==='person').length
  const exchanges = exchangePoints.length
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {[
        {label:'حالات موثّقة', value: families + persons},
        {label:'نقاط صرف موصى بها', value: exchanges},
        {label:'خصوصية افتراضية', value: '100%'},
      ].map((k,i)=>(
        <div key={i} className="card p-5 text-center">
          <div className="text-3xl font-bold">{k.value}</div>
          <div className="text-sm text-slate-600 mt-1">{k.label}</div>
        </div>
      ))}
    </div>
  )
}

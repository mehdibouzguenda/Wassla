import { Beneficiary, ExchangePoint, RoomMessage } from "@/lib/types";
export const beneficiaries: Beneficiary[] = [
  { id:"b-001", type:"family", name:"عائلة الزيتون", district:"غزة", needs:["غذاء","دواء","حفاظات أطفال"], targetUSD:250, verifiedAt:"2025-08-14T10:00:00Z", story:"أسرة مكوّنة من 6 أفراد نزحت من بيت حانون، الأب مصاب والأم ترعى الأطفال.", recommendations:[{author:"متطوع ميداني",text:"عائلة ملتزمة وتتعاون معنا.",at:"2025-08-15T13:00:00Z"}], fieldReports:[{author:"فريق غزة",summary:"زيارة 12/08 — تأكيد السكن الحالي وتصوير بعد التعتيم.",at:"2025-08-12T09:00:00Z"}], cover:"/logo.svg" },
  { id:"b-002", type:"person", name:"خالد س.", district:"خانيونس", needs:["ماء","وقود للمولد","ملابس"], targetUSD:180, verifiedAt:"2025-08-13T16:45:00Z", story:"شاب يعتني بجدّته وطفلين من الجيران.", recommendations:[], fieldReports:[{author:"آمنة (ميداني)",summary:"تم التحقق من الهوية وشهود من الجيران.",at:"2025-08-13T18:20:00Z"}], cover:"/logo.svg" },
  { id:"b-003", type:"family", name:"عائلة البحر", district:"الشمال", needs:["ماء","مواد خيمة","علاج"], targetUSD:320, verifiedAt:"2025-08-16T12:00:00Z", story:"المنزل متضرر جزئياً. الأولوية للمأوى والعلاج.", recommendations:[{author:"طبيب متطوع",text:"تقارير طبية تؤكد الحاجة.",at:"2025-08-16T13:40:00Z"}], fieldReports:[], cover:"/logo.svg" }
];
export const initialMessages: RoomMessage[] = [
  { id:"m1", roomId:"r-001", from:"أنت", me:true, body:"السلام عليكم، أنا هنا للمساندة.", at:"10:00" },
  { id:"m2", roomId:"r-001", from:"عائلة الزيتون", body:"وعليكم السلام، شكراً لاهتمامك.", at:"10:01" },
  { id:"m3", roomId:"r-001", from:"أنت", me:true, body:"هل تحتاجون شيئاً عاجلاً اليوم؟", at:"10:02" }
];
export const exchangePoints: ExchangePoint[] = [
  { id:"e1", name:"محل الندى للصرافة", district:"غزة", address:"شارع الوحدة – قرب المستشفى", phone:"059-0000001", notes:"سمعة طيبة وسرعة إنجاز", trust:27 },
  { id:"e2", name:"شركة الشروق للحوالات", district:"خانيونس", address:"دوار بني سهيلا", phone:"059-0000002", notes:"يفتح حتى 8 مساءً", trust:12 }
];

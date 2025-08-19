export type BeneficiaryType = 'family' | 'person';
export type Beneficiary = { id:string; type:BeneficiaryType; name:string; district:string; needs:string[]; targetUSD:number; verifiedAt:string; cover?:string; story:string; recommendations:{author:string;text:string;at:string}[]; fieldReports:{author:string;summary:string;at:string}[]; };
export type ExchangePoint = { id:string; name:string; district:string; address:string; phone?:string; notes?:string; trust:number; };
export type RoomMessage = { id:string; roomId:string; from:string; me?:boolean; body:string; at:string; };

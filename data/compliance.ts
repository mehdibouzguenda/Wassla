export type Screening = {
  id: string;
  subjectType: 'beneficiary' | 'donor';
  name: string;
  district?: string;
  status: 'cleared' | 'needs_review' | 'flagged';
  score: number;
  at: string;
};

export const screenings: Screening[] = [
  { id:'s1', subjectType:'beneficiary', name:'عائلة الزيتون', district:'غزة', status:'cleared', score: 7, at:'2025-08-12 09:00' },
  { id:'s2', subjectType:'beneficiary', name:'خالد س.', district:'خانيونس', status:'needs_review', score: 42, at:'2025-08-13 18:30' },
  { id:'s3', subjectType:'donor', name:'مانح دولي', status:'cleared', score: 3, at:'2025-08-14 11:10' }
];

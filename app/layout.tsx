import './globals.css'; import Navbar from '@/components/Navbar'; import type { ReactNode } from 'react';
export const metadata={ title:'وصلة — WASSLA', description:'منصّة دعم مباشر لعائلات وأفراد في غزة — بدون حفظ أموال.' };
export default function RootLayout({children}:{children:ReactNode}){ return(<html lang="ar" dir="rtl"><body className="min-h-dvh bg-gradient-to-b from-white to-slate-50 text-slate-900"><Navbar/><main className="mx-auto max-w-6xl px-4">{children}</main></body></html>); }

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '@/app/globals.css';

const Item = ({ href, label }: { href: string; label: string }) => {
  const path = usePathname();
  const active = path === href;
  return (
    <Link href={href} className={`block px-4 py-2 rounded-xl ${active ? 'bg-slate-900 text-white' : 'hover:bg-slate-100'}`}>{label}</Link>
  );
};

export default function AdminLayout({ children }: { children: React.ReactNode }){
  return (
    <div className="py-8 max-w-7xl mx-auto px-4 grid lg:grid-cols-4 gap-6">
      <aside className="card p-4 h-fit">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold">لوحة التحكم</span>
          <span className="badge">مشرف</span>
        </div>
        <nav className="space-y-1">
          <Item href="/admin" label="نظرة عامة" />
          <Item href="/admin/cases" label="الحالات" />
          <Item href="/admin/reports" label="البلاغات والتوصيات" />
          <Item href="/admin/exchanges" label="نقاط الصرف" />
          <Item href="/admin/compliance" label="الامتثال" />
        </nav>
        <p className="text-xs text-slate-500 mt-4">* نموذج عرض — بدون بيانات حقيقية.</p>
      </aside>
      <section className="lg:col-span-3 space-y-6">{children}</section>
    </div>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const path = usePathname();
  const active = path?.startsWith(href);
  return (
    <Link href={href} className={`px-3 py-2 rounded-xl ${active ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
      {children}
    </Link>
  );
};

export default function Navbar(){
  return(
    <header className="sticky top-0 z-50 border-b backdrop-blur bg-white/70">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between py-3 flex-row-reverse">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="WASSLA" width={40} height={40} className="rounded-xl"/>
            <span className="font-semibold text-xl">وصلة WASSLA</span>
          </Link>
          <nav className="flex items-center gap-2">
            <NavLink href="/beneficiaries">الحالات</NavLink>
            <NavLink href="/exchanges">نقاط الصرف</NavLink>
            <NavLink href="/ops">الفريق الميداني</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

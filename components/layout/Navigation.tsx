'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors relative group ${
              isActive
                ? 'text-primary-600'
                : 'text-secondary-700 hover:text-primary-500'
            }`}
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full ${
                isActive ? 'w-full' : ''
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}

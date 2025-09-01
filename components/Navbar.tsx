"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/escritorio', label: 'Escritório' },
  { href: '/atuacao', label: 'Atuação' },
  { href: '/quem-somos', label: 'Quem somos' },
  { href: '/contato', label: 'Contato' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav aria-label="Navegação principal" className="relative text-text-on-primary">
      <div className="md:hidden">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-300"
        >
          <span className="sr-only">Abrir menu</span>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-brand-secondary-400 underline underline-offset-4'
                  : 'text-brand-secondary-500 hover:text-brand-secondary-400 focus:text-brand-secondary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-300 focus-visible:ring-offset-2 rounded'
              }
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div id="menu-mobile" className={`md:hidden ${isOpen ? 'block' : 'hidden'} fixed inset-0 z-[60] bg-brand-primary-900/95 backdrop-blur-sm border-t border-brand-primary-800`}
        onClick={() => setIsOpen(false)}
      >
        <ul className="flex flex-col px-4 py-5 space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? 'block py-2 text-brand-secondary-400 underline underline-offset-4'
                    : 'block py-2 text-brand-secondary-500 hover:text-brand-secondary-400 focus:text-brand-secondary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-300 rounded'
                }
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  return (
    <nav aria-label="Navegação principal">
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                pathname === link.href
                  ? 'text-brand-accent-500 underline'
                  : 'hover:text-brand-accent-500 focus:text-brand-accent-500 focus:outline-none'
              }
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
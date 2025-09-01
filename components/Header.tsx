import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 text-text-on-primary bg-brand-primary-900 shadow-sm border-b border-brand-primary-900" style={{ backgroundColor: 'var(--bg-inverse)' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between p-3 md:p-4">
        <Link href="/" className="flex items-center min-w-[40px]" aria-label="Ir para a página inicial">
          <Image
            src="/images/brand/logo-lelli-nobre.webp"
            alt="Logo Lelli Nobre Advogados"
            width={40}
            height={40}
            sizes="40px"
            priority
          />
          <span className="sr-only">Lelli Nobre Advogados</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
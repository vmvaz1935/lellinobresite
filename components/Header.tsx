import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg-inverse text-text-on-primary shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center" aria-label="Ir para a página inicial">
          <Image
            src="/images/brand/logo-lelli-nobre.webp"
            alt="Logo Lelli Nobre Advogados"
            width={48}
            height={48}
            sizes="48px"
            priority
          />
          <span className="sr-only">Lelli Nobre Advogados</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
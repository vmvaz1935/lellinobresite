import Image from 'next/image';
import Link from 'next/link';
import { getOfficeImagePath } from '../lib/images';
import Reveal from './Reveal';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-text-on-primary">
      <Image
        src={getOfficeImagePath()}
        alt="Escritório Lelli Nobre Advogados em Higienópolis, São Paulo"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/40 to-transparent" aria-hidden="true" />
      <Reveal>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-3xl md:text-5xl font-medium mb-4 text-brand-secondary-500">{title}</h1>
          <p className="text-lg md:text-2xl mb-6 text-brand-secondary-500">{subtitle}</p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <Link href="/contato" className="btn btn-primary">Fale Conosco</Link>
            <a
              href="https://wa.me/5511910555566"
              className="btn btn-secondary-on-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
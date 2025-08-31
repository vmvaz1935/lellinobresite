import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-text-on-primary">
      <Image
        src="/images/office/escritorio-higienopolis-01.webp"
        alt="Escritório Lelli Nobre Advogados em Higienópolis, São Paulo"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" aria-hidden="true" />
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-3xl md:text-5xl font-medium mb-4">{title}</h1>
        <p className="text-lg md:text-2xl mb-6">{subtitle}</p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link href="/contato" className="btn btn-primary">Fale Conosco</Link>
          <a
            href="https://wa.me/5511910555566"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
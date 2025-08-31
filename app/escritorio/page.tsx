import Image from 'next/image';
import { getOfficeImagePath } from '../../lib/images';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Escritório',
  description:
    'Conheça o escritório Lelli Nobre Advogados: proximidade, clareza e ética em todas as frentes de atuação jurídica.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]'}/escritorio`,
  },
};

export default function EscritorioPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 space-y-10">
      <h1 className="text-3xl md:text-4xl font-medium text-brand-primary-700 mb-6">O Escritório</h1>
      <p>
        Proximidade, clareza e ética orientam nosso trabalho consultivo e contencioso. Oferecemos
        atendimento humanizado e linguagem clara para que nossos clientes compreendam cada passo
        dos seus processos e decisões. Atuamos desde a consultoria preventiva até a defesa em litígios,
        garantindo segurança jurídica e foco em resultados.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={getOfficeImagePath()}
          alt="Escritório Lelli Nobre Advogados em Higienópolis, São Paulo"
          width={800}
          height={1200}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-lg object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-medium text-brand-primary-700">Nossos valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="rounded-xl border border-brand-primary-100 p-5 bg-bg-default shadow-card">
              <div className="flex items-center gap-3 mb-2">
                <svg className="text-brand-secondary-500" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" aria-label="Atendimento humanizado">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41.99 4.22 2.44C11.29 4.99 12.96 4 14.7 4 17.2 4 19.2 6 19.2 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <h3 className="text-lg font-semibold text-brand-primary-700">Atendimento humanizado</h3>
              </div>
              <p>Atendimento humanizado e próximo</p>
            </article>
            <article className="rounded-xl border border-brand-primary-100 p-5 bg-bg-default shadow-card">
              <div className="flex items-center gap-3 mb-2">
                <svg className="text-brand-secondary-500" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" aria-label="Linguagem clara e objetiva">
                  <path d="M4 4h16v12H5.17L4 17.17V4zm2 4v2h12V8H6zm0 4v2h8v-2H6zM20 20H6v-2h12V6h2v14z"/>
                </svg>
                <h3 className="text-lg font-semibold text-brand-primary-700">Linguagem clara</h3>
              </div>
              <p>Linguagem clara e objetiva</p>
            </article>
            <article className="rounded-xl border border-brand-primary-100 p-5 bg-bg-default shadow-card">
              <div className="flex items-center gap-3 mb-2">
                <svg className="text-brand-secondary-500" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" role="img" aria-label="Foco em resultados com ética">
                  <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0-4a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm1 5h-2v4.59l3.3 3.3 1.4-1.42L13 12.17V8z"/>
                </svg>
                <h3 className="text-lg font-semibold text-brand-primary-700">Foco em resultados</h3>
              </div>
              <p>Foco em resultados com ética</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
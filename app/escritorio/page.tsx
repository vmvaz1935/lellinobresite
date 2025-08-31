import Image from 'next/image';
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
          src="/images/office/escritorio-higienopolis-01.webp"
          alt="Escritório Lelli Nobre Advogados em Higienópolis, São Paulo"
          width={800}
          height={1200}
          className="rounded-lg object-cover"
        />
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-medium text-brand-primary-700">Nossos valores</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Atendimento humanizado e próximo</li>
            <li>Linguagem clara e objetiva</li>
            <li>Foco em resultados com ética</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
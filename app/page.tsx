import Hero from '../components/Hero';
import AreaCard from '../components/AreaCard';
import Link from 'next/link';

export const metadata = {
  title: 'Home',
  description:
    'Advocacia empresarial em São Paulo: contratos, M&A, governança corporativa, direito imobiliário e planejamento sucessório.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]'}/`,
  },
};

const areas = [
  {
    title: 'Contratos',
    bullets: [
      'Elaboração e revisão de contratos comerciais e civis',
      'Negociação e gestão de riscos contratuais',
      'Adequação a marcos regulatórios',
    ],
  },
  {
    title: 'Direito Empresarial',
    bullets: [
      'Consultoria societária e governança',
      'Planejamento e reestruturação de negócios',
      'Assessoria em operações empresariais',
    ],
  },
  {
    title: 'Direito Imobiliário',
    bullets: [
      'Compra, venda e locação de imóveis',
      'Due diligence imobiliária',
      'Contratos de construção e incorporação',
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Estruturando o seu amanhã"
        subtitle="Proximidade, clareza e ética em todas as fases da vida e dos negócios"
      />
      <section className="max-w-7xl mx-auto py-16">
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-brand-primary-700 text-center">
          Áreas de Atuação
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area) => (
            <AreaCard key={area.title} title={area.title} bullets={area.bullets} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/atuacao" className="btn btn-ghost">
            Ver todas as áreas
          </Link>
        </div>
      </section>
      <section className="bg-bg-muted py-16">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <h2 className="text-2xl md:text-3xl font-medium text-brand-primary-700">
            Quem somos
          </h2>
          <p>
            Nascemos da união de dois profissionais com formações complementares. Essa
            combinação nos permite oferecer uma experiência completa em Direito: da consultoria
            preventiva ao suporte no litígio. Nosso propósito é acompanhar o cliente em todas as
            fases da vida e dos negócios, com proximidade, confiança e atendimento verdadeiramente
            humanizado — sempre com linguagem clara, ética e foco em resultados.
          </p>
          <Link href="/quem-somos" className="btn btn-primary">
            Conheça a equipe
          </Link>
        </div>
      </section>
    </>
  );
}
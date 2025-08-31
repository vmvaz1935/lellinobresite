import AreaCard from '../../components/AreaCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Áreas de Atuação',
  description:
    'Conheça as áreas de atuação do Lelli Nobre Advogados: contratos, direito empresarial, direito imobiliário, governança corporativa, reestruturações societárias, M&A e planejamento sucessório.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]'}/atuacao`,
  },
};

const cards = [
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
  {
    title: 'Governança Corporativa',
    bullets: [
      'Conformidade com boas práticas e normas',
      'Mapeamento de riscos e controles internos',
      'Treinamentos para conselhos e gestão',
    ],
  },
  {
    title: 'Reestruturações Societárias',
    bullets: [
      'Fusões, cisões e incorporações',
      'Planejamento de reorganizações societárias',
      'Negociação com credores e partes',
    ],
  },
  {
    title: 'Fusões e Aquisições (M&A)',
    bullets: [
      'Due diligence legal',
      'Modelagem da operação e documentação',
      'Negociação e fechamento do negócio',
    ],
  },
  {
    title: 'Planejamento Patrimonial e Sucessório',
    bullets: [
      'Constituição de holdings familiares',
      'Planejamento sucessório e tributário',
      'Proteção de bens e gestão patrimonial',
    ],
  },
];

export default function AtuacaoPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h1 className="text-3xl md:text-4xl font-medium text-brand-primary-700 mb-8">
        Áreas de Atuação
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <AreaCard key={card.title} title={card.title} bullets={card.bullets} />
        ))}
      </div>
    </div>
  );
}
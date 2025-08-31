import type { Metadata } from 'next';
import TeamMember from '../../components/TeamMember';

export const metadata: Metadata = {
  title: 'Quem somos',
  description:
    'Conheça a história da Lelli Nobre Advogados e de seus sócios Christine Nobre e Mateus Lelli, especialistas em direito empresarial, contratos e planejamento sucessório.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]'}/quem-somos`,
  },
};

export default function QuemSomosPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 space-y-12">
      <h1 className="text-3xl md:text-4xl font-medium text-brand-primary-700">
        Quem somos
      </h1>
      <p>
        Nascemos da união de dois profissionais com formações complementares. Essa combinação
        nos permite oferecer uma experiência completa em Direito: da consultoria preventiva ao
        suporte no litígio. Nosso propósito é acompanhar o cliente em todas as fases da vida e dos
        negócios, com proximidade, confiança e atendimento verdadeiramente humanizado — sempre
        com linguagem clara, ética e foco em resultados.
      </p>
      <section className="space-y-16">
        <TeamMember
          name="Christine Nobre"
          role="Sócia"
          image="/images/team/christine-nobre.webp"
          bio={
            `Advogada com sólida formação acadêmica e ampla experiência na assessoria jurídica de empresas. ` +
            `Graduada em Direito pela Universidade de São Paulo (USP), possui especialização em Direito Empresarial ` +
            `pelo Ibmec-SP e realizou curso internacional na Columbia University, em Nova York, voltado à estruturação ` +
            `de negócios e operações societárias, recebendo o título de Master of Laws.\n\n` +
            `Com mais de 10 anos de experiência, assessorou empresas de diversos setores — nacionais e estrangeiras — ` +
            `nas áreas de contratos, governança corporativa, reestruturações societárias, fusões e aquisições (M&A), ` +
            `além de planejamento patrimonial e sucessório para grupos empresariais e famílias. Nos últimos dois anos, ` +
            `assessorou operações de M&A que, em valores agregados, superam R$ 1 bilhão.\n\n` +
            `Foi responsável pela área de Direito Empresarial em escritório de referência na região da Faria Lima, ` +
            `conduzindo negociações complexas e oferecendo soluções jurídicas estratégicas, sempre com foco em ` +
            `segurança, clareza e viabilidade para os negócios dos clientes.`
          }
        />
        <TeamMember
          name="Mateus Lelli"
          role="Sócio"
          image="/images/team/mateus-lelli.webp"
          bio={
            `Advogado com sólida formação acadêmica e ampla experiência na assessoria jurídica de empresas. ` +
            `Graduado em Direito pela Universidade Presbiteriana Mackenzie, tem sua atuação voltada ao atendimento ` +
            `consultivo e contencioso de clientes corporativos, apoiado por competências em negociação e aconselhamento jurídico.\n\n` +
            `Com mais de 10 anos de atuação, assessorou companhias em diferentes estágios e portes em matérias de ` +
            `contratos, direito empresarial, direito imobiliário, além de negociações e gestão estratégica de demandas ` +
            `cíveis relacionadas aos negócios.\n\n` +
            `Passou por escritórios de referência na cidade de São Paulo, experiência que consolidou seu foco em ` +
            `segurança, clareza e viabilidade para as decisões jurídicas dos clientes.`
          }
        />
      </section>
    </div>
  );
}
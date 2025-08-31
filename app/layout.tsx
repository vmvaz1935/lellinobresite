import '../styles/globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkipToContent from '../components/SkipToContent';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { legalServiceLd, organizationLd, personChristineLd, personMateusLd } from '../lib/schema';

export const metadata: Metadata = {
  title: {
    default: 'Lelli Nobre Advogados — Estruturando o seu amanhã',
    template: 'Lelli Nobre Advogados — %s',
  },
  description:
    'Advocacia empresarial em São Paulo: consultivo e contencioso em contratos, M&A, societário, imobiliário e planejamento sucessório.',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]',
    siteName: 'Lelli Nobre Advogados',
    images: [
      {
        url: '/open-graph-image.png',
        width: 1200,
        height: 630,
        alt: 'Logo e escritório Lelli Nobre Advogados',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        {/* JSON‑LD para serviço jurídico, organização e pessoas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personChristineLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personMateusLd()) }}
        />
      </head>
      <body className="bg-bg-default text-text-primary antialiased min-h-screen flex flex-col">
        <SkipToContent />
        <Header />
        <main id="conteudo" className="flex-1 mt-20 px-4">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
import type { Metadata } from 'next';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Lelli Nobre Advogados para consultoria jurídica personalizada.',
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]'}/contato`,
  },
};

export default function ContatoPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 space-y-12">
      <h1 className="text-3xl md:text-4xl font-medium text-brand-primary-700 mb-6">Contato</h1>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-medium text-brand-primary-700 mb-4">Fale conosco</h2>
          <ContactForm />
          <p className="mt-4">
            Ou entre em contato diretamente pelo WhatsApp:
            <a
              href="https://wa.me/5511910555566"
              className="btn btn-secondary ml-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-medium text-brand-primary-700">Onde estamos</h2>
          <p>
            Av. Angélica, 672 - 14º andar, Cj. 141<br />
            Higienópolis, São Paulo - SP, 01228-000
          </p>
          {/* Mapa incorporado */}
          <div className="w-full h-64 md:h-80">
            <iframe
              title="Mapa do escritório Lelli Nobre Advogados"
              src="https://maps.google.com/maps?q=Av.+Angélica,+672+São+Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
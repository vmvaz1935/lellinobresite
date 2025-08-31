/* JSON‑LD definitions for Schema.org markup */

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]';
}

export function legalServiceLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Lelli Nobre Advogados',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Angélica, 672 - 14º andar, Cj. 141',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      postalCode: '01228-000',
      addressCountry: 'BR',
    },
    telephone: '+55 11 91055-5566',
    url: getSiteUrl(),
    sameAs: ['https://wa.me/5511910555566'],
  };
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lelli Nobre Advogados',
    url: getSiteUrl(),
    logo: `${getSiteUrl()}/images/brand/logo-lelli-nobre.webp`,
    // Links para perfis externos relacionados à organização (WhatsApp e LinkedIn dos sócios)
    sameAs: [
      'https://wa.me/5511910555566',
      // LinkedIn do sócio Mateus Lelli
      'https://br.linkedin.com/in/mateus-nobre-granjo-lelli-bb582ba4',
      // LinkedIn da sócia Christine Nobre
      'https://br.linkedin.com/in/christine-nobre-38ba9b1a6',
    ],
  };
}

export function personChristineLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Christine Nobre',
    jobTitle: 'Sócia',
    image: `${getSiteUrl()}/images/team/christine-nobre.webp`,
    worksFor: {
      '@type': 'Organization',
      name: 'Lelli Nobre Advogados',
      url: getSiteUrl(),
    },
    // Perfil profissional de Christine no LinkedIn
    sameAs: ['https://br.linkedin.com/in/christine-nobre-38ba9b1a6'],
  };
}

export function personMateusLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mateus Lelli',
    jobTitle: 'Sócio',
    image: `${getSiteUrl()}/images/team/mateus-lelli.webp`,
    worksFor: {
      '@type': 'Organization',
      name: 'Lelli Nobre Advogados',
      url: getSiteUrl(),
    },
    // Perfil profissional de Mateus no LinkedIn
    sameAs: ['https://br.linkedin.com/in/mateus-nobre-granjo-lelli-bb582ba4'],
  };
}
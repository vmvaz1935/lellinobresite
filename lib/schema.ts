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
    logo: `${getSiteUrl()}/images/brand/logo-lelli-nobre.png`,
    sameAs: [
      'https://wa.me/5511910555566',
      '[PENDENTE]',
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
    sameAs: ['[PENDENTE]'],
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
    sameAs: ['[PENDENTE]'],
  };
}
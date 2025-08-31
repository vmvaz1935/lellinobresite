/**
 * Configuration for next-sitemap
 * @see https://github.com/iamvishnusankar/next-sitemap
 */
module.exports = {
  // URL base do site; usa variável de ambiente quando fornecida, caso contrário cai para o domínio final
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lellinobre.com.br',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lellinobre.com.br'}/sitemap.xml`,
    ],
  },
};
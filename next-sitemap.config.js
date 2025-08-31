/**
 * Configuration for next-sitemap
 * @see https://github.com/iamvishnusankar/next-sitemap
 */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://[PENDENTE-DOMINIO]'}/sitemap.xml`,
    ],
  },
};
import { salesEmail } from './data/contact'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/bags/beeswax-bread-bags': { redirect: { to: '/beeswax-bread-bags/', statusCode: 301 } },
  },
  nitro: {
    prerender: {
      routes: ['/', '/products', '/about', '/contact', '/beeswax-bread-bags/', '/bags/canvas-cosmetic-bags', '/bags/canvas-tote-bags'],
    },
  },
  app: {
    head: {
      title: 'Custom Logo Beeswax Bread Bags | YiXing Textile',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Order custom logo beeswax bread bags from 200 pieces. Compare buckle and zipper models for wholesale or private label orders. We also customize canvas cosmetic bags and totes.' },
        { name: 'keywords', content: 'beeswax bags, beeswax bread bags, food storage bags, reusable wraps, eco packaging, OEM beeswax bags, wholesale beeswax bags, beeswax wrap manufacturer' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'YiXing Textile' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-8YX343DNZ7', async: true },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8YX343DNZ7');
          `,
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://www.beeswaxbag.cn/#organization',
                name: 'Guangxi YiXing Textile Co., Ltd.',
                url: 'https://www.beeswaxbag.cn',
                logo: 'https://www.beeswaxbag.cn/favicon.svg',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+86-19042786974',
                  email: salesEmail,
                  contactType: 'sales',
                  availableLanguage: ['English', 'Chinese'],
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Zhongshan',
                  addressRegion: 'Hezhou, Guangxi',
                  addressCountry: 'CN',
                },
              },
              {
                '@type': 'WebSite',
                '@id': 'https://www.beeswaxbag.cn/#website',
                url: 'https://www.beeswaxbag.cn',
                name: 'YiXing Textile',
                publisher: { '@id': 'https://www.beeswaxbag.cn/#organization' },
                inLanguage: 'en',
              },
            ],
          }),
        },
      ],
    }
  }
})

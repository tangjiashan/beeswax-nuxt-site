export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ['/', '/products', '/about', '/contact'],
    },
  },
  app: {
    head: {
      title: 'YiMei Textile — Professional Beeswax Bread Bags Manufacturer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional manufacturer of beeswax bags, bread bags and food storage bags. 15+ years experience, FDA & ISO9001 certified, OEM/ODM available, low MOQ from 200 pcs. Factory direct pricing.' },
        { name: 'keywords', content: 'beeswax bags, beeswax bread bags, food storage bags, reusable wraps, eco packaging, OEM beeswax bags, wholesale beeswax bags, beeswax wrap manufacturer' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'YiMei Textile' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://www.beeswaxbag.cn/#organization',
                name: 'Guangxi YiMei Textile Co., Ltd.',
                url: 'https://www.beeswaxbag.cn',
                logo: 'https://www.beeswaxbag.cn/favicon.svg',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+86-19042786974',
                  email: 'contact@beeswaxbag.cn',
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
                name: 'YiMei Textile',
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

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
      ]
    }
  }
})

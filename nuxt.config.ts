// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  // Ensure Nuxt 3 directory layout is used (root pages/, components/, assets/, etc.)
  future: {
    compatibilityVersion: 3
  },
  srcDir: '.',

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'AURELIA | Artisanal Fine Jewelry & Haute Joaillerie',
      titleTemplate: '%s | AURELIA Fine Jewelry',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Discover handcrafted fine jewelry crafted with ethical 18k solid gold, 950 platinum, and conflict-free diamonds. Timeless rings, necklaces, bracelets, and earrings.'
        },
        { name: 'theme-color', content: '#121212' },
        // Open Graph
        { property: 'og:site_name', content: 'AURELIA Fine Jewelry' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'AURELIA | Artisanal Fine Jewelry & Haute Joaillerie' },
        {
          property: 'og:description',
          content: 'Handcrafted ethically sourced fine jewelry. Solid 18k gold, platinum, and brilliant conflict-free diamonds.'
        },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'AURELIA | Artisanal Fine Jewelry' },
        {
          name: 'twitter:description',
          content: 'Handcrafted ethically sourced fine jewelry. Solid 18k gold, platinum, and brilliant conflict-free diamonds.'
        },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseKey: process.env.SUPABASE_KEY || '',
    public: {
      siteUrl: process.env.SITE_URL || 'https://aurelia-jewelry.vercel.app'
    }
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/sitemap.xml', '/robots.txt']
    }
  }
})

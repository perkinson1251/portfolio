// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    'nuxt-directus',
  ],
  nitro: {
    routeRules: {
      '/directus/**': {
        proxy: 'http://directus:8055/**',
      },
    },
  },
  directus: {
    url: process.env.NUXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055',
    autoFetch: true,
    autoRefresh: true,
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'slide-left',
      mode: 'out-in',
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    trailingSlash: false,
    indexable: true,
    env: process.env.NUXT_ENV_MODE,
    keywords: [
      'frontend developer',
      'vue developer',
      'nuxt developer',
      'web development',
      'portfolio',
      'roman trashutin',
      'фронтенд розробник',
      'веб розробка',
    ],
  },
  robots: {
    enabled: true,
    sitemap: `${process.env.NUXT_PUBLIC_SITE_URL}/sitemap.xml`,
    robotsEnabledValue:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    blockNonSeoBots: true,
    groups: [
      {
        userAgent: ['*'],
        allow: ['/'],
        disallow: ['/api', '/*.json'],
      },
    ],
  },
  sitemap: {
    enabled: true,
    autoLastmod: true,
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    },
    autoI18n: true,
    sortEntries: true,
    exclude: ['/api/**', '/404', '/500'],
    discoverImages: true,
    sitemapName: 'sitemap.xml',
  },
  schemaOrg: {
    enabled: true,
    identity: {
      type: 'Person',
      name: 'Roman Trashutin',
      url: process.env.NUXT_PUBLIC_SITE_URL,
      jobTitle: 'Frontend Developer',
      sameAs: [
        'https://github.com/perkinson1251',
        'https://linkedin.com/in/roman-trashutin',
      ],
    },
    minify: true,
    reactive: true,
  },
  i18n: {
    langDir: 'locales',
    defaultLocale: 'ua',
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'ua',
        iso: 'uk-UA',
        name: 'Українська',
        file: 'ua.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'ua',
      cookieSecure: true,
    },
    strategy: 'no_prefix',
    lazy: true,
    compilation: {
      strictMessage: true,
      escapeHtml: true,
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
})

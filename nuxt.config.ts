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
  ],
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

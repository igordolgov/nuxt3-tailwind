// import { defineNuxtModule } from 'nuxt'
export default defineNuxtConfig({
    modules: [
      '@nuxt/devtools',
      '@nuxt/devtools-ui-kit',
      '@pinia/nuxt',
      'nuxt-icon',
      'nuxt-swiper'
    ],
    devtools: {
      // Enable devtools (default: true)
      enabled: true,
      // VS Code Server options
      vscode: {},
      // ...other options
    },
    css: ['~/assets/css/tailwind.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  })

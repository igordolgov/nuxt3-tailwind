import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@pinia/nuxt'],
    pinia: {
        autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },
    buildModules: [
        ['@pinia/nuxt', { disableVuex: true }]
    ],
    css:[
        '@/assets/css/tailwind.css'
    ]
})

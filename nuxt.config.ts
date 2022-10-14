// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vue: {
        compilerOptions: {
            isCustomElement: tag => ['wrapper'].includes(tag)
        }
    },
    css: [
        'assets/style.css',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        'nuxt-windicss',
    ],
})
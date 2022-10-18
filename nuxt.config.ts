// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Tianyu Yuan",
            meta: [
                {
                    name: 'description',
                    content: "Coding, Playing music, and Gaming are three fundamental pillars of this guy's life."
                }
            ],
            link: [
                { rel: 'icon', type: 'image/svg', href: '/svg/favicon.svg'}
            ]
        }
    },
    vue: {
        compilerOptions: {
            isCustomElement: tag => ['wrapper'].includes(tag)
        }
    },
    css: [
        'assets/style.css',
        '@fontsource/lato',
        '@fontsource/material-icons',
        '@fontsource/material-icons-outlined',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    modules: [
        'nuxt-windicss',
    ],
})
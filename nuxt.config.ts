// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Tianyu Yuan",
      meta: [
        {
          name: 'description',
          content: "Welcom to Tianyu's blog. Here covers tech blogs, photographs, and my resume."
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: '/svg/favicon.svg' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['wrapper'].includes(tag)
    }
  },
  css: [
    '@/assets/css/style.css',
    '@/assets/css/dark.css',
    '@fontsource/lato',
    '@fontsource/jetbrains-mono',
    '@fontsource/material-icons',
    '@fontsource/material-icons-outlined',
  ],
  modules: [
    'nuxt-windicss',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
  ],
  colorMode: {
    classSuffix: '',
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: {
        default: 'github-dark',
      },
      preload: [
        'c',
        'cpp',
        'java',
        'shell',
        'python',
        'js',
        'ts',
        'css',
        'html'
      ]
    }
  },
})

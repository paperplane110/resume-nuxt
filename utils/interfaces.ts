import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export { articleInfo }

interface articleInfo extends ParsedContent {
  title: string
  date: string
  description: string
  image: {
    src: string
    alt: string
    hash: string
    url: string
    photographer: string
  }
  tags: string[]
}

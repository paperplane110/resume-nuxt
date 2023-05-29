import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export {
  articleInfo,
  projectIconProps,
  projectBriefProps,
}

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

interface projectIconProps {
  fromColor: string
  toColor: string
  backColor: string
  abbr: string
}

interface projectBriefProps extends projectIconProps {
  // description
  name: string
  description: string
  start: string
  end: string
  link: string
}

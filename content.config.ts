import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({ type: 'page', source: 'blogs/**/*.md' }),
    caseStudies: defineCollection({ type: 'page', source: 'case-studies/**/*.md' }),
    resources: defineCollection({ type: 'page', source: 'resources/**/*.md' })
  }
})
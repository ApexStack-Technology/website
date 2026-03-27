import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'content',
      source: 'blogs/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        tags: z.array(z.string()).optional(),
        cover: z.string().optional(),
        draft: z.boolean().optional()
      })
    }),
    caseStudies: defineCollection({
      type: 'content',
      source: 'case-studies/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().optional()
      })
    }),
    resources: defineCollection({
      type: 'content',
      source: 'resources/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().optional()
      })
    })
  }
})
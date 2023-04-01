import { z, defineCollection } from 'astro:content'
const news = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    heroImage: z.string().optional(),
    isDraft: z.boolean().optional(),
  }),
})
export const collections = { news }

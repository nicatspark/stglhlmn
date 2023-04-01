import { z, defineCollection } from 'astro:content'
const news = defineCollection({
  schema: z.object({
    title: z.string().max(60, 'For SEO keep your title under 60ch.'),
    tags: z.array(z.string()),
    description: z
      .string()
      .max(160, 'For SEO keep your description under 160ch.'),
    pubDate: z.date(),
    heroImage: z.string().optional(),
    isDraft: z.boolean().optional(),
  }),
})
export const collections = { news }

// z.string().transform((str) => new Date(str)),

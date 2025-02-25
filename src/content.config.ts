import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const excalidrawCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './public/sketches' }),
  schema: z.object({
    tags: z.array(z.string()),
    'excalidraw-plugin': z.string(),
  }),
})

export const collections = {
  sketches: excalidrawCollection,
}

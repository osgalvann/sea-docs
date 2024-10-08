import { defineCollection, z } from "astro:content";

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { docs };

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    base: './src/data/projects',
    pattern: '**/*.{md,mdx}',
  }),

  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.union([z.string(), z.number()]),
    type: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    accent: z.string().default('#aee4e6'),
    cover: z.string().optional(),
    video: z.string().optional(),
    source: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = {
  projects,
};
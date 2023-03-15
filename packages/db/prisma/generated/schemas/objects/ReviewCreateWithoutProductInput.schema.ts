import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ReviewCreateWithoutProductInputObjectSchema = Schema;

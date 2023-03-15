import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    body: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const ReviewCountAggregateInputObjectSchema = Schema;

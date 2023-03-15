import { z } from 'zod';
import { ProductCreateNestedOneWithoutReviewsInputObjectSchema } from './ProductCreateNestedOneWithoutReviewsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateInput> = z
  .object({
    id: z.string().optional(),
    body: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    product: z.lazy(
      () => ProductCreateNestedOneWithoutReviewsInputObjectSchema,
    ),
  })
  .strict();

export const ReviewCreateInputObjectSchema = Schema;

import { z } from 'zod';
import { ReviewCreateNestedManyWithoutProductInputObjectSchema } from './ReviewCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    department: z.string(),
    price: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    reviews: z
      .lazy(() => ReviewCreateNestedManyWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateInputObjectSchema = Schema;

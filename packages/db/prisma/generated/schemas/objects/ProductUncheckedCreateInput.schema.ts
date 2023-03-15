import { z } from 'zod';
import { ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema } from './ReviewUncheckedCreateNestedManyWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    department: z.string(),
    price: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    reviews: z
      .lazy(
        () => ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateInputObjectSchema = Schema;

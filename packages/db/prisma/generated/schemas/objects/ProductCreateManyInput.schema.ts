import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateManyInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    department: z.string(),
    price: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  })
  .strict();

export const ProductCreateManyInputObjectSchema = Schema;

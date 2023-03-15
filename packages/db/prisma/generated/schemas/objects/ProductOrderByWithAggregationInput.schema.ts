import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    department: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ProductMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProductMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProductOrderByWithAggregationInputObjectSchema = Schema;

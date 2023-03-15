import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ReviewCountOrderByAggregateInputObjectSchema } from './ReviewCountOrderByAggregateInput.schema';
import { ReviewMaxOrderByAggregateInputObjectSchema } from './ReviewMaxOrderByAggregateInput.schema';
import { ReviewMinOrderByAggregateInputObjectSchema } from './ReviewMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    body: z.lazy(() => SortOrderSchema).optional(),
    productId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ReviewCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ReviewMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ReviewMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ReviewOrderByWithAggregationInputObjectSchema = Schema;

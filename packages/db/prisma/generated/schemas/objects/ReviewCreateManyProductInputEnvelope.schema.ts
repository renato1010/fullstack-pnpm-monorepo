import { z } from 'zod';
import { ReviewCreateManyProductInputObjectSchema } from './ReviewCreateManyProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewCreateManyProductInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReviewCreateManyProductInputObjectSchema),
      z.lazy(() => ReviewCreateManyProductInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReviewCreateManyProductInputEnvelopeObjectSchema = Schema;

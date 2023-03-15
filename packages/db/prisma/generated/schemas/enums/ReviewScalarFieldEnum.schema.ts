import { z } from 'zod';

export const ReviewScalarFieldEnumSchema = z.enum([
  'id',
  'body',
  'productId',
  'createdAt',
  'updatedAt',
]);

import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum([
  'id',
  'name',
  'description',
  'department',
  'price',
  'createdAt',
  'updatedAt',
]);

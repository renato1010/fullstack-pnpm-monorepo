"use strict";
exports.__esModule = true;
exports.ProductMinAggregateInputObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    name: zod_1.z.literal(true).optional(),
    description: zod_1.z.literal(true).optional(),
    department: zod_1.z.literal(true).optional(),
    price: zod_1.z.literal(true).optional(),
    createdAt: zod_1.z.literal(true).optional(),
    updatedAt: zod_1.z.literal(true).optional()
})
    .strict();
exports.ProductMinAggregateInputObjectSchema = Schema;

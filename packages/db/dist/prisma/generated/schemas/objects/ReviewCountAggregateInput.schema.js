"use strict";
exports.__esModule = true;
exports.ReviewCountAggregateInputObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    id: zod_1.z.literal(true).optional(),
    body: zod_1.z.literal(true).optional(),
    productId: zod_1.z.literal(true).optional(),
    createdAt: zod_1.z.literal(true).optional(),
    updatedAt: zod_1.z.literal(true).optional(),
    _all: zod_1.z.literal(true).optional()
})
    .strict();
exports.ReviewCountAggregateInputObjectSchema = Schema;

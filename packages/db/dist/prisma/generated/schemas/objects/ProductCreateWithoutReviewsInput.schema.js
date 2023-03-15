"use strict";
exports.__esModule = true;
exports.ProductCreateWithoutReviewsInputObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    department: zod_1.z.string(),
    price: zod_1.z.string(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
})
    .strict();
exports.ProductCreateWithoutReviewsInputObjectSchema = Schema;

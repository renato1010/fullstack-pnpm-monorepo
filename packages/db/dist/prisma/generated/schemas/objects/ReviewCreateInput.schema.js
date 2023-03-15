"use strict";
exports.__esModule = true;
exports.ReviewCreateInputObjectSchema = void 0;
var zod_1 = require("zod");
var ProductCreateNestedOneWithoutReviewsInput_schema_1 = require("./ProductCreateNestedOneWithoutReviewsInput.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    body: zod_1.z.string(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    product: zod_1.z.lazy(function () { return ProductCreateNestedOneWithoutReviewsInput_schema_1.ProductCreateNestedOneWithoutReviewsInputObjectSchema; })
})
    .strict();
exports.ReviewCreateInputObjectSchema = Schema;

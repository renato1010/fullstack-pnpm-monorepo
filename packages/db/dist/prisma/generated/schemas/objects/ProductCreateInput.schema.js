"use strict";
exports.__esModule = true;
exports.ProductCreateInputObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewCreateNestedManyWithoutProductInput_schema_1 = require("./ReviewCreateNestedManyWithoutProductInput.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    department: zod_1.z.string(),
    price: zod_1.z.string(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional(),
    reviews: zod_1.z
        .lazy(function () { return ReviewCreateNestedManyWithoutProductInput_schema_1.ReviewCreateNestedManyWithoutProductInputObjectSchema; })
        .optional()
})
    .strict();
exports.ProductCreateInputObjectSchema = Schema;

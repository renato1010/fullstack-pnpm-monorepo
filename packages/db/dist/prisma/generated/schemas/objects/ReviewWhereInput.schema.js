"use strict";
exports.__esModule = true;
exports.ReviewWhereInputObjectSchema = void 0;
var zod_1 = require("zod");
var StringFilter_schema_1 = require("./StringFilter.schema");
var DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
var ProductRelationFilter_schema_1 = require("./ProductRelationFilter.schema");
var ProductWhereInput_schema_1 = require("./ProductWhereInput.schema");
var Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ReviewWhereInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ReviewWhereInputObjectSchema; }).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(function () { return exports.ReviewWhereInputObjectSchema; })
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ReviewWhereInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ReviewWhereInputObjectSchema; }).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    body: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    productId: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([zod_1.z.lazy(function () { return DateTimeFilter_schema_1.DateTimeFilterObjectSchema; }), zod_1.z.date()])
        .optional(),
    updatedAt: zod_1.z
        .union([zod_1.z.lazy(function () { return DateTimeFilter_schema_1.DateTimeFilterObjectSchema; }), zod_1.z.date()])
        .optional(),
    product: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ProductRelationFilter_schema_1.ProductRelationFilterObjectSchema; }),
        zod_1.z.lazy(function () { return ProductWhereInput_schema_1.ProductWhereInputObjectSchema; }),
    ])
        .optional()
})
    .strict();
exports.ReviewWhereInputObjectSchema = Schema;

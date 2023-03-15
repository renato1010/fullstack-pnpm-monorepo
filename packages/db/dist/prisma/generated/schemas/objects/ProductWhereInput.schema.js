"use strict";
exports.__esModule = true;
exports.ProductWhereInputObjectSchema = void 0;
var zod_1 = require("zod");
var StringFilter_schema_1 = require("./StringFilter.schema");
var DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
var ReviewListRelationFilter_schema_1 = require("./ReviewListRelationFilter.schema");
var Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ProductWhereInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ProductWhereInputObjectSchema; }).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(function () { return exports.ProductWhereInputObjectSchema; })
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ProductWhereInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ProductWhereInputObjectSchema; }).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    name: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    department: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    price: zod_1.z
        .union([zod_1.z.lazy(function () { return StringFilter_schema_1.StringFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([zod_1.z.lazy(function () { return DateTimeFilter_schema_1.DateTimeFilterObjectSchema; }), zod_1.z.date()])
        .optional(),
    updatedAt: zod_1.z
        .union([zod_1.z.lazy(function () { return DateTimeFilter_schema_1.DateTimeFilterObjectSchema; }), zod_1.z.date()])
        .optional(),
    reviews: zod_1.z.lazy(function () { return ReviewListRelationFilter_schema_1.ReviewListRelationFilterObjectSchema; }).optional()
})
    .strict();
exports.ProductWhereInputObjectSchema = Schema;

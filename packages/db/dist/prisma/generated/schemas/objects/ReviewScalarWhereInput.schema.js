"use strict";
exports.__esModule = true;
exports.ReviewScalarWhereInputObjectSchema = void 0;
var zod_1 = require("zod");
var StringFilter_schema_1 = require("./StringFilter.schema");
var DateTimeFilter_schema_1 = require("./DateTimeFilter.schema");
var Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereInputObjectSchema; }).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(function () { return exports.ReviewScalarWhereInputObjectSchema; })
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereInputObjectSchema; }).array(),
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
        .optional()
})
    .strict();
exports.ReviewScalarWhereInputObjectSchema = Schema;

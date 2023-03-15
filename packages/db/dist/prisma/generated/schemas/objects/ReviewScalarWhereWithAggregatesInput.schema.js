"use strict";
exports.__esModule = true;
exports.ReviewScalarWhereWithAggregatesInputObjectSchema = void 0;
var zod_1 = require("zod");
var StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
var DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
var Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereWithAggregatesInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereWithAggregatesInputObjectSchema; }).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(function () { return exports.ReviewScalarWhereWithAggregatesInputObjectSchema; })
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereWithAggregatesInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ReviewScalarWhereWithAggregatesInputObjectSchema; }).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(function () { return StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    body: zod_1.z
        .union([zod_1.z.lazy(function () { return StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    productId: zod_1.z
        .union([zod_1.z.lazy(function () { return StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    createdAt: zod_1.z
        .union([zod_1.z.lazy(function () { return DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema; }), zod_1.z.date()])
        .optional(),
    updatedAt: zod_1.z
        .union([zod_1.z.lazy(function () { return DateTimeWithAggregatesFilter_schema_1.DateTimeWithAggregatesFilterObjectSchema; }), zod_1.z.date()])
        .optional()
})
    .strict();
exports.ReviewScalarWhereWithAggregatesInputObjectSchema = Schema;

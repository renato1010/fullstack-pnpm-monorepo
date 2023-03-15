"use strict";
exports.__esModule = true;
exports.ProductScalarWhereWithAggregatesInputObjectSchema = void 0;
var zod_1 = require("zod");
var StringWithAggregatesFilter_schema_1 = require("./StringWithAggregatesFilter.schema");
var DateTimeWithAggregatesFilter_schema_1 = require("./DateTimeWithAggregatesFilter.schema");
var Schema = zod_1.z
    .object({
    AND: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ProductScalarWhereWithAggregatesInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ProductScalarWhereWithAggregatesInputObjectSchema; }).array(),
    ])
        .optional(),
    OR: zod_1.z
        .lazy(function () { return exports.ProductScalarWhereWithAggregatesInputObjectSchema; })
        .array()
        .optional(),
    NOT: zod_1.z
        .union([
        zod_1.z.lazy(function () { return exports.ProductScalarWhereWithAggregatesInputObjectSchema; }),
        zod_1.z.lazy(function () { return exports.ProductScalarWhereWithAggregatesInputObjectSchema; }).array(),
    ])
        .optional(),
    id: zod_1.z
        .union([zod_1.z.lazy(function () { return StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    name: zod_1.z
        .union([zod_1.z.lazy(function () { return StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    description: zod_1.z
        .union([zod_1.z.lazy(function () { return StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    department: zod_1.z
        .union([zod_1.z.lazy(function () { return StringWithAggregatesFilter_schema_1.StringWithAggregatesFilterObjectSchema; }), zod_1.z.string()])
        .optional(),
    price: zod_1.z
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
exports.ProductScalarWhereWithAggregatesInputObjectSchema = Schema;

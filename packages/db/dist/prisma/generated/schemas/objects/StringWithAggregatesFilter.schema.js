"use strict";
exports.__esModule = true;
exports.StringWithAggregatesFilterObjectSchema = void 0;
var zod_1 = require("zod");
var QueryMode_schema_1 = require("../enums/QueryMode.schema");
var NestedStringWithAggregatesFilter_schema_1 = require("./NestedStringWithAggregatesFilter.schema");
var NestedIntFilter_schema_1 = require("./NestedIntFilter.schema");
var NestedStringFilter_schema_1 = require("./NestedStringFilter.schema");
var Schema = zod_1.z
    .object({
    equals: zod_1.z.string().optional(),
    "in": zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    mode: zod_1.z.lazy(function () { return QueryMode_schema_1.QueryModeSchema; }).optional(),
    not: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(function () { return NestedStringWithAggregatesFilter_schema_1.NestedStringWithAggregatesFilterObjectSchema; }),
    ])
        .optional(),
    _count: zod_1.z.lazy(function () { return NestedIntFilter_schema_1.NestedIntFilterObjectSchema; }).optional(),
    _min: zod_1.z.lazy(function () { return NestedStringFilter_schema_1.NestedStringFilterObjectSchema; }).optional(),
    _max: zod_1.z.lazy(function () { return NestedStringFilter_schema_1.NestedStringFilterObjectSchema; }).optional()
})
    .strict();
exports.StringWithAggregatesFilterObjectSchema = Schema;

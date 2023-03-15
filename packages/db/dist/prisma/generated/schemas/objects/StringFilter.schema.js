"use strict";
exports.__esModule = true;
exports.StringFilterObjectSchema = void 0;
var zod_1 = require("zod");
var QueryMode_schema_1 = require("../enums/QueryMode.schema");
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
        .union([zod_1.z.string(), zod_1.z.lazy(function () { return NestedStringFilter_schema_1.NestedStringFilterObjectSchema; })])
        .optional()
})
    .strict();
exports.StringFilterObjectSchema = Schema;

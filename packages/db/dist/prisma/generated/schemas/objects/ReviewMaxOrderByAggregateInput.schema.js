"use strict";
exports.__esModule = true;
exports.ReviewMaxOrderByAggregateInputObjectSchema = void 0;
var zod_1 = require("zod");
var SortOrder_schema_1 = require("../enums/SortOrder.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    body: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    productId: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    createdAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    updatedAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional()
})
    .strict();
exports.ReviewMaxOrderByAggregateInputObjectSchema = Schema;

"use strict";
exports.__esModule = true;
exports.ReviewOrderByWithAggregationInputObjectSchema = void 0;
var zod_1 = require("zod");
var SortOrder_schema_1 = require("../enums/SortOrder.schema");
var ReviewCountOrderByAggregateInput_schema_1 = require("./ReviewCountOrderByAggregateInput.schema");
var ReviewMaxOrderByAggregateInput_schema_1 = require("./ReviewMaxOrderByAggregateInput.schema");
var ReviewMinOrderByAggregateInput_schema_1 = require("./ReviewMinOrderByAggregateInput.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    body: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    productId: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    createdAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    updatedAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    _count: zod_1.z
        .lazy(function () { return ReviewCountOrderByAggregateInput_schema_1.ReviewCountOrderByAggregateInputObjectSchema; })
        .optional(),
    _max: zod_1.z.lazy(function () { return ReviewMaxOrderByAggregateInput_schema_1.ReviewMaxOrderByAggregateInputObjectSchema; }).optional(),
    _min: zod_1.z.lazy(function () { return ReviewMinOrderByAggregateInput_schema_1.ReviewMinOrderByAggregateInputObjectSchema; }).optional()
})
    .strict();
exports.ReviewOrderByWithAggregationInputObjectSchema = Schema;

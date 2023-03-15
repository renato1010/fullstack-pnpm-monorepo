"use strict";
exports.__esModule = true;
exports.ProductOrderByWithAggregationInputObjectSchema = void 0;
var zod_1 = require("zod");
var SortOrder_schema_1 = require("../enums/SortOrder.schema");
var ProductCountOrderByAggregateInput_schema_1 = require("./ProductCountOrderByAggregateInput.schema");
var ProductMaxOrderByAggregateInput_schema_1 = require("./ProductMaxOrderByAggregateInput.schema");
var ProductMinOrderByAggregateInput_schema_1 = require("./ProductMinOrderByAggregateInput.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    name: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    description: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    department: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    price: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    createdAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    updatedAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    _count: zod_1.z
        .lazy(function () { return ProductCountOrderByAggregateInput_schema_1.ProductCountOrderByAggregateInputObjectSchema; })
        .optional(),
    _max: zod_1.z.lazy(function () { return ProductMaxOrderByAggregateInput_schema_1.ProductMaxOrderByAggregateInputObjectSchema; }).optional(),
    _min: zod_1.z.lazy(function () { return ProductMinOrderByAggregateInput_schema_1.ProductMinOrderByAggregateInputObjectSchema; }).optional()
})
    .strict();
exports.ProductOrderByWithAggregationInputObjectSchema = Schema;

"use strict";
exports.__esModule = true;
exports.ProductOrderByWithRelationInputObjectSchema = void 0;
var zod_1 = require("zod");
var SortOrder_schema_1 = require("../enums/SortOrder.schema");
var ReviewOrderByRelationAggregateInput_schema_1 = require("./ReviewOrderByRelationAggregateInput.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    name: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    description: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    department: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    price: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    createdAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    updatedAt: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional(),
    reviews: zod_1.z
        .lazy(function () { return ReviewOrderByRelationAggregateInput_schema_1.ReviewOrderByRelationAggregateInputObjectSchema; })
        .optional()
})
    .strict();
exports.ProductOrderByWithRelationInputObjectSchema = Schema;

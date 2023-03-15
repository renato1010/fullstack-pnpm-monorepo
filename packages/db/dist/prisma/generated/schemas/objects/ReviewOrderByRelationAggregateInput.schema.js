"use strict";
exports.__esModule = true;
exports.ReviewOrderByRelationAggregateInputObjectSchema = void 0;
var zod_1 = require("zod");
var SortOrder_schema_1 = require("../enums/SortOrder.schema");
var Schema = zod_1.z
    .object({
    _count: zod_1.z.lazy(function () { return SortOrder_schema_1.SortOrderSchema; }).optional()
})
    .strict();
exports.ReviewOrderByRelationAggregateInputObjectSchema = Schema;

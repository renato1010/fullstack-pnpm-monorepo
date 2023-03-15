"use strict";
exports.__esModule = true;
exports.ProductAggregateSchema = void 0;
var zod_1 = require("zod");
var ProductOrderByWithRelationInput_schema_1 = require("./objects/ProductOrderByWithRelationInput.schema");
var ProductWhereInput_schema_1 = require("./objects/ProductWhereInput.schema");
var ProductWhereUniqueInput_schema_1 = require("./objects/ProductWhereUniqueInput.schema");
var ProductCountAggregateInput_schema_1 = require("./objects/ProductCountAggregateInput.schema");
var ProductMinAggregateInput_schema_1 = require("./objects/ProductMinAggregateInput.schema");
var ProductMaxAggregateInput_schema_1 = require("./objects/ProductMaxAggregateInput.schema");
exports.ProductAggregateSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        ProductOrderByWithRelationInput_schema_1.ProductOrderByWithRelationInputObjectSchema,
        ProductOrderByWithRelationInput_schema_1.ProductOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: ProductWhereInput_schema_1.ProductWhereInputObjectSchema.optional(),
    cursor: ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    _count: zod_1.z
        .union([zod_1.z.literal(true), ProductCountAggregateInput_schema_1.ProductCountAggregateInputObjectSchema])
        .optional(),
    _min: ProductMinAggregateInput_schema_1.ProductMinAggregateInputObjectSchema.optional(),
    _max: ProductMaxAggregateInput_schema_1.ProductMaxAggregateInputObjectSchema.optional()
});

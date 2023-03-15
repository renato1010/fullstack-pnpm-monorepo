"use strict";
exports.__esModule = true;
exports.ProductGroupBySchema = void 0;
var zod_1 = require("zod");
var ProductWhereInput_schema_1 = require("./objects/ProductWhereInput.schema");
var ProductOrderByWithAggregationInput_schema_1 = require("./objects/ProductOrderByWithAggregationInput.schema");
var ProductScalarWhereWithAggregatesInput_schema_1 = require("./objects/ProductScalarWhereWithAggregatesInput.schema");
var ProductScalarFieldEnum_schema_1 = require("./enums/ProductScalarFieldEnum.schema");
exports.ProductGroupBySchema = zod_1.z.object({
    where: ProductWhereInput_schema_1.ProductWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        ProductOrderByWithAggregationInput_schema_1.ProductOrderByWithAggregationInputObjectSchema,
        ProductOrderByWithAggregationInput_schema_1.ProductOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: ProductScalarWhereWithAggregatesInput_schema_1.ProductScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(ProductScalarFieldEnum_schema_1.ProductScalarFieldEnumSchema)
});

"use strict";
exports.__esModule = true;
exports.ProductFindManySchema = void 0;
var zod_1 = require("zod");
var ProductOrderByWithRelationInput_schema_1 = require("./objects/ProductOrderByWithRelationInput.schema");
var ProductWhereInput_schema_1 = require("./objects/ProductWhereInput.schema");
var ProductWhereUniqueInput_schema_1 = require("./objects/ProductWhereUniqueInput.schema");
var ProductScalarFieldEnum_schema_1 = require("./enums/ProductScalarFieldEnum.schema");
exports.ProductFindManySchema = zod_1.z.object({
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
    distinct: zod_1.z.array(ProductScalarFieldEnum_schema_1.ProductScalarFieldEnumSchema).optional()
});

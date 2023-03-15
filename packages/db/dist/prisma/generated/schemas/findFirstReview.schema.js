"use strict";
exports.__esModule = true;
exports.ReviewFindFirstSchema = void 0;
var zod_1 = require("zod");
var ReviewOrderByWithRelationInput_schema_1 = require("./objects/ReviewOrderByWithRelationInput.schema");
var ReviewWhereInput_schema_1 = require("./objects/ReviewWhereInput.schema");
var ReviewWhereUniqueInput_schema_1 = require("./objects/ReviewWhereUniqueInput.schema");
var ReviewScalarFieldEnum_schema_1 = require("./enums/ReviewScalarFieldEnum.schema");
exports.ReviewFindFirstSchema = zod_1.z.object({
    orderBy: zod_1.z
        .union([
        ReviewOrderByWithRelationInput_schema_1.ReviewOrderByWithRelationInputObjectSchema,
        ReviewOrderByWithRelationInput_schema_1.ReviewOrderByWithRelationInputObjectSchema.array(),
    ])
        .optional(),
    where: ReviewWhereInput_schema_1.ReviewWhereInputObjectSchema.optional(),
    cursor: ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    distinct: zod_1.z.array(ReviewScalarFieldEnum_schema_1.ReviewScalarFieldEnumSchema).optional()
});

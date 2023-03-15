"use strict";
exports.__esModule = true;
exports.ReviewGroupBySchema = void 0;
var zod_1 = require("zod");
var ReviewWhereInput_schema_1 = require("./objects/ReviewWhereInput.schema");
var ReviewOrderByWithAggregationInput_schema_1 = require("./objects/ReviewOrderByWithAggregationInput.schema");
var ReviewScalarWhereWithAggregatesInput_schema_1 = require("./objects/ReviewScalarWhereWithAggregatesInput.schema");
var ReviewScalarFieldEnum_schema_1 = require("./enums/ReviewScalarFieldEnum.schema");
exports.ReviewGroupBySchema = zod_1.z.object({
    where: ReviewWhereInput_schema_1.ReviewWhereInputObjectSchema.optional(),
    orderBy: zod_1.z
        .union([
        ReviewOrderByWithAggregationInput_schema_1.ReviewOrderByWithAggregationInputObjectSchema,
        ReviewOrderByWithAggregationInput_schema_1.ReviewOrderByWithAggregationInputObjectSchema.array(),
    ])
        .optional(),
    having: ReviewScalarWhereWithAggregatesInput_schema_1.ReviewScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: zod_1.z.number().optional(),
    skip: zod_1.z.number().optional(),
    by: zod_1.z.array(ReviewScalarFieldEnum_schema_1.ReviewScalarFieldEnumSchema)
});

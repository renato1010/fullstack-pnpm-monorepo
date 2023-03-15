"use strict";
exports.__esModule = true;
exports.ReviewAggregateSchema = void 0;
var zod_1 = require("zod");
var ReviewOrderByWithRelationInput_schema_1 = require("./objects/ReviewOrderByWithRelationInput.schema");
var ReviewWhereInput_schema_1 = require("./objects/ReviewWhereInput.schema");
var ReviewWhereUniqueInput_schema_1 = require("./objects/ReviewWhereUniqueInput.schema");
var ReviewCountAggregateInput_schema_1 = require("./objects/ReviewCountAggregateInput.schema");
var ReviewMinAggregateInput_schema_1 = require("./objects/ReviewMinAggregateInput.schema");
var ReviewMaxAggregateInput_schema_1 = require("./objects/ReviewMaxAggregateInput.schema");
exports.ReviewAggregateSchema = zod_1.z.object({
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
    _count: zod_1.z
        .union([zod_1.z.literal(true), ReviewCountAggregateInput_schema_1.ReviewCountAggregateInputObjectSchema])
        .optional(),
    _min: ReviewMinAggregateInput_schema_1.ReviewMinAggregateInputObjectSchema.optional(),
    _max: ReviewMaxAggregateInput_schema_1.ReviewMaxAggregateInputObjectSchema.optional()
});

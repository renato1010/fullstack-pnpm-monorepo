"use strict";
exports.__esModule = true;
exports.ReviewUpdateManySchema = void 0;
var zod_1 = require("zod");
var ReviewUpdateManyMutationInput_schema_1 = require("./objects/ReviewUpdateManyMutationInput.schema");
var ReviewWhereInput_schema_1 = require("./objects/ReviewWhereInput.schema");
exports.ReviewUpdateManySchema = zod_1.z.object({
    data: ReviewUpdateManyMutationInput_schema_1.ReviewUpdateManyMutationInputObjectSchema,
    where: ReviewWhereInput_schema_1.ReviewWhereInputObjectSchema.optional()
});

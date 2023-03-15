"use strict";
exports.__esModule = true;
exports.ReviewDeleteManySchema = void 0;
var zod_1 = require("zod");
var ReviewWhereInput_schema_1 = require("./objects/ReviewWhereInput.schema");
exports.ReviewDeleteManySchema = zod_1.z.object({
    where: ReviewWhereInput_schema_1.ReviewWhereInputObjectSchema.optional()
});

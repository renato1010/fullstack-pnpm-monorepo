"use strict";
exports.__esModule = true;
exports.ReviewDeleteOneSchema = void 0;
var zod_1 = require("zod");
var ReviewWhereUniqueInput_schema_1 = require("./objects/ReviewWhereUniqueInput.schema");
exports.ReviewDeleteOneSchema = zod_1.z.object({
    where: ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema
});

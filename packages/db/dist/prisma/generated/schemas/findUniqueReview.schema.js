"use strict";
exports.__esModule = true;
exports.ReviewFindUniqueSchema = void 0;
var zod_1 = require("zod");
var ReviewWhereUniqueInput_schema_1 = require("./objects/ReviewWhereUniqueInput.schema");
exports.ReviewFindUniqueSchema = zod_1.z.object({
    where: ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema
});

"use strict";
exports.__esModule = true;
exports.ReviewUpdateOneSchema = void 0;
var zod_1 = require("zod");
var ReviewUpdateInput_schema_1 = require("./objects/ReviewUpdateInput.schema");
var ReviewUncheckedUpdateInput_schema_1 = require("./objects/ReviewUncheckedUpdateInput.schema");
var ReviewWhereUniqueInput_schema_1 = require("./objects/ReviewWhereUniqueInput.schema");
exports.ReviewUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ReviewUpdateInput_schema_1.ReviewUpdateInputObjectSchema,
        ReviewUncheckedUpdateInput_schema_1.ReviewUncheckedUpdateInputObjectSchema,
    ]),
    where: ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema
});

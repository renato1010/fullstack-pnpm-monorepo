"use strict";
exports.__esModule = true;
exports.ReviewUpdateManyWithWhereWithoutProductInputObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewScalarWhereInput_schema_1 = require("./ReviewScalarWhereInput.schema");
var ReviewUpdateManyMutationInput_schema_1 = require("./ReviewUpdateManyMutationInput.schema");
var ReviewUncheckedUpdateManyWithoutReviewsInput_schema_1 = require("./ReviewUncheckedUpdateManyWithoutReviewsInput.schema");
var Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(function () { return ReviewScalarWhereInput_schema_1.ReviewScalarWhereInputObjectSchema; }),
    data: zod_1.z.union([
        zod_1.z.lazy(function () { return ReviewUpdateManyMutationInput_schema_1.ReviewUpdateManyMutationInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewUncheckedUpdateManyWithoutReviewsInput_schema_1.ReviewUncheckedUpdateManyWithoutReviewsInputObjectSchema; }),
    ])
})
    .strict();
exports.ReviewUpdateManyWithWhereWithoutProductInputObjectSchema = Schema;

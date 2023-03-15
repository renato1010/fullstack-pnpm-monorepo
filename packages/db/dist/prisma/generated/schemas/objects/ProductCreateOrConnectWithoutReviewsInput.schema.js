"use strict";
exports.__esModule = true;
exports.ProductCreateOrConnectWithoutReviewsInputObjectSchema = void 0;
var zod_1 = require("zod");
var ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
var ProductCreateWithoutReviewsInput_schema_1 = require("./ProductCreateWithoutReviewsInput.schema");
var ProductUncheckedCreateWithoutReviewsInput_schema_1 = require("./ProductUncheckedCreateWithoutReviewsInput.schema");
var Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(function () { return ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema; }),
    create: zod_1.z.union([
        zod_1.z.lazy(function () { return ProductCreateWithoutReviewsInput_schema_1.ProductCreateWithoutReviewsInputObjectSchema; }),
        zod_1.z.lazy(function () { return ProductUncheckedCreateWithoutReviewsInput_schema_1.ProductUncheckedCreateWithoutReviewsInputObjectSchema; }),
    ])
})
    .strict();
exports.ProductCreateOrConnectWithoutReviewsInputObjectSchema = Schema;

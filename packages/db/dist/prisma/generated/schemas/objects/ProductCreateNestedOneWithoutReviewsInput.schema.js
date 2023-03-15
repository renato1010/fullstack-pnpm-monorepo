"use strict";
exports.__esModule = true;
exports.ProductCreateNestedOneWithoutReviewsInputObjectSchema = void 0;
var zod_1 = require("zod");
var ProductCreateWithoutReviewsInput_schema_1 = require("./ProductCreateWithoutReviewsInput.schema");
var ProductUncheckedCreateWithoutReviewsInput_schema_1 = require("./ProductUncheckedCreateWithoutReviewsInput.schema");
var ProductCreateOrConnectWithoutReviewsInput_schema_1 = require("./ProductCreateOrConnectWithoutReviewsInput.schema");
var ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
var Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ProductCreateWithoutReviewsInput_schema_1.ProductCreateWithoutReviewsInputObjectSchema; }),
        zod_1.z.lazy(function () { return ProductUncheckedCreateWithoutReviewsInput_schema_1.ProductUncheckedCreateWithoutReviewsInputObjectSchema; }),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .lazy(function () { return ProductCreateOrConnectWithoutReviewsInput_schema_1.ProductCreateOrConnectWithoutReviewsInputObjectSchema; })
        .optional(),
    connect: zod_1.z.lazy(function () { return ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema; }).optional()
})
    .strict();
exports.ProductCreateNestedOneWithoutReviewsInputObjectSchema = Schema;

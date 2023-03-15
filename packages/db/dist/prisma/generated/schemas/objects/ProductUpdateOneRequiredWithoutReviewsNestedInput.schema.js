"use strict";
exports.__esModule = true;
exports.ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema = void 0;
var zod_1 = require("zod");
var ProductCreateWithoutReviewsInput_schema_1 = require("./ProductCreateWithoutReviewsInput.schema");
var ProductUncheckedCreateWithoutReviewsInput_schema_1 = require("./ProductUncheckedCreateWithoutReviewsInput.schema");
var ProductCreateOrConnectWithoutReviewsInput_schema_1 = require("./ProductCreateOrConnectWithoutReviewsInput.schema");
var ProductUpsertWithoutReviewsInput_schema_1 = require("./ProductUpsertWithoutReviewsInput.schema");
var ProductWhereUniqueInput_schema_1 = require("./ProductWhereUniqueInput.schema");
var ProductUpdateWithoutReviewsInput_schema_1 = require("./ProductUpdateWithoutReviewsInput.schema");
var ProductUncheckedUpdateWithoutReviewsInput_schema_1 = require("./ProductUncheckedUpdateWithoutReviewsInput.schema");
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
    upsert: zod_1.z
        .lazy(function () { return ProductUpsertWithoutReviewsInput_schema_1.ProductUpsertWithoutReviewsInputObjectSchema; })
        .optional(),
    connect: zod_1.z.lazy(function () { return ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema; }).optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ProductUpdateWithoutReviewsInput_schema_1.ProductUpdateWithoutReviewsInputObjectSchema; }),
        zod_1.z.lazy(function () { return ProductUncheckedUpdateWithoutReviewsInput_schema_1.ProductUncheckedUpdateWithoutReviewsInputObjectSchema; }),
    ])
        .optional()
})
    .strict();
exports.ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema = Schema;

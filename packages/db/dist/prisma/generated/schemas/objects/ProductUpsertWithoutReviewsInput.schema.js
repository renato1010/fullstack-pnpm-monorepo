"use strict";
exports.__esModule = true;
exports.ProductUpsertWithoutReviewsInputObjectSchema = void 0;
var zod_1 = require("zod");
var ProductUpdateWithoutReviewsInput_schema_1 = require("./ProductUpdateWithoutReviewsInput.schema");
var ProductUncheckedUpdateWithoutReviewsInput_schema_1 = require("./ProductUncheckedUpdateWithoutReviewsInput.schema");
var ProductCreateWithoutReviewsInput_schema_1 = require("./ProductCreateWithoutReviewsInput.schema");
var ProductUncheckedCreateWithoutReviewsInput_schema_1 = require("./ProductUncheckedCreateWithoutReviewsInput.schema");
var Schema = zod_1.z
    .object({
    update: zod_1.z.union([
        zod_1.z.lazy(function () { return ProductUpdateWithoutReviewsInput_schema_1.ProductUpdateWithoutReviewsInputObjectSchema; }),
        zod_1.z.lazy(function () { return ProductUncheckedUpdateWithoutReviewsInput_schema_1.ProductUncheckedUpdateWithoutReviewsInputObjectSchema; }),
    ]),
    create: zod_1.z.union([
        zod_1.z.lazy(function () { return ProductCreateWithoutReviewsInput_schema_1.ProductCreateWithoutReviewsInputObjectSchema; }),
        zod_1.z.lazy(function () { return ProductUncheckedCreateWithoutReviewsInput_schema_1.ProductUncheckedCreateWithoutReviewsInputObjectSchema; }),
    ])
})
    .strict();
exports.ProductUpsertWithoutReviewsInputObjectSchema = Schema;

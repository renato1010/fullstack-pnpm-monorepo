"use strict";
exports.__esModule = true;
exports.ReviewUpdateInputObjectSchema = void 0;
var zod_1 = require("zod");
var StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
var DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
var ProductUpdateOneRequiredWithoutReviewsNestedInput_schema_1 = require("./ProductUpdateOneRequiredWithoutReviewsNestedInput.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(function () { return StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    body: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(function () { return StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    createdAt: zod_1.z
        .union([
        zod_1.z.date(),
        zod_1.z.lazy(function () { return DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    updatedAt: zod_1.z
        .union([
        zod_1.z.date(),
        zod_1.z.lazy(function () { return DateTimeFieldUpdateOperationsInput_schema_1.DateTimeFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    product: zod_1.z
        .lazy(function () { return ProductUpdateOneRequiredWithoutReviewsNestedInput_schema_1.ProductUpdateOneRequiredWithoutReviewsNestedInputObjectSchema; })
        .optional()
})
    .strict();
exports.ReviewUpdateInputObjectSchema = Schema;

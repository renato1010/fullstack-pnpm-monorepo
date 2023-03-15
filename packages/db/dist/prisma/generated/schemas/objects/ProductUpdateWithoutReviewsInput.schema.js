"use strict";
exports.__esModule = true;
exports.ProductUpdateWithoutReviewsInputObjectSchema = void 0;
var zod_1 = require("zod");
var StringFieldUpdateOperationsInput_schema_1 = require("./StringFieldUpdateOperationsInput.schema");
var DateTimeFieldUpdateOperationsInput_schema_1 = require("./DateTimeFieldUpdateOperationsInput.schema");
var Schema = zod_1.z
    .object({
    id: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(function () { return StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    name: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(function () { return StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    description: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(function () { return StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    department: zod_1.z
        .union([
        zod_1.z.string(),
        zod_1.z.lazy(function () { return StringFieldUpdateOperationsInput_schema_1.StringFieldUpdateOperationsInputObjectSchema; }),
    ])
        .optional(),
    price: zod_1.z
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
        .optional()
})
    .strict();
exports.ProductUpdateWithoutReviewsInputObjectSchema = Schema;

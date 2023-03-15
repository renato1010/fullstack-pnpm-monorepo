"use strict";
exports.__esModule = true;
exports.ReviewCreateManyProductInputEnvelopeObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewCreateManyProductInput_schema_1 = require("./ReviewCreateManyProductInput.schema");
var Schema = zod_1.z
    .object({
    data: zod_1.z.union([
        zod_1.z.lazy(function () { return ReviewCreateManyProductInput_schema_1.ReviewCreateManyProductInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewCreateManyProductInput_schema_1.ReviewCreateManyProductInputObjectSchema; }).array(),
    ]),
    skipDuplicates: zod_1.z.boolean().optional()
})
    .strict();
exports.ReviewCreateManyProductInputEnvelopeObjectSchema = Schema;

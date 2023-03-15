"use strict";
exports.__esModule = true;
exports.ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewCreateWithoutProductInput_schema_1 = require("./ReviewCreateWithoutProductInput.schema");
var ReviewUncheckedCreateWithoutProductInput_schema_1 = require("./ReviewUncheckedCreateWithoutProductInput.schema");
var ReviewCreateOrConnectWithoutProductInput_schema_1 = require("./ReviewCreateOrConnectWithoutProductInput.schema");
var ReviewCreateManyProductInputEnvelope_schema_1 = require("./ReviewCreateManyProductInputEnvelope.schema");
var ReviewWhereUniqueInput_schema_1 = require("./ReviewWhereUniqueInput.schema");
var Schema = zod_1.z
    .object({
    create: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewCreateWithoutProductInput_schema_1.ReviewCreateWithoutProductInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewCreateWithoutProductInput_schema_1.ReviewCreateWithoutProductInputObjectSchema; }).array(),
        zod_1.z.lazy(function () { return ReviewUncheckedCreateWithoutProductInput_schema_1.ReviewUncheckedCreateWithoutProductInputObjectSchema; }),
        zod_1.z
            .lazy(function () { return ReviewUncheckedCreateWithoutProductInput_schema_1.ReviewUncheckedCreateWithoutProductInputObjectSchema; })
            .array(),
    ])
        .optional(),
    connectOrCreate: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewCreateOrConnectWithoutProductInput_schema_1.ReviewCreateOrConnectWithoutProductInputObjectSchema; }),
        zod_1.z
            .lazy(function () { return ReviewCreateOrConnectWithoutProductInput_schema_1.ReviewCreateOrConnectWithoutProductInputObjectSchema; })
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(function () { return ReviewCreateManyProductInputEnvelope_schema_1.ReviewCreateManyProductInputEnvelopeObjectSchema; })
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }).array(),
    ])
        .optional()
})
    .strict();
exports.ReviewUncheckedCreateNestedManyWithoutProductInputObjectSchema = Schema;

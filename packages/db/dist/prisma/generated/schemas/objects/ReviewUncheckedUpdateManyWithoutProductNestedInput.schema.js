"use strict";
exports.__esModule = true;
exports.ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewCreateWithoutProductInput_schema_1 = require("./ReviewCreateWithoutProductInput.schema");
var ReviewUncheckedCreateWithoutProductInput_schema_1 = require("./ReviewUncheckedCreateWithoutProductInput.schema");
var ReviewCreateOrConnectWithoutProductInput_schema_1 = require("./ReviewCreateOrConnectWithoutProductInput.schema");
var ReviewUpsertWithWhereUniqueWithoutProductInput_schema_1 = require("./ReviewUpsertWithWhereUniqueWithoutProductInput.schema");
var ReviewCreateManyProductInputEnvelope_schema_1 = require("./ReviewCreateManyProductInputEnvelope.schema");
var ReviewWhereUniqueInput_schema_1 = require("./ReviewWhereUniqueInput.schema");
var ReviewUpdateWithWhereUniqueWithoutProductInput_schema_1 = require("./ReviewUpdateWithWhereUniqueWithoutProductInput.schema");
var ReviewUpdateManyWithWhereWithoutProductInput_schema_1 = require("./ReviewUpdateManyWithWhereWithoutProductInput.schema");
var ReviewScalarWhereInput_schema_1 = require("./ReviewScalarWhereInput.schema");
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
    upsert: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewUpsertWithWhereUniqueWithoutProductInput_schema_1.ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema; }),
        zod_1.z
            .lazy(function () { return ReviewUpsertWithWhereUniqueWithoutProductInput_schema_1.ReviewUpsertWithWhereUniqueWithoutProductInputObjectSchema; })
            .array(),
    ])
        .optional(),
    createMany: zod_1.z
        .lazy(function () { return ReviewCreateManyProductInputEnvelope_schema_1.ReviewCreateManyProductInputEnvelopeObjectSchema; })
        .optional(),
    set: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }).array(),
    ])
        .optional(),
    disconnect: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }).array(),
    ])
        .optional(),
    "delete": zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }).array(),
    ])
        .optional(),
    connect: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }).array(),
    ])
        .optional(),
    update: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewUpdateWithWhereUniqueWithoutProductInput_schema_1.ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema; }),
        zod_1.z
            .lazy(function () { return ReviewUpdateWithWhereUniqueWithoutProductInput_schema_1.ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema; })
            .array(),
    ])
        .optional(),
    updateMany: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewUpdateManyWithWhereWithoutProductInput_schema_1.ReviewUpdateManyWithWhereWithoutProductInputObjectSchema; }),
        zod_1.z
            .lazy(function () { return ReviewUpdateManyWithWhereWithoutProductInput_schema_1.ReviewUpdateManyWithWhereWithoutProductInputObjectSchema; })
            .array(),
    ])
        .optional(),
    deleteMany: zod_1.z
        .union([
        zod_1.z.lazy(function () { return ReviewScalarWhereInput_schema_1.ReviewScalarWhereInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewScalarWhereInput_schema_1.ReviewScalarWhereInputObjectSchema; }).array(),
    ])
        .optional()
})
    .strict();
exports.ReviewUncheckedUpdateManyWithoutProductNestedInputObjectSchema = Schema;

"use strict";
exports.__esModule = true;
exports.ReviewCreateOrConnectWithoutProductInputObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewWhereUniqueInput_schema_1 = require("./ReviewWhereUniqueInput.schema");
var ReviewCreateWithoutProductInput_schema_1 = require("./ReviewCreateWithoutProductInput.schema");
var ReviewUncheckedCreateWithoutProductInput_schema_1 = require("./ReviewUncheckedCreateWithoutProductInput.schema");
var Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }),
    create: zod_1.z.union([
        zod_1.z.lazy(function () { return ReviewCreateWithoutProductInput_schema_1.ReviewCreateWithoutProductInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewUncheckedCreateWithoutProductInput_schema_1.ReviewUncheckedCreateWithoutProductInputObjectSchema; }),
    ])
})
    .strict();
exports.ReviewCreateOrConnectWithoutProductInputObjectSchema = Schema;

"use strict";
exports.__esModule = true;
exports.ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewWhereUniqueInput_schema_1 = require("./ReviewWhereUniqueInput.schema");
var ReviewUpdateWithoutProductInput_schema_1 = require("./ReviewUpdateWithoutProductInput.schema");
var ReviewUncheckedUpdateWithoutProductInput_schema_1 = require("./ReviewUncheckedUpdateWithoutProductInput.schema");
var Schema = zod_1.z
    .object({
    where: zod_1.z.lazy(function () { return ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema; }),
    data: zod_1.z.union([
        zod_1.z.lazy(function () { return ReviewUpdateWithoutProductInput_schema_1.ReviewUpdateWithoutProductInputObjectSchema; }),
        zod_1.z.lazy(function () { return ReviewUncheckedUpdateWithoutProductInput_schema_1.ReviewUncheckedUpdateWithoutProductInputObjectSchema; }),
    ])
})
    .strict();
exports.ReviewUpdateWithWhereUniqueWithoutProductInputObjectSchema = Schema;

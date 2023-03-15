"use strict";
exports.__esModule = true;
exports.NestedDateTimeFilterObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    equals: zod_1.z.date().optional(),
    "in": zod_1.z.date().array().optional(),
    notIn: zod_1.z.date().array().optional(),
    lt: zod_1.z.date().optional(),
    lte: zod_1.z.date().optional(),
    gt: zod_1.z.date().optional(),
    gte: zod_1.z.date().optional(),
    not: zod_1.z
        .union([zod_1.z.date(), zod_1.z.lazy(function () { return exports.NestedDateTimeFilterObjectSchema; })])
        .optional()
})
    .strict();
exports.NestedDateTimeFilterObjectSchema = Schema;

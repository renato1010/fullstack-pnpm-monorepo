"use strict";
exports.__esModule = true;
exports.NestedIntFilterObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    equals: zod_1.z.number().optional(),
    "in": zod_1.z.number().array().optional(),
    notIn: zod_1.z.number().array().optional(),
    lt: zod_1.z.number().optional(),
    lte: zod_1.z.number().optional(),
    gt: zod_1.z.number().optional(),
    gte: zod_1.z.number().optional(),
    not: zod_1.z
        .union([zod_1.z.number(), zod_1.z.lazy(function () { return exports.NestedIntFilterObjectSchema; })])
        .optional()
})
    .strict();
exports.NestedIntFilterObjectSchema = Schema;

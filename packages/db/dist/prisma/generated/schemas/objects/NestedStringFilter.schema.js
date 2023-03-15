"use strict";
exports.__esModule = true;
exports.NestedStringFilterObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    equals: zod_1.z.string().optional(),
    "in": zod_1.z.string().array().optional(),
    notIn: zod_1.z.string().array().optional(),
    lt: zod_1.z.string().optional(),
    lte: zod_1.z.string().optional(),
    gt: zod_1.z.string().optional(),
    gte: zod_1.z.string().optional(),
    contains: zod_1.z.string().optional(),
    startsWith: zod_1.z.string().optional(),
    endsWith: zod_1.z.string().optional(),
    not: zod_1.z
        .union([zod_1.z.string(), zod_1.z.lazy(function () { return exports.NestedStringFilterObjectSchema; })])
        .optional()
})
    .strict();
exports.NestedStringFilterObjectSchema = Schema;

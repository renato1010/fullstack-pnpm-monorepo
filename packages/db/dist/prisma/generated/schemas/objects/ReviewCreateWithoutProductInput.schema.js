"use strict";
exports.__esModule = true;
exports.ReviewCreateWithoutProductInputObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    body: zod_1.z.string(),
    createdAt: zod_1.z.date().optional(),
    updatedAt: zod_1.z.date().optional()
})
    .strict();
exports.ReviewCreateWithoutProductInputObjectSchema = Schema;

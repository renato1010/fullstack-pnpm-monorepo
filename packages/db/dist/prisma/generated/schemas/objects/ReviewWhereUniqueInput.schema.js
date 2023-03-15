"use strict";
exports.__esModule = true;
exports.ReviewWhereUniqueInputObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    id: zod_1.z.string().optional()
})
    .strict();
exports.ReviewWhereUniqueInputObjectSchema = Schema;

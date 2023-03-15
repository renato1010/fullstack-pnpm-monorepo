"use strict";
exports.__esModule = true;
exports.ReviewListRelationFilterObjectSchema = void 0;
var zod_1 = require("zod");
var ReviewWhereInput_schema_1 = require("./ReviewWhereInput.schema");
var Schema = zod_1.z
    .object({
    every: zod_1.z.lazy(function () { return ReviewWhereInput_schema_1.ReviewWhereInputObjectSchema; }).optional(),
    some: zod_1.z.lazy(function () { return ReviewWhereInput_schema_1.ReviewWhereInputObjectSchema; }).optional(),
    none: zod_1.z.lazy(function () { return ReviewWhereInput_schema_1.ReviewWhereInputObjectSchema; }).optional()
})
    .strict();
exports.ReviewListRelationFilterObjectSchema = Schema;

"use strict";
exports.__esModule = true;
exports.ProductRelationFilterObjectSchema = void 0;
var zod_1 = require("zod");
var ProductWhereInput_schema_1 = require("./ProductWhereInput.schema");
var Schema = zod_1.z
    .object({
    is: zod_1.z.lazy(function () { return ProductWhereInput_schema_1.ProductWhereInputObjectSchema; }).optional(),
    isNot: zod_1.z.lazy(function () { return ProductWhereInput_schema_1.ProductWhereInputObjectSchema; }).optional()
})
    .strict();
exports.ProductRelationFilterObjectSchema = Schema;

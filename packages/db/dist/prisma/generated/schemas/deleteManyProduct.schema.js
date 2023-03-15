"use strict";
exports.__esModule = true;
exports.ProductDeleteManySchema = void 0;
var zod_1 = require("zod");
var ProductWhereInput_schema_1 = require("./objects/ProductWhereInput.schema");
exports.ProductDeleteManySchema = zod_1.z.object({
    where: ProductWhereInput_schema_1.ProductWhereInputObjectSchema.optional()
});

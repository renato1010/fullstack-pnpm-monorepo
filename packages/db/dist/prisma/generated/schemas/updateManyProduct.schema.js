"use strict";
exports.__esModule = true;
exports.ProductUpdateManySchema = void 0;
var zod_1 = require("zod");
var ProductUpdateManyMutationInput_schema_1 = require("./objects/ProductUpdateManyMutationInput.schema");
var ProductWhereInput_schema_1 = require("./objects/ProductWhereInput.schema");
exports.ProductUpdateManySchema = zod_1.z.object({
    data: ProductUpdateManyMutationInput_schema_1.ProductUpdateManyMutationInputObjectSchema,
    where: ProductWhereInput_schema_1.ProductWhereInputObjectSchema.optional()
});

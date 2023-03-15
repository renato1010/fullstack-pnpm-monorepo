"use strict";
exports.__esModule = true;
exports.ProductUpdateOneSchema = void 0;
var zod_1 = require("zod");
var ProductUpdateInput_schema_1 = require("./objects/ProductUpdateInput.schema");
var ProductUncheckedUpdateInput_schema_1 = require("./objects/ProductUncheckedUpdateInput.schema");
var ProductWhereUniqueInput_schema_1 = require("./objects/ProductWhereUniqueInput.schema");
exports.ProductUpdateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ProductUpdateInput_schema_1.ProductUpdateInputObjectSchema,
        ProductUncheckedUpdateInput_schema_1.ProductUncheckedUpdateInputObjectSchema,
    ]),
    where: ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema
});

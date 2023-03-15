"use strict";
exports.__esModule = true;
exports.ProductFindUniqueSchema = void 0;
var zod_1 = require("zod");
var ProductWhereUniqueInput_schema_1 = require("./objects/ProductWhereUniqueInput.schema");
exports.ProductFindUniqueSchema = zod_1.z.object({
    where: ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema
});

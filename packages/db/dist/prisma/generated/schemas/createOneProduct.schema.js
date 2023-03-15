"use strict";
exports.__esModule = true;
exports.ProductCreateOneSchema = void 0;
var zod_1 = require("zod");
var ProductCreateInput_schema_1 = require("./objects/ProductCreateInput.schema");
var ProductUncheckedCreateInput_schema_1 = require("./objects/ProductUncheckedCreateInput.schema");
exports.ProductCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ProductCreateInput_schema_1.ProductCreateInputObjectSchema,
        ProductUncheckedCreateInput_schema_1.ProductUncheckedCreateInputObjectSchema,
    ])
});

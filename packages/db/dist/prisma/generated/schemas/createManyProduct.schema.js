"use strict";
exports.__esModule = true;
exports.ProductCreateManySchema = void 0;
var zod_1 = require("zod");
var ProductCreateManyInput_schema_1 = require("./objects/ProductCreateManyInput.schema");
exports.ProductCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        ProductCreateManyInput_schema_1.ProductCreateManyInputObjectSchema,
        zod_1.z.array(ProductCreateManyInput_schema_1.ProductCreateManyInputObjectSchema),
    ])
});

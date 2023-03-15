"use strict";
exports.__esModule = true;
exports.ProductUpsertSchema = void 0;
var zod_1 = require("zod");
var ProductWhereUniqueInput_schema_1 = require("./objects/ProductWhereUniqueInput.schema");
var ProductCreateInput_schema_1 = require("./objects/ProductCreateInput.schema");
var ProductUncheckedCreateInput_schema_1 = require("./objects/ProductUncheckedCreateInput.schema");
var ProductUpdateInput_schema_1 = require("./objects/ProductUpdateInput.schema");
var ProductUncheckedUpdateInput_schema_1 = require("./objects/ProductUncheckedUpdateInput.schema");
exports.ProductUpsertSchema = zod_1.z.object({
    where: ProductWhereUniqueInput_schema_1.ProductWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        ProductCreateInput_schema_1.ProductCreateInputObjectSchema,
        ProductUncheckedCreateInput_schema_1.ProductUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        ProductUpdateInput_schema_1.ProductUpdateInputObjectSchema,
        ProductUncheckedUpdateInput_schema_1.ProductUncheckedUpdateInputObjectSchema,
    ])
});

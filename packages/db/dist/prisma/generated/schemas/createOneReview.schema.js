"use strict";
exports.__esModule = true;
exports.ReviewCreateOneSchema = void 0;
var zod_1 = require("zod");
var ReviewCreateInput_schema_1 = require("./objects/ReviewCreateInput.schema");
var ReviewUncheckedCreateInput_schema_1 = require("./objects/ReviewUncheckedCreateInput.schema");
exports.ReviewCreateOneSchema = zod_1.z.object({
    data: zod_1.z.union([
        ReviewCreateInput_schema_1.ReviewCreateInputObjectSchema,
        ReviewUncheckedCreateInput_schema_1.ReviewUncheckedCreateInputObjectSchema,
    ])
});

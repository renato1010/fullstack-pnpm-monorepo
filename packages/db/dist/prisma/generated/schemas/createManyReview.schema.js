"use strict";
exports.__esModule = true;
exports.ReviewCreateManySchema = void 0;
var zod_1 = require("zod");
var ReviewCreateManyInput_schema_1 = require("./objects/ReviewCreateManyInput.schema");
exports.ReviewCreateManySchema = zod_1.z.object({
    data: zod_1.z.union([
        ReviewCreateManyInput_schema_1.ReviewCreateManyInputObjectSchema,
        zod_1.z.array(ReviewCreateManyInput_schema_1.ReviewCreateManyInputObjectSchema),
    ])
});

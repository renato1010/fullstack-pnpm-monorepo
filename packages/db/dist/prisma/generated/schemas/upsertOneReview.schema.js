"use strict";
exports.__esModule = true;
exports.ReviewUpsertSchema = void 0;
var zod_1 = require("zod");
var ReviewWhereUniqueInput_schema_1 = require("./objects/ReviewWhereUniqueInput.schema");
var ReviewCreateInput_schema_1 = require("./objects/ReviewCreateInput.schema");
var ReviewUncheckedCreateInput_schema_1 = require("./objects/ReviewUncheckedCreateInput.schema");
var ReviewUpdateInput_schema_1 = require("./objects/ReviewUpdateInput.schema");
var ReviewUncheckedUpdateInput_schema_1 = require("./objects/ReviewUncheckedUpdateInput.schema");
exports.ReviewUpsertSchema = zod_1.z.object({
    where: ReviewWhereUniqueInput_schema_1.ReviewWhereUniqueInputObjectSchema,
    create: zod_1.z.union([
        ReviewCreateInput_schema_1.ReviewCreateInputObjectSchema,
        ReviewUncheckedCreateInput_schema_1.ReviewUncheckedCreateInputObjectSchema,
    ]),
    update: zod_1.z.union([
        ReviewUpdateInput_schema_1.ReviewUpdateInputObjectSchema,
        ReviewUncheckedUpdateInput_schema_1.ReviewUncheckedUpdateInputObjectSchema,
    ])
});

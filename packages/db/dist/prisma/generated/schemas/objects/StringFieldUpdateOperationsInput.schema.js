"use strict";
exports.__esModule = true;
exports.StringFieldUpdateOperationsInputObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    set: zod_1.z.string().optional()
})
    .strict();
exports.StringFieldUpdateOperationsInputObjectSchema = Schema;

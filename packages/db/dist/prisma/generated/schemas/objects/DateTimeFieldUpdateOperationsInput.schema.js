"use strict";
exports.__esModule = true;
exports.DateTimeFieldUpdateOperationsInputObjectSchema = void 0;
var zod_1 = require("zod");
var Schema = zod_1.z
    .object({
    set: zod_1.z.date().optional()
})
    .strict();
exports.DateTimeFieldUpdateOperationsInputObjectSchema = Schema;

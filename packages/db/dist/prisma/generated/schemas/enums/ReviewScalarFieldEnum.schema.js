"use strict";
exports.__esModule = true;
exports.ReviewScalarFieldEnumSchema = void 0;
var zod_1 = require("zod");
exports.ReviewScalarFieldEnumSchema = zod_1.z["enum"]([
    'id',
    'body',
    'productId',
    'createdAt',
    'updatedAt',
]);

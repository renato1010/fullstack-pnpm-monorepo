"use strict";
exports.__esModule = true;
exports.ProductScalarFieldEnumSchema = void 0;
var zod_1 = require("zod");
exports.ProductScalarFieldEnumSchema = zod_1.z["enum"]([
    'id',
    'name',
    'description',
    'department',
    'price',
    'createdAt',
    'updatedAt',
]);

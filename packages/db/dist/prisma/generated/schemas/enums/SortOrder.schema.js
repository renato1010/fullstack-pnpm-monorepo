"use strict";
exports.__esModule = true;
exports.SortOrderSchema = void 0;
var zod_1 = require("zod");
exports.SortOrderSchema = zod_1.z["enum"](['asc', 'desc']);

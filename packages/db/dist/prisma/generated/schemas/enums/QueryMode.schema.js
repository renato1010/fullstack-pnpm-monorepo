"use strict";
exports.__esModule = true;
exports.QueryModeSchema = void 0;
var zod_1 = require("zod");
exports.QueryModeSchema = zod_1.z["enum"](['default', 'insensitive']);

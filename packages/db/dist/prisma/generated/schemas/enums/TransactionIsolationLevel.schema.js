"use strict";
exports.__esModule = true;
exports.TransactionIsolationLevelSchema = void 0;
var zod_1 = require("zod");
exports.TransactionIsolationLevelSchema = zod_1.z["enum"]([
    'ReadUncommitted',
    'ReadCommitted',
    'RepeatableRead',
    'Serializable',
]);

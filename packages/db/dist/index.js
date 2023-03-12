"use strict";
exports.__esModule = true;
exports.Prisma = exports.prisma = void 0;
var client_1 = require("@prisma/client");
exports.Prisma = client_1.Prisma;
var prisma = new client_1.PrismaClient();
exports.prisma = prisma;

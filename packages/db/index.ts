import { PrismaClient, Prisma, Product, Review } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma, Prisma, Product, Review };
export * from "./prisma/generated/schemas"

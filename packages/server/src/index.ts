import express, { Request, Response } from "express";
import { json as jsonParser } from "body-parser";
import cors from "cors";
import { prisma, ProductCreateInputObjectSchema } from "@fullstackdemo/db";
import type { GetTodosResponse } from "@lib/types/todos";
import data from "./data/todos.json";

const app = express();
const port = 4000;

// json req body
app.use(jsonParser());
// enable cors so client can use this API
app.use(cors());

app.get("/todos", (_: Request, res: Response) => {
  const { data: todoList } = data;
  const response: GetTodosResponse = { todoList };
  res.status(200).json({ data: response });
});

app.get("/products", async (_, res: Response) => {
  try {
    const products = await prisma.product.findMany({ include: { reviews: true } });
    res.status(200).json({ data: products, ok: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error reading products", status: 500 });
  }
});
app.post("/products", async (req: Request, res: Response) => {
  const { body } = req;
  // validate body data
  const result = ProductCreateInputObjectSchema.safeParse(body);
  if (!result.success) {
    // handle error
    console.log({ schemaError: result.error.message });
    res.status(400).json({ ok: false, status: 400, message: "Bad request" });
  } else {
    const productCreateInput = result.data;
    const createProductRes = await prisma.product.create({ data: productCreateInput });
    res.status(201).json({ data: createProductRes, ok: true });
  }
});

app.listen(port, () => {
  console.log(`backend running on port ${port}`);
});

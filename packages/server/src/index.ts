import express, { Request, Response } from "express";
import { json as jsonParser } from "body-parser";
import cors from "cors";
import { prisma } from "@fullstackdemo/db";
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
    res.status(200).json({ data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error reading products" });
  }
});

app.listen(port, () => {
  console.log(`backend running on port ${port}`);
});

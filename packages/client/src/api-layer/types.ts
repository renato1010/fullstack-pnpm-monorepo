import { Product } from "@fullstackdemo/db";

type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";
type ClientProduct = Omit<Product, "id">;

export type { ApiStatus, ClientProduct };

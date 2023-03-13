import { Product, Review } from "@fullstackdemo/db";

type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";
type ClientProduct = Omit<Product, "id">;
type ProductsWReviews = (Product & {
  reviews: Review[];
})[];

export type { ApiStatus, ClientProduct, ProductsWReviews };

import { Product, Review } from "@fullstackdemo/db";

type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";
type ClientProduct = Omit<Product, "id">;
type ProductsWReviews = (Product & {
  reviews: Review[];
})[];
type SaveProductFormData = {
  name: string;
  description: string;
  department: string;
  price: string;
};

export type { ApiStatus, ClientProduct, ProductsWReviews, SaveProductFormData, Product };

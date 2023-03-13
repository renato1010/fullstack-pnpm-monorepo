"use client";
import { useGetProducts } from "@api";
import { ProductCard } from "./ProductCard";

export default function Products() {
  const { products, status } = useGetProducts();
  if (status === "ERROR") {
    return <p>Error fetching products</p>;
  } else if (status === "IDLE" || status === "PENDING") {
    return <p>Loading products...</p>;
  } else {
    return (
      <article>
        <h2 className="text-center text-xl font-bold py-6">Products</h2>
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </article>
    );
  }
}

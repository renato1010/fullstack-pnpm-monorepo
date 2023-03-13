"use client";

import { useGetProducts } from "@api";

export default function Products() {
  const { products, status } = useGetProducts();
  if (status === "ERROR") {
    return <p>Error fetching products</p>;
  } else if (status === "IDLE" || status === "PENDING") {
    return <p>Loading products...</p>;
  } else {
    return (
      <div style={{ height: "100vh" }}>
        <h2>Products</h2>
        <ul>
          {products.map((p, idx) => (
            <li key={p.id} style={{ padding: 4 }}>
              <p style={{ fontWeight: "bolder" }}>{p.name}</p>
              <p>{p.description}</p>
              <p>$ {p.price}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

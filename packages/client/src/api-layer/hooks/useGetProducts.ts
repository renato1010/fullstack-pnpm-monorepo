import { useEffect, useState } from "react";
import { ApiStatus, ProductsWReviews, hasError } from "@api";
import { api } from "../fetch.api";
import { baseUrl } from "../utils";

type TResponse = { data: ProductsWReviews; ok: boolean };
const useGetProducts = () => {
  const [products, setProducts] = useState<ProductsWReviews>([]);
  const [status, setStatus] = useState<ApiStatus>("IDLE");

  const initFetchProducs = async () => {
    setStatus("PENDING");
    try {
      const response = await api.get<TResponse>(`${baseUrl}/products`);
      if (hasError<TResponse>(response)) {
        setStatus("ERROR");
      } else {
        setProducts(response.data);
        setStatus("SUCCESS");
      }
    } catch {
      setStatus("ERROR");
    }
  };
  useEffect(() => {
    initFetchProducs();
  }, []);
  return { products, status };
};

export { useGetProducts };

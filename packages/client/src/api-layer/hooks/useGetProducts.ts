import { useEffect, useState } from "react";
import { ApiStatus, ProductsWReviews } from "@api";
import { api } from "../fetch.api";
import { TErrorResponse } from "../fetch-wrapper";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const hasError = (res: { data: ProductsWReviews } | TErrorResponse): res is TErrorResponse => {
  return "ok" in res && !res.ok;
};


const useGetProducts = () => {
  const [products, setProducts] = useState<ProductsWReviews>([]);
  const [status, setStatus] = useState<ApiStatus>("IDLE");

  const initFetchProducs = async () => {
    setStatus("PENDING");
    try {
      const response = await api.get<{ data: ProductsWReviews }>(`${baseUrl}/products`);
      if (hasError(response)) {
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

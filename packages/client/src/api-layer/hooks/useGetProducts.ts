import { useEffect, useState } from "react";
import { ApiStatus } from "../types";
import { api } from "../fetch.api";
import { TErrorResponse } from "../fetch-wrapper";
import { Product } from "@fullstackdemo/db";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const hasError = (res: { data: Product[] } | TErrorResponse): res is TErrorResponse => {
  return "ok" in res && !res.ok;
};

const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<ApiStatus>("IDLE");

  const initFetchProducs = async () => {
    setStatus("PENDING");
    try {
      const response = await api.get<{ data: Product[] }>(`${baseUrl}/products`);
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

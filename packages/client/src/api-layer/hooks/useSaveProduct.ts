import { useState } from "react";
import { ApiStatus, SaveProductFormData, api, Product, baseUrl, hasError } from "@api";

type TResponse = { data: Product; ok: boolean };
const useSaveProduct = () => {
  const [status, setStatus] = useState<ApiStatus>("IDLE");
  const [data, setData] = useState<Product | undefined>(undefined);

  const saveProduct = async (data: SaveProductFormData) => {
    setStatus("PENDING");
    try {
      const respose = await api.post<SaveProductFormData, TResponse>(`${baseUrl}/products`, data);
      if (hasError<TResponse>(respose)) {
        setStatus("ERROR");
      } else {
        setData(respose.data);
        setStatus("SUCCESS");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return { data, status, saveProduct };
};

export { useSaveProduct };

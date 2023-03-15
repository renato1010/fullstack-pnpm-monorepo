import { TErrorResponse } from "./fetch-wrapper";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const hasError = <TResponse extends { ok: boolean }>(
  res: TResponse | TErrorResponse
): res is TErrorResponse => {
  return "ok" in res && !res.ok;
};

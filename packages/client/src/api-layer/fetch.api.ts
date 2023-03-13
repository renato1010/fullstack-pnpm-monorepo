import { request } from "./fetch-wrapper";

const api = {
  get: <TResponse>(url: string) => request<TResponse>(url),
  post: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "POST", body }),
  delete: <TResponse>(url: string) => request<TResponse>(url, { method: "DELETE" }),
  patch: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "PATCH", body }),
  put: <TBody extends BodyInit, TResponse>(url: string, body: TBody) =>
    request<TResponse>(url, { method: "PUT", body }),
};

export { api };

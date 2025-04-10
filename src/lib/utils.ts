import { ApiResponse } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
//custom function to api request
const resolveEndpoint = (
  endpoint: string | ((...args: (string | number)[]) => string),
  ...args: (string | number)[]
): string => {
  return typeof endpoint === "function" ? endpoint(...args) : endpoint;
};

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type HeadersType = Record<string, string>;

interface ApiRequestCallbacks<T> {
  onSuccess?: (data: T, message: string) => void;
  onError?: (error: string, status?: number) => void;
  onFinally?: () => void;
}

export async function apiRequestWithCallbacks<T>(
  method: HttpMethod = "GET",
  endpoint: string | ((...args: (string | number)[]) => string),
  body?: unknown,
  callbacks?: ApiRequestCallbacks<T>,
  headers: HeadersType = {}
): Promise<void> {
  try {
    const url = resolveEndpoint(endpoint);

    const isFormData =
      typeof FormData !== "undefined" && body instanceof FormData;

    const fetchOptions: RequestInit = {
      method,
      headers: {
        ...(!isFormData && body ? { "Content-Type": "application/json" } : {}),
        ...headers,
      },
      ...(body
        ? {
            body: isFormData ? (body as FormData) : JSON.stringify(body),
          }
        : {}),
    };

    const response = await fetch(url, fetchOptions);

    const contentType = response.headers.get("Content-Type");
    const isJson = contentType && contentType.includes("application/json");
    const data: ApiResponse<T> = isJson
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      callbacks?.onError?.(
        data?.error || data?.message || response.statusText,
        response.status
      );
      return;
    }

    callbacks?.onSuccess?.(data.data as T, data?.message || "");
  } catch (error) {
    callbacks?.onError?.((error as Error).message || "Unknown error");
  } finally {
    callbacks?.onFinally?.();
  }
}

export async function apiRequest<T>(
  method: HttpMethod = "GET",
  endpoint: string | ((...args: (string | number)[]) => string),
  body?: unknown,
  headers: HeadersType = {},
  signal?: AbortSignal,
  ...args: (string | number)[]
): Promise<ApiResponse<T>> {
  const url = resolveEndpoint(endpoint, ...args);

  const isFormData =
    typeof FormData !== "undefined" && body instanceof FormData;

  const fetchOptions: RequestInit = {
    method,
    headers: {
      ...(!isFormData && body ? { "Content-Type": "application/json" } : {}),
      ...headers,
    },
    signal,
    ...(body
      ? {
          body: isFormData ? (body as FormData) : JSON.stringify(body),
        }
      : {}),
  };

  try {
    const response = await fetch(url, fetchOptions);

    const contentType = response.headers.get("Content-Type");
    const isJson = contentType && contentType.includes("application/json");

    const data: ApiResponse<T> = isJson
      ? await response.json()
      : await response.text();
    if (!response.ok) {
      throw new Error(data.error || data.message || "Network Error");
    }
    return data;
  } catch (error) {
    throw new Error((error as Error).message || "Network Error");
  }
}

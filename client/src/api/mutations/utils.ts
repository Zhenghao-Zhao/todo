import { isAxiosError } from "axios";

export interface ApiError {
  message: string;
  code: number;
}

export const handleError = (e: unknown): ApiError => {
  if (isAxiosError(e)) {
    return {
      message: e.response?.data.message || "An error occurred",
      code: e.response?.status || 500,
    };
  }

  return {
    message: "An unexpected error occurred",
    code: 500,
  };
};

export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
};

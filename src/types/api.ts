export type ApiResponse<T = null> = {
  success: boolean;
  statusCode: number;
  message: string;
  error?: string;
  data: T | null;
};

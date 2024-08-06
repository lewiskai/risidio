export interface APIResponse<T> {
    response: string;
    data: T;
    code: number;
    message?: string;
  }
import axios from "axios";

export type ApiResponse<T = undefined> = {
  status: boolean;
  message: string;
  data: T extends undefined ? undefined : T;
  meta?: {
    total: number;
    perPage: number;
    totalPages: number;
    page: number;
  };
};

export const BASE_URL = "https://ebukabackend-cq9d.onrender.com/api";

export const axios_server = axios.create({ baseURL: BASE_URL });

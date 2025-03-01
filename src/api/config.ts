import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
  headers: {
    "Content-Type": "application/json",
    "x-tenant-id": "basem.com",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIuZWxzaXN5QGdtYWlsLmNvbSIsImlkIjoiNjc4ODBhNjc0MmY0ZWM1YzVmNWY1NGI4IiwiaWF0IjoxNzM2OTcyMzgwLCJleHAiOjE3MzY5NzU5ODB9.9b9_k-5LLJmWgustlgBcu_utKV3jMVKEuXGFQJK50Og",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

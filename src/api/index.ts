import axiosInstance from "./config";

export const get = async (endpoint: string) => {
  const res = await axiosInstance.get(endpoint);
  return res.data;
};

export const post = async (endpoint: string, body: any) => {
  const res = await axiosInstance.post(endpoint, body);
  return res.data;
};

export const edit = async (endpoint: string, body: any) => {
  const res = await axiosInstance.put(endpoint, body);
  return res.data;
};

export const patch = async (endpoint: string, body: any) => {
  const res = await axiosInstance.patch(endpoint, body);
  return res.data;
};

export const deleteItem = async (endpoint: string) => {
  const res = await axiosInstance.delete(endpoint);
  return res.data;
};

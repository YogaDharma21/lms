import { apiInstanceAuth } from "../utils/axios";

export const getCategories = async () =>
    apiInstanceAuth.get("/categories").then((res) => res.data);

export const getCategory = async (id: string) =>
    apiInstanceAuth.get(`/categories/${id}`).then((res) => res.data);

export const createCategory = async (data: any) =>
    apiInstanceAuth.post("/categories", data).then((res) => res.data);

export const updateCategory = async (data: any, id: string) =>
    apiInstanceAuth.put(`/categories/${id}`, data).then((res) => res.data);

export const deleteCategory = async (id: string) =>
    apiInstanceAuth.delete(`/categories/${id}`).then((res) => res.data);
